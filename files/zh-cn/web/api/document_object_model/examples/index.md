---
title: Examples
slug: Web/API/Document_Object_Model/Examples
---

本章介绍提供了一些长例子来介绍如何使用 DOM 进行 Web 以及 XML 开发。在可能的情况下，例子只使用普通 API，技巧以及 JavaScript 模式来操作文档对象。

## 示例 1: 高度和宽度

下面的例子展示了在不同尺寸的图片时使用其 height 和 width 属性的情况：

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>width/height example</title>
<script type="text/javascript">
function init()
{
  var arrImages = new Array(3);

  arrImages[0] = document.getElementById("image1");
  arrImages[1] = document.getElementById("image2");
  arrImages[2] = document.getElementById("image3");

  var objOutput = document.getElementById("output");
  var strHtml = "<ul>";

  for (var i = 0; i < arrImages.length; i++) {
    strHtml += "<li>image" + (i+1) +
            ": height=" + arrImages[i].height +
            ", width=" + arrImages[i].width +
            ", style.height=" + arrImages[i].style.height +
            ", style.width=" + arrImages[i].style.width +
            "<\/li>";
  }

  strHtml += "<\/ul>";

  objOutput.innerHTML = strHtml;
}
</script>
</head>
<body onload="init();">

<p>Image 1: no height, width, or style
    <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif">
</p>

<p>Image 2: height="50", width="500", but no style
    <img id="image2" src="http://www.mozilla.org/images/mozilla-banner.gif"
         height="50" width="500">
</p>

<p>Image 3: no height, width, but style="height: 50px; width: 500px;"
    <img id="image3" src="http://www.mozilla.org/images/mozilla-banner.gif"
         style="height: 50px; width: 500px;">
</p>

<div id="output"> </div>
</body>
</html>
```

## 示例 2: 图片属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Modifying an image border</title>

<script type="text/javascript">
function setBorderWidth(width) {
  document.getElementById("img1").style.borderWidth = width + "px";
}
</script>
</head>

<body>
<p>
  <img id="img1"
       src="image1.gif"
       style="border: 5px solid green;"
       width="100" height="100" alt="border test">
</p>

<form name="FormName">
  <input type="button" value="Make border 20px-wide" onclick="setBorderWidth(20);" />
  <input type="button" value="Make border 5px-wide"  onclick="setBorderWidth(5);" />
</form>

</body>
</html>
```

## 示例 3: 操作样式

在下面这个简单的例子中，使用的 element(DOM 元素) 的 style 对象即对象的 CSS 样式属性来获取一个 HTML 段落元素的一些基本样式属性，DOM 可以检索和设置 CSS 样式。在本例中，你可以直接控制单个样式属性。在下一个的例子里（见例 4），你可以使用 stylesheets 对象 (样式表) 及其 cssRules 对象改变整个文档的样式。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Changing color and font-size example</title>

<script type="text/javascript">
function changeText() {
  var p = document.getElementById("pid");

  p.style.color = "blue"
  p.style.fontSize = "18pt"
}
</script>
</head>
<body>

<p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">linker</p>

<form>
  <p><input value="rec" type="button" onclick="changeText();"></p>
</form>

</body>
</html>
```

## 示例 4: 使用样式表

styleSheets 是 document 对象的一个属性，返回的是载入文档的样式列表。你可以通过 styleSheets、style 和 CSSRule 对象来获取样式表和每条样式规则，下面的例子把所有的样式规则中的选择器文本（字符串）打印到控制台中。

```plain
ss = document.styleSheets;

for(i=0; i<ss.length; i++) {
  for(j=0; j<ss[i].cssRules.length; j++) {
    dump( ss[i].cssRules[j].selectorText + "\n" );
  }
}
```

下面的是一个只定义了三条样式规则的单个样式表的文档：

```plain
BODY { background-color: darkblue; }
P { font-face: Arial; font-size: 10pt; margin-left: .125in; }
#lumpy { display: none; }
```

该脚本的输出是这样的：

```plain
BODY
P
#LUMPY
```

## 示例 5: 冒泡事件

本例以一种简单的方法阐述了事件是如何触发以及在 DOM 中是如何处理的。当这个 HTML 文档 BODY 载入的时候，在 TABLE 的首行注册了一个事件监听器。事件监听器通过执行函数 stopEvent 处理事件，从而改变在该表的底部单元的值。

然而，stopEvent 同时也会调用一个事件对象的方法，[event.stopPropagation](/zh-CN/DOM/event.stopPropagation)，其阻止了当前事件在 DOM 的进一步冒泡行为。请注意，表本身有一个 {{domxref("element.onclick","onclick")}} 事件处理程序，当表被点击时其会显示一条消息。但 stopEvent 方法已经阻止了冒泡，所以在表中的数据更新后，该事件事件阶段有效地结束（effectively ended），并且显示一个警告框——证实了有效结束。

```html
<!DOCTYPE html>
<html>
<head>
<title>Event Propagation</title>

<style type="text/css">
 #t-daddy { border: 1px solid red }
 #c1 { background-color: pink; }
</style>

<script type="text/javascript">

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

## 示例 6: getComputedStyle

