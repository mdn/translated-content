---
title: CookieStore
slug: Web/API/CookieStore
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

**`CookieStore`** は[クッキーストア API](/ja/docs/Web/API/Cookie_Store_API) のインターフェイスで、ページまたはサービスワーカーから非同期に Cookie を取得、設定するためのメソッドを提供します。

`CookieStore` は {{domxref("Window")}} または {{domxref("ServiceWorkerGlobalScope")}} コンテキスト内のグローバスコープの属性を介してアクセスされます。そのため、コンストラクターはありません。

{{InheritanceDiagram}}

## メソッド

- {{domxref("CookieStore.delete()")}} {{Experimental_Inline}}
  - : `delete()` メソッドは与えられた名前またはオプションオブジェクトを持つ Cookie を削除します。削除が完了すると解決される {{jsxref("Promise")}} が返されます。
- {{domxref("CookieStore.get()")}} {{Experimental_Inline}}
  - : `get()` メソッドは与えられた名前またはオプションオブジェクトで 1 つの Cookie を取得します。1 つの Cookie の詳細に解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.getAll()")}} {{Experimental_Inline}}
  - : `getAll()` メソッドはマッチするすべての Cookie を取得します。Cookie のリストに解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.set()")}} {{Experimental_Inline}}
  - : `set()` メソッドは与えられた名前と値またはオプションオブジェクトを Cookie に設定し、Cookie が設定されると解決される {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("CookieStore.change_event", "change")}} {{Experimental_Inline}}
  - : `change` イベントは、任意の Cookie に変更が加えられたときに発生します。

## 例

この例では、Cookie を設定し、操作が成功したか失敗したかのフィードバックをコンソールに書き込んでいます。

```js
const day = 24 * 60 * 60 * 1000;
cookieStore
  .set({
    name: "cookie1",
    value: "cookie1-value",
    expires: Date.now() + day,
    domain: "example.com",
  })
  .then(
    () => {
      console.log("It worked!");
    },
    (reason) => {
      console.error("It failed: ", reason);
    },
  );
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
