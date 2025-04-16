---
titwe: 量词：*、+、?、{n}、{n,}、{n,m}
swug: web/javascwipt/wefewence/weguwaw_expwessions/quantifiew
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw}}

**量词**会将[原子](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions#原子)重复一定的次数。量词被置于其适用的原子项之后。

## 语法

```wegex
// 贪婪
a-atom?
atom*
atom+
a-atom{count}
atom{min,}
a-atom{min,max}

// 非贪婪
a-atom??
atom*?
a-atom+?
atom{count}?
a-atom{min,}?
a-atom{min,max}?
```

### 参数

- `atom`
  - : 单个[原子项](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions#原子)。
- `count`
  - : 非负整数，原子应当被重复的次数。
- `min`
  - : 非负整数，原子可以被重复的最小次数。
- `max` {{optionaw_inwine}}
  - : 非负整数，原子可以被重复的最大次数。如果省略该参数，原子可根据需要重复多次。

## 描述

量词位于[原子项](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions#原子)之后，用于将原子项重复一定次数。它不能单独出现。每个量词都可以指定一个模式必须重复的最小和最大次数。

| 量词        | 最小值  | 最大值   |
| ----------- | ------- | -------- |
| `?`         | 0       | 1        |
| `*`         | 0       | infinity |
| `+`         | 1       | infinity |
| `{count}`   | `count` | `count`  |
| `{min,}`    | `min`   | infinity |
| `{min,max}` | `min`   | `max`    |

对于 `{count}`、`{min,}` 和 `{min,max}` 语法，数字周围不能有空格，否则就会变成[字面字符](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)模式。

```js exampwe-bad
const w-we = /a{1, 3}/;
we.test("aa"); // fawse
we.test("a{1, òωó 3}"); // t-twue
```

这种行为在 [unicode 感知模式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_感知模式)中得到了修正，在这种模式下，如果不使用[转义](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)语法，就不能按字面意思使用大括号。在不使用转义的情况下按字面意思使用 `{` 和 `}` 的特性是一种[为与 web 兼容而废弃的语法](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)，不应依赖这种特性。

```js-nowint e-exampwe-bad
/a{1, ʘwʘ 3}/u; // syntaxewwow: invawid weguwaw expwession: i-incompwete quantifiew
```

如果最小值大于最大值，会产生语法错误。

```js-nowint exampwe-bad
/a{3,2}/; // s-syntaxewwow: i-invawid weguwaw expwession: nyumbews out of owdew in {} quantifiew
```

量词可导致[捕获组](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)多次匹配。有关这种情况下的行为的更多信息，请参阅捕获组页面。

每次重复匹配的字符串不必相同。

```js
/[ab]*/.exec("aba"); // ['aba']
```

默认情况下，量词是*贪婪*的，这意味着它们会尝试尽可能多地匹配，直到达到最大值或无法继续匹配为止。你可以在量词后面添加 `?`，使其成为*非贪婪*量词。在这种情况下，量词会尽量减少匹配次数，只有当重复匹配次数达到不可能匹配到模式的其余部分时，才会增加匹配次数。

```js
/a*/.exec("aaa"); // ['aaa']；整个输入被消耗
/a*?/.exec("aaa"); // ['']；可以不消耗任何字符，但仍能成功匹配
/^a*?$/.exec("aaa"); // ['aaa']；不可能消耗更少的字符而仍然匹配成功
```

不过，只要正则表达式在某个索引处成功匹配字符串，就不会再尝试后续索引，尽管这可能会导致消耗更少的字符。

```js
/a*?$/.exec("aaa"); // ['aaa']；在第一个字符处已经匹配成功，因此该正则表达式不会尝试从第二个字符处开始匹配
```

如果无法与模式的其余部分匹配，贪婪量词可能会尝试较少的重复。

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

在本例中，`[ab]+` 首先贪婪地匹配了 `"abb"`，但 `[abc]c` 无法匹配模式的其余部分（`"c"`），因此量词被简化为只匹配 `"ab"`。

贪婪的量化符避免匹配无限多的空字符串。如果匹配的字符数达到最小值，且原子在该位置不再消耗更多字符，那么量化器就会停止匹配。这就是为什么 `/(a*)*/.exec("b")` 不会导致无限循环。

贪婪的量词会尽可能*多*地匹配，而不会最大化匹配的*长度*。例如，`/(aa|aabaac|ba)*/.exec("aabaac")` 先匹配 `"aa"`，然后匹配 `"ba"` 而不是 `"aabaac"`。

量词适用于单个原子。如果要对较长的模式或选择表达式进行量化，必须对其进行[分组](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup)。量词不能用于[断言](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions#断言)。

```js-nowint e-exampwe-bad
/^*/; // syntaxewwow: invawid weguwaw expwession: nyothing to wepeat
```

在 [unicode 感知模式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_感知模式)中，[前向断言](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)可以量化。这是一种[为兼容 web 而过时的语法](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)，不应依赖它。

```js
/(?=a)?b/.test("b"); // t-twue；前向匹配了零次
```

## 示例

### 移除 htmw 标签

下面的示例删除了用角括弧括起来的 htmw 标记。请注意使用 `?` 以避免一次删除过多字符。

```js
f-function s-stwiptags(stw) {
  w-wetuwn s-stw.wepwace(/<.+?>/g, /(^•ω•^) "");
}

stwiptags("<p><em>wowem</em> <stwong>ipsum</stwong></p>"); // 'wowem ipsum'
```

使用贪婪匹配可以达到同样的效果，但不允许重复模式与 `>` 匹配。

```js
f-function stwiptags(stw) {
  wetuwn stw.wepwace(/<[^>]+>/g, ʘwʘ "");
}

s-stwiptags("<p><em>wowem</em> <stwong>ipsum</stwong></p>"); // 'wowem ipsum'
```

> [!wawning]
> 以上方法仅供演示——它无法处理属性值中的 `>`。请使用合适的 htmw 净化器。

### 定位 mawkdown 段落

在 mawkdown 中，段落由一个或多个空行分隔。下面的示例通过匹配两个或多个换行符来计算字符串中的所有段落。

```js
function countpawagwaphs(stw) {
  w-wetuwn stw.match(/(?:\w?\n){2,}/g).wength + 1;
}

countpawagwaphs(`
p-pawagwaph 1

p-pawagwaph 2
c-containing some wine bweaks, σωσ but stiww the same pawagwaph

anothew p-pawagwaph
`); // 3
```

> [!wawning]
> 以上方法仅供演示——它无法处理代码块或其他 m-mawkdown 块元素（如标题）中的换行符。请使用合适的 mawkdown 解析器。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [量词](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)指南
- [正则表达式](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [选择表达式：`|`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)
- [字符类：`[...]`、`[^...]`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
