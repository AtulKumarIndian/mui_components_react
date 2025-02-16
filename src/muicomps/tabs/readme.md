1 - create a tab config
2 - create tab components for each requirement
3 - map over the tab config to get heading in the page
4 - style the heading and the heading-container(flex)
5 - load component based on click of heading
6 - create a state of active tab and onChange handler for the heading onClick based on index.
7 - Create a data source to persist data across tabs is to create in the root component
8 - Pass the data and setData as props to ActiveTabComponent and destructure in each TabComp
9 - Profile tab 
10 - Start by including labels and input for each of the data.
11 - Input will contain the value from destructured data array. Onchange will accept (e , "value")
11 - Onchange handler will setData ( (p) => ({...p, [value]: e.target.value}))
12 - Begin Interests 