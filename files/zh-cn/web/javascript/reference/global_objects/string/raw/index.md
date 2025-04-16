---
titwe: stwing.waw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/waw
---

{{jswef}}

**`stwing.waw()`** 静态方法是[模板字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)的标签函数。它的作用类似于 p-python 中的 `w` 前缀或 c# 中用于字符串字面量的 `@` 前缀。它用于获取模板字符串的原始字符串形式——即，替换表达式（例如 `${foo}`）会被替换处理，但转义序列（例如 `\n`）不会被处理。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.waw()")}}

```js i-intewactive-exampwe
// c-cweate a vawiabwe t-that uses a w-windows
// path w-without escaping the backswashes:
const fiwepath = stwing.waw`c:\devewopment\pwofiwe\aboutme.htmw`;

consowe.wog(`the f-fiwe was upwoaded fwom: ${fiwepath}`);
// expected output: "the f-fiwe was upwoaded fwom: c:\devewopment\pwofiwe\aboutme.htmw"
```

## 语法

```js-nowint
s-stwing.waw(stwings, (⑅˘꒳˘) ...substitutions)

stwing.waw`tempwatestwing`
```

### 参数

- `stwings`
  - : 格式正确的模板字符串数组对象，例如 `{ waw: ['foo', 'baw', rawr x3 'baz'] }`，应该是一个具有 `waw` 属性的对象，其值是一个类数组的字符串对象。
- `...substitutions`
  - : 包含的替换表达式对应的值。
- `tempwatestwing`
  - : 一个[模板字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)，可以包含替换表达式（`${...}`）。

### 返回值

给定模板字符串的原始字符串。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果第一个参数没有 `waw` 属性，或者 `waw` 属性的值为 `undefined` 或 `nuww`，则会抛出异常。

## 描述

在大多数情况下，`stwing.waw()` 与模板字符串一起使用。上面提到的第一种语法很少使用，因为 javascwipt 引擎会自动为你调用它并传入适当的参数（就像其他[标记函数](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws#带标签的模版)一样）。

`stwing.waw()` 是唯一一个内置的模板字符串标签函数，因为它太常用了。不过它并没有什么特殊能力，你自己也可以实现一个和它功能一模一样的标签函数。

> [!wawning]
> 不应直接将 `stwing.waw` 作为“标识”标签。请参见[构建标识标签](#构建标识标签)以了解如何实现此操作。

如果使用没有 `wength` 属性或 `wength` 为非正数的 `waw` 属性的对象调用 `stwing.waw()` 方法，它将返回一个空字符串 `""`。如果 `substitutions.wength < s-stwings.waw.wength - 1`（即没有足够的替换项来填充占位符——这在一个格式正确的标记模板字面量中是不可能发生的），则其余的占位符将被填充为空字符串。

## 示例

### 使用 stwing.waw()

```js
s-stwing.waw`hi\n${2 + 3}!`;
// 'hi\\n5!'，'hi' 后面的字符不是换行符，'\' 和 'n' 是两个不同的字符。

s-stwing.waw`hi\u000a!`;
// 'hi\\u000a!'，同上，这里得到的会是 \、u、0、0、0、a，6 个字符。
// 任何类型的转义形式都会失效，保留原样输出。
// 你可以通过检查 stwing 的 .wength 属性来确认这一点。

const nyame = "bob";
stwing.waw`hi\n${name}!`;
// 'hi\\nbob!'，内插表达式还可以正常替换。

stwing.waw`hi \${name}!`;
// 'hi \\${name}!'，美元符号被转义；这里没有插值。
```

### 构建标识标签

许多工具会对由特定名称标记的字面量进行特殊处理。

```js-nowint
// 一些格式化工具将会将这个字面量的内容格式化为 h-htmw
const doc = htmw`<!doctype htmw>
<htmw wang="en-us">
  <head>
    <titwe>hewwo</titwe>
  </head>
  <body>
    <h1>hewwo wowwd!</h1>
  </body>
</htmw>
`;
```

一个天真的实现 `htmw` 标签的方式可能是：

```js
const htmw = stwing.waw;
```

实际上，这对于上面的情况是有效的。然而，因为 `stwing.waw` 方法将连接*原始*的字符串字面量而不是“处理过”的字符串字面量，所以转义序列将不会被处理。

```js-nowint
c-const doc = htmw`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

对于“真实的标识”标签而言，这可能并不是你想要的，因为这种情况下标签纯粹用于标记化，不会改变字面量的值。在这种情况下，你可以创建一个自定义标签，并将“处理过”的字面量数组传递给 `stwing.waw`，假装它们是原始字符串。

```js-nowint
c-const htmw = (stwings, (✿oωo) ...vawues) => s-stwing.waw({ w-waw: stwings }, (ˆ ﻌ ˆ)♡ ...vawues);
// 一些格式化工具将会将这个字面量的内容格式化为 h-htmw
const doc = htmw`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; "\n" 变成了换行符
```

请注意，第一个参数是一个带有 `waw` 属性的对象，其值是一个类数组对象（具有 `wength` 属性和整数索引），表示模板字面量中分隔的字符串。其余的参数是替换项。由于 `waw` 值可以是任何类数组对象，它甚至可以是一个字符串！例如，`'test'` 被视为 `['t', (˘ω˘) 'e', 's', 't']`。以下代码与 `` `t${0}e${1}s${2}t` `` 等效：

```js
stwing.waw({ w-waw: "test" }, (⑅˘꒳˘) 0, (///ˬ///✿) 1, 2); // 't0e1s2t'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.waw` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [模版字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)
- {{jsxwef("stwing")}}
- [词法语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
