import "./App.css";
import Homepage from "./Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import { Context } from "./Contexts/Context";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

function App() {
  // States to store the filters that user selects
  const [selGender, setSelGender] = useState("");
  const [selType, setSelType] = useState("");
  const [selLang, setSelLang] = useState([]);
  const [selCountry, setSelCountry] = useState([]);
  // State that contains data to be displayed
  const [data, setData] = useState([]);
  // Library to convery Country code to Country Name
  const lookup = require("country-code-lookup");
  // State to store the inital data fetched from the API
  const [array, setArray] = useState([]);
  // For displaying errors
  const toast = useToast();

  const fetchData = () => {
    // Tries to fetch the data from the API or returns error
    try {
      fetch("http://localhost:8000/database")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Can't fetch data from Database");
        })
        .then((d) => {
          setData(d);
          setArray(d);
        })
        .catch((error) => {
          toast({
            title: "Can't fetch data from Database",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
        });
    } catch (error) {
      toast({
        title: "Can't fetch data from Database",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  useEffect(() => {
    // This will run when the react server is started
    // Used to fetch data from API
    fetchData();
  }, []);

  useEffect(() => {
    // This is fired when the states containing filter selections changes
    let array1 = array;

    if (selGender !== "") {
      let temp = [];
      array1.forEach((ele) => {
        if (ele.gender === selGender) temp.push(ele);
      });
      array1 = temp;
    }

    if (selType !== "") {
      let temp = [];
      array1.forEach((ele) => {
        if (ele.type === selType) temp.push(ele);
      });
      array1 = temp;
    }

    if (selCountry.length > 0) {
      let temp = [];
      array1.forEach((ele) => {
        let country = lookup.byIso(ele.countryCode).country;
        selCountry.forEach((c) => {
          if (c === country) temp.push(ele);
        });
      });
      array1 = temp;
    }

    if (selLang.length > 0) {
      let temp = [];
      array1.forEach((ele) => {
        let language = ele.language;
        selLang.forEach((l) => {
          if (l === language) temp.push(ele);
        });
      });
      array1 = temp;
    }

    // Update the data as per the conditions applied by the user
    setData(array1);
  }, [selGender, selType, selLang, selCountry]);

  return (
    <ChakraProvider>
      <div className="App">
        <Context.Provider
          value={{
            selGender,
            setSelGender,
            selType,
            setSelType,
            selLang,
            setSelLang,
            selCountry,
            setSelCountry,
            data,
            setData,
          }}
        >
          <Homepage />
        </Context.Provider>
      </div>
    </ChakraProvider>
  );
}

export default App;
