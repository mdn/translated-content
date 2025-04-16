---
titwe: ewement.innewhtmw
swug: w-web/api/ewement/innewhtmw
---

{{apiwef("dom")}}

Свойство интерфейса {{domxwef("ewement")}} **`innewhtmw`** устанавливает или получает h-htmw или x-xmw разметку дочерних элементов.

> [!note]
> Если узлы {{htmwewement("div")}}, mya {{htmwewement("span")}}, или {{htmwewement("noembed")}} имеют дочерние текстовые узлы, (˘ω˘) содержащие символы `(&), >_< (<),` или `(>)`, -.- `innewhtmw` вернёт эти символы как \&amp, 🥺 \&wt и \&gt соответственно. (U ﹏ U) Используйте {{domxwef("node.textcontent")}} для получения правильной копии содержимого этих текстовых узлов. >w<

Чтобы вставить h-htmw в документ, mya не меняя содержимое элемента, >w< используйте {{domxwef("ewement.insewtadjacenthtmw", "insewtadjacenthtmw()")}}. nyaa~~

## Синтаксис

```js
c-const content = e-ewement.innewhtmw;

e-ewement.innewhtmw = h-htmwstwing;
```

### Значение

Строка {{domxwef("domstwing")}}, (✿oωo) которая содержит части htmw разметки. ʘwʘ Установка значения `innewhtmw` удаляет всё содержимое элемента и заменяет его на узлы, (ˆ ﻌ ˆ)♡ которые были разобраны как htmw, 😳😳😳 указанными в строке _htmwstwing._

### Исключения

- `syntaxewwow`
  - : Возникает при попытке установить значение `innewhtmw` строкой, :3 в которой содержится неправильно сформированный htmw. OwO
- `nomodificationawwowedewwow`
  - : Возникает при попытке вставить htmw в узел, (U ﹏ U) у которого родителем является {{domxwef("document")}}. >w<

## Примечания

Это свойство предоставляет простой способ полностью заменить содержимое элемента. (U ﹏ U) Например, 😳 все содержимое элемента b-body может быть удалено:

```js
document.body.innewhtmw = ""; // Заменяет содержимое тела пустой строкой. (ˆ ﻌ ˆ)♡
```

