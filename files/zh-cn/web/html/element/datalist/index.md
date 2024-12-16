---
title: <datalist>：HTML 数据列表元素
slug: Web/HTML/Element/datalist
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<datalist>`** 元素包含了一组 {{HTMLElement("option")}} 元素，这些元素表示其他表单控件可选值。

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

- _[内容范畴](/zh-CN/docs/Web/HTML/Content_categories)_[流内容](/zh-CN/docs/Web/HTML/Content_categories#flow_content)，[段落内容](/zh-CN/docs/Web/HTML/Content_categories#phrasing_content)。
- *允许内容*要么 [段落内容](/zh-CN/docs/Web/HTML/Content_categories#phrasing_content) 要么 0 个或多个 {{HTMLElement("option")}}元素。
- _标签省略_：不允许，开始标签和结束标签都不能省略。
- *允许父级元素*任何接受[段落内容](/zh-CN/docs/Web/HTML/Content_categories#phrasing_content)的元素。
- \_Permitted ARIA roles_None
- _DOM 接口_{{domxref("HTMLDataListElement")}}

## 属性

该元素除了公用的[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)之外，没有其他属性。

## 示例

```html
<label
  >Choose a browser from this list: <input list="browsers" name="myBrowser"
/></label>
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ HTMLElement("input") }} 元素，它更特殊的 [`list`](/zh-CN/docs/Web/HTML/Element/input#list) 属性;
- {{ HTMLElement("option") }}元素。
