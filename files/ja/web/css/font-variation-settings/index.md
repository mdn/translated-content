---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/font-variation-settings
---
<div>{{CSSRef}}</div>

<p><strong><code>font-variation-settings</code></strong> は CSS のプロパティで、変更したい特性の４文字の軸名と特性の値を指定することにより、<a href="/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide">可変フォント</a>に対する低水準の制御を提供します。</p>

<div>{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* 既定の設定を使用 */
font-variation-settings: normal;

/* 可変フォントの軸名の値を設定 */
font-variation-settings: "XHGT" 0.7;

/* グローバル値 */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<p>このプロパティは1つまたは2つの形を取ることができます。</p>

<dl>
 <dt><code>normal</code></dt>
 <dd>テキストは既定の設定を使用してレイアウトされます。</dd>
 <dt><code>&lt;string&gt; &lt;number&gt;</code></dt>
 <dd>テキストを描画する際、フォントの特性を有効または無効にするために可変フォントの軸名のリストがテキストレイアウトエンジンへ渡されます。それぞれの設定は常に、一つ以上の4文字の ASCII 文字の {{cssxref("&lt;string&gt;")}} と、続いて設定する軸の値を示す {{cssxref("number")}} の組み合わせから成ります。 <code>&lt;string&gt;</code> の文字が多すぎたり少なすぎたり、文字が U+20 - U+7E のコード点の範囲を超えていたりした場合は、プロパティ全体が無効になります。フォントデザイナーによって定義された利用可能な値の範囲次第では、 <code>&lt;number&gt;</code> は小数や負の数を取ることもできます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Description" name="Description">解説</h2>

<p>このプロパティは、その特性を有効にしたりアクセスしたりするための他の方法がない場合に、可変フォント特性を設定するために設計された低水準の仕組みです。これらの特性 (例えば {{cssxref("font-weight")}} や {{cssxref("font-style")}}) を設定するための基本プロパティがない場合にのみ使用してください。</p>

<p><code>font-variation-settings</code> を使用して設定されたフォント特性は、常に <code>font-weight</code> などの基本フォントプロパティに関する設定を上書きし、言うまでもなくカスケードに現れます。ブラウザーによっては、 <code>@font-face</code> 宣言が <code>font-weight</code> の範囲を含んでいる場合のみこれが成り立ちます。</p>

<h3 id="Registered_and_custom_axes" name="Registered_and_custom_axes">登録済みの軸と独自の軸</h3>

<p>可変フォントの軸には、<strong>登録済み</strong>の軸と<strong>独自</strong>の軸があります。</p>

<p>登録済みの軸はよく現れます。 — 仕様書の作者が標準化する価値があると感じるほどよく使われます。なお、これは作者がフォントにすべてを入れる必要があることを意味するものではありません。</p>

<p>こちらは関連する CSS プロパティに対応する登録済みの軸です。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">軸のタグ</th>
   <th scope="col">CSS プロパティ</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>"wght"</td>
   <td>{{cssxref("font-weight")}}</td>
  </tr>
  <tr>
   <td>"wdth"</td>
   <td>{{cssxref("font-stretch")}}</td>
  </tr>
  <tr>
   <td>"slnt" (slant)</td>
   <td>{{cssxref("font-style")}}: <code>oblique + angle</code></td>
  </tr>
  <tr>
   <td>"ital"</td>
   <td>{{cssxref("font-style")}}: <code>italic</code></td>
  </tr>
  <tr>
   <td>"opsz"</td>
   <td>
    <p>{{cssxref("font-optical-sizing")}}</p>
   </td>
  </tr>
 </tbody>
</table>

<p>独自の軸はフォントデザイナーがフォントに変化を付けるためのもの全てがあり得、例えばアセンダーまたはデセンダーの高さ、セリフの大きさ、その他想像できるすべてのものです。どの軸も4文字の固有の軸名を与えれば使用することができます。一部はもっと有名になっており、そのうち登録されるものもあるかもしれません。</p>

<div class="note">
<p><strong>注</strong>: 登録済みの軸のタグは小文字のタグを使用するのに対し、d久慈の軸は大文字のタグを使用します。なお、フォントデザイナーはこの慣習に従うことを強制されているわけではなく、従っていないものもあります。ここで重要なことは、軸のタグは大文字と小文字を区別することです。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p>登録済みの軸を記述した以下のデモを見てください。その他の可変フォントの例は、 <a href="/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide">可変フォントガイド</a>, <a class="external external-icon" href="https://v-fonts.com/" rel="noopener">v-fonts.com</a>, and <a class="external external-icon" href="https://www.axis-praxis.org/" rel="noopener">axis-praxis.org</a> などで見られます。</p>

<div class="warning">
<p><strong>警告</strong>: オペレーティングシステムで可変フォントを使用するためには、最新版であることを確認する必要があります。例えば、 Linux ベースの OS では最新版の Linux Freetype が必要であり、 macOS 10.13 より前では可変フォントに対応していません。オペレーティングシステムが最新版でない場合、ウェブページや Firefox 開発者ツールで可変フォントを使用することができません。</p>
</div>

<h3 id="Weight_wght">Weight (wght)</h3>

<p>以下のデモの CSS は、フォントの重みの値を編集することができます。</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}</div>

<h3 id="Slant_slnt">Slant (slnt)</h3>

<p>以下のデモの CSS は、フォントの傾きの値を編集することができます。</p>

<div>{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}</div>

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
   <td>{{SpecName('CSS4 Fonts', '#descdef-font-face-font-variation-settings', 'font-variation-settings')}}</td>
   <td>{{Spec2('CSS4 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.font-variation-settings")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide">可変フォントガイド</a></li>
 <li><a href="https://www.microsoft.com/typography/otspec180/otvaroverview.htm">OpenType Font Variations Overview</a></li>
 <li><a href="https://www.microsoft.com/typography/otspec/dvaraxisreg.htm">OpenType Design-Variation Axis Tag Registry</a></li>
</ul>
