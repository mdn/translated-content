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

{{domxref('Cookie Store API')}} のインターフェイスである **`CookieStore`** は、ページまたはサービスワーカーから非同期にCookieを取得、設定するためのメソッドを提供します。

`CookieStore` は {{domxref("Window")}} or {{domxref("ServiceWorkerGlobalScope")}} コンテキスト内のグローバスコープの属性を介してアクセスされます。そのため、コンストラクタはありません。

{{InheritanceDiagram}}

## メソッド

- {{domxref("CookieStore.delete()")}}
  - : `delete()` メソッドは与えられた名前またはオプションオブジェクトを持つCookieを削除します。削除が完了すると解決される {{jsxref("Promise")}} が返されます。
- {{domxref("CookieStore.get()")}}
  - : `get()` メソッドは与えられた名前またはオプションオブジェクトで一つのCookieを取得します。一つのCookieの詳細に解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.getAll()")}}
  - : `getAll()` メソッドはマッチするすべてのCookieを取得します。Cookieのリストに解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.set()")}}
  - : `set()` メソッドは与えられた名前と値またはオプションオブジェクトをCookieに設定し、Cookieが設定されると解決される {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("CookieStore.change_event")}}
  - : `change` イベントは、任意のCookieに変更が加えられたときに発生します。

## 例

この例では、Cookieを設定し、操作が成功したか失敗したかのフィードバックをコンソールに書き込んでいます。

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

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
