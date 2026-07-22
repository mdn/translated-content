---
title: "MutationRecord: addedNodes プロパティ"
slug: Web/API/MutationRecord/addedNodes
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`addedNodes`** は、{{domxref("MutationObserver")}} で観測された変更において対象のノードに追加されたノードの {{domxref("NodeList")}} です。

## 値

{{domxref("MutationObserver")}} で観測された変更の対象に追加されたノードが格納された {{domxref("NodeList")}} です。

## 例

### ノードの追加時に更新を行う

以下の例では、対象ノードにノードを追加するボタンと、削除するボタンの 2 個のボタンがあります。{{domxref("MutationObserver")}} により対象ノードの変更を観測します。変更を検出すると、オブザーバーは関数 `logNewNodes()` を呼び出します。

関数 `logNewNodes()` は、MutationRecord の `type` が `childList` であるか、すなわち対象ノードの子ノードが変更されたかを確認します。種類が `childList` であれば、この関数は追加された新規ノードの総数を更新します。ただし、「ノードを削除」ボタンをクリックした際は、`record.addedNodes` の要素数は `0` なので新規ノードの総数は変わらないことに注意してください。

#### HTML

```html
<button id="add-nodes">ノードを追加</button>
<button id="remove-nodes">ノードを削除</button>
<button id="reset">リセット</button>

<pre id="counter">追加されたノードの数: 0</pre>
<div id="target"></div>
```

```css hidden
#counter {
  border: 1px dotted black;
  padding: 0.5rem;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const removeNodes = document.querySelector("#remove-nodes");
const reset = document.querySelector("#reset");
const counter = document.querySelector("#counter");
const target = document.querySelector("#target");
let totalAddedNodes = 0;

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `現在時刻: ${Date.now()}`;
  target.appendChild(newPara);
});

removeNodes.addEventListener("click", () => {
  const lastChild = target.lastChild;
  if (lastChild) {
    target.removeChild(lastChild);
  }
});

reset.addEventListener("click", () => self.location.reload());

function logNewNodes(records) {
  for (const record of records) {
    // 対象ノードの子リストが変更されたかを確認する
    if (record.type === "childList") {
      totalAddedNodes += record.addedNodes.length;
      // 追加されたノードの数を記録する
      counter.textContent = `追加されたノードの数: ${totalAddedNodes}`;
    }
  }
}

const observer = new MutationObserver(logNewNodes);
observer.observe(target, { childList: true });
```

#### 結果

{{EmbedLiveSample("ノードの追加時に更新を行う")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
