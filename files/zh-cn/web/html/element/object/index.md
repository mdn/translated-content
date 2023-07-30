---
title: <object>
slug: Web/HTML/Element/object
---

{{HTMLSidebar}}

**HTML `<object>` 元素**（或者称作 _HTML 嵌入对象元素_）表示引入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源。

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

- _[内容分类](/zh-CN/docs/HTML/Content_categories)_ [Flow content](/zh-CN/docs/HTML/Content_categories#Flow_content); [phrasing content](/zh-CN/docs/HTML/Content_categories#Phrasing_content); [embedded content](/zh-CN/docs/HTML/Content_categories#Embedded_content), palpable content; if the element has a **usemap** attribute, [interactive content](/zh-CN/docs/HTML/Content_categories#Interactive_content); [listed](/zh-CN/docs/HTML/Content_categories#Form_listed), [submittable](/zh-CN/docs/HTML/Content_categories#Form_submittable) [form-associated](/zh-CN/docs/HTML/Content_categories#Form-associated_content) element.
- _允许内容_ zero or more {{HTMLElement("param")}} elements, then [Transparent content](/zh-CN/docs/HTML/Content_categories#Transparent_content_models).
- _标签闭合_ {{no_tag_omission}}
- _允许的父级元素_ Any element that accepts [embedded content](/zh-CN/docs/HTML/Content_categories#Embedded_content).
- _DOM 接口_ {{domxref("HTMLObjectElement")}}

## 属性

元素包含[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `archive` {{Deprecated_Inline}}
  - : 用来指名对象资源列表的以空格分隔的 URI 列表。
- `border` {{Deprecated_Inline}}
  - : 元素周围的边框的宽度，单位为像素。
- `classid` {{Deprecated_Inline}}
  - : 对象实现的 URI，可以同时与 **data** 属性使用，或者使用 **data** 属性替代。
- `codebase` {{Deprecated_Inline}}
  - : 解析 **classid**，**data** 或者 **archive** 中定义的相对路径的根路径，如果没有定义，默认为当前文档的 base URI。
- `codetype` {{Deprecated_Inline}}
  - : **classid** 定义的 data 的内容类型。
- `data`
  - : 一个合法的 URL 作为资源的地址，，需要为 **data** 和 **type** 中至少一个设置值。
- `declare` {{Deprecated_Inline}}
  - : 取值为布尔的属性可以设置这个元素为仅声明的格式。对象必须被随后的 `<object> 元素实例化。在` HTML5 中，完整的重复 \<object> 元素，可以重用元素。
- `form`
  - : 对象元素关联的 form 元素（属于的 form）。取值必须是同一文档下的一个 {{HTMLElement("form")}} 元素的 ID。
- `height`
  - : 资源显示的高度，单位是 CSS 像素。
- `name`
  - : 浏览上下文名称（HTML5），或者控件名称（HTML 4）。
- `standby` {{Deprecated_Inline}}
  - : 对象的实现和数据加载过程中，浏览器可以显示的信息。
- `tabindex` {{Deprecated_Inline}}
  - : 当前元素在文档 Tab 导航中的顺序。
- `type`
  - : **data** 指定的资源的 MIME 类型，需要为 **data** 和 **type** 中至少一个设置值。
- `usemap`
  - : 指向一个 {{HTMLElement("map")}} 元素的 hash-name；格式为‘#’加 map 元素 [`name`](/zh-CN/docs/Web/HTML/Element/map#name) 元素的值。
- `width`
  - : 资源显示的宽度，单位是 CSS 像素。

## 示例

```html
<!-- Embed a flash movie -->
<object data="move.swf" type="application/x-shockwave-flash"></object>

<!-- Embed a flash movie with parameters -->
<object data="move.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar" />
</object>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{HTMLElement("embed")}}
- {{HTMLElement("param")}}
