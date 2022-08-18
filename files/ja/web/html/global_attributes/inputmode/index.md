---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
tags:
  - Attribute
  - Editing
  - Forms
  - Global attributes
  - HTML
  - Input
  - Reference
  - Text
  - Web
  - contenteditable
  - global
  - inputmode
  - text input
translation_of: Web/HTML/Global_attributes/inputmode
---
{{HTMLSidebar("Global_attributes")}}

**`inputmode`** は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、ユーザーが要素やその内容を編集する際に入力されるデータの型のヒントとなる列挙型属性です。下記の値が存在します。

- `none`
  - : 仮想キーボードなし。ページが独自のキーボード入力を実装している場合のためのものです。
- `text` (既定値)
  - : ユーザーの現在のロケールにおける標準的な入力キーボードです。
- `decimal`

  - : 実数を入力するキーボードで、数字とユーザーのロケール上で適切な区切り文字 (ふつうは&#x20;

    <kbd>.</kbd>

    &#x20;または&#x20;

    <kbd>,</kbd>

    ) を含みます。負号キー (

    <kbd>-</kbd>

    ) を表示するかどうかは端末によります。

- `numeric`
  - : 数字を入力するキーボードですが、数字の 0 から 9 までのみを必要とするものです。負号キーを表示するかどうかは端末によります。
- `tel`

  - : 電話番号を入力するテンキーで、 0 から 9 までの数字と、アスタリスク (

    <kbd>\*</kbd>

    )、シャープ (

    <kbd>#</kbd>

    ) キーがあります。電話番号を*要求する*入力欄は、ふつうは代わりに `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` を使用してください。

- `search`
  - : 検索入力に最適化された仮想キーボードです。例えば、 [return/submit](https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute) キーのラベルが「検索」になっていたり、他の最適化が行われている可能性もあります。検索クエリを*要求する*入力欄は、ふつうは代わりに `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` を使用してください。
- `email`

  - : 電子メールアドレスの入力に最適化された仮想キーボードです。ふつう&#x20;

    <kbd>@</kbd>

    &#x20;の文字を含むなどの他の最適化が行われます。メールアドレスの入力を*要求する*入力欄は、ふつうは代わりに `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` を使用してください。

- `url`

  - : URL の入力に最適化された仮想キーボードです。例えば&#x20;

    <kbd>/</kbd>

    &#x20;キーが目立つ場所に配置されているなどです。履歴へのアクセス機能などの拡張機能が含まれている場合もあります。 URL の入力を*要求する*入力欄は、ふつうは代わりに `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` を使用してください。

## 仕様書

| 仕様書                                                                                                                                   | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName("HTML WHATWG", "interaction.html#input-modalities:-the-inputmode-attribute", "inputmode")}} | {{Spec2("HTML WHATWG")}} |      |

## ブラウザーの互換性

{{Compat("html.global_attributes.inputmode")}}

## 関連情報

- [グローバル属性](/ja/docs/Web/HTML/Global_attributes)一覧
