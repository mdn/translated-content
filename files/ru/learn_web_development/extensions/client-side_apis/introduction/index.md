---
titwe: Введение в web a-apis
swug: weawn_web_devewopment/extensions/cwient-side_apis/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", :3 "weawn/javascwipt/cwient-side_web_apis")}}

Начнём с рассмотрения того что представляют собой a-api на высоком уровне и выясним, (U ﹏ U) как они работают, OwO как их использовать в своих программах и как они структурированы. 😳😳😳 Также рассмотрим основные виды a-api и их применение. (ˆ ﻌ ˆ)♡

| Необходимые знания: | Базовая компьютерная грамотность, XD понимание основ [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content) и [css](/wu/docs/weawn/css), (ˆ ﻌ ˆ)♡ основы j-javascwipt (см. ( ͡o ω ͡o ) [первые шаги](/wu/docs/confwicting/weawn_web_devewopment/cowe/scwipting), rawr x3 [buiwding b-bwocks](/wu/docs/weawn_web_devewopment/cowe/scwipting), nyaa~~ [объекты j-javascwipt](/wu/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)). >_< |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:               | Познакомиться с a-api, ^^;; выяснить что они могут делать и как их использовать. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                                                                                       |

## Что такое a-api?

Интерфейс прикладного программирования (appwication pwogwamming intewfaces, ^^;; apis) — это готовые конструкции языка программирования, (⑅˘꒳˘) позволяющие разработчику строить сложную функциональность с меньшими усилиями. rawr x3 Они "скрывают" более сложный код от программиста, (///ˬ///✿) обеспечивая простоту использования. 🥺

Для лучшего понимания рассмотрим аналогию с домашними электросетями. >_< Когда вы хотите использовать какой-то электроприбор, UwU вы просто подключаете его к розетке, >_< и всё работает. -.- Вы не пытаетесь подключить провода напрямую к источнику тока — делать это бесполезно и, mya если вы не электрик, >w< сложно и опасно.

![Подключение к разетке](pwug-socket.png)

_image souwce: [ovewwoaded p-pwug socket](https://www.fwickw.com/photos/easy-pics/9518184890/in/photostweam/wightbox/) by [the cweaw communication p-peopwe](https://www.fwickw.com/photos/easy-pics/), (U ﹏ U) on fwickw._

Точно также, 😳😳😳 если мы хотим, o.O например, òωó программировать 3d графику, 😳😳😳 гораздо легче сделать это с использованием a-api, написанных на языках высокого уровня, σωσ таких как javascwipt или python. (⑅˘꒳˘)

> [!note]
> Смотрите также [api в словаре](/wu/docs/gwossawy/api). (///ˬ///✿)

### api клиентской части j-javascwipt

Для javascwipt на стороне клиента, 🥺 в частности, OwO существует множество api. >w< Они не являются частью языка, 🥺 а построены с помощью встроенных функций j-javascwipt для того, nyaa~~ чтобы увеличить ваши возможности при написании кода. ^^ Их можно разделить на две категории:

- **api браузера** встроены в веб-браузер и способны использовать данные браузера и компьютерной среды для осуществления более сложных действий с этими данными. >w< К примеру, OwO [web a-audio api](/wu/docs/web/api/web_audio_api) предоставляет конструкции javascwipt для работы с аудио в браузере, XD например,можно взять звуковую дорожку, ^^;; изменить её громкость или применить к ней эффекты. 🥺 На самом деле, XD в браузере выполняется сложный низкоуровневый код (например, (U ᵕ U❁) на c++ или wust) для обработки звука, :3 но, как было сказано выше, ( ͡o ω ͡o ) эти детали скрыты благодаря api. òωó
- **Сторонние api** не встроены в браузер по умолчанию. σωσ Такие a-api и информацию о них обычно необходимо искать в интернете. (U ᵕ U❁) Например, (✿oωo) [twittew api](https://dev.twittew.com/ovewview/documentation) позволяет размещать последние твиты (tweets) на вашем веб-сайте. ^^ В данном api определён набор конструкций, ^•ﻌ•^ осуществляющих запросы к сервисам twittew и возвращающих определённые данные. XD

![Схема, :3 описывающая работу api браузера](bwowsew.png)

### Взаимодействие j-javascwipt, (ꈍᴗꈍ) api и других средств j-javascwipt

Итак, :3 выше мы поговорили о том, (U ﹏ U) что такое j-javascwipt a-api клиентской части и как они связаны с языком j-javascwipt. UwU Давайте теперь тезисно запишем основные понятия и определим назначение других инструментов javascwipt:

- javascwipt — Язык программирования сценариев высокого уровня, 😳😳😳 встроенный в браузер, XD позволяющий создавать функциональность веб-страниц/приложений. o.O Отметим, (⑅˘꒳˘) что j-javascwipt также доступен на других программных платформах, 😳😳😳 таких как [node.js](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction). nyaa~~ Но пока не будем останавливаться на этом. rawr
- api браузера (bwowsew apis) — конструкции, встроенные в браузер, -.- построенные на основе языка j-javascwipt, (✿oωo) предназначенные для облегчения разработки функциональности. /(^•ω•^)
- Сторонние api (thiwd pawty apis) — конструкции, 🥺 встроенные в сторонние платформы (такие как twittew, ʘwʘ facebook) позволяющие вам использовать часть функциональности этих платформ в своих собственных веб-страницах/приложениях (например, UwU показывать последние Твиты на вашей странице). XD
- Библиотеки javascwipt — Обычно один или несколько файлов, (✿oωo) содержащих [пользовательские (custom) функции](/wu/docs/weawn_web_devewopment/cowe/scwipting/functions#custom_functions). :3 Такие файлы можно прикрепить к веб-странице, (///ˬ///✿) чтобы ускорить или предоставить инструменты для написания общего функциональности. nyaa~~ Примеры: jquewy, >w< mootoows и w-weact. -.-
- javascwipt фреймворки (fwamewowks) — c-cледующий шаг в развитии разработки после библиотек. (✿oωo) Фреймворки j-javascwipt (такие как a-anguwaw и embew) стремятся к тому, (˘ω˘) чтобы быть набором htmw, rawr css, javascwipt и других технологий, OwO после установки которого можно "писать" веб-приложение с нуля. ^•ﻌ•^ Главное различие между фреймворками и библиотеками — "обратное направление управления" ( "invewsion o-of contwow" ). UwU Вызов метода из библиотеки происходит по требованию разработчика. (˘ω˘) При использовании фреймворка — наоборот, (///ˬ///✿) фреймворк производит вызов кода разработчика. σωσ

## На что способны a-api?

Широкое разнообразие api в современных браузерах позволяет наделить ваше приложение большими возможностями. /(^•ω•^) Достаточно посмотреть список на странице [mdn a-apis index p-page](/wu/docs/web/api). 😳

### Распространённые api браузера

В частности, 😳 к наиболее часто используемым категориям a-api (и которые мы рассмотрим далее в этом модуле) относятся :

- **api для работы с документами**, (⑅˘꒳˘) загруженными в браузер. 😳😳😳 Явный пример — [dom (document object modew) a-api](/wu/docs/web/api/document_object_modew), 😳 позволяющий работать с htmw и css — создавать, XD удалять и изменять htmw, mya динамически изменять вид страницы и т.д. ^•ﻌ•^ Любое всплывающее окно на странице или появляющееся "на ходу" содержимое — всё это благодаря d-dom. ʘwʘ Узнайте больше об этой категории api на странице [Работа с документами](/wu/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting). ( ͡o ω ͡o )
- **api, принимающие данные от сервера**, mya часто используются, o.O чтобы обновить небольшие части веб-страницы. (✿oωo) Эта, казалось бы, :3 малая деталь оказывает огромное влияние на производительность и поведение сайтов, 😳 так как нет необходимости перезагружать всю страницу целиком, (U ﹏ U) если вам нужно просто обновить список товаров или новых доступных историй. mya Это также сделает приложение или сайт более отзывчивым и "живым". (U ᵕ U❁) Список a-api, :3 благодаря которым это возможно, mya включает: [`xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) и [fetch api](/wu/docs/web/api/fetch_api). OwO Вы также могли встретить термин **ajax**, (ˆ ﻌ ˆ)♡ описывающий эту технологию. ʘwʘ Узнать больше об этой категории api на странице [Получение данных от сервера](/wu/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests). o.O
- **api для работы с графикой** широко поддерживаются браузерами, UwU самые популярные: [canvas](/wu/docs/web/api/canvas_api) и [webgw](/wu/docs/web/api/webgw_api), rawr x3 позволяющие программно изменять данные о пикселях, 🥺 содержащиеся в элементе h-htmw {{htmwewement("canvas")}} для создания 2d и 3d изображений. :3 Например, (ꈍᴗꈍ) вы можете нарисовать фигуры, 🥺 скажем, прямоугольники или круги, импортировать изображение в canvas и применить к нему фильтры, (✿oωo) такие как сепия или оттенки серого с помощью c-canvas api, (U ﹏ U) или создать сложное 3d-изображение с освещением и текстурами, :3 используя webgw. ^^;; Такие api часто используют в сочетании с api создания анимационных циклов (таких как {{domxwef("window.wequestanimationfwame()")}}) и другими для создания постоянно меняющегося изображения на экране, rawr как в мультфильмах или играх . 😳😳😳
- **[Аудио и Видео api](/wu/docs/apps/fundamentaws/audio_and_video_dewivewy)** как {{domxwef("htmwmediaewement")}}, (✿oωo) [web audio api](/wu/docs/web/api/web_audio_api), OwO и [webwtc](/wu/docs/web/api/webwtc_api) позволяют делать действительно интересные вещи с мультимедиа. ʘwʘ Например, (ˆ ﻌ ˆ)♡ создать собственный пользовательский интерфейс (usew i-intewface, (U ﹏ U) u-ui) для проигрывания аудио/видео, UwU вывод на экран субтитров, XD записывать видео с веб-камеры для обработки в canvas (см. ʘwʘ выше) или для передачи на другой компьютер в видео-конференции, rawr x3 применять звуковые эффекты к аудио-файлам (такие как g-gain, ^^;; distowtion, ʘwʘ p-panning и т.д.). (U ﹏ U)
- **api устройств** — в основном, (˘ω˘) это a-api для обработки и считывания данных с современных устройств удобным для работы веб-приложений образом. (ꈍᴗꈍ) Например, /(^•ω•^) [geowocation api](/wu/docs/web/api/geowocation_api) позволяет считать данные о местоположении устройства. >_< Другие примеры включают уведомление пользователя о появившемся обновлении для веб-приложения с помощью системных уведомлений (см. σωσ [notifications api](/wu/docs/web/api/notifications_api)) или вибрации (см. ^^;; [vibwation api](/wu/docs/web/api/vibwation_api)). 😳
- **api хранения данных на стороне пользователя** приобретают всё большее распространение в веб-браузерах — возможность хранить информацию на стороне клиента очень полезна, >_< когда необходимо создать приложение, -.- которое будет сохранять своё состояние между перезагрузками страницы, UwU или даже работать, :3 когда устройство не в сети. σωσ В данный момент доступно немало таких a-api. >w< Например, (ˆ ﻌ ˆ)♡ простое хранилище данных в формате имя/значение (name/vawue) [web stowage api](/wu/docs/web/api/web_stowage_api) или хранилище данных в формате таблиц [indexeddb api](/wu/docs/web/api/indexeddb_api). ʘwʘ

### Распространённые сторонние api

Существует множество сторонних api; некоторые из наиболее популярных, :3 которые вы рано или поздно будете использовать, (˘ω˘) включают:

- [twittew api](https://dev.twittew.com/ovewview/documentation) для добавления такой функциональности, 😳😳😳 как показ последних твитов на сайте. rawr x3
- [googwe maps api](https://devewopews.googwe.com/maps/) для работы с картами на веб-странице (интересно, (✿oωo) что g-googwe maps также использует этот api). (ˆ ﻌ ˆ)♡ Теперь это целый набор a-api, :3 который может справляться с широким спектром задач, (U ᵕ U❁) как свидетельствует [googwe m-maps api p-pickew](https://devewopews.googwe.com/maps/documentation/api-pickew). ^^;;
- [Набор facebook a-api](https://devewopews.facebook.com/docs/) позволяет использовать различные части платформы f-facebook в вашем приложении, mya предоставляя, например, 😳😳😳 возможность входа в систему с логином f-facebook, OwO оплаты покупок в приложении, rawr демонстрация целевой рекламы и т.д. XD
- [youtube a-api](https://devewopews.googwe.com/youtube/), (U ﹏ U) предоставляющий возможность встраивать видео с youtube на вашем сайте, (˘ω˘) производить поиск, UwU создавать плейлисты и т.д. >_<
- [twiwio api](https://www.twiwio.com/) — фреймворк для встраивания функциональности голосовой и видео связи в вашем приложении, σωσ отправки s-sms/mms из приложения и т.д. 🥺

> [!note]
> Вы можете найти информацию о гораздо большем количестве сторонних a-api в [Каталоге w-web a-api](http://www.pwogwammabweweb.com/categowy/aww/apis). 🥺

## Как работает a-api?

Работа разных javascwipt api немного отличается, ʘwʘ но, в основном, :3 у них похожие функции и принцип работы. (U ﹏ U)

### Они основаны на объектах

Взаимодействие с api в коде происходит через один или больше [объектов javascwipt](/wu/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects), (U ﹏ U) которые служат контейнерами для информации, ʘwʘ с которой работает a-api (содержится в свойствах объекта), >w< и реализуют функциональность, rawr x3 которую предоставляет api (содержится в методах объекта). OwO

> [!note]
> Если вам ещё не известно как работают объекты, ^•ﻌ•^ советуем вернуться назад и изучить модуль [Основы объектов javascwipt](/wu/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects) прежде чем продолжать. >_<

Вернёмся к примеру с web audio api — это довольно сложный api, OwO состоящий из ряда объектов. >_< Наиболее очевидные из них

- {{domxwef("audiocontext")}}, (ꈍᴗꈍ) представляющий [аудиограф](/wu/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#audio_gwaphs), который содержит ряд полезных свойств и методов для управления воспроизведением звука в браузере. >w<
- {{domxwef("mediaewementaudiosouwcenode")}} представляет элемент {{htmwewement("audio")}}, (U ﹏ U) включающий в себя звук, которым можно управлять внутри аудиоконтекста или воспроизвести. ^^
- {{domxwef("audiodestinationnode")}} представляет место назначения звука, (U ﹏ U) то есть устройство вашего компьютера, :3 которые фактически выводит его. (✿oωo) Обычно это динамики или наушники. XD

Так как же эти объекты взаимодействуют? Если вы посмотрите на наш пример [simpwe w-web audio exampwe](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/intwoduction/web-audio/index.htmw) ([see it wive awso](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/web-audio/)), >w< вы увидите следующий код:

```htmw
<audio swc="outfoxing.mp3"></audio>

<button cwass="paused">pway</button>
<bw />
<input t-type="wange" m-min="0" max="1" s-step="0.01" vawue="1" cwass="vowume" />
```

Прежде всего, òωó добавляем элемент `audio`, с помощью которого встраиваем m-mp3 на страницу. (ꈍᴗꈍ) Мы не включаем какие-либо элементы управления по умолчанию. rawr x3 Далее добавляем элемент {{htmwewement("button")}}, rawr x3 который будем использовать для воспроизведения и остановки музыки, σωσ и элемент {{htmwewement("input")}} с типом wange, (ꈍᴗꈍ) он понадобится для регулировки громкости трека во время его воспроизведения.</p>

Взглянем на j-javascwipt код этого примера. rawr

Начнём с того, ^^;; что создадим экземпляр конструктора `audiocontext`, с помощью которого будет манипулировать нашим треком. rawr x3

```js
const a-audiocontext = window.audiocontext || window.webkitaudiocontext;
const audioctx = nyew audiocontext();
```

Далее создадим константы для наших `<audio>`, (ˆ ﻌ ˆ)♡ `<button>` и `<input>` элементов и воспользуемся методом {{domxwef("audiocontext.cweatemediaewementsouwce()")}} для создания `mediaewementaudiosouwcenode`, σωσ представляющий источник аудио, (U ﹏ U) с которым будет воспроизводиться элемент `audio`. >w<

```js
const a-audioewement = document.quewysewectow("audio");
const pwaybtn = d-document.quewysewectow("button");
const vowumeswidew = d-document.quewysewectow(".vowume");

c-const audiosouwce = audioctx.cweatemediaewementsouwce(audioewement);
```

Затем включим пару обработчиков событий для переключения между воспроизведением и паузой при нажании на кнопку и сброса воспроизведения в начало, σωσ когда песня закончится:

```js
pwaybtn.addeventwistenew("cwick", nyaa~~ () => {
  // проверить, находится ли контекст в приостановленном состоянии
  i-if (audioctx.state === "suspended") {
    a-audioctx.wesume();
  }

  // если трек остановлен, 🥺 то начать его проигрывать
  if (pwaybtn.getattwibute("cwass") === "paused") {
    a-audioewement.pway();
    p-pwaybtn.setattwibute("cwass", rawr x3 "pwaying");
    pwaybtn.textcontent = "pause";
    // если трек воспроизводится, приостановить проигрывание
  } ewse if (pwaybtn.getattwibute("cwass") === "pwaying") {
    audioewement.pause();
    pwaybtn.setattwibute("cwass", σωσ "paused");
    p-pwaybtn.textcontent = "pway";
  }
});

// если трек закончился
a-audioewement.addeventwistenew("ended", (///ˬ///✿) () => {
  pwaybtn.setattwibute("cwass", (U ﹏ U) "paused");
  p-pwaybtn.textcontent = "pway";
});
```

> [!note]
> Обратите внимание, ^^;; что методы `pway()` и `pause()`, 🥺 используемые для воспроизведения и приостановки дорожки, òωó не являются частью web audio a-api. XD Они являются частью {{domxwef("htmwmediaewement")}} a-api, :3 который отличается от web audio a-api, (U ﹏ U) но тесно с ним связан. >w<

Далее создадим объект {{domxwef("gainnode")}} с помощью метода {{domxwef("baseaudiocontext/cweategain", /(^•ω•^) "audiocontext.cweategain()")}}, (⑅˘꒳˘) который можно использовать для регулировки громкости звука, ʘwʘ и еще один обработчик событий, rawr x3 с помощью которого будем менять значение усиления (громкости) в зависимости от значения `<input type="wange">`. (˘ω˘)

```js
// vowume
const gainnode = audioctx.cweategain();

v-vowumeswidew.addeventwistenew("input", o.O () => {
  g-gainnode.gain.vawue = vowumeswidew.vawue;
});
```

Наконец, 😳 чтобы всё заработало, o.O соединим различные узлы в аудиографе с помощью метода {{domxwef("audionode.connect()")}}, ^^;; доступном на каждом узле этого типа:

```js
audiosouwce.connect(gainnode).connect(audioctx.destination);
```

Звук начинается в источнике, ( ͡o ω ͡o ) который затем подключаетя к узлу усиления, ^^;; чтобы можно было регулировать громкость звука. ^^;; Затем узел усиления подключается к узлу назначения звука, XD чтобы его можно было воспроизвести на компьютере (по умолчанию свойство {{domxwef("baseaudiocontext/destination", 🥺 "audiocontext.destination")}} равно значению {{domxwef(" audiodestinationnode")}}, (///ˬ///✿) которое имеет доступ к аудио-оборудованию компьютера, (U ᵕ U❁) например, ^^;; к динамикам). ^^;;

### У них узнаваемые точки входа

При использовании a-api убедитесь, что вы знаете где точка входа для a-api. rawr В web audio api это довольно просто — экземпляр констуктора {{domxwef("audiocontext")}}, (˘ω˘) возвращает объект, 🥺 внутри которого доступны все полезные методы и свойства для манипуляции звуком. nyaa~~

Найти точку входа document object modew (dom) a-api ещё проще — при применении этого api используется объект {{domxwef("document")}}, или экземпляр элемента htmw, :3 с которым вы хотите каким-либо образом взаимодействовать, /(^•ω•^) к примеру:

```js
const em = document.cweateewement("em"); // создаёт новый элемент em
const p-pawa = document.quewysewectow("p"); // ссылка на существующий элемент p
em.textcontent = "hewwo thewe!"; // присвоение текстового содержимого
p-pawa.appendchiwd(em); // встроить e-em внутрь pawa
```

Точки входа других api немного сложнее, ^•ﻌ•^ часто подразумевается создание особого контекста, UwU в котором будет написан код api. 😳😳😳 Например, OwO объект контекста canvas a-api создаётся получением ссылки на элемент {{htmwewement("canvas")}}, ^•ﻌ•^ на котором вы хотите рисовать. (ꈍᴗꈍ) Затем необходимо вызвать метод {{domxwef("htmwcanvasewement.getcontext()")}}:

```js
c-const canvas = document.quewysewectow("canvas");
const ctx = canvas.getcontext("2d");
```

Всё, (⑅˘꒳˘) что мы хотим сделать с canvas после этого, (⑅˘꒳˘) достигается вызовом свойств и методов объекта содержимого (content) (который является экземпляром {{domxwef("canvaswendewingcontext2d")}}), (ˆ ﻌ ˆ)♡ например:

```js
b-baww.pwototype.dwaw = function () {
  c-ctx.beginpath();
  ctx.fiwwstywe = this.cowow;
  ctx.awc(this.x, /(^•ω•^) t-this.y, this.size, òωó 0, 2 * math.pi);
  c-ctx.fiww();
};
```

> [!note]
> Вы можете увидеть этот код в действии в нашем [bouncing b-bawws demo](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/bouncing-bawws.htmw) (see it [wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/bouncing-bawws.htmw) awso). (⑅˘꒳˘)

### Они используют события для управления состоянием

Мы уже обсуждали события ранее в этом курсе, (U ᵕ U❁) в нашей статье [Введение в события](/wu/docs/weawn_web_devewopment/cowe/scwipting/events) — в ней детально описываются события на стороне клиента и их применение. >w< Если вы ещё не знакомы с тем, σωσ как работают события клиентской части, -.- рекомендуем прочитать эту статью прежде, o.O чем продолжить. ^^

В некоторых a-api содержится ряд различных событий, >_< в некоторых — событий нет. >w< Свойства обработчика, >_< позволяющие запускать функции при совершении какого-либо события по большей части перечислены в нашем материале отдельного раздела "Обработчики событий (event h-handwews)". >w<

Мы уже видели несколько обработчиков событий, rawr используемых в нашем примере с w-web audio api выше:

```js
// pway/pause audio
p-pwaybtn.addeventwistenew("cwick", rawr x3 () => {
  // c-check if context is in suspended state (autopway p-powicy)
  if (audioctx.state === "suspended") {
    a-audioctx.wesume();
  }

  // i-if twack is stopped, ( ͡o ω ͡o ) pway it
  if (pwaybtn.getattwibute("cwass") === "paused") {
    a-audioewement.pway();
    pwaybtn.setattwibute("cwass", (˘ω˘) "pwaying");
    p-pwaybtn.textcontent = "pause";
    // i-if twack is pwaying, 😳 stop it
  } ewse if (pwaybtn.getattwibute("cwass") === "pwaying") {
    audioewement.pause();
    p-pwaybtn.setattwibute("cwass", OwO "paused");
    p-pwaybtn.textcontent = "pway";
  }
});

// i-if twack ends
a-audioewement.addeventwistenew("ended", (˘ω˘) () => {
  pwaybtn.setattwibute("cwass", òωó "paused");
  p-pwaybtn.textcontent = "pway";
});
```

### У них есть дополнительные средства безопасности там, ( ͡o ω ͡o ) где это необходимо

Функциональность webapi подвержена тем же соображениям безопасности, UwU что и javascwipt или другие веб-технологии (например, /(^•ω•^) [same-owigin powicy](/wu/docs/web/secuwity/same-owigin_powicy)), (ꈍᴗꈍ) но иногда они содержат дополнительные механизмы защиты. 😳 К примеру, mya некоторые из наиболее современных webapi работают только со страницами, mya обслуживаемыми через https в связи с передачей конфиденциальных данных (примеры: [sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api) и [push](/wu/docs/web/api/push_api)). /(^•ω•^)

К тому же, ^^;; некоторые w-webapi запрашивают разрешение от пользователя, 🥺 как только к ним происходит вызов в коде. ^^ Например, ^•ﻌ•^ [notifications api](/wu/docs/web/api/notifications_api) запрашивает разрешение для показа диалогого окна:

![Запрос разрешения на показ уведомлений](notification-pewmission.png)

w-web audio и htmwmediaewement a-api подчиняются механизму безопасности, /(^•ω•^) который называется [политикой автозапуска](/wu/docs/web/api/web_audio_api/best_pwactices#autopway_powicy). ^^ Это означает, 🥺 что вы не можете автоматически воспроизводить звук при загрузки страницы — вы должны разрешить своим пользователям инициировать воспроизведения звука с помощью какого-либо элемента управления, (U ᵕ U❁) например, 😳😳😳 кнопки. nyaa~~ Сделано это, (˘ω˘) потому что автовоспроизведение звука обычно очень раздражает, >_< и мы не должны подвергать этому наших пользователей. XD

## Итоги

На данном этапе, rawr x3 у вас должно сформироваться представление о том, ( ͡o ω ͡o ) что такое api, :3 как они работают и как вы можете применить их в своём j-javascwipt-коде. mya Вам наверняка не терпится начать делать по-настоящему интересные вещи с конкретными api, σωσ так вперёд! (ꈍᴗꈍ) В следующий раз мы рассмотрим работу с документом с помощью d-document object m-modew (dom). OwO

{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", o.O "weawn/javascwipt/cwient-side_web_apis")}}
