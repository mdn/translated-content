---
title: <html>
slug: Web/HTML/Element/html
---

{{HTMLRef}}

**HTML `<html>` 元素** 表示一个 HTML 文档的根（顶级元素），所以它也被称为*根元素*。所有其他元素必须是此元素的后代。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>一个 {{HTMLElement("head")}} 元素，后跟一个 {{HTMLElement("body")}} 元素</td>
  </tr>
  <tr>
   <th scope="row">忽略标签</th>
   <td>如果元素中的第一个元素不是注释，则可以忽略标签。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>无（这是文档的根元素）</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLHtmlElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

元素包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- {{htmlattrdef("manifest")}} {{Deprecated_Inline}}
  - : 指定一个 资源清单的 URI，指示应在本地缓存的资源。请参阅 [使用应用程序缓存](/zh-CN/docs/HTML/Using_the_application_cache) 获取详细信息。
- {{htmlattrdef("version")}} {{Deprecated_Inline}}
  - : 指定控制当前文档的 HTML 版本{{glossary("DTD", "文档类型定义")}} 。这个属性已不再需要，因为这在文档类型声明中是多余的版本信息。
- {{htmlattrdef("xmlns")}}
  - : 指派文档的 XML 命名空间。默认的值是`"http://www.w3.org/1999/xhtml"`。这在 XHTML 中是必要的，而在 HTML 中则是可选的。

## 示例

```html
<!DOCTYPE html>
<html lang="zh">
  <head>...</head>
  <body>...</body>
</html>
```

## 无障碍

在`html`元素上提供具有[有效 IETF 标识语言标记](https://www.ietf.org/rfc/bcp/bcp47.txt)的[`lang`](/zh-CN/docs/Web/HTML/Global_attributes#attr-lang)属性，将有助于屏幕阅读技术确定要陈述的正确语言。标识语言标签应描述页面大部分内容使用的语言。没有它，屏幕阅读器通常会默认使用操作系统的设置语言，这可能会导致错误陈述。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 注意事项

- 尽管在 {{glossary("HTML")}} 里\<html>元素不是必需的，可以是隐含的，但是在 {{glossary("XHTML")}} 里必须明确给出它的开标签和闭标签。
- 严格意义上，**标签**是指开始标签（例如 \<p> 标签）或结束标签（例如 \</p> 标签）；**元素**（例如 p 元素或者称为`<p>`元素）则包括开始标签（自然也包括标签中定义的属性）、结束标签以及中间的内容（`Content`）。![标签和元素的区别](https://mdn.mozillademos.org/files/16129/et.PNG)

## 参见

- MathML 顶级元素：{{MathMLElement("math")}}
- SVG 顶级元素：{{SVGElement("svg")}}
