---
title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-invalid` 状態は、入力された値がアプリケーションで想定される形式に従っていないことを示します。

## 解説

`aria-invalid` 属性は、入力フィールドに入力された値が、アプリケーションが受け入れる形式または値ではないことを示すために使用されます。これには、電子メールアドレスや電話番号などの形式が含まれる場合があります。また、`aria-invalid` は必須フィールドが空であることを示すためにも使用できます。

`aria-invalid` 属性は、一般的な HTML フォーム要素で使用でき、ARIA ロールが割り当てられている要素に限定されません。

この属性は、検証プロセスの結果として JavaScript で設定する必要があります。値が無効または範囲外であると判断された場合は、`aria-invalid="true"` を設定して、**さらに**ユーザーにエラーがあることを伝えます。ユーザー体験を向上させるには、エラーを修正する方法を提案します。ユーザーがフォームの送信を試みるまで、`aria-invalid="true"` を空の必須要素に設定しないでください。ユーザーがまだフォームに入力中である可能性があります。

> [!NOTE]
> `aria-invalid` を `aria-required` 属性と組み合わせて使用​​する場合、フォームが送信される前に `aria-invalid` を true に設定しないでください。検証の結果としてのみ設定してください。

現在、4 つの値があります。`true` と `false` に加えて、文法エラーが検出された場合に使用できる `grammar` とスペルミスに使用できる `spelling` があります。属性が存在しないか、値が false であるか、値が空の文字列である場合は、既定値の false が適用されます。その他の値は、`true` が設定されているものとして扱われます。

### ネイティブ HTML 検証

HTML にはネイティブのフォーム検証機能があります。ユーザーがエラーのあるコントロールを含むフォームを送信すると、無効な値を持つ最初のフォームコントロールにネイティブでエラーメッセージが表示されます。

入力されていないフォームコントロールに [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) 属性がある場合、フォームは送信されず、「このフィールドを入力してください」などのエラーメッセージが表示されます。ネイティブ検証のメッセージはブラウザーによって異なり、スタイルを設定することはできません。

```html
<input type="number" step="2" min="0" max="100" required />
```

前述の入力例で、ユーザーが最大値を超える値、最小値未満の値、またはステップ値と一致しない値を入力した場合、エラーメッセージが表示されます。例えばユーザーが「3」を入力した場合、ネイティブエラーメッセージは「有効な値を入力してください」のようになります。

独自のフォーム検証スクリプトを作成する場合は、無効なフォームコントロールに `aria-invalid` をスタイル設定（`[aria-invalid="true"]` を使用）およびメッセージ（[`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) を使用）とともに必ず含めて、間違いがどこにあり、どのように修正できるかをユーザーが理解できるようにします。

## 値

- `grammar`
  - : 文法エラーが検出されました。
- `false` (既定値)
  - : 値にエラーは検出されませんでした。
- `spelling`
  - : スペルミスが検出されました。
- `true`
  - : ユーザーが入力した値は検証に失敗しました。

このリストにない値はすべて `true` として扱われます。

## 例

次のスニペットは、blur イベントに検証関数が設定された 2 つのフォームフィールドの簡略化されたバージョンを示しています。`aria-invalid` のデフォルト値は `false` であるため、input に属性を追加する必要は必ずしもないことに注意してください。

```html
<ul>
  <li>
    <label for="name">Full Name</label>
    <input
      type="text"
      name="name"
      id="name"
      aria-required="true"
      aria-invalid="false"
      onblur="checkValidity('name', ' ', 'Invalid name entered (requires both first and last name)');" />
  </li>
  <li>
    <label for="email">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      aria-required="true"
      aria-invalid="false"
      onblur="checkValidity('email', '@', 'Invalid email address');" />
  </li>
</ul>
```

blur 時にすぐにフィールドを検証する必要はないことに注意してください。アプリケーションはフォームが送信されるまで待機することもできます（ただし、これは必ずしも推奨されません）。

以下のスニペットは、特定の文字が存在することのみをチェックする検証関数を示しています（現実の世界では、検証はおそらくより複雑になります）:

```js
function checkValidity(id, searchTerm, msg) {
  const elem = document.getElementById(id);
  if (elem.value.includes(searchTerm)) {
    elem.setAttribute("aria-invalid", "false");
    updateAlert();
  } else {
    elem.setAttribute("aria-invalid", "true");
    updateAlert(msg);
  }
}
```

以下のスニペットは、エラーメッセージを追加（または削除）するアラート関数を示しています:

```js
function updateAlert(msg) {
  const oldAlert = document.getElementById("alert");
  if (oldAlert) {
    oldAlert.remove();
  }

  if (msg) {
    const newAlert = document.createElement("div");
    newAlert.setAttribute("role", "alert");
    newAlert.setAttribute("id", "alert");
    const content = document.createTextNode(msg);
    newAlert.appendChild(content);
    document.body.appendChild(newAlert);
  }
}
```

アラートの ARIA ロール属性が [`alert`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) に設定されていることに注意してください。

## 関連付けられたロール

使用するロール:

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

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- CSS {{CSSXRef(':valid')}} 擬似クラス
- CSS {{CSSXRef(':invalid')}} 擬似クラス
- [フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation) チュートリアル
