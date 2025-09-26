---
title: <ins>
slug: Web/HTML/Reference/Elements/ins
---

## 简介

**HTML `<ins>` 元素**定义已经被插入文档中的文本。

{{InteractiveExample("HTML Demo: &lt;ins&gt;", "tabbed-standard")}}

```html interactive-example
<p>&ldquo;You're late!&rdquo;</p>
<del>
  <p>&ldquo;I apologize for the delay.&rdquo;</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
  <p>&ldquo;A wizard is never late &hellip;&rdquo;</p>
</ins>
```

```css interactive-example
del,
ins {
  display: block;
  text-decoration: none;
  position: relative;
}

del {
  background-color: #fbb;
}

ins {
  background-color: #d4fcbc;
}

del::before,
ins::before {
  position: absolute;
  left: 0.5rem;
  font-family: monospace;
}

del::before {
  content: "−";
}

ins::before {
  content: "+";
}

p {
  margin: 0 1.8rem 0;
  font-family: Georgia, serif;
  font-size: 1rem;
}
```

- _[内容](/zh-CN/docs/Web/HTML/Guides/Content_categories)分类_[短语元素](/zh-CN/docs/Web/HTML/Guides/Content_categories#短语元素（phrasing_content）) 或者 [流式元素](/zh-CN/docs/Web/HTML/Guides/Content_categories#流式元素（flow_content）) 。
- _允许内容_ [透明内容模型](/zh-CN/docs/Web/HTML/Guides/Content_categories#透明内容模型（transparent_content_model）)。
- _标签省略_：不允许，开始标签和结束标签都不能省略。
- *允许的父级标签*任意[短语元素](/zh-CN/docs/Web/HTML/Guides/Content_categories#短语元素（phrasing_content）)
- *允许的 ARIA 角色*任意
- _DOM 接口_ {{domxref("HTMLModElement")}}

## 属性

该元素支持所有 [全局特性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)，除此以外还支持下列属性：

- `cite`
  - : cite 属性的值指向一个文档的 URL，该文档解释了文本被插入或修改的原因。（目前该属性还没有被主流浏览器支持）
- `datetime`
  - : 该特性指示的此修改发生的时间和日期，并且该特性的值必须是[一个有效的日期或者时间字符串](https://www.w3.org/TR/2011/WD-html5-20110525/common-microsyntaxes.html#valid-date-string-with-optional-time)。如果该值不能被解析为日期或者时间，则该元素不具有相关联的时间标记。

## 示例

```html
<ins>这一段文本是新插入至文档的。</ins>
```

### 结果

这一段文本是新插入至文档的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{HTMLElement("del")}}
