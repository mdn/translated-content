---
title: CookieStore
slug: Web/API/CookieStore
tags:
  - API
  - Interface
  - Reference
  - CookieStore
browser-compat: api.CookieStore
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}

{{domxref('Cookie Store API')}} のインターフェイスである **`CookieStore`** は、ページまたはサービスワーカーから非同期に Cookie を取得、設定するためのメソッドを提供します。

`CookieStore` は {{domxref("Window")}} or {{domxref("ServiceWorkerGlobalScope")}} コンテキスト内のグローバスコープの属性を介してアクセスされます。そのため、コンストラクタはありません。

{{InheritanceDiagram}}

## メソッド

- {{domxref("CookieStore.delete()")}}
  - : `delete()` メソッドは与えられた名前またはオプションオブジェクトを持つ Cookie を削除します。削除が完了すると解決される {{jsxref("Promise")}} が返されます。
- {{domxref("CookieStore.get()")}}
  - : `get()` メソッドは与えられた名前またはオプションオブジェクトで 1 つの Cookie を取得します。1 つの Cookie の詳細に解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.getAll()")}}
  - : `getAll()` メソッドはマッチするすべての Cookie を取得します。Cookie のリストに解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.set()")}}
  - : `set()` メソッドは与えられた名前と値またはオプションオブジェクトを Cookie に設定し、Cookie が設定されると解決される {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("CookieStore.change_event")}}
  - : `change` イベントは、任意の Cookie に変更が加えられたときに発生します。

## 例

この例では、Cookie を設定し、操作が成功したか失敗したかのフィードバックをコンソールに書き込んでいます。

```js
const day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + day,
  domain: "example.com"
})
.then(
  function() {
    console.log("It worked!");
  },
  function(reason) {
    console.error("It failed: ", reason);
  }
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
