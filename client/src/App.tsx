import React, { useEffect } from "react";
import { useState } from "react";
import CarTable from "./components/CarTable";
import BrandFilter from "./components/BrandFilter";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [carData, setCarData] = useState<Car[]>([]);
  const [brandData, setBrandData] = useState<string[]>([]);
  const [filteredBrandData, setFilteredBrandData] = useState<string[]>([]);

  useEffect(() => {
    if (!brandData.length) {
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
    }
    if (!carData.length) {
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
    }
  }, []);
  return (
    <>
      <main className="min-vh-100 container-md d-flex flex-column justify-content-center align-items-center">
        <BrandFilter
          brandData={brandData}
          setFilteredBrandData={setFilteredBrandData}
        />
        <CarTable carData={carData} filteredBrandData={filteredBrandData} />
      </main>
    </>
  );
}

export interface Car {
  brand: string;
  model: string;
}

export default App;
