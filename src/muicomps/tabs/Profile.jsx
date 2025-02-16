import React from 'react'

const Profile = ({data, setData}) => {
    const {name, email, phone} = data;
    const handleChange = (e, type) => {
        console.log(e.target.value)
        setData((prevState) => ({...prevState, [type]: e.target.value}))
    }

  return (
    <div className="profile-container">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=> handleChange(e, "name")}/>
        <label>Age:</label>
        <input type="Number" value={name} onChange={(e)=> handleChange(e, "age")}/>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=> handleChange(e, "email")}/>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e)=> handleChange(e, "phone")}/>
    </div>
  )
}

export default Profile