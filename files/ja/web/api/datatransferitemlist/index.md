---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList`** オブジェクトは {{domxref("DataTransferItem")}} オブジェクトのリストで、ドラッグされているアイテムを表します。ドラッグ操作の間、それぞれの {{domxref("DragEvent")}} は {{domxref("DragEvent.dataTransfer", "dataTransfer")}} プロパティを持ち、そのプロパティが `DataTransferItemList` となります。

それぞれのアイテムは、[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ブラケット記法) `[]` を使用してアクセスできます。

`DataTransferItemList` は主に [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) のために設計され、現在も HTML ドラッグアンドドロップセクションで規定されています。しかし現在では、{{domxref("ClipboardEvent.clipboardData")}} や {{domxref("InputEvent.dataTransfer")}} などの他の API でも使用されるようになりました。`DataTransferItemList` のドキュメントでは主にドラッグ＆ドロップ操作における使用法について説明します。他のコンテキストでの `DataTransferItemList` の使用法については、各 API のドキュメントを参照してください。

このインターフェイスにはコンストラクターがありません。

## インスタンスプロパティ

- {{domxref("DataTransferItemList.length")}} {{ReadOnlyInline}}
  - : `unsigned long` で、リスト内のドラッグアイテムの数を表します。

## インスタンスメソッド

- {{domxref("DataTransferItemList.add()")}}
  - : ドラッグアイテムのリストにアイテム（{{domxref("File")}} オブジェクトまたは文字列）を追加し、新しいアイテムの {{domxref("DataTransferItem")}} オブジェクトを返します。
- {{domxref("DataTransferItemList.remove()")}}
  - : 指定された位置のリストからドラッグアイテムを削除します。
- {{domxref("DataTransferItemList.clear()")}}
  - : リストからすべてのドラッグ項目を削除します。

## 例

この例は、ドラッグ & ドロップの使い方を表します。

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

  // この要素の ID をドラッグペイロードに追加し、ドロップハンドラーが
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

{{EmbedLiveSample('Example', '35%', '250px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
