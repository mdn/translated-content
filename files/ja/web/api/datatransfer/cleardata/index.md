---
title: DataTransfer.clearData()
slug: Web/API/DataTransfer/clearData
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.clearData()`** メソッドは、ドラッグ操作の {{domxref("DataTransfer", "ドラッグデータ")}}の中で指定された型のものを削除します。指定された型のデータが存在しない場合、このメソッドは何もしません。

このメソッドが引数なしで呼び出された場合、またはフォーマットが空文字列であった場合、すべての型のデータが削除されます。

このメソッドはドラッグ操作からファイルを削除*しない*ので、ドラッグに含まれるファイルがある場合、 `"Files"` 型の項目がオブジェクトの {{domxref("DataTransfer.types")}} の一覧に残る可能性があります。

> **メモ:** このメソッドは、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントのハンドラーでのみ使用できます。ドラッグ操作のデータストアが書き込み可能なのはその時だけだからです。

## 構文

```js
clearData();
clearData(format);
```

### 引数

- `format` {{optional_inline}}
  - : 削除するデータの型を指定する文字列。この引数が空の文字列であったり、指定されていない場合は、すべての型のデータが削除されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、 {{domxref("DataTransfer")}} オブジェクトの {{domxref("DataTransfer.getData()","getData()")}}、{{domxref("DataTransfer.setData()","setData()")}}、{{domxref("DataTransfer.clearData()","clearData()")}} メソッドを使用しています。

### HTML

```html
<span class="tweaked" id="source" draggable="true">
  この要素を選択し、ドロップゾーンにドラッグした後、選択を解除して要素を移動してください。
</span>
<span class="tweaked" id="target">ドロップゾーン</span>
<div>状態: <span id="status">ドラッグで開始</span></div>
<div>データ: <span id="data">未初期化</span></div>
```

### CSS

```css
span.tweaked {
  display: inline-block;
  margin: 1em 0;
  padding: 1em 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function () {
  // HTML 要素を選択する
  const draggable = document.getElementById("source");
  const droppable = document.getElementById("target");
  const status = document.getElementById("status");
  const data = document.getElementById("data");
  let dropped = false;

  // イベントハンドラーを登録する
  draggable.addEventListener("dragstart", dragStartHandler);
  draggable.addEventListener("dragend", dragEndHandler);
  droppable.addEventListener("dragover", dragOverHandler);
  droppable.addEventListener("dragleave", dragLeaveHandler);
  droppable.addEventListener("drop", dropHandler);

  function dragStartHandler(event) {
    status.textContent = "ドラッグ中";

    // ドラッグが開始されたことを示すように、ターゲット要素の境界線を変更する
    event.currentTarget.style.border = "1px dashed blue";

    // 既存のクリップボードをクリアすることから始めます。
    // 特定のタイプを指定していないので、これはすべてのタイプに影響します。

    event.dataTransfer.clearData();

    // ドラッグのフォーマットとデータを設定する（データにはイベントターゲットの id を使用する）
    event.dataTransfer.setData("text/plain", event.target.id);

    data.textContent = event.dataTransfer.getData("text/plain");
  }

  function dragEndHandler(event) {
    if (!dropped) {
      status.textContent = "ドラッグのキャンセル";
    }

    data.textContent = event.dataTransfer.getData("text/plain") || "empty";

    // ドラッグ中ではないことを示すために境界線を変更する
    event.currentTarget.style.border = "1px solid black";

    if (dropped) {
      // すべてのイベントリスナーを削除
      draggable.removeEventListener("dragstart", dragStartHandler);
      draggable.removeEventListener("dragend", dragEndHandler);
      droppable.removeEventListener("dragover", dragOverHandler);
      droppable.removeEventListener("dragleave", dragLeaveHandler);
      droppable.removeEventListener("drop", dropHandler);
    }
  }

  function dragOverHandler(event) {
    status.textContent = "ドロップ可能";

    event.preventDefault();
  }

  function dragLeaveHandler(event) {
    status.textContent = "ドラッグ中（ドロップは可能）";

    event.preventDefault();
  }

  function dropHandler(event) {
    dropped = true;

    status.textContent = "ドロップしました。";

    event.preventDefault();

    // イベント形式に連動したデータを取得する « text »
    const _data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(_data);

    // イベントのターゲット要素にドラッグソース要素を追加する
    event.target.appendChild(element);

    // CSS スタイルと表示テキストを変更する
    element.style.cssText =
      "border: 1px solid black;display: block; color: red";
    element.textContent = "ドロップゾーンに入りました!";
  }
});
```

### 結果

{{EmbedLiveSample('Examples', 300, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
