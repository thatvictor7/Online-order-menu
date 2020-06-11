import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Menu from './components/menu.jsx'
import data from './restaurantData.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bag: []
    }
  }

  addToBag = (item) => {
    // this.setState({
    //   bag: ['1,2,3']
    // })
    console.log('added', item);
    
  }

  render() {

    const restaurant = data.restaurant.name
    const menu = data.restaurant.menu

    return(
      <div className="App">
       <Navbar name={restaurant} />
       <Menu menu={menu} addToBag={this.addToBag} />
       <Footer />
     </div>
    )
  }
}

export default App
