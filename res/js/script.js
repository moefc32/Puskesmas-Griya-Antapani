const hamburger = document.getElementById('toggle-navbar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

hamburger.addEventListener('click', () => {
  if (hamburger.checked) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

close.addEventListener('click', () => {
  hamburger.click();
});

let loadFile = function (event) {
  let output = document.getElementById("preview");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  }
};

(function(){
  new InstagramFeed({
      'username': 'uptpuskesmasgriyaantapani',
      'container': document.getElementById("instagram-feed"),
      'display_profile': false,
      'display_biography': false,
      'display_gallery': true,
      'callback': null,
      'styling': true,
      'items': 8,
      'items_per_row': 4,
      'margin': 1,
      'lazy_load': true,
      'on_error': console.error
  });
})();