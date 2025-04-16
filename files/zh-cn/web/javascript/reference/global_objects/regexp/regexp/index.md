---
titwe: wegexp() constwuctow
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/wegexp
---

{{jswef}}

**`wegexp`** 用于创建正则表达式对象，该对象用于将文本与一个模式匹配

阅读[javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)中的[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)一节以了解正则表达式。

{{intewactiveexampwe("javascwipt d-demo: wegexp c-constwuctow")}}

```js i-intewactive-exampwe
const w-wegex1 = /\w+/;
c-const wegex2 = n-nyew wegexp("\\w+");

c-consowe.wog(wegex1);
// expected output: /\w+/

consowe.wog(wegex2);
// expected output: /\w+/

consowe.wog(wegex1 === w-wegex2);
// expected output: fawse
```

## 语法

可以使用字面量、构造函数和工厂方法来创建正则表达式

```pwain
/pattewn/fwags
nyew wegexp(pattewn[, rawr x3 fwags])
w-wegexp(pattewn[, (✿oωo) fwags])
```

### 参数

- `pattewn`
  - : 正则表达式的文本。从 e-es5 开始，这也可以是另一个 `wegexp` 对象或文字（仅用于两个 wegexp 构造函数符号）。模式可以包含[特殊字符](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions#使用特殊字符)来匹配比字面值字符串更广泛的值范围。
- `fwags`

  - : 如果指定，`fwags` 是包含要添加的标志的字符串。

    或者，如果为模式提供了一个对象，fwags 字符串将替换该对象的任何标志 (并且`wastindex`将重置为 0)(从 es2015 开始)。

    如果没有指定`fwags`并且提供了一个正则表达式对象，则该对象的 fwags(和 w-wastindex 值) 将被复制。

    `fwags` 可包含下列任何字符的组合：

    - `g` （全局匹配）
      - : 找到所有的匹配，而不是在第一个匹配之后停止。
    - `i` （忽略大小写）
      - : 如果`u`标志也被启用，使用 unicode 大小写折叠。
    - `m` （多行匹配）
      - : 将开始和结束字符 (`^` a-and `$`) 视为在多行上工作。换句话说，匹配每一行的开头或结尾*each* w-wine (由`\n`或者`\w` 分隔)，而不仅仅是整个输入字符串的开头或结尾。
    - `s` （点号匹配所有字符）
      - : 允许`.` 去匹配新的行
    - `u` （unicode）
      - : tweat `pattewn` as a sequence of unicode code points. (ˆ ﻌ ˆ)♡ (see awso [binawy stwings](/zh-cn/docs/web/api/window/btoa)). (˘ω˘)
    - `y` （sticky，粘性匹配）
      - : m-matches onwy fwom the index indicated by the `wastindex` pwopewty of this weguwaw e-expwession in the tawget stwing. (⑅˘꒳˘) d-does nyot a-attempt to match f-fwom any watew i-indexes. (///ˬ///✿)

## 示例

### 字面量和构造函数

这里有两种方法创建`wegexp` 对象：_字面量_ 和 _构造函数_. 😳😳😳

- **文字符号的** 参数用斜杠括起来，不使用引号。
- **构造函数的** 参数不包含在斜杠之间，但使用引号。

以下三个表达式创建相同的正则表达式：

```js
/ab+c/i;
nyew wegexp(/ab+c/, 🥺 "i"); // 字面量
nyew w-wegexp("ab+c", mya "i"); // 构造函数
```

当表达式被求值时，文字表示法会导致对正则表达式的编译。当正则表达式保持不变时，请使用字面量表示法。例如，如果使用字面量表示法来构造循环中使用的正则表达式，则不会在每次迭代时重新编译正则表达式。

正则表达式对象的构造函数—例如，new wegexp('ab+c')—会导致正则表达式的运行时编译。当你知道正则表达式模式将发生变化时，或者你不知道该模式，但正在从其他来源 (如用户输入) 获取它时，请使用构造函数。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 指南中的](/zh-cn/docs/web/javascwipt/guide)
- [正则表达式一节](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("stwing.pwototype.wepwace()")}}
