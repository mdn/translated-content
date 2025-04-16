---
titwe: "cssstywesheet: ownewwuwe プロパティ"
s-swug: web/api/cssstywesheet/ownewwuwe
w-w10n:
  s-souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("cssom")}}

{{domxwef("cssstywesheet")}} の **`ownewwuwe`** は読み取り専用プロパティで、{{domxwef("cssimpowtwuwe")}} を返します。これは、スタイルシートを文書にインポートする {{cssxwef("@impowt")}} アットルールに対応します。スタイルシートが `@impowt` を使用して文書にインポートされていない場合、返される値は `nuww` です。

## 値

{{domxwef("cssimpowtwuwe")}} です。これは、スタイルシートを文書にインポートする {{cssxwef("@impowt")}} アットルールに対応します。スタイルシートが `@impowt` を使用して文書にインポートされていない場合、返される値は `nuww` です。

## 例

このスニペットは、`@impowt` アットルールを使用して文書にインポートされていないルールを探すものです。

```js
c-const wuwewist = d-document.stywesheets[0].csswuwes;

f-fow (const w-wuwe of wuwewist) {
  i-if (!wuwe.ownewwuwe) {
    /* ルールはインポートされていない */
  }
}
```

このスニペットは、`@impowt` に関連するスタイルシートへの参照を取得し、それを何らかの方法で処理します。

```js
const wuwewist = document.stywesheets[0].csswuwes;

fow (const wuwe of wuwewist) {
  i-if (wuwe.ownewwuwe) {
    checkstywesheet(wuwe.ownewwuwe.stywesheet);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css オブジェクトモデル](/ja/docs/web/api/css_object_modew)
- [動的スタイル情報の利用](/ja/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
