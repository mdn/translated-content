---
title: 使用 web 和 XML 開發來使用 DOM
slug: Web/API/Document_Object_Model/Examples
---

本章介紹了使用 DOM 進行 Web 以及 XML 開發的一些長範例。只要可能，在例子就會使用通用的 JavaScript Web API 、技巧以及模式來操作文檔對象（the document object）。

## 範例一：高度和寬度

下面的例子展示了在不同尺寸的圖片時使用其高（height）和寬（width）屬性的情況：

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

## 範例二：圖片屬性

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

## 範例三：改變樣式（style）

在下面這個簡單的例子中，透過取得的 DOM 元素中的 style 物件和 style 物件中的屬性，我們可以取得 HTML 段落中的一些基本樣式屬性。在本例中，你可以直接操控各別的樣式屬性。在下一個的例子裡（見例 4），你可以使用 stylesheets 和它的規則來改變整個文檔的樣式。

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

## 範例四：使用樣式表（stylesheets）

在文檔物件的 styleSheets 屬性會回傳一系列載入文檔中的樣式表（stylesheets）。你可以透過 styleSheets、style 和 CSSRule 物件來獲取樣式表和每條樣式規則。在下面的例子中，把所有的樣式規則中的選擇器文本（字符串）打印到控制台中。

```js
var ss = document.styleSheets;

for (var i = 0; i < ss.length; i++) {
  for (var j = 0; j < ss[i].cssRules.length; j++) {
    dump(ss[i].cssRules[j].selectorText + "\n");
  }
}
```

下面是一個只定義了三條樣式規則的單一樣式表的文檔：

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

該腳本會輸出如下的結果：

```plain
BODY
P
#LUMPY
```

## 範例五：事件傳遞

本例以一種簡單的方法闡述了事件是如何觸發以及在 DOM 中是如何處理的。當這個 HTML 文檔 BODY 載入的時候，在表格的首行註冊了一個事件監聽器。事件監聽器透過執行函數 stopEvent 來處理事件，從而改變在該表格底部的值。

然而，stopEvent 同時也會另外執行一個事件物件的方法{{domxref("event.stopPropagation")}}，這會使得該事件（點擊）無法在 DOM 中有進一步的冒泡行為。請注意，表格本身有一個 {{domxref("element.onclick","onclick")}} 事件，使得這個表格被點擊時的時候原本應該要會跳出一個訊息。但因為 stopEvent 方法已經阻止了冒泡，所以在表格中的數據更新後，該事件階段有效地結束，表格的點擊事件沒有被觸發，而是顯示一個警告框（event propagation halted）——證實了事件被有效結束而沒有進一步冒泡。

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

## Example 6: getComputedStyle

這個例子演示了如何用 {{domxref("window.getComputedStyle")}} 方法來獲取一個尚未被透過樣式元素或 JavaScript 設定的元素樣式（例如，elt.style.backgroundColor="RGB(173，216，230)"）。列舉在 {{domxref("element.style", "elt.style")}} 後面的類型的樣式可以用更直接{{domxref("element.style", "elt.style")}} 屬性獲取。

`getComputedStyle() 返回了一個 ComputedCSSStyleDeclaration 物件，其獨立的樣式屬性可以用該物件的 getPropertyValue() 方法引用，如同下面的例子一樣：`

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

## 範例七：顯示事件物件的屬性

這個例子使用 DOM 方法來顯示所有 {{domxref("window.onload")}} {{domxref("event")}} 物件的屬性及其在 table 中的值。這個方法也展示一個有用的技術，使用 for...in 迴圈來來遍歷一個物件的屬性，以得到它們的值。

不同瀏覽器之間事件物件的屬性有很大不同，[WHATWG DOM Standard](https://dom.spec.whatwg.org) 規範了事件的標準屬性，然而，許多瀏覽器都大大擴展了這些。

將下面的代碼放到一個空白的文本文件，並將其用各種瀏覽器開啟，你一定會對各種瀏覽器之間的不一致（事件屬性的名稱及其數量）感到驚訝。你可能還喜歡在這個頁面加入一些元素，並呼叫不同的事件處理函數（event handlers）。

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

## 範例八：使用 DOM Table 介面

DOM HTMLTableElement 介面提供了一些方便的方法用於創建和操作資料表。兩種常用的方法是{{domxref("HTMLTableElement.insertRow")}}和{{domxref("tableRow.insertCell")}}.。

增加一行和一些細格到現有的資料表：

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

### 提醒

- 表格的{{domxref("element.innerHTML","innerHTML")}}屬性絕不應該被用來修改表，雖然你可以用它來寫一個完整的表格或細格中的內容。
- 如果用 DOM 核心方法 {{domxref("document.createElement")}} 和 {{domxref("Node.appendChild")}} 來建立表格的行和細格，IE 會要求它們附加到一個 tbody 元素，而其它瀏覽器允許它們附加到一個 table 元素（行會被添加到最後的 tbody 元素）。
- [表格介面](/zh-TW/docs/Web/API/HTMLTableElement#Methods)還有一些可用於創建和修改的表格的便利方法。

## Subnav

- [DOM Reference](/zh-TW/docs/Web/API/Document_Object_Model)
- [Introduction to the DOM](/zh-TW/docs/Web/API/Document_Object_Model/Introduction)
- [Events and the DOM](/zh-TW/docs/Web/API/Document_Object_Model/Events)
- [Examples](/zh-TW/docs/Web/API/Document_Object_Model/Examples)
