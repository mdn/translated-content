---
title: 'Window: messageerror イベント'
slug: Web/API/Window/messageerror_event
---

{{APIRef}}

`messageerror` イベントは、解読できないメッセージを受け取った時に {{domxref('Window')}} オブジェクトに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`messageerror` は {{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用して待ち受けします。

```js
window.addEventListener('messageerror', (event) => {
    console.error(event);
});
```

同じですが、 {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}} イベントハンドラープロパティを使用する場合です。

```js
window.onmessageerror = (event) => {
    console.error(event);
};
```

## 仕様書

| 仕様書                                                                               | 状態                             |
| ------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('HTML WHATWG', 'indices.html#event-messageerror')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.Window.messageerror_event")}}

## 関連情報

- {{domxref("Window.postMessage()")}}
- 関連イベント: {{domxref("Window/message_event", "message")}}
