import React from 'react'

const Interests = ({data, setData}) => {
    const {interests} = data;

  return (
    <div>
        <label>Interests:</label>
        <input type="checkbox" 
        name="interest"
        value="coding" 
        checked={interests.includes("coding")} 
        onChange={(e)=> setData((prevState) => ({...prevState, interests: e.target.checked ? [...interests, e.target.value] : interests.filter((interest) => interest !== e.target.value)} ) )}/>
    </div>
  )
}

export default Interests