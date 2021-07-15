---
title: ShadowRoot
slug: Web/API/ShadowRoot
tags:
  - API
  - Interface
  - Reference
  - ShadowRoot
  - Web Components
  - shadow dom
  - インターフェイス
translation_of: Web/API/ShadowRoot
---
<div>{{APIRef('Shadow DOM')}}</div>

<p><code><strong>ShadowRoot</strong></code> インターフェイスは Shadow DOM API の1つで、文書の DOM ツリーから分離してレンダリングされた部分木の根ノードを指します。</p>

<p>shadow ツリーが <code>mode</code> オプションを <code>open</code> に指定して {{domxref("Element.attachShadow()")}} から作られた場合、shadow root への参照は {{domxref("Element.shadowRoot")}} プロパティによって読み出すことが出来ます。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("ShadowRoot.delegatesFocus")}} {{readonlyinline}} {{non-standard_inline}}</dt>
 <dd>シャドウが添付されたときに delegatesFocus が設定されていたかどうかを示す真偽値を返します ({{domxref("Element.attachShadow()")}} を参照)。</dd>
 <dt>{{domxref("ShadowRoot.host")}} {{readonlyinline}}</dt>
 <dd><code>ShadowRoot</code> が追加された DOM 要素への参照を返します。</dd>
 <dt>{{domxref("ShadowRoot.innerHTML")}} {{non-standard_inline}}</dt>
 <dd><code>ShadowRoot</code> の内部ツリーへの参照を設定する、または受け取ることが出来ます。</dd>
 <dt>{{domxref("ShadowRoot.mode")}} {{readonlyinline}}</dt>
 <dd><code>ShadowRoot</code> のモードで <code>open</code> または <code>closed</code> の値を取ります。これはシャドウルートの内部の機能に JavaScript からアクセスできるかどうかを定義します。</dd>
</dl>

<h3 id="Properties_included_from_DocumentOrShadowRoot" name="Properties_included_from_DocumentOrShadowRoot">DocumentOrShadowRoot 由来のプロパティ</h3>

<p><em><code>ShadowRoot</code> インターフェイスは {{domxref("DocumentOrShadowRoot")}} で定義された以下のプロパティを含みます。これは Chrome ブラウザーのみ実装されており、他のブラウザーでは依然 {{domxref("Document")}} インターフェイスで実装されています。</em></p>

<dl>
 <dt>{{domxref("DocumentOrShadowRoot.activeElement")}} {{readonlyInline}}</dt>
 <dd>shadow ツリーの範囲内で、フォーカスされている {{domxref('Element')}} を返します。</dd>
 <dt>{{domxref("DocumentOrShadowRoot.styleSheets")}} {{readonlyInline}}</dt>
 <dd>文書に明示的にリンクされている、または埋め込まれている{{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>ShadowRoot</code> インターフェイスは {{domxref("DocumentOrShadowRoot")}} で定義された以下のプロパティを含みます。これは Chrome ブラウザーのみ実装されており、他のブラウザーでは依然 {{domxref("Document")}} インターフェイスで実装されています。</em></p>

<dl>
 <dt>{{domxref("DocumentOrShadowRoot.getSelection()")}}</dt>
 <dd>ユーザーによって選択されたテキストの範囲または現在のキャレットの位置を表現する {{domxref('Selection')}} オブジェクトを返します。</dd>
 <dt>{{domxref("DocumentOrShadowRoot.elementFromPoint()")}}</dt>
 <dd>指定された座標における最上位の要素を返します。</dd>
 <dt>{{domxref("DocumentOrShadowRoot.elementsFromPoint()")}}</dt>
 <dd>指定された座標における全要素からなる配列を返します。</dd>
 <dt>{{domxref("DocumentOrShadowRoot.caretPositionFromPoint()")}}</dt>
 <dd>キャレットを含む DOM ノードとキャレットのオフセットを含む {{domxref('CaretPosition')}} オブジェクトを返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>以下のコードは、サイズと色の属性が指定された四角形の要素を作る <a href="https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks">life-cycle-callbacks</a> の例です。 (<a href="https://mdn.github.io/web-components-examples/life-cycle-callbacks">実行例</a>)</p>

<p><code>&lt;custom-square&gt;</code> 要素のクラス定義の中に、外部関数である <code>updateStyle</code> を呼び出す life-cycle-callbacks が含まれています。<code>updateStyle</code> は要素のサイズと色を適用しています。<code>this</code> (カスタム要素自身) をパラメータとして関数に渡していることが分かるでしょう。</p>

<pre class="brush: js">connectedCallback() {
  console.log('四角形のカスタム要素がページに追加されました。');
  updateStyle(this);
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('四角形のカスタム要素の属性が変更されました。');
  updateStyle(this);
}</pre>

<p><code>updateStyle</code> 関数の中では、{{domxref("Element.shadowRoot")}} を利用して shadow DOM への参照を取得しています。shadow DOM 内では、標準的な DOM の探索手法を用いて {{htmlelement("style")}} を探し、CSS を更新しています。</p>

<pre class="brush: js">function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i &lt; childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent = 'div {' +
                          ' width: ' + elem.getAttribute('l') + 'px;' +
                          ' height: ' + elem.getAttribute('l') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c');
    }
  }
}</pre>

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
   <td>{{SpecName('DOM WHATWG','#interface-shadowroot','Interface ShadowRoot')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.ShadowRoot")}}</p>
