
import { useEffect, useState } from 'react';
import './App.css';

// https://api.edamam.com/api/nutrition-details?app_id=18ca8d11&app_key=f540341fcf1bdfcda6737acb57ec3652

// первая ссылка работает, она сейчас стоит в функции, отображается в консоли
// вторая https://api.edamam.com/api/nutrition-details?app_id=3898b975&app_key=e463583728a679dcdd5ab92a3d112219 
// не отображается

function App() {


  const MY_ID = "3898b975";
  const MY_KEY = "e463583728a679dcdd5ab92a3d112219";

  useEffect(() => {
    const getNutrients = async () => {
      const response = await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${MY_ID}&app_key=${MY_KEY}&nutrition-type=cooking&ingr=avocado`);
      const data = await response.json();
      console.log(data);
    }
    getNutrients();
  }, [])
 

 /*  const [mySearch, setMySearch] = useState("");
  const [myNutrients, setMyNutrients] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("tomato");

  useEffect(()=> {
    const getNutrients = async () => {
      const response = await fetch (`https://api.edamam.com/api/nutrition-details?app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setMyNutrients(data.hits);
    }
    getNutrients()
  }, [wordSubmitted]); */

  /* const myNutrientSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  } */

  return (
    <div className="App">
      

    {/*   <div className='container'>
        <form onSubmit={finalSearch}>
          <input placeholder='Search...' onChange={myNutrientSearch} value={mySearch}/>
        </form>
      </div>
 */}
    </div>
  );
}

export default App;
