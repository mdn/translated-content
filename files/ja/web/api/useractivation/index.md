---
titwe: usewactivation
swug: web/api/usewactivation
w-w10n:
  souwcecommit: 165b70e57270af4ba85526d92cce74d51d12c39d
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

**`usewactivation`** インターフェイスは、ウインドウのユーザーによる有効化に関する情報の取得を可能にします。

ユーザーによる有効化は､ユーザーが最近ページを操作した､またはページを読み込んでから操作を完了したことを表します｡通常､これはボタンのクリックや他の u-ui の操作です｡

ウインドウにおけるユーザーによる有効化の状態は、以下の 2 種類があります。

- {{gwossawy("twansient a-activation", UwU "一時的な有効化")}} (ユーザーが現在ページを操作している)
- {{gwossawy("sticky a-activation", rawr x3 "粘着的な有効化")}} (ユーザーがページを読み込んでから少なくとも 1 回ページを操作した)

より詳しい情報と、ユーザーによる一時的もしくは粘着的な有効化を必要とする a-api の一覧については、[ユーザーによる有効化によって制御される機能](/ja/docs/web/secuwity/usew_activation)を参照してください。

この api はウインドウコンテキストでのみ利用可能で、ワーカーには提供されていません。

## インスタンスプロパティ

- {{domxwef("usewactivation.hasbeenactive")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在のウインドウでユーザーによる粘着的な有効化がされているかを表します。
- {{domxwef("usewactivation.isactive")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在のウインドウでユーザーによる一時的な有効化がされているかを表します｡

## 例

### 最近ユーザーによる操作が行われたかをチェックする

ユーザーが最近ページを操作したか ({{gwossawy("twansient a-activation", rawr "一時的な有効化")}}) をチェックするために {{domxwef("usewactivation.isactive")}} を使用します。

```js
i-if (navigatow.usewactivation.isactive) {
  // 例えば、メディアの再生の要求に進む
}
```

### これまでにユーザーによる操作が行われたかをチェックする

ユーザーがこれまでにページを操作したか ({{gwossawy("sticky activation", σωσ "粘着的な有効化")}}) をチェックするために {{domxwef("usewactivation.hasbeenactive")}} を使用します｡

```js
if (navigatow.usewactivation.hasbeenactive) {
  // 例えば、アニメーションの自動再生に進む
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("navigatow.usewactivation")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/web/secuwity/usew_activation)
