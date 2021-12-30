---
title: 画像からのシェイプの作成
slug: Web/CSS/CSS_Shapes/Shapes_From_Images
tags:
  - CSS シェイプ
translation_of: Web/CSS/CSS_Shapes/Shapes_From_Images
---
<div>{{CSSRef}}</div>

<p class="summary">このガイドでは、アルファチャンネルを含む画像ファイルから、または CSS グラデーションから、シェイプを作成する方法を見ていきます。これはシェイプを作成するためのとても柔軟な方法です。 CSS で複雑なポリゴンを持つパスを描画するのではなく、グラフィックプログラムでシェイプを作成し、しきい値よりも透明度の低いピクセルによって作成されたパスを使用することができます。</p>

<h2 id="A_simple_shape_from_an_image" name="A_simple_shape_from_an_image">画像をもとにした単純なシェイプ</h2>

<p>シェイプの画像を使用するには、完全に不透明ではない領域があるアルファチャンネルが必要です。 {{cssxref("shape-image-threshold")}} プロパティは、この不透明度のしきい値を設定するために使用されます。この値よりも透明度の低いピクセルは、シェイプの範囲を計算するために使用されます。</p>

<p>簡単な例として、赤い塗りつぶしの星形の領域と、完全に透明な領域のある画像があります。 {{cssxref("shape-outside")}} プロパティの値として、画像ファイルへのパスを使用します。コンテンツは星形の図形で折り返されるようになりました。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/simple-example.html", '100%', 800)}}</p>

<p>シェイプからテキストを離すために {{cssxref("shape-margin")}} を使用することができ、作成されたシェイプの周囲と、テキストとの間のマージンを指定します。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/margin.html", '100%', 800)}}</p>

<h2 id="CORS_compatibility" name="CORS_compatibility">CORS の互換性</h2>

<p>画像からシェイプを作成する際には、使用する画像が <a href="/ja/docs/Web/HTTP/CORS">CORS 互換</a>である必要があります。サイトと同じドメインにホスティングされている画像は動作しますが、画像が CDN などの別のドメインでホスティングされている場合は、正しいヘッダーを送信してシェイプで利用できるようにする必要があります。この CORS 互換画像の要件のため、ローカルのウェブサーバーを使用せずにローカルでファイルをプレビューすると、シェイプは機能しません。</p>

<h3 id="Is_it_a_CORS_issue" name="Is_it_a_CORS_issue">CORS の問題かどうか</h3>

<p>開発者ツールは CORS エラーを特定するのに役立ちます。 Chrome では、コンソールから CORS の問題が通知されます。 Firefox では、プロパティを調べると、イメージを読み込めないという警告が表示されます。これは、画像が CORS のためにシェイプのソースとして使用できないという事実を警告するはずです。</p>

<h2 id="Setting_a_threshold" name="Setting_a_threshold">しきい値の設定</h2>

<p>{{cssxref("shape-image-threshold")}} プロパティを使用すると、完全な透明ではない領域からシェイプを作成することができます。 <code>shape-image-threshold</code> の値が <code>0.0</code> (初期値) の場合、領域は完全に透明になります。値が <code>1.0</code> の場合は完全に不透明です。中間の値は、半透明領域を定義領域として設定できることを意味します。</p>

<p>次の例では、最初の例と同様の画像を使用していますが、この画像では、星の背景が完全に透明ではなく、グラフィックプログラムで20％の不透明度が作成されています。 <code>shape-image-threshold</code> を <code>0.3</code> に設定すると図形が表示され、 <code>0.2</code> より小さい値に設定すると、図形がなくなります。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/threshold.html", '100%', 800)}}</p>

<h2 id="Using_images_with_generated_content" name="Using_images_with_generated_content">生成されたコンテンツの画像を使用</h2>

<p>上記の例では、画像を {{cssxref("shape-outside")}} の値として使用し、ページにも追加しました。多くのデモでは、従っているシェイプを見せるためにこれを行っていますが、 <code>shape-outside</code> プロパティはページに表示される画像とは関係がないため、画像を使用してシェイプを作成するために、画像を表示する必要はありません。</p>

<p>何かを浮動状態にする必要がありますが、以下の例のように生成されたコンテンツを使用することもできます。ここでは生成されたコンテンツを浮動状態にし、大きな星形の画像を使ってコンテンツを整形していますが、ページ上には何も画像を表示していません。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/generated-content.html", '100%', 800)}}</p>

<h2 id="Creating_shapes_using_a_gradient" name="Creating_shapes_using_a_gradient">グラデーションを用いたシェイプの作成</h2>

<p><a href="/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients">CSS グラデーション</a>は画像として扱われるので、透過や半透過の領域をグラデーションの一部として持つことで、グラデーションを使ってシェイプを作ることができます。</p>

<p>次の例では、直線グラデーションの背景画像によって与えられた生成された浮動状態のコンテンツを使用しています。 {{cssxref("shape-outside")}} の値と同じ値を使用しています。直線グラデーションは紫色から透明に変化しますので、 {{cssxref("shape-image-threshold")}} の値を変更すると、どれくらいのピクセルがシェイプを作成するのに必要かを決めることができます。以下の例で値を操作することで、その値に応じてシェイプを横切る対角線がどれだけ移動するかを確認することができます。</p>

<p>背景画像を完全に削除してみることもでき、そうすればグラデーションは純粋にシェイプを作成するために使用され、ページには全く表示されません。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/gradient.html", '100%', 800)}}</p>

<p>次の例では、楕円形の放射状のグラデーションを使用し、グラデーションの透過部分を再利用してシェイプを作成しています。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/radial-gradient.html", '100%', 800)}}</p>

<p>これらのライブサンプルで直接実験して、グラデーションを変更するとシェイプのパスがどのように変化するかを確認することができます。</p>
