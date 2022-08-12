---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
translation_of: Web/API/Node/insertBefore
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p><code><strong>Node.insertBefore()</strong></code> 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다. 만약 주어진 자식 노드가 document에 존재하는 노드를 참조한다면, <code>insertBefore()</code> 가 자식 노드를 현재 위치에서 새로운 위치로 옮깁니다. (노드를 다른 노드에 추가하기 전에 상위 노드에서 제거할 필요가 없습니다)</p>

<p>이것은 노드가 document에 동시에 두 곳에 존재할 수 없다는 것을 의미합니다. 그러므로 노드가 이미 부모를 가지고 있다면, 노드가 제거된 뒤에 새로운 위치에 삽입됩니다. {{domxref("Node.cloneNode()")}} 로 노드를 새로운 부모 아래에 추가하기 전에 복사본을 만들수 있습니다. <code>cloneNode</code> 로 만들어진 복사본들은 자동으로 동기화 상태를 유지하지 않는다는 것을 알아두십시오.</p>

<p>만약 참조 노드가 <code>null</code> 이라면, 노드는 부모 노드의 자식 노드 리스트 맨 끝에 추가됩니다.</p>

<p>만약 자식 노드가 {{domxref("DocumentFragment")}} 이라면, {{domxref("DocumentFragment")}} 의 콘텐츠 전체는 부모 노드의 자식 리스트로 이동됩니다.</p>

<h2 id="Syntax" name="Syntax">Syntax</h2>

<pre class="syntaxbox">var <em>insertedNode</em> = <em>parentNode</em>.insertBefore(<em>newNode</em>, <em>referenceNode</em>);
</pre>

<p><code><var>referenceNode</var></code> 가 <code>null</code> 이라면, <code><var>newNode</var></code> 가 자식 노드의 리스트의 끝에 삽입됩니다.</p>

<div class="note">
<p><em><code>referenceNode</code></em> 는 <strong>선택 인자가 아닙니다.</strong> -- 명시적으로 <code>Node</code> 나 <code>null</code> 를 전달해야 합니다. 전달하지 않거나 잘못된 값을 전달하면 브라우저 버전에 따라 다른 결과를 얻게 됩니다.</p>
</div>

<h2 id="Returns" name="Returns">Returns</h2>

<p>반환값은 추가된 자식 노드입니다. 다만 <code>newNode</code> 가 {{domxref("DocumentFragment")}} 일 경우, 빈 {{domxref("DocumentFragment")}} 이 반환됩니다.</p>

<h2 id="Example_1" name="Example_1">Example 1</h2>

<pre class="brush: html">&lt;div id="parentElement"&gt;
   &lt;span id="childElement"&gt;foo bar&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
// Create the new node to insert
var newNode = document.createElement("span");

// Get a reference to the parent node
var parentDiv = document.getElementById("childElement").parentNode;

// Begin test case [ 1 ] : Exist a childElement --&gt; All working correctly
var sp2 = document.getElementById("childElement");
parentDiv.insertBefore(newNode, sp2);
// End test case [ 1 ]

// Begin test case [ 2 ] : childElement is of Type undefined
var sp2 = undefined; // Not exist a node of id "childElement"
parentDiv.insertBefore(newNode, sp2); // Implicit dynamic cast to type Node
// End test case [ 2 ]

// Begin test case [ 3 ] : childElement is of Type "undefined" ( string )
var sp2 = "undefined"; // Not exist a node of id "childElement"
parentDiv.insertBefore(newNode, sp2); // Generate "Type Error: Invalid Argument"
// End test case [ 3 ]
&lt;/script&gt;</pre>

<ul>
 <li><code>insertedNode</code> The node being inserted, that is <code>newNode</code></li>
 <li><code>parentNode</code> The parent of the newly inserted node.</li>
 <li><code>newNode</code> The node to be inserted.</li>
 <li><code>referenceNode</code> The node before which <code>newNode</code> is inserted.</li>
</ul>

<h2 id="Example_2" name="Example_2">Example 2</h2>

<pre class="brush:html">&lt;div id="parentElement"&gt;
  &lt;span id="childElement"&gt;foo bar&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
// Create a new, plain &lt;span&gt; element
var sp1 = document.createElement("span");

// Get a reference to the element, before we want to insert the element
var sp2 = document.getElementById("childElement");
// Get a reference to the parent element
var parentDiv = sp2.parentNode;

// Insert the new element into the DOM before sp2
parentDiv.insertBefore(sp1, sp2);
&lt;/script&gt;
</pre>

<p>There is no <code>insertAfter</code> method. It can be emulated by combining the <code>insertBefore</code> method with <code><a href="/en-US/docs/DOM/Node.nextSibling" title="DOM/Node.nextSibling">nextSibling</a></code>.</p>

<p>In the previous example, <code>sp1</code> could be inserted after <code>sp2</code> using:</p>

<pre class="brush: js"><code>parentDiv.insertBefore(sp1, sp2.nextSibling);</code></pre>

<p>If <code>sp2</code> does not have a next sibling, then it must be the last child — <code>sp2.nextSibling</code> returns <code>null</code>, and <code>sp1</code> is inserted at the end of the child node list (immediately after <code>sp2</code>).</p>

<h2 id="Example_3" name="Example_3">Example 3</h2>

<p>Insert an element before the first child element, using the <a href="/en-US/docs/DOM/Node.firstChild" title="Node.firstChild">firstChild</a> property.</p>

<pre class="brush:js">// Get a reference to the element in which we want to insert a new node
var parentElement = document.getElementById('parentElement');
// Get a reference to the first child
var theFirstChild = parentElement.firstChild;

// Create a new element
var newElement = document.createElement("div");

// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild);
</pre>

<p>When the element does not have a first child, then <code>firstChild</code> is <code>null</code>. The element is still appended to the parent, after the last child. Since the parent element did not have a first child, it did not have a last child either. Consequently, the new element is the only element, after insertion.</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">Browser compatibility</h2>



<p>{{Compat("api.Node.insertBefore")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="See_also" name="See_also">See also</h2>

<ul>
 <li>{{domxref("Node.removeChild()")}}</li>
 <li>{{domxref("Node.replaceChild()")}}</li>
 <li>{{domxref("Node.appendChild()")}}</li>
 <li>{{domxref("Node.hasChildNodes()")}}</li>
 <li>{{domxref("Element.insertAdjacentElement()")}}</li>
 <li>{{domxref("ParentNode.prepend()")}}</li>
</ul>
