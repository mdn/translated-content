---
title: "HTMLSelectElement: reportValidity() メソッド"
short-title: reportValidity()
slug: Web/API/HTMLSelectElement/reportValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

**`reportValidity()`** は {{domxref("HTMLSelectElement")}} インターフェイスのメソッドで、 {{domxref("HTMLSelectElement.checkValidity", "checkValidity()")}} メソッドと同じ妥当性確認ステップを実行します。さらに、{{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントが取り消されない場合、ブラウザーはユーザーに問題を表示します。

## 構文

```js-nolint
reportValidity()
```

### 引数

なし。

### 返値

要素の値が妥当性に関する問題がない場合は `true` を返し、そうでない場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
