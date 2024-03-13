---
title: "HTMLElement: contentEditable プロパティ"
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`contentEditable`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素が編集可能かどうかを指定します。

これは列挙属性で、次の値を設定できます。

- '`true`' は、要素の内容が編集可能 (`contenteditable`) であることを示します。
- '`false`' は、要素が編集できないことを示します。
- '`inherit`' は、要素がその親の編集可能状態を継承することを示します。

{{domxref("HTMLElement.isContentEditable")}} プロパティを使用すると、このプロパティの計算済みの論理値をテストできます。

## 値

文字列。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.isContentEditable")}}
- [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) グローバル属性
