---
title: "CookieStore: change イベント"
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

`change` イベントは、任意の Cookie に変更が加えられると、{{domxref("CookieStore")}} オブジェクトで発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
cookieStore.addEventListener("change", (event) => { })

cookieStore.onchange = (event) => { }
```

## 例

次のように `cookieStore` インスタンスに対して {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使ってハンドラーを追加すると、Cookie が変更されたときに通知を受けることができます。

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

あるいは、`CookieStore.onchange` イベントハンドラープロパティを使用して、`change` イベントのハンドラーを確立することができます。

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
