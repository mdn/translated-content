---
title: clip
slug: Web/CSS/clip
tags:
  - CSS
  - CSS Reference
translation_of: Web/CSS/clip
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>clip</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素のどの部分が可視であるかを定義します。 <code>clip</code> プロパティは絶対配置された要素、つまり {{cssxref("position","position:absolute")}} または {{cssxref("position","position:fixed")}} を持つ要素だけに適用されます。</span></p>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
clip: auto;

/* &lt;shape&gt; 値 */
clip: rect(1px, 10em, 3rem, 2ch);

/* グローバル値 */
clip: inherit;
clip: initial;
clip: unset;</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<div class="note">
<p><strong>注:</strong> 可能であれば、より新しい {{cssxref("clip-path")}} を使うことをお勧めします。</p>
</div>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;shape&gt;")}}</dt>
 <dd><code>rect(&lt;top&gt;, &lt;right&gt;, &lt;bottom&gt;, &lt;left&gt;)</code> 形式の矩形の {{cssxref("&lt;shape&gt;")}} です。 <code>&lt;top&gt;</code> と <code>&lt;bottom&gt;</code> は、ボックス境界の上辺からのオフセットを表します。<code>&lt;right&gt;</code> と <code>&lt;left&gt;</code> は、ボックス境界の左辺からのオフセットを表します。これがボックスの中身となります。</dd>
 <dd><code>&lt;top&gt;</code>、<code>&lt;right&gt;</code>、<code>&lt;bottom&gt;</code>、<code>&lt;left&gt;</code> の値は {{cssxref("&lt;length&gt;")}} または <code>auto</code> のいずれかです。<code>auto</code> が指定されると、その辺のボックス境界で切り取られます。</dd>
 <dt><code>auto</code></dt>
 <dd>要素はクリップされません (既定値)。ボックス境界で切り取る <code>rect(auto, auto, auto, auto)</code> とはまったく異なることに注意してください。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Clipping_an_image" name="Clipping_an_image">画像の切り抜き</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush:css notranslate">.dotted-border {
  border: dotted;
  position: relative;
  width: 536px;
  height: 350px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 360px;
  clip: rect(0, 175px, 113px, 0);
}


#middle {
  left: 280px;
  clip: rect(119px, 255px, 229px, 80px);
}

#bottom-right {
  left: 200px;
  clip: rect(235px, 335px, 345px, 160px);
}</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush:html notranslate">&lt;p class="dotted-border"&gt;
  &lt;img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Original graphic"&gt;
  &lt;img id="top-left" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to upper left"&gt;
  &lt;img id="middle" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped towards middle"&gt;
  &lt;img id="bottom-right" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to bottom right"&gt;
&lt;/p&gt;</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Clipping_an_image', '689px', '410px')}}</p>

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
   <td>{{SpecName('CSS Masks', '#clip-property', 'clip')}}</td>
   <td>{{Spec2('CSS Masks')}}</td>
   <td><code>clip</code> プロパティを非推奨とし、代わりに {{cssxref("clip-path")}} を提案。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visufx.html#clipping', 'clip')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.clip")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このプロパティは非推奨です。代わりに {{cssxref("clip-path")}} を使ってください。</li>
 <li>関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow")}}, {{cssxref("display")}}, {{cssxref("position")}}</li>
</ul>
