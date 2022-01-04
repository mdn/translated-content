---
title: ':host'
slug: 'Web/CSS/:host'
tags:
  - ':host'
  - CSS
  - DOM
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
  - Web Components
  - shadow
  - shadow dom
  - ウェブコンポーネント
  - シャドウ DOM
  - セレクター
  - 擬似クラス
translation_of: 'Web/CSS/:host'
---
<div>{{ CSSRef }}</div>

<p><span class="seoSummary"><strong><code>:host</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の <a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、その CSS を含む<a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">シャドウ DOM</a> のシャドウホストを選択します。 — 言い換えれば、シャドウ DOM の中からカスタム要素を選択できるようにします。</span></p>

<div class="note">
<p><strong>注</strong>: これはシャドウ DOM の外で使われたときには効果がありません。</p>
</div>

<pre class="brush: css no-line-numbers notranslate">/* シャドウのルートホストを選択 */
:host {
  font-weight: bold;
}
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="notranslate">:host
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Styling_the_shadow_host" name="Styling_the_shadow_host">シャドウホストのスタイル付け</h3>

<p>以下のスニペットは、 <a href="https://github.com/mdn/web-components-examples/tree/master/host-selectors">host セレクターの例</a> (<a href="https://mdn.github.io/web-components-examples/host-selectors/">ライブでも参照してください</a>) から取りました。</p>

<p>この例では、テキストの周りを囲むことができる簡単なカスタム要素 — <code>&lt;context-span&gt;</code> — を使います。</p>

<pre class="brush: html notranslate">&lt;h1&gt;Host selectors &lt;a href="#"&gt;&lt;context-span&gt;example&lt;/context-span&gt;&lt;/a&gt;&lt;/h1&gt;</pre>

<p>要素のコンストラクターの中で、 <code>style</code> および <code>span</code> 要素を作成し、 <code>span</code> の中をカスタム要素の中身で埋め、 <code>style</code> 要素をいくつかの CSS 規則で埋めます。</p>

<pre class="brush: js notranslate">let style = document.createElement('style');
let span = document.createElement('span');
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({mode: 'open'});
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent = 'span:hover { text-decoration: underline; }' +
                    ':host-context(h1) { font-style: italic; }' +
                    ':host-context(h1):after { content: " - no links in headers!" }' +
                    ':host-context(article, aside) { color: gray; }' +
                    ':host(.footer) { color : red; }' +
                    ':host { background: rgba(0,0,0,0.1); padding: 2px 5px; }';</pre>

<p><code>:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }</code> の規則は、文書中の <code>&lt;context-span&gt;</code> 要素 (このインスタンスのシャドウホスト) のすべてのインスタンスにスタイル付けします。</p>

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
   <td>{{ SpecName('CSS Scope', '#host-selector', ':host') }}</td>
   <td>{{ Spec2('CSS Scope') }}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.host")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Web_Components">ウェブコンポーネント</a></li>
 <li>{{cssxref(":host()")}}</li>
 <li>{{cssxref(":host-context()")}}</li>
</ul>
