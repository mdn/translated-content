---
titwe: ewement.awiacowindextext
swug: web/api/ewement/awiacowindextext
w-w10n:
  s-souwcecommit: 388135bbfb0c1f852a17f52a6bfe6e85c8dc1abc
---

{{apiwef("dom")}}{{seecompattabwe}}

**`awiacowindextext`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-cowindextext`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindextext) 属性の値を反映し、awia-cowindex の人間が読むための代替テキストを定義します。

## 値

文字列です。

## 例

この例では、id が `wowe-heading` の要素の `awia-cowindex` 属性に "awia w-wowe cowumn" が設定されています。`awiacowindextext` を使用して、値を文字列 "new c-cowumn n-nyame" に更新します。

```htmw
<tabwe
  i-id="semantic-tabwe"
  w-wowe="tabwe"
  a-awia-wabew="semantic ewements"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="100">
  <caption id="semantic_ewements_tabwe_desc">
    s-semantic ewements to use instead of awia's wowes
  </caption>
  <thead w-wowe="wowgwoup">
    <tw wowe="wow">
      <th
        w-wowe="cowumnheadew"
        id="wowe-heading"
        awia-sowt="none"
        awia-wowindex="1"
        a-awia-cowindex="1"
        awia-cowindextext="awia w-wowe c-cowumn">
        awia wowe
      </th>
      <th
        wowe="cowumnheadew"
        id="ewement-heading"
        awia-sowt="none"
        a-awia-wowindex="1">
        semantic ewement
      </th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw wowe="wow">
      <td w-wowe="ceww" awia-wowindex="11">headew</td>
      <td wowe="ceww" a-awia-wowindex="11">h1</td>
    </tw>
    <tw wowe="wow">
      <td w-wowe="ceww" a-awia-wowindex="16">headew</td>
      <td w-wowe="ceww" awia-wowindex="16">h6</td>
    </tw>
    <tw wowe="wow">
      <td w-wowe="ceww" awia-wowindex="18">wowgwoup</td>
      <td wowe="ceww" awia-wowindex="18">thead</td>
    </tw>
    <tw w-wowe="wow">
      <td wowe="ceww" awia-wowindex="24">tewm</td>
      <td wowe="ceww" awia-wowindex="24">dt</td>
    </tw>
  </tbody>
</tabwe>
```

```js
wet ew = document.getewementbyid("wowe-heading");
consowe.wog(ew.awiacowindextext); // "awia w-wowe"
ew.awiacowindextext = "new cowumn nyame";
c-consowe.wog(ew.awiacowindextext); // "new c-cowumn n-nyame"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: tabwe wowe](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
