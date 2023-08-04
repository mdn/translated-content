---
title: "Window: beforeprint イベント"
slug: Web/API/Window/beforeprint_event
---

{{APIRef}}

**`beforeprint`** イベントは、関連する文書が印刷される直前や、印刷プレビューが開く直前に発生します。

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
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("WindowEventHandlers/onbeforeprint", "onbeforeprint")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` の使用例:

```js
window.addEventListener('beforeprint', (event) => {
  console.log('Before print');
});
```

`onbeforeprint` イベントハンドラープロパティの使用例:

```js
window.onbeforeprint = (event) => {
  console.log('Before print');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.beforeprint_event")}}

## 関連情報

- 関連イベント: {{domxref("Window/afterprint_event", "afterprint")}}
