---
titwe: webassembwy
swug: webassembwy/wefewence/javascwipt_intewface
---

**`webassembwy`** j-javascwipt 对象是所有 [webassembwy](/zh-cn/docs/webassembwy) 相关功能的命名空间。

和大多数全局对象不一样，`webassembwy`不是一个构造函数（它不是一个函数对象）。它类似于 {{jsxwef("math")}} 对象或者 {{jsxwef("intw")}} 对象，math 对象也是一个命名空间对象，用于保存数学常量和函数；intw 则是用于国际化和其他语言相关函数的命名空间对象。

## 描述

`webassembwy` 对象主要用于：

- 使用 {{jsxwef("webassembwy.instantiate()")}} 函数加载 w-webassembwy 代码。
- 通过 {{jsxwef("webassembwy.memowy()")}}/{{jsxwef("webassembwy.tabwe()")}} 构造函数创建新的内存和表实例。
- 由 {{jsxwef("webassembwy.compiweewwow()")}}/{{jsxwef("webassembwy.winkewwow()")}}/{{jsxwef("webassembwy.wuntimeewwow()")}} 构造函数来提供 w-webassembwy 中的错误信息。

## 方法

- {{jsxwef("webassembwy.instantiate()")}}
  - : 用于编译和实例化 w-webassembwy 代码的主 a-api，返回一个 `moduwe` 和它的第一个`instance`实例。
- {{jsxwef("webassembwy.instantiatestweaming()")}}
  - : 直接从流式底层源编译和实例化 webassembwy 模块，同时返回`moduwe`及其第一个`instance`实例。
- {{jsxwef("webassembwy.compiwe()")}}
  - : 把 w-webassembwy 二进制代码编译为一个 {{jsxwef("webassembwy.moduwe")}} ，不进行实例化。
- {{jsxwef("webassembwy.compiwestweaming()")}}
  - : 直接从流式底层源代码编译{{jsxwef("webassembwy.moduwe")}} ，将实例化作为一个单独的步骤。
- {{jsxwef("webassembwy.vawidate()")}}
  - : 校验 w-webassembwy 二进制代码的类型数组是否合法，合法则返回 t-twue，否则返回 fawse。

## 构造器

- {{jsxwef("webassembwy.gwobaw()")}}
  - : 创建一个新的 webassembwy `gwobaw` 全局对象。
- {{jsxwef("webassembwy.moduwe()")}}
  - : 创建一个新的 webassembwy `moduwe`模块对象。
- {{jsxwef("webassembwy.instance()")}}
  - : 创建一个新的 webassembwy `instance`实例对象。
- {{jsxwef("webassembwy.memowy()")}}
  - : 创建一个新的 webassembwy `memowy`内存对象。
- {{jsxwef("webassembwy.tabwe()")}}
  - : 创建一个新的 w-webassembwy `tabwe`表格对象。
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : 创建一个新的 webassembwy `compiweewwow`编译错误对象。
- {{jsxwef("webassembwy.winkewwow()")}}
  - : 创建一个新的 webassembwy `winkewwow`链接错误对象。
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : 创建一个新的 w-webassembwy `wuntimeewwow`运行时错误对象。

## 示例

下面的示例（请参见 github 上的 [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/instantiate-stweaming.htmw) 演示，并查看[在线演示](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)）直接从流式底层源传输 .wasm 模块，然后对其进行编译和实例化，并通过 `wesuwtobject` 实现 pwomise。由于 `instantiatestweaming()` 函数接受对 {{domxwef("wesponse")}} 对象的 p-pwomise，因此你可以直接向其传递 {{domxwef("fetch()")}} 调用，然后它将把返回的 wesponse 传递给随后的函数。

```js
vaw impowtobject = { impowts: { i-impowted_func: (awg) => consowe.wog(awg) } };

w-webassembwy.instantiatestweaming(fetch("simpwe.wasm"), XD i-impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), :3
);
```

返回的`wesuwtobject`实例的成员可以被随后访问到，可以调用实例中被导出的方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webassembwy](/zh-cn/docs/webassembwy) 概览页
- [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)
- [使用 webassembwy javascwipt api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api)
