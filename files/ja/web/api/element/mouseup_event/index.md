---
title: 'Element: mouseup イベント'
slug: Web/API/Element/mouseup_event
tags:
  - API
  - DOM
  - イベント
  - インターフェイス
  - MouseEvent
  - リファレンス
  - Release
  - UI
  - Up
  - ボタン
  - マウス
  - mouseup
browser-compat: api.Element.mouseup_event
translation_of: Web/API/Element/mouseup_event
---
{{APIRef}}

**`mouseup`** イベントは、ポインターが要素の中にあるときに、ポインティングデバイス (マウスやトラックパッドなど) のボタンが離されるとその要素 ({{domxref("Element")}}) に発行されます。

`mouseup` イベントは {{domxref("Element.mousedown_event", "mousedown")}} イベントに対応します。

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
        {{domxref("GlobalEventHandlers.onmouseup", "onmouseup")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

サンプルコードは [`mousemove` イベント](/ja/docs/Web/API/Element/mousemove_event#examples)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
