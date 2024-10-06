import React from "react";
import Card from "./Card"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="card-container">
        <Card
          image="" 
          description="The Feast of Our Lady of the Most Holy Rosary, reminded us the strength and grace found in the prayerful devotion to the Blessed Virgin."
          link="https://www.facebook.com/photo/?fbid=951345867034501&set=a.556396306529461" // Replace with your Facebook link
        />
        <Card
          image="https://via.placeholder.com/300" // Replace with your image URL
          description="Latest Updates: Stay Informed"
          link="https://facebook.com/your-link" // Replace with your Facebook link
        />
        <Card
          image="https://via.placeholder.com/300" // Replace with your image URL
          description="Event Highlights: Don't Miss Out!"
          link="https://facebook.com/your-link" // Replace with your Facebook link
        />
        <Card
          image="https://via.placeholder.com/300" // Replace with your image URL
          description="Event Highlights: Don't Miss Out!"
          link="https://facebook.com/your-link" // Replace with your Facebook link
        />
        <Card
          image="https://via.placeholder.com/300" // Replace with your image URL
          description="Event Highlights: Don't Miss Out!"
          link="https://facebook.com/your-link" // Replace with your Facebook link
        />
        <Card
          image="https://via.placeholder.com/300" // Replace with your image URL
          description="Event Highlights: Don't Miss Out!"
          link="https://facebook.com/your-link" // Replace with your Facebook link
        />
        <Card
          image="https://via.placeholder.com/300" // Replace with your image URL
          description="Event Highlights: Don't Miss Out!"
          link="https://facebook.com/your-link" // Replace with your Facebook link
        />
      </div>
    </div>
  );
};

export default Home;
