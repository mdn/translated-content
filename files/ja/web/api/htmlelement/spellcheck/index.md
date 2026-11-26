---
title: "HTMLElement: spellcheck プロパティ"
short-title: spellcheck
slug: Web/API/HTMLElement/spellcheck
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`spellcheck`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、[スペルチェック](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck)のヒントを制御する論理値を表します。すべての HTML 要素で利用できますが、すべての要素に影響するわけではありません。

これは HTML の [`spellcheck`](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck) グローバル属性を反映します。

## 値

論理値で、要素内のテキストコンテンツのスペルや文法を調べる場合は `true`、それ以外の場合は `false` です。

## 例

次の例は、スクリプトで[スペルチェック](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck)のヒントを制御する方法を示しています。

```html
<div>
  <span id="sc-label">スペルや文法をチェックできます: </span>
  <span id="sc-element" contenteditable="true" spellcheck="true">test</span>
</div>
<input
  id="sc-controller"
  type="checkbox"
  checked />スペルや文法のチェックを有効にする
```

```js
const label = document.getElementById("sc-label");
const element = document.getElementById("sc-element");
const controller = document.getElementById("sc-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.spellcheck = true;
    label.innerText = "スペルや文法をチェックできます: ";
  } else {
    element.spellcheck = false;
    label.innerText = "スペルや文法をチェックできません: ";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

なお、スペルや文法をチェックするには、ブラウザーで設定を有効にする必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`spellcheck`](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck) グローバル属性
