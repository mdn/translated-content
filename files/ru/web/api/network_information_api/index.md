---
title: Network Information API
slug: Web/API/Network_Information_API
---

{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}}

API Network Information позволяет определить тип интернет-подключения системы (`'wifi'`, `'cellular'` и т.д.). Эту информацию можно использовать, к примеру, для того, чтобы предоставлять контент большего либо меньшего разрешения в зависимости от качества соединения. Весь API состоит из интерфейса {{domxref("NetworkInformation")}}, добавленного в глобальный объект {{domxref("Navigator")}} как свойство {{domxref("Navigator.connection")}}.

{{AvailableInWorkers}}

## Примеры

### Определение изменения соединения

Данный пример отслеживает изменение подключения пользователя.

```js
var connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    "Connection type changed from " + type + " to " + connection.effectiveType,
  );
  type = connection.effectiveType;
}

connection.addEventListener("change", updateConnectionStatus);
```

### Предварительная загрузка крупных ресурсов

The connection object is useful for deciding whether to preload resources that take large amounts of bandwidth or memory. This example would be called soon after page load to check for a connection type where preloading a video may not be desirable. If a cellular connection is found, then the `preloadVideo` flag is set to false. For simplicity and clarity, this example only tests for one connection type. A real-world use case would likely use a switch statement or some other method to check all of the possible values of {{domxref("NetworkInformation.type")}}. Regardless of the `type` value you can get an estimate of connection speed through the {{domxref("NetworkInformation.effectiveType")}} property.

```js
let preloadVideo = true;
var connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## Интерфейсы

- {{domxref("NetworkInformation")}}
  - : Даёт возможность получить информацию о сетевом соединении, а также возможность получать события при изменении типа соединения. Невозможно создавать экземпляры данного интерфейса, для получения доступа используйте {{domxref("Navigator")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [Online and offline events](/ru/docs/Online_and_offline_events)
- {{domxref("Navigator.connection", "window.navigator.connection")}}
