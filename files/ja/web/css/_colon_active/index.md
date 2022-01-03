---
title: ':active'
slug: 'Web/CSS/:active'
tags:
  - CSS
  - ウェブ
  - セレクター
  - リファレンス
  - レイアウト
  - 疑似クラス
translation_of: 'Web/CSS/:active'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:active</code></strong> <a href="/ja/docs/CSS/Pseudo-classes" title="Pseudo-classes">疑似クラス</a>は、ユーザーによってアクティブ化されている要素 (ボタンなど) を表します。</span>マウスを使用する場合は、「アクティブ化」とはふつう、第1ボタンを押し下げたときに始まります。</p>

<pre class="brush: css no-line-numbers">/* アクティブ化されている &lt;a&gt; をすべて選択します */
a:active {
  color: red;
}</pre>

<p><code>:active</code> 疑似クラスは、 {{HTMLElement("a")}} 及び {{HTMLElement("button")}} 要素で使われます。この疑似クラスで他のよくあるターゲットとしては、アクティブ化される要素を<em>含む</em>要素や、関連付けられた {{HTMLElement("label")}} 要素を通してアクティブ化されるフォーム要素です。</p>

<p><code>:active</code> 疑似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の疑似クラス （{{cssxref(":link")}}、{{cssxref(":hover")}}、 {{cssxref(":visited")}}）によって上書きされます。適切にリンクにスタイルを適用するには、 <em>LVHA 順</em>: <code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code> で定義されるように、他のすべてのリンク関連規則の後に <code>:active</code> 規則を置いてください。</p>

<div class="note"><strong>メモ:</strong> 複数ボタンのマウスを使うシステムでは、 CSS 3 は <code>:active</code> 擬似クラスは第1ボタン、つまり右手用のマウスではふつう一番左のボタンにのみ適用しなければならないと定義しています。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="Active_links" name="Active_links">アクティブなリンク</h3>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;この段落にはリンクが含まれています。
  &lt;a href="#"&gt;このリンクはクリックすると赤色になります。&lt;/a&gt;
  この段落は段落やリンクをクリックすると灰色になります。
&lt;/p&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css">a:link { color: blue; }          /* 未訪問リンク */
a:visited { color: purple; }     /* 訪問済みリンク */
a:hover { background: yellow; }  /* ホバー時 */
a:active { color: red; }         /* アクティブなリンク */

p:active { background: #eee; }   /* アクティブな段落 */</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Active_links')}}</p>

<h3 id="Active_form_elements" name="Active_form_elements">フォーム要素をアクティブ化</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;form&gt;
  &lt;label for="my-button"&gt;My button: &lt;/label&gt;
  &lt;button id="my-button" type="button"&gt;Try Clicking Me or My Label!&lt;/button&gt;
&lt;/form&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">form :active {
  color: red;
}

form button {
  background: white;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample('Active_form_elements')}}</p>

<h2 id="Specifications" name="Specifications"><span>仕様書</span></h2>

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
   <td>{{SpecName('HTML WHATWG', 'scripting.html#selector-active', ':active')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#active-pseudo', ':active')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#useraction-pseudos', ':active')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':active')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#anchor-pseudo-classes', ':active')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>
<p>{{Compat("css.selectors.active")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>リンク関連の擬似クラス: {{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":hover")}}</li>
</ul>
