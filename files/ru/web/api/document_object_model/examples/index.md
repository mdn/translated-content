---
title: Examples of web and XML development using the DOM
slug: Web/API/Document_Object_Model/Examples
---

В этой главе представлены более длинные примеры разработки веб-сайтов и XML с использованием DOM. По возможности, примеры используют общие API, трюки и шаблоны в JavaScript для управления объектом документа.

## Пример 1: высота и ширина

В следующем примере показано использование свойств высоты и ширины для изображений разных размеров:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>width/height example</title>
    <script>
      function init() {
        var arrImages = new Array(3);

        arrImages[0] = document.getElementById("image1");
        arrImages[1] = document.getElementById("image2");
        arrImages[2] = document.getElementById("image3");

        var objOutput = document.getElementById("output");
        var strHtml = "<ul>";

        for (var i = 0; i < arrImages.length; i++) {
          strHtml +=
            "<li>image" +
            (i + 1) +
            ": height=" +
            arrImages[i].height +
            ", width=" +
            arrImages[i].width +
            ", style.height=" +
            arrImages[i].style.height +
            ", style.width=" +
            arrImages[i].style.width +
            "<\/li>";
        }

        strHtml += "<\/ul>";

        objOutput.innerHTML = strHtml;
      }
    </script>
  </head>
  <body onload="init();">
    <p>
      Image 1: no height, width, or style
      <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif" />
    </p>

    <p>
      Image 2: height="50", width="500", but no style
      <img
        id="image2"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        height="50"
        width="500" />
    </p>

    <p>
      Image 3: no height, width, but style="height: 50px; width: 500px;"
      <img
        id="image3"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        style="height: 50px; width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</html>
```

## Пример 2: Атрибуты Изображения

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Modifying an image border</title>

    <script>
      function setBorderWidth(width) {
        document.getElementById("img1").style.borderWidth = width + "px";
      }
    </script>
  </head>

  <body>
    <p>
      <img
        id="img1"
        src="image1.gif"
        style="border: 5px solid green;"
        width="100"
        height="100"
        alt="border test" />
    </p>

    <form name="FormName">
      <input
        type="button"
        value="Make border 20px-wide"
        onclick="setBorderWidth(20);" />
      <input
        type="button"
        value="Make border 5px-wide"
        onclick="setBorderWidth(5);" />
    </form>
  </body>
</html>
```

## Пример 3: Управление Стилями

В этом простом примере, некоторые базовые свойства стиля элемента абзаца HTML доступны с помощью объекта стиля элемента и свойств стиля CSS этого объекта, который можно получить и установить из DOM. В этом случае вы напрямую управляете отдельными стилями. В следующем примере (см. Пример 4), вы можете использовать таблицы стилей и их правила для изменения стилей для целых документов.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Changing color and font-size example</title>

    <script>
      function changeText() {
        var p = document.getElementById("pid");

        p.style.color = "blue";
        p.style.fontSize = "18pt";
      }
    </script>
  </head>
  <body>
    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">
      linker
    </p>

    <form>
      <p><input value="rec" type="button" onclick="changeText();" /></p>
    </form>
  </body>
</html>
```

## Пример 4: Использование Стилей

Свойство styleSheets объекта документа возвращает список таблиц стилей, которые были загружены в этот документ. Вы можете получить доступ к этим таблицам стилей и их правилам индивидуально, используя объекты таблицы стилей, стилей и CSS-правил объекта, как показано в этом примере, который выводит все селектора правил стиля в консоль.

```js
var ss = document.styleSheets;

for (var i = 0; i < ss.length; i++) {
  for (var j = 0; j < ss[i].cssRules.length; j++) {
    dump(ss[i].cssRules[j].selectorText + "\n");
  }
}
```

Для документа с единой таблицей стилей, в которой определены следующие три правила:

```css
body {
  background-color: darkblue;
}
p {
  font-face: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

Этот скрипт выводит следующее:

```
BODY
P
#LUMPY
```

## Пример 5: Распространение Событий

Этот пример демонстрирует, как события срабатывают и обрабатываются в DOM очень простым путём. Когда загружается BODY в составе HTML-документа, обработчик событий регистрируется в верхней строке таблицы TABLE. Обработчик событий реагирует на событие запуском функции stopEvent, изменяющей значение в нижней ячейке.

Однако, stopEvent также вызывает метод объекта событий, {{domxref("event.stopPropagation")}}, что препятствует дальнейшему всплытию события в DOM. Обратите внимание, что сама таблица имеет {{domxref("element.onclick","onclick")}} обработчик событий, который должен отображать сообщение при нажатии на таблицу. Но метод stopEvent метод прекратил распространение, и поэтому после обновления данных в таблице фаза события эффективно завершается, и отображается окно предупреждения для подтверждения.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Event Propagation</title>

    <style>
      #t-daddy {
        border: 1px solid red;
      }
      #c1 {
        background-color: pink;
      }
    </style>

    <script>
      function stopEvent(ev) {
        c2 = document.getElementById("c2");
        c2.innerHTML = "hello";

        // this ought to keep t-daddy from getting the click.
        ev.stopPropagation();
        alert("event propagation halted.");
      }

      function load() {
        elem = document.getElementById("tbl1");
        elem.addEventListener("click", stopEvent, false);
      }
    </script>
  </head>

  <body onload="load();">
    <table id="t-daddy" onclick="alert('hi');">
      <tr id="tbl1">
        <td id="c1">one</td>
      </tr>
      <tr>
        <td id="c2">two</td>
      </tr>
    </table>
  </body>
