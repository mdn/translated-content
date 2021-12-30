---
title: CSS シェイプの概要
slug: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
tags:
  - CSS
  - CSS シェイプ
  - シェイプ
  - 概要
translation_of: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
---
<div>{{CSSRef}}</div>

<p class="summary"><a href="https://www.w3.org/TR/css-shapes/">CSS シェイプレベル１仕様書</a>は、 CSS における幾何学的な図形 (シェイプ) を記述しています。仕様書のレベル１は、浮動状態のアイテムに適用するように設計されています。この記事では、シェイプを使用して何ができるのかの概要を紹介します。</p>

<p>例えば、アイテムを左にフロートした状態にすると、テキストがアイテムの右と下に矩形に回り込みます。円形のシェイプを適用すると、テキストは円形の線に沿って回り込みます。</p>

<p>これらのシェイプを作成する方法はいくつもあり、これらのガイドで CSS シェイプの動作や、利用しやすい方法を考えます。</p>

<h2 id="What_does_the_specification_define" name="What_does_the_specification_define">仕様書は何を定義しているのか</h2>

<p>仕様書では、三つの新しいプロパティを定義しています。</p>

<ul>
 <li>{{cssxref("shape-outside")}} — 基本的なシェイプを定義することができます</li>
 <li>{{cssxref("shape-image-threshold")}} — 透過性のしきい値を設定します。画像がシェイプの定義に使用される場合、画像の中で透過度がしきい値以上の部分のみが、シェイプとして定義されます。他の部分は無視されます。</li>
 <li>{{cssxref("shape-margin")}} — 定義されたシェイプの周囲のマージンを設定します。</li>
</ul>

<h2 id="Defining_basic_shapes" name="Defining_basic_shapes">基本シェイプの定義</h2>

<p><code>shape-outside</code> プロパティで、シェイプを定義することができます。これは様々な値を取り、 {{cssxref("&lt;basic-shape&gt;")}} データ型で定義され、すべてが異なるシェイプを定義します。とても簡単なケースから見てみましょう。</p>

<p>次の例では、左に浮動状態にした画像があります。それから <code>shape-outside</code> プロパティを <code>circle(50%)</code> の値で適用しています。その結果として、コンテンツは画像のボックスで形成された矩形ではなく、丸い形状の周りのカーブになります。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}</p>

<p>仕様書のこのレベルでは、要素は <code>&lt;basic-shape&gt;</code> を適用するために浮動状態でなければなりません。これは多くの場合、単純な方法で代替されるという副作用があります。シェイプに対応したブラウザーがない場合、ユーザーは以前のように矩形のボックスの縁をコンテンツが回り込むように見えるでしょう。シェイプの対応がある場合は、見栄えが改善されます。</p>

<h3 id="Basic_Shapes" name="Basic_Shapes">基本的なシェイプ</h3>

<p><code>circle(50%)</code> の値は基本的なシェイプの例の一つです。仕様書では次のように、４つの <code>&lt;basic-shape&gt;</code> 値を定義しています。</p>

<ul>
 <li><code>inset()</code></li>
 <li><code>circle()</code></li>
 <li><code>ellipse()</code></li>
 <li><code>polygon()</code></li>
</ul>

<p><code>inset()</code> の値を使用すると、テキストが矩形のシェイプに回り込みますが、オフセット値を追加すると、周囲のコンテンツの行ボックスを通常よりもオブジェクトに引き寄せて配置することができます。</p>

<p>すでに <code>circle()</code> が円形のシェイプを作成するのを見てきました。 <code>ellipse()</code> は基本的なつぶれた円です。これらの単純なシェイプで対応できない場合は、 <code>polygon()</code> を作成して好きなだけ複雑なシェイプにすることができます。</p>

<p>この章の<a href="/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes">基本シェイプのガイド</a>で、利用できるそれぞれの基本シェイプとその作成方法を紹介します。</p>

<h3 id="Shapes_from_the_Box_Value" name="Shapes_from_the_Box_Value">ボックス値からのシェイプの作成</h3>

<p>シェイプはボックス値の周りに作成することができます。従って、次のボックスの上にシェイプを作成することができます。</p>

<ul>
 <li><code>border-box</code></li>
 <li><code>padding-box</code></li>
 <li><code>content-box</code></li>
 <li><code>margin-box</code></li>
</ul>

<p>次の例では、 <code>border-box</code> の値を他の取りうる値に変更して、シェイプがボックスに近づいたり離れたりする様子を確認することができます。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}</p>

<p>ボックス値についてより詳しく知るには、<a href="/ja/docs/Web/CSS/CSS_Shapes/Shapes_From_Box_Values">ボックス値からのシェイプの作成</a>を参照してください。</p>

<h3 id="Shapes_from_images" name="Shapes_from_images">画像からのシェイプの作成</h3>

<p>パスを作成するための面白い方法として、アルファチャネルを持つ画像を使用する方法があります。 — 文字列は画像の不透過な部分に回り込みます。これで画像の周りのコンテンツの回り込みの重ね合わせができたり、画像をページ上に表示させずに、純粋に注意深くポリゴンに変換することなく複雑なシェイプを作成する手段として利用したりすることができます。</p>

