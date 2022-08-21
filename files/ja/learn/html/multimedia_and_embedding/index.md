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
{{LearnSidebar}}

このコースではここまで多くのテキストを見てきましたが、ただテキストだけの Web では面白くありません。Web が生き生きとして、面白いコンテンツがどんどんあふれるようにする方法を見ていきましょう！ このモジュールでは、HTML をどのように用いれば、あなたの Web ページにマルチメディアを含めることができるかについて学びます。 また、画像を挿入するためのさまざまな方法や、動画・音声、さらには他の Web ページ全体を挿入する方法についても触れます。

## 前提条件

このモジュールを開始する前に、[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)で述べられてきた、HTML の基本についてのある程度の知識が求められます。 このモジュール (や似たようなもの) を一通り終えていない場合、まずそちらを一通り終えてから戻ってきてください！

> **Note:** 自分自身のファイルを作れないコンピューター/タブレット/その他デバイスで作業している場合、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) のようなオンラインコーティングプログラムにてコードの実例 (の大半) を試すことができます。

## ガイド

このモジュールには下記の記事が含まれていて、そこではマルチメディアを Web ページに埋め込むための基礎を学びます。

- [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : 考慮すべき他のタイプのマルチメディアもありますが、単純な画像を Web ページに埋め込むために使用される、慎ましい {{htmlelement("img")}} 要素から始めるのが理にかなっています。 この記事では、基本的な使い方を含め、 {{htmlelement("figure")}} を使ったキャプションによる注釈付け、CSS 背景画像との関連の仕方など、画像をより深く使用する方法を見ていきます。
- [動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : 次に、HTML5 の {{htmlelement("video")}} 要素と {{htmlelement("audio")}} 要素を使用して、動画や音声をページに埋め込む方法を見ていきます。 それには、基本的な使い方を含め、さまざまなファイルフォーマットへのアクセスをさまざまなブラウザーに提供したり、キャプションや字幕の追加、古いブラウザーへの代替の追加などが含まれています。
- [\<object> から \<iframe> へ — その他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : この時点では、{{htmlelement("iframe")}} 、{{htmlelement("embed")}}、{{htmlelement("object")}} 要素のような幅広い種類のコンテンツを Web ページに埋め込むことができる要素をいくつか見ていきたいと考えています。 `<iframe>` は他の Web ページを埋め込むためのもので、他の 2 つは PDF、SVG、さらには Flash を埋め込むことができます — 出口にある技術ですが、まだ半定期的に見かけるでしょう。
- [Web にベクターグラフィックスを追加する](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : ベクターグラフィックスは、特定の状況で非常に便利です。 PNG や JPG のような通常のフォーマットとは異なり、ズームインしてもゆがんだりピクセル化したりしません — 縮尺を変えても滑らかな状態を保つことができます。 この記事では、ベクターグラフィックスの概要と、ポピュラーな {{glossary("SVG")}} フォーマットを Web ページに含める方法を紹介します。
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : 携帯電話からデスクトップコンピュータに至るまで、Web を閲覧できるようになったさまざまな種類のデバイスで、現代の Web 世界を習得するために不可欠な概念は、レスポンシブデザインです。 これは、さまざまな画面サイズ、解像度などに合わせて機能を自動的に変更できる Web ページの作成を指します。 これについては、後ほど CSS モジュールで詳しく見ていく予定ですが、ここでは、HTML で {{htmlelement("picture")}} 要素を含むレスポンシブ画像を作成するためのツールを見ていきます。

## 評価試験

上記のガイドで説明されている HTML の基本について、以下の評価試験を行います。

- [Mozilla のスプラッシュページ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : 今回の評価試験では、このモジュールの記事で説明したいくつかの技術の知識をテストするために、Mozilla のすべてついてのファンキーなスプラッシュページに、いくつかの画像と動画を追加してもらいます！

## 関連情報

- [画像の上にヒットマップを追加する](/ja/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : イメージマップは、画像のさまざまな部分を別の場所にリンクするためのメカニズムを提供します(あなたがクリックしたそれぞれの国についての詳細情報にリンクしている地図を考えてみてください)。 この手法は時には便利なことがあります。
- [Web リテラシーの基礎 2](https://teach.mozilla.org/activities/web-lit-basics-two/) (英語)
  - : 優れた Mozilla の基礎コースで、マルチメディアと埋め込みモジュールで説明されているスキルのいくつかを調べてテストします。 Web ページの作成、アクセシビリティの設計、リソースの共有、オンラインメディアの使用、オープンな作業 (コンテンツは自由に利用可能で、他の人が共有できることを意味します) の基礎を深く理解してください。
