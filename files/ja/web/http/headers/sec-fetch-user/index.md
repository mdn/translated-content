---
title: Sec-Fetch-User
slug: Web/HTTP/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Sec-Fetch-User`** は{{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}で、これはユーザーアクティベーションによって開始されたリクエストに 対してのみ送られ、その値は常に `?1` です。

サーバーはこのヘッダーを使用して、文書や iframe などからのナビゲーションリクエストがユーザーによって発信されたかどうかを識別できます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
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
Sec-Fetch-User: ?1
```

## ディレクティブ

値は常に `?1` です。リクエストがユーザーによるアクティベーション以外で発生した場合、 仕様ではヘッダーを完全に除外するようにブラウザーに要求されています。

## 例

ユーザーが同じオリジンの別のページへのページリンクをクリックした場合、結果として生じるリクエストには以下のヘッダーが入ります。

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連ヘッダー

  - {{HTTPHeader("Sec-Fetch-Dest")}}
  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}

- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/fetch-metadata/) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
