---
title: ':user-valid (:-moz-ui-valid)'
slug: web/css/:user-valid
tags:
  - CSS
  - CSS Selectors
  - 擬似クラス
  - リファレンス
  - セレクター
browser-compat: css.selectors.user-valid
---
{{CSSRef}}

**`:user-valid`** は CSS の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、[制約検証](/ja/docs/Learn/Forms#constraint_validation)に基づき値の検証が正しく行われた有効なフォーム要素を表します。ただし、 {{cssxref(":valid")}} とは異なり、ユーザーが操作した後にのみ一致します。

> **Note:** この擬似クラスは標準外の `:-moz-ui-valid` 擬似クラスと同じように動作します。

この擬似クラスは、以下の基準に則って適用されます。

- そのコントロールにフォーカスがなく、値が有効な場合は、この擬似クラスが適用されます。
- そのコントロールにフォーカスがあり、フォーカスを受けた時点でその値が有効であった場合（空欄の場合も含む）、この擬似クラスが適用されます。
- そのコントロールにフォーカスがあり、フォーカスを受けた時点でその値が無効であった場合、キーを入力するごとに再検証が行われます。
- その要素が必須 (required) であった場合は、ユーザーが値を変更した場合、またはフォームを送信しようとした場合にのみ適用されます。

その結果、ユーザーがコントロールを操作し始めたときに有効であった場合、ユーザーが他のコントロールにフォーカスを移したときにのみ、有効性のスタイルが変更されることになります。しかし、ユーザーが以前にフラグを立てた値を修正しようとしている場合、その値が有効になるとコントロールは直ちに表示されます。必須項目は、ユーザーが変更した場合、または変更されていない無効な値を送信しようとした場合にのみ、無効であるとフラグが立てられます。

## 構文

{{CSSSyntax}}

## 例

### :user-valid で色と記号を設定

次の例では、緑の境界と✅が、ユーザーがフィールドを操作した後にのみ表示されます。
メールアドレスを他の有効なメールに変更して、その動作を確認してみてください。

```html
<form>
  <label for="email">Email *: </label>
  <input id="email" name="email" type="email" value="test@example.com" required>
  <span></span>
</form>
```

```css
input:user-valid {
  border: 2px solid green;
}

input:user-valid + span::before {
  content: '✓';
  color: green;
}
```

{{EmbedLiveSample("Setting_a_color_and_symbol_on_user-valid", 140, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-invalid")}}
