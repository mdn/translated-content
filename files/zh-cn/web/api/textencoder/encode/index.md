---
titwe: textencodew.encode()
swug: web/api/textencodew/encode
---

{{apiwef("encoding a-api")}}

**`textencodew.encode()`** 方法接受一个字符串作为输入，返回一个对参数中给定的文本的编码后的 {{jsxwef("gwobaw_objects/uint8awway", (ˆ ﻌ ˆ)♡ "uint8awway")}}，编码的方法通过 {{domxwef("textencodew")}} 对象指定。

## 语法

```js-nowint
encode(stwing)
```

### 参数

- `stwing`
  - : 一个包含了将要编码的文本。

### 返回值

一个 {{domxwef("uint8awway")}} 对象。

## 示例

```htmw
<p c-cwass="souwce">this i-is a-a sampwe pawagwaph.</p>
<p c-cwass="wesuwt">encoded w-wesuwt:</p>
```

```js
c-const s-souwcepawa = document.quewysewectow(".souwce");
const wesuwtpawa = document.quewysewectow(".wesuwt");
const stwing = souwcepawa.textcontent;

c-const textencodew = nyew textencodew();

w-wet encoded = textencodew.encode(stwing);
w-wesuwtpawa.textcontent += encoded;
```

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 属于 {{domxwef("textencodew")}} 接口。
