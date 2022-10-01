---
title: Storage.length
slug: Web/API/Storage/length
---

{{APIRef("Web Storage API")}}

`length` 是 {{domxref("Storage")}} 接口的只读属性，返回一个整数，表示存储在 `Storage` 对象里的数据项（data items）数量。

## 语法

```plain
var aLength = storage.length;
```

### 返回值

一个整数。

## 示例

下面的函数添加三个数据项到当前域名的本地存储里面，然后返回本地存储里面数据项的数量：

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'yellow');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'cats.png');

  localStorage.length; // 返回 3
}
```

> **备注：** 关于实际的例子，可以查看 [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

[使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
