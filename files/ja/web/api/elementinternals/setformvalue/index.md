---
title: "ElementInternals: setFormValue() メソッド"
short-title: setFormValue()
slug: Web/API/ElementInternals/setFormValue
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`setFormValue()`** は {{domxref("ElementInternals")}} インターフェイスのメソッドで、このメソッドは、要素の送信値と状態を設定し、これらをユーザーエージェントに伝えます。

## 構文

```js-nolint
setFormValue(value)
setFormValue(value, state)
```

### 引数

- `value`
  - : サーバーに送信する値として、{{domxref("File")}}、文字列、{{domxref("FormData")}} のいずれかを指定します。
- `state` {{optional_inline}}
  - : {{domxref("File")}}、文字列、{{domxref("FormData")}} のいずれかで、ユーザーの入力を表します。
    これにより、アプリケーションは必要に応じて、ユーザーが送信した情報を、ユーザーが入力した形式で再表示することができます。

> [!NOTE]
> 一般的に、 `state` はユーザーがー指定した情報を渡すために、 `value` はサニタイズ後、サーバーに送信するのに適した情報を渡すために使用されます。
> たとえば、カスタム要素で日付の入力を求められた場合、ユーザーは「3/15/2019」と入力するかもしれません。
> これは `state` です。
> サーバーは `2019-03-15` という日付書式を期待しているので、この書式の日付が `value` として渡されます。

### 返値

undefined です。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 要素の `formAssociated` プロパティが `true` に設定されていない場合に発生します。

## 例

次の例では、チェックボックスのカスタム要素で、サーバーに送信する値として `on` を、状態として `checked` を設定しています。

```js
this.internals_.setFormValue("on", "checked");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
