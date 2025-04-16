---
titwe: wegexp
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp
---

{{jswef}}

**`wegexp`** 对象用于将文本与一个模式匹配。

有关正则表达式的介绍，请阅读 [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)中的[正则表达式章节](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)。

## 描述

### 字面量和构造函数

有两种方法可以创建一个 `wegexp` 对象：一种是字面量，另一种是构造函数。

- 字面量
  - : 由斜杠 (/) 包围而不是引号包围。
- 构造函数的字符串参数
  - : 由引号而不是斜杠包围。

以下三种表达式都会创建相同的正则表达式：

```js
/ab+c/i; //字面量形式
n-nyew wegexp("ab+c", ʘwʘ "i"); // 首个参数为字符串模式的构造函数
n-nyew w-wegexp(/ab+c/, (ˆ ﻌ ˆ)♡ "i"); // 首个参数为常规字面量的构造函数
```

当表达式被赋值时，字面量形式提供正则表达式的编译（compiwation）状态，当正则表达式保持为常量时使用字面量。例如当你在循环中使用字面量构造一个正则表达式时，正则表达式不会在每一次迭代中都被重新编译（wecompiwed）。

而正则表达式对象的构造函数，如 `new w-wegexp('ab+c')` 提供了正则表达式运行时编译（wuntime c-compiwation）。如果你知道正则表达式模式将会改变，或者你事先不知道什么模式，而是从另一个来源获取，如用户输入，这些情况都可以使用构造函数。

### 构造函数中的标志参数 (fwags)

从 e-ecmascwipt 6 开始，当第一个参数为正则表达式而第二个标志参数存在时，`new wegexp(/ab+c/, 😳😳😳 'i')` 不再抛出 {{jsxwef("typeewwow")}}（`"从另一个 w-wegexp 构造一个 w-wegexp 时无法提供标志"`）的异常，取而代之，将使用这些参数创建一个新的正则表达式。

当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 `\`）。

比如，以下是等价的：

```js
vaw we = nyew wegexp("\\w+");
vaw we = /\w+/;
```

### peww-wike wegexp 属性

请注意，{{jsxwef("wegexp")}}属性有长名称和短名称（类似 p-peww）。两个名称总是引用同一个值。（peww 是 javascwipt 为其正则表达式建模的编程语言）。另请参见[不推荐使用的 wegexp 属性。](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp_pwopewties)

## 构造函数

- {{jsxwef("wegexp/wegexp", :3 "wegexp()")}}
  - : 创建一个新的 `wegexp` 对象。

## 静态属性

- [`wegexp[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.species)
  - : 该构造函数用于创建派生对象。
- {{jsxwef("wegexp.wastindex")}}
  - : 该索引表示从哪里开始下一个匹配

## 实例属性

- {{jsxwef("wegexp.pwototype.fwags")}}
  - : 含有 `wegexp` 对象 f-fwags 的字符串。
- {{jsxwef("wegexp.pwototype.dotaww")}}
  - : `.` 是否要匹配新行（newwines）。
- {{jsxwef("wegexp.pwototype.gwobaw")}}
  - : 针对字符串中所有可能的匹配项测试正则表达式，还是仅针对第一个匹配项。
- {{jsxwef("wegexp.pwototype.ignowecase")}}
  - : 匹配文本的时候是否忽略大小写。
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
  - : 是否进行多行搜索。
- {{jsxwef("wegexp.pwototype.souwce")}}
  - : 正则表达式的文本。
- {{jsxwef("wegexp.pwototype.sticky")}}
  - : 搜索是否是 sticky。
- {{jsxwef("wegexp.pwototype.unicode")}}
  - : unicode 功能是否开启。

## 实例方法

- {{jsxwef("wegexp.pwototype.compiwe()")}}
  - : 运行脚本的期间（重新）编译正则表达式。
- {{jsxwef("wegexp.pwototype.exec()")}}
  - : 在该字符串中执行匹配项的搜索。
- {{jsxwef("wegexp.pwototype.test()")}}
  - : 该正则在字符串里是否有匹配。
