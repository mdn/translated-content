---
title: OpenTypeフォント機能の手引き
slug: Web/CSS/CSS_Fonts/OpenType_fonts_guide
tags:
  - CSS
  - Fonts
  - Text
translation_of: Web/CSS/CSS_Fonts/OpenType_fonts_guide
---
<p>{{CSSRef}}</p>

<p>フォントの機能及び派生とは，OpenTypeフォントに含まれる異なるグリフや文字様式を指します。これらには合字（「fi」又は「ffl」といった文字を組み合わせた特殊なグリフ），文字詰め（特定の字形の組の間隔の調整），分数，数字様式，及びその他多数が含まれます。これらは全てOpenType機能と呼ばれており，Web上での利用には特定のプロパティ郡及び低級制御プロパティの一つを介します――{{cssxref("font-feature-settings")}}。本稿ではCSSにおけるOpenTypeフォント機能の利用について，知っていなければならない全てを提供します。</p>

<p>幾つかのフォントでは，前述の機能の内一つ又は複数個が既定で有効です（一般的な例: 字詰め及び既定合字）が，他の機能については，デザイナー又は開発者に，個別の事案で有効にするか否かの選択肢が委ねられています。</p>

<p>In addition to broad feature sets like ligatures or lining figures (numerals that line up evenly as opposed to 'oldstyle', which look more like lower-case letters), there are also very specific ones such as stylistic sets (which might include several specific variants of glyphs meant to be used together), alternates (which might be one or more variants of the letter 'a'), or even language-specific alterations for East Asian languages. In the latter case, these alterations are actually necessary to properly express the language, so they go beyond the more stylistic preference of most other OpenType features.</p>

<div class="warning">
<p><strong>注意</strong>: There are many CSS attributes defined to leverage font features, but unfortunately many are not fully implemented. They are all defined and shown here, but many will only work using the lower-level {{cssxref("font-feature-settings")}} property. It's possible to write CSS to work both ways but this can become cumbersome. The issue with simply using <code>font-feature-settings</code> for everything is that every time you want to change one of the individual features, you have to redefine the entire string (similar to manipulating variable fonts with {{cssxref("font-variation-settings")}}).</p>
</div>

<h2 id="フォント機能の可用性を知る">フォント機能の可用性を知る</h2>

<p>This is sometimes the trickiest thing to work out if you don't have any documentation that came with the fonts (many type designers and foundries will provide sample pages and CSS just for this very reason). But there are some sites that make it easier to figure out. You can visit <a href="https://wakamaifondue.com">wakamaifondue.com</a>, drop your font file on the circle where instructed and in a few moments you'll have a full report on all the capabilities and features of your font. <a href="https://axis-praxis.org">Axis-praxis.org</a> also offers a similar capability, with the ability to click on the features to turn them on or off in a given text block.</p>

<h2 id="機能を利用する理由">機能を利用する理由</h2>

<p>Given that these features take a bit of work to discover and use, it may seem a fair question to ask why one would bother to use them. The answer lies in the specific features that will make a site more useful, readable, and polished:</p>

<ul>
 <li><strong>Ligatures</strong> like 'ff' or 'fi' make letter spacing and reading more even and smooth.</li>
 <li><strong>Fractions</strong> can make home improvement and recipe sites much easier to read and understand.</li>
 <li><strong>Numerals</strong> within paragraphs of text set as 'oldstyle' sit more comfortably between lower-case letters, and likewise setting them as 'tabular numbers' will make them line up better when setting a list of costs in a table say. 'lining' figures on the other hand sit more uniformly on their own or in front of capitalized words.</li>
</ul>

<p>While none of these features individually will render a site useless due to their absence, each of them in turn can make a site easier to use and more memorable for its attention to detail.</p>

