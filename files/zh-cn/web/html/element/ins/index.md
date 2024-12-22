---
title: <ins>
slug: Web/HTML/Element/ins
---

## 简介

{{HTMLSidebar}}
**HTML `<ins>` 元素**定义已经被插入文档中的文本。

{{EmbedInteractiveExample("pages/tabbed/ins.html", "tabbed-standard")}}

- _[内容](/zh-CN/docs/Web/HTML/Content_categories)分类_[短语元素](/zh-CN/docs/Web/HTML/Content_categories#短语元素（phrasing_content）) 或者 [流式元素](/zh-CN/docs/Web/HTML/Content_categories#流式元素（flow_content）) 。
- _允许内容_ [透明内容模型](/zh-CN/docs/Web/HTML/Content_categories#透明内容模型（transparent_content_model）)。
- _标签省略_：不允许，开始标签和结束标签都不能省略。
- *允许的父级标签*任意[短语元素](/zh-CN/docs/Web/HTML/Content_categories#短语元素（phrasing_content）)
- *允许的 ARIA 角色*任意
- _DOM 接口_ {{domxref("HTMLModElement")}}

## 属性

该元素支持所有 [全局特性](/zh-CN/docs/Web/HTML/Global_attributes)，除此以外还支持下列属性：

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
