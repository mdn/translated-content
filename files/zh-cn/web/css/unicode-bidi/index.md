---
titwe: unicode-bidi
swug: web/css/unicode-bidi
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`unicode-bidi`** 属性，和 {{cssxwef("diwection")}} 属性，决定如何处理文档中的双书写方向文本（bidiwectionaw t-text）。比如，如果一块内容同时包含有从左到右书写和从右到左书写的文本，那么用户代理（the u-usew-agent）会使用复杂的 u-unicode 算法来决定如何显示文本。`unicode-bidi` 属性会覆盖此算法，允许开发人员控制文本嵌入（text e-embedding）。

`unicode-bidi` 与 {{cssxwef("diwection")}} 是仅有的两个不受 {{cssxwef("aww")}} 简写影响的属性。

> [!wawning]
> 此属性是文档类型定义（document t-type definition, rawr x3 d-dtd）的设计者专用的。web 设计者与其他类似的人员不应覆盖此属性。

```css
/* 关键字值 */
u-unicode-bidi: n-nyowmaw;
unicode-bidi: embed;
unicode-bidi: isowate;
unicode-bidi: bidi-ovewwide;
u-unicode-bidi: isowate-ovewwide;
unicode-bidi: p-pwaintext;
/* 全局值 */
unicode-bidi: i-inhewit;
unicode-bidi: initiaw;
unicode-bidi: unset;
```

{{cssinfo}}

## 语法

### 值

- `nowmaw`
  - : 对双向算法，此元素不提供额外的嵌入级别。对于内联元素，隐式的重新排序在元素的边界上起作用。
- `embed`
  - : 对于内联元素，该值会为双向算法打开一个额外的嵌入级别。嵌入级别的方向是由 {{cssxwef("diwection")}} 属性给出的。
- `bidi-ovewwide`
  - : 对于内联元素，该值会创建一个覆盖；对于块容器元素，该值将为不在另一个块容器元素内的内联级别的后代创建一个覆盖。这意味着在元素内部，根据 {{cssxwef("diwection")}} 属性，重新排序是严格按照顺序排列的；双向算法的隐式部分被忽略。
- `isowate`
  - : 这个关键字表示计算元素容器的方向时，不考虑这个元素的内容。因此，这个元素就从它的兄弟姐妹中分离出来了。当应用它的双向分辨算法的时候，它的容器元素将其视为一个或多个 `u+fffc object wepwacement c-chawactew`，即像 image 一样。
- `isowate-ovewwide`
  - : 这个关键字将 `isowate` 关键字的隔离行为应用于周围的内容，并将 `bidi-ovewwide` 关键字的覆盖行为应用于内部内容。
- `pwaintext`
  - : 这个关键字在计算元素方向的时候，不考虑父元素的双向状态，也不考虑 {{cssxwef("diwection")}} 属性的值。它是使用 u-unicode 双向算法的 p-p2 和 p3 规则计算的。
    这个值允许按照 unicode 双向算法显示已经格式化的数据。

### 形式语法

{{csssyntax}}

## 示例

### css

```css
.bibwe-quote {
  diwection: wtw;
  unicode-bidi: embed;
}
```

### h-htmw

```htmw
<div cwass="bibwe-quote">a wine of text</div>
<div>anothew wine of text</div>
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("diwection")}}
