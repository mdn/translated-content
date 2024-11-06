---
title: "Document: requestStorageAccessFor() メソッド"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: 0ebc78fd61acddbe9505330f006b706ac786456d
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

**`requestStorageAccessFor()`** は {{domxref("Document")}} インターフェイスのメソッドで、最上位のサイトが、同じ[一連の関連ウェブサイト](/ja/docs/Web/API/Storage_Access_API/Related_website_sets)内の別のサイトを元とする埋め込みコンテンツに代わって、サードパーティのクッキーへのアクセスをリクエストできるようにします。アクセスが許可された場合は解決されたプロミス ({{jsxref("Promise")}}) を返し、アクセスが拒否された場合は拒否されたプロミスを返します。

## 構文

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### 引数

- `requestedOrigin`
  - : 文字列で、サードパーティクッキーアクセスをリクエストされたオリジンの URL を表します。

### 返値

{{jsxref("Promise")}} で、サードパーティクッキーが許可された場合は `undefined` で履行され、アクセスが拒否された場合は拒否されます。

`requestStorageAccessFor()` のリクエストは、埋め込みコンテンツがタップやクリックなどのユーザージェスチャーを処理中（{{Glossary("transient activation", "単発の活性化")}}）でない限り、またはその権限が前回すでに付与されていない限り、自動的に拒否されます。その権限が前回付与されていない場合は、ユーザージェスチャーに基づくイベントハンドラー内で実行する必要があります。ユーザージェスチャーの動作は、プロミスの状態に依存します。

- プロミスが解決され（権限が許可された場合など）、ユーザーのジェスチャーが消費されていない場合、スクリプトはユーザーのジェスチャーを必要とするすべての API を呼び出すことができます。
- プロミスが拒否され（権限が許可されなかった場合など）、ユーザーのジェスチャーが消費されている場合、スクリプトはジェスチャーを必要とする API を呼び出すことができません。権限が拒否された場合に `requestStorageAccessFor()` を再び呼び出すのを防ぐためです。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在の {{domxref("Document")}} がまだアクティブ化されたいない場合に発生します。
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if:
    - 文書のウィンドウが[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)ではない場合。
    - この文書が最上位の文書でない場合。
    - この文書のオリジンが `null` であった場合。
    - 指定された `requestedOrigin` が[不透明](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque)であった場合。
    - 最上位のサイトと埋め込まれたサイトが同じ[関連する一連のウェブサイト](/ja/docs/Web/API/Storage_Access_API/Related_website_sets)でない場合。
    - 埋め込まれた {{htmlelement("iframe")}} がサンドボックス化されており、`allow-storage-access-by-user-activation` トークンが設定されていない場合。
    - {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によって、使用がブロックされた場合。
    - ユーザーエージェントの権限リクエストにより、この API の使用が拒否された場合。
- `TypeError`
  - : Thrown if `requestedOrigin` is not a valid URL.

## 解説

`requestStorageAccessFor()` メソッドは、クッキーを必要とする別サイトの画像やスクリプトを使用している最上位のサイトでストレージアクセス API を採用する際の課題に対処します。既定ではプライバシーを改善するために（例えばトラッキングを防ぐために）[サードパーティ](/ja/docs/Web/Privacy/Third-party_cookies)の[分離されていない](/ja/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies)クッキーへのアクセスをブロックしているユーザエージェントに関連しており、[ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) の拡張提案です。

`requestStorageAccessFor()` は、例えば {{htmlelement("img")}} 要素など、ストレージアクセスをリクエストすることができない最上位サイトに直接埋め込まれた別サイトのリソースに対して、サードパーティのクッキーアクセスを有効にすることができます。自分自身でロジックとリソースを保有し、サードパーティのクッキーアクセスを必要とする `<iframe>` に埋め込まれた別サイトのコンテンツは、{{domxref("Document.requestStorageAccess()")}} を介してストレージアクセスをリクエストする必要があります。

サードパーティのクッキーにアクセスする権限が `requestStorageAccessFor()` によって既に付与されているかどうかを調べるには、{{domxref("Permissions.query()")}} を呼び出します。その際、機能名 `"top-level-storage-access"` を指定します。これは通常の {{domxref("Document.requestStorageAccess()")}} メソッドで使用する機能名とは異なり、`"storage-access"` です。

`Permissions.query()` の呼び出しでは、埋め込みオリジンを指定する必要があります。例えば、次のようにします。

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.example.com",
});
```

> [!NOTE]
> この機能の使用は、サーバーに設定する {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)（ストレージアクセス API の残りの部分をコントロールするものと同じ）によってブロックされる可能性があります。さらに、許可リスト、ブロックリスト、端末上の分類、ユーザー設定、アンチ[クリックジャッキング](/ja/docs/Glossary/Clickjacking)の経験則など、 ブラウザー独自のチェックも通過しなければなりません。

## 例

```js
function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        // Use storage access
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

`requestStorageAccessFor()` の呼び出しが成功した後、[CORS](/ja/docs/Web/HTTP/CORS) / [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) を含む場合、クロスサイトリクエストはクッキーを入れることができます。このようなリクエストは [`credentials: "include"`](/ja/docs/Web/API/RequestInit#credentials) オプションを用い、リソースは `crossorigin="use-credentials"` 属性を記載しなければなりません。

例えば、次のようにします。

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```

> [!NOTE]
> より完全な例については、[ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccess()")}}
- [ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
