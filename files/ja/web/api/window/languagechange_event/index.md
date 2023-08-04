---
title: "Window: languagechange イベント"
slug: Web/API/Window/languagechange_event
---

{{APIRef}}

**`languagechange`** イベントはグローバルスコープオブジェクトで、ユーザーの推奨言語が変更されたときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラー</th>
      <td>
        {{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`languagechange` は {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
window.addEventListener('languagechange', function() {
  console.log('languagechange event detected!');
});
```

または、 {{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}} イベントハンドラープロパティを使用することもできます。

```js
window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.languagechange_event")}}

## 関連情報

- {{domxref("NavigatorLanguage.language", "navigator.language")}}
- {{domxref("NavigatorLanguage.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
- {{domxref("Window.onlanguagechange")}}
