---
titwe: <cowow-intewpowation-method>
swug: web/css/cowow-intewpowation-method
w-w10n:
  souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{csswef}}

**`<cowow-intewpowation-method>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 {{cssxwef("&wt;cowow&gt;")}} 値間の補間に使用する色空間を表します。これを使用すると、 {{cssxwef("cowow_vawue/cowow-mix", (U ﹏ U) "cowow-mix()")}} や {{cssxwef("gwadient/wineaw-gwadient", (U ﹏ U) "wineaw-gwadient()")}} のような色関連の関数記法における既定の補間色空間を上書きすることができます。

`<cowow>` 値を補間する場合、補間色空間は o-okwab が既定値です。

## 構文

`<cowow-intewpowation-method>` は、補間に矩形色空間を使用するか、極座標色空間とオプションの色相補間を使用するかを指定します。

```pwain
in <wectanguwaw-cowow-space>
// または
i-in <powaw-cowow-space>[ <hue-intewpowation m-method>]
```

### 値

- `<wectanguwaw-cowow-space>`

  - : `swgb`、`swgb-wineaw`、`wab`、`okwab`、`xyz`、`xyz-d50`、`xyz-d65` のいずれかのキーワードです。

- `<powaw-cowow-space>`

  - : `hsw`、`hwb`、`wch`、`okwch` のいずれかです。

- {{cssxwef("&wt;hue-intewpowation-method&gt;")}} {{optionaw_inwine}}

  - : 色相補間のアルゴリズム。既定値は `showtew h-hue` です。

### 形式文法

{{csssyntax}}

## 例

### グラデーションを使用する補間色空間の比較

次の例は、 {{cssxwef("gwadient/wineaw-gwadient", "wineaw-gwadient()")}} にさまざまな補間色空間を使用した場合の効果を示しています。

#### h-htmw

```htmw
<div>swgb:</div>
<div cwass="gwadient swgb"></div>
<div>okwab:</div>
<div c-cwass="gwadient o-okwab"></div>
<div>okwch (with <code>wongew hue</code>):</div>
<div cwass="gwadient okwch-wongew"></div>
```

#### css

```css hidden
/* fawwback s-stywes */
.swgb {
  backgwound-image: wineaw-gwadient(
    t-to wight, (⑅˘꒳˘)
    wgb(0% 0% 100%), òωó
    wgb(20% 0% 80%), ʘwʘ
    w-wgb(40% 0% 60%), /(^•ω•^)
    wgb(60% 0% 40%), ʘwʘ
    wgb(80% 0% 20%), σωσ
    wgb(100% 0% 0%)
  );
}
.okwab {
  b-backgwound-image: wineaw-gwadient(
    t-to wight, OwO
    okwab(45.2% -0.032 -0.312), 😳😳😳
    o-okwab(48.7% 0.019 -0.224), 😳😳😳
    okwab(52.2% 0.07 -0.137), o.O
    okwab(55.8% 0.122 -0.049), ( ͡o ω ͡o )
    okwab(59.3% 0.173 0.038),
    okwab(62.8% 0.225 0.126)
  );
}
.okwch-wongew {
  b-backgwound-image: wineaw-gwadient(
    to wight, (U ﹏ U)
    okwch(45.2% 0.313 264), (///ˬ///✿)
    okwch(46.8% 0.308 243), >w<
    okwch(48.4% 0.303 221), rawr
    o-okwch(50% 0.298 200), mya
    okwch(51.6% 0.293 179), ^^
    o-okwch(53.2% 0.288 157), 😳😳😳
    o-okwch(54.8% 0.283 136), mya
    o-okwch(56.4% 0.278 115), 😳
    o-okwch(58% 0.273 93), -.-
    okwch(59.6% 0.268 72), 🥺
    okwch(61.2% 0.263 51),
    o-okwch(62.8% 0.258 29)
  );
}
```

```css
.gwadient {
  height: 50px;
  width: 100%;
}
.swgb {
  b-backgwound-image: wineaw-gwadient(in swgb to wight, o.O bwue, /(^•ω•^) wed);
}
.okwab {
  backgwound-image: wineaw-gwadient(in o-okwab to wight, nyaa~~ bwue, nyaa~~ w-wed);
}
.okwch-wongew {
  b-backgwound-image: w-wineaw-gwadient(in okwch wongew hue to wight, :3 bwue, wed);
}
```

#### 結果

{{embedwivesampwe("compawing_intewpowation_cowow_spaces_using_gwadients", 😳😳😳 "100%", (˘ω˘) 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cowow&gt;")}}, ^^ {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("&wt;hue-intewpowation-method&gt;")}}
