---
title: Node.nodeType
slug: Web/API/Node/nodeType
translation_of: Web/API/Node/nodeType
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p><code><strong>Node.nodeType</strong></code> 唯讀屬性表示了節點物件的類型。</p>

<h2 id="描述">描述</h2>

<p>The <strong><code>nodeType</code></strong> property can be used to distinguish different kind of nodes, such that {{domxref("Element", "elements")}}, {{domxref("Text", "text")}} and {{domxref("Comment", "comments")}}, from each other.</p>

<h2 id="Syntax">語法</h2>

<pre class="syntaxbox"><em>var <var>type</var></em> = <var>node</var>.nodeType;
</pre>

<p>Returns an integer value which specifies the type of the node; possible values are listed in <a href="#節點類型常數">Node type constants</a>.</p>

<h2 id="常數">常數</h2>

<h3 id="節點類型常數">節點類型常數</h3>

<table>
 <thead>
  <tr>
   <th scope="col">Constant</th>
   <th scope="col">Value</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{domxref("Node.ELEMENT_NODE")}} {{readonlyinline}}</td>
   <td><code>1</code></td>
   <td>表示元素的 {{domxref("Element")}} 節點，如 {{HTMLElement("body")}}、{{HTMLElement("a")}}、{{HTMLElement("p")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}}、{{HTMLElement("html")}}、{{HTMLElement("h1")}} 或 {{HTMLElement("div")}}。</td>
  </tr>
  <tr>
   <td><code>Node.ATTRIBUTE_NODE</code></td>
   <td>2</td>
   <td>An {{domxref("Attr", "Attribute")}} of an {{domxref("Element")}}.</td>
  </tr>
  <tr>
   <td>{{domxref("Node.TEXT_NODE")}} {{readonlyinline}}</td>
   <td><code>3</code></td>
   <td>於表示元素的 {{domxref("Element")}} 節點或表示 {{Glossary("attribute", "HTML 元素屬性")}}的 {{domxref("Attr")}} 節點中，表示了實際文字字元的 {{domxref("Text")}} 節點，它包括了換行與空格。</td>
  </tr>
  <tr>
   <td><code>Node.CDATA_SECTION_NODE</code></td>
   <td><code>4</code></td>
   <td>A {{domxref("CDATASection")}}.</td>
  </tr>
  <tr>
   <td>{{domxref("Node.PROCESSING_INSTRUCTION_NODE")}} {{readonlyinline}}</td>
   <td><code>7</code></td>
   <td>A {{domxref("ProcessingInstruction")}} of an XML document such as <code>&lt;?xml-stylesheet ... ?&gt;</code> declaration.</td>
  </tr>
  <tr>
   <td>{{domxref("Node.COMMENT_NODE")}} {{readonlyinline}}</td>
   <td><code>8</code></td>
   <td>表示註解的 {{domxref("Comment")}} 節點。</td>
  </tr>
  <tr>
   <td>{{domxref("Node.DOCUMENT_NODE")}} {{readonlyinline}}</td>
   <td><code>9</code></td>
   <td>表示文件的 {{domxref("Document")}} 節點。</td>
  </tr>
  <tr>
   <td>{{domxref("Node.DOCUMENT_TYPE_NODE")}} {{readonlyinline}}</td>
   <td><code>10</code></td>
   <td>表示文件類型的 {{domxref("DocumentType")}} 節點，例如 HTML5 的 <code>&lt;!DOCTYPE html&gt;</code>。</td>
  </tr>
  <tr>
   <td>{{domxref("Node.DOCUMENT_FRAGMENT_NODE")}} {{readonlyinline}}</td>
   <td><code>11</code></td>
   <td>A {{domxref("DocumentFragment")}} node.</td>
  </tr>
 </tbody>
</table>

<p>The following constants have been deprecated and are not in use anymore: <code>Node.ENTITY_REFERENCE_NODE</code> (<code>5</code>), <code>Node.ENTITY_NODE</code> (<code>6</code>), and <code>Node.NOTATION_NODE</code> (<code>12</code>).</p>

<h2 id="Example">範例</h2>

<h3 id="Different_types_of_nodes">Different types of nodes</h3>

<pre class="brush: js">document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

var fragment = document.createDocumentFragment();
fragment.nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

<code>var p = document.createElement("p");
p.textContent = "Once upon a time...";</code>

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
</pre>

<h3 id="Comments">Comments</h3>

<p>This example checks if the first node inside the document element is a comment node, and if it is not, displays a message.</p>

<pre class="brush: js">var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");
</pre>

<h2 id="Specification">規範</h2>

{{Specifications}}
