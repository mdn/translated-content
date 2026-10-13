---
title: "`hanging-punctuation` CSS 属性"
short-title: hanging-punctuation
slug: Web/CSS/Reference/Properties/hanging-punctuation
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`hanging-punctuation`** [CSS](/zh-CN/docs/Web/CSS) 属性指定标点符号是否应悬挂在文本行的开头或末尾。悬挂的标点可以放在行框外侧。

## 语法

```css
/* 关键字值 */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: allow-end;

/* 两个关键字 */
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last allow-end;

/* 三个关键字 */
hanging-punctuation: first allow-end last;

/* 全局值 */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: revert;
hanging-punctuation: revert-layer;
hanging-punctuation: unset;
```

`hanging-punctuation` 属性可以用一个、两个或三个以空格分隔的值来指定。

### 值

- `none`
  - : 不悬挂任何字符。
- `first`
  - : 元素第一条已格式化行开头的开括号或引号会悬挂。这适用于：
    - Unicode 类别 [Ps](https://unicodeplus.com/category/Ps)、[Pf](https://unicodeplus.com/category/Pf)、[Pi](https://unicodeplus.com/category/Pi) 中的所有字符
    - 引号 `U+0027` 撇号（`'`）和 `U+0022` 引号（`"`）。

- `last`
  - : 元素最后一条已格式化行末尾的闭括号或引号会悬挂。这适用于：
    - Unicode 类别 [Pe](https://unicodeplus.com/category/Pe)、[Pf](https://unicodeplus.com/category/Pf)、[Pi](https://unicodeplus.com/category/Pi) 中的所有字符
    - 引号 `U+0027` 撇号（`'`）和 `U+0022` 引号（`"`）。
- `allow-end`
  - : 若行末的句号或逗号在两端对齐之前无法放入，则将其悬挂。

允许悬挂的句号和逗号包括：

- `U+002C`，逗号
- `U+002E`，句号
- `U+060C`，阿拉伯逗号
- `U+06D4`，阿拉伯句号
- `U+3001`，表意逗号
- `U+3002`，表意句号
- `U+FF0C`，全角逗号
- `U+FF0E`，全角句号
- `U+FE50`，小型逗号
- `U+FE51`，小型表意逗号
- `U+FE52`，小型句号
- `U+FF61`，半角表意句号
- `U+FF64`，半角表意逗号

用户代理可以包含其他字符。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置开引号和闭引号悬挂

#### HTML

```html
<p>«片刻之间，什么也没有发生。然后，大约过了一秒钟，什么也没有继续发生。»</p>

<p class="hanging">
  «片刻之间，什么也没有发生。然后，大约过了一秒钟，什么也没有继续发生。»
</p>

<p class="hanging right">
  «片刻之间，什么也没有发生。然后，大约过了一秒钟，什么也没有继续发生。»
</p>
```

#### CSS

```css
p {
  width: 15em;
  border: 1px solid #cccccc;
  font-size: 2rem;
  font-style: italic;
  margin: 1em;
}

p.hanging {
  hanging-punctuation: first last;
}

p.right {
  text-align: right;
}
```

#### 结果

{{EmbedLiveSample("设置开引号和闭引号悬挂", "", 500)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref('text-indent')}}
- [CSS Tricks：悬挂标点](https://css-tricks.com/almanac/properties/h/hanging-punctuation/)
