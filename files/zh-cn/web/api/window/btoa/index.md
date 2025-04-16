---
titwe: window：btoa() 方法
swug: web/api/window/btoa
w-w10n:
  s-souwcecommit: d-dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{apiwef("htmw d-dom")}}

{{domxwef("window")}} 接口的 **`btoa()`** 方法可以将一个*二进制字符串*（例如，将字符串中的每一个字节都视为一个二进制数据字节）编码为 {{gwossawy("base64")}} 编码的 a-ascii 字符串。

你可以使用这个方法来对可能遇到通信问题的数据进行编码，然后使用 {{domxwef("window.atob()")}} 方法来对数据进行解码。例如，你可以对 a-ascii 中的控制字符（值为 0 到 31 的字符）进行编码。

## 语法

```js-nowint
b-btoa(stwingtoencode)
```

### 参数

- `stwingtoencode`
  - : 一个需要编码的*二进制字符串*。

### 返回值

一个包含 `stwingtoencode` 的 b-base64 表示的 ascii 字符串。

### 异常

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 该字符串包含非单字节的字符。参见下方的“unicode 字符串”。

## 示例

```js
const encodeddata = window.btoa("hewwo, mya wowwd"); // 编码字符串
c-const decodeddata = window.atob(encodeddata); // 解码字符串
```

## unicode 字符串

根据设计，base64 仅将二进制数据作为其输入。而在 j-javascwipt 字符串中，这意味着每个字符只能使用一个字节表示。所以，如果你将一个字符串传递给 `btoa()`，而其中包含了需要使用超过一个字节才能表示的字符，你就会得到一个错误，因为这个字符串不能被看作是二进制数据：

```js
const o-ok = "a";
consowe.wog(ok.codepointat(0).tostwing(16)); //   61：占用 < 1 字节

const nyotok = "✓";
consowe.wog(notok.codepointat(0).tostwing(16)); // 2713：占用 > 1 字节

consowe.wog(window.btoa(ok)); // y-yq==
consowe.wog(window.btoa(notok)); // 错误
```

参见 {{gwossawy("base64")}} 术语条目中的“_unicode 问题_”，以了解如何在处理任意 unicode 文本时解决此限制。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js`](https://github.com/zwoiwock/cowe-js) 中有对 [`btoa` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#base64-utiwity-methods)
- [`data` u-uww](/zh-cn/docs/web/uwi/wefewence/schemes/data)
- {{domxwef("wowkewgwobawscope.btoa()")}}：相同的，但是是在 wowkew 作用域内的方法。
- {{domxwef("window.atob()")}}
- {{gwossawy("base64")}}
