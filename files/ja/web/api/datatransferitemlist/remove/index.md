---
title: "DataTransferItemList: remove() メソッド"
short-title: remove()
slug: Web/API/DataTransferItemList/remove
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList.remove()`** メソッドは指定された位置の {{domxref("DataTransferItem")}} をリストから削除します。位置が 0 より小さいか、リストの長さより 1 だけ小さい値より大きい場合、リストは変更されません。

## 構文

```js-nolint
remove(index)
```

### 引数

- `index`
  - : 削除するドラッグデータリストの項目の、0 から始まる位置です。 `index` がリスト内の既存の項目と一致しない場合は、リストが変更されずに残ります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : ドラッグデータストアが読み取り/書き込みモードでないため、アイテムを削除できない場合に発生します。

## 例

### 要素のドラッグ & ドロップ

この例では、`remove()` メソッドを使用しています。

#### HTML

```html
<div>
  <p id="source" draggable="true">
    この要素を選択し、ドロップゾーンまでドラッグして、選択を解除すると要素が移動します。
  </p>
</div>
<div id="target">ドロップゾーン</div>
```

#### CSS

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

#### JavaScript

```js
function dragstartHandler(ev) {
  console.log("dragStart");
  // この要素の ID をドラッグデータ本体に追加し、ドロップハンドラーが
  // どの要素をツリーに追加すべきかを認識できるようにする
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // ドラッグデータ本体に他のアイテムを追加する
  dataList.add("<p>段落…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
}

function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = event.dataTransfer.items;
  // ドロップされたアイテムをループ処理し、そのデータをログに記録
  for (const item of data) {
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
}

function dragoverHandler(ev) {
  console.log("dragOver");
  ev.preventDefault();
  // dropEffect を「移動」に設定
  ev.dataTransfer.dropEffect = "move";
}

function dragendHandler(ev) {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;
  // すべてのファイルをクリア。安全に削除するため、逆順で反復処理を行う。
  for (let i = dataList.length - 1; i >= 0; i--) {
    if (dataList[i].kind === "file") {
      dataList.remove(i);
    }
  }
  // 残っているドラッグデータをすべてクリア
  dataList.clear();
}

const source = document.querySelector("#source");
source.addEventListener("dragstart", dragstartHandler);
source.addEventListener("dragend", dragendHandler);

const target = document.querySelector("#target");
target.addEventListener("drop", dropHandler);
target.addEventListener("dragover", dragoverHandler);
```

#### 結果

{{ EmbedLiveSample('Dragging and dropping an element', 100, '300px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
