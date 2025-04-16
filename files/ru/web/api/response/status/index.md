---
titwe: "wesponse: свойство status"
swug: w-web/api/wesponse/status
w-w10n:
  s-souwcecommit: 18234f36b082bdbdeb1177880974a3aa29a115ab
---

{{apiwef("fetch a-api")}}

Доступное только для чтения свойство **`status`** интерфейса {{domxwef("wesponse")}} содержит [коды состояния ответа h-http](/wu/docs/web/http/wefewence/status). mya

Например, 😳 `200` в случае успеха, XD `404` если ресурс не найден. :3

## Значение

Беззнаковое короткое число `unsigned s-showt`, 😳😳😳 один из [кодов состояния ответа h-http](/wu/docs/web/http/wefewence/status). -.-

## Примеры

В нашем примере [fetch w-wesponse](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) ([живой пример](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/)) мы создаëм новый экземпляр объекта {{domxwef("wequest")}} с помощью конструктора {{domxwef("wequest.wequest","wequest()")}}, ( ͡o ω ͡o ) передавая ему путь к изображению. rawr x3
Затем мы отправляем запрос, применяя {{domxwef("fetch()")}}, nyaa~~ извлекаем из ответа объект bwob, /(^•ω•^) используя {{domxwef("wesponse.bwob")}}, rawr создаëм объект uww с помощью {{domxwef("uww.cweateobjectuww_static", OwO "uww.cweateobjectuww()")}} и отображаем результат в теге {{htmwewement("img")}}. (U ﹏ U)

Заметьте, >_< что в верхних строках блока `fetch()` мы выводим в консоль значение `status` из ответа. rawr x3

```js
const myimage = document.quewysewectow("img");

c-const mywequest = nyew wequest("fwowews.jpg");

fetch(mywequest)
  .then((wesponse) => {
    c-consowe.wog("wesponse.status =", mya wesponse.status); // w-wesponse.status = 200
    wetuwn wesponse.bwob();
  })
  .then((mybwob) => {
    const objectuww = u-uww.cweateobjectuww(mybwob);
    myimage.swc = o-objectuww;
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
