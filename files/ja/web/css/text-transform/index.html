---
title: text-transform
slug: Web/CSS/text-transform
tags:
  - CSS
  - CSS Property
  - Layout
  - Reference
  - Text
  - 'recipe:css-property'
  - 日本語処理
translation_of: Web/CSS/text-transform
---
<div>{{CSSRef}}</div>

<p>CSS の <strong><code>text-transform</code></strong> プロパティは、要素のテキストを大文字表記する方法を指定します。テキストをすべて大文字にしたり、すべて小文字にしたり、各単語の先頭を大文字にしたりすることを指定します。フリガナの読みやすさを向上するのにも役立ちます。</p>

<div>{{EmbedInteractiveExample("pages/css/text-transform.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><code>text-transform</code> プロパティは、以下のように言語固有の大文字・小文字の扱いを考慮します。</p>

<ul>
 <li>
  <p>トルコ語 (<code>tr</code>)、アゼルバイジャン語 (<code>az</code>)、クリミア・タタール語 (<code>crh</code>)、ヴォルガ・タタール語 (<code>tt</code>)、バシキール語 (<code>ba</code>) などのチュルク語族にはドットの有無が異なる 2 種類の <code>i</code> があり、大文字・小文字のペアも <code>i</code>/<code>İ</code> と <code>ı</code>/<code>I</code> の 2 組があります。</p>
 </li>
 <li>
  <p>ドイツ語 (<code>de</code>) では、<code>ß</code> の大文字が <code>SS</code> になります。</p>
 </li>
 <li>
  <p>オランダ語 (<code>nl</code>) では二重音字 <code>ij</code> が、単語の最初の文字のみ大文字にする <code>text-transform: capitalize</code> を指定しても <code>IJ</code> になります。</p>
 </li>
 <li>
  <p>ギリシャ語 (<code>el</code>) では離接的接続のエータ (<code>ή</code>/<code>Ή</code>) を除き、単語全体が大文字であるときに母音のアクセント記号がなくなります (<code>ά</code>/<code>Α</code>)。また、1 文字目にアクセント記号がある二重母音はアクセント記号がなくなり、2 文字目の母音にトレマがつきます (<code>άι</code>/<code>ΑΪ</code>)。</p>
 </li>
 <li>
  <p>ギリシャ語 (<code>el</code>) で、小文字のシグマは <code>σ</code> と <code>ς</code> の 2 種類あります。<code>ς</code> は、単語の末尾にあるシグマに限り使用します。大文字のシグマ (<code>Σ</code>) に <code>text-transform: lowercase</code> を適用すると、ブラウザーは状況に応じて正しい小文字を選択しなければなりません。</p>
 </li>
 <li>アイルランド語 (<code>ga</code>) では、頭文字が大文字化されていても特定の接頭辞文字が小文字のままになります。例えば <code>text-transform: uppercase</code> は <code>ar aon tslí</code> を、予想される <code>AR AON TSLÍ </code> ではなく <code>AR AON tSLÍ</code> にします (Firefox に限る)。大文字化によりハイフンが削除される場合もあり、<code>an t-uisce</code> は <code>AN tUISCE </code> になります (また、<code>text-transform: lowercase</code> ではハイフンが適切に再挿入されます)。</li>
</ul>

<p>言語は HTML の <code><a href="/ja/docs/Web/HTML/Global_attributes/lang">lang</a></code> 属性や XML の <code><a href="/ja/docs/Web/SVG/Attribute/xml:lang">xml:lang</a></code> 属性で定義します。</p>

<div class="note">
<p><strong>注:</strong> これらの特定のケースはブラウザーにより異なりますので、<a href="#Browser_compatibility">ブラウザーの互換性</a>を確認してください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;

/* グローバル値 */
text-transform: inherit;
text-transform: initial;
text-transform: unset;
</pre>

<dl>
 <dt><code>capitalize</code></dt>
 <dd>
 <p>それぞれの単語の最初の<em>文字</em>を強制的に大文字に変換させるキーワードです。ほかの文字は変更しません。すなわち、要素のテキストで記載した元の表記を維持します。文字とは、文字または数字の一般カテゴリーの一部である任意の Unicode 文字です {{experimental_inline}}。単語の先頭にある句読点や記号は無視されます。</p>

 <div class="note"><code>capitalize</code> が言語固有の先頭文字を大文字にする慣習 (英語で冠詞を除外するなど) に従うと期待するべきではありません。</div>

 <div class="note"><code>capitalize</code> キーワードは CSS 1 及び CSS 2.1 で定義されていたものでした。この結果、最初の文字を計算する方法は、ブラウザーによって異なっていました (Firefox は <code>-</code> および <code>_</code> を文字として捉えていましたが、他はそうではありませんでした。 Webkit 及び Gecko は <code>ⓐ</code> のような文字から作られた記号を、誤って文字として認識していました。 Internet Explorer 9 は最も CSS 2 の定義に近かったのですが、いくつかおかしいものがありました)。正しいふるまいを詳細に定義したので、 CSS Text Level 3 ではこれを一掃しました。ブラウザーの互換性表の <code>capitalize</code> の行は、それぞれのエンジンがこの詳細に定義された振る舞いに対応し始めたバージョンを記載しています。</div>
 </dd>
 <dt><code>uppercase</code></dt>
 <dd>すべての文字を大文字に変換させるキーワードです。</dd>
 <dt><code>lowercase</code></dt>
 <dd>すべての文字を小文字に変換させるキーワードです。</dd>
 <dt><code>none</code></dt>
 <dd>すべての文字を変換させないキーワードです。</dd>
 <dt><code>full-width</code></dt>
 <dd>一般的な東アジアの文字 (中国語や日本語など) において、強制的に文字 — 主に記号やラテン文字 — を正方形の枠内に (全角で) 表記して、揃えて表示するキーワードです。</dd>
 <dt><code>full-size-kana</code></dt>
 <dd>このキーワードは一般に {{htmlelement("ruby")}} によるフリガナで使用され、すべての小文字の仮名文字を同等の大文字の仮名文字に変換することで、ルビで使われるフォントの大きさによる読みやすさの問題を解消します。</dd>
</dl>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<p>テキストの長い区間に <code>text-transform</code> の値を <code>uppercase</code> で設定すると、失読症のような認知障碍を持つ人にとって読むのが難しくなることがあります。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN "WCAG を理解する ― ガイドライン 1.4 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/WCAG21/#visual-presentation" rel="noopener">W3C Understanding WCAG 2.1</a></li>
</ul>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="none" name="none"><code>none</code></h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: none
  &lt;strong&gt;&lt;span&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;
</pre>

<pre class="brush: css notranslate">span {
  text-transform: none;
}
strong { float: right; }</pre>

<p>文字を変換しない例です。</p>

<p>{{ EmbedLiveSample('none', '100%', '100px') }}</p>

<h3 id="capitalize_General" name="capitalize_General">capitalize (一般的)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: capitalize
  &lt;strong&gt;&lt;span&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: capitalize;
}
strong { float: right; }</pre>

<p>頭文字を大文字にする例です。</p>

<p>{{ EmbedLiveSample('capitalize_General', '100%', '100px') }}</p>

<h3 id="capitalize_Punctuation" name="capitalize_Punctuation">capitalize (句読点)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize? ?¡transform!&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: capitalize
  &lt;strong&gt;&lt;span&gt;(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize? ?¡transform!&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: capitalize;
}
strong { float: right; }</pre>

<p>単語の前の区切り記号が無視される様子を示す例です。このキーワードは、文字または数字の一般カテゴリに含まれる Unicode 文字である、最初の文字が対象です。</p>

<p>{{ EmbedLiveSample('capitalize_Punctuation', '100%', '100px') }}</p>

<h3 id="capitalize_Symbols" name="capitalize_Symbols">capitalize (記号)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: capitalize
  &lt;strong&gt;&lt;span&gt;ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: capitalize;
}
strong { float: right; }</pre>

<p>頭文字の記号が無視されるかを示す例です。このキーワードは、文字または数字の一般カテゴリーに含まれる Unicode 文字である、最初の文字が対象です。</p>

<p>{{ EmbedLiveSample('capitalize_Symbols', '100%', '100px') }}</p>

<h3 id="capitalize_Dutch_ij_digraph" name="capitalize_Dutch_ij_digraph">capitalize (オランダ語の二重音字 ij)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong lang="nl"&gt;The Dutch word: "<span lang="nl">ijsland</span>" starts with a digraph.&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: capitalize
  &lt;strong&gt;&lt;span lang="nl"&gt;The Dutch word: "<span lang="nl">ijsland</span>" starts with a digraph.&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: capitalize;
}
strong { float: right; }</pre>

