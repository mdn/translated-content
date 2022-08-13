---
title: 'Window: languagechange イベント'
slug: Web/API/Window/languagechange_event
tags:
  - Event
  - Experimental
  - HTML DOM
  - Reference
  - Window
  - イベント
translation_of: Web/API/Window/languagechange_event
---
{{APIRef}}

**`languagechange`** イベントはグローバルスコープオブジェクトで、ユーザーの推奨言語が変更されたときに発生します。

| バブリング         | いいえ                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| キャンセル         | 不可                                                                                             |
| インターフェイス   | {{domxref("Event")}}                                                                     |
| イベントハンドラー | {{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}} |

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

| 仕様書                                                                                                           | 状態                                 |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| {{ SpecName('HTML WHATWG', 'indices.html#event-languagechange', 'languagechange') }} | {{ Spec2('HTML WHATWG') }} |

## ブラウザーの互換性

{{Compat("api.Window.languagechange_event")}}

## 関連情報

- {{domxref("NavigatorLanguage.language", "navigator.language")}}
- {{domxref("NavigatorLanguage.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
- {{domxref("Window.onlanguagechange")}}
