---
title: 機能の状態
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

機能の状態は、ブラウザーベンダー間での機能の実装段階に関する情報を開発者に提供するもので、以下のいずれかに該当します。

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

上記の状態のいずれにも当てはまらない場合、その機能は安定した標準機能とみなされます。コンテンツページにこの状態を明示的に追加することはありません。
これらの用語の詳細については、「[実験的、非推奨、廃止](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)」ページを参照してください。

機能の状態を選ぶ方法の詳細については、`@mdn/browser-compat-data` (BCD) リポジトリーの [choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) の節を参照してください。

## 機能の状態を追加または更新する方法

MDN で文書化されたすべての機能の状態は、付随する [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) リポジトリー項目で定義され、新しい[バージョンの BCD がリリースされる](https://github.com/mdn/browser-compat-data/releases)たびに `mdn/content` リポジトリーで自動的に更新されます。

> [!WARNING]
> 機能の状態を `mdn/content` リポジトリー内で手動で更新しないでください。機能の状態を更新するには、BCD リポジトリーで[プルリクエストを送信する](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data)必要があります。変更が BCD で承認されマージされた後、[自動プルリクエスト](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) が `mdn/content` リポジトリーの状態を更新します。

自動化にはフロントマターの [`browser-compat`](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) キーを使用します。このキーは、互換性データからその機能を探すために要求される BCD クエリーを保持します。もし `browser-compat` キーに複数の値がある場合、自動化は状態マクロをレンダリングするために最初の値のみを使用します。

## 機能の状態はコンテンツでどのように指定するのか

この節以下では、 MDN 文書内で機能の状態を表示しているメカニズムについて説明します。前述したように、コンテンツへの組み込みは自動化されているため、これらのメカニズムは読み取り専用と考えるべきです。

### サイドバーの機能の状態アイコン

サイドバーに掲載されている機能の状態アイコンを表示させるには、[フロントマター](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1)の `status` プロパティを使用します。（訳注：このキーは英語版でのみ使用します。）

```yml
---
title: 機能名
status:
  - experimental
  - non-standard
  - deprecated
browser-compat: api.feature
---
```

サイドバーが表示されるとき、コードは各ページのフロントマターの状態を見ていきます。前述したように、これらの状態は自動的に更新されるので、手動で変更する必要はありません。

### 機能の状態のページバナー

以下のマクロは、ページヘッダーに状態バナーを表示するために使用します。

- `\{{SeeCompatTable}}`
  - : `experimental` の状態です。これは**実験的状態**バナーを生成します。
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : `non-standard` の状態です。これは**標準外状態**バナーを生成します。
    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`
  - : `deprecated` の状態です。これは**非推奨状態**バナーを生成します。
    {{deprecated_header}}

### 定義リスト内の機能の状態アイコン

以下のマクロは、定義リストアイテムの横にインラインの状態アイコンを表示するために使用されます。

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) アイコン: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) アイコン: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) アイコン: {{Deprecated_Inline}}

## 関連情報

- [サイドバーマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [リンクマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Links)
