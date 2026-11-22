---
title: "HTMLElement: inputMode プロパティ"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} の **`inputMode`** プロパティは、この要素の [`inputmode`](/ja/docs/Web/HTML/Reference/Global_attributes/inputmode) 属性の値を反映します。

要素やコンテンツの編集中にユーザーが入力する可能性のあるデータの種類を示すヒントを提供するものです。これにより、ブラウザーは適切な仮想キーボードを表示することができます。

これは主に {{HTMLElement("input")}} 要素で使用されますが、どの要素でも [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) モードであれば使用できます。

## 値

この属性は、以下の値のいずれかを取ります。

- `decimal`
  - : 実数の入力キーボードで、数字とユーザーのロケールの小数点（普通は <kbd>.</kbd> または <kbd>,</kbd>）を含みます。
- `email`
  - : メールアドレスの入力に最適化された仮想キーボードです。
    通常、<kbd>@</kbd> 文字を含むなどの最適化が行われています。
- `none`
  - : 仮想キーボードはありません。ページが自分自身でキーボード入力制御を実装している場合に使用します。
- `numeric`
  - : 0 ～ 9 の数字だけが必要な数値入力キーボードです。
    端末によって、マイナスキーがある場合とない場合があります。
- `search`
  - : 検索入力に最適化された仮想キーボードです。
    例えば、[リターン/送信キー](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute)には「検索」と表示されているかもしれません。
- `tel`
  - : 電話機のキーパッド入力で、0 ～ 9 の数字、アスタリスク (<kbd>\*</kbd>)、ナンバー (<kbd>#</kbd>) キーを含めるために使用します。
- `text`
  - : ユーザーの現在のロケールに対応した標準入力キーボードです。
- `url`
  - : URL の入力に最適化されたキーパッドです。
    例えば、<kbd>/</kbd> キーが目立つ場所に配置されています。

この属性の使い方は、このプロパティを反映した HTML の [`inputmode`](/ja/docs/Web/HTML/Reference/Global_attributes/inputmode) 属性のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [inputmode](/ja/docs/Web/HTML/Reference/Global_attributes/inputmode) 属性
