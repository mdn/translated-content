---
title: "HTMLElement: containerTiming プロパティ"
short-title: containerTiming
slug: Web/API/HTMLElement/containerTiming
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`containerTiming`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、この要素を [コンテナータイミング API](/ja/docs/Web/API/PerformanceContainerTiming) による観測対象のコンテナールートとしてマークします。

`containerTiming` プロパティは [`containertiming`](/ja/docs/Web/HTML/Reference/Global_attributes/containertiming) 属性の値を反映します。
プロパティを設定すると属性が追加され、要素はコンテナールートになります。要素がすでに文書内にある場合、それ以降の描画だけが要素のタイミング計測に寄与します。

## 値

文字列です。
属性が設定されていない場合は空文字列 (`""`) です。

## 例

### `containerTiming` の値をログに記録する

この例では、{{htmlelement("section")}} 要素に [`containertiming`](/ja/docs/Web/HTML/Reference/Global_attributes/containertiming) 属性を追加することで、その要素をコンテナールートとして設定します。

```html
<section containertiming="hero" id="hero-section">
  <!-- ... -->
</section>
```

次に、プロパティを読み取り、その値をログに記録できます。

```js
const el = document.getElementById("hero-section");
console.log(el.containerTiming); // "hero"
```

タイミング情報を取得するためにコンテナータイミング API を使用する例については、{{domxref("PerformanceContainerTiming")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceContainerTiming")}}
- [`containertiming`](/ja/docs/Web/HTML/Reference/Global_attributes/containertiming) HTML 属性
- {{domxref("HTMLElement.containerTimingIgnore")}}
