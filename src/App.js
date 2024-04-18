
import { useEffect, useState } from 'react';
import './App.css';
import NutritionDetails from './NutritionDetails';
import { LoaderPage } from './Loaderpage';


function App() {


  const [mySearch, setMySearch] = useState();
  const [myNutrients, setMyNutrients] = useState();
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [loader, setLoader] = useState(false);

  const MY_ID = '18ca8d11';
  const MY_KEY = 'f540341fcf1bdfcda6737acb57ec3652';
  const BASE_URL = 'https://api.edamam.com/api/nutrition-details';

  const getNutrition = async (ingr) => {
      setLoader(true);

    const response = await fetch(`${BASE_URL}?app_id=${MY_ID}&app_key=${MY_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ingr: ingr})
    });

    if(response.ok) {
      setLoader(false);
      const data = await response.json();
      setMyNutrients(data);
    
    } else {
      setLoader(false);
      alert("ingredients entered incorrectly");
    }
    
  }

  const myNutrientSearch = e => {
    setMySearch(e.target.value)
  }

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  useEffect(()=> {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
      getNutrition(ingr);
    }
    
  }, [wordSubmitted]);

  return (
    <div className="App">
      
      {loader && <LoaderPage/>}

     <div className='container'>
        <form onSubmit={finalSearch}>
          <input placeholder='Search...' onChange={myNutrientSearch}/>
          <button type='submit'>Search</button>
        </form>
      </div>

      <div>
        {
          myNutrients && <p>{myNutrients.calories} kcal</p>
        }

        {
          myNutrients && Object.value(myNutrients.totalNutrients)
          .map(({ label, quantity, unit }) => 
          <NutritionDetails
          label={label}
          quantity={quantity}
          unit={unit}
          />
          )
        }

      </div>

    </div>
  );
}

export default App;
