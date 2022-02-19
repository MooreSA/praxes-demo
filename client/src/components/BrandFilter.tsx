import React from "react";

interface BrandFilterProps {
  brandData: string[];
  setFilteredBrandData: any;
}

const BrandFilter = (props: BrandFilterProps) => {
  return (
    <>
      <h1>Seamus Moore - Tech Demo</h1>
      <h3>Choose the Brands you want to show</h3>
      <div>
        {props.brandData.map((brand: string) => {
          return (
            <label key={brand} className="m-2">
              <input
                type="checkbox"
                value={brand}
                onChange={(e) => {
                  const { checked } = e.target;
                  if (checked) {
                    props.setFilteredBrandData(
                      (prevFilteredBrandData: string[]) => [
                        ...prevFilteredBrandData,
                        brand,
                      ]
                    );
                  } else {
                    props.setFilteredBrandData(
                      (prevFilteredBrandData: string[]) =>
                        prevFilteredBrandData.filter(
                          (prevBrand) => prevBrand !== brand
                        )
                    );
                  }
                }}
              />
              {brand}
            </label>
          );
        })}
      </div>
    </>
  );
};

export default BrandFilter;
