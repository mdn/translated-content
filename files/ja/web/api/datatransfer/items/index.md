---
title: DataTransfer.items
slug: Web/API/DataTransfer/items
---

{{APIRef("HTML Drag and Drop API")}}

{{domxref("DataTransfer")}} インターフェイスの `items` プロパティは読み取り専用で、ドラッグ操作での{{domxref("DataTransferItem", "データ転送項目", "", 1)}}の{{domxref("DataTransferItemList", "リスト", "", 1)}}です。リストには操作中の項目ごとに 1 つの項目が含まれており、操作に項目がなかった場合はリストは空になります。

## 値

ドラッグ操作でドラッグされる項目を表す {{domxref("DataTransferItem")}} オブジェクトを含む {{domxref("DataTransferItemList")}} オブジェクトで、ドラッグされるオブジェクトごとに 1 つのリスト項目があります。ドラッグ操作にデータがない場合、リストは空になります。

## 例

### ドラッグされた項目の記録

この例では、`items` を使って、ドラッグした項目の情報を記録します。

#### HTML

```html
<ul>
  <li id="source1" draggable="true">
    項目 1 をドロップゾーンにドラッグしてください
  </li>
  <li id="source2" draggable="true">
    項目 2 をドロップゾーンにドラッグしてください
  </li>
</ul>
<div id="target">ドロップゾーン</div>

<pre id="output"></pre>
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

#output {
  height: 100px;
  overflow: scroll;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  log(`dragstart: target.id = ${ev.target.id}`);
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
  if (ev.dataTransfer.items != null) {
    for (const item of ev.dataTransfer.items) {
      log(`kind = ${item.kind}, type = ${item.type}`);
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

function log(message) {
  const output = document.querySelector("#output");
  output.textContent = `${output.textContent}\n${message}`;
  output.scrollTop = output.scrollHeight;
}

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
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
