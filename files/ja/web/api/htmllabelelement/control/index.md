---
title: HTMLLabelElement.control
slug: Web/API/HTMLLabelElement/control
tags:
  - フォーム
  - HTML DOM
  - HTMLLabelElement
  - プロパティ
  - 読み取り専用
  - リファレンス
  - コントロール
browser-compat: api.HTMLLabelElement.control
translation_of: Web/API/HTMLLabelElement/control
---
{{APIRef("HTML DOM")}}

**`HTMLLabelElement.control`** は読み取り専用プロパティで、この {{HTMLElement("label")}} 要素に関連付けられているコントロールへの参照（{{domxref("HTMLElement")}} 型のオブジェクトまたはその派生物のうちの 1 つ）を返します。ラベルがコントロールと関連付けられていない場合は `null` を返します。

## 値

{{domxref("HTMLElement")}} の派生オブジェクトで、この {{HTMLElement("label")}} が関連付けられているコントロールを表します。ラベルが孤立している場合は `null` になります。

> **Note:** このプロパティに値があり、 {{domxref("HTMLLabelElement.htmlFor")}} に値がある場合、 {{domxref("HTMLLabelElement.htmlFor")}} プロパティは必ず同じコントロールを参照します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML フォームガイド](/ja/docs/Learn/Forms)
