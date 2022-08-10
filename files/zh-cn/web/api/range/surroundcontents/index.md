---
title: Range.surroundContents
slug: Web/API/Range/surroundContents
tags:
  - API
  - DOM
  - Range
  - 方法
  - 范围
translation_of: Web/API/Range/surroundContents
---
<div>{{ ApiRef("Range") }}</div>

<p><strong><code>Range.surroundContents()</code> </strong>方法将 {{ domxref("Range") }} 对象的内容移动到一个新的节点，并将新节点放到这个范围的起始处。</p>

<p>这个方法与 <code>newNode.appendChild(<a href="/en/DOM/range.extractContents">range.extractContents()</a>); <a href="/en-US/docs/DOM/range.insertNode">range.insertNode</a>(newNode)</code> 等价。应用以后， <code>newNode</code> 包含在 <code>range</code> 的边界点中。</p>

<p>然而，如果 {{ domxref("Range") }} 断开了一个非 {{ domxref("Text") }} 节点，只包含了节点的其中一个边界点，就会抛出异常。也就是说，不像上述的等价方法，如果节点仅有一部分被选中，则不会被克隆，整个操作会失败。</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><em>range</em>.surroundContents(<em>newParent</em>);
</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>newParent</code></dt>
 <dd>一个包含内容的 {{ domxref("Node") }}。</dd>
</dl>

<h2 id="Example">示例</h2>

<h3 id="HTML">HTML</h3>

<pre>&lt;span class="header-text"&gt;Put this in a headline&lt;/span&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre>const range = document.createRange();
const newParent = document.createElement('h1');

range.selectNode(document.querySelector('.header-text'));
range.surroundContents(newParent);</pre>

<h3 id="结果">结果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specification">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.Range.surroundContents")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/en-US/docs/DOM/DOM_Reference">The DOM interfaces index</a></li>
</ul>
