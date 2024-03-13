---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
---

{{APIRef()}}

`sessionStorage` 属性允许你访问一个，对应当前源的 session {{domxref("Storage")}} 对象。它与 {{domxref("Window.localStorage", "localStorage")}} 相似，不同之处在于 `localStorage` 里面存储的数据没有过期时间设置，而存储在 `sessionStorage` 里面的数据在页面会话结束时会被清除。

- 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。
- **在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，这点和 session cookie 的运行方式不同。**
- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 `sessionStorage`。
- 关闭对应浏览器标签或窗口，会清除对应的 `sessionStorage`。

> **备注：** 应该注意，存储在 sessionStorage 或 localStorage 中的数据**特定于页面的协议**。也就
> 是说 `http://example.com` 与 `https://example.com` 的 sessionStorage 相互隔离。
>
> 被存储的键值对总是以 UTF-16 [DOMString](/zh-CN/docs/Web/API/DOMString) 的格式所存储，其使用两个字节来表示一个字符。对于对象、整数 key 值会自动转换成字符串形式。

## 语法

```js
// 保存数据到 sessionStorage
sessionStorage.setItem("key", "value");

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem("key");

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem("key");

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```

### 返回值

一个 {{domxref("Storage")}} 对象。

## 示例

下面的代码访问当前域名的 session {{domxref("Storage")}} 对象，并使用 {{domxref("Storage.setItem()")}} 访问往里面添加一个数据条目。

```js
sessionStorage.setItem("myCat", "Tom");
```

下面的示例会自动保存一个文本输入框的内容，如果浏览器因偶然因素被刷新了，文本输入框里面的内容会被恢复，因此写入的内容不会丢失。

```js
// 获取文本输入框
let field = document.getElementById("field");

// 检测是否存在 autosave 键值
// (这个会在页面偶然被刷新的情况下存在)
if (sessionStorage.getItem("autosave")) {
  // 恢复文本输入框的内容
  field.value = sessionStorage.getItem("autosave");
}

// 监听文本输入框的 change 事件
field.addEventListener("change", function () {
  // 保存结果到 sessionStorage 对象中
  sessionStorage.setItem("autosave", field.value);
});
```

> **备注：** 完整的使用示例可以查看[使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 一文。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
各浏览器支持的 localStorage 和 sessionStorage 容量上限不同。测试页面 [detailed rundown of all the storage capacities for various browsers](http://dev-test.nemikor.com/web-storage/support-test/)。

> **备注：** 从 iOS 5.1 之后，移动端的 Safari 将 localStorage 数据存储在 cache 文件中，在操作系统的要求下，会偶尔进行清除，特别是空间不足时。

## 相关链接

- [使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
