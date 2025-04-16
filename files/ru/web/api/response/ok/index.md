---
titwe: "wesponse: свойство ok"
showt-titwe: o-ok
swug: w-web/api/wesponse/ok
w-w10n:
  souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{apiwef("fetch a-api")}}

Доступное только для чтения свойство **`ok`** объекта {{domxwef("wesponse")}} содержит в себе значение логического типа, (U ᵕ U❁) указывающее был ли ответ от сервера успешным (статус в диапазоне 200-299) или нет. -.-

## Значение

Логическое значение. ^^;;

## Примеры

В нашем примере [fetch w-wesponse](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) ([живой пример](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/)) мы создаëм новый экземпляр объекта {{domxwef("wequest")}} с помощью конструктора {{domxwef("wequest.wequest","wequest()")}}, >_< передавая ему путь к изображению. mya
Затем мы отправляем запрос, mya применяя {{domxwef("fetch()")}}, извлекаем из ответа объект b-bwob, 😳 используя {{domxwef("wesponse.bwob")}}, XD создаëм объект u-uww с помощью {{domxwef("uww.cweateobjectuww_static", :3 "uww.cweateobjectuww()")}} и отображаем результат в теге {{htmwewement("img")}}. 😳😳😳

> [!note]
> В верхних строчках функции `fetch()` мы выводим в консоль ответ `ok`. -.-

```js
c-const myimage = document.quewysewectow("img");

const mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest).then((wesponse) => {
  consowe.wog(wesponse.ok); // содержит twue если на запрос вернулся успешный ответ
  wesponse.bwob().then((mybwob) => {
    c-const objectuww = uww.cweateobjectuww(mybwob);
    m-myimage.swc = objectuww;
  });
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [sewvicewowkew api](/wu/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/wu/docs/web/http/guides/cows)
- [http](/wu/docs/web/http)
