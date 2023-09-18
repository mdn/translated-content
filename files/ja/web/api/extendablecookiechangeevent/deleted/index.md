---
title: "ExtendableCookieChangeEvent: deleted プロパティ"
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

{{domxref("ExtendableCookieChangeEvent")}} インターフェイスの読み取り専用プロパティ **`deleted`** は、与えられた `ExtendableCookieChangeEvent` のインスタンスで削除されたすべてのクッキーを返します。

## 値

オブジェクトの配列で、削除されたクッキーが格納されています。それぞれのオブジェクトは以下のプロパティを持ちます。

- `name`
  - : クッキーの名前を表す文字列です。
- `value`
  - : クッキーの値を表す文字列です。
- `domain`
  - : クッキーのドメインを表す文字列です。
- `path`
  - : クッキーのパスを表す文字列です。
- `expires`
  - : ミリ秒単位の [UNIX 時間](/ja/docs/Glossary/Unix_time)で与えられるタイムスタンプで、クッキーの有効期限を表します。
- `secure`
  - : クッキーがセキュアコンテキスト (HTTP ではなく HTTPS) のサイト由来かを表す {{jsxref("boolean")}} です。
- `sameSite`

  - : 以下の [`SameSite`](/ja/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) の値のいずれかです。

    - `"strict"`
      - : クッキーはファーストパーティコンテキストでのみ送信され、サードパーティのウェブサイトから発信されたリクエストでは送信されません。
    - `"lax"`
      - : クッキーは通常のクロスサイトサブリクエスト (たとえば、サードパーティサイトへの画像やフレームの読み込み) では送信されませんが、ユーザーが発信元のサイト内へ移動するとき (すなわち、リンクをたどるとき) は送信されます。
    - `"none"`
      - : クッキーはすべてのコンテキストで送信されます。

## 例

この例では、クッキーが削除されると、イベントリスナーがコンソールに `deleted` プロパティの最初の要素を記録します。これには、削除されたばかりのクッキーを表すオブジェクトが格納されています。

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
