---
title: Storage.setItem()
slug: Web/API/Storage/setItem
tags:
  - API
  - Storage
  - Web Storage
translation_of: Web/API/Storage/setItem
---
{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 接口的 **`setItem()`** 方法，接受一个键名和值作为参数，将会把键名添加到给定的 `Storage` 对象中，如果键名已存在，则更新其对应的值。

## 语法

```js
storage.setItem(keyName, keyValue);
```

## 参数

- `keyName`
  - : 一个 {{domxref("DOMString")}}，表示要创建或更新的键名。
- `keyValue`
  - : 一个 {{domxref("DOMString")}}，表示要创建或更新的键名对应的值。

### 返回值

{{jsxref("undefined")}}。

### 异常

在存储已满的情况下，调用 `setItem()` 可能会抛出异常。开发人员应**始终捕获 `setItem()` 可能抛出的异常**。

## 示例

下面的函数在本地存储中创建三个数据项。

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');
}
```

> **备注：** 一个实际的例子：[Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Storage.getItem()](/zh-CN/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/zh-CN/docs/Web/API/Storage/removeItem)
- [使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
