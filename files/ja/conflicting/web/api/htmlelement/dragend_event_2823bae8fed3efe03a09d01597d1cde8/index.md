---
title: "Document: dragend イベント"
slug: conflicting/Web/API/HTMLElement/dragend_event_2823bae8fed3efe03a09d01597d1cde8
original_slug: Web/API/Document/dragend_event
---

{{APIRef}}

`dragend` イベントは、ドラッグ操作が終わろうとしているとき (マウスボタンを離したり、エスケープキーを押したりしたとき) に発生します。

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
      <td>様々</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragend", "ondragend")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### ドラッグ終了時に半透明をリセット

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んで、ドラッグし、そして放してみましょう。

ドラッグしている間は要素を半透明にし、放したときに要素の不透明度をリセットするために `dragend` イベントを待ち受けます。

ドラッグ＆ドロップのより完全な例については、 [`drag`](/ja/docs/Web/API/Document/drag_event) イベントのページを参照してください。

#### HTML

```html
<div id="container">
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

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: .5;
}
```

#### JavaScript

```js
document.addEventListener("dragstart", event => {
  // make it half transparent
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", event => {
  // reset the transparency
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

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 他のターゲットにおけるこのイベント:

  - {{domxref("Window")}}: {{domxref("Window/dragend_event", "dragend")}} イベント
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragend_event", "dragend")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragend_event", "dragend")}} イベント
