import React, {useState} from 'react'
import CampaignFilter from './CampaignFilter.js'
import CampaignSearch from './CampaignSearch.js'

function CampaignList({ads}) {

    const [sorted, setSorted] = useState(3)
    const [search, setSearch] = useState("")
    
    function handleSortClick() {
      setSorted((sorted) => !sorted)
    }

    console.log(sorted)
    function renderCampaigns(platform) {
        if (!ads[platform]) {
            return <p>Loading...</p>;
        }

        let campaignsToRender = ads[platform]

        if (sorted == 1) {
          campaignsToRender = [...campaignsToRender].sort((a,b) => {
            const costA = a.spend || a.cost;
            const costB = b.spend || b.cost;
            return costA - costB;
        });

        } else if (sorted == 2) {
          campaignsToRender = [...campaignsToRender].sort((a,b) => {
            const costA = a.spend || a.cost;
            const costB = b.spend || b.cost;
            return costB - costA;
        });
        } 

        if (search.length > 0) {
            campaignsToRender  = campaignsToRender.filter((campaign) => {
            const campaignName = campaign.campaign || campaign.campaign_name || campaign.utm_campaign;
            return campaignName.toLowerCase().includes(search.toLowerCase())
          })
        }

        console.log(search)
        return campaignsToRender.map((campaign, index) => {

          const campaignName = campaign.campaign_name || campaign.campaign || campaign.utm_campaign;
          const mediaBuy = campaign.media_buy_name || campaign.ad_group || campaign.ad_squad_name || campaign.utm_medium;
          const adName = campaign.ad_name || campaign.image_name || campaign.creative_name || campaign.utm_content;
          const cost = campaign.spend || campaign.cost;
          const impressions = campaign.impressions
          const postClicks = campaign.clicks || campaign.post_clicks;

          return (
         
      

              <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index} className="campaign-card">
                <div className="px-6 py-4">
                <h3><strong>Campaign: </strong>{campaignName}</h3>
                <p><strong>Adset: </strong> {mediaBuy}</p>
                <p><strong>Ad Name:</strong> {adName}</p>
                <p><strong>Spend:</strong> ${cost}</p>
                <p><strong>Impressions:</strong> {impressions}</p>
                <p><strong>Clicks:</strong> {postClicks}</p>
                {/* <p><strong>Platform: </strong>{platform}</p> */}
                {campaign.results ?
                
                <p><strong>Results: </strong></p>
                : null }
                </div>
              </div>

          )
        });
      };

    return (
        <div>
          <CampaignSearch search={search} setSearch={setSearch}/>
          <CampaignFilter handleSortClick={handleSortClick} sorted={sorted} setSorted={setSorted}/>
          <h3 className="text-3xl font-bold ">Facebook Campaigns</h3>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {renderCampaigns('facebook_ads')}        
              </div>
            </div>
          <h3 className="text-3xl font-bold ">Snapchat Ads</h3>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {renderCampaigns('snapchat_ads')}        
              </div>
            </div>
          <h3 className="text-3xl font-bold ">Twitter Campaigns</h3>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {renderCampaigns('twitter_ads')}        
              </div>
            </div>
        </div>
    )
}

export default CampaignList



   {/* <h3 className="text-3xl font-bold ">Google Analytics</h3>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {renderCampaigns('google_analytics')}        
              </div>
            </div> */}