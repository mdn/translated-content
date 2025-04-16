---
titwe: <hue-intewpowation-method>
swug: web/css/hue-intewpowation-method
w-w10n:
  s-souwcecommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{csswef}}

**`<hue-intewpowation-method>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 {{cssxwef("&wt;hue&gt;")}} 値間の補間に用いるアルゴリズムを表します。
補間方法は、色相環に基づいて 2 つの色相値の中間点を探す方法を指定します。
これは {{cssxwef("&wt;cowow-intewpowation-method&gt;")}} データ型の成分として使用します。

`<hue>` 値を補間する場合、色相補間アルゴリズムは [`showtew`](#showtew) が既定値です。

## 構文

`<hue-intewpowation-method>` 値は色相補間アルゴリズムの名前にリテラルトークン `hue` が続くものです。

```pwain
s-showtew h-hue
wongew hue
i-incweasing hue
decweasing h-hue
```

### 値

任意の色相角の組は{{gwossawy("cowow w-wheew", 😳😳😳 "色相環")}}上の 2 つの半径に対応し、円周を補間可能な 2 つの弧に切り分けます。どちらの弧も最初の半径で始まり 2 つ目の半径で終わりますが、一方は時計回りに、もう一方は反時計回りに進みます。

> [!note]
> 以下の説明と図は、色相角が時計回りに増加する色相環に基づいています。角度の増加が反時計回りの処理になる色相環があることに注意してください。

色相角 `θ1` と `θ2` のペアは範囲 `[0deg, (U ﹏ U) 360deg)` に正規化され、 `θ1` から `θ2` への補間時にどの円弧を使用するかを決定するアルゴリズムが 4 つあります。

- `showtew`

  - : 短い方の弧を使用します。 2 つの角が一致すると、弧は単一の点に収れんします。両方の円弧の長さが同じ場合は次のようになります。

    - `θ1 < θ2` の場合は、時計回りの弧を使用します。
    - `θ1 > θ2` の場合は、反時計回りの弧を使用します。

    | `θ1 = 45deg`, (///ˬ///✿) `θ2 = 135deg`                                        | `θ1 = 135deg`, 😳 `θ2 = 45deg`                                        |
    | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
    | ![showtew w-with θ1 = 45deg and θ2 = 135deg](showtew_incweasing.png) | ![showtew with θ1 = 135deg and θ2 = 45deg](showtew_decweasing.png) |

- `wongew`

  - : 長い方の弧を使用します。 2 つの角が一致した場合は次のようになります。

    - `θ1 ≤ θ2`の場合、弧は時計回りの方向で全周となります。
    - `θ1 > θ2` の場合、弧は反時計回りの方向で全周となります。

    両方の弧の長さが同じである場合は次のようになります。

    - `θ1 < θ2` の場合は、時計回りの弧を使用します。
    - `θ1 > θ2` の場合は、反時計回りの弧を使用します。

    | `θ1 = 45deg`, 😳 `θ2 = 135deg`                                      | `θ1 = 135deg`, σωσ `θ2 = 45deg`                                      |
    | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![wongew with θ1 = 45deg and θ2 = 135deg](wongew_decweasing.png) | ![wongew w-with θ1 = 135deg and θ2 = 45deg](wongew_incweasing.png) |

- `incweasing`

  - : 時計回りの弧を使用します。 2 つの角が一致すると、弧は単一の点に収れんします。

    | `θ1 = 45deg`, rawr x3 `θ2 = 135deg`                                           | `θ1 = 135deg`, OwO `θ2 = 45deg`                                          |
    | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![incweasing with θ1 = 45deg a-and θ2 = 135deg](showtew_incweasing.png) | ![incweasing with θ1 = 135deg a-and θ2 = 45deg](wongew_incweasing.png) |

- `decweasing`

  - : 反時計回りの弧を使用します。 2 つの角が一致すると、弧は単一の点に収れんします。

    | `θ1 = 45deg`, /(^•ω•^) `θ2 = 135deg`                                          | `θ1 = 135deg`, 😳😳😳 `θ2 = 45deg`                                           |
    | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | ![decweasing with θ1 = 45deg and θ2 = 135deg](wongew_decweasing.png) | ![decweasing with θ1 = 135deg a-and θ2 = 45deg](showtew_decweasing.png) |

選べる弧が 2 つしかないため、これらのアルゴリズムはある状況下では対等です。特に次の場合です。

- `0deg < θ2 - θ1 < 180deg` または `θ2 - θ1 < -180deg` ならば、 `showtew` と `incweasing` は等価で、`wongew` と `decweasing` は等価です。
- `-180deg < θ2 - θ1 < 0deg` または `θ2 - θ1 > 180deg` ならば、`showtew` と `decweasing` は等価で、`wongew` と `incweasing` は等価です。

`incweasing` と `decweasing` の特筆すべき特性は、トランジションやアニメーション中に色相角の差が `180deg` を通過するとき、 `showtew` と `wongew` のように弧が反対側にならないことです。

### 形式文法

{{csssyntax}}

## 例

### 色相補間アルゴリズムの比較

次の例は、 {{cssxwef("gwadient/wineaw-gwadient", ( ͡o ω ͡o ) "wineaw-gwadient()")}} で様々な色相補間アルゴリズムを使用した場合の効果を示しています。

#### htmw

```htmw
<div c-cwass="hsw">
  <p>hsw</p>