<blockquote>
<p>OpenType 機能は、フォント内の隠し部屋にたとえられます。隠し部屋の扉を開ければ、フォントの外観や振る舞いを少し、あるいは劇的に変えるための方法がわかります。すべての OpenType 機能が常に利用に適しているわけではありませんが、一部の機能は優れたタイポグラフィを実現するために不可欠です。<cite>――</cite><em><a href="https://helpx.adobe.com/jp/fonts/using/use-open-type-features.html">OpenType機能の使用</a> - アドビ</em></p>
</blockquote>

<h3 id="単なる様式ではなく，意味が丸ごと変わる場合も">単なる様式ではなく，意味が丸ごと変わる場合も</h3>

<p>時として――{{cssxref("font-variant-east-asian")}}のように――OpenType機能は或る種のグリフ異形を用いるのに直接結び付いており，意味や可読性に影響を与える可能性があります。そのような場合，OpenType機能は単に細かな見栄えを調整する以上の，寧ろ内容そのものに不可欠な部分を役めます。</p>

<h2 id="フォント機能">フォント機能</h2>

<p>There are a number of different features to consider. They are grouped and explained here according to the main attributes and options covered in the W3C specifications.</p>

<div class="note">
<p><strong>Note</strong>: The examples below show the properties and some example combinations, along with the lower-level syntax equivalents. They may not match exactly due to browser implementation inconsistencies, but in many cases the first example will match the second. The typefaces shown are Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script, and Kokoro (all available and free to use, most are on Google Fonts and other services).</p>
</div>

<h3 id="字詰め_cssxreffont-kerning">字詰め ({{cssxref("font-kerning")}})</h3>

<p>This refers to the spacing between specific glyph pairings. This is generally on by default (as recommended by the OpenType specification). It should be noted that if {{cssxref("letter-spacing")}} is also set on your text, that is applied after kerning.</p>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}</div>

<h3 id="代替_cssxreffont-variant-alternates">代替 ({{cssxref("font-variant-alternates")}})</h3>

<p>Fonts can supply a number of different alternatives for various glyphs, such as different styles of lower case 'a' or more or less elaborate swashes in a script typeface. This property can activate an entire set of alternates or just a specific one, depending on the values supplied.The example below is showing several different aspects of working with alternate characters. Fonts with alternate glyphs can make them available across the board or individually in separate stylistic sets, or even individual characters. In this example you can see two different typefaces, and the introduction of the {{cssxref("@font-feature-values")}} at-rule. This is used to define shortcuts or named options that can be defined per font family. This way you can create a named option that applies to only a single font, or one that is shared and can be applied more generally</p>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}</div>

<p>In this case, <code>@stylistic(alternates)</code> will show all the alternate characters for either font). Applying this to just the word 'My' alters the way the 'M' renders, and applying <code>@styleset(alt-a)</code> only changes the lower case 'a'.</p>

<p>Try changing the line</p>

<pre class="brush: css">font-variant-alternates: styleset(alt-a);</pre>

<p>to</p>

<pre class="brush: css">font-variant-alternates: styleset(alt-g);
</pre>

<p>and notice that the lower case 'a' reverts to its regular form and the lower case 'g' changes instead.</p>

<h4 id="代替フォントについての詳細">代替フォントについての詳細</h4>

<ul>
 <li><a href="https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates">https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates</a>

  <ul>
   <li>〔日本語訳〕<a href="https://triple-underscore.github.io/css-fonts4-ja.html#propdef-font-variant-alternates">https://triple-underscore.github.io/css-fonts4-ja.html#propdef-font-variant-alternates</a></li>
  </ul>
 </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates">https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates</a></li>
</ul>

<h3 id="合字_cssxreffont-variant-ligatures">合字 ({{cssxref("font-variant-ligatures")}})</h3>

