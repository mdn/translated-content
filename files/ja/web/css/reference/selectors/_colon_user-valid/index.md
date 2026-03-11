---
title: :user-valid
slug: Web/CSS/Reference/Selectors/:user-valid
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`:user-valid`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に基づき値の検証が正しく行われた有効なフォーム要素を表します。ただし、 {{cssxref(":valid")}} とは異なり、ユーザーが操作した後にのみ一致します。

この擬似クラスは、フォームコントロールが有効であり、かつ次のいずれかが発生した場合に適用されます。

- ユーザーがフォームコントロールに変更を加え、フォーカスを他の場所へ移動するなどして変更を確定した。
- コントロールに変更が加えられていない場合であっても、ユーザーがフォームを送信しようとした。
- フォーカスが得られた時点で値が不正な状態だったが、ユーザーが変更を加えて有効にした。フォーカスがまだコントロール上にある場合も同様。

この擬似クラスが適用されると、ユーザーエージェントはコントロールがフォーカスされている間、キー入力のたびにそのコントロールが有効かどうかを再検証します。

- そのコントロールにフォーカスがあり、フォーカスを受けた時点でその値が無効であった場合、キーを入力するごとに再検証が行われます。

その結果、ユーザーがコントロールを操作し始めたときに有効であった場合、ユーザーが他のコントロールにフォーカスを移したときにのみ、有効性のスタイルが変更されることになります。しかし、ユーザーが以前にフラグを立てた値を修正しようとしている場合、その値が有効になるとコントロールは直ちに表示されます。必須項目は、ユーザーが変更した場合、または変更されていない無効な値を送信しようとした場合にのみ、無効であるとフラグが立てられます。

## 構文

```css
:user-valid {
  /* ... */
}
```

## 例

### :user-valid で色と記号を設定

次の例では、緑の境界と✅が、ユーザーがフィールドを操作した後にのみ表示されます。
メールアドレスを他の有効なメールに変更して、その動作を確認してみてください。

```html
<form>
  <label for="email">Email *: </label>
  <input
    id="email"
    name="email"
    type="email"
    value="test@example.com"
    required />
  <span></span>
</form>
```

```css
input:user-valid {
  border: 2px solid green;
}

input:user-valid + span::before {
  content: "✓";
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
