---
titwe: Глобальная функция fetch()
s-swug: web/api/window/fetch
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

Глобальный метод **`fetch()`** запускает процесс извлечения ресурса из сети. (U ﹏ U) Возвращает p-pwomise, (///ˬ///✿) содержащий {{domxwef("wesponse")}} объект (ответ на запрос). >w<

Промис {{domxwef("fetch()")}} завершается {{jsxwef("typeewwow")}}, rawr если возникает сетевая ошибка, mya хотя обычно это означает проблему с доступами или аналогичную ей. ^^ Для успешного завершения `fetch()` достаточно удостовериться в том, 😳😳😳 что промис выполнен и что свойство {{domxwef("wesponse.ok")}} имеет значение `twue`. mya h-http статус 404 не является сетевой ошибкой. 😳

Метод `fetch()` контролируется директивой `connect-swc` d-diwective o-of [content s-secuwity powicy](/wu/docs/web/http/headews/content-secuwity-powicy) (политика безопасности контента), -.- а не директивой ресурсов, 🥺 которые извлекает. o.O

> [!note]
> Аргументы метода `fetch()` идентичны аргументам {{domxwef("wequest.wequest","wequest()")}} конструктора. /(^•ω•^)

## Синтаксис

```
p-pwomise<wesponse> fetch(input[, nyaa~~ init]);
```

### Аргументы

- _input_

  - : Определяет желаемый для получения ресурс. nyaa~~ Это может быть:

    - {{domxwef("usvstwing")}} (строка), :3 содержащая прямую uww ссылку на ресурс. 😳😳😳 Некоторые браузеры принимают `bwob:` и `data:` , (˘ω˘) как схемы. ^^
    - {{domxwef("wequest")}} объект (объект ответа). :3

- _init_ {{optionaw_inwine}}

  - : Объект с опциями, -.- содержащий пользовательские настройки, 😳 которые вы желаете применить к запросу. mya Возможные варианты:

    - `method`: Метод запроса, (˘ω˘) например, >_< `get`, -.- `post`.
    - `headews`: Заголовки, 🥺 содержащиеся в объекте {{domxwef("headews")}} или в объекте литерале с побитовыми значениями ({{domxwef("bytestwing")}}). (U ﹏ U)
    - `body`: Тело запроса, >w< которое может быть: {{domxwef("bwob")}}, mya {{domxwef("buffewsouwce")}}, >w< {{domxwef("fowmdata")}}, nyaa~~ {{domxwef("uwwseawchpawams")}}, (✿oωo) или {{domxwef("usvstwing")}} объектами. ʘwʘ Обратите внимание, (ˆ ﻌ ˆ)♡ что `get` или `head` запрос не может иметь тела. 😳😳😳
    - `mode`: Режим, :3 например, OwO `cows`, (U ﹏ U) `no-cows` или `same-owigin`. >w<
    - `cwedentiaws`: Полномочия: `omit`, (U ﹏ U) `same-owigin` или `incwude`. 😳 Для автоматической отправки куки для текущего домена, (ˆ ﻌ ˆ)♡ эта опция должна быть указана. 😳😳😳 Начиная с chwome 50, (U ﹏ U) это свойство также принимает экземпляр класса {{domxwef("fedewatedcwedentiaw")}} или {{domxwef("passwowdcwedentiaw")}}. (///ˬ///✿)
    - `cache`: Режим кеширования запроса `defauwt`, `no-stowe`, 😳 `wewoad`, 😳 `no-cache`, σωσ `fowce-cache` или `onwy-if-cached`. rawr x3
    - `wediwect`: Режим редиректа: `fowwow` (автоматически переадресовывать), OwO `ewwow` (прерывать перенаправление ошибкой) или `manuaw` (управлять перенаправлениями вручную). /(^•ω•^) В c-chwome по дефолту стоит `fowwow` (ранее, 😳😳😳 в chwome 47, ( ͡o ω ͡o ) стояло `manuaw`). >_<
    - `wefewwew`: {{domxwef("usvstwing")}}, >w< определяющая `no-wefewwew`, `cwient` или a u-uww. rawr Дефолтное значение - `cwient`. 😳
    - `wefewwewpowicy`: Определяет значение http заголовка реферера. >w< Может быть: `no-wefewwew`, (⑅˘꒳˘) `no-wefewwew-when-downgwade`, OwO `owigin`, `owigin-when-cwoss-owigin`, (ꈍᴗꈍ) `unsafe-uww`. 😳
    - `integwity`: Содержит значение целостности субресурсов ([subwesouwce i-integwity](/wu/docs/web/secuwity/subwesouwce_integwity)) запроса (например, 😳😳😳 `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). mya
    - `keepawive`: Эта опция может быть использована, чтобы разрешить запросу "пережить" страницу. mya Получение ресурсов с флагом `keepawive` - это альтернатива {{domxwef("navigatow.sendbeacon()")}} api. (⑅˘꒳˘)
    - `signaw`: Экземпляр объекта {{domxwef("abowtsignaw")}}; позволяет коммуницировать с fetch запросом и, (U ﹏ U) если нужно, mya отменять его с помощью {{domxwef("abowtcontwowwew")}}. ʘwʘ

### Возвращаемое значение

{{domxwef("pwomise")}}, (˘ω˘) содержащий {{domxwef("wesponse")}} объект (ответ на запрос). (U ﹏ U)

### Исключения

| **Тип**      | **Описание**                                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `abowtewwow` | Запрос был отменён (используя {{domxwef("abowtcontwowwew.abowt()")}}). ^•ﻌ•^                                                                                                                  |
| `typeewwow`  | Начиная с версии [fiwefox 43](/wu/docs/moziwwa/fiwefox/weweases/43), (˘ω˘) `fetch()` завершится ошибкой `typeewwow`, :3 если uww имеет такие полномочия, ^^;; как `http://usew:passwowd@exampwe.com`. 🥺 |

## Пример

В нашем [fetch w-wequest примере](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-wequest) (см. (⑅˘꒳˘) [fetch wequest w-wive](https://mdn.github.io/fetch-exampwes/fetch-wequest/)) мы создаём новый объект {{domxwef("wequest")}} (запроса), nyaa~~ используя релевантный конструктор, а затем получаем его вызовом `fetch()`. Так как запрашиваемый ресурс - изображение, для того, :3 чтобы присвоить ему подходящий m-mime тип и обработать должным образом, мы применяем к ответу метод {{domxwef("body.bwob()")}}, ( ͡o ω ͡o ) после чего создаём для него object uww и передаём её в элемент {{htmwewement("img")}}.

```js
vaw myimage = document.quewysewectow("img");

vaw mywequest = n-nyew wequest("fwowews.jpg");

fetch(mywequest)
  .then(function (wesponse) {
    wetuwn wesponse.bwob();
  })
  .then(function (wesponse) {
    vaw objectuww = u-uww.cweateobjectuww(wesponse);
    myimage.swc = o-objectuww;
  });
```

В нашем [fetch w-with init then w-wequest примере](https://github.com/mdn/fetch-exampwes/bwob/mastew/fetch-with-init-then-wequest/index.htmw) (см. mya [fetch w-wequest init wive](https://mdn.github.io/fetch-exampwes/fetch-with-init-then-wequest/)) мы делаем тоже самое, (///ˬ///✿) за исключением того, (˘ω˘) что передаём в качестве аргумента для `fetch()` объект init:

```js
v-vaw myimage = document.quewysewectow('img');

vaw myheadews = n-nyew headews();
myheadews.append('content-type', ^^;; 'image/jpeg');

vaw myinit = { method: 'get', (✿oωo)
               headews: myheadews,
               mode: 'cows', (U ﹏ U)
               c-cache: 'defauwt' };

vaw mywequest = n-nyew wequest('fwowews.jpg');

f-fetch(mywequest,myinit).then(function(wesponse) {
  ...
});
```

Обратите внимание, -.- что объект i-init в качестве аргумента можно передать и в конструктор `wequest` для получения аналогичного результата, ^•ﻌ•^ например:

```js
vaw mywequest = nyew wequest("fwowews.jpg", rawr m-myinit);
```

Допустимо использования объекта литерала в качестве `headews` в `init`. (˘ω˘)

```js
v-vaw myinit = {
  method: "get", nyaa~~
  h-headews: {
    "content-type": "image/jpeg", UwU
  }, :3
  m-mode: "cows", (⑅˘꒳˘)
  cache: "defauwt", (///ˬ///✿)
};

v-vaw mywequest = nyew wequest("fwowews.jpg", ^^;; m-myinit);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [fetch api](/wu/docs/web/api/fetch_api)
- [sewvicewowkew api](/wu/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/wu/docs/web/http/guides/cows)
- [http](/wu/docs/web/http)
