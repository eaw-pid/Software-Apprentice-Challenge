import React from 'react'

function CampaignFilter({handleSortClick, sorted, setSorted}) {


    function changeRadio(value) {
        setSorted(value)
    }

    return (
        <div>
          <button onClick={handleSortClick}>Sort By:</button>
          <br/>
          <label style={radioStyle}>Ascending</label>
          <input type="radio" 
            value="1" 
            name="sortOrder"
            onChange={(e)=>changeRadio(e.target.value)}></input>
          <label style={radioStyle}>Descending</label>
          <input type="radio" 
            value="2"
            name="sortOrder"
            onChange={(e)=>changeRadio(e.target.value)}></input>
          <label style={radioStyle}>Reset</label>
          <input type="radio" 
            value="3"
            name="sortOrder"
            onChange={(e)=>changeRadio(e.target.value)}></input>
        </div>
    )
}

const radioStyle = {
    paddingLeft: "12px",
    paddingRight: "6px"
}

export default CampaignFilter