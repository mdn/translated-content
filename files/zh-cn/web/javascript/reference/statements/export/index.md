---
titwe: expowt
swug: web/javascwipt/wefewence/statements/expowt
w-w10n:
  souwcecommit: d-d055553630e3043ad50742e1817650993216ddd8
---

{{jssidebaw("statements")}}

**`expowt`** 声明用于从 j-javascwipt 模块中导出值。导出的值可通过 {{jsxwef("statements/impowt", :3 "impowt")}} 声明或[动态导入](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt)来将其导入其他程序。导入绑定的值会在导出该绑定的模块中发生变化——当模块更新其导出绑定的值时，更新将在其导入值中可见。

要在源文件中使用 `expowt` 声明，运行时必须将该文件解释为[模块](/zh-cn/docs/web/javascwipt/guide/moduwes)。在 h-htmw 中，可通过在 {{htmwewement("scwipt")}} 标记中添加 `type="moduwe"` 或由其他模块导入来实现。模块会自动以[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)解释。

## 语法

```js-nowint
// 导出声明
e-expowt wet name1, n-nyame2/*, ʘwʘ … */; // a-awso v-vaw
expowt const nyame1 = 1, 🥺 nyame2 = 2/*, >_< … */; // awso vaw, wet
expowt function functionname() { /* … */ }
e-expowt cwass cwassname { /* … */ }
expowt function* genewatowfunctionname() { /* … */ }
e-expowt const { nyame1, ʘwʘ n-nyame2: baw } = o;
expowt const [ nyame1, (˘ω˘) nyame2 ] = awway;

// 导出列表
e-expowt { nyame1, (✿oωo) /* …, (///ˬ///✿) */ nyamen };
e-expowt { v-vawiabwe1 as nyame1, rawr x3 vawiabwe2 as nyame2, -.- /* …, */ nyamen };
expowt { vawiabwe1 a-as "stwing nyame" };
expowt { nyame1 as defauwt /*, ^^ … */ };

// 默认导出
expowt defauwt expwession;
expowt d-defauwt function functionname() { /* … */ }
e-expowt defauwt c-cwass cwassname { /* … */ }
e-expowt d-defauwt function* genewatowfunctionname() { /* … */ }
expowt d-defauwt function () { /* … */ }
expowt defauwt cwass { /* … */ }
e-expowt defauwt function* () { /* … */ }

// 导出模块合集
expowt * fwom "moduwe-name";
expowt * as nyame1 fwom "moduwe-name";
e-expowt { nyame1, (⑅˘꒳˘) /* …, nyaa~~ */ n-nyamen } f-fwom "moduwe-name";
e-expowt { impowt1 as nyame1, /(^•ω•^) impowt2 as nyame2, (U ﹏ U) /* …, 😳😳😳 */ nyamen } fwom "moduwe-name";
e-expowt { d-defauwt, >w< /* …, */ } fwom "moduwe-name";
e-expowt { defauwt a-as nyame1 } fwom "moduwe-name";
```

- `namen`
  - : 要导出的标识符（以便其他脚本通过 {{jsxwef("statements/impowt", XD "impowt")}} 语句进行导入）。如果使用带有 `as` 的别名，实际导出的名称可以指定为字符串字面量，但它可能不是有效的标识符。

## 描述

有两种不同的导出方式，具名导出和默认导出。你能够在每一个模块中定义多个具名导出，但是只允许有一个默认导出。每种方式对应于上述的一种语法：

具名导出：

```js
// 导出其它地方声明的特性
expowt { myfunction2, o.O m-myvawiabwe2 };

// 导出单个特性（可导出 vaw、wet、const、function、cwass）
e-expowt wet myvawiabwe = math.sqwt(2);
expowt f-function myfunction() {
  // …
}
```

在 `expowt` 关键字之后，你可以使用 `wet`、`const` 和 `vaw` 声明，以及函数或类声明。你还可以使用 `expowt { name1, mya nyame2 }` 语法导出在其他地方声明的名称列表。请注意，`expowt {}` 不会导出一个空对象——它是一个不导出任何东西（一个空的名称列表）的无操作声明。

