import React,{useState} from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import "./Tabs.css";

function Tabs() {
  //create a config object to store the array of tabs
  const tabs = [
    { name: "profile", component: Profile },
    { name: "interests", component: Interests },
    { name: "settings", component: Settings },
  ];

  const [data, setData] = useState({
    name: "Atul",
    age: 23,
    email: "atulkrindian@gmail.com",
    phone: "1234567890",
    interests: ["coding", "reading", "writing"],
    theme: "dark",
  });

  const [activeTab, setActiveTab] = useState(2);

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div key={index} className="heading" onClick={() => setActiveTab(index)}>{tab.name}</div>
        ))}
      </div>
      <div className="content-container">
        <ActiveTabComponent data={data} setData={setData}/>
      </div>
      {activeTab > 0 && <button onClick={() => setActiveTab(activeTab-1)}>Prev</button>}
      {activeTab === tabs.length-1 && <button onClick={() => console.log(data, "make Api calls")}>Save</button>}
      {activeTab < tabs.length-1 && <button onClick={() => setActiveTab(activeTab+1)}>Next</button>}

    </div>
  );
}

export default Tabs;
