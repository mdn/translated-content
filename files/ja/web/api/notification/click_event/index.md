---
title: "Notification: click イベント"
slug: Web/API/Notification/click_event
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`click`** は {{domxref("Notification")}} インターフェイスのイベントで、ユーザーが表示されている {{domxref("Notification")}} をクリックしたときに発生します。

既定の動作は、この通知に関連した[閲覧コンテキスト](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context)へフォーカスを移動することです。この動作をさせたくない場合は、イベントオブジェクトの {{domxref("Event/preventDefault", "preventDefault()")}} を呼び出してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使うか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('click', (event) => { });

onclick = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下の例では、 onclick ハンドラーを使用して、通知がクリックされたときにウェブページを新しいタブで開くようにしています（`'_blank'` 引数を含めることで指定）。

```js
notification.onclick = (event) => {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open('http://www.mozilla.org', '_blank');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Notification")}}
- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
