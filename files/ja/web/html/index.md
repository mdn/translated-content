---
title: "HTML: ハイパーテキストマークアップ言語"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) はウェブのもっとも基本的な構成要素です。 HTML はウェブページの基本レイアウトに従ってウェブページの*コンテンツ*を記述し定義するものです。 HTML に隣接する他の技術としては、ウェブページの表示や表現を記述するもの ([CSS](/ja/docs/Web/CSS)) または機能や振る舞いを記述するもの ([JavaScript](/ja/docs/Web/JavaScript)) があります。

「ハイパーテキスト」はウェブページから別なページに、ウェブサイト内でもウェブサイト間でも、接続するリンクを示します。リンクはウェブの基礎的な特徴です。コンテンツをインターネットにアップロードして他の人々が作成したページにリンクすれば、 World Wide Web の活発な参加者になれます。

HTML ではウェブブラウザーのテキスト、画像、その他のコンテンツを記述するために「マークアップ」を使用します。 HTML のマークアップには、 {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} その他のたくさんの特殊な「要素」を用います。

HTML 要素は文書中で、`<` および `>` で囲まれた要素名で構成される「タグ」によって区別されます。タグ内の要素名は、大文字と小文字の区別がありません。つまり、大文字でも、小文字でも、混在して書いても構いません。例えば、 `<title>` タグは `<Title>` や `<TITLE>` やその他の方法で書くことができます。ただし、タグを小文字で書くのが慣習となっており、推奨されています。

以下の記事が HTML についてもっと学ぶのに役立ちます。

## 初心者向けチュートリアル

- [初めてのウェブサイト: コンテンツの作成](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : この記事では、 HTML とは何か、また、どのように使用するのかについて、ウェブ開発に完全に新しい人々を対象に、簡単なツアーを提供します。
- [HTML によるコンテンツの構造化](/ja/docs/Learn_web_development/Core/Structuring_content)
  - : [ウェブ開発の学習](/ja/docs/Learn_web_development)の HTML モジュールの節では、 HTML の基礎をすべて一から学べます。

## ガイド

- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
  - : フォームはウェブで非常に重要な部分です。――これはウェブサイトとのやり取り（登録やログイン、フィードバックの送信、商品の購入など）に必要な多くの機能を提供します。このモジュールでは、フォームのクライアント側／フロントエンド部分の作成から始めます。
- [CORS を利用した画像](/ja/docs/Web/HTML/How_to/How_to/CORS_enabled_image)
  - : [`crossorigin`](/ja/docs/Web/HTML/Reference/Reference/Elementss/img#crossorigin) 属性と {{glossary("CORS")}} ヘッダーを組み合わせることで、 {{HTMLElement("img")}} 要素で定義された画像を異なるドメインから読み出し、 それを {{HTMLElement("canvas")}} 要素の中で同じドメインから読み出したかのように扱うことができます。
- [CORS 設定属性](/ja/docs/Web/HTML/Reference/Reference/Attributes/crossorigin)
  - : [CORS](/ja/docs/Web/HTTP/Guides/CORS) をサポートするいくつかの HTML 要素（{{HTMLElement("img")}} や {{HTMLElement("video")}} など）は `crossorigin` 属性（`crossOrigin` プロパティ）を持っており、要素が取得したデータに関する CORS リクエストを設定することができます。
- [rel="preload" によるコンテンツの先読み](/ja/docs/Web/HTML/Reference/Reference/Attributes/rel/preload)
  - : HTML の {{htmlelement("head")}} 要素内において、 {{htmlelement("link")}} 要素で [`rel`](/ja/docs/Web/HTML/Reference/Reference/Elementss/link#rel) 属性に `preload` を指定することで、読み込み後すぐにページに必要なリソース、つまりページ読み込みの過程の初期の、ブラウザーの主なレンダリング機構が起動する前に、先読みを始めたいものを指定する宣言的なフェッチリクエストを記述することができます。これにより、ページの最初のレンダリングがブロックされにくくなり、パフォーマンスが向上します。この記事では `preload` がどのように動作するのかについての基本的なガイドを提供します。
- [レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)
  - : この記事では、レスポンシブ画像という概念について学びます。レスポンシブ画像とは、画面サイズや解像度、他にも様々な機能が異なる端末でも適切に表示される画像のことです。また、 HTML でレスポンシブ画像を実装するために役立つツールについても見ていきます。これにより、さまざまな端末でパフォーマンスを向上させることができます。

## リファレンス

- [HTML リファレンス](/ja/docs/Web/HTML/Reference)
  - : HTML は**要素**の集まりで、それぞれの要素がいくつかの**属性**で修飾される場合があります。 HTML 文書は互いに**リンク**で接続されます。
- [HTML 要素リファレンス](/ja/docs/Web/HTML/Reference/Elements)
  - : すべての {{glossary("HTML")}} {{glossary("Element", "要素")}}の一覧を閲覧します。
- [HTML 属性リファレンス](/ja/docs/Web/HTML/Reference/Attributes)
  - : HTML の要素には**属性**があります。これは要素を調整したり、さまざまな方法で振る舞いを調整したりするための付加的な値です。
- [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
  - : グローバル属性は、*標準仕様で規定されていないものを含む*すべての [HTML 要素](/ja/docs/Web/HTML/Reference/Elements)に指定できるものです。つまり、あらゆる標準外の要素も、それを使用することで文書が HTML5 に準拠しなくなるとしても、グローバル属性を受け入れなければならないということです。
- [インラインレベル要素](/ja/docs/Glossary/Inline-level_content)と[ブロックレベル要素](/ja/docs/Glossary/Block-level_content)
  - : 通常、 HTML の要素は「インラインレベル」要素または「ブロックレベル」要素のどちらかです。インラインレベル要素は、要素を定義するタグによって指定された範囲のみを占有します。ブロックレベル要素は親要素（コンテナー）の範囲全体を占有し、それによって「ブロックボックス」を作成します。
- [HTML コメント](/ja/docs/Web/HTML/Guides/Comments)
  - : HTML コメントは、マークアップに説明メモを追加したり、文書内の特定の部分をブラウザーが解釈しないようにしたりするために使用します。
- [ウェブにおけるメディア種別と形式のガイド](/ja/docs/Web/Media/Guides/Formats)
  - : {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素では、外部のソフトウェアの支援を必要とせずにコンテンツの中でネイティブに音声や動画を再生できます。
- [HTML コンテンツカテゴリー](/ja/docs/Web/HTML/Guides/Content_categories)
  - : HTML は数種類のコンテンツで構成されています。それぞれのコンテンツは特定のコンテキストで使用することができ、それ以外のコンテキストでは使用できません。同様に、それぞれのコンテキストには、格納することができる他のコンテンツカテゴリーと、その中で使用できる要素、または使用できない要素の集合があります。これは、これらのカテゴリーへのガイドです
- [後方互換モードと標準準拠モード](/ja/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : 後方互換モードと標準準拠モードの歴史的な情報です。

## 関連トピック

- [CSS を使って HTML の要素に色をつける](/ja/docs/Web/CSS/CSS_colors/Applying_color)
  - : この記事では、 CSS を使用して HTML コンテンツに色をつける方法、 HTML 文書のどの部分に色付けできるかの一覧、使用する CSS プロパティについて説明します。
