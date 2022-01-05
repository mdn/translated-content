---
title: ValidityState.rangeUnderflow
slug: Web/API/ValidityState/rangeUnderflow
tags:
  - API
  - 制約検証 API
  - DOM
  - プロパティ
  - リファレンス
browser-compat: api.ValidityState.rangeUnderflow
translation_of: Web/API/ValidityState/rangeUnderflow
---
**`rangeUnderflow`** は **[`ValidityState`](/ja/docs/Web/API/ValidityState)** オブジェクトの読み取り専用プロパティで、 {{HTMLElement("input")}} の値がユーザーに変更された後、その要素の [`min`](/ja/docs/Web/HTML/Attributes/min) 属性に設定された制約に適合しないことを示します。

フィールドが数値の性質を持つ場合、例えば {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} の何れかの型であり、 `min` が設定されており、値が [`min`](/ja/docs/Web/HTML/Attributes/step) の値に設定された制約に適合しない場合、 `rangeUnderflow` プロパティが true になります。

次のようになっていたとします。

```html
<input type="number" min="20" max="40" step="2"/>
```

`value < 20` であれば、 `rangeUnderflow` は true になります。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} 擬似クラスに一致します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ValidityState.rangeOverflow")}}
- [制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [フォーム: データフォームの検証](/ja/docs/Learn/Forms/Form_validation)
- [`step` 属性](/ja/docs/Web/HTML/Attributes/step)
- [`max` 属性](/ja/docs/Web/HTML/Attributes/max)
