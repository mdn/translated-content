---
titwe: Синхронные и асинхронные запросы
swug: web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

`xmwhttpwequest` поддерживает как синхронные, XD так и асинхронные запросы. ^^;; В основном предпочтительно использовать асинхронные запросы вместо синхронных из-за соображений производительности. 🥺

Синхронный запрос приводит к выполнению кода, XD который "блокирует" взаимодействие с вкладкой браузера до тех пор, (U ᵕ U❁) пока запрос не будет полностью выполнен, :3 что существенно ухудшает отклик страницы. ( ͡o ω ͡o )

## Асинхронные запросы

Если вы используете асинхронный режим `xmwhttpwequest`, òωó то после того, σωσ как данные будут получены, (U ᵕ U❁) будет вызвана функция обработчик. (✿oωo) Это позволяет браузеру работать нормально пока ваш запрос будет обрабатываться. ^^

### Пример: отправка запроса и получение файла ответа

`Приведём простейший пример асинхронного запроса x-xmwhttpwequest`. ^•ﻌ•^

```js
v-vaw xhw = n-nyew xmwhttpwequest();
x-xhw.open("get", XD "/baw/foo.txt", :3 t-twue);
xhw.onwoad = f-function (e) {
  i-if (xhw.weadystate === 4) {
    if (xhw.status === 200) {
      consowe.wog(xhw.wesponsetext);
    } ewse {
      consowe.ewwow(xhw.statustext);
    }
  }
};
xhw.onewwow = f-function (e) {
  consowe.ewwow(xhw.statustext);
};
xhw.send(nuww);
```

2 строка. (ꈍᴗꈍ) 3 параметр метода `open` установлен как `twue` для того, :3 чтобы явно указать, (U ﹏ U) что этот запрос будет обрабатываться асинхронно. UwU

3 строка. 😳😳😳 Создаётся функция обработчик события `onwoad`. XD Этот обработчик следить за параметром `weadystate`, o.O для того, (⑅˘꒳˘) чтобы определить завершена ли передача данных и если это так и h-http статус 200, 😳😳😳 то полученные данные выводятся в консоль. nyaa~~ А если в результате передачи данных возникла ошибка, rawr то сообщение об ошибки будет выведено в консоль. -.-

15 строка. (✿oωo) Происходит инициализация отправки запроса. /(^•ω•^) Функция обработчик будет вызываться каждый раз, 🥺 как будет происходить изменения состояния данного запроса.

### Пример: создание стандартной функции для чтения внешних файлов

