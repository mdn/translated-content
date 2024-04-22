---
title: quotes
slug: Web/CSS/quotes
---

{{CSSRef}}

**`quotes`** [CSS](/zh-CN/docs/CSS) 属性用于设置引号的样式。{{EmbedInteractiveExample("pages/css/quotes.html")}}

## 语法

```css
/* Keyword value */
quotes: none;

/* <string> values */
quotes: "«" "»"; /* Set open-quote and close-quote to the French quotation marks */
quotes: "«" "»" "‹" "›"; /* Set two levels of quotation marks */

/* Global values */
quotes: inherit;
quotes: initial;
quotes: unset;
```

### 值

- `none`
  - : {{cssxref("content")}} 属性的值 `open-quote` 和 `close-quote` 将不会展示引号。
- `auto`
  - : 用适当的引号，基于在所选元素上设置的任何语言值（例如，通过 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes#lang) 属性）。
- `[<string> <string>]+`
  - : 一组或者多组 {{cssxref("&lt;string&gt;")}} 的值对应 `open-quote` and `close-quote`. 第一对表示引号的外层，第二对表示第一个嵌套层，下一对表示第三层，依此类推。

### 形式语法

{{csssyntax}}

## 示例

### 基本用法

#### HTML

```html
<q>To be or not to be. That's the question!</q>
```

#### CSS

```css
q {
  quotes: '"' '"' "'" "'";
}
q::before {
  content: open-quote;
}
q:after {
  content: close-quote;
}
```

#### 结果

{{EmbedLiveSample('基本用法', "100%", 60)}}

### 自动选择引号

#### HTML

```html
<div lang="fr">
  <q>Ceci est une citation française.</q>
  <div>
    <hr />
    <div lang="ru">
      <q>Это русская цитата</q>
      <div>
        <hr />
        <div lang="de">
          <q>Dies ist ein deutsches Zitat</q>
          <div>
            <hr />
            <div lang="en">
              <q>This is an English quote.</q>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### CSS

```css
/*q {
  quotes: auto;
}*/
```

#### 结果

{{EmbedLiveSample('自动选择引号', "100%", 200)}}

## 备注

- 对于大多数浏览器，引号的默认值始终为 auto（Firefox 70+），否则浏览器具有此默认行为（Chromiums，Safari，Edge），因此上面的示例可以在不显式设置的情况下工作。
- 从 Firefox 3.5 开始，可以使用 `-moz-initial`读取 quotes 属性的初始值，这在 Firefox 的早期版本中是不可能的。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("content") }}
