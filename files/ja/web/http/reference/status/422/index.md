---
title: 422 Unprocessable Content
slug: Web/HTTP/Reference/Status/422
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`422 Unprocessable Content`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、サーバーがリクエストコンテンツのコンテンツ型を理解し、リクエストコンテンツの構文が正しいことを示していますが、コンテンツに格納された指示を処理することができなかったことを表します。

`422` のレスポンスを受け取ったクライアントは、リクエストを変更せずに繰り返しても、同じエラーで失敗することを想定しておくべきです。

## 状態

```http
422 Unprocessable Content
```

## 例

### SHA 検証の失敗

次の例では、ファイルコンテンツの更新リクエストを行います（[GitHub の API に基づく](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)）。
`content` フィールドは {{glossary("Base64")}} エンコード方式で、 `\n` 改行文字を 60 文字ごとに使用し、文字列の末尾に 1 つ追加します。

```http
PUT /repos/mdn/content/contents/README.md HTTP/1.1
Host: api.example.com
Accept: application/vnd.github+json
Authorization: Bearer abcd123
Content-Type: application/json
Content-Length: 165

{
  "message": "My commit",
  "content": "WW9zaGkgd2FzIHRoZXJlLCBzbyB3ZXJlIEF5c2UsIGFuZCBCZWxnaW4uIEl0\nIHdhcyBncmVhdCE=\n",
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

この実装では、サーバーは厳密に {{rfc("4648")}} に準拠した Base64 エンコードコンテンツ（[厳密なエンコード方式](https://ruby-doc.org/3.3.2/stdlibs/base64/Base64.html#method-i-strict_encode64)を使用）を期待します。 `422 Unprocessable Content` レスポンスが返され、メッセージフィールドは検証エラーのコンテキストを提供します。

```http
HTTP/1.1 422 Unprocessable Content
Date: Fri, 28 Jun 2024 12:00:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 187

{
  "message": "content is not valid Base64",
  "documentation_url": "https://docs.example.com/en/rest/repos/contents"
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
