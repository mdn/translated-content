---
title: "DataTransferItemList: clear() メソッド"
short-title: clear()
slug: Web/API/DataTransferItemList/clear
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("HTML Drag and Drop API")}}

{{domxref("DataTransferItemList")}} の **`clear()`** メソッドは、ドラッグデータアイテムリストからすべての {{domxref("DataTransferItem")}} オブジェクトを削除し、リストを空にします。

このリストが保持されるドラッグデータストアは、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントの処理中にのみ書き込み可能になります。 {{domxref("HTMLElement/drop_event", "drop")}} を処理する間、ドラッグデータストアは読み取り専用モードであり、このメソッドは何もしません。例外も投げません。

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は `clear()` メソッドの使い方を示します。

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

  // 残っているドラッグデータをすべてクリア
  dataList.clear();
});

target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();

  // ドロップされたアイテムをループ処理し、そのデータをログに記録
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match(/^text\/plain/)) {
      // アイテムがターゲットノード
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
      // ドラッグデータ項目が HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
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
