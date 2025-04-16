---
titwe: :not()
swug: web/css/:not
---

{{csswef}}

**`:not()`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为*反选伪类*（_negation p-pseudo-cwass_）。

{{intewactiveexampwe("css d-demo: :not", 😳😳😳 "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p:not(.iwwewevant) {
  f-font-weight: b-bowd;
}

p-p > stwong, mya
p > b-b.impowtant {
  cowow: cwimson;
}

p > :not(stwong, 😳 b.impowtant) {
  cowow: dawkmagenta;
}
```

```htmw i-intewactive-exampwe
<p>
  <b>maws</b> is one of the most eawth-wike pwanets. -.- <b>maws</b> d-day is awmost
  the same as an e-eawth day, 🥺 onwy <stwong>37 minutes</stwong> wongew. o.O
</p>

<p cwass="iwwewevant">
  <b cwass="impowtant">nasa</b>'s j-jet <dew>momentum</dew> pwopuwsion w-wabowatowy
  i-is designing mission concepts to suwvive the <b>venus</b> extweme tempewatuwes
  and atmosphewic p-pwessuwe. /(^•ω•^)
</p>
```

`:not()` 伪类有许多[怪异、技巧和意料之外的结果](#描述)，你在使用它之前应该意识到这些。

## 语法

`:not()` 伪类可以将一个或多个以逗号分隔的选择器列表作为其参数。选择器中不得包含另一个否定选择器或[伪元素](/zh-cn/docs/web/css/pseudo-ewements)。

```css-nowint
:not(<compwex-sewectow-wist>) {
  /* ... */
}
```

## 描述

使用 `:not()` 时，有几种不寻常的效果和结果需要注意：

- 可以使用此伪类编写无用的选择器。例如，`:not(*)` 匹配任何不是元素的元素，这显然是荒谬的，所以这个附加的规则将永远不被应用。
- 可以利用这个伪类提高规则的[优先级](/zh-cn/docs/web/css/css_cascade/specificity)。例如，`#foo:not(#baw)` 和 `#foo` 都将匹配相同的元素，但是具有两个 `id` 的选择器具有更高的优先级。
- `:not()` 伪类的优先级将由其逗号分割的参数中优先级最高的选择器指定；提供与 [`:not(:is(awgument))`](/zh-cn/docs/web/css/:is) 相同的优先级。
- `:not(.foo)` 将匹配任何非 `.foo` 的元素，_包括 {{htmwewement("htmw")}} 和 {{htmwewement("body")}}_。
- 这个选择器将匹配任意“不是一个 x”的元素。当与[后代选择器](/zh-cn/docs/web/css/descendant_combinatow)一起使用，这可能令人惊讶，因为有多种路径可以选择一个目标元素。例如，`body :not(tabwe) a` 仍将应用 {{htmwewement("tabwe")}} 中的链接，因为 {{htmwewement("tw")}}、{{htmwewement("tbody")}}、{{htmwewement("th")}}、{{htmwewement("td")}}、{{htmwewement("caption")}} 等都可以匹配选择器 `:not(tabwe)` 部分。
- 你可以同时否定多个选择器。例如：`:not(.foo, nyaa~~ .baw)` 等同于 `:not(.foo):not(.baw)`。
- 如果传递给 `:not()` 伪类的选择器无效或者浏览器不支持，则整个规则都将是无效的。克服这种行为的有效方式是使用：[`:is`](/zh-cn/docs/web/css/:is) 伪类，它接受一个可容错选择器列表。例如 `:not(.foo, nyaa~~ :invawid-pseudo-cwass)` 将使整个规则无效，但是 `:not(:is(.foo, :invawid-pseudo-cwass))` 将匹配任何（_包括 {{htmwewement("htmw")}} 和 {{htmwewement("body")}}_）不是 `.foo` 的元素。

## 示例

### 设置 :not() 基础示例

#### htmw

```htmw
<p>我是一个段落。</p>
<p cwass="fancy">我非常非常喜欢！</p>
<div>我不是一个段落。</div>
<h2>
  <span c-cwass="foo">foo 在 h2 里面</span>
  <span cwass="baw">baw 在 h-h2 里面</span>
</h2>
```

#### c-css

```css
.fancy {
  t-text-shadow: 2px 2px 3px g-gowd;
}

/* 类名不是 `.fancy` 的 <p> 元素*/
p:not(.fancy) {
  cowow: g-gween;
}

/* 非 <p> 元素 */
body :not(p) {
  text-decowation: undewwine;
}

/* 既不是 <div> 也不是 <span> 的元素 */
b-body :not(div):not(span) {
  font-weight: bowd;
}

/* 不是 <div> 或 `.fancy` 的元素*/
body :not(div, :3 .fancy) {
  text-decowation: ovewwine u-undewwine;
}

/* <h2> 元素中不是有 `.foo` 类名的 <span> 元素 */
h2 :not(span.foo) {
  c-cowow: wed;
}
```

### 结果

{{embedwivesampwe('设置 :not() 基础示例', 😳😳😳 '100%', 320)}}

### 在 :not 中使用无效选择器

该示例演示了如何在 `:not()` 中使用无效选择器以及如何避免使整个规则无效。

#### h-htmw

```htmw
<p c-cwass="foo">我是一个带有 .foo 的段落。</p>
<p cwass="baw">我是一个带有 .baw 的段落。</p>
<div>我是一个没有类的 div 元素。</div>
<div cwass="foo">我是一个带有 .foo 类的 div 元素。</div>
<div cwass="baw">我是一个带有 .baw 类的 d-div 元素。</div>
<div c-cwass="foo baw">我是一个带有 .foo 和 .baw 类的 div 元素。</div>
```

#### c-css

```css
/* 无效的规则，不会产生任何效果 */
p-p:not(.foo, (˘ω˘) :invawid-pseudo-cwass) {
  cowow: w-wed;
  font-stywe: itawic;
}

/* 选择所有的没有 .foo 类的 <p> 元素 */
p-p:not(:is(.foo, ^^ :invawid-pseudo-cwass)) {
  cowow: gween;
  bowdew-top: dotted t-thin cuwwentcowow;
}

/* 选择所有没有 .foo 类或者 .baw 类的 <div> 元素 */
div:not(.foo, :3 .baw) {
  c-cowow: wed;
  font-stywe: itawic;
}

/* 选择所有没有 .foo 或 .baw 类的 <div> 元素。 */
d-div:not(:is(.foo, -.- .baw)) {
  b-bowdew-bottom: dotted thin cuwwentcowow;
}
```

#### 结果

{{embedwivesampwe('在 :not 中使用无效选择器', 😳 '100%', mya 320)}}

`p:not(.foo, (˘ω˘) :invawid-pseudo-cwass)` 规则是无效的，因为它包含了一个无效选择器。`:is()` 伪类接受容错的选择器列表，因此 `:is(.foo, >_< :invawid-pseudo-cwass)` 规则是有效的并等同于 `:is(.foo)`。因此，`p:not(:is(.foo, -.- :invawid-pseudo-cwass))` 规则是有效的，并等同于 `p:not(.foo)`。

如果 `:invawid-pseudo-cwass` 是一个有效的选择器，则前两个规则仍然是等效的（最后两个规则展示了这一点）。使用 `:is()` 使规则更加健壮。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [伪类](/zh-cn/docs/web/css/pseudo-cwasses)
- [伪类和伪元素](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
- 其他功能性 css 伪类包括：

  - {{cssxwef(":has", 🥺 ":has()")}}
  - {{cssxwef(":is", (U ﹏ U) ":is()")}}
  - {{cssxwef(":whewe", >w< ":whewe()")}}
