const mySlider = document.getElementById("my-slider");
const sliderValue = document.getElementById("slider-money");
function slider(){
valPercent = (mySlider.value / mySlider.max)*100;
mySlider.style.background = `linear-gradient(to right, #8BD16A ${valPercent}%, #C6BAFB ${valPercent}%)`;
sliderValue.textContent = mySlider.value;
}
slider();

const mySliderDate = document.getElementById("my-slider2");
const sliderDateValue = document.getElementById("slider-date");
function sliderDate(){
valPercent = (mySliderDate.value / mySliderDate.max)*100;
mySliderDate.style.background = `linear-gradient(to right, #8BD16A ${valPercent}%, #C6BAFB ${valPercent}%)`;
sliderDateValue.textContent = mySliderDate.value;
}
sliderDate();