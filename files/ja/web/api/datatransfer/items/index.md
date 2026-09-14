---
title: "DataTransfer: items プロパティ"
short-title: items
slug: Web/API/DataTransfer/items
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

`items` は {{domxref("DataTransfer")}} インターフェイスの読み取り専用プロパティで、ドラッグ操作での{{domxref("DataTransferItem", "データ転送項目", "", 1)}}の{{domxref("DataTransferItemList", "リスト", "", 1)}}です。リストには操作中のアイテムごとに 1 つの項目が含まれており、操作にアイテムがなかった場合はリストは空になります。

## 値

ドラッグ操作でドラッグされるアイテムを表す {{domxref("DataTransferItem")}} オブジェクトを含む {{domxref("DataTransferItemList")}} オブジェクトで、ドラッグされるオブジェクトごとに 1 つのリスト項目があります。ドラッグ操作にデータがない場合、リストは空になります。

## 例

### ドラッグされた項目の記録

この例では、`items` を使って、ドラッグした項目の情報を記録します。

#### HTML

```html-nolint
<ul>
  <li id="source1" draggable="true">アイテム 1 をドロップゾーンにドラッグ</li>
  <li id="source2" draggable="true">アイテム 2 をドロップゾーンにドラッグ</li>
</ul>
<div id="target">ドロップゾーン</div>

<button id="reset">リセット</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#target {
  border: 1px solid black;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  console.log(`dragstart: target.id = ${ev.target.id}`);
  // この要素の ID をドラッグの内容に追加し、ドロップハンドラーがどの
  // 要素をツリーに追加すればよいかを知ることができるようにします。
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  ev.preventDefault();
  // ターゲットの ID を取得し、移動した要素をターゲットの DOM に追加します
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // 各項目の "kind" と "type" を表示する
  if (ev.dataTransfer.items) {
    for (const item of ev.dataTransfer.items) {
      console.log(`kind = ${item.kind}, type = ${item.type}`);
    }
  }
}

function dragoverHandler(ev) {
  ev.preventDefault();
  // dropEffect を move に設定する
  ev.dataTransfer.dropEffect = "move";
}

const source1 = document.querySelector("#source1");
const source2 = document.querySelector("#source2");
const target = document.querySelector("#target");

source1.addEventListener("dragstart", dragstartHandler);
source2.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 結果

{{EmbedLiveSample("Logging dragged items", 0, 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
