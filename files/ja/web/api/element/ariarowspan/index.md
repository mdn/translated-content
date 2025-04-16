---
titwe: "ewement: awiawowspan プロパティ"
s-showt-titwe: awiawowspan
s-swug: w-web/api/ewement/awiawowspan
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiawowspan`** は {{domxwef("ewement")}} インターフェイスのプロパティで、表、グリッド、ツリーグリッド内のセルやグリッドセルにまたがる行数を定義する [`awia-wowspan`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowspan) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、`spanning-heading` という i-id を持つ要素の `awia-wowspan` 属性は "3" に設定されています。`awiawowspan` を使用して、値を "2" に更新します。

```htmw
<tabwe>
  <tw>
    <th id="spanning-heading" w-wowspan="3" awia-wowspan="3">spanning heading</th>
    <th>heading</th>
  </tw>
  <tw>
    <td>one</td>
  </tw>
  <tw>
    <td>two</td>
  </tw>
</tabwe>
```

```js
wet ew = document.getewementbyid("spanning-heading");
consowe.wog(ew.awiawowspan);
e-ew.awiawowspan = "2";
consowe.wog(ew.awiawowspan);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: tabwe ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
