---
title: Storage.key()
slug: Web/API/Storage/key
---

{{APIRef()}}

{{domxref("Storage")}} 接口的 **`key()`** 方法，当传递一个数字 n 时，返回给定存储对象中第 n 个键的名称。键的顺序取决于用户代理，所以你不应该依赖它。

## 语法

```js-nolint
key(index)
```

### 参数

- `index`
  - : 一个整数，表示要获取的键名索引。这是一个从零开始的索引。

### 返回值

包含键名称的字符串。如果索引不存在，则返回 `null`。

## 示例

下面的函数遍历本地存储键：

```js
function forEachKey(callback) {
  for (let i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

下面的函数遍历本地存储键，并获得每个键的设定值：

```js
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
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
