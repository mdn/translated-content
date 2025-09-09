---
title: Highlight
slug: Web/API/Highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`Highlight`** は [CSS カスタムハイライト API](/ja/docs/Web/API/CSS_Custom_Highlight_API) のインターフェイスで、この API で使用する {{domxref("Range")}} インスタンスの集合を表すために使用します。

ページ内の任意の範囲にスタイルを設定するには、新しい `Highlight` オブジェクトを構築し、1 つ以上の `Range` オブジェクトを追加して、 {{domxref("HighlightRegistry")}} を使用して登録します。

`Highlight` インスタンスは [`Set` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風のブラウザー_api)であり、 1 つ以上の `Range` オブジェクトを保持することができます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Highlight.Highlight()", "Highlight()")}}
  - : 新しく作成された `Highlight` オブジェクトを返します。

## インスタンスプロパティ

_`Highlight` インスタンスが継承しているプロパティはありません。_

- {{domxref("Highlight.priority")}}
  - : この `Highlight` オブジェクトの優先度を示す数値です。複数のハイライトが重なっている場合、ブラウザーはこの優先度を使用して、重なっている部分のスタイル設定を決定します。
- {{domxref("Highlight.size")}} {{ReadOnlyInline}}
  - : Highlight オブジェクトの範囲の数を返します。
- {{domxref("Highlight.type")}}
  - : 列挙型{{jsxref("String", "文字列", "", "nocode")}}で、ハイライトの意味を指定するために使用されます。これにより、支援技術は、ハイライトをユーザーに公開する際にこの意味を含めることができます。

## インスタンスメソッド

_`Highlight` インターフェイスが継承しているメソッドはありません。_

- {{domxref("Highlight.add()")}}
  - : このハイライトに新しい範囲を追加します。
- {{domxref("Highlight.clear()")}}
  - : このハイライトからすべての範囲を除去します。
- {{domxref("Highlight.delete()")}}
  - : このハイライトから一つの範囲を除去します。
- {{domxref("Highlight.entries()")}}
  - : ハイライトオブジェクト内のそれぞれの範囲を挿入順で反復処理する、新しいイテレーターオブジェクトを返します。
- {{domxref("Highlight.forEach()")}}
  - : ハイライトオブジェクト内のそれぞれの範囲について、指定されたコールバックを挿入順に 1 回ずつ呼び出します。
- {{domxref("Highlight.has()")}}
  - : ある範囲がハイライトオブジェクトに存在するかどうかを論理値で返します。
- {{domxref("Highlight.keys()")}}
  - : {{domxref("Highlight.values()")}} の別名です。
- {{domxref("Highlight.values()")}}
  - : ハイライトオブジェクトの範囲を挿入順に返す新しいイテレーターオブジェクトを返します。

## 例

次の例は、範囲を作成し、その範囲に対して新しい `Highlight` オブジェクトを構築し、ページ上でスタイル設定されるように登録する方法を示しています。

```js
const parentNode = document.getElementById("foo");

// 複数の範囲を作成
const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

// これらの範囲のカスタムハイライトを作成
const highlight = new Highlight(range1, range2);

// 範囲を HighlightRegistry に登録
CSS.highlights.set("my-custom-highlight", highlight);
```

次の CSS コードスニペットは、 {{cssxref("::highlight")}} 擬似要素を使用して、登録したカスタムハイライトのスタイルを設定する方法を示しています。

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
