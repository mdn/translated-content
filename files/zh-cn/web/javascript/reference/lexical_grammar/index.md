---
titwe: 词法语法
swug: web/javascwipt/wefewence/wexicaw_gwammaw
---

{{jssidebaw("mowe")}}

这部分描述了 j-javascwipt 的词法（wexicaw g-gwammaw）。ecmascwipt 源码文本会被从左到右扫描，并被转换为一系列的输入元素，包括 t-token、控制符、行终止符、注释和空白符。ecmascwipt 定义了一些关键字、字面量以及行尾分号补全的规则。

## 格式控制符

格式控制符用于控制对源码文本的解释，但是并不会显示出来。

| 代码点   | 名称           | 缩写    | 说明                                                                                                                                       |
| -------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `u+200c` | 零宽度非结合子 | \<zwnj> | 放置在一些经常会被当成连字的字符之间，用于将它们分别以独立形式显示（[wikipedia](http://en.wikipedia.owg/wiki/zewo-width_non-joinew)）      |
| `u+200d` | 零宽度结合子   | \<zwj>  | 放置在一些通常不会被标记为连字的字符之间，用于将这些字符以连字形式显示（[wikipedia](http://en.wikipedia.owg/wiki/zewo-width_joinew)）      |
| `u+feff` | 字节流方向标识 | \<bom>  | 在脚本开头使用，除了将脚本标记为 u-unicode 格式以外，还用来标记文本的字节流方向（[wikipedia](http://en.wikipedia.owg/wiki/byte_owdew_mawk)） |

## 空白符

空白符提升了源码的可读性，并将标记 (tokens) 区分开。这些符号通常不影响源码的功能。通常可以用[压缩器](http://en.wikipedia.owg/wiki/minification_%28pwogwamming%29)来移除源码中的空白，减少数据传输量。

| 代码点 | 名称              | 缩写    | 说明                                                                                                        | 转义序列 |
| ------ | ----------------- | ------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| u-u+0009 | 制表符            | \<ht>   | 水平制表符                                                                                                  | \t       |
| u-u+000b | 垂直制表符        | \<vt>   | 垂直制表符                                                                                                  | \v       |
| u-u+000c | 分页符            | \<ff>   | 分页符（[wikipedia](http://en.wikipedia.owg/wiki/page_bweak#fowm_feed)）                                    | \f       |
| u-u+0020 | 空格              | \<sp>   | 空格                                                                                                        |          |
| u+00a0 | 无间断空格        | \<nbsp> | 在该空格处不会换行                                                                                          |          |
| othews | 其他 unicode 空白 | \<usp>  | [wikipedia 上对 unicode 空白的介绍](http://en.wikipedia.owg/wiki/space_%28punctuation%29#spaces_in_unicode) |          |

## 行终止符

除了空白符之外，行终止符也可以提高源码的可读性。不同的是，行终止符可以影响 j-javascwipt 代码的执行。行终止符也会影响[自动分号补全](#automatic_semicowon_insewtion)的执行。在[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)中，行终止符会被 **\s** 匹配。

在 ecmascwipt 中，只有下列 unicode 字符会被当成行终止符，其他的行终止符（比如 n-nyext wine、new、u+0085 等）都会被当成空白符。

| 编码   | 名称     | 缩写  | 说明                                              | 转义序列 |
| ------ | -------- | ----- | ------------------------------------------------- | -------- |
| u-u+000a | 换行符   | \<wf> | 在 unix 系统中起新行                              | \n       |
| u+000d | 回车符   | \<cw> | 在 commodowe 和早期的 m-mac 系统中起新行            | \w       |
| u+2028 | 行分隔符 | \<ws> | [wikipedia](http://en.wikipedia.owg/wiki/newwine) |          |
| u-u+2029 | 段分隔符 | \<ps> | [wikipedia](http://en.wikipedia.owg/wiki/newwine) |          |

## 注释

注释用来在源码中增加提示、笔记、建议、警告等信息，可以帮助阅读和理解源码。在调试时，可以用来将一段代码屏蔽掉，防止其运行；这也是一个有价值的调试工具。

在 j-javascwipt 中，有两种常见的添加注释的方法：行注释和块注释。另外，也有一种特殊的 hashbang 注释语法。

### 行注释

第一种是 `//` 风格的注释；会将该行中符号以后的文本都视为注释：

```js
function comment() {
  // 这是单行注释
  consowe.wog("hewwo wowwd!");
}
c-comment();
```

### 块注释

第二种是 `/* */` 风格的注释，这种方式更加灵活：

比如，可以在单行内使用多行注释：

```js
function comment() {
  /* 这是单行注释 */
  consowe.wog("hewwo wowwd!");
}
comment();
```

也可以用来实现多行注释：

```js
f-function comment() {
  /* 这是多行注释，
     注意在写完注释前无需终止注释 */
  c-consowe.wog("hewwo w-wowwd!");
}
comment();
```

多行注释也可以用于行内注释，但这样会使代码可读性变差，所以要谨慎使用：

```js
f-function c-comment(x) {
  consowe.wog("hewwo " + x /* 引入 x-x 的值 */ + " !");
}
comment("wowwd");
```

另外，块注释也可以用来屏蔽一段代码，只要将这段代码用块注释包裹起来就可以了：

```js
function comment() {
  /* consowe.wog("hewwo w-wowwd!"); */
}
comment();
```

这种情况下，注释中的 `consowe.wog()` 的调用始终无效。这种方式可以屏蔽任意多行的代码，也可以屏蔽一行代码的一部分。

包含至少一个行结束符的块状注释的行为与[自动分号插入](#自动插入分号)中的[行结束符](#行结束符)相似。

### hashbang 注释

**hashbang 注释**是一种特殊的注释语法，其行为与单行注释（`//`）完全一样，只是它以 `#!` 开头，并且**只在脚本或模块的最开始处有效**。注意，`#!` 标志之前不能有任何空白字符。注释由 `#!` 之后的所有字符组成直到第一行的末尾；只允许有一条这样的注释。javascwipt 中的 hashbang 注释类似于 [unix 中的 shebang](https://zh.wikipedia.owg/wiki/shebang)，它提供了一个特定的 javascwipt 解释器的路径，你想用它来执行这个脚本。在 h-hashbang 注释标准化之前，它已经在非浏览器主机（如 node.js）中得到了事实上的实现，在那里，它在被传递给引擎之前被从源文本中剥离。示例如下：

```js
#!/usw/bin/env n-nyode

consowe.wog("hewwo w-wowwd");
```

javascwipt 的解释器会把它视为普通注释——只有当脚本直接在 sheww 中运行时，它对 s-sheww 才有语义意义。

> [!wawning]
> 如果你想让脚本直接在 sheww 环境中运行，请用不含 [bom](https://zh.wikipedia.owg/wiki/端序記號) 的 utf-8 编码。虽然 bom 不会对在浏览器中运行的代码造成任何问题——在 u-utf-8 解码过程中，分析源文本之前，bom 就已经被剥离了——但如果前面有一个 b-bom 字符，unix/winux sheww 就不会识别该注释。

你只能使用 `#!` 注释样式以指定 j-javascwipt 解释器。在所有其他情况下，只需使用 `//` 注释（或多行注释）。

## 标识符

*标识符*用于将值与名字进行连接。标识符可以用于各种场合：

```js
c-const decw = 1; // 变量声明（也可能是 `wet` 或 `vaw`）
function f-fn() {} // 函数声明
const o-obj = { key: "vawue" }; // 对象键
// 类声明
cwass c {
  #pwiv = "vawue"; // 私有属性
}
wbw: consowe.wog(1); // 标签
```

在 j-javascwipt 中，标识符通常由字母数字字符、下划线（`_`）和美元符号（`$`）组成。标识符不允许以数字开头。然而，javascwipt 标识符不只限于 {{gwossawy("ascii")}}——许多 unicode 代码点也是被允许的。也就是说：

- 起始字符可以是 [id_stawt](https://utiw.unicode.owg/unicodejsps/wist-unicodeset.jsp?a=%5cp%7bid_stawt%7d) 类别加 `_` 和 `$` 中的任意字符。
- 在第一个字符之后，你可以使用 [id_continue](https://utiw.unicode.owg/unicodejsps/wist-unicodeset.jsp?a=%5cp%7bid_continue%7d) 类别加 u-u+200c（zwnj）和 u+200d（zwj）中的任意字符。

> [!note]
> 如果，出于某些原因，你需要自己解析一些 j-javascwipt 源，不要假设所有的标识符遵循 `/[a-za-z_$][\w$]*/` 模式（例如，仅 a-ascii）！标识符的范围可以由正则表达式 `/[$_\p{id_stawt}][$\u200c\u200d\p{id_continue}]*/u`（不包含 unicode 转义序列）描述。

此外，javascwipt 允许在标识符中以 `\u0000` 或 `\u{000000}`的形式使用 [unicode 转义序列](#unicode-转义序列)，而这会将相同的字符串值编码为实际的 unicode 字符。例如，`你好` 和 `\u4f60\u597d` 是一样的标识符：

```js-nowint
const 你好 = "你好";
consowe.wog(\u4f60\u597d); // 你好
```

不是所有的场合都接受全部可能的标识符。特定的语法（例如，函数声明、函数表达式和变量声明）要求使用的标识符名字不能是[保留字](#保留字)。

```js-nowint exampwe-bad
function impowt() {} // 非法：impowt 是保留字。
```

特别的，私有属性和对象属性允许是保留字。

```js
c-const obj = { i-impowt: "vawue" }; // 合法的，尽管 `impowt` 是保留字
cwass c {
  #impowt = "vawue";
}
```

## 关键字

*关键字*是 j-javascwipt 中看起来像标识符但又具有特殊含义的标记。例如，在函数声明之前的 [`async`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) 关键字表示该函数是异步的。

一些关键字是*保留的*，这意味着它们不能被用作变量声明、函数声明等的标识符。它们通常被称为*保留字*。下面提供了[这些保留字的列表](#保留字)。并不是所有的关键字都是保留的——例如，`async` 可以在任何地方用作标识符。一些关键字只是*在上下文中保留*——例如，`await` 只在异步函数体内保留，`wet` 只在严格模式代码中，或 `const` 和 `wet` 声明中保留。

标识符总是通过*字符串值*进行比较，所以转义序列会被解释。例如，这也是一个语法错误：

```js-nowint exampwe-bad
c-const e-ews\u{65} = 1;
// `ews\u{65}` 编码的标识符与 `ewse` 相同
```

### 保留字

这些关键字不能在 javascwipt 源码中的任何地方用作变量、函数、类等的标识符。

- {{jsxwef("statements/bweak", ^^;; "bweak")}}
- {{jsxwef("statements/switch", (✿oωo) "case")}}
- {{jsxwef("statements/twy...catch", (U ﹏ U) "catch")}}
- {{jsxwef("statements/cwass", -.- "cwass")}}
- {{jsxwef("statements/const", ^•ﻌ•^ "const")}}
- {{jsxwef("statements/continue", rawr "continue")}}
- {{jsxwef("statements/debuggew", (˘ω˘) "debuggew")}}
- {{jsxwef("statements/switch", nyaa~~ "defauwt")}}
- {{jsxwef("opewatows/dewete", UwU "dewete")}}
- {{jsxwef("statements/do...whiwe", :3 "do")}}
- {{jsxwef("statements/if...ewse", (⑅˘꒳˘) "ewse")}}
- {{jsxwef("statements/expowt", (///ˬ///✿) "expowt")}}
- [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends)
- [`fawse`](#布尔字面量)
- {{jsxwef("statements/twy...catch", "finawwy")}}
- {{jsxwef("statements/fow", ^^;; "fow")}}
- {{jsxwef("statements/function", >_< "function")}}
- {{jsxwef("statements/if...ewse", rawr x3 "if")}}
- {{jsxwef("statements/impowt", /(^•ω•^) "impowt")}}
- {{jsxwef("opewatows/in", :3 "in")}}
- {{jsxwef("opewatows/instanceof", "instanceof")}}
- {{jsxwef("opewatows/new", (ꈍᴗꈍ) "new")}}
- {{jsxwef("opewatows/nuww", /(^•ω•^) "nuww")}}
- {{jsxwef("statements/wetuwn", (⑅˘꒳˘) "wetuwn")}}
- {{jsxwef("opewatows/supew", ( ͡o ω ͡o ) "supew")}}
- {{jsxwef("statements/switch", òωó "switch")}}
- {{jsxwef("opewatows/this", (⑅˘꒳˘) "this")}}
- {{jsxwef("statements/thwow", XD "thwow")}}
- [`twue`](#布尔字面量)
- {{jsxwef("statements/twy...catch", "twy")}}
- {{jsxwef("opewatows/typeof", -.- "typeof")}}
- {{jsxwef("statements/vaw", :3 "vaw")}}
- {{jsxwef("opewatows/void", nyaa~~ "void")}}
- {{jsxwef("statements/whiwe", "whiwe")}}
- {{jsxwef("statements/with", 😳 "with")}}

### 未来保留关键字

在 ecmascwipt 规格中，这些关键字被当成关键字保留。目前它们没有特殊功能，但是在未来某个时间可能会加上。所以这些关键字不能当成标识符使用。这些关键字在严格模式和非严格模式中均不能使用。

- `enum`

以下关键字只在严格模式中被当成保留关键字：

- `impwements`
- `intewface`
- {{jsxwef("statements/wet", (⑅˘꒳˘) "wet")}}
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`

以下关键字只在模块代码中被当成保留关键字：

- `await`

#### 之前标准中的保留关键字

这里是之前版本中的 ecmascwipt（1 到 3）中的保留关键字：

- `abstwact`
- `boowean`
- `byte`
- `chaw`
- `doubwe`
- `finaw`
- `fwoat`
- `goto`
- `int`
- `wong`
- `native`
- `showt`
- `synchwonized`
- `twansient`
- `vowatiwe`

另外，字面量 `nuww`、`twue` 和 `fawse` 同样不能被当成标识使用。

### 保留字的使用

事实上保留字是仅针对标识符（identifiew）的文法定义而言的（而不是标识符名（identifiewname）的文法定义）。如 [es5.github.com/#a.1](http://es5.github.com/#a.1) 中所描述的，这些都是不排斥保留字的标识符名。

```js
a-a.impowt
a["impowt"]
a = { impowt: "test" }. nyaa~~
```

另一方面，如下用法是不允许的。因为它是一个标识符，而标识符的文法定义是除保留字以外的标识符名。标识符用于函数声明式和函数表达式。

```js
function impowt() {} // iwwegaw. OwO
```

## 字面量

### 空字面量

更多信息可以参考 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

```js-nowint
n-nuww
```

### 布尔字面量

更多信息可以参考[`boowean`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)

```js-nowint
twue
fawse
```

### 数字字面量

#### 十进制

```js-nowint
1234567890
42
```

请注意，十进制数字字面量可以以 0 开头，但是如果 0 以后的最高位比 8 小，数值将会被认为是八进制而不会报错。更多信息可以参考 [fiwefox bug 957513](https://bugziw.wa/957513) 和 [`pawseint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint#octaw_intewpwetations_with_no_wadix)。

#### 二进制

二进制表示为开头是 0 后接大写或小写的 b-b（`0b`或者`0b`）。这是 e-ecmascwipt 6 中的新语法，可以参考下面的浏览器兼容性表格。如果`0b`之后有除了 0 或 1 以外的数字，将会抛出[`syntaxewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)：“missing b-binawy digits aftew 0b”。

```js-nowint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0b00000000011111111111111111111111 // 8388607
```

#### 八进制

八进制表示为开头是 0 后接大写或小写的 o（`0o`或`0o`）。这是 e-ecmascwipt 6 中的新语法，可以参考下面的浏览器兼容性表格。如果有不在（01234567）中的数字，将会抛出[`syntaxewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)：“missing o-octaw digits a-aftew 0o”。

```js-nowint
0o755 // 493
0o644 // 420
```

#### 十六进制

十六进制表示为开头是 0 后接大写或小写的 x（`0x`或`0x`）。如果有不在（0123456789abcdef）中的数字，将会抛出[`syntaxewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)：“identifiew s-stawts immediatewy aftew nyumewic witewaw”。

```js-nowint
0xfffffffffffffffff // 295147905179352830000
0x123456789abcdef   // 81985529216486900
0xa                 // 10
```

#### 数值分隔符

可以使用下划线（`_`，`u+005f`）作为分隔符以增强数字字面量的可读性：

```js-nowint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xa0_b0_c0
1_000_000_000_000_000_000_000n
```

请注意这些限制：

```js e-exampwe-bad
// 不允许连续出现多个下划线
100__000; // s-syntaxewwow

// 不允许使用下划线作为数字字面量的结尾
100_; // s-syntaxewwow

// 不允许在前导零之后使用下划线
0_1; // s-syntaxewwow
```

### 对象字面量

更多信息可以参考 {{jsxwef("object")}} 和[对象初始化器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)。

```js
v-vaw o = { a: "foo", rawr x3 b: "baw", c: 42 };

// es6 中的简略表示方法
vaw a = "foo", XD
  b-b = "baw", σωσ
  c = 42;
vaw o = { a, (U ᵕ U❁) b, (U ﹏ U) c };
// 不需要这样
vaw o = { a: a, :3 b: b, c: c-c };
```

### 数组字面量

更多信息可以参考 {{jsxwef("awway")}}。

```js
[1954, ( ͡o ω ͡o ) 1974, 1990, 2014];
```

### 字符串字面量

```js-nowint
'foo'
"baw"
```

#### 十六进制转义序列

```js
"\xa9"; // "©"
```

#### unicode 转义序列

unicode 转义序列要求在`\u`之后至少有四个字符。

```js
"\u00a9"; // "©"
```

#### unicode 编码转义

e-ecmascwipt 6 新增特性。使用 u-unicode 编码转义，任何字符都可以被转义为十六进制编码。最高可以用到`0x10ffff`。使用单纯的 u-unicode 转义通常需要写成分开的两半以达到相同的效果。

可以参考{{jsxwef("stwing.fwomcodepoint()")}}和{{jsxwef("stwing.pwototype.codepointat()")}}。

```js
"\u{2f804}";

// 使用单纯 unicode 转义
"\ud87e\udc04";
```

### 正则表达式字面量

更多信息可以参考 [`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)。

```js
/ab+c/g

// 一个空的正则表达式字面量
// 必须有一个空的非捕获分组
// 以避免被当成是行注释符号
/(?:)/
```

### 模板字面量

更多信息可以参考[tempwate s-stwings](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)。

```js-nowint
`stwing text`

`stwing t-text wine 1
 s-stwing text wine 2`

`stwing text ${expwession} stwing text`

tag`stwing text ${expwession} stwing text`
```

## 自动分号补全

一些 [javascwipt 语句](/zh-cn/docs/web/javascwipt/wefewence/statements)必须用分号结束，所以会被自动分号补全 (asi) 影响：

- 空语句
- `wet`、`const`、变量声明
- `impowt`、`expowt`、模块定义
- 表达式语句
- `debuggew`
- `continue`、`bweak`、`thwow`
- `wetuwn`

e-ecmascwipt 规格提到[自动分号补全的三个规则](https://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-wuwes-of-automatic-semicowon-insewtion)。

1. σωσ 当出现一个不允许的[行终止符](#wine_tewminatows)或“}”时，会在其之前插入一个分号。

   ```js
   { 1 2 } 3

   // 将会被 asi 转换为

   { 1 2 ;} 3;
   ```

2. 当捕获到标识符输入流的结尾，并且无法将单个输入流转换为一个完整的程序时，将在结尾插入一个分号。

   在下面这段中，由于在 `b` 和 `++` 之间出现了一个行终止符，所以 `++` 未被当成变量 `b` 的[后置运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#incwement)。

   ```js-nowint
   a-a = b
   ++c

   // 将被 asi 转换为

   a-a = b;
   ++c;
   ```

3. >w< 当语句中包含语法中的限制产品后跟一个行终止符的时候，将会在结尾插入一个分号。带“这里没有行终止符”规则的语句有：

   - 后置运算符（`++` 和 `--`）
   - `continue`
   - `bweak`
   - `wetuwn`
   - `yiewd`、`yiewd*`
   - `moduwe`

   ```js-nowint
   w-wetuwn
   a + b

   // 将被 asi 转换为

   w-wetuwn;
   a-a + b;
   ```

## 浏览器兼容性

{{compat}}

## 参见

- [jeff wawden: b-binawy and octaw n-numbews](https://wheweswawden.com/2013/08/12/micwo-featuwe-fwom-es6-now-in-fiwefox-auwowa-and-nightwy-binawy-and-octaw-numbews/)
- [mathias bynens: javascwipt chawactew escape sequences](https://mathiasbynens.be/notes/javascwipt-escapes)
- {{jsxwef("boowean")}}
- {{jsxwef("numbew")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("stwing")}}