这个例子演示了如何用{{domxref("window.getComputedStyle")}}方法来获取一个元素的样式而不是使用 style 属性或 JavaScript 的（例如，elt.style.backgroundColor="RGB(173，216，230)"）。列举在 [DOM CSS Properties List](/zh-CN/docs/Web/CSS/Reference) 后面的类型的样式可以用更直接{{domxref("element.style", "elt.style")}} 属性获取。

`getComputedStyle()` 返回了一个 `ComputedCSSStyleDeclaration` 对象，其独立的样式属性可以用该对象的 getPropertyValue() 方法引用，如同下面的例子一样：

```html
<!DOCTYPE html>
<html lang="en">
<head>

<title>getComputedStyle example</title>

<script>
function cStyles() {
  var RefDiv    = document.getElementById("d1");
  var txtHeight = document.getElementById("t1");
  var h_style   = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("height");

  txtHeight.value = h_style;

  var txtWidth = document.getElementById("t2");
  var w_style  = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("width");

  txtWidth.value = w_style;

  var txtBackgroundColor = document.getElementById("t3");
  var b_style = document.defaultView.getComputedStyle(RefDiv,null).getPropertyValue("background-color");

  txtBackgroundColor.value = b_style;
}
</script>

<style>
#d1 {
  margin-left: 10px;
  background-color: rgb(173, 216, 230);
  height: 20px;
  max-width: 20px; }
</style>

</head>

<body>

<div id="d1">&nbsp;</div>

<form action="">
  <p>
    <button type="button" onclick="cStyles();">getComputedStyle</button>
    height<input id="t1" type="text" value="1">
    max-width<input id="t2" type="text" value="2">
    bg-color<input id="t3" type="text" value="3"></p>
</form>

</body>
</html>
```

## 示例 7: 显示事件对象的属性

这个例子使用 DOM 方法来显示{{domxref("window.onload")}} {{domxref("event")}}对象的属性及其在 table 中的值。这个方法也展示一个有用的技术即使用了{{jsxref("Statements/for...in", "for...in")}} 循环来遍历一个对象的属性，以得到他们的值。

不同浏览器之间事件对象的属性有很大不同，[W3C DOM2 事件规范](http://www.w3.org/TR/DOM-Level-2-Events/events.html)规定了事件的标准属性，然而，许多浏览器都大大扩展了这些。

将下面的代码放到一个空白的文本文件，并将其加载到各种浏览器，你一定会对各种浏览器之间的不一致（事件属性的名称及其数量）感到惊讶。你可能还喜欢在这个页面加入一些元素，并调用不同的事件处理函数。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf8"/>
<title>Show Event properties</title>

<style>
table {border-collapse: collapse;}
thead {font-weight: bold;}
td {padding: 2px 10px 2px 10px;}

.odd {background-color: #efdfef;}
.even {background-color: #ffffff;}
</style>

<script>

function showEventProperties(e) {
  function addCell(row, text) {
    var cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  var e = e || window.event;
  document.getElementById('eventType').innerHTML = e.type;

  var table = document.createElement('table');
  var thead = table.createTHead();
  var row = thead.insertRow(-1);
  var lableList = ['#', 'Property', 'Value'];
  var len = lableList.length;

  for (var i=0; i<len; i++) {
    addCell(row, lableList[i]);
  }

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for (var p in e) {
    row = tbody.insertRow(-1);
    row.className = (row.rowIndex % 2)? 'odd':'even';
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, e[p]);
  }

  document.body.appendChild(table);
}
window.onload = function(event){
  showEventProperties(event);
}
</script>
</head>

<body>
<h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
</body>

</html>
```

## 示例 8: 使用 DOM Table 接口 (Interface)

DOM HTMLTableElement 接口提供了一些方便的方法用于创建和操作表。两种常用的方法是{{domxref("HTMLTableElement.insertRow")}}和{{domxref("tableRow.insertCell")}}。

增加一行和一些单元到现有的表：

```plain
<table id="table0">
 <tr>
  <td>Row 0 Cell 0</td>
  <td>Row 0 Cell 1</td>
 </tr>
</table>

<script>

var table = document.getElementById('table0');
var row = table.insertRow(-1);
var cell,
    text;

for (var i=0; i<2; i++) {
  cell = row.insertCell(-1);
  text = 'Row ' + row.rowIndex + ' Cell ' + i;
  cell.appendChild(document.createTextNode(text));
}
</script>
```

### 注意

- 表的{{domxref("element.innerHTML","innerHTML")}}属性不应该被用来修改表，虽然你可以用它来写一个完整的表格或单元格的内容。
- 如果用 DOM 核心方法{{domxref("document.createElement")}}和{{domxref("Node.appendChild")}}创建表的行和单元，IE 会要求它们附加到一个 tbody 元素，而其它浏览器允许它们附加到一个 table 元素（行会被添加到最后的 tbody 元素）。
- [表接口](/zh-CN/docs/Web/API/HTMLTableElement#Methods)还有一些可用于创建和修改的表的便利方法。

## Subnav

- [DOM Reference](/zh-CN/docs/Web/API/Document_Object_Model)
- [Introduction to the DOM](/zh-CN/docs/Web/API/Document_Object_Model/Introduction)
- [Events and the DOM](/zh-CN/docs/Web/API/Document_Object_Model/Events)
- [Examples](/zh-CN/docs/Web/API/Document_Object_Model/Examples)
