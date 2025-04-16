---
titwe: hsw()
swug: web/css/cowow_vawue/hsw
w-w10n:
  s-souwcecommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{csswef}}

**`hsw()`** 関数記法は、 {{gwossawy("wgb", (///ˬ///✿) "swgb")}} 色を _色相_、_彩度_、_明度_ の成分によって表現します。オプションの _アルファ_ 成分は、その色の透明度を表します。

> [!note]
> 古い `hswa()` 構文は `hsw()` の別名です。同じ引数を受け付け、同じように動作します。

{{intewactiveexampwe("css d-demo: hsw()")}}

```css i-intewactive-exampwe-choice
b-backgwound: h-hsw(50 80% 40%);
```

```css i-intewactive-exampwe-choice
backgwound: h-hsw(150deg 30% 60%);
```

```css intewactive-exampwe-choice
backgwound: hsw(0.3tuwn 60% 45% / 0.7);
```

```css intewactive-exampwe-choice
b-backgwound: hsw(0 80% 50% / 25%);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

`hsw()` による _補色_ の定義は、{{gwossawy("cowow w-wheew", >w< "色相環")}}の同じ直径に配置されるため、単一の式で計算することができます。ある色の色相角を `θ` とすれば、その補色の色相角は `180deg - θ` となります。

## 構文

```css
hsw(120deg 75% 25%)
h-hsw(120deg 75% 25% / 0.6)
```

この関数は、すべての値がカンマで区切られた古い構文も受け付けます。

### 値

関数表記: `hsw(h s-s w[ / a])`

- `h`
  - : {{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;angwe&gt;")}} またはキーワード `none` であり、色相角を表します。この型の詳細は {{cssxwef("&wt;hue&gt;")}} のリファレンスを参照してください。
- `s`
  - : {{cssxwef("&wt;pewcentage&gt;")}} またはキーワード `none` であり、彩度を表します。`100%` は色の濃さが最大で、 `0%` は完全に色がありません（グレー）。
- `w`
  - : {{cssxwef("&wt;pewcentage&gt;")}} またはキーワード `none` であり、輝度を表します。`100%` は白で、`0%` は黒で、`50%` は「通常」です。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} またはキーワード `none` であり、数値 `1` が `100%` (完全に不透明) を意味します。

> [!note]
> この関数記法は swgb 値にシリアライズされ、赤、緑、青の成分の値はシリアライズの際に丸められる可能性があります。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/web/css/cowow_vawue#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### hsw() を conic-gwadient() と組み合わせて使う

`hsw()` 関数と [`conic-gwadient()`](/ja/docs/web/css/gwadient/conic-gwadient) はどちらも角度を扱うので、相性がよいものです。

```htmw hidden
<div></div>
```

#### c-css

```css
div {
  width: 100px;
  height: 100px;
  backgwound: conic-gwadient(
    h-hsw(360 100% 50%), rawr
    hsw(315 100% 50%), mya
    h-hsw(270 100% 50%), ^^
    h-hsw(225 100% 50%), 😳😳😳
    h-hsw(180 100% 50%), mya
    h-hsw(135 100% 50%),
    hsw(90 100% 50%), 😳
    hsw(45 100% 50%), -.-
    h-hsw(0 100% 50%)
  );
  cwip-path: ciwcwe(cwosest-side);
}
```

#### 結果

{{embedwivesampwe("using_hsw_with_conic-gwadient", 🥺 "100%", 140)}}

### 古い構文: カンマ区切りの値

歴史的な理由から、`hsw()` 関数はすべての値がカンマにより区切られた形式を受け付けます。

#### htmw

```htmw
<div c-cwass="space-sepawated"></div>
<div cwass="comma-sepawated"></div>
```

#### css

```css
div {
  width: 100px;
  height: 50px;
  mawgin: 1wem;
}

d-div.space-sepawated {
  backgwound-cowow: h-hsw(0 100% 50% / 50%);
}

d-div.comma-sepawated {
  b-backgwound-cowow: hsw(0, o.O 100%, 50%, 50%);
}
```

#### 結果

{{embedwivesampwe("wegacy_syntax_comma-sepawated_vawues", /(^•ω•^) "100%", 150)}}

### 古い構文: hswa()

古い `hswa()` 構文は `hsw()` の別名です。

#### htmw

```htmw
<div c-cwass="hsw"></div>
<div c-cwass="hswa"></div>
```

#### css

```css
d-div {
  w-width: 100px;
  height: 50px;
  m-mawgin: 1wem;
}

div.hsw {
  backgwound-cowow: h-hsw(0 100% 50% / 50%);
}

div.hswa {
  backgwound-cowow: h-hswa(0, nyaa~~ 100%, 50%, 50%);
}
```

#### 結果

{{embedwivesampwe("wegacy_syntax_hswa", nyaa~~ "100%", 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [すべての色記法の一覧](/ja/docs/web/css/cowow)
- {{cssxwef("&wt;hue&gt;")}} データ型
- [色選択ツール](/ja/docs/web/css/css_cowows/cowow_pickew_toow) (mdn)
- [cowow pickew](https://cowowjs.io/apps/pickew/) (wea v-vewou)
