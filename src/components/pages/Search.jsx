import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = ({ className }) => {
    let [countries, setCountries] = useState([]);
    let [searchName, setSearchName] = useState("");
    let [searchRegion, setSearchRegion] = useState("");

    const renderCountries = (countries) => {
        if (countries.length !== 0) {
            return countries
                .filter((country) =>
                    country.name
                        .toLowerCase()
                        .includes(searchName.toLowerCase())
                )
                .filter(
                    (country) =>
                        searchRegion === "" || country.region === searchRegion
                )
                .map((country) => (
                    <div className="countries--item">
                        <img src={country.flag} alt={country.name + " flag"} />
                        <div className="countries--item--content">
                            <h2>{country.name}</h2>
                            <div>
                                <strong>Population: </strong>
                                {country.population}
                            </div>
                            <div>
                                <strong>Region:</strong> {country.region}
                            </div>
                            <div>
                                <strong>Capital: </strong> {country.capital}
                            </div>
                        </div>
                    </div>
                ));
        } else {
            return <h2>Loading...</h2>;
        }
    };

    useEffect(() => {
        axios
            .request({
                method: "get",
                url: "https://restcountries.com/v3.1/all",
            })
            .then((response) => {
                const result = [];
                response.data.forEach((country) => {
                    result.push({
                        flag: country.flags.png,
                        name: country.name.common,
                        population: country.population,
                        region: country.region,
                        capital: country.capital,
                        cioc: country.cioc,
                    });
                });
                setCountries(result);
            })
            .catch((response) => {
                console.log("Error! Could not fetch countries!");
                console.log(response);
            });
    }, []);

    return (
        <div className={className}>
            <div className="controls">
                <input
                    className="search-by-name"
                    type="text"
                    id="search-by-name"
                    placeholder="Search for a country..."
                    value={searchName}
                    onChange={(e) => {
                        setSearchName(e.target.value);
                    }}
                />
                <input
                    type="select"
                    list="regions"
                    id="filter-by-region"
                    placeholder="Filter by Region"
                    value={searchRegion}
                    onChange={(e) => {
                        setSearchRegion(e.target.value);
                    }}
                />
                <datalist id="regions">
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </datalist>
            </div>
            <div className="countries">{renderCountries(countries)}</div>
        </div>
    );
};

export default styled(Search)`
    padding: 4% 4%;

    .countries {
        display: flex;
        flex-flow: row wrap;
        gap: 4%;
        justify-content: space-evenly;
    }

    .countries--item {
        margin: 1.75rem 0;
        background-color: #2b3743;
        border-radius: 0.25rem;
    }

    .countries--item--content {
        padding: 1.5rem;
    }

    @media (min-width: 520px) {
        .countries--item {
            flex-basis: 46%;
        }
    }

    @media (min-width: 1080px) {
        .countries--item {
            flex-basis: 22%;
        }
    }

    .countries--item img {
        width: 100%;
        border-radius: 0.25rem 0.25rem 0 0;
        object-fit: cover;
        object-position: center center;
        aspect-ratio: 5 / 3;
    }
`;
