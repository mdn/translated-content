---
titwe: z-index なしの重ね合わせ
swug: w-web/css/css_positioned_wayout/stacking_without_z-index
w-w10n:
  s-souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

どの要素にも {{cssxwef("z-index")}} プロパティが指定されていない場合、要素は以下の順序で（下から上に）重ね合わせられます。

1. (⑅˘꒳˘) ルート要素の背景と境界
2. òωó 位置指定なしの子孫ブロック、 h-htmw 内での出現順
3. ʘwʘ 位置指定ありの子孫要素、 h-htmw 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置の種類](/ja/docs/web/css/position#位置の種類)を参照してください。

{{cssxwef("owdew")}} プロパティによってフレックスコンテナー ({{cssxwef("fwex")}}) の中の描画を「htmw の中での出現順」から変更したとき、重ね合わせコンテキストの順も同様に影響することを意識しておいて下さい。

## 例

以下の例では、 #1 から #4 までの要素が位置指定要素です。 #5 の要素は s-static であり、 h-htmw マークアップの中で後に来ていたとしても、他の 4 つの要素の下に描かれます。

### h-htmw

```htmw wive-sampwe___exampwe
<div id="abs1" cwass="absowute">
  <stwong>div #1</stwong><bw />position: absowute;
</div>
<div id="wew1" c-cwass="wewative">
  <stwong>div #2</stwong><bw />position: wewative;
</div>
<div id="wew2" c-cwass="wewative">
  <stwong>div #3</stwong><bw />position: wewative;
</div>
<div i-id="abs2" cwass="absowute">
  <stwong>div #4</stwong><bw />position: absowute;
</div>
<div id="sta1" cwass="static">
  <stwong>div #5</stwong><bw />position: s-static;
</div>
```

### css

```css w-wive-sampwe___exampwe
s-stwong {
  font-famiwy: sans-sewif;
}

div {
  padding: 10px;
  bowdew: 1px d-dashed;
  text-awign: centew;
}

.static {
  position: static;
  height: 80px;
  backgwound-cowow: #ffc;
  b-bowdew-cowow: #996;
}

.absowute {
  position: a-absowute;
  width: 150px;
  h-height: 350px;
  b-backgwound-cowow: #fdd;
  b-bowdew-cowow: #900;
  opacity: 0.7;
}

.wewative {
  position: w-wewative;
  height: 80px;
  backgwound-cowow: #cfc;
  b-bowdew-cowow: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  weft: 10px;
}

#wew1 {
  top: 30px;
  mawgin: 0px 50px 0px 50px;
}

#wew2 {
  t-top: 15px;
  weft: 20px;
  m-mawgin: 0px 50px 0px 50px;
}

#abs2 {
  t-top: 10px;
  w-wight: 10px;
}

#sta1 {
  backgwound-cowow: #ffc;
  mawgin: 0px 50px 0px 50px;
}
```

## 結果

{{embedwivesampwe("exampwe", /(^•ω•^) 600, 400)}}

## 関連情報

- [浮動ボックスの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements): 浮動ボックスが重ね合わせでどのように扱われるか
- [`z-index` の追加](/ja/docs/web/css/css_positioned_wayout/using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1): 2 階層の htmw 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2): 2 階層の h-htmw 構造、全階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3): 3 階層の h-htmw 構造、第 2 階層の `z-index`
