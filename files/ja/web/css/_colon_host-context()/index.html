---
title: ':host-context()'
slug: 'Web/CSS/:host-context()'
tags:
  - ':host-context()'
  - CSS
  - Experimental
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
translation_of: 'Web/CSS/:host-context()'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>:host-context()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>関数で、内部で使用される CSS を含む<a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">シャドウ DOM</a> のシャドウホストを選択します (そのため、シャドウ DOM の中のカスタム要素を選択することができます)。 — しかし、関数の引数として与えられたセレクターがシャドウホストの祖先に一致した場合のみです。</span></p>

<p><span class="seoSummary">言い換えれば、これによってカスタム要素やそのカスタム要素のシャドウ DOM 内のものは、外部 DOM 内の位置や、祖先要素に適用されたクラスや属性に基づいて、異なるスタイルを適用することができます。</span></p>

<p>典型的な使い方としては、子孫のセレクター式 (例えば <code>h1</code>) を使って、 <code>&lt;h1&gt;</code> の中にあるカスタム要素のインスタンスのみを選択することができます。もう一つの典型的な使用法は、内部要素が任意の子孫要素のクラスや属性に反応するようにすることです。例えば、 <code>.dark-theme</code> クラスが <code>&lt;body&gt;</code> に適用されたときに、異なるテキスト色を適用することができます。</p>

<div class="note">
<p><strong>注</strong>: これはシャドウ DOM の外で使用した場合、効果がありません。</p>
</div>

<pre class="brush: css no-line-numbers notranslate">/* Selects a shadow root host, only if it is
   a descendant of the selector argument given */
:host-context(h1) {
  font-weight: bold;
}

:host-context(main article) {
  font-weight: bold;
}

/* Changes paragraph text color from black to white when
   a .dark-theme class is applied to the document body */
p {
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Selectively_styling_shadow_hosts" name="Selectively_styling_shadow_hosts">シャドウホストの選択的なスタイル付け</h3>

<p>以下のスニペットは <a href="https://github.com/mdn/web-components-examples/tree/master/host-selectors">host-selectors example</a> から取ったものです。 (<a href="https://mdn.github.io/web-components-examples/host-selectors/">ライブ版もあります</a>).</p>

<p>この例には、単純なカスタム要素 — <code>&lt;context-span&gt;</code> — があり、テキストを囲むことができます。</p>

<pre class="brush: html notranslate">&lt;h1&gt;Host selectors &lt;a href="#"&gt;&lt;context-span&gt;example&lt;/context-span&gt;&lt;/a&gt;&lt;/h1&gt;</pre>

<p>要素のコンストラクターの中で、 <code>style</code> および <code>span</code> 要素を生成し、 <code>span</code> の中をカスタム要素の内容で埋め、 <code>style</code> 要素をいくつかの CSS 規則で埋めます。</p>

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

<p><code>:host-context(h1) { font-style: italic; }</code> および <code>:host-context(h1):after { content: " - no links in headers!" }</code> の規則は <code>&lt;h1&gt;</code> の中にある <code>&lt;context-span&gt;</code> 要素 (このインスタンスのシャドウホスト) のインスタンスをスタイル付けします。これは設計上、 <code>&lt;h1&gt;</code> 内部にカスタム要素が現れるべきではないことを明確にするために使用しています。</p>

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
   <td>{{ SpecName('CSS Scope', '#host-selector', ':host-context()') }}</td>
   <td>{{ Spec2('CSS Scope') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.host-context")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Web_Components">ウェブコンポーネント</a></li>
 <li>{{cssxref(":host")}}</li>
 <li>{{cssxref(":host()")}}</li>
</ul>
