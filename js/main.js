const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const tabContent3 = document.getElementById('tab-3');
const container = document.querySelector('.tab-content .container');
const containerWidth = window.matchMedia('(max-width: 700px)');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();

  //Add border to current tab
  this.classList.add('tab-border');

  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  // Add show class
  tabContentItem.classList.add('show');

  // Change the width of third element's container on small screen sizes
  if (this === tabContent3) {
    changeContainer(containerWidth);
  } else {
    container.style.maxWidth = '75%';
  }
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

function changeContainer(width) {
  if (width.matches) {
    container.style.maxWidth = '100%';
  }
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
