---
title: 執筆ガイドライン
slug: MDN/Writing_guidelines
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

MDN Web Docs はオープンソースプロジェクトです。以下の各セクションでは、MDN Web Docs で何をどのように文書化するかについてのガイドラインを説明します。プロジェクトへの協力方法については、[協力ガイドライン](/ja/docs/MDN/Community)を参照してください。

- [私たちが書くもの](/ja/docs/MDN/Writing_guidelines/What_we_write)
  - : このセクションでは、MDN Web Docs に掲載するものと掲載しないものに加え、新しい技術について執筆する場合、コンテンツの提案プロセス、外部リンクを受け入れるかどうかなど、その他多くのポリシーについて説明します。MDN Web Docs のコンテンツの執筆や更新を検討している場合、ここから読み始めるとよいでしょう。

- [掲載基準](/ja/docs/MDN/Writing_guidelines/Criteria_for_inclusion)
  - : この記事では、MDN Web Docs に掲載するコンテンツの基準、新しいドキュメントを掲載するための申請プロセス、申請者に求められることやガイドラインについて詳しく説明します。

- [執筆スタイルガイド](/ja/docs/MDN/Writing_guidelines/Writing_style_guide)
  - : 執筆スタイルガイドは、MDN Web Docs で使用する言語とスタイルを扱います。また、[サンプルコードの書式](/ja/docs/MDN/Writing_guidelines/Code_style_guide)も扱っています。

- [ウェブ開発の学習の執筆ガイドライン](/ja/docs/MDN/Writing_guidelines/Learning_content)
  - : MDN の「ウェブ開発の学習」セクションは、ウェブ開発の基本を学ぶ人を対象としており、そのため、MDN の他のコンテンツとは異なる手法が必要です。この記事では、学習コンテンツを執筆するためのガイドラインを説明しています。

- [MDN Web Docs の執筆の手引き](/ja/docs/MDN/Writing_guidelines/Howto)
  - : このセクションでは、ページの作成や編集に関する情報のほか、私たちが遵守しているプロセスや手法について説明します。ページの作成を始めるための情報、ページ構成の概要、特定の作業に関するハウツーの探し方などを紹介します。以下のようなトピックがあります。
    - [技術の調査方法](/ja/docs/MDN/Writing_guidelines/Howto/Research_technology)
      - : この節では、文書化する技術を調査するための便利なヒントを提供します。

    - [ページの作成、編集、移動、削除方法](/ja/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)
      - : この節では、MDN Web Docsでページを作成、移動、削除する方法について説明します。また、ページを移動したり削除したりするときのリダイレクト方法についても説明します。

    - [コンテンツのセクションを掲載終了する方法](/ja/docs/MDN/Writing_guidelines/Howto/Retiring_content)
      - : このセクションでは、MDN Web Docs のコンテンツのセクション全体を計画的かつ透明性のある方法で掲載終了するプロセスについて説明します。これには、意思決定、通知期間、アーカイブ、削除が含まれます。

    - [Markdown の書き方](/ja/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN)
      - : 私たちが使用している markdown 形式は [GitHub flavored markdown (GFM)](https://github.github.com/gfm/) に由来しています。このセクションは MDN Web Docs で使用する markdown のガイドであり、メモや定義リストのような特定のページ内構成要素の形式も含みます。

    - [画像やメディアの追加](/ja/docs/MDN/Writing_guidelines/Howto/Images_media)
      - : このコーナーでは、画像などのメディアをページに載せるための要件について記述します。

    - [CSS プロパティの記事の作成方法](/ja/docs/MDN/Writing_guidelines/Howto/Document_a_CSS_property)
      - : この記事では、レイアウトやコンテンツなど、 CSS プロパティページの書き方を解説します。

    - [API リファレンスの書き方](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference)
      - : この節では、 Web API の文書化の手法を説明します。

    - [HTTP ヘッダーの記事の作成方法](/ja/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header)
      - : この記事では、 HTTP ヘッダーの新しい参照ページを作成する方法を説明します。

    - [用語集への項目の追加](/ja/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary)
      - : この章では MDN Web Docs の用語集に項目を追加してリンクする方法について説明します。また、用語集の項目のレイアウトと内容に関するガイドラインを提供します。

- [MDN Web Docs のページの種類](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types)
  - : MDN Web Docs の各ページには、CSS リファレンスページや JavaScript ガイドページなど、特定のページの種類があります。このセクションでは、さまざまな種類のページを一覧にし、それぞれに対応したテンプレートを提供しています。執筆するページの種別を把握するため、これらに目を通すとよいでしょう。

- [MDN Web Docs の文書構造](/ja/docs/MDN/Writing_guidelines/Page_structures)
  - : この章では、MDN Web Docs で一貫した情報の表示を提供するために使用する、さまざまなページ構造について説明します。これには以下が含まれます。
    - [構文の節](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)
      - : MDN Web Docs のリファレンスページの構文の節には、機能の正確な構文を定義する構文ボックスが格納されています。この記事では、参照する記事の構文ボックスの書き方を説明します。

    - [サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)
      - : ページにサンプルコードを入れるには、さまざまな方法があります。この章では、それらの概要を説明し、異なる言語のための構文ガイドラインを提供します。

    - [バナーと注意](/ja/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
      - : 時々、記事に特別な注意を追加する必要があります。これはページが非推奨の技術や運用コードで使用すべきではない他の素材に応じた場合に起こります。この記事では最も一般的なケースとその処理方法を述べます。

    - [仕様書一覧表](/ja/docs/MDN/Writing_guidelines/Page_structures/Specification_tables)
      - : MDN Web Docs のすべてのリファレンスページでは、その API や技術を定義する仕様書に関する情報を提供する必要があります。この記事では、仕様書一覧表の見た目と追加方法を説明します。

    - [互換性一覧表](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)
      - : MDN Web Docs では、オープンウェブに関するドキュメント向けに互換性一覧表の標準形式を用意しています。この記事では、互換性一覧表の生成に使うデータベースへの追加や管理、記事への表の統合方法について説明します。

    - [マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros)
      - : マクロとは、ページ内でサイドバーなどのコンテンツを生成するために使用するショートカットのことです。この章では、使用するマクロとその機能を一覧で紹介します。

- [出典表示と著作権使用許諾情報](/ja/docs/MDN/Writing_guidelines/Attrib_copyright_license)
  - : MDN Web Docs のコンテンツをウェブ上の他の場所で使用する際のポリシー、MDN 上でコンテンツを再公開する許可を得る方法、MDN のコンテンツへのリンクに関するヒントを説明します。

- [技術のラベル付け方法](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)
  - : このセクションでは、「廃止」「非推奨」「実験的」という用語の定義、それらのラベルを技術に付ける方法、および MDN Web Docs からコンテンツを削除するタイミングに関するガイドラインを説明します。
