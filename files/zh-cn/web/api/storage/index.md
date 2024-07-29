---
title: Storage
slug: Web/API/Storage
---

{{APIRef("Web Storage API")}}

作为 Web Storage API 的接口，**`Storage`** 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。

如果你想要操作一个域名的会话存储，可以使用 {{domxref("Window.sessionStorage")}}；如果想要操作一个域名的本地存储，可以使用 {{domxref("Window.localStorage")}}。

## 属性

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : 返回一个整数，表示存储在 `Storage` 对象中的数据项数量。

## 方法

- {{domxref("Storage.key()")}}
  - : 该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。
- {{domxref("Storage.getItem()")}}
  - : 该方法接受一个键名作为参数，返回键名对应的值。
- {{domxref("Storage.setItem()")}}
  - : 该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
- {{domxref("Storage.removeItem()")}}
  - : 该方法接受一个键名作为参数，并把该键名从存储中删除。
- {{domxref("Storage.clear()")}}
  - : 调用该方法会清空存储中的所有键名。

## 示例

这里我们通过调用 `localStorage` 来访问一个 `Storage` 对象。首先，使用 `!localStorage.getItem('bgcolor')` 测试本地存储中是否包含该数据项。如果包含，则运行 `setStyles()` 函数，该函数使用 `localStorage.getItem()` 来获取数据项，并使用这些值更新页面样式。如果不包含，我们运行另一个函数 `populateStorage()`，该函数使用 `localStorage.setItem()` 设置数据项，然后运行 `setStyles()`。

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> [!NOTE]
> 有关实际运行的例子，详见 [Web Storage 演示](https://mdn.github.io/dom-examples/web-storage/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
- {{domxref("Window.sessionStorage")}}
- {{domxref("CacheStorage")}}
