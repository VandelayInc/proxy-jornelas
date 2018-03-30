module.exports = (description, neighborhood) => `
<div class='full-listing-page'>
  <div class='top-bar'><img src='../../services/8.png'><img src='../../services/9.png'></div>
  <div class='pictures' id='photo-carousel-service'><img src='../../services/listing_photo.jpg'></div>
  <div class='center-column'>

    <div class='details'>
      <div id='description-service'>${description}
        <img src='../../services/1.png'>
        <img src='../../services/2.png'>
      </div>
      <div id='reviews-service'><img src='../../services/3.png'></div>
      <div class='host'><img src='../../services/4.png'></div>
      <div id='neighborhood'>${neighborhood}</div>
    </div>

    <div class='booking' id='bookings-service'><img src='../../services/booking.png'></div>

  </div>

  <div id='listings'><img src='../../services/6.png'></div>
  <div class='bottom-bar'><img src='../../services/7.png'></div>
</div>
`;
