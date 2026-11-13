---
title: "SVGAElement: interestForElement プロパティ"
short-title: interestForElement
slug: Web/API/SVGAElement/interestForElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

**`interestForElement`** は {{domxref("SVGAElement")}} インターフェイスのプロパティで、関連付けられた {{svgelement("a")}} 要素が関心インボーカーとして指定されている場合に、関心インボーカーの対象要素を取得または設定します。

詳細については、[関心インボーカーの作成](/ja/docs/Web/API/Popover_API/Using_interest_invokers#関心インボーカーの作成) を参照してください。

## 値

{{domxref("Element")}} オブジェクトインスタンス、または関連付けられた `<a>` 要素に対象要素が設定されていない場合は `null`。

## 例

### 基本的な `interestForElement` の使い方

この例では、SVG の `<a>` 要素の `interestForElement` プロパティを使用して対象要素を設定し、その後対象要素の `tagName` を取得します。取得した `tagName` は、`<a>` 要素のテキストコンテンツに記載されます。

#### HTML

マークアップには、{{svgelement("a")}} 要素と {{svgelement("text")}} 要素を含む SVG 要素があり、リンクテキストは `<text>` 要素内に記載されています。また HTML の `<div>` 要素も存在します。この `<div>` 要素に `popover` 属性を設定することで、ポップオーバーに変換します。

```html live-sample___basic-interest-invoker
<svg>
  <a href="#">
    <text x="90" y="20" text-anchor="middle">リンク</text>
  </a>
</svg>
<div id="mypopover" popover>これは <code>&lt;div&gt;</code> 要素です。</div>
```

```css hidden live-sample___basic-interest-invoker
svg {
  width: 200px;
  height: 100px;
}

svg a text {
  fill: blue;
  text-decoration: underline;
}
```

#### JavaScript

スクリプト内で `<a>`、`<text>`、`<div>` 要素を参照します。次に、`<a>` 要素の `interestForElement` プロパティを `<div>` への参照に設定することで、`<a>` と `<div>` の間の関心インボーカー-ターゲット関係を作成します。その後、 `invoker.interestForElement.tagName` 経由で取得した対象要素の `tagName` を表示させるため、`<text>` コンテンツを更新します。

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("a");
const invokerText = document.querySelector("text");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invokerText.textContent = `ターゲットは ${invoker.interestForElement.tagName} 要素です`;
```

#### 結果

この例は次のように表示されます。

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

リンクにカーソルを合わせるなどして関心を示すと、`<div>`が現れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using interest invokers](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
- [The Popover API](/ja/docs/Web/API/Popover_API)
