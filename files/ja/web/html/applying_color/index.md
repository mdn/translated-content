---
title: CSS を使った HTML の要素への色の適用
slug: Web/HTML/Applying_color
tags:
  - Beginner
  - CSS
  - CSS Colors
  - Guide
  - HTML
  - HTML Colors
  - HTML Styles
  - Styling HTML
  - color
translation_of: Web/HTML/Applying_color
---
<div>{{HTMLRef}}</div>

<p>色使いは人間の表現の基本形です。子どもは絵がうまくなる前から色に触れています。恐らくこれこそが、人がウェブサイト開発を学ぶときにまず色を触る理由でしょう。<span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> では、<a href="/ja/docs/Web/HTML">HTML</a> <a href="/ja/docs/Web/HTML/Element">要素</a>に色を追加し好みの見た目にする方法が多岐に渡ります。この記事では CSS の色を HTML の中で利用できる各方法の基本をご案内します。</span></p>

<p>幸いなことに HTML での着色は本当に簡単で、ほぼ全ての要素に色をつけられます。</p>

<p>{{anch("Things that can have color", "色付けできる物の一覧とそのための CSS プロパティ")}}、{{anch("How to describe a color", "色の記述方法")}}、{{anch("Using color", "スタイルシートとスクリプトでの色の利用")}}など、色使いにおいて知っておくべき数多のことに触れていきます。{{anch("Letting the user picka color", "ユーザーに色を選択させる")}}方法にも触れます。</p>

<p>それから、{{anch("Using color wisely", "賢い色の使い方")}}について短い論述をします。これは、様々な視覚の人がいることを意識した、適切な色の選択方法です。</p>

<h2 id="Things_that_can_have_color" name="Things_that_can_have_color">色付けできる物</h2>

<p>要素レベルでは、HTML 内のすべての物に色を付けられます。そこで、テキストや境界線などの要素として描画されるものの種類ごとに、色を付ける CSS プロパティのリストを見ていきます。</p>

<p>基礎的なレベルでならば、 {{cssxref("color")}} プロパティは HTML 要素の手前側の色を定義し、{{cssxref("background-color")}} は HTML 要素の背景色を定義すると言えます。これらのプロパティはほぼ全ての要素で使用できます。</p>

<h3 id="Text" name="Text">テキスト</h3>

<p>この要素を描画するときは、以下のプロパティに基づいてテキストの色、背景色、テキストの装飾を決定します。</p>

<dl>
 <dt>{{cssxref("color")}}</dt>
 <dd>テキストと<a href="/ja/docs/Learn/CSS/Styling_text/Fundamentals#Font_style_font_weight_text_transform_and_text_decoration">テキストの装飾</a> (下線や上線、打ち消し線などを付加するもの) に使用する色です。</dd>
 <dt>{{cssxref("background-color")}}</dt>
 <dd>テキストの背景色です。</dd>
 <dt>{{cssxref("text-shadow")}}</dt>
 <dd>テキストに適用する影の効果を設定します。影の設定には、影のベース色 (他のパラメータに基づいて背景をぼかして混色する色) があります。より詳しくは{{SectionOnPage("/ja/docs/Learn/CSS/Styling_text/Fundamentals", "テキストのドロップシャドウ")}}を参照してください。</dd>
 <dt>{{cssxref("text-decoration-color")}}</dt>
 <dd>デフォルトでは、テキストの装飾 (下線、打ち消し線など) の色には <code>color</code> プロパティを使用します。しかし、<code>text-decoration-color</code> プロパティを用いることで、この挙動をオーバーライドして異なる色を使用できます。</dd>
 <dt>{{cssxref("text-emphasis-color")}}</dt>
 <dd>文章中の各文字に隣接した圏点の描画に使用する色です。主に東アジア言語の文字描画で使用します。</dd>
 <dt>{{cssxref("caret-color")}}</dt>
 <dd>要素の {{Glossary("caret", "キャレット")}} (テキスト入力カーソルとも表現されるもの) の描画に使用する色です。これは編集可能な要素では有用で、{{HTMLElement("input")}} や {{HTMLElement("textarea")}} または HTML {{htmlattrxref("contenteditable")}} 属性がセットされた要素に使用されます。</dd>
</dl>

<h3 id="Boxes" name="Boxes">ボックス</h3>

<p>すべての要素は中身があるボックスであり、そのボックスの内容に加えて、背景と境界線もあります。</p>

<dl>
 <dt>{{anch("Borders", "境界線")}}</dt>
 <dd>ボックスの境界線の色を設定できる CSS プロパティ一覧は、{{anch("Borders", "境界線")}} の章を参照してください。</dd>
 <dt>{{cssxref("background-color")}}</dt>
 <dd>要素の前面を除いて、その要素の領域で使われる背景色です。</dd>
 <dt>{{cssxref("column-rule-color")}}</dt>
 <dd>テキストの列を区切る線に使う色です。</dd>
 <dt>{{cssxref("outline-color")}}</dt>
 <dd>要素の外側に輪郭線を描くときに使う色です。この輪郭線は境界線とは異なり、ドキュメント内でそのスペースを確保しません (そのため他のコンテンツと重なる可能性があります)。一般的には、入力イベントを受け取る要素を示したフォーカスインジケーターに使用されます。</dd>
</dl>

<h3 id="Borders" name="Borders">境界線</h3>

