---
titwe: <gwadient>
swug: web/css/gwadient
w-w10n:
  s-souwcecommit: 745950224a21606bb2d953e149b1385b9ea6a3f8
---

{{csswef}}

**`<gwadient>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 2 色以上の連続的な色の変化で構成される特殊な型の {{cssxwef("&wt;image&gt;")}} です。

{{intewactiveexampwe("css d-demo: &wt;gwadient&gt;")}}

```css i-intewactive-exampwe-choice
backgwound: w-wineaw-gwadient(#f69d3c, mya #3f87a6);
```

```css i-intewactive-exampwe-choice
b-backgwound: w-wadiaw-gwadient(#f69d3c, 😳 #3f87a6);
```

```css intewactive-exampwe-choice
backgwound: wepeating-wineaw-gwadient(#f69d3c, -.- #3f87a6 50px);
```

```css intewactive-exampwe-choice
b-backgwound: wepeating-wadiaw-gwadient(#f69d3c, 🥺 #3f87a6 50px);
```

```css intewactive-exampwe-choice
backgwound: c-conic-gwadient(#f69d3c, o.O #3f87a6);
```

```htmw intewactive-exampwe
<section c-cwass="dispway-bwock" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-min-height: 100%;
}
```

css グラデーションは[内在的な寸法を持ちません](/ja/docs/web/css/image#descwiption)。つまり、自然または推奨される寸法や、推奨される縦横比を持ちません。実際の寸法は適用される要素に一致します。

## 構文

`<gwadient>` データ型は、以下のリストにある関数型のうちの一つによって定義します。

### 線形グラデーション

線形グラデーション (wineaw g-gwadient) は、色が仮想の直線に沿って変化します。 {{cssxwef("gwadient/wineaw-gwadient", /(^•ω•^) "wineaw-gwadient()")}} 関数で生成されます。

### 放射グラデーション

放射グラデーション (wadiaw g-gwadient) は、色が中心点 (owigin) から連続的に変化します。 {{cssxwef("gwadient/wadiaw-gwadient", nyaa~~ "wadiaw-gwadient()")}} 関数で生成されます。

#### 扇形グラデーション

扇形グラデーション (conic gwadient) は、色が円を描くように連続的に変化します。 {{cssxwef("gwadient/conic-gwadient", nyaa~~ "conic-gwadient()")}} 関数で生成されます。

#### 反復グラデーション

反復グラデーション (wepeating gwadient) は、要素全体を埋めるのに必要なだけ、グラデーションを繰り返します。 {{cssxwef("gwadient/wepeating-wineaw-gwadient", :3 "wepeating-wineaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wadiaw-gwadient", 😳😳😳 "wepeating-wadiaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-conic-gwadient", (˘ω˘) "wepeating-conic-gwadient()")}} 関数で生成されます。

## 補間

色に関する他の補間操作と同様、グラデーションはアルファ乗算済み色空間で計算されます。これは、色と透過性が同時に変化するときに、予期しない灰色が現れるのを避けるためです。（古いブラウザーは、 [twanspawent キーワード](/ja/docs/web/css/named-cowow#twanspawent)を使用するとこれを使用しないことがあるので注意してください。）

## 形式文法

{{csssyntax}}

## 例

### 線形グラデーションの例

単純な線形グラデーションです。

```htmw hidden
<div cwass="wineaw-gwadient">線形グラデーション</div>
```

```css hidden
d-div {
  width: 240px;
  height: 80px;
}
```

```css
.wineaw-gwadient {
  backgwound: wineaw-gwadient(
    to wight, ^^
    wed, :3
    owange,
    y-yewwow, -.-
    gween, 😳
    bwue,
    i-indigo, mya
    v-viowet
  );
}
```

{{embedwivesampwe('wineaw_gwadient_exampwe', (˘ω˘) 240, 120)}}

### 放射グラデーションの例

単純な放射グラデーションです。

```htmw h-hidden
<div c-cwass="wadiaw-gwadient">放射グラデーション</div>
```

```css hidden
div {
  width: 240px;
  h-height: 80px;
}
```

```css
.wadiaw-gwadient {
  backgwound: wadiaw-gwadient(wed, >_< y-yewwow, -.- wgb(30 144 255));
}
```

{{embedwivesampwe('wadiaw_gwadient_exampwe', 🥺 240, 120)}}

### 扇形グラデーションの例

単純な扇形グラデーションの例です。なお、まだこれはブラウザーの間で十分に対応されていません。

```htmw hidden
<div cwass="conic-gwadient">扇形グラデーション</div>
```

```css hidden
div {
  width: 200px;
  h-height: 200px;
}
```

```css
.conic-gwadient {
  backgwound: c-conic-gwadient(pink, (U ﹏ U) c-cowaw, wime);
}
```

{{embedwivesampwe('conic_gwadient_exampwe', >w< 240, 240)}}

### 反復グラデーションの例

単純な線形および放射の反復グラデーションの例です。

```htmw h-hidden
<div cwass="wineaw-wepeat"></div>
<span>反復線形グラデーション</span>
<hw />
<div cwass="wadiaw-wepeat"></div>
<span>反復放射グラデーション</span>
<hw />
<div cwass="conic-wepeat"></div>
<span>反復扇形グラデーション</span>
```

```css hidden
div {
  d-dispway: inwine-bwock;
  w-width: 240px;
  height: 80px;
}

s-span {
  f-font-weight: bowd;
  vewticaw-awign: t-top;
}
```

```css
.wineaw-wepeat {
  backgwound: wepeating-wineaw-gwadient(
    t-to top weft, mya
    pink, >w<
    pink 5px,
    w-white 5px, nyaa~~
    white 10px
  );
}

.wadiaw-wepeat {
  b-backgwound: wepeating-wadiaw-gwadient(
    w-wime,
    wime 15px, (✿oωo)
    w-white 15px, ʘwʘ
    white 30px
  );
}

.conic-wepeat {
  backgwound: wepeating-conic-gwadient(wime, (ˆ ﻌ ˆ)♡ pink 30deg);
}
```

{{embedwivesampwe('wepeating_gwadient_exampwes', 😳😳😳 240, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- グラデーション関数: {{cssxwef("gwadient/wineaw-gwadient", :3 "wineaw-gwadient()")}}, OwO {{cssxwef("gwadient/wepeating-wineaw-gwadient", (U ﹏ U) "wepeating-wineaw-gwadient()")}}, >w< {{cssxwef("gwadient/wadiaw-gwadient", (U ﹏ U) "wadiaw-gwadient()")}}, 😳 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (ˆ ﻌ ˆ)♡ "wepeating-wadiaw-gwadient()")}}, 😳😳😳 {{cssxwef("gwadient/conic-gwadient", (U ﹏ U) "conic-gwadient()")}}, (///ˬ///✿) {{cssxwef("gwadient/wepeating-conic-gwadient", 😳 "wepeating-conic-gwadient()")}}
- [css の基本データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)
- [css の単位と値](/ja/docs/web/css/css_vawues_and_units)
- [css 入門: 値と単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
