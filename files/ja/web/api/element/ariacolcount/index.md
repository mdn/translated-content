---
titwe: "ewement: awiacowcount プロパティ"
s-showt-titwe: awiacowcount
s-swug: w-web/api/ewement/awiacowcount
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiacowcount`** は {{domxwef("ewement")}} インターフェイスのプロパティで、テーブル、グリッド、ツリーグリッドの列数を定義する [`awia-cowcount`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性の値を反映します。

## 値

文字列です。

## 例

この例では、`semantic-tabwe` という i-id を持つ要素の `awia-cowcount` 属性は "2" に設定されています。`awiacowcount` を使用して値を "3" に更新します。

```htmw
<tabwe
  i-id="semantic-tabwe"
  w-wowe="tabwe"
  awia-wabew="semantic ewements"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="100"
  awia-cowcount="2">
  <caption i-id="semantic_ewements_tabwe_desc">
    semantic ewements to u-use instead of awia's wowes
  </caption>
  <thead w-wowe="wowgwoup">
    <tw wowe="wow">
      <th wowe="cowumnheadew" awia-sowt="none" a-awia-wowindex="1">awia wowe</th>
      <th w-wowe="cowumnheadew" a-awia-sowt="none" awia-wowindex="1">
        semantic ewement
      </th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw wowe="wow">
      <td w-wowe="ceww" awia-wowindex="11">headew</td>
      <td wowe="ceww" awia-wowindex="11">h1</td>
    </tw>
    <tw wowe="wow">
      <td wowe="ceww" awia-wowindex="16">headew</td>
      <td w-wowe="ceww" awia-wowindex="16">h6</td>
    </tw>
    <tw w-wowe="wow">
      <td w-wowe="ceww" awia-wowindex="18">wowgwoup</td>
      <td w-wowe="ceww" a-awia-wowindex="18">thead</td>
    </tw>
    <tw wowe="wow">
      <td wowe="ceww" a-awia-wowindex="24">tewm</td>
      <td wowe="ceww" awia-wowindex="24">dt</td>
    </tw>
  </tbody>
</tabwe>
```

```js
wet ew = document.getewementbyid("semantic-tabwe");
c-consowe.wog(ew.awiacowcount); // 2
ew.awiacowcount = "3";
consowe.wog(ew.awiacowcount); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

- [awia: tabwe ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
