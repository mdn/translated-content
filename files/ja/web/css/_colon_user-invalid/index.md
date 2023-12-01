---
title: ":user-invalid (:-moz-ui-invalid)"
slug: Web/CSS/:user-invalid
---

{{CSSRef}}

**`:user-invalid`** は CSS の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、ユーザーの操作の後、[制約検証](/ja/docs/Learn/Forms#constraint_validation)に基づき有効と判断されなかった検証済みのフォーム要素を表します。

`:user-invalid` 擬似クラスは、ユーザーがフォームの送信を試みた後、そのフォーム要素を再び操作するまで、 {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}}, {{CSSxRef(":required")}} で空欄の要素に一致します。

> **メモ:** この擬似クラスは標準外の `:-moz-ui-invalid` 擬似クラスと同じように動作します。

## 構文

{{CSSSyntax}}

## 例

### :user-invalid で色と記号を設定する

以下の例では、次の例では、赤枠と❌はユーザーがフィールドを操作した場合にのみ表示されます。
メールアドレス以外を入力してみて、その動作を確認してみてください。

```html
<form>
  <label for="email">Email *: </label>
  <input id="email" name="email" type="email" required />
  <span></span>
</form>
```

```css
input:user-invalid {
  border: 2px solid red;
}

input:user-invalid + span::before {
  content: "✖";
  color: red;
}
```

{{EmbedLiveSample("Setting_a_color_and_symbol_on_user-invalid", 140, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-valid")}}
