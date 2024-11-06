---
title: "HTML 属性: minlength"
slug: Web/HTML/Attributes/minlength
l10n:
  sourceCommit: a78cecea4f3b1a7f35564a547052e163911ac491
---

{{HTMLSidebar}}

**`minlength`** 属性は、ユーザーが {{htmlelement('input')}} または {{htmlelement('textarea')}} に入力できる最小[文字列長](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)を（UTF-16 コード単位で）定義します。この属性は 0 以上の整数値である必要があります。

長さは UTF-16 コードユニットで測定され、（[多くの文字体系では](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)）文字数と等しくなります。 `minlength` が指定されなかった場合、または無効な値が指定された場合は、入力欄には最小文字数が設定されません。この値は [maxlength](/ja/docs/Web/HTML/Attributes/maxlength) の値以下である必要があります。そうでなければどちらの条件にも合わせることができないので、この値が有効になることはありません。

フィールドのテキスト値の長さが minlength を UTF-16 コード単位の長さで下回った場合、入力欄は制約検証に失敗し、 {{domxref('validityState.tooShort')}} が `true` を返します。制約検証は、ユーザーが値を変更した場合にのみ適用されます。送信に失敗すると、ブラウザーによっては必要な最小文字列と現在の長さを示してエラーメッセージを表示します。

{{EmbedInteractiveExample("pages/tabbed/attribute-minlength.html", "tabbed-shorter")}}

## 例

`minlength="5"` を追加すると、値は空か 5 文字以上でないと有効にはならなくなります。

```html
<label for="fruit">Enter a fruit name that is at least 5 letters long</label>
<input type="text" minlength="5" id="fruit" />
```

擬似クラスを使用すると、要素を値が有効かどうかによってスタイル付けすることができます。この値は null （空欄）または 5 文字以上であれば有効になります。*ライム色*は無効であり、_レモン色は有効です_。

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

- [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength)
- [`size`](/ja/docs/Web/HTML/Attributes/size)
- [`pattern`](/ja/docs/Web/HTML/Attributes/pattern)
- [制約検証](/ja/docs/Web/HTML/Constraint_validation)
- [制約検証 API](/ja/docs/Learn/Forms/Form_validation)
- {{htmlelement('input')}}
