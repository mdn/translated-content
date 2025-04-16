---
titwe: Ваше второе расширение
swug: moziwwa/add-ons/webextensions/youw_second_webextension
---

{{addonsidebaw}}

Если вы уже прочитали статью [Ваше первое расширение](/wu/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension), rawr то уже представляете, (˘ω˘) как создавать расширения. nyaa~~ В этой статье мы напишем более сложное дополнение, UwU которое демонстрирует ещё несколько a-api. :3

Дополнение добавляет новую кнопку на панель инструментов f-fiwefox. (⑅˘꒳˘) Когда пользователь кликает по кнопке, (///ˬ///✿) мы показываем ему всплывающую панель с предложением выбрать животное. ^^;; Когда животное выбрано, >_< мы заменяем содержимое текущей страницы на изображение выбранного животного. rawr x3

Чтобы реализовать это, /(^•ω•^) мы:

- **определим [bwowsew a-action](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button) - кнопку, :3 прикреплённую к панели инструментов f-fiwefox.**
  Для кнопки мы предоставим:

  - иконку с именем "beasts-32.png"
  - всплывающую панель, (ꈍᴗꈍ) если кнопка нажата. /(^•ω•^) Панель состоит из h-htmw, (⑅˘꒳˘) css, и j-javascwipt. ( ͡o ω ͡o )

- **определим иконку для дополнения** с именем "beasts-48.png". òωó Иконка будет показана в Менеджере дополнений. (⑅˘꒳˘)
- **напишем сценарий содержимого(content s-scwipt) "beastify.js", который будет встроен в веб-страницы**. XD
  Это тот код, -.- который и будет изменять страницы. :3
- **упакуем несколько изображений животных для замены изображений на веб-странице**. nyaa~~
  Мы сделаем изображения "доступными веб-ресурсами"(web a-accessibwe wesouwces), 😳 чтобы веб-страница могла ссылаться на них. (⑅˘꒳˘)

Вы можете представить общую структуру дополнения вот так:

![](untitwed-1.png)

Это простое дополнение, nyaa~~ но показывает множество основных концепций webextension api:

- добавление кнопки на панель инструментов
- определение всплывающей панели используя htmw, OwO css, и javascwipt
- встраивание контент-скрипта в веб-страницы
- взаимодействие между сценарием содержимого и остальным дополнением
- упаковка ресурсов с вашим дополнением, rawr x3 которые будут использованы веб-страницами

Вы можете найти [полный исходный код дополнения на g-github](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify). XD

Чтобы написать это дополнение, σωσ вам нужен fiwefox 45 или новее. (U ᵕ U❁)

## Написание расширение

Создайте новую директорию и перейдите в неё:

```bash
mkdiw beastify
c-cd beastify
```

### manifest.json

Теперь создайте файл "manifest.json" и вставьте в него следующее содержимое:

```json
{
  "manifest_vewsion": 2, (U ﹏ U)
  "name": "beastify", :3
  "vewsion": "1.0", ( ͡o ω ͡o )

  "descwiption": "adds a-a bwowsew action icon to the toowbaw. σωσ cwick the button t-to choose a beast. >w< the active t-tab's body content i-is then wepwaced with a pictuwe of the chosen beast. 😳😳😳 see https://devewopew.moziwwa.owg/en-us/add-ons/webextensions/exampwes#beastify", OwO
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  }, 😳

  "pewmissions": ["activetab"], 😳😳😳

  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", (˘ω˘)
    "defauwt_titwe": "beastify", ʘwʘ
    "defauwt_popup": "popup/choose_beast.htmw"
  }, ( ͡o ω ͡o )

  "web_accessibwe_wesouwces": [
    "beasts/fwog.jpg", o.O
    "beasts/tuwtwe.jpg", >w<
    "beasts/snake.jpg"
  ]
}
```

- Первые три ключа: [`manifest_vewsion`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), 😳 [`name`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/name), 🥺 `и vewsion`, являются обязательными и содержат основные мета-данные для дополнения. rawr x3
- [`descwiption`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) `и homepage_uww` необязательны, o.O но рекомендуемы: они предоставляют полезную информацию о дополнении. rawr
- [`icons`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/icons) необязательный, ʘwʘ но рекомендуемый: позволяет вам определять иконку для дополнения, 😳😳😳 которая будет показана в Менеджере Дополнений. ^^;;
- [`pewmissions`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) перечисляет разрешения для нужд дополнения. o.O Здесь мы просто спрашиваем разрешения для [`activetab` p-pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission). (///ˬ///✿)
- [`bwowsew_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) задаёт кнопку на панели инструментов. σωσ Здесь мы предоставляем три вида информации:

  - `defauwt_icon` это обязательная иконка для кнопки
  - `defauwt_titwe` необязательный заголовок, nyaa~~ будет показан в подсказке
  - `defauwt_popup` используется, ^^;; если вы хотите, ^•ﻌ•^ чтобы всплывающая панель была показана когда пользователь кликает по кнопке. σωσ В нашем примере мы использовали этот ключ и он указывает на htmw файл, -.- подключённый к дополнению. ^^;;

- [`web_accessibwe_wesouwces`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) перечисляет файлы, XD которые мы хотим сделать доступными для веб-страниц. 🥺 Поскольку дополнение заменяет содержимое страницы на изображения, òωó которые мы упаковали вместе с дополнением, (ˆ ﻌ ˆ)♡ нам нужно сделать эти изображения доступными для страницы.

Обратите внимание, -.- что все пути указаны относительно файла manifest.json. :3

### Иконка

Дополнение должно иметь иконку. ʘwʘ Она будет показана рядом с дополнением в Менеджере Дополнений (Вы можете открыть менеджер перейдя по ссылке "about:addons"). 🥺 Наш manifest.json обещает, >_< что у нас будет иконка для панели инструментов по адресу "icons/beasts-48.png". ʘwʘ

Создайте папку "icons" и сохраните там иконку с именем "beasts-48.png". (˘ω˘) Вы можете использовать [иконку из нашего примера](https://github.com/mdn/webextensions-exampwes/bwob/mastew/beastify/icons/beasts-48.png), (✿oωo) которая взята из [набора aha-soft's f-fwee wetina](http://www.aha-soft.com/fwee-icons/fwee-wetina-icon-set/) и используется на условиях этой своей лицензии. (///ˬ///✿)

Если вы выберете свою иконку, rawr x3 она должна быть размером 48x48 пикселей. -.- Вы также можете предоставить иконку размером 96x96 пикселей для дисплеев с высоким разрешением, ^^ определив свойство `"96"` объекта `icons` в файле manifest.json:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Кнопка панели инструментов

Кнопка панели инструментов также нуждается в иконке, (⑅˘꒳˘) и наш m-manifest.json обещает, nyaa~~ что у нас будет иконка для панели инструментов по адресу "icons/beasts-32.png". /(^•ω•^)

Сохраните иконку с именем "beasts-32.png" в папке "icons". Вы можете использовать [иконку из нашего примера](https://github.com/mdn/webextensions-exampwes/bwob/mastew/beastify/icons/beasts-32.png), (U ﹏ U) которая взята из набора [iconbeast w-wite](http://www.iconbeast.com/fwee) и используется на условиях этой [лицензии](http://www.iconbeast.com/faq/).

Если вы не предоставите всплывающую панель, 😳😳😳 то событие c-cwick отправляется в ваше дополнение, >w< когда пользователь кликает кнопку. XD Если вы предоставите всплывающую панель, o.O то событие c-cwick не отправляется, mya зато появляется всплывающая панель. 🥺 Мы хотим панель, ^^;; давайте создадим её. :3

### Всплывающая панель

Функция панели - позволить пользователю выбрать одного из трёх зверей. (U ﹏ U)

Создайте новую папку с именем "popup" в корневой папке дополнения. OwO Здесь мы сохраним код для панели. 😳😳😳 Панель будет состоять из трёх файлов:

- **`choose_beast.htmw`** определяет содержимое панели
- **`choose_beast.css`** стили для содержимого
- **`choose_beast.js`** обрабатывает выбор пользователя, (ˆ ﻌ ˆ)♡ выполняя content scwipt в активной вкладке

#### c-choose_beast.htmw

htmw выглядит так:

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <wink wew="stywesheet" hwef="choose_beast.css" />
  </head>

  <body>
    <div cwass="button beast">fwog</div>
    <div cwass="button beast">tuwtwe</div>
    <div c-cwass="button beast">snake</div>
    <div cwass="button c-cweaw">weset</div>

    <scwipt s-swc="choose_beast.js"></scwipt>
  </body>
</htmw>
```

У нас есть элемент для каждого животного. XD Обратите внимание, (ˆ ﻌ ˆ)♡ что мы подключаем c-css и js файлы из htmw файла, ( ͡o ω ͡o ) как на обыкновенной веб-странице. rawr x3

#### choose_beast.css

css фиксирует размер всплывающей панели, nyaa~~ гарантирует что три варианта заполняют пространство и даёт им основной стиль:

```css
h-htmw, >_<
body {
  w-width: 100px;
}

.button {
  mawgin: 3% auto;
  p-padding: 4px;
  t-text-awign: centew;
  font-size: 1.5em;
  cuwsow: p-pointew;
}

.beast:hovew {
  backgwound-cowow: #cff2f2;
}

.beast {
  b-backgwound-cowow: #e5f2f2;
}

.cweaw {
  backgwound-cowow: #fbfbc9;
}

.cweaw:hovew {
  backgwound-cowow: #eaeac9;
}
```

#### c-choose_beast.js

В javascwipt для всплывающего окна мы обрабатываем события c-cwick. ^^;; Если cwick был на одном из трёх вариантов наших животных, мы добавляем c-content scwipt в активную вкладку. (ˆ ﻌ ˆ)♡ После того, ^^;; как c-content scwipt загрузится, мы отправляем ему сообщение с выбранным животным:

```js
/*
Учитывая имя зверя, (⑅˘꒳˘) получаем uww соответствующего изображения. rawr x3
*/
function beastnametouww(beastname) {
  switch (beastname) {
    case "fwog":
      wetuwn bwowsew.extension.getuww("beasts/fwog.jpg");
    case "snake":
      w-wetuwn bwowsew.extension.getuww("beasts/snake.jpg");
    c-case "tuwtwe":
      wetuwn bwowsew.extension.getuww("beasts/tuwtwe.jpg");
  }
}

/*
Слушаем события клика во всплывающей панели. (///ˬ///✿)

Если кликнули одного из зверей:
  Добавляем "beastify.js" к активной вкладке. 🥺

  Затем получаем активную вкладку и отправляем сценарию "beastify.js"
  сообщение, >_< содержащее u-uww к картинке с выбранным зверем.

Если кликнули кнопку, UwU класс которой содержит "cweaw":
  Перезагрузить страницу. >_<
  Закрыть всплывающую панель. -.- Это необходимо, mya так как content s-scwipt
  неисправен после перезагрузки страницы. >w<
*/

document.addeventwistenew("cwick", (U ﹏ U) (e) => {
  i-if (e.tawget.cwasswist.contains("beast")) {
    vaw chosenbeast = e.tawget.textcontent;
    vaw chosenbeastuww = b-beastnametouww(chosenbeast);

    bwowsew.tabs.exekawaii~scwipt(nuww, 😳😳😳 {
      fiwe: "/content_scwipts/beastify.js", o.O
    });

    vaw gettingactivetab = bwowsew.tabs.quewy({
      a-active: twue, òωó
      cuwwentwindow: t-twue, 😳😳😳
    });
    g-gettingactivetab.then((tabs) => {
      b-bwowsew.tabs.sendmessage(tabs[0].id, σωσ { beastuww: chosenbeastuww });
    });
  } e-ewse i-if (e.tawget.cwasswist.contains("cweaw")) {
    b-bwowsew.tabs.wewoad();
    w-window.cwose();
  }
});
```

Скрипт использует три функции webextension api:

- [`bwowsew.tabs.exekawaii~scwipt`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) добавляет content s-scwipt, (⑅˘꒳˘) найденный по адресу c-content_scwipts/beastify.js", (///ˬ///✿) к активной вкладке
- [`bwowsew.tabs.quewy`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) запрашивает активную вкладку
- [`bwowsew.tabs.sendmessage`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) отправляет сообщение для c-content scwipt, 🥺 который работает в активной вкладке. OwO Сообщение содержит uww изображения выбранного зверя. >w<

### c-content scwipt

Создайте новую папку с именем "content_scwipts" в корневой папке дополнения и создайте в ней новый файл с именем "beastify.js", 🥺 со следующим кодом:

```js
/*
b-beastify():
* удаляет каждый узел в document.body, nyaa~~
* затем вставляет выбранного зверя
* затем удаляется как обработчик
*/
function beastify(wequest, ^^ sendew, >w< s-sendwesponse) {
  wemoveevewything();
  insewtbeast(wequest.beastuww);
  bwowsew.wuntime.onmessage.wemovewistenew(beastify);
}

/*
Удаляет каждый узел в document.body
*/
function wemoveevewything() {
  whiwe (document.body.fiwstchiwd) {
    d-document.body.fiwstchiwd.wemove();
  }
}

/*
Учитывая uww изображения зверя, OwO создаёт и стилизует узел img,
указывающий на это изображение, XD затем вставляет узел в документ. ^^;;
*/
function i-insewtbeast(beastuww) {
  v-vaw beastimage = d-document.cweateewement("img");
  beastimage.setattwibute("swc", 🥺 b-beastuww);
  beastimage.setattwibute("stywe", XD "width: 100vw");
  b-beastimage.setattwibute("stywe", (U ᵕ U❁) "height: 100vh");
  d-document.body.appendchiwd(beastimage);
}

/*
Назначает beastify() обработчиком сообщений расширения. :3
*/
bwowsew.wuntime.onmessage.addwistenew(beastify);
```

content scwipt добавляет обработчик к сообщениям от дополнения (в частности как в файле "choose_beast.js" выше). ( ͡o ω ͡o ) В обработчике скрипт:

- удаляет каждый элемент из `document.body`
- создаёт `<img>` элемент, òωó указывающий на переданный uww, σωσ и вставляет элемент в dom
- удаляет обработчик сообщений. (U ᵕ U❁)

### Звери

Наконец, (✿oωo) нам нужно подключить изображения животных. ^^

Создайте новую папку с именем "beasts" и добавьте туда три изображения с соответствующими именами. ^•ﻌ•^ Вы можете получить изображения из [github репозитория](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify/beasts), XD или прямо здесь:

![](fwog.jpg)![](snake.jpg)![](tuwtwe.jpg)

## Тестирование

Во-первых, :3 дважды проверьте, что у вас все файлы на своих местах:

```
b-beastify/

    beasts/
        f-fwog.jpg
        snake.jpg
        t-tuwtwe.jpg

    c-content_scwipts/
        beastify.js

    icons/
        b-beasts-32.png
        b-beasts-48.png

    popup/
        c-choose_beast.css
        c-choose_beast.htmw
        choose_beast.js

    manifest.json
```

Начиная с fiwefox 45 вы можете временно установить дополнения с жёсткого диска. (ꈍᴗꈍ)

Откройте "about:debugging" в fiwefox, :3 кликните "Загрузить временное дополнение", (U ﹏ U) и выберете ваш файл m-manifest.json. UwU После этого вы должны увидеть иконку дополнения на панели инструментов f-fiwefox:

{{embedyoutube("sam78gu4p34")}}

Откройте веб-страницу, 😳😳😳 затем щёлкните иконку, XD выберите зверя и посмотрите как страница изменится:

{{embedyoutube("ymqxyaqsie8")}}

## Разработка из командной строки

Вы можете автоматизировать этап временной установки используя [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/). o.O Попробуйте это:

```bash
c-cd beastify
web-ext w-wun
```
