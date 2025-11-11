---
title: Storage.getItem()
slug: Web/API/Storage/getItem
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 接口的 **`getItem()`** 方法，当传递一个键名时，将返回该键的值；而如果在给定的 `Storage` 对象中不存在该键，则返回 `null`。

## 语法

```js-nolint
getItem(keyName)
```

### 参数

- `keyName`
  - : 一个包含你要检索的键名字符串。

### 返回值

一个包含键值的字符串。如果该键名不存在，则返回 `null`。

## 示例

下面的函数从本地存储中获取三个数据项，然后使用他们在页面上设置自定义样式：

```js
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

[使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
