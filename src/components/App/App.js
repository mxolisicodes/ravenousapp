import React from 'react';
import styles from "./App.module.css";
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

//The constant below creates an instance of the business - before the use of the Yelp API
const business = {
  imageSrc: 'https://i.pinimg.com/736x/e7/99/7a/e7997a52c18102161ac0c012bfcdb14a.jpg',
  name: 'La Pergola',
  address: '44 Stanley Ave, Braamfontein',
  city: 'Johannesburg',
  province:'Gauteng',
  zipCode: '2092',
  category: 'Italian',
  rating: 4.0,
  reviewCount:184
};
const businesses = [business,business,business,business,business,business]
const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}></BusinessList>
    </div>
  );
};

export default App;
