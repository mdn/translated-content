---
title: Element.shadowRoot
slug: Web/API/Element/shadowRoot
tags:
  - プロパティ
  - リファレンス
  - 要素
  - 試験的
translation_of: Web/API/Element/shadowRoot
---
<p>{{APIRef('Shadow DOM')}} {{SeeCompatTable}}{{draft}}</p>

<p>読み取り専用のプロパティである<code>Element.shadowRoot</code>は、そのエレメントによってホストされたshadow rootへの読み取りアクセスを提供します。既に存在している要素にshadow rootを追加する場合は {{domxref('Element.attachShadow')}} を使用してください。</p>

<h2 id="Syntax" name="Syntax">文法</h2>

<pre class="syntaxbox">var <em>shadowroot =</em><em> element</em>.shadowRoot;
</pre>

<h3 id="値">値</h3>

<p>{{domxref('ShadowRoot')}} オブジェクトです。 アタッチされた時の{{DOMxRef("ShadowRoot.mode", "mode")}} に <code>closed</code> が指定された場合には  <code>null</code> となります。</p>

<h2 id="Examples">Examples</h2>

<p>The following snippets are taken from our <a href="https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks">life-cycle-callbacks</a> example (<a href="https://mdn.github.io/web-components-examples/life-cycle-callbacks">see it live also</a>), which creates an element that displays a square of a size and color specified in the element's attributes.</p>

<p>Inside the <code>&lt;custom-square&gt;</code> element's class definition we include some life cycle callbacks that make a call to an external function, <code>updateStyle()</code>, which actually applies the size and color to the element. You'll see that we are passing it <code>this</code> (the custom element itself) as a parameter.</p>

<pre class="brush: js">connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}</pre>

<p>In the <code>updateStyle()</code> function itself, we get a reference to the shadow DOM using {{domxref("Element.shadowRoot")}}. From here we use standard DOM traversal techniques to find the {{htmlelement("style")}} element inside the shadow DOM and then update the CSS found inside it:</p>

<pre class="brush: js">function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = Array.from(shadow.childNodes);

  childNodes.forEach(childNode =&gt; {
    if (childNode.nodeName === 'STYLE') {
      childNode.textContent = `
        div {
          width: ${elem.getAttribute('l')}px;
          height: ${elem.getAttribute('l')}px;
          background-color: ${elem.getAttribute('c')};
        }
      `;
    }
  });
}</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">注脚</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-element-shadowroot', 'shadowRoot')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>



<p>{{Compat("api.Element.shadowRoot")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{DOMxRef("Element.openOrClosedShadowRoot")}} {{non-standard_inline}}</li>
</ul>
