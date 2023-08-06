---
title: NavigatorOnLine.onLine
slug: orphaned/Web/API/NavigatorOnLine/onLine
---

{{ApiRef("HTML DOM")}}

Возвращает сетевой статус браузера. Свойство возвращает логическое (boolean) значение, `true` означает online и `false` означает offline.Свойство обновляется всякий раз, когда способность браузера к подключению к сети изменится. Обновление происходит тогда, когда пользователь следует по ссылке или когда скрипт запрашивает удалённую страницу. Например, свойство должно вернуть `false`, когда пользователь кликает по ссылке, вскоре после потери подключения к интернету.

Браузеры реализуют это свойство по-разному.

В Chrome и Safari, если браузер не может соединиться с локальной сетью (LAN) или роутером, это будет означать offline; во всех остальных случаях вернётся `true`.Таким образом, мы можем предположить что браузер не в сети, когда возвращаемое значение `false`, но вы не можете предположить что значение true обязательно обозначает что браузер может получить доступ к интернету. Вы можете получать ложные срабатывания, например, в случаях, когда компьютер под управлением программного обеспечения для виртуализации, которое имеет виртуальные сетевые адаптеры, которые всегда "Подключено". Поэтому, если вы действительно хотите, чтобы определять состояние браузера, вы должны разработать дополнительные средства проверки. Чтобы узнать больше, смотрите статью HTML5 [Working Off the Grid](http://www.html5rocks.com/en/mobile/workingoffthegrid.html).

В Firefox и Internet Explorer, переключение браузера в автономный режим посылает `false` значение. Во всех остальных случаях возвращается значение `true`.

Вы можете увидеть изменения в состоянии сети путём обработки событий [`window.ononline`](/ru/docs/Web/API/document.ononline) и [`window.onoffline`](/ru/docs/Web/API/document.onoffline).

## Синтаксис

```
online = window.navigator.onLine;
```

### Описание

`online` это логическое `true` или `false`.

## Пример

Посмотрите на [действующий пример](http://html5-demos.appspot.com/static/navigator.onLine.html).

Для проверки находитесь ли вы в сети, вызовите `window.navigator.onLine`, как показано в примере:

```js
if (navigator.onLine) {
  alert('online');
} else {
  alert('offline');
}
```

Если браузер не поддерживает `navigator.onLine` в примере выше, то всегда будет `false`/`undefined`.

Чтобы увидеть изменения в состоянии сети, используйте [`addEventListener`](/ru/docs/DOM/element.addEventListener "DOM/element.addEventListener") для обработки событий `window.ononline` и `window.onoffline`, как показано в примере:

```js
window.addEventListener("offline", function(e) {alert("offline");})

window.addEventListener("online", function(e) {alert("online");})
```

## Совместимость в браузерах

{{Compat("api.NavigatorOnLine.onLine")}}

## Примечание

См [Online/Offline](/ru/docs/Online_and_offline_events "Online_and_offline_events") события для более детального описания этого свойства, а также новых возможностей в автономном режиме, введённых в Firefox 3.

## Спецификация

Описана в [рабочем проекте HTML 5](http://www.whatwg.org/specs/web-apps/current-work/#navigator.online)

## Смотрите также

- [HTML5 Rocks: Working Off the Grid With HTML5 Offline](http://www.html5rocks.com/en/mobile/workingoffthegrid.html)
- [HTML5 Rocks: "Offline": What does it mean and why should I care?](http://www.html5rocks.com/en/tutorials/offline/whats-offline/)
- [Mozilla Blog: Offline Web Applications](http://hacks.mozilla.org/2010/01/offline-web-applications/)
