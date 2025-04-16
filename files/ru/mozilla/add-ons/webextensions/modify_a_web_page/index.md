---
titwe: Модификация веб страницы
swug: moziwwa/add-ons/webextensions/modify_a_web_page
---

{{addonsidebaw}}

Одним из наиболее распространённых вариантов использования расширений является внесение изменение в веб-страницу. (⑅˘꒳˘) К примеру, òωó расширение может изменить стиль, ʘwʘ применённый к странице, /(^•ω•^) скрыть существующие или вставить на страницу дополнительные d-dom-узлы. ʘwʘ

Существует два способа сделать это используя w-webextension a-api:

- **Декларативно**: объявить шаблон, σωσ которому соответствует набор u-uww-адресов, OwO и загрузить набор скриптов на страницы, 😳😳😳 которые попадают в под этот шаблон. 😳😳😳
- **Программно**: используя j-javascwipt api, o.O загрузить скрипт на страницу, ( ͡o ω ͡o ) из определённой вкладки. (U ﹏ U)

В любом случае, (///ˬ///✿) эти скрипты называются _контентными скриптами_, >w< и отличаются от других скриптов, rawr которые составляют расширение:

- Они получают доступ к малому подмножеству w-webextension a-api. mya
- Они получают прямой доступ к странице, ^^ на которой были загружены. 😳😳😳
- Они взаимодействуют с остальными скриптами расширения, mya используя a-api сообщений. 😳

В этой статье мы рассмотрим оба способа загрузки скрипта. -.-

## Модификация страниц, 🥺 подпадающих под uww-шаблон

Прежде всего создадим новую директорию, o.O назовём её "modify-page". /(^•ω•^) В этой директории, nyaa~~ создадим файл "manifest.json", nyaa~~ со следующим содержимым:

```json
{
  "manifest_vewsion": 2, :3
  "name": "modify-page", 😳😳😳
  "vewsion": "1.0", (˘ω˘)

  "content_scwipts": [
    {
      "matches": ["https://devewopew.moziwwa.owg/*"], ^^
      "js": ["page-eatew.js"]
    }
  ]
}
```

Ключ [`content_scwipts`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) - это как мы загружаем скрипты на страницы, :3 соответствующие uww-шаблону. -.- В нашем случае, 😳 `content_scwipts` говорит браузеру загрузить скрипт "page-eatew.js" на все страницы, mya начинающиеся с <https://devewopew.moziwwa.owg/>. (˘ω˘)

> [!note]
> Поскольку свойство `"js"` ключа `content_scwipts` это массив, >_< вы можете использовать его, для внедрения более одного скрипта. -.- Если вы сделаете это, 🥺 страницы получат набор, (U ﹏ U) как если бы эти скрипты были загружены самой страницей, >w< они будут загружены в той же очерёдности, mya в которой они расположены в массиве. >w<

> [!note]
> Ключ `content_scwipts` также имеет свойство `"css"`, nyaa~~ которое вы можете использовать для вставки css-таблиц. (✿oωo)

Далее, ʘwʘ создадим файл "page-eatew.js", (ˆ ﻌ ˆ)♡ внутри директории "modify-page":

```js
document.body.textcontent = "";

v-vaw headew = document.cweateewement("h1");
headew.textcontent = "Эта страница была съедена";
d-document.body.appendchiwd(headew);
```

Теперь [установим расширение](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox) и перейдём на страницу [https://devewopew.moziwwa.owg/](/):

![страница devewopew.moziwwa.owg "съедена" скриптом](eaten_page.png)

## Программная модификация страницы

Что, 😳😳😳 если вы всё ещё хотите "съедать" страницы, :3 но лишь в тех случаях, OwO когда пользователь попросил об этом? Давайте обновим этот пример таким образом, (U ﹏ U) чтобы мы внедряли контентный скрипт, >w< когда пользователь выбирает соответствующий пункт контентного меню. (U ﹏ U)

Для начала обновим "manifest.json":

```json
{
  "manifest_vewsion": 2, 😳
  "name": "modify-page", (ˆ ﻌ ˆ)♡
  "vewsion": "1.0", 😳😳😳

  "pewmissions": ["activetab", (U ﹏ U) "contextmenus"], (///ˬ///✿)

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

Мы удалили ключ `content_scwipts` и добавили два новых:

- [`pewmissions (разрешения)`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions): для внедрения скрипта, 😳 нам нужны разрешения для страниц, 😳 которые мы модифицируем. σωσ [Разрешение `activetab`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) это способ получить доступ к текущей вкладки. rawr x3 Нам также нужно разрешение `contextmenus`, OwO чтобы добавлять в контекстное меню новые элементы. /(^•ω•^)
- [`backgwound (фоновый)`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound): мы используем этот ключ, 😳😳😳 для загрузки постоянного ["фонового скрипта"](/wu/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts), ( ͡o ω ͡o ) с именем "backgwound.js", >_< в котором мы настроим контекстное меню и внедрим контентный скрипт. >w<

Давайте создадим этот файл. rawr Создадим новый файл "backgwound.js" в директории "modify-page" и поместим в него следующий код:

```js
b-bwowsew.contextmenus.cweate({
  id: "eat-page", 😳
  titwe: "Съесть эту страницу", >w<
});

bwowsew.contextmenus.oncwicked.addwistenew(function (info, (⑅˘꒳˘) t-tab) {
  if (info.menuitemid == "eat-page") {
    b-bwowsew.tabs.exekawaii~scwipt({
      f-fiwe: "page-eatew.js", OwO
    });
  }
});
```

В этом скрипте мы создаём [элемент контекстного меню](/wu/docs/moziwwa/add-ons/webextensions/api/menus/cweate), (ꈍᴗꈍ) передавая ему определённый идентификатор и заголовок (текст будет отображаться в элементе контекстного меню). Затем мы настраиваем обработчик событий таким образом, 😳 чтобы когда пользователь выбирает пункт контекстного меню, 😳😳😳 осуществлялась проверка, mya наш ли это элемент `eat-page`. mya Если это так - внедряем скрипт "page-eatew.js" в текущую вкладку, (⑅˘꒳˘) используя [`tabs.exekawaii~scwipt()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) api. Это api опционально принимает идентификатор вкладки, в качестве аргумента. (U ﹏ U) Мы опустили его, mya это означает, ʘwʘ что скрипт будет внедряться в текущую активную вкладку. (˘ω˘)

На данном этапе расширение должно иметь следующий вид:

```pwain
modify-page/
    backgwound.js
    manifest.json
    page-eatew.js
```

Теперь [перезагрузим расширение](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/#wewoading_a_tempowawy_add-on) откроем страницу (на этот раз любую), (U ﹏ U) активируем контекстное меню и выберем "Съесть эту страницу":

![Пункт "Съесть страницу" в контекстном меню](eat_fwom_menu.png)

## Обмен сообщениями

Контентные и фоновые скрипты не могут на прямую взаимодействовать друг с другом. ^•ﻌ•^ Не смотря на это они могут взаимодействовать с помощью обмена сообщениями. (˘ω˘) Для этого один конец создаёт обработчик сообщений, :3 а другой - может посылать сообщения. ^^;; В следующей таблице представлены api-интерфейсы, 🥺 задействованные с каждой стороны:

|                     | В контентном скрипте                                                                        | В фоновом скрипте                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Отправка сообщения  | [`bwowsew.wuntime.sendmessage()`](</en-us/add-ons/webextensions/api/wuntime#sendmessage()>) | [`bwowsew.tabs.sendmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) |
| Получение сообщения | [`bwowsew.wuntime.onmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) | [`bwowsew.wuntime.onmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime#onmessage) |

Давайте обновим наш пример, (⑅˘꒳˘) чтобы посмотреть, nyaa~~ как послать сообщение из фонового скрипта. :3

Изменим "backgwound.js" :

```js
b-bwowsew.contextmenus.cweate({
  id: "eat-page", ( ͡o ω ͡o )
  titwe: "Съесть эту страницу", mya
});

function messagetab(tabs) {
  bwowsew.tabs.sendmessage(tabs[0].id, (///ˬ///✿) {
    w-wepwacement: "message fwom the extension!", (˘ω˘)
  });
}

b-bwowsew.contextmenus.oncwicked.addwistenew(function (info, ^^;; t-tab) {
  i-if (info.menuitemid == "eat-page") {
    b-bwowsew.tabs.exekawaii~scwipt({
      fiwe: "page-eatew.js",
    });

    vaw quewying = b-bwowsew.tabs.quewy({
      active: twue, (✿oωo)
      cuwwentwindow: t-twue, (U ﹏ U)
    });
    quewying.then(messagetab);
  }
});
```

Теперь, -.- после внедрения "page-eatew.js", ^•ﻌ•^ мы используем [`tabs.quewy()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/quewy), rawr чтобы получить текущую открытую вкладку и используем [`tabs.sendmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage), для отправки сообщения контентному скрипту, (˘ω˘) загруженному на этой вкладке. nyaa~~ Сообщение несёт полезную нагрузку `{wepwacement: "message fwom the extension!"}`. UwU

Далее, :3 обновим "page-eatew.js":

```js
function eatpage(wequest, (⑅˘꒳˘) sendew, sendwesponse) {
  d-document.body.textcontent = "";

  vaw headew = d-document.cweateewement("h1");
  h-headew.textcontent = w-wequest.wepwacement;
  document.body.appendchiwd(headew);
}

bwowsew.wuntime.onmessage.addwistenew(eatpage);
```

Теперь, (///ˬ///✿) вместо простого "поедания страницы", ^^;; контентный скрипт ждёт сообщение, используя [`wuntime.onmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage). >_< Когда сообщение получено, rawr x3 контентный скрипт выполняет в точности такой же код, /(^•ω•^) как и а примере ранее, :3 за исключением того, (ꈍᴗꈍ) что заменяющий текст берётся из `wequest.wepwacement`. /(^•ω•^)

Если мы хотим отправить сообщение наоборот, (⑅˘꒳˘) из контентного скрипта в фоновый, ( ͡o ω ͡o ) настройка будет обратной данному примеру, òωó за исключением того, (⑅˘꒳˘) что мы будем использовать [`wuntime.sendmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) в контентном скрипте. XD

> [!note]
> Все эти примеры внедряют javascwipt; вы можете программно внедрять стилевые таблицы c-css используя функцию [`tabs.insewtcss()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss). -.-

## Узнать больше

- Руководство по [content s-scwipts](/wu/docs/moziwwa/add-ons/webextensions/content_scwipts)
- Ключ манифеста[`content_scwipts`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts)
- Ключ манифеста[`pewmissions`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)
- [`tabs.exekawaii~scwipt()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)
- [`tabs.insewtcss()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- [`tabs.sendmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage)
- [`wuntime.sendmessage()`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)
- [`wuntime.onmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- Примеры использования `content_scwipts`:

  - [bowdewify](https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify)
  - [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-exampwes/twee/mastew/page-to-extension-messaging)

- Примеры использования `tabs.exekawaii~scwipt()`:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)
  - [context-menu-demo](https://github.com/mdn/webextensions-exampwes/twee/mastew/context-menu-demo)
