---
title: text-overflow
slug: Web/CSS/text-overflow
tags:
  - CSS
  - CSS プロパティ
  - CSS 基本ユーザーインターフェイス
  - Reference
translation_of: Web/CSS/text-overflow
---
<p>{{CSSRef}}</p>

<p><strong><code>text-overflow</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、非表示のあふれた内容をどのようにユーザーに知らせるのかを設定します。切り取られるか、省略記号 ('<code>…</code>') を表示するか、独自の文字列を表示するかです。</p>

<div>{{EmbedInteractiveExample("pages/css/text-overflow.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><code>text-overflow</code> プロパティは、あふれることを強制するものではありません。テキストをコンテナーからあふれさせるには、次の例のように、他の CSS プロパティである {{cssxref("overflow")}} や {{cssxref("white-space")}} を設定する必要があります。</p>

<pre class="brush: css no-line-numbers notranslate">overflow: hidden;
white-space: nowrap;</pre>

<p><code>text-overflow</code> プロパティは、<em>インライン</em>の進行方向にブロックコンテナー要素をはみ出す内容にのみ作用します (例えば、ボックスの下をあふれるテキストには作用しません)。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>text-overflow</code> プロパティは、一つまたは二つの値を使用して指定することができます。一つの値が与えられた場合は、行末 (左書きの場合は右、右書きの場合は左) をあふれた動作を指定します。二つの値が指定された場合は、最初の値が行の左端、二番目の値が行の右端のあふれの動作を指定します。</p>

<p>それぞれの値は以下のうちの一つです。</p>

<ul>
 <li>キーワード値のうちの一つ: <code><a href="#clip">clip</a></code>, <code><a href="#ellipsis">ellipsis</a></code>, <code><a href="#fade">fade</a></code></li>
 <li>フェードの長さを制御するための <code><a href="#fade( &lt;length> | &lt;percentage> )">fade()</a></code> 関数に {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} が渡されたもの</li>
 <li><code><a href="#&lt;string>">&lt;string&gt;</a></code></li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt id="clip"><code>clip</code></dt>
 <dd>このプロパティの既定値です。このキーワード値は<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">コンテンツ領域</a>の末端でテキストを切り取るので、文字の途中で切り取る可能性があります。文字と文字の間で切り取るには、対象のブラウザーが <code>text-overflow</code> の空文字列に対応していれば、 <code>text-overflow: '';</code> を指定することができます。</dd>
 <dt id="ellipsis"><code>ellipsis</code></dt>
 <dd>このキーワード値は、切り取られたテキストを表現するために省略記号 (<code>'…'</code>, <code style="text-transform: uppercase;">U+2026 Horizontal Ellipsis</code>) を表示します。省略記号は<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">コンテンツ領域</a>内に表示され、表示テキストのサイズを更に狭めます。省略記号を表示する場所がなければ、切り取られます。</dd>
 <dt id="&lt;string>"><code>&lt;string&gt;</code> {{experimental_inline}}</dt>
 <dd>クリップされたテキストを表すために使われる {{cssxref("&lt;string&gt;")}} です。この文字列は<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">コンテンツ領域</a>内に表示され、表示テキストのサイズをさらに狭めます。この文字列自身を表示する場所がなければ、切り取られます。</dd>
 <dt id="fade"><code>fade</code> {{experimental_inline}}</dt>
 <dd>このキーワードはあふれたインラインコンテンツを切り取り、行ボックスの端付近にフェードアウト効果を適用して、端が完全に透明になるようにします。</dd>
 <dt id="fade( &lt;length> | &lt;percentage> )"><code>fade( &lt;length&gt; | &lt;percentage&gt; )</code> {{experimental_inline}}</dt>
 <dd>このキーワードはあふれたインラインコンテンツを切り取り、行ボックスの端付近にフェードアウト効果を適用して、端が完全に透明になるようにします。</dd>
 <dd>引数はフェード効果が適用される範囲を指定します。 {{cssxref("&lt;percentage&gt;")}} は行ボックスの幅に対する割合になります。 <code>0</code> よりも小さい値は <code>0</code> に丸められます。行ボックスの幅よりも大きな値は、行ボックスの幅に丸められます。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* BOTH of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-visible {
  white-space: initial;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  /* Not supported in most browsers,
     see the 'Browser compatibility' section below */
  text-overflow: " [..]";
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p class="overflow-visible"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
&lt;p class="overflow-clip"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
&lt;p class="overflow-ellipsis"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
&lt;p class="overflow-string"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples', 300, 220, '', 'Web/CSS/text-overflow')}}</p>

<p class="note"><strong>注:</strong> 以下の表の「実際の結果」は、 MDN エディターが文字列値の <code>text-overflow</code> プロパティを持つ style 属性の中身をすべて削除するという制限があるため、正しく表示されないことがあります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th colspan="1" rowspan="2" scope="col" style="width: 15em;">CSS value</th>
   <th colspan="2" rowspan="1" scope="col" style="text-align: center;"><code>direction: ltr</code></th>
   <th colspan="2" rowspan="1" scope="col" style="text-align: center;"><code>direction: rtl</code></th>
  </tr>
  <tr>
   <th scope="col">期待される結果</th>
   <th scope="col">実際の結果</th>
   <th scope="col">期待される結果</th>
   <th scope="col">実際の結果</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><em>visible overflow</em></td>
   <td style="font-family: monospace;">1234567890</td>
   <td style="direction: ltr;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: visible;">1234567890</div>
   </td>
   <td style="font-family: monospace;">0987654321</td>
   <td style="direction: rtl;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: visible;">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip</code></td>
   <td style="padding: 1px; font-family: monospace;"><img alt="t-o_clip.png" class="default internal" src="/@api/deki/files/6056/=t-o_clip.png"></td>
   <td style="direction: ltr;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: clip;">1234567890</div>
   </td>
   <td style="padding: 1px; font-family: monospace;"><img alt="t-o_clip_rtl.png" class="default internal" src="/@api/deki/files/6057/=t-o_clip_rtl.png"></td>
   <td style="direction: rtl;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: clip;">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ''</code></td>
   <td style="font-family: monospace;">12345</td>
   <td style="direction: ltr;">
    <div style="">1234567890</div>
   </td>
   <td style="font-family: monospace;">54321</td>
   <td style="direction: rtl;">
    <div style="">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis</code></td>
   <td style="font-family: monospace;">1234…</td>
   <td style="direction: ltr;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: ellipsis;">1234567890</div>
   </td>
   <td style="font-family: monospace;">…4321</td>
   <td style="direction: rtl;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: ellipsis;">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: '.'</code></td>
   <td style="font-family: monospace;">1234.</td>
   <td style="direction: ltr;">
    <div style="">1234567890</div>
   </td>
   <td style="font-family: monospace;">.4321</td>
   <td style="direction: rtl;">
    <div style="">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip clip</code></td>
   <td style="font-family: monospace;">123456</td>
   <td style="direction: ltr;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: clip clip;">1234567890</div>
   </td>
   <td style="font-family: monospace;">654321</td>
   <td style="direction: rtl;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: clip clip;">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip ellipsis</code></td>
   <td style="font-family: monospace;">1234…</td>
   <td style="direction: ltr;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: clip ellipsis;">1234567890</div>
   </td>
   <td style="font-family: monospace;">6543…</td>
   <td style="direction: rtl;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: clip ellipsis;">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip '.'</code></td>
   <td style="font-family: monospace;">1234.</td>
   <td style="direction: ltr;">
    <div style="">1234567890</div>
   </td>
   <td style="font-family: monospace;">6543.</td>
   <td style="direction: rtl;">
    <div style="">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis clip</code></td>
   <td style="font-family: monospace;">…3456</td>
   <td style="direction: ltr;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: ellipsis clip;">1234567890</div>
   </td>
   <td style="font-family: monospace;">…4321</td>
   <td style="direction: rtl;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: ellipsis clip;">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis ellipsis</code></td>
   <td style="font-family: monospace;">…34…</td>
   <td style="direction: ltr;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: ellipsis ellipsis;">1234567890</div>
   </td>
   <td style="font-family: monospace;">…43…</td>
   <td style="direction: rtl;">
    <div style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: ellipsis ellipsis;">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis '.'</code></td>
   <td style="font-family: monospace;">…34.</td>
   <td style="direction: ltr;">
    <div style="">1234567890</div>
   </td>
   <td style="font-family: monospace;">…43.</td>
   <td style="direction: rtl;">
    <div style="">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ',' clip</code></td>
   <td style="font-family: monospace;">,3456</td>
   <td style="direction: ltr;">
    <div style="">1234567890</div>
   </td>
   <td style="font-family: monospace;">,4321</td>
   <td style="direction: rtl;">
    <div style="">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ',' ellipsis</code></td>
   <td style="font-family: monospace;">,34…</td>
   <td style="direction: ltr;">
    <div style="">1234567890</div>
   </td>
   <td style="font-family: monospace;">,43…</td>
   <td style="direction: rtl;">
    <div style="">1234567890</div>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ',' '.'</code></td>
   <td style="font-family: monospace;">,34.</td>
   <td style="direction: ltr;">
    <div style="">1234567890</div>
   </td>
   <td style="font-family: monospace;">,43.</td>
   <td style="direction: rtl;">
    <div style="">1234567890</div>
   </td>
  </tr>
 </tbody>
</table>

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
   <td><a href="https://drafts.csswg.org/css-overflow-4/#text-overflow">CSS Overflow Module Level 4</a></td>
   <td></td>
   <td><code>&lt;string&gt;</code> および <code>fade</code> の値と <code>fade()</code> 関数を追加</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Overflow', '#text-overflow', 'text-overflow')}}</td>
   <td>{{Spec2('CSS3 Overflow')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>以前の版のこのインターフェイスは <em>勧告候補</em> に達していました。いくつかの "at-risk" の記載のなかった機能を取り除く必要があったため、この仕様は <em>"草案"</em> レベルに下されたため、勧告候補の状態ではないこのプロパティが、接頭辞なしでブラウザーに実装されました。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.text-overflow")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連 CSS プロパティ: {{cssxref("overflow")}}, {{cssxref("white-space")}}</li>
 <li>単語の改行を制御する CSS プロパティ: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}</li>
</ul>
