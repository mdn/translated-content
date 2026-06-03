---
title: <big>：较大的文本元素
slug: Web/HTML/Reference/Elements/big
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{deprecated_header}}

已弃用的 **`<big>`** [HTML](/zh-CN/docs/Web/HTML) 元素使其中包裹的文字会以比周围文本大一级的字体大小（例如将 `medium` 变为 `large`）渲染。字体大小的最大值受限于浏览器的允许范围。

> [!WARNING]
> 该元素已从规范中移除，不应继续使用。请改用 CSS {{cssxref("font-size")}} 属性来调整字体大小。

## 属性

这个元素除了[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)之外，没有其他的属性。

## 示例

在此处，我们展示了 `<big>` 的用法，然后紧随其后展示一个现代 CSS 语法实现相同效果的例子。

### 使用 big

该示例使用了已弃用的 `<big>` 增大部分文本的字号。

#### HTML

```html
<p>
  这是第一句。
  <big>整个句子采用了较大的字体显示。</big>
</p>
```

#### 结果

{{EmbedLiveSample("使用_big", 640, 60)}}

### 使用 CSS `font-size`

该示例使用 CSS {{cssxref("font-size")}} 属性将字体大小增加一级。

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  这是第一句。
  <span class="bigger">整个句子采用了较大的字体显示。</span>
</p>
```

#### 结果

{{EmbedLiveSample("使用_CSS_font-size", 640, 60)}}

## DOM 接口

该元素实现了 {{domxref('HTMLElement')}} 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS：{{cssxref("font-size")}}、{{cssxref("font")}}
- HTML：{{htmlelement("small")}}、{{htmlelement("font")}}、{{htmlelement("style")}}
- HTML 4.01 规范：[字体样式](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
