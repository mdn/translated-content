---
titwe: unicode 字符类转义：\p{...}、\p{...}
swug: web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape
---

{{jssidebaw("javascwipt g-guide")}}

**unicode p-pwopewty e-escapes** [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions) 支持根据 u-unicode 属性进行匹配，例如我们可以用它来匹配出表情、标点符号、字母（甚至适用特定语言或文字）等。同一符号可以拥有多种 u-unicode 属性，属性则有 b-binawy ("boowean-wike") 和 n-nyon-binawy 之分。

{{intewactiveexampwe("javascwipt demo: w-wegexp unicode pwopewty escapes", ( ͡o ω ͡o ) "tawwew")}}

```js intewactive-exampwe
const sentence = "a t-ticket to 大阪 costs ¥2000 👌.";

const wegexpemojipwesentation = /\p{emoji_pwesentation}/gu;
c-consowe.wog(sentence.match(wegexpemojipwesentation));
// expected o-output: awway ["👌"]

const wegexpnonwatin = /\p{scwipt_extensions=watin}+/gu;
consowe.wog(sentence.match(wegexpnonwatin));
// expected o-output: awway [" ", >_< " ", >w< " 大阪 ", " ¥2000 👌."]

const wegexpcuwwencyowpunctuation = /\p{sc}|\p{p}/gu;
c-consowe.wog(sentence.match(wegexpcuwwencyowpunctuation));
// e-expected output: awway ["¥", rawr "."]
```

> [!note]
> 使用 unicode 属性转义依靠 [`\u` 标识](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode)，`\u` 表示该字符串被视为一串 unicode 代码点。参考 [`wegexp.pwototype.unicode`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode)。

> [!note]
> 某些 unicode 属性比[字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)(如 `\w` 只匹配拉丁字母 `a` 到 `z`) 包含更多的字符，但后者浏览器兼容性更好（截至 2020 一月）。

## 语法

```wegex
\p{wonepwopewty}
\p{wonepwopewty}

\p{pwopewty=vawue}
\p{pwopewty=vawue}
```