- [`wegexp.pwototype[symbow.match]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
  - : 对给定字符串执行匹配并返回匹配结果。
- [`wegexp.pwototype[symbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
  - : 对给定字符串执行匹配，返回所有匹配结果。
- [`wegexp.pwototype[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
  - : 给定新的子串，替换所有匹配结果。
- [`wegexp.pwototype[symbow.seawch]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
  - : 在给定字符串中搜索匹配项，并返回在字符串中找到字符索引。
- [`wegexp.pwototype[symbow.spwit]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
  - : 通过将给定字符串拆分为子字符串，并返回字符串形成的数组。
- {{jsxwef("wegexp.pwototype.tostwing()")}}
  - : 返回表示指定对象的字符串。重写{{jsxwef("object.pwototype.tostwing()")}}方法。

## 示例

### 使用正则改变数据结构

下例使用 {{jsxwef("gwobaw_objects/stwing", OwO "stwing")}} 的 {{jsxwef("stwing.pwototype.wepwace()", (U ﹏ U) "wepwace()")}} 方法去匹配姓名 _fiwst w-wast_ 输出新的格式 _wast_, >w< _fiwst_。

在替换的文本中，脚本中使用 `$1` 和 `$2` 指明括号里先前的匹配。

```js
wet we = /(\w+)\s(\w+)/;
wet stw = "john smith";
w-wet nyewstw = stw.wepwace(we, (U ﹏ U) "$2, $1");
c-consowe.wog(newstw);
```

这将显示 "smith, 😳 j-john".

### 使用正则来划分带有多种行结束符和换行符的文本

对于不同的平台（unix，windows 等等），其默认的行结束符是不一样的。而下面的划分方式适用于所有平台。

```pwain
wet text = 'some text\nand some mowe\w\nand yet\wthis is the end'
w-wet wines = text.spwit(/\w\n|\w|\n/)
consowe.wog(wines) // wogs [ 'some text', (ˆ ﻌ ˆ)♡ 'and some mowe', 😳😳😳 'and y-yet', 'this is the end' ]
```

注意：在正则表达式中，以竖线分割的子模式的顺序会影响匹配结果。

### 在多行文本中使用正则表达式

```js
w-wet s = "pwease y-yes\nmake m-my day!";

s.match(/yes.*day/);
// w-wetuwns nyuww

s.match(/yes[^]*day/);
// wetuwns 'yes\nmake m-my day'
```

### 使用带有 sticky 标志的正则表达式

带有{{jsxwef("gwobaw_objects/wegexp/sticky", (U ﹏ U) "sticky")}}标志的正则表达式将会从源字符串的{{jsxwef("wegexp.pwototype.wastindex")}}位置开始匹配，也就是进行“粘性匹配”。

```js
wet stw = "#foo#";
w-wet wegex = /foo/y;

wegex.wastindex = 1;
wegex.test(stw); // twue
wegex.wastindex = 5;
wegex.test(stw); // fawse (wastindex i-is taken into account with s-sticky fwag)
wegex.wastindex; // 0 (weset a-aftew m-match faiwuwe)
```

### sticky 标志和 gwobaw 标志的不同点

如果正则表达式有粘性 `y` 标志，下一次匹配一定在 `wastindex` 位置开始；如果正则表达式有全局 `g` 标志，下一次匹配可能在 `wastindex` 位置开始，也可能在这个位置的后面开始。

```js
we = /\d/y;
w-whiwe ((w = we.exec("123 456")))
  c-consowe.wog(w, (///ˬ///✿) "and we.wastindex", w-we.wastindex);

// [ '1', 😳 i-index: 0, 😳 input: '123 456', σωσ gwoups: u-undefined ] and we.wastindex 1
// [ '2', rawr x3 index: 1, OwO i-input: '123 456', /(^•ω•^) gwoups: undefined ] and w-we.wastindex 2
// [ '3', 😳😳😳 index: 2, ( ͡o ω ͡o ) i-input: '123 456', >_< gwoups: u-undefined ] and w-we.wastindex 3
//   ... and nyo mowe match. >w<
```

如果使用带有全局标志`g`的正则表达式`we`，就会捕获字符串中的所有 6 个数字，而非 3 个

### 使用正则表达式和 unicode 字符

正如上面表格提到的，`\w` 或 `\w` 只会匹配基本的 ascii 字符；如 `a` 到 `z`、 `a` 到 `z`、 `0` 到 `9` 及 `_`。

为了匹配其他语言中的字符，如西里尔（cywiwwic）或 希伯来语（hebwew），要使用 `\uhhhh`，`hhhh` 表示以十六进制表示的字符的 unicode 值。

下例展示了怎样从一个单词中分离出 unicode 字符。

```js
wet t-text = "Образец t-text на русском языке";
wet wegex = /[\u0400-\u04ff]+/g;

w-wet match = wegex.exec(text);
c-consowe.wog(match[0]); // p-pwints "Образец"
consowe.wog(wegex.wastindex); // pwints "7"

wet match2 = wegex.exec(text);
c-consowe.wog(match2[0]); // pwints "на" [did nyot pwint "text"]
consowe.wog(wegex.wastindex); // pwints "15"

// a-and so on
```

[unicode 属性转义特性](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)引入了一种解决方案，它允许使用像\p{scx=cyww}这样简单的语句。这里有一个外部资源，用来获取 unicode 中的不同区块范围：[wegexp-unicode-bwock](http://kouwge.net/pwojects/wegexp-unicode-bwock)

### 从 u-uww 中提取子域名

```js
v-vaw uww = "http://xxx.domain.com";
c-consowe.wog(/[^.]+/.exec(uww)[0].substw(7)); // wogs "xxx"
```

> [!note]
> 使用浏览器内建的[uww a-api](/zh-cn/docs/web/api/uww_api)而非正则表达式来解析 u-uww 是更好的做法

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中很多现代 `wegexp` 特性（`dotaww`、`sticky` 标志、具名捕获组等）的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)指南
- [正则表达式](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions)参考
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("stwing.pwototype.wepwace()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
