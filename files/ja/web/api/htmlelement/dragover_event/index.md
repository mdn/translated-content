---
title: 'HTMLElement: dragover イベント'
slug: Web/API/HTMLElement/dragover_event
---

{{APIRef}}

`dragover` イベントは、要素または選択されたテキストが、妥当なドロップターゲットの上にあるときに（数百ミリ秒間隔で）発生します。

このイベントはドロップターゲットで発生します。

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
      <td>現在のドラッグ操作を「なし」にリセットする。</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragover", "ondragover")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### 最小限のドラッグ＆ドロップの例

この例では、コンテナーの中にドラッグ可能な要素を入れています。この要素を掴んで、他のコンテナーの上にドラッグし、そして放してみましょう。

ここでは、 3 つのイベントハンドラーを使用しています。

- `dragstart` イベントハンドラーでは、ユーザーがドラッグした要素への参照を取得します。
- ターゲットコンテナーの `dragover` イベント ハンドラーでは、 `event.preventDefault()` を呼び出し、`drop` イベントを受信できるようにします。
- ドロップゾーンの `drop` イベント ハンドラーでは、ドラッグ可能な要素を元のコンテナーからドロップ ゾーンに移動する処理を行います。

ドラッグ＆ドロップのより完全な例については、[`drag`](/ja/docs/Web/API/HTMLElement/drag_event) イベントのページを参照してください。

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
```

#### JavaScript

```js
let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", event => {
  // ドラッグ中の要素の参照を保存
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", event => {
  // ドロップできるように既定の動作を停止
  event.preventDefault();
});

target.addEventListener("drop", event => {
  // 既定の動作（一部の要素でリンクとして開く）を行わないようにする。
  event.preventDefault();
  // ドラッグした要素を選択されたドロップターゲットに移動する
  if (event.target.className == "dropzone") {
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
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 他を対象としたこのイベント

  - {{domxref("Window")}}: {{domxref("Window/dragover_event", "dragover")}} イベント
  - {{domxref("Document")}}: {{domxref("Document/dragover_event", "dragover")}} イベント
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragover_event", "dragover")}} イベント
