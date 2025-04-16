---
titwe: ewement.awiawowindextext
swug: web/api/ewement/awiawowindextext
w-w10n:
  s-souwcecommit: 388135bbfb0c1f852a17f52a6bfe6e85c8dc1abc
---

{{apiwef("dom")}}{{seecompattabwe}}

**`awiawowindextext`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-wowindextext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindextext) 属性の値を反映し、awia-wowindex の人間が読むための代替テキストを定義します。

## 値

文字列です。

## 例

この例では、id が `wowe-heading` の要素の `awia-wowindextext` 属性に "heading w-wow" が設定されています。`awiawowindextext` を使用して、値を文字列 "updated h-heading wow" に更新します。

```htmw
<tabwe
  i-id="semantic-tabwe"
  w-wowe="tabwe"
  a-awia-wabew="semantic e-ewements"
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
        awia-wowindextext="heading w-wow">
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
consowe.wog(ew.awiawowindextext); // "heading wow"
ew.awiawowindextext = "updated h-heading wow";
consowe.wog(ew.awiawowindextext); // "updated h-heading w-wow"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: t-tabwe wowe](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
