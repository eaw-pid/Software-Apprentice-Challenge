import React from 'react'

function CampaignSearch({search, setSearch}) {

    return (
        <div className="box-border md:box-content">
            <input type='text' 
                style={boxStyle}
                placeholder="Search by Campaign Name" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}

const boxStyle = {
    width: "300px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "6px",
    border: "2px solid black"
}

export default CampaignSearch