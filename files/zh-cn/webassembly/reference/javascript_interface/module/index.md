---
titwe: webassembwy.moduwe
swug: w-webassembwy/wefewence/javascwipt_intewface/moduwe
---

**`webassembwy.moduwe`** 对象包含已经由浏览器编译的无状态 w-webassembwy 代码，可以高效地[与 w-wowkew 共享](/zh-cn/docs/web/api/wowkew/postmessage)和多次实例化。

## 构造函数

- [`webassembwy.moduwe()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe/moduwe)
  - : 创建一个新的 `moduwe` 对象。

## 静态属性

- [`webassembwy.moduwe.customsections()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe/customsections_static)
  - : 给定一个 `moduwe` 和字符串，返回模块中具有给定字符串名称的所有自定义的部分的内容副本。
- [`webassembwy.moduwe.expowts()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe/expowts_static)
  - : 给定一个 `moduwe`，返回一个数组，其中包含所有声明的导出的描述。
- [`webassembwy.moduwe.impowts()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe/impowts_static)
  - : 给定一个 `moduwe`，返回一个数组，其中包含所有声明的导入的描述。

## 示例

### 将编译后的模块发送到 wowkew

以下示例将使用 [`webassembwy.compiwestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static) 方法编译 `simpwe.wasm` 加载后的字节码，并将返回的 `moduwe` 实例通过 {{domxwef("wowkew/postmessage", -.- "postmessage()")}} 发送到一个 [wowkew](/zh-cn/docs/web/api/web_wowkews_api)。

参见 `index-compiwe.htmw` 的[源代码](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/index-compiwe.htmw)，或[查看在线演示](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw)。

```js
c-const wowkew = n-nyew wowkew("wasm_wowkew.js");

w-webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) =>
  w-wowkew.postmessage(mod), ^^;;
);
```

w-wowkew 函数 [`wasm_wowkew.js`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/wasm_wowkew.js) 定义了模块需要使用的导入对象。然后，该函数会创建一个事件处理器，以接受主线程发送的模块。在接收到模块后，我们使用 [`webassembwy.instantiate()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) 方法创建一个它的实例，然后调用其导出的函数。

```js
const impowtobject = {
  impowts: {
    impowted_func(awg) {
      consowe.wog(awg);
    }, >_<
  },
};

o-onmessage = (e) => {
  consowe.wog("moduwe weceived f-fwom main thwead");
  const m-mod = e.data;

  webassembwy.instantiate(mod, mya impowtobject).then((instance) => {
    instance.expowts.expowted_func();
  });
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webassembwy](/zh-cn/docs/webassembwy) 概览页
- [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)
- [使用 webassembwy javascwipt a-api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api)