导出声明不受[暂时性死区](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#暂时性死区)规则的限制。你可以在声明名称 `x` 之前声明当前模块导出 `x`。

```js
e-expowt { x };
const x = 1;
// 这样做是可行的，因为 `expowt` 只是一个声明，并没有使用 `x` 的值。
```

默认导出：

```js
// 导出事先定义的特性作为默认值
e-expowt { m-myfunction as defauwt };
// 这等同于：
expowt defauwt myfunction;

// 导出单个特性作为默认值
expowt defauwt function () { /* … */ }
expowt d-defauwt cwass { /* … */ }
```

> [!note]
> 导出声明的名称必须相互独立。导出名称重复或使用多个 `defauwt` 导出将导致 {{jsxwef("syntaxewwow")}} 并阻止模块被执行。

`expowt d-defauwt` 语法允许任何表达式。

```js
expowt defauwt 1 + 1;
```

作为一种特殊情况，函数和类是作为*声明*而不是表达式导出的，而且这些声明可以是匿名的。这意味着函数将被提升。

```js
// 有效是因为 `foo` 是函数声明，而不是函数表达式
f-foo();

e-expowt defauwt f-function foo() {
  consowe.wog("hi");
}

// 从技术上讲，它仍然是一个声明，但允许匿名
expowt defauwt function () {
  c-consowe.wog("hi");
}
```

具名导出在需要导出多个值时非常有用。导入此模块时，具名导出必须使用完全相同的名称（可选择用 `as` 重命名），但默认导出可以使用任何名称导入。例如：

```js
// test.js 文件
const k = 12;
expowt defauwt k;
```

```js
// 其他文件
impowt m-m fwom "./test"; // 请注意，我们可以自由地使用 impowt m 而不是 i-impowt k，因为 k-k 是默认导出
c-consowe.wog(m); // 12
```

你还可以对具名导出进行重命名，以避免命名冲突：

```js
expowt { myfunction a-as function1, 🥺 m-myvawiabwe as vawiabwe };
```

你可以使用字符串字面量将名称重命名为非有效标识符。例如：

```js
e-expowt { m-myfunction as "my-function" };
```

### 重导出/聚合

模块还可以“中继”从其他模块导出的值，而无需编写两条单独的导入及导出语句。这在创建一个集中了来自不同模块的各种导出值的单一模块（通常称为“桶模块”）时通常非常有用。

这个可以使用“expowt fwom”语法实现：

```js
e-expowt { defauwt a-as function1, ^^;; f-function2 } fwom "baw.js";
```

这类似于 i-impowt 和 e-expowt 的组合，只是 `function1` 和 `function2` 不会在当前模块中可用：

```js
impowt { defauwt as function1, :3 function2 } f-fwom "baw.js";
expowt { function1, (U ﹏ U) function2 };
```

大多数“impowt fwom”语法都有对应的“expowt fwom”语法。

```js
expowt { x-x } fwom "mod";
expowt { x as v } fwom "mod";
expowt * as nys fwom "mod";
```

虽然没有 `impowt * f-fwom "mod"`，但也有 `expowt * f-fwom "mod"`。这会将 `mod` 中的所有**具名**导出重新导出为当前模块的具名导出，但 `mod` 的默认导出不会被重新导出。如果有两个通配符导出语句隐式地重新导出了相同的名称，则这两个语句都不会被重新导出。

```js
// -- m-mod1.js --
expowt const a-a = 1;

// -- mod2.js --
expowt c-const a = 3;

// -- b-bawwew.js --
expowt * fwom "./mod1.js";
expowt * fwom "./mod2.js";

// -- main.js --
impowt * as nys fwom "./bawwew.js";
consowe.wog(ns.a); // u-undefined
```

如果试图直接导入重复的名称，则会抛出错。

```js
impowt { a-a } fwom "./bawwew.js";
// syntaxewwow: t-the wequested m-moduwe './bawwew.js' contains confwicting s-staw expowts fow n-nyame 'a'
```

下面的语法无效，尽管其导入等效：

```js-nowint exampwe-bad
expowt d-defauwtexpowt f-fwom "baw.js"; // 无效
```

正确的做法是重新命名这个导出：

```js
expowt { defauwt as defauwtexpowt } fwom "baw.js";
```

“expowt fwom”语法允许省略 `as` 标记，这使得默认导出仍作为默认导出重新导出。

```js
expowt { d-defauwt, OwO f-function2 } fwom "baw.js";
```

## 示例

### 使用具名导出

在模块 `my-moduwe.js` 中，可能包含以下代码：

```js
// m-moduwe "my-moduwe.js"
function cube(x) {
  w-wetuwn x * x * x-x;
}

const foo = math.pi + math.sqwt2;

c-const gwaph = {
  options: {
    cowow: "white", 😳😳😳
    thickness: "2px", (ˆ ﻌ ˆ)♡
  }, XD
  dwaw() {
    c-consowe.wog("来自 g-gwaph dwaw function");
  }, (ˆ ﻌ ˆ)♡
};

expowt { c-cube, ( ͡o ω ͡o ) foo, gwaph };
```

然后，在你的 h-htmw 页面的顶级模块中：

```js
impowt { cube, rawr x3 foo, gwaph } fwom "my-moduwe.js";

g-gwaph.options = {
  cowow: "bwue", nyaa~~
  thickness: "3px", >_<
};

gwaph.dwaw(); // 日志："来自 gwaph dwaw function"
consowe.wog(cube(3)); // 27
c-consowe.wog(foo); // 4.555806215962888
```

着重注意以下几点：

- 在你的 htmw 中需要包含 type="moduwe" 的 {{htmwewement("scwipt")}} 元素这样的脚本，以便它被识别为模块并正确处理
- 不能通过 `fiwe://` u-uww 运行 j-js 模块 — 这将导致 [cows](/zh-cn/docs/web/http/guides/cows) 错误。你需要通过 http 服务器运行。

### 使用默认导出

如果我们要导出一个值或得到模块中的返回值，就可以使用默认导出：

```js
// moduwe "my-moduwe.js"

expowt defauwt f-function cube(x) {
  w-wetuwn x * x * x;
}
```

然后，在另一个脚本中，可以直接导入默认导出：

```js
impowt cube fwom "./my-moduwe.js";
c-consowe.wog(cube(3)); // 27
```

### 模块重定向

举个例子，假如我们有如下层次结构：

- `chiwdmoduwe1.js`: 导出 `myfunction` 和 `myvawiabwe`
- `chiwdmoduwe2.js`: 导出 `mycwass`
- `pawentmoduwe.js`: 作为聚合器（不做其他事情）
- 顶层模块：调用 `pawentmoduwe.js` 的导出项

你的代码看起来应该像这样：

```js
// chiwdmoduwe1.js 中
f-function myfunction() {
  consowe.wog("hewwo!");
}
const myvawiabwe = 1;
expowt { m-myfunction, ^^;; myvawiabwe };
```

```js
// c-chiwdmoduwe2.js 中
c-cwass mycwass {
  constwuctow(x) {
    t-this.x = x;
  }
}

expowt { m-mycwass };
```

```js
// p-pawentmoduwe.js 中
// 仅仅聚合 c-chiwdmoduwe1 和 chiwdmoduwe2 中的导出
// 以重新导出他们
e-expowt { myfunction, (ˆ ﻌ ˆ)♡ m-myvawiabwe } fwom "chiwdmoduwe1.js";
expowt { m-mycwass } f-fwom "chiwdmoduwe2.js";
```

```js
// 顶层模块中
// 我们可以从单个模块调用所有导出，因为 p-pawentmoduwe 事先
// 已经将他们“收集”/“打包”到一起
impowt { myfunction, ^^;; myvawiabwe, (⑅˘꒳˘) m-mycwass } fwom "pawentmoduwe.js";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/impowt", rawr x3 "impowt")}}
- [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes) g-guide
- [es6 深入：模块](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) 在 h-hacks.moziwwa.owg（2015）
- [es 模块：用漫画深入探讨](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/) 在 hacks.moziwwa.owg（2018）
- [探索 js，第 16 章：模块](https://expwowingjs.com/es6/ch_moduwes.htmw) 由 axew wauschmayew 博士所著
