const fridge = {
  name: "Electrolux 2000",
  volume: 1300,
  colour: "yellow",
  manufactureYear: 2008,
  numberOfShelves: 10,
  storedItems: ["fruits", "vegetables", "meat", "youghurt"],
  hasTemperatureAdjustment: true,
  liststoredItems: function () {
    const items = fridge.storedItems;
    items.forEach(function (item) {
      console.log(item);
    });
    /*const fridgeContainer = document.getElementById("fridge-container");
    fridgeContainer.innerHTML = JSON.stringify(fridge);*/
  },
};

function animateVideo() {
  const video = document.getElementById("fridgeanimation");
  video.play();
}
const videoButton = document.getElementById("videoButton");
videoButton.addEventListener("click", animateVideo);
videoButton.addEventListener("click", fridge.liststoredItems);
