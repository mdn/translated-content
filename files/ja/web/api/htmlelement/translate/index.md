---
title: "HTMLElement: translate プロパティ"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 1442377111a1649dfce278eac688e06efce34b83
---

{{APIRef("HTML DOM")}}

**`translate`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、ページがローカライズされるとき、要素の属性値や {{domxref("Text")}} ノードの子の値を対応させるか、そのままにするかを示します。

これは HTML の [`translate`](/ja/docs/Web/HTML/Global_attributes/translate) グローバル属性の値を反映します。

## 値

論理値で、ページがローカライズされるときに要素の属性値や {{domxref("Text")}} ノードの子の値が翻訳される場合は `true`、そうでない場合は `false` です。

## 例

次の例は、スクリプトを使って翻訳を有効または無効にする方法を示しています。

```html
<div>
  <span>The content may always be translated: </span>
  <span translate="yes">El contenido será traducido</div>
</div>
<div>
  <span id="translate-label">The content may be translated:</span>
  <span id="translate-element" translate="no">El contenido puede ser traducido.</div>
</div>
<input id="translate-controller" type="checkbox" /> Enable translation
```

```js
const label = document.getElementById("translate-label");
const element = document.getElementById("translate-element");
const controller = document.getElementById("translate-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.translate = true;
    label.innerText = "The content may be translated:";
  } else {
    element.translate = false;
    label.innerText = "The content may not be translated:";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`translate`](/ja/docs/Web/HTML/Global_attributes#translate) グローバル属性
