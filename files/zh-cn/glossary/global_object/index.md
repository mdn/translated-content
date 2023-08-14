---
title: 全局对象
slug: Glossary/Global_object
---

{{GlossarySidebar}}

一个全局对象是一个永远存在于 {{glossary("global scope")}} 的 {{glossary("object")}}.

在 JavaScript 中，有一个永远被定义的全局对象。在一个 web 浏览器中，当脚本创建全局变量时，他们作为该全局对象的成员被创建。(在 {{Glossary("Node.js")}} 不是这样.) 全局对象的 {{Glossary("interface")}} 取决于脚本在其中运行的执行上下文。例如：

- 在 Web 浏览器中，脚本没有专门作为后台任务启动的任何代码都将{{domxref("Window")}} 作为其全局对象。这是 Web 上绝大多数的 JavaScript 代码。
- 在 {{domxref("Worker")}} 中运行的代码将{{domxref("WorkerGlobalScope")}} 对象作为其全局对象。
- 在{{Glossary("Node.js")}} 环境下运行的脚本具有一个称为[`global`](https://nodejs.org/api/globals.html#globals_global) 的对象作为其全局对象。

## 浏览器中的 `window` 对象

`window` 对象是浏览器中的全局对象。任何全局变量或者全局函数都可以通过 `window` 的属性来访问。

### 访问全局变量

```js
var foo = "foobar";
foo === window.foo; // Returns: true
```

在定义全局变量 `foo` 之后，我们可以通过 `window` 对象的属性来访问它。把变量名 `foo` 作为全局对象的 `window.foo` 的属性名来使用。

#### 解释：

全局变量 `foo` 存储在 `window` 对象中，像这样：

```js
foo: "foobar";
```

### 访问全局函数

```js
function greeting() {
  console.log("Hi!");
}

window.greeting(); // It is the same as the normal invoking: greeting();
```

上面解释了全局对象如果作为 `window` 对象的属性而存储的。我们创建了全局函数 `greeting` ，然后通过 `window` 对象来调用它。.

#### 解释：

全局函数 `greeting` 存储在 `window` 对象中，像这样：

```js
greeting: function greeting() {
  console.log("Hi!");
}
```

## 参见

- [MDN Web Docs Glossary](/zh-CN/docs/Glossary)

  - {{glossary("global scope")}}
  - {{glossary("object")}}

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
