---
title: "Navigator: userActivation プロパティ"
short-title: userActivation
slug: Web/API/Navigator/userActivation
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

**`userActivation`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、現在のウインドウのユーザーによる有効化の状態についての情報を持つ {{domxref("UserActivation")}} オブジェクトを返します。

## 値

{{domxref("UserActivation")}} オブジェクトです。

## 例

### 最近ユーザーによる操作が行われたかをチェックする

ユーザーが最近ページを操作したか ({{Glossary("Transient activation", "一時的な有効化")}}) をチェックするために {{domxref("UserActivation.isActive")}} を使用します｡

```js
if (navigator.userActivation.isActive) {
  // 例えば､メディアの再生の要求に進む
}
```

### これまでにユーザーによる操作が行われたかをチェックする

ユーザーがこれまでにページを操作したか ({{Glossary("Sticky activation", "粘着的な有効化")}}) をチェックするために {{domxref("UserActivation.hasBeenActive")}} を使用します｡

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
- {{domxref("UserActivation.hasBeenActive")}}
- {{domxref("UserActivation.isActive")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/Web/Security/Defenses/User_activation)
