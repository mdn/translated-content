---
title: box-sizing
slug: Web/CSS/box-sizing
tags:
  - Boxes
  - CSS
  - CSS Box Model
  - CSS Property
  - CSS プロパティ
  - CSS ボックスモデル
  - Reference
  - border-box
  - box model
  - box-sizing
  - content-box
  - height
  - size
  - width
translation_of: Web/CSS/box-sizing
---
<p>{{CSSRef}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>box-sizing</code></strong> プロパティは、要素の全体の幅と高さをどのように計算するのかを設定します。</span></p>

<div>{{EmbedInteractiveExample("pages/css/box-sizing.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">CSS ボックスモデル</a>の既定では、要素に割り当てられた width および height は、要素のコンテンツ領域のみに適用されます。要素に境界線やパディングがある場合、画面にレンダリングされる矩形の大きさは width および height にこれらを加えたものになります。つまり、 width および height を設定する際には、境界線やパディングが加えられるように値を調整しなければなりません。例えば、 <code>width: 25%;</code> で左や右のパディングまたは左や右の境界がある 4 つのボックスを並べた場合、既定では親コンテナーの制約の中で 1 行には並びません。</p>

<p><code>box-sizing</code> プロパティは上記の振る舞いを調整するために使用できます。</p>

<ul>
 <li><code>content-box</code> は CSS box-sizing の既定の振る舞いです。要素の幅を100ピクセルに設定した場合、要素のコンテンツ領域の幅は100ピクセルになり、境界線やパディングを加えたものが最終的にレンダリングされる幅になり、要素が100pxよりも広くなります。</li>
 <li><code>border-box</code> は、要素に指定した width および height の中で境界線およびパディングを取るようにブラウザーに指示します。要素の width を100ピクセルに設定した場合、100ピクセルの中に追加した境界線やパディングが含まれ、コンテンツ領域はそれらの幅を吸収するために縮小します。これで普通は、要素に対するサイズ設定をもっと簡単になります。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注:</strong> 要素をレイアウトする際には、 <code>box-sizing</code> を <code>border-box</code> に設定しておくと便利です。これにより、要素の寸法の扱いが非常に簡単になり、一般的にコンテンツをレイアウトする際につまずく可能性のあるいくつかの落とし穴を排除することができます。 一方、 <code>position: relative</code> または <code>position: absolute</code> を使用する場合、 <code>box-sizing: content-box</code> を使用することで、コンテンツに対する相対的な位置の値を設定することができ、境界やパディングの幅の変更に依存しなくなり、これが望ましい場合もあります。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>box-sizing</code> プロパティは、以下のいずれか1つのキーワードを選択して定義します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>content-box</code></dt>
 <dd>これは、 CSS 標準仕様で規定されている初期値および既定値です。 {{Cssxref("width")}} および {{Cssxref("height")}} プロパティの寸法は、コンテンツ領域のみを含むものとなり、パディング、境界線、マージン領域を含みません。例えば <code>.box {width: 350px; border: 10px solid black;}</code> は 370px の幅のボックスを描画します。</dd>
 <dd>この場合、それぞれの要素の寸法は、 <em>幅 = コンテンツの幅</em>、<em>高さ = コンテンツの高さ</em> として計算されます（境界線やパディングの値を除く）。</dd>
 <dt><code>border-box</code></dt>
 <dd>{{Cssxref("width")}} および {{Cssxref("height")}} プロパティには、コンテンツ、パディング、境界線の領域が含まれますが、マージンは含まれません。なお、パディングと境界線はボックスの内側に置かれることに注意してください。例えば <code>.box {width: 350px; border: 10px solid black;}</code> は、ブラウザーでボックスの幅が 350px、コンテンツ領域の幅 330px として描画されます。コンテンツボックスは負の値にできず 0 に丸められますので、要素を非表示にするために <code>border-box</code> を使用することはできません。</dd>
 <dd>この場合、それぞれの要素の寸法は、 <em>幅 = 境界線 + パディング + コンテンツの幅</em>、 <em>高さ = 境界線 + パディング + コンテンツの高さ</em> として計算されます。</dd>
</dl>

<h2 id="公式定義">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Box_sizes_with_content-box_and_border-box" name="Box_sizes_with_content-box_and_border-box">content-box と border-box のボックスサイズ</h3>

<p>この例では、2つの <code>box-sizing</code> の値が、それ以外の条件が同じ要素のレンダリングの大きさをどのように変えるかを示します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="content-box"&gt;Content box&lt;/div&gt;
&lt;br&gt;
&lt;div class="border-box"&gt;Border box&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* 全体の幅: 160px + (2 * 20px) + (2 * 8px) = 216px
     全体の高さ: 80px + (2 * 20px) + (2 * 8px) = 136px
     コンテンツ領域の幅: 160px
     コンテンツ領域の高さ: 80px */
}

.border-box {
  box-sizing: border-box;
  /* 全体の幅: 160px
     全体の高さ: 80px
     コンテンツ領域の幅: 160px - (2 * 20px) - (2 * 8px) = 104px
     コンテンツ領域の高さ: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Box_sizes_with_content-box_and_border-box', 'auto', 300)}}</p>

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
   <td>{{SpecName('CSS3 Basic UI', '#box-sizing', 'box-sizing')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.box-sizing")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">CSS 基本ボックスモデル</a></li>
</ul>
