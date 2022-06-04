---
title: 'CookieStore: change event'
slug: Web/API/CookieStore/change_event
tags:
  - API
  - Reference
  - Event
  - change
  - onchange
  - CookieStore
browser-compat: api.CookieStore.change_event
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}

任意の Cookie に変更が加えられると、{{domxref("CookieStore")}} オブジェクトで `change` イベントが発火します。

## 構文

イベント名は {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティで設定されます。

```js
cookieStore.addEventListener('change', event => { })

cookieStore.onchange = event => { }
```

## 例

Cookie が変更されたときに通知を受けるには、以下のように {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使って `cookieStore` インスタンスにハンドラを追加可能です。

```js
cookieStore.addEventListener('change', function(event) {
  console.log('1 change event');
});
```

あるいは、`CookieStore.onchange` イベントハンドラープロパティを使用して、`change` イベントのハンドラを定義できます。

```js
cookieStore.onchange = function(event) {
    console.log('1 change event');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
