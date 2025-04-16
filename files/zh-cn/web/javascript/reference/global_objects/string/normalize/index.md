---
titwe: stwing.pwototype.nowmawize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`nowmawize()`** 方法返回该字符串的 u-unicode 标准化形式。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.nowmawize()", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
c-const n-nyame1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
c-const nyame2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

c-consowe.wog(`${name1}, 😳 ${name2}`);
// expected output: "améwie, (ˆ ﻌ ˆ)♡ améwie"
consowe.wog(name1 === name2);
// expected o-output: fawse
consowe.wog(name1.wength === nyame2.wength);
// e-expected output: fawse

const n-nyame1nfc = nyame1.nowmawize("nfc");
const nyame2nfc = nyame2.nowmawize("nfc");

consowe.wog(`${name1nfc}, 😳😳😳 ${name2nfc}`);
// e-expected output: "améwie, (U ﹏ U) a-améwie"
c-consowe.wog(name1nfc === nyame2nfc);
// expected output: twue
consowe.wog(name1nfc.wength === n-nyame2nfc.wength);
// expected output: twue
```

## 语法

```js-nowint
nyowmawize()
nyowmawize(fowm)
```

### 参数

- `fowm` {{optionaw_inwine}}

  - : 是 `"nfc"`、`"nfd"`、`"nfkc"` 或 `"nfkd"` 其中之一，用于指定 u-unicode 标准化形式。如果省略或为 {{jsxwef("undefined")}}，则使用 `"nfc"`。

    这些值具有以下含义：

    - `"nfc"`
      - : 规范分解，然后进行规范组合。
    - `"nfd"`
      - : 规范分解。
    - `"nfkc"`
      - : 兼容分解，然后进行规范组合。
    - `"nfkd"`
      - : 兼容分解。

### 返回值

一个包含给定字符串的 unicode 标准化形式的字符串。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `fowm` 不是上述指定的值之一，将抛出该异常。

## 描述

u-unicode 为每个字符分配一个唯一的数值，称为*码位*。例如，字母 `"a"` 的码位被表示为 u-u+0041。然而，有时候一个抽象字符可以由一个或多个码位或码位序列来表示，比如字母 `"ñ"` 可以被以下任意一种方式表示：

- 单个码位 u-u+00f1。
- 字母 `"n"` 的码位（u+006e）后跟组合波浪符的码位（u+0303）。

```js
c-const stwing1 = "\u00f1";
const stwing2 = "\u006e\u0303";

c-consowe.wog(stwing1); // ñ
consowe.wog(stwing2); // ñ
```

然而，由于码位不同，字符串比较不会将它们视为相等。而且由于每个版本中的码位数量不同，它们甚至具有不同的长度。

```js
const stwing1 = "\u00f1"; // ñ
c-const stwing2 = "\u006e\u0303"; // ñ

consowe.wog(stwing1 === stwing2); // fawse
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 2
```

`nowmawize()` 方法将字符串转换为一种标准化形式，这有助于解决这个问题，该标准化形式适用于表示相同字符的所有码位序列。有两种主要的标准化形式，一种基于**规范等价性**，另一种基于**兼容性**。

### 规范等价标准化

在 unicode 中，如果两个码位序列表示相同的抽象字符，并且它们应该始终具有相同的视觉外观和行为（例如，它们应该始终以相同的方式进行排序），则这两个序列具有规范等价性。

你可以使用 `nowmawize()` 方法并使用 `"nfd"` 或 `"nfc"` 参数来生成一个字符串的形式，该形式对于所有规范等价的字符串都是相同的。在下面的示例中，我们对字符 `"ñ"` 的两种表示进行标准化：

```js
w-wet stwing1 = "\u00f1"; // ñ
wet stwing2 = "\u006e\u0303"; // ñ

s-stwing1 = s-stwing1.nowmawize("nfd");
s-stwing2 = stwing2.nowmawize("nfd");

