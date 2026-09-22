---
title: "MutationRecord: target プロパティ"
slug: Web/API/MutationRecord/target
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`target`** は、{{domxref("MutationObserver")}} で観測された変更の対象 (すなわち、変更されたノード) です。

## 値

変更の影響を受けた {{domxref("Node")}} です。

- レコードの {{domxref("MutationRecord.type", "type")}} が `attributes` のときは、属性が変更された {{domxref("Element")}} です。
- レコードの {{domxref("MutationRecord.type", "type")}} が `characterData` のときは、対象の {{domxref("CharacterData")}} ノードです。
- レコードの {{domxref("MutationRecord.type", "type")}} が `childList` のときは、子ノードが変更された {{domxref("Node")}} です。

## 例

### 変更の対象を記録する

以下の例では、コンテナー div `#container` の中に赤 div (`#red-div`) と青 div (`#blue-div`) の 2 個の div があります。このコンテナーを観測する {{domxref("MutationObserver")}} を作成します。このオブザーバーは子のリストへの変更を観測し、`subtree: true` をつけてあるのでコンテナーの子ノードの子ノードの変化も観測します。

このオブサーバーのコールバックは、変更の `target` を記録します。`#red-div` や `#blue-div` にノードを追加すると、それに応じて `target` が `#red-div` や `#blue-div` になります。

#### HTML

```html
<pre id="log">変更の対象:</pre>
<button id="add-nodes-to-red-div">赤 div にノードを追加</button>
<button id="add-nodes-to-blue-div">青 div にノードを追加</button>
<button id="reset">リセット</button>
<div id="container">
  <div id="red-div"></div>
  <div id="blue-div"></div>
</div>
```

```css hidden
#log {
  border: 1px dotted black;
  padding: 0.5rem;
}

#red-div {
  border: 1px solid red;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  overflow: auto;
}

#blue-div {
  border: 1px solid blue;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
  overflow: auto;
}

#container {
  display: grid;
  grid-template-columns: 50% auto;
}
```

#### JavaScript

```js
const container = document.querySelector("#container");
const redDiv = document.querySelector("#red-div");
const blueDiv = document.querySelector("#blue-div");
const addToRed = document.querySelector("#add-nodes-to-red-div");
const addToBlue = document.querySelector("#add-nodes-to-blue-div");
const reset = document.querySelector("#reset");
const log = document.querySelector("#log");

addToRed.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `現在時刻: ${Date.now()}`;
  redDiv.appendChild(newPara);
});

addToBlue.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `現在時刻: ${Date.now()}`;
  blueDiv.appendChild(newPara);
});

reset.addEventListener("click", () => self.location.reload());

function logMutationTarget(records) {
  for (const record of records) {
    log.textContent = `変更の対象: ${record.target.id}`;
  }
}

const observer = new MutationObserver(logMutationTarget);
observer.observe(container, { childList: true, subtree: true });
```

#### 結果

{{EmbedLiveSample("変更の対象を記録する", "", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
