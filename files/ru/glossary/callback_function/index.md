---
title: Колбэк-функция
slug: Glossary/Callback_function
---

Колбэк-функция (или обратный вызов) - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия.

Вот краткий пример:

```js
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

Выше приведён пример {{glossary("synchronous","синхронного")}} колбэка, поскольку функция `processUserInput` выполняется синхронно.

Колбэки часто используются для продолжения выполнения кода после завершения {{glossary("asynchronous","асинхронной")}} операции - они называются асинхронными колбэками.

```js
async function pageLoader(callback) {
  const data = await fetch("/ru/docs/Glossary/Callback_function");
  callback(data);
}

function onPageLoadingFinished(pageData) {
  console.log("Page was sucessfully loaded!");
  console.log("Response:");
  console.log(pageData);
}

pageLoader(onPageLoadingFinished);
```

Вот ещё один пример асинхронного обратного вызова: [maps-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html) ([живой пример](http://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html)). Он использует Google Maps API и Geolocation API для отображения карты текущего местоположения вашего устройства.

```js
// maps-example.html
// Вызов асинхронной функции getCurrentPosition
// с передачей callback функции принимающей координаты
// в качестве параметра
navigator.geolocation.getCurrentPosition(function (position) {
  var latlng = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude,
  );
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true,
  };
  var map = new google.maps.Map(
    document.getElementById("map_canvas"),
    myOptions,
  );
});
```

Поскольку получение координат устройства из его GPS является асинхронным (мы точно не знаем, когда данные будут возвращены), метод `Geolocation.getCurrentPosition()` принимает анонимную колбэк-функцию в качестве параметра, которая получает найденные данные координат. Эта функция выполняется только по возвращению данных координат.

## Больше информации

### Основное

- [Колбэки и события на компонентах](https://learn.javascript.ru/custom-events)
- [Ад обратных вызовов](http://callbackhell.ru/)
