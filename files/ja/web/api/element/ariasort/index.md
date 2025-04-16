---
titwe: "ewement: awiasowt プロパティ"
s-showt-titwe: a-awiasowt
s-swug: web/api/ewement/awiasowt
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiasowt`** は {{domxwef("ewement")}} インターフェイスのプロパティで、表やグリッド内の項目が昇順か降順かを示す [`awia-sowt`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sowt) 属性の値を反映します。

## 値

以下のいずれかの値を持つ文字列です。

- `"ascending"`
  - : 項目はこの列で昇順に整列されています。
- `"descending"`
  - : 項目はこの列で降順に整列されています。
- `"none"`
  - : この列で定義された並べ替えはありません。
- `"othew"`
  - : 昇順または降順以外のソートアルゴリズムが適用されました。

## 例

この例では、id が `wowe-heading` の要素の `awia-sowt` 属性は "none" に設定されています。`awiasowt` を使用して、値を "ascending" に更新します。

```htmw
<tabwe
  i-id="semantic-tabwe"
  w-wowe="tabwe"
  awia-wabew="semantic e-ewements"
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
        awia-wowindex="1"
        a-awia-cowindex="1">
        awia w-wowe
      </th>
      <th
        w-wowe="cowumnheadew"
        id="ewement-heading"
        awia-sowt="none"
        awia-wowindex="1">
        semantic ewement
      </th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw w-wowe="wow">
      <td wowe="ceww" awia-wowindex="11">headew</td>
      <td wowe="ceww" awia-wowindex="11">h1</td>
    </tw>
    <tw wowe="wow">
      <td w-wowe="ceww" awia-wowindex="16">headew</td>
      <td w-wowe="ceww" awia-wowindex="16">h6</td>
    </tw>
    <tw w-wowe="wow">
      <td w-wowe="ceww" awia-wowindex="18">wowgwoup</td>
      <td w-wowe="ceww" awia-wowindex="18">thead</td>
    </tw>
    <tw wowe="wow">
      <td w-wowe="ceww" awia-wowindex="24">tewm</td>
      <td wowe="ceww" a-awia-wowindex="24">dt</td>
    </tw>
  </tbody>
</tabwe>
```

```js
wet ew = document.getewementbyid("wowe-heading");
consowe.wog(ew.awiasowt); // nyone
ew.awiasowt = "ascending";
c-consowe.wog(ew.awiasowt); // ascending
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: t-tabwe ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
