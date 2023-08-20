---
title: "Document: dragenter イベント"
slug: conflicting/Web/API/HTMLElement/dragenter_event_2dcc7160dcc0241687dce4442238bbf3
original_slug: Web/API/Document/dragenter_event
---

{{APIRef}}

`dragenter` イベントは、ドラッグ中のイベントやテキストの選択範囲が、妥当なドロップターゲットに入ったときに発生します。

ターゲットのオブジェクトは*ユーザーによる直接の選択範囲*（ドロップターゲットとしてユーザーによって直接示された要素）、または {{HTMLElement("body")}} 要素です。

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
      <td>ユーザーによる直接の選択範囲をターゲット要素の可能性から除外する</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragenter", "ondragenter")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### dragenter でドロップゾーンにスタイル付け

この例では、コンテナーの中にドラッグ可能な要素を入れています。この要素を掴んで、他のコンテナーの上にドラッグし、そして放してみましょう。

ドラッグ可能な要素がコンテナーの上にある間、`dragenter` イベントを待ち受けて、他のコンテナーの背景を紫色にし、ドラッグ可能な要素がコンテナーにドロップされることを知らせます。

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

{{EmbedLiveSample('Styling drop zones on dragenter')}}

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
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 他のターゲットにおけるこのイベント:

  - {{domxref("Window")}}: {{domxref("Window/dragenter_event", "dragenter")}} イベント
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragenter_event", "dragenter")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragenter_event", "dragenter")}} イベント
