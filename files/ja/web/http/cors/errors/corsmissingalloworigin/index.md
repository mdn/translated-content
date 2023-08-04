---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---

{{HTTPSidebar}}

## 理由

```
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## 何が悪いのか

{{Glossary("CORS")}} リクエストへのレスポンスが、リソースが現在のオリジン内で操作しているコンテンツによってアクセスできるかどうかを判断するために使われる、必須の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーを欠いています。

サーバーを自分で制御できる場合は、要求しているサイトのオリジンを `Access-Control-Allow-Origin` ヘッダーの値に追加して、アクセスが許可されているドメインの一覧に追加してください。

例えば、 `https://amazing.site` のサイトが CORS を使用したリソースにアクセスできるよう許可するためには、ヘッダーを以下のようにしてください。

```
Access-Control-Allow-Origin: https://amazing.site
```

`*` を使用することで、あらゆるサイトにアクセスを許可するようサイトを構成することもできます。これは公開 API にのみ使用してください。非公開の API には `*` を使用するべきではなく、代わりに具体的なドメインやドメインの一覧を設定してください。加えて、ワイルドカードは [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性が `anonymous` に設定された要求にのみ動作し、リクエストでは Cookie のような資格情報の送信を抑制します。

```
Access-Control-Allow-Origin: *
```

> **警告:** ワイルドカードを使用して、非公開の API へのアクセスをすべてのサイトに許可することは、悪い考えです。

何らかのサイトが CORS リクエストを `*` ワイルドカードを使用すること*なく* (たとえば資格情報を有効にする場合) 利用できるようにするには、サーバーにリクエストの `Origin` ヘッダーの値を読み取り、その値を `Access-Control-Allow-Origin` に設定することに加えて、一部のヘッダーがオリジンに応じて動的に設定されることを示すために `Vary: Origin` ヘッダーを設定する必要があります。

例えば Apache では、サーバー構成 (の中の `<Directory>`, `<Location>`, `<Files>`, `<VirtualHost>` のうち適切な節) に次のような行を追加してください。構成はふつう、 `.conf` ファイル又は (一般的な名前は `httpd.conf` や `apache.conf`) 又は `.htaccess` ファイルにあります。

```
Header set Access-Control-Allow-Origin 'origin-list'
```

Nginx では、このヘッダーを設定するコマンドは次の通りです。

```
add_header 'Access-Control-Allow-Origin' 'origin-list'
```

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
