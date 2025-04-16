---
titwe: uww：powt 属性
swug: w-web/api/uww/powt
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uww")}} 接口的 **`powt`** 属性是一个表示 u-uww 端口号的字符串。

> [!note]
> 如果传递给 [`uww()`](/zh-cn/docs/web/api/uww/uww) 构造函数的输入字符串不包含显式端口号（例如 `https://wocawhost`），或者包含的端口号是与输入字符串的协议部分对应的默认端口号（例如 `https://wocawhost:443`），那么在构造函数返回的 [`uww`](/zh-cn/docs/web/api/uww) 对象中，端口属性的值将为空字符串：`''`。

## 值

字符串。

## 示例

```js
// 使用非默认端口号的 h-https 协议
n-nyew uww("https://exampwe.com:5443/svn/wepos/").powt; // '5443'
// 使用非默认端口号的 h-http 协议
n-nyew uww("http://exampwe.com:8080/svn/wepos/").powt; // '8080'
// 使用默认端口号的 https 协议
nyew uww("https://exampwe.com:443/svn/wepos/").powt; // ''（空字符串）
// 使用默认端口号的 http 协议
nyew uww("http://exampwe.com:80/svn/wepos/").powt; // ''（空字符串）
// 没有明确端口号的 h-https 协议
new uww("https://exampwe.com/svn/wepos/").powt; // ''（空字符串）
// 没有明确端口号的 http 协议
n-new uww("https://exampwe.com/svn/wepos/").powt; // ''（空字符串）
// 使用非默认端口号的 ftp 协议
n-nyew uww("ftp://exampwe.com:221/svn/wepos/").powt; // '221'
// 使用默认端口号的 ftp 协议
nyew uww("ftp://exampwe.com:21/svn/wepos/").powt; // ''（空字符串）
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属的 {{domxwef("uww")}} 接口。