<p>Ligatures are glyphs that replace two or more separate glyphs in order to represent them more smoothly (from a spacing or aesthetic perspective). Some of the most common are letters like 'fi', 'fl', or 'ffl' — but there are many other possibilities. There are the most frequent ones (referred to as common ligatures), and there are also more specialized categories like 'discretionary ligatures', 'historical ligatures', and 'contextual alternates'. While these last ones are not technically ligatures, they are generally similar in that they replace specific combinations of letters when they appear together.</p>

<p>While more common in script typefaces, in the below example they are used to create arrows:</p>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}</div>

<h3 id="位置_cssxreffont-variant-position">位置 ({{cssxref("font-variant-position")}})</h3>

<p>Position variants are used to enable typographic superscript and subscript glyphs. These are designed to work with the surrounding text without altering the baseline or line spacing. This is one of the key benefits over using the {{htmlelement("sub")}} or {{cssxref("sup")}} elements.</p>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}</div>

<h3 id="大・小文字_cssxreffont-variant-caps">大・小文字 ({{cssxref("font-variant-caps")}})</h3>

<p><span class="st">OpenType機能のより一般的な使用例の一つに，小英大文字の適切な使用があります。小英大文字とは，大文字を，小文字列の内でより適切に収まるような大きさにしたものであり，一般に頭文字及び略語に対して用います。</span></p>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}</div>

<h3 id="数字_cssxreffont-variant-numeric">数字 ({{cssxref("font-variant-numeric")}})</h3>

<p>フォントに一般的に含まれる数字には，幾つか異なる様式があります。</p>

<ul>
 <li>'Lining'〔線引き〕数字は，全ての数字の高さと基底線が揃っています。</li>
 <li>'Oldstyle'〔旧式の〕数字は高さが揃っておらず，周囲の小文字と同様のアセンダ及びディセンダを外見に持つよう設計されています。原稿の行内での使用を目的に設計されている為，数字と周囲のグリフとが，<span class="st">小英大文字</span>と似た方式で，視覚的に融和します。</li>
</ul>

<p>There is also the notion of spacing. Proportional spacing is the normal setting, whereas tabular spacing lines up numerals evenly regardless of character width, making it more appropriate for lining up tables of numbers in financial tables.</p>

<p>本プロパティは二種類の分数に対応しています:</p>

<ul>
 <li>斜線分数</li>
 <li>縦積み分数</li>
</ul>

<p>序数にも対応しており（「1st」や「3rd」など），斜線付きゼロがフォントに存在するならば数字のゼロはそれになります。</p>

<h4 id="線引き及び旧式の数字">線引き及び旧式の数字</h4>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}</div>

<h4 id="分数・序数・及び斜線付きゼロ">分数・序数・及び斜線付きゼロ</h4>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}</div>

<h3 id="東亜_cssxreffont-variant-east-asian">東亜 ({{cssxref("font-variant-east-asian")}})</h3>

<p>この機能を使ってフォント内の種々の代替形式グリフを参照できます。次の例ではOpenType文字集合'jis78'のみが有効化されたグリフの文字列を示しています。<span class="st">チェック欄のチェックを外すとより多くの文字が表示されます。</span></p>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}</div>

<div class="note">
<p><strong>注意</strong>: これらのグリフはフォント見本から複製したものであり，意味を成す文を意図していません。</p>
</div>

<h3 id="フォント変種（簡略構文）Cssxreffont-variant">フォント変種（簡略構文）({{Cssxref("font-variant")}})</h3>

<p>This is the shorthand syntax for defining all of the above. Setting a value of <code>normal</code> resets all properties to their initial value. Setting a value of <code>none</code> sets <code>font-variant-ligatures</code> to none and all other properties to their initial value. (Meaning that if kerning is on by default, it will still be on even with a value of <code>none</code> being supplied here.)</p>

<div>{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}</div>

<h2 id="フォント機能の設定">フォント機能の設定</h2>