<p>なお、この方法で使用される画像は <a href="/ja/docs/Web/HTTP/CORS">CORS に互換性がある</a>必要があり、そうでなければ <code>shape-outside</code> は値として <code>none</code> が指定されたかのように動作し、シェイプを得ることはできません。</p>

<p>次の例では、完全に透過した領域がある画像を用い、この画像を <code>shape-outside</code> の URL 値として使用しています。シェイプは透過しない領域 — つまり、気球の画像の周りに作られます。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}</p>

<h4 id="shape-image-threshold" name="shape-image-threshold"><code>shape-image-threshold</code></h4>

<p><code>shape-image-threshold</code> プロパティは、シェイプに使われる画像の領域を定義する画像の透過性のしきい値を設定するために使用します。 <code>shape-image-threshold</code> が <code>0.0</code> (初期値) である場合、領域は完全に透過になります。値が <code>1.0</code> である場合は完全に不等価になります。この間の値ならば、半透過の領域をシェイプを定義する領域として設定することができます。</p>

<p>シェイプを定義する画像としてグラデーションを使用すると、しきい値が良く見えます。次の例では、しきい値を変更すると、選択した透明度のレベルに基づいてシェイプが変化するパスが変化します。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}</p>

<p>画像からのシェイプの作成については、このガイドの<a href="/ja/docs/Web/CSS/CSS_Shapes/Shapes_From_Images">画像からのシェイプ</a>でより深く見てみます。</p>

<h2 id="The_shape-margin_property" name="The_shape-margin_property"><code>shape-margin</code> プロパティ</h2>

<p>{{cssxref("shape-margin")}} プロパティは <code>shape-outside</code> にマージンを追加します。これにより、シェイプを囲むコンテンツの行ボックスがシェイプから引き離されるため、短くなります。</p>

<p>次の例では、基本的なシェイプに <code>shape-margin</code> を追加しました。マージンを変更して、初期値で設定されるシェイプの輪郭からテキストを引き離してみてください。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}</p>

<h2 id="Using_Generated_Content_as_the_floated_item" name="Using_Generated_Content_as_the_floated_item">作成されたコンテンツの浮動状態のアイテムとしての使用</h2>

<p>上記の例では、シェイプを定義するために画像や見える要素、つまりページ上にシェイプを見ることができる形でシェイプを定義してきました。しかし、単に矩形ではない見えない線に沿ってテキストを流したい場合があるでしょう。これをシェイプを使って行うことができますが、この場合も浮動状態のアイテムが必要で、これを非表示にすることができます。これは文書に空の {{htmlelement("div")}} 又は {{htmlelement("span")}} のような冗長な要素を挿入することで実現できますが、おすすめは生成コンテンツを使うことです。つまり、 CSS のスタイルを使用して実現することができます。</p>

<p>次の例では、高さと幅が150pxの要素を挿入するために生成コンテンツを利用します。それから基本シェイプやボックス値、画像のアルファチャネルを使用して、文字列を折り返すシェイプを作成します。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}</p>

<h2 id="Relationship_to_clip-path" name="Relationship_to_clip-path"><code>clip-path</code> との関係</h2>

<p>シェイプを作成するために使われる基本シェイプとボックス値は、 {{cssxref("clip-path")}} の値として使われているものと同じです。従って、画像を使ってシェイプを作成したい場合や、画像の一部を切り抜きたい場合は、同じ値を使用してください。</p>

<p>以下の画像は青い背景の四角い画像です。 <code>shape-outside: ellipse(40% 50%);</code> 及び <code>clip-path: ellipse(40% 50%);</code> を使用して、シェイプを定義するのに使われるのと同じ領域で切り取りを行うよう定義しました。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}</p>

<h2 id="Developer_Tools_for_Shapes" name="Developer_Tools_for_Shapes">シェイプのための開発者ツール</h2>

<p>ブラウザーが CSS シェイプに対応するのと同時に、 Firefox は開発ツール内で<a href="/ja/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">シェイプパスエディター</a>を公開しています。このツールはつまり、ページ内にあるシェイプを検査し、値の変更も行います。ポリゴンが正しくない場合は、シェイプエディターを使用して調整してから、新しい値をコピーして CSS に書き戻すことができます。</p>

<p>シェイプパスエディターは、 Firefox 60 で <code>clip-path</code> から生成されるシェイプと共に既定で有効になる予定です。 <code>shape-outside</code> で生成されるシェイプを使用することもできますが、 <code>layout.css.shape-outside.enabled</code> の設定を有効にした場合のみです。</p>

<h2 id="Future_CSS_Shapes_Features" name="Future_CSS_Shapes_Features">将来の CSS シェイプ機能</h2>

<p>当初のシェイプ仕様書には、要素内にシェイプを作成するための <code>shape-inside</code> プロパティが含まれていました。このプロパティは、浮動状態ではないシェイプを作成することができる機能と共に、仕様書の<a href="https://drafts.csswg.org/css-shapes-2/">レベル２</a>に移動されました。当初は <code>shape-inside</code> が仕様書のレベル１に含まれていたため、ウェブ上のチュートリアルには両方のプロパティの詳細が書かれているかもしれません。</p>
