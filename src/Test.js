import React, {useEffect, useState} from 'react'

function Test() {

//     const [ads, setAds] = useState([]);
  
//   useEffect(() => {
//     fetch("http://localhost:4000/fakeDataSet")
//       .then(res => res.json())
//       .then(data => {
//         // Aggregate all campaigns into a single array
//         const allCampaigns = Object.values(data).flat().map(campaign => ({
//           campaignName: campaign.campaign_name || campaign.campaign || campaign.utm_campaign,
//           mediaBuy: campaign.media_buy_name || campaign.ad_group || campaign.ad_squad_name || campaign.utm_medium,
//           adName: campaign.ad_name || campaign.image_name || campaign.creative_name || campaign.utm_content,
//           cost: campaign.spend || campaign.cost,
//           postClicks: campaign.clicks || campaign.post_clicks
//         }));
//         console.log(allCampaigns)
//         // Sort by cost in descending order
//         allCampaigns.sort((a, b) => b.cost - a.cost);
        
//         setAds(allCampaigns);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
}

export default Test