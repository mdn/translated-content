---
title: "HTMLButtonElement: checkValidity() メソッド"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

**`checkValidity()`** は {{domxref("HTMLButtonElement")}} インターフェイスのメソッドで、その要素が適用された[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)ルールを満たしているかどうかを示す論理値を返します。false の場合は、メソッドは要素上で {{domxref("HTMLButtonElement/invalid_event", "invalid")}} イベントも発行します。`checkValidity()` には既定でブラウザーの動作が設定されていないため、この `invalid` イベントをキャンセルしても効果はありません。{{HTMLElement("button")}} 要素の {{domxref("HTMLButtonElement/type", "type")}} が `"button"` または `"reset"` である場合、そのボタンが[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)になることはないので、常に true を返します。

> [!NOTE]
> HTML の {{htmlelement("button")}} 要素で、{{domxref("HTMLButtonElement.validationMessage", "validationMessage")}} が null 以外の値を持つものは不正なものと見なされ、CSS の {{cssxref(":invalid")}} 擬似クラスに一致し、`checkValidity()` が false を返すようになります。 {{domxref("HTMLButtonElement.setCustomValidity()")}} メソッドを使用して、{{domxref("HTMLButtonElement.validationMessage")}} を空文字列に設定すると、{{domxref("HTMLButtonElement.validity", "validity")}} 状態が妥当となります。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

要素の値に妥当性の問題がなければ `true` を返し、そうでなければ `false` を返します。

## 例

次の例では、`checkValidity()` を呼び出すと、`true` または `false` のいずれかを返します。

```js
const element = document.getElementById("myButton");
console.log(element.checkValidity());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.reportValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
