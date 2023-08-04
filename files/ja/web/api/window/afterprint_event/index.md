---
title: "Window: afterprint イベント"
slug: Web/API/Window/afterprint_event
---

{{APIRef}}

**`afterprint`** イベントは、関連する文書の印刷が開始されたか、印刷プレビューが閉じた後に発生します。

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
        {{domxref("WindowEventHandlers/onafterprint", "onafterprint")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` の使用例:

```js
window.addEventListener('afterprint', (event) => {
  console.log('After print');
});
```

`onafterprint` イベントハンドラープロパティの使用例:

```js
window.onafterprint = (event) => {
  console.log('After print');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.afterprint_event")}}

## 関連情報

- 関連イベント: {{domxref("Window/beforeprint_event", "beforeprint")}}
