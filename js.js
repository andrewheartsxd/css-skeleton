var d = new Date();
var n = d.getDay();

var newYork = function() {
  document.getElementById("location").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.010745145237!2d-73.97908389999999!3d40.76178839999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f90909a307%3A0xfe3e44ad05aade3a!2sAvenue+of+the+Americas+%26+W+53rd+St%2C+New+York%2C+NY+10019!5e0!3m2!1sen!2sus!4v1407804132546";
}

var tokyo = function() {
  document.getElementById("location").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.178201756285!2d139.7640368!3d35.67261389999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be5bfbdbc55%3A0xed77149da9ccfca7!2zNCBDaG9tZS0yLTE1IEdpbnphLCBDaMWrxY0ta3UsIFTFjWt5xY0tdG8gMTA0LTgxMDgsIEphcGFu!5e0!3m2!1sen!2sus!4v1407804727246";
}

var london = function() {
  document.getElementById("location").src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2484.5303259125167!2d-0.16264!3d51.48513489999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760512e9be0abb%3A0xc4f80155248c215c!2s68+Royal+Hospital+Rd%2C+Chelsea%2C+London+SW3+4HH%2C+UK!5e0!3m2!1sen!2sus!4v1407822671675";
}

var copenhagen = function() {
  document.getElementById("location").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4499.271615515849!2d12.596200999999997!3d55.67793299999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533b679080a5%3A0x70e9f2214b503f1f!2sStrandgade+93%2C+1401+K%C3%B8benhavn+K%2C+Denmark!5e0!3m2!1sen!2sus!4v1407822776599";
}

var seattle = function() {
  document.getElementById("location").src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2689.132885791187!2d-122.33621199999997!3d47.62354810000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015375f0ca7d9%3A0x854636352b4edd33!2s511+Boren+Ave+N%2C+Seattle%2C+WA+98109!5e0!3m2!1sen!2sus!4v1407822871915";
}

var locateTruck = function() {
  switch(n) {
    case 0:
        newYork();
        break;
    case 1:
        newYork();
        break;
    case 2:
        tokyo();
        break;
    case 3:
        london();
        break;
    case 4:
        copenhagen();
        break;
    case 5:
        seattle();
        break;
    case 6:
        newYork();
        break;
  };
}
