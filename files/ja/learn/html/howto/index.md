---
title: 一般的な問題解決に HTML を使う
slug: Learn/HTML/Howto
---

{{LearnSidebar}}

下記のリンクは、日常の解決すべき問題を HTML を使って解決する解決法を指しています。

### 基本構造

HTML の最も基本的な適用は文書の構造化です。HTML に慣れていないならここから始めるべきです。

- [基本的な HTML 文書を作成する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_文書の構成)
- [Web ページを論理的なセクションに分割する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [見出しと段落の適切な構成を設定する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#基本_見出しと段落)

### 基本的なテキストレベルのセマンティクス

HTML は文書の意味的な情報を提供することに特化しているので、HTML 文書内でメッセージをうまく伝える方法についてあなたが抱えるかもしれない多くの質問に答えます。

- [HTML を使ってリスト項目を作成する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#リスト)
- [コンテンツを強調する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#強調と重要性)
- [テキストが重要だと示す方法](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#強調と重要性)
- [HTML でコンピュータコードを表示する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/高度なテキスト成型#Representing_computer_code)
- [画像やグラフィックに注釈を付ける方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#図表と図表のキャプションで画像に注釈を付ける)
- [略語をマークして理解しやすくする方法](/ja/docs/Learn/HTML/Introduction_to_HTML/高度なテキスト成型#Abbreviations)
- [Web ページに引用を追加する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/高度なテキスト成型#Quotations)
- [HTML で用語を定義する方法](/ja/docs/Learn/HTML/Howto/Define_terms_with_HTML)

### ハイパーリンク

HTML のための主な理由は {{Glossary("hyperlink", "ハイパーリンク")}}, を使ってナビゲーションを簡単にすることで、それは色々な方法で使われます:

- [ハイパーリンクを作成する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [HTML を使って目次を作成する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#アクティブラーニング_ナビゲーションメニューの作成)

### 画像とマルチメディア

- [Web ページに画像を追加する方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#ウェブページに画像を置くにはどうするのか)
- [Web ページにビデオコンテンツを追加する方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

### スクリプトとスタイリング

HTML は文書の構造だけを解決します。表現の問題は {{glossary("CSS")}} を使うか、ページをインタラクティブにしたいならスクリプトを使います。

- [Web ページで CSS を使用する方法](/ja/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_to_apply_your_CSS_to_your_HTML)
- [Web ページで JavaScript を使用する方法](/ja/docs/Learn/HTML/Howto/Use_JavaScript_within_a_webpage)

### 埋め込みコンテンツ

- [Web ページに他の Web ページを埋め込む方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Web ページに Flash コンテンツを追加する方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#embed_要素と_object_要素)

## あまりない、または上級の問題

基本を超えると、HTML はとてもリッチで複雑な問題を解決する高度な機能を提供します。この記事は直面するかもしれないあまりないユースケースに取り組むのに役立ちます。

### フォーム

フォームは、Web ページから Web サーバにデータを送信するために作成された複雑な HTML 構造です。[完全な専用ガイド](/ja/docs/Learn/HTML/Forms)に目を通すことをお勧めします。ここから始めましょう。

- [簡単な Web フォームを作成する方法](/ja/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [Web フォームを構築化する方法](/ja/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form)

### 表の情報

表形式データという情報は、行と列のある表で整理する必要があります。これは最も複雑な HTML 構造の 1 つで、習得するのは簡単ではありません。

- [データテーブルの作り方](/ja/docs/Learn/HTML/Tables/Basics)
- [HTML テーブルをアクセシブルにする方法](/ja/docs/Learn/HTML/Tables/Advanced)

### データ表現

- 数値とコード値を HTML で表現する方法 - [上付き文字と下付き文字](/ja/docs/Learn/HTML/Introduction_to_HTML/高度なテキスト成型#Superscript_and_subscript)、および[コンピュータコードの表現](/ja/docs/Learn/HTML/Introduction_to_HTML/高度なテキスト成型#Representing_computer_code)を参照してください
- [データ属性の使い方](/ja/docs/Learn/HTML/Howto/Use_data_attributes)

### 上級テキストセマンティクス

- [HTML の改行をコントロールする方法](/ja/docs/Web/HTML/Element/br)
- 変更をマークする方法 (追加および削除されたテキスト) - {{htmlelement("ins")}} と {{htmlelement("del")}} 要素を参照してください

### 上級の画像やマルチメディア

- [レスポンシブ画像を Web ページに追加する方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Web ページにベクター画像を追加する方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [画像の上にヒットマップを追加する方法](/ja/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)

### 国際化

HTML は単一言語ではありません。一般的な国際化の問題を処理するためのツールを提供します。

- [単一の Web ページに複数の言語を追加する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Setting_the_primary_language_of_the_document)
- [HTML で日時を表示する方法](/ja/docs/Learn/HTML/Introduction_to_HTML/高度なテキスト成型#Marking_up_times_and_dates)

### パフォーマンス

- [高速ロードの HTML ページを作成する方法](/ja/docs/Web/Guide/HTML/Tips_for_authoring_fast-loading_HTML_pages)
