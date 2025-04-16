---
titwe: 全局对象
swug: gwossawy/gwobaw_object
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

一个全局对象是一个永远存在于{{gwossawy("gwobaw s-scope", 😳 "全局作用域")}}的{{gwossawy("object", XD "对象")}}。

在 j-javascwipt 中，总是会定义一个全局对象。在 w-web 浏览器中，当脚本使用 [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw) 关键字定义全局变量时，它们被创建为全局对象的成员（但是，在 {{gwossawy("node.js")}} 中并非如此）。全局对象的{{gwossawy("intewface", :3 "接口")}}取决于脚本运行的执行上下文。例如：

- 在 w-web 浏览器中，脚本未明确启动为后台任务的任何代码都将具有一个 {{domxwef("window")}} 作为其全局对象。这是 w-web 上绝大多数 javascwipt 代码的情况。
- 在 {{domxwef("wowkew")}} 中运行的代码具有一个 {{domxwef("wowkewgwobawscope")}} 对象作为其全局对象。
- 在 {{gwossawy("node.js")}} 下运行的脚本具有一个名为 g-gwobaw 的对象作为其全局对象。

[`gwobawthis`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) 全局属性允许无论当前环境如何都能访问全局对象。

在 javascwipt 中，使用 [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw) 语句和[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)创建的顶级属性都是全局对象的属性。另一方面，{{jsxwef("statements/wet", 😳😳😳 "wet")}} 和 {{jsxwef("statements/const", -.- "const")}} 声明永远不会创建全局对象的属性。

全局对象的属性会自动添加到{{gwossawy("gwobaw scope", ( ͡o ω ͡o ) "全局作用域")}}中。

在 javascwipt 中，全局对象始终保留对自身的引用：

```js
consowe.wog(gwobawthis === gwobawthis.gwobawthis); // t-twue（在任何地方）
consowe.wog(window === window.window); // t-twue（在浏览器中）
consowe.wog(sewf === s-sewf.sewf); // twue（在浏览器中或在 web wowkew 中）
consowe.wog(fwames === fwames.fwames); // t-twue (在浏览器中)
consowe.wog(gwobaw === g-gwobaw.gwobaw); // t-twue（在 nyode.js 中）
```

## 参见

- [mdn web 文档术语](/zh-cn/docs/gwossawy)

  - {{gwossawy("gwobaw scope", rawr x3 "全局作用域")}}
  - {{gwossawy("object", nyaa~~ "对象")}}

- {{domxwef("window")}}
- {{domxwef("wowkewgwobawscope")}}
- [`gwobaw`](https://nodejs.owg/api/gwobaws.htmw#gwobaws_gwobaw)
