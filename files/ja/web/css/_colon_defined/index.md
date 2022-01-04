---
title: ':defined'
slug: 'Web/CSS/:defined'
tags:
  - CSS
  - HTML
  - Layout
  - Pseudo-class
  - Reference
  - Web
  - セレクター
  - 擬似クラス
translation_of: 'Web/CSS/:defined'
---
<div>{{ CSSRef }}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:defined</code></strong> <a href="/ja/docs/CSS/Pseudo-classes" title="Pseudo-classes">擬似クラス</a>は、定義されているすべての要素を表します。これにはブラウザーに組み込まれたすべての標準要素と、 ({{domxref("CustomElementRegistry.define()")}} メソッドを使用して) 定義に成功したカスタム要素が含まれます。</span></p>

<pre class="brush: css no-line-numbers">/* 定義されたすべての要素を選択 */
:defined {
  font-style: italic;
}

/* 特定の custom 要素のすべてのインスタンスを選択 */
simple-custom:defined {
  display: block;
}
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>この最初の例は <code>&lt;simple-custom&gt;</code> <a href="/ja/docs/Web/Web_Components/Using_custom_elements">カスタム要素</a>を定義するスクリプトを含んでいます。</p>

<pre class="brush: js">customElements.define('simple-custom',
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement('div');
      divElem.textContent = this.getAttribute('text');

      let shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(divElem);
  }
})</pre>

<p>次に、 <code>&lt;simple-custom&gt;</code> 要素と標準の {{htmlelement("p")}} 要素のインスタンスがある HTML です。</p>

<pre class="brush: html">&lt;simple-custom text="Custom element example text"&gt;&lt;/simple-custom&gt;

&lt;p&gt;Standard paragraph example text&lt;/p&gt;</pre>

<p>それでは CSS です。ここでは、要素の種類に基づいて背景色を定義し、カスタム要素の不透明度を定義済みであるかどうかによって変更し、 <code>:defined</code> セレクターを使用して定義された要素テキストをすべて斜体で表示します。</p>

<pre class="brush: css">/* 2つの要素を背景で区別できるようにする */
p {
  background: yellow;
}

simple-custom {
  display: block;
  background: cyan;
}

/* カスタム要素と組み込み要素を両方イタリック体にする */
:defined {
  font-style: italic;
}</pre>

<p>それから、カスタム要素が定義されていないときには非表示にするルールと、定義されていたらブロックレベル要素として定義して表示します。</p>

<pre class="brush: css">simple-custom:not(:defined) {
  opacity: 0;
}

simple-custom:defined {
  opacity: 0.75;
  text-decoration: underline;
}</pre>

<p>これは、複雑なカスタム要素があってページの読み込みを待ちたいときに便利です。定義が完了するまで要素のインスタンスを非表示にして、ページ上でスタイル適用前の醜い要素が一瞬現れるのを防ぐことができます。</p>

<h3 id="Result" name="Result">結果</h3>

<p>以上のコードを実行した結果は次の通りです。</p>

<p>{{EmbedLiveSample('Examples')}}</p>

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
   <td>{{ SpecName('HTML WHATWG', 'semantics-other.html#selector-defined', ':defined') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>このページの互換性一覧表は構造化データから生成されています。データに協力したいのであれば、 <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> をチェックアウトしてプルリクエストを送信してください。</p>

<p>{{Compat("css.selectors.defined")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Web_Components">ウェブコンポーネント</a></li>
 <li>{{cssxref(":host")}}</li>
 <li>{{cssxref(":host()")}}</li>
 <li>{{cssxref(":host-context()")}}</li>
</ul>
