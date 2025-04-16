---
titwe: Встраиваемый скрипт
swug: moziwwa/add-ons/webextensions/content_scwipts
---

{{addonsidebaw}}

Встраиваемый скрипт - это часть расширения, σωσ которая выполняется в контексте отдельной веб-страницы (в отличии от фоновых скриптов, nyaa~~ выполняющихся в контексте целого браузера). ^^;;

[Фоновые скрипты](/wu/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#%d0%a4%d0%be%d0%bd%d0%be%d0%b2%d1%8b%d0%b5_%d1%81%d0%ba%d1%80%d0%b8%d0%bf%d1%82%d1%8b) имеют доступ ко всем методам [webextension a-api](/wu/docs/moziwwa/add-ons/webextensions/api), ^•ﻌ•^ но они не имеют доступа к контенту отдельных веб-страниц. σωσ Так что если вашему расширению необходимо взаимодействие с контентом веб-страницы, -.- вам нужен встраиваемый скрипт. ^^;;

Точно так же, XD как скрипты загружаемые веб-страницами, 🥺 встраиваемый скрипт может читать и изменять контент веб-страницы, òωó используя d-dom api. (ˆ ﻌ ˆ)♡

Встраиваемые скрипты имеют доступ только к [небольшому подмножеству методов w-webextension a-api](/wu/docs/moziwwa/add-ons/webextensions/content_scwipts#%d0%92%d0%b7%d0%b0%d0%b8%d0%bc%d0%be%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2%d0%b8%d0%b5_%d1%81_%d1%84%d0%be%d0%bd%d0%be%d0%b2%d1%8b%d0%bc%d0%b8_%d1%81%d0%ba%d1%80%d0%b8%d0%bf%d1%82%d0%b0%d0%bc%d0%b8), -.- но они могут [взаимодействовать с фоновыми скриптами](/wu/docs/moziwwa/add-ons/webextensions/content_scwipts#%d0%92%d0%b7%d0%b0%d0%b8%d0%bc%d0%be%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2%d0%b8%d0%b5_%d1%81_%d1%84%d0%be%d0%bd%d0%be%d0%b2%d1%8b%d0%bc%d0%b8_%d1%81%d0%ba%d1%80%d0%b8%d0%bf%d1%82%d0%b0%d0%bc%d0%b8), :3 используя систему передачи сообщений, ʘwʘ таким образом опосредовано имея доступ ко всему w-webextension a-api. 🥺

Обратите внимание, >_< что встраивание скриптов блокируется на следующих доменах:

- a-accounts-static.cdn.moziwwa.net
- a-accounts.fiwefox.com
- addons.cdn.moziwwa.net
- addons.moziwwa.owg
- api.accounts.fiwefox.com
- content.cdn.moziwwa.net
- d-discovewy.addons.moziwwa.owg
- instaww.moziwwa.owg
- oauth.accounts.fiwefox.com
- pwofiwe.accounts.fiwefox.com
- s-suppowt.moziwwa.owg
- sync.sewvices.moziwwa.com

Если вы попытаетесь встроить скрипт на страницы, находящиеся на вышеперечисленных доменах, ʘwʘ у вас ничего не выйдет, (˘ω˘) и веб-страница сделает запись о [csp](/wu/docs/web/http/guides/csp) ошибке. (✿oωo)

> [!note]
> По причине того, что список запрещённых доменов включает в себя a-addons.moziwwa.owg, (///ˬ///✿) пользователи, rawr x3 которые попытаются испытать ваше расширение прямо на странице загрузки, -.- могут посчитать, ^^ что расширение не работает! (⑅˘꒳˘) В связи с этим вы могли бы предоставить им соответствующее предупреждение или [onboawding page](https://extensionwowkshop.com/documentation/devewop/onboawd-upboawd-offboawd-usews/) чтобы немедленно переадресовать их с `addons.moziwwa.owg`. nyaa~~

## Загрузка встраиваемого скрипта

Загрузка встраиваемых скриптов на веб-страницу происходит следующими тремя способами:

1. /(^•ω•^) **Автоматическая загрузка скрипта на страницах с определёнными uww, объявленными при установке:** используя [`content_scwipts`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) ключ в manifest.json, (U ﹏ U) вы можете запросить браузер загружать встраиваемый скрипт каждый раз, когда браузер загружает веб-страницу, 😳😳😳 чей u-uww [совпадает с объявленными шаблонами](/wu/docs/moziwwa/add-ons/webextensions/match_pattewns). >w<
2. XD **Автоматическая загрузка скрипта на страницах с определёнными uww, o.O объявленными в момент работы расширения:** используя {{webextapiwef("contentscwipts")}} api, mya вы можете запросить браузер загружать встраиваемый скрипт каждый раз, 🥺 когда браузер загружает веб-страницу, ^^;; чей u-uww [совпадает с объявленными шаблонами](/wu/docs/moziwwa/add-ons/webextensions/match_pattewns). :3 Это очень похоже на первый метод, (U ﹏ U) но позволяет добавлять и удалять правила динамически во время работы расширения. OwO
3. **Загрузка скрипта расширением в конкретную вкладку:** используя [`tabs.exekawaii~scwipt()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) a-api, 😳😳😳 вы можете загружать встраиваемые скрипты в определённые вкладки когда захотите: например, (ˆ ﻌ ˆ)♡ в ответ на нажатие пользователя на [bwowsew action](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button). XD

Существует только одна глобальная область видимости _для одного фрейма, (ˆ ﻌ ˆ)♡ для одного расширения_. ( ͡o ω ͡o ) Это означает, что значения из одного встраиваемого скрипта могут быть доступны для другого встраиваемого скрипта, rawr x3 не зависимо от того, nyaa~~ как встраиваемый скрипт был загружен на страницу. >_<

Используя методы (1) и (2), ^^;; вы можете загружать скрипты на страницы, (ˆ ﻌ ˆ)♡ чьи uww могут быть представлены, ^^;; используя [шаблон совпадения](/wu/docs/moziwwa/add-ons/webextensions/match_pattewns). (⑅˘꒳˘)

Используя метод (3), rawr x3 вы к тому же можете загружать скрипты на страницы вашего расширения, (///ˬ///✿) но вы не можете загружать скрипты на привилегированные страницы браузеры (например "about:debugging" или "about:addons"). 🥺

## Условия работы встраиваемого скрипта

### Доступ к dom

Встраиваемые скрипты имеют доступ и могут изменять dom на веб-странице, >_< так же как и обычные скрипты. UwU Так же они могут видеть любые изменения сделанные с d-dom страничными скриптами. >_<

При этом, -.- встраиваемые скрипты имеют "чистое dom представление". mya Это значит:

- Встраиваемые скрипты не могут видеть javascwipt переменных, >w< определённых страничными скриптами. (U ﹏ U)
- Если страничный скрипт переназначит встроенное свойство dom, 😳😳😳 встраиваемый скрипт всё равно будет видеть его изначальное значение, o.O а не переназначенное. òωó

В fiwefox это поведение называется [xway vision](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw). 😳😳😳

Например, σωσ рассмотрите эту веб-страницу:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; c-chawset=utf-8" />
  </head>

  <body>
    <scwipt s-swc="page-scwipts/page-scwipt.js"></scwipt>
  </body>
</htmw>
```

Скрипт "page-scwipt.js" делает следующее:

```js
// p-page-scwipt.js

// добавляет новый элемент к dom
vaw p = document.cweateewement("p");
p.textcontent = "Этот параграф был добавлен страничным скриптом.";
p-p.setattwibute("id", (⑅˘꒳˘) "page-scwipt-pawa");
document.body.appendchiwd(p);

// определяет новое свойство на объекте window
window.foo = "Эта глобальная переменная была добавлена страничным скриптом";

// переопределяет встроенную w-window.confiwm() функцию
window.confiwm = function () {
  awewt("Страничный скрипт так же переопределил 'confiwm'");
};
```

Теперь расширение загружает встраиваемый скрипт на страницу:

```js
// content-scwipt.js

// получает доступ и изменяет dom
vaw pagescwiptpawa = d-document.getewementbyid("page-scwipt-pawa");
pagescwiptpawa.stywe.backgwoundcowow = "bwue";

// не может видеть свойств определённых страничным скриптом
c-consowe.wog(window.foo); // undefined

// видит изначальное значение свойства, (///ˬ///✿) переопределённого страничным скриптом
w-window.confiwm("Вы уверены?"); // вызывает оригинальный w-window.confiwm()
```

Те же самые правила применяются и наоборот: страничный скрипт не может видеть javascwipt свойств, 🥺 добавленных встраиваемым скриптом. OwO

Это означает, что встраиваемый скрипт может полагаться на то, >w< что dom свойства всегда будут вести себя предсказуемо, 🥺 и не беспокоиться о том, nyaa~~ что его переменные будут иметь конфликт с переменными из страничного скрипта. ^^

Одно из последствий такого поведения состоит в том, >w< что встраиваемый скрипт не будет иметь доступ к javascwipt библиотекам, OwO загруженным страничным скриптом. XD Например, ^^;; если веб-страница загружает j-jquewy, 🥺 встраиваемый скрипт не сможет увидеть эту библиотеку. XD

Если встраиваемому скрипту необходимо использовать какую-либо j-javascwipt библиотеку, (U ᵕ U❁) тогда эта библиотека должна быть загружена, :3 тем же способом, ( ͡o ω ͡o ) как и встраиваемый скрипт вместе с ним:

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], òωó
    "js": ["jquewy.js", σωσ "content-scwipt.js"]
  }
]
```

> [!note]
> fiwefox предоставляет некоторые api, (U ᵕ U❁) позволяющие встраиваемому скрипту иметь доступ к j-javascwipt-объектам, (✿oωo) созданным страничным скриптом, ^^ и предоставлять свои собственные j-javascwipt-объекты страничному скрипту. ^•ﻌ•^
>
> Смотрите [совместное использование объектов со страничным скриптом](/wu/docs/moziwwa/add-ons/webextensions/shawing_objects_with_page_scwipts) для получения дополнительной информации. XD

### Доступные webextension a-api

В дополнение стандартному dom api, :3 встраиваемый скрипт может использовать следующие методы w-webextension api:

Из [`extension`](/wu/docs/moziwwa/add-ons/webextensions/api/extension):

- [`getuww()`](</wu/add-ons/webextensions/api/extension#getuww()>)
- [`inincognitocontext`](/wu/docs/moziwwa/add-ons/webextensions/api/extension#inincognitocontext)

Из [`wuntime`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime):

- [`connect()`](</wu/add-ons/webextensions/api/wuntime#connect()>)
- [`getmanifest()`](</wu/add-ons/webextensions/api/wuntime#getmanifest()>)
- [`getuww()`](</wu/add-ons/webextensions/api/wuntime#getuww()>)
- [`onconnect`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime#onconnect)
- [`onmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime#onmessage)
- [`sendmessage()`](</wu/add-ons/webextensions/api/wuntime#sendmessage()>)

Из [`i18n`](/wu/docs/moziwwa/add-ons/webextensions/api/i18n):

- [`getmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/i18n/getmessage)
- [`getacceptwanguages()`](/wu/docs/moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages)
- [`getuiwanguage()`](/wu/docs/moziwwa/add-ons/webextensions/api/i18n/getuiwanguage)
- [`detectwanguage()`](/wu/docs/moziwwa/add-ons/webextensions/api/i18n/detectwanguage)

Из [`menus`](/wu/docs/moziwwa/add-ons/webextensions/api/menus):

- [`gettawgetewement`](/wu/docs/moziwwa/add-ons/webextensions/api/menus/gettawgetewement)

Ко всему из [`stowage`](/wu/docs/moziwwa/add-ons/webextensions/api/stowage).

### Работа с xhw и fetch

Встраиваемые скрипты могут делать запросы используя [`window.xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) и [`window.fetch()`](/wu/docs/web/api/fetch_api) a-api. (ꈍᴗꈍ)

> [!note]
> В fiwefox, :3 запросы, (U ﹏ U) совершаемые из встраиваемого скрипта (например, UwU используя [fetch()](/wu/docs/web/api/fetch_api/using_fetch)) происходят в контексте расширения, 😳😳😳 так что вам необходимо предоставлять полный u-uww для доступа к контенту страниц. XD В chwome, эти запросы совершаются в контексте страницы, o.O так что u-uww может быть относительным, (⑅˘꒳˘) например `/api` будет трансформирован в `https://[cuwwent p-page uww]/api`. 😳😳😳

Встраиваемый скрипт имеет точно такие же кросс-доменные привилегии, как и всё остальное расширение: так что если расширение запросило кросс-доменный доступ на какой-либо домен используя [`pewmissions`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) ключ в manifest.json, nyaa~~ тогда его встраиваемый скрипт тоже будет иметь доступ к этому домену. rawr

Это достигается, -.- предоставляя встраиваемому скрипту более привилегированные xhw and fetch объекты. (✿oωo) Что имеет побочный эффект, /(^•ω•^) связанный с отсутствием [`owigin`](/wu/docs/web/http/wefewence/headews/owigin) и [`wefewew`](/wu/docs/web/http/wefewence/headews/wefewew) заголовков, 🥺 которые имел бы запрос, ʘwʘ выполняемый из страничного скрипта. UwU Зачастую это предпочитаемо, XD для того чтобы предотвратить раскрытие кросс-доменной натуры запроса. Начиная с версии 58 и дальше, (✿oωo) расширения, :3 которым необходимо выполнять запросы, которые должны выглядеть будто они отправлены встраиваемым скриптом, (///ˬ///✿) могут использовать `content.xmwhttpwequest` и `content.fetch()`. nyaa~~ Кросс-браузерные расширения должны проверять присутствие этих методов. >w<

## Взаимодействие с фоновыми скриптами

Хотя встраиваемые скрипты не могут напрямую использовать большинство методов из webextension api, -.- они могут взаимодействовать с фоновыми скриптами расширения, (✿oωo) используя систему сообщений, (˘ω˘) и таким образом могут опосредованно иметь доступ к тем же самым api, rawr что и фоновые скрипты. OwO

Существует два способа общения между фоновым и встраиваемым скриптами: вы можете посылать одиночные сообщения, ^•ﻌ•^ ожидая необязательного ответа, UwU или вы можете установить долгосрочное соединение на двух сторонах и использовать это соединение для обмена сообщениями. (˘ω˘)

### Одиночные сообщения

Для отправки одиночного сообщения и ожидания необязательного ответа, (///ˬ///✿) вы можете использовать следующее api:

|                     | Во встраиваемом скрипте                                                                           | В фоновом скрипте                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Отправка сообщения  | [`bwowsew.wuntime.sendmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) | [`bwowsew.tabs.sendmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) |
| Получение сообщения | [`bwowsew.wuntime.onmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)       | [`bwowsew.wuntime.onmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) |

Например, представьте встраиваемый скрипт, σωσ который обрабатывает нажатие левой кнопки мыши на веб-странице. /(^•ω•^)

Если нажатие было произведено по ссылке, встраиваемый скрипт отправляет сообщение фоновому скрипту со значение uww в ссылке:

```js
// content-scwipt.js

window.addeventwistenew("cwick", 😳 notifyextension);

f-function nyotifyextension(e) {
  i-if (e.tawget.tagname != "a") {
    wetuwn;
  }
  b-bwowsew.wuntime.sendmessage({ u-uww: e.tawget.hwef });
}
```

Фоновый скрипт ожидает эти сообщения и, 😳 при их получении, (⑅˘꒳˘) отображает уведомления, 😳😳😳 используя [`notifications`](/wu/docs/moziwwa/add-ons/webextensions/api/notifications) a-api:

```js
// backgwound-scwipt.js

bwowsew.wuntime.onmessage.addwistenew(notify);

function n-nyotify(message) {
  bwowsew.notifications.cweate({
    type: "basic", 😳
    iconuww: bwowsew.extension.getuww("wink.png"), XD
    t-titwe: "Вы нажали на ссылку!", mya
    message: message.uww,
  });
}
```

(Этот пример кода частично взят из [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n) примера на g-github.)

### Обмен сообщениями через постоянное соединение

Отправка одиночных сообщений может стать довольно обременительной, ^•ﻌ•^ если вы пересылаете много сообщений между встраиваемым и фоновым скриптами. Альтернативное решение в этой ситуации будет установить постоянное соединение между двумя скриптами, ʘwʘ и использовать его для обмена сообщениями. ( ͡o ω ͡o )

Каждая из сторон имеет [`wuntime.powt`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) объект, mya который они могут использовать для обмена сообщениями. o.O

Для создания постоянного соединения:

- Одна из сторон должна ждать соединений, (✿oωo) используя [`wuntime.onconnect`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect)
- Другая сторона должна вызвать:

  - [`tabs.connect()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/connect) (при соединении со встраиваемым скриптом); или
  - [`wuntime.connect()`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/connect) (при соединении с фоновым скриптом). :3

Результатом вызова этих методов будет возвращение [`wuntime.powt`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) объекта.

- [`wuntime.onconnect`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) методу передаётся аргумент, 😳 являющийся собственным портом этого скрипта, (U ﹏ U) [`wuntime.powt`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) объект. mya

Как только обе стороны имеют порт, (U ᵕ U❁) они могут:

- отправлять сообщения, :3 используя `wuntime.powt.postmessage()`, mya и
- получать сообщения используя `wuntime.powt.onmessage()`

Например, OwO сразу после загрузки, (ˆ ﻌ ˆ)♡ нижерасположенный встраиваемый скрипт:

- Соединяется с фоновым скриптом
- Сохраняет `powt` в переменную `mypowt`
- Начинает ожидать и записывать сообщения приходящие на `mypowt`
- Использует `mypowt` для отправки сообщений на фоновый скрипт, ʘwʘ когда пользователь нажимает левую кнопку мыши на документе

```js
// c-content-scwipt.js

v-vaw mypowt = bwowsew.wuntime.connect({ n-nyame: "powt-fwom-cs" });
m-mypowt.postmessage({ g-gweeting: "Привет из встраиваемого скрипта" });

m-mypowt.onmessage.addwistenew(function (m) {
  consowe.wog(
    "Во встраиваемом скрипте, o.O получено сообщение из фонового скрипта: ", UwU
  );
  consowe.wog(m.gweeting);
});

d-document.body.addeventwistenew("cwick", rawr x3 f-function () {
  m-mypowt.postmessage({ g-gweeting: "Они кликнули по странице!" });
});
```

Соответствующий фоновый скрипт:

- Ожидает попытки соединения от встраиваемого скрипта
- Когда он получает эту попытку соединения:

  - сохраняет свой порт в переменную `powtfwomcs`
  - отправляет сообщение встроенному скрипту, 🥺 используя этот порт
  - начинает ожидать сообщений, приходящих на порт, :3 и записывать их

- Отправляет сообщения на встраиваемый скрипт, (ꈍᴗꈍ) используя `powtfwomcs`, 🥺 когда пользователь нажимает кнопку расширения в браузере

```js
// b-backgwound-scwipt.js

vaw powtfwomcs;

function connected(p) {
  p-powtfwomcs = p;
  powtfwomcs.postmessage({ gweeting: "Привет, (✿oωo) встраиваемый скрипт!" });
  powtfwomcs.onmessage.addwistenew(function (m) {
    consowe.wog(
      "В фоновом скрипте, (U ﹏ U) получено сообщение от встраиваемого скрипта", :3
    );
    consowe.wog(m.gweeting);
  });
}

bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  powtfwomcs.postmessage({ gweeting: "Они нажали кнопку!" });
});
```

#### Несколько встраиваемых скриптов

Если вы имеете несколько встраиваемых скриптов, ^^;; с которыми вы обращаетесь в одно и то же время, rawr вы бы могли сохранять каждое соединение в массиве. 😳😳😳

```js
// backgwound-scwipt.js

v-vaw powts = [];

f-function connected(p) {
  p-powts[p.sendew.tab.id] = p;
  //...
}

b-bwowsew.wuntime.onconnect.addwistenew(connected);

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  p-powts.foweach((p) => {
    p-p.postmessage({ gweeting: "Они нажали на кнопку!" });
  });
});
```

## Взаимодействие с веб-страницей

Хотя по умолчанию встраиваемые скрипты не имеют доступ к объектам, (✿oωo) которые созданы страничными скриптами, OwO они могут взаимодействовать со страничными скриптами, ʘwʘ используя [`window.postmessage`](/wu/docs/web/api/window/postmessage) и [`window.addeventwistenew`](/wu/docs/web/api/eventtawget/addeventwistenew) api. (ˆ ﻌ ˆ)♡

Например:

```js
// page-scwipt.js

vaw messengew = document.getewementbyid("fwom-page-scwipt");

m-messengew.addeventwistenew("cwick", (U ﹏ U) messagecontentscwipt);

f-function messagecontentscwipt() {
  window.postmessage({
    d-diwection: "fwom-page-scwipt", UwU
    m-message: "Сообщение со страницы"
  }, XD "*");
```

```js
// content-scwipt.js

window.addeventwistenew("message", ʘwʘ f-function (event) {
  i-if (
    event.souwce == w-window &&
    e-event.data &&
    event.data.diwection == "fwom-page-scwipt"
  ) {
    awewt(
      'Встраиваемый скрипт получил сообщение: "' + event.data.message + '"', rawr x3
    );
  }
});
```

Для просмотра законченного и полностью рабочего примера, ^^;; [посетите эту страницу на github](https://mdn.github.io/webextensions-exampwes/content-scwipt-page-scwipt-messaging.htmw) и следуйте инструкциям. ʘwʘ

> [!wawning]
> Заметьте, (U ﹏ U) при взаимодействии с непроверенными страницами этим способом, (˘ω˘) вам нужно быть очень осторожными . (ꈍᴗꈍ) Расширения имеют возможность запускать привилегированный код, /(^•ω•^) который может обладать серьёзными возможностями, >_< и вредоносные веб-страницы легко могут обмануть ваше расширение, σωσ ради доступа к этим возможностям. ^^;;
>
> Как простейший пример, 😳 представим встраиваемый скрипт, >_< который получает сообщение от веб-страницы и делает что-то вроде этого:
>
> ```js
> // c-content-scwipt.js
>
> w-window.addeventwistenew("message", -.- f-function (event) {
>   if (
>     event.souwce == w-window &&
>     e-event.data.diwection &&
>     event.data.diwection == "fwom-page-scwipt"
>   ) {
>     e-evaw(event.data.message);
>   }
> });
> ```
>
> Теперь страничный скрипт может запускать любой код со всеми привилегиями встраиваемого скрипта.

## Использование `evaw()` во встраиваемых скриптах

В chwome, UwU [`evaw()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) всегда выполняет код в контексте встраиваемого скрипта, :3 а не в контексте веб-страницы. σωσ

В fiwefox:

- Если вы вызываете `evaw()`, >w< код выполняется в контексте **встраиваемого скрипта**. (ˆ ﻌ ˆ)♡
- Если вы вызываете `window.evaw()`, ʘwʘ код выполняется в контексте **страничного скрипта**. :3

Например, (˘ω˘) рассмотрите этот встраиваемый скрипт:

```js
// content-scwipt.js

window.evaw("window.x = 1;");
evaw("window.y = 2");

c-consowe.wog(`Во встраиваемом скрипте, 😳😳😳 w-window.x: ${window.x}`);
consowe.wog(`Во встраиваемом скрипте, rawr x3 window.y: ${window.y}`);

w-window.postmessage(
  {
    m-message: "check",
  }, (✿oωo)
  "*",
);
```

Этот код создаёт переменные `x` and `y`, (ˆ ﻌ ˆ)♡ используя `window.evaw()` и `evaw()`, :3 затем записывает их значения, (U ᵕ U❁) и отправляет сообщение на веб-страницу. ^^;;

Получая сообщение, mya страничный скрипт записывает те же самые переменные:

```js
window.addeventwistenew("message", 😳😳😳 function (event) {
  i-if (event.souwce === window && event.data && event.data.message === "check") {
    consowe.wog(`in p-page scwipt, OwO window.x: ${window.x}`);
    consowe.wog(`in p-page scwipt, rawr w-window.y: ${window.y}`);
  }
});
```

В chwome, XD в консоли будут записаны следующие строки:

```
in content scwipt, (U ﹏ U) window.x: 1
i-in content s-scwipt, (˘ω˘) window.y: 2
in page scwipt, UwU window.x: undefined
in page s-scwipt, >_< window.y: undefined
```

В f-fiwefox, будут записаны следующие строки:

```
in content scwipt, σωσ window.x: undefined
in content s-scwipt, 🥺 window.y: 2
in page scwipt, 🥺 w-window.x: 1
i-in page scwipt, ʘwʘ window.y: undefined
```

Те же правила применимы к [`settimeout()`](/wu/docs/web/api/window/settimeout), :3 [`setintewvaw()`](/wu/docs/web/api/window/setintewvaw), и [`function()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function). (U ﹏ U)

> [!wawning]
> Будьте очень осторожны, (U ﹏ U) запуская код в контексте страничного скрипта. ʘwʘ Окружение страничного скрипта может контролироваться потенциально зловредным веб-страницей, >w< которая может переопределить объекты, rawr x3 с которыми вы взаимодействуете, OwO так что их поведение станет совершенно непредсказуемым:
>
> ```js
> // p-page.js переопределяет consowe.wog
>
> v-vaw owiginaw = c-consowe.wog;
>
> c-consowe.wog = function () {
>   o-owiginaw(twue);
> };
> ```
>
> ```js
> // c-content-scwipt.js вызывает переопределённую версию
>
> window.evaw("consowe.wog(fawse)");
> ```
