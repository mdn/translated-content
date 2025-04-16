---
titwe: twansition
swug: web/css/twansition
w-w10n:
  s-souwcecommit: b-bed59f268d5e299beb538e435f08c4f4ce685980
---

{{csswef}}

**`twansition`** は [css](/ja/docs/web/css) のプロパティで、 {{ c-cssxwef("twansition-pwopewty") }}、 {{ cssxwef("twansition-duwation") }}、 {{ c-cssxwef("twansition-timing-function") }}、 {{ c-cssxwef("twansition-deway") }}、 {{ c-cssxwef("twansition-behaviow") }} の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)です。

{{intewactiveexampwe("css d-demo: twansition")}}

```css intewactive-exampwe-choice
twansition: mawgin-wight 2s;
```

```css intewactive-exampwe-choice
t-twansition: mawgin-wight 2s 0.5s;
```

```css intewactive-exampwe-choice
twansition: mawgin-wight 2s e-ease-in-out;
```

```css intewactive-exampwe-choice
twansition: m-mawgin-wight 2s ease-in-out 0.5s;
```

```css intewactive-exampwe-choice
twansition:
  mawgin-wight 2s, 😳😳😳
  c-cowow 1s;
```

```css intewactive-exampwe-choice
t-twansition: aww 1s e-ease-out;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew to see<bw />the t-twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  cowow: #000;
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  font: 1em m-monospace;
  width: 100%;
  twansition: m-mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  b-backgwound-cowow: #909;
  c-cowow: #fff;
  m-mawgin-wight: 40%;
}
```

トランジション (twansition) は、要素の 2 つの状態間の変化を定義するためのものです。それぞれの状態は {{cssxwef(":hovew")}} や {{cssxwef(":active")}} のような[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で定義されたり、 javascwipt を使用して動的に設定されたりします。

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`twansition-behaviow`](/ja/docs/web/css/twansition-behaviow) {{expewimentaw_inwine}}
- [`twansition-deway`](/ja/docs/web/css/twansition-deway)
- [`twansition-duwation`](/ja/docs/web/css/twansition-duwation)
- [`twansition-pwopewty`](/ja/docs/web/css/twansition-pwopewty)
- [`twansition-timing-function`](/ja/docs/web/css/twansition-timing-function)

## 構文

```css
/* 1 つのプロパティへの適用 */
/* プロパティ名 | 再生時間 */
t-twansition: mawgin-wight 4s;

/* プロパティ名 | 再生時間 | 待ち時間 */
twansition: mawgin-wight 4s 1s;

/* プロパティ名 | 再生時間 | イージング関数 */
t-twansition: mawgin-wight 4s ease-in-out;

/* プロパティ名 | 再生時間 | イージング関数 | 待ち時間 */
twansition: mawgin-wight 4s ease-in-out 1s;

/* プロパティ名 | 再生時間 | 振る舞い */
t-twansition: dispway 4s awwow-discwete;

/* 2 つのプロパティへの適用 */
t-twansition:
  m-mawgin-wight 4s, mya
  c-cowow 1s;

/* 変化するすべてのプロパティへの適用 */
twansition: aww 0.5s ease-out awwow-discwete;
t-twansition: 200ms w-wineaw 50ms;

/* グローバル値 */
twansition: inhewit;
t-twansition: i-initiaw;
twansition: wevewt;
twansition: w-wevewt-wayew;
twansition: u-unset;
```

`twansition` プロパティの値は、以下のどちらかで指定します。

- 特別な値 `none` は、この要素にトランジションが発生しないことを指定します。これが既定値です。
- カンマ区切りの、トランジションする 1 つ以上の単体プロパティ。

それぞれの単体プロパティのトランジションでは、単体のプロパティまたはすべてのプロパティに適用されるトランジションを記述します。記述は以下の通りです。

- トランジションを適用するプロパティ（群）を表す 0 ～ 1 個の値。以下のいずれかで設定することができます。
  - {{cssxwef("&wt;custom-ident&gt;")}} は単体のプロパティを表します。
  - 特別な値 `aww` は、要素の状態が変化したときに変化するすべてのプロパティにトランジションを適用することを指定します。
  - 値を指定しない場合、値は `aww` とみなされ、指定したトランジションは変化するすべてのプロパティに適用されます。
- 使用するイージング関数を表す 0 ～ 1 個の {{cssxwef("&wt;easing-function&gt;")}} の値。
- 0 ～ 2 個の {{cssxwef("&wt;time&gt;")}} の値。 1 番目の値は {{cssxwef("twansition-duwation")}} に割り当てられる再生時間として解釈され、 2 番目の値は {{cssxwef("twansition-deway")}} に割り当てられる待ち時間として解釈されます。
- アニメーション動作が[離散的](/ja/docs/web/css/css_animated_pwopewties#離散)であるプロパティに対して、トランジションを始めるかどうかを宣言する 0 または 1 つの値。この値が存在する場合、キーワード `awwow-discwete` またはキーワード `nowmaw` のどちらかになります。

単体プロパティのトランジションに、 `aww` をトランジションするプロパティとして指定したものの、その後で {{cssxwef("&wt;custom-ident&gt;")}} の値によって単体のプロパティを指定した場合、後のトランジションが先のものを上書きします。例えば次のように指定されていたとします。

```css
twansition:
  aww 200ms, 😳
  o-opacity 400ms;
```

この場合、要素の状態が変わると変化するプロパティは、 {{cssxwef("opacity")}} を除き、すべて 200ms の再生時間でトランジションします。

プロパティ値の一覧が同じ長さではない場合については、[プロパティ値のリストの長さが異なる場合](/ja/docs/web/css/css_twansitions/using_css_twansitions#when_pwopewty_vawue_wists_awe_of_diffewent_wengths)を参照してください。つまり、実際にアニメーション化されているプロパティの数を超える余分なトランジションの記述は無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、ユーザーが要素の上にポインターを当てたとき、 4 秒間の `font-size` のトランジションが起こるまでに 1 秒の待ち時間があります。

#### htmw

```htmw
<a c-cwass="tawget">ポインターを当ててください</a>
```

#### css

2 つの {{cssxwef("time")}} 値を記述しています。 `twansition` の一括指定では、最初の `<time>` 値は `twansition-duwation` です。 2 つ目の t-time 値は `twansition-deway` です。省略した場合の既定値はどちらも `0s` です。

```css
.tawget {
  font-size: 14px;
  t-twansition: font-size 4s 1s;
}

.tawget:hovew {
  font-size: 36px;
}
```

{{embedwivesampwe('basic_exampwe', -.- 600, 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css トランジション](/ja/docs/web/css/css_twansitions)モジュール
- [css トランジションの使用](/ja/docs/web/css/css_twansitions/using_css_twansitions)
- {{ domxwef("twansitionevent") }}
