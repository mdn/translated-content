---
title: bottom
slug: Web/CSS/bottom
tags:
  - CSS
  - CSS プロパティ
  - CSS 位置指定レイアウト
  - Reference
translation_of: Web/CSS/bottom
---
<div>{{CSSRef}}</div>

<p><strong><code>bottom</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、<a href="/ja/docs/Web/CSS/position"><ruby>位置指定要素<rp> (</rp><rt>positioned elements</rt><rp>) </rp></ruby></a>の垂直位置の設定に関与します。位置指定されていない要素には効果はありません。</p>

<div>{{EmbedInteractiveExample("pages/css/bottom.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><code>bottom</code> の効果は、要素がどの様に配置されているか (つまり、 {{cssxref("position")}} プロパティの値) によって変わります。</p>

<ul>
 <li><code>position</code> が <code>absolute</code> または <code>fixed</code> に設定されている場合、 <code>bottom</code> プロパティは要素の下辺と包含ブロックの下辺との間の距離を指定します。</li>
 <li><code>position</code> が <code>relative</code> に設定されている場合、 <code>bottom</code> プロパティは要素の下辺が通常位置から上方向へ移動する量を指定します。</li>
 <li><code>position</code> が <code>sticky</code> に設定されている場合、 <code>bottom</code> プロパティは sticky 制約の矩形を計算するために使用されます。</li>
 <li><code>position</code> が <code>static</code> に設定されている場合、 <code>bottom</code> プロパティは<em>効果がありません</em>。</li>
</ul>

<p>{{cssxref("top")}} と <code>bottom</code> の両方が指定されており、 <code>position</code> が <code>absolute</code> または <code>fixed</code> に設定されており、<em>かつ</em> {{cssxref("height")}} が未指定 (<code>auto</code> または <code>100%</code> のどちらか) の場合は、 <code>top</code> と <code>bottom</code> の距離が尊重されます。それ以外の場合、 {{cssxref("height")}} が何らかの形で制約されていた場合、または <code>position</code> が <code>relative</code> に設定されていた場合は、 <code>top</code> プロパティが優先されて <code>bottom</code> プロパティは無視されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;length&gt; 値 */
bottom: 3px;
bottom: 2.4em;

/* 内包ブロックの高さに対する &lt;percentage&gt; */
bottom: 10%;

/* キーワード値 */
bottom: auto;

/* グローバル値 */
bottom: inherit;
bottom: initial;
bottom: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。
 <ul>
  <li><em>絶対位置指定要素</em>の場合は、包含ブロックの下辺までの距離。</li>
  <li><em>相対位置指定要素</em>の場合は、通常の位置からの上方向への移動量。</li>
 </ul>
 </dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>包含ブロックの高さに対する {{cssxref("&lt;percentage&gt;")}} です。</dd>
 <dt><code>auto</code></dt>
 <dd>以下のように指定します。
 <ul>
  <li><em>絶対位置指定要素</em>では、要素の位置は {{Cssxref("top")}} プロパティに基づいて決まり、 <code>height: auto</code> は内容物の高さに基づいて決まります。また、 <code>top</code> も <code>auto</code> であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。</li>
  <li><em>相対位置指定要素</em>では、通常の位置から要素までの距離は {{Cssxref("top")}} に基づきます。また、 <code>top</code> も <code>auto</code> であった場合は、垂直方向には移動しません。</li>
 </ul>
 </dd>
 <dt><code>inherit</code></dt>
 <dd>値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, または <code>auto</code> キーワードと同様に扱われます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<p>この例は、 {{cssxref("position")}} が <code>absolute</code> と <code>fixed</code> であった場合の <code>bottom</code> プロパティの動作の違いを示します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;This&lt;br&gt;is&lt;br&gt;some&lt;br&gt;tall,&lt;br&gt;tall,&lt;br&gt;tall,&lt;br&gt;tall,&lt;br&gt;tall&lt;br&gt;content.&lt;/p&gt;
&lt;div class="fixed"&gt;&lt;p&gt;Fixed&lt;/p&gt;&lt;/div&gt;
&lt;div class="absolute"&gt;&lt;p&gt;Absolute&lt;/p&gt;&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgba(55,55,55,.2);
  border: 1px solid blue;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Example','500','250')}}</p>

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
   <td>{{SpecName('CSS3 Positioning', '#propdef-bottom', 'bottom')}}</td>
   <td>{{Spec2('CSS3 Positioning')}}</td>
   <td>sticky の位置の動作を追加</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visuren.html#choose-position', 'bottom')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.bottom")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("left")}}</li>
 <li>対応する論理的プロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} および一括指定の {{cssxref("inset-block")}} と {{cssxref("inset-inline")}}</li>
 <li>{{cssxref("position")}}</li>
</ul>
