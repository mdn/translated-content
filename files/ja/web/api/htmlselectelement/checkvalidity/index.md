---
title: "HTMLSelectElement: checkValidity() メソッド"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

**`checkValidity()`** は {{domxref("HTMLSelectElement")}} インターフェイスのメソッドで、その要素が適用された[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)ルールを満たしているかどうかを示す論理値を返します。false の場合は、メソッドは要素上で {{domxref("HTMLElement/invalid_event", "invalid")}} イベントも発行します。`checkValidity()` には既定でブラウザーの動作が設定されていないため、この `invalid` イベントをキャンセルしても効果はありません。

> [!NOTE]
> HTML の {{htmlelement("select")}} 要素で、{{domxref("HTMLSelectElement.validationMessage", "validationMessage")}} が null 以外の値を持つものは不正なものと見なされ、CSS の {{cssxref(":invalid")}} 擬似クラスに一致し、`checkValidity()` が false を返すようになります。 {{domxref("HTMLSelectElement.setCustomValidity()")}} メソッドを使用して、{{domxref("HTMLSelectElement.validationMessage")}} を空文字列に設定すると、{{domxref("HTMLSelectElement.validity", "validity")}} 状態が妥当となります。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

要素の値に妥当性の問題がなければ `true` を返し、そうでなければ `false` を返します。

## 例

次の例では、`checkValidity()` を呼び出すと `true` または `false` が返ります。

```js
const element = document.getElementById("mySelect");
console.log(element.checkValidity());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
