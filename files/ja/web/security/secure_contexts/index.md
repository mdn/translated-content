---
title: 安全なコンテキスト
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: e1f571eced916f60ca387ecb562271f6235beb5c
---

**安全なコンテキスト** (セキュアコンテキスト) とは、認証と機密性の一定の最低基準を満たしている `Window` や `Worker` のことです。多くの Web API や機能は安全なコンテキストでのみアクセス可能です。安全なコンテキストの主な目的は、[中間者攻撃](https://ja.wikipedia.org/wiki/中間者攻撃) が攻撃の犠牲者をさらに危険にさらす可能性のある強力な API にアクセスすることを防ぐことです。

## 機能をアクセス制限すべき理由

Web の API には強力なものもあり、攻撃者に対して以下のような (それよりも多くの) 能力を与えてしまう可能性があります。

- ユーザーのプライバシーを侵害する
- ユーザーのコンピューターに対して低水準のアクセス権限を得る
- ユーザーの認証情報のようなデータへのアクセス権限を得る

## コンテキストが安全とみなされるのはいつですか？

コンテキストは、[Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) 仕様で定義されている認証および機密性の一定の最低基準を満たしている場合に、安全なコンテキストとみなされます。特定の文書が安全なコンテキストである[トップレベルのブラウジングコンテキスト](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (基本的には、安全なコンテキストであるウィンドウやタブを含むコンテキスト) の[アクティブな文書](https://html.spec.whatwg.org/multipage/browsers.html#active-document)である場合、その文書は安全なコンテキストにあるとみなされます。

例えば、{{HTMLElement("iframe")}} 内で TLS 上で配信された文書であっても、TLS 上で配信されなかった祖先がある場合には、そのコンテキストは安全であるとは見なされ**ません**。

しかし、安全ではないコンテキストによって ([noopener](/ja/docs/Web/API/Window/open#noopener) を指定してもしなくても) 新しいウィンドウが作成された場合、 オープナーが安全ではないという事実は、新しいウィンドウが安全であるとみなされるかどうかに影響を与えないことに注意してください。これは、特定の文書が安全なコンテキストにあるかどうかの判断は、それが関連付けられているトップレベルのブラウジングコンテキスト内でそれを考慮することにのみ基づいており、安全でないコンテキストがたまたまその文書を作成するために使用されたかどうかではないからです。

`http://127.0.0.1` の URL、`http://localhost` の URL、`http://*.localhost` の URL (例 `http://dev.whatever.localhost/`) 、`file://` の URL など、ローカルに配信されたリソースも安全に配信されていると考えられます。

> [!NOTE]
> Firefox 84 以降では、`http://localhost` や `http://*.localhost` というURLを信頼できるオリジンとして扱っています (以前のバージョンでは、`localhost` がローカル/ループバックアドレスにマップされると保証されていなかったため、信頼できるオリジンとしては扱っていませんでした) 。

ローカルではないリソースが安全であるとみなされるためには、以下の基準を満たす必要があります。

- _https\://_ または _wss\://_ URL で提供されなければなりません
- リソースを配信するために使用されるネットワークチャネルのセキュリティプロパティは、非推奨と見なされてはなりません

## 機能の判別

グローバルスコープで利用できる {{domxref("isSecureContext")}} の真偽値を用いることで、そのページ自身が安全なコンテキストの中にいるかどうか確かめることができます。

```js
if (window.isSecureContext) {
  // Service Worker が実行されているので、このページは安全なコンテキストです
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## 仕様

{{Specifications}}

## 関連情報

- [安全なコンテキストに制限されたプラットフォーム機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) — 安全なコンテキストでのみ使用できる機能のリスト
- {{domxref("isSecureContext")}}
- <https://permission.site> — HTTP と HTTPS を使用して、ブラウザーが使用している API のアクセス許可チェックを確認できるサイト。
- [Strict-Transport-Security](/ja/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP ヘッダー

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}
