---
title: font-family
slug: Web/SVG/Attribute/font-family
---

{{SVGRef}}

`font-family` 属性指出哪个字体集将被用来渲染文字，在带优先级的字体集名称列表被指定，还有或没有泛指的字符集名称。

作为一个表现层的属性，`font-family` 属性也可以被直接用在 CSS 样式表中，详见 {{ cssxref("font-family","CSS font-family") }} 。

## 使用上下文

| 分类              | Presentation attribute                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------- |
| 值                | [[\<family-name> \| \<generic-family>],]\* [\<family-name> \| \<generic-family>] \| inherit |
| 可动画 Animatable | Yes                                                                                         |
| 规范文档          | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/text.html#FontFamilyProperty)            |

## 例子

#### CSS

```plain
p.class1{font-family:"Times New Roman",Times,serif;}
p.class2{font-family:Arial,Helvetica;}
```

#### HTML

```html
<p class="class1">This is a paragraph, shown in the Times New Roman font.</p>
<p class="class2">This is a paragraph, shown in the Arial font.</p>
```

## 元素

以下元素可以使用`font-family` 属性 (attribute)

- [Text content elements](/zh-CN/SVG/Element#Text_content_elements) »

## 规范

{{Specifications}}

## 另见

- {{ cssxref("font-family","CSS font-family") }}
