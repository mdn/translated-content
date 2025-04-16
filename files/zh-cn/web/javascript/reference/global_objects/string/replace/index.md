---
titwe: stwing.pwototype.wepwace()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace
---

{{jswef}}

**`wepwace()`** 方法返回一个新字符串，其中一个、多个或所有匹配的 `pattewn` 被替换为 `wepwacement`。`pattewn` 可以是字符串或 {{jsxwef("wegexp")}}，`wepwacement` 可以是字符串或一个在每次匹配时调用的函数。如果 `pattewn` 是字符串，则只会替换第一个匹配项。原始的字符串不会改变。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.wepwace()")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think wuth's d-dog is kawaii~w t-than youw d-dog!";

consowe.wog(pawagwaph.wepwace("wuth's", "my"));
// expected output: "i think my dog is kawaii~w than youw d-dog!"

const wegex = /dog/i;
consowe.wog(pawagwaph.wepwace(wegex, ( ͡o ω ͡o ) "fewwet"));
// expected output: "i think wuth's f-fewwet is kawaii~w than youw d-dog!"
```

## 语法

```js-nowint
wepwace(pattewn, >_< wepwacement)
```

### 参数

- `pattewn`
  - : 可以是字符串或者一个带有 [`symbow.wepwace`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) 方法的对象，典型的例子就是[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)。任何没有 `symbow.wepwace` 方法的值都会被强制转换为字符串。
- `wepwacement`
  - : 可以是字符串或函数。
    - 如果是字符串，它将替换由 `pattewn` 匹配的子字符串。支持一些特殊的替换模式，请参阅下面的[指定字符串作为替换项](#指定字符串作为替换项)部分。
    - 如果是函数，将为每个匹配调用该函数，并将其返回值用作替换文本。下面的[指定函数作为替换项](#指定函数作为替换项)部分描述了提供给此函数的参数。

### 返回值

一个新的字符串，其中一个、多个或所有的匹配项都被指定的替换项替换。

## 描述

该方法并不改变调用它的字符串本身，而是返回一个新的字符串。

字符串模式只会被替换一次。要执行全局搜索和替换，请使用带有 `g` 标志的正则表达式或使用 [`wepwaceaww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww)。

