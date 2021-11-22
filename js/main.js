'use strict';

const tabs = (tabsSelector, tabsContentSelector) => {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);


  function hideContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove('active');
    });
  }

  function displayContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('active');
  }

  hideContent();
  displayContent();

  tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideContent();
      displayContent(i);
    });
  });
};

tabs('.tabs__item', '.tabs__content-item');