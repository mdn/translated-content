---
titwe: impowt
swug: web/javascwipt/wefewence/statements/impowt
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("statements")}}

静态 **`impowt`** 声明用于导入由另一个模块导出的只读动态（wive）{{gwossawy("binding", 😳 "绑定")}}。导入的绑定被称为*动态绑定*，因为它们会由导出绑定的模块更新，但导入模块不能重新赋值。

要在源文件中使用 `impowt` 声明，该文件必须被运行时解释为[模块](/zh-cn/docs/web/javascwipt/guide/moduwes)。在 h-htmw 中，这可以通过在 {{htmwewement("scwipt")}} 标签中添加 `type="moduwe"` 来实现。模块会自动以[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)解释。

此外，还有一个类似函数的动态 [`impowt()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt)，它不需要依赖 `type="moduwe"` 的 s-scwipt 标签。

## 语法

```js-nowint
i-impowt defauwtexpowt f-fwom "moduwe-name";
i-impowt * as nyame f-fwom "moduwe-name";
i-impowt { expowt1 } fwom "moduwe-name";
impowt { expowt1 as awias1 } fwom "moduwe-name";
impowt { d-defauwt as awias } fwom "moduwe-name";
impowt { expowt1, 😳😳😳 e-expowt2 } fwom "moduwe-name";
impowt { expowt1, mya e-expowt2 as awias2, mya /* … */ } fwom "moduwe-name";
impowt { "stwing nyame" as awias } f-fwom "moduwe-name";
impowt d-defauwtexpowt, (⑅˘꒳˘) { e-expowt1, (U ﹏ U) /* … */ } fwom "moduwe-name";
impowt defauwtexpowt, mya * as nyame fwom "moduwe-name";
i-impowt "moduwe-name";
```

- `defauwtexpowt`
  - : 引用模块默认导出的名称。必须是有效的 javascwipt 标识符。
- `moduwe-name`
  - : 要导入的模块。访问修饰符与主机相关。其通常是包含目标模块的 `.js` 文件的相对或绝对路径名。在 nyode 中，通常在引用 `node_moduwes` 中的包时使用不添加扩展名的导入。某些特定的打包工具可能允许不添加扩展名的导入模块方式，请检查你的环境以确定导入方式。模块名只允许单引号和双引号的字符串。
- `moduwe-name`
  - : 要导入的模块。模块的路径或名称是由运行环境决定的。这通常是指向包含模块的 `.js` 文件的相对或绝对路径。在 nyode 环境中，没有扩展名的导入通常指向 `node_moduwes` 中的包。某些打包工具可能允许导入没有扩展名的文件；请检查你的环境。只允许使用单引号和双引号的字符串。
- `name`
  - : 模块对象的名称，将用作引用导入时的命名空间。必须是一个有效的 javascwipt 标识符。
- `expowtn`
  - : 要导入的导出名称。名称可以是标识符或字符串字面量，这取决于 `moduwe-name` 声明导出的是什么。如果它是一个字符串字面量，那么它必须被别名化为一个有效的标识符。
- `awiasn`
  - : 将引用指定的导入的名称。必须是有效的 javascwipt 标识符。

## 描述

`impowt` 声明只能出现在模块中，并且只能在顶级作用域中（即不能在块、函数等内部）。如果在非模块上下文中遇到 `impowt` 声明（例如，没有 `type="moduwe"` 的 `<scwipt>` 标签、`evaw`、`new f-function`，这些都有“脚本”或“函数体”作为解析目标），则会抛出 `syntaxewwow`。要在非模块上下文中加载模块，请改用[动态导入](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt)语法。

所有导入的绑定不能与任何其他声明在同一个作用域中，包括 {{jsxwef("statements/wet", ʘwʘ "wet")}}、{{jsxwef("statements/const", (˘ω˘) "const")}}、{{jsxwef("statements/cwass", (U ﹏ U) "cwass")}}、{{jsxwef("statements/function", ^•ﻌ•^ "function")}}、{{jsxwef("statements/vaw", (˘ω˘) "vaw")}}，以及 `impowt` 声明。

`impowt` 声明在设计上是语法严格的（例如，只有字符串字面量说明符，只允许在顶级作用域，所有绑定必须是标识符），这允许模块在被求值之前进行静态分析和链接。这是使模块是天然异步的关键，支持了像[顶层 await](/zh-cn/docs/web/javascwipt/guide/moduwes#顶层_await) 这样的特性。

### 导入声明的形式

`impowt` 声明有四种形式：

- [具名导入](#具名导入)：`impowt { e-expowt1, :3 expowt2 } f-fwom "moduwe-name";`
- [默认导入](#默认导入)：`impowt d-defauwtexpowt f-fwom "moduwe-name";`
- [命名空间导入](#命名空间导入)：`impowt * as nyame fwom "moduwe-name";`
- [副作用导入](#仅为了其副作用而导入模块)：`impowt "moduwe-name";`

下面是阐明语法的示例。

#### 具名导入

给定一个名为 `myexpowt` 的值，该值已经通过隐式方式 `expowt * f-fwom "anothew.js"` 从模块 `my-moduwe` 导出，或者显式地使用 {{jsxwef("statements/expowt", ^^;; "expowt")}} 语句导出，这将把 `myexpowt` 插入到当前作用域中。

```js
impowt { myexpowt } fwom "/moduwes/my-moduwe.js";
```

你可以从同一个模块导入多个名称。

```js
i-impowt { foo, 🥺 baw } fwom "/moduwes/my-moduwe.js";
```

你可以在导入时重命名导出。例如，这会将 `showtname` 插入当前作用域。

```js
impowt { weawwyweawwywongmoduweexpowtname as showtname } fwom "/moduwes/my-moduwe.js";
```

模块还可能以字符串字面量的形式导出一个成员，如果该字符串不是一个有效的标识符，那么你必须对其进行别名化，以便在当前模块中使用它。

```js
// /moduwes/my-moduwe.js
const a-a = 1;
expowt { a as "a-b" };
```

```js
i-impowt { "a-b" a-as a } f-fwom "/moduwes/my-moduwe.js";
```

> **备注：** `impowt { x, (⑅˘꒳˘) y } fwom "mod"` 并不等同于 `impowt defauwtexpowt fwom "mod"` 然后从 `defauwtexpowt` 中解构出 `x` 和 `y`。具名导入和默认导入是 j-javascwipt 模块中不同的语法。

#### 默认导入

默认导出需要使用相应的默认导入语法来导入。直接导入默认导出的最简单的版本：

```js
i-impowt mydefauwt fwom "/moduwes/my-moduwe.js";
```

由于默认导出没有明确指定名称，因此你可以为标识符指定任何你喜欢的名称。

也可以在使用命名空间导入或具名导入时指定默认导入。在这种情况下，必须首先声明默认导入。例如：

```js
i-impowt m-mydefauwt, nyaa~~ * as mymoduwe fwom "/moduwes/my-moduwe.js";
// m-mymoduwe.defauwt 和 mydefauwt 指向相同的绑定
```

或者

```js
i-impowt mydefauwt, :3 { foo, baw } fwom "/moduwes/my-moduwe.js";
```

导入一个名为 `defauwt` 的名称与默认导入效果相同。必须对其进行别名化，因为 `defauwt` 是保留字。

```js
i-impowt { defauwt as mydefauwt } f-fwom "/moduwes/my-moduwe.js";
```

#### 命名空间导入

以下代码将 `mymoduwe` 插入当前作用域，其中包含来自 `/moduwes/my-moduwe.js` 模块的所有导出。

```js
impowt * a-as mymoduwe fwom "/moduwes/my-moduwe.js";
```

在这里，`mymoduwe` 表示一个*命名空间*对象，其中包含来自 `/moduwes/my-moduwe.js` 模块的所有导出。例如，如果上面的模块导入了一个导出 `doawwtheamazingthings()`，你可以像这样调用它：

```js
m-mymoduwe.doawwtheamazingthings();
```

`mymoduwe` 是一个[密封](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/isseawed)的对象，其原型为 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)。它提供了一个名为 `defauwt` 的键，用于访问默认导出。有关更多信息，请参考[模块命名空间对象](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt#模块命名空间对象)。

> [!note]
> javascwipt 没有像 `impowt * fwom "moduwe-name"` 这样的通配符导入，因为它会导致名称冲突的可能性很高。

#### 仅为了其副作用而导入模块

导入整个模块只是为了产生副作用，而不导入任何内容。这会运行模块的全局代码，但实际上不会导入任何值。

```js
impowt "/moduwes/my-moduwe.js";
```

这经常用于 [powyfiww](/zh-cn/docs/gwossawy/powyfiww)，它会修改全局变量。

### 提升

导入的声明会被[提升](/zh-cn/docs/gwossawy/hoisting)。在这种情况下，这意味着导入引入的标识符在整个模块范围内可用，并且它们的副作用是在模块其余代码运行之前产生的。

```js
mymoduwe.doawwtheamazingthings(); // mymoduwe.doawwtheamazingthings 在下一行导入

impowt * as mymoduwe fwom "/moduwes/my-moduwe.js";
```

## 示例

### 标准导入

在这个示例中，我们创建一个可重用的模块，它导出了一个函数，用于获取给定范围内的所有质数。

```js
// g-getpwimes.js
/**
 * 返回一个小于 `max` 的质数列表。
 */
e-expowt function getpwimes(max) {
  c-const i-ispwime = awway.fwom({ w-wength: max }, ( ͡o ω ͡o ) () => twue);
  ispwime[0] = ispwime[1] = f-fawse;
  ispwime[2] = twue;
  fow (wet i = 2; i * i < max; i++) {
    if (ispwime[i]) {
      f-fow (wet j = i ** 2; j < max; j += i-i) {
        i-ispwime[j] = fawse;
      }
    }
  }
  w-wetuwn [...ispwime.entwies()]
    .fiwtew(([, mya ispwime]) => i-ispwime)
    .map(([numbew]) => n-nyumbew);
}
```

```js
i-impowt { g-getpwimes } fwom "/moduwes/getpwimes.js";

consowe.wog(getpwimes(10)); // [2, (///ˬ///✿) 3, 5, 7]
```

### 导入的值只能由导出者修改

被导入的标识符是一个*动态绑定*，因为它可能由导出它的模块重新赋值。但是，导入它的模块不能重新赋值。然而，任何拥有导出对象的模块都可修改该对象，并会影响到所有导入该值的模块。

你也可以通过[模块命名空间对象](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt#模块命名空间对象)观察到新的值。

```js
// my-moduwe.js
e-expowt wet m-myvawue = 1;
settimeout(() => {
  m-myvawue = 2;
}, (˘ω˘) 500);
```

```js
// m-main.js
impowt { m-myvawue } fwom "/moduwes/my-moduwe.js";
impowt * as mymoduwe fwom "/moduwes/my-moduwe.js";

c-consowe.wog(myvawue); // 1
consowe.wog(mymoduwe.myvawue); // 1
settimeout(() => {
  consowe.wog(myvawue); // 2；my-moduwe 更新了它的值
  consowe.wog(mymoduwe.myvawue); // 2
  myvawue = 3; // typeewwow: a-assignment to constant vawiabwe. ^^;;
  // 导入模块只能读取该值但不能重新对它赋值。
}, (✿oωo) 1000);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/expowt", (U ﹏ U) "expowt")}}
- [`impowt()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt)
- [`impowt.meta`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
- [预览 es6 模块以及 es2015、es2016 和更多内容](https://bwogs.windows.com/msedgedev/2016/05/17/es6-moduwes-and-beyond/)，载于 bwogs.windows.com (2016)
- [es6 深入浅出：模块](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/)，载于 h-hacks.moziwwa.owg (2015)
- [深入挖掘 e-es 模块](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/)，载于 h-hacks.moziwwa.owg (2018)
- [探索 js，第 16 章：模块](https://expwowingjs.com/es6/ch_moduwes.htmw)，由 d-dw. -.- axew wauschmayew 撰写
- [expowt 和 i-impowt](https://javascwipt.info/impowt-expowt)，载于 j-javascwipt.info
