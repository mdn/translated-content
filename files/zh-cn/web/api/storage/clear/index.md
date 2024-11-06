---
title: Storage.clear()
slug: Web/API/Storage/clear
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 接口的 **`clear()`** 方法清除给定 `Storage` 对象中存储的所有键。

## 语法

```js-nolint
clear()
```

### 参数

无。

### 返回值

无 ({{jsxref("undefined")}})。

## 示例

下面的函数在本地存储里面创建三个数据项，然后使用 `clear()` 把它们全部移除。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "miGato.png");

  localStorage.clear();
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
