---
title: background-clip
slug: Web/CSS/background-clip
---

{{CSSRef}}

`background-clip` 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

如果没有设置背景图片（{{cssxref("background-image")}}）或背景颜色（{{cssxref("background-color")}}），那么这个属性只有在边框（ {{cssxref("border")}}）被设置为非固实（soild）、透明或半透明时才能看到视觉效果（与 {{cssxref("border-style")}} 或 {{cssxref("border-image")}} 有关），否则，本属性产生的样式变化会被边框覆盖。

## 语法

```css
/* Keyword values */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```

### 值

- `border-box`
  - : 背景延伸至边框外沿（但是在边框下层）。
- `padding-box`
  - : 背景延伸至内边距（{{cssxref("padding")}}）外沿。不会绘制到边框处。
- `content-box`
  - : 背景被裁剪至内容区（content box）外沿。
- `text` {{experimental_inline}}
  - : 背景被裁剪成文字的前景色。

### 标准语法

{{csssyntax}}

## 示例

#### HTML

```html
<p class="border-box">The background extends behind the border.</p>
<p class="padding-box">
  The background extends to the inside edge of the border.
</p>
<p class="content-box">
  The background extends only to the edge of the content box.
</p>
<p class="text">The background is clipped to the foreground text.</p>
```

#### CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0.2);
}
```

#### 结果

{{EmbedLiveSample('示例', 600, 580)}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{cssxref("clip-path")}} property creates a clipping region that defines what part of an _entire element_ should be displayed.
- Background properties: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}
- [Introduction to the CSS box model](/zh-CN/docs/Web/CSS/box_model)
