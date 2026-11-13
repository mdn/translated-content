---
title: "CSSImportRule: layerName プロパティ"
short-title: layerName
slug: Web/API/CSSImportRule/layerName
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

**`layerName`** は {{domxref("CSSImportRule")}} インターフェイスの読み取り専用プロパティで、 {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で作成されたカスケードレイヤーの名前を返します。

作成したレイヤーが無名であった場合、文字列は空文字列 (`""`) となり、レイヤーが作成されていない場合は `null` オブジェクトとなります。

## 値

空文字列、または `null` オブジェクトです。

## 例

この文書の単一のスタイルシートには、 3 つの {{cssxref("@import")}} ルールが含まれています。最初の宣言は、スタイルシートを名前付きレイヤーにインポートします。 2 つ目の宣言は、スタイルシートを無名レイヤーにインポートします。 3 つ目の宣言は、レイヤー宣言なしでスタイルシートをインポートします。

`layerName` プロパティは、インポートされたスタイルシートに関連付けられているレイヤーの名前を返します。

```css
@import url("style1.css") layer(layer-1);
@import url("style2.css") layer;
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].layerName); // `"layer-1"` を返す
console.log(myRules[1].layerName); // `""` (an anonymous layer) を返す
console.log(myRules[2].layerName); // `null` を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 学習領域: [カスケードレイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- {{cssxref("@import")}} および {{cssxref("@layer")}}
