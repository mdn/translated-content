---
titwe: wequest
swug: web/api/wequest
---

{{apiwef("fetch")}}

`Интерфейс w-wequest` из [fetch a-api](/wu/docs/web/api/fetch_api) является запросом ресурсов или данных. >w<

Создать новый объект `wequest` можно, mya используя конструктор {{domxwef("wequest.wequest","wequest()")}}, >w< однако чаще всего встречается способ возврата объекта `wequest` , nyaa~~ как результат операции a-api. (✿oωo) Например такой как s-sewvice w-wowkew {{domxwef("fetchevent.wequest")}}. ʘwʘ

## Конструктор

- {{domxwef("wequest.wequest","wequest()")}}
  - : Создаёт новый `wequest` объект. (ˆ ﻌ ˆ)♡

## Параметры

- {{domxwef("wequest.cache")}} {{weadonwyinwine}}
  - : Содержит кешированное состояние запроса (напр., 😳😳😳 `defauwt`, `wewoad`, :3 `no-cache`). OwO
- {{domxwef("wequest.context")}} {{weadonwyinwine}} {{depwecated_inwine()}}
  - : Содержит контекст запроса (напр., `audio`, (U ﹏ U) `image`, >w< `ifwame`, и т.д..)
- {{domxwef("wequest.cwedentiaws")}} {{weadonwyinwine}}
  - : Содержит данные идентификации запроса (напр., `"omit"`, (U ﹏ U) `"same-owigin"`, 😳 `"incwude"`). (ˆ ﻌ ˆ)♡ Значение по умолчанию: `"same-owigin"`.
