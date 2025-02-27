---
title: element.outerHTML
slug: Web/API/Element/outerHTML
---

{{APIRef("DOM")}}

{{ domxref("element") }} DOM 接口的`outerHTML`属性获取描述元素（包括其后代）的序列化 HTML 片段。它也可以设置为用从给定字符串解析的节点替换元素。

要仅获取元素内容的 HTML 表示形式或替换元素的内容，请使用 {{domxref("Element.innerHTML", "innerHTML")}} 属性

## 语法

```plain
let content = element.outerHTML;
```

返回时，内容包含描述元素及其后代的序列化 HTML 片段。

```plain
element.outerHTML = content;
```

将元素替换为通过使用元素的父作为片段解析算法的上下文节点解析字符串内容生成的节点。

## 例子

获取一个元素的 outerHTML 属性的值：

```js
// HTML:
/*
<div id="d">
    <p>Content</p>
    <p>Further Elaborated</p>
</div>
*/

const d = document.getElementById("d");
console.log(d.outerHTML);

/*
    字符串 '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
    被显示到控制台窗口
*/
```

通过设置 outerHTML 属性来替换节点：

```js
// HTML:
/*
<div id="container">
    <div id="d">This is a div.</div>
</div>
*/

let container = document.getElementById("container");
let d = document.getElementById("d");

console.log(container.firstChild.nodeName);
// logs "div"

d.outerHTML = "<p>This paragraph replaced the original div.</p>";

console.log(container.firstChild.nodeName);
// logs "P"

/*
    #d div 不再是文档树的一部分，新段替换了它。
    (不在页面中显示，但仍然在内存中)
*/
```

## 注意事项

如果元素没有父元素，即如果它是文档的根元素，则设置其 outerHTML 属性将抛出一个带有错误代码 **_NO_MODIFICATION_ALLOWED_ERR_** 的 [`DOMException`](/zh-CN/docs/DOM/DOMException) 。例如：

```js
document.documentElement.outerHTML = "test";
// 抛出一个 DOMException
```

此外，虽然元素将在文档中被替换，设置了 outerHTML 属性的变量仍将保持对原始元素的引用：

```js
let p = document.getElementsByTagName("p")[0];
console.log(p.nodeName);
// 显示："P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";

console.log(p.nodeName);
// 仍然为："P";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- MSDN: [outerHTML 属性](http://msdn.microsoft.com/en-us/library/ms534310%28v=vs.85%29.aspx)
- [You Don't Need jQuery](http://youmightnotneedjquery.com/)
- <http://youmightnotneedjquery.com/>
- insertAdjacentHTML