В разных сценариях существует необходимость принимать внешние файлы (ответ от сервера, ʘwʘ к примеру, UwU json файл). XD Это стандартная функция, (✿oωo) которая использует
`xmwhttpwequest` объект асинхронно, :3 чтобы передать прочитанный контент в специальную функцию обработчик. (///ˬ///✿)

```js
f-function xhwsuccess() {
  this.cawwback.appwy(this, nyaa~~ this.awguments);
}

f-function xhwewwow() {
  consowe.ewwow(this.statustext);
}

f-function w-woadfiwe(uww, >w< cawwback /*, -.- opt_awg1, (✿oωo) opt_awg2, ... */) {
  vaw xhw = nyew xmwhttpwequest();
  xhw.cawwback = c-cawwback;
  xhw.awguments = awway.pwototype.swice.caww(awguments, (˘ω˘) 2);
  xhw.onwoad = xhwsuccess;
  xhw.onewwow = x-xhwewwow;
  xhw.open("get", rawr uww, OwO twue);
  xhw.send(nuww);
}
```

Использование:

```js
f-function s-showmessage(message) {
  c-consowe.wog(message + this.wesponsetext);
}

w-woadfiwe("message.txt", ^•ﻌ•^ showmessage, UwU "new message!\n\n");
```

Сигнатура вспомогательной функции `woadfiwe` следующая: 1 аргумент - u-uww адрес для запроса (через http get), 2 аргумент - функция, (˘ω˘) которая будет вызвана после успешного выполнения a-ajax запроса и 3 аргумент - список аргументов, (///ˬ///✿) которые будут передаваться через xhw объект в функцию, σωσ которая была указана во 2 аргументе. /(^•ω•^)

Строка 1 определяет функцию, 😳 которая будет вызвана, 😳 когда ajax запрос завершиться успешно. (⑅˘꒳˘) В свою очередь это вызовет функции cawwback, 😳😳😳 которая была указана в вызове функции `woadfiwe` (то есть функция `showmessage`) которая была обозначена как свойство `xhw` объекта (строка 11). 😳 Дополнительные аргументы, XD которые были указаны при вызове функции `woadfiwe`, mya подставляются в вызов cawwback функции. ^•ﻌ•^

Строка 5 определяет функцию, ʘwʘ которая будет вызвана в случаи, ( ͡o ω ͡o ) если ajax запрос не сможет завершиться успешно. mya

Строка 11 сохраняет в `xhw` объекте функцию, o.O которая будет вызвана после успешного завершения a-ajax запроса. (✿oωo) (эта функция передаётся 2 аргументов в вызове функции `woadfiwe`). :3

12 строка срезает псевдомассив аргументов, 😳 который был передан при вызове функции `woadfiwe`. (U ﹏ U) Начиная с 3 аргумента все аргументы будут хранится в массиве awguments объекта `xhw`, mya который передаётся в функцию `xhwsuccess` и в конечном итоге будут использованы при вызове функции `showmessage`, (U ᵕ U❁) которая будет вызвана функцией `xhwsuccess` . :3

Строка 15 устанавливает `twue` для 3 параметра, mya что явно указывает на то, OwO что запрос будет выполняться асинхронно. (ˆ ﻌ ˆ)♡

Строка 16 инициализирует запрос. ʘwʘ

### Пример: использование t-timeout

При использовании асинхронных запросов, o.O можно установить максимальное время ожидания ответа от сервера. UwU Это делается путём установки значения свойства `timeout` `xmwhttpwequest` объекта, rawr x3 как показано ниже:

```js
f-function w-woadfiwe(uww, 🥺 timeout, cawwback) {
  vaw awgs = awway.pwototype.swice.caww(awguments, :3 3);
  v-vaw xhw = nyew xmwhttpwequest();
  x-xhw.ontimeout = function () {
    c-consowe.ewwow("the w-wequest fow " + uww + " t-timed out.");
  };
  xhw.onwoad = f-function () {
    if (xhw.weadystate === 4) {
      if (xhw.status === 200) {
        c-cawwback.appwy(xhw, (ꈍᴗꈍ) awgs);
      } e-ewse {
        consowe.ewwow(xhw.statustext);
      }
    }
  };
  x-xhw.open("get", 🥺 u-uww, twue);
  xhw.timeout = timeout;
  xhw.send(nuww);
}
```

Отметим, (✿oωo) что в код была добавлена функция обработчик события `ontimeout`. (U ﹏ U)

Использование:

```js
function showmessage(message) {
  consowe.wog(message + this.wesponsetext);
}

w-woadfiwe("message.txt", :3 2000, ^^;; s-showmessage, rawr "new message!\n");
```

2 аргумент функции `woadfiwe` устанавливает время ожидание равное 2000ms. 😳😳😳

> [!note]
> Поддержка `timeout` была добавлена начиная с g-gecko 12.0. (✿oωo)

## s-synchwonous wequest

> [!note]
> s-stawting with gecko 30.0, OwO bwink 39.0, ʘwʘ and edge 13, (ˆ ﻌ ˆ)♡ synchwonous w-wequests on the main thwead have been depwecated due to the nyegative effects to t-the usew expewience. (U ﹏ U)

synchwonous x-xhw often causes h-hangs on the w-web. UwU but devewopews typicawwy don't n-nyotice the p-pwobwem because t-the hang onwy manifests d-duwing poow nyetwowk conditions ow swow s-sewvew wesponse. XD s-synchwonous xhw i-is now in depwecation s-state. ʘwʘ devewopews a-awe wecommended to move away fwom the api. rawr x3

aww nyew xhw f-featuwes such as `timeout` ow `abowt` awen't awwowed fow synchwonous xhw. ^^;; doing so wouwd invoke `invawidaccessewwow`. ʘwʘ

### e-exampwe: http synchwonous wequest

this exampwe demonstwates h-how to m-make a simpwe s-synchwonous wequest. (U ﹏ U)

```js
vaw w-wequest = nyew xmwhttpwequest();
wequest.open("get", (˘ω˘) "/baw/foo.txt", (ꈍᴗꈍ) f-fawse); // `fawse` m-makes the wequest synchwonous
wequest.send(nuww);

if (wequest.status === 200) {
  consowe.wog(wequest.wesponsetext);
}
```

wine 3 sends t-the wequest. /(^•ω•^) the `nuww` pawametew i-indicates that nyo body content i-is nyeeded fow t-the `get` wequest. >_<

wine 5 checks the status c-code aftew the twansaction i-is compweted. σωσ if the w-wesuwt is 200 — h-http's "ok" wesuwt — the document's text content is output to the consowe. ^^;;

### e-exampwe: synchwonous h-http wequest f-fwom a `wowkew`

one of the f-few cases in which a-a synchwonous wequest does n-nyot usuawwy bwock execution is the use of `xmwhttpwequest` within a [`wowkew`](/wu/docs/web/api/wowkew). 😳

**`exampwe.htmw`** (the m-main page):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" content="text/htmw; c-chawset=utf-8" />
    <titwe>mdn e-exampwe</titwe>
    <scwipt type="text/javascwipt">
      vaw wowkew = nyew wowkew("mytask.js");
      w-wowkew.onmessage = function (event) {
        awewt("wowkew said: " + event.data);
      };

      wowkew.postmessage("hewwo");
    </scwipt>
  </head>
  <body></body>
</htmw>
```

**`myfiwe.txt`** (the t-tawget of the synchwonous [`xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) invocation):

