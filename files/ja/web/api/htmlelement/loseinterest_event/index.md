---
title: "HTMLElement: loseinterest イベント"
slug: Web/API/HTMLElement/loseinterest_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

**`loseinterest`** は {{domxref("HTMLElement")}} インターフェイスのイベントで、関心が失われたときに[関心インボーカー](/ja/docs/Web/API/Popover_API/Using_interest_invokers)の対象要素で発生します。これに応答するコードを実行できます。

このイベントは通常、[キャンセル可能](/ja/docs/Web/API/Event/cancelable)です。ただし、ユーザーが <kbd>Esc</kbd> キーを押して文書内のすべての関心インボーカーへの関心を失う場合は、キャンセルできません。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("loseinterest", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#onevent_プロパティの使用)に代入してください。

```js-nolint
onloseinterest = (event) => { }
```

## イベント型

{{domxref("InterestEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("InterestEvent")}}

## 例

### 基本的な関心インボーカーイベントの使い方

この例では、関心インボーカーとして機能する {{htmlelement("button")}} 要素に関心が示されたときと失われたときを報告するために、`interest` イベントと `loseinterest` イベントを使用します。対象の {{htmlelement("p")}} 要素のテキストコンテンツにメッセージを表示します。

#### HTML

`<button>` 要素の `interestfor` 属性に `<p>` 要素の `id` を設定して、関心インボーカーと対象の `<p>` 要素を関連付けます。

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">関心インボーカー</button>
<p id="mytarget">現在、関心は示されていません。</p>
```

#### JavaScript

{{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} プロパティを使って、`<button>` 要素とその対象要素への参照を取得します。

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

次に、対象要素に `interest` イベントと `loseinterest` イベントのイベントリスナーを設定します。

- 関心が示されると、対象の `<p>` 要素のテキストコンテンツを更新し、イベントの発生と、そのきっかけとなった要素（この例では `<button>` 要素）を示します。イベントオブジェクトの {{domxref("InterestEvent.source", "source")}} プロパティを使うと、関心インボーカーへの参照を取得できます。
- 関心が失われると、関心が示されていないことを報告するテキストに段落を更新します。

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `関心は ${e.source.tagName} 要素を介して示されています。`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `関心が失われました。`;
});
```

#### 結果

この例は次のように表示されます。

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

ボタンにカーソルを合わせたりフォーカスしたりして関心を示したり失ったりし、`<p>` 要素のテキストがどのように変化するか確認してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.interest_event", "interest")}} イベント
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
