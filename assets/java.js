// var getDrinks = function () {
//   var apiUrl = "https://app.bplaas.com/pickup-line";
//   fetch(apiUrl)
//     .then(function (response) {
//       //cathes error if request has no matching repository name
//       if (!response.ok) {
//         alert("error1");
//         return 0;
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     }) //cathes error if request fails to send
//     .catch(function (error) {
//       alert("error2");
//     });
// };

// //example drink
// getDrinks("margarita");
bulmaCarousel.attach("#slider", {
  slidesToScroll: 1,
  slidesToShow: 3,
  infinite: true,
});
