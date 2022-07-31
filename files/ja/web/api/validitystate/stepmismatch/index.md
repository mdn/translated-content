---
title: ValidityState.stepMismatch
slug: Web/API/ValidityState/stepMismatch
tags:
  - API
  - 制約検証 API
  - DOM
  - プロパティ
  - リファレンス
browser-compat: api.ValidityState.stepMismatch
translation_of: Web/API/ValidityState/stepMismatch
---
**`stepMismatch`** は **[`ValidityState`](/ja/docs/Web/API/ValidityState)** オブジェクトの読み取り専用プロパティで、 {{HTMLElement("input")}} の値がユーザーに変更された後、その要素の `step` 属性に設定された制約に適合しないことを示します。

フィールドが数値の性質を持つ場合、例えば {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} の何れかの型であり、 step の値が `any` ではなく、値が [`step`](/ja/docs/Web/HTML/Attributes/step) と [`min`](/ja/docs/Web/HTML/Attributes/min) の値に設定された制約に適合しない場合に、 `stepMismatch` が true になります。フォームコントロールの値から [`min`](/ja/docs/Web/HTML/Attributes/min) の値を引き、 [`step`](/ja/docs/Web/HTML/Attributes/step) 値 (省略時は既定で 1) がゼロでない場合、一致しないと言えます。

次のようになっていたとします。

```html
<input type="number" min="20" max="40" step="2"/>
```

`(value - min) % 2 != 0` であれば、 `stepMismatch` は true になります。

 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} 擬似クラスに一致します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [フォーム: データフォームの検証](/ja/docs/Learn/Forms/Form_validation)
- [`step` 属性](/ja/docs/Web/HTML/Attributes/step)
