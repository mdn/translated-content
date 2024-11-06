---
title: "PerformanceElementTiming: element プロパティ"
short-title: element
slug: Web/API/PerformanceElementTiming/element
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`element`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用プロパティで、監視されている要素へのポインターである {{domxref("Element")}} を返します。

## 値

{{domxref("Element")}} です。または、要素が[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) の要素である場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

## 例

### 監視対象の要素のログ出力

この例では、 [`elementtiming`](/ja/docs/Web/HTML/Attributes/elementtiming) 属性を追加して {{HTMLElement("img")}} 要素を監視しています。また、 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffered` フラグが使用されます。監視された DOM 要素はコンソールにログ出力されます。

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.element);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
