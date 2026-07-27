---
title: "MutationRecord: previousSibling プロパティ"
slug: Web/API/MutationRecord/previousSibling
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`previousSibling`** は、{{domxref("MutationObserver")}} の [`target`](/ja/docs/Web/API/MutationRecord/target) の追加または削除された子ノードの前の兄弟です。

## 値

{{domxref("MutationObserver")}} の [`target`](/ja/docs/Web/API/MutationRecord/target) でノードが追加または削除された場合は、この値は追加または削除されたノードの前の兄弟である {{domxref("Node")}} です。すなわち、親の {{domxref("Node.childNodes", "childNodes")}} リストの中で追加または削除されたノードの直前にあるノードです。

ノードが追加も削除もされていない場合や、追加または削除されたノードが親の最初の子である場合は、値は `null` です。

## 例

### 変更における前の兄弟を記録する

この例では、ボタンをクリックするとノードを追加します。そして、オブザーバーが追加されたノードの `previousSibling` の `textContent` を記録します。

#### HTML

```html
<button id="add-nodes">ノードを追加</button>
<button id="reset">リセット</button>

<pre id="log" class="log">追加されたノードの前の兄弟:</pre>
<div id="target"><p>ノード #0</p></div>
```

```css hidden
.log {
  border: 1px dotted black;
  padding: 0.5rem;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const reset = document.querySelector("#reset");
const target = document.querySelector("#target");
let nodeNumber = 1;

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `ノード #${nodeNumber}`;
  nodeNumber++;
  target.appendChild(newPara);
});

reset.addEventListener("click", () => self.location.reload());

function logPreviousSibling(records) {
  for (const record of records) {
    if (record.type === "childList") {
      for (const newNode of record.addedNodes) {
        log.textContent = `追加されたノードの前の兄弟: ${newNode.previousSibling?.textContent}`;
      }
    }
  }
}

const observer = new MutationObserver(logPreviousSibling);
observer.observe(target, { childList: true });
```

#### 結果

{{EmbedLiveSample("変更における前の兄弟を記録する", "", 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
