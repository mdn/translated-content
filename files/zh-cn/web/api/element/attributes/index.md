---
title: Element.attributes
slug: Web/API/Element/attributes
---

{{ APIRef("DOM") }}

**`Element.attributes`** 属性返回该元素所有属性节点的一个实时集合。该集合是一个 {{domxref("NamedNodeMap")}} 对象，不是一个数组，所以它没有 {{jsxref("Array", "数组")}} 的方法，其包含的 {{domxref("Attr", "属性")}} 节点的索引顺序随浏览器不同而不同。更确切地说，`attributes` 是字符串形式的名/值对，每一对名/值对对应一个属性节点。

## 语法

```
var attr = element.attributes;
```

## 示例

### 基本示例

```js
// 获取文档中的第一个 <p> 元素
var para = document.getElementsByTagName("p")[0];
var atts = para.attributes;
```

### 遍历元素的属性

索引有利于遍历一个元素的所有属性。

在以下例子中会遍历文档中 id 为 "paragraph" 的元素的属性节点，并打印出来。

```html
<!DOCTYPE html>

<html>

 <head>
  <title>Attributes example</title>
  <script type="text/javascript">
   function listAttributes() {
     var paragraph= document.getElementById("paragraph");
     var result= document.getElementById("result");

     // First, let's verify that the paragraph has some attributes
     if (paragraph.hasAttributes()) {
       var attrs = paragraph.attributes;
       var output= "";
       for(var i=attrs.length-1; i>=0; i--) {
         output+= attrs[i].name + "->" + attrs[i].value;
       }
       result.value = output;
     } else {
       result.value = "没有属性可显示"
     }
   }
  </script>
 </head>

<body>
 <p id="paragraph" style="color: green;">Sample Paragraph</p>
 <form action="">
  <p>
    <input type="button" value="显示属性及其值"
      onclick="listAttributes();">
    <input id="result" type="text" value="">
  </p>
 </form>
</body>
</html>
```

{{ EmbedLiveSample('遍历元素的属性') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

在 Firefox 22 版本之前，这个属性是被用在 {{domxref("Node")}} 上（继承至 {{domxref("Element")}}）。它需要被使用在其他符合这个接口规范的浏览器上使用。

IE5.5 返回的是一个 map 形式的键值对而不是一个 attribute 的属性对象。

## 参见

- {{domxref("NamedNodeMap")}}，返回对象的接口
- 跨浏览器兼容性问题可参考： [quirksmode](http://www.quirksmode.org/dom/w3c_core.html#attributes)
