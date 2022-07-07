---
title: CookieStore.set()
slug: Web/API/CookieStore/set
tags:
  - API
  - Method
  - Reference
  - set()
  - CookieStore
browser-compat: api.CookieStore.set
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}

{{domxref("CookieStore")}} インターフェイスの **`getAll()`** メソッドは、渡された名前またはオプションに一致する Cookie のリストを返します。引数を何も渡さなければ、現在のコンテキストのすべての Cookie を返します。

## 構文

```js
var promise = cookieStore.set(name,value);
var promise = cookieStore.set(options);
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name`
  - : Cookie の名前が入っている {{domxref("USVString")}} です。
- `value`
  - : Cookie の値が入っている {{domxref("USVString")}} です。
- オプション

  - : オブジェクトは次のものを含みます。

    - `name`
      - : Cookie の名前が入っている {{domxref("USVString")}} です。
    - `value`
      - : Cookie の値が入っている {{domxref("USVString")}} です。
    - `expires`{{Optional_Inline}}
      - : Cookie の有効期限を含む {{domxref("DOMTimeStamp")}} です。
    - `domain`{{Optional_Inline}}
      - : Cookie のドメインを含む {{domxref("USVString")}} です。
    - `path`{{Optional_Inline}}
      - : Cookie のパスを含む {{domxref("USVString")}} です。
    - `sameSite`{{Optional_Inline}}

      - : 以下の [SameSite](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite) のいずれかの値です。

        - `"strict"`
          - : Cookie は、ファーストパーティのコンテキストでのみ送信され、サードパーティのウェブサイトによるリクエストと一緒に送信されることはありません
        - `"lax"`
          - : Cookie は、通常のクロスサイト・サブクエスト（例えば、画像やフレームをサードパーティのサイトにロードするため）には送信されません。しかし、ユーザーが元のサイト内を移動しているとき（すなわち、リンクをたどっているとき）には送信されます。
        - `"none"`
          - : Cookie は、すべてのコンテキストで送信されます。

        > **Note:** SameSite cookies の詳細については、 [SameSite cookies explained](https://web.dev/samesite-cookies-explained/) をご覧ください。

### 返値

Cookie の設定が完了すると {{jsxref("Undefined")}} に解決される {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた値での Cookie の設定に失敗した場合にスローされます。
- {{domxref("DOMException")}} `SecurityError`
  - : オリジンが URL に {{glossary("serialize")}} されない場合にスローされます。

## 例

次の例では `name`、`value`、`expires`、`domain` を持つオブジェクトを渡して Cookie を設定します。

```js
const day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + day,
  domain: "example.com"
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
