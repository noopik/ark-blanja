const goHome = () => {
  let urlHomeLocal = 'http://127.0.0.1:5500/src/pages/homepage.html';
  let HOST = 'https://dreamy-haibt-870680.netlify.app/';
  let urlHomeHOST = 'https://dreamy-haibt-870680.netlify.app/src/pages/homepage.html';



  let checkProduction = window.document.location.href;
  checkProduction;

  if (checkProduction === HOST) {
    console.log(urlHomeHOST);
    return window.location = urlHomeHOST;
  }

  console.log(urlHomeLocal);
  window.location = urlHomeLocal

};