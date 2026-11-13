---
title: "SVGAElement: target プロパティ"
short-title: target
slug: Web/API/SVGAElement/target
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("SVG")}}

**`SVGAElement.target`** は {{domxref("SVGAElement")}} の読み取り専用プロパティで、リンクをアクティブ化した際に文書を開くための対象となるウィンドウ、フレーム、ペインの領域を指定する {{domxref("SVGAnimatedString")}} オブジェクトを返します。

このプロパティは、最終的なリソースのターゲットが複数存在する可能性がある場合に使用されます。例えば、親文書が複数フレームの HTML または XHTML 文書である場合などが該当します。

## 値

リンクがアクティブ化された際に文書を開くための最終的なリソースターゲットを示す {{domxref("SVGAnimatedString")}} です。有効な値については {{SVGAttr("target")}} を参照してください。

## 例

このコードは[「SVGAElement のサンプルコード」](/ja/docs/Web/API/SVGAElement#例)から引用したものです。

```js
// …
const linkRef = document.querySelector("a");
linkRef.target = "_blank";
// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ SVGAttr("target") }}
