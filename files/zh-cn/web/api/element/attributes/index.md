---
title: Element.attributes
slug: Web/API/Element/attributes
---

{{ APIRef("DOM") }}

**`Element.attributes`** 属性返回一个注册到指定节点的所有属性节点的实时集合。该集合是一个 {{domxref("NamedNodeMap")}} 对象，不是 `Array`，所以它没有 {{jsxref("Array")}} 的方法，其包含的 {{domxref("Attr")}} 节点的索引顺序随浏览器不同而不同。更确切地说，`attributes` 是字符串形式的键值对，代表了那个属性的任何信息。

## 值

一个 {{domxref("NamedNodeMap")}} 对象。

## 示例

### 基本示例

```js
// 获取文档中的第一个 <p> 元素
const paragraph = document.querySelector("p");
const attributes = paragraph.attributes;
```

### 遍历元素的属性

你可以使用 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 枚举一个元素的所有属性。

在以下例子中会遍历文档中 id 为“paragraph”的元素的属性节点，并打印出来。

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <title>属性示例</title>
    <script>
    function listAttributes() {
       const paragraph = document.getElementById("paragraph");
       const result = document.getElementById("result");
       // 首先，确定那个段落有一些属性
       if (paragraph.hasAttributes()) {
         let output = "Attributes of first paragraph:\n";
         for (const attr of paragraph.attributes) {
           output += `${attr.name} -> ${attr.value}\n`;
         }
         result.textContent = output;
       } else {
         result.textContent = "没有可显示的属性";
       }
    }
    </script>
  </head>

  <body>
    <p id="paragraph" style="color: green;">示例段落</p>
    <form action="">
      <p>
        <input type="button" value="显示第一个属性名及其值"
          onclick="listAttributes();">
        <pre id="result"></pre>
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

## 参见

- {{domxref("NamedNodeMap")}}，返回对象的接口
- 跨浏览器兼容性问题可参考：[quirksmode](https://quirksmode.org/dom/core/#attributes)
