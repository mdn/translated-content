---
title: "Document: requestStorageAccess() メソッド"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: fcc39b94076a15b0db83aade26ca924e639e4bb8
---

{{APIRef("Storage Access API")}}

**`requestStorageAccess()`** は {{domxref("Document")}} インターフェイスのメソッドで、サードパーティコンテキスト（つまり {{htmlelement("iframe")}} に埋め込まれたもの）に読み込まれたコンテンツが、[サードパーティクッキー](/ja/docs/Web/Privacy/Third-party_cookies)と[分離されていない状態](/ja/docs/Web/Privacy/State_Partitioning#state_partitioning)へのアクセスをリクエストできるようになります。これは、既定ではプライバシーを向上させるために（例えば、トラッキングを防ぐために）サードパーティの[分離されていない](/ja/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies)クッキーへのアクセスをブロックしているユーザーエージェントに関連しており、[ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) の一部です。

サードパーティクッキーにアクセスする権限が既に与えられているかどうかを調べるには、{{domxref("Permissions.query()")}} を呼び出して、特性名 `"storage-access"`を指定してください。

> [!NOTE]
> この機能の使用は、サーバーに設定する {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によってブロックされる場合があります。さらに、文書は、許可リスト、ブロックリスト、端末上の分類、ユーザー設定、[クリックジャッキング](/ja/docs/Glossary/Clickjacking)防止の経験則、またはユーザーに明示的な許可を求めるプロンプトのような、ブラウザー固有の追加のチェックに合格する必要があります。

## 構文

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### 引数

- `types` {{optional_inline}}

  - : 分離されていないどの状態にアクセスするかを制御するプロパティを格納したオブジェクトです。指定しない場合、プロパティの既定値は `false` です。利用できるプロパティは以下のとおりです。

    - `all`
      - : 論理値で、利用可能なすべての分離されていない状態をアクセス可能にすべきかどうかを示します。
    - `cookies`
      - : 論理値で、サードパーティクッキーをアクセス可能にすべきかどうかを示します。
    - `sessionStorage`
      - : 論理値で、{{domxref("StorageAccessHandle.sessionStorage")}} をアクセス可能にすべきかどうかを示します。
    - `localStorage`
      - : 論理値で、{{domxref("StorageAccessHandle.localStorage")}} をアクセス可能にすべきかどうかを示します。
    - `indexedDB`
      - : 論理値で、{{domxref("StorageAccessHandle.indexedDB")}} をアクセス可能にすべきかどうかを示します。
    - `locks`
      - : 論理値で、{{domxref("StorageAccessHandle.locks")}} をアクセス可能にすべきかどうかを示します。
    - `caches`
      - : 論理値で、{{domxref("StorageAccessHandle.caches")}} をアクセス可能にすべきかどうかを示します。
    - `getDirectory`
      - : 論理値で、{{domxref("StorageAccessHandle.getDirectory()")}} をアクセス可能にすべきかどうかを示します。
    - `estimate`
      - : 論理値で、{{domxref("StorageAccessHandle.estimate()")}} をアクセス可能にすべきかどうかを示します。
    - `createObjectURL`
      - : 論理値で、{{domxref("StorageAccessHandle.createObjectURL()")}} をアクセス可能にすべきかどうかを示します。
    - `revokeObjectURL`
      - : 論理値で、{{domxref("StorageAccessHandle.revokeObjectURL()")}} をアクセス可能にすべきかどうかを示します。
    - `BroadcastChannel`
      - : 論理値で、{{domxref("StorageAccessHandle.BroadcastChannel()")}} をアクセス可能にすべきかどうかを示します。
    - `SharedWorker`
      - : 論理値で、{{domxref("StorageAccessHandle.SharedWorker()")}} をアクセス可能にすべきかどうかを示します。

### 返値

{{jsxref("Promise")}} で、サードパーティクッキーへのアクセスが許可され、 `types` 引数が提供されていない場合は `undefined` で履行され、`types` 引数でリクエストされた分離されていない状態へのアクセスが提供された場合は {{domxref("StorageAccessHandle")}} で履行され、アクセスが拒否された場合は拒否されます。

`requestStorageAccess()` のリクエストは、埋め込みコンテンツがタップやクリックなどのユーザージェスチャーを処理中（{{Glossary("transient activation", "単発の活性化")}}）でない限り、またはその権限が前回すでに付与されていない限り、自動的に拒否されます。その権限が前回付与されていない場合は、ユーザージェスチャーに基づくイベントハンドラー内で実行する必要があります。ユーザージェスチャーの動作は、プロミスの状態に依存します。

- プロミスが解決され（権限が許可された場合など）、ユーザーのジェスチャーが消費されていない場合、スクリプトはユーザーのジェスチャーを必要とするすべての API を呼び出すことができます。
- プロミスが拒否され（権限が許可されなかった場合など）、ユーザーのジェスチャーが消費されている場合、スクリプトはジェスチャーを必要とする API を呼び出すことができません。これは悪用に対する意図的な保護であり、ユーザーがプロンプトを受け入れるまで、スクリプトが `requestStorageAccess()` をループで呼び出すのを防ぐためです。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 次のような場合に発生します。
    - 現在の {{domxref("Document")}} がまだアクティブではない場合。
    - `types` 引数が与えられており、すべてのプロパティが `false` である場合。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 次のような場合に発生します。
    - 文書のウィンドウが[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)ではない場合。
    - {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によって、使用がブロックされた場合。
    - この文書または最上位の文書のオリジンが `null` である場合。
    - 埋め込まれた {{htmlelement("iframe")}} がサンドボックス化されており、`allow-storage-access-by-user-activation` トークンが設定されていない場合。
    - ユーザーエージェントの権限リクエストにより、この API の使用が拒否された場合。

## 例

```js
document.requestStorageAccess().then(
  () => {
    console.log("cookie access granted");
  },
  () => {
    console.log("cookie access denied");
  },
);

document.requestStorageAccess({ localStorage: true }).then(
  (handle) => {
    console.log("localStorage access granted");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("localStorage access denied");
  },
);
```

> [!NOTE]
> より完全な例については、[ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
