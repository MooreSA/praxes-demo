import React from "react";
import { Car } from "../App";

interface CarTableProps {
  carData: Car[];
  filteredBrandData: string[];
}

const CarTable = (props: CarTableProps) => {
  const { carData } = props;
  return (
    <div>
      <h1>Car Table</h1>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((car: Car) => {
            if (props.filteredBrandData.includes(car.brand)) {
              return (
                <tr key={car.model}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;
