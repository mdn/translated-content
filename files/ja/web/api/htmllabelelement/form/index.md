---
title: "HTMLLabelElement: form プロパティ"
short-title: form
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLLabelElement.form`** は読み取り専用のプロパティで、このラベルに関連付けられたコントロールが所属するフォームを表す {{domxref("HTMLFormElement")}} オブジェクトを返します。関連付けられたコントロールがないか、そのコントロールがフォーム内にない場合は null を返します。

このプロパティは `HTMLLabelElement.control.form` のショートカットです。

## 値

{{domxref("HTMLFormElement")}} で、このラベルの {{domxref("HTMLLabelElement.control", "control")}} が関連付けられたフォームを表します。もし {{domxref("HTMLLabelElement.control", "control")}} が `null` （すなわちラベルがコントロールと関連付けられていない）であるか、コントロールがフォームの一部でない場合、このプロパティは `null` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML フォームガイド](/ja/docs/Learn/Forms)
