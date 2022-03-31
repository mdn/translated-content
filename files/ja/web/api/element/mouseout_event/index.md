---
title: 'Element: mouseout イベント'
slug: Web/API/Element/mouseout_event
tags:
  - API
  - DOM
  - イベント
  - インターフェイス
  - MouseEvent
  - リファレンス
  - マウス
  - mouseout
  - move
browser-compat: api.Element.mouseout_event
translation_of: Web/API/Element/mouseout_event
---
{{APIRef}}

**`mouseout`** イベントは、ポインティングデバイス (通常はマウス) を使ってカーソルを移動させ、要素やその子の中からカーソルが出たときに、その要素 ({{domxref("Element")}}) に発行されます。

`mouseout` は、カーソルが子要素に入った場合にも要素に配信されますが、これは子要素が要素の可視領域を覆い隠すためです。

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
        {{domxref("GlobalEventHandlers.onmouseout", "onmouseout")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

以下の例は `mouseout` イベントの使い方を示しています。

<h3 id="mouseout_and_mouseleave">mouseout と mouseleave</h3>

以下の例は、`mouseout` と {{domxref("Element/mouseleave_event", "mouseleave")}} の各イベントの違いを説明しています。`mouseleave` イベントを {{HTMLElement("ul")}} に追加し、マウスが `<ul>` を出るたびにリストを紫色に着色するようにします。`mouseout` をリストに追加し、マウスがそこを出ると対象の要素をオレンジ色に着色するようにします。

これを試してみると、`mouseout` はそれぞれのリスト項目に配信されるのに対し、 `mouseleave` は項目の階層構造のおかげでリスト全体に行き、リストの項目は、その下にある `<ul>` を不明瞭にします。

#### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
let test = document.getElementById("test");

// マウスが <ul> を出るとリストを一時的に紫色にします
// ときに 1 度だけ実行されます
test.addEventListener("mouseleave", function( event ) {
  // mouseleave の対象を強調
  event.target.style.color = "purple";

  // 少し待ってから色をリセット
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

// マウスが出ると <li> を一時的にオレンジ色にします
test.addEventListener("mouseout", function( event ) {
  // mouseout の対象を強調
  event.target.style.color = "orange";

  // 少し待ってから色をリセット
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
```

#### 結果

{{EmbedLiveSample("mouseout_and_mouseleave", 640, 200)}}

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
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
