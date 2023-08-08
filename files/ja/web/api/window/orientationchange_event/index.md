---
title: "Window: orientationchange イベント"
slug: Web/API/Window/orientationchange_event
---

{{APIRef}}

`orientationchange` イベントは、端末の向きが変化した時に発生します。

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラー</th>
      <td>
        {{domxref("Window/onorientationchange", "onorientationchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`orientationchange` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
window.addEventListener("orientationchange", function() {
  console.log("端末の向きが " + screen.orientation.angle + "になりました。");
});
```

または、 {{domxref("Window/onorientationchange", "onorientationchange")}} イベントハンドラープロパティを使用します。

```js
window.onorientationchange = function() {
  console.log("端末の向きが " + screen.orientation.angle + "になりました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat("api.Window.orientationchange_event")}}
