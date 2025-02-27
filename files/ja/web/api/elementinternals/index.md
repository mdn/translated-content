---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Web Components")}}

**`ElementInternals`** は [Document Object Model](/ja/docs/Web/API/Document_Object_Model) のインターフェイスで、カスタム要素を HTML フォームに完全に参加させる方法をウェブ開発者に提供します。標準的な HTML フォーム要素を扱うのと同じように、これらの要素を扱うためのユーティリティを提供し、 [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) も要素で使えるようにします。

## コンストラクター

このインターフェイスにはコンストラクターがありません。 `ElementInternals` オブジェクトは {{domxref("HTMLElement.attachInternals()")}} を呼び出したときに返されます。

## インスタンスプロパティ

- {{domxref("ElementInternals.shadowRoot")}} {{ReadOnlyInline}}
  - : この要素に関連付けられた {{domxref("ShadowRoot")}} オブジェクトを返します。
- {{domxref("ElementInternals.form")}} {{ReadOnlyInline}}
  - : この要素に関連付けられた {{domxref("HTMLFormElement")}} を返します。
- {{domxref("ElementInternals.states")}} {{ReadOnlyInline}}
  - : この要素に関連付けられた {{domxref("CustomStateSet")}} を返します。
- {{domxref("ElementInternals.willValidate")}} {{ReadOnlyInline}}
  - : 論理値で、要素が[制約検証](/ja/docs/Web/HTML/Constraint_validation)の候補である送信可能要素である場合に true を返します。
- {{domxref("ElementInternals.validity")}} {{ReadOnlyInline}}
  - : このオブジェクトは、制約検証に関して、その要素が取りうるさまざまな有効性の状態を表します。
- {{domxref("ElementInternals.validationMessage")}} {{ReadOnlyInline}}
  - : 文字列で、この要素の検証メッセージが入ります。
- {{domxref("ElementInternals.labels")}} {{ReadOnlyInline}}
  - : この要素に関連付けられているすべてのラベル要素の {{domxref("NodeList")}} を返します。

### ARIA から取り込まれたインスタンスプロパティ

`ElementInternals` インターフェイスには以下のプロパティもあります。

> [!NOTE]
> これらは、カスタム要素に既定のアクセシビリティ上の意味を定義できるようにするために取り込まれています。これらは作者が定義した属性によって上書きされる可能性がありますが、作者が属性を削除したり追加しなかったりした場合でも、既定の意味が保持されるようにします。詳しくは、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

