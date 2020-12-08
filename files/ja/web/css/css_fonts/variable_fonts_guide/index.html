---
title: バリアブルフォントガイド
slug: Web/CSS/CSS_Fonts/Variable_Fonts_Guide
tags:
  - CSS
  - Fonts
  - Guide
  - Text
  - variable fonts
  - web fonts
translation_of: Web/CSS/CSS_Fonts/Variable_Fonts_Guide
---
<div>{{CSSRef}}</div>

<p class="summary"><strong>バリアブルフォント</strong>は幅、太さ、スタイルごとに個別のフォントファイルを用意するのではなく、書体のさまざまなバリエーションを 1 つのファイルに組み込むことができる OpenType フォント仕様の進化版です。CSS および単一の {{cssxref("@font-face")}} 参照を介して、特定のフォントファイルに含まれるすべてのバリエーションにアクセスできます。この記事では、バリアブルフォントの使用を開始するために知っておく必要があるすべての内容を説明します。</p>

<div class="warning">
<p><strong>警告</strong>: OS でバリアブルフォントを使用するには、最新のフォントであることを確認してください。たとえば、Linux 系の OS には最新の Linux Freetype バージョンが必要であり、10.13 より前の macOS はバリアブルフォントに対応していません。OS が最新でない場合、ウェブページや Firefox 開発ツールでバリアブルフォントを使用できません。</p>
</div>

<h2 id="Variable_Fonts_what_they_are_and_how_they_differ" name="Variable_Fonts_what_they_are_and_how_they_differ">バリアブルフォント: 何であるか、何が違うのか</h2>

<p>バリアブルフォントの違いをよりよく理解するためには、バリアブルでないフォントが何であり、どのように比較するかを確認するのがいいでしょう。</p>

<h3 id="Standard_or_Static_fonts" name="Standard_or_Static_fonts">標準 (または静的) フォント</h3>

<p>以前は、一つの書体がいくつもの個別のフォントとして作成され、それぞれのフォントが特定の幅/太さ/スタイルの組み合わせを表していました。したがって 'Roboto Regular'、'Roboto Bold'、'Roboto Bold Italic' のように個別のファイルがありました。— すなわち、完全な書体を表すのに 20～30 に及ぶ異なるフォントファイルで表していました (幅の異なる大きな書体の数倍になる場合もありました)。</p>

<p>このようなシナリオでは、サイトで一般的に使用される書体を本文に使用するためには、少なくとも通常、イタリック、太字、太字イタリックの 4 つのファイルが必要になります。キャプションには細字を、強調には太字を、といったように、より多くの太さをを追加したい場合は、さらにいくつかのファイルが必要になります。その結果、HTTP リクエストが多くなり、ダウンロードされるデータも多くなります (通常は 1 ファイルあたり約 20k 以上)。</p>

<h3 id="Variable_fonts" name="Variable_fonts">バリアブルフォント</h3>

<p>バリアブルフォントでは、それらのすべての組み合わせを 1 つのファイルに収めることができます。そのファイルは単一のフォントよりも大きくなりますが、たいていの場合は、本文の表示用に読み込んだ 4 つのファイルよりも小さいか、同じくらいのサイズになります。バリアブルフォントを選択する利点は、以前は別々に読み込んでいたものをいくつかだけに制限されるのではなく、利用可能な太さや幅、スタイルの全範囲にアクセスできることです。</p>

<p>これにより、各サイズでの読みやすさを高めるために異なるサイズの見出しを異なる太さで設定したり、データの多い表示には幅をやや狭くしたりするなど、一般的な書体技術が可能になります。比較のために、雑誌の書体システムでは、出版物全体で10～15種類以上の異なる太さと幅の組み合わせを使用するのが一般的で、現在のウェブ上の一般的なスタイルよりもはるかに幅広いスタイルを提供しています (実際にはパフォーマンスの理由だけで実用的です)。</p>

<h4 id="A_note_about_font_families_weights_and_variants" name="A_note_about_font_families_weights_and_variants">フォントファミリ、太さ、バリアントについての注意</h4>

