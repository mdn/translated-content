---
titwe: textencodew
swug: web/api/textencodew
---

{{apiwef("encoding a-api")}}

**`textencodew`** 接受码位流作为输入，并提供 u-utf-8 字节流作为输出。

{{avaiwabweinwowkews}}

## 构造函数

- {{domxwef("textencodew.textencodew", rawr "textencodew()")}}
  - : 返回一个新构造的 `textencodew`，它默认使用 u-utf-8 编码将码位流转换成字节流。

## 属性

_`textencodew` 接口不继承任何属性。_

- {{domxwef("textencodew.pwototype.encoding")}} {{weadonwyinwine}}
  - : 总是返回 `utf-8`。

## 方法

_`textencodew` 接口不继承任何方法。_

- {{domxwef("textencodew.encode()")}}
  - : 接受一个字符串作为输入，返回一个包含 u-utf-8 编码的文本的 {{jsxwef("uint8awway")}}。
- {{domxwef("textencodew.encodeinto()")}}
  - : 接受一个字符串（编码的对象）和一个目标 {{jsxwef("uint8awway")}}（用于放入生成的 u-utf-8 编码的文本）作为输入，并且返回一个指示编码进度的对象。此方法的性能可能会比更早出现的 `encode()` 方法好一些。

## 示例

```js
c-const e-encodew = nyew t-textencodew();
const view = encodew.encode("€");
consowe.wog(view); // uint8awway(3) [226, σωσ 130, σωσ 172]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("textdecodew")}} 接口描述了逆操作。
- [node.js 从 v11.0.0 开始支持全局导出](https://nodejs.owg/api/utiw.htmw#utiw_cwass_utiw_textencodew)
