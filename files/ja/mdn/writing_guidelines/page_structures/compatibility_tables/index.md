---
title: 互換性一覧表とブラウザー互換性データリポジトリー (BCD)
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

MDN には、DOM, HTML, CSS, JavaScript, SVG などの、あらゆるブラウザーで共有される技術についての互換性を表す一覧表の標準フォーマットがあります。
このデータを複数のプロジェクトで機械的に利用できるようにするため、Node.js パッケージが [browser-compat-data リポジトリー](https://github.com/mdn/browser-compat-data)からビルドされ、npm に公開されています。

これらの互換性一覧表のデータを変更するには、`browser-compat-data` リポジトリーの[協力者ガイド](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md)や[データガイドラインのガイド](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md)中にある包括的なドキュメント（データを表現するために使用される慣習とJSONスキーマの最新の詳細を含みます）をご覧ください。
質問や問題が見つかった場合は、[助けを求める](/ja/docs/MDN/Community/Communication_channels)をご利用ください。

## MDN ページで BCD データを使う

[browser-compat-data](https://github.com/mdn/browser-compat-data) リポジトリーにデータが格納されると、そのデータを基にしたブラウザー互換性一覧表や仕様書を、MDN ページに動的に生成できるようになります。

BCD データを MDN ページに取り込むには、BCD ソースファイルで指定されている、取り込みたい該当データのクエリー文字列を使用します。
例えば、

- {{domxref("AbortController")}} 互換性データは [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) で定義されており、クエリー文字列 `api.AbortController` で取り込みが可能です。
- {{HTTPHeader("Content-Type")}} HTTPヘッダーの互換性データは、[http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/content-type.json) で定義されており、クエリー文字列 `http.headers.Content-Type` で取り込みが可能です。
- {{domxref("VRDisplay.capabilities")}} プロパティの互換性データは [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) で定義されており、クエリー文字列 `api.VRDisplay.capabilities` で取り込みが可能です。

互換性データのクエリー文字列は、ページのフロントマターで `browser-compat` キーを指定してください。
例えば、{{domxref("AbortController")}} の場合、以下のように追加します。

> [!CALLOUT]
> 訳注：
> 日本語に翻訳された記事には `browser-compat` キーは追加しないでください。省略しても英語版のフロントマターが参照されるため、不要です。あると混乱の原因になります。[参考](https://github.com/mdn/translated-content/issues/7849#issuecomment-1224316755)）

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

そして、そのキーに対応する互換性一覧表と仕様書が、ソース中の `\{{Compat}}` マクロと `\{{Specifications}}` マクロから自動的に生成されます。

同じページに複数の互換性一覧表や仕様書が必要な場合、`browser-compat` の値を配列で指定することができます。例えば、[チャンネルメッセージング API](/ja/docs/Web/API/Channel_Messaging_API) の場合、以下のように追加します。

```md
---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
page-type: web-api-overview
browser-compat:
  - api.MessageChannel
  - api.MessagePort
---
```

マクロ呼び出すと、以下の表（とそれに対応するメモ設定）が生成されます。

### 互換性一覧表の例

{{Compat}}

### 仕様書一覧表の例

{{Specifications}}
