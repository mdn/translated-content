---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLOptionElement`** インターフェイスは {{HTMLElement("option")}} 要素を表し、 {{domxref("HTMLElement")}} インターフェイスのすべてのクラスとメソッドを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("HTMLOptionElement.Option", "Option()")}}
  - : 新しく作成された `HTMLOptionElement` オブジェクトを返します。引数は、表示するテキストである `text`、関連付けられる値である `value`、`defaultSelected` の値、`selected` の値の 4 つです。後 3 者は省略可能です。

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承されたプロパティがあります。_

- {{domxref("HTMLOptionElement.defaultSelected")}}
  - : `true` または `false` の値を取り、選択肢が既定で選択されているかどうかを示す HTML の [`selected`](/ja/docs/Web/HTML/Element/option#selected) 属性の初期値を表します。
- {{domxref("HTMLOptionElement.disabled")}}
  - : `true` または `false` の値を取り、その選択肢が選択できないことを示す HTML の [`disabled`](/ja/docs/Web/HTML/Element/option#disabled) 属性の値を表します。選択肢は無効状態の {{HTMLElement("optgroup")}} 要素の子である場合も無効になります。
- {{domxref("HTMLOptionElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} で、この選択肢が {{HTMLElement("select")}} 要素の子孫であった場合は、対応する {{HTMLElement("select")}} 要素の `form` と同じ値を表します。見つからない場合は null になります。
- {{domxref("HTMLOptionElement.index")}} {{ReadOnlyInline}}
  - : `long` 値で、所属する選択肢のリスト内におけるツリー順の位置を表します。その選択肢がリストに含まれていない場合、例えば {{HTMLElement("datalist")}} 要素の一部である場合などは、値は `0` になります。
- {{domxref("HTMLOptionElement.label")}} {{ReadOnlyInline}}
  - : 文字列で、この選択肢のラベルを提供する HTML の [`label`](/ja/docs/Web/HTML/Element/option#label) 属性の値を反映します。この属性が特に設定されていない場合は、この値を読み取ると要素のテキストコンテンツが返されます。
- {{domxref("HTMLOptionElement.selected")}}
  - : `true` または `false` の値を取り、この選択肢が現在選択されているかどうかを示します。
- {{domxref("HTMLOptionElement.text")}}
  - : 文字列で、この要素のテキストコンテンツが入ります。
- {{domxref("HTMLOptionElement.value")}}
  - : 文字列で、 HTML の [`value`](/ja/docs/Web/HTML/Element/option#value) 属性が存在する場合は、その値を反映します。存在しない場合は {{domxref("Node.textContent")}} プロパティの値を反映します。

## インスタンスメソッド

_固有のメソッドは実装していませんが、親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("option")}}
- {{domxref("HTMLOptionsCollection")}} インターフェイス
