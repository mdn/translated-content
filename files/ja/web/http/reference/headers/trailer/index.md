---
title: Trailer ヘッダー
short-title: Trailer
slug: Web/HTTP/Reference/Headers/Trailer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **Trailer** {{Glossary("Request header", "リクエストヘッダー")}}兼{{Glossary("Response header", "レスポンスヘッダー")}}により、メッセージ本体の送信中に動的に生成される可能性のあるメタデータ（メッセージの完全性チェック、デジタル署名、後処理のステータスなど）を提供するために、送信者がチャンク化されたメッセージの終わりに追加のフィールドを含めることが可能になります。

> [!NOTE]
> トレーラーフィールドを許可するには、{{HTTPHeader("TE")}} リクエストヘッダーを "trailer" に設定する必要があります。

> [!WARNING]
> 開発者は、Fetch API や XHR を通じて HTTP トレーラーにアクセスすることはできません。
> また、{{HTTPHeader("Server-Timing")}} を除き、ブラウザーは HTTP トレーラーを無視します。
> 詳細については、[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダーの種類</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}、
        {{Glossary("Response header", "レスポンスヘッダー")}}、
        {{Glossary("Content header", "コンテンツヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Trailer: header-names
```

## ディレクティブ

- `header-names`
  - : チャンク化されたメッセージのトレーラー部分に存在する HTTP ヘッダーフィールド。
    以下のヘッダーフィールドは**許可されていません**。
    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, `Trailer`
    - 認証ヘッダー（{{HTTPHeader("Authorization")}} や {{HTTPHeader("Set-Cookie")}} など）
    - メッセージフレーミングヘッダー（{{HTTPHeader("Transfer-Encoding")}} や
      {{HTTPHeader("Content-Length")}} など）
    - ルーティングヘッダー（{{HTTPHeader("Host")}} など）
    - リクエスト修飾子（制御や条件、例えば {{HTTPHeader("Cache-Control")}}、{{HTTPHeader("Max-Forwards")}}、{{HTTPHeader("TE")}} など）

## 例

### HTTP トレーラーとしての Server-Timing

一部のブラウザーでは、{{HTTPHeader("Server-Timing")}} ヘッダーがトレーラーとして送信された場合、開発者ツールにサーバーのタイミングデータを表示させる機能を対応しています。
以下のレスポンスでは、`Trailer` ヘッダーを使用して、レスポンス本体の後に `Server-Timing` ヘッダーが続くことを示しています。
所要時間が `123.4` ミリ秒のメトリック `custom-metric` が送信されます。

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- レスポンス本体 ---
Server-Timing: custom-metric;dur=123.4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Server-Timing")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [チャンク転送エンコーディング](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)（英語）