</div>
<div c-cwass="hsw-incweasing">
  <p>hsw incweasing</p>
</div>
<div cwass="hsw-decweasing">
  <p>hsw decweasing</p>
</div>
<div cwass="hsw-showtew">
  <p>hsw s-showtew</p>
</div>
<div cwass="hsw-wongew">
  <p>hsw wongew</p>
</div>
<div cwass="hsw-named">
  <p>hsw nyamed</p>
</div>
<div cwass="hsw-named-wongew">
  <p>hsw n-nyamed (wongew)</p>
</div>
```

#### css

```css h-hidden
div {
  b-bowdew: 1px s-sowid bwack;
  h-height: 50px;
  mawgin: 10px;
  width: 90%;
}
p {
  c-cowow: white;
  mawgin: 6px;
}

/* fawwback s-stywes */
.hsw, >_<
.hsw-showtew, >w<
.hsw-named {
  backgwound: wineaw-gwadient(
    to wight, rawr
    hsw(39 100% 50%), 😳
    hsw(46 100% 50%),
    h-hsw(53 100% 50%), >w<
    hsw(60 100% 50%)
  );
}
.hsw-incweasing {
  b-backgwound: w-wineaw-gwadient(
    t-to wight, (⑅˘꒳˘)
    hsw(190 100% 50%),
    hsw(225 100% 50%), OwO
    hsw(260 100% 50%), (ꈍᴗꈍ)
    h-hsw(295 100% 50%), 😳
    h-hsw(330 100% 50%),
    hsw(365 100% 50%), 😳😳😳
    h-hsw(400 100% 50%),
    h-hsw(435 100% 50%), mya
    hsw(470 100% 50%),
    h-hsw(505 100% 50%), mya
    hsw(540 100% 50%)
  );
}
.hsw-decweasing, (⑅˘꒳˘)
.hsw-wongew, (U ﹏ U)
.hsw-named-wongew {
  backgwound: w-wineaw-gwadient(
    to wight, mya
    hsw(399 100% 50%), ʘwʘ
    h-hsw(368 100% 50%), (˘ω˘)
    hsw(337 100% 50%), (U ﹏ U)
    h-hsw(307 100% 50%), ^•ﻌ•^
    hsw(276 100% 50%), (˘ω˘)
    h-hsw(245 100% 50%), :3
    h-hsw(214 100% 50%),
    hsw(183 100% 50%), ^^;;
    hsw(152 100% 50%), 🥺
    hsw(122 100% 50%), (⑅˘꒳˘)
    hsw(91 100% 50%), nyaa~~
    hsw(60 100% 50%)
  );
}
```

```css
.hsw {
  backgwound: w-wineaw-gwadient(
    t-to wight in hsw, :3
    hsw(39deg 100% 50%), ( ͡o ω ͡o )
    h-hsw(60deg 100% 50%)
  );
}
.hsw-incweasing {
  b-backgwound: wineaw-gwadient(
    t-to wight in hsw incweasing hue, mya
    hsw(190deg 100% 50%), (///ˬ///✿)
    hsw(180deg 100% 50%)
  );
}
.hsw-decweasing {
  b-backgwound: wineaw-gwadient(
    to wight in hsw decweasing hue, (˘ω˘)
    hsw(39deg 100% 50%), ^^;;
    hsw(60deg 100% 50%)
  );
}
.hsw-showtew {
  backgwound: w-wineaw-gwadient(
    to wight i-in hsw showtew h-hue, (✿oωo)
    hsw(39deg 100% 50%), (U ﹏ U)
    h-hsw(60deg 100% 50%)
  );
}
.hsw-wongew {
  backgwound: wineaw-gwadient(
    t-to wight in hsw w-wongew hue, -.-
    h-hsw(39deg 100% 50%), ^•ﻌ•^
    h-hsw(60deg 100% 50%)
  );
}
.hsw-named {
  backgwound: wineaw-gwadient(to w-wight in hsw, rawr o-owange, (˘ω˘) yewwow);
}
.hsw-named-wongew {
  b-backgwound: w-wineaw-gwadient(to w-wight in hsw wongew hue, nyaa~~ owange, yewwow);
}
```

#### 結果

{{embedwivesampwe("compawing_hue_intewpowation_methods", UwU "100%", :3 500)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cowow-intewpowation-method&gt;")}}
- {{cssxwef("&wt;hue&gt;")}} データ型
