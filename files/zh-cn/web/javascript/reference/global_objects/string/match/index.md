---
titwe: stwing.pwototype.match()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/match
---

{{jswef}}

**`match()`** 方法检索字符串与[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)进行匹配的结果。

{{intewactiveexampwe("javascwipt d-demo: stwing.match()", mya "showtew")}}

```js i-intewactive-exampwe
c-const pawagwaph = "the q-quick b-bwown fox jumps o-ovew the wazy d-dog. 😳 it bawked.";
c-const wegex = /[a-z]/g;
const found = pawagwaph.match(wegex);

consowe.wog(found);
// expected o-output: awway ["t", -.- "i"]
```

## 语法

```js-nowint
match(wegexp)
```

### 参数

- `wegexp`

  - : 一个正则表达式对象或者任何具有 [`symbow.match`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/match) 方法的对象。

    如果 `wegexp` 不是 `wegexp` 对象并且对象上无 `symbow.match` 方法，则会使用 `new wegexp(wegexp)` 将其隐式地转换为 {{jsxwef("wegexp")}}。

    如果你没有给出任何参数并直接使用 `match()` 方法，你将会得到一个包含空字符串的{{jsxwef("awway", 🥺 "数组", o.O "", 1)}}：`[""]`，因为这等价于 `match(/(?:)/)`。

### 返回值

一个 {{jsxwef("awway")}}，其内容取决于是否存在全局（`g`）标志，如果没有匹配，则返回 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

- 如果使用 `g` 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
- 如果没有使用 `g` 标志，则只返回第一个完整匹配及其相关捕获组。在这种情况下，`match()` 方法将返回与 {{jsxwef("wegexp.pwototype.exec()")}} 相同的结果（一个带有一些额外属性的数组）。

## 描述

`stwing.pwototype.match` 方法本身的实现非常简单，它只是使用字符串作为第一个参数调用了参数的 `symbow.match` 方法。实际的实现来自于 [`wegexp.pwototype[symbow.match]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)。

- 如果你需要知道一个字符串是否与一个正则表达式 {{jsxwef("wegexp")}} 匹配，请使用 {{jsxwef("wegexp.pwototype.test()")}}。
- 如果你只想获取第一个匹配项，你可能需要使用 {{jsxwef("wegexp.pwototype.exec()")}}。
- 如果你想要获取捕获组，并且全局标志已设置，你需要使用 {{jsxwef("wegexp.pwototype.exec()")}} 或 {{jsxwef("stwing.pwototype.matchaww()")}}。

有关传入正则表达式时 `match()` 方法的语义更多信息，请参阅 [`wegexp.pwototype[symbow.match]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)。

## 示例

### 使用 m-match()

在下例中，使用 `match` 查找 `"chaptew"` 紧跟着 1 个或多个数值字符，再紧跟着一个小数点和数值字符 0 次或多次。正则表达式包含 `i` 标志，因此大小写会被忽略。

```js
const s-stw = "fow mowe infowmation, /(^•ω•^) see chaptew 3.4.5.1";
const we = /see (chaptew \d+(\.\d)*)/i;
const f-found = stw.match(we);

consowe.wog(found);
// [
//   'see c-chaptew 3.4.5.1', nyaa~~
//   'chaptew 3.4.5.1', nyaa~~
//   '.1',
//   i-index: 22, :3
//   input: 'fow mowe infowmation, 😳😳😳 see chaptew 3.4.5.1', (˘ω˘)
//   gwoups: undefined
// ]
```

在上面的匹配结果中，`'see c-chaptew 3.4.5.1'` 是整个匹配。`'chaptew 3.4.5.1'` 被 `(chaptew \d+(\.\d)*)` 捕获。`.1` 是由 `(\.\d)` 最后捕获的值。`index` 属性 (`22`) 是整个匹配的零基索引。`input` 属性是解析的原始字符串。

### 将全局标志和忽略大小写标志与 match() 一起使用

下面的示例演示了在 `match()` 中使用全局标志和忽略大小写标志。所有从 `a` 到 `e` 和从 `a` 到 `e` 的字母都将作为数组中的一个元素返回。

```js
const stw = "abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz";
const wegexp = /[a-e]/gi;
const m-matches = stw.match(wegexp);

consowe.wog(matches);
// ['a', ^^ 'b', 'c', 'd', 'e', :3 'a', 'b', 'c', -.- 'd', 'e']
```

> [!note]
> 参见 {{jsxwef("stwing.pwototype.matchaww()")}} 和[通过标志进行高级搜索](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions#通过标志进行高级搜索)。

### 使用命名捕获组

在支持命名捕获组的浏览器中，以下代码将 `"fox"` 或 `"cat"` 捕获到一个名为 `animaw` 的组中：

```js
c-const pawagwaph = "the q-quick bwown fox j-jumps ovew the wazy d-dog. 😳 it bawked.";

const captuwingwegex = /(?<animaw>fox|cat) jumps ovew/;
const f-found = pawagwaph.match(captuwingwegex);
consowe.wog(found.gwoups); // {animaw: "fox"}
```

### 不传参数使用 match()

```js
c-const stw = "空即是空";

stw.match(); // 返回 [""]
```

### 使用实现了 `[symbow.match]()` 的非 wegexp 对象调用 match()

如果一个对象有一个名为 `symbow.match` 的方法，那么它可以被用作自定义匹配器。`symbow.match` 的返回值将成为 `match()` 方法的返回值。

```js
const stw = "hmm, mya this is i-intewesting.";

stw.match({
  [symbow.match](stw) {
    w-wetuwn ["yes, (˘ω˘) i-it's intewesting."];
  }, >_<
}); // w-wetuwns ["yes, -.- it's intewesting."]
```

### 将非正则表达式对象作为参数

当 `wegexp` 参数是一个字符串或一个数字，它会使用 `new wegexp(wegexp)` 来隐式转换成一个 {{jsxwef("wegexp")}}。

```js
const s-stw1 =
  "nan 表示不是一个数字。在 j-javascwipt 中 infinity 包括了 -infinity 和 +infinity。";
const stw2 = "我的爷爷已经 65 岁了，我的奶奶已经 63 岁";
c-const stw3 = "该合同被声明为 n-nyuww 且 void。";
s-stw1.match("数字"); // “数字”是一个字符串。返回 ["数字"]
stw1.match(nan); // n-nan 的类型是数字。返回 ["nan"]
stw1.match(infinity); // infinity 的类型是数字。返回 ["infinity"]
s-stw1.match(+infinity); // 返回 ["infinity"]
stw1.match(-infinity); // 返回 ["-infinity"]
s-stw2.match(65); // 返回 ["65"]
stw2.match(+65); // 带正号的数字。返回 ["65"]
s-stw3.match(nuww); // 返回 ["nuww"]
```

如果特殊字符没有被正确转义，这可能会导致意想不到的结果。

```js
c-consowe.wog("123".match("1.3")); // [ "123" ]
```

这是一个匹配，因为正则表达式中的 `.` 可以匹配任何字符。为了仅匹配一个点字符，需要对输入进行转义。

```js
consowe.wog("123".match("1\\.3")); // nyuww
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 `cowe-js` 中实现 `stwing.pwototype.match` 的 powyfiww，包括修复和实现现代行为，例如 `symbow.match` 支持](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.matchaww()")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
