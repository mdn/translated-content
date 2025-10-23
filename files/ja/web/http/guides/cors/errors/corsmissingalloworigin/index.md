---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

## 理由

```plain
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## エラーの原因

{{Glossary("CORS")}} リクエストへのレスポンスが、リソースが現在のオリジン内で操作しているコンテンツによってアクセスできるかどうかを判断するために使われる、必須の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーを欠いています。

サーバーを自分で制御できる場合は、リクエストしているサイトのオリジンを `Access-Control-Allow-Origin` ヘッダーの値に追加して、アクセスが許可されているドメインの一覧に追加してください。

例えば、`https://example.com` のサイトが CORS を使用したリソースにアクセスできるよう許可するためには、ヘッダーを以下のようにしてください。

```http
Access-Control-Allow-Origin: https://example.com
```

`*` ワイルドカードを使用することで、あらゆるサイトにアクセスを許可するようサイトを構成することもできます。これは公開 API にのみ使用してください。非公開の API には `*` を使用するべきではなく、代わりに具体的なドメインやドメインの一覧を設定してください。加えて、ワイルドカードは [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性が `anonymous` に設定されたリクエストにのみ動作し、リクエストでは Cookie のような資格情報の送信を抑制します。

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> ワイルドカードを使用して、非公開の API へのアクセスをすべてのサイトに許可することは、悪い考えです。

何らかのサイトが CORS リクエストを `*` ワイルドカードを使用すること*なく* (たとえば資格情報を有効にする場合) 利用できるようにするには、サーバーにリクエストの `Origin` ヘッダーの値を読み取り、その値を `Access-Control-Allow-Origin` に設定することに加えて、一部のヘッダーがオリジンに応じて動的に設定されることを示すために `Vary: Origin` ヘッダーを設定する必要があります。

## 一般的なウェブサーバーでの例

ウェブサーバーによって、ヘッダーを設定するための正確なディレクティブは異なります。

下記の例では、

**Apache**（[ドキュメントはこちら](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)）では、サーバー構成（適切な `<Directory>`, `<Location>`, `<Files>`, `<VirtualHost>` 節内）に以下の行を追加します。構成は通常、`.conf` ファイル（一般的な名前は `httpd.conf` や `apache.conf` です）または `.htaccess` ファイルにあります。

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

**Nginx**（[ドキュメントはこちら](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)）では、このヘッダーをセットアップするコマンドは次の通りです。

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/Guides/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/Guides/CORS)
