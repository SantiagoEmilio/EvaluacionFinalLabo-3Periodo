let navBarDiv = document.createElement('div');
navBarDiv.className = "iv";

let imgLogo = document.createElement('img');
imgLogo.src = "https://petencito.usac.edu.gt/wp-content/uploads/2018/08/21.jpg";
imgLogo.className = "img-logos";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('selp');
h2.innerText = "te saluda el mapache";
navBarDiv.appendChild(h2);


export { navBarDiv };