---
title: "HTMLSelectElement: name プロパティ"
short-title: name
slug: Web/API/HTMLSelectElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

**`name`** は {{domxref("HTMLSelectElement")}} インターフェイスのプロパティで、この{{HTMLElement("select")}} 要素の名前を示します。これは、この要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/select#name) 属性を反映します。

## 値

この要素の名前を表す文字列です。

## 例

```js
const selectElement = document.querySelector("#planets");
console.log(`Element's name: ${selectElement.name}`);
selectElement.name = "galaxies"; // 要素の名前を設定または更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLSelectElement.value")}}
- {{domxref("HTMLSelectElement.selectedIndex")}}
- {{domxref("HTMLSelectElement.options")}}
