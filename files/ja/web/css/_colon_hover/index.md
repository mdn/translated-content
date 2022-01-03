---
title: ':hover'
slug: Web/CSS/:hover
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
  - 擬似クラス
browser-compat: css.selectors.hover
translation_of: Web/CSS/:hover
---
<div>{{ CSSRef }}</div>

<p><strong><code>:hover</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の <a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、ユーザーがポインティングデバイスで要素に反応したものの、アクティブ化する必要がないものを選択します。普通はユーザーがカーソル (マウスポインター) で要素の上をホバー (通過) させたときにこの状態になります。</p>

<pre class="brush: css no-line-numbers">/* 「ホバー」状態の &lt;a&gt; 要素を選択します */
a:hover {
  color: orange;
}</pre>

<p><code>:hover</code> 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス  ({{ cssxref(":link") }}、{{ cssxref(":visited") }}、 {{ cssxref(":active") }}) によって上書きされます。適切にリンクにスタイルを適用するには、 <code>:hover</code> の規則を <code>:link</code> と <code>:visited</code> の後、 <code>:active</code> の前に置き、 <em>LVHA 順</em>: <code>:hover</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code> で定義されるようにしてください。</p>

<div class="note"><strong>注</strong>: <code>:hover</code> 擬似クラスはタッチスクリーンで問題になります。ブラウザーによっては、 <code>:hover</code> 擬似クラスが全く選択されなかったり、要素をタッチした直後だけ選択されたり、ユーザーが指を離しても選択され続け、他の要素にタッチするまで続いたりします。ウェブの開発者は、ホバー機能が制限されていたり存在しなかったりしても、コンテンツにアクセスできるように考慮してください。</div>

<h2 id="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples">例</h2>

<h3 id="Basic_example">基本的な例</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;a href="#"&gt;このリンクの上を通過させてみてください。&lt;/a&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">a {
  background-color: powderblue;
  transition: background-color .5s;
}

a:hover {
  background-color: gold;
}</pre>

<h4 id="Result">結果</h4>

<p>{{EmbedLiveSample("Basic_example")}}</p>

<h3 id="Image_gallery">画像ギャラリー</h3>

<p><code>:hover</code> 擬似クラスを使用して、サムネイルの上をマウスが通過したときだけフルサイズに画像が表示される画像ギャラリーを作成することができます。実行できるものとして、<a class="internal" href="/@api/deki/files/6247/=css-gallery.zip" title="css-gallery.zip">このデモ</a>を参照してください。</p>

<div class="note"><strong>注:</strong> <a class="internal" href="/ja/docs/Web/CSS/:checked"><code>:checked</code></a> 擬似クラスを (隠れたラジオボタンに適用して) 使用した同様の効果の例として、 <a class="internal" href="/ja/docs/Web/CSS/:checked">:checked</a> のリファレンスページから取った<a class="internal" href="/@api/deki/files/6268/=css-checked-gallery.zip">このデモ</a>も参照してください。</div>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">備考</th>
   <th scope="col">連絡先</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'semantics-other.html#selector-hover', ':hover') }}</td>
   <td></td>
   <td><a href="https://github.com/whatwg/html/issues">WHATWG HTML GitHub issues</a></td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS4 Selectors', '#the-hover-pseudo', ':hover') }}</td>
   <td><code>:hover</code> があらゆる擬似要素に適用できるようになった。</td>
   <td><a href="https://github.com/w3c/csswg-drafts/issues">CSS Working Group drafts GitHub issues</a></td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':hover') }}</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':hover') }}</td>
   <td>初回定義。</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=370155">Chromium bug #370155: Don't make <code>:hover</code> sticky on tap on sites that set a mobile viewport</a></li>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=306581">Chromium bug #306581: Immediately show hover and active states on touch when page isn't scrollable.</a></li>
</ul>
