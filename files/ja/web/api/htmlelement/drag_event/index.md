---
title: 'HTMLElement: drag イベント'
slug: Web/API/HTMLElement/drag_event
---

{{APIRef}}

`drag` イベントは、要素や選択されたテキストをユーザーがドラッグしている間に、数百ミリ秒ごとに発生します。

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
      <td>ドラッグ＆ドロップ操作を続ける</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ondrag", "ondrag")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### ドラッグ＆ドロップの例

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">
    この div はドラッグ可
  </div>
</div>
<div class="dropzone" id="droptarget"></div>
```

#### CSS

```css
body {
  /* この例の中でユーザーによるテキストの選択を防止する */
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

.dropzone.dragover {
  background-color: purple;
}

.dragging {
  opacity: .5;
}
```

#### JavaScript

```js
let dragged;

/* ドラッグ可能なターゲット上で発生するイベント */
const source = document.getElementById("draggable");
source.addEventListener("drag", event => {
  console.log("dragging");
});

source.addEventListener("dragstart", event => {
  // ドラッグ中の要素の参照を保存
  dragged = event.target;
  // 半透明にする
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", event => {
  // 透明度を解除
  event.target.classList.remove("dragging");
});

/* ドロップ対象に発生するイベント */
const target = document.getElementById("droptarget");
target.addEventListener("dragover", event => {
  // ドロップできるように既定の動作を停止
  event.preventDefault();
}, false);

target.addEventListener("dragenter", event => {
  // ドラッグ可能な要素がドロップ先に入ったときに、ドロップ先の候補を強調表示する
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", event => {
  // ドラッグ可能な要素がドロップ先から離れたときに、ドロップ先の候補の背景をリセットする
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", event => {
  // 既定の動作（一部の要素でリンクとして開く）を行わないようにする。
  event.preventDefault();
  // ドラッグした要素を選択されたドロップターゲットに移動する
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### 結果

{{EmbedLiveSample('Drag and drop example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 他のターゲットにおけるこのイベント:

  - {{domxref("Window")}}: {{domxref("Window/drag_event", "drag")}} イベント
  - {{domxref("Document")}}: {{domxref("Document/drag_event", "drag")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/drag_event", "drag")}} イベント
