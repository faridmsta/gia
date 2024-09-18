import React from 'react'
import './SearchCat.css'
import Sections from '../components/sections/Sections'
import Exploresug from './../components/exploresug/Exploresug'
import OnelineCarusel from '../components/onelinecarusel/OnelineCarusel'
import Twolinecarusel from '../components/twolinecarusel/Twolinecarusel'



function SearchCat() {

  const highlitedData = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: true,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
  ]
  const lastuptData = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: true,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: true,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: true,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwurA8BsiO6T-998tQkdMdHkfzFu-ONxzhw&s',
      ppimg: 'https://img.delicious.com.au/otDu1ZV5/w506-h506-cfill/del/2015/10/dan-stock-19711-1.jpg',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/stock_market_update.jpeg.jpg',
      ppimg: 'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg?resize=600%2C600&ssl=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 1,
      raiting: 5.0,
      votes: 189,
      strAt: 20,
      isBest: false,
    },
    {
      img: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/02/GettyImages-1751833779-1440x864.jpg',
      ppimg: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/Shutterstock_2064745670-1.jpg?w=1250&h=1120&crop=1',
      name: 'Rasul Hasimov',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,',
      level: 2,
      raiting: 5.0,
      votes: 189,
      strAt: 18,
      isBest: false,
    },
  ]

  return (
    <div>
      <Exploresug />
      <section className='highlitedOffers'>
        <div className="container">
          <div className="highlitedOffersWrap">
            <h2>Highlighted Designers’ offers</h2>
            <OnelineCarusel data={highlitedData} />
          </div>
        </div>
      </section>
      <section className="lastUpdate">
        <div className="container">
          <div className="lastUpdateWrap">
          <h2>Last uptades</h2>
            <Twolinecarusel data={lastuptData }  />
          </div>
        </div>
      </section>
      <Sections />
    </div>
  )
}

export default SearchCat