---
title: "HTMLSelectElement: value プロパティ"
short-title: value
slug: Web/API/HTMLSelectElement/value
l10n:
  sourceCommit: 7f38ec3d1324a031bc25e70b3c103ca78c2cf04d
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.value`** プロパティは、この {{htmlelement("select")}} 要素に関連付けられた {{htmlelement("option")}} 要素のうち、選択された最初のものの値を格納します。

このプロパティは直接設定することもでき、例えば、何らかの条件に基づいて既定値を設定するには、次のようにします。

## 値

この {{htmlelement("select")}} 要素で最初に選択された {{htmlelement("option")}} 要素の値を格納する文字列、またはオプションが選択されていない場合は空文字列。

## 例

### 選択された値の取得

```html
<label for="bird-select">鳥を選択してください:</label>

<select name="birds" id="bird-select">
  <option value="">--オプションを選択してください--</option>
  <option value="Scarlet ibis">ショウジョウトキ</option>
  <option value="Marabou stork">マラボウコウノトリ</option>
  <option value="Roseate spoonbill">ベニヘラサギ</option>
</select>

<pre id="log"></pre>
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const select = document.querySelector("#bird-select");
select.addEventListener("change", () => {
  log(`選択: ${select.value}`);
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

{{EmbedLiveSample("Retrieving the selected value")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML の {{HTMLElement("select")}} 要素。
