---
title: '@font-face'
slug: Web/CSS/@font-face
tags:
  - '@-規則'
  - '@規則'
  - CSS
  - CSS フォント
  - Reference
  - フォント
  - リファレンス
translation_of: Web/CSS/@font-face
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>@font-face</code></strong> <a href="/ja/docs/Web/CSS/At-rule">@-規則</a>は、テキストを表示するための独自フォントを指定します。フォントはリモートサーバーまたはユーザー自身のコンピューターにローカルにインストールされたフォントのどちらかから読み込むことができます。</span> <code>local()</code> 関数が与えられると、ユーザーのコンピューターで探すフォント名を指定し、{{Glossary("user agent", "ユーザーエージェント")}}がそれを見つけることができれば、そのローカルフォントを使用します。そうでなければ、 <code>url()</code> 関数を使用して指定されたフォントリソースをダウンロードして使用します。</p>

<p><code>@font-face</code> で独自のフォントを提供できるようになることで、 "web-safe" フォント (つまり、広く利用できると考えられるほど一般的なフォント) と呼ばれる制限なしにコンテンツをデザインすることができます。ローカルにインストールされているフォントを、名前を指定して検索し使用することができる機能により、インターネット接続に頼らなくてもフォントを基本的なものからカスタマイズすることができるようになります。</p>

<p><code>url()</code> と <code>local()</code> を両方とも使用することは一般的であり、そうすることでユーザーのインストールされたフォントのコピーが利用できればそれを利用し、ユーザーの端末に見つからない場合はフォントのコピーを代替としてダウンロードすることができます。</p>

<p><code>@font-face</code> @-規則は、 CSS の最上位だけでなく、 <a href="/ja/docs/Web/CSS/At-rule#条件付きグループルール">CSS の条件付き @-規則グループ</a>の中でも使用することができます。</p>

<pre class="brush: css no-line-numbers">@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Descriptors" name="Descriptors">記述子</h3>

<dl>
 <dt>{{cssxref("@font-face/font-display", "font-display")}}</dt>
 <dd>フォントのダウンロード及び準備状況に応じて、どのようにフォントフェイスを表示するかを特定します。</dd>
 <dt>{{cssxref("@font-face/font-family", "font-family")}}</dt>
 <dd>font プロパティの font face 値で使われる名前を指定します。</dd>
 <dt>{{cssxref("@font-face/font-stretch", "font-stretch")}}</dt>
 <dd>{{cssxref("font-stretch")}} 値です。 Firefox 61 以降 (及びその他の最近のブラウザーの多く) では、font-face で対応している範囲を指定するために、 <code>font-stretch: 50% 200%;</code> のように二つの値を受け付けます。</dd>
 <dt>{{cssxref("@font-face/font-style", "font-style")}}</dt>
 <dd>{{cssxref("font-style")}} 値です。 Firefox 61 以降 (及びその他の最近のブラウザーの多く) では、font-face で対応している範囲を指定するために、 <code>font-style: oblique 20deg 50deg;</code> のように二つの値を受け付けます。</dd>
 <dt>{{cssxref("@font-face/font-weight", "font-weight")}}</dt>
 <dd>{{cssxref("font-weight")}} 値です。 Firefox 61 以降 (及びその他の最近のブラウザーの多く) では、font-face で対応している範囲を指定するために、 <code>font-weight: 100 400;</code> のように二つの値を受け付けます。</dd>
 <dt>{{cssxref("@font-face/font-variant", "font-variant")}}</dt>
 <dd>{{cssxref("font-variant")}} 値です。</dd>
 <dt>{{cssxref("font-feature-settings", "font-feature-settings")}}</dt>
 <dd>OpenType フォントで高度な印刷機能を制御することができるようにします。</dd>
 <dt>{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}</dt>
 <dd>変化の特徴を表す4文字の軸名を、種類の値と共に指定することにより、 OpenType 又は TrueType フォントの種類を低レベルで制御できます。</dd>
 <dt>{{cssxref("@font-face/src", "src")}}</dt>
 <dd>
 <p>フォントデータを含むリソースを指定します。これでリモートのフォントファイルの位置又はユーザーのコンピューターのフォント名を指定することができます。</p>

 <p>ブラウザーにフォントのリソースがどの形式であるかのヒントを提供するために — それで最適なものを選択できます — <code>format()</code> 関数の中に形式を含めることができます。</p>

 <pre class="brush: css">src: url(ideal-sans-serif.woff) <strong>format("woff")</strong>,
     url(basic-sans-serif.ttf) <strong>format("truetype")</strong>;</pre>

 <p>利用可能な形式は、<code>"woff"</code>, <code>"woff2"</code>, <code>"truetype"</code>, <code>"opentype"</code>, <code>"embedded-opentype"</code>, <code>"svg"</code> です。</p>
 </dd>
 <dt>{{cssxref("@font-face/unicode-range", "unicode-range")}}</dt>
 <dd>フォントで使用される Unicode コードポイントの範囲です。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>この例は単にダウンロードフォントを指定し、ドキュメントの本文全体に適用します。</p>