<p>あらゆる要素には、周りに境界線が存在します。基本的な要素の境界は、要素の内容の端に描かれている線です。要素とその境界線の関係性については {{SectionOnPage("/ja/docs/Learn/CSS/Introduction_to_CSS/Box_model", "ボックスのプロパティ")}} を、より詳しい境界線へのスタイルの適用については <a href="/ja/docs/Learn/CSS/Styling_boxes/Borders">CSS での境界線のスタイル付け</a> をご参照ください。</p>

<p>{{cssxref("border")}} 短縮プロパティを使用することもできます。これは、境界線に関する (色に関しない<a href="/ja/docs/Web/CSS/border-width">線幅</a>、<a href="/ja/docs/Web/CSS/border-style">線の種類</a> (実線、破線など) のような境界線の機能も含んだ) すべての設定をこれ一つで行えます。</p>

<dl>
 <dt>{{cssxref("border-color")}}</dt>
 <dd>要素の境界線の各辺に使用する単色を指定します。</dd>
 <dt>{{cssxref("border-left-color")}} と {{cssxref("border-right-color")}} と {{cssxref("border-top-color")}} と {{cssxref("border-bottom-color")}}</dt>
 <dd>要素の境界線の各辺に対応する色を指定できます。</dd>
 <dt>{{cssxref("border-block-start-color")}} と {{cssxref("border-block-end-color")}}</dt>
 <dd>これらは、境界線が囲むブロックの始点と終点に最も近い境界線の描画色を設定することができます。左から右への書き方 (英語の書き方など) では、ブロック開始の境界線は上端、ブロック終了の境界線は下端になります。これは、インライン開始とインライン終了である左右の (ボックス内の各行のテキストの開始と終了の位置に対応する) 端とは異なります。</dd>
 <dt>{{cssxref("border-inline-start-color")}} と {{cssxref("border-inline-end-color")}}</dt>
 <dd>これらは、ボックス内のテキスト行の先頭と末尾に最も近い境界線の縁に色を付けられます。これは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} プロパティに依存しますが、どちら側になるかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} プロパティによって異なります。例えば、ボックスのテキストが右から左に描画される場合、<code>border-inline-start-color</code> は境界線の右側に適用されます。</dd>
</dl>

<h3 id="Other_ways_to_use_color" name="Other_ways_to_use_color">色をつける他の方法</h3>

<p>CSS が唯一の色を付けるためのウェブ技術ではありません。色もサポートしている、ウェブで使用可能なグラフィック技術があります。</p>

<dl>
 <dt>HTML <a href="/ja/docs/Web/API/Canvas_API">Canvas API</a></dt>
 <dd>Canvas API では、2D のビットマップ画像を {{HTMLElement("canvas")}} 要素の中に描画できます。より詳しくは <a href="/ja/docs/Web/API/Canvas_API/Tutorial">Canvas チュートリアル</a>をご参照ください。</dd>
 <dt><a href="/ja/docs/Web/SVG">SVG</a> (Scalable Vector Graphics)</dt>
 <dd>SVG ならば、特定の形状、パターン、線を描くコマンドで画像を描画できます。 SVG のコマンドは XML の形式となっており、直接ウェブページに埋め込めます。また、img 要素を使うと他の画像と同じような配置もできます。</dd>
 <dt><a href="/ja/docs/Web/API/WebGL_API">WebGL</a></dt>
 <dd>Web Graphics Library は Open GL ES を基にした API で、ウェブ上に 2D や 3D のハイパフォーマンスなグラフィックを描画できます。より詳しくは <a href="/ja/docs/Web/API/WebGL_API/Tutorial">WebGL チュートリアル</a>をご参照ください。</dd>
</dl>

<h2 id="How_to_describe_a_color" name="How_to_describe_a_color">色の指定方法</h2>

<p>CSS で色を表現するには、アナログの概念である「色」の概念を、コンピュータが解釈できるようなデジタル形式に翻訳する方法が必要です。これは通常、原色の集合それぞれをどのくらい混ぜるか、どのくらいの明るさにするかなど、色を構成要素に分解することで行います。ここでは、CSS で色を表現するいくつかの方法を示します。</p>

<p>色の値型の詳細は、CSS {{cssxref("&lt;color&gt;")}} 単位のリファレンスをご参照ください。</p>

<h3 id="Keywords" name="Keywords">キーワード</h3>

<p>標準の色名がいくつか定義されており、色の数値表現の代わりにこれらのキーワードを使用できます。色キーワードには原色と副色 (<code>red</code>、<code>blue</code>、<code>orange</code> など)、灰色 (<code>black</code> から <code>white</code> までの <code>darkgray</code> や <code>lightgrey</code> といった色を含む)、これらを混ぜた色である <code>lightseagreen</code>、<code>cornflowerblue</code>、<code>rebeccapurple</code> が含まれます。</p>

<p>利用可能な全ての色キーワードの一覧は、{{SectionOnPage("/ja/docs/Web/CSS/color_value", "色キーワード")}}をご参照ください。</p>

<h3 id="RGB_values" name="RGB_values">RGB 値</h3>

<p>CSS での RGB の色表現は 3 通りあります。</p>

<h4 id="Hexadecimal_string_notation" name="Hexadecimal_string_notation">16 進数文字列表記</h4>

