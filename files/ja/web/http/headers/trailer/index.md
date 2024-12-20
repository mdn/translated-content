---
title: Trailer
slug: Web/HTTP/Headers/Trailer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**Trailer** レスポンスヘッダーにより、メッセージ本体の送信中に動的に生成される可能性のあるメタデータ（メッセージの完全性チェック、デジタル署名、後処理のステータスなど）を提供するために、送信者がチャンクされたメッセージの終わりに追加のフィールドを含めることが可能になります。

> [!NOTE]
> トレーラーフィールドを許可するには、{{HTTPHeader("TE")}} リクエストヘッダーを "trailer" に設定する必要があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダーの種類</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}、
        {{Glossary("Response header", "レスポンスヘッダー")}}、
        {{Glossary("Payload header", "ペイロードヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
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

  - : チャンクされたメッセージのトレーラー部分に存在する HTTP ヘッダーフィールド。
    以下のヘッダーフィールドは**許可されていません**。

    - メッセージフレーミングヘッダー（{{HTTPHeader("Transfer-Encoding")}} や
      {{HTTPHeader("Content-Length")}} など）
    - ルーティングヘッダー（{{HTTPHeader("Host")}}）
    - リクエスト修飾子（制御や条件、例えば {{HTTPHeader("Cache-Control")}}、{{HTTPHeader("Max-Forwards")}}、{{HTTPHeader("TE")}} など）
    - 認証ヘッダー（{{HTTPHeader("Authorization")}} や {{HTTPHeader("Set-Cookie")}} など）
    - または {{HTTPHeader("Content-Encoding")}}、{{HTTPHeader("Content-Type")}}、{{HTTPHeader("Content-Range")}}、そして `Trailer` 自体。

## 例

### トレーラーヘッダーを使用するチャンク転送エンコード方式

この例では、{{HTTPHeader("Expires")}} ヘッダーがチャンクされたメッセージの終わりに使用され、末尾のヘッダーとして有益な役割を果たします。

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT\r\n
\r\n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [チャンク転送エンコーディング](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)（英語）
