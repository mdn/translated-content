---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`100 Continue`** は[情報レスポンス](/ja/docs/Web/HTTP/Reference/Status#情報レスポンス)ステータスコードで、リクエストの最初の部分が受信され、サーバーによってまだ拒否されていないことを示します。
クライアントはリクエストを続けるべきですが、リクエストがすでに完了している場合は、 100 レスポンスを破棄します。

リクエストに {{HTTPHeader("Expect", "Expect: 100-continue")}} ヘッダーが含まれている場合、100 Continue レスポンスはサーバーがリクエストコンテンツを受信する準備ができている、または受信可能であることを示します。
例えば、事前に認証資格情報を確認せずに状態変更操作を送信する場合など、クライアントがエラーが発生する可能性が高いと予想している場合、100 Continue レスポンスを待つと役立つ場合があります。

## ステータス

```http
100 Continue
```

## 例

### PUT リクエストで 100 Continue を期待する

次の {{HTTPMethod("PUT")}} リクエストは、ファイルのアップロードに関する情報をサーバーに送信します。クライアントは、{{HTTPStatus("405")}}、{{HTTPStatus("401")}}、{{HTTPStatus("403")}} などのエラーとなる可能性のあるデータをネットワーク上で送信しないよう、 100 のレスポンスを受信した場合にコンテンツの処理を続行することを示しています。最初の段階では、クライアントはヘッダーのみを送信し、その中には {{HTTPHeader("Expect", "Expect: 100-continue")}} ヘッダーが含まれています。

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 123456789
Expect: 100-continue
```

サーバーはリクエストを続行できることを示します。

```http
HTTP/1.1 100 Continue
```

クライアントは実際のデータを送信することでリクエストを完了します。

```http
[PUT リクエストのためのコンテンツとしての動画データ]
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