<p>それぞれの太さやスタイル (太字、イタリック、太字イタリックなど) をブラウザーが合成することに頼るのではなく、個別に特定のフォントファイルを持つという話をしてきたことに気づくかもしれません。その理由は、ほとんどの書体は太字と斜体についてとても特殊なデザインを持っており、その中にはまったく異なる文字が含まれていることが多いからです (例えば、小文字の 'a' と 'g' は斜体ではかなり異なることが多いです)。書体デザインを最も正確に反映させ、ブラウザーによる違いや、異なるスタイルを合成するかどうかの違いを避けるためには、バリアブルではないフォントを使用する場合には、必要な場所に具体的なフォントファイルを読み込む方が正確です。</p>

<p>また、バリアブルフォントによっては 2 つのファイルに分割されていることに気づくかもしれません。 1 つは直立とそのすべての変化形、もう 1 つはイタリックの変化形を含むファイルです。これは、イタリック体を必要としない場合や使用しない場合に、全体のファイルサイズを小さくするために行われることがあります。いずれの場合も、共通の {{cssxref("font-family")}} 名でそれらをリンクさせることができるので、同じ <code>font-family</code> と適切な {{cssxref("font-style")}} を使ってそれらを呼び出すことができます。</p>

<h2 id="Introducing_the_variation_axis" name="Introducing_the_variation_axis">「バリエーション軸」の紹介</h2>

<p>新しい可変フォントフォーマットの中核をなすのは、書体デザインの特定の側面の許容範囲を記述する<strong>バリエーション軸</strong>の概念です。すなわち、「太さ軸」は書体の太さや細さを表し、「幅軸」は書体の幅が広いか狭いかを表し、「イタリック軸」はイタリック体の書体であるかどうかを表し、それに応じてオン/オフを切り替えることができます。軸は範囲またはバイナリの選択が可能であることに注意してください。重みは 1-999 の範囲ですが、イタリックは単純に 0 か 1 (オフかオンか) です。</p>

<p>As defined in the specification, there are two kinds of axes: <strong>registered</strong> and <strong>custom</strong>:</p>

<ul>
 <li>
  <p>Registered axes are simply those that are most frequently encountered, and common enough that the authors of the specification felt it was worth standardizing. The five currently registered axes are weight, width, slant, italic, and optical size. The W3C has undertaken mapping them to existing CSS attributes, and in one case introduced a new one, which you'll see below.</p>
 </li>
 <li>
  <p>Custom axes are in fact limitless: the typeface designer can define and scope any axis they like, and are just required to give it a four-letter <strong>tag</strong> to identify it within the font file format itself. You can use these four-letter tags in CSS to specify a point along that axis of variation, as will be show in the code examples below.</p>
 </li>
</ul>

<h3 id="Registered_axes_and_existing_CSS_attributes" name="Registered_axes_and_existing_CSS_attributes">登録済みの軸と既存の CSS 属性</h3>

<p>In this section we'll demonstrate the five registered axes defined with examples and the corresponding CSS. Where possible, both the standard and lower-level syntax are included. The lower-level syntax ({{cssxref("font-variation-settings")}}) was the first mechanism implemented in order to test the early implementations of variable font support, and is necessary to utilize new or custom axes beyond the five registered ones. However, the W3C’s intent was for this syntax not to be used when other attributes are available. Therefore wherever possible, the appropriate property should be used, with the lower-level syntax of <code>font-variation-settings</code> only being used to set values or axes not available otherwise.</p>

<h4 id="Notes" name="Notes">注</h4>

<ol>
 <li>
  <p>When using <code>font-variation-settings</code> it is important to note that axis names are case-sensitive. The registered axis names must be in lower case, and custom axes must be in upper case. For example:</p>

  <pre class="brush: css notranslate">font-variation-settings: 'wght' 375, 'GRAD' 88;</pre>

  <p><code>wght</code> (weight) is a registered axis, and <code>GRAD</code> (grade) is a custom one.</p>
 </li>
 <li>
  <p>If you have set values using <code>font-variation-settings</code> and want to change one of those values, you must redeclare all of them (in the same way as when you set OpenType font features using {{cssxref("font-feature-settings")}}). You can work around this limitation by using <a href="/ja/docs/Web/CSS/Using_CSS_variables">CSS Custom Properties</a> (CSS variables) for the individual values, and simply modifying the value of an individual custom property. Example code follows at the end of the guide.</p>
 </li>
