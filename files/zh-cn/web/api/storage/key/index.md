---
title: Storage.key()
slug: Web/API/Storage/key
---

{{APIRef()}}

`key()` 作为 {{domxref("Storage")}} 接口的方法，接受一个数值 n 作为参数，返回存储对象第 n 个数据项的键名。键的存储顺序是由用户代理定义的，所以尽可能不要依赖这个方法。

## 语法

```plain
var aKeyName = storage.key(key);
```

### 参数

- _key_
  - : 一个整数，表示要获取的键名索引。

### 返回值

一个包含键名的 {{domxref("DOMString")}}。

## 示例

下面的函数添加三个数据项到当前域名的本地存储里，然后返回第三个的键名：

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'yellow');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'cats.png');

  localStorage.key(2); // 应该返回 'image'
}
```

> **备注：** 关于实际的例子，可以查看 [Web Storage Demo](https://github.com/mdn/dom-examples/tree/master/web-storage).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

[使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
