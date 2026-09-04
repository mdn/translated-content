---
title: "HTML: ハイパーテキストマークアップ言語"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: d1f3f179175c80c18b1b78ba0df0ea7d15ca32cc
---

**HTML** (HyperText Markup Language) はウェブのもっとも基本的な構成要素です。 HTML はウェブページの基本レイアウトに従ってウェブページの*コンテンツ*を記述し定義するものです。 HTML に隣接する他の技術としては、ウェブページの表示や表現を記述するもの ([CSS](/ja/docs/Web/CSS)) または機能や振る舞いを記述するもの ([JavaScript](/ja/docs/Web/JavaScript)) があります。

「ハイパーテキスト」はウェブページから別なページに、ウェブサイト内でもウェブサイト間でも、接続するリンクを示します。リンクはウェブの基礎的な特徴です。コンテンツをインターネットにアップロードして他の人々が作成したページにリンクすれば、 World Wide Web の活発な参加者になれます。

HTML ではウェブブラウザーのテキスト、画像、その他のコンテンツを記述するために「マークアップ」を使用します。 HTML のマークアップには、 {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} その他のたくさんの特殊な「要素」を用います。

HTML 要素は文書中で、`<` および `>` で囲まれた要素名で構成される「タグ」によって区別されます。タグ内の要素名は、大文字と小文字の区別がありません。つまり、大文字でも、小文字でも、混在して書いても構いません。例えば、 `<title>` タグは `<Title>` や `<TITLE>` やその他の方法で書くことができます。ただし、タグを小文字で書くのが慣習となっており、推奨されています。

以下の記事が HTML についてもっと学ぶのに役立ちます。

## 初心者向けチュートリアル

[ウェブ開発の基礎モジュール](/ja/docs/Learn_web_development/Core)には、HTML の基礎を網羅した、現行かつ実践的なチュートリアルが含まれています。

