---
title: "CookieChangeEvent: changed プロパティ"
slug: Web/API/CookieChangeEvent/changed
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

{{domxref("CookieChangeEvent")}} インターフェイスの読み取り専用プロパティ **`changed`** は、変更された Cookie の配列を返します。

## 値

オブジェクトの配列で、変更された Cookie が格納されています。それぞれのオブジェクトは以下のプロパティを持ちます。

- `name`
  - : Cookie の名前を表す文字列です。
- `value`
  - : Cookie の値を表す文字列です。
- `domain`
  - : Cookie のドメインを表す文字列です。
- `path`
  - : Cookie のパスを表す文字列です。
- `expires`
  - : ミリ秒単位の [UNIX 時間](/ja/docs/Glossary/Unix_time)で与えられるタイムスタンプで、Cookie の有効期限を表します。
- `secure`
  - : Cookie がセキュアコンテキスト (HTTP ではなく HTTPS) のサイト由来かを表す {{jsxref("boolean")}} です。
- `sameSite`
  - : 以下の [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) の値のいずれかです。
    - `"strict"`
      - : Cookie はファーストパーティコンテキストでのみ送信され、サードパーティのウェブサイトから発信されたリクエストでは送信されません。
    - `"lax"`
      - : Cookie は通常のクロスサイトサブリクエスト (たとえば、サードパーティサイトへの画像やフレームの読み込み) では送信されませんが、ユーザーが発信元のサイト内へ移動するとき (すなわち、リンクをたどるとき) は送信されます。
    - `"none"`
      - : Cookie はすべてのコンテキストで送信されます。

## 例

この例では、Cookie が設定されると、イベントリスナーがコンソールに `changed` プロパティを記録します。この配列の最初の要素には、今設定されたばかりの Cookie を表すオブジェクトが格納されています。

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.changed[0]);
});

const one_day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + one_day,
  domain: "example.com",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
