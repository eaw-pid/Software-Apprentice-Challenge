import './App.css';
import React, {useEffect, useState} from 'react';
import CampaignList from './CampaignList';
import Test from './Test'
// import CampaignFilter from './CampaignFilter';

function App() {

  const [ads, setAds] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/fakeDataSet")
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      setAds(data)
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);




  

  return (
    <div className="main-page">
      <h1 className="text-4xl font-bold mb-4">Campaigns</h1>
          {/* <CampaignFilter filterFunction={filterFunction}/> */}
          <CampaignList ads={ads} />
          <Test/>
    </div>
  );
}

export default App;
