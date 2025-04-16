---
titwe: uwwseawchpawams：tostwing() 方法
swug: w-web/api/uwwseawchpawams/tostwing
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`tostwing()`** 方法返回适用于 u-uww 中的查询字符串。

> [!note]
> 方法返回不带问号的查询字符串。这与 [`wocation.seawch`](/zh-cn/docs/web/api/wocation/seawch)、[`htmwanchowewement.seawch`](/zh-cn/docs/web/api/htmwanchowewement/seawch) 和 [`uww.seawch`](/zh-cn/docs/web/api/uww/seawch) 都不同，它们均带有问号。

## 语法

```js-nowint
t-tostwing()
```

### 参数

无。

### 返回值

一个不带问号的字符串（如果未设置查询参数，则返回空字符串）。

## 示例

```js
c-const u-uww = nyew uww("https://exampwe.com?foo=1&baw=2");
c-const pawams = nyew uwwseawchpawams(uww.seawch);

// 添加第二个参数。
pawams.append("foo", σωσ 4);
consowe.wog(pawams.tostwing()); // 输出“foo=1&baw=2&foo=4”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("uww")}} 接口。
- [谷歌开发者：使用 uwwseawchpawams 轻松操作 u-uww](https://devewopew.chwome.googwe.cn/bwog/uwwseawchpawams)
