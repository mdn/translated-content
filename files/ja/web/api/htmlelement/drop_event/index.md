---
title: "HTMLElement: drop イベント"
short-title: drop
slug: Web/API/HTMLElement/drop_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

**`drop`** イベントは、要素または選択されたテキストが、妥当なドロップターゲットにドロップされたときに発生します。`drop` イベントが確実に期待通りに発生するように、[`dragover`](/ja/docs/Web/API/HTMLElement/dragover_event) イベントを処理するコードの一部に [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) 呼び出しを常に記載してください。

このイベントは取り消される可能性があり、{{domxref("Document")}} と {{domxref("Window")}} オブジェクトまでバブルアップする可能性があります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
addEventListener("drop", (event) => {});

ondrop = (event) => {};
```

## イベント型

{{domxref("DragEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("DragEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : ドラッグ＆ドロップ操作の間に転送されるデータです。

## 例

### 最小限のドラッグ＆ドロップの例

この例では、コンテナーの中にドラッグ可能な要素を置いています。要素を掴んで、他のコンテナーの上にドラッグし、放してみましょう。

ここでは、 3 つのイベントハンドラーを使用しています。

- `dragstart` イベント ハンドラーでは、ユーザーがドラッグした要素へのリファレンスを取得します。
- ターゲットコンテナーの `dragover` イベントハンドラーでは、 `event.preventDefault()` を呼び出し、`drop` イベントを受信できるようにします。
- ドロップゾーンの `drop` イベントハンドラーでは、ドラッグ可能な要素を元のコンテナーからドロップゾーンに移動する処理を行います。

ドラッグ＆ドロップのより完全な例については、[`drag`](/ja/docs/Web/API/HTMLElement/drag_event) イベントのページを参照してください。

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
  /* 例でユーザーがテキストを選択するのを防ぐ */
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

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // ドラッグ中の要素の参照を保存
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // ドロップできるように既定の動作を停止
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // 既定の動作（一部の要素でリンクとして開く）を行わないようにする。
  event.preventDefault();
  // ドラッグした要素を選択されたドロップターゲットに移動する
  if (event.target.className === "dropzone") {
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
  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
