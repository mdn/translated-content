---
title: UserActivation.isActive
slug: Web/API/UserActivation/isActive
l10n:
  sourceCommit: 165b70e57270af4ba85526d92cce74d51d12c39d
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

{{domxref("UserActivation")}} インターフェイスの読み取り専用プロパティ **`isActive`** は、現在のウインドウでユーザーによる一時的な有効化がされているかを表します｡({{Glossary("transient activation", "一時的な有効化")}}を参照してください)

## 値

{{jsxref("boolean")}} です｡

## 例

### 最近ユーザーによる操作が行われたかをチェックする

ユーザーが最近ページを操作したかをチェックするために `isActive` プロパティを使用します。

```js
if (navigator.userActivation.isActive) {
  // 例えば､メディアの再生の要求に進む
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.hasBeenActive")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/Web/Security/User_activation)
