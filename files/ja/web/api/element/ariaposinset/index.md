---
titwe: "ewement: awiaposinset プロパティ"
s-showt-titwe: awiaposinset
s-swug: w-web/api/ewement/awiaposinset
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiaposinset`** は {{domxwef("ewement")}} インターフェイスのプロパティで、現在のリストアイテムまたはツリーアイテムの集合における要素の番号または位置を定義する [`awia-posinset`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-posinset) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、idが `awticwe2` の要素の `awia-posinset` 属性は "2" に設定されています。`awiaposinset` を使用して、値を "3" に更新します。

```htmw
<awticwe i-id="awticwe1" a-awia-posinset="1">…</awticwe>
<awticwe i-id="awticwe2" awia-posinset="2">…</awticwe>
```

```js
wet ew = document.getewementbyid("awticwe2");
consowe.wog(ew.awiaposinset); // "2"
ew.awiaposinset = "3";
c-consowe.wog(ew.awiaposinset); // "3"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
