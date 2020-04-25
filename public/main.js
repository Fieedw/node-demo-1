console.log("我是main.js");

// getCSS.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "/style.css");
//   request.onload = () => {
//     console.log("request.response");
//     console.log(request.response);
//     //创建style标签
//     const style = document.createElement("style");
//     //填写style内容
//     style.innerHTML = request.response;
//     //插到head里面
//     document.head.appendChild(style);
//   };
//   request.onerror = () => {
//     console.log("失败了");
//   };
//   request.send();
// };
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "style.css");
  request.onreadystatechange = () => {
    //下载完成但不知道成功还是失败
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插到head里面
        document.head.appendChild(style);
      } else {
        alert("加载css失败");
      }
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onload = () => {
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "4.xml");
  request.onreadystatechange = () => {
    if (request.status === 200 && request.readyState === 4) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = () => {
    if (request.status === 200 && request.readyState === 4) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
