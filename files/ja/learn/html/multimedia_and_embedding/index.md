---
title: マルチメディアとその埋め込み
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

このコースではこれまでたくさんのテキストを見てきましたが、テキストを使用するだけではウェブは実に退屈なものになってしまいます。もっと興味深い内容でウェブを生き生きとさせるために、検討を始めましょう! このモジュールでは、HTML を使用してウェブページにマルチメディアを入れる方法を探ります。画像を入れるさまざまな方法、動画や音声、さらにはウェブページ全体を埋め込む方法などを説明します。

## 前提条件

このモジュールを開始する前に、[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)で述べられてきた、HTML の基本についてのある程度の知識が求められます。このモジュール（や似たようなもの）を一通り終えていない場合、まずそちらを一通り終えてから戻ってきてください。

> [!NOTE]
> 自分自身のファイルを作れないコンピューター/タブレット/その他の端末で作業している場合、[JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) のようなオンラインコーティングプログラムにてコードの実例（の大半）を試すことができます。

## ガイド

このモジュールには以下の記事があり、ウェブページにマルチメディアを埋め込むための基本的な事柄をすべて説明しています。

- [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : 考慮すべき他の種類のマルチメディアもありますが、単純な画像をウェブページに埋め込むために使用される、慎ましい {{htmlelement("img")}} 要素から始めるのが理にかなっています。 この記事では、基本的な使い方を含め、 {{htmlelement("figure")}} を使ったキャプションによる注釈付け、CSS 背景画像との関連の仕方など、画像をより深く使用する方法を見ていきます。
- [動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : 次に、 HTML の {{htmlelement("video")}} 要素と {{htmlelement("audio")}} 要素を使用して、動画や音声をページに埋め込む方法を見ていきます。 それには、基本的な使い方を含め、さまざまなファイル形式へのアクセスをさまざまなブラウザーに提供したり、キャプションや字幕の追加、古いブラウザーへの代替手段の追加などが含まれています。
- [\<object> から \<iframe> まで — その他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : この時点では、{{htmlelement("iframe")}}、{{htmlelement("embed")}}、{{htmlelement("object")}} 要素のような幅広い種類のコンテンツをウェブページに埋め込むことができる要素をいくつか見ていきたいと考えています。 `<iframe>` は他のウェブページを埋め込むためのもので、他の 2 つは PDF ファイルなどの外部リソースを埋め込むことができるものです。
- [ウェブにベクターグラフィックを追加する](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : ベクターグラフィックは、特定の状況で非常に便利です。 PNG や JPG のような通常のフォーマットとは異なり、ズームインしてもゆがんだりピクセル化したりしません。縮尺を変えても滑らかな状態を保つことができます。 この記事では、ベクターグラフィックの概要と、ポピュラーな {{glossary("SVG")}} フォーマットをウェブページに含める方法を紹介します。
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : この記事では、画面の内側や解像度などが大きく異なる機器でもうまく動作する画像、つまりレスポンシブ画像の概念について学び、それを実装するために HTML が提供するツールについて見ていきます。これにより、異なる端末間でのパフォーマンスを向上させることができます。レスポンシブ画像は、今後学んでいただく CSS のトピックである[レスポンシブデザイン](/ja/docs/Learn/CSS/CSS_layout/Responsive_Design)の一部に過ぎないのです。

## 評価試験

上記のガイドで説明されている HTML の基本について、以下の評価試験を行います。

- [Mozilla のスプラッシュページ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : 今回の評価試験では、このモジュールの記事で説明したいくつかの技術の知識をテストするために、Mozilla のすべてついてのファンキーなスプラッシュページに、いくつかの画像と動画を追加してもらいます！

## 関連情報

- [画像の上にヒットマップを追加する](/ja/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : イメージマップは、画像のさまざまな部分を別の場所にリンクするためのメカニズムを提供します(あなたがクリックしたそれぞれの国についての詳細情報にリンクしている地図を考えてみてください)。 この手法は時には便利なことがあります。
- [ウェブリテラシーの基礎 2](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview) (英語)
  - : 優れた Mozilla の基礎コースで、マルチメディアと埋め込みモジュールで説明されているスキルのいくつかを調べてテストします。ウェブページの作成、アクセシビリティの設計、リソースの共有、オンラインメディアの使用、オープンな作業（コンテンツは自由に利用可能で、他の人が共有できることを意味します）の基礎を深く理解してください。
