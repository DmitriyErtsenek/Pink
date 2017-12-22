ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){     
    myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 16
    });

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Pink',
      balloonContent: 'Pink' }, { 
      iconLayout: 'default#image',
      iconImageHref: '../img/mapicon.svg',
      iconImageSize: [35, 35],
      iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls
      .remove('geolocationControl')
      .remove('trafficControl')
      .remove('searchControl')
      .remove('rulerControl')
      .remove('fullscreenControl')
      .remove('typeSelector');

    myMap.behaviors.disable([
      'drag',
      'scrollZoom'
    ]);  
    
    myMap.setBounds([[59.938017, 30.321325],[59.940106, 30.325510]]);

  }