<p>オランダ語の二重音字 <em>ij</em> を1文字として扱わなければならないことを示す例です。</p>

<p>{{ EmbedLiveSample('capitalize_Dutch_ij_digraph', '100%', '100px') }}</p>

<h3 id="uppercase_General" name="uppercase_General">uppercase (一般的)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: uppercase
  &lt;strong&gt;&lt;span&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: uppercase;
}
strong { float: right; }</pre>

<p>テキストを大文字に変換する例です。</p>

<p>{{ EmbedLiveSample('uppercase_General', '100%', '100px') }}</p>

<h3 id="uppercase_Greek_Vowels" name="uppercase_Greek_Vowels">uppercase&gt; (ギリシャ語の母音字)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: uppercase
  &lt;strong&gt;&lt;span&gt;Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: uppercase;
}
strong { float: right; }</pre>

<p>離接的接続の <em>eta</em> を除くギリシャ語の母音字はアクセント記号を持たないこと、および二重母音の最初の文字のアクセント記号が 2 文字目の母音字のトレマになることを示す例です。</p>

<p>{{ EmbedLiveSample('uppercase_Greek_Vowels', '100%', '100px') }}</p>

<h3 id="lowercase_General" name="lowercase_General">lowercase (一般的)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: lowercase
  &lt;strong&gt;&lt;span&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: lowercase;
}
strong { float: right; }</pre>