</ol>

<h3 id="Weight" name="Weight">太さ</h3>

<p>Weight (represented by the <code>wght</code> tag) defines the design axis of how thin or thick (light or heavy, in typical typographic terms) the strokes of the letterforms can be. For a long time in CSS there has existed the ability to specify this via the {{cssxref("font-weight")}} property, which takes numeric values ranging from 100 to 900 in increments of 100, and keywords like <code>normal</code> or <code>bold</code>, which are simply aliases for their corresponding numeric values (400 and 700 in this case). These are still applied when dealing with non-variable or variable fonts, but with variable ones, any number from 1 to 1000 is now valid.</p>

<p>It should be noted that at this point there is no way in the <code>@font-face</code> declaration to 'map' a specific point on the variation axis of a variable font to the keyword <code>bold</code> (or any other keyword). This can generally be resolved fairly easily, but does require an extra step in writing your CSS:</p>

<pre class="brush: css notranslate">font-weight: 375;

font-variation-settings: 'wght' 375;</pre>

<p>The following live example's CSS can be edited to allow you to play with font weight values.</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}</div>

<h3 id="Width" name="Width">幅</h3>

<p>Width (represented by the <code>wdth</code> tag) defines the design axis of how narrow or wide (condensed or extended, in typographic terms) the letterforms can be. This is typically set in CSS using the {{cssxref("font-stretch")}} property, with values expressed as a percentage above or below ‘normal’ (100%), any number greater than 0 is technically valid—though it is far more likely that the range would fall closer to the 100% mark, such as 75%-125%. If a number value supplied is outside the range encoded in the font, the browser should render the font at the closest value allowed.</p>

<div class="note">
<p><strong>注</strong>: The % symbol is not used when utilizing <code>font-variation-settings</code>.</p>
</div>

<pre class="brush: css notranslate">font-stretch: 115%;

font-variation-settings: 'wdth' 115;
</pre>

<p>The following live example's CSS can be edited to allow you to play with font width values.</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}</div>

<h3 id="Italic" name="Italic">イタリック</h3>

<p>The Italic (<code>ital</code>) axis works differently in that it is either on or off; there is no in-between. Italic designs often include dramatically different letterforms from their upright counterparts, so in the transition from upright to italic, a number of glyph (or character) substitutions usually occur. Italic and oblique are often used somewhat interchangeably, but in truth are actually quite different. Oblique is defined in this context with the term <code>slant</code> (see the below section), and a typeface would typically have one or the other, but not both.</p>

<p>In CSS, both italic and oblique are applied to text using the {{cssxref("font-style")}} property. Also note the introduction of <code>font-synthesis: none;</code>—which will prevent browsers from accidentally applying the variation axis and a synthesized italic. This can be used to prevent faux-bolding as well.</p>

<pre class="brush: css notranslate">font-style: italic;

font-variation-settings: 'ital' 1;

font-synthesis: none;</pre>

<p>The following live example's CSS can be edited to allow you to play with font italics.</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}</div>

<h3 id="Slant" name="Slant">傾き</h3>

<p>Slant (represented by the <code>slnt</code> tag), or as it's often referred to, 'oblique' — is different to true italics in that it changes the angle of the letterforms but doesn’t perform any kind of character substitution. It is also variable, in that it is expressed as a numeric range. This allows the font to be varied anywhere along that axis. The allowed range is generally 0 (upright) to 20 degrees — any number value along that range can be supplied, so the font can be slanted just a tiny bit. However, any value from -90–90 degrees is valid.</p>

<div class="note">
<p><strong>注</strong>: The <code>deg</code> keyword is not used when utilizing <code>font-variation-settings</code>.</p>
</div>

<pre class="brush: css notranslate">font-style: oblique 14deg;

font-variation-settings: 'slnt' 14;</pre>

