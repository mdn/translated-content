---
title: '::slotted()'
slug: 'Web/CSS/::slotted'
tags:
  - '::slotted'
  - CSS
  - Reference
  - ウェブ
  - レイアウト
  - 疑似要素
translation_of: 'Web/CSS/::slotted'
---
<div>{{ CSSRef }}</div>

<p><strong><code>::slotted()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の <a href="/ja/docs/Web/CSS/Pseudo-elements">疑似要素</a>で、 HTML テンプレート内にあるスロットに配置された任意の要素を表します (詳しくは<a href="/ja/docs/Web/Web_Components/Using_templates_and_slots">テンプレートとスロットの利用</a>をご覧ください)。</p>

<p>これは <a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">shadow DOM</a> 内に配置された CSS の中で使われた時のみ機能します。なお、このセレクターはスロット内に配置されたテキストノードは選択しません。実際の要素のみを対象にします。</p>

<pre class="brush: css no-line-numbers">/* スロット内に配置された任意の要素を選択 */
::slotted(*) {
  font-weight: bold;
}

/* スロット内に配置された &lt;span&gt; 要素を選択 */
::slotted(span) {
  font-weight: bold;
}
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>以下のコードの断片は <a href="https://github.com/mdn/web-components-examples/tree/master/slotted-pseudo-element">slotted-pseudo-element</a> デモから取られたものです (<a href="https://mdn.github.io/web-components-examples/slotted-pseudo-element/">ライブでもご覧ください</a>)。</p>

<p>このデモでは、３つのスロットを持つ単純なテンプレートを使用します。</p>

<pre class="brush: html">&lt;template id="person-template"&gt;
  &lt;div&gt;
    &lt;h2&gt;Personal ID Card&lt;/h2&gt;
    &lt;slot name="person-name"&gt;NAME MISSING&lt;/slot&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;slot name="person-age"&gt;AGE MISSING&lt;/slot&gt;&lt;/li&gt;
      &lt;li&gt;&lt;slot name="person-occupation"&gt;OCCUPATION MISSING&lt;/slot&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>

<p>カスタム要素 — <code>&lt;person-details&gt;</code> — は以下のように定義されています。</p>

<pre class="brush: js">customElements.define('person-details',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('person-template');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'});

      let style = document.createElement('style');
      style.textContent = 'div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }' +
                           'h2 { margin: 0 0 10px; }' +
                           'ul { margin: 0; }' +
                           'p { margin: 10px 0; }' +
                           '::slotted(*) { color: gray; font-family: sans-serif; } ';

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
  }
})</pre>

<p><code>style</code> 要素のコンテンツを埋めると、スロットになるすべての要素を選択し (<code>::slotted(*)</code>)、それぞれに異なるフォントと色を与えているのが分かるでしょう。これにより、隣のコンテンツが埋まらなかったスロットよりも目立たせることができます。</p>

<p>この要素がページに挿入されると、以下のように見えます。</p>

<pre class="brush: html">&lt;person-details&gt;
  &lt;p slot="person-name"&gt;Dr. Shazaam&lt;/p&gt;
  &lt;span slot="person-age"&gt;Immortal&lt;/span&gt;
  &lt;span slot="person-occupation"&gt;Superhero&lt;/span&gt;
&lt;/person-details&gt;</pre>

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
   <td>{{ SpecName('CSS Scope', '#slotted-pseudo', '::slotted') }}</td>
   <td>{{ Spec2('CSS Scope') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.selectors.slotted")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Web_Components">Web components</a></li>
</ul>
