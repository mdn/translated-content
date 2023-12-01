---
title: Использование Geolocation API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Geolocation API позволяет пользователю предоставлять своё местоположение web-приложению, если пользователь согласится предоставить его. Из соображений конфиденциальности, у пользователя будет запрошено разрешение на предоставление информации о местоположении.

## Объект геолокации

[API геолокации](/ru/docs/Web/API/Geolocation) доступен через объект {{domxref("navigator.geolocation")}}.

Если объект существует, функции определения местоположения доступны. Вы можете проверить это следующим образом:

```js
if ("geolocation" in navigator) {
  /* местоположение доступно */
} else {
  /* местоположение НЕ доступно */
}
```

### Получение текущего местоположения

Чтобы получить текущее местоположение пользователя, вы должны вызвать метод {{domxref("geolocation.getCurrentPosition()","getCurrentPosition()")}}. Это инициирует асинхронный запрос для обнаружения местоположения пользователя, и запрашивает аппаратные средства позиционирования, чтобы получить последнюю актуальную информацию. Когда местоположение определено, выполняется callback. По желанию вы можете указать вторую callback функцию для обработки ошибки, которая запустится в случае ошибки. Третий, опциональный параметр - объект с опциями, где вы можете настроить максимальное значение возвращаемых данных, время ожидания ответа на запрос, и, при желании, точность возвращаемых данных.

> **Примечание:** По умолчанию {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}} пытается вернуть результат так быстро, как это возможно, за счёт чего даёт не очень точный результат. Это может быть полезно, если вам нужно быстро получить ответ, при этом не важна точность. Устройства с GPS, например, могут пытаться скорректировать данные GPS около минуты и даже больше, поэтому в самом начале могут вернуться менее точные данные (местоположение IP или wifi-сети), полученные {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}}.

```js
navigator.geolocation.getCurrentPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

Функция `do_something()`, в примере выше, будет вызвана лишь тогда, когда данные о местоположении будут получены.

### Наблюдение за текущим местоположением

Если данные о местоположении меняются (либо устройство находится в движении, либо пришли более точные данные о геопозиции), вы можете указать callback функцию, которая будет вызывается при любом обновлении данных о местоположении. Это делается с использованием функции {{domxref("Geolocation.watchPosition()","watchPosition()")}}, которая имеет несколько входных параметров: {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}}. Эта функция вызывается много раз, позволяя браузеру обновлять данные о текущей локации либо во время движения, либо после получения более точной информации о местоположении (после применения более точных приёмов). Функция, которая вызывается при ошибке, для {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}}, при желании, может быть вызвана неоднократно.

> **Примечание:** вы можете использовать {{domxref("Geolocation.watchPosition()","watchPosition()")}} без вызова {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}}.

```js
var watchID = navigator.geolocation.watchPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

Метод {{domxref("Geolocation.watchPosition()","watchPosition()")}} возвращает числовой ID, который может быть использован для идентификации наблюдателя за местоположением; используйте его вместе с методом {{domxref("Geolocation.clearWatch()","clearWatch()")}}, чтобы перестать получать новые данные о местоположении.

```js
navigator.geolocation.clearWatch(watchID);
```

### Точная настройка отклика

{{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}} и {{domxref("Geolocation.watchPosition()","watchPosition()")}} принимают колбэк-функцию при успехе, необязательную колбэк-функцию при ошибке и необязательный объект [`PositionOptions`](/ru/docs/Web/API/PositionOptions).

Этот объект позволяет вам включить возможность определения позиции с высокой точностью, указать максимальное время кеширования значения позиции (при повторных запросах, пока время не вышло, вам будет возвращается кешированное значение; после браузер будет запрашивать актуальные данные), а также указать значение, устанавливающее интервал — как часто браузер должен пытаться получить данные о местоположении, прежде чем выйдет время.

Вызов {{domxref("Geolocation.watchPosition()","watchPosition")}} может выглядит следующим образом:

```js
function geo_success(position) {
  do_something(position.coords.latitude, position.coords.longitude);
}

function geo_error() {
  alert("Извините, нет доступной позиции.");
}

var geo_options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

var wpid = navigator.geolocation.watchPosition(
  geo_success,
  geo_error,
  geo_options,
);
```

## Описание позиции

Местоположение пользователя содержится в экземпляре объекта {{domxref("GeolocationPosition")}}, содержащего внутри экземпляр другого объекта — {{domxref("GeolocationCoordinates")}}.

Экземпляр `GeolocationPosition` содержит только две вещи, свойство `coords`, внутри которого `GeolocationCoordinates` и свойство timestamp, внутри которого экземпляр {{domxref("DOMTimeStamp")}}, предоставляющее метку времени, созданную при получении данные.

Экземпляр `GeolocationCoordinates` содержит некоторое количество свойств, двое из которых вы будете чаще всего использовать: `latitude` и `longitude`, которые помогут вам отобразить полученную позицию на карте. Поэтому многие колбэк-функции с успешным получением позиции выглядят очень просто:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Дальше код, который что-то делает с широтой(latitude) и долготой(longitude)
}
```

Однако, вы также можете получить и другую информацию из объекта `GeolocationCoordinates`, такую как высота над уровнем моря, скорость, направление устройства и точные данные о высоте, долготе и широте.

## Обработка ошибок

Callback-функция для ошибок, если она была передана в `getCurrentPosition()` или `watchPosition()`, ожидает экземпляр объекта [`GeolocationPositionError`](/ru/docs/Web/API/GeolocationPositionError) в качестве первого аргумента. Он будет содержать два свойства, `code`, который укажет на то, какая именно ошибка произошла и понятное для человека `message`, описывающее значение поля code.

Функция может выглядеть примерно так:

```js
function errorCallback(error) {
  alert("ERROR(" + error.code + "): " + error.message);
}
```

## Примеры

Следующий пример использует Geolocation API для того, чтобы получить широту и долготу пользователя. При успешном выполнении, ссылка будет вести на `openstreetmap.org`, который отобразит пользовательскую позицию на карте.

```css hidden
body {
  padding: 20px;
  background-color: #ffffc9;
}

button {
  margin: 0.5rem 0;
}
```

### HTML

```html
<button id="find-me">Show my location</button><br />
<p id="status"></p>
<a id="map-link" target="_blank"></a>
```

### JavaScript

```js
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
  }

  function error() {
    status.textContent = "Невозможно получить ваше местоположение";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation не поддерживается вашим браузером";
  } else {
    status.textContent = "Определение местоположения…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
```

### Демо

{{EmbedLiveSample('Примеры', 350, 150, "", "", "", "geolocation")}}
