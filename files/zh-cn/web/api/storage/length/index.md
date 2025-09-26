---
title: Storage.length
slug: Web/API/Storage/length
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 接口的只读属性 **`length`** 返回存储在一个给定的 `Storage` 对象中的数据项的数量。

## 值

`Storage` 对象中存储的数据项数量。

## 示例

下面的函数添加三个数据项到当前域名的本地存储里面，然后返回本地存储里面数据项的数量：

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  return localStorage.length; // 应该返回 3
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
