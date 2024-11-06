---
title: "ElementInternals: reportValidity() メソッド"
short-title: reportValidity()
slug: Web/API/ElementInternals/reportValidity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`reportValidity()`** は {{domxref("ElementInternals")}} インターフェイスのメソッドで、適用された[制約検証](/ja/docs/Web/HTML/Constraint_validation)ルールをこの要素が満たしているかどうかをチェックします。

`reportValidity` が `false` を返した場合、キャンセル可能な [invalid イベント](/ja/docs/Web/API/HTMLInputElement/invalid_event)が要素で発生します。

このメソッドは {{domxref("ElementInternals.checkValidity()")}} と同様の振る舞いをしますが、 {{domxref("ElementInternals.validationMessage")}} の値をユーザーエージェントに送信して表示させます。

## 構文

```js-nolint
reportValidity()
```

### 引数

なし。

### 返値

論理値で、要素がすべての検証される制約に合格していれば `true` を返します。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 要素の `formAssociated` プロパティが `true` に設定されていない場合に発生します。

## 例

以下の例では、 {{domxref("ElementInternals.setValidity()")}} を使用して、要素が検証ルールを満たしていないことを示します。 `reportValidity()` を呼び出すと `false` が返され、 "メッセージ" という値がユーザーエージェントに送られ、表示されます。

再度 `setValidity` を呼び出し、今度はすべてのルールが false になっていることを示すと、`reportValidity()` は `true` を返します。

```js
let element = document.getElementById("join-checkbox");
element.internals_.setValidity({ valueMissing: true }, "メッセージ");
console.log(element.internals_.reportValidity()); // false
element.internals_.setValidity({});
console.log(element.internals_.reportValidity()); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
