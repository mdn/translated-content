---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef()}}

只读的`localStorage` 属性允许你访问一个{{domxref("Document")}} 源（origin）的对象 {{domxref("Storage")}}；存储的数据将保存在浏览器会话中。`localStorage` 类似 {{DOMxRef("Window.sessionStorage", "sessionStorage")}}，但其区别在于：存储在 `localStorage` 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 `sessionStorage` 的数据会被清除。

应注意，无论数据存储在 `localStorage` 还是 `sessionStorage` ，**它们都特定于页面的协议。**

另外，`localStorage` 中的键值对总是以字符串的形式存储。 (需要注意，和 js 对象相比，键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).

## 语法

```js
myStorage = localStorage;
```

### 值

一个可被用于访问当前源（origin）的本地存储空间的 {{domxref("Storage")}} 对象。

### 异常

- `SecurityError`
  - : 请求违反了一个策略声明，或者源（origin）不是 [一个有效的 scheme/host/port tuple](/zh-CN/docs/Web/Security/Same-origin_policy#Definition_of_an_origin) （例如如果 origin 使用 `file:` 或者 `data:` 形式将可能发生）。比如，用户可以有禁用允许对指定的 origin 存留数据的浏览器配置。

## 示例

下面的代码片段访问了当前域名下的本地 {{domxref("Storage")}} 对象，并通过 {{domxref("Storage.setItem()")}} 增加了一个数据项目。

```js
localStorage.setItem("myCat", "Tom");
```

该语法用于读取 `localStorage` 项，如下：

```js
let cat = localStorage.getItem("myCat");
```

该语法用于移除 `localStorage` 项，如下：

```js
localStorage.removeItem("myCat");
```

该语法用于移除所有的 `localStorage` 项，如下：

```js
// 移除所有
localStorage.clear();
```

> **备注：** 请参考 [Using the Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 的完整示例文章。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Local storage（Window.localStorage）](/zh-CN/docs/Web/API/Web_Storage_API/Local_storage)
- {{domxref("LocalStorage")}}
- {{domxref("SessionStorage")}}
- {{domxref("Window.sessionStorage")}}
