---
title: "DataTransferItemList: add() メソッド"
short-title: add()
slug: Web/API/DataTransferItemList/add
l10n:
  sourceCommit: e0f97a8a4e8a2fc45f1a7bdc8d1e3f524ccb627d
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList.add()`** メソッドは、指定されたデータを使用して新しい {{domxref("DataTransferItem")}} を作成し、ドラッグデータリストに追加します。アイテムは {{domxref("File")}} または指定された種類の文字列です。リストへの追加が成功すると、新しく作成された {{domxref("DataTransferItem")}} オブジェクトが返されます。

## 構文

```js-nolint
add(data, type)
add(file)
```

### 引数

- `data`
  - : 文字列で、ドラッグアイテムのデータを表します。
- `type`
  - : ドラッグアイテムの種類を表す文字列。例えば、`text/html` や `text/plain` といった種類があります。
- `file`
  - : {{domxref("File")}} オブジェクト。この場合、種類を指定する必要はありません。

### 返値

指定したデータを格納した {{domxref("DataTransferItem")}} を返します。ドラッグアイテムを作成できなかった場合（例えば、関連する {{domxref("DataTransfer")}} オブジェクトがデータストアを持たない場合）、`null` が返されます。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 文字列で `data` 引数が提供され、 {{domxref("DataTransferItem.kind", "kind")}} が `"Plain Unicode string"` で、指定された `type` 引数と等しい型の項目がリストに既に格納されている場合に発生します。

## 例

この例では、 `add()` メソッドを使用しています。

### HTML

```html
<div>
  <p id="source" draggable="true">
    この要素を選択し、ドロップゾーンまでドラッグして、選択を解除すると要素が移動します。
  </p>
</div>
<div id="target">ドロップゾーン</div>
```

### CSS

```css
div {
  margin: 0em;
  padding: 2em;
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
const source = document.getElementById("source");
const target = document.getElementById("target");

source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // この要素の ID をドラッグデータ本体に追加し、ドロップハンドラーが
  // どの要素をツリーに追加すべきかを認識できるようにする
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // ドラッグデータ本体に他のアイテムを追加する
  dataList.add("<p>段落…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
});

source.addEventListener("dragend", (ev) => {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;
  for (let i = 0; i < dataList.length; i++) {
    dataList.remove(i);
  }
  // 残っているドラッグデータをすべてクリア
  dataList.clear();
});

target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // ドロップされたアイテムをループ処理し、そのデータをログに記録
  for (const item of event.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // アイテムがターゲットノード
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // ドラッグデータ項目が HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // ドラッグデータ項目が URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
});

target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
  // dropEffect を「移動」に設定
  ev.dataTransfer.dropEffect = "move";
});
```

### 結果

{{EmbedLiveSample('Examples', 400, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
