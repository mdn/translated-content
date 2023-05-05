---
title: 'HTMLElement: dragenter イベント'
slug: Web/API/HTMLElement/dragenter_event
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
      <td>ターゲットになりうる要素としては、ユーザーの即時選択を拒否する。</td>
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

### dragenter のドロップゾーンのスタイル付け

この例では、コンテナーの中にドラッグ可能な要素を入れています。この要素を掴んで、他のコンテナーの上にドラッグし、そして放してみましょう。

ドラッグ可能な要素がコンテナーの上にある間、 `dragenter` イベントを待ち受けて、他のコンテナーの背景を紫色にし、ドラッグ可能な要素がコンテナーにドロップされることを知らせます。

ドラッグ＆ドロップの完全な例については、[`drag`](/ja/docs/Web/API/HTMLElement/drag_event) イベントのページを参照してください。

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

.dropzone.dragover {
  background-color: purple;
}
```

#### JavaScript

```js
const target = document.getElementById("droptarget");
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
```

#### 結果

{{EmbedLiveSample('Styling drop zones on dragenter')}}

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
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 他を対象としたこのイベント

  - {{domxref("Window")}}: {{domxref("Window/dragenter_event", "dragenter")}} イベント
  - {{domxref("Document")}}: {{domxref("Document/dragenter_event", "dragenter")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragenter_event", "dragenter")}} イベント
