---
title: "HTMLButtonElement: commandForElement プロパティ"
short-title: commandForElement
slug: Web/API/HTMLButtonElement/commandForElement
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

**`commandForElement`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、ボタンを通じて制御する要素を取得または設定します。

これは JavaScript における HTML の [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) 属性の同等物です。

## 値

このボタンが制御する既存の要素 ({{domxref("Element")}}) への参照です。

## 例

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.commandForElement = popover;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("CommandEvent")}}