<p>16 進数文字列表記は、色の各要素 (赤、緑、青) を表すために 16 進数の数字で色を表します。また、4 つ目の要素のアルファチャネル (または不透明度) を含められます。各色要素は、0 〜 255 (0x00 と 0xFF) の間の数値、または任意で 0 ～ 15 (0x0 と 0xF) の間の数値として表せます。全要素は同じ桁数で指定する必要があります。1 桁の表記を使用した場合、描画時の最終的な色は <code>"#D"</code> が <code>"#DD"</code> になるように各構成要素の桁を 2 回繰り返して計算します。</p>

<p>16 進数文字列表記の色は、常に文字 <code>"#"</code> で始まります。その後にカラーコードの 16 進数が来ます。文字列の大文字小文字は区別されません。</p>

<dl>
 <dt><code>"#rrggbb"</code></dt>
 <dd>16 進数の完全不透明色を指定します。赤色成分が <code>0xrr</code>、緑色成分がが <code>0xgg</code>、青色成分が <code>0xbb</code> です。</dd>
 <dt><code>"#rrggbbaa"</code></dt>
 <dd>16 進数の色を指定します。赤色成分が <code>0xrr</code>、緑色成分がが <code>0xgg</code>、青色成分が <code>0xbb</code> です。アルファチャンネルは <code>0xaa</code> で指定します。この値が小さいほど透明に近づきます。</dd>
 <dt><code>"#rgb"</code></dt>
 <dd>16 進数の完全不透明色を指定します。赤色成分が <code>0xrr</code>、緑色成分がが <code>0xgg</code>、青色成分が <code>0xbb</code> です。</dd>
 <dt><code>"#rgba"</code></dt>
 <dd>16 進数の色を指定します。赤色成分が <code>0xrr</code>、緑色成分がが <code>0xgg</code>、青色成分が <code>0xbb</code> です。アルファチャンネルは <code>0xaa</code> で指定します。この値が小さいほど透明に近づきます。</dd>
</dl>

<p>例として、明るい青の不透明色は <code>"#0000ff"</code> や <code>"#00f"</code> で表現できます。25% 不透明にするには、<code>"#0000ff44"</code> や <code>"#00f4"</code> のようにします。</p>

<h4 id="RGB_functional_notation" name="RGB_functional_notation">RGB 関数表記</h4>

<p>RGB (赤/緑/青) 関数表記法は、16 進文字列表記法と同様に赤、緑、青の各成分 (任意では不透明度のアルファチャンネル成分) を用いて色を表現しますが、文字列ではなく CSS 関数 {{cssxref("color_value", "rgb()", "#rgb()")}} で色を定義します。この関数は、入力パラメータとして赤、緑、青の各成分の値と、任意の第 4 引数のアルファチャンネル値を受け取ります。</p>

<p>これらの引数の正常値は以下の通りです。</p>

<dl>
 <dt><code>red</code>、<code>green</code>、<code>blue</code></dt>
 <dd>0 以上 255 以下の {{cssxref("&lt;integer&gt;")}} 型の値か、0% から 100% の {{cssxref("&lt;percentage&gt;")}} 型の値です。</dd>
 <dt><code>alpha</code></dt>
 <dd>アルファチャンネルは、0.0 (完全透過) から 1.0 (完全不透明) の間の数値です。また、 パーセントも指定でき、これは 0% が 0.0 と同じで 100% が 1.0 と同じです。</dd>
</dl>

<p>例えば、不透明度 50% の明るい赤は <code>rgb(255, 0, 0, 0.5)</code> や <code>rgb(100%, 0, 0, 50%)</code> のように表現できます。</p>

<h3 id="HSL_functional_notation" name="HSL_functional_notation">HSL 関数表記</h3>

<p>デザイナーやアーティストは {{interwiki("wikipedia", "HSL and HSV", "HSL")}} (Hue/Saturation/Luminosity) で作業しようとすることがあります。ウェブにおける HSL 色は、HSL 関数表記で表現します。CSS の <code>hsl()</code> 関数の表現方法は、<code>rgb()</code> 関数とよく似ています。</p>

<div style="padding-bottom: 20px;">
<figure style="width: 500px;"><img alt="HSL 色円柱" src="https://mdn.mozillademos.org/files/15445/1200px-HSL_color_solid_cylinder_alpha_lowgamma.png" style="height: 375px; width: 500px;">
<figcaption><em><strong>図 1. HSL 色円柱</strong> </em>色相は、可視スペクトルの色を表す円形の色相環に沿った位置に基づいて実際の色を定義します。彩度は、灰色の強さ、もしくはその色相で取りうる最も濃い色に対する割合です。輝度 (または明度) の値が高くなると、色は最も暗い色から最も明るい色 (黒から白) へと変化します。<em>画像提供は <a href="https://www.wikipedia.org/">Wikipedia </a>の <a href="http://commons.wikimedia.org/wiki/User:SharkD">SharkD</a> さんより、<a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a> ライセンスで配布されているものです。</em></figcaption>
</figure>
</div>

<p>HSL カラーの色相 (H) 成分の値は、赤から黄、緑、水、青、マゼンタ (そして 360° で再び赤に戻る) までの角度で、ベースの色を特定します。度 (<code>deg</code>)、ラジアン (<code>rad</code>)、グラジアン (<code>grad</code>)、回転 (<code>turn</code>) など、CSS がサポートする任意の {{cssxref("&lt;angle&gt;")}} 単位で値を指定できます。しかしこれでは、鮮やかさや濁り、色の明るさや暗さを制御できません。</p>

