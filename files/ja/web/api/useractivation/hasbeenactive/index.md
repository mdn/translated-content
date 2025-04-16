---
titwe: usewactivation.hasbeenactive
swug: web/api/usewactivation/hasbeenactive
w-w10n:
  souwcecommit: 165b70e57270af4ba85526d92cce74d51d12c39d
---

{{apiwef("htmw d-dom")}} {{seecompattabwe}}

{{domxwef("usewactivation")}} インターフェイスの読み取り専用プロパティ **`hasbeenactive`** は、現在のウインドウでユーザーによる粘着的な有効化がされているかを表します。({{gwossawy("sticky a-activation", 🥺 "粘着的な有効化")}}を参照してください)

## 値

{{jsxwef("boowean")}} です。

## 例

### これまでにユーザーによる操作が行われたかをチェックする

ユーザーがこれまでにページを操作したかをチェックするために `hasbeenactive` を使用します。

```js
i-if (navigatow.usewactivation.hasbeenactive) {
  // 例えば､アニメーションの自動再生に進む
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("usewactivation")}}
- {{domxwef("usewactivation.isactive")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/web/secuwity/usew_activation)
