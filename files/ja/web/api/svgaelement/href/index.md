---
title: "SVGAElement: href プロパティ"
short-title: href
slug: Web/API/SVGAElement/href
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`href`** は {{domxref("SVGAElement")}} の読み取り専用プロパティで、href 属性の値を反映した {{domxref("SVGAnimatedString")}} オブジェクトを返します。また、特定の場合では、{{SVGAttr("xlink:href")}} {{deprecated_inline}} 属性を反映します。これはリンクに関連付けられたターゲット URI を指定します。

このプロパティは、SVG 文書内のリンクに対して設定された URI にアクセスできるようにします。

## 値

{{domxref("SVGAnimatedString")}} で、href 属性の値を示します。さらに、これを対応するように定義された要素については、href 属性が設定されていない場合、{{SVGAttr("xlink:href")}} {{deprecated_inline}} 属性の値を反映します。

## 例

```js
// SVG の <a> 要素を選択
const svgLink = document.querySelector("a");

// href プロパティにアクセス
console.log(svgLink.href.baseVal); // ベース URI をログ出力
console.log(svgLink.href.animVal); // 該当する場合、アニメーションの URI をログ出力

// 例: xlink:href の反映
const deprecatedLink = document.querySelector("a");
console.log(deprecatedLink.href.baseVal); // 'href' が設定されていなければ 'xlink:href' を反映
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ SVGAttr("href") }}
