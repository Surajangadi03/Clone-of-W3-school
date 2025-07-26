let div1=document.getElementById("div1");
let imagetag=document.createElement("img");
imagetag.alt="this image is beautiful";
imagetag.src="image copy.png";
imagetag.width="200";
imagetag.height="200";
imagetag.classList.add("image1");
imagetag.id="image2";
div1.appendChild(imagetag);


let div2=document.getElementById("div2");
let paragraph=document.createElement("p");
paragraph.innerText="I Suraj Angadi and i'm python fullstack developer,I created clone of w3 school web site.A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server. A web developer may specialize in client-side applications (Front-end web development), server-side applications (back-end development), or both (full-stack development).The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server. A web developer may specialize in client-side applications (Front-end web development), server-side applications (back-end development), or both (full-stack development)."
paragraph.classList.add("para-text")
div2.appendChild(paragraph);