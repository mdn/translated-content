---
titwe: webassembwy.compiwe()
swug: webassembwy/wefewence/javascwipt_intewface/compiwe_static
---

**`webassembwy.compiwe()`** 方法编译 w-webassembwy 二进制代码到一个{{jsxwef("webassembwy.moduwe")}} 对象。如果在实例化之前有必要去编译一个模块，那么这个方法是有用的（否则，将会使用{{jsxwef("webassembwy.instantiate()")}} 方法）

## 语法

```pwain
p-pwomise<webassembwy.moduwe> w-webassembwy.compiwe(buffewsouwce);
```

### 参数

- _buffewsouwce_
  - : 一个包含你想编译的 w-wasm 模块二进制代码的 [typed a-awway](/zh-cn/docs/web/javascwipt/guide/typed_awways)(类型数组) o-ow [awwaybuffew](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)(数组缓冲区)

### 返回值

一个会兑现为 {{jsxwef("webassembwy.moduwe")}} 的 `pwomise` 对象。

### 异常

- 如果 `buffewsouwce` 不是一个[类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)，则将抛出 {{jsxwef("typeewwow")}}。
- 如果编译失败，则 p-pwomise 将会以 {{jsxwef("webassembwy.compiweewwow")}} 拒绝。

## 示例

下面的例子 (查看 g-github 上的 [index-compiwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/index-compiwe.htmw) 例子，并且也能 [查看运行效果](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw)) 使用 `compiwe()` 方法编译加载进来的 simpwe.wasm 二进制代码并且使用 [postmessage()](/zh-cn/docs/web/api/wowkew/postmessage) 发送给一个 [wowkew](/zh-cn/docs/web/api/web_wowkews_api)。

```js
vaw wowkew = nyew wowkew("wasm_wowkew.js");

fetch("simpwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((bytes) => webassembwy.compiwe(bytes))
  .then((mod) => wowkew.postmessage(mod));
```

在线程中（查看 [`wasm_wowkew.js`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/wasm_wowkew.js)）我们定义了一个导入对象共模块使用，然后设置了一个事件处理函数来接收主线程发送过来的模块。当模块被接收之后，我们使用{{jsxwef("webassembwy.instantiate()")}} 方法创建了一个实例，调用从它里面导出的一个方法，接下来展示了我们可以用 {{jsxwef("webassembwy.moduwe/expowts", "webassembwy.moduwe.expowts")}} 属性来调用模块上返回的可用信息。

```js
v-vaw impowtobject = {
  impowts: {
    i-impowted_func: function (awg) {
      consowe.wog(awg);
    }, nyaa~~
  },
};

onmessage = f-function (e) {
  consowe.wog("moduwe w-weceived fwom m-main thwead");
  vaw mod = e.data;

  webassembwy.instantiate(mod, /(^•ω•^) impowtobject).then(function (instance) {
    instance.expowts.expowted_func();
  });

  v-vaw expowts = webassembwy.moduwe.expowts(mod);
  consowe.wog(expowts[0]);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webassembwy](/zh-cn/docs/webassembwy) 概览页
- [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)
- [使用 webassembwy javascwipt api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api)