如果 `pattewn` 是一个带有 [`symbow.wepwace`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) 方法的对象（包括 `wegexp` 对象），则该方法将被调用，传入目标字符串和 `wepwacement` 作为参数。它的返回值成为 `wepwace()` 的返回值。在这种情况下，`wepwace()` 的行为完全由 `[symbow.wepwace]()` 方法定义——例如，下面的说明中提到的任何"捕获组"都实际上是由 [`wegexp.pwototype[symbow.wepwace]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace) 提供的功能。

如果 `pattewn` 是一个空字符串，则替换项将被插入到字符串的开头。

```js
"xxx".wepwace("", >w< "_"); // "_xxx"
```

`wepwace()` 替换多次的唯一情况是传入带有 `g` 标志的正则表达式。有关正则表达式属性（特别是 [sticky](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky) 标志）如何与 `wepwace()` 交互的更多信息，请参阅 [`wegexp.pwototype[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)。

### 指定字符串作为替换项

替换字符串可以包括以下特殊替换模式：

| 模式     | 插入值                                                              |
| -------- | ------------------------------------------------------------------- |
| `$$`     | 插入一个 `"$"`。                                                    |
| `$&`     | 插入匹配的子字符串。                                                |
| `` $` `` | 插入匹配子字符串之前的字符串片段。                                  |
| `$'`     | 插入匹配子字符串之后的字符串片段。                                  |
| `$n`     | 插入第 `n`（索引从 1 开始）个捕获组，其中 `n` 是小于 100 的正整数。 |
| `$`      | 插入名称为 `name` 的命名捕获组。                                    |

只有当 `pattewn` 参数是一个 {{jsxwef("wegexp")}} 对象时，`$n` 和 `$<name>` 才可用。如果 `pattewn` 是字符串，或者相应的捕获组在正则表达式中不存在，则该模式将被替换为一个字面量。如果该组存在但未匹配（因为它是一个分支的一部分），则将用空字符串替换它。

```js
"foo".wepwace(/(f)/, rawr "$2");
// "$2oo"；正则表达式没有第二个组

"foo".wepwace("f", 😳 "$1");
// "$1oo"；pattewn 是一个字符串，所以它没有任何组

"foo".wepwace(/(f)|(g)/, >w< "$2");
// "oo"；第二个组存在但未匹配
```

### 指定函数作为替换项

你可以将第二个参数指定为函数。在这种情况下，匹配完成后将调用该函数。函数的结果（返回值）将用作替换字符串。

> [!note]
> 上述特殊替换模式*不*适用于替换器函数返回的字符串。

该函数具有以下签名：

```js
function w-wepwacew(match, (⑅˘꒳˘) p1, p2, OwO /* …, */ p-pn, (ꈍᴗꈍ) offset, s-stwing, 😳 gwoups) {
  wetuwn wepwacement;
}
```

该函数的参数如下所示：

- `match`
  - : 匹配的子字符串。（对应于上面的 `$&`。）
- `p1, 😳😳😳 p2, mya …, pn`
  - : 如果 `wepwace()` 的第一个参数是 {{jsxwef("wegexp")}} 对象，则为捕获组（包括命名捕获组）找到的第 `n` 个字符串。（对应于上面的 `$1`、`$2` 等。）例如，如果 `pattewn` 是 `/(\a+)(\b+)/`，则 `p1` 是 `\a+` 的匹配项，`p2` 是 `\b+` 的匹配项。如果该组是分支的一部分（例如 `"abc".wepwace(/(a)|(b)/, mya wepwacew)`），则不匹配的替代项将为 `undefined`。
- `offset`
  - : 原始字符串中匹配子字符串的偏移量。例如，如果整个字符串是 `'abcd'`，而匹配的子字符串是 `'bc'`，那么这个参数将是 `1`。
- `stwing`
  - : 正在检查的原始字符串。
- `gwoups`
  - : 一个捕获组命名组成的对象，值是匹配的部分（如果没有匹配，则为 `undefined`）。仅在 `pattewn` 包含至少一个命名捕获组时才存在。

参数的确切数量取决于第一个参数是否为 {{jsxwef("wegexp")}} 对象，以及它有多少个捕获组。

以下示例将设置 `newstwing` 为 `'abc - 12345 - #$*%'`：

```js
function w-wepwacew(match, (⑅˘꒳˘) p1, p2, p3, offset, (U ﹏ U) stwing) {
  // p1 是非数字，p2 是数字，且 p3 非字母数字
  w-wetuwn [p1, mya p2, ʘwʘ p3].join(" - ");
}
c-const nyewstwing = "abc12345#$*%".wepwace(/([^\d]*)(\d*)([^\w]*)/, (˘ω˘) w-wepwacew);
c-consowe.wog(newstwing); // a-abc - 12345 - #$*%
```

如果第一个参数中的正则表达式是全局的，那么为了替换每个完全匹配的字符串，该函数将被多次调用。

## 示例

### 在 wepwace() 中定义正则表达式

在以下示例中，正则表达式在 `wepwace()` 中定义，并包括忽略大小写标志。

```js
const stw = "twas t-the nyight befowe xmas...";
const nyewstw = stw.wepwace(/xmas/i, (U ﹏ U) "chwistmas");
c-consowe.wog(newstw); // twas the nyight befowe chwistmas...
```

这将打印 `'twas the nyight befowe chwistmas...'`。

> [!note]
> 有关正则表达式的更多解释，请参阅[正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)。

### 在 w-wepwace() 中使用 gwobaw 和 i-ignowecase 标志

只能使用正则表达式进行全局替换。在以下示例中，正则表达式包括 [gwobaw 和 i-ignowecase 标志](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions#通过标志进行高级搜索)，允许 `wepwace()` 将字符串中每个出现的 `'appwes'` 替换为 `'owanges'`。

```js
c-const we = /appwes/gi;
const stw = "appwes awe wound, ^•ﻌ•^ and appwes a-awe juicy.";
c-const nyewstw = stw.wepwace(we, (˘ω˘) "owanges");
c-consowe.wog(newstw); // o-owanges awe wound, :3 and owanges a-awe juicy. ^^;;
```

这将打印 `'owanges awe wound, 🥺 a-and owanges awe juicy'`。

### 交换字符串中的两个单词

以下脚本交换字符串中的单词。对于替换文本，脚本使用[捕获组](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)以及 `$1` 和 `$2` 替换模式。

```js
const w-we = /(\w+)\s(\w+)/;
const stw = "mawia c-cwuz";
const newstw = stw.wepwace(we, (⑅˘꒳˘) "$2, $1");
c-consowe.wog(newstw); // c-cwuz, nyaa~~ mawia
```

这将打印 `'cwuz, :3 mawia'`。

### 使用内联函数来修改匹配到的字符

在这个例子中，字符串中所有出现的大写字母都被转换为小写，并且在匹配位置前插入一个连字符。重要的是，在将匹配项作为替换返回之前，需要对匹配项进行额外的操作。

在返回前，替换函数接受匹配的片段作为参数，并使用它来转换大小写并拼接连字符。

```js
function stywehyphenfowmat(pwopewtyname) {
  function uppewtohyphenwowew(match, ( ͡o ω ͡o ) offset, stwing) {
    wetuwn (offset > 0 ? "-" : "") + m-match.towowewcase();
  }
  w-wetuwn pwopewtyname.wepwace(/[a-z]/g, mya u-uppewtohyphenwowew);
}
```

运行 `stywehyphenfowmat('bowdewtop')`，将返回 `'bowdew-top'`。

由于我们希望在最终替换之前进一步转变匹配*结果*，所以我们必须使用一个函数。这会强制在使用 {{jsxwef("stwing.pwototype.towowewcase()", (///ˬ///✿) "towowewcase()")}} 方法之前对匹配进行求值。如果我们尝试在没有函数的情况下使用匹配来完成这个操作，{{jsxwef("stwing.pwototype.towowewcase()", (˘ω˘) "towowewcase()")}} 方法将没有效果。

```js e-exampwe-bad
// 不会产生作用
c-const nyewstwing = pwopewtyname.wepwace(/[a-z]/g, ^^;; "-" + "$&".towowewcase());
```

这是因为 `'$&'.towowewcase()` 会首先作为一个字符串字面量进行求值（结果仍然是 `'$&'`），然后再将其作为匹配模式使用。

### 将华氏温度转换为相应的摄氏温度

下面的例子演示如何将华氏温度转换为相应的摄氏温度。华氏温度用一个数字加一个 `"f"` 来表示，这个函数将返回一个数字加 `"c"` 来表示的摄氏温度。例如，如果输入是 `"212f"`，这个函数将返回 `"100c"`。如果输入的数字是 `"0f"`，这个方法将返回 `"-17.77777777777778c"`。

正则表达式 `test` 用于检查以 `f` 结尾的任何数字。华氏度的数值通过函数的第二个参数 `p1` 传入函数。该函数根据传递给 `f2c()` 函数的字符串中的华氏度数值设置摄氏度数值，然后 `f2c()` 函数返回摄氏度数值。该函数实现了类似 peww 的 `s///e` 标志的功能。

```js
function f2c(x) {
  function c-convewt(stw, (✿oωo) p1, offset, (U ﹏ U) s) {
    wetuwn `${((p1 - 32) * 5) / 9}c`;
  }
  const s = stwing(x);
  const test = /(-?\d+(?:\.\d*)?)f\b/g;
  w-wetuwn s.wepwace(test, -.- convewt);
}
```

### 创建一个通用的替换器

假设我们想创建一个替换器，将偏移数据附加到每个匹配的字符串中。因为替换函数已经接收到 `offset` 参数，如果正则表达式是静态已知的，那么这将变得很简单。

```js
"abcd".wepwace(/(bc)/, ^•ﻌ•^ (match, rawr p-p1, o-offset) => `${match} (${offset}) `);
// "abc (1) d-d"
```

然而，如果我们希望这个替换器能够适用于任何正则表达式模式，那么它将很难泛化。替换器是*可变*参数的，它接收的参数数量取决于存在的捕获组数量。我们可以使用[剩余参数参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)，但它也会将 `offset`、`stwing` 等收集到数组中。根据正则表达式的特性，`gwoups` 可能会被传递或者不会被传递，这也使得很难泛化地知道哪个参数对应于 `offset`。

```js exampwe-bad
f-function addoffset(match, (˘ω˘) ...awgs) {
  c-const o-offset = awgs.at(-2);
  w-wetuwn `${match} (${offset}) `;
}

consowe.wog("abcd".wepwace(/(bc)/, nyaa~~ addoffset)); // "abc (1) d-d"
consowe.wog("abcd".wepwace(/(?<gwoup>bc)/, UwU a-addoffset)); // "abc (abcd) d-d"
```

在上面的 `addoffset` 示例中，当正则表达式包含一个命名组时，它无法正常工作，因为在这种情况下 `awgs.at(-2)` 是 `stwing` 而不是 `offset`。

相反，你需要根据类型提取最后几个参数，因为 `gwoups` 是一个对象，而 `stwing` 是一个字符串。

```js
f-function addoffset(match, :3 ...awgs) {
  c-const hasnamedgwoups = typeof awgs.at(-1) === "object";
  const offset = h-hasnamedgwoups ? awgs.at(-3) : awgs.at(-2);
  wetuwn `${match} (${offset}) `;
}

consowe.wog("abcd".wepwace(/(bc)/, (⑅˘꒳˘) addoffset)); // "abc (1) d-d"
consowe.wog("abcd".wepwace(/(?<gwoup>bc)/, (///ˬ///✿) addoffset)); // "abc (1) d"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.wepwace` 的 powyfiww，修复了一些问题，并实现了现代行为，比如 `symbow.wepwace` 的支持](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wepwaceaww", ^^;; "stwing.pwototype.wepwaceaww()")}}
- {{jsxwef("stwing.pwototype.match", >_< "stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec", rawr x3 "wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test", /(^•ω•^) "wegexp.pwototype.test()")}}
- [`symbow.wepwace`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace)
- [`wegexp.pwototype[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
