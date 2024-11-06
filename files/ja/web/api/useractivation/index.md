---
title: UserActivation
slug: Web/API/UserActivation
l10n:
  sourceCommit: 165b70e57270af4ba85526d92cce74d51d12c39d
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`UserActivation`** インターフェイスは、ウインドウのユーザーによる有効化に関する情報の取得を可能にします。

ユーザーによる有効化は､ユーザーが最近ページを操作した､またはページを読み込んでから操作を完了したことを表します｡通常､これはボタンのクリックや他の UI の操作です｡

ウインドウにおけるユーザーによる有効化の状態は、以下の 2 種類があります。

- {{Glossary("Transient activation", "一時的な有効化")}} (ユーザーが現在ページを操作している)
- {{Glossary("Sticky activation", "粘着的な有効化")}} (ユーザーがページを読み込んでから少なくとも 1 回ページを操作した)

より詳しい情報と、ユーザーによる一時的もしくは粘着的な有効化を必要とする API の一覧については、[ユーザーによる有効化によって制御される機能](/ja/docs/Web/Security/User_activation)を参照してください。

この API はウインドウコンテキストでのみ利用可能で、ワーカーには提供されていません。

## インスタンスプロパティ

- {{domxref("UserActivation.hasBeenActive")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 現在のウインドウでユーザーによる粘着的な有効化がされているかを表します。
- {{domxref("UserActivation.isActive")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 現在のウインドウでユーザーによる一時的な有効化がされているかを表します｡

## 例

### 最近ユーザーによる操作が行われたかをチェックする

ユーザーが最近ページを操作したか ({{Glossary("Transient activation", "一時的な有効化")}}) をチェックするために {{domxref("UserActivation.isActive")}} を使用します。

```js
if (navigator.userActivation.isActive) {
  // 例えば、メディアの再生の要求に進む
}
```

### これまでにユーザーによる操作が行われたかをチェックする

ユーザーがこれまでにページを操作したか ({{Glossary("Sticky activation", "粘着的な有効化")}}) をチェックするために {{domxref("UserActivation.hasBeenActive")}} を使用します｡

```js
if (navigator.userActivation.hasBeenActive) {
  // 例えば、アニメーションの自動再生に進む
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("navigator.userActivation")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/Web/Security/User_activation)
