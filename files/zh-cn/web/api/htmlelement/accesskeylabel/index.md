---
title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.accessKeyLabel`** 只读属性返回一个 {{jsxref("String")}} 表示这个元素分配的访问密钥 (如果有的话); 否则返回一个空字符串。

## 语法

```plain
label = element.accessKeyLabel
```

## 示例

### JavaScript

```js
var node = document.getElementById("btn1");
if (node.accessKeyLabel) {
  node.title += " [" + node.accessKeyLabel + "]";
} else {
  node.title += " [" + node.accessKey + "]";
}

node.onclick = function () {
  var p = document.createElement("p");
  p.textContent = "Clicked!";
  node.parentNode.appendChild(p);
};
```

### HTML

```html
<button accesskey="h" title="Caption" id="btn1">Hover me</button>
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("element.accessKey")}}
- The [accesskey](/zh-CN/docs/Web/HTML/Global_attributes/accesskey) global attribute.