<p><a href="https://mdn.mozillademos.org/files/7775/webfont-sample.html">動作例を見る</a></p>

<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Web Font Sample&lt;/title&gt;
  &lt;style type="text/css" media="screen, print"&gt;
    @font-face {
      font-family: "Bitstream Vera Serif Bold";
      src: url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf");
    }

    body { font-family: "Bitstream Vera Serif Bold", serif }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  This is Bitstream Vera Serif Bold.
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>この例では、ユーザーのローカルにある "Helvetica Neue Bold" が使用されます。もしユーザーがそのフォントをインストールしていない場合は (二つの異なる名前が試されます)、代わりに "MgOpenModernaBold.ttf" という名前のダウンロードフォントが使用されます。</p>

<pre class="brush: css">@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"),
       local("HelveticaNeue-Bold"),
       url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
</pre>

<h2 id="Font_MIME_Types" name="Font_MIME_Types">フォントの MIME タイプ</h2>

<table>
 <thead>
  <tr>
   <th>形式</th>
   <th>MIME タイプ</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>TrueType</td>
   <td><code>font/ttf</code></td>
  </tr>
  <tr>
   <td>OpenType</td>
   <td><code>font/otf</code></td>
  </tr>
  <tr>
   <td>Web Open File Format</td>
   <td><code>font/woff</code></td>
  </tr>
  <tr>
   <td>Web Open File Format 2</td>
   <td><code>font/woff2</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Notes" name="Notes">メモ</h2>

<ul>
 <li>フォントのダウンロードは、同一ドメイン制約に従います (フォントファイルは、それらが使用されているページと同じドメインにある必要があります)。 <a href="/ja/docs/HTTP_access_control">HTTP アクセス制御</a>によりこの制限を緩和できます。</li>
 <li><code>@font-face</code> は CSS セレクターの中で宣言することはできません。例えば、次の例は動作しません。
  <pre class="brush: css; example-bad">.className {
  @font-face {
    font-family: MyHelvetica;
    src: local("Helvetica Neue Bold"),
         local("HelveticaNeue-Bold"),
         url(MgOpenModernaBold.ttf);
    font-weight: bold;
  }
}</pre>
 </li>
</ul>

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
   <td>{{SpecName('WOFF2.0', '', 'WOFF2 font format')}}</td>
   <td>{{Spec2('WOFF2.0')}}</td>
   <td>新しい圧縮アルゴリズムのフォント形式を定義</td>
  </tr>
  <tr>
   <td>{{SpecName('WOFF1.0', '', 'WOFF font format')}}</td>
   <td>{{Spec2('WOFF1.0')}}</td>
   <td>フォント形式の定義</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Fonts', '#font-face-rule', '@font-face')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.at-rules.font-face")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/WOFF">WOFF について</a></li>
 <li><a href="https://everythingfonts.com/font-face">Everythingfonts font-face generator</a></li>
 <li><a class="external" href="http://www.fontsquirrel.com/fontface/generator">FontSquirrel @font-face generator</a></li>
 <li><a class="external" href="http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/">Beautiful fonts with @font-face</a></li>
 <li><a class="external" href="http://openfontlibrary.org/">Open Font Library</a></li>
 <li><a class="external" href="http://caniuse.com/woff">When can I use WOFF?</a></li>
 <li><a class="external" href="http://caniuse.com/svg-fonts">When can I use SVG Fonts?</a></li>
 <li><a href="https://coolfont.org">Free Fancy Cool Fonts</a></li>
</ul>
