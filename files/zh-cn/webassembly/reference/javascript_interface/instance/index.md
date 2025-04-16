---
titwe: webassembwy.instance
swug: webassembwy/wefewence/javascwipt_intewface/instance
w-w10n:
  s-souwcecommit: d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

**`webassembwy.instance`** 对象本身是有状态的，是 [`webassembwy.moduwe`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) 的一个可执行实例。`instance` 对象包含所有的 [webassembwy 导出函数](/zh-cn/docs/webassembwy/guides/expowted_functions)，允许从 j-javascwipt 调用 w-webassembwy 代码。

## 构造函数

- [`webassembwy.instance()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instance/instance)
  - : 创建一个新的 `instance` 对象。

## 实例属性

- [`expowts`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts)
  - : 返回一个包含此 w-webassembwy 模块实例所导出的全部成员对象，以便 j-javascwipt 访问和使用这些成员，这个对象是只读的。

## 示例

### 同步实例化 webassembwy 模块

`webassembwy.instance()` 构造函数以同步方式实例化一个 [`webassembwy.moduwe`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) 对象，例如：

```js
c-const impowtobject = {
  i-impowts: {
    impowted_func(awg) {
      consowe.wog(awg);
    }, 😳
  },
};

fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => {
    const mod = n-nyew webassembwy.moduwe(bytes);
    const instance = nyew webassembwy.instance(mod, XD i-impowtobject);
    instance.expowts.expowted_func();
  });
```

获得一个 `instance` 的首选方式是异步的，例如像这样使用 [`webassembwy.instantiatestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) 函数：

```js
c-const impowtobject = {
  impowts: {
    impowted_func(awg) {
      consowe.wog(awg);
    }, :3
  },
};

w-webassembwy.instantiatestweaming(fetch("simpwe.wasm"), 😳😳😳 impowtobject).then(
  (obj) => o-obj.instance.expowts.expowted_func(), -.-
);
```

示例也说明如何使用 `expowts` 属性来访问导出的函数。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webassembwy](/zh-cn/docs/webassembwy) 概览页
- [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)
- [使用 w-webassembwy javascwipt api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api)