<p>色の彩度 (S) 成分は、最終的な色を指定の色相が構成する割合を指定します。残りの輝度 (L) 成分は、灰色の強さを定義します。</p>

<p>以下のように、完璧な絵の具の色を作るかのように考えてみましょう。</p>

<ol>
 <li>ユーザーの画面で表現できる最も強い青など、その色で最も強いベースの絵の具から始めます。これが<strong>色相</strong> (H) 要素で、ベースとして使用したい鮮やかな色相環の周りの角度を表す値です。</li>
 <li>次に、欲しい色の明るさに対応するグレースケールの絵の具を選びます。非常に明るくて白に近い色にしたいのか、それとも非常に暗くて黒に近い色にしたいのか、それともその中間のどこかにしたいのか。これはパーセンテージで指定し、0% が完全な黒、100% が完全な白となります。(彩度や色相に関係なく)。この値の間には文字通り灰色の領域があります。</li>
 <li>灰色の絵の具と完全に鮮やかな色が手に入ったので、これらを混ぜ合わせる必要があります。色の彩度 (S) 成分は、最終的な色のうち完全に鮮やかな色が構成するパーセントを示します。残りは、彩度を表すグレーの絵の具となります。</li>
</ol>

<p>任意でアルファチャンネルを追加して、色を 100% 以下の不透明度にすることもできます。</p>

<p>こちらは、HSL 表記のサンプル色です。</p>

<div id="hsl-swatches">
<div class="hidden">
<pre class="brush: css notranslate">table {
  border: 1px solid black;
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding:4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0, 0%, 75%);
}</pre>

<pre class="brush: html notranslate">&lt;table&gt;
 &lt;thead&gt;
  &lt;tr&gt;
   &lt;th scope="col"&gt;Color in HSL notation&lt;/th&gt;
   &lt;th scope="col"&gt;Example&lt;/th&gt;
  &lt;/tr&gt;
 &lt;/thead&gt;
 &lt;tbody&gt;
  &lt;tr&gt;
   &lt;td&gt;&lt;code&gt;hsl(90deg, 100%, 50%)&lt;/code&gt;&lt;/td&gt;
   &lt;td style="background-color: hsl(90deg, 100%, 50%);"&gt;&amp;nbsp;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td&gt;&lt;code&gt;hsl(90, 100%, 50%)&lt;/code&gt;&lt;/td&gt;
   &lt;td style="background-color: hsl(90, 100%, 50%);"&gt;&amp;nbsp;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td&gt;&lt;code&gt;hsl(0.15turn, 50%, 75%)&lt;/code&gt;&lt;/td&gt;
   &lt;td style="background-color: hsl(0.15turn, 50%, 75%);"&gt;&amp;nbsp;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td&gt;&lt;code&gt;hsl(0.15turn, 90%, 75%)&lt;/code&gt;&lt;/td&gt;
   &lt;td style="background-color: hsl(0.15turn, 90%, 75%);"&gt;&amp;nbsp;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td&gt;&lt;code&gt;hsl(0.15turn, 90%, 50%)&lt;/code&gt;&lt;/td&gt;
   &lt;td style="background-color: hsl(0.15turn, 90%, 50%);"&gt;&amp;nbsp;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td&gt;&lt;code&gt;hsl(270deg, 90%, 50%)&lt;/code&gt;&lt;/td&gt;
   &lt;td style="background-color: hsl(270deg, 90%, 50%);"&gt;&amp;nbsp;&lt;/td&gt;
  &lt;/tr&gt;
 &lt;/tbody&gt;
&lt;/table&gt;</pre>
</div>

<p>{{EmbedLiveSample("hsl-swatches", 300, 260)}}</p>
</div>

<div class="note">
<p>注意として、色相の単位を省略した場合は度 (<code>deg</code>) と見なされます。</p>
</div>

<h2 id="Using_color" name="Using_color">色の活用</h2>

<p>要素に色を適用する CSS プロパティの存在と、色の記述に使用可能な形式が分かったので、これをまとめて色を活用し始めてみましょう。{{anch("着色できる物")}}のリストを見て把握できたと思いますが、CSS で色を付けられる物はたくさんあります。ここでは、{{Glossary("stylesheet", "スタイルシート")}}内で色を使う場合と、{{Glossary("JavaScript")}} コードで要素のスタイルを変更するために色を追加したり変更したりする場合の、2 つの側面から見ていきます。</p>

<h3 id="Specifying_colors_in_stylesheets" name="Specifying_colors_in_stylesheets">スタイルシートでの色指定</h3>

<p>要素に色を適用する最も簡単な方法は、要素の描画に使用する CSS で色を指定することです。前述のプロパティをすべて使用するわけではありませんが、いくつかの例を見てみましょう。色を使う場所によらず、考え方は同じです。</p>

<p>先にこれからやることの結果を見てから、サンプルを見ていきます。</p>

<div>{{EmbedLiveSample("Specifying_colors_in_stylesheets", 650, 150)}}</div>

<h4 id="HTML">HTML</h4>

<p>上記の例を作成するための HTML は、この通りです。</p>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box boxLeft"&gt;
    &lt;p&gt;
      This is the first box.
    &lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="box boxRight"&gt;
    &lt;p&gt;
      This is the second box.
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<p>これは非常にシンプルで、{{HTMLElement("div")}} をコンテンツのラッパーとして使用し、さらに 2 つの &lt;div&gt; で構成しています。</p>

