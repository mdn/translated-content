---
title: 背景画像の拡大縮小
slug: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
tags:
  - CSS
  - CSS Background
  - Example
  - Guide
  - Intermediate
  - Reference
  - Scale
  - Scaling
  - Web
  - dimensions
  - height
  - resize
  - width
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
original_slug: Web/CSS/CSS_Backgrounds_and_Borders/Scaling_background_images
---
<div>{{cssref}}</div>

<p><span class="seoSummary"><strong>{{cssxref("background-size")}}</strong> は CSS のプロパティで、要素の背景画像の大きさを変更し、画像の幅や高さから見た完全な大きさの画像をタイル表示するという既定の動作を変更することができます。</span>こうすることで、画像を必要に応じて拡大したり縮小したりすることができます。</p>

<h2 id="Tiling_a_large_image" name="Tiling_a_large_image">巨大な画像を並べて表示</h2>

<p>巨大な画像、2982x2808の Firefox のロゴ画像を想像してください。この画像を300x300ピクセルの要素の中に4枚並べて表示したいとします (いくつかの理由で恐ろしく悪いサイトデザインですが)。 <code>background-size</code> に固定値の150ピクセルの値を使用すると、このようにすることができます。</p>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="tiledBackground"&gt;
&lt;/div&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css; highlight:[3] notranslate">.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}</p>

<h2 id="Stretching_an_image" name="Stretching_an_image">画像の拡大縮小</h2>

<p>以下のように、画像の水平と垂直の両方の寸法を指定することもできます。</p>

<pre class="brush:css notranslate">background-size: 300px 150px;
</pre>

<p>結果は以下のようになります。</p>

<p><img alt="引き伸ばされた新しい Firefox のロゴ" src="https://mdn.mozillademos.org/files/16630/s.codepen.io_Richienb_debug_LoNxGp_PNkvYGvgGyXA.png" style="height: 304px; width: 304px;"></p>

<h2 id="Scaling_an_image_up" name="Scaling_an_image_up">画像の拡大</h2>

<p>一方で、背景の画像を拡大することができます。ここでは32x32ピクセルのファビコンを300x300ピクセルに拡大します。</p>

<p><img alt="拡大された MDN ロゴ" src="https://mdn.mozillademos.org/files/16631/favicon57.de33179910ae.1.1.png" style="height: 300px; width: 300px;"></p>

<pre class="brush: css; highlight:[5] notranslate">.square2 {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
</pre>

<p>見てのとおり、 CSS は実際には基本的に同一で、画像ファイルの名前を保存してください。</p>

<h2 id="Special_values.3A_.22contain.22_and_.22cover.22" name="Special_values.3A_.22contain.22_and_.22cover.22">特殊な値: "contain" と "cover"</h2>

<p>{{cssxref("&lt;length&gt;")}} の値以外に、 CSS の {{ cssxref("background-size") }} プロパティは <code>contain</code> と <code>cover</code> という二つの特殊な寸法の値を提供しています。これらを見てみましょう。</p>

<h3 id="contain" name="contain">contain</h3>

<p><code>contain</code> の値は、包含ボックスの寸法にかかわらず、背景画像をそれぞれの方向にできるだけ大きくなるように、ただしコンテナーの対応する辺の長さを超えないように拡大します。以下の例の大きさを変えて試してみてください。</p>

<h4 id="HTML_2" name="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="bgSizeContain"&gt;
  &lt;p&gt;この要素の寸法を変更してみてください！&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_2" name="CSS_2">CSS</h4>

<pre class="brush: css notranslate">.bgSizeContain {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{ EmbedLiveSample('contain', 250, 250) }}</p>

<h3 id="cover" name="cover">cover</h3>

<p><code>cover</code> の値は、背景画像が対応する方向のコンテナーの寸法より大きいか同じであることを保証しつつ、できるだけ画像が小さくなるように拡大縮小することを指定します。以下の例の大きさを変えて試してみてください。</p>

<h4 id="HTML_3" name="HTML_3">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="bgSizeCover"&gt;
  &lt;p&gt;この要素の寸法を変更してみてください！&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_3" name="CSS_3">CSS</h4>

<pre class="brush: css notranslate">.bgSizeCover {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}</pre>

<h4 id="Result_3" name="Result_3">結果</h4>

<p>{{ EmbedLiveSample('cover', 250, 250) }}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ cssxref("background-size") }}</li>
 <li>{{ cssxref("background") }}</li>
 <li>[SVG の背景画像の拡大縮小](/ja/docs/Web/CSS/Scaling_of_SVG_backgrounds)</li>
</ul>
