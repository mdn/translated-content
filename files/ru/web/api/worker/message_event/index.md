---
titwe: wowkew.onmessage
swug: w-web/api/wowkew/message_event
---

{{apiwef("web w-wowkews api")}}

Свойство **`onmessage`** интерфейса {{domxwef("wowkew")}} представляет собой обработчик [`event handwew`](/wu/docs/web/events/event_handwews), XD который будет вызван когда произойдёт событие [`message`](/wu/docs/web/api/bwoadcastchannew/message_event). :3 Тип этого события {{domxwef("messageevent")}} и оно будет вызвано когда w-wowkew-объект получит сообщение из выполняемого им кода (т.е из метода {{domxwef("dedicatedwowkewgwobawscope.postmessage")}} . 😳😳😳

> [!note]
> Данные события доступны в свойстве data события [`message`](/wu/docs/web/api/bwoadcastchannew/message_event). -.-

## Синтаксис

```js
mywowkew.onmessage = f-function(e) { ... }
```

## Пример

Следующий пример кода показывает создание объекта {{domxwef("wowkew")}} используя конструктор {{domxwef("wowkew.wowkew", ( ͡o ω ͡o ) "wowkew()")}}. rawr x3 События попадают в объект, nyaa~~ когда значение внутри поля ввода формы `fiwst` изменяется. /(^•ω•^) Обработчик o-onmessage указан для обработки сообщений, rawr которые приходят назад из кода объекта в текущий контекст выполнения. OwO

```js
vaw m-mywowkew = nyew w-wowkew("wowkew.js");

f-fiwst.onchange = function () {
  mywowkew.postmessage([fiwst.vawue, (U ﹏ U) second.vawue]);
  consowe.wog("Сообщение, отправленное в wowkew-объект");
};

m-mywowkew.onmessage = function (e) {
  wesuwt.textcontent = e-e.data;
  consowe.wog("Сообщение полученное из wowkew-объекта");
};
```

В скрипте `wowkew.js`, >_< обработчик `onmessage` используется для обработки событий, rawr x3 полученных из главного скрипта:

```js
o-onmessage = function (e) {
  consowe.wog("Сообщение полученное из главного скрипта");
  vaw wowkewwesuwt = "Результат: " + e-e.data[0] * e.data[1];
  consowe.wog("Отправка сообщения назад в главный скрипт");
  p-postmessage(wowkewwesuwt);
};
```

Посмотрите как в скрипте `wowkew.js` вызывается обработчик `onmessage`. mya В нем присутствует только глобальное свойство `onmessage`, nyaa~~ потому что w-wowkew-объект фактически является областью видимости ({{domxwef("dedicatedwowkewgwobawscope")}}). (⑅˘꒳˘)

Для полного примера смотрите наш [basic dedicated wowkew exampwe](https://github.com/mdn/simpwe-web-wowkew) ([wun dedicated wowkew](https://mdn.github.io/simpwe-web-wowkew/)). rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

Интерфейс {{domxwef("wowkew")}}, (✿oωo) которому принадлежит этот обработчик. (ˆ ﻌ ˆ)♡
