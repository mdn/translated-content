---
title: UserActivation.hasBeenActive
slug: Web/API/UserActivation/hasBeenActive
l10n:
  sourceCommit: 165b70e57270af4ba85526d92cce74d51d12c39d
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

{{domxref("UserActivation")}} インターフェイスの読み取り専用プロパティ **`hasBeenActive`** は、現在のウインドウでユーザーによる粘着的な有効化がされているかを表します。({{Glossary("sticky activation", "粘着的な有効化")}}を参照してください)

## 値

{{jsxref("boolean")}} です。

## 例

### これまでにユーザーによる操作が行われたかをチェックする

ユーザーがこれまでにページを操作したかをチェックするために `hasBeenActive` を使用します。

```js
if (navigator.userActivation.hasBeenActive) {
  // 例えば､アニメーションの自動再生に進む
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.isActive")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/Web/Security/Defenses/User_activation)
