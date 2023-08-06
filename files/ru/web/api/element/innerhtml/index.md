---
title: Element.innerHTML
slug: Web/API/Element/innerHTML
---

{{APIRef("DOM")}}

Свойство интерфейса {{domxref("Element")}} **`innerHTML`** устанавливает или получает HTML или XML разметку дочерних элементов.

> **Примечание:** Если узлы {{HTMLElement("div")}}, {{HTMLElement("span")}}, или {{HTMLElement("noembed")}} имеют дочерние текстовые узлы, содержащие символы `(&), (<),` или `(>)`, `innerHTML` вернёт эти символы как \&amp, \&lt и \&gt соответственно. Используйте {{domxref("Node.textContent")}} для получения правильной копии содержимого этих текстовых узлов.

Чтобы вставить HTML в документ, не меняя содержимое элемента, используйте {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}}.

## Синтаксис

```js
const content = element.innerHTML;

element.innerHTML = htmlString;
```

### Значение

Строка {{domxref("DOMString")}}, которая содержит части HTML разметки. Установка значения `innerHTML` удаляет всё содержимое элемента и заменяет его на узлы, которые были разобраны как HTML, указанными в строке _htmlString._

### Исключения

- `SyntaxError`
  - : Возникает при попытке установить значение `innerHTML` строкой, в которой содержится неправильно сформированный HTML.
- `NoModificationAllowedError`
  - : Возникает при попытке вставить HTML в узел, у которого родителем является {{domxref("Document")}}.

## Примечания

Это свойство предоставляет простой способ полностью заменить содержимое элемента. Например, все содержимое элемента body может быть удалено:

```js
document.body.innerHTML = ""; // Заменяет содержимое тела пустой строкой.
```

Свойство innerHTML многих типов элементов, включая {{HTMLElement("body")}} или {{HTMLElement("html")}}, могут быть возвращены или перемещены. Это может так же быть использовано для просмотра кода страницы, которая была изменена динамически:

```js
// Скопируйте и вставьте в адресную строку в виде одной строки.
javascript: "<pre>" +
  document.documentElement.innerHTML.replace(/</g, "&lt;") +
  "</pre>";
```

Это свойство было первоначально реализовано веб браузерами, затем описано WHATWG и W3C в HTML5. Старые реализации могут отличаться от новых. Для примера, когда введён текст в поле ввода \<input>, IE меняет значение атрибута \<input> свойства innerHTML, но браузеры Gecko не делают этого.

### Соображения безопасности

Не редко можно увидеть использование InnerHTML для вставки текста в веб страницу. Это приводит к рискам безопасности.

```js
const name = "John";
// предполагая, что 'el' является HTML DOM-элементом.
el.innerHTML = name; // безвредный в этом случае

// ...

name = "<script>alert('Я Джон в раздражающем alert!')</script>";
el.innerHTML = name; // безвредный в этом случае
```

Хотя это может выглядеть как [XSS-атака](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BD%D0%B3), результат безопасный. HTML5 указывает на тег {{HTMLElement("script")}} вставленный через InnerHTM [должен не выполнится.](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0)

Однако, есть способы запустить JavaScript без использования элементов {{HTMLElement("script")}}, так что есть риск безопасности всякий раз, когда вы используете innerHTML для набора строк, над которыми у вас нет контроля. Например:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // показывает alert
```

По этой причине, рекомендуется не использовать innerHTML при вставке обычного текста; вместо этого, используйте {{domxref("node.textContent")}}. Это не интерпретирует отправленный контент как HTML, но вместо этого он вставляется как не обработанный текст.

## Пример

Этот пример использует `innerHTML` для создания механизма логирования сообщений внутри элемента на странице.

### JavaScript

```js
function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}

log("Регистрация событий мыши внутри этого контейнера...");
```

Функция `log()` создаёт сообщение получая текущее время из объекта {{jsxref("Date")}}, используя {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}}, и соединяя строку с временной меткой с текстовым сообщением. Затем сообщение добавляется в элемент с классом `"log"`.

Мы добавляем второй метод, который логирует информацию о событиях на основе {{domxref("MouseEvent")}} (например, {{event("mousedown")}}, {{event("click")}}, и {{event("mouseenter")}}):

```js
function logEvent(event) {
  var msg =
    "Event <strong>" +
    event.type +
    "</strong> at <em>" +
    event.clientX +
    ", " +
    event.clientY +
    "</em>";
  log(msg);
}
```

Затем мы используем этот обработчик событий на элементе, который содержит наше логирование, для каждого события мыши:

```js
var boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

HTML довольно простой для нашего примера.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

{{HTMLElement("div")}} c классом `"box"` – просто контейнер для, который даст содержимому пространство вокруг себя. `<div>` с классом `"log"` является контейнером для логирования текста внутри себя.

### CSS

Для нашего примера используем следующие CSS стили.

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

### Результат

В результате мы получаем такое содержимое. Вы можете видеть логи наводя мышь на элемент, кликая на него и так далее.

{{EmbedLiveSample("Пример", 640, 350)}}

## Спецификации

{{Specifications}}

## Смотрите также

- [`innerDOM`](http://innerdom.sourceforge.net/) - Для тех, кто хочет придерживаться стандартов, вот один набор функций JavaScript, предлагающий сериализовать или разобрать XML так, чтобы установить содержимое элемента, определённое как строка(и) через DOM или получить содержимое элемента, полученное из DOM как строку.
- {{domxref("Element.insertAdjacentHTML")}} - Альтернатива для innerHTML, позволяющая добавлять новый HTML.
- [jssaxparser](https://github.com/ndebeiss/jsxmlsaxparser) - Более надёжным (хотя и более тяжёлым) решением, чем innerDOM (поддерживает парсинг с пространствами имён, однокавычками атрибутов, секциями CDATA и т.д.), является этот SAX2 парсер при использовании с его обработчиком DOM-контента. (Предлагает строку на DOM; DOM на строку [значительно проще](https://app.assembla.com/spaces/brettz9/bize6mebSr3B31ab7jnrAJ/source/DOMToString)).
- Эффективность соображений: [quirksmode.](http://www.quirksmode.org/dom/innerhtml.html)
