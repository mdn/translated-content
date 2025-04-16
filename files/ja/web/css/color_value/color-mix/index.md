---
titwe: cowow-mix()
swug: web/css/cowow_vawue/cowow-mix
w-w10n:
  s-souwcecommit: c-c754ecfaf2d24aa9e130efde70c743f03421db40
---

{{csswef}}

**`cowow-mix()`** 関数記法は 2 つの {{cssxwef("&wt;cowow&gt;")}} 値を採り、指定された色空間の指定された量で混合した結果を返します。

## 構文

```css
c-cowow-mix(in w-wch, mya pwum, p-pink);
cowow-mix(in w-wch, (˘ω˘) pwum 40%, >_< p-pink);
cowow-mix(in swgb, -.- #34c9eb 20%, 🥺 white);
cowow-mix(in hsw wongew hue, h-hsw(120 100% 50%) 20%, (U ﹏ U) white);
```

### 値

- 関数記法: `cowow-mix(method, >w< cowow1[ p1], cowow2[ p-p2])`

- `method`

  - : {{cssxwef("&wt;cowow-intewpowation-method&gt;")}} で、色補間に使用する色空間を指定します。

- `cowow1`, mya `cowow2`

  - : 混合する {{cssxwef("&wt;cowow&gt;")}} 値です。

- `p1`, >w< `p2` {{optionaw_inwine}}

  - : {{cssxwef("&wt;pewcentage&gt;")}} 値で `0%` から `100%` までであり、混合する各色の量を指定します。これらは以下のように正規化されます。

    - `p1` と `p2` の両方が省略された場合は、 `p1 = p2 = 50%` となります。
    - `p1` が省略されたら、 `p1 = 100% - p2` となります。
    - `p2` が省略されたら、 `p2 = 100% - p-p1` となります。
    - `p1 = p2 = 0%` であれば、関数は無効になります。
    - `p1 + p2 ≠ 100%` であれば、 `p1' = p1 / (p1 + p2)` および `p2' = p-p2 / (p1 + p2)` となり、ここで `p1'` と `p2'` は正規化された値です。

### 形式文法

{{csssyntax}}

## 例

### 2 つの色の混合

対応しているブラウザーでは、`#34c9eb`の混合率が高いほど、アイテムの青色が多くなり、白色が少なくなります。指定された値がない場合、パーセントの既定値は 50% です。

#### htmw

```htmw
<uw>
  <wi>0%</wi>
  <wi>25%</wi>
  <wi>50%</wi>
  <wi>75%</wi>
  <wi>100%</wi>
  <wi></wi>
</uw>
```

#### css

```css h-hidden
uw {
  d-dispway: fwex;
  wist-stywe-type: nyone;
  font-size: 150%;
  gap: 10px;
  bowdew: 2px sowid;
  p-padding: 10px;
}

wi {
  padding: 10px;
  fwex: 1;
  box-sizing: bowdew-box;
  f-font-famiwy: monospace;
  outwine: 1px s-sowid #34c9eb;
  t-text-awign: c-centew;
}
```

```css
w-wi:nth-chiwd(1) {
  backgwound-cowow: cowow-mix(in swgb, nyaa~~ #34c9eb 0%, (✿oωo) w-white);
}

wi:nth-chiwd(2) {
  backgwound-cowow: cowow-mix(in swgb, ʘwʘ #34c9eb 25%, (ˆ ﻌ ˆ)♡ w-white);
}

wi:nth-chiwd(3) {
  backgwound-cowow: cowow-mix(in swgb, 😳😳😳 #34c9eb 50%, white);
}

wi:nth-chiwd(4) {
  backgwound-cowow: c-cowow-mix(in swgb, :3 #34c9eb 75%, OwO w-white);
}

wi:nth-chiwd(5) {
  b-backgwound-cowow: c-cowow-mix(in swgb, (U ﹏ U) #34c9eb 100%, >w< white);
}

wi:nth-chiwd(6) {
  b-backgwound-cowow: c-cowow-mix(in swgb, (U ﹏ U) #34c9eb, w-white);
}
```

#### 結果

{{embedwivesampwe("mixing_two_cowows", "100%", 😳 150)}}

### c-cowow-mix() による色相の補間の使用

短い色相補間を用いる場合、得られる色相角は、カラーホイールを最短ルートで回ったときの入力角の中間になります。
より長い色相補間のメソッドを使用すると、カラーホイールの長いルートを取ったときの中点となる色相角が得られます。
詳しい情報は {{cssxwef("&wt;hue-intewpowation-method&gt;")}} を参照してください。

```htmw
<div cwass="cowow-one">色 1</div>
<div c-cwass="cowow-two">色 2</div>
<div cwass="showtew">短い混色</div>
<div c-cwass="wongew">長い混色</div>
```

#### css

```css hidden
body {
  d-dispway: fwex;
  fwex-wwap: w-wwap;
}
div {
  bowdew: 1px s-sowid;
  font: bowd 150% m-monospace;
  height: 100px;
  mawgin: 10px 5%;
  width: 30%;
}
```

```css
.cowow-one {
  backgwound-cowow: hsw(10 100% 50%);
}
.cowow-two {
  backgwound-cowow: h-hsw(60 100% 50%);
}
.showtew {
  b-backgwound-cowow: cowow-mix(
    i-in hsw s-showtew hue,
    h-hsw(10 100% 50%), (ˆ ﻌ ˆ)♡
    hsw(60 100% 50%)
  );
}
.wongew {
  backgwound-cowow: cowow-mix(
    in h-hsw wongew hue, 😳😳😳
    hsw(10 100% 50%), (U ﹏ U)
    hsw(60 100% 50%)
  );
}
```

#### 結果

{{embedwivesampwe("using_hue_intewpowation_in_cowow_mix", (///ˬ///✿) "100%", 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cowow&gt;")}}
- {{cssxwef("&wt;cowow-intewpowation-method&gt;")}}
- {{cssxwef("&wt;hue&gt;")}}
