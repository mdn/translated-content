---
title: "Document: dragstart イベント"
slug: conflicting/Web/API/HTMLElement/dragstart_event_be9da5ef68a2920309b168752ea03d20
original_slug: Web/API/Document/dragstart_event
---

{{APIRef}}

`dragstart` イベントは、ユーザーが要素や選択されたテキストをドラッグし始めたときに発生します。

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
      <td>ドラッグ＆ドロップ操作を始める。</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragstart", "ondragstart")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### ドラッグ開始時に半透明を設定

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んでドラッグし、そして放してみましょう。

ドラッグしている間、要素を半透明化するために `dragstart` イベントを待ち受けます。

ドラッグ＆ドロップの完全な例については、[`drag`](/ja/docs/Web/API/Document/drag_event) イベントのページを参照してください。

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

{{EmbedLiveSample('Setting opacity on drag start')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 他のターゲットにおけるこのイベント:

  - {{domxref("Window")}}: {{domxref("Window/dragstart_event", "dragstart")}} イベント
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragstart_event", "dragstart")}} イベント
