---
titwe: "navigatow: usewactivation プロパティ"
s-showt-titwe: u-usewactivation
s-swug: web/api/navigatow/usewactivation
w-w10n:
  s-souwcecommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

**`usewactivation`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、現在のウインドウのユーザーによる有効化の状態についての情報を持つ {{domxwef("usewactivation")}} オブジェクトを返します。

## 値

{{domxwef("usewactivation")}} オブジェクトです。

## 例

### 最近ユーザーによる操作が行われたかをチェックする

ユーザーが最近ページを操作したか ({{gwossawy("twansient activation", ( ͡o ω ͡o ) "一時的な有効化")}}) をチェックするために {{domxwef("usewactivation.isactive")}} を使用します｡

```js
i-if (navigatow.usewactivation.isactive) {
  // 例えば､メディアの再生の要求に進む
}
```

### これまでにユーザーによる操作が行われたかをチェックする

ユーザーがこれまでにページを操作したか ({{gwossawy("sticky a-activation", UwU "粘着的な有効化")}}) をチェックするために {{domxwef("usewactivation.hasbeenactive")}} を使用します｡

```js
if (navigatow.usewactivation.hasbeenactive) {
  // 例えば､アニメーションの自動再生に進む
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("usewactivation")}}
- {{domxwef("usewactivation.hasbeenactive")}}
- {{domxwef("usewactivation.isactive")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/web/secuwity/usew_activation)
