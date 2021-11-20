---
title: <custom-ident>
slug: Web/CSS/custom-ident
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
translation_of: Web/CSS/custom-ident
---
<div>{{CSSRef}}</div>

<p><strong><code>&lt;custom-ident&gt;</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/CSS_Types">データ型</a>で、{{glossary("identifier", "識別子")}}として使われるユーザー定義の任意の文字列を意味します。これは大文字と小文字を区別し、曖昧さを避けるため、いくつかの値は様々なコンテキストで禁止されています。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>&lt;custom-ident&gt;</code> の構文は CSS の識別子 (プロパティ名など) に似ていますが、<a class="external" href="https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%BC%E3%82%B9%E3%83%BB%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%96">大文字と小文字を区別</a>する点が違います。これは次の文字から成る文字の並びです:</p>

<ul>
 <li>任意のアルファベット (<code>A</code>-<code>Z</code>, <code>a</code>-<code>z</code>)</li>
 <li>任意の数字 (<code>0</code>-<code>9</code>)</li>
 <li>ハイフン (<code>-</code>)</li>
 <li>アンダースコア (<code>_</code>)</li>
 <li>エスケープ文字 (バックスラッシュ <code>\</code> に続く)</li>
 <li><a href="http://ja.wikipedia.org/wiki/Unicode">Unicode</a> 文字 (バックスラッシュ <code>\</code> と、それに続く 1 - 6 個の16進値の形式をとる、Unicode コードポイント）</li>
</ul>

<p>このデータ値は<a class="external" href="https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%BC%E3%82%B9%E3%83%BB%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%96">大文字と小文字を区別</a>するため、<code>id1</code>、<code>Id1</code>、<code>iD1</code>、<code>ID1</code> はすべて異なった識別子です。逆に、別のエスケープ方式を使っていますが、 <code>toto\?</code> と <code>toto\3F</code> は同じ識別子です。</p>

<h3 id="Forbidden_values" name="Forbidden_values">禁止されている値</h3>

<p><code>&lt;custom-ident&gt;</code> を引用符または二重引用符の間に置いてはいけません。こうすると、 {{CSSxRef("&lt;string&gt;")}} として識別されてしまいます。さらに、先頭の文字は、数字やハイフン (<code>-</code>) および、それら続くものであってはなりません。</p>

<p>曖昧さを避けるため、 <code>&lt;custom-ident&gt;</code> を使用する各プロパティは、特定の値の使用を禁止しています:</p>

<dl>
 <dt>{{CSSxRef("animation-name")}}</dt>
 <dd>グローバル CSS 値 (<code>unset</code>、 <code>initial</code>、そして <code>inherit</code>) を禁止し、 <code>none</code> も禁止しています。</dd>
 <dt>{{CSSxRef("counter-reset")}}</dt>
 <dt>{{CSSxRef("counter-increment")}}</dt>
 <dd>グローバル CSS 値 (<code>unset</code>、 <code>initial</code>、そして <code>inherit</code>) を禁止し、 <code>none</code> も禁止しています。</dd>
 <dt>{{CSSxRef("@counter-style")}}</dt>
 <dt>{{CSSxRef("list-style-type")}}</dt>
 <dd>グローバル CSS 値 (<code>unset</code>、 <code>initial</code>、そして <code>inherit</code>) および <code>none</code>、 <code>inline</code> 、そして <code>outside</code> の値を禁止しています。また、かなりの数の定義済みの値が様々なブラウザーに実装されています: <code>disc</code>, <code>circle</code>, <code>square</code>, <code>decimal</code>, <code>cjk-decimal</code>, <code>decimal-leading-zero</code>, <code>lower-roman</code>, <code>upper-roman</code>, <code>lower-greek</code>, <code>lower-alpha</code>, <code>lower-latin</code>, <code>upper-alpha</code>, <code>upper-latin</code>, <code>arabic-indic</code>, <code>armenian</code>, <code>bengali</code>, <code>cambodian</code>, <code>cjk-earthly-branch</code>, <code>cjk-heavenly-stem</code>, <code>cjk-ideographic</code>, <code>devanagari</code>, <code>ethiopic-numeric</code>, <code>georgian</code>, <code>gujarati</code>, <code>gurmukhi</code>, <code>hebrew</code>, <code>hiragana</code>, <code>hiragana-iroha</code>, <code>japanese-formal</code>, <code>japanese-informal</code>, <code>kannada</code>, <code>katakana</code>, <code>katakana-iroha</code>, <code>khmer</code>, <code>korean-hangul-formal</code>, <code>korean-hanja-formal</code>, <code>korean-hanja-informal</code>, <code>lao</code>, <code>lower-armenian</code>, <code>malayalam</code>, <code>mongolian</code>, <code>myanmar</code>, <code>oriya</code>, <code>persian</code>, <code>simp-chinese-formal</code>, <code>simp-chinese-informal</code>, <code>tamil</code>, <code>telugu</code>, <code>thai</code>, <code>tibetan</code>, <code>trad-chinese-formal</code>, <code>trad-chinese-informal</code>, <code>upper-armenian</code>, <code>disclosure-open</code>, and <code>disclosure-close</code>.</dd>
 <dt>{{CSSxRef("grid-row-start")}}<br>
 {{CSSxRef("grid-row-end")}}<br>
 {{CSSxRef("grid-column-start")}}<br>
 {{CSSxRef("grid-column-end")}}</dt>
 <dd><code>span</code> 値を禁止しています。</dd>
 <dt>{{CSSxRef("will-change")}}</dt>
 <dd>グローバル CSS 値 (<code>unset</code>、 <code>initial</code>、そして <code>inherit</code>) および <code>will-change</code>、 <code>auto</code>、 <code>scroll-position</code> そして <code>contents</code> の値を禁止しています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Valid_identifiers" name="Valid_identifiers">有効な識別子</h3>

<pre class="notranslate">nono79            アルファベットと数字の組み合わせ
ground-level      アルファベットとダッシュの組み合わせ
-test             ダッシュとそれに続くアルファベット
_internal         アンダースコアとそれに続くアルファベット
\22 toto          Unicode 文字とそれに続くアルファベット
bili\.bob         ピリオドは正しくエスケープされています
</pre>

<h3 id="Invalid_identifiers" name="Invalid_identifiers">無効な識別子</h3>

<pre class="notranslate">34rem             数字で始まってはいけません
-12rad            ダッシュで始まって数字が続いてはいけません
bili.bob          アルファベットと数字以外でエスケープせずに使えるのは _ と - だけです
--toto            2 つのダッシュで始まってはいけません
'bilibob'         &lt;string&gt; です
"bilibob"         &lt;string&gt; です</pre>

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
   <td>{{SpecName('CSS4 Values', '#custom-idents', '<code>&lt;custom-ident&gt;</code>')}}</td>
   <td>{{Spec2('CSS4 Values')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS Will Change', '#valdef-will-change-custom-ident', '<code>&lt;custom-ident&gt;</code> for <code>will-change</code>')}}</td>
   <td>{{Spec2('CSS Will Change')}}</td>
   <td>{{CSSxRef("will-change")}} で除外する値を定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Counter Styles', '#typedef-counter-style-name', '<code>&lt;custom-ident&gt;</code> for <code>list-style-type</code>')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>キーワードの有限リストの代わりに <code>&lt;custom-ident&gt;</code> を使用。 {{CSSxRef("list-style-type")}} と {{CSSxRef("@counter-style")}} で除外する値を定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Lists', '#counter-properties', '<code>&lt;custom-ident&gt;</code> for <code>counter-*</code>')}}</td>
   <td>{{Spec2('CSS3 Lists')}}</td>
   <td><code>&lt;identifier&gt;</code> から <code>&lt;custom-ident&gt;</code> へ改名。使い方を新しい <code>counter-set</code> プロパティへ追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Animations', '#typedef-single-animation-name', '<code>&lt;custom-ident&gt;</code> for <code>animation-name</code>')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>{{CSSxRef("animation-name")}} で除外する値を定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Values', '#custom-idents', '<code>&lt;custom-ident&gt;</code>')}}</td>
   <td>{{Spec2('CSS3 Values')}}</td>
   <td><code>&lt;identifier&gt;</code> から <code>&lt;custom-ident&gt;</code> へ改名。擬似型とし、除外値の使用を禁止した。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'syndata.html#value-def-identifier', '<code>&lt;identifier&gt;</code>')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p><em>このデータ型は実際の型ではありませんが、許可された値をシンプルに記述するのに役立つ便利な型です。ブラウザーの互換性についての情報はありません。</em></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("&lt;ident&gt;")}}</li>
</ul>
