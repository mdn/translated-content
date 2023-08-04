---
title: ":nth-child"
slug: Web/CSS/:nth-child
---

{{CSSRef}}

## 概述

**`:nth-child(an+b)`** 这个 [CSS 伪类](/zh-CN/docs/CSS/Pseudo-classes)首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从 1 开始排序，选择的结果为 CSS 伪类:nth-child 括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3...）。示例：

- `0n+3` 或简单的 `3` 匹配第三个元素。
- `1n+0` 或简单的 `n` 匹配每个元素。（兼容性提醒：在 Android 浏览器 4.3 以下的版本 `n` 和 `1n` 的匹配方式不一致。`1n` 和 `1n+0` 是一致的，可根据喜好任选其一来使用。）
- `2n+0` 或简单的 `2n` 匹配位置为 2、4、6、8...的元素（n=0 时，2n+0=0，第 0 个元素不存在，因为是从 1 开始排序)。你可以使用关键字 **`even`** 来替换此表达式。
- `2n+1` 匹配位置为 1、3、5、7...的元素。你可以使用关键字 **`odd`** 来替换此表达式。
- `3n+4` 匹配位置为 4、7、10、13...的元素。

`a` 和 `b` 都必须为整数，并且元素的第一个子元素的下标为 1。换言之就是，该伪类匹配所有下标在集合 { an + b; n = 0, 1, 2, ...} 中的子元素。另外需要特别注意的是，`an` 必须写在 `b` 的前面，不能写成 `b+an` 的形式。

## 语法

{{csssyntax}}

## 示例

### 选择器示例

- `tr:nth-child(2n+1)`
  - : 表示 HTML 表格中的奇数行。
- `tr:nth-child(odd)`
  - : 表示 HTML 表格中的奇数行。
- `tr:nth-child(2n)`
  - : 表示 HTML 表格中的偶数行。
- `tr:nth-child(even)`
  - : 表示 HTML 表格中的偶数行。
- `span:nth-child(0n+1)`
  - : 表示子元素中第一个且为 span 的元素，与 {{Cssxref(":first-child")}} 选择器作用相同。
- `span:nth-child(1)`
  - : 表示父元素中子元素为第一的并且名字为 span 的标签被选中
- `span:nth-child(-n+3)`
  - : 匹配前三个子元素中的 span 元素。

### Detailed example

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, WITHOUT an <code>&lt;em&gt;</code> among
  the child elements.
</h3>
<p>Children 1, 3, 5, and 7 are selected.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 5, and 7 are selected.<br />
  3 is used in the counting because it is a child, but it isn't selected because
  it isn't a <code>&lt;span&gt;</code>.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 4, 6, and 8 are selected.<br />
  3 isn't used in the counting or selected because it is an
  <code>&lt;em&gt;</code>, not a <code>&lt;span&gt;</code>, and
  <code>nth-of-type</code> only selects children of that type. The
  <code>&lt;em&gt;</code> is completely skipped over and ignored.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: lime;
}
```

#### 最终效果：

{{EmbedLiveSample('Detailed_example', 550, 550)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 注意

- Opera 不能处理动态插入的元素。

## 参见

- {{ Cssxref(":nth-of-type") }}, {{ Cssxref(":nth-last-child") }}
