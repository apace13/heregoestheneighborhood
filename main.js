//Code written with major support from Stalgia Grigg

let map;

init();

function init() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhY2UiLCJhIjoiY2toNWl2a3k1MDJ0cjJ0bzM2bGtoemprbiJ9.cTy5Ke8Bl_rQdVnvLLlYJQ';
  map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-94.80, 40.82], // starting position [lng, lat]
    zoom: 4.2 // starting zoom
  });
  
  //bronx
  setArthurPopup();
  setMalcolmPopup();
  setAlexPopup();
  setJoanPopup();
  setNicPopup();
  setRichardPopup();
  setRodrickPopup();
  setRokafellaPopup();
  setKarenPopup();
  setCarmenPopup();
  setYosaraPopup();
 // setMarcoPopup();
 // setMychalPopup();
  
  //brooklyn
  setBrittanyPopup();
  setMaxinePopup();
  setRicarrdoPopup();
  setAlbaPopup();
  
  //staten island
  setMelissaPopup();
  setIdeaPopup();
  setRositaPopup();
  setNubiaPopup();
  setKavPopup();
  
  //queens
  setAlbertoPopup();
  setAuroraPopup();
  setKaresiaPopup();
  setUrvashiePopup();

   //ABQ
   setGabrielPopup();
   setNataliaPopup();
   setPaulPopup();
   setRavenPopup();
   setSarahPopup();

   //ABQ
   setMaddeiPopup();

   //Hunter
   setAbbyPopup();
   setLisaPopup();
   setMarvinPopup();
   
}

function setArthurPopup() {
  let maxWidth = innerWidth /4;
  
 
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'ARTHUR AVILES'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='841 Barretto Street'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Arthur_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Arthur_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.890311, 40.817218, ])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

 

function setMalcolmPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'MALCOLM-X BETTS'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Hunts Point Riverside Park'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Malcolm_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Malcolm_map1.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.881821, 40.818013,])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}


function setAlexPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'ALEXANDER DIAZ'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Resevoir Ave'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Alex_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Alex_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.8998337, 40.87403413108547,])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setJoanPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'JOAN BRADFORD'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Pelham Bay Park'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Joan_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Joan_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([ -73.81678593163657,40.85098648268933])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setNicPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'NIC KAY'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Bronx Park'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Nic_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'NicKay_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.86475444894113,40.889276662455536 ])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setRichardPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'RICHARD RIVERA'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='P.S. 57 schoolyard'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Richard_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Richard_map1.mp3';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.88871190786392,40.84900990368582])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setRodrickPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'RODRICK BELL'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Ferry Point Park'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Rodrick_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Rodrick_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.8318530886409, 40.806174075372574])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setRokafellaPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = '"ROKAFELLA" GARCIA'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Watson Gleason Playground'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Rokafella_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Rokafella_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.86862183896366, 40.82814678634749])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}



function setKarenPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'KAREN WASHINGTON'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='GARDEN OF HAPPINESS'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Karen_map.PNG';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Karen_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.88514960571425, 40.84849776916991])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setCarmenPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'CARMEN VEGA RIVERA'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='CASA: Community Action for Safe Apartments'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Carmen_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Carmen_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.913357878328, 40.8425316238497])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}



function setYosaraPopup() {
  let maxWidth = innerWidth /2;
  
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  });
  
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'YOSARA TRUJILLO'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='SWEET WATER DANCE & YOGA'
  dom.appendChild(address);
  
  //image
  let image = document.createElement('img');
  image.src = 'Yosara_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  //audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Yosara_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.92406856392367, 40.827981599356 ])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

//BROOKLYN

function setBrittanyPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Brittany Grier'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Putnam & Malcolm X Blvd'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Brittany_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Brittany_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.9309917315374, 40.68656830367751])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}


function setMaxinePopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Maxine Montillus'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='E34th and Avenue K'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Maxine_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Maxine_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.94188444133992, 40.625825538525895])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}


function setRicarrdoPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Ricarrdo Valentine'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Brooklyn Public Libary Eastern Parkway'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Ricarrdo_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Ricarrdo_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.9335505659315, 40.66850778926102])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setAlbaPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Alba Delia Hernandez'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Troutman Street Handball Courts'
  dom.appendChild(address);
  
  //handle
  let handle = document.createElement('p1');
  handle.innerHTML ='IG @albalaescritora'
  dom.appendChild(handle);
  
  // image
  let image = document.createElement('img');
  image.src = 'Alba_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Alba_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.92835779611903, 40.70068629096134])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}




function setMelissaPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Melissa West'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Bryant Ave & Hylan Blvd'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Melissa_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Melissa_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-74.10738146531327, 40.574853284693404])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setIdeaPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Idea Viola Reid'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Staten Island 9/11 Memorial'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Idea_map.jpg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Idea_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-74.0765421886419, 40.646829160116724])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setRositaPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Rosita Roldan'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Snug Harbor Cultural Center'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Rosita_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Rosita_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-74.10314543345801, 40.64235824084728])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}



function setNubiaPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Nubia Braithwaite'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Silver Lake Park'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Nubia_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Nubia_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-74.0923065598072, 40.627483277250974])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setKavPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Kavanagh Honor'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Snug Harbor'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Kav_map.png';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Kav_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-74.10143626836492, 40.645516483442194])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

//queens

function setAlbertoPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Alberto Denis'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Astoria Park'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Alberto_map.jpeg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Alberto_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.92536805802474, 40.77847136316842])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}


function setAuroraPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Aurora Reyes'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Travers Park'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Aurora_map.jpeg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Aurora_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.88890695241984, 40.75430087841314])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setKaresiaPopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Karesia Batan'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='45th Road and 23rd Street'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Karesia_map.jpeg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Karesia_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.94661782156476, 40.74647598106646])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
  
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setUrvashiePopup() {
  let maxWidth = innerWidth /4;
  
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Urvashie Kissoon'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Flushing Town Hall'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Urvashie_map.jpeg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Urvashie_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-73.8298597882683, 40.76428639606878])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

//ABQ
function setGabrielPopup() {
  let maxWidth = innerWidth /4;
  
 
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'GABRIEL CARRION-GONZALES'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='El Bosque'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Gabriel_map.jpg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Gabriel_map.m4a';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-106.65557289462971, 35.068398436339514])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setNataliaPopup() {
  let maxWidth = innerWidth /4;
  
 
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'NATALIA HERNANDEZ'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Barelas'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Natalia_map.jpg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Natalia_map.mp3';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-106.65285410404333, 35.07389905698226])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setPaulPopup() {
  let maxWidth = innerWidth /4;
  
 
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Paul Cuffee'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Keshet Dance and Center for the Arts'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Paul_map.jpg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Paul_map.mp3';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-106.60011001093892, 35.10611870602935])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setRavenPopup() {
  let maxWidth = innerWidth /4;
  
 
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Raven Bright'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Tingley Beach'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Raven_map.jpg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Raven_map.mp3';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-106.67363714266254, 35.085712970428986])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setSarahPopup() {
  let maxWidth = innerWidth /4;
  
 
  let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
  
  //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'Sarah Hogland-Gurulé'
  dom.appendChild(name);
  
  //address
  let address = document.createElement('p');
  address.innerHTML ='Three Sisters Volcanoes'
  dom.appendChild(address);
  
  // image
  let image = document.createElement('img');
  image.src = 'Sarah_map.jpg';
  image.width = innerWidth /2;
  dom.appendChild(image);
  
  // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Sarah_map.mp3';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
  
  popup.setDOMContent(dom);
  
  let marker = new mapboxgl.Marker()
    .setLngLat([-106.77313791928525, 35.12854067252455])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
   marker._element.addEventListener('click', () => {
    let visitedMarkerColor = '#bbbbbb';
    let markerElement = marker.getElement();
    let markerEls =  markerElement
        .querySelectorAll(`g[fill="${marker._color}"]`);
    markerEls[0].setAttribute("fill", visitedMarkerColor)
  });
}

function setMaddeiPopup() {
  let maxWidth = innerWidth /4;
   let popup = new mapboxgl.Popup({
    offset: 10,
    maxWidth: (innerWidth /2 + 25) + 'px',
    anchor: 'center'
  })
   //name
  let dom = document.createElement('div');
  let name = document.createElement('h2');
  name.innerHTML = 'MADDEI COLLINS'
  dom.appendChild(name);
   //address
  let address = document.createElement('p');
  address.innerHTML ='500 Ben Hur Avenue'
  dom.appendChild(address);
   // image
  let image = document.createElement('img');
  image.src = 'Maddei_map.jpg';
  image.width = innerWidth /2;
  dom.appendChild(image);
   // audio
  let sound      = document.createElement('audio');
  sound.controls = 'controls';
  sound.src      = 'Maddei_map.mp3';
  sound.type     = 'audio/mpeg';
  dom.appendChild(sound);
   popup.setDOMContent(dom);
   let marker = new mapboxgl.Marker()
    .setLngLat([-83.89368360349678, 35.979973259078434])
    .setPopup(popup) //sets a popup on this marker
    .addTo(map);
    marker._element.addEventListener('click', () => {
     let visitedMarkerColor = '#bbbbbb';
     let markerElement = marker.getElement();
     let markerEls =  markerElement
         .querySelectorAll(`g[fill="${marker._color}"]`);
     markerEls[0].setAttribute("fill", visitedMarkerColor)
   });
 }
 
 

 



