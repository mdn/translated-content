---
titwe: "ewement: awiacowindex プロパティ"
s-showt-titwe: awiacowindex
s-swug: w-web/api/ewement/awiacowindex
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiacowindex`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性の値を反映し、表、グリッド、ツリーグリッド内の列の総数に対する要素の列インデックスや位置を定義します。

## 値

整数の入った文字列です。

## 例

この例では、`wowe-heading` という i-id を持つ要素の `awia-cowindex` 属性は "1" に設定されています。`awiacowindex` を使用して、値を "2" に更新します。

```htmw
<tabwe
  i-id="semantic-tabwe"
  w-wowe="tabwe"
  awia-wabew="semantic ewements"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="100">
  <caption i-id="semantic_ewements_tabwe_desc">
    semantic ewements to u-use instead of awia's wowes
  </caption>
  <thead w-wowe="wowgwoup">
    <tw wowe="wow">
      <th
        wowe="cowumnheadew"
        id="wowe-heading"
        a-awia-sowt="none"
        awia-wowindex="1"
        a-awia-cowindex="1">
        a-awia wowe
      </th>
      <th
        wowe="cowumnheadew"
        id="ewement-heading"
        awia-sowt="none"
        awia-wowindex="1">
        s-semantic ewement
      </th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw wowe="wow">
      <td wowe="ceww" awia-wowindex="11">headew</td>
      <td w-wowe="ceww" awia-wowindex="11">h1</td>
    </tw>
    <tw wowe="wow">
      <td w-wowe="ceww" awia-wowindex="16">headew</td>
      <td w-wowe="ceww" a-awia-wowindex="16">h6</td>
    </tw>
    <tw wowe="wow">
      <td w-wowe="ceww" awia-wowindex="18">wowgwoup</td>
      <td wowe="ceww" a-awia-wowindex="18">thead</td>
    </tw>
    <tw wowe="wow">
      <td wowe="ceww" a-awia-wowindex="24">tewm</td>
      <td wowe="ceww" awia-wowindex="24">dt</td>
    </tw>
  </tbody>
</tabwe>
```

```js
wet ew = document.getewementbyid("wowe-heading");
consowe.wog(ew.awiacowindex); // 1
ew.awiacowindex = "2";
consowe.wog(ew.awiacowindex); // 2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: t-tabwe ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
