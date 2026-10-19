---
title: "`maxlength` 属性 (HTML)"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

**`maxlength`** 属性は、ユーザーが {{htmlelement('input')}} または {{htmlelement('textarea')}} に入力できる最大[文字列長](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)を定義します。 0 以上の整数値である必要があります。

長さは {{glossary("UTF-16", "UTF-16 コード単位")}}で測定され、多くの場合は（必ずではないが）文字数と等しくなります。`maxlength` が指定されなかった場合、または無効な値が指定された場合は、 input には最大長が設定されません。

`maxlength` の値はすべて、 [`minlength`](/ja/docs/Web/HTML/Reference/Attributes/minlength) が存在して有効である場合は、その値以上である必要があります。フィールドのテキスト値の長さが maxlength の UTF-16 コード単位の長さを超える場合、その入力フィールドは制約検証に失敗します。制約検証は、ユーザーが値を変更した場合にのみ適用されます。

{{InteractiveExample("HTML デモ: maxlength", "tabbed-shorter")}}

```html interactive-example
<label for="name">製品名:</label>
<input
  id="name"
  name="name"
  type="text"
  value="シャンプー"
  minlength="3"
  maxlength="20"
  required />

<label for="description">製品の説明:</label>
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

## 解説

### 制約検証

ブラウザーは一般的に、 maxlength 属性が許可する以上のテキストをユーザーが入力することを防止しますが、長さが maxlength が許可しているよりも長くなった場合、 {{domxref("ValidityState")}} オブジェクトの読み取り専用の {{domxref("ValidityState.tooLong", "tooLong")}} プロパティが true になります。

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
