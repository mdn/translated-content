---
title: HTML によるコンテンツの構造化
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML は、あらゆるウェブサイトのコンテンツと構造を定義する技術です。適切に記述すれば、コンテンツの意味（意味論）を機械が読み取り可能な方法で定義することもでき、これはアクセシビリティ、検索エンジン最適化、ブラウザーが提供する組み込み機能を使用してコンテンツを最適化するために不可欠です。段落、リスト、見出し、リンク、画像、マルチメディアプレーヤー、フォーム、又は他の数多くの要素の一つ、又はユーザーが定義した新しい要素などです。

## 前提条件

このモジュールを始める前には、少なくともコンピューターを使用すること、ウェブを受動的（つまり、ただ見ていく、コンテンツを消費していく）に使用することについて基本的な知識がある必要があります。[基本的なソフトウェアのインストール](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)で詳しく説明されているように、基本的な動作環境を設定し、ファイルの作成と管理する方法を理解している必要があり、これは[ファイルの扱い](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)で詳しく説明しています。どちらも[ウェブ入門](/ja/docs/Learn_web_development/Getting_started/Your_first_website)の完全な初心者向けモジュールの一部です。

> [!NOTE]
> 自分自身でファイルを作成する機能を持たないコンピューター/タブレット/その他の端末で作業している場合は、 [JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) などのオンラインコーディングプログラムで、（ほとんどの）コードサンプルを試してみることができます。

## チュートリアルとチャレンジ問題

