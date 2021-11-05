---
title: 'Element: mouseover イベント'
slug: Web/API/Element/mouseover_event
tags:
  - API
  - Cursor
  - DOM
  - イベント
  - インターフェイス
  - MouseEvent
  - リファレンス
  - マウス
  - mouseover
  - move
  - ポインター
browser-compat: api.Element.mouseover_event
translation_of: Web/API/Element/mouseover_event
---
{{APIRef}}

**`mouseover`** イベントは、ポインティングデバイス (マウスやトラックパッドなど) のカーソルが要素またはその子要素のうちの一つの上を移動したときに、その要素 ({{domxref("Element")}}) に発行されます。

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
        {{domxref("GlobalEventHandlers.onmouseover", "onmouseover")}}
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

以下の例は、`mouseover` と {{domxref("Element/mouseenter_event", "mouseenter")}} の各イベントの違いを説明しています。

### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### JavaScript

```js
let test = document.getElementById("test");

// このハンドラーは、カーソルが順序なしリストの上を移動した
// ときに1度だけ実行されます
test.addEventListener("mouseenter", function( event ) {
  // mouseenter の対象を強調
  event.target.style.color = "purple";

  // 少し待ってから色をリセット
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// このハンドラーは異なるリスト項目の上を移動するごとに
// 実行されます
test.addEventListener("mouseover", function( event ) {
  // mouseover の対象を強調
  event.target.style.color = "orange";

  // 少し待ってから色をリセット
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
```

### 結果

{{EmbedLiveSample('Examples')}}

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
