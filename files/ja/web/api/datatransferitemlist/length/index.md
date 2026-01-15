---
title: "DataTransferItemList: length プロパティ"
short-title: length
slug: Web/API/DataTransferItemList/length
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("HTML Drag and Drop API")}}

**`length`** は {{domxref("DataTransferItemList")}} インターフェイスの読み取り専用プロパティで、ドラッグアイテムリストの中に現在入っているアイテムの数を返します。

## 値

リスト中のドラッグデータアイテムの数で、もしリストが空か無効であれば 0 です。アイテムリストの {{domxref("DataTransfer")}} オブジェクトがドラッグデータストアに関連付けられていない場合は、ドラッグアイテムリストは無効とみなされます。

## 例

この例は `length` プロパティの使い方を示しています。

### HTML

```html-nolint
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
  const data = ev.dataTransfer.items;
  // ドロップされたアイテムをループ処理し、そのデータをログに記録
  for (let i = 0; i < data.length; i++) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // アイテムがターゲットノード
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // ドラッグデータ項目が HTML
      data[i].getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // ドラッグデータ項目が URI
      data[i].getAsString((s) => {
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

{{EmbedLiveSample('Examples', 100, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
