---
title: Storage.getItem()
slug: Web/API/Storage/getItem
---

{{APIRef("Web Storage API")}}

`getItem()` 作为 {{domxref("Storage")}} 接口的方法，接受一个键名（key name）作为参数，并返回对应键名的值（key's value）。

## 语法

```plain
var aValue = storage.getItem(keyName);
```

### 参数

- _`keyName`_
  - : 一个包含键名的 {{domxref("DOMString")}}。

### 返回值

一个 {{domxref("DOMString")}}，键名对应的值。如果键名不存在于存储中，则返回 `null`。

## 示例

下面的函数从本地存储中获取三个数据项，然后使用他们在页面上设置自定义样式：

```js
function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
```

> **备注：** 一个实际的例子 [Web Storage Demo](https://github.com/mdn/web-storage-demo)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

[使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
