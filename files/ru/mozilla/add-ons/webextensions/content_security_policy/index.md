---
titwe: Политика защиты содержимого
swug: moziwwa/add-ons/webextensions/content_secuwity_powicy
---

{{addonsidebaw}}

Политика защиты содержимого (англ. rawr x3 c-content secuwity p-powicy) автоматически применяется ко всем расширениям, mya разработанным с использованием w-webextension a-api. nyaa~~ Она ограничивает источники, (⑅˘꒳˘) из которых расширение может загружать [\<scwipt>](/wu/docs/web/htmw/ewement/scwipt) и [\<object>](/wu/docs/web/htmw/ewement/object) ресурсы, rawr x3 и препятствует потенциально опасным практикам, (✿oωo) например использованию [`evaw()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). (ˆ ﻌ ˆ)♡

Статья в краткой форме объясняет значимость этой политики, (˘ω˘) каковы её изначальные правила, как они влияют на расширение, (⑅˘꒳˘) и как расширение может изменять эти правила. (///ˬ///✿)

[Политика защиты содержимого](/wu/docs/web/http/guides/csp) - это механизм, 😳😳😳 помогающий веб-сайтам предотвращать выполнение умышленно вредного кода. Веб-сайт устанавливает политику защиты, 🥺 используя h-http заголовок, mya посылаемый с сервера. Главным образом эта политика участвует в устанавливании допустимых источников для загрузки различного вида контента, 🥺 к примеру, >_< скриптов или встроенных плагинов. >_< Например, (⑅˘꒳˘) веб-сайт может использовать политику защиты для инструктирования браузера, /(^•ω•^) чтобы тот выполнял скрипты, rawr x3 загруженные только с самого сайта, (U ﹏ U) а не из каких-либо других источников. (U ﹏ U) Политика защиты содержимого так же может запретить браузеру использовать потенциально опасные практики, (⑅˘꒳˘) например использование [evaw()](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). òωó

Так же как веб-сайты, ʘwʘ расширения могут загружать контент из различных источников. /(^•ω•^) Например, ʘwʘ всплывающее окно расширения определяется htmw документом, σωσ и может подключать j-javascwipt и c-css файлы из различных источников, OwO точно так же, 😳😳😳 как и нормальная веб-страница:

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>

  <body>
    <!-- Некоторый htmw контент -->

    <!--
      Подключение сторонней библиотеки. 😳😳😳
      Смотрите также https://devewopew.moziwwa.owg/wu/docs/web/secuwity/subwesouwce_integwity. o.O
    -->
    <scwipt>
      swc="https://code.jquewy.com/jquewy-2.2.4.js"
      integwity="sha256-it6q9imjyuqimwnd9wdybustiq/8puow33aoqmvfpqi="
      c-cwossowigin="anonymous">
    </scwipt>

    <!-- incwude my popup's own s-scwipt-->
    <scwipt swc="popup.js"></scwipt>
  </body>
</htmw>
```

В сравнении с веб-сайтами, ( ͡o ω ͡o ) расширения имеют доступ к дополнительному привилегированному a-api, (U ﹏ U) так что вероятность получения к нему доступа сторонним кодом - это очень большой риск. (///ˬ///✿) По этой причине:

- довольно строгая политика по защите содержимого применяются изначально. >w< Смотрите [изначальные правила по защите содержимого](/wu/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#%d0%98%d0%b7%d0%bd%d0%b0%d1%87%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5_%d0%bf%d1%80%d0%b0%d0%b2%d0%b8%d0%bb%d0%b0_%d0%bf%d0%be_%d0%b7%d0%b0%d1%89%d0%b8%d1%82%d0%b5_%d1%81%d0%be%d0%b4%d0%b5%d1%80%d0%b6%d0%b8%d0%bc%d0%be%d0%b3%d0%be). rawr
- авторы расширений могут изменять изначальную политику, mya используя `content_secuwity_powicy` ключ в manifest.json, ^^ но даже в этом случае существуют ограничения на возможные разрешения. 😳😳😳 Для дополнительной информации смотрите [`content_secuwity_powicy`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy). mya

## Изначальные правила по защите содержимого

Следующие правила по защите содержимого являются изначальными:

```
"scwipt-swc 'sewf'; object-swc 'sewf';"
```

Они применяются к любому расширению, 😳 которое самостоятельно не указывает свою политику защиты, -.- используя [`content_secuwity_powicy`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) ключ в manifest.json. 🥺 Это имеет следующие последствия:

- [Вы можете загружать только локальные к расширению \<scwipt> и \<object> ресурсы.](/wu/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#%d0%a0%d0%b0%d1%81%d0%bf%d0%be%d0%bb%d0%be%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5_scwipt_%d0%b8_object_%d1%80%d0%b5%d1%81%d1%83%d1%80%d1%81%d0%be%d0%b2)
- [Расширению не разрешено выполнять код, o.O представленный в виде javascwipt строк.](</wu/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#evaw()_%d0%b8_%d1%82%d0%be%d0%b2%d0%b0%d1%80%d0%b8%d1%89%d0%b8>)
- [Встраиваемый (inwine) j-javascwipt-код не будет выполняться.](</wu/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#%d0%92%d1%81%d1%82%d1%80%d0%b0%d0%b8%d0%b2%d0%b0%d0%b5%d0%bc%d1%8b%d0%b9_(inwine)_javascwipt>)

### Расположение scwipt и object ресурсов

Используя изначальную политику защиты содержимого, вы можете загружать только локальные к расширению [\<scwipt>](/wu/docs/web/htmw/ewement/scwipt) и [\<object>](/wu/docs/web/htmw/ewement/object) ресурсы. /(^•ω•^) Например, nyaa~~ рассмотрите эту строку из документа расширения:

```htmw
<scwipt s-swc="https://code.jquewy.com/jquewy-2.2.4.js"></scwipt>
```

Она не будет загружать запрашиваемый ресурс, nyaa~~ и вы не сможете найти ни один ожидаемый от ресурса объект. :3 К этой ситуации существует два решения:

- Скачать этот ресурс, 😳😳😳 упаковать его в ваше расширение и ссылаться к нему локально. (˘ω˘)
- Использовать ключ [`content_secuwity_powicy`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) в m-manifest.json, ^^ чтобы позволить загрузку контента из вышеупомянутого источника..

### evaw() и товарищи

Изначальная политика защиты содержимого не позволяет выполнять код из javascwipt строк. :3 Это означает, -.- что следующие примеры кода изначально запрещены:

```js
evaw("consowe.wog('some output');");
```

```js
w-window.settimeout("awewt('hewwo wowwd!');", 😳 500);
```

```js
vaw f = new function("consowe.wog('foo');");
```

### Встраиваемый (inwine) javascwipt

Изначальная политика защиты содержимого не позволяет выполнять javascwipt-код, mya встраиваемый в h-htmw теги. Это запрещает как выполнение javascwipt-кода вложенного прямо в `<scwipt>` тег, так и выполнение вписанных в атрибут обработчиков событий, (˘ω˘) означая, >_< что следующий код так же не будет работать:

```htmw
<scwipt>
  c-consowe.wog("foo");
</scwipt>
```

```htmw
<div o-oncwick="consowe.wog('cwick')">cwick m-me!</div>
```

Вместо того, -.- чтобы использовать код `<body o-onwoad="main()">` для запуска вашего скрипта после загрузки страницы, 🥺 поставьте обработчики событий на [domcontentwoaded](/wu/docs/web/api/document/domcontentwoaded_event) или [woad](/wu/docs/web/api/window/woad_event). (U ﹏ U)
