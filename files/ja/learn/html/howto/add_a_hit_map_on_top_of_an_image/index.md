---
title: 画像にヒットマップを追加する
slug: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
tags:
  - Graphics
  - Guide
  - HTML
  - Intermediate
  - Navigation
translation_of: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
---
<div class="summary">
<p>ここでは、イメージマップを設定する方法と、最初に検討すべきいくつかの欠点を説明します。</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td><a href="/ja/docs/Learn/Getting_started_with_the_web">基本的な HTML 文書の作成方法</a>と、<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#How_do_we_put_an_image_on_a_webpage">アクセス可能な画像をウェブページに追加する方法</a>について、理解している必要があります。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>1つの画像の異なる領域を異なるページにリンクする方法を学びます。</td>
  </tr>
 </tbody>
</table>

<div class="warning">
<p>この記事では、クライアント側のイメージマップについてのみ説明します。 ユーザーにマウスが必要なサーバー側のイメージマップは使用しないでください。</p>
</div>

<h2 id="Image_maps_and_their_drawbacks" name="Image_maps_and_their_drawbacks">イメージマップとその欠点</h2>

<p>{{htmlelement('a')}} 内に画像をネストすると、画像全体が1つのウェブページにリンクします。 一方、イメージマップは、それぞれが異なるリソースにリンクするいくつかのアクティブな領域（「ホットスポット」と呼ばれます）を含みます。</p>

<p>以前は、イメージマップは一般的なナビゲーションデバイスでしたが、そのパフォーマンスとアクセシビリティの影響を徹底的に検討することが重要です。</p>

<p>いくつかの理由から<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">テキストリンク</a>（CSS でスタイル付けされたもの）がイメージマップよりも好ましい。 テキストリンクは軽量でメンテナンス可能で、多くの場合 SEO に優しく、アクセシビリティのニーズをサポートしています（スクリーンリーダー、テキストのみのブラウザ、翻訳サービスなど）。</p>

<h2 id="How_to_insert_an_image_map_properly" name="How_to_insert_an_image_map_properly">イメージマップを正しく挿入する方法</h2>

<h3 id="Step_1_The_image" name="Step_1_The_image">ステップ 1: 画像</h3>

<p>どんな画像でも受け入れられるわけではありません。</p>

<ul>
 <li>画像は、人々が画像のリンクをたどったときに何が起こるかを明確にする必要があります。 <code>alt</code> テキストはもちろん必須ですが、多くの人々は決してそれを見ません。</li>
 <li>画像には、ホットスポットの始まりと終わりを明示する必要があります。</li>
 <li>ホットスポットは、どのビューポートサイズでも快適にタップするのに十分な大きさでなければなりません。 どれくらいの大きさか？ <a href="http://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/">72 × 72 CSS ピクセルは良好な最小値</a>（英語）で、タッチターゲット間の間隔に余裕もあります。 <a href="http://www.goethe-verlag.com/book2/">50languages.com</a> の世界地図（執筆時点）は、問題を完全に示しています。 アルバニアやエストニアよりもロシアや北米をタップする方がはるかに簡単です。</li>
</ul>

<p>{{htmlelement("img")}} 要素と {{htmlattrxref("alt",'img')}} テキストを使用して、<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#How_do_we_put_an_image_on_a_webpage">常に同じ方法</a>で画像を挿入します。 画像がナビゲーションデバイスとしてのみ存在する場合、後で {{htmlelement('area')}} 要素に適切な {{htmlattrxref("alt",'area')}} テキストを指定すると <code>alt=""</code> と書くことができます。</p>

<p>特殊な {{htmlattrxref("usemap","img")}} 属性が必要です。 イメージマップには、スペースを含まない一意の名前を考えてください。 次に、<code>usemap</code> 属性の値としてその名前（# が先行する）を割り当てます。</p>

<pre class="brush: html">&lt;img
  src="image-map.png"
  alt=""
  usemap="#example-map-1" /&gt;</pre>

<h3 id="Step_2_Activate_your_hotspots" name="Step_2_Activate_your_hotspots">ステップ 2: ホットスポットを有効にする</h3>

<p>このステップでは、すべてのコードを {{htmlelement('map')}} 要素内に配置します。 <code>&lt;map&gt;</code> には、上の <code>usemap</code> 属性で使用したのと同じマップ名の {{htmlattrxref("name","map")}} 属性だけが必要です。</p>

<pre class="brush: html">&lt;map name="example-map-1"&gt;

&lt;/map&gt;</pre>