<p>魔法はいつも、CSS で起こります。上記の HTML で定義したレイアウトに、色を適用していきます。</p>

<h4 id="CSS">CSS</h4>

<p>上記の結果を作り出す CSS を一つずつ見ていけば、面白い部分も一つずつ見られるでしょう。</p>

<pre class="brush: css notranslate">.wrapper {
  width: 620px;
  height: 110px;
  margin: 0;
  padding: 10px;
  border: 6px solid mediumturquoise;
}</pre>

<p><code>.wrapper</code> クラスは、他のすべてのコンテンツを囲む {{HTMLElement("div")}} にスタイルを割り当てるために使っています。これは {{cssxref("width")}} と {{cssxref("height")}} を使ってコンテナのサイズを決定し、さらに {{cssxref("margin")}} と {{cssxref("padding")}} を使っています。</p>

<p>ここでの論述でさらに興味深いのは、{{cssxref("border")}} プロパティで要素の縁に境界線を設定していることです。この境界線は幅 6 ピクセルの実線で、色は <code>mediumturquoise</code> です。</p>

<p>2 つの色付きボックスには共通のプロパティがいくつかありますので、そのプロパティを定義するクラス <code>.box</code> を作成します。</p>

<pre class="brush: css notranslate">.box {
  width: 290px;
  height: 100px;
  margin: 0;
  padding: 4px 6px;
  font: 28px "Marker Felt", "Zapfino", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
}</pre>

<p>簡単に言えば、<code>.box</code> は各ボックスのサイズとその中で使用するフォントの構成を確立しています。また、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS フレックスボックス</a>も利用して簡単に各ボックスのコンテンツを中央揃えしています。{{cssxref("display", "display: flex")}} で <code>flex</code> モードを有効にし、{{cssxref("justify-content")}} と {{cssxref("align-items")}} を <code>center</code> に設定しています。あとは、2 つのボックスそれぞれに異なるプロパティを定義するクラスを作るだけです。</p>

<pre class="brush: css notranslate">.boxLeft {
  float: left;
  background-color: rgb(245, 130, 130);
  outline: 2px solid darkred;
}</pre>

<p><code>.boxLeft</code> クラスは、左側のボックスのスタイルとして巧みに使われ、以下のようにボックスを左側に浮かせて色を設定しています。</p>

<ul>
 <li>CSS {{cssxref("background-color")}} プロパティを <code>rgb(245, 130, 130)</code> の値に変更することで、ボックスの背景色を設定しています。</li>
 <li>ボックスに輪郭線を定義しています。一般的によく使われる <code>border</code> とは異なり、{{cssxref("outline")}} はレイアウトに全く影響しません。この輪郭線は、2 ピクセルの太さの、濃い赤色の実線です。色の指定に <code>darkred</code> キーワードを使用していることにご注意ください。</li>
 <li>注意として、テキストの色は明示的に設定していません。この場合 {{cssxref("color")}} の値はそれを含んだ最も近い要素から継承されます。すなわち、デフォルトである黒色です。</li>
</ul>

<pre class="brush: css notranslate">.boxRight {
  float: right;
  background-color: hsl(270deg, 50%, 75%);
  outline: 4px dashed rgb(110, 20, 120);
  color: hsl(0deg, 100%, 100%);
  text-decoration: underline wavy #88ff88;
  text-shadow: 2px 2px 3px black;
}</pre>

<div class="blockIndicator note">
<p>こちらを Safari で表示しようとしても、正常に表示されません。なぜなら、Safari は <code>text-decoration: underline wavy #88ff88</code> をサポートしていないからです。</p>
</div>

<p>最後に、<code>.boxRight</code> クラスで右に描画されるボックス固有のプロパティを記述します。これは、先のボックスの隣に表示されるように、ボックスを右に浮かす設定をしています。そして、以下のように色を設定しています。</p>

<ul>
 <li><code>background-color</code> は <code>hsl(270deg, 50%, 75%)</code> で指定した HSL 値を設定しています。この色は中くらいの紫色です。</li>
 <li>ボックスの <code>outline</code> は、 ボックスを太さ 4 ピクセルの破線で囲み、色はやや濃い紫色 (<code>rgb(110, 20, 120)</code>) となるように指定しています。</li>
 <li>前景 (テキスト) の色は、{{cssxref("color")}} プロパティを <code>hsl(0deg, 100%, 100%)</code> にすることで指定してあります。これは白色を指定する方法のうちの一つです。</li>
 <li>{{cssxref("text-decoration")}} でテキストの下に緑の波線を引いています。</li>
 <li>最後に、{{cssxref("text-shadow")}} を使用してテキストに少しだけ影をつけています。この <code>color</code> 引数は <code>black</code> にしています。</li>
</ul>

<h2 id="Letting_the_user_pick_a_color" name="Letting_the_user_pick_a_color">ユーザーに色を選択させる</h2>

<p>ウェブサイト上では、ユーザーに色を選択させる必要がある場合があります。カスタマイズ可能なユーザーインターフェースがある場合や、お絵かきアプリを実装している場合などが考えられるでしょう。編集可能なテキストがあってユーザーにテキストの色を選択させる、あるいはアプリでフォルダやアイテムに色を割り当てることができる場合があるかもしれません。古くは、独自の{{interwiki("wikipedia", "カラーピッカー")}}を実装する必要がありましたが、HTML では {{HTMLElement("input")}} 要素を通じて {{htmlattrxref("type", "input")}} 属性の値を <code>"color"</code> にすれば、ブラウザが色選択を提供できるようになりました。</p>

