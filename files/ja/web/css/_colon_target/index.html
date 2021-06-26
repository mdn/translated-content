---
title: ':target'
slug: 'Web/CSS/:target'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Web
  - セレクター
  - 疑似クラス
translation_of: 'Web/CSS/:target'
---
<div>{{CSSRef}}</div>

<p><strong><code>:target</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>は、 URL のフラグメントに一致する {{htmlattrxref("id")}} を持つ固有の要素 (<em>対象要素</em>) を表します。</p>

<pre class="brush: css no-line-numbers notranslate">/* 現在の URL のフラグメントに一致する ID を持つ要素を選択 */
:target {
  border: 2px solid black;
}</pre>

<p>例えば、以下の URL には <code>section2</code> と呼ばれる要素を指すフラグメント (<em>#</em> 記号で記述) があります。</p>

<pre class="notranslate">http://www.example.com/index.html#section2</pre>

<p>現在の URL が上記の通りの場合、以下の要素が <code>:target</code> セレクターで選択されます。</p>

<pre class="brush: html notranslate">&lt;section id="section2"&gt;Example&lt;/section&gt;</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="A_table_of_contents" name="A_table_of_contents">目次</h3>

<p><code>:target</code> 擬似クラスは、目次を構成するためにリンクされたページの部分を強調表示するために使うことができます。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;h3&gt;目次&lt;/h3&gt;
&lt;ol&gt;
 &lt;li&gt;&lt;a href="#p1"&gt;第1段落にジャンプ！&lt;/a&gt;&lt;/li&gt;
 &lt;li&gt;&lt;a href="#p2"&gt;第2段落にジャンプ！&lt;/a&gt;&lt;/li&gt;
 &lt;li&gt;&lt;a href="#nowhere"&gt;このリンクは対象がないので、
   どこにも行きません。&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;

&lt;h3&gt;My Fun Article&lt;/h3&gt;
&lt;p id="p1"&gt;You can target &lt;i&gt;this paragraph&lt;/i&gt; using a
  URL fragment. Click on the link above to try out!&lt;/p&gt;
&lt;p id="p2"&gt;This is &lt;i&gt;another paragraph&lt;/i&gt;, also accessible
  from the links above. Isn't that delightful?&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">p:target {
  background-color: gold;
}

/* 対象要素に擬似要素を追加 */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: .25em;
}

/* 対象要素の中の i 要素にスタイルを適用 */
p:target i {
  color: red;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<div>{{EmbedLiveSample('A_table_of_contents', 500, 300)}}</div>

<h3 id="Pure-CSS_lightbox" name="Pure-CSS_lightbox">純粋な CSS のライトボックス</h3>

<p><code>:target</code> 擬似クラスを使用して JavaScript を使わずにライトボックスを作成することができます。この技術はページ内の最初は非表示の要素をリンクを作ることができることを利用しています。いったん対象となれば、 CSS で <code>display</code> を変更して表示させます。</p>

<div class="note"><strong>注:</strong> <code>:target</code> 擬似クラスを使用した純粋な CSS のライトボックスのもっと完全な版は、 <a href="https://github.com/madmurphy/takefive.css/">GitHub で利用できます</a> (<a href="https://madmurphy.github.io/takefive.css/">デモ</a>)。</div>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;&lt;a href="#example1"&gt;例1を開く&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#example2"&gt;例2を開く&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;div class="lightbox" id="example1"&gt;
  &lt;figure&gt;
    &lt;a href="#" class="close"&gt;&lt;/a&gt;
    &lt;figcaption&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec felis enim, placerat id eleifend eu, semper vel sem.&lt;/figcaption&gt;
  &lt;/figure&gt;
&lt;/div&gt;

&lt;div class="lightbox" id="example2"&gt;
  &lt;figure&gt;
    &lt;a href="#" class="close"&gt;&lt;/a&gt;
    &lt;figcaption&gt;Cras risus odio, pharetra nec ultricies et,
      mollis ac augue. Nunc et diam quis sapien dignissim auctor.
      Quisque quis neque arcu, nec gravida magna.&lt;/figcaption&gt;
  &lt;/figure&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">/* 開いていないライトボックス */
.lightbox {
  display: none;
}

/* 開いたライトボックス */
.lightbox:target {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ライトボックスの中身 */
.lightbox figcaption {
  width: 25rem;
  position: relative;
  padding: 1.5em;
  background-color: lightpink;
}

/* 閉じるボタン */
.lightbox .close {
  position: relative;
  display: block;
}

.lightbox .close::after {
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  position: absolute;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  content: "×";
  cursor: pointer;
}

/* ライトボックスのオーバーレイ */
.lightbox .close::before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,.7);
  content: "";
  cursor: default;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<div>{{EmbedLiveSample('Pure-CSS_lightbox', 500, 220)}}</div>

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
   <td>{{SpecName("HTML WHATWG", "browsers.html#selector-target", ":target")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>HTML 特有の意味論を定義。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS4 Selectors", "#the-target-pseudo", ":target")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#target-pseudo", ":target")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("css.selectors.target")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Selectors/Using_the_%3Atarget_pseudo-class_in_selectors">セレクターでの :target 擬似クラスの利用</a></li>
</ul>