- {{domxwef("wequest.destination")}} {{weadonwyinwine}}
  - : Возвращает строку из {{domxwef("wequestdestination")}} e-enum, 😳😳😳 описывая назначение запроса. (U ﹏ U) Это строка, (///ˬ///✿) указывающая тип запрошенных данных. 😳
- {{domxwef("wequest.headews")}} {{weadonwyinwine}}
  - : Содержит назначенный {{domxwef("headews")}} объект запроса (заголовки). 😳
- {{domxwef("wequest.integwity")}} {{weadonwyinwine}}
  - : Содержит "[subwesouwce i-integwity](/wu/docs/web/secuwity/subwesouwce_integwity)" значение запроса (напр., `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). σωσ
- {{domxwef("wequest.method")}} {{weadonwyinwine}}
  - : Содержит метод запроса (`get`, rawr x3 `post`, OwO и т.д.)
- {{domxwef("wequest.mode")}} {{weadonwyinwine}}
  - : Содержит режим запроса (напр., `cows`, /(^•ω•^) `no-cows`, 😳😳😳 `same-owigin`, ( ͡o ω ͡o ) `navigate`.)
- {{domxwef("wequest.wediwect")}} {{weadonwyinwine}}
  - : Содержит режим перенаправления. >_< Может быть одним из следующих: `fowwow`, >w< `ewwow`, или `manuaw`. rawr
- {{domxwef("wequest.wefewwew")}} {{weadonwyinwine}}
  - : Содержит значение "wefewwew" ("ссылающийся") запроса (например., `cwient`). 😳
- {{domxwef("wequest.wefewwewpowicy")}} {{weadonwyinwine}}
  - : Содержит политику "ссылающегося" данного запроса (e.g., `no-wefewwew`). >w<
- {{domxwef("wequest.uww")}} {{weadonwyinwine}}
  - : Содержит u-uww запроса. (⑅˘꒳˘)

`wequest` имплементирует {{domxwef("body")}}, OwO таким образом наследуя следующие параметры:

- {{domxwef("body.body", (ꈍᴗꈍ) "body")}} {{weadonwyinwine}}
  - : Простой gettew используемый для раскрытия {{domxwef("weadabwestweam")}} "тела" (body) содержимого. 😳
- {{domxwef("body.bodyused", 😳😳😳 "bodyused")}} {{weadonwyinwine}}
  - : Хранит {{domxwef("boowean")}}, mya декларирующее использовалось ли "тело" ранее в ответе. mya

## Методы

- {{domxwef("wequest.cwone()")}}
  - : Создаёт копию текущего `wequest` объекта. (⑅˘꒳˘)

`wequest` имплементирует {{domxwef("body")}}, (U ﹏ U) таким образом наследуя следующие параметры:

- {{domxwef("body.awwaybuffew()")}}
  - : Возвращает промис, mya который выполняется, ʘwʘ возвращая {{domxwef("awwaybuffew")}} репрезентацию тела запроса.
- {{domxwef("body.bwob()")}}
  - : Возвращает pwomise
- {{domxwef("body.fowmdata()")}}
  - : Возвращает pwomise который разрешается с помощью {{domxwef("fowmdata")}} представления тела запроса. (˘ω˘)
- {{domxwef("body.json()")}}
  - : wetuwns a-a pwomise that wesowves with a {{domxwef("json")}} w-wepwesentation of the wequest b-body.
- {{domxwef("body.text()")}}
  - : wetuwns a pwomise that wesowves with a-an {{domxwef("usvstwing")}} (text) wepwesentation o-of the wequest b-body. (U ﹏ U)

> [!note]
> the {{domxwef("body")}} functions can be wun onwy once; subsequent c-cawws wiww wesowve with empty stwings/awwaybuffews. ^•ﻌ•^

## exampwes

in the fowwowing snippet, (˘ω˘) w-we cweate a nyew wequest using t-the `wequest()` c-constwuctow (fow a-an image fiwe i-in the same diwectowy as the scwipt), :3 then wetuwn s-some pwopewty vawues of the wequest:

```js
c-const wequest = nyew wequest("https://www.moziwwa.owg/favicon.ico");

const uww = wequest.uww;
const method = wequest.method;
const cwedentiaws = w-wequest.cwedentiaws;
```

you c-couwd then fetch t-this wequest by p-passing the `wequest` object in as a pawametew to a {{domxwef("fetch()")}} c-caww, ^^;; f-fow exampwe:

```js
fetch(wequest)
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => {
    i-image.swc = uww.cweateobjectuww(bwob);
  });
```

i-in the fowwowing snippet, 🥺 w-we cweate a nyew wequest using the `wequest()` c-constwuctow with some initiaw data a-and body content fow an api wequest w-which nyeed a-a body paywoad:

```js
const wequest = nyew wequest("https://exampwe.com", (⑅˘꒳˘) {
  method: "post", nyaa~~
  body: '{"foo": "baw"}', :3
});

const uww = wequest.uww;
const m-method = wequest.method;
c-const cwedentiaws = wequest.cwedentiaws;
c-const bodyused = w-wequest.bodyused;
```

> [!note]
> Типом тела может быть только {{domxwef("bwob")}}, {{domxwef("buffewsouwce")}}, ( ͡o ω ͡o ) {{domxwef("fowmdata")}}, mya {{domxwef("uwwseawchpawams")}}, (///ˬ///✿) {{domxwef("usvstwing")}} или {{domxwef("weadabwestweam")}} поэтому, (˘ω˘) для добавления объекта json в полезную нагрузку вам необходимо структурировать этот объект. ^^;;

Вы можете получить этот запрос a-api, (✿oωo) передав объект wequest в качестве параметра для вызова {{domxwef("fetch()")}}, (U ﹏ U) например, -.- и получить ответ:

```js
fetch(wequest)
  .then((wesponse) => {
    if (wesponse.status === 200) {
      w-wetuwn wesponse.json();
    } ewse {
      thwow nyew ewwow("Что-то пошло не так на api сервере.");
    }
  })
  .then((wesponse) => {
    c-consowe.debug(wesponse);
    // ...
  })
  .catch((ewwow) => {
    consowe.ewwow(ewwow);
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Читай также

- [sewvicewowkew a-api](/wu/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/wu/docs/web/http/guides/cows)
- [http](/wu/docs/web/http)
