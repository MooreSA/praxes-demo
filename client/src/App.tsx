import React, { useEffect } from "react";
import { useState } from "react";
import CarTable from "./components/CarTable";
import BrandFilter from "./components/BrandFilter";
import "./App.css";

function App() {
  const [carData, setCarData] = useState<Car[]>([]);
  const [brandData, setBrandData] = useState<string[]>([]);
  const [filteredBrandData, setFilteredBrandData] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://praxesdemo-default-rtdb.firebaseio.com/brands.json", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          data.forEach((brand: string) => {
            if (brand) {
              setBrandData((prevBrandData) => [...prevBrandData, brand]);
            }
          });
        });
      } else {
        console.log("Error");
      }
    });

    fetch("https://praxesdemo-default-rtdb.firebaseio.com/cars.json", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          data.forEach((car: Car) => {
            if (car) {
              setCarData((prevCarData) => [...prevCarData, car]);
            }
          });
        });
      } else {
        console.log("Error");
      }
    });
  }, []);
  return (
    <>
      <header>Car Demo</header>
      <main>
        <CarTable carData={carData} filteredBrandData={filteredBrandData} />
        <BrandFilter
          brandData={brandData}
          setFilteredBrandData={setFilteredBrandData}
        />
      </main>
      <footer></footer>
    </>
  );
}

export interface Car {
  brand: string;
  model: string;
}

export default App;