<p><code>&lt;input&gt;</code> 要素は、先で取り上げた {{anch("Hexadecimal string notation", "16進数文字列表記")}} でのみ色を表します。</p>

<h3 id="Example_Picking_a_color" name="Example_Picking_a_color">例: 色の選択</h3>

<p>ユーザーが色を選択できる簡単な例を見てみましょう。ユーザーが色を調整すると、サンプルの周囲の境界線が新しい色を反映するように変化します。色を選び終えると、カラーピッカーの値が表示されます。</p>

<p>{{EmbedLiveSample("Example_Picking_a_color", 525, 275)}}</p>

<div class="note">
<p>macOS では、カラーピッカーウインドウを閉じると色の選択が完了したことになります。</p>
</div>

<h4 id="HTML_2">HTML</h4>

<p>この HTML は、({{HTMLElement("label")}} 要素で作成したラベル付きの) カラーピッカーコントロールと、空の段落要素 ({{HTMLElement("p")}}) を含むボックスを作成します。この段落要素に JavaScript コードからテキストを出力する予定です。</p>

<pre class="brush: html notranslate">&lt;div id="box"&gt;
  &lt;label for="colorPicker"&gt;Border color:&lt;/label&gt;
  &lt;input type="color" value="#8888ff" id="colorPicker"&gt;
  &lt;p id="output"&gt;&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<p>この CSS では、ボックスのサイズと見た目の基本的なスタイルを設定しています。境界線には 2 ピクセルの幅を設定していますが、色は下記の JavaScript のおかげで変化します。</p>

<pre class="brush: css notranslate">#box {
  width: 500px;
  height: 200px;
  border: 2px solid rgb(245, 220, 225);
  padding: 4px 6px;
  font: 16px "Lucida Grande", "Helvetica", "Arial", "sans-serif"
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<p>このスクリプトは、境界線の開始色をカラーピッカーの値と同じに更新するタスクを処理します。<code><a href="/ja/docs/Web/HTML/Element/input/color">&lt;input type="color"&gt;</a></code> 要素からの入力をハンドルするために、2 つのイベントハンドラを追加しています。</p>

<pre class="brush: js notranslate">let colorPicker = document.getElementById("colorPicker");
let box = document.getElementById("box");
let output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener("input", function(event) {
  box.style.borderColor = event.target.value;
}, false);

colorPicker.addEventListener("change", function(event) {
  output.innerText = "Color set to " + colorPicker.value + ".";
}, false);</pre>

<p>この {{event("input")}} イベントは要素の値が変更されるたびに送信されます。このイベントが来るたびに、ボックスの境界線の色をカラーピッカーの現在値に合わせます。</p>

<p>カラーピッカーの値が確定したときに、{{event("change")}} イベントを受信します。ID が <code>"output"</code> の <code>&lt;p&gt;</code> 要素の内容を、最後に選択した色を表す文字列に設定することで応答します。</p>

<h2 id="Using_color_wisely" name="Using_color_wisely">賢く色を使う</h2>

<p>ウェブサイトのデザインで正しい色選びをする際には、芸術、デザイン、少なくとも基本的な色理論に精通していないと、格段に複雑な工程となるでしょう。間違った色の選択は、サイトが醜くなったり、さらに悪いことにコントラストや相反する色の問題でコンテンツが読めなくなってしまうことがあります。また、間違った色を使用してしまうことで、特定の視覚的問題、特に色覚異常を持つ人々がコンテンツを全く利用できなくなる恐れがあります。</p>

<h3 id="Finding_the_right_colors" name="Finding_the_right_colors">適切な色を見つける</h3>

<p>何らかの芸術やデザインを触れずに、丁度よく正しい色を思い付くことは難しいでしょう。幸いなことに、あなたの手助けになりえる便利なツールがあります。これらは意思決定を助ける良きデザイナーを持つことには代わりませんが、火付け役にはなるでしょう。</p>

<h4 id="Base_color" name="Base_color">ベースカラー</h4>

<p>最初のステップは、<strong>ベースカラー</strong>を選ぶことです。これは、何らかの形であなたのウェブサイトやサイトの主題を定義する色です。緑がお茶を連想させるように、また青は空や海と関係があるように考えるところから、サイトを表すのに適切なベースカラー選びを始めると良いでしょう。ベースカラーを選ぶ方法はたくさんありますが、以下のようないくつかのアイデアがあります。</p>

<ul>
 <li>商品やアイデアで識別される既存の色や、伝えたい感情を代表する色など、コンテンツのトピックに自然に関連する色。</li>
 <li>コンテンツが表す物に関連付いたイメージから来る色。特定の項目や製品に関するウェブサイトを作成する場合は、それらに物理的に存在する色を選びます。</li>
 <li>ウェブサイトを探して既存のカラーパレットや画像をたくさん見ることで、インスピレーションを得ます。</li>
</ul>

<p>ベースカラーを決める際には、ウェブコンテンツから色を選択できるブラウザ拡張機能が特に便利です。拡張機能の中には、こういった作業を支援するために特別に設計されたものもあります。例えば、ウェブサイトの <a href="http://www.colorzilla.com/">ColorZilla</a> はウェブから色を選ぶためのスポイトツールの拡張機能 (<a href="http://www.colorzilla.com/chrome">Chrome</a> / <a href="http://www.colorzilla.com/firefox">Firefox</a>) を提供しています。また、様々なサイズの領域やページの選択すた領域のピクセルの色の平均を取ることもできます。</p>

