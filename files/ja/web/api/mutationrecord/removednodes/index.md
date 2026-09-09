---
title: "MutationRecord: removedNodes プロパティ"
slug: Web/API/MutationRecord/removedNodes
l10n:
  sourceCommit: 5542c8f1ef9f67b3a7431f47ee2b4ce6ba4cec44
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`removedNodes`** は、{{domxref("MutationObserver")}} で観測された変更で対象ノードから取り除かれたノードが格納された {{domxref("NodeList")}} です。

## 値

{{domxref("MutationObserver")}} で観測された変更の対象から取り除かれたノードが格納された {{domxref("NodeList")}} です。

## 例

### 取り除かれたノードを観測する

以下の例では、対象ノードにノードを追加するボタンと、削除するボタンの 2 個のボタンがあります。{{domxref("MutationObserver")}} により対象ノードの変更を観測します。変更を検出すると、オブザーバーは関数 `logRemovedNodes()` を呼び出します。

関数 `logRemovedNodes()` は、MutationRecord の `type` が `childList` であるか、すなわち対象ノードの子ノードが変更されたかを確認します。種類が `childList` であれば、この関数は削除されたノードの総数を更新します。ただし、「ノードを追加」ボタンをクリックした際は、`record.removedNodes` の要素数は `0` なので削除されたノードの総数は変わらないことに注意してください。

#### HTML

```html
<button id="add-nodes">ノードを追加</button>
<button id="remove-nodes">ノードを削除</button>
<button id="reset">リセット</button>

<pre id="counter">削除されたノードの数: 0</pre>
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
let totalRemovedNodes = 0;

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

function logRemovedNodes(records) {
  for (const record of records) {
    // 対象ノードの子リストが変更されたかを確認する
    if (record.type === "childList") {
      totalRemovedNodes += record.removedNodes.length;
      // 削除されたノードの数を記録する
      counter.textContent = `削除されたノードの数: ${totalRemovedNodes}`;
    }
  }
}

const observer = new MutationObserver(logRemovedNodes);
observer.observe(target, { childList: true });
```

#### 結果

{{EmbedLiveSample("取り除かれたノードを観測する")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
