import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.emoji} />;
      })}
    </ul>
  );

  // const countriesUnique = new Set(
  //   cities.map((city) =>
  //     JSON.stringify({ country: city.country, emoji: city.emoji })
  //   )
  // );
  // const countries = [...countriesUnique].map((each) => JSON.parse(each));

  // return (
  //   <ul className={styles.countryList}>
  //     {countries.map((country) => {
  //       return <CountryItem country={country} key={country.emoji} />;
  //     })}
  //   </ul>
  // );
}

export default CountryList;
