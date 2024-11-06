---
title: 类选择器
slug: Web/CSS/Class_selectors
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **类选择器**根据 [`class`](/zh-CN/docs/Web/HTML/Global_attributes#class) 属性的内容匹配元素。

```css
/* 所有含有 class="spacious" 类的元素 */
.spacious {
  margin: 2em;
}

/* 所有含有 class="spacious" 类的 <li> 元素 */
li.spacious {
  margin: 2em;
}

/* 所有同时含有“spacious”和“elegant”类的 <li> 元素 */
/* 例如 class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## 语法

```css
.类名 { 样式声明 }
```

注意它与下面的{{Cssxref("Attribute_selectors", "属性选择器")}}语句等价：

```css
[class~=类名] { 样式声明 }
```

## 示例

### CSS

```css
.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
```

### HTML

```html
<p class="red">这段文字是红色的。</p>
<p class="red yellow-bg">这段文字是红色的，背景是黄色的。</p>
<p class="red fancy">这段文字是红色的，有“fancy”样式。</p>
<p>这只是普通的段落。</p>
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_selectors)
- [学习 CSS 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)