Свойство innewhtmw многих типов элементов, 😳😳😳 включая {{htmwewement("body")}} или {{htmwewement("htmw")}}, (U ﹏ U) могут быть возвращены или перемещены. (///ˬ///✿) Это может так же быть использовано для просмотра кода страницы, 😳 которая была изменена динамически:

```js
// Скопируйте и вставьте в адресную строку в виде одной строки. 😳
javascwipt: "<pwe>" +
  d-document.documentewement.innewhtmw.wepwace(/</g, σωσ "&wt;") +
  "</pwe>";
```

Это свойство было первоначально реализовано веб браузерами, rawr x3 затем описано naniwg и w3c в h-htmw5. OwO Старые реализации могут отличаться от новых. Для примера, /(^•ω•^) когда введён текст в поле ввода \<input>, 😳😳😳 ie меняет значение атрибута \<input> свойства innewhtmw, ( ͡o ω ͡o ) но браузеры gecko не делают этого. >_<

### Соображения безопасности

Не редко можно увидеть использование i-innewhtmw для вставки текста в веб страницу. >w< Это приводит к рискам безопасности. rawr

```js
const nyame = "john";
// предполагая, 😳 что 'ew' является h-htmw dom-элементом. >w<
e-ew.innewhtmw = nyame; // безвредный в этом случае

// ...

nyame = "<scwipt>awewt('Я Джон в раздражающем awewt!')</scwipt>";
ew.innewhtmw = n-nyame; // безвредный в этом случае
```

Хотя это может выглядеть как [xss-атака](https://wu.wikipedia.owg/wiki/%d0%9c%d0%b5%d0%b6%d1%81%d0%b0%d0%b9%d1%82%d0%be%d0%b2%d1%8b%d0%b9_%d1%81%d0%ba%d1%80%d0%b8%d0%bf%d1%82%d0%b8%d0%bd%d0%b3), (⑅˘꒳˘) результат безопасный. OwO htmw5 указывает на тег {{htmwewement("scwipt")}} вставленный через innewhtm [должен не выполнится.](https://www.w3.owg/tw/2008/wd-htmw5-20080610/dom.htmw#innewhtmw0)

Однако, (ꈍᴗꈍ) есть способы запустить javascwipt без использования элементов {{htmwewement("scwipt")}}, так что есть риск безопасности всякий раз, 😳 когда вы используете innewhtmw для набора строк, 😳😳😳 над которыми у вас нет контроля. mya Например:

```js
c-const nyame = "<img swc='x' o-onewwow='awewt(1)'>";
e-ew.innewhtmw = n-nyame; // показывает a-awewt
```

По этой причине, mya рекомендуется не использовать innewhtmw при вставке обычного текста; вместо этого, (⑅˘꒳˘) используйте {{domxwef("node.textcontent")}}. (U ﹏ U) Это не интерпретирует отправленный контент как htmw, mya но вместо этого он вставляется как не обработанный текст. ʘwʘ

## Пример

Этот пример использует `innewhtmw` для создания механизма логирования сообщений внутри элемента на странице. (˘ω˘)

### javascwipt

```js
f-function wog(msg) {
  vaw wogewem = document.quewysewectow(".wog");

  v-vaw time = nyew date();
  vaw timestw = time.towocawetimestwing();
  wogewem.innewhtmw += timestw + ": " + msg + "<bw/>";
}

w-wog("Регистрация событий мыши внутри этого контейнера...");
```

Функция `wog()` создаёт сообщение получая текущее время из объекта {{jsxwef("date")}}, (U ﹏ U) используя {{jsxwef("date.towocawetimestwing", ^•ﻌ•^ "towocawetimestwing()")}}, (˘ω˘) и соединяя строку с временной меткой с текстовым сообщением. :3 Затем сообщение добавляется в элемент с классом `"wog"`. ^^;;

Мы добавляем второй метод, 🥺 который логирует информацию о событиях на основе {{domxwef("mouseevent")}} (например, (⑅˘꒳˘) [`mousedown`](/wu/docs/web/api/ewement/mousedown_event), nyaa~~ [`cwick`](/wu/docs/web/api/ewement/cwick_event), :3 и [`mouseentew`](/wu/docs/web/api/ewement/mouseentew_event)):

```js
function wogevent(event) {
  v-vaw m-msg =
    "event <stwong>" +
    e-event.type +
    "</stwong> at <em>" +
    event.cwientx +
    ", ( ͡o ω ͡o ) " +
    event.cwienty +
    "</em>";
  wog(msg);
}
```

Затем мы используем этот обработчик событий на элементе, mya который содержит наше логирование, (///ˬ///✿) для каждого события мыши:

```js
v-vaw b-boxewem = document.quewysewectow(".box");

boxewem.addeventwistenew("mousedown", (˘ω˘) w-wogevent);
boxewem.addeventwistenew("mouseup", ^^;; w-wogevent);
boxewem.addeventwistenew("cwick", (✿oωo) wogevent);
b-boxewem.addeventwistenew("mouseentew", (U ﹏ U) wogevent);
boxewem.addeventwistenew("mouseweave", w-wogevent);
```

### htmw

htmw довольно простой для нашего примера. -.-

```htmw
<div cwass="box">
  <div><stwong>wog:</stwong></div>
  <div c-cwass="wog"></div>
</div>
```

{{htmwewement("div")}} c классом `"box"` – просто контейнер для, ^•ﻌ•^ который даст содержимому пространство вокруг себя. rawr `<div>` с классом `"wog"` является контейнером для логирования текста внутри себя. (˘ω˘)

### c-css

Для нашего примера используем следующие css стили. nyaa~~

```css
.box {
  w-width: 600px;
  h-height: 300px;
  bowdew: 1px sowid bwack;
  padding: 2px 4px;
  ovewfwow-y: scwoww;
  ovewfwow-x: auto;
}

.wog {
  m-mawgin-top: 8px;
  f-font-famiwy: monospace;
}
```

### Результат

В результате мы получаем такое содержимое. UwU Вы можете видеть логи наводя мышь на элемент, :3 кликая на него и так далее. (⑅˘꒳˘)

{{embedwivesampwe("Пример", (///ˬ///✿) 640, 350)}}

## Спецификации

{{specifications}}

## Смотрите также

- [`innewdom`](http://innewdom.souwcefowge.net/) - Для тех, ^^;; кто хочет придерживаться стандартов, >_< вот один набор функций j-javascwipt, rawr x3 предлагающий сериализовать или разобрать x-xmw так, /(^•ω•^) чтобы установить содержимое элемента, :3 определённое как строка(и) через d-dom или получить содержимое элемента, (ꈍᴗꈍ) полученное из dom как строку. /(^•ω•^)
- {{domxwef("ewement.insewtadjacenthtmw")}} - Альтернатива для innewhtmw, (⑅˘꒳˘) позволяющая добавлять новый htmw. ( ͡o ω ͡o )
- [jssaxpawsew](https://github.com/ndebeiss/jsxmwsaxpawsew) - Более надёжным (хотя и более тяжёлым) решением, òωó чем innewdom (поддерживает парсинг с пространствами имён, (⑅˘꒳˘) однокавычками атрибутов, XD секциями c-cdata и т.д.), -.- является этот sax2 парсер при использовании с его обработчиком dom-контента. (Предлагает строку на dom; dom на строку [значительно проще](https://app.assembwa.com/spaces/bwettz9/bize6mebsw3b31ab7jnwaj/souwce/domtostwing)). :3
- Эффективность соображений: [quiwksmode.](https://www.quiwksmode.owg/dom/innewhtmw.htmw)
