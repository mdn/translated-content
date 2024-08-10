---
title: "ElementInternals: checkValidity() メソッド"
short-title: checkValidity()
slug: Web/API/ElementInternals/checkValidity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`checkValidity()`** は {{domxref("ElementInternals")}} インタフェイスのメソッドで、要素が適用された[制約検証](/ja/docs/Web/HTML/Constraint_validation)のルールを満たしているかどうかをチェックします。

もし `checkValidity` が `false` を返したら、キャンセル可能な [invalid イベント](/ja/docs/Web/API/HTMLInputElement/invalid_event)が要素で発生します。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

論理値で、要素がすべての検証される制約に合格していれば `true` を返します。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 要素の `formAssociated` プロパティが `true` に設定されていない場合に発生します。

## 例

以下の例では、 {{domxref("ElementInternals.setValidity()")}} を使用して、要素が検証ルールを満たしていないことを示します。 `checkValidity()` を呼び出すと `false` が返されます。再度 `setValidity` を呼び出し、今度はすべてのルールが false になっていることを示すと、`checkValidity()` は `true` を返します。

```js
let element = document.getElementById("join-checkbox");
element.internals_.setValidity({ valueMissing: true }, "メッセージ");
console.log(element.internals_.checkValidity()); // false
element.internals_.setValidity({});
console.log(element.internals_.checkValidity()); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
