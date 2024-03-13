---
title: "Element: elementTiming プロパティ"
short-title: elementTiming
slug: Web/API/Element/elementTiming
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`elementTiming`** は {{domxref("Element")}} インターフェイスのプロパティで、{{domxref("PerformanceElementTiming")}} API で監視する要素を特定します。`elementTiming` プロパティは [`elementtiming`](/ja/docs/Web/HTML/Attributes/elementtiming) 属性の値を反映します。

## 値

文字列です。

## 例

### `elementTiming` の値をログ出力

この例では、[`elementtiming`](/ja/docs/Web/HTML/Attributes/elementtiming) 属性を {{HTMLElement("img")}} 要素に追加することで、監視する画像を設定します。

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

HTML の `elementtiming` 属性の文字列値は、`el.elementTiming` を呼び出すことで取得することができます。

```js
const el = document.getElementById("myImage");
console.log(el.elementTiming); // "big-image"
```

要素タイミング API を使用する方法について、より完全な例は {{domxref("PerformanceElementTiming")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceElementTiming")}}
- HTML の [`elementtiming`](/ja/docs/Web/HTML/Attributes/elementtiming) 属性
