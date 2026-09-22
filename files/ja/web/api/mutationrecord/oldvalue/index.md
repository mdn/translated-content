---
title: "MutationRecord: oldValue プロパティ"
slug: Web/API/MutationRecord/oldValue
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`oldValue`** は、観測対象のノードの変化前の文字データまたは属性の値を保持します。

## 値

以下の条件を満たす場合、変化した属性の前の値を表す文字列です。

- {{domxref("MutationObserver.observe()")}} の引数 `attributeOldValue` が `true`
- {{domxref("MutationObserver.observe()")}} の引数 `attributes` が `true` または省略された
- 変更の {{domxref("MutationRecord.type", "type")}} が `attributes`

以下の条件を満たす場合、変化した {{domxref("CharacterData")}} ノードの前の値を表す文字列です。

- {{domxref("MutationObserver.observe()")}} の引数 `characterDataOldValue` が `true`
- {{domxref("MutationObserver.observe()")}} の引数 `characterData` が `true` または省略された
- 変更の {{domxref("MutationRecord.type", "type")}} が `characterData`

それ以外の場合、このプロパティは `null` です。

## 例

### 前の色を表示する

以下の例では、`h1` の色をランダムな新しい色に変えるボタンがあります。{{domxref("MutationObserver")}} により対象のノード (`h1`) の属性の変更を観測します。変更が検出されたら、オブザーバーは関数 `logOldValue()` を呼び出します。

関数 `logOldValue()` は、`MutationRecord` オブジェクトが格納された配列 `mutationRecords` を受け取ります。そして、`MutationRecord` オブジェクトの `oldValue` プロパティを、前の色で表示します。

#### HTML

```html
<h1 id="h1">Hi, Mom!</h1>
<button id="changeColorButton">色を変える</button>
<p id="log"></p>
```

#### JavaScript

```js
const h1 = document.getElementById("h1");
const changeValueButton = document.getElementById("changeColorButton");
const log = document.getElementById("log");

changeColorButton.addEventListener("click", () => {
  // 十六進の色の値として用いるランダムな 6 桁の十六進数
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  h1.style.color = `#${newColor}`;
});

function logOldValue(mutationRecordArray) {
  for (const record of mutationRecordArray) {
    log.textContent = `前の値: ${record.oldValue}`;
    log.style.cssText = record.oldValue;
  }
}

const observer = new MutationObserver(logOldValue);
observer.observe(h1, {
  attributes: true,
  attributeOldValue: true,
});
```

#### 結果

{{EmbedLiveSample("前の色を表示する", "", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