<div class="note">
<p>色の平均を取る利点は、一見同じ色に見えるものが、実際には驚くほど多様な数の関連色が協調して使用され、目的の効果を生み出すために混色されていることが多いためです。これらのピクセル内から 1 つだけ選んでしまうと、それだけでは非常に場違いな色になることがあります。</p>
</div>

<h4 id="Fleshing_out_the_palette" name="Fleshing_out_the_palette">パレットを豊かにする</h4>

<p>ベースカラーが決まれば、ベースカラーに色理論を適用して、ベースカラーと一緒に使用する適切なカラーパレットを構築します。さらなる適切な色の決定に役立つオンラインツールもたくさんあります。これらの多くはフィルターをかけた色表示もサポートしているので、さまざまな色盲の人がどう見えるかを確認できます。これがなぜ重要なのかについては、{{anch("Color and accessibility", "色とアクセシビリティ")}}で簡単に説明しています。</p>

<p>以下はいくつかの例 (このリストが最終改訂された時点では、すべて無料で使用できるもの) です。</p>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Colors/Color_picker_tool">MDN のカラーピッカーツール</a></li>
 <li><a href="http://paletton.com">Paletton</a></li>
 <li><a href="https://color.adobe.com/create/color-wheel">Adobe Color CC オンライン色相環</a></li>
</ul>

<p>パレットをデザインする際には、これらのツールが典型的に生成する色に加えて、白 (またはほぼ白)、黒 (またはほぼ黒)、グレーの濃淡などの中核となる中性的な色を加える必要があることも念頭に置いてください。</p>

<div class="note">
<p>通常は、可能な限り色の数を少なくした方がはるかに良くなります。ページ上の全てに色を加えるのではなく色をアクセントに使うと、内容が読みやすくなり使った色のインパクトが増します。</p>
</div>

<h3 id="Color_theory_resources" name="Color_theory_resources">色理論に関する参考文献</h3>

<p>色理論の全面的な履修はこの記事の範囲を超えていますが、色理論に関する記事も豊富に用意されており、最寄りの学校や大学にも講座があるでしょうから、ぜひ参考にしてみてください。色理論に関する有用なリソースをいくつかご紹介します。</p>

<dl>
 <dt><a href="https://www.khanacademy.org/partner-content/pixar/color">Color Science</a> (<a href="https://www.khanacademy.org/">カーンアカデミー</a> と <a href="https://www.pixar.com/">ピクサー</a> の共著)</dt>
 <dd>色とは何か、色の認識のされ方、色を使ったアイデアの表現方法などの概念を紹介するオンライン講座です。ピクサーのアーティストやデザイナーが講師を務めています。</dd>
 <dt>Wikipedia の {{interwiki("wikipedia", "Color theory")}}</dt>
 <dd>ウィキペディアの色理論に関する記事で、技術的観点の素晴らしい情報がたくさんあります。色選びの参考にはなりませんが、有用な情報が満載です。</dd>
</dl>

<h3 id="Color_and_accessibility" name="Color_and_accessibility">色とアクセシビリティ</h3>

<p>色が {{Glossary("accessibility", "アクセシビリティ")}} の問題となることがあります。色の不適切及び不注意な使用は、利用者の何割かが適切に使用できないウェブサイトやアプリになり、トラフィックの損失、ビジネスの損失、さらには広報の問題につながる可能性があります。そのため、色の使い方を慎重に検討することは重要です。</p>

<p>少なくとも {{interwiki("wikipedia", "色覚異常")}} についての基礎的な研究はしておいた方が良いでしょう。いくつかの種類がありますが、最も一般的なのは赤緑色覚異常で、赤と緑の色を区別しづらいものです。他にも、特定の色の違いを見分けることができないものから、全く色が見えないものまであります。</p>

<div class="note">
<p>最も重要なルール: 色だけで情報を知る手段を使ってはいけません。例えば、ある操作の成功や失敗を示すために、図形の色を白から緑、失敗を示すために赤に変えた場合、赤緑の色盲のユーザーはサイトを適切に利用できません。代わりにテキストと色を併用すれば、誰もが起こったことを理解できるようになるでしょう。</p>
</div>

<p>色覚異常については、以下の記事をご覧ください。</p>

<ul>
 <li><a href="https://medlineplus.gov/colorblindness.html">Medline Plus: Color Blindness</a> (<span class="module__title__link">アメリカ国立衛生研究所)</span></li>
 <li><a href="https://www.aao.org/eye-health/diseases/what-is-color-blindness">American Academy of Ophthamology: What Is Color Blindness?</a></li>
 <li><a href="https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html">Color Blindness &amp; Web Design</a> (Usability.gov: アメリカ保健福祉省)</li>
</ul>

<h3 id="Palette_design_example" name="Palette_design_example">パレットデザインの例</h3>

<p>サイトの適切なカラーパレットを選ぶにあたって、簡単な例を考えてみましょう。火星で開かれる新しいゲームのウェブサイトを構築すると想像してみてください。そこで、<a href="https://www.google.com/search?q=Mars&amp;tbm=isch">火星の写真を Google 検索</a>してみましょう。火星のカラーリングの良い例がたくさんあるはずです。私たちは慎重にモックアップや映画の写真を避け、火星で撮影された写真を使うことにしました。そして、このゲームは惑星の表面で行われるため、人類が過去数十年にわたって表面に滞在させている火星着陸機の一つが撮影した写真を使用することにしました。カラーピッカーツールを使って、この選んだ色のサンプルを採ります。</p>

