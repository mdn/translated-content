---
title: "HTMLButtonElement: interestForElement プロパティ"
short-title: interestForElement
slug: Web/API/HTMLButtonElement/interestForElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

**`interestForElement`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、関連付けられた {{htmlelement("button")}} 要素が関心インボーカーとして指定されている場合に、関心インボーカーの対象要素を取得または設定します。

詳細については、[関心インボーカーの作成](/ja/docs/Web/API/Popover_API/Using_interest_invokers#関心インボーカーの作成)を参照してください。

## 値

{{domxref("Element")}} オブジェクトのインスタンス、または関連付けられた `<button>` 要素に対象要素が設定されていない場合は `null` です。

## 例

### 基本的な `interestForElement` の使い方

この例では、`<button>` 要素の `interestForElement` プロパティを使って対象要素を設定し、その要素の `tagName` を取得します。取得した `tagName` は、`<button>` 要素のテキストコンテンツに表示されます。

#### HTML

`<button>` 要素と `<div>` 要素を用意します。`<div>` 要素に `popover` 属性を設定して、ポップオーバーにします。

```html live-sample___basic-interest-invoker
<button href="#">ボタン</button>
<div id="mypopover" popover>これは <code>&lt;div&gt;</code> 要素です。</div>
```

#### JavaScript

スクリプト内で `<button>` 要素と `<div>` 要素への参照を取得します。次に、`<button>` 要素の `interestForElement` プロパティに `<div>` への参照を代入して、両者の関心インボーカーと対象要素の関係を作成します。その後、`invoker.interestForElement.tagName` から取得した対象要素の `tagName` を含む文字列を、ボタンのテキストコンテンツに設定します。

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("button");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `ターゲットは ${invoker.interestForElement.tagName} 要素です`;
```

#### 結果

この例は次のように表示されます。

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

ボタンにカーソルを合わせるなどして関心を示すと、`<div>` が現れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
