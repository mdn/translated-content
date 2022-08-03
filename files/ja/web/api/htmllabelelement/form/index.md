---
title: HTMLLabelElement.form
slug: Web/API/HTMLLabelElement/form
tags:
  - フォーム
  - HTML DOM
  - HTMLLabelElement
  - プロパティ
  - 読み取り専用
  - リファレンス
  - form
browser-compat: api.HTMLLabelElement.form
translation_of: Web/API/HTMLLabelElement/form
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
