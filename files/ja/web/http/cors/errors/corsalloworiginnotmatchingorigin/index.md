---
title: "Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'"
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

## 理由

```plain
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## エラーの原因

リクエストを作成しているオリジンが、 {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーによって許可されたオリジンのいずれにも一致しないことを表します。このエラーは、レスポンスに複数の `Access-Control-Allow-Origin` ヘッダーが含まれていると発生することがあります。

コードが CORS リクエストを使用してアクセスしているサービスが管理下にあるのであれば、 `Access-Control-Allow-Origin` ヘッダーがそのアクセス元が含むように構成されていること、及びそのヘッダーがレスポンス内に 1 つしか含まれていないことを確認してください。ヘッダー自体はコンマ区切りで複数のオリジンを受け付けるので、新しいオリジンを追加することは難しくはありません。

例えば Apache では、サーバー構成（の中の `<Directory>`, `<Location>`, `<Files>`, `<VirtualHost>` のうち適切な節）に次のような行を追加してください。構成はふつう、 `.conf` ファイルまたは（一般的な名前は `httpd.conf` や `apache.conf`）または `.htaccess` ファイルにあります。

> [!WARNING]
> オリジンの一部として HTTPS または HTTP プロトコルを記載する必要があります。

```apacheconf
Header set Access-Control-Allow-Origin 'origin'
```

Nginx では、このヘッダーを設定するコマンドは次の通りです。

```nginx
add_header 'Access-Control-Allow-Origin' 'origin'
```

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [CORS の有効化: CORS 対応をサーバーに追加したい](https://enable-cors.org/server.html)（英語）
