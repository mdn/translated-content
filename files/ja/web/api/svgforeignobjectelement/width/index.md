---
title: "SVGForeignObjectElement: width プロパティ"
short-title: width
slug: Web/API/SVGForeignObjectElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`width`** は {{domxref("SVGForeignObjectElement")}} インターフェイスの読み取り専用プロパティで、この `<foreignObject>` 要素の幅を記述します。これは、{{SVGElement("foreignObject")}} 要素の {{SVGAttr("width")}} 属性の計算値を反映します。

この属性の値は [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number) のいずれかです。{{domxref("SVGAnimatedLength.baseVal")}} の値は、ユーザー座標系における `<foreignObject>` 要素の幅です。

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

`うぃｄｔｈ` 属性の計算値には、次のようにアクセスできます。

```js
const foreignObjects = document.querySelectorAll("foreignObject");
const widthObject1 = foreignObjects[0].width;
const widthObject2 = foreignObjects[1].width;

console.dir(widthObject1.baseVal.value); // 出力: 100
console.dir(widthObject2.baseVal.value); // 出力: 20 (10% of 200)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## See also

- {{domxref("SVGForeignObjectElement.height")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
