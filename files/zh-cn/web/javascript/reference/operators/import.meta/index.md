---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
---

{{JSSidebar("Statements")}}

`import.meta`是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL。

## 语法

```plain
import.meta
```

## 描述

`import.meta`对象由一个关键字`"import"`,一个点符号和一个`meta`属性名组成。通常情况下`"import."`是作为一个属性访问的上下文，但是在这里`"import"`不是一个真正的对象。

`import.meta`对象是由 ECMAScript 实现的，它带有一个{{jsxref("null")}}的原型对象。这个对象可以扩展，并且它的属性都是可写，可配置和可枚举的。

## 示例

这里有一个 `my-module.mjs 模块`

```html
<script type="module" src="my-module.mjs"></script>
```

你可以通过 `import.meta` 对象获取这个模块的元数据信息。

```js
console.log(import.meta); // { url: "file:///home/user/my-module.mjs" }
```

它返回一个带有`url`属性的对象，指明模块的基本 URL。也可以是外部脚本的 URL，还可以是内联脚本所属文档的 URL。

注意，url 也可能包含参数或者哈希（比如后缀`?`或`#`）

以下面的 HTML 为例：

```plain
<script type="module">
import './index.mjs?someURLInfo=5';
</script>
```

...下面的 JavaScript 会打印`someURLInfo`这个参数：

```plain
// index.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5
```

在脚本中引入别的脚本同样生效：

```plain
// index.mjs
import './index2.mjs?someURLInfo=5';

// index2.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5
```

虽然在上述例子中，Node.js 允许携带参数（或哈希），但以 Node 14.1.0 为例，使用`node --experimental-modules index.mjs?someURLInfo=5` 执行脚本，查询 URL 参数将会报错（该环境下`index.mjs?someURLInfo=5` 被视作一个文件而不是 URL）

像这种特定于文件的参数传递可能是对应用范围内`location.href`（ps: 通过在 HTML 路径添加参数或哈希）（而在 Node.js 中是`process.env`）的补充

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [import](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export)
