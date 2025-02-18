---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Status/505
l10n:
  sourceCommit: 6bef243050a1f49bf5b7f37e9c4552f7aa30e24d
---

{{HTTPSidebar}}

HTTP の **`505 HTTP Version Not Supported`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Status#サーバーエラーレスポンス)のステータスコードで、リクエストで使用されている HTTP バージョンにサーバーが対応していないことを示します。

リクエスト行が `GET /path to resource HTTP/1.1` のように正しく形成されていない場合や、リクエスト行の終端が `\r\n` ではなく `\n` になっている場合などに、このエラーが発生することがよくあります。
例えば、下記に示した例のように、ロードバランサーなどの仲介装置は転送されたリクエストの行を処理しない場合があります。

## ステータス

```http
505 HTTP Version Not Supported
```

## 例

### 不正なリクエスト行による 505 エラー

次の例では、クライアントは `example.com/dog%20trainers` をリクエストしますが、ロードバランサーの構成が正しくないため、 URL の{{Glossary("Percent-encoding", "パーセントエンコーディング")}}が適切に処理されません。
この場合、オリジンサーバーは HTTP バージョンの代わりに `trainers` を認識し、代わりに `505` レスポンスが返されます。
サーバー管理者が問題の根本原因を特定するのに役立つ可能性がある方法を示すために、リクエスト識別子がレスポンス本体に含まれています。

```http
GET /dog trainers HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 505 HTTP Version Not Supported
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>505 HTTP Version Not Supported</title>
</head>
<body>
  <h1>505 HTTP Version Not Supported</h1>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
  <p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}} ヘッダー
