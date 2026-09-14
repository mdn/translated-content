---
title: "PerformanceElementTiming: loadTime プロパティ"
short-title: loadTime
slug: Web/API/PerformanceElementTiming/loadTime
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`loadTime`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用プロパティで、テキストに対しては常に `0` を返します。画像については画像リソースが読み込まれてから要素に装着されるまでの時間を返します。

## 値

{{domxref("DOMHighResTimeStamp")}} で、この要素の `loadTime` です。テキストに対しては `0` です。

## 例

### `loadTime` をログ出力

この例では {{HTMLElement("img")}} 要素に [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性を追加して監視しています。 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録されます。オブザーバーが作成される前のデータにアクセスするには `buffered` フラグを使用します。 `entry.loadTime` を呼び出すと、画像要素の読み込み時間を返します。

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.loadTime);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
