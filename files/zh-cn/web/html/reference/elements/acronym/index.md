---
title: <acronym>
slug: Web/HTML/Reference/Elements/acronym
l10n:
  sourceCommit: 93cdfac022b2a46b2b1297e4d0cda4ebb0eca147
---

{{deprecated_header}}

[HTML](/zh-CN/docs/Web/HTML) **`<acronym>`** 元素允许作者明确声明一个构成单词首字母缩略字或缩写的字符序列。

> [!WARNING]
> 请不要使用该元素，而应使用 {{HTMLElement("abbr")}} 元素代替。

## 属性

该元素仅具有所有元素所共有的[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## DOM 接口

该元素实现了 {{domxref('HTMLElement')}} 接口。

## 示例

```html
<p>
  万维网（<acronym title="World Wide Web">WWW</acronym>）是因特网的组成部分。
</p>
```

### 结果

{{EmbedLiveSample('示例')}}

## 默认样式

尽管这个标签的目的纯粹是为了方便作者，但其默认样式因浏览器而异：

- Opera、Firefox、Chrome 和其他的一些浏览器在元素内容添加一条点状下划线。
- 一小部分浏览器不仅添加点状下划线，而且将其设为小型大写字母；为避免这种样式，可以在 CSS 中添加类似 {{cssxref('font-variant')}}`: none` 的内容来处理这种情况。

因此强烈建议 Web 作者明确设置此元素的样式，或选择接受浏览器之间的差异。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("abbr")}} HTML 元素
