---
title: 機能の状態
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

機能の状態は、Web API のメソッドや CSS プロパティなど、特定のウェブプラットフォーム機能のブラウザー間での実装状況や標準化の状態を大まかに示します。

- [`deprecated`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

上記のいずれの状態にも当てはまらない機能は、安定した標準機能とみなされます。
これらの用語の詳細については、「[実験的、非推奨、廃止](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)」ページを参照してください。

機能の状態がどのように決まるかについては、`@mdn/browser-compat-data` (BCD) リポジトリーの [choosing status properties](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#choosing-status-properties) の節を参照してください。

> [!WARNING]
> `mdn/content` リポジトリー内の機能の状態を手動で更新しないでください。
> ドキュメントのソースは、GitHub の `mdn/browser-compat-data` リポジトリーの情報に基づいて[自動的に更新されます](#機能の状態を追加または更新する方法)。

> [!CALLOUT]
> **訳注**: 日本語版記事では、`browser-compat` キーは英語版の記事の値が流用されるので、日本語版独自で設定しないでください。

## 機能の状態を追加または更新する方法

MDN で文書化されたすべての機能の状態は、付随する [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) リポジトリーで追跡されています。BCD の[新しいバージョンがリリースされる](https://github.com/mdn/browser-compat-data/releases)たびに、自動化によって `mdn/content` リポジトリー内の状態が更新されます。

この自動化では、フロントマターの [`browser-compat`](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) キーを使用します。このキーには、互換性データから機能を探すために必要な BCD クエリーが格納されます。`browser-compat` キーに複数の値がある場合、状態マクロのレンダリングには最初の値のみが使用されます。

> [!NOTE]
> MDN コンテンツ内の機能の状態を更新するには、BCD リポジトリーで[プルリクエストを送信する](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data)必要があります。変更が BCD で承認されてマージされると、週次リリースに含まれ、リリースごとに自動プルリクエストが `mdn/content` リポジトリー内の状態を更新します。

## 機能の状態はコンテンツでどのように指定するのか

以下では、 MDN 文書に機能の状態情報を挿入して表示するための仕組みについて説明します。前述のとおり、コンテンツへの挿入は自動化されているため、これらの仕組みは読み取り専用と考えてください。

### サイドバーの機能の状態アイコン

ページのフロントマターの `status` プロパティは、サイドバーに表示される機能の状態アイコンを生成するために使用されます。

```yml
---
title: 機能名
status:
  - deprecated
  - experimental
  - non-standard
browser-compat: api.feature
---
```

### 機能の状態のページバナー

> [!WARNING]
> `\{{Deprecated_Header}}` マクロは、**非推奨状態**バナーの生成に不要になりました。プラットフォームは、フロントマターの [`status`](#サイドバーの機能の状態アイコン) プロパティ、または [web-features](https://github.com/web-platform-dx/web-features) のデータを使用して、バナーを自動的に生成するようになりました。

以下のマクロは、ページヘッダーに状態バナーを表示するために使用します。

- `\{{SeeCompatTable}}`

  - : `experimental` の状態です。これは**実験的状態**バナーを生成します。
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : `non-standard` の状態です。これは**標準外状態**バナーを生成します。
    {{Non-standard_Header}}

### 定義リスト内の機能の状態アイコン

以下のマクロは、定義リストアイテムの横にインラインの状態アイコンを表示するために使用されます。

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) アイコン: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) アイコン: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) アイコン: {{Deprecated_Inline}}

ウェブ機能のページに状態バナーがある場合、同じ状態のインラインマクロを使用して、定義リスト内の機能の各メンバーや値に明示的にその状態を示します。
例えば、ページが `\{{SeeCompatTable}}` で実験的と示されている場合、定義リスト内の機能の各メンバーや値も `\{{Experimental_Inline}}` マクロで実験的と明示します。

## 関連情報

- [サイドバーマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [リンクマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Links)
