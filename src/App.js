import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
// import Section from './components/section.jsx'
import Menu from './components/menu.jsx'
import data from './restaurantData.json'

function App() {

  const restaurant = data.restaurant.name
  const menu = data.restaurant.menu

  return (
    <div className="App">
      <Navbar name={restaurant} />
      {/* {console.log(menu)} */}
      {/* <Section sectionName='Pizza' /> */}
      <Menu menu={menu} />
      <Footer />
    </div>
  );
}

export default App;