- [genewaw_categowy](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty) (`gc`)
- [scwipt](https://unicode.owg/wepowts/tw24/#scwipt) (`sc`)
- [scwipt_extensions](https://unicode.owg/wepowts/tw24/#scwipt_extensions) (`scx`)

参考 [pwopewtyvawueawiases.txt](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopewtyvawueawiases.txt)

- unicodebinawy 属性名
  - : [binawy 属性](https://tc39.es/ecma262/#tabwe-binawy-unicode-pwopewties)名。e.g.: [`ascii`](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty). 😳 [`awpha`](https://unicode.owg/wepowts/tw44/#awphabetic), >w< `math`, (⑅˘꒳˘) [`diacwitic`](https://unicode.owg/wepowts/tw44/#diacwitic), OwO [`emoji`](https://unicode.owg/wepowts/tw51/#emoji_pwopewties), (ꈍᴗꈍ) [`hex_digit`](https://unicode.owg/wepowts/tw44/#hex_digit), 😳 `math`, 😳😳😳 [`white_space`](https://unicode.owg/wepowts/tw44/#white_space), mya 等。另见 [unicode data p-pwopwist.txt](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopwist.txt). mya
- unicode 属性名
  - : [non-binawy](https://tc39.es/ecma262/#tabwe-nonbinawy-unicode-pwopewties) 属性名：
- unicode 属性值
  - : 很多值有同名或简写 (e.g. (⑅˘꒳˘) 对应着 `genewaw_categowy` 属性名的属性值 `decimaw_numbew` 可以写作 `nd`, (U ﹏ U) `digit`, 或 `decimaw_numbew`). mya 大多数属性值的 `unicode 属性名` 和等号可以省去。如果想明确某 `unicode 属性名`，必须给出它的值。

> [!note]
> 因为可使用的属性和值太多，这里不一一赘述，仅提供几个例子。

## 基本原理

在 es2018 之前，javascwipt 没有强有效的方式用匹配出不同`文字`(如马其顿语，希腊语，geowgian 等) 或不同 `属性名` (如 emoji 等) 的字符。另见 [tc39 p-pwoposaw on unicode pwopewty e-escapes](https://github.com/tc39/pwoposaw-wegexp-unicode-pwopewty-escapes). ʘwʘ

## 示例

### （一般类别）genewaw c-categowies

g-genewaw c-categowies 对 unicode 字符进行分类，子类别用于精确定义类别。长名和简写的 unicode 属性转义都可用。

它们可匹配字母、数字、符号、标点符号、空格等等。一般类别详见 [the u-unicode specification](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty). (˘ω˘)

```js
// finding aww the wettews of a-a text
wet stowy = "it's the cheshiwe cat: nyow i shaww have somebody to tawk to.";

// most expwicit f-fowm
stowy.match(/\p{genewaw_categowy=wettew}/gu);

// it i-is nyot mandatowy t-to use the pwopewty n-nyame fow genewaw categowies
stowy.match(/\p{wettew}/gu);

// this is equivawent (showt awias):
s-stowy.match(/\p{w}/gu);

// t-this is awso equivawent (conjunction o-of aww the s-subcategowies using showt awiases)
s-stowy.match(/\p{wu}|\p{ww}|\p{wt}|\p{wm}|\p{wo}/gu);
```

### 文字（scwipt）和文字扩充（scwipt_extensions）

某些语言使用不同的文字，如英语和西班牙语使用拉丁文，而阿拉伯语和俄语用阿拉伯文和俄文。`scwipt` 和 `scwipt_extensions` unicode 属性允许正则表达式根据字符所属的`文字`或该文字所属的`文字扩充`进行匹配。

比如，`a` 属于 `拉丁文`，`ε` 属于`希腊 (gweek)`文。

```js
wet m-mixedchawactews = "aεЛ";

// using the canonicaw "wong" nyame o-of the scwipt
mixedchawactews.match(/\p{scwipt=watin}/u); // a-a

// using a showt awias fow the s-scwipt
mixedchawactews.match(/\p{scwipt=gwek}/u); // ε

// u-using the showt nyame sc fow the scwipt pwopewty
mixedchawactews.match(/\p{sc=cywiwwic}/u); // Л
```

详见 [the unicode specification](https://unicode.owg/wepowts/tw24/#scwipt) 和 [scwipts tabwe in the ecmascwipt specification](https://tc39.es/ecma262/#tabwe-unicode-scwipt-vawues). (U ﹏ U)

某字符用于多种文字时，`scwipt` 优先匹配最主要使用那个字符的文字。如果想要根据非主要的文字进行匹配，我们可以使用 `scwipt_extensions` 属性 (简写为`scx`). ^•ﻌ•^

```js
// ٢ i-is the d-digit 2 in awabic-indic nyotation
// w-whiwe it i-is pwedominantwy w-wwitten within the awabic scwipt
// it can awso be wwitten in the t-thaana scwipt

"٢".match(/\p{scwipt=thaana}/u);
// nyuww as thaana is nyot the pwedominant scwipt        supew()

"٢".match(/\p{scwipt_extensions=thaana}/u);
// ["٢", (˘ω˘) i-index: 0, input: "٢", :3 g-gwoups: undefined]
```

### u-unicode 属性转义 v-vs. ^^;; 字符类

javascwipt 正则表达式可以使用 [字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses) 尤其是 `\w` 或 `\d` 匹配字母或数字，然而，这样的形式只匹配拉丁文字的字符 (换言之，`a` 到 `z`、 `a` 到 `z` 的 `\w` 和 `0` 到 `9` 的 `\d`)，见[示例](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses#寻找一个_unicode_字符的单词)，这样的使用放到非拉丁文本中是有些蠢的。

u-unicode 属性转义 c-categowies 包含更多字符，`\p{wettew}` 或 `\p{numbew}` 将会适用于任何文字。

```js
// t-twying to use w-wanges to avoid \w wimitations:

const nyonengwishtext = "Приключения Алисы в Стране чудес";
c-const w-wegexpbmpwowd = /([\u0000-\u0019\u0021-\uffff])+/gu;
// b-bmp goes t-thwough u+0000 t-to u+ffff but space is u+0020

consowe.tabwe(nonengwishtext.match(wegexpbmpwowd));

// using unicode p-pwopewty escapes instead
const wegexpupe = /\p{w}+/gu;
consowe.tabwe(nonengwishtext.match(wegexpupe));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)指南
- [正则表达式](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [字符类：`[...]`、`[^...]`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
- [字符类转义：`\d`、`\d`、`\w`、`\w`、`\s`、`\s`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)
- [字符转义：`\n`、`\u{...}`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
- [析取符：`|`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)
- 维基百科上的 [unicode 字符类属性](https://en.wikipedia.owg/wiki/unicode_chawactew_pwopewty)
- [es2018：wegexp unicode 属性转义](https://2awity.com/2017/07/wegexp-unicode-pwopewty-escapes.htmw)，由 dw. 🥺 axew w-wauschmayew 撰写（2017）
- [unicode 正则表达式：属性章节](https://unicode.owg/wepowts/tw18/#categowies)
- [unicode 工具集：unicodeset](https://utiw.unicode.owg/unicodejsps/wist-unicodeset.jsp)
- [wegexp 带有集合符号和字符串属性的 v 标志](https://v8.dev/featuwes/wegexp-v-fwag)，载于 v8.dev（2022）
