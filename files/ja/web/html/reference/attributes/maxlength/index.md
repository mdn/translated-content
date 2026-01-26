---
title: "HTML 属性: maxlength"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`maxlength`** 属性は、ユーザーが {{htmlelement('input')}} または {{htmlelement('textarea')}} に入力できる最大[文字列長](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)を（UTF-16 コード単位で）定義します。 0 以上の整数値である必要があります。

長さは UTF-16 コードユニットで測定され、（[多くの文字体系では](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length#文字列の_length_は文字数と等しいとは限らない)）文字数と等しくなります。 `maxlength` が指定されなかった場合、または無効な値が指定された場合は、 input には最大長が設定されません。

`maxlength` の値はすべて、 [`minlength`](/ja/docs/Web/HTML/Reference/Attributes/minlength) が存在して有効である場合は、その値以上である必要があります。フィールドのテキスト値の長さが maxlength の UTF-16 コード単位の長さを超える場合、入力欄は制約検証に失敗します。制約検証は、ユーザーが値を変更した場合にのみ適用されます。

### 制約検証

ブラウザーは一般的に、 maxlength 属性が許可する以上のテキストをユーザーが入力することを防止しますが、長さが maxlength が許可しているよりも長くなった場合、 {{domxref("ValidityState")}} オブジェクトの読み取り専用の {{domxref("ValidityState.tooLong", "tooLong")}} プロパティが true になります。

{{InteractiveExample("HTML デモ: maxlength", "tabbed-shorter")}}

```html interactive-example
<label for="name">Product name:</label>
<input
  id="name"
  name="name"
  type="text"
  value="Shampoo"
  minlength="3"
  maxlength="20"
  required />

<label for="description">Product description:</label>
<textarea
  id="description"
  name="description"
  minlength="10"
  maxlength="40"
  required></textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid,
textarea:valid {
  background-color: palegreen;
}
```

## 例

```html
<input type="password" maxlength="4" />
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`minlength`](/ja/docs/Web/HTML/Reference/Attributes/minlength)
- [`size`](/ja/docs/Web/HTML/Reference/Attributes/size)
- [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern)
- [制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- [制約検証 API](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
