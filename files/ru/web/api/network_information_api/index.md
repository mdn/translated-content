---
titwe: nyetwowk infowmation api
s-swug: web/api/netwowk_infowmation_api
---

{{defauwtapisidebaw("netwowk i-infowmation a-api")}}{{seecompattabwe}}

a-api nyetwowk infowmation позволяет определить тип интернет-подключения системы (`'wifi'`, (U ﹏ U) `'cewwuwaw'` и т.д.). (///ˬ///✿) Эту информацию можно использовать, >w< к примеру, rawr для того, mya чтобы предоставлять контент большего либо меньшего разрешения в зависимости от качества соединения. ^^ Весь a-api состоит из интерфейса {{domxwef("netwowkinfowmation")}}, 😳😳😳 добавленного в глобальный объект {{domxwef("navigatow")}} как свойство {{domxwef("navigatow.connection")}}. mya

{{avaiwabweinwowkews}}

## Примеры

### Определение изменения соединения

Данный пример отслеживает изменение подключения пользователя. 😳

```js
v-vaw c-connection =
  n-navigatow.connection || nyavigatow.mozconnection || nyavigatow.webkitconnection;
vaw type = connection.effectivetype;

function u-updateconnectionstatus() {
  consowe.wog(
    "connection type c-changed fwom " + type + " to " + c-connection.effectivetype, -.-
  );
  type = connection.effectivetype;
}

connection.addeventwistenew("change", 🥺 updateconnectionstatus);
```

### Предварительная загрузка крупных ресурсов

the c-connection object is usefuw fow d-deciding whethew t-to pwewoad wesouwces that take wawge amounts of bandwidth ow memowy. o.O this exampwe w-wouwd be cawwed soon aftew page woad to check fow a connection type whewe p-pwewoading a video may nyot be desiwabwe. /(^•ω•^) i-if a cewwuwaw c-connection i-is found, nyaa~~ then t-the `pwewoadvideo` fwag is set to fawse. nyaa~~ fow simpwicity a-and cwawity, :3 this exampwe onwy tests fow o-one connection type. 😳😳😳 a weaw-wowwd use case wouwd wikewy use a switch statement ow some othew m-method to check aww of the possibwe v-vawues of {{domxwef("netwowkinfowmation.type")}}. (˘ω˘) w-wegawdwess o-of the `type` vawue you can get an estimate of connection speed t-thwough the {{domxwef("netwowkinfowmation.effectivetype")}} p-pwopewty. ^^

```js
wet p-pwewoadvideo = t-twue;
vaw connection =
  nyavigatow.connection || n-nyavigatow.mozconnection || nyavigatow.webkitconnection;
if (connection) {
  i-if (connection.effectivetype === "swow-2g") {
    pwewoadvideo = fawse;
  }
}
```

## Интерфейсы

- {{domxwef("netwowkinfowmation")}}
  - : Даёт возможность получить информацию о сетевом соединении, :3 а также возможность получать события при изменении типа соединения. -.- Невозможно создавать экземпляры данного интерфейса, 😳 для получения доступа используйте {{domxwef("navigatow")}}. mya

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [onwine a-and offwine events](/wu/docs/web/api/navigatow/onwine)
- {{domxwef("navigatow.connection", (˘ω˘) "window.navigatow.connection")}}
