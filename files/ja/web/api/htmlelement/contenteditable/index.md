---
title: "HTMLElement: contentEditable プロパティ"
short-title: contentEditable
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: 61f855f3f8155a2dc1ddb5671bdac032f11ecee7
---

{{APIRef("HTML DOM")}}

**`contentEditable`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素が編集可能かどうかを指定します。

これは列挙属性で、次の値を設定できます。

- '`true`' は、要素の内容が編集可能 (`contenteditable`) であることを示します。
- '`false`' は、要素が編集できないことを示します。
- '`plaintext-only`' は要素の生のテキストは編集可能ですが、リッチテキストの書式は編集できないことを示します。

{{domxref("HTMLElement.isContentEditable")}} プロパティを使用すると、このプロパティの計算済みの論理値をテストできます。

属性がない、またはその値が不正な場合、その値は親要素から継承されます。したがって、要素は親要素に基づいて編集可能（または不可能）になります。

## 値

文字列。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.isContentEditable")}}
- [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) グローバル属性
