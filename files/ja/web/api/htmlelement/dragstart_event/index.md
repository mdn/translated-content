---
title: 'HTMLElement: dragstart イベント'
slug: Web/API/HTMLElement/dragstart_event
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
      <td>あり</td>
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

### ドラッグ開始時に半透明にする

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んでドラッグし、そして放してみましょう。

`dragstart` イベントを待ち受けすることで、ドラッグしている間、要素を半透明にします。

ドラッグ＆ドロップのより完全な例については、[`drag`](/ja/docs/Web/API/HTMLElement/drag_event) イベントのページを参照してください。

#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">
    この div はドラッグ可
  </div>
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
  opacity: .5;
}
```

#### JavaScript

```js
const source = document.getElementById("draggable");
source.addEventListener("dragstart", event => {
  // 半透明にする
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", event => {
  // 透明度を解除
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

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 他を対象としたこのイベント

  - {{domxref("Window")}}: {{domxref("Window/dragstart_event", "dragstart")}} イベント
  - {{domxref("Document")}}: {{domxref("Document/dragstart_event", "dragstart")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragstart_event", "dragstart")}} イベント
