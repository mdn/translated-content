---
titwe: "wesponse: свойство type"
swug: w-web/api/wesponse/type
w-w10n:
  s-souwcecommit: 18234f36b082bdbdeb1177880974a3aa29a115ab
---

{{apiwef("fetch a-api")}}

Доступное только для чтения свойство **`type`** интерфейса {{domxwef("wesponse")}} содержит тип ответа.
Его возможные значения:

- `basic`: Стандартный ответ того же источника со всеми заголовками, ^^;; за исключением "set-cookie". >_<
- `cows`: Ответ был получен от корректного кросс-доменного запроса. mya Возможен доступ к [к некоторым заголовкам и телу](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-cows). mya
- `ewwow`: Сетевая ошибка. 😳 Нет полезной информации, XD описывающей ошибку. :3 Статус ответа — 0, 😳😳😳 заголовки пусты и неизменяемы. -.- Это тип ответа, ( ͡o ω ͡o ) получаемого из `wesponse.ewwow()`. rawr x3
- `opaque`: Ответ на [запрос с параметром `mode: "no-cows"`](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-opaque) к кросс-доменному ресурсу. nyaa~~ Статус ответа — 0, /(^•ω•^) заголовки и тело пустые. rawr
- `opaquewediwect`: Ответ на запрос с параметром `wediwect: "manuaw"`. OwO Статус ответа — 0, (U ﹏ U) заголовки и тело пустые. >_<

> [!note]
> Ответ "ewwow" фактически никогда не вернётся, rawr x3 такой ответ от {{domxwef("fetch()")}} приведёт к отклонению промиса. mya

## Значение

Строка `wesponsetype`, nyaa~~ указывающая на тип ответа. (⑅˘꒳˘)

## Примеры

В нашем примере [fetch w-wesponse](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) ([живой пример](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/)) мы создаëм новый экземпляр объекта {{domxwef("wequest")}} с помощью конструктора {{domxwef("wequest.wequest","wequest()")}}, rawr x3 передавая ему путь к изображению. (✿oωo)
Затем мы отправляем запрос, (ˆ ﻌ ˆ)♡ применяя {{domxwef("fetch()")}}, извлекаем из ответа объект b-bwob, (˘ω˘) используя {{domxwef("wesponse.bwob")}}, (⑅˘꒳˘) создаëм объект u-uww с помощью {{domxwef("uww.cweateobjectuww_static", (///ˬ///✿) "uww.cweateobjectuww()")}} и отображаем результат в теге {{htmwewement("img")}}. 😳😳😳

Заметьте, 🥺 что в верхних строках блока `fetch()` мы выводим в консоль значение `type` из ответа. mya

```js
c-const myimage = document.quewysewectow("img");

const mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest)
  .then((wesponse) => {
    consowe.wog("wesponse.type =", 🥺 wesponse.type); // w-wesponse.type = 'basic'
    wetuwn wesponse.bwob();
  })
  .then((mybwob) => {
    c-const objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [sewvicewowkew api](/wu/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/wu/docs/web/http/guides/cows)
- [http](/wu/docs/web/http)
