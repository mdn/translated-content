---
title: "SVGForeignObjectElement: x プロパティ"
short-title: x
slug: Web/API/SVGForeignObjectElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`x`** は {{domxref("SVGForeignObjectElement")}} インターフェイスの読み取り専用プロパティで、この `<foreignObject>` 要素の x 軸座標を記述します。これは、{{SVGElement("foreignObject")}} 要素の {{SVGAttr("x")}} 属性の計算値を反映します。

この属性の値は [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number) のいずれかです。{{domxref("SVGAnimatedLength.baseVal")}} の値は、ユーザー座標系における `<foreignObject>` 要素の x 座標です。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

次の SVG があったとします。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <foreignObject id="object1" x="50" y="75" width="100" height="50">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>これは外部オブジェクトです。</p>
      </div>
    </foreignObject>
    <foreignObject id="object2" x="25%" y="50%" width="10%" height="10%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>これはもう一つの外部オブジェクトです。</p>
      </div>
    </foreignObject>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="lightblue" />
  <rect x="0" y="100" width="200" height="100" fill="lightgreen" />
</svg>
```

`x` 属性の計算値には、次のようにアクセスできます。

```js
const foreignObjects = document.querySelectorAll("foreignObject");
const xObject1 = foreignObjects[0].x;
const xObject2 = foreignObjects[1].x;

console.dir(xObject1.baseVal.value); // 出力: 50
console.dir(xObject2.baseVal.value); // 出力: 50 (25% of 200)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGForeignObjectElement.y")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
