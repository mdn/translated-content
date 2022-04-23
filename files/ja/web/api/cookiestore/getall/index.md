---
title: CookieStore.getAll()
slug: Web/API/CookieStore/getAll
tags:
  - API
  - Method
  - Reference
  - getAll()
  - CookieStore
browser-compat: api.CookieStore.getAll
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}

{{domxref("CookieStore")}} インターフェイスの **`getAll()`** メソッドは、渡された名前またはオプションに一致する Cookie のリストを返します。パラメータを何も渡さなければ、現在のコンテキストのすべての Cookie を返します。

## 構文

```js
var list = cookieStore.getAll(name);
var list = cookieStore.getAll(options);
```

### 引数

- `name`{{Optional_Inline}}
  - : Cookie の名前が入っている {{domxref("USVString")}} です。
- `options`{{Optional_Inline}}

  - : An object containing:

    - `name`
      - : Cookie の名前が入っている {{domxref("USVString")}} です。
    - `url`
      - : Cookie の URL が入っている {{domxref("USVString")}} です。

> **Note:** `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。ドキュメントからは現在の URL の Cookie しか取得できないので、ドキュメントコンテキストで有効な URL はドキュメントの URL のみとなります。

### 返値

与えられた名前またはオプションの Cookie のリストに解決される {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた `name` や `options` で表される Cookie の取得に失敗した場合にスローされます。

## 例

この例では、引数無しで `getAll()` を使用しています。このコンテキストのすべての Cookie をオブジェクトの配列として返します。

```js
let cookies = cookieStore.getAll();
if (cookies) {
  console.log(cookies);
} else {
  console.log('Cookie not found');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
