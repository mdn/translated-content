---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
tags:
  - API
  - Element
  - Method
  - Reference
  - attachShadow
  - shadow dom
  - メソッド
translation_of: Web/API/Element/attachShadow
---
<div>{{APIRef('Shadow DOM')}}</div>

<p><strong><code>Element.attachShadow()</code></strong> メソッドは、シャドウ DOM ツリーを特定の要素に追加し、そのシャドウルート ({{domxref("ShadowRoot")}}) への参照を返します。</p>

<h2 id="Elements_you_can_attach_a_shadow_to" name="Elements_you_can_attach_a_shadow_to">シャドウツリーを追加できる要素</h2>

<p>シャドウルートは全ての要素に追加できるわけではありません。 ({{htmlelement("a")}} など) セキュリティ上の理由でシャドウ DOM を持てないものもあります。以下にシャドウルートを追加<strong>できる</strong>要素を列挙します。</p>

<ul>
 <li>任意のカスタム要素で<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name">有効な名前</a>を持つもの</li>
 <li>{{htmlelement("article")}}</li>
 <li>{{htmlelement("aside")}}</li>
 <li>{{htmlelement("blockquote")}}</li>
 <li>{{htmlelement("body")}}</li>
 <li>{{htmlelement("div")}}</li>
 <li>{{htmlelement("footer")}}</li>
 <li>{{htmlelement("h1")}}</li>
 <li>{{htmlelement("h2")}}</li>
 <li>{{htmlelement("h3")}}</li>
 <li>{{htmlelement("h4")}}</li>
 <li>{{htmlelement("h5")}}</li>
 <li>{{htmlelement("h6")}}</li>
 <li>{{htmlelement("header")}}</li>
 <li>{{htmlelement("main")}}</li>
 <li>{{htmlelement("nav")}}</li>
 <li>{{htmlelement("p")}}</li>
 <li>{{htmlelement("section")}}</li>
 <li>{{htmlelement("span")}}</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>shadowroot</var> = <var>element</var>.attachShadow(<var>shadowRootInit</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>shadowRootInit</var></code></dt>
 <dd><code>ShadowRootInit</code> ディクショナリで、以下のプロパティを含みます。
 <dl>
  <dt><code>mode</code></dt>
  <dd>
  <p>文字列で、シャドウ DOM ツリーの<em>カプセル化モード</em>を指定します。以下のうちの一つを取ります。</p>

  <ul>
   <li><code>open</code>: シャドウルートに外部の JavaScript からアクセスできます。例えば、 {{domxref("Element.shadowRoot")}} を使ってアクセスできます。<br>

    <pre>element.shadowRoot; // ShadowRoot オブジェクトを返します</pre>
   </li>
   <li><code>closed</code>: シャドウルートに外部の JavaScript からアクセスできません。<br>

    <pre>element.shadowRoot; // null を返します
</pre>
   </li>
  </ul>
  </dd>
  <dt><code>delegatesFocus</code></dt>
  <dd>真偽値で、 <code>true</code> に設定された場合、フォーカス可能性に関するカスタム要素の問題を緩和します。シャドウ DOM のフォーカスができない部分がクリックされた場合、最初のフォーカス可能な部分がフォーカスを得て、シャドウホストは <code>:focus</code> のスタイルを利用することができます。</dd>
 </dl>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{domxref("ShadowRoot")}} オブジェクトです。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>shadow root を追加しようとしている要素は、すでに shadow host です。</td>
  </tr>
  <tr>
   <td><code>NotSupportedError</code></td>
   <td>shadow root を追加しようとしている要素は、HTML の名前空間外であるか、shadow DOM を持てない要素です(上記の通り)。</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例は <a href="https://github.com/mdn/web-components-examples/tree/master/word-count-web-component">word-count-web-component</a> のデモを使用しています(<a href="https://mdn.github.io/web-components-examples/word-count-web-component/">実行例</a>)。 <code>attachShadow()</code> はコードの真ん中付近で shadow root を作るために使用されています。その後カスタム要素を追加しています。</p>

<pre class="brush: js">// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this.parentNode;

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    var text = document.createElement('span');
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)
  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-element-attachshadow', 'attachShadow()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.attachShadow")}}</p>
