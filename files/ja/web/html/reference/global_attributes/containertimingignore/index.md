---
title: "`containertimingignore` グローバル属性"
short-title: containertimingignore
slug: Web/HTML/Reference/Global_attributes/containertimingignore
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}

**`containertimingignore`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は論理属性で、この属性を指定した要素とその子孫要素が、[`containertiming`](/ja/docs/Web/HTML/Reference/Global_attributes/containertiming) 属性が指定された祖先要素のタイミング計測に寄与しないようにします。
詳しくは、{{domxref("PerformanceContainerTiming")}} インターフェイスを参照してください。

DOM では、この属性は {{domxref("HTMLElement.containerTimingIgnore")}} として反映されます。

## 例

### コンテナーのタイミング計測からサブツリーを除外する

この例では、{{htmlelement("div")}} 要素とその内容は `"hero"` コンテナーのタイミング計測から除外されますが、画像は引き続き計測に寄与します。

```html
<section containertiming="hero">
  <img src="hero.jpg" alt="" />
  <div containertimingignore>
    <!-- ここに描画された内容は "hero" コンテナーのタイミング計測に含まれない -->
  </div>
</section>
```

タイミング情報を取得するためにコンテナータイミング API を使用する例については、{{domxref("PerformanceContainerTiming")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`containertiming`](/ja/docs/Web/HTML/Reference/Global_attributes/containertiming)
- {{domxref("PerformanceContainerTiming")}}
- {{domxref("HTMLElement.containerTimingIgnore")}}
