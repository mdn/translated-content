---
title: 保護されたコンテキスト
slug: Web/Security/Defenses/Secure_Contexts
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**保護されたコンテキスト** (セキュアコンテキスト) とは、認証と機密性の一定の最低基準を満たしている `Window` や `Worker` のことです。多くの Web API や機能は保護されたコンテキストでのみアクセス可能です。保護されたコンテキストの主な目的は、[中間者攻撃](https://ja.wikipedia.org/wiki/中間者攻撃) が攻撃の犠牲者をさらに危険にさらす可能性のある強力な API にアクセスすることを防ぐことです。

## 機能をアクセス制限すべき理由

Web の API には強力なものもあり、攻撃者に対して以下のような (それよりも多くの) 能力を与えてしまう可能性があります。

- ユーザーのプライバシーを侵害する
- ユーザーのコンピューターに対して低水準のアクセス権限を得る
- ユーザーの認証情報のようなデータへのアクセス権限を得る

## コンテキストが保護されているとみなされる場合

コンテキストは、[Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) 仕様で定義されている認証および機密性の一定の最低基準を満たしている場合に、保護されたコンテキストとみなされます。特定の文書が保護されたコンテキストである[トップレベルの閲覧コンテキスト](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (基本的には、保護されたコンテキストであるウィンドウやタブを含むコンテキスト) の[アクティブな文書](https://html.spec.whatwg.org/multipage/browsers.html#active-document)である場合、その文書は保護されたコンテキストにあるとみなされます。

例えば、{{HTMLElement("iframe")}} 内で TLS 上で配信された文書であっても、TLS 上で配信されなかった祖先がある場合には、そのコンテキストは保護されているとは見なされ**ません**。

しかし、保護されていないコンテキストによって ([noopener](/ja/docs/Web/API/Window/open#noopener) を指定してもしなくても) 新しいウィンドウが作成された場合、 オープナーが保護されていないという事実は、新しいウィンドウが保護されているとみなされるかどうかに影響を与えないことに注意してください。これは、特定の文書が保護されたコンテキストにあるかどうかの判断は、それが関連付けられているトップレベルの閲覧コンテキスト内でそれを考慮することにのみ基づいており、保護されていないコンテキストがたまたまその文書を作成するために使用されたかどうかではないからです。

ローカルではないリソースが保護されているとみなされるためには、以下の基準を満たす必要があります。

- `https://` の URL で提供されなければなりません
- リソースを配信するために使用されるネットワークチャネルのセキュリティプロパティは、非推奨と見なされてはなりません

## 潜在的に信頼できるオリジン

**潜在的に信頼できるオリジン**とは、たとえ保護されたコンテキストの基準を満たしていないものの、ブラウザーが一般的にデータセキュリティを保証できると信頼できるオリジンを指します。

`http://127.0.0.1`、`http://localhost`、`http://*.localhost` といったローカルで配信されるリソース（例えば `http://dev.whatever.localhost/`）は HTTPS を使用して配信されませんが、ブラウザーと同じ端末上にあるため、安全に配信されたと考えることができます。したがって、これらは潜在的に信頼できるものです。これは、開発者がアプリケーションをローカルでテストする際に便利です。

`file://` の URL についても、一般的に同じことが言えます。

保護された [WebSocket](/ja/docs/Web/API/WebSockets_API) (`"wss://"`) URLも、同時に潜在的に信頼できるものとみなされます。

ベンダー固有の URL スキーム（例: `app://` や `chrome-extension://`）は、すべてのブラウザーで潜在的に信頼できると考えられるわけではありませんが、それらのスキームが由来するベンダーのブラウザーでは信頼されることがあります。

> [!NOTE]
> Firefox 84以降では、`http://localhost` および `http://*.localhost` URL を信頼できるオリジンとみなすことに対応しています（以前のバージョンでは対応していませんでした。これは `localhost` がローカル/ループバックアドレスに確実に割り当てられるとは保証されていなかったためです）。

## 機能検出

ページは、 {{domxref("Window.isSecureContext")}} または {{domxref("WorkerGlobalScope.isSecureContext")}} という論理値を使用して、保護されてたコンテキストにあるかどうかを調べることができます。これらの値はグローバルスコープで公開されます。

```js
if (window.isSecureContext) {
  // ページが保護されたコンテキストなので、サービスワーカーを有効にする
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [保護されたコンテキストに制限されている機能](/ja/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — 保護されたコンテキストでのみ使用できる機能のリスト
- {{domxref("Window.isSecureContext")}} および {{domxref("WorkerGlobalScope.isSecureContext")}}
- <https://permission.site> — HTTP と HTTPS を使用して、ブラウザーが使用している API のアクセス許可チェックを確認できるサイト。
- [Strict-Transport-Security](/ja/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP ヘッダー