<p>テキストを小文字に変換する例です。</p>

<p>{{ EmbedLiveSample('lowercase_General', '100%', '100px') }}</p>

<h3 id="lowercase_Greek_Σ" name="lowercase_Greek_Σ">lowercase (ギリシャ文字 Σ)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: lowercase
  &lt;strong&gt;&lt;span&gt;Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: lowercase;
}
strong { float: right; }</pre>

<p>ギリシャ文字のシグマ (<code>Σ</code>) が、状況に応じて一般的な小文字のシグマ (<code>σ</code>) または単語の末尾での表記 (<code>ς</code>) に変換される例です。</p>

<p>{{ EmbedLiveSample('lowercase_Greek_Σ', '100%', '100px') }}</p>

<h3 id="lowercase_Lithuanian" name="lowercase_Lithuanian">lowercase (リヒテンシュタイン語)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;Ĩ is a Lithuanian LETTER as is J́&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: lowercase
  &lt;strong&gt;&lt;span lang="lt"&gt;Ĩ is a Lithuanian LETTER as is J́&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: lowercase;
}
strong { float: right; }</pre>

<p>これはリヒテンシュタインの文字 <code>Ĩ</code> および <code>J́</code> が小文字に変換されるとドットを保持する様子を示します。</p>

<p>{{ EmbedLiveSample('lowercase_Lithuanian', '100%', '100px') }}</p>

<h3 id="full-width_General" name="full-width_General">full-width (一般)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&amp;()*+,-./:;&lt;=&gt;?@{|}~&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: full-width
  &lt;strong&gt;&lt;span&gt;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&amp;()*+,-./:;&lt;=&gt;?@{|}~&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: full-width;
}
strong { width: 100%; float: right; }</pre>

<p>一部の文字は半角と全角の 2 種類の表現があり、それらは別々の Unicode コードポイントを持ちます。全角文字は、アジア圏の表意文字と自然な形で混在させるために使用します。</p>

<p>{{ EmbedLiveSample('full-width_General', '100%', '175px') }}</p>

<h3 id="full-width_Japanese_half-width_katakana" name="full-width_Japanese_half-width_katakana">full-width (日本語の半角カタカナ)</h3>

<pre class="brush: html notranslate">&lt;p&gt;Initial String
  &lt;strong&gt;ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強&lt;/strong&gt;
&lt;/p&gt;
&lt;p&gt;text-transform: full-width
  &lt;strong&gt;&lt;span&gt;ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強&lt;/span&gt;&lt;/strong&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">span {
  text-transform: full-width;
}
strong { width: 100%; float: right; }</pre>

<p>日本語の半角カタカナは、8ビットの文字コードでカタカナを表現するために使われていました。通常の (全角の) カタカナ文字とは異なり、濁点の付いた文字は、文字本体と濁点の2つのコードポイントで表現されます。 <code>full-width</code> は、これらの文字を全角に変換する際に、1つのコードポイントにまとめます。</p>

<p>{{ EmbedLiveSample('full-width_Japanese_half-width_katakana', '100%', '175px') }}</p>

<h3 id="full-size-kana">full-size-kana</h3>

<pre class="brush: html notranslate">&lt;p&gt;ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ&lt;/p&gt;
&lt;p&gt;ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ&lt;/p&gt;
&lt;/p&gt;</pre>

<pre class="brush: css notranslate">p:nth-of-type(2) {
  text-transform: full-size-kana;
}</pre>

<p>{{ EmbedLiveSample('full-size-kana', '100%', '175px') }}</p>

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
   <td>{{SpecName('CSS3 Text', '#text-transform', 'text-transform')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>対象の文字を {{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}} から、 Unicode の数字又は文字一般のカテゴリーに属するすべての文字に拡張。 <code>capitalize</code> の動作を、最初の区切り文字や記号を無視して単語の先頭の文字に適用するように変更。表意文字とアルファベット文字を自然な形で混在させるための <code>full-width</code> および <code>full-size-kana</code> キーワードを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>対象の文字を {{SpecName('CSS1', '#text-transform', 'text-transform')}} から、2 種類の表記を持つ非ラテン文字に拡張。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#text-transform', 'text-transform')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.text-transform")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("font-variant")}}</li>
</ul>
