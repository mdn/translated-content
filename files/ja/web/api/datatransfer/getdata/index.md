---
title: "DataTransfer: getData() メソッド"
short-title: getData()
slug: Web/API/DataTransfer/getData
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML DOM")}}

**`DataTransfer.getData()`** メソッドは、指定した型のドラッグデータを（文字列として）受け取ります。ドラッグ操作がデータを含んでいない場合、このメソッドは空文字列を返します。

データ型は、例えば `text/plain` や `text/uri-list` です。

## 構文

```js-nolint
getData(format)
```

## 引数

- `format`
  - : 文字列で、受け取るデータの型を表します。

### 返値

文字列で、 `format` で指定した型のドラッグデータを表します。ドラッグ操作にデータがなかったり、 `format` で指定した型のデータがなかったりした場合、このメソッドは空文字列を返します。

`DataTransfer.getData()` は、特定のイベントに対してのみデータの読み書きを許可するため、期待した値を返さない場合があることに注意してください。`dragstart` と `drop` イベントの処理中は、安全にデータにアクセスすることができます。それ以外のイベントでは、データは利用できないものと考えてください。それでも、項目とその形式を列挙することは可能です。

## 例

この例は、{{domxref("DataTransfer")}} オブジェクトの `getData()` メソッドおよび {{domxref("DataTransfer.setData()","setData()")}} メソッドの使い方を紹介します。

### HTML

```html-nolint
<div id="div1">
  <span id="drag" draggable="true">他のボックスにドラッグ</span>
</div>
<div id="div2"></div>
```

### CSS

```css
#div1,
#div2 {
  width: 100px;
  height: 50px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
```

### JavaScript

```js
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const dragElement = document.getElementById("drag");

dragElement.addEventListener("dragstart", drag);
div1.addEventListener("dragover", allowDrop);
div2.addEventListener("dragover", allowDrop);
div1.addEventListener("drop", drop);
div2.addEventListener("drop", drop);

function allowDrop(allowDropEvent) {
  allowDropEvent.target.style.color = "blue";
  allowDropEvent.preventDefault();
}

function drag(dragEvent) {
  dragEvent.dataTransfer.setData("text", dragEvent.target.id);
  dragEvent.target.style.color = "green";
}

function drop(dropEvent) {
  dropEvent.preventDefault();
  const data = dropEvent.dataTransfer.getData("text");
  dropEvent.target.appendChild(document.getElementById(data));
  dragElement.style.color = "black";
}
```

### 結果

{{EmbedLiveSample('例', 600) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
