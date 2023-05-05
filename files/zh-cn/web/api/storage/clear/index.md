---
title: Storage.clear()
slug: Web/API/Storage/clear
---

{{APIRef("Web Storage API")}}

`clear()` 是 {{domxref("Storage")}} 接口的一个方法，调用它可以清空存储对象里所有的键值。

## 语法

```js
storage.clear();
```

### 参数

_无。_

### 返回值

_无。_

## 示例

下面的函数在本地存储里面创建三个数据项，然后使用 `clear()` 把它们全部移除。

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');

  localStorage.clear();
}
```

> **备注：** 一个实际的例子 [Web Storage Demo](https://github.com/mdn/web-storage-demo)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

[使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
