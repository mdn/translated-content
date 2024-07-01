---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
---

{{CSSRef}}

**`hanging-punctuation`** CSS 属性指定了标点符号应该放在文本句子的开头还是结尾。悬挂标点符号可能被放在线框外。

```css
/* Keyword values */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* Two keywords */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* Three keywords */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;

/* Global values */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: unset;
```

{{cssinfo}}

## 语法

这个属性可被指定多个值，可以是一个值，也可以是两个值，或者是三个值。

- 一个值 语法：在下面列表中的任意一个值。
- 两个值 语法：

  - 或者与以下任何一个一起使用，并以它们结尾：last，allow-end 或 force-end
  - 或者与以下任何一个一起使用，并以它们开头：first，allow-end 或 force-end。

- 三个值 语法：

  - 或者`first`, `allow-end`, 和`last`
  - 或者 `first`, `force-end`, 和 `last`.

### 取值

- `none`
  - : 无悬挂字符。
- `first`
  - : 显示元素的第一个格式化行开头的括号或引号。
- `last`
  - : 显示元素的最后一个格式化行结尾的括号或引号。
- `force-end`
  - : 显示行结尾处的句号或逗号。
- `allow-end`
  - : 如果预先没有其他适合的来适应的，则在行尾显示句号或逗号。

### 正式语法

{{csssyntax}}

## 示例

### HTML

```html
<p>
  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim
  nunc mauris, et sollicitudin est scelerisque sed. Praesent laoreet tortor
  massa, sit amet vulputate nulla pharetra ut.”
</p>
```

### CSS

```css
p {
  hanging-punctuation: first;
  margin: 0.5rem;
}
```

### Result

## Specifications

- [CSS Text Module Level 3 (Working Draft, 10-Oct-2013)](https://www.w3.org/TR/css-text-3/#hanging-punctuation-property)
- [CSS Text Module Level 3 (Editor’s Draft, 03-May-2017)](https://drafts.csswg.org/css-text-3/#hanging-punctuation-property)
