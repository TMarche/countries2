import styled from "styled-components";

const countries = [
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
    {
        flag: "https://flagcdn.com/w320/bg.png",
        name: "Bulgaria",
        population: 6927288,
        region: "Europe",
        capital: "Gaborone",
        cioc: "BUL",
    },
];

const Search = ({ className }) => {
    return (
        <div className={className}>
            <div className="controls">
                <input
                    className="search-by-name"
                    type="text"
                    id="search-by-name"
                    placeholder="Search for a country..."
                />
                <input
                    type="select"
                    list="regions"
                    id="filter-by-region"
                    placeholder="Filter by Region"
                />
                <datalist id="regions">
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </datalist>
            </div>
            <div className="countries">
                {countries.map((country) => (
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
                ))}
            </div>
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
    }
`;