<p>{{cssxref("font-feature-settings")}} is the 'low level syntax' that allows explicit access to every named available OpenType feature. This gives a lot of control, but has some disadvantages in how it impacts inheritance and — as mentioned above — if you wish to change one setting, you have to redeclare the entire string (unless you're using <a href="/ja/docs/Web/CSS/Using_CSS_variables">CSS custom properties</a> to set the values). Because of this, it's best to use the standard properties shown above wherever possible.</p>

<p>There a huge number of possible features. You can see examples of a number of them above, and there are several resources available for finding more of them.</p>

<p>The general syntax looks like this:</p>

<pre class="brush: css">.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
</pre>

<p>According to the specification you can either supply just the 4-character feature code or supply a 1 following the code (for enabling that feature) or a 0 (zero) to disable it. This is helpful if you have a feature like ligatures enabled by default but you would like to turn them off, like so:</p>

<pre class="brush: css">.no-ligatures {
  font-feature-settings: "liga" 0, "dlig" 0;
}</pre>

<h4 class="brush: css" id="font-feature-settingsプロパティの詳細">font-feature-settingsプロパティの詳細</h4>

<ul>
 <li class="brush: css"><a href="https://sparanoid.com/lab/opentype-features/">'The Complete CSS Demo for OpenType Features'</a> (can't vouch for the truth of the name, but it's pretty big)</li>
 <li><a href="https://en.wikipedia.org/wiki/List_of_typographic_features">A list of OpenType features on Wikipedia</a></li>
</ul>

<h2 id="実装に対してCSS機能検出を用いる">実装に対してCSS機能検出を用いる</h2>

<p>Since not all properties are evenly implemented, it's good practice to set up your CSS using feature detection to utilize the correct properties, with {{cssxref("font-feature-settings")}} as the fallback.</p>

<p>For example, small caps can be set several ways, but if you want to ensure that no matter what the underlying capitalization is that you end up with everything in small caps, it requires 2 settings with <code>font-feature-settings</code> versus a single property value using {{cssxref("font-variant-caps")}}.</p>

<pre class="brush: css">.small-caps {
   font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
   .small-caps {
       font-feature-settings: normal;
       font-variant-caps: all-small-caps;
   }
}
</pre>

<h2 id="関連項目">関連項目</h2>

<h3 id="CSSによるCSSのOpenType機能の実演">CSSによるCSSのOpenType機能の実演</h3>

<ul>
 <li><a href="https://sparanoid.com/lab/opentype-features/">The Complete CSS Demo for OpenType Features</a></li>
</ul>

<h3 id="Webフォント解析ツール">Webフォント解析ツール</h3>

<ul>
 <li><a href="https://wakamaifondue.com">Wakamai Fondue</a></li>
 <li><a href="https://axis-praxis.org">Axis Praxis</a></li>
</ul>

<h3 id="W3C標準">W3C標準:</h3>

<ul>
 <li><a href="https://drafts.csswg.org/css-fonts-3/#font-rend-props">Font Feature Properties in CSS Fonts Module Level 3</a>

  <ul>
   <li>〔日本語訳〕<a href="https://triple-underscore.github.io/css-fonts-ja.html#font-rend-desc">CSSフォントモジュール水準3におけるフォント特能プロパティ</a></li>
  </ul>
 </li>
 <li><a href="https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates">font-variant-alternatives in CSS Fonts Module Level 4</a>
  <ul>
   <li>〔日本語訳〕<a href="https://triple-underscore.github.io/css-fonts4-ja.html#propdef-font-variant-alternates">CSSフォントモジュール水準4におけるfont-variant-alternatives</a></li>
  </ul>
 </li>
</ul>

<h3 id="その他の文献">その他の文献</h3>

<ul>
 <li><a href="https://helpx.adobe.com/jp/fonts/using/use-open-type-features.html">OpenType機能の使用</a> - アドビ</li>
 <li><a href="https://helpx.adobe.com/jp/fonts/using/open-type-syntax.html">CSSでのOpenType機能の構文</a> - アドビ</li>
</ul>
