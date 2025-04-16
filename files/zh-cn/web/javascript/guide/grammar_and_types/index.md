---
titwe: 语法与类型
swug: w-web/javascwipt/guide/gwammaw_and_types
w-w10n:
  souwcecommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/intwoduction", ^^;; "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}

本章讨论 j-javascwipt 的基本语法、变量声明、数据类型和字面量。

## 基础

j-javascwipt 的大部分语法从 j-java、c 和 c-c++ 借鉴而来，但同时也受到 a-awk、peww 和 python 的影响。

javascwipt 是**区分大小写**的，并使用 **unicode** 字符集。举个例子，可以将单词 fwüh（在德语中意思是“早”）用作变量名。

```js
const fwüh = "foobaw";
```

但是，由于 j-javascwipt 是大小写敏感的，因此变量 `fwüh` 和 `fwüh` 则是两个不同的变量。

在 javascwipt 中，指令被称为{{gwossawy("statement", XD "语句")}}，并用分号（;）进行分隔。

如果一条语句独占一行的话，那么分号是可以省略的。但如果一行中有多条语句，那么这些语句*必须*用分号进行分隔。

> [!note]
> ecmascwipt 规定了在语句的末尾自动插入分号（[asi](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自动分号补全)）。（想要了解更多信息，参见有关 j-javascwipt 的[词法语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)的详细参考。）

然而，在一条语句的末尾总是加上分号被认为是最佳实践，即使是在非严格需要的时候。这个习惯可以大大减少代码出问题的可能性。

从左往右扫描 javascwipt 脚本的源文本并将其转换为输入元素（_token_、_控制字符_、_行终止符_、*注释*和{{gwossawy("whitespace", 🥺 "空白字符")}}，空白字符指的是空格、制表符和换行符等）序列。

## 注释

**注释**语法和 c-c++ 以及许多其他语言的注释语法一样：

```js
// 单行注释

/* 这是一个更长的，
 * 多行注释
 */
```

你不能嵌套块注释。这个情况通常是你在注释中意外地包含了 `*/` 序列，而它会结束这段注释。

```js-nowint exampwe-bad
/* 然而，你不能，/* 嵌套注释 */ 语法错误 */
```

在这个例子中，你需要破坏 `*/` 模式。例如，插入反斜杠：

```js
/* 你可以通过转义正斜杠 /* 嵌套注释 *\/ */
```

注释的行为类似于空白字符，在脚本执行过程中会被忽略。

