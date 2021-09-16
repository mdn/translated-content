---
title: image-rendering
slug: Web/CSS/image-rendering
tags:
  - CSS
  - CSS プロパティ
  - CSS 画像
  - Reference
  - image-rendering
translation_of: Web/CSS/image-rendering
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>image-rendering</code></strong> プロパティは、画像を拡大縮小するアルゴリズムを設定します。このプロパティは要素自身に適用され、他のプロパティで設定されるあらゆる画像、子孫要素に適用されます。</p>

<p>{{Glossary("User agent", "ユーザーエージェント")}}は、ページの作者が自然な寸法とは異なる寸法を指定したとき、画像を拡大縮小します。拡大縮小は、ユーザー操作 (ズーム) によって発生することもあります。例えば、画像の自然な寸法が <code>100×100px</code> であって、実際の寸法が <code>200×200px</code> (または <code>50×50px</code>) であるとき、画像は <code>image-rendering</code> で指定されたアルゴリズムを使用して拡大 (または縮小) されます。このプロパティは拡大/縮小されない画像には効果がありません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers">/* キーワード値 */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* グローバル値 */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>拡大縮小のアルゴリズムはユーザーエージェントに依存します。バージョン 1.9 (Firefox 3.0) から、Gecko は<ruby><em>バイリニア</em><rp> (</rp><rt>bilinear</rt><rp>) </rp></ruby>再サンプリングを使用します (high-quality)。</dd>
 <dt><code>smooth</code> {{Experimental_Inline}}</dt>
 <dd>画像は、画像の外見を最適化するアルゴリズムで拡大縮小されます。具体的には、バイリニア補完などの色の「円滑化」が許容されるアルゴリズムで拡大縮小されます。これは、写真のような画像を想定しています。</dd>
 <dt><code style="white-space: nowrap;">high-quality</code> {{Experimental_Inline}}</dt>
 <dd><code>smooth</code> と同等ですが、より高品質な設定です。システムのリソースが制約されている場合、どの画像の品質をどの程度低下させるかを検討するとき。 <code style="white-space: nowrap;">high-quality</code> の画像は他の値よりも優先されます。</dd>
 <dt><code style="white-space: nowrap;">crisp-edges</code></dt>
 <dd>画像は、画像内のコントラストとエッジを保つアルゴリズムにより拡大縮小されます、画像の処理過程で色の円滑化やぼかしを導入は行いません。<ruby>最近傍<rp> (</rp>nearest neighbor<rp>) </rp></ruby>法や、 2×SaI や <a href="https://en.wikipedia.org/wiki/Hqx">hqx-family</a> のような<a href="https://en.wikipedia.org/wiki/Pixel-art_scaling_algorithms">その他のスムーズ化が行われない拡大縮小アルゴリズム</a>などが適しています。この値はブラウザーゲームようなピクセルアート画像を想定しています。</dd>
 <dt><code>pixelated</code></dt>
 <dd>画像を拡大する時は、<ruby>最近傍<rp> (</rp>nearest neighbor<rp>) </rp></ruby>法が使用され、画像は画像が大きなピクセルで構成されたように表示されます。縮小する時は <code>auto</code> と同じになります。</dd>
</dl>

<div class="blockIndicator note">
<p><strong>メモ:</strong> <code>optimizeQuality</code> および <code>optimizeSpeed</code> の値は、初期の草稿で (SVG の仕様 {{SVGAttr("image-rendering")}} に似たものとして) <code>smooth</code> および <code>pixelated</code> の同義語として定義されていました。</p>
</div>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<div class="hidden">
<pre class="brush: html">&lt;div&gt;
  &lt;img class="auto" alt="auto" src="https://mdn.mozillademos.org/files/2765/blumen.jpg" /&gt;
  &lt;img class="pixelated" alt="pixelated" src="https://mdn.mozillademos.org/files/2765/blumen.jpg" /&gt;
  &lt;img class="crisp-edges" alt="crisp-edges" src="https://mdn.mozillademos.org/files/2765/blumen.jpg" /&gt;
&lt;/div&gt;
</pre>
</div>

<div class="hidden">
<pre class="brush: css">img {
  height: 200px;
}
</pre>
</div>

<pre class="brush: css">.auto {
  image-rendering: auto;
}

.pixelated {
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
</pre>

<p>{{EmbedLiveSample('Examples')}}</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> 実際の仕様では、 <code>pixelated</code> と <code>crisp-edges</code> の規則を組み合わせることで、お互いにある程度のフォールバックを提供することができます。 (実際の規則にフォールバックを追加するだけです) <a href="/ja/docs/Web/API/Canvas_API">Canvas API</a> は手動の画像データ操作または <code><a href="/ja/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled">imageSmoothingEnabled</a></code> によって <a href="http://phrogz.net/tmp/canvas_image_zoom.html"><code>pixelated</code> の代替ソリューション</a> を提供することができます。</p>
</div>

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
   <td>{{SpecName("CSS3 Images", "#the-image-rendering", "image-rendering")}}</td>
   <td>{{Spec2("CSS3 Images")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{CSSInfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.image-rendering")}}</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> 仕様書の例にあるようなピクセルアートの拡大縮小には <code>crisp-edges</code> を使うことが想定されていますが、実際にはどのブラウザーも (2020年1月時点で) 対応していません。 <a href="https://dxr.mozilla.org/mozilla-central/rev/5fd4cfacc90ddd975c82ba27fdc56f4187b3f180/gfx/wr/webrender/src/resource_cache.rs#1727">Firefox</a> では、 <code>pixelated</code> は最近傍法として解釈されますが、 <code>auto</code> と <code>crisp-edges</code> はトリリニア法または線形で補間されます。</p>

<p>Chromium と Safari (WebKit) での動作については、 <code><a href="https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/style/computed_style.cc?type=cs&amp;q=GetInterpolationQuality&amp;g=0&amp;l=1160">GetInterpolationQuality</a></code> 関数と <code><a href="https://github.com/WebKit/webkit/blob/9b169b6c85394d94f172e5d75ca2f6c74830e99c/Source/WebCore/css/CSSPrimitiveValueMappings.h#L4324">CSSPrimitiveValue::operator ImageRendering()</a></code> をそれぞれ参照してください。</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>その他の画像に関する CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.</li>
</ul>
