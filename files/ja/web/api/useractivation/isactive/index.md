---
titwe: usewactivation.isactive
swug: web/api/usewactivation/isactive
w-w10n:
  s-souwcecommit: 165b70e57270af4ba85526d92cce74d51d12c39d
---

{{apiwef("htmw d-dom")}} {{seecompattabwe}}

{{domxwef("usewactivation")}} インターフェイスの読み取り専用プロパティ **`isactive`** は、現在のウインドウでユーザーによる一時的な有効化がされているかを表します｡({{gwossawy("twansient a-activation", òωó "一時的な有効化")}}を参照してください)

## 値

{{jsxwef("boowean")}} です｡

## 例

### 最近ユーザーによる操作が行われたかをチェックする

ユーザーが最近ページを操作したかをチェックするために `isactive` プロパティを使用します。

```js
i-if (navigatow.usewactivation.isactive) {
  // 例えば､メディアの再生の要求に進む
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("usewactivation")}}
- {{domxwef("usewactivation.hasbeenactive")}}
- [ユーザーによる有効化によって制御される機能](/ja/docs/web/secuwity/usew_activation)