<p>スポイトツールを使って好みの色を特定し、件の色は <code>#D79C7A</code> であることを確認しました。これは火星表面のステレオタイプな錆びたオレンジレッドの色です。</p>

<p>ベースカラーを選択したら、パレットを構築する必要があります。そこで、<a href="http://www.paletton.com/">Paletton </a>を使って他の色を考えてみることにしました。Plaetton を開くと、以下のような画面が出てきます。</p>

<p><img alt="Right after loading Paletton." src="https://mdn.mozillademos.org/files/15451/paletton1.png" style="height: 361px; width: 600px;"></p>

<p>次に、ツールの左下隅にある "Base RGB" の欄に色の 16 進数コード (<code>D79C7A</code>) を入力します。</p>

<p><img alt="After entering base color" src="https://mdn.mozillademos.org/files/15453/paletton2.png" style="height: 361px; width: 600px;"></p>

<p>火星の写真から選んだ色をベースにした単色パレットが出てきました。何らかの理由で関連色がたくさん必要な場合は、そういった色も良い色になる可能性はあります。しかし、私たちが本当に欲しいのはアクセントカラー、ベースカラーに添えて目立つ色です。これを見つけるには、パレットの種類の選択メニューにある "add complementary" のトグル (現在は "Monochromatic") をクリックします。右下のアクセントカラーをクリックすると、補色が <code>#508D7C</code> であることが計算されます。</p>

<p><img alt="Now with complementary colors included." src="https://mdn.mozillademos.org/files/15455/paletton3.png" style="height: 361px; width: 600px;"></p>

<p>提案された色が気に入らない場合は、配色を変更して、もっと良さそうな色を確かめることができます。例えば、提案の緑青色が気に入らない場合、トライアド配色のアイコンをクリックすれば以下のように表示されます。</p>

<p><img alt="Triad color scheme selected" src="https://mdn.mozillademos.org/files/15457/paletton4.png" style="height: 361px; width: 600px;"></p>

<p>右上のあの灰色っぽい青はなかなか良さそうですね。クリックすると、<code>#556E8D</code> でした。これをアクセントカラーとして、見出しやタブの強調表示のようにものを目立たせる目的で控えめに使用します。</p>

<p><img alt="Triad color scheme selected" src="https://mdn.mozillademos.org/files/15459/paletton-color-detail.png" style="height: 370px; width: 526px;"></p>

<p>これで、ベースカラーとアクセントカラーができました。さらに、グラデーションなどが必要な場合に備えて、それぞれの色の補色をいくつか用意します。これらの色を後から利用できるように、何らかの形式で出力しておきます。</p>

<p>これらの色を決めてなお、適切な中性的カラーも選択する必要があります。一般的なデザインでは、テキストが鮮明で読みやすい十分なコントラストがありつつ、目に厳しいほどのコントラストではないというスイートスポットを見つけようとします。どちらかの方に行き過ぎてしまいがちなので、色を選んで使用例に着手したら、必ずフィードバックをもらうようにしましょう。コントラストが低すぎるとテキストが背景に洗い流されて読めなくなりがちです。またコントラストが高すぎると、ユーザーはサイトを見ているだけで、見栄えが悪く不愉快に感じるでしょう。</p>

<h3 id="色、背景、コントラスト、印刷">色、背景、コントラスト、印刷</h3>

<p>画面上では良いように見えるものが、紙の上では全く違って見えるかもしれません。さらに、往々にしてインクは高価なものです。ユーザーがページを印刷している場合、重要なのはテキストであるにも関わらず、背景すべてが貴重なインクを使い切るわけにはいきません。ほとんどのブラウザはデフォルトで、ドキュメント印刷時に背景画像を除きます。</p>

<p>背景色や画像が慎重に選択されている場合や、背景がコンテンツの有用性に決定的な影響を与える場合、CSS {{cssxref("color-adjust")}} プロパティを使用して、コンテンツの外観を調整しないようにブラウザに指示できます。</p>

<p><code>color-adjust</code>、<code>economy</code> のデフォルト値は、ブラウザが必要に応じて外観を変更することができるかどうかを示します。ブラウザはドキュメントを描画する出力デバイスの種類に応じて、コンテンツの読みやすさや印刷の経済効率を最適化しようとします。</p>

<p><code>color-adjust</code> を <code>exact</code> にすると、色や画像があった場合でも、それを使用することで適した動作の要素になる特別なデザインであることを、ブラウザに伝えられます。これを設定すると、ブラウザは要素の外観に手を加えることなく、CSS で指定された通りに要素を描画します。</p>

<div class="note">
<p><strong>注意:</strong> <code>color-adjust: exact</code> を与えても CSS がその通りに使用されるとは限りません。ブラウザ出力を変更するユーザー設定 (印刷ダイアログボックスの「背景をプリントしない」チェックボックスなど) が提供されている場合、<code>color-adjust</code> の値はそれによって上書きされます。</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics">グラフィックの描画</a></li>
 <li><a href="/ja/docs/Web/Guide/Graphics">ウェブのグラフィック</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Colors/Color_picker_tool">MDN のカラーピッカーツール</a></li>
</ul>
