---
title: "Document: domain プロパティ"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{ApiRef}} {{Deprecated_Header}}

**`domain`** は {{domxref("Document")}} インターフェイスのプロパティは、[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)で使用される現在の文書の{{glossary("origin", "オリジン")}}のうち、ドメインの部分を取得または設定します。

## 値

文字列です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によってブロックされた。

## 例

### ドメイン名の取得

`https://developer.mozilla.org/ja/docs/Web` の URI において、この例は `currentDomain` に "`developer.mozilla.org`" の文字列を設定します。

```js
const currentDomain = document.domain;
```

このプロパティのゲッターは、現在の文書のオリジンのドメイン部分を返します。ほとんどの場合、これは文書の URL のホスト名部分になります。しかし、いくつかの例外があります：

- 例えば、[データ URL](/ja/docs/Web/URI/Schemes/data) を持つページのように、そのページに不透明な{{glossary("origin", "オリジン")}}がある場合は、空文字列を返します。
- もし `document.domain` [セッター](#セッター)が使用されていれば、設定した値を返します。

ゲッターはセッターと同じ方法で危険ではありませんが、代わりに {{domxref("Location.hostname")}} プロパティを使用する方がシンプルで有益な場合があります。
そうすれば、`document.domain`を完全に避けることができます。

```js
const currentHostname = location.hostname;
```

URL `https://developer.mozilla.org/ja/docs/Web` の場合、`currentHostname` は文字列 "`developer.mozilla.org`" でもあります。
他にも、ポート番号が入る {{domxref("Location.host")}} や、完全なオリジンを提供する {{domxref("Window.origin")}} があります。

### ドメインの設定

```js
document.domain = domainString;
```

このプロパティのセッターは、ページの{{glossary("origin","オリジン")}}を変更するために使用することができます。設定するには、同じドメインか親ドメインを指定します。例えば、`https://a.example.com` と `https://b.example.com` の両方が使用する場合、

```js
document.domain = "example.com";
```

を指定された場合、どちらも同じドメインを持つようにオリジンを変更したことになり、別なオリジンであるにもかかわらず、お互いの DOM に直接アクセスすることができます。

`document.domain` を現在の値に設定しても、何もしないわけではないことに注意してください。それでも元は変わります。例えば、あるページで

```js
document.domain = document.domain;
```

と同じことをしていなければ、同じことをしていない他のページからのクロスオリジンとしてカウントされます。

#### 非推奨

`document.domain` セッターは非推奨です。これは[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)によって指定されたセキュリティ保護を損ない、ブラウザーにおけるオリジンモデルを複雑にし、相互運用性の問題やセキュリティバグを引き起こします。

`document.domain` を設定しようとするのは危険です。すべてのサブドメインからページの DOM にフルアクセスすることができるようになり、意図したものではありません。また、元からポートの部品が除去されるので、これであなたのページは同じIPアドレスや同じホストの部品を持つ他のページから、異なるポートであってもアクセスすることができるようになります。

これは共有ホストでは特に安全ではありません。例えば、他の共有ホスティングの顧客が同じ IP アドレスで別のポートでサイトをホストすることができる場合、`document.domain` を設定すると、通常は他の顧客のサイトがあなたのサイトのデータにアクセスしないように保護する同一生成元保護が除去されます。

同様の問題は、各顧客に異なるサブドメインを与える共有ホスティングサイトでも発生します。サイトが `document.domain` を設定すると、別のサブドメインにいる他の顧客も同じことをすることができ、元のサイトのデータにアクセスし始めることができます。

オリジン間の通信を容易にするために `document.domain` を使用する代わりに、{{domxref("Window.postMessage")}} を使用して非同期メッセージを他のオリジンに送信しましょう。このメッセージパッシングによる制御されたアクセスは、`document.domain` によってすべてのデータが一律に公開されるよりもはるかに安全です。

#### 失敗

セッターは、いくつかのケースで "`SecurityError`" {{domxref("DOMException")}} が発生します。

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{HTTPHeader("Permissions-Policy")}} が無効な場合
- 文書がサンドボックス化された {{htmlelement("iframe")}} の中にある場合。
- 文書に{{glossary("browsing context","閲覧コンテキスト")}}がない場合。
- この文書の[実効ドメイン](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain)が `null` であった場合。
- 指定された値がページの現在のホスト名と同じでも、その親ドメインでもなかった場合。

この最後の失敗の例としては、`https://example.com/` のときに `document.domain` を `"example.org"` に設定しようとすると発生します。

さらに、非推奨ですが、現行の分離機能と組み合わせても何もしません。

- オリジン間分離ページ、つまり {{httpheader("Cross-Origin-Opener-Policy")}} と {{httpheader("Cross-Origin-Embedder-Policy")}} に適切な値を使用しているページで用いる場合。HTTP ヘッダー
- オリジン分離されたページ、すなわち HTTP の {{httpheader("Origin-Isolation")}} ヘッダーを使用しているページで用いる場合。

最後に、`document.domain` を設定しても、いくつかの Web API がオリジンチェックに用いるオリジンは変更されないので、このメカニズムによるサブドメインからのアクセスを防ぐことができます。
関連する API には、{{domxref("Window.localStorage")}}、{{domxref("IndexedDB_API")}}、{{domxref("BroadcastChannel")}}、{{domxref("SharedWorker")}} があります（これらに限定されるものではありません）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
- {{domxref("Location.hostname")}}
- {{domxref("Location.host")}}
- {{domxref("Window.origin")}}
