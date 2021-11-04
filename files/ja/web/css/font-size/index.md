---
title: font-size
slug: Web/CSS/font-size
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/font-size
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>font-size</code></strong> プロパティはフォントの大きさを定義します。フォントの大きさを変更すると、フォントの大きさに相対的な {{cssxref("&lt;length&gt;")}} の単位例えば <code>em</code>, <code>ex</code>, なども更新されます。</span></p>

<div>{{EmbedInteractiveExample("pages/css/font-size.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;absolute-size&gt; 値 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* &lt;relative-size&gt; 値 */
font-size: smaller;
font-size: larger;

/* &lt;length&gt; 値 */
font-size: 12px;
font-size: 0.8em;

/* &lt;percentage&gt; 値 */
font-size: 80%;

/* グローバル値 */
font-size: inherit;
font-size: initial;
font-size: unset;
</pre>

<p><code>font-size</code> プロパティは、以下の何れかの方法で指定します。</p>

<ul>
 <li><a href="#absolute-size">絶対的サイズ</a>のキーワードまたは<a href="#relative-size">相対的サイズ</a>のキーワードのうちの一つ</li>
 <li><code>&lt;length&gt;</code> または親要素のフォントサイズからの相対的な <code>&lt;percentage&gt;</code></li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt id="absolute-size"><code>xx-small</code>, <code>x-small</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>, <code>xx-large</code>, <code>xxx-large</code></dt>
 <dd>ユーザーの既定のフォントサイズ (つまり <code>medium</code>) を基準とした絶対的なサイズのキーワードです。</dd>
 <dt id="relative-size"><code>larger</code>, <code>smaller</code></dt>
 <dd>相対的なサイズのキーワードです。フォントは親要素のフォントサイズから相対的に、上記の絶対的サイズのキーワードで使われている倍率におよそ沿う形で拡大または縮小されます。</dd>
 <dt id="&lt;length>">{{cssxref("&lt;length&gt;")}}</dt>
 <dd>
 <p>正の {{cssxref("&lt;length&gt;")}} の値。 (<code>em</code> や <code>ex</code> などの) フォント相対単位のほとんどは、親要素のフォントサイズに対する相対値です。</p>

 <p>(<code>rem</code> などの) ルートを基準としたフォント相対単位では、フォントサイズは {{HTMLElement("html")}} (ルート) 要素で使われているフォントのサイズからの相対値です。</p>
 </dd>
 <dt id="&lt;percentage>">{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>
 <p>正の {{cssxref("&lt;percentage&gt;")}} 値で、親要素のフォントサイズからの相対値です。</p>
 </dd>
</dl>

<div class="note">
<p><strong>注:</strong> アクセシビリティを最大化するために、一般的に最適なのは、ユーザーの既定のフォントサイズからの相対値を使用することです。</p>
</div>

<h2 id="Description" name="Description">解説</h2>

<p>フォントサイズの定義にはいくつかの方法があり、キーワードと数値 (ピクセルや em の場合) が使われます。個々のウェブページで必要とされるものにあわせて、最適な方法を選んでください。</p>

<h3 id="Keywords" name="Keywords">キーワード</h3>

<p>キーワードはウェブのフォントサイズを決める良い方法です。 {{HTMLElement("body")}} 要素のフォントサイズをキーワードで定義すると、ページのどこであってもフォントサイズを相対的に調整することができ、したがってページ全体のフォントサイズの拡大縮小が容易にできます。</p>

<h3 id="Pixels" name="Pixels">ピクセル</h3>

<p>ピクセル値 (<code>px</code>) でフォントサイズを設定することは、ピクセル制度が必要な場合に適しています。ピクセル値は静的です。これは OS にもブラウザーにも依存しない方法であり、ブラウザーに文字を指定した高さのピクセルの数値で描画することを厳密に指示します。ブラウザーによって、同じ効果を得るのに異なるアルゴリズムが使われている可能性があるため、結果は多少異なるかもしれません。</p>

<p>フォントサイズの指定を組み合わせることもできます。例えば親要素のフォントサイズを <code>16px</code> 、子要素を <code>larger</code> とした場合、子要素のフォントサイズは親要素の <code>16px</code> より大きくレンダリングされます。</p>

<div class="note"><strong>注:</strong> フォントサイズを <code>px</code> で定義すると、ブラウザーによってはユーザーがフォントサイズを変更することができないため、<em><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3">アクセシブル</a></em>ではありません。例えば、弱視の人は、ウェブデザイナーが選んだサイズより大きなフォントにしたがるかもしれません。こうした配慮のあるデザインをしたい場合は、フォントサイズにピクセルを使わないようにしてください。</div>

<h3 id="Ems" name="Ems">em</h3>

<p>フォントサイズを設定するもうひとつの方法は <code>em</code> 値を使うものです。 <code>em</code> 値の大きさは動的です。<code>font-size</code> プロパティを定義すると、 <code>em</code> はその <code>em</code> が用いられている要素のフォントサイズと一致します。ページ内でまだフォントサイズをセットしていなければ、ブラウザーの既定値、たいてい 16px が使われます。したがって、既定では 1em = 16px であり、2em = 32px です。もし body 要素で <code>font-size</code> を 20px にセットすれば、1em = 20px で 2em = 40px です。本質的には、値の 2 が現在の em の大きさの乗数であることに注意してください。</p>

<p>必要なピクセル値に相当する em は、次の式で計算することができます。</p>

<pre class="brush: plain notranslate">em = 要素に設定したい pixel 値 / 親要素のピクセル単位でのフォントサイズ</pre>

<p>例えば、 body のフォントサイズが 1em にセットされているものとすると、ブラウザー標準の 1em = 16px です。使いたいフォントサイズが 12px なら、 0.75em を指定します (12/16 = 0.75 だからです)。同様に、使いたいフォントサイズが 10px なら、 0.625em を指定します (10/16 = 0.625)。22px なら 1.375em です (22/16)。</p>

<p>em は読者が選んだフォントに自動的に再調整されるため、CSS ではとても便利な単位です。</p>

<p><code>em</code> と <code>ex</code> の単位が {{cssxref("font-size")}} プロパティで用いられると、親要素のフォントサイズからの相対になります (要素のフォントサイズからの相対値を使用する他のプロパティとは異なります)。すなわち、 <code>em</code> の単位やパーセント値は {{cssxref("font-size")}} の場合と同様です。</p>

<p>em 値が複合的であるということは、覚えておくべき重要な事実です。以下の HTML と CSS をご覧ください。</p>

<pre class="brush: css notranslate">html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6em;
}</pre>

<pre class="brush: html notranslate">&lt;div&gt;
&lt;span&gt;Outer &lt;span&gt;inner&lt;/span&gt; outer&lt;/span&gt;
&lt;/div&gt;
</pre>

<p>結果は以下のようになります。</p>

<p>{{EmbedLiveSample("Ems", 400, 40)}}</p>

<p>ブラウザーの既定の <code>font-size</code> が 16px と仮定すると、単語 “outer” は 16px で描画され、単語 “inner” は 25.6px で描画されます。これは、内側の {{HTMLElement("span")}} 要素の <code>font-size</code> は 1.6em ですが、これは親要素の <code>font-size</code> からの相対値で、さらにその親要素の <code>font-size</code> からの相対値になるからです。これはよく<ruby><strong>複合</strong><rp> (</rp><rt>compounding</rt><rp>) </rp></ruby>と呼ばれます。</p>

<h3 id="Rems" name="Rems">rem</h3>

<p><code>rem</code> 値は、複合の問題を避けるために考案されました。 <code>rem</code> 値は親要素ではなく、ルート <code>html</code> 要素に対して相対的です。言い換えると、親要素のサイズの影響を受けることなく相対的な方法でフォントサイズを指定できますので、複合が発生しません。</p>

<p>以下の CSS は、先ほどの例とほぼ同じです。唯一の違いは、単位を <code>rem</code> に変更したことです。</p>

<pre class="brush: css notranslate">html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6rem;
}
</pre>

<p>この CSS を同じ HTML に適用すると、以下のようになります:</p>

<pre class="brush: html notranslate">&lt;span&gt;Outer &lt;span&gt;inner&lt;/span&gt; outer&lt;/span&gt;</pre>

<p>{{EmbedLiveSample("Rems", 400, 40)}}</p>

<p>この例では、単語 “outer inner outer” はすべて 16px で表示されます (ブラウザーの <code>font-size</code> は既定値が 10px のままであるとします)。</p>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_font_sizes" name="Setting_font_sizes">フォントサイズの設定</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;h1 class="small"&gt;Small H1&lt;/h1&gt;
&lt;h1 class="larger"&gt;Larger H1&lt;/h1&gt;
&lt;h1 class="point"&gt;24 point H1&lt;/h1&gt;
&lt;h1 class="percent"&gt;200% H1&lt;/h1&gt;</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Setting_font_sizes','600','200')}}</p>

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
   <td>{{SpecName('CSS4 Fonts', '#font-size-prop', 'font-size')}}</td>
   <td>{{Spec2('CSS4 Fonts')}}</td>
   <td><code>xxx-large</code> キーワードを追加</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Fonts', '#font-size-prop', 'font-size')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'fonts.html#propdef-font-size', 'font-size')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#font-size', 'font-size')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.font-size")}}</p>
