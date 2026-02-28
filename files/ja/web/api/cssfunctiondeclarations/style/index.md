---
title: "CSSFunctionDeclarations: style プロパティ"
short-title: style
slug: Web/API/CSSFunctionDeclarations/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

**`style`** は {{domxref("CSSFunctionDeclarations")}} インターフェイスの読み取り専用プロパティで、{{domxref("CSSFunctionDescriptors")}} オブジェクトを保持しています。これは {{cssxref("@function")}} ルール本体で利用可能な記述子を表します。

## 値

{{domxref("CSSFunctionDescriptors")}} オブジェクトです。

`style` プロパティ自体は、`CSSFunctionDescriptors` オブジェクトを置き換えられないという意味で読み取り専用ですが、`style` プロパティに直接代入することは可能です。これは、その {{domxref("CSSStyleDeclaration/cssText", "cssText")}} プロパティへの代入と同等です。また、{{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} メソッドと {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} メソッドを使用して `CSSFunctionDescriptors` オブジェクトを変更することもできます。

## 例

例については主となる {{domxref("CSSFunctionDeclarations")}} のリファレンスページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@function")}}
