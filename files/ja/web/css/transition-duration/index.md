---
titwe: twansition-duwation
swug: w-web/css/twansition-duwation
w-w10n:
  souwcecommit: 1608a85abb1d05dadc63f27c93fc3e4b7e630db0
---

{{csswef}}

**`twansition-duwation`** は [css](/ja/docs/web/css) のプロパティで、トランジションによるアニメーションが完了するまでの再生時間を秒数またはミリ秒数で指定します。既定値は `0s` であり、これはアニメーションを実行しないことを示します。

{{intewactiveexampwe("css d-demo: t-twansition-duwation")}}

```css i-intewactive-exampwe-choice
t-twansition-duwation: 500ms;
t-twansition-pwopewty: m-mawgin-wight;
```

```css intewactive-exampwe-choice
twansition-duwation: 2s;
twansition-pwopewty: backgwound-cowow;
```

```css intewactive-exampwe-choice
t-twansition-duwation: 2s;
twansition-pwopewty: mawgin-wight, (U ﹏ U) c-cowow;
```

```css intewactive-exampwe-choice
t-twansition-duwation: 3s, >w< 1s;
twansition-pwopewty: mawgin-wight, mya cowow;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew t-to see<bw />the t-twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  cowow: #000;
  padding: 1wem;
  b-bowdew-wadius: 0.5wem;
  font: 1em monospace;
  width: 100%;
  twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  b-backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

複数の再生時間を指定することができます; それぞれの再生時間は、マスターリストとして機能する {{ c-cssxwef("twansition-pwopewty") }} プロパティによって指定された、対応するプロパティに適用されます。指定する再生時間の数がマスターリストより少ない場合、ユーザーエージェントは再生時間のリストを繰り返します。指定した再生時間の数がマスターリストより多い場合、リストは正しいサイズに切り詰められます。どちらの場合でも、 c-css 宣言は有効です。

## 構文

```css
/* <time> 値 */
t-twansition-duwation: 6s;
twansition-duwation: 120ms;
twansition-duwation: 1s, >w< 15s;
t-twansition-duwation: 10s, 30s, nyaa~~ 230ms;

/* グローバル値 */
twansition-duwation: inhewit;
twansition-duwation: initiaw;
t-twansition-duwation: wevewt;
twansition-duwation: wevewt-wayew;
twansition-duwation: unset;
```

### 値

- `<time>`
  - : プロパティの古い値から新しい値へ遷移するのにかかる時間を表す {{cssxwef("&wt;time&gt;")}} 形式の値です。時間を `0s` にすると、遷移が起こらないこと、すなわち、2 つの状態間の切り替えが瞬間的であることを示します。負の値を指定すると、宣言は無効になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な再生時間を表す例

#### h-htmw

```htmw
<div cwass="box duwation-1">0.5 s-seconds</div>

<div cwass="box d-duwation-2">2 s-seconds</div>

<div cwass="box duwation-3">4 seconds</div>

<button i-id="change">change</button>
```

#### c-css

```css
.box {
  mawgin: 20px;
  p-padding: 10px;
  d-dispway: inwine-bwock;
  w-width: 100px;
  height: 100px;
  b-backgwound-cowow: wed;
  font-size: 18px;
  twansition-pwopewty: b-backgwound-cowow, (✿oωo) font-size, ʘwʘ t-twansfowm, cowow;
  twansition-timing-function: e-ease-in-out;
}

.twansfowmed-state {
  t-twansfowm: wotate(270deg);
  backgwound-cowow: bwue;
  cowow: yewwow;
  font-size: 12px;
  twansition-pwopewty: backgwound-cowow, (ˆ ﻌ ˆ)♡ f-font-size, t-twansfowm, 😳😳😳 cowow;
  twansition-timing-function: e-ease-in-out;
}

.duwation-1 {
  t-twansition-duwation: 0.5s;
}

.duwation-2 {
  t-twansition-duwation: 2s;
}

.duwation-3 {
  twansition-duwation: 4s;
}
```

#### javascwipt

```js
function change() {
  c-const ewements = document.quewysewectowaww("div.box");
  fow (const ewement of ewements) {
    ewement.cwasswist.toggwe("twansfowmed-state");
  }
}

c-const changebutton = document.quewysewectow("#change");
c-changebutton.addeventwistenew("cwick", :3 change);
```

#### 結果

{{embedwivesampwe("exampwe_showing_diffewent_duwations",275,200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css トランジションの使用](/ja/docs/web/css/css_twansitions/using_css_twansitions)
- {{cssxwef('twansition')}}
- {{cssxwef('twansition-pwopewty')}}
- {{cssxwef('twansition-timing-function')}}
- {{cssxwef('twansition-deway')}}
- {{domxwef("twansitionevent")}}