<p>The following live example's CSS can be edited to allow you to play with font slant/oblique values.</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}</div>

<h3 id="Optical_size" name="Optical_size">Optical size</h3>

<p>This is something new to digital fonts and CSS, but is actually a centuries-old technique in designing and creating metal type. Optical sizing refers to the practice of varying the overall stroke thickness of letterforms based on physical size. If the size was very small (such as an equivalent to 10 or 12px), the characters would have an overall thicker stroke, and perhaps other small modifications to ensure that it would reproduce and be readable at a physically smaller size. Conversely, when a much larger size was being used (like 48 or 60px), there might be much greater variation in thick and thin stroke weights, showing the typeface design more in line with the original intent.</p>

<p>While this was originally done to compensate for the ink and paper printing process (very thin lines at small sizes often didn’t print, giving the letterforms a broken appearance), it translates well to digital displays when compensating for screen quality and physical size rendering.</p>

<p>Optical size values are generally intended to be automatically applied corresponding to <code>font-size</code>, but can also be manipulated using the lower-level <code>font-variation-settings</code> syntax.</p>

<p>There is a new attribute, {{cssxref("font-optical-sizing")}}, created to support variable fonts in CSS. When using <code>font-optical-sizing</code>, the only allowed values are <code>auto</code> or <code>none</code> — so this attribute only allows for turning optical sizing on or off. However when using <code>font-variation-settings: 'opsz' &lt;num&gt;</code>, you can supply a numeric value. In most cases you would want to match the <code>font-size</code> (the physical size the type is being rendered) with the <code>opsz</code> value (which is how optical sizing is intended to be applied when using <code>auto</code>). The option to provide a specific value is provided so that should it be necessary to override the default — for legibility, aesthetic, or some other reason — a specific value can be applied.</p>

<pre class="brush: css notranslate">font-optical-sizing: auto;

font-variation-settings: 'opsz' 36;</pre>

<p>The following live example's CSS can be edited to allow you to play with optical size values.</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}</div>

<h3 id="Custom_axes" name="Custom_axes">カスタム軸</h3>

<p>Custom axes are just that: they can be any axis of design variation that the typeface designer imagines. There may be some that become fairly common — or even become registered — but only time will tell.</p>

<h3 id="Grade" name="Grade">グレード</h3>

<p>Grade may become one of the more common custom axes as it has a known history in typeface design. The practice of designing different grades of a typeface was often done in reaction to intended use and printing technique. The term 'grade' refers to the relative weight or density of the typeface design, but differs from traditional 'weight' in that the physical space the text occupies does not change, so changing the text grade doesn't change the overall layout of the text or elements around it. This makes grade a useful axis of variation as it can be varied or animated without causing reflow of the text itself.</p>

<pre class="brush: css notranslate">font-variation-settings: 'GRAD' 88;</pre>

<p>The following live example's CSS can be edited to allow you to play with font grade values.</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}</div>

<h3 id="Using_a_variable_font_font-face_changes" name="Using_a_variable_font_font-face_changes">バリアブルフォントの使用: @font-face の変更</h3>

<p>The syntax for loading variable fonts is very similar to any other web font, with a few notable differences, which are provided via upgrades to the traditional {{cssxref("@font-face")}} syntax now available in modern browsers.</p>

<p>The basic syntax is the same, but the font technology can be specified, and allowable ranges for descriptors like <code>font-weight</code> and <code>font-stretch</code> can be supplied, rather than named according to the font file being loaded.</p>

<h4 id="Example_for_a_standard_upright_Roman_font" name="Example_for_a_standard_upright_Roman_font">標準の直立の (ローマン) フォントの例</h4>

<pre class="brush: css notranslate">@font-face {
 font-family: 'MyVariableFontName';
 src: 'path/to/font/file/myvariablefont.woff2' format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: normal;
}
</pre>

<h4 id="Example_for_a_font_that_includes_both_upright_and_italics" name="Example_for_a_font_that_includes_both_upright_and_italics">Example for a font that includes both upright and italics:</h4>

