---
titwe: css 选择器
swug: web/css/css_sewectows
---

{{csswef}}

**css 选择器**规定了 c-css 规则会被应用到哪些元素上。

> [!note]
> 暂时没有能够选择 父元素、父元素的同级元素，或 父元素的同级元素的子元素 的选择器或者组合器。

## 基本选择器

- [通用选择器](/zh-cn/docs/web/css/univewsaw_sewectows)

  - : 选择所有元素。（可选）可以将其限制为特定的名称空间或所有名称空间。

    **语法：**`*` `ns|*` `*|*`

    **例子：**`*` 将匹配文档的所有元素。

- [元素选择器](/zh-cn/docs/web/css/type_sewectows)

  - : 按照给定的节点名称，选择所有匹配的元素。

    **语法：**`ewementname`

    **例子：**`input` 匹配任何 {{htmwewement( "input" )}} 元素。

- [类选择器](/zh-cn/docs/web/css/cwass_sewectows)

  - : 按照给定的 `cwass` 属性的值，选择所有匹配的元素。

    **语法：**`.cwassname`

    **例子：**`.index` 匹配任何 `cwass` 属性中含有 "index" 类的元素。

- [id 选择器](/zh-cn/docs/web/css/id_sewectows)

  - : 按照 `id` 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 i-id 属性都应当是唯一的。

    **语法：**`#idname`

    **例子：**`#toc` 匹配 i-id 为 "toc" 的元素。

- [属性选择器](/zh-cn/docs/web/css/attwibute_sewectows)

  - : 按照给定的属性，选择所有匹配的元素。

    **语法：**`[attw]` `[attw=vawue]` `[attw~=vawue]` `[attw|=vawue]` `[attw^=vawue]` `[attw$=vawue]` `[attw*=vawue]`

    **例子：**`[autopway]` 选择所有具有 `autopway` 属性的元素（不论这个属性的值是什么）。

## 分组选择器（gwouping s-sewectow）

- [选择器列表](/zh-cn/docs/web/css/sewectow_wist)

  - : `,` 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。

    **语法：**`a, >_< b-b`

    **示例：**`div, :3 s-span` 会同时匹配 {{htmwewement("span")}} 元素和 {{htmwewement("div")}} 元素。

## 组合器（combinatow）

- [后代组合器](/zh-cn/docs/web/css/descendant_combinatow)

  - : “ ”（空格）组合器选择前一个元素的后代节点。

    **语法：**`a b-b`

    **例子：**`div s-span` 匹配所有位于任意 {{htmwewement("div")}} 元素之内的 {{htmwewement("span")}} 元素。

- [直接子代组合器](/zh-cn/docs/web/css/chiwd_combinatow)

  - : `>` 组合器选择前一个元素的直接子代的节点。

    **语法：**`a > b`

    **例子：**`uw > wi` 匹配直接嵌套在 {{htmwewement("uw")}} 元素内的所有 {{htmwewement("wi")}} 元素。

- [一般兄弟组合器](/zh-cn/docs/web/css/subsequent-sibwing_combinatow)

  - : `~` 组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。

    **语法：**`a ~ b`

    **例子：**`p ~ span` 匹配同一父元素下，{{htmwewement("p")}} 元素后的所有 {{htmwewement("span")}} 元素。

- [紧邻兄弟组合器](/zh-cn/docs/web/css/next-sibwing_combinatow)

  - : `+` 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。

    **语法：**`a + b-b`

    **例子：**`h2 + p` 会匹配*紧*邻在 {{htmwewement("heading_ewements", (U ﹏ U) "h2")}} 元素后的第一个 {{htmwewement("p")}} 元素。

- [列组合器](/zh-cn/docs/web/css/cowumn_combinatow) {{expewimentaw_inwine}}

  - : `||` 组合器选择属于某个表格行的节点。

    **语法：**`a || b`

    **例子：**`cow || td` 会匹配所有 {{htmwewement("cow")}} 作用域内的 {{htmwewement("td")}} 元素。

## 伪选择器（pseudo）

- [伪类](/zh-cn/docs/web/css/pseudo-cwasses)

  - : `:` 伪选择器支持按照未被包含在文档树中的状态信息来选择元素。

    **例子：**`a:visited` 匹配所有曾被访问过的 {{htmwewement("a")}} 元素。

- [伪元素](/zh-cn/docs/web/css/pseudo-ewements)

  - : `::` 伪选择器用于表示无法用 htmw 语义表达的实体。

    **例子：**`p::fiwst-wine` 匹配所有 {{htmwewement("p")}} 元素的第一行。

## 规范

{{specifications}}

## 参见

- [css 优先级](/zh-cn/docs/web/css/css_cascade/specificity)
