---
title: "Window: hashchange イベント"
slug: Web/API/Window/hashchange_event
---

{{APIRef}}

**`hashchange`** イベントは、 URL のフラグメント識別子 (URL の `#` 記号で始まり続く部分) が変化したときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("HashChangeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("WindowEventHandlers/onhashchange", "onhashchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`hashchange` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドの中で使用することができます。

```js
window.addEventListener('hashchange', function() {
  console.log('The hash has changed!')
}, false);
```

または `onhashchange` イベントハンドラープロパティを使用して、

```js
function locationHashChanged() {
  if (location.hash === '#cool-feature') {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.hashchange_event")}}

## 関連情報

- {{domxref("Window/popstate_event", "popstate")}}
- {{domxref("WindowEventHandlers.onhashchange")}}
