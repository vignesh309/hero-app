import { useState } from "react";
import "./App.css";
import heroImage from "./assets/hero_image.svg";

interface Hero {
  id: number;
  heroName: string;
  heroPower: string;
  heroUniverse: string;
  heroWeapon: string;
  heroWeakness: string;
}

function App() {
  const [heroName, setHeroName] = useState<string>("");
  const [heroPower, setHeroPower] = useState<string>("");
  const [heroUniverse, setHeroUniverse] = useState<string>("");
  const [heroWeapon, setHeroWeapon] = useState<string>("");
  const [heroWeakness, setHeroWeakness] = useState<string>("");

  const [heroes, setHeroes] = useState<Hero[]>([]);

  const handleSetHeroes = () => {
    if (
      heroName.trim() &&
      heroPower.trim() &&
      heroUniverse.trim() &&
      heroWeapon.trim() &&
      heroWeakness.trim()
    ) {
      setHeroes([
        ...heroes,
        {
          id: Date.now(),
          heroName: heroName,
          heroPower: heroPower,
          heroUniverse: heroUniverse,
          heroWeapon: heroWeapon,
          heroWeakness: heroWeakness,
        },
      ]);
      setHeroName("");
      setHeroPower("");
      setHeroUniverse("");
      setHeroWeapon("");
      setHeroWeakness("");
    } else {
      alert("Please fill all the fields before adding a hero!");
    }
  };
  const handleDelete = (id: number) => {
    setHeroes(heroes.filter((hero) => hero.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center mb-4">Hero Creator</h1>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Hero Name</label>
            <input
              type="text"
              className="form-control"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
              placeholder="Enter Hero name here"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Hero Power</label>
            <input
              type="text"
              className="form-control"
              value={heroPower}
              onChange={(e) => setHeroPower(e.target.value)}
              placeholder="Enter Hero power here"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Hero Weapon</label>
            <input
              type="text"
              className="form-control"
              value={heroWeapon}
              onChange={(e) => setHeroWeapon(e.target.value)}
              placeholder="Enter Hero Weapon here"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Hero Universe</label>
            <input
              type="text"
              className="form-control"
              value={heroUniverse}
              onChange={(e) => setHeroUniverse(e.target.value)}
              placeholder="Enter Hero Universe here"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Hero Weakness</label>
            <input
              type="text"
              className="form-control"
              value={heroWeakness}
              onChange={(e) => setHeroWeakness(e.target.value)}
              placeholder="Enter Hero Weakness here"
            />
          </div>

          <button
            className="btn btn-primary btn-lg mb-4 w-100"
            onClick={handleSetHeroes}
          >
            Add Hero
          </button>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="img-fluid rounded shadow"
            style={{ maxHeight: 500, objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="row">
        {heroes.map((hero) => (
          <div className="col-md-4 mb-3" key={hero.id}>
            <div className="card h-100 shadow-lg border-0 rounded-4 p-3">
              <div className="card-body">
                <h3 className="card-title text-primary">{hero.heroName}</h3>
                <p>
                  <strong>Power: </strong>
                  {hero.heroPower}
                </p>
                <p>
                  <strong>Weapon: </strong>
                  {hero.heroWeapon}
                </p>
                <p>
                  <strong>Universe: </strong>
                  {hero.heroUniverse}
                </p>
                <p>
                  <strong>Weakness: </strong>
                  {hero.heroWeakness}
                </p>
                <button
                  className="btn btn-danger btn-sm w-100 mt-2"
                  onClick={() => handleDelete(hero.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
