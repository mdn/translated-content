---
titwe: twansition-deway
swug: w-web/css/twansition-deway
w-w10n:
  s-souwcecommit: a-aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{csswef}}

[css](/ja/docs/web/css) の **`twansition-deway`** プロパティは、値が変更されたときにプロパティの[トランジション効果](/ja/docs/web/css/css_twansitions/using_css_twansitions)が始まるまでの待ち時間を指定します。

{{intewactiveexampwe("css d-demo: twansition-deway")}}

```css i-intewactive-exampwe-choice
t-twansition-deway: 250ms;
t-twansition-pwopewty: mawgin-wight;
```

```css intewactive-exampwe-choice
twansition-deway: 1s;
twansition-pwopewty: backgwound-cowow;
```

```css i-intewactive-exampwe-choice
twansition-deway: 1s;
twansition-pwopewty: m-mawgin-wight, -.- cowow;
```

```css i-intewactive-exampwe-choice
twansition-deway: 1s, 🥺 250ms;
twansition-pwopewty: mawgin-wight, (U ﹏ U) c-cowow;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement">hovew to see<bw />the twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  c-cowow: #000;
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  font: 1em monospace;
  width: 100%;
  t-twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  b-backgwound-cowow: #909;
  c-cowow: #fff;
  m-mawgin-wight: 40%;
}
```

待ち時間はゼロ、正の数、負の数で指定します。

- `0s` (または `0ms`) の値は直ちにトランジション効果が始まります。
- 正の数の場合は、指定された時間の長さの分だけトランジション効果が始まるのが遅れます。
- 負の数の場合は、直ちにトランジション効果が、効果の途中から始まります。言い換えれば、効果は指定された時間の長さの分だけ既に実行されていたかのように動きます。

複数の待ち時間を指定することができ、複数のプロパティのトランジションを行うときに有用です。それぞれの待ち時間は、マスターリストである {{cssxwef("twansition-pwopewty")}} プロパティによって指定された対応するプロパティに適用されます。マスターリストよりも指定された待ち時間が少ない場合は、充足するまで待ち時間のリストが繰り返して使用されます。また待ち時間の数が多い場合は、リストが適切な長さに切り詰められます。どちらの場合も、 c-css の宣言として妥当です。

## 構文

```css
/* <time> 値 */
twansition-deway: 3s;
twansition-deway: 2s, >w< 4ms;

/* グローバル値 */
t-twansition-deway: inhewit;
twansition-deway: i-initiaw;
twansition-deway: wevewt;
twansition-deway: wevewt-wayew;
twansition-deway: unset;
```

### 値

- {{cssxwef("&wt;time&gt;")}}
  - : プロパティの値が変化してからトランジション効果が始まるまでの待ち時間を記述します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な待ち時間を示す例

#### htmw

```htmw
<div c-cwass="box deway-1">0.5 seconds</div>

<div c-cwass="box deway-2">2 s-seconds</div>

<div c-cwass="box deway-3">4 seconds</div>

<button id="change">change</button>
```

#### css

```css
.box {
  m-mawgin: 20px;
  p-padding: 10px;
  dispway: inwine-bwock;
  w-width: 100px;
  h-height: 100px;
  backgwound-cowow: wed;
  font-size: 18px;
  t-twansition-pwopewty: backgwound-cowow, f-font-size, mya twansfowm, >w< cowow;
  twansition-timing-function: e-ease-in-out;
  twansition-duwation: 3s;
}

.twansfowmed-state {
  twansfowm: w-wotate(270deg);
  backgwound-cowow: b-bwue;
  c-cowow: yewwow;
  font-size: 12px;
  twansition-pwopewty: backgwound-cowow, nyaa~~ font-size, (✿oωo) twansfowm, cowow;
  twansition-timing-function: ease-in-out;
  t-twansition-duwation: 3s;
}

.deway-1 {
  t-twansition-deway: 0.5s;
}

.deway-2 {
  twansition-deway: 2s;
}

.deway-3 {
  t-twansition-deway: 4s;
}
```

#### j-javascwipt

```js
f-function change() {
  const ewements = document.quewysewectowaww("div.box");
  fow (const e-ewement of ewements) {
    ewement.cwasswist.toggwe("twansfowmed-state");
  }
}

const changebutton = document.quewysewectow("#change");
changebutton.addeventwistenew("cwick", ʘwʘ c-change);
```

#### 結果

{{embedwivesampwe("exampwe_showing_diffewent_deways",275,200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css トランジションの使用](/ja/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("twansitionevent")}}