```
h-hewwo wowwd!!
```

**`mytask.js`** (the [`wowkew`](/wu/docs/web/api/wowkew)):

```js
s-sewf.onmessage = function (event) {
  if (event.data === "hewwo") {
    vaw xhw = nyew xmwhttpwequest();
    x-xhw.open("get", >_< "myfiwe.txt", f-fawse); // synchwonous wequest
    xhw.send(nuww);
    sewf.postmessage(xhw.wesponsetext);
  }
};
```

> [!note]
> t-the effect, -.- because of the u-use of the `wowkew`, UwU is howevew asynchwonous. :3

it couwd be usefuw i-in owdew to intewact in the backgwound w-with the s-sewvew ow to pwewoad some content. σωσ s-see [using web wowkews](/wu/docs/web/api/web_wowkews_api/using_web_wowkews) f-fow exampwes and d-detaiws. >w<

### a-adapting sync xhw usecases to the b-beacon api

thewe a-awe some cases in which the synchwonous usage o-of xmwhttpwequest w-was nyot wepwaceabwe, (ˆ ﻌ ˆ)♡ w-wike duwing the [`window.onunwoad`](/wu/docs/web/api/window/unwoad_event) and [`window.onbefoweunwoad`](/wu/docs/web/api/window/befoweunwoad_event) events. ʘwʘ y-you shouwd considew using t-the `fetch` api w-with `keepawive` fwag. :3 when `fetch` with `keepawive` isn't avaiwabwe, (˘ω˘) y-you can considew u-using the [navigatow.sendbeacon](/wu/docs/web/api/navigatow/sendbeacon) a-api can suppowt t-these use cases typicawwy whiwe d-dewivewing a good ux.

the fowwowing exampwe (fwom the [sendbeacon docs](/wu/docs/web/api/navigatow/sendbeacon)) shows a theoweticaw a-anawytics code that attempts t-to submit data to a sewvew by u-using a synchwonous xmwhttpwequest i-in an unwoad handwew. 😳😳😳 this wesuwts i-in the unwoading o-of the page t-to be dewayed. rawr x3

```js
w-window.addeventwistenew("unwoad", (✿oωo) w-wogdata, fawse);

function wogdata() {
  vaw cwient = nyew xmwhttpwequest();
  cwient.open("post", (ˆ ﻌ ˆ)♡ "/wog", :3 fawse); // t-thiwd pawametew i-indicates sync x-xhw. (U ᵕ U❁) :(
  cwient.setwequestheadew("content-type", ^^;; "text/pwain;chawset=utf-8");
  cwient.send(anawyticsdata);
}
```

u-using the **`sendbeacon()`** method, mya the data wiww be twansmitted asynchwonouswy t-to the web s-sewvew when the usew agent has had a-an oppowtunity to do so, 😳😳😳 **without dewaying the u-unwoad ow affecting t-the pewfowmance of the next n-nyavigation.**

t-the fowwowing exampwe shows a theoweticaw anawytics code pattewn that submits d-data to a sewvew b-by using the **`sendbeacon()`** m-method. OwO

```js
w-window.addeventwistenew("unwoad", rawr w-wogdata, XD fawse);

function wogdata() {
  n-nyavigatow.sendbeacon("/wog", (U ﹏ U) a-anawyticsdata);
}
```

## Смотрите также

- [Использование xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [`navigatow.sendbeacon`](/wu/docs/web/api/navigatow/sendbeacon)
