---
title: Document.createElementNS()
slug: Web/API/Document/createElementNS
---

{{ApiRef("DOM")}}

创建一个具有指定的命名空间 URI 和限定名称的元素。

要创建一个元素而不指定命名空间 URI，请使用 [createElement](/zh-CN/docs/Web/API/Document/createElement) 方法。

## 语法

```js
let element =
document.createElementNS(namespaceURI, qualifiedName[, options]);
```

### 参数

- `namespaceURI`
  - : 指定与元素相关联的[命名空间 URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI)的字符串。创建的元素的[namespaceURI](/zh-CN/docs/Web/API/Element/namespaceURI)属性使用 namespaceURI 的值进行初始化。参见[有效的命名空间 URL](#Valid_Namespace_URI's)。
- `qualifiedName`
  - : 指定要创建的元素的类型的字符串。创建的元素的[nodeName](/zh-CN/docs/Web/API/Node/nodeName)属性使用 qualifiedName 的值进行初始化。
- `options`可选的

  - : 一个可选的包含单个属性的 ElementCreationOptions 对象，其值是预先使用 customElements.define() 定义的自定义元素的标签名称。为了向后兼容[自定义元素规范](https://www.w3.org/TR/custom-elements/)的早期版本，一些浏览器允许你在此使用字符串替代对象，其中字符串的值是自定义元素的标签名称。有关如何使用此参数的详情，请参阅[扩展原生 HTML 元素](https://web.developers.google.cn/articles/web-components)。

    新元素将被赋予一个属性，其值是自定义元素的标签名称。自定义元素是实验中的功能，目前仅在某些浏览器中可用。

### 返回值

新[元素](/zh-CN/docs/Web/API/Element)。

## 有效的命名空间 URI

- HTML - 参阅 `http://www.w3.org/1999/xhtml`
- SVG - 参阅 `http://www.w3.org/2000/svg`
- XBL - 参阅 `http://www.mozilla.org/xbl`
- XUL - 参阅 `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`

## 示例

在[XHTML](/zh-CN/docs/Glossary/XHTML)命名空间中创建一个新的\<div>元素并将其添加到 vbox 的结尾处。虽然这不是一个非常有用的[XUL](/zh-CN/docs/XUL)文档，它演示了在单个文档中使用来自两个不同命名空间的元素：

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="text/javascript"><![CDATA[
 var container;
 var newdiv;
 var txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml","div");
   txtnode = document.createTextNode("这是使用 createElementNS 和 createTextNode 动态构造的文本，然后使用 appendChild 插入到文档中。");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id='ContainerBox' flex='1'>
  <html:div>
   此页面上的脚本将添加以下动态内容：
  </html:div>
 </vbox>

</page>
```

> [!NOTE]
> 上面给出的示例中使用了在 XHTML 文档中不推荐的内联脚本。这个特定的示例实际上是一个嵌入 XHTML 的 XUL 文档，然而，仍然建议适用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
- [Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114/)
