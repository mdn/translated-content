---
title: "`containertiming` グローバル属性"
short-title: containertiming
slug: Web/HTML/Reference/Global_attributes/containertiming
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}

**`containertiming`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes) は、要素を「コンテナールート」としてマークします。{{domxref("PerformanceObserver")}} オブジェクトで `"container"` 型を使用すると、そのコンテナールートの {{domxref("PerformanceContainerTiming")}} パフォーマンス項目を観測できます。

コンテナールートのサブツリー内の新しい領域への描画は、コンテナーのタイミング計測に寄与します。
コンテナールート自体の内側に描画されたコンテンツや、すでに描画された領域への再描画は対象外です。
タイミング項目は、ユーザーがページをスクロールするか操作するまでの間だけ報告されます。
子孫要素のサブツリーは、[`containertimingignore`](/ja/docs/Web/HTML/Reference/Global_attributes/containertimingignore) 属性を使用して、コンテナーのタイミング計測から除外できます。
詳しくは、{{domxref("PerformanceContainerTiming")}} インターフェイスを参照してください。

DOM では、この属性は {{domxref("HTMLElement.containerTiming")}} として反映されます。

## 値

コンテナーを識別する文字列です。
この値は {{domxref("PerformanceContainerTiming.identifier")}} で返されます。

## 例

### コンテナールートをマークする

この例では、2 つの要素をコンテナールートとしてマークし、それぞれ `"hero"` と `"product-list"` で識別します。

```html
<section containertiming="hero">
  <h1>ようこそ</h1>
  <img src="hero.jpg" alt="" />
</section>

<div containertiming="product-list">
  <!-- 商品カード -->
</div>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`containertimingignore`](/ja/docs/Web/HTML/Reference/Global_attributes/containertimingignore)
- {{domxref("PerformanceContainerTiming")}}
- {{domxref("HTMLElement.containerTiming")}}
