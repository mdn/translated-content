---
title: "Document: dragleave イベント"
slug: conflicting/Web/API/HTMLElement/dragleave_event_0d933fa977f195f1bf9fd28b1f8051ee
original_slug: Web/API/Document/dragleave_event
---

{{APIRef}}

`dragleave` イベントは、ドラッグしている要素や選択中のテキストが妥当なドロップターゲットを離れたときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">既定のアクション</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragleave", "ondragleave")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### dragleave でドロップゾーンのスタイルをリセット

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んで他のコンテナーの上にドラッグし、そして放してみましょう。

ドラッグ可能な要素が他のコンテナーの上にある間は、他のコンテナーの背景を紫色にし、ドラッグ可能な要素がコンテナーの上にドロップされる可能性があることを知らせます。ドラッグ可能な要素がコンテナーからドラッグされたときにコンテナーの背景をリセットするために、 `dragleave` イベントを待ち受けています。

ドラッグ＆ドロップの完全な例については、 [`drag`](/ja/docs/Web/API/Document/drag_event) イベントのページを参照してください。

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

.dropzone.dragover {
  background-color: purple;
}
```

#### JavaScript

```js
document.addEventListener("dragenter", event => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

document.addEventListener("dragleave", event => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});
```

#### 結果

{{EmbedLiveSample('Resetting drop zone styles on dragleave')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/drop_event", "drop")}}

- 他のターゲットにおけるこのイベント:

  - {{domxref("Window")}}: {{domxref("Window/dragleave_event", "dragleave")}} イベント
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragleave_event", "dragleave")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragleave_event", "dragleave")}} イベント
