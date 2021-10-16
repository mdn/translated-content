---
title: cross-fade()
slug: Web/CSS/cross-fade()
tags:
  - CSS
  - CSS Function
  - CSS-4 Images
  - Experimental
  - Function
  - Reference
  - Web
translation_of: Web/CSS/cross-fade()
---
<p>{{CSSRef}}</p>

<p><span class="seoSummary">CSS の <strong><code>cross-fade()</code></strong> 関数は、2枚以上の画像を所定の透過度で合成するために使用することができます。</span>これは単色で色を薄めたり、放射状グラデーションとの組み合わせでページの特定の領域を強調させたりするような、数多くの単純な画像加工に使用することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><strong>重要</strong>: 仕様書と現在の実装とで構文が異なっています。仕様書の構文を先に説明します。</p>

<h3 id="Specification_syntax" name="Specification_syntax">仕様書上の構文</h3>

<p><code>cross-fade()</code> 関数は、画像と、他の画像と合成したときにそれぞれの画像が占める割合を定義したパーセント値のリストを取ります。パーセント値は引用符なしで記述し、 “%” 記号を含め、 0% から 100% までの間である必要があります。</p>

<p>この関数は CSS の中で、通常の画像の参照が利用できるところならばどこでも利用できます。</p>

<h4 id="Cross-fade_percentages" name="Cross-fade_percentages">cross-fade のパーセント値</h4>

<p>Think of the percentage as an opacity value for each image. This means a value of 0% means the image is fully transparent while a value of 100% makes the image fully opaque.</p>

<pre class="brush: css notranslate">cross-fade( url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade( url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade( url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
<span class="hljs-tag"><span class="hljs-value">cross-fade( url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade( url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade( url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */</span></span></pre>

<p>If any percentages are omitted, all the specified percentages are summed together and subtracted from <code>100%</code>. If the result is greater than 0%, the result is then divided equally between all images with omitted percentages.</p>

<p>In the simplest case, two images are faded between each other. To do that, only one of the images needs to have a percentage, the other one will be faded accordingly. For example, a value of 0% defined for the first image yields only the second image, while 100% yields only the first. A 25% value renders the first image at 25% and the second at 75%. The 75% value is the inverse, showing the first image at 75% and the second at 25%.</p>

<p>The above could also have been written as:</p>

<pre class="brush: css notranslate">cross-fade( url(white.png) 0%,   url(black.png)); /* fully black */
cross-fade( url(white.png) 25%,  url(black.png)); /* 25% white, 75% black */
cross-fade( url(white.png),      url(black.png)); /* 50% white, 50% black */
cross-fade( url(white.png) 75%,  url(black.png)); /* 75% white, 25% black */
cross-fade( url(white.png) 100%, url(black.png)); /* fully white */
cross-fade( url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */</pre>

<p>If no percentages are declared, both the images will be 50% opaque, with a cross-fade rendering as an even merge of both images. The 50%/50% example seen above did not need to have the percentages listed, as when a percentage value is omitted, the included percentages are added together and subtracted from 100%. The result, if greater than 0, is then divided equally between all images with omitted percentages.</p>

<p>In the last example, the sum of both percentages is not 100%, and therefore both images include their respective opacities.</p>

<p>If no percentages are declared and three images are included, each image will be 33.33% opaque. The two following are lines (almost) identical:</p>

<pre class="brush: css notranslate">cross-fade( url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade( url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);</pre>

<h3 id="Older_implemented_syntax">Older, implemented syntax</h3>

<pre class="syntaxbox notranslate">cross-fade( &lt;image, &lt;image&gt;, &lt;percentage&gt; )</pre>

<p>The specification for the <code>cross-fade()</code> function allows for multiple images and for each image to have transparency values independent of the other values. This was not always the case. The <a href="/ja/docs/">original syntax</a>, which has been implemented in some browsers, only allowed for two images, with the sum of the transparency of those two images being exactly 100%. The original syntax is supported in Safari and supported with the <code>-webkit-</code> prefix in Chrome, Opera, and other blink-based browsers.</p>

<pre class="brush: css notranslate">cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
</pre>

<p>In the implemented syntax, the two comma-separated images are declared first, followed by a comma and required percent value. Omitting the comma or percent invalidates the value. The percent is the opacity of the first declared image. The included percentage is subtracted from <span class="css">100%, with the difference being the opacity of the second image</span>.</p>

<p>The green/red example (with the percentages totalling 150%) and the yellow/red/blue example (with three images) from the specification syntax section, are not possible in this implementation.</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<p>ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。背景画像を使用する場合は、色のコントラストを大きくして、画像がない場合と同様に、画像の上にどのような文字も読み取れるようにしてください。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content">MDN "WCAG を理解する ― ガイドライン 1.1 の解説"</a></li>
 <li><a class="external external-icon" href="https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html" rel="noopener">Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Older_syntax_for_cross-fade" name="Older_syntax_for_cross-fade">cross-fade の古い構文</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="crossfade"&gt;&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[4-11] notranslate">.crossfade {
    width: 300px;
    height: 300px;
    background-image: -webkit-cross-fade(
        url('https://mdn.mozillademos.org/files/8543/br.png'),
        url('https://mdn.mozillademos.org/files/8545/tr.png'),
        75%);
    background-image: cross-fade(
        url('https://mdn.mozillademos.org/files/8543/br.png'),
        url('https://mdn.mozillademos.org/files/8545/tr.png'),
        75%);
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Older_syntax_for_cross-fade", "330", "330")}}</p>

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
   <td>{{SpecName('CSS4 Images', '#cross-fade-function', 'cross-fade()')}}</td>
   <td>{{Spec2('CSS4 Images')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.types.image.cross-fade")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("image")}}</li>
 <li>{{cssxref("url")}}</li>
 <li>{{cssxref("_image", "image()")}}</li>
 <li>{{cssxref("image-set")}}</li>
 <li>{{cssxref("element")}}</li>
 <li><a href="/ja/docs/CSS/Using_CSS_gradients" title="Using gradients">CSS グラデーションの使用</a></li>
 <li>グラデーション関数: {{cssxref("linear-gradient", "linear-gradient()")}}, {{cssxref("radial-gradient", "radial-gradient()")}}, {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("conic-gradient", "conic-gradient()")}},</li>
</ul>
