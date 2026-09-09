---
title: "MutationRecord: attributeName プロパティ"
slug: Web/API/MutationRecord/attributeName
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`attributeName`** は、{{domxref("MutationObserver")}} で観測されたノードの変更された属性の名前を保持します。

## 値

レコードの [`type`](/ja/docs/Web/API/MutationRecord/type) が `attributes` である場合は、変更の対象の変更された属性の名前を表す文字列です。

レコードの [`type`](/ja/docs/Web/API/MutationRecord/type) が `attributes` でない場合は、`null` です。

## 例

### 最後に更新された属性の名前を取得する

以下の例では、4 個のボタンがあります。2 個は `h1` 要素の属性 `style` を変更するもので、2 個は `h1` 要素の属性 `class` を変更するものです。このスクリプトは {{domxref("MutationObserver")}} を用いて変更を検出し、下のテキストを最後に変更された属性の名前に更新します。

#### HTML

```html
<h1 class="blue" id="hiMom">Hi, Mom!</h1>

<button id="redButton">class を "red" にする</button>
<button id="blueButton">class を "blue" にする</button>
<button id="whiteButton">style を "color:white;" にする</button>
<button id="blackButton">style を "color:black;" にする</button>

<p id="log">更新された属性の名前:</p>
```

#### CSS

```css
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
```

#### JavaScript

```js
const hiMom = document.querySelector("#hiMom");
const redButton = document.querySelector("#redButton");
const blueButton = document.querySelector("#blueButton ");
const whiteButton = document.querySelector("#whiteButton");
const blackButton = document.querySelector("#blackButton");
const log = document.querySelector("#log");

redButton.addEventListener("click", () => {
  hiMom.classList.add("red");
  hiMom.classList.remove("blue");
});

blueButton.addEventListener("click", () => {
  hiMom.classList.add("blue");
  hiMom.classList.remove("red");
});

whiteButton.addEventListener("click", () => {
  hiMom.style.color = "white";
});

blackButton.addEventListener("click", () => {
  hiMom.style.color = "black";
});

function logLastAttr(mutationRecordArray) {
  for (const record of mutationRecordArray) {
    if (record.type === "attributes") {
      log.textContent = `更新された属性の名前: ${record.attributeName}`;
    }
  }
}

const observer = new MutationObserver(logLastAttr);
observer.observe(hiMom, { attributes: true });
```

#### 結果

{{EmbedLiveSample("最後に更新された属性の名前を取得する", "", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
