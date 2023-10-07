---
title: Warning
slug: Web/HTTP/Headers/Warning
---

{{HTTPSidebar}}

> **メモ:** `Warning` ヘッダーはまもなく非推奨になる予定です。詳しくは [Warning (https://github.com/httpwg/http-core/issues/139)](https://github.com/httpwg/http-core/issues/139) や [Warning: header & stale-while-revalidate (https://github.com/whatwg/fetch/issues/913)](https://github.com/whatwg/fetch/issues/913) をご覧ください。

**`Warning`** は HTTP の一般ヘッダーで、可能性のある問題についてメッセージのステータスによる情報を含みます。一つのレスポンスに複数の `Warning` ヘッダーが含まれる可能性があります。

`Warning` ヘッダーフィールドは一般的にあらゆるメッセージに適用できますが、一部の警告コードはキャッシュ専用であり、レスポンスメッセージのみに適用することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("General header", "一般ヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## ディレクティブ

- \<warn-code>

  - : 3 桁の警告番号です。最初の桁は、検証後にレスポンスを格納する際に `Warning` を削除する必要があるかどうかを示します。

    - `1xx` の警告コードは、新鮮さやレスポンスの検証ステータスを表し、キャッシュされる際に削除されます。
    - `2xx` の警告コードは、検証によって修正されない表現のいくつかの側面を説明しており、レスポンス全体が送信されない限り、検証後もキャッシュによって削除されないことを表します。

- \<warn-agent>
  - : `Warning` ヘッダーを追加するサーバーやソフトウェアの名前または仮名です (エージェントが不明な場合は "-" になることがあります)。
- \<warn-text>
  - : エラーを説明する助言のテキストです。
- \<warn-date>
  - : 任意。複数の `Warning` ヘッダーが送信される場合は、 {{HTTPHeader("Date")}} ヘッダーと一致する日付を入れてください。

## 警告コード

[HTTP Warn Codes registry at iana.org](http://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) では、警告コードの名前空間を定義しています。

| コード | テキスト                         | 説明                                                                                               |
| ------ | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| 110    | Response is Stale                | キャッシュによって提供されたレスポンスが古くなっている (有効期限が切れている)。                    |
| 111    | Revalidation Failed              | サーバーへ到達できなかったため、レスポンスの検証をしようとして失敗した。                           |
| 112    | Disconnected Operation           | キャッシュがネットワークの他の部分から切断された。                                                 |
| 113    | Heuristic Expiration             | キャッシュが 24 時間より長い保持時間を選択しており、かつレスポンスの時間が 24 時間よりも長い場合。 |
| 199    | Miscellaneous Warning            | 任意で特定されていない警告                                                                         |
| 214    | Transformation Applied           | コンテンツのエンコーディング、メディア種別など、表現方法の変換を行った場合にプロキシが追加します。 |
| 299    | Miscellaneous Persistent Warning | 199 と同様だが、永続的な警告を含む場合                                                             |

## 例

```
Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## 仕様書

| 仕様書                            | 題名                                            |
| --------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Warning", "5.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## ブラウザーの互換性

{{Compat("http.headers.Warning")}}

## 関連情報

- {{HTTPHeader("Date")}}
- [HTTP response status codes](/ja/docs/Web/HTTP/Status)