- [基本的な HTML の構文](/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : {{glossary("HTML")}} の不変的な基礎を扱って、始められるようにします。要素や属性などの重要な用語 (すでに聞き覚えはあるかもしれません)、それらが言語にどう組み込まれているか説明します。また、HTML 要素の構造、典型的な HTML ページの構造を見せて、その他の重要な基礎言語機能について説明します。それでは、 HTML の例とともに見ていきましょう。
- [ヘッド部には何が入る? ウェブページのメタデータ](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : HTML の文書の{{glossary("Head", "ヘッド")}}部は、ページが読み込まれてもウェブブラウザーには表示されない部分です。この部分には、例えば、 {{htmlelement("title")}} といった情報や {{glossary("CSS")}} へのリンク（HTML を CSS で修飾する場合）、独自のファビコンへのリンク、そしてほかのメタデータ（HTML を誰が書いたのかとかその HTML を表現する重要なキーワードなど）の情報を含んでいます。
- [見出しと段落](/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : HTML の主要な仕事の一つは、ブラウザーが HTML 文書を開発者の意図通りに表示できるように、テキストに構造を与えることです。この記事では、 HTML を使用して、見出しや段落を追加したり、単語を強調したり、リストを作成したりなど、ページのテキストを構造化する方法を説明します。
- [強調と重要性](/ja/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : 前回は、 HTML においてなぜ意味づけが重要なのか、また見出しと段落に焦点を当てて見ていきました。この記事では、意味づけというテーマを続け、テキストに強調や重要性を適用する HTML 要素を（印刷メディアにおけるイタリック体や太字のテキストと並べて）見ていきます。
- [リスト](/ja/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : リストは生活のあらゆる場所にあります。買い物のリストから、自分の家にたどり着くために意識することなく毎日従っている経路のリスト、このチュートリアルであなたが見ている説明のリストまであります。 HTML で、さまざまな種類のリストを定義することができる便利な要素の設定を持つことができることは、驚くことではないかもしれません。ウェブでは、リストの種類が 3 つあります。順序なしリスト、順序付きリスト、説明リストです。
- [文書の構造化](/ja/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : HTML は、ページの個々の部分（「段落」や「画像」など）を定義するだけでなく、ウェブサイトの領域を定義するために使用される多数のブロックレベル要素（「ヘッダー」、「ナビゲーションメニュー」、「メインコンテンツ列」など）も備えています。この記事では、基本的なウェブサイト構造を計画し、この構造を表す HTML を記述する方法について説明します。
- [高度なテキスト装飾](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : テキストの装飾のための HTML には他にも多くの要素がありますが、これは[強調と重要性](/ja/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)の記事には書かれていません。この記事で説明されている要素はあまり知られていませんが、知っていると役に立ちます（これはまだいかなる意味でも完全なリストではありません）。ここでは、注釈、説明リスト、コンピューターコードとその他の関連テキスト、下付き文字と上付き文字、連絡先情報などのマークアップについて学習します。
- [リンクの作成](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : リンク（またはハイパーリンク）は本当に重要なものです。ウェブをウェブたらしめているものです。 この記事ではリンクを作るために必要な構文を示し、リンクに関する良き習慣について扱います。
- [手紙のマークアップ](/ja/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>課題</sup>
  - : 私たちはみんな遅かれ早かれ手紙を書くことを学びます。テキストの書式設定のスキルを試すのも便利な例です。この課題では手紙をマークアップして、ハイパーリンクや HTML の `<head>`要素の適切な使用と同様に、 HTML テキスト整形のスキルをテストしてみます。
- [コンテンツのページの構造化](/ja/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>課題</sup>
  - : CSS を使用してレイアウトできるようにコンテンツのページを構成することは、習得が非常に重要なスキルです。そのためこの評価では、ページがどのように表示されるのかを検討し、適切な構造セマンティクスを選択してその上にレイアウトを構築する能力についてテストします。
- [HTML の画像](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : 当初、ウェブは単なるテキストであり、とてもつまらないものでした。幸運なことに、ウェブページ内に画像（および他のより面白い種類のコンテンツ）を埋め込む能力が追加されるまでにはあまり時間がかかりませんでした。この記事では、 {{htmlelement("img")}} 要素の使い方について、基本的な使い方、 {{htmlelement("figure")}} を使用したキャプションの注釈、 {{glossary("CSS")}} 背景画像との関連の詳細などを詳しく見ていきます。
- [HTML の動画と音声](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : ウェブページに簡単な画像を追加するのができるようになったので、次のステップは HTML 文書に動画と音声のプレイヤーを追加することです。この記事では {{htmlelement("video")}} と {{htmlelement("audio")}} 要素を使って実現することを見ていきます。それから動画にキャプションや字幕を追加する方法を見て完了します。
- [Mozilla のスプラッシュページ](/ja/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>課題</sup>
  - : 今回の評価試験では、このモジュールの記事で説明したいくつかの技術の知識をテストするために、Mozilla のすべてついてのファンキーなスプラッシュページに、いくつかの画像と動画を追加してもらいます！
- [HTML の表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : この記事は、 HTML の表を始めるために、行やセルなどとても基本的なところから、見出し、複数列や行のセルの結合、スタイルを適用するために列の中のセルをすべてグループ化する方法などを扱います。
- [HTML の表のアクセシビリティ](/ja/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : この記事では、HTML の表のアクセシビリティ機能についてさらに詳しく見ていきます。例えば、キャプション/概要、表の見出し、本体、フッターの各節に表の行をグループ化する機能、列と行の数に制限を設ける機能などです。
- [惑星データ表の構造化](/ja/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>課題</sup>
  - : この課題では、太陽系の惑星に関するいくつかのデータを提供し、それを HTML テーブルに構造化しましょう。
- [HTML におけるフォームとボタン](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML フォームとボタンは、ユーザーとの操作上のやり取りを行うための強力なツールです。最も一般的な用途としては、ユーザーからのデータ収集やユーザーインターフェイスの制御などがあります。この記事では、フォームとボタンの基本について紹介します。
- [HTML のデバッグ](/ja/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : HTML を書くのはいいのですが、何かがうまくいかず、コードのどこに誤りがあるのかがわからなくなったらどうしますか。この記事では、 HTML のエラーを探し、修正するのに役立つツールをいくつか紹介します。

## その他のチュートリアル

これらのチュートリアルは学習経路には属しませんが、それでも興味深いものです。メインのコア記事をすべて読み終えた後にオプションで学習する、延長ゴールとして考えてみてください。

- [HTML へのベクターグラフィックの追加](/ja/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : ベクターグラフィックは多くの状況でとても有益なものです。ファイルサイズが小さく、拡大縮小が容易であるため、拡大してもピクセル化しません。この記事では、ウェブページにベクターグラフィックを記載する方法を示します。
- [object から iframe まで — その他の埋め込み技術](/ja/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : 開発者はよく、ウェブページに画像、動画、音声などといったメディアを埋め込むことを考えます。この点では、少し横道にそれて、様々な種類のコンテンツをウェブページに埋め込むことができる要素、{{htmlelement("iframe")}}、{{htmlelement("embed")}}、{{htmlelement("object")}} を見てみたいと思います。 `<iframe>` は他のウェブページを埋め込むためのもので、他の 2 つの要素は PDF ファイルのような外部リソースを埋め込むことができます。

## 関連情報

- [Learn HTML and CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN カリキュラムパートナー_</sup>
  - : [Scrimba](https://scrimba.com?via=mdn) の _Learn HTML and CSS_ コースでは、知識豊富な講師陣による楽しい対話形式のレッスンと課題を通じて、 5 つの素晴らしいプロジェクトを構築し展開しながら、HTML と CSS を学んでいきます。
- [The basics of semantic HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>_MDN カリキュラムパートナー_</sup>
  - : この対話型のレッスンでは、HTML は有益な記述を提供しており、その意味論的な側面がなぜ重要なのかという具体的な説明に重点を置いています。
- [Learn HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Codecademy
  - : HTML の基本を学ぶのに役立つ（無料の）リソースです。

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
