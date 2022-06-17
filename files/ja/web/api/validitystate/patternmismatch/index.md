---
title: ValidityState.patternMismatch
slug: Web/API/ValidityState/patternMismatch
tags:
  - API
  - 制約検証 API
  - DOM
  - プロパティ
  - リファレンス
browser-compat: api.ValidityState.patternMismatch
translation_of: Web/API/ValidityState
---
**`patternMismatch`** は **[`ValidityState`](/ja/docs/Web/API/ValidityState)** オブジェクトの読み取り専用プロパティで、 {{HTMLElement("input")}} 要素の値がユーザーによって編集された後で、その要素の [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性で設定された制約に適合するかどうかを示します。

そのフィールドが [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性に対応している場合 -- つまり、 {{HTMLElement("input")}} の `type` が {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, {{HTMLElement("input/search", "search")}} のいずれかであった場合 -- かつ、 pattern の値が有効な正規表現に設定されていた場合、値が [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) の値で設定された制約に適合していない場合、 `patternMismatch` プロパティが true になります。

## 例

以下のものがあったとします。

```html
<p>
 <label>電話番号を (123)456-7890 の形で入力してください
  (<input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3 桁の市外局番" size="2"/>)-
   <input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3 桁の市内局番" size="2"/> -
   <input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" aria-label="4 桁の加入者番号" size="3"/>
 </label>
</p>
```

ここでは、北米の電話番号のための 3 つの部分があり、電話番号の 3 つの構成要素すべてを包含する暗黙のラベルが、それぞれ 3 桁、3 桁、4 桁を期待しています。それぞれが [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性によってそのように定義されています。

値が長すぎたり短すぎたり、数字ではない文字が含まれていたりすると、 `patternMismatch` が true になります。 `true` の場合、要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 40)}}

この場合、値の長さを決定するのはパターンであるため、値が長すぎたり短すぎたりした場合に発生するのは `patternMismatch` であり、 {{domxref('validityState.tooLong')}} や {{domxref('validityState.tooShort')}} ではないことに注意してください。代わりに [`minlength`](/ja/docs/Web/HTML/Attributes/minlength) と [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength) 属性を使用していたら、 {{domxref('validityState.tooLong')}} または {{domxref('validityState.tooShort')}} が true になるかもしれません。

> **Note:** pattern 属性がない場合、 `{{HTMLElement("input/email", "email")}}` 入力型は、少なくとも `x@y` に一致する必要があり、 `{{HTMLElement("input/url", "url")}}` 型は、少なくとも x: に一致する必要があります。無効な場合、 pattern 属性がない場合 (またはその入力型で pattern 属性が無効な場合) は {{domxref('validityState.typeMismatch')}} が true になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [フォーム: データフォームの検証](/ja/docs/Learn/Forms/Form_validation)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
