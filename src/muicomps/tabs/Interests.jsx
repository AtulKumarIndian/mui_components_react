import React from "react";

const Interests = ({ data, setData }) => {
  const { interests } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...interests, e.target.value]
        : interests.filter((interest) => interest !== e.target.value),
    }));
  };

  return (
    <div className="interest">
      {/* {interests.map((interest, index) => (
        <label className="interest" key={index}>
          <input
            type="checkbox"
            name={interest}
            value={interest}
            checked={interests.includes(interest)}
            onChange={handleChange}
          />
          {interest}
        </label>
      ))} */}
      <label className="interest">
        <input
          type="checkbox"
          name="coding"
          value="coding"
          checked={interests.includes("coding")}
          onChange={handleChange}
        />
        Coding
      </label>
      <label className="interest">
        <input
          type="checkbox"
          value="Dance"
          checked={interests.includes("Dance")}
          onChange={handleChange}
        />
        Dance
      </label>
      <label className="interest">
        <input
          type="checkbox"
          value="Javascript"
          checked={interests.includes("Javascript")}
          onChange={handleChange}
        />
        Javascript
      </label>
      <label className="interest">
        <input
          type="checkbox"
          value="reading"
          checked={interests.includes("reading")}
          onChange={handleChange}
        />
        reading
      </label>
      <label className="interest">
        <input
          type="checkbox"
          value="writing"
          checked={interests.includes("writing")}
          onChange={handleChange}
        />
        writing
      </label>
    </div>
  );
};

export default Interests;
