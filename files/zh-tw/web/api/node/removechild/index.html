---
title: Node.removeChild()
slug: Web/API/Node/removeChild
translation_of: Web/API/Node/removeChild
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Node.removeChild()</strong></code> 方法從 DOM 移除一個子節點，並傳回移除的節點。</p>

<h2 id="語法">語法</h2>

<pre class="syntaxbox">var <em>oldChild</em> = <em>node</em>.removeChild(<em>child</em>);
<strong>或</strong>
<em>node</em>.removeChild(<em>child</em>);
</pre>

<ul>
 <li><code>child</code> 是 DOM 中想要移除的子節點。</li>
 <li><code>node</code> 是 <code>child</code> 的父節點。</li>
 <li><code>oldChild</code> 為將被移除的子節點參照，例如：<code>oldChild === child</code>.</li>
</ul>

<p>被刪除的子節點仍然存於記憶體之中，只是不在 DOM 了。從上述的第一種語法形式中，我們知道，透過引用 <code>oldChild</code> 還是可以在程式中重新使用已經被移除的子節點。</p>

<p>而第二種語法形式，因為沒有保留 <code>oldChild</code> 引用，因此假設你並沒有在其他地方保留節點引用，則它會立即無法使用且不可挽回，而且通常會在短時間內從<a href="/en-US/docs/Web/JavaScript/Memory_Management">內存管理</a>中被自動刪除。</p>

<p>如果 <code>child</code> 並非某 <code>element</code> 節點的子元素，則此方法會拋出異常。而如果調用此方法時，<code>child</code> 雖是某 <code>element</code> 的子元素，但在嘗試刪除它的過程中已被其他事件處理程序刪除，也會拋出異常（例如 {{Event("blur")}}）。</p>

<h3 id="會丟出的錯誤">會丟出的錯誤</h3>

<p>兩種不同的方式拋出異常：</p>

<ol>
 <li>
  <p>如果 <code>child</code> 確實是 <code>element</code> 的子元素且確實存在於 DOM，但已被刪除，則會丟出以下異常：</p>

  <p><code>Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node</code>.</p>
 </li>
 <li>
  <p>如果 <code>child</code> 不存在於頁面的 DOM，則會拋出下列的異常：<br>
   <br>
   <code>Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.</code></p>
 </li>
</ol>

<h2 id="例子">例子</h2>

<h3 id="簡單的例子">簡單的例子</h3>

<p>HTML:</p>

<pre class="brush: html">&lt;div id="top"&gt;
  &lt;div id="nested"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>在知道父節點的情況下，刪除特定元素：</p>

<pre class="brush:js">let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);
</pre>

<p>沒有指定父節點的情況下，刪除特定元素：</p>

<pre class="brush:js">let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
</pre>

<p>從一個元素中移除所有子元素：</p>

<pre class="brush:js">let element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
</pre>

<h3 id="造成一個TypeError">造成一個TypeError</h3>

<pre class="brush: html">&lt;!--Sample HTML code--&gt;
&lt;div id="top"&gt; &lt;/div&gt;

&lt;script type="text/javascript"&gt;
  let top = document.getElementById("top");
  let nested = document.getElementById("nested");

  // Throws Uncaught TypeError
  let garbage = top.removeChild(nested);
&lt;/script&gt;
</pre>

<h3 id="造成一個NotFoundError">造成一個NotFoundError</h3>

<pre class="brush: html">&lt;!--Sample HTML code--&gt;
&lt;div id="top"&gt;
  &lt;div id="nested"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script type="text/javascript"&gt;
  let top = document.getElementById("top");
  let nested = document.getElementById("nested");

  // This first call correctly removes the node
  let garbage = top.removeChild(nested);

  // Throws Uncaught NotFoundError
  garbage = top.removeChild(nested);
&lt;/script&gt;
</pre>

<h2 id="規範">規範</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild">DOM Level 1 Core: removeChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066">DOM Level 2 Core: removeChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066">DOM Level 3 Core: removeChild</a></li>
</ul>

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>



<p>{{Compat("api.Node.removeChild")}}</p>

<h2 id="相關連結">相關連結</h2>

<ul>
 <li>{{domxref("Node.replaceChild")}}</li>
 <li>{{domxref("Node.parentNode")}}</li>
 <li>{{domxref("ChildNode.remove")}}</li>
</ul>