<p><code>&lt;map&gt;</code> 要素の中に {{htmlelement('area')}} 要素が必要です。 <code>&lt;area&gt;</code> 要素はそれぞれが1つのホットスポットに対応します。 キーボードでのナビゲーションを直観的に保つには、<code>&lt;area&gt;</code> 要素のソースでの順序がホットスポットの視覚的順序に対応していることを確認してください。</p>

<p><code>&lt;area&gt;</code> 要素は空要素ですが、次の4つの属性が必要です。</p>

<dl>
 <dt>{{htmlattrxref('shape','area')}}</dt>
 <dt>{{htmlattrxref('coords','area')}}</dt>
 <dd>
 <p><code>shape</code> は、<code>circle</code>（円）、<code>rect</code>（四角形）、<code>poly</code>（ポリゴン）、<code>default</code>（デフォルト）の4つの値のいずれかをとります。 （<code>default</code> の <code>&lt;area&gt;</code> は画像全体から、あなたが定義した他のホットスポットを除いたものです。） 選択した <code>shape</code> によって、<code>coords</code> で指定する必要がある座標情報が決まります。</p>

 <ul>
  <li>円の場合は、中心の x 座標と y 座標を指定し、その後に半径の長さを指定します。</li>
  <li>四角形の場合は、左上角と右下角の x/y 座標を指定します。</li>
  <li>ポリゴンの場合は、各角の x/y 座標を指定します（したがって、少なくとも6つの値）。</li>
 </ul>

 <p>座標は CSS ピクセルで与えます。</p>

 <p>重なり合っている場合、ソースでの順序で選ばれます。</p>
 </dd>
 <dt>{{htmlattrxref('href','area')}}</dt>
 <dd>リンク先のリソースの URL。 現在の領域をどこにもリンクさせたくない場合は、この属性を空白のままにしておくことができます（空白の円を描いている場合など）。</dd>
 <dt>{{htmlattrxref('alt','area')}}</dt>
 <dd>
 <p>リンクがどこにあるのか、それが何をするのかを人に伝える必須の属性。 <code>alt</code> テキストは、画像が利用できない場合にのみ表示されます。 <a href="/ja/docs/Learn/Accessibility/HTML#Text_alternatives">アクセス可能なリンクテキストを書くためのガイドライン</a>を参照してください。</p>

 <p><code>href</code> 属性が空白で、画像全体に既に <code>alt</code> 属性がある場合、<code>alt=""</code> と書くことができます。</p>
 </dd>
</dl>

<pre class="brush: html">&lt;map name="example-map-1"&gt;
  &lt;area shape="circle" coords="200,250,25"
    href="page-2.html" alt="circle example" /&gt;


  &lt;area shape="rect" coords="10, 5, 20, 15"
    href="page-3.html" alt="rectangle example" /&gt;

&lt;/map&gt;</pre>

<h3 id="Step_3_Make_sure_it_works_for_everybody" name="Step_3_Make_sure_it_works_for_everybody">ステップ 3: 誰にとっても効果があることを確認する</h3>

<p>多くのブラウザやデバイスでイメージマップを厳密にテストするまで、あなたは完了していません。 キーボードだけでリンクをたどってみてください。 画像をオフにしてみてください。</p>

<p>イメージマップが約 240 px より広い場合は、ウェブサイトをレスポンシブにするためにさらに調整する必要があります。 座標が同じままでは、もはや画像と一致しないので、小さな画面の場合は画像のサイズを変更するだけでは不十分です。</p>

<p>イメージマップを使用する必要がある場合は、Matt Stow の <a href="https://github.com/stowball/jQuery-rwdImageMaps">jQuery プラグイン</a>（英語）を調べることができます。 また、Dudley Storey は、<a href="http://thenewcode.com/696/Using-SVG-as-an-Alternative-To-Imagemaps">イメージマップエフェクトとして SVG を使用する方法</a>（英語）と、その後にビットマップ画像用に <a href="http://thenewcode.com/760/Create-A-Responsive-Imagemap-With-SVG">SVG とラスターを組み合わせる方法</a>（英語）を示しています。</p>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<ul>
 <li>{{htmlelement("img")}}</li>
 <li>{{htmlelement("map")}}</li>
 <li>{{htmlelement("area")}}</li>
 <li><a href="http://www.maschek.hu/imagemap/imgmap">オンラインイメージマップエディター</a>（英語）</li>
 <li><a href="http://blog.goolara.com/2014/06/05/image-maps-revisited/">Advice on handling email clients</a>（リンク切れ）</li>
</ul>
