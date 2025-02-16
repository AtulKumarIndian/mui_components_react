import React from 'react'

const Settings = ({data, setData}) => {
    const {theme} = data;
    const handleChange = (e) => {
        setData((prevState) => ({...prevState, theme: e.target.name}))
    }
  return (
    <div>
        <input type="radio" value={theme} name="dark" checked={theme === "dark"} onChange={handleChange}/>
        <label>Dark</label>
        <br/>
        <input type="radio" value={theme} name="light" checked={theme === "light"} onChange={handleChange}/>
        <label>Light</label>

    </div>
  )
}

export default Settings