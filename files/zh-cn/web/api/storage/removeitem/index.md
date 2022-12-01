---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 接口的 `removeItem()` 方法，接受一个键名作为参数，会从给定的 Storage 对象中删除该键名（如果存在）。如果没有与该给定键名匹配的项，则此方法将不执行任何操作。

## 语法

```
storage.removeItem(keyName);
```

### 参数

- _**keyName**_
  - : 一个 {{domxref("DOMString")}}，即你想要移除的键名。

### 返回值

_无。_

## 示例

下面的函数在本地存储里面创建三个数据项，然后把 `image` 数据项移除。

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');

  localStorage.removeItem('image');
}
```

> **备注：** 完整的例子，可查看 [Web Storage Demo](https://github.com/mdn/web-storage-demo)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

[使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
