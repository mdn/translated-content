---
title: "HTMLElement: translate プロパティ"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("HTML DOM")}}

**`translate`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、ページのローカライズ時に、要素の属性値と子の {{domxref("Text")}} ノードの値を翻訳するか、そのままにするかを示します。

これは HTML の [`translate`](/ja/docs/Web/HTML/Reference/Global_attributes/translate) グローバル属性の値を反映します。

## 値

論理値で、ページのローカライズ時に要素の属性値と子の {{domxref("Text")}} ノードの値を翻訳する場合は `true`、そうでない場合は `false` です。

## 例

次の例は、スクリプトを使って翻訳を有効または無効にする方法を示しています。

```html
<div>
  <span>この内容は常に翻訳できます: </span>
  <span translate="yes">El contenido será traducido</span>
</div>
<div>
  <span id="translate-label">この内容は翻訳できます:</span>
  <span id="translate-element" translate="no">
    El contenido puede ser traducido.
  </span>
</div>
<input id="translate-controller" type="checkbox" /> 翻訳を有効にする
```

```js
const label = document.getElementById("translate-label");
const element = document.getElementById("translate-element");
const controller = document.getElementById("translate-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.translate = true;
    label.innerText = "この内容は翻訳できます:";
  } else {
    element.translate = false;
    label.innerText = "この内容は翻訳できません:";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`translate`](/ja/docs/Web/HTML/Reference/Global_attributes/translate) グローバル属性
