---
title: "HTMLFormElement: checkValidity() メソッド"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

**`checkValidity()`** は {{domxref("HTMLFormElement")}} インターフェイスのメソッドで、関連付けられたコントロールすべてが適用された[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)ルールを満たしているかどうかを示す論理値を返します。 このメソッドは、値が不正な要素にそれぞれ対して {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを発行しますが、このフォーム要素自体には発行しません。 `checkValidity()` には既定でブラウザーの動作が設定されていないため、この `invalid` イベントをキャンセルしても効果はありません。

> [!NOTE]
> CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラスは、`<form>` 要素自体の妥当性ではなく、 `<form>` 要素に所属するフォームコントロールの妥当性に基づいて適用されます。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

関連付けられたフォームコントロールの値に妥当性の問題がなければ `true` を返し、そうでなければ `false` を返します。

## 例

次の例では、`checkValidity()` を呼び出すと、`true` または `false` を返します。

```js
const element = document.getElementById("myForm");
console.log(element.checkValidity());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLFormElement.reportValidity()")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
