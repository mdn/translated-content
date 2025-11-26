---
title: Sec-Fetch-User ヘッダー
short-title: Sec-Fetch-User
slug: Web/HTTP/Reference/Headers/Sec-Fetch-User
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`Sec-Fetch-User`** は{{Glossary("fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}で、ユーザーによる操作で開始されたリクエストに対して送信され、その値は常に `?1` です。

サーバーはこのヘッダーを使用して、文書や iframe などからのナビゲーションリクエストがユーザーによって発信されたかどうかを識別できます。

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
Sec-Fetch-User: ?1
```

## ディレクティブ

値は常に `?1` です。リクエストがユーザーによるアクティベーション以外で発生した場合、 仕様ではヘッダーを完全に除外するようにブラウザーに要求されています。

## 例

### Sec-Fetch-User の使用

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

- フェッチメタデータリクエストヘッダー: {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}
- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
