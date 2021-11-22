'use strict';

const tabs = (tabsSelector, tabsContentSelector) => {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);


  function hideContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
  }

  function displayContent(i = 0) {
    tabsContent[i].style.display = 'block';
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