- {{domxref("ElementInternals.ariaAtomic")}}
  - : [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) 属性を反映した文字列で、[`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)属性で定義された変更通知に基づいて、支援技術が変更された領域のすべてを提示するか、一部のみを提示するかを示します。
- {{domxref("ElementInternals.ariaAutoComplete")}}
  - : [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) 属性を反映した文字列で、テキスト入力が、コンボボックス、検索ボックス、またはテキストボックスに対するユーザーの意図する値の 1 つまたは複数の予測を表示するトリガーとなり得るかどうかを示し、予測が行われた場合にどのように表示されるかを指定します。
- {{domxref("ElementInternals.ariaBusy")}}
  - : [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-busy) 属性を反映した文字列で、要素が変更されているかどうかを示すもので、支援技術はユーザーに公開する前に変更が完了するまで待ちたい場合があります。
- {{domxref("ElementInternals.ariaChecked")}}
  - : [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-checked) 属性を反映した文字列で、チェックボックス、ラジオボタン、その他のチェック状態を持つウィジェットの現在の「チェックされた」状態を示します。
- {{domxref("ElementInternals.ariaColCount")}}
  - : [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッドの列数を定義します。
- {{domxref("ElementInternals.ariaColIndex")}}
  - : [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッド内の列の総数に対する要素の列インデックスまたは位置を定義します。
- {{domxref("ElementInternals.ariaColIndexText")}} {{experimental_inline}}
  - : [`aria-colindextext`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) 属性を反映した文字列で、aria-colindex の人間が読むための代替テキストを定義します。
- {{domxref("ElementInternals.ariaColSpan")}}
  - : [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッド内のセルやグリッドセルにまたがる列の数を定義します。
- {{domxref("ElementInternals.ariaCurrent")}}
  - : [`aria-current`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-current) 属性を反映した文字列で、コンテナーや関連する要素の集合の中で、現在のアイテムを表す要素を表します。
- {{domxref("ElementInternals.ariaDescription")}}
  - : [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-description) 属性を反映した文字列で、現在の ElementInternals を説明または注釈する文字列値を定義します。
- {{domxref("ElementInternals.ariaDisabled")}}
  - : [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) 属性を反映した文字列で、その要素が知覚可能であるが無効であり、編集やその他の操作ができないことを示します。
- {{domxref("ElementInternals.ariaExpanded")}}
  - : [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) 属性を反映した文字列で、この要素が所有または制御するグループ化要素が展開されているか、折りたたまれているかを示します。
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 属性を反映した文字列で、 ElementInternals によって起動される、メニューやダイアログのような操作可能なポップアップ要素の有無と種類を示します。
- {{domxref("ElementInternals.ariaHidden")}}
  - : [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性を反映した文字列で、その要素がアクセシビリティ API に公開されているかどうかを示します。
- {{domxref("ElementInternals.ariaKeyShortcuts")}}
  - : [`aria-keyshortcuts`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) 属性を反映した文字列で、作者が ElementInternals をアクティブにしたりフォーカスを与えたりするために実装したキーボードショートカットを示します。
- {{domxref("ElementInternals.ariaLabel")}}
  - : [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性を反映した文字列で、現在の ElementInternals にラベルを付ける文字列値を定義します。
- {{domxref("ElementInternals.ariaLevel")}}
  - : [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-level) 属性を反映した文字列で、構造内の要素の階層レベルを定義します。
- {{domxref("ElementInternals.ariaLive")}}
  - : [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-live) 属性を反映した文字列で、要素が更新されることを示し、ユーザーエージェント、支援技術、ユーザーがライブ領域から期待できる更新の種類を記述します。
- {{domxref("ElementInternals.ariaModal")}}
  - : [`aria-modal`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-modal) 属性を反映した文字列で、要素が表示されたときにモーダルであるかどうかを示します。
- {{domxref("ElementInternals.ariaMultiline")}}
  - : [`aria-multiline`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) 属性を反映した文字列で、テキストボックスが複数行の入力を受け付けるか、 1 行のみの入力を受け付けるかを示します。
- {{domxref("ElementInternals.ariaMultiSelectable")}}
  - : [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) 属性を反映した文字列で、ユーザーが現在の選択可能な子孫から複数のアイテムを選択できることを示します。
- {{domxref("ElementInternals.ariaOrientation")}}
  - : [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 属性を反映した文字列で、要素の向きが水平であるか、垂直であるか、不明または曖昧であるかを示します。
- {{domxref("ElementInternals.ariaPlaceholder")}}
  - : [`aria-placeholder`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) 属性を反映した文字列で、コントロールに値がない場合に、ユーザーのデータ入力を補助するための短いヒントを定義します。
- {{domxref("ElementInternals.ariaPosInSet")}}
  - : [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) 属性を反映した文字列で、現在のリストアイテムまたはツリーアイテムの集合における要素の番号または位置を定義します。
- {{domxref("ElementInternals.ariaPressed")}}
  - : [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性を反映した文字列で、トグルボタンの現在の「押されている」状態を示します。
- {{domxref("ElementInternals.ariaReadOnly")}}
  - : [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) 属性を反映した文字列で、その要素が編集可能ではないが、それ以外は操作可能であることを示します。
- {{domxref("ElementInternals.ariaRelevant")}} {{Non-standard_Inline}}
  - : [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性を反映した文字列で、ライブ領域内のアクセシビリティツリーが変更されたときに、ユーザーエージェントがどのような通知を行うかを示します。これは、 `aria-live` 領域内のどのような変更が関連性があり、通知されるべきかを記述するために使用されます。
- {{domxref("ElementInternals.ariaRequired")}}
  - : [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-required) 属性を反映した文字列で、これは、フォームを送信する前に、その要素でユーザー入力が必要であることを示します。
- {{domxref("ElementInternals.role")}}
  - : ARIA ロールを含む文字列です。 ARIA ロールの完全なリストは [ARIA 技術のページ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques)にあります。
- {{domxref("ElementInternals.ariaRoleDescription")}}
  - : [`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) 属性を反映した文字列で、要素のロールのための、人間が読める、作者がローカライズした説明を定義します。
