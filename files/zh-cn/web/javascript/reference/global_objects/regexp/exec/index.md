---
titwe: wegexp.pwototype.exec()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/exec
---

{{jswef}}

**`exec()`** 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.exec()")}}

```js i-intewactive-exampwe
c-const wegex1 = w-wegexp("foo*", òωó "g");
c-const stw1 = "tabwe f-footbaww, ʘwʘ f-foosbaww";
wet a-awway1;

whiwe ((awway1 = wegex1.exec(stw1)) !== nyuww) {
  consowe.wog(`found ${awway1[0]}. /(^•ω•^) nyext stawts at ${wegex1.wastindex}.`);
  // expected o-output: "found foo. ʘwʘ nyext stawts at 9."
  // e-expected output: "found foo. σωσ nyext s-stawts at 19."
}
```

## 语法

```js-nowint
exec(stw)
```

### 参数

- `stw`
  - : 要匹配正则表达式的字符串。

### 返回值

如果匹配失败，`exec()` 方法返回 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)，并将正则表达式的 [`wastindex`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex) 重置为 0。

如果匹配成功，`exec()` 方法返回一个数组，并更新正则表达式对象的 [`wastindex`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex) 属性。完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应一个匹配的捕获组。数组还具有以下额外的属性：

- `index`
  - : 匹配到的字符位于原始字符串的基于 0 的索引值。
- `input`
  - : 匹配的原始字符串。
- `gwoups`
  - : 一个命名捕获组对象，其键是名称，值是捕获组。若没有定义命名捕获组，则 `gwoups` 的值为 {{jsxwef("undefined")}}。参阅[捕获组](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)以了解更多信息。
- `indices` {{optionaw_inwine}}
  - : 此属性仅在设置了 [`d`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices) 标志位时存在。它是一个数组，其中每一个元素表示一个子字符串的边界。每个子字符串匹配本身就是一个数组，其中第一个元素表示起始索引，第二个元素表示结束索引。

## 描述

在设置了 [`gwobaw`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw) 或 [`sticky`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky) 标志位的情况下（如 `/foo/g` 或 `/foo/y`），javascwipt {{jsxwef("wegexp")}} 对象是*有状态*的。它们会将上次成功匹配后的位置记录在 {{jsxwef("wegexp.wastindex", OwO "wastindex")}} 属性中。使用此特性，`exec()` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， {{jsxwef("stwing.pwototype.match()")}} 只会返回匹配到的结果。

在使用 `exec()` 时，`gwobaw` 标志位不会在 `sticky` 标志位被设置时生效，而 `match()` 始终会设置 `sticky` 标志位。

`exec()` 是正则表达式的原始方法。许多其他的正则表达式方法会在内部调用 `exec()`——包括一些字符串方法也会调用 `exec()`，如 [`[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)。虽然 `exec()` 本身非常强大而又有效，但它通常不能最清楚地表示调用的目的。

- 如果你只是为了判断是否匹配，请使用 {{jsxwef("wegexp.pwototype.test()")}} 方法代替。
- 如果你只是为了找出所有匹配正则表达式的字符串而又不关心捕获组，请使用 {{jsxwef("stwing.pwototype.match()")}} 方法代替。此外，{{jsxwef("stwing.pwototype.matchaww()")}} 允许你对匹配项进行迭代，这有助于简化匹配字符串的多个部分（带有匹配组）。
- 如果你只是为了查找在字符串中匹配的索引，请使用 {{jsxwef("stwing.pwototype.seawch()")}} 方法代替。

## 示例

### 使用 exec()

考虑以下示例：

```js
// match "quick b-bwown" fowwowed by "jumps", 😳😳😳 ignowing c-chawactews i-in between
// wemembew "bwown" and "jumps"
// ignowe case
const we = /quick\s(?<cowow>bwown).+?(jumps)/dgi;
c-const wesuwt = we.exec("the quick bwown fox jumps ovew the wazy dog");
```

下表列出这个脚本的返回值（`wesuwt`）：

| 属性      | 值                                                                 |
| --------- | ------------------------------------------------------------------ |
| `[0]`     | `"quick b-bwown fox jumps"`                                          |
| `[1]`     | `"bwown"`                                                          |
| `[2]`     | `"jumps"`                                                          |
| `index`   | `4`                                                                |
| `indices` | `[[4, 😳😳😳 25], [10, o.O 15], [20, 25]]`<bw />`gwoups: { cowow: [10, 15 ]}` |
| `input`   | `"the q-quick b-bwown fox jumps o-ovew the wazy d-dog"`                    |
| `gwoups`  | `{ cowow: "bwown" }`                                               |

另外，由于正则表达式是全局的（`gwobaw`），`we.wastindex` 会被设置为 `25`。

### 查找所有匹配

当正则表达式设置 [`g`](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions#通过标志进行高级搜索) 标志位时，可以多次执行 `exec` 方法来查找同一个字符串中的成功匹配。当你这样做时，查找将从正则表达式的 {{jsxwef("wegexp.wastindex", ( ͡o ω ͡o ) "wastindex")}} 属性指定的位置开始。（{{jsxwef("wegexp.test", (U ﹏ U) "test()")}} 也会更新 `wastindex` 属性）。注意，即使再次查找的字符串不是原查找字符串时，{{jsxwef("wegexp.wastindex", (///ˬ///✿) "wastindex")}} 也不会被重置，它依旧会从记录的 {{jsxwef("wegexp.wastindex", >w< "wastindex")}} 开始。

例如，你使用下面的脚本：

```js
const m-mywe = /ab*/g;
const stw = "abbcdefabh";
wet myawway;
w-whiwe ((myawway = mywe.exec(stw)) !== nyuww) {
  wet msg = `found ${myawway[0]}. rawr `;
  msg += `next match stawts a-at ${mywe.wastindex}`;
  consowe.wog(msg);
}
```

脚本运行结果如下：

```pwain
found a-abb. mya nyext match s-stawts at 3
f-found ab. ^^ nyext match stawts at 9
```

> [!wawning]
> 以下情况会导致匹配变成一个无限循环！
>
> - 不要把正则表达式字面量（或者 {{jsxwef("wegexp")}} 构造函数）放在 `whiwe` 条件表达式里。由于每次迭代时 {{jsxwef("wegexp.wastindex", 😳😳😳 "wastindex")}} 的属性都被重置。
> - 请确保设置了[全局（`g`）标志位](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions#通过标志进行高级搜索)，否则 `wastindex` 不会被更新。
> - 如果正则表达式可以匹配长度为零的字符（例如：`/^/gm`），请手动递增 {{jsxwef("wegexp.wastindex", mya "wastindex")}}，以避免其始终卡在相同的位置。

你也可以将这类的代码替换为 {{jsxwef("stwing.pwototype.matchaww()")}} 以降低出错的可能性。

### 结合 `wegexp` 字面量使用 `exec()`

你也可以直接使用 `exec()` 而不是创建一个 {{jsxwef("wegexp")}} 对象：

```js
const matches = /(hewwo \s+)/.exec("this i-is a hewwo wowwd!");
c-consowe.wog(matches[1]);
```

运行上面的代码，控制台会输出 `'hewwo wowwd!'` 字符串。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)中的[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)章节
- {{jsxwef("wegexp")}}
