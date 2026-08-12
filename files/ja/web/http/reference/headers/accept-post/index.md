---
title: Accept-Post ヘッダー
short-title: Accept-Post
slug: Web/HTTP/Reference/Headers/Accept-Post
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Accept-Post`** {{Glossary("response header", "レスポンスヘッダー")}}は、POST リクエストにおいて、サーバーがどの[メディア種別](/ja/docs/Web/HTTP/Guides/MIME_types)を受け入れるかを示します。
例えば、対応していないメディア種別を含む POST リクエストを受信したサーバーは、{{HTTPStatus("415", "415 Unsupported Media Type")}} ステータスコードと、1 つ以上の対応メディア種別を参照する `Accept-Post` ヘッダーを返すことがあります。

このヘッダーは、`POST` メソッドに対応しているリソースに対する {{HTTPMethod("OPTIONS")}} リクエストに含まれている必要があります。
どのリクエストメソッドに対するレスポンスにも `Accept-Post` ヘッダーが含まれている場合、それは暗黙的に、そのリクエストの対象リソースに対して POST が許可されていることを意味します。

> [!NOTE]
> IANA は公式の[コンテンツエンコードのリスト](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)を管理しています。
> `bzip` および `bzip2` エンコードは標準外ですが、特に古いシステムなどの場合、使用されることがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Accept-Post: <media-type>/<subtype>
Accept-Post: <media-type>/*
Accept-Post: */*

// カンマ区切りのメディア種別のリスト
Accept-Post: <media-type>/<subtype>, <media-type>/<subtype>
```

> [!NOTE]
> `Accept-Post` ヘッダーは、{{HTTPHeader("Accept")}} と同様にメディアの範囲を指定しますが、`q`（{{Glossary("quality values", "品質値")}}）引数による優先順位の指定機能がない点が異なります。
> これは、`Accept-Post` がレスポンスヘッダーであるのに対し、`Accept` はリクエストヘッダーであるためです。

## ディレクティブ

- `<media-type>/<subtype>`
  - : 単一で厳密な[メディア種別](/ja/docs/Web/HTTP/Guides/MIME_types)、例えば `text/html` など。
- `<media-type>/*`
  - : サブタイプのないメディア種別。
    例えば、`image/*` は `image/png`, `image/svg`, `image/gif` 等の画像種別に対応します。
- `*/*`
  - : 任意のメディア種別。

## 例

```http
Accept-Post: application/json, text/plain
Accept-Post: image/webp
Accept-Post: */*
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

このヘッダーに関しては、ブラウザーの互換性は関係ありません。
このヘッダーはサーバーから送信されるものであり、仕様上、クライアントの動作は定義されていません。

## 関連情報

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}} リクエストメソッド
