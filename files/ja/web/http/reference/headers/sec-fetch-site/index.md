---
title: Sec-Fetch-Site ヘッダー
short-title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Sec-Fetch-Site`** は{{Glossary("fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}で、リクエストの発行元のオリジンと、リクエストされたリソースのオリジンとの関係を示します。

言い換えれば、このヘッダーは、リソースへのリクエストが同一オリジン、同一サイト、 別サイトのどれから来ているのか、あるいは「ユーザーが開始した」リクエストであるかをサーバーに指示します。サーバーはこの情報に基づいて、リクエストが許可されるべきか否かを判断することができます。

同一オリジンからのリクエストは通常デフォルトで許可されますが、別のオリジンからのリクエストについては、要求されているリソースや、別の{{Glossary("fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}内の情報にさらに依存する可能性があります。デフォルトでは、受け入れられないリクエストは {{HTTPStatus("403")}} レスポンスコードで拒否されるべきです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい（<code>Sec-</code> 接頭辞）</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-Fetch-Site: cross-site
Sec-Fetch-Site: same-origin
Sec-Fetch-Site: same-site
Sec-Fetch-Site: none
```

## ディレクティブ

- `cross-site`
  - : リクエストの送信元とリソースをホストしているサーバーのサイトが異なります（例 "potentially-evil.com" からの "example.com" 上のリソースへのリクエスト）。
- `same-origin`
  - : リクエストの送信元とリソースをホストするサーバーの{{Glossary("origin", "オリジン")}}は同じです（同じスキーム、ホスト、ポート番号）。
- `same-site`
  - : リクエストの発行元とリソースをホストするサーバーは、{{glossary("site", "サイト")}}がスキームを含めて同一です。
- `none`
  - : このリクエストはユーザーが開始した操作です。例えば、アドレスバーへの URL 入力、ブックマークを開く操作、ファイルをブラウザーウィンドウへドラッグ＆ドロップする操作などです。

## 例

`https://mysite.example` のウェブページ（同じポート）から `https://mysite.example/foo.json` へのフェッチリクエストは、同一オリジンリクエストです。
ブラウザーは下記のように `Sec-Fetch-Site: same-origin` ヘッダーを生成し、サーバーは通常このリクエストを許可します。

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

別のサイト（例えば `potentially-evil.com`）から同じ URL へフェッチリクエストを行うと、ブラウザーは異なるヘッダー（例えば `Sec-Fetch-Site: cross-site`）を発行します。サーバーはこのヘッダーを受け入れるか拒否するかを選択することが可能です。

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- フェッチメタデータリクエストヘッダー: {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-User")}}, {{HTTPHeader("Sec-Fetch-Dest")}}
- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
