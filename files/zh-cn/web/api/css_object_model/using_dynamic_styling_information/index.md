---
title: 关于使用动态样式的信息
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
---

{{DefaultAPISidebar("CSSOM")}}

CSS 对象模型（CSSOM），是 DOM 的一部分，通过暴露一些接口，允许操作很多与 CSS 相关的信息。最初定义在 _DOM Level 2 Style_ 提议中，现在，这些接口形成了一个规范，_CSS 对象模型（CSSOM）_，旨在取代它。

在很多情况下，如果可能的话，通过 {{ domxref("element.className", "className") }} 属性来动态操作元素类名确实是最好的方式，因为所有的样式钩子的最终外观都可以在一个样式表中控制。这样写出的 JavaScript 代码也会变得更清晰，因为它不专注与样式相关的细节，而是专注于所创作或者操作的每一部分的整体语义，将精细的样式细节留给样式表。然而实际上也有以一些获取或者操作样式规则有用的情况（无论是对于正样式包还是的那个元素），将在下面进一步详细描述。同样应该注意，同操作单独元素的样式一样，当说到操作样式表的时候，并不是真的操作实际的物理文档，而仅仅是文档的内部表示。

基本样式对象公开了 {{domxref("Stylesheet")}} 和 {{domxref("CSSStylesheet")}} 接口。这些接口包括 `insertRule`、`selectorText` 以及 `parentStyleSheet` 等成员，用于获取和操作组成 CSS 样式表的各个规则。

要从 `document` 中获取 `style` 对象，可以使用 {{domxref("document.styleSheets")}} 属性，并使用索引来获取某个对象（例如， `document.styleSheets[0]` 是该文档中的第一个样式表）。

## 通过 CSSOM 修改样式表

```html
<html>
  <head>
    <title>Modifying a stylesheet rule with CSSOM</title>
    <style type="text/css">
      body {
        background-color: red;
      }
    </style>
    <script type="text/javascript">
      var stylesheet = document.styleSheets[1];
      stylesheet.cssRules[0].style.backgroundColor = "blue";
    </script>
  </head>
  <body>
    The stylesheet declaration for the body's background color is modified via
    JavaScript.
  </body>
</html>
```

{{ EmbedLiveSample('通过 CSSOM 修改样式表') }}

[DOM CSS Properties List](/zh-CN/docs/DOM/CSS) 中给出了 DOM 中 style 属性的可用属性列表。

若要使用 CSS 语法修改文档的样式，可以插入样式规则，或者插入{{HTMLElement("style")}} 标签，并将其 `innerHTML` 属性设置为期望的 CSS。

## 修改元素样式

元素的 {{domxref("HTMLElement.style", "style")}} 属性（见下面的 DOM 样式对象部分）也可以用于获取和设置元素的样式。然而，该属性只能返回通过内敛方式设置的样式属性（例如 `<td style="background-color: lightblue">` 返回 "`background-color:lightblue`"，或者直接针对哪个元素使用 `element.style.propertyName`, 即使样式表中还有该元素上的其他样式）。

此外，当你在元素上设置某个属性的时候，你会覆盖并擦除掉别处为该元素的这个属性设置的值。以设置 border 属性为例，将覆盖掉在 \<head> 部分或者外部样式表设置的该元素的 border 属性。然而这并不会影响元素的其他属性，例如 padding、margin 或 font 等。

要修改特定元素的样式，可以将以下示例修改为你想要的样式。

```html
<html>
  <head>
    <title>simple style example</title>

    <script type="text/javascript">
      function alterStyle(elem) {
        elem.style.background = "green";
      }

      function resetStyle(elemId) {
        elem = document.getElementById(elemId);
        elem.style.background = "white";
      }
    </script>

    <style type="text/css">
      #p1 {
        border: solid blue 2px;
      }
    </style>
  </head>

  <body>
    <!-- passes a reference to the element's object as parameter 'this'. -->
    <p id="p1" onclick="alterStyle(this);">
      Click here to change background color.
    </p>

    <!-- passes the 'p1' id of another element's style to modify. -->
    <button onclick="resetStyle('p1');">Reset background color</button>
  </body>
</html>
```

{{ EmbedLiveSample('修改元素样式') }}

`document.defaultView` 对象的 {{domxref("window.getComputedStyle", "getComputedStyle()")}} 返回某个元素的所有经过计算的样式。查看[Example 6: getComputedStyle](/zh-CN/Gecko_DOM_Reference/Examples#Example_6:_getComputedStyle) 示例章节了解更多使用该方法的信息。.

## DOM 样式对象

`style` 对象表示了一个单独的样式声明。不像[`document.styleSheets`](/zh-CN/DOM/document.styleSheets) 集合中每个单独的样式规则，样式规则是通过 `document` 对象或者应用改样式的元素来访问的。它表示特定元素的内联样式。

比这两个属性更重要的是使用 `style` 对象来给某个元素设置单独的样式属性。

```html
<!doctype html>
<html>
  <head>
    <title>style Property Example</title>
    <link rel="StyleSheet" href="example.css" type="text/css" />
    <script type="text/javascript">
      function stilo() {
        document.getElementById("d").style.color = "orange";
      }
      function resetStyle() {
        document.getElementById("d").style.color = "black";
      }
    </script>
  </head>

  <body>
    <div id="d" class="thunder">Thunder</div>
    <button onclick="stilo()">Click here to change text color</button>
    <button onclick="resetStyle()">Reset text color</button>
  </body>
</html>
```

{{ EmbedLiveSample('DOM 样式对象') }}

style 的 media 和 type 给不给出都可以。

### 使用 `setAttribute` 方法

注意，你也可以通过获得元素的引用，然后使用它的 [`setAttribute`](/zh-CN/DOM/element.setAttribute) 方法，指定 CSS 属性和值，来改变该元素的样式。

```js
var el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

但请注意，`setAttribute` 会移除该元素样式对象中已经定义的其他样式属性。如果上面的 `some-element` 有一个行内样式属性：`style="font-size: 18px"`，其值将会因为使用了 `setAttribute` 方法而被移除。