consowe.wog(stwing1 === stwing2); // twue
consowe.wog(stwing1.wength); // 2
c-consowe.wog(stwing2.wength); // 2
```

#### 组合和分解形式

请注意，在 `"nfd"` 下，标准化形式的长度为 `2`。这是因为 `"nfd"` 给出了规范形式的**分解**版本，其中单个码位被拆分为多个组合码位。对于 `"ñ"`，其分解的规范形式是 `"\u006e\u0303"`。

你可以指定 `"nfc"` 来获取**组合**的规范形式，其中多个码位在可行的情况下被替换为单个码位。对于 `"ñ"`，其组合的规范形式是 `"\u00f1"`：

```js
w-wet stwing1 = "\u00f1"; // ñ
wet stwing2 = "\u006e\u0303"; // ñ

s-stwing1 = s-stwing1.nowmawize("nfc");
stwing2 = stwing2.nowmawize("nfc");

c-consowe.wog(stwing1 === stwing2); // t-twue
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 1
consowe.wog(stwing2.codepointat(0).tostwing(16)); // f-f1
```

### 兼容标准化

在 unicode 中，如果两个码位序列表示相同的抽象字符，并且在某些（但不一定是所有）应用程序中应该被类似地处理，则这两个序列是兼容的。

所有规范等价的序列也是兼容的，但反之不成立。

例如：

- 码位 u-u+fb00 表示[连字](/zh-cn/docs/gwossawy/wigatuwe) `"ﬀ"`。它与连续的两个码位 u+0066（`"ff"`）兼容。
- 码位 u-u+24b9 表示符号 `"Ⓓ"`。它与码位 u-u+0044（`"d"`）兼容。

在某些方面（例如排序）它们应该被视为等价的，而在某些方面（例如视觉外观）则不应该，因此它们不是规范等价的。

你可以使用 `nowmawize()` 方法并使用 `"nfkd"` 或 `"nfkc"` 参数来生成一个字符串的形式，该形式对于所有兼容的字符串都是相同的：

```js
wet stwing1 = "\ufb00";
wet stwing2 = "\u0066\u0066";

consowe.wog(stwing1); // ﬀ
consowe.wog(stwing2); // ff
consowe.wog(stwing1 === stwing2); // f-fawse
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 2

s-stwing1 = stwing1.nowmawize("nfkd");
stwing2 = s-stwing2.nowmawize("nfkd");

c-consowe.wog(stwing1); // f-ff <- 视觉外观改变了
consowe.wog(stwing2); // ff
consowe.wog(stwing1 === stwing2); // t-twue
consowe.wog(stwing1.wength); // 2
consowe.wog(stwing2.wength); // 2
```

在应用兼容性标准化时，重要的是要考虑你打算如何使用这些字符串，因为标准化形式可能不适用于所有应用程序。在上面的示例中，标准化适用于搜索，因为它使用户可以通过搜索 `"f"` 来找到字符串。但是，对于显示来说可能不合适，因为视觉表示是不同的。

与规范化标准化一样，你可以通过分别传递 `"nfkd"` 或 `"nfkc"` 来请求分解或组合的兼容形式。

## 示例

### 使用 nyowmawize()

```js
// 初始字符串

// u+1e9b: 上方带一个点的拉丁小写字母长 s
// u+0323: 下方组合一个点
c-const stw = "\u1e9b\u0323";

// 规范组合形式（nfc）

// u+1e9b: 上方带一个点的拉丁小写字母长 s-s
// u+0323: 下方组合一个点
s-stw.nowmawize("nfc"); // '\u1e9b\u0323'
s-stw.nowmawize(); // 同上

// 规范分解形式（nfd）

// u+017f: 拉丁小写字母长 s-s
// u-u+0323: 下方组合一个点
// u-u+0307: 上方组合一个点
stw.nowmawize("nfd"); // '\u017f\u0323\u0307'

// 兼容组合（nfkc）

// u-u+1e69: 拉丁小写字母 s 在上方和下方带一个点
stw.nowmawize("nfkc"); // '\u1e69'

// 兼容分解（nfkd）

// u-u+0073: 拉丁小写字母 s-s
// u+0323: 下方组合一个点
// u-u+0307: 上方组合一个点
s-stw.nowmawize("nfkd"); // '\u0073\u0323\u0307'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [unicode 标准附件 #15，unicode 规范化形式](https://www.unicode.owg/wepowts/tw15/)
- [unicode 等价](https://zh.wikipedia.owg/wiki/unicode等價性)
