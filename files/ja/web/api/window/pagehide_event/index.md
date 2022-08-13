---
title: 'Window: pagehide イベント'
slug: Web/API/Window/pagehide_event
tags:
  - API
  - Event
  - History
  - Navigation
  - Reference
  - Window
  - pagehide
  - イベント
  - 履歴
translation_of: Web/API/Window/pagehide_event
---
{{APIRef("HTML DOM")}}

**`pagehide`** イベントは、ブラウザーがセッションの履歴から他のページを表示する過程において、現在のページを非表示にしたときに {{domxref("Window")}} へ送られます。例えば、ユーザーがブラウザーの戻るボタンをクリックしたとき、現在のページはひとつ前のページが表示される前に `pagehide` イベントを受け取ります。

| バブリング                   | なし                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| キャンセル                   | 不可                                                         |
| インターフェイス             | {{domxref("PageTransitionEvent")}}                 |
| イベントハンドラープロパティ | {{domxref("Window.onpagehide", "onpagehide")}} |

## 例

この例では、イベントハンドラーが `pagehide` イベントを監視するために確立され、ページが再利用できるように保存されようとするときに特殊な扱いを行います。

```js
window.addEventListener("pagehide", event => {
  if (event.persisted) {
    /* このページは破棄されないので、後で再利用することができます */
  }
}, false);
```

これは {{domxref("Window.onpagehide", "onpagehide")}} イベントハンドラープロパティを {{domxref("Window")}} 上で利用することで書くこともできます。

```js
window.onpagehide = event => {
  if (event.persisted) {
    /* このページは破棄されないので、後で再利用することができます */
  }
}
```

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'browsing-the-web.html#event-pagehide', 'pagehide')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |
| {{SpecName('HTML5 W3C', 'browsers.html#event-pagehide', 'pagehide')}}             | {{Spec2('HTML5 W3C')}}     |          |

## ブラウザーの互換性

{{Compat("api.Window.pagehide_event")}}

## 関連情報

- {{domxref("Window.onpageshow", "onpageshow")}} イベントハンドラープロパティ
- {{domxref("Window.pageshow_event", "pageshow")}} イベント
