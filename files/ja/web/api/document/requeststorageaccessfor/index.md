---
title: "Document: requestStorageAccessFor() メソッド"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Storage Access API")}}{{non-standard_header}}

**`requestStorageAccessFor()`** は {{domxref("Document")}} インターフェイスのメソッドで、最上位のサイトが、同じ[関連ウェブサイトセット](https://privacysandbox.google.com/cookies/related-website-sets-integration)内の別のサイトに由来する埋め込みコンテンツに代わって、サードパーティクッキーへのアクセスをリクエストできるようにします。アクセスが許可された場合は履行し、拒否された場合は拒否される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### 引数

- `requestedOrigin`
  - : サードパーティクッキーへのアクセスをリクエストするオリジンの URL を表す文字列です。

### 返値

{{jsxref("Promise")}} で、サードパーティクッキーへのアクセスが許可された場合は `undefined` で履行され、拒否された場合は拒否されます。

`requestStorageAccessFor()` のリクエストは、最上位のコンテンツがタップやクリックなどのユーザージェスチャーを処理中（{{Glossary("transient activation", "一時的な有効化")}}）でない限り、または権限がすでに付与されていない限り、自動的に拒否されます。権限が以前に付与されていない場合は、ユーザージェスチャーに基づくイベントハンドラー内で呼び出す必要があります。ユーザージェスチャーの扱いは、プロミスの状態によって異なります。

- プロミスが履行された場合（つまり、権限が許可された場合）、ユーザージェスチャーは消費されていないため、その後もスクリプトからユーザージェスチャーが必要な API を呼び出せます。
- プロミスが拒否された場合（つまり、権限が許可されなかった場合）、ユーザージェスチャーは消費されているため、スクリプトはユーザージェスチャーが必要な操作を行えません。これにより、権限が拒否された後にスクリプトが `requestStorageAccessFor()` を再度呼び出すことを防ぎます。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在の {{domxref("Document")}} がまだアクティブでない場合に発生します。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - 文書のウィンドウが[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)ではない場合。
    - この文書が最上位の文書でない場合。
    - 文書のオリジンが `null` の場合。
    - 指定された `requestedOrigin` が[不透明](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque)な場合。
    - 最上位のサイトと埋め込み先のサイトが同じ[関連ウェブサイトセット](https://privacysandbox.google.com/cookies/related-website-sets-integration)に属していない場合。
    - 埋め込まれた {{htmlelement("iframe")}} がサンドボックス化されており、`allow-storage-access-by-user-activation` トークンが設定されていない場合。
    - {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によって使用がブロックされた場合。
    - ユーザーエージェントの権限リクエストにより、この API の使用が拒否された場合。
- {{jsxref("TypeError")}}
  - : `requestedOrigin` が有効な URL ではない場合に発生します。

## 解説

`requestStorageAccessFor()` メソッドは、クッキーを必要とする別サイトの画像やスクリプトを使用する最上位のサイトで、ストレージアクセス API を採用する際の課題に対処します。これは、プライバシーを改善するため（例えばトラッキングを防ぐため）、デフォルトで[サードパーティ](/ja/docs/Web/Privacy/Guides/Third-party_cookies)の[パーティション化されていない](/ja/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies)クッキーへのアクセスをブロックするユーザーエージェントに関連する機能であり、[ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) の拡張提案です。

`requestStorageAccessFor()` は、例えば {{htmlelement("img")}} 要素など、ストレージアクセスをリクエストできない最上位サイトに直接埋め込まれた別サイトのリソースに対して、サードパーティクッキーへのアクセスを有効にできます。独自のロジックとリソースを持ち、サードパーティクッキーへのアクセスを必要とする `<iframe>` 内の別サイトのコンテンツは、{{domxref("Document.requestStorageAccess()")}} を介してストレージアクセスをリクエストする必要があります。

サードパーティクッキーにアクセスする権限が `requestStorageAccessFor()` によってすでに付与されているかどうかを調べるには、{{domxref("Permissions.query()")}} を呼び出します。その際、機能名 `"top-level-storage-access"` を指定します。これは通常の {{domxref("Document.requestStorageAccess()")}} メソッドで使用する機能名とは異なり、`"storage-access"` です。

`Permissions.query()` の呼び出しでは、埋め込みオリジンを指定する必要があります。例えば、次のようにします。

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> この機能の使用は、サーバーに設定された {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)（ストレージアクセス API の他の部分を制御するものと同じ）によってブロックされる場合があります。また、許可リスト、ブロックリスト、端末上の分類、ユーザー設定、[クリックジャッキング](/ja/docs/Web/Security/Attacks/Clickjacking)対策の経験則など、ブラウザー固有の追加チェックにも合格する必要があります。

## 例

```js
function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        // ストレージアクセスを使用
        doThingsWithCookies();
      },
      (err) => {
        // エラーを処理
      },
    );
  }
}
```

`requestStorageAccessFor()` の呼び出しが成功すると、[CORS](/ja/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) を使用するクロスサイトリクエストにはクッキーが含まれるため、サイト側ではリクエストの開始を待つ必要がある場合があります。このようなリクエストでは [`credentials: "include"`](/ja/docs/Web/API/RequestInit#credentials) オプションを使用し、リソースには `crossorigin="use-credentials"` 属性を指定する必要があります。

例えば、次のようにします。

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // 何らかの処理を行う
    });
}
```

> [!NOTE]
> より詳しい例については、[ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccess()")}}
- [ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
