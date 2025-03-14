---
title: "PerformanceElementTiming: url プロパティ"
short-title: url
slug: Web/API/PerformanceElementTiming/url
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`url`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用プロパティで、要素が画像の場合、リソースのリクエストの初期 URL を返します。

## 値

画像の場合はリソースリクエストの初期 URL となる文字列、テキストの場合は `0` となります。

## 例

### `url` をログ出力

この例では、 [`elementtiming`](/ja/docs/Web/HTML/Attributes/elementtiming) 属性を追加して {{HTMLElement("img")}} 要素を監視しています。 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffered` フラグを用います。 `entry.url` を呼び出すと `https://example.com/image.jpg` が返されます。

```html
<img
  src="https://example.com/image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.url);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
