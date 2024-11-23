---
title: "HTMLElement: drag イベント"
short-title: drag
slug: Web/API/HTMLElement/drag_event
l10n:
  sourceCommit: 689be3910aa020e10ca58a81a4c9190a5819f4f2
---

{{APIRef}}

`drag` イベントは、要素や選択されたテキストをユーザーがドラッグしている間に、数百ミリ秒ごとに発生します。

このイベントはキャンセル可能で、{{domxref("Document")}} オブジェクトと {{domxref("Window")}} オブジェクトまでバブルアップする可能性があります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
addEventListener("drag", (event) => {});

ondrag = (event) => {};
```

## イベント型

{{domxref("DragEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("DragEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : ドラッグ＆ドロップ操作の間に転送されるデータです。

## 例

### ドラッグ＆ドロップの例

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">この div はドラッグ可</div>
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
  opacity: 0.5;
}
```

#### JavaScript

```js
let dragged;

/* ドラッグ可能なターゲット上で発生するイベント */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
  // ドラッグ中の要素の参照を保存
  dragged = event.target;
  // 半透明にする
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // 透明度を解除
  event.target.classList.remove("dragging");
});

/* ドロップ対象に発生するイベント */
const target = document.getElementById("droptarget");
target.addEventListener(
  "dragover",
  (event) => {
    // ドロップできるように既定の動作を停止
    event.preventDefault();
  },
  false,
);

target.addEventListener("dragenter", (event) => {
  // ドラッグ可能な要素がドロップ先に入ったときに、ドロップ先の候補を強調表示する
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // ドラッグ可能な要素がドロップ先から離れたときに、ドロップ先の候補の背景をリセットする
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // 既定の動作（一部の要素でリンクとして開く）を行わないようにする。
  event.preventDefault();
  // ドラッグした要素を選択されたドロップターゲットに移動する
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged);
  }
});
```

#### 結果

{{EmbedLiveSample('ドラッグ＆ドロップの例')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
- {{domxref("HTMLElement/dragend_event", "dragend")}}
- {{domxref("HTMLElement/dragover_event", "dragover")}}
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
- {{domxref("HTMLElement/drop_event", "drop")}}
