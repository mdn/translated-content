---
title: ValidityState.valueMissing
slug: Web/API/ValidityState/valueMissing
l10n:
  sourceCommit: cfcbb39cc595bd536b107f6771bfb3f8e13bacca
---

{{APIRef("HTML DOM")}}

**`valueMissing`** は **[`ValidityState`](/ja/docs/Web/API/ValidityState)** オブジェクトの読み取り専用プロパティで、必須 ([`required`](/ja/docs/Web/HTML/Attributes/required)) のコントロール、例えば {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} の値が空であることを示します。

`required` 属性が設定されており、{{HTMLElement("option")}} が選択されていない場合、または `<textarea>` やユーザーが編集できる `<input>` が空の場合、 `valueMissing` 属性は `true` になります。このプロパティは、フィールドが必須かつ値がない場合にのみ `true` となります。フィールドが必須でない場合、またはフィールドが必須でも値がある場合には、値は `false` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [制約検証](/ja/docs/Web/HTML/Constraint_validation)
- [フォーム: データフォームの検証](/ja/docs/Learn/Forms/Form_validation)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