<pre class="brush: css notranslate">@font-face {
 font-family: 'MyVariableFontName';
 src: 'path/to/font/file/myvariablefont.woff2' format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: oblique 0deg 20deg;
}</pre>

<div class="note">
<p><strong>注:</strong> there is no set specific value for the upper-end degree measurement in this case; they simply indicate that there is an axis so the browser can know to render upright or italic (remember that italics are only on or off)</p>
</div>

<h4 id="Example_for_a_font_that_contains_only_italics_and_no_upright_characters" name="Example_for_a_font_that_contains_only_italics_and_no_upright_characters">Example for a font that contains only italics and no upright characters:</h4>

<pre class="brush: css notranslate">@font-face {
 font-family: 'MyVariableFontName';
 src: 'path/to/font/file/myvariablefont.woff2' format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: italic;
}</pre>

<h4 id="Example_for_a_font_that_contains_an_oblique_slant_axis" name="Example_for_a_font_that_contains_an_oblique_slant_axis">Example for a font that contains an oblique (slant) axis:</h4>

<pre class="brush: css notranslate">@font-face {
 font-family: 'MyVariableFontName';
 src: 'path/to/font/file/myvariablefont.woff2' format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: oblique 0deg 12deg;
}</pre>

<div class="note">
<p><strong>注</strong>: Not all browsers have implemented the full syntax for font format, so test carefully. All browsers that support variable fonts will still render them if you set the format to just the file format, rather than format-variations (i.e. <code>woff2</code> instead of <code>woff2-variations</code>), but it’s best to use the proper syntax if possible.</p>
</div>

<div class="note">
<p><strong>注</strong>: Supplying value ranges for <code>font-weight</code>, <code>font-stretch</code>, and <code>font-style</code> will keep the browser from attempting to render an axis outside that range if you are using the appropriate attribute (i.e. <code>font-weight</code> or <code>font-stretch</code>), but will not block you from supplying an invalid value via <code>font-variation-settings</code>, so use with care.</p>
</div>

<h2 id="Working_with_older_browsers" name="Working_with_older_browsers">古いブラウザーでの作業</h2>

<p>Variable font support can be checked with CSS Feature Queries (see {{cssxref("@supports")}}), so it's possible to use variable fonts in production and scope the CSS calling the variable fonts inside a feature query block.</p>

<pre class="brush: css notranslate">h1 {
 font-family: some-non-variable-font-family;
}

@supports (font-variation-settings: 'wdth' 115) {
 h1 {
    font-family: some-variable-font-family;
 }
}</pre>

<h2 id="Sample_pages" name="Sample_pages">サンプルページ</h2>

<p>The following example pages show two different ways to structure your CSS. The first uses the standard attributes wherever possible. The second example uses CSS Custom Properties to set values for a <code>font-variation-settings</code> string, and shows how you can more easily update single variable values by overriding a single variable rather than rewriting the whole string. Note the hover effect on the <code>h2</code>, which only alters the grade axis custom property value.</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}</div>

<h2 id="Resources" name="Resources">リソース</h2>

<ul>
 <li><a href="https://drafts.csswg.org/css-fonts-4">W3C CSS Fonts Module 4 Specification</a> (editor’s draft)</li>
 <li><a href="https://github.com/w3c/csswg-drafts/issues">W3C Github issue queue</a></li>
 <li><a href="https://docs.microsoft.com/en-us/typography/opentype/spec/otvaroverview">Microsoft Open Type Variations introduction</a></li>
 <li><a href="https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg">Microsoft OpenType Design-Variation Axis Tag Registry</a></li>
 <li><a href="https://wakamaifondue.com">Wakamai Fondue</a> (a site that will tell you what your font can do via a simple drag-and-drop inspection interface)</li>
 <li><a href="https://www.axis-praxis.org">Axis Praxis</a> (the original variable fonts playground site)</li>
 <li><a href="https://v-fonts.com">V-Fonts.com</a> (a catalog of variable fonts and where to get them)</li>
 <li><a href="https://play.typedetail.com">Font Playground</a> (another playground for variable fonts with some very unique approaches to user interface)</li>
</ul>
