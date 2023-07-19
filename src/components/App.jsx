import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Items from "./Items/Items";
import Categories from "./Categories/Categories";
import ShowFullItem from "./ShowFullItem/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          name: 'Fantasia 2 Seater Sofa',
          desc: 'With a classic pipped arm edge, The range comes with foam filled seat cushions with fibre tops for comfort and support. Back cushions are fibre filled. Frames are glued, screwed and stapled for stability and durability.',
          category: 'sofa',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/ffthoct23_88of120_4815aea0-c662-4ea5-a265-7aebba31cbf4_695x464.jpg?v=1584887181',
          price: 709,
      },
      {
          id: 2,
          name: 'Fantasia Swivel Chair',
          desc: 'With a classic pipped arm edge, The range comes with foam filled seat cushions with fibre tops for comfort and support. Back cushions are fibre filled. Frames are glued, screwed and stapled for stability and durability.',
          category: 'chair',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/ffthoct23_81of120_040410df-41e3-433d-973a-832ac9305166_695x464.jpg?v=1584887547',
          price: 629,
      },
      {
          id: 3,
          name: 'Fantasia Corner Sofa',
          desc: 'With a classic pipped arm edge, The range comes with foam filled seat cushions with fibre tops for comfort and support. Back cushions are fibre filled. Frames are glued, screwed and stapled for stability and durability.',
          category: 'sofa',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/93C511F1-2E70-4256-8CB7-49A40E242231_695x522.jpg?v=1600951143',
          price: 1.279,
      },
      {
          id: 4,
          name: 'Fantasia Corner Sofa',
          desc: 'With a classic pipped arm edge, The range comes with foam filled seat cushions with fibre tops for comfort and support. Back cushions are fibre filled. Frames are glued, screwed and stapled for stability and durability.',
          category: 'sofa',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/ffthoct23_97of120_695x464.jpg?v=1584886448',
          price: 1.439,
      },
      {
          id: 5,
          name: 'Quince Modern Style Plush Green Velvet Sofa Chaise Chair',
          desc: ' It has a gentle curved back and is attractively upholstered in plush velvet. It has elegant, but sturdy, gold-plated legs. This chaise will look amazing in any living room, unused nook, entrance hall or bedroom.',
          category: 'chair',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/Quince_ModernStylePlushGreenVelvetSofaChaiseChair_1_696x494.jpg?v=1668091826',
          price: 600,
      },
      {
          id: 6,
          name: 'Quince Modern Style Compact Plush Midnight Blue Velvet Cocktail Chair',
          desc: 'It has a gentle curved back and is attractively upholstered in plush velvet. It has elegant, but sturdy, gold-plated legs. This chair will look amazing in any living room, unused nook, entrance hall or bedroom.',
          category: 'chair',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/Quince_ModernStyleCompactPlushMidnightBlueVelvetCocktailChair_8_695x495.jpg?v=1668084162',
          price: 250,
      },
      {
          id: 7,
          name: 'White Children`s Bunk Beds-Single 3ft',
          desc: 'This Bunk Bed is an eye-catching bed frame featuring a contemporary design with curved edges and an integrated ladder for climbing up to bed. With its solid MDF frame and solid plain white finish, this bed can stand up to the demands of any child.',
          category: 'bed',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/bunkbedwhite_630x446.png?v=1613649434',
          price: 389,
      },
      {
          id: 8,
          name: 'Oakwood Living Country Solid Oak King Size Bed Frame',
          desc: 'Our `OakWood Living` country oak furniture range is hand crafted with solid wooden frames, and finished with a medium oak chunky solid oak top. To add its unique style and charm the corners feature a peg joint and have been expertly rounded giving a distressed look. With a light wax finish it shows off the natural grain of the oak and offers a versatile option suitable for both modern and more traditional room setting.',
          category: 'bed',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/OakwoodLiving_CountrySolidOakKingSizeDoubleBedFrame_696x493.jpg?v=1635936596',
          price: 28700,
      },
      {
          id: 9,
          name: 'SlumberHaus Berlin Light Oak Chests of Drawers',
          desc: 'Exclusive to Furniture For The Home our `SlumberHaus` bedroom furniture range is manufactured to exact German quality standards using state of the art technology. Designed for modern living `SlumberHaus` bedroom furniture uses clean lines and inspires modern bedroom design ideas.',
          category: 'furniture',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/Slumberhaus-Light-Oak-Chest-of-Draws_2400x_53be8804-7297-4cc2-a3e7-e6326260e5a7_695x494.jpg?v=1635172239',
          price: 100,
      },
      {
          id: 10,
          name: 'Oakwood Living Natural Oak 3 Door',
          desc: 'Our `OakWood Living` natural oak furniture range is hand crafted with solid wooden frames, and finished with a medium oak chunky solid oak top. To add its unique style and charm the corners feature a peg joint and have been expertly rounded giving a distressed look. With a light lacquer finish it shows off the natural grain of the oak and offers a versatile option suitable for both modern and more traditional room setting.',
          category: 'furniture',
          imge: 'https://cdn.shopify.com/s/files/1/0067/3982/0608/products/OakwoodLiving_NaturalOak3Door2DrawTripleWardrobe_696x494.jpg?v=1635171670',
          price: 1.079,
      }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) 
        isInArray = true;
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)});
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  render() {
    return(
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    )
  }
}

export default App;
