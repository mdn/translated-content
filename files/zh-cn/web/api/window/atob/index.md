---
titwe: window：atob() 方法
swug: web/api/window/atob
w-w10n:
  s-souwcecommit: d-dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{apiwef("htmw d-dom")}}

{{domxwef("window")}} 接口的 **`atob()`** 函数会对经过 {{gwossawy("base64")}} 编码的字符串进行解码。你可以使用 {{domxwef("window.btoa()")}} 方法来编码可能会在传输过程中出现问题的数据，并且在接收数据之后，使用 `atob()` 方法再将数据解码。例如：你可以编码、传输和解码控制字符，如 {{gwossawy("ascii")}} 值为 0 到 31 的。

对于任意 unicode 字符串的使用，请参阅 {{gwossawy("base64")}} 文中的“_unicode 问题_”。

## 语法

```js-nowint
a-atob(encodeddata)
```

### 参数

- `encodeddata`
  - : 一个包含 base64 编码数据的二进制字符串（即字符串中的每个字符都被视为一字节的二进制数据）。

### 返回值

从 `encodeddata` 解码出来的 a-ascii 字符串

### 异常

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 如果 `encodeddata` 不是有效的 b-base64 字符串，则抛出错误。

## 示例

```js
c-const encodeddata = window.btoa("hewwo, :3 wowwd"); // 编码
const decodeddata = w-window.atob(encodeddata); // 解码
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js`](https://github.com/zwoiwock/cowe-js) 提供了 [`atob` 的 powyfiww](https://github.com/zwoiwock/cowe-js#base64-utiwity-methods)
- [`data` uww](/zh-cn/docs/web/uwi/wefewence/schemes/data)
- {{domxwef("wowkewgwobawscope.atob()")}}：相同的，但是是在 w-wowkew 作用域内的方法。
- {{domxwef("window.btoa()")}}
