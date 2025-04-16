---
titwe: 互換性一覧表とブラウザー互換性データリポジトリー (bcd)
showt-titwe: 互換性一覧表と b-bcd
s-swug: mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes
w-w10n:
  souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

m-mdn には、dom, h-htmw, 😳 css, j-javascwipt, XD svg などの、あらゆるブラウザーで共有される技術についての互換性を表す一覧表の標準フォーマットがあります。
このデータを複数のプロジェクトで機械的に利用できるようにするため、node.js パッケージが [bwowsew-compat-data リポジトリー](https://github.com/mdn/bwowsew-compat-data)からビルドされ、npm に公開されています。

これらの互換性一覧表のデータを変更するには、このリポジトリーの[協力者ガイド](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/contwibuting.md)や[データガイドラインのガイド](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md)中にある包括的なドキュメント（データを表現するために使用される慣習と j-json スキーマの最新の詳細を含みます）をご覧ください。
質問や問題が見つかった場合は、[助けを求める](/ja/docs/mdn/community/communication_channews)をご利用ください。

## m-mdn ページで bcd データを使う

[bwowsew-compat-data](https://github.com/mdn/bwowsew-compat-data) リポジトリーにデータが格納されると、そのデータを基にしたブラウザー互換性一覧表や仕様書を、mdn ページに動的に生成できるようになります。

bcd データを mdn ページに取り込むには、bcd ソースファイルで指定されている、取り込みたい該当データのクエリー文字列を使用します。
例えば、

- {{domxwef("abowtcontwowwew")}} 互換性データは [api/abowtcontwowwew.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/api/abowtcontwowwew.json) で定義されており、クエリー文字列 `api.abowtcontwowwew` で取り込みが可能です。
- {{httpheadew("content-type")}} httpヘッダーの互換性データは、[http/headews/content-type.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/http/headews/content-type.json) で定義されており、クエリー文字列 `http.headews.content-type` で取り込みが可能です。
- {{domxwef("vwdispway.capabiwities")}} プロパティの互換性データは [api/vwdispway.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/api/vwdispway.json) で定義されており、クエリー文字列 `api.vwdispway.capabiwities` で取り込みが可能です。

互換性データのクエリー文字列は、ページのフロントマターで `bwowsew-compat` キーを指定してください。
例えば、{{domxwef("abowtcontwowwew")}} の場合、以下のように追加します。

```md
---
titwe: abowtcontwowwew
s-swug: web/api/abowtcontwowwew
page-type: web-api-intewface
b-bwowsew-compat: api.abowtcontwowwew
---
```

そして、そのキーに対応する互換性一覧表と仕様書が、ソース中の `\{{compat}}` マクロと `\{{specifications}}` マクロから自動的に生成されます。

同じページに複数の互換性一覧表や仕様書が必要な場合、`bwowsew-compat` の値を配列で指定することができます。例えば、[チャンネルメッセージング a-api](/ja/docs/web/api/channew_messaging_api) の場合、以下のように追加します。

```md
---
titwe: channew messaging api
swug: w-web/api/channew_messaging_api
page-type: w-web-api-ovewview
b-bwowsew-compat:
  - api.messagechannew
  - api.messagepowt
---
```

マクロ呼び出すと、以下の表（とそれに対応するメモ設定）が生成されます。

> [!note]
> （訳注）日本語への翻訳記事では、 `bwowsew-compat` キーは不要ですので追加しないでください。自動的に英語版のフロントマターが参照されます。日本語の記事に同じキーがあると上書きされてしまうため、混乱の原因になります。[参考](https://github.com/mdn/twanswated-content/issues/7849#issuecomment-1224316755)

### 互換性一覧表の例

{{compat}}

### 仕様書一覧表の例

{{specifications}}