- [初めてのウェブサイト: コンテンツの作成](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : この記事では、 HTML とは何か、また、どのように使用するのかについて、ウェブ開発に完全に新しい人々を対象に、簡単なツアーを提供します。
- [HTML によるコンテンツの構造化](/ja/docs/Learn_web_development/Core/Structuring_content)
  - : このモジュールでは、HTML言語の基礎を網羅した後、文書の構造、リンク、リスト、画像、フォームなどの主要な分野を見ていきます。
- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
  - : フォームはウェブにおいてとても重要な要素です。これらは、登録やログイン、フィードバックの送信、商品の購入など、ウェブサイトと対話するために必要な機能の多くを提供します。このモジュールでは、フォームのクライアントサイド／フロントエンド部分の作成について学びます。

## ガイド

[HTML ガイド](/ja/docs/Web/HTML/Guides)は、ウェブ上で HTML を役立てるための参考資料です。フォーム、CORS、コンテンツの事前読み込み、レスポンシブ画像などのトピックを網羅しています。

- [構文とよくあるタスクの HTML 早見表](/ja/docs/Web/HTML/Guides/Cheatsheet)
  - : 一般的な HTML の構文や作業に関するクイックリファレンスです。
- [HTML コメント `<!-- … -->` の使用](/ja/docs/Web/HTML/Guides/Comments)
  - : HTML コメントは、マークアップに説明メモを追加したり、文書内の特定の部分をブラウザーが解釈しないようにしたりするために使用します。
- [HTML フォーム検証と制約検証 API の使用](/ja/docs/Web/HTML/Guides/Constraint_validation)
  - : HTML5 では、クライアント側でのフォーム検証を容易にするため、制約検証機能が導入されました。フォーム要素に属性を設定することで、JavaScript を使用せずに基本的な制約を調べることができます。
- [コンテンツカテゴリー](/ja/docs/Web/HTML/Guides/Content_categories)
  - : HTML は数種類のコンテンツで構成されています。それぞれのコンテンツは特定のコンテキストで使用することができ、それ以外のコンテキストでは使用できません。同様に、それぞれのコンテキストには、格納することができる他のコンテンツカテゴリーと、その中で使用できる要素、または使用できない要素の集合があります。これは、これらのカテゴリーへのガイドです。
- [HTML の日付と時刻の形式の使用](/ja/docs/Web/HTML/Guides/Date_and_time_formats)
  - : 特定の HTML 要素では、日付や時刻の値が使用されます。このガイドでは、これらの値を指定する文字列の書式化について説明します。
- [HTML でのマイクロデータの使用](/ja/docs/Web/HTML/Guides/Microdata)
  - : マイクロデータは、ウェブページ上の既存のコンテンツ内にメタデータを設定するために使用されます。検索エンジンやウェブクローラーは、マイクロデータを抽出して処理することで、より充実した閲覧体験を提供することができます。
- [HTML でのマイクロフォーマットの使用](/ja/docs/Web/HTML/Guides/Microformats)
  - : マイクロフォーマットは、ソーシャルウェブアプリケーション、検索エンジン、アグリゲーター、その他のさまざまなツールで使用するために、HTML にセマンティクスや構造化データを埋め込むために用いられる標準規格です。
- [後方互換モードと標準準拠モード](/ja/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : 後方互換モードと標準準拠モードの歴史的な情報です。
- [HTML におけるレスポンシブ画像の使用](/ja/docs/Web/HTML/Guides/Responsive_images)
  - : 画面サイズや解像度、その他の機能が大きく異なる端末でも適切に動作するレスポンシブ画像について学び、さまざまな端末でのパフォーマンスを改善しましょう。
- [ウェブにおけるメディア種別と形式](/ja/docs/Web/Media/Guides/Formats)
  - : {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素では、外部のソフトウェアの支援を必要とせずにコンテンツの中でネイティブに音声や動画を再生できます。

## 手引き

- [HTML で用語を定義する](/ja/docs/Web/HTML/How_to/Define_terms_with_HTML)
  - : HTML では、インライン形式であれ構造化された用語集であれ、説明の意味を表現するいくつかの方法が指定されています。この記事では、キーワードを定義する際に、それらを適切にマークアップする方法を示します。
- [データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)
  - : HTML5 は、特定の要素に関連付けられるべきであるものの、明確な意味を持たないデータに対して、拡張性を考慮して設計されています。`data-*` 属性を使用することで、標準的な意味のある HTML 要素に追加情報を格納することができます。
- [キャンバスにおける別オリジンの画像の使用](/ja/docs/Web/HTML/How_to/CORS_enabled_image)
  - : 一部の HTML 要素は、[CORS](/ja/docs/Web/HTTP/Guides/CORS) に対応しており、{{HTMLElement("img")}} や {{HTMLElement("video")}} などがその例です。これらの要素には `crossorigin` 属性（`crossOrigin` プロパティ）があり、これにより、その要素が取得するデータに対する CORS リクエストの設定を行うことができます。
- [画像の上にヒットマップを追加する](/ja/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
  - : イメージマップを使用すると、画像の異なる部分にハイパーリンクを関連付けることができます。この記事では、その作成方法と実装方法を示します。
- [読み込みが速い HTML ページを作成する](/ja/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages)
  - : これらのヒントは、一般的な知識と実験に基づいています。最適化されたウェブページは、来訪者にとってよりレスポンスの良いサイトを提供するだけでなく、ウェブサーバーやインターネット回線の負荷を軽減します。
- [ウェブページに JavaScript を追加する](/ja/docs/Web/HTML/How_to/Add_JavaScript_to_your_web_page)
  - : この記事では、HTML ファイルに JavaScript コードを追加する方法について説明します。

## リファレンス

HTML は**要素**の集まりで、それぞれの要素がいくつかの**属性**で修飾される場合があります。 HTML 文書は互いに**リンク**で接続されます。完全な [HTML リファレンス](/ja/docs/Web/HTML/Reference)ドキュメントをご覧ください。

- [HTML 要素リファレンス](/ja/docs/Web/HTML/Reference/Elements)
  - : HTML のすべての{{glossary("Element", "要素")}}のリファレンスです。
- [HTML 属性リファレンス](/ja/docs/Web/HTML/Reference/Attributes)
  - : HTML のすべての属性に関するリファレンスです。属性とは、要素の設定や動作をさまざまな方法で調整するための追加の値のことです。
- [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
  - : グローバル属性は、*標準仕様で規定されていないものを含む*すべての [HTML 要素](/ja/docs/Web/HTML/Reference/Elements)に指定できるものです。つまり、あらゆる標準外の要素も、それを使用することで文書が HTML5 に準拠しなくなるとしても、グローバル属性を受け入れなければならないということです。

### 要素別の属性

- [input 型](/ja/docs/Web/HTML/Reference/Elements/input)
  - : ウェブベースのフォーム用の操作可能なコントロールを作成するために使用されます。
- [script 型](/ja/docs/Web/HTML/Reference/Elements/script/type)
  - : この要素が表すスクリプトの種類を示します。
- [meta name](/ja/docs/Web/HTML/Reference/Elements/meta/name)
  - : ページ全体のメタデータを名前と値のペアで指定します。

### 属性値

- [rel キーワード](/ja/docs/Web/HTML/Reference/Attributes/rel)
  - : リンクされたリソースと現在の文書との関係を定義します。

## 関連トピック

- [CSS を使って HTML の要素に色をつける](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
  - : この記事では、 CSS を使用して HTML コンテンツに色をつける方法、 HTML 文書のどの部分に色付けできるかの一覧、使用する CSS プロパティについて説明します。
