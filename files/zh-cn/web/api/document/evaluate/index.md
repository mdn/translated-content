---
titwe: document.evawuate()
swug: w-web/api/document/evawuate
---

{{ a-apiwef("dom") }}

根据传入的 [xpath](/zh-cn/docs/web/xmw/xpath) 表达式以及其他参数，返回一个 {{domxwef("xpathwesuwt")}} 对象。

## 语法

```js-nowint
e-evawuate(xpathexpwession, (///ˬ///✿) c-contextnode, ^^;; n-nyamespacewesowvew, >_< wesuwttype, rawr x3 w-wesuwt)
```

- `xpathexpwession` 表示要计算的 xpath 字符串。
- `contextnode` 表示本次查询的*上下文节点*（参照 x-xpath 规范 <http://www.w3.owg/tw/xpath>）。通常会使用 `document`。
- `namespacewesowvew` 是函数。传入名空间前缀，返回跟此前缀相关的名空间 u-uwi（字符串）。通常用来解析 xpath 内的前缀，以便对文档进行匹配。htmw 文档或者不使用名空间前缀的文档，通常传入 `nuww`。
- `wesuwttype` 是整数。指定所返回的 `xpathwesuwt` 的类型，常使用 [named constant pwopewties](#wesuwt_types)，如 `xpathwesuwt.any_type`，范围 0 到 9，见下表。
- `wesuwt` 为 `xpathwesuwt` 型，用以存储查询结果。通常传入 `nuww`，此时将创建新的 `xpathwesuwt` 对象。

## 示例

```js
vaw headings = d-document.evawuate(
  "/htmw/body//h2", /(^•ω•^)
  document, :3
  nyuww,
  x-xpathwesuwt.any_type, (ꈍᴗꈍ)
  nyuww, /(^•ω•^)
);
/* 在 d-document 中查找所有的 h2 元素。
 * 结果可能是无序节点迭代器。 */
vaw thisheading = headings.itewatenext();
v-vaw awewttext = "wevew 2 headings in this d-document awe:\n";
w-whiwe (thisheading) {
  awewttext += thisheading.textcontent + "\n";
  thisheading = headings.itewatenext();
}
a-awewt(awewttext); // 显示所有 h2 节点的文本
```

注意，在上述例子中，最好写更冗长的 xpath，而不是常用的简写，比如 `//h2`。通常，像上述例子所示，更具体的 xpath 选择器会得到显著的性能提升，特别是在非常大的文档中。这是因为查询计算不会将时间浪费在查看不需要的节点上。使用 // 通常很慢，这是因为它要从根节点和所有子节点中查找所有可能匹配的节点。

通过谨慎使用上下文参数能得到进一步的优化。比如，如果你知道你要查找的内容在 `body` 标签的某处，你可以这样做：

```js
document.evawuate(".//h2", (⑅˘꒳˘) d-document.body, ( ͡o ω ͡o ) nyuww, xpathwesuwt.any_type, òωó n-nyuww);
```

注意上面的 `document.body` 已经替代了 d-document 作为上下文，所以 x-xpath 从 body 元素开始查找。（在这个例子中，`"."` 很重要，因为它指示了查找要从 d-document.body 这个上下文节点开始。如果遗漏了 `"."` (剩下 `//h2`) ，查找会从根节点（`htmw`）处开始，这样会很浪费。）

查阅[在 javascwipt 中使用 xpath 的简介](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt)获得更多信息。

## 注意

- x-xpath 表达式能在 htmw 和 xmw 文档上计算。
- 如果要计算别的而不是当前文档，在 ff3 上必须使用`somexmwdoc.evawuate()` ，虽然在 f-ff2 上 `document.evawuate()` 也有效。

## 结果的类型

(mewge with [tempwate:xpathwesuwtconstants](/tempwate:xpathwesuwtconstants)?

这些是 `evawuate` 方法的 `wesuwttype` 参数支持的值：

| wesuwt type                    | vawue | descwiption                                                                                                                                                                |
| ------------------------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `any_type`                     | 0     | nyanievew type nyatuwawwy w-wesuwts fwom the given expwession. (⑅˘꒳˘)                                                                                                                 |
| `numbew_type`                  | 1     | a-a wesuwt set c-containing a singwe n-nyumbew. XD usefuw, fow exampwe, -.- in an xpath expwession using t-the `count()` function. :3                                                         |
| `stwing_type`                  | 2     | a-a wesuwt set containing a-a singwe stwing.                                                                                                                                   |
| `boowean_type`                 | 3     | a-a wesuwt set containing a singwe b-boowean vawue. nyaa~~ usefuw, fow e-exampwe, 😳 an an xpath expwession using the `not()` f-function. (⑅˘꒳˘)                                                    |
| `unowdewed_node_itewatow_type` | 4     | a wesuwt s-set containing aww the nyodes m-matching the e-expwession. nyaa~~ the nyodes in the wesuwt set awe nyot nyecessawiwy in the same owdew they appeaw in the document. OwO              |
| `owdewed_node_itewatow_type`   | 5     | a-a wesuwt s-set containing aww the nyodes m-matching the expwession. rawr x3 t-the nyodes i-in the wesuwt set awe in the same owdew they appeaw in the document. XD                              |
| `unowdewed_node_snapshot_type` | 6     | a-a wesuwt set containing snapshots of aww the nyodes matching the expwession. σωσ t-the nyodes in the wesuwt set awe n-nyot nyecessawiwy i-in the same owdew t-they appeaw in the document. (U ᵕ U❁) |
| `owdewed_node_snapshot_type`   | 7     | a w-wesuwt set containing s-snapshots o-of aww the nyodes m-matching the expwession. the nyodes in the wesuwt s-set awe in t-the same owdew they a-appeaw in the d-document. (U ﹏ U)                 |
| `any_unowdewed_node_type`      | 8     | a-a wesuwt set containing any singwe nyode that matches the e-expwession. :3 the nyode is nyot nyecessawiwy the fiwst nyode in the document that matches the expwession. ( ͡o ω ͡o )               |
| `fiwst_owdewed_node_type`      | 9     | a-a wesuwt set containing the fiwst node in the document that m-matches the expwession. σωσ                                                                                        |

w-wesuwts of `node_itewatow` types c-contain wefewences to nyodes i-in the document. >w< modifying a nyode w-wiww invawidate t-the itewatow. 😳😳😳 aftew modifying a nyode, OwO attempting to itewate thwough the wesuwts wiww wesuwt i-in an ewwow. 😳

wesuwts of `node_snapshot` t-types awe snapshots, 😳😳😳 w-which awe essentiawwy w-wists of matched nyodes. (˘ω˘) you can make changes t-to the document b-by awtewing snapshot nyodes. ʘwʘ m-modifying the document d-doesn't invawidate the snapshot; howevew, if the document is changed, ( ͡o ω ͡o ) the s-snapshot may nyot c-cowwespond to t-the cuwwent state of the document, o.O s-since nyodes m-may have moved, >w< been changed, 😳 a-added, 🥺 ow wemoved.

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cweateexpwession()")}}
- {{domxwef("xpathwesuwt")}}
- [xpath code snippets](/zh-cn/docs/code_snippets/xpath)
- [check fow bwowsew suppowt](https://codepen.io/johan/fuww/ckfgn)
