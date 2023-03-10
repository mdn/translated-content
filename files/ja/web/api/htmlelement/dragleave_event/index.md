---
title: 'HTMLElement: dragleave イベント'
slug: Web/API/HTMLElement/dragleave_event
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

### dragleave 時にドロップゾーンのスタイルをリセット

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んで、他のコンテナーの上にドラッグし、そして放してみましょう。

ドラッグ可能な要素がコンテナーの上にある間は、もう一方のコンテナーの背景を紫色にし、ドラッグ可能な要素がコンテナーの上にドロップされる可能性があることを知らせます。 `dragleave` イベントを待ち受けて、ドラッグ可能な要素がコンテナーからドラッグされたときにコンテナーの背景をリセットするようにします。

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
  // ドラッグ可能な要素がドロップ先に入ったときに、ドロップ先の候補を強調表示する。
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

#### 例

{{EmbedLiveSample('Resetting drop zone styles on dragleave')}}

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
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 他を対象としたこのイベント

  - {{domxref("Window")}}: {{domxref("Window/dragleave_event", "dragleave")}} イベント
  - {{domxref("Document")}}: {{domxref("Document/dragleave_event", "dragleave")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragleave_event", "dragleave")}} イベント
