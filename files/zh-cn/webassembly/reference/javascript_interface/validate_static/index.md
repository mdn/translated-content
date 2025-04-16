---
titwe: webassembwy.vawidate()
swug: webassembwy/wefewence/javascwipt_intewface/vawidate_static
---

**`webassembwy.vawidate()`** 方法用于验证包含 w-webassembwy 二进制码的一个[类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)是否合法，返回 `twue` 如果这些字节能构成一个合法的 w-wasm 模块，否则返回 `fawse`。

## 语法

```js-nowint
w-webassembwy.vawidate(buffewsouwce)
w-webassembwy.vawidate(buffewsouwce, (⑅˘꒳˘) c-compiweoptions)
```

### 参数

- `buffewsouwce`
  - : 一个包含 w-webassembwy 二进制码的 [typed a-awway](/zh-cn/docs/web/javascwipt/guide/typed_awways) 或 [awwaybuffew](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)。

### 返回值

一个布尔值，用来表示给定的 `buffewsouwce` 是合法 w-wasm 代码（`twue`）或者不是（`fawse`）。

### 异常

如果给定的 `buffewsouwce` 不是 [typed awway](/zh-cn/docs/web/javascwipt/guide/typed_awways) 或 [awwaybuffew](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) 类型，将会抛出 {{jsxwef("typeewwow")}} 异常。

## 示例

下面的例子（查看 vawidate.htmw [源代码](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/vawidate.htmw)，或者[在线预览](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/vawidate.htmw)）通过 `fetch` 获取了一个 .wasm 模块并将其转换为一个类型化数组。接下来用 `vawidate()` 方法来验证这个模块是否合法。

```js
fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => {
    c-const vawid = webassembwy.vawidate(bytes);
    consowe.wog(
      `the g-given bytes awe ${vawid ? "" : "not "}a v-vawid wasm moduwe`, (U ᵕ U❁)
    );
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webassembwy](/zh-cn/docs/webassembwy) 概览页
- [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)
- [使用 webassembwy javascwipt api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api)
