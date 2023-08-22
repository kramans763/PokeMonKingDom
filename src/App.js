import { useEffect, useState } from "react";
import "./styles.css";
import PokeMonCard from "./component/PokeMonCard";

export default function App() {
  const [pokeMonList, setPokeMonList] = useState();
  const [loading, setLoading] = useState(true);

  async function createPokeMonObj(data) {
    let pokeMonList = [];

    const { results = [] } = data;

    for (const pokemon of results) {
      //api call for get full data
      const { url } = pokemon;
      const response = await fetch(url);
      const data = await response.json();
      pokeMonList.push(data[0]); //bcz another array inside data
    }
    setPokeMonList(pokeMonList);
    console.log(pokeMonList);
  }
  async function getAllPokeMon() {
    const url = `https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1`;
    const response = await fetch(url, { method: "get" });
    let data = await response.json();
    data = data[0];
    await createPokeMonObj(data);
    setLoading(false);
    console.log("data debugg", data);
  }
  useEffect(() => {
    getAllPokeMon();
  }, []);

  return (
    <>
      {loading ? (
        <div>Hey there Loading pokemon</div>
      ) : (
        <div className="main-container">
          <div className="heading">
            <h2>PokeMon Kingdom</h2>
          </div>
          <div className="pokemon-container">
            {pokeMonList &&
              pokeMonList.length &&
              pokeMonList.map((item) => {
                const pokemon = item;
                return <PokeMonCard pokemon={pokemon} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}
