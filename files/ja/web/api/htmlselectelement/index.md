---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement`** インターフェイスは HTML の {{HTMLElement("select")}} 要素を表します。これらの要素は {{domxref("HTMLElement")}} インターフェイスを通じて他の HTML 要素のすべてのプロパティとメソッドも共有します。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスは {{domxref("HTMLElement")}}、{{domxref("Element")}}、{{domxref("Node")}} からプロパティを継承しています。_

- {{domxref("HTMLSelectElement.autofocus")}}
  - : 論理値で、 HTML の [`autofocus`](/ja/docs/Web/HTML/Element/select#autofocus) 属性を反映し、ページが読み込みの際に、ユーザーが異なるコントロールに入力するなどで上書きをしない限り、コントロールが入力フォーカスを持つべきかどうかを示します。文書中のフォーム関連要素の中で、この属性を指定できるのは 1 つだけです。
- {{domxref("HTMLSelectElement.disabled")}}
  - : 論理値で、 HTML の [`disabled`](/ja/docs/Web/HTML/Element/select#disabled) 属性を反映し、コントロールが無効か否か、つまりクリックを受け付けるかどうかを示します。
- {{domxref("HTMLSelectElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} で、この要素が関連付けられているフォームを反映します。この要素が {{HTMLElement("form")}} 要素に関連付けられていなければ、 `null` を返します。
- {{domxref("HTMLSelectElement.labels")}} {{ReadOnlyInline}}
  - : {{domxref("NodeList")}} で、この要素に関連付けられた {{HTMLElement("label")}} 要素を表します。
- {{domxref("HTMLSelectElement.length")}}
  - : `unsigned long` で、 {{HTMLElement("option")}} 要素がこの `select` 要素に含まれる数です。
- {{domxref("HTMLSelectElement.multiple")}}
  - : 論理値で、 HTML の [`multiple`](/ja/docs/Web/HTML/Element/select#multiple) 要素を反映し、複数の項目を選択することができるかどうかを示します。
- {{domxref("HTMLSelectElement.name")}}
  - : 文字列で、 HTML の [`name`](/ja/docs/Web/HTML/Element/select#name) 属性を反映し、サーバーおよび DOM 検索機能で使用されるこのコントロールの名前が入ります。
- {{domxref("HTMLSelectElement.options")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLOptionsCollection")}} で、この要素に含まれる一連の {{HTMLElement("option")}} 要素 ({{domxref("HTMLOptionElement")}}) を表します。
- {{domxref("HTMLSelectElement.required")}}
  - : 論理値で、 HTML の [`required`](/ja/docs/Web/HTML/Element/select#required) 属性を反映し、ユーザーがフォームを送信する前に値を選択する必要があることを示します。
- {{domxref("HTMLSelectElement.selectedIndex")}}
  - : `long` で、最初に選択された {{HTMLElement("option")}} 要素の序数を反映します。 `-1` の値は要素が選択されていないことを示します。
- {{domxref("HTMLSelectElement.selectedOptions")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLCollection")}} で、選択されているすべての {{HTMLElement("option")}} 要素を反映します。
- {{domxref("HTMLSelectElement.size")}}
  - : `long` で、 HTML の [`size`](/ja/docs/Web/HTML/Element/select#size) 属性を反映し、コントロール内で見える項目の数が入ります。既定値は、 `multiple` が `true` でなければ 1 で、そうでなければ 4 です。
- {{domxref("HTMLSelectElement.type")}} {{ReadOnlyInline}}
  - : 文字列で、フォームコントロールの型を表します。 `multiple` が `true` である場合は `"select-multiple"` を返し、そうでなければ `"select-one"` を返します。
- {{domxref("HTMLSelectElement.validationMessage")}} {{ReadOnlyInline}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の対象にならない場合 (`willValidate` が `false` の場合) や、制約を満たしている場合は空文字列になります。
- {{domxref("HTMLSelectElement.validity")}} {{ReadOnlyInline}}
  - : {{domxref("ValidityState")}} で、このボタンがある妥当性の状態を表します。
- {{domxref("HTMLSelectElement.value")}}
  - : 文字列で、このフォームコントロールの値を反映します。選択されている option 要素があれば最初のものの `value` プロパティを返し、そうでなければ空文字列を返します。
- {{domxref("HTMLSelectElement.willValidate")}} {{ReadOnlyInline}}
  - : 論理値で、ボタンが制約検証の候補になるかどうかを示します。制約検証が阻止される場合は `false` となります。

## メソッド

_このインターフェイスは {{domxref("HTMLElement")}}、{{domxref("Element")}}、{{domxref("Node")}} からメソッドを継承しています。_

- {{domxref("HTMLSelectElement.add()")}}
  - : 要素をこの `select` 要素にある `option` 要素の集合に加えます。
- {{domxref("HTMLSelectElement.blur()")}} {{deprecated_inline}}
  - : この要素から入力フォーカスを外します。_このメソッドは {{domxref("HTMLElement")}} での実装になりました_。
- {{domxref("HTMLSelectElement.checkValidity()")}}
  - : 要素に何らかの制約があるか、それを満たしているかをチェックします。要素が制約に違反していた場合、ブラウザーはキャンセル可能な {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを要素に送ります（そして `false` を返します）。
- {{domxref("HTMLSelectElement.focus()")}} {{deprecated_inline}}
  - : この要素に入力フォーカスを与えます。_このメソッドは {{domxref("HTMLElement")}} での実装になりました_。
- {{domxref("HTMLSelectElement.item()")}}
  - : この {{HTMLElement("select")}} 要素の選択肢の集合から項目を取得します。配列風に角括弧または括弧で序数を指定することで、明示的にこのメソッドを呼び出さずに項目にアクセスすることもできます。
- {{domxref("HTMLSelectElement.namedItem()")}}
  - : 選択肢の集合から指定した名前で項目を取得します。名前の文字列は option ノードの `id` または `name` 属性と一致させることができます。配列風に角括弧または括弧で名前を指定することで、明示的にこのメソッドを呼び出さずに項目にアクセスすることもできます。
- {{domxref("HTMLSelectElement.remove()")}}
  - : この `select` 要素の選択肢の集合から、指定された序数の要素を削除します。
- {{domxref("HTMLSelectElement.reportValidity()")}}
  - : このメソッドは、この要素の制約の問題があれば、ユーザーに報告します。問題があれば、キャンセル可能な {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを要素で発生させ、 `false` を返します。問題がなければ、 `true` を返します。
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
  - : 選択要素の独自の検証メッセージを指定されたメッセージに設定します。空文字列を使用すると、要素に独自の検証エラーが*ない*ことを示します。

## イベント

これらのイベントを待ち受けするには {{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxref("HTMLElement/change_event", "change")}} イベント
  - : ユーザーが選択肢を選択したときに発行されます。
- {{domxref("HTMLElement/input_event", "input")}} イベント
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} の各要素の `value` が変化したときに発行されます。

## 例

### 選択された選択肢についての情報を得る

```js
/* 以下の HTML があると仮定します
<select id='s'>
    <option>First</option>
    <option selected>Second</option>
    <option>Third</option>
</select>
*/

const select = document.getElementById("s");

// 選択された選択肢の序数を返す
console.log(select.selectedIndex); // 1

// 選択された選択肢の値を返す
console.log(select.options[select.selectedIndex].value) // Second
```

ユーザーの選択の変更を追跡するのであれば、 {{domxref("HTMLElement/change_event", "change")}} イベントが `<select>` に発生するのを監視するほうがより良い方法です。これは値が変化したときに通知され、必要なものを更新することができます。詳しくは、 `change` イベントのドキュメントで[提供されている例](/ja/docs/Web/API/HTMLElement/change_event#select_element)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("select")}}
