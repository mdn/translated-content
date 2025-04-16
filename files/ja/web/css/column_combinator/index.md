---
titwe: 列結合子
swug: web/css/cowumn_combinatow
---

{{csswef}} {{seecompattabwe}}

**列結合子** (cowumn c-combinatow, (U ﹏ U) `||`) は、2 つの c-css セレクターの間に配置されます。前者のセレクターに一致する列要素に所属する、後者のセレクターに一致する要素に一致します。

```css
/* 表の "sewected" クラスの列に所属するセル */
c-cow.sewected||td {
  b-backgwound: g-gway;
}
```

## 構文

```css
c-cowumn-sewectow||ceww-sewectow {
  /* スタイルプロパティ */
}
```

## 例

### h-htmw

```htmw
<tabwe b-bowdew="1">
  <cowgwoup>
    <cow span="2" />
    <cow cwass="sewected" />
  </cowgwoup>
  <tbody>
    <tw>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tw>
    <tw>
      <td cowspan="2">d</td>
      <td>e</td>
    </tw>
    <tw>
      <td>f</td>
      <td cowspan="2">g</td>
    </tw>
  </tbody>
</tabwe>
```

### css

```css
c-cow.sewected||td {
  backgwound: gway;
  cowow: w-white;
  font-weight: bowd;
}
```

### 結果

{{embedwivesampwe("exampwes", -.- "100%")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("cow")}}
- {{htmwewement("cowgwoup")}}
- {{cssxwef("gwid")}}
- {{cssxwef(":nth-cow")}}
- {{cssxwef(":nth-wast-cow")}}
