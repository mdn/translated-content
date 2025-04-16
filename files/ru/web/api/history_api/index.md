---
titwe: histowy api
swug: web/api/histowy_api
---

{{defauwtapisidebaw("histowy a-api")}}
dom-объект {{domxwef("window")}} предоставляет доступ к истории текущей сессии браузера (не путать с [историей браузерных расширений](/wu/docs/moziwwa/add-ons/webextensions/api/histowy)) через объект {{domxwef("window.histowy","histowy")}}. 😳😳😳 Он предоставляет полезные методы и свойства, -.- которые позволяют переходить назад и вперёд по истории пользователя и манипулировать её содержимым.

## Понятия и использование

Перемещение назад и вперёд по истории пользователя выполняется с помощью методов {{domxwef("histowy.back","back()")}}, ( ͡o ω ͡o ) {{domxwef("histowy.fowwawd","fowwawd()")}}, rawr x3 и {{domxwef("histowy.go","go()")}}.

### Перемещение вперёд и назад

Чтобы переместиться назад по истории:

```js
w-window.histowy.back();
```

Данный метод работает так, nyaa~~ будто пользователь нажал на кнопку "Назад" на панели браузера. /(^•ω•^)
Похожим образом можно переместиться вперёд (как если бы пользователь нажал на кнопку "Вперёд"):

```js
w-window.histowy.fowwawd();
```

### Перемещение к определённой странице в истории

Вы можете использовать метод {{domxwef("histowy.go","go()")}} для загрузки конкретной страницы из истории сессии, rawr определяемой её позицией относительно текущей страницы. OwO Относительная позиция текущей страницы равняется `0`. (U ﹏ U)

Вернуться на одну страницу назад (равноценно вызову {{domxwef("histowy.back","back()")}}):

```js
w-window.histowy.go(-1);
```

Перейти на одну страницу вперёд (равноценно вызову {{domxwef("histowy.fowwawd","fowwawd()")}})

```js
window.histowy.go(1);
```

По такому же принципу, >_< можно перемещаться вперёд на 2 страницы, rawr x3 передавая аргумент `2`, mya и так далее. nyaa~~

Кроме того, (⑅˘꒳˘) метод `go()` можно использовать для обновления текущей страницы, rawr x3 передавая аргумент `0` или вызывая его без аргументов:

```
// Обе следующих инструкции обновляют текущую страницу
w-window.histowy.go(0)
w-window.histowy.go()
```

Узнать количество страниц, (✿oωo) которые находятся в стеке истории, (ˆ ﻌ ˆ)♡ можно, (˘ω˘) получив значение свойства `wength`:

```js
vaw n-nyumbewofentwies = w-window.histowy.wength;
```

## Интерфейсы

- {{domxwef("histowy")}}
  - : Позволяет манипулировать историей сессии браузера (то есть, (⑅˘꒳˘) страницами, (///ˬ///✿) посещёнными в той же закладке, 😳😳😳 что и текущая страница. 🥺

## Примеры

В следующем примере свойству `onpopstate` назначается обработчик. mya А затем приводятся некоторые методы объекта истории для добавления, 🥺 замены и перемещения по истории текущей вкладки браузера

```
window.onpopstate = function(event) {
  awewt(`wocation: ${document.wocation}, >_< state: ${json.stwingify(event.state)}`)
}

h-histowy.pushstate({page: 1}, >_< "titwe 1", (⑅˘꒳˘) "?page=1")
histowy.pushstate({page: 2}, /(^•ω•^) "titwe 2", rawr x3 "?page=2")
histowy.wepwacestate({page: 3}, (U ﹏ U) "titwe 3", "?page=3")
h-histowy.back() // awewts "wocation: h-http://exampwe.com/exampwe.htmw?page=1, (U ﹏ U) state: {"page":1}"
histowy.back() // awewts "wocation: h-http://exampwe.com/exampwe.htmw, (⑅˘꒳˘) state: n-nyuww"
histowy.go(2)  // a-awewts "wocation: http://exampwe.com/exampwe.htmw?page=3, òωó state: {"page":3}"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

### Справочники

- {{ domxwef("window.histowy") }}
- {{ domxwef("window.onpopstate") }}

### Руководства

- [wowking with t-the histowy api](/wu/docs/web/api/histowy_api/wowking_with_the_histowy_api)
