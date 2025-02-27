---
title: "HTMLTextAreaElement: reportValidity() メソッド"
short-title: reportValidity()
slug: Web/API/HTMLTextAreaElement/reportValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

**`reportValidity()`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのメソッドで、 {{domxref("HTMLTextAreaElement.checkValidity", "checkValidity()")}} メソッドと同じ検証のチェック手順を実行します。さらに {{domxref("HTMLElement/invalid_event", "invalid")}} イベントがキャンセルされなければ、ユーザーに問題を報告します。

## 構文

```js-nolint
reportValidity()
```

### 引数

なし。

### 返値

この要素の値に検証の問題がなければ `true`、それ以外の場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