</html>
```

## Пример 6: getComputedStyle

Этот пример показывает как {{domxref("window.getComputedStyle")}} метод может использоваться для получения стилей элемента, которые не заданы с помощью атрибута style или с помощью JavaScript (e.g., `elt.style.backgroundColor="rgb(173, 216, 230)"`). Эти последние типы стилей можно получить с помощью более прямых {{domxref("element.style", "elt.style")}} свойств, которые указаны в [DOM CSS Properties List](/ru/docs/Web/CSS/Reference).

getComputedStyle () возвращает объект ComputedCSSStyleDeclaration, свойства индивидуального стиля которого могут ссылаться на метод getPropertyValue () этого объекта, как показано в следующем примере документа.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>getComputedStyle example</title>

    <script>
      function cStyles() {
        var RefDiv = document.getElementById("d1");
        var txtHeight = document.getElementById("t1");
        var h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");

        txtHeight.value = h_style;

        var txtWidth = document.getElementById("t2");
        var w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");

        txtWidth.value = w_style;

        var txtBackgroundColor = document.getElementById("t3");
        var b_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("background-color");

        txtBackgroundColor.value = b_style;
      }
    </script>

    <style>
      #d1 {
        margin-left: 10px;
        background-color: rgb(173, 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </style>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <form action="">
      <p>
        <button type="button" onclick="cStyles();">getComputedStyle</button>
        height<input id="t1" type="text" value="1" /> max-width<input
          id="t2"
          type="text"
          value="2" />
        bg-color<input id="t3" type="text" value="3" />
      </p>
    </form>
  </body>
</html>
```

## Пример 7: Отображение Свойств Событий Объекта

В этом примере используются методы DOM для отображения всех свойств объекта {{domxref ("window.onload")}} {{domxref ("event")}} и их значений в таблице. Он также показывает полезный метод использования цикла for..in для итерации по свойствам объекта для получения их значений.

Свойства объектов событий сильно различаются между браузерами, WHATWG DOM Standard перечисляет стандартные свойства, однако многие браузеры значительно расширили их.

Поместите следующий код в пустой текстовый файл и загрузите его в различные браузеры, вы будете удивлены различным количеством и именами свойств. Вы также можете добавить некоторые элементы на страницу и вызвать эту функцию из разных обработчиков событий.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Show Event properties</title>

    <style>
      table {
        border-collapse: collapse;
      }
      thead {
        font-weight: bold;
      }
      td {
        padding: 2px 10px 2px 10px;
      }

      .odd {
        background-color: #efdfef;
      }
      .even {
        background-color: #ffffff;
      }
    </style>

    <script>
      function showEventProperties(e) {
        function addCell(row, text) {
          var cell = row.insertCell(-1);
          cell.appendChild(document.createTextNode(text));
        }

        var e = e || window.event;
        document.getElementById("eventType").innerHTML = e.type;

        var table = document.createElement("table");
        var thead = table.createTHead();
        var row = thead.insertRow(-1);
        var lableList = ["#", "Property", "Value"];
        var len = lableList.length;

        for (var i = 0; i < len; i++) {
          addCell(row, lableList[i]);
        }

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (var p in e) {
          row = tbody.insertRow(-1);
          row.className = row.rowIndex % 2 ? "odd" : "even";
          addCell(row, row.rowIndex);
          addCell(row, p);
          addCell(row, e[p]);
        }

        document.body.appendChild(table);
      }

      window.onload = function (event) {
        showEventProperties(event);
      };
    </script>
  </head>

  <body>
    <h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
  </body>
</html>
```

## Пример 8: Использование интерфейса таблицы DOM

Интерфейс DOM HTMLTableElement предоставляет некоторые удобные методы для создания и управления таблицами. Два часто используемых метода: {{domxref ("HTMLTableElement.insertRow")}} и {{domxref ("tableRow.insertCell")}}.

Чтобы добавить строку и некоторые ячейки в существующую таблицу:

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>

<script>
  var table = document.getElementById("table0");
  var row = table.insertRow(-1);
  var cell, text;

  for (var i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Row " + row.rowIndex + " Cell " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

### Примечания

- Свойство таблицы {{domxref ("element.innerHTML", "innerHTML")}} никогда не должно использоваться для изменения таблицы, хотя вы можете использовать её для записи всей таблицы или содержимого ячейки.
- Если для создания строк и ячеек используются методы DOM Core {{domxref ("document.createElement")}} и {{domxref ("Node.appendChild")}}, IE требует, чтобы они были добавлены к элементу tbody, тогда как другие браузеры позволят добавлять к элементу таблицы (строки будут добавлены к последнему элементу tbody).
- Существует ряд других методов, относящихся к интерфейсу таблицы, которые могут использоваться для создания и изменения таблиц.

## Subnav

- [DOM Reference](/ru/docs/Web/API/Document_Object_Model)
- [Introduction to the DOM](/ru/docs/Web/API/Document_Object_Model/Introduction)
- [Events and the DOM](/ru/docs/Web/API/Document_Object_Model/Events)
- [Examples](/ru/docs/Web/API/Document_Object_Model/Examples)
