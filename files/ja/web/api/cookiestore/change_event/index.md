---
title: "CookieStore: change イベント"
short-title: change
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

`change` イベントは、任意の Cookie に変更が加えられると、{{domxref("CookieStore")}} オブジェクトで発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## イベント型

{{domxref("CookieChangeEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("CookieChangeEvent")}}

## 例

次のように `cookieStore` インスタンスに対して {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使ってハンドラーを追加すると、Cookie が変更されたときに通知を受けることができます。

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

あるいは、`onchange` イベントハンドラープロパティを使用して、`change` イベントのハンドラーを確立することができます。

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
