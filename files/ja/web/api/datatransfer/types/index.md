---
title: "DataTransfer: types プロパティ"
short-title: types
slug: Web/API/DataTransfer/types
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.types`** は読み取り専用プロパティで、 {{domxref("DataTransfer.items","items")}} に存在する利用可能な型を返します。

## 値

ドラッグ操作で使用されるデータ形式の配列。
それぞれの形式は文字列であり、一般的には `text/plain` や `text/html` などの MIME タイプです。
ドラッグ操作にデータが含まれていない場合、このリストは空になります。
ドラッグ操作にファイルが含まれている場合は、その型の 1 つが文字列 `Files` になります。

## 例

この例では、`types` と {{domxref("DataTransfer.items","items")}} プロパティを使用しています。

```html
<ul>
  <li id="i1" draggable="true">アイテム 1 をドロップゾーンにドラッグ</li>
  <li id="i2" draggable="true">アイテム 2 をドロップゾーンにドラッグ</li>
</ul>
<div id="target">ドロップゾーン</div>
<pre id="output"></pre>
```

```css
div {
  margin: 0em;
  padding: 2em;
}
#target {
  border: 1px solid black;
}
```

```js
const output = document.getElementById("output");
function log(msg) {
  output.textContent += `${msg}\n`;
}

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("dragstart", dragstartHandler);
});

function dragstartHandler(ev) {
  log(`dragStart: target.id = ${ev.target.id}`);

  // ドラッグ内容にこの要素の ID を追加し、ドロップハンドラーがどの要素を
  // ツリーに追加すればよいかを知ることができるようにする
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

const target = document.getElementById("target");

target.addEventListener("drop", (ev) => {
  log(`drop: target.id = ${ev.target.id}`);
  ev.preventDefault();

  // ターゲットの ID を取得し、移動した要素をターゲットの DOM に追加します。
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  // それぞれの形式を表示
  for (let i = 0; i < ev.dataTransfer.types.length; i++) {
    log(`… types[${i}] = ${ev.dataTransfer.types[i]}`);
  }

  // それぞれの項目の "kind" と "type" を表示する
  for (let i = 0; i < ev.dataTransfer.items.length; i++) {
    log(
      `… items[${i}].kind = ${ev.dataTransfer.items[i].kind}; type = ${ev.dataTransfer.items[i].type}`,
    );
  }
});

target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
});
```

{{EmbedLiveSample("examples", "", 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
