// Toggle the mobile menu’s visibility 
// when the hamburger ("menu-toggle") is clicked
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("active");
  });
  
  // CodePen-like expansion for each wrapper:
  document.getElementById('wrapper').onclick = function() {
    let className = ' ' + this.className + ' ';
    this.className = ~className.indexOf(' active ')
      ? className.replace(' active ', ' ')
      : this.className + ' active';
  };
  
  document.getElementById('wrapper2').onclick = function() {
    let className = ' ' + this.className + ' ';
    this.className = ~className.indexOf(' active ')
      ? className.replace(' active ', ' ')
      : this.className + ' active';
  };
  
  document.getElementById('wrapper3').onclick = function() {
    let className = ' ' + this.className + ' ';
    this.className = ~className.indexOf(' active ')
      ? className.replace(' active ', ' ')
      : this.className + ' active';
  };
  