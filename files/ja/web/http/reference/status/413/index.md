---
title: 413 Content Too Large
slug: Web/HTTP/Reference/Status/413
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP の **`413 Content Too Large`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、リクエストエンティティがサーバーによって定義された制限よりも大きいことを示します。
サーバーは接続を閉じるか {{HTTPHeader("Retry-After")}} ヘッダーフィールドを返します。

{{rfc("9110")}} 以前では、このステータスのレスポンスフレーズは **`Payload Too Large`** でした。
このメッセージは今でも広く使われています。

## ステータス

```http
413 Content Too Large
```

## 例

### ファイルのアップロード制限を超えた場合

次の例は、クライアントが [`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file) 要素で画像を使用して、 `method="post"` でフォームを送信する可能性があることを示しています。

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

サーバーが処理するファイルの最大サイズに制限がある場合、サーバーはアップロードを拒否することがあります。レスポンス本体には、いくらかの状況説明を記した `message` を記載することができます。

```http
HTTP/1.1 413 Content Too Large
Content-Type: application/json
Content-Length: 97

{
  "error": "Upload failed",
  "message": "Maximum allowed upload size is 4MB",
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
