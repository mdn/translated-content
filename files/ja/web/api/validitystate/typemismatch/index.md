---
title: ValidityState.typeMismatch
slug: Web/API/ValidityState/typeMismatch
tags:
  - API
  - 制約検証 API
  - DOM
  - プロパティ
  - リファレンス
browser-compat: api.ValidityState.typeMismatch
---
{{draft}}**`typeMismatch`** は **[`ValidityState`](/ja/docs/Web/API/ValidityState)** オブジェクトの読み取り専用プロパティで、 {{HTMLElement("input")}} の値がユーザーによって変更された後、その要素の [`type`](/ja/docs/Web/HTML/Element/input#input_types) 属性で設定された制約に適合していないことを示します。

`type` 属性が特定の文字列を期待する場合、例えば {{HTMLElement("input/email", "email")}} や {{HTMLElement("input/url", "url")}} 型で、型で設定された制約に適合しない値である場合は、 `typeMismatch` プロパティが true になります。

{{HTMLElement("input/email", "email")}} 入力型は [`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 属性が存在するかどうかに応じて、 1 つ以上の有効なメールアドレスを期待します。有効なメールアドレスには、メールの先頭部分と、トップレベルドメインの有無にかかわらず、ドメインが含まれます。 email 入力の値が、空の文字列、単一の有効なメールアドレス、または、[`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 属性が存在する場合はカンマで区切られた 1 つ以上のメールアドレスでない場合は、 `typeMismatch` となります。

{{HTMLElement("input/url", "url")}} 入力型は、[`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 属性が存在するかどうかに応じて、 1 つ以上の有効な URL を想定しています。有効な URL には、プロトコル、任意で IP アドレス、または任意でサブドメイン、ドメイン、トップレベルドメインの組み合わせが含まれます。 URL 入力の値が空の文字列、単一の有効な URL、または [`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 属性が存在する場合はカンマで区切られた 1 つまたは複数の URL でない場合は、 `typeMismatch` となります。

| 入力型                                  | 値                | 期待される値                             |
| --------------------------------------- | ----------------- | ---------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` や `x@y.z`  | [TLD] の有無にかかわらず、メールアドレス |
| {{HTMLElement("input/url", "url")}}     | `x:` や `x://y.z` | プロトコルやプロトコル付きの完全 URL     |

## 例

次のような例があったとします。

```html
<p>
 <label>
    Enter an email address:
    <input type="email" value="example.com"/>
 </label>
</p>
<p>
 <label>
     Enter a URL:
     <input type="url" value="example.com"/>
  </label>
</p>
```

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 40)}}

上記のものは、メールアドレスが単なるドメインであり、 URL にプロトコルがないため、`typeMismatch`が発生します。

`typeMismatch` は、 [`type`](/ja/docs/Web/HTML/Element/input#%3cinput%3e_types) 属性で期待される [`value`](/ja/docs/Web/HTML/Attributes/value) の値と、実際に存在するデータとの間に不一致がある場合に発生します。 `typeMismatch` は数あるエラーのひとつで、 {{HTMLElement("input/email", "email")}} と {{HTMLElement("input/url", "url")}} の入力型にのみ関係します。他の入力型では、提供された値が型に基づく期待値と一致しない場合、異なるエラーが発生します。例えば、 {{HTMLElement("input/number", "number")}} の入力値が浮動小数点数でない場合、 `badInput` が `true` になります。メールが　[`required`](/ja/docs/Web/HTML/Attributes/required)　であるにもかかわらず空の場合は、 {{domxref('ValidityState.valueMissing','valueMissing')}} が `true` になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [フォーム: データフォームの検証](/ja/docs/Learn/Forms/Form_validation)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
