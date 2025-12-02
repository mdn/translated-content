---
title: 保護されたコンテキスト
slug: Web/Security/Defenses/Secure_Contexts
original_slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}

**保護されたコンテキスト** (セキュアコンテキスト) とは、認証と機密性の一定の最低基準を満たしている `Window` や `Worker` のことです。多くの Web API や機能は保護されたコンテキストでのみアクセス可能です。保護されたコンテキストの主な目的は、[中間者攻撃](https://ja.wikipedia.org/wiki/中間者攻撃) が攻撃の犠牲者をさらに危険にさらす可能性のある強力な API にアクセスすることを防ぐことです。

## 機能をアクセス制限すべき理由

Web の API には強力なものもあり、攻撃者に対して以下のような (それよりも多くの) 能力を与えてしまう可能性があります。

- ユーザーのプライバシーを侵害する
- ユーザーのコンピューターに対して低水準のアクセス権限を得る
- ユーザーの認証情報のようなデータへのアクセス権限を得る

## コンテキストが安全とみなされるのはいつですか？

コンテキストは、[Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) 仕様で定義されている認証および機密性の一定の最低基準を満たしている場合に、保護されたコンテキストとみなされます。特定の文書が保護されたコンテキストである[トップレベルの閲覧コンテキスト](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (基本的には、保護されたコンテキストであるウィンドウやタブを含むコンテキスト) の[アクティブな文書](https://html.spec.whatwg.org/multipage/browsers.html#active-document)である場合、その文書は保護されたコンテキストにあるとみなされます。

例えば、{{HTMLElement("iframe")}} 内で TLS 上で配信された文書であっても、TLS 上で配信されなかった祖先がある場合には、そのコンテキストは安全であるとは見なされ**ません**。

しかし、安全ではないコンテキストによって ([noopener](/ja/docs/Web/API/Window/open#noopener) を指定してもしなくても) 新しいウィンドウが作成された場合、 オープナーが安全ではないという事実は、新しいウィンドウが安全であるとみなされるかどうかに影響を与えないことに注意してください。これは、特定の文書が保護されたコンテキストにあるかどうかの判断は、それが関連付けられているトップレベルの閲覧コンテキスト内でそれを考慮することにのみ基づいており、保護されていないコンテキストがたまたまその文書を作成するために使用されたかどうかではないからです。

`http://127.0.0.1` の URL、`http://localhost` の URL、`http://*.localhost` の URL (例 `http://dev.whatever.localhost/`) 、`file://` の URL など、ローカルに配信されたリソースも安全に配信されていると考えられます。

> [!NOTE]
> Firefox 84 以降では、`http://localhost` や `http://*.localhost` というURLを信頼できるオリジンとして扱っています (以前のバージョンでは、`localhost` がローカル/ループバックアドレスにマップされると保証されていなかったため、信頼できるオリジンとしては扱っていませんでした) 。

ローカルではないリソースが安全であるとみなされるためには、以下の基準を満たす必要があります。

- _https://_ または _wss://_ URL で提供されなければなりません
- リソースを配信するために使用されるネットワークチャネルのセキュリティプロパティは、非推奨と見なされてはなりません

## 機能の判別

ページは、 {{domxref("Window.isSecureContext")}} または {{domxref("WorkerGlobalScope.isSecureContext")}} という論理値を使用して、安全なコンテキストにあるかどうかを調べることができます。これらの値はグローバルスコープで公開されます。

```js
if (window.isSecureContext) {
  // Service Worker が実行されているので、このページは保護されたコンテキストです
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [保護されたコンテキストに制限されたプラットフォーム機能](/ja/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — 保護されたコンテキストでのみ使用できる機能のリスト
- {{domxref("Window.isSecureContext")}} および {{domxref("WorkerGlobalScope.isSecureContext")}}
- <https://permission.site> — HTTP と HTTPS を使用して、ブラウザーが使用している API のアクセス許可チェックを確認できるサイト。
- [Strict-Transport-Security](/ja/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP ヘッダー
