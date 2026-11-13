---
title: orphans
slug: Web/CSS/Reference/Properties/orphans
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`orphans`** 用于设置区块容器中，在[页面](/zh-CN/docs/Web/CSS/Guides/Paged_media)、区域或[列](/zh-CN/docs/Web/CSS/Guides/Multicol_layout)的*底部*必须显示的最少行数。

在排版学中，*孤行*指的是段落的第一行单独出现在页面底部（段落的其余部分延续到下一页）。

## 语法

```css
/* <integer> 值 */
orphans: 2;
orphans: 3;

/* 全局值 */
orphans: inherit;
orphans: initial;
orphans: revert;
orphans: revert-layer;
orphans: unset;
```

### 值

- {{cssxref("&lt;integer&gt;")}}
  - : 在发生分段断开之前，段落底部所允许单独存在的最少行数。该值必须为正数。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置最少孤行数为三行

#### HTML

```html
<div>
  <p>这是第一段文字，包含一些内容。</p>
  <p>这是第二段文字，包含的内容比第一段更多。它用来演示孤行的处理方式。</p>
  <p>这是第三段文字。它的内容比第一段稍微多一些。</p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  height: 150px;
  columns: 3;
  orphans: 3;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### 结果

{{EmbedLiveSample("设置最少孤行数为三行", 380, 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("widows")}}
- [分页查询](/zh-CN/docs/Web/CSS/Guides/Paged_media)
