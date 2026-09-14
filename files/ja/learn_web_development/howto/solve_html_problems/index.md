---
title: よくある HTML の問題の解決
slug: Learn_web_development/Howto/Solve_HTML_problems
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{LearnSidebar}}

以下のリンクは、 HTML で解決しなければならない日常的な問題の解決策を示すものです。

### 基本構造

HTML の最も基本的な適用は文書の構造化です。 HTML に慣れていないならここから始めるべきです。

- [基本的な HTML 文書を作成する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_文書の構成)
- [ウェブページを論理的なセクションに分割する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
- [見出しと段落の適切な構成を設定する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)

### 基本的なテキストレベルの意味づけ

HTML は文書の意味的な情報を提供することに特化しているので、HTML 文書内でメッセージをうまく伝える方法についてあなたが抱えるかもしれない多くの質問に答えます。

- [HTML を使ってリスト項目を作成する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Lists)
- [コンテンツを強調する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
- [テキストが重要だと示す方法](/ja/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
- [HTML でコンピューターのコードを表示する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#コンピューターのコードの表現)
- [画像やグラフィックに注釈を付ける方法](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images#図表と図表のキャプションで画像に注釈を付ける)
- [略語をマークして理解しやすくする方法](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#略語)
- [ウェブページに引用を追加する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#引用)
- [HTML で用語を定義する方法](/ja/docs/Web/HTML/How_to/Define_terms_with_HTML)

### ハイパーリンク

HTML を使用する主な理由の 1 つは、{{Glossary("Hyperlink", "ハイパーリンク")}}を使用してナビゲーションを簡単にすることであり、これは様々な形で使用することができます。

- [ハイパーリンクを作成する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)
- [HTML を使って目次を作成する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links#アクティブラーニング_ナビゲーションメニューの作成)

### 画像とマルチメディア

- [ウェブページに画像を追加する方法](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images#ウェブページに画像を置くにはどうするのか)
- [ウェブページにビデオコンテンツを追加する方法](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)

### スクリプトとスタイル設定

HTMLは文書構造を設定するだけです。表示に関する課題を解決するには、 {{glossary("CSS")}} を使用するか、スクリプトを使用してページを操作可能にしてください。

- [ウェブページで CSS を使用する方法](/ja/docs/Learn_web_development/Core/Styling_basics/Getting_started#文書に_css_を追加)
- [ウェブページで JavaScript を使用する方法](/ja/docs/Web/HTML/How_to/Add_JavaScript_to_your_web_page)

### 埋め込みコンテンツ

- [ウェブページに他のウェブページを埋め込む方法](/ja/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)

## あまりない、または上級の問題

基本的なことを超えて、 HTML はとても豊かで、複雑な問題を解決するための高度な機能を提供しています。この記事は、あなたが直面する可能性のあるあまり一般的ではない用途に取り組むのに役立ちます。

### フォーム

フォームは、ウェブページからウェブサーバーにデータを送信するために作成された複雑な HTML 構造です。[完全な専用ガイド](/ja/docs/Learn_web_development/Extensions/Forms)に目を通すことをお勧めします。ここから始めましょう。

- [簡単なウェブフォームを作成する方法](/ja/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [ウェブフォームの構築方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)

### 表形式の情報

表形式データとよばれる情報は、行と列のある表で整理する必要があります。これは最も複雑な HTML 構造の 1 つで、習得するのは簡単ではありません。

- [データ表の作り方](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [HTML の表をアクセシブルにする方法](/ja/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)

### データ表現

- 数値とコード値を HTML で表現する方法 - [上付き文字と下付き文字](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#上付きと下付き)、および[コンピューターのコードの表現](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#コンピューターのコードの表現)を参照してください。
- [データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)

### 上級のテキスト意味づけ

- [HTML の改行を制御する方法](/ja/docs/Web/HTML/Reference/Elements/br)
- 変更をマークする方法 (追加および削除されたテキスト) - {{htmlelement("ins")}} と {{htmlelement("del")}} 要素を参照してください

### 上級の画像やマルチメディア

- [レスポンシブ画像をウェブページに追加する方法](/ja/docs/Web/HTML/Guides/Responsive_images)
- [ウェブページにベクター画像を追加する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
- [画像にヒットマップを追加する方法](/ja/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)

### 国際化

HTML は単一言語ではありません。一般的な国際化の問題を処理するためのツールを提供します。

- [単一のウェブページに複数の言語を追加する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#文書の主要な言語の設定)
- [HTML で日時を表示する方法](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#日付と時刻をマークアップする)

### パフォーマンス

- [読み込みが速い HTML ページを作成する方法](/ja/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages)

## 関連情報

- [HTML 早見表](/ja/docs/Web/HTML/Guides/Cheatsheet)
