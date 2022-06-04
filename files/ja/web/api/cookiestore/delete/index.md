---
title: CookieStore.delete()
slug: Web/API/CookieStore/delete
tags:
  - API
  - Method
  - Reference
  - delete()
  - CookieStore
browser-compat: api.CookieStore.delete
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}

{{domxref("CookieStore")}} インターフェイスの **`delete()`** メソッドは、与えられた名前またはオプションオブジェクトを持つ Cookie を削除します（下記参照）。`delete()` メソッドは日付を過去のものに変更することで Cookie を失効させます。

## 構文

```js
var promise = cookieStore.delete(name);
var promise = cookieStore.delete(options);
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name`
  - : Cookie の名前が入っている {{domxref("USVString")}} です。
- オプション

  - : オブジェクトは次のものを含みます。

    - `name`
      - : Cookie の名前が入っている {{domxref("USVString")}} です。
    - `url`{{Optional_Inline}}
      - : Cookie の URL が入っている {{domxref("USVString")}} です。
    - `path`{{Optional_Inline}}
      - : パスを含む {{domxref("USVString")}} です。

> **Note:** `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。ドキュメントからは現在の URL の Cookie しか取得できないので、ドキュメントコンテキストで有効な URL はドキュメントの URL のみとなります。

### 返値

削除が完了すると {{jsxref("Undefined")}} に解決される {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた `name` や `options` で表される Cookie の削除に失敗した場合にスローされます。

## 例

この例では、`delete()` メソッドに名前を渡すことで、Cookie を削除しています。

```js
let result = cookieStore.delete('cookie1');
console.log(result);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
