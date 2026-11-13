---
title: "PerformanceElementTiming: id プロパティ"
short-title: id
slug: Web/API/PerformanceElementTiming/id
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`id`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用プロパティで、関連付けられた要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を返します。

## 値

文字列です。

## 例

### `id` の使用

この例では{{HTMLElement("img")}}要素に[`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming)属性を追加して監視しています。 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffered` フラグが使用されます。これはコンソールに `myImage` とログ出力します。これは画像要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) です。

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
      console.log(entry.id);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
