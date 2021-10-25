---
title: 'Element: mousedown イベント'
slug: Web/API/Element/mousedown_event
tags:
  - API
  - DOM
  - Down
  - Element
  - イベント
  - インターフェイス
  - MouseEvent
  - Press
  - リファレンス
  - UI
  - ボタン
  - マウス
  - mousedown
browser-compat: api.Element.mousedown_event
translation_of: Web/API/Element/mousedown_event
---
{{APIRef}}

**`mousedown`** イベントは、ポインターが要素の中にあるときにポインティングデバイスのボタンが押下されたとき、その要素 ({{domxref("Element")}}) に発行されます。

> **Note:** {{domxref("Element/click_event", "click")}} イベントとの違いは、 `click` イベントが完全なクリック操作の後、つまり、同じ要素内でマウスのボタンが押されて離された後で発行されることです。 `mousedown` はボタンが最初に押された時点で発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

例のコードについては [`mousemove` イベント](/ja/docs/Web/API/Element/mousemove_event#examples)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
