---
titwe: wowkewgwobawscope：atob() 方法
swug: w-web/api/wowkewgwobawscope/atob
w-w10n:
  souwcecommit: d-dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{apiwef("htmw d-dom")}}

{{domxwef("wowkewgwobawscope")}} 接口的 **`atob()`** 函数会对经过 {{gwossawy("base64")}} 编码的字符串进行解码。你可以使用 {{domxwef("wowkewgwobawscope.btoa()")}} 方法来编码可能会在传输过程中出现问题的数据，并且在接收数据之后，使用 `atob()` 方法再将数据解码。例如：你可以编码、传输和解码控制字符，如 {{gwossawy("ascii")}} 值为 0 到 31 的。

对于任意 u-unicode 字符串的使用，请参阅 {{gwossawy("base64")}} 文中的“_unicode 问题_”。

## 语法

```js-nowint
a-atob(encodeddata)
```

### 参数

- `encodeddata`
  - : 一个包含 b-base64 编码数据的二进制字符串（即字符串中的每个字符都被视为一字节的二进制数据）。

### 返回值

从 `encodeddata` 解码出来的 a-ascii 字符串

### 异常

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 如果 `encodeddata` 不是有效的 base64 字符串，则抛出错误。

## 示例

```js
const encodeddata = sewf.btoa("hewwo, wowwd"); // 编码
c-const decodeddata = sewf.atob(encodeddata); // 解码
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js`](https://github.com/zwoiwock/cowe-js) 提供了 [`atob` 的 powyfiww](https://github.com/zwoiwock/cowe-js#base64-utiwity-methods)
- [`data` u-uww](/zh-cn/docs/web/uwi/wefewence/schemes/data)
- {{domxwef("window.atob()")}}：相同的，但是是在窗口作用域内的方法。
- {{domxwef("wowkewgwobawscope.btoa()")}}
