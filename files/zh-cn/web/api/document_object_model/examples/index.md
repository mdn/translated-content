---
title: 使用 DOM 进行 web 和 XML 开发的示例
slug: Web/API/Document_Object_Model/Examples
---

{{DefaultAPISidebar("DOM")}}

本章提供了一些介绍如何使用 DOM 进行 Web 以及 XML 开发的较长示例。在可能的情况下，示例只使用 JavaScript 中较常见的 API、技巧以及模式来操作文档对象。

## 示例 1：高度和宽度

下面的示例展示了不同尺寸的图片对 `height` 和 `width` 属性的使用：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>宽度/高度示例</title>
    <script>
      function init() {
        const arrImages = new Array(3);

        arrImages[0] = document.getElementById("image1");
        arrImages[1] = document.getElementById("image2");
        arrImages[2] = document.getElementById("image3");

        const objOutput = document.getElementById("output");
        let strHtml = "<ul>";

        for (let i = 0; i < arrImages.length; i++) {
          strHtml +=
            "<li>图片" +
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
      图片 1：无高度、宽度及样式
      <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif" />
    </p>

    <p>
      图片 2：height="50"，width="500"，无样式
      <img
        id="image2"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        height="50"
        width="500" />
    </p>

    <p>
      图片 3：无高度、宽度，样式中设置了“height: 50px; width: 500px;”
      <img
        id="image3"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        style="height: 50px; width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</html>
```

## 示例 2：图片属性

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>修改图片的边框</title>

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
        value="设置边框为 20px 宽"
        onclick="setBorderWidth(20);" />
      <input
        type="button"
        value="设置边框为 5px 宽"
        onclick="setBorderWidth(5);" />
    </form>
  </body>
</html>
```

## 示例 3：修改样式

在这个简单的例子中，HTML 段落元素的一些基本样式属性是使用该元素上的样式对象和该对象的 CSS 样式属性来访问的，这些对象可以从 DOM 中检索和设置。在这个示例中，你是直接操作各个样式的。在下一个例子中（见示例 4），你可以使用样式表及其规则来改变整个文档的样式。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>改变颜色和字体大小的示例</title>

    <script>
      function changeText() {
        const p = document.getElementById("pid");

        p.style.color = "blue";
        p.style.fontSize = "18pt";
      }
    </script>
  </head>
  <body>
    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">
      链接文字
    </p>

    <form>
      <p><input value="rec" type="button" onclick="changeText();" /></p>
    </form>
  </body>
</html>
```

## 示例 4：使用样式表

{{domxref("document")}} 对象的 {{domxref("document.styleSheets", "styleSheets")}} 属性返回该文档中已加载的样式表列表。你可以使用 styleheet、style 和 {{domxref("CSSRule")}} 对象单独访问这些样式表及其规则，如本例所示，它将所有的样式规则选择器打印到控制台。

```js
const ss = document.styleSheets;

for (let i = 0; i < ss.length; i++) {
  for (let j = 0; j < ss[i].cssRules.length; j++) {
    dump(`${ss[i].cssRules[j].selectorText}\n`);
  }
}
```

下面的是一个只定义了三条样式规则的单个样式表的文档：

```css
body {
  background-color: darkblue;
}
p {
  font-family: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

该脚本的输出是这样的：

```
BODY
P
#LUMPY
```

## 示例 5：事件传播

本实例以一种非常简单的方式演示了事件是如何在 DOM 中启动和处理的。当这个 HTML 文档的 BODY 加载时，一个事件监听器被注册在 TABLE 的顶行。事件监听器通过执行函数 stopEvent 来处理事件，它改变了表格底部单元格的值。

然而，stopEvent 也调用了事件对象方法 {{domxref("event.stopPropagation")}}，它使事件不再向 DOM 中冒泡。请注意，表格本身有一个 {{domxref("Element.click_event", "onclick")}} 事件处理器，当表格被点击时应该显示一条信息。但是 stopEvent 方法已经停止了传播，所以在表格中的数据被更新后，事件阶段实际上已经结束，并且显示了一个警报框来确认这一点。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>事件传播</title>

    <style>
      #t-daddy {
        border: 1px solid red;
      }
      #c1 {
        background-color: pink;
      }
    </style>

    <script>
      function stopEvent(event) {
        const c2 = document.getElementById("c2");
        c2.textContent = "hello";

        // 这应该阻止 t-daddy 接收点击事件
        event.stopPropagation();
        alert("事件传递终止");
      }

      function load() {
        const elem = document.getElementById("tbl1");
        elem.addEventListener("click", stopEvent, false);
      }
    </script>
  </head>

  <body onload="load();">
    <table id="t-daddy" onclick="alert('hi');">
      <tr id="tbl1">
        <td id="c1">一</td>
      </tr>
      <tr>
        <td id="c2">二</td>
      </tr>
    </table>
  </body>
</html>
```

## 示例 6：getComputedStyle

这个例子演示了如何使用 {{domxref("window.getComputedStyle")}} 方法来获取一个元素的样式，这些样式不是用 `style` 属性或用 JavaScript 设置的（例如 `elt.style.backgroundColor="rgb(173, 216, 230)"`）。后面这些类型的样式可以用更直接的 {{domxref("HTMLElement.style", "elt.style")}} 属性来检索，其属性在 [DOM CSS 属性列表](/zh-CN/docs/Web/CSS/Reference)中列出。

`getComputedStyle()` 返回一个 {{domxref("CSSStyleDeclaration")}} 对象，其各个样式属性可以用这个对象的 {{domxref("CSSStyleDeclaration.getPropertyValue()", "getPropertyValue()")}} 方法进行引用，正如下面的示例文档所示。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>getComputedStyle 示例</title>

    <script>
      function cStyles() {
        const RefDiv = document.getElementById("d1");
        const txtHeight = document.getElementById("t1");
        const h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");

        txtHeight.value = h_style;

        const txtWidth = document.getElementById("t2");
        const w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");

        txtWidth.value = w_style;

        const txtBackgroundColor = document.getElementById("t3");
        const b_style = document.defaultView
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

## 示例 7：显示事件对象的属性

本示例使用 DOM 方法来显示 {{domxref("Window.load_event", "onload")}} {{domxref("event")}} 对象的所有属性及其在表格中的值。它还展示了一种有用的技术，即使用 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环来迭代对象的属性以获取其值。

事件对象的属性在不同的浏览器之间有很大的不同，[WHATWG DOM 标准](https://dom.spec.whatwg.org)列出了标准的属性，然而许多浏览器对这些属性做了很大的扩展。

把下面的代码放到一个空白的文本文件中，并把它加载到各种浏览器中，你会对不同数量和名称的属性感到惊讶。你可能还想在页面中添加一些元素，从不同的事件处理程序中调用这个函数。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>显示事件的属性</title>

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
          const cell = row.insertCell(-1);
          cell.appendChild(document.createTextNode(text));
        }

        const event = e || window.event;
        document.getElementById("eventType").innerHTML = event.type;

        const table = document.createElement("table");
        const thead = table.createTHead();
        let row = thead.insertRow(-1);
        const labelList = ["#", "Property", "Value"];
        const len = labelList.length;

        for (let i = 0; i < len; i++) {
          addCell(row, labelList[i]);
        }

        const tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (const p in event) {
          row = tbody.insertRow(-1);
          row.className = row.rowIndex % 2 ? "odd" : "even";
          addCell(row, row.rowIndex);
          addCell(row, p);
          addCell(row, event[p]);
        }

        document.body.appendChild(table);
      }

      window.onload = (event) => {
        showEventProperties(event);
      };
    </script>
  </head>

  <body>
    <h1>DOM <span id="eventType"></span> 事件对象的属性列表</h1>
  </body>
</html>
```

## 示例 8：使用 DOM Table 接口

DOM {{domxref("HTMLTableElement")}} 接口提供了一些用于创建和操作表格的便利方法。两个经常使用的方法是 {{domxref("HTMLTableElement.insertRow")}} 和 {{domxref("HTMLTableRowElement.insertCell")}}。

要增加一行和一些单元格到现有的表：

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>

<script>
  const table = document.getElementById("table0");
  const row = table.insertRow(-1);
  let cell;
  let text;

  for (let i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Row " + row.rowIndex + " Cell " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

### 备注

- 表格的 {{domxref("element.innerHTML","innerHTML")}} 属性不应该被用来修改表格，即使你可以用它来写一个完整的表格或单元格的内容。
- 如果使用 DOM 核心方法 {{domxref("document.createElement")}} 和 {{domxref("Node.appendChild")}} 来创建行和单元格，IE 要求它们被追加到 {{HTMLElement("tbody")}} 元素，而其他浏览器将允许追加到 {{HTMLElement("table")}} 元素（行将被添加到最后的 `<tbody>` 元素）。
- 还有一些属于 [`HTMLTableElement` 接口](/zh-CN/docs/Web/API/HTMLTableElement#方法)的便利方法，可以用来创建和修改表格。
