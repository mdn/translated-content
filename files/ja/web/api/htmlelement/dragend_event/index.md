---
title: "HTMLElement: dragend イベント"
short-title: dragend
slug: Web/API/HTMLElement/dragend_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

`dragend` イベントは、ドラッグ操作が終わろうとしているとき（マウスボタンを離したり、エスケープキーを押したりしたとき）に発生します。

このイベントはキャンセル可能で、{{domxref("Document")}} オブジェクトと {{domxref("Window")}} オブジェクトまでバブルアップする可能性があります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
addEventListener("dragend", (event) => {});

ondragend = (event) => {};
```

## イベント型

{{domxref("DragEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("DragEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : ドラッグ＆ドロップ操作の間に転送されるデータです。

## 例

### ドラッグ終了時に不透明度をリセットする

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んで、ドラッグし、そして放してみましょう。

ドラッグしている間は要素を半透明にし、放したときに要素の不透明度をリセットするために `dragend` イベントを待ち受けます。

ドラッグ＆ドロップの完全な例については、 [`drag`](/ja/docs/Web/API/HTMLElement/drag_event) イベントのページを参照してください。

#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">この div はドラッグ可</div>
</div>
<div class="dropzone"></div>
```

#### CSS

```css
body {
  /* 例でユーザーがテキストを選択するのを防ぐ */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // 半透明にする
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // 透明度を解除
  event.target.classList.remove("dragging");
});
```

#### 結果

{{EmbedLiveSample('Resetting opacity on drag end')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:
  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}
