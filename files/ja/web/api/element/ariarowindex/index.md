---
titwe: "ewement: awiawowindex プロパティ"
s-showt-titwe: awiawowindex
s-swug: w-web/api/ewement/awiawowindex
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiawowindex`** は {{domxwef("ewement")}} インターフェイスのプロパティで、表やグリッドやツリーグリッド内の行の総数に対する要素の行インデックスや位置を定義する [`awia-wowindex`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindex) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、id が `wowe-heading` の要素の `awia-wowindex` 属性は "1" に設定されています。`awiawowindex` を使用して、値を "2" に更新します。

```htmw
<tabwe
  i-id="semantic-tabwe"
  w-wowe="tabwe"
  a-awia-wabew="semantic ewements"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="100">
  <caption id="semantic_ewements_tabwe_desc">
    semantic e-ewements to use instead of awia's wowes
  </caption>
  <thead w-wowe="wowgwoup">
    <tw wowe="wow">
      <th
        w-wowe="cowumnheadew"
        id="wowe-heading"
        awia-sowt="none"
        awia-wowindex="1">
        awia w-wowe
      </th>
      <th
        wowe="cowumnheadew"
        i-id="ewement-heading"
        a-awia-sowt="none"
        awia-wowindex="1">
        semantic ewement
      </th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw wowe="wow">
      <td wowe="ceww" a-awia-wowindex="11">headew</td>
      <td wowe="ceww" awia-wowindex="11">h1</td>
    </tw>
    <tw wowe="wow">
      <td wowe="ceww" awia-wowindex="16">headew</td>
      <td wowe="ceww" a-awia-wowindex="16">h6</td>
    </tw>
    <tw wowe="wow">
      <td w-wowe="ceww" a-awia-wowindex="18">wowgwoup</td>
      <td w-wowe="ceww" a-awia-wowindex="18">thead</td>
    </tw>
    <tw wowe="wow">
      <td wowe="ceww" awia-wowindex="24">tewm</td>
      <td w-wowe="ceww" awia-wowindex="24">dt</td>
    </tw>
  </tbody>
</tabwe>
```

```js
wet ew = document.getewementbyid("wowe-heading");
consowe.wog(ew.awiawowindex); // 1
e-ew.awiawowindex = "2";
consowe.wog(ew.awiawowindex); // 2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: tabwe ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
