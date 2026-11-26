---
title: "ARIA: aria-errormessage 属性"
short-title: aria-errormessage
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

オブジェクトの `aria-errormessage` 属性は、そのオブジェクトのエラーメッセージを提供する要素（1 つまたは複数）を特定します。

## 解説

ユーザーの操作によってエラーが生じた場合は、そのことをユーザーに知らせ、修正方法を伝える必要があります。使用する属性は 2 つです。まず [`aria-invalid="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) を設定してオブジェクトがエラー状態であることを示し、次に `aria-errormessage` 属性を追加します。その値には、オブジェクトのエラーメッセージのテキストを含む要素の `id`、または複数の要素の `id` を空白区切りで並べたリストを指定します。

`aria-errormessage` 属性を使用するのは、オブジェクトの値が無効である場合、つまり [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) が `true` に設定されている場合に限ります。オブジェクトが有効であるにもかかわらず `aria-errormessage` 属性を含める場合は、参照先の要素を非表示にしてください。そこに含まれるメッセージは無関係だからです。

`aria-errormessage` が関連する場合は、ユーザーがエラーメッセージを見たり聞いたりできるよう、参照先の要素を表示する必要があります。

エラーメッセージを含む要素は、多くの場合 [ARIA ライブ領域](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)にするとよいでしょう。例えば、ユーザーが無効な値を入力した後にエラーメッセージを表示する場合です。エラーメッセージでは、何が誤っているかを説明し、オブジェクトを有効にするために必要な操作をユーザーに伝えてください。エラーメッセージを ARIA ライブ領域にすると、通常の方法ではユーザーに伝えられない場合でも、ユーザーがその内容から情報を得られる可能性があることを支援技術に知らせます。

失敗が視覚的に明らかで、エラーの明示的な説明が必要な場合は、エラーメッセージを表示し、`aria-errormessage` 属性で無効なオブジェクトに関連付けてください。

## 値

- ID 参照リスト
  - : 現在の要素のエラーメッセージを含む要素の `id`、またはそのような `id` を空白区切りで並べたリストです。

## 関連インターフェイス

- {{domxref("Element.ariaErrorMessageElements")}}
  - : `ariaErrorMessageElements` プロパティは各要素のインターフェイスの一部です。その値は、`aria-errormessage` 属性の `id` 参照を反映する {{domxref("Element")}} のサブクラスのインスタンスの配列です ([いくつかの注意点があります](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references))。
- {{domxref("ElementInternals.ariaErrorMessageElements")}}
  - : `ariaErrorMessageElements` プロパティは各カスタム要素のインターフェイスの一部です。その値は、`aria-errormessage` 属性の `id` 参照を反映する {{domxref("Element")}} のサブクラスのインスタンスの配列です ([いくつかの注意点があります](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references))。

## 関連付けられたロール

次のロールで使用されます。

- [`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

次のロールにも継承されます。

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 例

次のスタイルを作成します。

1. すべてのエラーメッセージを非表示にする。
2. 無効なオブジェクトがそうと分かる外観にする。
3. 無効なオブジェクトの後に兄弟要素として置かれたエラーメッセージを表示する。

`aria-invalid="true"` を使用して、無効なオブジェクトを特定します。

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

オブジェクトが無効な場合は、JavaScript を使用して `aria-invalid="true"` を追加します。上記の CSS は、無効なオブジェクトの後にある `.errormessage` を表示します。

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
    >エラー: 有効なメールアドレスを入力してください</span
  >
</p>
```

対象が有効から無効に変わった際、この例ではメール入力要素の `aria-invalid` を更新するだけで済みました。エラーメッセージは入力欄の後に配置され、表示されるとアクセシビリティツリーからも利用できるため、例をシンプルに保てます。`aria-live` プロパティを適用したり、[`alert`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) のようなライブ領域のロールを使用したりする方法もあります。

## 仕様書

{{Specifications}}

## 関連情報

- CSS の {{CSSxref(':invalid')}} 擬似クラス
- [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
