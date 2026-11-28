---
title: "HTMLElement: containerTimingIgnore プロパティ"
short-title: containerTimingIgnore
slug: Web/API/HTMLElement/containerTimingIgnore
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`containerTimingIgnore`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、[コンテナータイミング API](/ja/docs/Web/API/PerformanceContainerTiming) において、この要素とその子孫要素が祖先コンテナールートのタイミング計測に寄与しないようにします。

`containerTimingIgnore` プロパティは [`containertimingignore`](/ja/docs/Web/HTML/Reference/Global_attributes/containertimingignore) 属性の値を反映します。

## 値

論理値です。

## 例

### `containerTimingIgnore` の値をログに記録する

この例では、{{htmlelement("div")}} 要素に [`containertimingignore`](/ja/docs/Web/HTML/Reference/Global_attributes/containertimingignore) 属性を追加することで、その要素を祖先コンテナーのタイミング計測から除外します。

```html
<section containertiming="hero">
  <div containertimingignore id="ignored">
    <!-- ... -->
  </div>
</section>
```

次に、プロパティを読み取り、その値をログに記録できます。

```js
const el = document.getElementById("ignored");
console.log(el.containerTimingIgnore); // true
```

タイミング情報を取得するためにコンテナータイミング API を使用する例については、{{domxref("PerformanceContainerTiming")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceContainerTiming")}}
- [`containertimingignore`](/ja/docs/Web/HTML/Reference/Global_attributes/containertimingignore) HTML 属性
- {{domxref("HTMLElement.containerTiming")}}