- {{domxref("ElementInternals.ariaRowCount")}}
  - : [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) 属性を反映した文字列で、これは、テーブル、グリッド、ツリーグリッドの行の総数を定義します。
- {{domxref("ElementInternals.ariaRowIndex")}}
  - : [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッド内の行の総数に対する要素の行インデックスまたは位置を定義します。
- {{domxref("ElementInternals.ariaRowIndexText")}} {{experimental_inline}}
  - : [`aria-rowindextext`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) 属性を反映した文字列で、aria-rowindex の人間が読むための代替テキストを定義します。
- {{domxref("ElementInternals.ariaRowSpan")}}
  - : [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) 属性を反映した文字列で、これは、テーブル、グリッド、ツリーグリッド内のセルまたはグリッドセルがまたがる行の数を定義します。
- {{domxref("ElementInternals.ariaSelected")}}
  - : [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-selected) 属性を反映した文字列で、選択状態を持つ要素の現在の「選択されている」状態を示します。
- {{domxref("ElementInternals.ariaSetSize")}}
  - : [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) 属性を反映した文字列で、現在のリストアイテムまたはツリーアイテムのセットに含まれるアイテムの数を定義します。
- {{domxref("ElementInternals.ariaSort")}}
  - : [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-sort) 属性を反映した文字列で、テーブルやグリッドのアイテムが昇順でソートされているか降順でソートされているかを示します。
- {{domxref("ElementInternals.ariaValueMax")}}
  - : [`aria-valueMax`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性を反映した文字列で、これは範囲ウィジェットの最大許容値を定義します。
- {{domxref("ElementInternals.ariaValueMin")}}
  - : [`aria-valueMin`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) 属性を反映した文字列で、これは範囲ウィジェットの最小許容値を定義します。
- {{domxref("ElementInternals.ariaValueNow")}}
  - : [`aria-valueNow`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) 属性を反映した文字列で、範囲ウィジェットの現在値を定義します。
- {{domxref("ElementInternals.ariaValueText")}}
  - : [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) 属性を反映した文字列で、 これは、範囲ウィジェットの aria-valuenow の代替となる人間が読めるテキストを定義します。

## インスタンスメソッド

- {{domxref("ElementInternals.setFormValue()")}}
  - : 要素の送信値と状態を設定し、これらをユーザーエージェントに伝えます。
- {{domxref("ElementInternals.setValidity()")}}
  - : 要素の有効性を設定します。
- {{domxref("ElementInternals.checkValidity()")}}
  - : 要素が、[制約検証](/ja/docs/Web/HTML/Constraint_validation)ルールを満たしているかどうかをチェックします。
- {{domxref("ElementInternals.reportValidity()")}}
  - : 要素が[制約検証](/ja/docs/Web/HTML/Constraint_validation)ルールを満たしているかどうかをチェックし、ユーザーエージェントに検証メッセージを送信します。

## 例

次の例は、カスタムフォーム関連要素を {{domxref("HTMLElement.attachInternals")}} で作成する方法を示しています。

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

let element = document.createElement("custom-checkbox");
let form = document.createElement("form");

// フォームに要素を追加して関連付ける
form.appendChild(element);

console.log(element.internals_.form);
// expected output: <form><custom-checkbox></custom-checkbox></form>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [More capable form controls](https://web.dev/articles/more-capable-form-controls)
- [Creating custom form controls with ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
- [ElementInternals polyfill](https://www.npmjs.com/package/element-internals-polyfill)
