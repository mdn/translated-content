---
title: "HTMLLabelElement: control プロパティ"
short-title: control
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLLabelElement.control`** は読み取り専用プロパティで、この {{HTMLElement("label")}} 要素に関連付けられているコントロールへの参照（{{domxref("HTMLElement")}} 型のオブジェクトまたはその派生物のうちの 1 つ）を返します。ラベルがコントロールと関連付けられていない場合は `null` を返します。

## 値

{{domxref("HTMLElement")}} の派生オブジェクトで、この {{HTMLElement("label")}} が関連付けられているコントロールを表します。ラベルが孤立している場合は `null` になります。

> [!NOTE]
> このプロパティに値があり、 {{domxref("HTMLLabelElement.htmlFor")}} に値がある場合、 {{domxref("HTMLLabelElement.htmlFor")}} プロパティは必ず同じコントロールを参照します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML フォームガイド](/ja/docs/Learn_web_development/Extensions/Forms)
