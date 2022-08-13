---
title: マルチメディアとその埋め込み方
slug: Learn/HTML/Multimedia_and_embedding
tags:
  - Assessment
  - Audio
  - Beginner
  - CodingScripting
  - Flash
  - Guide
  - HTML
  - Images
  - Landing
  - Learn
  - SVG
  - Video
  - iframes
  - imagemaps
  - responsive
  - イメージマップ
  - ガイド
  - フラッシュ
  - レスポンシブ
  - 初心者
  - 動画
  - 学習
  - 画像
  - 着地ページ
  - 評価試験
  - 音声
translation_of: Learn/HTML/Multimedia_and_embedding
---
<p>{{LearnSidebar}}</p>

<p class="summary">このコースではここまで多くのテキストを見てきましたが、ただテキストだけのWebでは面白くありません。Web が生き生きとして、面白いコンテンツがどんどんあふれるようにする方法を見ていきましょう！ このモジュールでは、HTMLをどのように用いれば、あなたの Web ページにマルチメディアを含めることができるかについて学びます。 また、画像を挿入するためのさまざまな方法や、動画・音声、さらには他の Web ページ全体を挿入する方法についても触れます。</p>

<h2 id="Prerequisites" name="Prerequisites">前提条件</h2>

<p>このモジュールを開始する前に、<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML入門</a>で述べられてきた、HTML の基本についてのある程度の知識が求められます。 このモジュール (や似たようなもの) を一通り終えていない場合、まずそちらを一通り終えてから戻ってきてください！</p>

<div class="note">
<p><strong>メモ</strong>: 自分自身のファイルを作れないコンピューター/タブレット/その他デバイスで作業している場合、<a href="https://jsbin.com/">JSBin</a> や <a href="https://thimble.mozilla.org/">Thimble</a> のようなオンラインコーティングプログラムにてコードの実例 (の大半) を試すことができます。</p>
</div>

<h2 id="Guides" name="Guides">ガイド</h2>

<p>このモジュールには下記の記事が含まれていて、そこではマルチメディアをWeb ページに埋め込むための基礎を学びます。</p>

<dl>
 <dt><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">HTMLの画像</a></dt>
 <dd>考慮すべき他のタイプのマルチメディアもありますが、単純な画像をWeb ページに埋め込むために使用される、慎ましい {{htmlelement("img")}} 要素から始めるのが理にかなっています。 この記事では、基本的な使い方を含め、 {{htmlelement("figure")}} を使ったキャプションによる注釈付け、CSS背景画像との関連の仕方など、画像をより深く使用する方法を見ていきます。</dd>
 <dt><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">動画と音声のコンテンツ</a></dt>
 <dd>次に、HTML5の {{htmlelement("video")}} 要素と {{htmlelement("audio")}} 要素を使用して、動画や音声をページに埋め込む方法を見ていきます。 それには、基本的な使い方を含め、さまざまなファイルフォーマットへのアクセスをさまざまなブラウザーに提供したり、キャプションや字幕の追加、古いブラウザーへの代替の追加などが含まれています。</dd>
 <dt><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies">&lt;object&gt; から &lt;iframe&gt; へ — その他の埋め込み技術</a></dt>
 <dd>この時点では、{{htmlelement("iframe")}} 、{{htmlelement("embed")}}、{{htmlelement("object")}} 要素のような幅広い種類のコンテンツをWeb ページに埋め込むことができる要素をいくつか見ていきたいと考えています。 <code>&lt;iframe&gt;</code> は他のWeb ページを埋め込むためのもので、他の2つは PDF、SVG、さらには Flash を埋め込むことができます — 出口にある技術ですが、まだ半定期的に見かけるでしょう。</dd>
 <dt><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web">Webにベクターグラフィックスを追加する</a></dt>
 <dd>ベクターグラフィックスは、特定の状況で非常に便利です。 PNG や JPG のような通常のフォーマットとは異なり、ズームインしてもゆがんだりピクセル化したりしません — 縮尺を変えても滑らかな状態を保つことができます。 この記事では、ベクターグラフィックスの概要と、ポピュラーな {{glossary("SVG")}} フォーマットをWeb ページに含める方法を紹介します。</dd>
 <dt><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">レスポンシブ画像</a></dt>
 <dd>携帯電話からデスクトップコンピュータに至るまで、Webを閲覧できるようになったさまざまな種類のデバイスで、現代のWeb世界を習得するために不可欠な概念は、レスポンシブデザインです。 これは、さまざまな画面サイズ、解像度などに合わせて機能を自動的に変更できるWeb ページの作成を指します。 これについては、後ほどCSSモジュールで詳しく見ていく予定ですが、ここでは、HTMLで {{htmlelement("picture")}} 要素を含むレスポンシブ画像を作成するためのツールを見ていきます。</dd>
</dl>

<h2 id="Assessments" name="Assessments">評価試験</h2>

<p>上記のガイドで説明されている HTML の基本について、以下の評価試験を行います。</p>

<dl>
 <dt><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page">Mozillaのスプラッシュページ</a></dt>
 <dd>今回の評価試験では、このモジュールの記事で説明したいくつかの技術の知識をテストするために、Mozillaのすべてついてのファンキーなスプラッシュページに、いくつかの画像と動画を追加してもらいます！</dd>
</dl>

<h2 id="See_also" name="See_also">関連情報</h2>

<dl>
 <dt><a href="/ja/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image">画像の上にヒットマップを追加する</a></dt>
 <dd>イメージマップは、画像のさまざまな部分を別の場所にリンクするためのメカニズムを提供します(あなたがクリックしたそれぞれの国についての詳細情報にリンクしている地図を考えてみてください)。 この手法は時には便利なことがあります。</dd>
 <dt><a href="https://teach.mozilla.org/activities/web-lit-basics-two/">Webリテラシーの基礎 2</a> (英語)</dt>
 <dd>優れたMozillaの基礎コースで、マルチメディアと埋め込みモジュールで説明されているスキルのいくつかを調べてテストします。 Web ページの作成、アクセシビリティの設計、リソースの共有、オンラインメディアの使用、オープンな作業 (コンテンツは自由に利用可能で、他の人が共有できることを意味します) の基礎を深く理解してください。</dd>
</dl>
