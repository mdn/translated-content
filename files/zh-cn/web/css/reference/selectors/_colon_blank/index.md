---
title: :blank
slug: Web/CSS/Reference/Selectors/:blank
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{SeeCompatTable}}

> [!NOTE]
> 使用 `:blank` 选择器被认为尚有一定风险，CSSWG 正在持续改进它。
>
> 详见 [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967)。

**`:blank`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)选择器选择用户输入为空的输入框，如 {{HTMLElement("input")}} 和 {{HTMLElement("textarea")}}。

## 语法

```css
:blank {
  /* ... */
}
```

## 示例

### 使用 :blank 的简单示例

在最终支持该特性的浏览器中，`:blank` 伪类将使开发者能够以某种方式突出显示那些不是必填项，但仍然没有填入内容的输入控件，可以作为对用户的提醒。

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### 结果

{{EmbedLiveSample('使用 :blank 的简单示例', '100%', 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":empty")}}
