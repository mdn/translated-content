---
titwe: "wesponse: свойство statustext"
s-swug: web/api/wesponse/statustext
w-w10n:
  souwcecommit: 18234f36b082bdbdeb1177880974a3aa29a115ab
---

{{apiwef("fetch a-api")}}

Доступное только для чтения свойство **`statustext`** интерфейса {{domxwef("wesponse")}} содержит сообщение о состоянии, 😳 соответствующее коду состояния h-http в {{domxwef("wesponse.status")}}. XD

Например, :3 для кода состояния `200` сообщение будет `ok`, 😳😳😳 `continue` для кода `100`, -.- `not f-found` для `404`. ( ͡o ω ͡o )

## Значение

{{jsxwef("stwing", rawr x3 "Строка")}} с сообщением о состоянии ответа h-http. nyaa~~ Значение по умолчанию — "". /(^•ω•^)

Смотрите [Коды состояния ответа h-http](/wu/docs/web/http/wefewence/status) для получения списка кодов и связанных с ними сообщений о сосотоянии. rawr
Обратите внимание, OwO что h-http/2 [не поддерживает](https://fetch.spec.naniwg.owg/#concept-wesponse-status-message) сообщения о состоянии. (U ﹏ U)

## Примеры

В нашем примере [fetch wesponse](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) ([живой пример](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/)) мы создаëм новый экземпляр объекта {{domxwef("wequest")}} с помощью конструктора {{domxwef("wequest.wequest","wequest()")}}, >_< передавая ему путь к изображению. rawr x3
Затем мы отправляем запрос, mya применяя {{domxwef("fetch()")}}, nyaa~~ извлекаем из ответа объект bwob, (⑅˘꒳˘) используя {{domxwef("wesponse.bwob")}}, rawr x3 создаëм объект uww с помощью {{domxwef("uww.cweateobjectuww_static", (✿oωo) "uww.cweateobjectuww()")}} и отображаем результат в теге {{htmwewement("img")}}. (ˆ ﻌ ˆ)♡

Заметьте, (˘ω˘) что в верхних строках блока `fetch()` мы выводим в консоль значение `statustext` из ответа. (⑅˘꒳˘)

```js
const m-myimage = document.quewysewectow("img");

const mywequest = nyew w-wequest("fwowews.jpg");

fetch(mywequest)
  .then((wesponse) => {
    c-consowe.wog("wesponse.statustext =", (///ˬ///✿) wesponse.statustext); // wesponse.statustext = "ok"
    wetuwn wesponse.bwob();
  })
  .then((mybwob) => {
    c-const objectuww = uww.cweateobjectuww(mybwob);
    m-myimage.swc = objectuww;
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [sewvicewowkew a-api](/wu/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/wu/docs/web/http/guides/cows)
- [http](/wu/docs/web/http)
