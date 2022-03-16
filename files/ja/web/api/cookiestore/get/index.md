---
title: CookieStore.get()
slug: Web/API/CookieStore/get
tags:
  - API
  - Method
  - Reference
  - get()
  - CookieStore
browser-compat: api.CookieStore.get
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}

{{Domxref("CookieStore")}} インターフェイスの **`get()`** メソッドは、与えられた名前またはオプションオブジェクトを持つ 1 つの Cookie を返します（下記参照）。このメソッドは渡されたパラメータに最初にマッチする Cookie を返します。

## 構文

```js
var cookie = CookieStore.get(name);
var cookie = CookieStore.get(options);
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name`
  - : Cookie の名前が入っている {{domxref("USVString")}} です。
- オプション

  - : オブジェクトは次のものを含みます。

    - `name`
      - : Cookie の名前が入っている {{domxref("USVString")}} です。
    - `url`
      - : Cookie の URL が入っている {{domxref("USVString")}} です。

> **Note:** `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。ドキュメントからは現在の URL の Cookie しか取得できないので、ドキュメントコンテキストで有効な URL はドキュメントの URL のみとなります。

### 返値

与えられた名前またはオプションに一致する最初の Cookie を含むオブジェクトに解決される {{jsxref("Promise")}} です。このオブジェクトは以下のプロパティを含んでいます。

- `name`
  - : Cookie の名前を含む {{domxref("USVString")}} です。
- `value`
  - : Cookie の値を含む {{domxref("USVString")}} です。
- `domain`
  - : Cookie のドメインを含む {{domxref("USVString")}} です。
- `path`
  - : Cookie のパスを含む {{domxref("USVString")}} です。
- `expires`
  - : Cookie の有効期限を含む {{domxref("DOMTimeStamp")}} です。
- `secure`
  - : Cookie を安全なコンテキストでのみ使用するかどうかを示す {{jsxref("boolean")}} です。
- `sameSite`

  - : 以下の [SameSite](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite) のいずれかの値です。

    - `"strict"`
      - : Cookie は、ファーストパーティのコンテキストでのみ送信され、サードパーティのウェブサイトによるリクエストと一緒に送信されることはありません
    - `"lax"`
      - : Cookie は、通常のクロスサイト・サブクエスト（例えば、画像やフレームをサードパーティのサイトにロードするため）には送信されませんが、ユーザーが元のサイト内を移動しているとき（すなわち、リンクをたどっているとき）には送信されます。
    - `"none"`
      - : Cookie は、すべてのコンテキストで送信されます。

    > **Note:** SameSite cookies の詳細については、 [SameSite cookies explained](https://web.dev/samesite-cookies-explained/) をご覧ください。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた `name` や `options` で表される Cookie の取得に失敗した場合にスローされます。

## 例

この例では、"cookie1" という名前の Cookie を返します。もし Cookie が見つかれば、プロミスの結果は 1 つの Cookie の詳細を含むオブジェクトになります。

```js
let cookie = cookieStore.get('cookie1');
if (cookie) {
    console.log(cookie);
} else {
    console.log('Cookie not found');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
