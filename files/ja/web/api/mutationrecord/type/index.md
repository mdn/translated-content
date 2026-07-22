---
title: "MutationRecord: type プロパティ"
slug: Web/API/MutationRecord/type
l10n:
  sourceCommit: ba88d88fed7c8868bec7c51e70f841586cffbaea
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`type`** は、{{domxref("MutationObserver")}} によって観測された {{domxref("MutationRecord")}} の種類です。

## 値

このプロパティは変更の種類を表す文字列に設定されます。以下のいずれかの値をとります。

- `attributes`: 属性の変更の場合

- `characterData`: {{domxref("CharacterData")}} ノードの変更の場合

- `childList`: ノードのツリーの変更の場合

## 例

### 変更の種類を記録する

以下の例では、DOM を操作する 2 個のボタンを用意します。最初のボタンは新しいノードを追加し、2 番目のボタンは追加されたノード全ての属性 `color` を変更します。それら全てを観測するための {{domxref("MutationObserver")}} を作成し、変更の `type` を `#log` に記録するよう設定します。

ノードを追加した際の `type` は `childList` となり、属性 `color` を変更したときの `type` は `attributes` となることがわかるでしょう。

#### HTML

```html
<button id="add-nodes">ノードを追加</button>
<button id="set-attribute">色を変える</button>

<button id="reset">リセット</button>

<pre id="log">変更の種類:</pre>
<div id="target"><p>ノード #0</p></div>
```

```css hidden
#log {
  border: 1px dotted black;
  padding: 0.5rem;
}

.blue {
  color: blue;
}

.red {
  color: red;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const setAttribute = document.querySelector("#set-attribute");
const reset = document.querySelector("#reset");
const log = document.querySelector("#log");
const target = document.querySelector("#target");
let nodeNumber = 1;

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `ノード #${nodeNumber}`;
  nodeNumber++;
  target.appendChild(newPara);
});

setAttribute.addEventListener("click", () => {
  if (target.getAttribute("class") === "red") {
    target.setAttribute("class", "blue");
  } else {
    target.setAttribute("class", "red");
  }
});

reset.addEventListener("click", () => self.location.reload());

function logMutationType(records) {
  for (const record of records) {
    log.textContent = `変更の種類: ${record.type}`;
  }
}

const observer = new MutationObserver(logMutationType);
observer.observe(target, { childList: true, attributes: true, subtree: true });
```

#### 結果

{{EmbedLiveSample("変更の種類を記録する", "", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
