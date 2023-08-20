---
title: "Document: dragover イベント"
slug: conflicting/Web/API/HTMLElement/dragover_event_6ef4663f0003f0c263a08969c008baf7
original_slug: Web/API/Document/dragover_event
---

{{APIRef}}

`dragover` イベントは、要素または選択されたテキストが、妥当なドロップターゲットの上にあるときに (数百ミリ秒間隔で) 発生します。

このイベントはドロップターゲットで発生します。

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
      <th scope="row">既定のアクション</th>
      <td>現在のドラッグ操作を「なし」にリセットする。</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragover", "ondragover")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### 最小限のドラッグ＆ドロップの例

この例では、コンテナーの中にドラッグ可能な要素を置いています。要素を掴んで他のコンテナーの上にドラッグし、そして放してみましょう。

ここでは、 3 つのイベントハンドラーを使用しています。

- `dragstart` イベントハンドラーでは、ユーザーがドラッグした要素への参照を取得します。
- ターゲットコンテナーの `dragover` イベントハンドラーでは、 `event.preventDefault()` を呼び出し、 `drop` イベントを受信できるようにします。
- ドロップゾーンの `drop` イベントハンドラーでは、ドラッグ可能な要素を元のコンテナーからドロップ ゾーンに移動する処理を行います。

ドラッグ＆ドロップのより完全な例については、 [`drag`](/ja/docs/Web/API/Document/drag_event) イベントのページを参照してください。

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">
    This div is draggable
  </div>
</div>
<div class="dropzone"></div>
```

#### CSS

```css
body {
  /* Prevent the user selecting text in the example */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}
```

#### JavaScript

```js
let dragged = null;

document.addEventListener("dragstart", event => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

document.addEventListener("dragover", event => {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("drop", event => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className == "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### 結果

{{EmbedLiveSample('A minimal drag and drop example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 他のターゲットにおけるこのイベント:

  - {{domxref("Window")}}: {{domxref("Window/dragover_event", "dragover")}} イベント
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragover_event", "dragover")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragover_event", "dragover")}} イベント
