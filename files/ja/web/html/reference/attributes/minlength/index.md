---
title: "HTML 属性: minlength"
short-title: minlength
slug: Web/HTML/Reference/Attributes/minlength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`minlength`** 属性は、ユーザーが {{htmlelement('input')}} または {{htmlelement('textarea')}} に入力できる最小[文字列長](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)を（UTF-16 コード単位で）定義します。この属性は 0 以上の整数値である必要があります。

長さは UTF-16 コード単位で測定され、（[多くの文字体系では](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length#文字列の_length_は文字数と等しいとは限らない)）文字数と等しくなります。 `minlength` が指定されなかった場合、または無効な値が指定された場合は、入力欄には最小文字数が設定されません。この値は [maxlength](/ja/docs/Web/HTML/Reference/Attributes/maxlength) の値以下である必要があります。そうでなければどちらの条件にも合わせることができないので、この値が有効になることはありません。

入力欄のテキスト値の長さが minlength を UTF-16 コード単位の長さで下回った場合、入力欄は制約検証に失敗し、 {{domxref('validityState.tooShort')}} が `true` を返します。制約検証は、ユーザーが値を変更した場合にのみ適用されます。送信に失敗すると、ブラウザーによっては必要な最小文字列と現在の長さを示してエラーメッセージを表示します。

`minlength` は [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) の意味を含みません。入力欄が `minlength` 制約に違反するのは、ユーザーが値を入力した場合のみです。入力欄に `required` が設定されていない場合、 `minlength` を設定していても、空文字列を送信することができます。

{{InteractiveExample("HTML デモ: minlength", "tabbed-shorter")}}

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

## 例

`minlength="5"` を追加すると、値は空か 5 文字以上でないと有効にはならなくなります。

```html
<label for="fruit">5 文字以上の果物の名前を入力してください</label>
<input type="text" minlength="5" id="fruit" />
```

擬似クラスを使用すると、要素を値が有効かどうかによってスタイル付けすることができます。この値は null （空欄）または 5 文字以上であれば有効になります。「ライム」は無効であり、「さくらんぼ」は有効です。

```css
input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`maxlength`](/ja/docs/Web/HTML/Reference/Attributes/maxlength)
- [`size`](/ja/docs/Web/HTML/Reference/Attributes/size)
- [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern)
- [制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- [制約検証 API](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