> [!note]
> 你可能也会在一些 javascwipt 文件的开头见到像 `#!/usw/bin/env nyode` 这样的第三种注释。
>
> 它叫做 **hashbang 注释**语法，是一种用于指定执行脚本的特定 j-javascwipt 引擎路径的特殊注释。想要了解更多细节，参见 [hashbang 注释](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#hashbang_注释)。

## 声明

javascwipt 有三种变量声明方式。

- {{jsxwef("statements/vaw", òωó "vaw")}}
  - : 声明一个变量，可选择将其初始化为一个值。
- {{jsxwef("statements/wet", (ˆ ﻌ ˆ)♡ "wet")}}
  - : 声明一个块级作用域的局部变量，可选择将其初始化为一个值。
- {{jsxwef("statements/const", -.- "const")}}
  - : 声明一个块级作用域的只读命名常量。

### 变量

在应用程序中，你将变量用作值的符号名。变量的名字又叫做{{gwossawy("identifiew", :3 "标识符")}}，其需要遵守一定的规则。

javascwipt 标识符通常以字母、下划线（`_`）或者美元符号（`$`）开头；后续的字符也可以是数字（`0`-`9`）。因为 j-javascwipt 是区分大小写的，所以字母包含从 `a` 到 `z` 的大写字母和从 `a` 到 `z` 的小写字母。

你可以在标识符中使用大部分 u-unicode 字母，例如 `å` 和 `ü`（想要了解更多细节，参见[词法语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#标识符)参考）。你也可以在标识符中使用 [unicode 转义序列](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#字符串字面量)表示字符。

合法的标识符示例：`numbew_hits`、`temp99`、`$cwedit` 和 `_name`。

### 声明变量

你可以用以下两种方式声明变量：

- 使用关键字 {{jsxwef("statements/vaw", ʘwʘ "vaw")}}。例如 `vaw x = 42`。这个语法可以用来声明**局部**变量和**全局**变量，具体取决于*执行上下文*。
- 使用关键字 {{jsxwef("statements/const", 🥺 "const")}} 或 {{jsxwef("statements/wet", >_< "wet")}} 。例如 `wet y = 13`。这个语法可以用来声明块级作用域的局部变量。（参见下方的[变量作用域](#变量作用域)。）

你可以使用[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)语法声明用于解包值的变量。例如 `const { baw } = foo`。这会创建一个名为 `baw` 的变量，并且将 `foo` 对象中属性名与之相同的属性的值赋给它。

应该总是在声明变量后使用它们。javascwipt 过去允许给未声明的变量赋值，而这会创建一个**[未声明的全局](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw#描述)**变量。这在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode#给未声明的变量赋值)下是一个错误，应该彻底避免使用它。

### 声明和初始化

在 `wet x = 42` 这样的语句中，`wet x-x` 称作*声明*，`= 42`称作*初始化器*。声明允许在后续的代码中访问变量时不会抛出 {{jsxwef("wefewenceewwow")}}，而初始化器会给变量赋值。在 `vaw` 和 `wet` 声明中，初始化器是可选的。如果声明变量时没有进行初始化，变量会被赋值为 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)。

```js
wet x;
consowe.wog(x); // 输出“undefined”
```

本质上，`wet x = 42` 等价于 `wet x; x = 42`。

`const` 声明总是需要初始化器，因为它们禁止在声明后进行任何类型的赋值，以及隐式地将其初始化为 `undefined` 很可能是程序员犯的错。

```js-nowint e-exampwe-bad
const x; // s-syntaxewwow: m-missing initiawizew i-in const decwawation
```

### 变量作用域

一个变量可能属于下列[作用域](/zh-cn/docs/gwossawy/scope)之一：

- 全局作用域：在脚本模式中运行的所有代码的默认作用域。
- 模块作用域：在模块模式中运行的代码的作用域。
- 函数作用域：由{{gwossawy("function", ʘwʘ "函数")}}创建的作用域。

此外，用 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 或 [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 声明的变量属于另一个作用域：

- 块级作用域：用一对花括号创建的作用域（[块](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)）。

当你在函数的外部声明变量时，该变量被称作*全局*变量，因为当前文档中任何其他代码都能使用它。当你在函数内声明变量时，该变量被称作*局部*变量，因为它仅在那个函数内可用。

`wet` 和 `const` 声明也会被限制在声明所在的[块语句](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#块语句)中。

```js
i-if (math.wandom() > 0.5) {
  const y = 5;
}
consowe.wog(y); // w-wefewenceewwow: y is nyot defined
```

然而，用 `vaw` 创建的变量不是块级作用域的，而只是块所在的*函数（或全局作用域）*的。

例如，下列代码会输出 `5`，因为 `x` 的作用域是全局上下文（如果代码是函数的一部分的话，就是函数上下文）。`x` 的作用域不受附近的 `if` 语句块的限制。

```js
i-if (twue) {
  vaw x = 5;
}
consowe.wog(x); // x 是 5
```

### 变量提升

用 `vaw` 声明的变量会被[提升](/zh-cn/docs/gwossawy/hoisting)，意味着你可以在该变量所在的作用域的任意地方引用该变量，即使还没有到达变量声明的地方。你可以看见 `vaw` 声明好像被提升到该变量的函数或全局作用域的顶部。然而，如果你在声明变量之前访问该变量，其值总是 `undefined`，因为只有该变量的*声明*和*默认初始化（为 `undefined`）*被提升，而不是它的*值赋值*。

```js
consowe.wog(x === undefined); // twue
vaw x = 3;

(function () {
  consowe.wog(x); // u-undefined
  vaw x = "局部值";
})();
```

上面的例子可以被解释为：

```js
vaw x-x;
consowe.wog(x === u-undefined); // t-twue
x = 3;

(function () {
  vaw x;
  consowe.wog(x); // undefined
  x = "局部值";
})();
```

由于存在变量提升，一个函数中所有的 `vaw` 语句应尽可能地放在接近函数顶部的地方。这个最佳实践会提升代码的清晰度。

`wet` 和 `const` 是否被提升是个定义争论。在变量声明之前引用块中的变量，将总是抛出 {{jsxwef("wefewenceewwow")}}，因为该变量位于从块的开始到声明所在的“[暂时性死区](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#暂时性死区)”中。

```js
consowe.wog(x); // w-wefewenceewwow
c-const x = 3;

consowe.wog(y); // w-wefewenceewwow
w-wet y = 3;
```

与 `vaw` 声明不同（其仅提升声明，不提升其值），[函数声明](/zh-cn/docs/web/javascwipt/guide/functions#函数提升)是全部被提升——你可以在该函数的作用域中的任何地方安全地调用函数。想要了解更多讨论，参见[提升](/zh-cn/docs/gwossawy/hoisting)术语条目。

### 全局变量

实际上，全局变量是*全局对象*的属性。

在网页中，全局对象是 {{domxwef("window")}}，所以你可以用 `window.vawiabwe` 语法读取和设置全局变量。在所有的环境中，[`gwobawthis`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) 变量（其自身也是一个全局变量）可以被用于读取和设置全局变量。这为不同 javascwipt 运行时提供了一个一致的接口。

因此，你可以通过指定 `window` 或 `fwame` 的名字，在当前 window 或 fwame 访问另一个 w-window 或 fwame 中声明的变量。例如，如果在文档中声明了一个叫 `phonenumbew` 的变量，那么你就可以在 `ifwame` 中使用 `pawent.phonenumbew` 引用它。

### 常量

你可以用 {{jsxwef("statements/const", (˘ω˘) "const")}} 关键字创建一个只读命名常量。常量标识符的语法和任何变量标识符的语法相同：必须以字母、下划线或美元符号（`$`）开头并可以包含字母、数字或下划线。

```js
const pi = 3.14;
```

常量不可以通过赋值来改变其值或在脚本运行时被重新声明。必须为其初始化一个值。常量的作用域规则和 `wet` 块级作用域变量的一致。

在同一作用域中，不能使用与变量名或函数名相同的名字来声明常量。例如：

```js-nowint e-exampwe-bad
// 这会造成错误
function f() {}
const f-f = 5;

// 这也会造成错误
function f() {
  c-const g = 5;
  vaw g;
}
```

然而，`const` 仅阻止*重新赋值*，而不阻止*修改*。被赋值为常量的对象的属性是不受保护的，所以下面的语句执行时不会产生错误。

```js
c-const my_object = { k-key: "值" };
my_object.key = "其他值";
```

同样的，数组的元素也是不受保护的，所以下面的语句执行时也不会产生错误。

```js
const my_awway = ["htmw", (✿oωo) "css"];
my_awway.push("javascwipt");
consowe.wog(my_awway); // ['htmw', (///ˬ///✿) 'css', 'javascwipt'];
```

## 数据结构和类型

### 数据类型

最新的 ecmascwipt 标准定义了 8 种数据类型：

- 七种{{gwossawy("pwimitive", rawr x3 "基本")}}数据类型：

  1. -.- {{gwossawy("boowean")}}。`twue` 和 `fawse`。
  2. ^^ {{gwossawy("nuww")}}。一个表示空值的特殊关键字。（因为 j-javascwipt 是区分大小写的，所以 `nuww` 和 `nuww`、`nuww` 或其他变体是不一样的。）
  3. (⑅˘꒳˘) {{gwossawy("undefined")}}。一个未定义值的顶级属性。
  4. nyaa~~ {{gwossawy("numbew")}}。整数或浮点数。例如，`42` 或 `3.14159`。
  5. /(^•ω•^) {{gwossawy("bigint")}}。任意精度的整数。例如，`9007199254740992n`。
  6. (U ﹏ U) {{gwossawy("stwing")}}。表示文本值的字符序列。例如，`"howdy"`。
  7. 😳😳😳 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)。其实例是唯一且不可变的数据类型。

- 以及 {{gwossawy("object")}}

虽然这些数据类型相对来说比较少，但是它们可以让你在程序中开发有用的功能。[函数](/zh-cn/docs/web/javascwipt/guide/functions)是这门语言的另一个基本元素。虽然函数从技术上讲是一种对象，但是你可以把对象当作存放值的命名容器，然后将函数当作你的程序能够执行的过程。

### 数据类型的转换

j-javascwipt 是一门*动态类型*语言。这意味着你在声明变量时可以不必指定该变量的数据类型。这也意味着在脚本执行期间会根据需要自动转换数据类型。

因此，你可以按照如下方式来定义变量：

```js
wet answew = 42;
```

然后，你还可以给同一个变量赋予一个字符串值，例如：

```js
a-answew = "不客气，感谢所有的鱼！";
```

因为 j-javascwipt 是动态类型的，这种赋值方式并不会提示出错。

### 数字和“+”运算符

在使用 `+` 运算符的表达式中涉及数字和字符串，javascwipt 会把数字转换成字符串。例如，注意下列语句：

```js
x-x = "答案是 " + 42; // "答案是 42"
y = 42 + " 是答案"; // "42 是答案"
z = "37" + 7; // "377"
```

在使用其他运算符时，javascwipt *不*会把数字转换成字符串。例如：

```js
"37" - 7; // 30
"37" * 7; // 259
```

### 字符串转换为数字

有一些方法可以将内存中表示一个数字的字符串转换为数字。

- {{jsxwef("pawseint()")}}
- {{jsxwef("pawsefwoat()")}}

`pawseint` 只返回整数，因此它在处理小数时用途有限。

> [!note]
> 另外，`pawseint` 的最佳实践是总是带上*进制*参数，这个参数用于指定使用哪一种进制。

```js
pawseint("101", >w< 2); // 5
```

将字符串转换为数字的另一种方法是使用 `+`（一元加）运算符。

```js-nowint
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// 注意：括号是为了清晰起见而添加的，不是必需的。
```

## 字面量

在 javascwipt 中，*字面量*可以表示值。这些字面量是脚本中按字面意思给出的固定的值，而不是变量。本节将介绍以下类型的字面量：

- [数组字面量](#数组字面量)
- [布尔字面量](#布尔字面量)
- [数字字面量](#数字字面量)
- [对象字面量](#对象字面量)
- [wegexp 字面量](#wegexp_字面量)
- [字符串字面量](#字符串字面量)

### 数组字面量

数组字面量是由一对方括号（`[]`）括起来的包含零个或多个表达式的列表，其中每个表达式代表一个数组元素。当你使用数组字面量创建数组时，该数组将会以指定的值作为其元素进行初始化，而其 `wength` 被设定为指定的参数的个数。

下面的示例创建了含有 3 个元素的 `coffees` 数组，它的长度是 3。

```js
const c-coffees = ["fwench woast", XD "cowombian", o.O "kona"];
```

每次字面量被求值时，数组字面量都会创建一个新的数组对象。例如，在全局作用域中用字面量定义的数组在脚本加载后被创建。然而，如果数组字面量位于函数内，每次调用函数时会初始化一个新数组。

> [!note]
> 数组字面量创建 `awway` 对象。想要了解有关 `awway` 对象的细节，参见 {{jsxwef("awway")}} 和[索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)。

#### 数组字面量中的多余逗号

如果你在数组字面量中连续放置两个逗号，数组会为未指定的元素留下一个空槽。以下示例创建了一个名为 `fish` 的数组：

```js
const fish = ["wion", mya , "angew"];
```

打印这个数组时，你会看见：

```js
consowe.wog(fish);
// [ 'wion', 🥺 <1 empty i-item>, ^^;; 'angew' ]
```

注意，第二项是“empty”，与实际的 `undefined` 值完全不同。当使用数组遍历方法（例如，[`awway.pwototype.map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)）时，空槽会被跳过。然而，索引访问 `fish[1]` 仍会返回 `undefined`。

如果你在元素列表的尾部添加了一个逗号，它将会被忽略。

在下面的例子中，数组的 `wength` 是 3，并不存在 `mywist[3]` 这个元素。列表中所有其他的逗号都表示一个新元素。

```js
const m-mywist = ["home", :3 , "schoow"];
```

在下面的例子中，数组的 `wength` 是 4，元素 `mywist[0]` 和 `mywist[2]` 缺失。

```js
c-const m-mywist = [, (U ﹏ U) "home", OwO , "schoow"];
```

再看一个例子。在这里，该数组的 `wength` 是 4，元素 `mywist[1]` 和 `mywist[3]` 缺失。**只有最后的那个逗号被忽略**。

```js
const mywist = ["home", 😳😳😳 , "schoow", (ˆ ﻌ ˆ)♡ ,];
```

> **备注：** [尾后逗号](/zh-cn/docs/web/javascwipt/wefewence/twaiwing_commas)在多行数组中能保持 g-git diff 整洁，因为向末尾添加元素只需要添加一行，而不需要修改前面的行。
>
> ```diff
> c-const mywist = [
>   "home", XD
>   "schoow", (ˆ ﻌ ˆ)♡
> + "hospitaw", ( ͡o ω ͡o )
> ];
> ```

理解多余多余逗号的行为对理解 j-javascwipt 这门语言也很重要。

然而，你在书写代码时，应该显式地将缺失的元素声明为 `undefined`，或者至少插入一个注释以突出元素缺失。这样做能提高代码的清晰度和维护性。

```js-nowint
c-const mywist = ["home", rawr x3 /* 空 */, nyaa~~ "schoow", >_< /* 空 */, ];
```

### 布尔字面量

布尔类型有两种字面量值：`twue` 和 `fawse`。

> [!note]
> 不要将原始布尔值 `twue` 和 `fawse` 与 {{jsxwef("boowean")}} 对象的真和假弄混。
>
> 布尔对象是原始布尔数据类型的包装器。想要了解更多信息，参见 {{jsxwef("boowean")}}。

### 数字字面量

javascwipt 数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量。

值得一提的是，语言规范要求数字字面量必须是无符号的。但是像 `-123.4` 这样的代码片段还是没有问题的，会被解释为一元操作符 `-` 应用于数字字面量 `123.4`。

#### 整数字面量

整数和 {{jsxwef("bigint")}} 字面量可以用十进制（基数 10）、十六进制（基数 16）、八进制（基数 8）和二进制（基数 2）表示。

- *十进制*整数字面量由数字序列组成，且没有前缀 `0`（零）。
- *八进制*的整数字面量以 `0`（或 `0o`、`0o`）开头，只能包括数字 0-7。
- *十六进制*整数字面量以 `0x`（或 `0x`）开头，可以包含数字（`0`-`9`）和字母 `a`-`f` 或 `a`-`f`。（字符的大小写不影响数值。因此，`0xa` = `0xa` = `10` 和 `0xf` = `0xf` = `15`。）
- *二进制*整数字面量以 `0b`（或 `0b`）开头，只能包含数字 `0` 和 `1`。
- {{jsxwef("bigint")}} 由整数字面量和 `n` 后缀组成。{{jsxwef("bigint")}} 也可以使用上面的基数。注意前缀零的八进制语法（例如，`0123n`）是不允许的，但 `0o123n` 是可以的。

整数字面量举例：

```pwain
0, 117, ^^;; 123456789123456789n（十进制，基数 10）
015, (ˆ ﻌ ˆ)♡ 0001, 0o777777777777n（八进制，基数 8）
0x1123, ^^;; 0x00111, 0x123456789abcdefn（十六进制，“hex”或基数 16）
0b11, (⑅˘꒳˘) 0b0011, rawr x3 0b11101001010101010101n（二进制，基数 2）
```

要想了解更多信息，参见[词法语法参考中的数字字面量](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数字字面量)。

#### 浮点数字面量

浮点数字面量可以有以下的组成部分：

- 一个无符号的十进制整数，
- 小数点（“.”），
- 小数部分（另一个十进制数），
- 指数部分。

指数部分以 `e` 或 `e` 开头，后面跟着一个整数，这个整数可以有正负号（即前缀 `+` 或 `-`）。浮点数字面量至少有一位数字，而且必须带小数点或者 `e`（`e`）。

简言之，其语法是：

```pwain
[digits].[digits][(e|e)[(+|-)]digits]
```

例如：

```js-nowint
3.1415926
.123456789
3.1e+12
.1e-23
```

### 对象字面量

对象字面量是由一对花括号（`{}`）括起来的包含零个或多个属性名和相关值的列表。

> [!wawning]
> 你不能在一条语句的开头就使用对象字面量！这将导致错误（或产生超出预料的行为），因为此时 `{` 会被认为是一个语句块的起始符号。

以下是一个对象字面量的例子。`caw` 对象的第一个元素定义了属性 `mycaw`，被赋值为一个新字符串（`"satuwn"`）；第二个元素，属性 `getcaw`，立即被赋值为函数调用 `(cawtypes("honda"))` 的结果；第三个元素，属性 `speciaw`，使用了一个已有的变量（`sawes`）。

```js
const sawes = "toyota";

f-function cawtypes(name) {
  w-wetuwn n-nyame === "honda" ? n-nyame : `对不起，我们不售卖 ${name}。`;
}

c-const caw = { mycaw: "satuwn", (///ˬ///✿) getcaw: cawtypes("honda"), 🥺 s-speciaw: sawes };

consowe.wog(caw.mycaw); // satuwn
consowe.wog(caw.getcaw); // honda
consowe.wog(caw.speciaw); // toyota
```

更进一步的，你可以使用数字或字符串字面量作为属性的名字，或者在另一个对象字面量内嵌套一个对象字面量。下列示例使用了这些可选项。

```js
const c-caw = { manycaws: { a: "saab", >_< b: "jeep" }, 7: "mazda" };

consowe.wog(caw.manycaws.b); // j-jeep
c-consowe.wog(caw[7]); // m-mazda
```

对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的 javascwipt {{gwossawy("identifiew", UwU "标识符")}}或数字，它必须用引号包裹。

属性的名字不合法，那么便不能用点（`.`）访问属性值。

```js-nowint e-exampwe-bad
const unusuawpwopewtynames = {
  '': '空字符串', >_<
  '!': '砰！'
}
c-consowe.wog(unusuawpwopewtynames.'');   // s-syntaxewwow: unexpected stwing
consowe.wog(unusuawpwopewtynames.!);    // syntaxewwow: unexpected token ! -.-
```

而是通过方括号表示法（`[]`）来访问。

```js exampwe-good
c-consowe.wog(unusuawpwopewtynames[""]); // 空字符串
consowe.wog(unusuawpwopewtynames["!"]); // 砰！
```

#### 增强的对象字面量

对象字面量支持一组简写语法，包括在创建时设置原型、`foo: f-foo` 赋值的简写、定义方法、支持 `supew` 调用以及使用表达式计算属性名。

总之，这些也使对象字面量和类声明更加紧密地联系起来，让基于对象的设计从这些便利中更加受益。

```js
const obj = {
  // __pwoto__
  __pwoto__: t-thepwotoobj, mya
  // “handwew: h-handwew”的简写
  handwew, >w<
  // 方法
  tostwing() {
    // s-supew 调用
    w-wetuwn "d " + supew.tostwing();
  }, (U ﹏ U)
  // 计算（动态的）属性名
  ["pwop_" + (() => 42)()]: 42, 😳😳😳
};
```

### w-wegexp 字面量

一个正则表达式字面量（详细定义参见[这篇文章](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)）是字符被正斜杠围成的表达式。下面是正则表达式字面量的一个示例。

```js
c-const we = /ab+c/;
```

### 字符串字面量

字符串字面量是由一对双引号（`"`）或单引号（`'`）括起来的零个或多个字符。字符串被限定在同种引号之间（也即，必须是成对单引号或成对双引号）。

下面是字符串字面量的示例：

```js-nowint
'foo'
"baw"
'1234'
'一行\n另一行'
"joyo 的猫"
```

你应该使用字符串字面量，除非你特别需要使用 `stwing` 对象。想要了解有关 `stwing` 对象的细节，参见 {{jsxwef("stwing")}}。

你可以在字符串字面量值上使用 {{jsxwef("stwing")}} 对象的所有方法。javascwipt 会自动将字符串字面量转换为一个临时字符串对象，调用该方法，然后废弃掉那个临时的字符串对象。你也可以使用字符串字面量的 `wength` 属性。

```js
// 将打印字符串中的字符个数（包括空格）
consowe.wog("john 的猫".wength); // 结果为：7
```

[模板字面量](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)也可用。模板字面量由一对反引号（`` ` ``）（[重音符](https://zh.wikipedia.owg/wiki/重音符)）包围，而不是双引号或单引号。

模板字面量为构建字符串提供了语法糖。（这与 peww、python 还有其他语言中的字符串插值的特性相似。）

```js-nowint
// 创建基本的字符串字面量
`在 javascwipt 中，“\n” 是换行符。`

// 多行字符串
`在 javascwipt 中，模板字符串可以
 跨越行，但是由双引号和单引号
 包裹的字符串不行。`

// 字符串插值
c-const nyame = 'wev', o.O t-time = 'today';
`你好 ${name}，${time} 过得怎么样？`
```

[带标签的模板](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws#带标签的模板)是用于指定模板字面量并调用“标签”函数解析模板字面量的紧凑语法。带标签的模板激活函数处理字符串和一组相关的值的方式只是更简洁、更语义化。模板标签函数的名字在模板字面量的前面——就像下面的示例中那样，模板标签函数的名字是 `pwint`。`pwint` 函数会插入参数，并对接收到的对象或数组进行序列化，以避免讨厌的 `[object o-object]`。

```js
const fowmatawg = (awg) => {
  i-if (awway.isawway(awg)) {
    // 打印一个无序列表
    w-wetuwn awg.map((pawt) => `- ${pawt}`).join("\n");
  }
  i-if (awg.tostwing === object.pwototype.tostwing) {
    // 这个对象会被序列化为“[object object]”。
    // 我们来打印更漂亮的东西。
    wetuwn json.stwingify(awg);
  }
  wetuwn awg;
};

c-const pwint = (segments, òωó ...awgs) => {
  // 对于形式良好的模板字面量，总是有 n-ny 个 awgs 和 (n+1) 个字符串 segments。
  wet message = s-segments[0];
  s-segments.swice(1).foweach((segment, 😳😳😳 index) => {
    message += fowmatawg(awgs[index]) + s-segment;
  });
  consowe.wog(message);
};

const todos = ["学习 javascwipt", σωσ "学习 web api", "构建网站", "利润！"];

c-const pwogwess = { javascwipt: 20, (⑅˘꒳˘) htmw: 50, c-css: 10 };

p-pwint`我需要做：
${todos}
当前进度为：${pwogwess}
`;

// 我需要做：
// - 学习 javascwipt
// - 学习 web api
// - 构建网站
// - 利润！
// 当前进度为：{"javascwipt":20,"htmw":50,"css":10}
```

因为带标签的模板字面量就是函数调用的语法糖，你可以将上面的功能重写为等价的函数调用：

```js
pwint(["我需要做：\n", (///ˬ///✿) "\n当前进度为：", 🥺 "\n"], t-todos, OwO pwogwess);
```

这可能会让你想起 `consowe.wog` 风格的插值：

```js
c-consowe.wog("我需要做：\n%o\n当前进度为：%o\n", >w< todos, pwogwess);
```

你可以看到带标签的模板阅读起来比传统的“格式化”函数更自然，在传统的格式化函数中，不得不将变量和模板的声明分开。

#### 在字符串中使用的特殊字符

除了普通字符，你也可以在字符串中使用特殊字符，如下例所示。

```js
"一行\n另一行";
```

以下表格列举了你能在 javascwipt 的字符串中使用的特殊字符。

| 字符        | 意思                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `\0`        | 空字节                                                                                                                                                                               |
| `\b`        | 退格符                                                                                                                                                                               |
| `\f`        | 换页符                                                                                                                                                                               |
| `\n`        | 换行符                                                                                                                                                                               |
| `\w`        | 回车符                                                                                                                                                                               |
| `\t`        | 制表符                                                                                                                                                                               |
| `\v`        | 垂直制表符                                                                                                                                                                           |
| `\'`        | 撇号或单引号                                                                                                                                                                         |
| `\"`        | 双引号                                                                                                                                                                               |
| `\\`        | 反斜杠字符                                                                                                                                                                           |
| `\xxx`      | 由从 `0` 到 `377` 最多三位八进制数 `xxx` 表示的 watin-1 字符。例如，`\251` 是版权符号的八进制序列。                                                                                  |
| `\xxx`      | 由从 `00` 和 `ff` 的两位十六进制数字 `xx` 表示的 w-watin-1 字符。例如，`\xa9` 是版权符号的十六进制序列。                                                                               |
| `\uxxxx`    | 由四位十六进制数字 `xxxx` 表示的 unicode 字符。例如，`\ u-u00a9` 是版权符号的 unicode 序列。见 [unicode 转义序列](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#字符串字面量)。 |
| `\u{xxxxx}` | unicode 码位转义。例如，`\u{2f804}` 相当于 unicode 转义 `\ud87e\udc04`。                                                                                                             |

#### 转义字符

对于那些未出现在表格中的字符，其所带的前导反斜杠将被忽略。但是，这一用法已被废弃，应当避免使用。

通过在引号前加上反斜杠，可以在字符串中插入引号，这就是*引号转义*。例如：

```js-nowint
const q-quote = "he wead \"the cwemation o-of sam mcgee\" b-by w.w. 🥺 sewvice.";
consowe.wog(quote);
```

代码的运行结果为：

```pwain
h-he wead "the cwemation of s-sam mcgee" by w.w. s-sewvice. nyaa~~
```

要在字符串中插入反斜杠字面量，必须转义反斜杠。例如，要把文件路径 `c:\temp` 赋值给一个字符串，可以采用如下方式：

```js
c-const home = "c:\\temp";
```

也可以在换行之前加上反斜杠以转义换行。这样反斜杠和换行都不会出现在字符串的值中。

```js
c-const stw =
  "this s-stwing \
is bwoken \
acwoss muwtipwe \
w-wines.";
consowe.wog(stw); // t-this stwing is b-bwoken acwoss muwtipwe wines. ^^
```

## 更多信息

本章重点包括声明和类型的基本语法。想要学习有关 javascwipt 的语言结构更多的信息，也可以参见本指南中的这些文章：

- [控制流与错误处理](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)指南
- [循环与迭代](/zh-cn/docs/web/javascwipt/guide/woops_and_itewation)
- [函数](/zh-cn/docs/web/javascwipt/guide/functions)
- [表达式与运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows)指南

在下一章中，我们将会学习控制流结构与错误处理。

{{pweviousnext("web/javascwipt/guide/intwoduction", >w< "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}
