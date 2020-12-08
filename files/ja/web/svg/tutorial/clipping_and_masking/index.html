---
title: クリッピングとマスキング
slug: Web/SVG/Tutorial/Clipping_and_masking
tags:
  - SVG
  - 'SVG:Tutorial'
translation_of: Web/SVG/Tutorial/Clipping_and_masking
---
<div>
  {{PreviousNext("SVG/Tutorial/Basic_Transformations", "SVG/Tutorial/Other_content_in_SVG")}}</div>
<p>苦労して作成したオブジェクトの一部を消去することは、一見矛盾しているように見えます。ところが SVG で半円を作成しようとすると、以下のプロパティを使うことにすぐ気がつくでしょう。</p>
<p><strong>クリッピング</strong>はある要素のうち、他の場所で定義された一部分を取り除くことを指します。この場合は半透明効果をかけることはできず、完全に表示するか全く表示しないかの扱いになります。</p>
<p><strong>マスキング</strong>は半透明効果やマスクの濃淡値を考慮することで、ソフトエッジ効果をかけることができます。</p>
<h2 id="Creating_clips" name="Creating_clips">クリップの作成</h2>
<p><code>circle</code> 要素をもとにして、先に述べた半円を作成しましょう:</p>
<pre class="brush:xml">&lt;clipPath id="cut-off-bottom"&gt;
  &lt;rect x="0" y="0" width="200" height="100" /&gt;
&lt;/clipPath&gt;

&lt;circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" /&gt;
</pre>
<p>(100,100) を中心にした半径 100 の円を描画します。<code>clip-path</code> 属性は、<code>rect</code> 要素を 1 つ含む <code>{{SVGElement("clipPath")}}</code> 要素を参照しています。この長方形は、キャンバスの上半分に黒色で描画されるものです。なお補足として、<code>clipPath</code> 要素はたいてい <code>defs</code> セクションに置かれます。</p>
<p>ところが、<code>rect</code> 要素は描画されません。描画されない代わりにそのピクセルデータは、円の中で最終的にレンダリングするピクセルを決定することに用いられます。長方形は円の上半分だけを覆っているため、円の下半分は消滅します。</p>
<p><img alt="clipdemo.png" class="default" src="/@api/deki/files/4933/=clipdemo.png"></p>
<p>これで、path 要素の円弧を扱う必要なしに半円を作りました。クリッピング用に <code>clipPath</code> の内部にあるすべてのパスが、そのストロークやトランスフォームと併せて調査および評価されます。そして適用先のオブジェクトのうち、<code>clipPath</code> の内容物で決められた透過領域にかかる部分は描画されません。色や不透明度などは、図形の一部を完全に消滅させない限り効果がありません。</p>
<h2 id="Masking" name="Masking">マスキング</h2>
<p>マスキングの効果は、グラデーションと共に適用するともっとも印象的です。要素をフェードアウトしたい場合は、マスクを用いることですぐにその効果を得ることができます。</p>
<pre class="brush:xml">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;defs&gt;
    &lt;linearGradient id="Gradient"&gt;
      &lt;stop offset="0" stop-color="white" stop-opacity="0" /&gt;
      &lt;stop offset="1" stop-color="white" stop-opacity="1" /&gt;
    &lt;/linearGradient&gt;
    &lt;mask id="Mask"&gt;
      &lt;rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  /&gt;
    &lt;/mask&gt;
  &lt;/defs&gt;

  &lt;rect x="0" y="0" width="200" height="200" fill="green" /&gt;
  &lt;rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" /&gt;
&lt;/svg&gt;
</pre>
<p>下層のレイヤーに緑色で塗りつぶした <code>rect</code> 、上層に赤色で塗りつぶした <code>rect</code> があります。また後者には、<code>mask</code> 要素を指し示す <code>mask</code> 属性があります。mask 要素の内容物は <code>rect</code> 要素が 1 つあり、これは透明から白色へのグラデーションで塗りつぶしています。この結果、赤色の長方形のピクセルは mask の内容物のアルファ値 (透明度) を継承して、最終的に緑色から赤色へのグラデーションができます:</p>
<p><img alt="maskdemo.png" class="default" src="/@api/deki/files/4945/=maskdemo.png"></p>
<h2 id="Transparency_with_opacity" name="Transparency_with_opacity"><code>opacity</code> による透明度</h2>
<p>要素全体の透明度を設定することができます。それには <code>opacity</code> 属性を用います:</p>
<pre>&lt;rect x="0" y="0" width="100" height="100" opacity=".5" /&gt;
</pre>
<p>上記の長方形は、半透明で描画します。fill および stroke について分けられた 2 つの属性 <code>fill-opacity</code> と <code>stroke-opacity</code> があり、それぞれのプロパティの不透明度を分けて制御します。なお、ストロークは塗りつぶしの上層に描画することに注意してください。このために塗りつぶしもある要素でストロークの不透明度を設定した場合は、ストロークの半分で塗りつぶしが透けて見え、また同時に残り半分で背景が透けて見えます:</p>
<pre class="brush:xml">&lt;rect x="0" y="0" width="200" height="200" fill="blue" /&gt;
&lt;circle cx="100" cy="100" r="50" stroke="yellow" stroke-width="40" stroke-opacity=".5" fill="red" /&gt;
</pre>
<p><img alt="opacitydemo.png" class="internal default" src="/@api/deki/files/4942/=opacitydemo.png"></p>
<p>この例では、青い背景の上に赤い円があります。黄色のストロークに 50% の不透明度を設定しており、事実上 2 色のストロークになります。</p>
<h2 id="Using_well-known_CSS_techniques" name="Using_well-known_CSS_techniques">周知の CSS 技術の利用</h2>
<p>Web 開発者が持つツールの中でもっとも強力なもののひとつが、<code>display: none</code> です。それゆえ、CSS2 で定義された <code>visibility</code> や <code>clip</code> と併せて、この CSS プロパティも SVG に取り込むことが決定した点に若干の驚きがあります。過去に設定した <code>display: none</code> を元に戻すためには、すべての SVG 要素の初期値が <code>inline</code> であると知っておくことが重要です。</p>
<div>
  {{PreviousNext("SVG/Tutorial/Basic_Transformations", "SVG/Tutorial/Other_content_in_SVG")}}</div>
