---
title: aria-errormessage
slug: Web/Accessibility/ARIA/Attributes/aria-errormessage
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

オブジェクトの `aria-errormessage` 属性は、そのオブジェクトのエラーメッセージを表示する要素を特定します。

## 解説

ユーザーが作成したエラーがある場合、その存在を知らせ、修正する方法を指示したいものです。 2 つの属性を使用する必要があります。 [`aria-invalid="true"`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) を設定してオブジェクトがエラー状態であることを定義し、そして、 `aria-errormessage` 属性を追加し、その値としてそのオブジェクトのエラーメッセージテキストを格納する要素の `id` を指定します。

`aria-errormessage` 属性は、オブジェクトの値が有効でない場合、すなわち [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) が `true` に設定されている場合にのみ使用しましょう。
オブジェクトが有効で `aria-errormessage` 属性を記載する場合は、参照する要素が非表示であり、そこに含まれるメッセージには関連がないことを確認してください。

`aria-errormessage` が関連する場合、参照する要素はユーザーがエラーメッセージを見たり聞いたりできるように可視でなければなりません。

多くの場合、エラーメッセージを持つ要素は [ARIA ライブ領域](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)であることが望まれます。例えば、ユーザーが無効な値を指定した後にエラーメッセージが表示される場合などです。エラーメッセージは、何が間違っているかを記述し、オブジェクトを有効にするために何が必要かをユーザーに通知する必要があります。 ARIA ライブ領域としてエラーメッセージを追加することは、エラーメッセージが他の方法でユーザーに伝えられなくても、エラーメッセージのコンテンツからユーザーが好ましいことを支援技術に知らせます。

失敗が視覚的に明らかで、エラーの明示的な説明が必要な場合は、目に見えるエラーメッセージを記載し、 `aria-errormessage` 属性で不正なオブジェクトにリンクしてください。

## 例

いくつかのスタイルを作成します。

1. すべてのエラーメッセージを非表示にします。
2. 不正なオブジェクトを不正な外観にします。
3. 不正なオブジェクトの後に来る兄弟要素のエラーメッセージを表示させます。

`aria-invalid="true"` を使用して、不正なオブジェクトを識別します。

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

オブジェクトが不正な場合は、 JavaScript を使用して `aria-invalid="true"` を追加します。上記の CSS は、不正なオブジェクト以下の `.errormessage` が見えるようにします。

```html
<p>
  <label for="email">メールアドレス:</label>
  <input
    type="email"
    name="email"
    id="email"
    aria-invalid="true"
    aria-errormessage="err1" />
  <span id="err1" class="errormessage"
    >有効なメールアドレスを入力してください</span
  >
</p>
```

有効から不正になったとき、この例での JavaScript の変更は、メール入力オブジェクトの `aria-invalid` への更新だけでした。エラーメッセージは入力に従うことで、アクセシビリティツリー上で可視化され利用できるようになるため、この例を単純に保つことができます。また、 [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-live) プロパティを適用したり、 [`alert`](/ja/docs/Web/Accessibility/ARIA/Roles/alert_role) のようなライブ領域のロールを使用することもできました。

## 値

- `id` reference
  - : 現在の要素のエラーメッセージを格納する要素の `id` の値。

## 関連するロール

使用しているロール:

- [`application`](/ja/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Roles/tree_role)

継承しているロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## 仕様書

{{Specifications}}

## 関連情報

- HTML の [`invalid`](/ja/docs/Web/HTML/Global_attributes#invalid) 属性
- CSS の {{CSSxref(':invalid')}} 擬似クラス
- [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-live)
