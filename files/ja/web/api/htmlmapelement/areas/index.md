---
title: "HTMLMapElement: areas プロパティ"
short-title: areas
slug: Web/API/HTMLMapElement/areas
l10n:
  sourceCommit: da6219d9480147488eda1f9120359384ee652b92
---

{{ApiRef("HTML DOM")}}

**`areas`** は {{domxref("HTMLMapElement")}} インターフェイスの読み取り専用プロパティで、この {{HTMLElement("map")}} 要素に関連付けられた {{HTMLElement("area")}} 要素の集合を返します。

## 値

{{domxref("HTMLCollection")}} オブジェクトで、{{domxref("HTMLAreaElement")}} 要素の集合を表します。

## 例

```html
<map id="image-map">
  <area shape="circle" coords="50,50,35" alt="左矢印" />
  <area shape="circle" coords="150,50,35" alt="右矢印" />
</map>
<img
  usemap="#image-map"
  src="left-right-arrow.png"
  alt="left right arrow image" />
<output></output>
```

```css hidden
output {
  display: block;
}
```

```js
const mapElement = document.getElementById("image-map");
const outputElement = document.querySelector("output");

for (const area of mapElement.areas) {
  area.addEventListener("click", (event) => {
    outputElement.textContent = `${area.alt}エリアをクリックしました。\n\n`;
  });
}
```

### 結果

{{EmbedLiveSample("Example",100,150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAreaElement")}}
- {{domxref("HTMLImageElement.useMap")}}
