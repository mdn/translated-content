---
title: "CookieStore: getAll() メソッド"
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

**`getAll()`** は {{domxref("CookieStore")}} インターフェイスのメソッドで、渡された名前またはオプションに一致する Cookie のリストを返します。何も引数を渡さなければ、現在のコンテキストのすべての Cookie を返します。

## 構文

```js-nolint
getAll(name)
getAll(options)
```

### 引数

- `name` {{optional_inline}}
  - : Cookie の名前が入っている文字列です。

または

- `options` {{optional_inline}}

  - : 以下のプロパティを持つ文字列です。

    - `name`
      - : Cookie の名前が入っている文字列です。
    - `url`
      - : Cookie の URL が入っている文字列です。

> **メモ:** `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。文書からは現在の URL の Cookie しか取得できないので、文書コンテキストで有効な URL は文書の URL のみとなります。

### 返値

指定された名前またはオプションに一致するクッキーを表すオブジェクトの配列で解決する {{jsxref("Promise")}} です。

各オブジェクトは、以下のプロパティを持ちます。

- `domain`

  - : クッキーのドメインを持つ文字列です。

- `expires`

  - : クッキーの期限が入ったタイムスタンプで、ミリ秒単位の [Unix 時刻](/ja/docs/Glossary/Unix_time)です。

- `name`

  - : クッキーの名前が入った文字列です。

- `partitioned`

  - : 論理値で、クッキーがパーティション化クッキーであるか (`true`) そうでないか (`false`) を表します。詳しくは [Cookies Having Independent Partitioned State (CHIPS)](/ja/docs/Web/Privacy/Partitioned_cookies) を参照してください。

- `path`

  - : クッキーのパスが入った文字列です。

- `sameSite`

  - : 以下の [`SameSite`](/ja/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 値のうちの何れかです。

    - `"strict"`
      - : クッキーはファーストパーティのコンテキストにのみ送られ、サードパーティのウェブサイトに対するリクエストには送られません。
    - `"lax"`
      - : クッキーは、通常のサイト間サブリクエスト（例えば、サードパーティーのサイトに画像やフレームを読み込むためのもの）には送信されませんが、ユーザーがオリジン間サイト内を移動しているとき（リンクを追跡するとき）には送信されます。
    - `"none"`
      - : クッキーはすべてのコンテキストで、送信されます。

- `secure`

  - : 論理値で、このクッキーが安全なコンテキストでのみ使用されるか (`true`) またはそうではないか (`false`) を示します。

- `value`
  - : このクッキーの値が入った文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた `name` や `options` で表される Cookie の取得に失敗した場合にスローされます。

## 例

この例では、引数なしで `getAll()` を使用しています。このコンテキストのすべての Cookie をオブジェクトの配列として返します。

```js
let cookies = await cookieStore.getAll();
if (cookies) {
  console.log(cookies);
} else {
  console.log("Cookie not found");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
