---
title: オリジン間リソース共有 (CORS) の構成
short-title: Cross-Origin Resource Sharing (CORS)
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

オリジン間リソース共有 (CORS) は、[`Access-Control-Allow-Origin`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) および関連するヘッダーを使用して処理されます。`Access-Control-Allow-Origin` は、自身のドメイン上のページに対して（[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) や [`fetch()`](/ja/docs/Web/API/Window/fetch) を通じて）リクエストを行うことを許可される、同一オリジン以外のオリジンを定義します。

## 課題

デフォルトで、[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)により、スクリプトによって開始されたオリジンをまたぐ HTTP リクエストはブロックされます。オリジンを越えるスクリプトへのアクセスを必要とする場面はいくつかあります。例えば、JavaScript ライブラリーや公開 API エンドポイントのホスティングを提供するコンテンツ配信ネットワーク (CDN) などです。しかし、オリジンを越えるアクセスは重大なセキュリティリスクを伴うため、慎重に管理する必要があります。

## 解決策

`Access-Control-Allow-Origin` を使用して、自身のドメイン上のページへのリクエストを許可する、同一オリジン以外のオリジンを定義します。

`Access-Control-Allow-Origin` ヘッダーが存在する場合、サイトが機能するために必要な最小限のオリジンとリソースのみを指定する必要があります。例えば、サーバーがウェブサイトと、リモートからの `XMLHttpRequest` アクセスを意図した API の両方を提供している場合、`Access-Control-Allow-Origin` ヘッダーを返すのは API リソースのみとする必要があります。

`Access-Control-Allow-Origin` を適切に設定しないと、許可されていないオリジンがサイト上の任意のページのコンテンツを読み取ることができるようになります。特に、それらのサイトが資格情報を送信できる場合、サイトが [CSRF](/ja/docs/Web/Security/Attacks/CSRF) 攻撃にさらされる恐れがあり、極めて危険です。

特定のオリジンからの認証付きアクセスが要求される場合は、[`Origin`](/ja/docs/Web/HTTP/Reference/Headers/Origin) ヘッダーを反映させるのではなく、`Access-Control-Allow-Origin` がそれらのオリジンのみに設定されていることを確認してください。一般ユーザーによる認証不要のアクセスが要求される場合は、`Access-Control-Allow-Origin` を `*` に設定し、`Access-Control-Allow-Credentials` ヘッダーを除外してください。それ以外の場合は、両方のヘッダーを除外してください。

## 例

任意のサイトが JavaScript ライブラリーのコンテンツを読み取ることができる。

```http
Access-Control-Allow-Origin: *
```

> [!NOTE]
> この設定は、[サブリソースの整合性](/ja/docs/Web/Security/Practical_implementation_guides/SRI)が動作するために必要です。

`https://random-dashboard.example.org` に API の返却結果を読むことができるようにするには、次のようにします。

```http
Access-Control-Allow-Origin: https://random-dashboard.example.org
```

## 関連情報

- [`Access-Control-Allow-Origin`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
- [`Access-Control-Allow-Credentials`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials)
- [`Access-Control-Allow-Headers`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers)
- [`Access-Control-Allow-Methods`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Methods)
- [`Access-Control-Expose-Headers`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers)
- [`Access-Control-Max-Age`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age)
- [`Access-Control-Request-Headers`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Request-Headers)
- [`Access-Control-Request-Method`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Request-Method)
- [`Origin`](/ja/docs/Web/HTTP/Reference/Headers/Origin)
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [CORS for Developers](https://w3c.github.io/webappsec-cors-for-developers/) - W3C (2016)
