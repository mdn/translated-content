---
title: "PerformanceElementTiming: naturalHeight プロパティ"
short-title: naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`naturalHeight`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用プロパティで、画像要素の内在的な高さを返します。

## 値

符号なし 32 ビット整数 (unsigned long) です。 これが画像に適用されている場合は画像の内在的な高さを表し、テキストの場合は `0` となります。

## 例

### `naturalHeight` のログ出力

この例では、[`elementtiming`](/ja/docs/Web/HTML/Attributes/elementtiming) 属性を追加して {{HTMLElement("image")}} 要素を監視しています。 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffered` フラグを使用しています。画像ファイルの幅は 1000px、高さは 750px あります。 `entry.naturalHeight` を呼び出すと、ピクセル単位の内在的な高さである `750` を返します。

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
      console.log(entry.naturalHeight);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
