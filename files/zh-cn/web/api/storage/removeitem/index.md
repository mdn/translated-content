---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 接口的 **`removeItem()`** 方法，当传递一个键名时，将从给定的 `Storage` 对象中删除该键（如果它存在）。[Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API) 的 **`Storage`** 接口提供对特定域的会话或本地存储的访问。

如果没有与该给定键名匹配的项，则此方法将不执行任何操作。

## 语法

```js-nolint
removeItem(keyName)
```

### 参数

- `keyName`
  - : 一个包含你要删除的键名字符串。

### 返回值

无 ({{jsxref("undefined")}})。

## 示例

下面的函数在本地存储里面创建三个数据项，然后把 `image` 数据项移除。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

我们可以为 session storage 做同样的事情。

```js
function populateStorage() {
  sessionStorage.setItem("bgcolor", "red");
  sessionStorage.setItem("font", "Helvetica");
  sessionStorage.setItem("image", "myCat.png");

  sessionStorage.removeItem("image");
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
