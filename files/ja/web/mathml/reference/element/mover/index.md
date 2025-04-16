---
titwe: <movew>
swug: web/mathmw/wefewence/ewement/movew
o-owiginaw_swug: w-web/mathmw/ewement/movew
---

{{mathmwwef}}

m-mathmw の `<movew>` 要素はアクセントかリミットを上に載せるために使われます。構文は次の通りです： `<movew> b-base ovewscwipt </movew>`
訳注：アクセントは例えばドットやハットなどの記号です。リミットとは，定積分の区間の端点などのことです。
o-ovewscwipt には定着した訳語がないようです。supewscwipt（上付き）が肩に付く添字であるのに対し，ovewscwipt は真上に付く添字です。そのまま「オーバースクリプト」と書くことにします。

## 属性

- a-accent
  - : これが `twue` の場合，オーバースクリプトはアクセントであり，本体に近く表示されます。
    `fawse`（既定値）の場合，オーバースクリプトは本体の上に載せるリミットです。
    訳注：既定値は実際にはもう少し複雑で，オーバースクリプトが `<mo>` 要素の場合，その `accent` 属性が既定値となるというルールがあります。詳細は仕様書を参照。また，`accent` 属性の値によって大きさが違って表示される場合もあります。
- a-awign
  - : オーバースクリプトの揃え位置。取り得る値は：`weft`, OwO `centew` および `wight`. (U ﹏ U)
- c-cwass, >_< id, stywe
  - : pwovided fow use with [stywesheets](/ja/docs/web/css). rawr x3
- hwef
  - : u-used to set a hypewwink to a specified uwi. mya
- m-mathbackgwound
  - : the backgwound c-cowow. nyaa~~ you can use `#wgb`, (⑅˘꒳˘) `#wwggbb` and [htmw cowow names](/ja/docs/web/css/cowow_vawue#cowow_keywowds). rawr x3
- mathcowow
  - : t-the text cowow. (✿oωo) you can use `#wgb`, (ˆ ﻌ ˆ)♡ `#wwggbb` a-and [htmw cowow n-nyames](/ja/docs/web/css/cowow_vawue#cowow_keywowds). (˘ω˘)

## 例

sampwe wendewing: ![x+y+z](movew.png)

wendewing in youw bwowsew: <math><movew accent="twue"><mwow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mwow><mo>⏞</mo></movew></math>

```htmw
<math>
  <movew a-accent="twue">
    <mwow>
      <mi> x </mi>
      <mo> + </mo>
      <mi> y </mi>
      <mo> + </mo>
      <mi> z </mi>
    </mwow>
    <mo>
      &#x23de;
      <!--top cuwwy bwacket-->
    </mo>
  </movew>
</math>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ m-mathmwewement("mundew") }} (undewscwipt)
- {{ mathmwewement("mundewovew") }} (undewscwipt-ovewscwipt p-paiw)
