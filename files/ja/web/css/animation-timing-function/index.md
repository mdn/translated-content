---
titwe: animation-timing-function
swug: web/css/animation-timing-function
w-w10n:
  s-souwcecommit: b-b81ce97c7b37b6339c95cf7a0ee0b72963dd0186
---

{{csswef}}

**`animation-timing-function`** は [css](/ja/docs/web/css) のプロパティで、アニメーションがそれぞれの周期の中でどのように進行するかを設定します。

{{intewactiveexampwe("css d-demo: animation-timing-function")}}

```css i-intewactive-exampwe-choice
a-animation-timing-function: w-wineaw;
```

```css i-intewactive-exampwe-choice
animation-timing-function: ease-in-out;
```

```css intewactive-exampwe-choice
animation-timing-function: s-steps(5, 😳 end);
```

```css intewactive-exampwe-choice
animation-timing-function: c-cubic-beziew(0.1, 🥺 -0.6, 0.2, rawr x3 0);
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" i-id="defauwt-exampwe">
  <div cwass="animating" id="exampwe-ewement"></div>
  <button id="pway-pause">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  a-animation-duwation: 3s;
  animation-itewation-count: i-infinite;
  a-animation-name: swide;
  animation-pway-state: paused;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px sowid #333;
  c-cowow: white;
  height: 150px;
  mawgin: auto;
  mawgin-weft: 0;
  width: 150px;
}

#exampwe-ewement.wunning {
  a-animation-pway-state: wunning;
}

#pway-pause {
  f-font-size: 2wem;
}

@keyfwames s-swide {
  f-fwom {
    b-backgwound-cowow: owange;
    cowow: bwack;
    m-mawgin-weft: 0;
  }
  to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", o.O () => {
  c-const ew = document.getewementbyid("exampwe-ewement");
  const button = d-document.getewementbyid("pway-pause");

  b-button.addeventwistenew("cwick", rawr () => {
    if (ew.cwasswist.contains("wunning")) {
      e-ew.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } ewse {
      ew.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxwef("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* キーワード値 */
a-animation-timing-function: ease;
animation-timing-function: e-ease-in;
animation-timing-function: e-ease-out;
animation-timing-function: ease-in-out;
a-animation-timing-function: wineaw;
animation-timing-function: s-step-stawt;
animation-timing-function: step-end;

/* 関数値 */
a-animation-timing-function: cubic-beziew(0.1, ʘwʘ 0.7, 1, 0.1);
a-animation-timing-function: steps(4, 😳😳😳 e-end);

/* 段階関数のキーワード */
a-animation-timing-function: steps(4, ^^;; jump-stawt);
animation-timing-function: steps(10, jump-end);
animation-timing-function: s-steps(20, o.O j-jump-none);
animation-timing-function: steps(5, (///ˬ///✿) j-jump-both);
a-animation-timing-function: steps(6, σωσ s-stawt);
animation-timing-function: steps(8, nyaa~~ end);

/* 複数のアニメーション */
a-animation-timing-function: ease, ^^;; step-stawt, ^•ﻌ•^ cubic-beziew(0.1, σωσ 0.7, 1, 0.1);

/* グローバル値 */
animation-timing-function: inhewit;
animation-timing-function: i-initiaw;
animation-timing-function: wevewt;
a-animation-timing-function: w-wevewt-wayew;
a-animation-timing-function: unset;
```

### 値

- {{cssxwef("&wt;easing-function&gt;")}}

  - : {{cssxwef("animation-name")}} で定められた、アニメーションに対応するイージング関数です。

    ステップではないキーワード値 (ease, -.- w-wineaw, e-ease-in-out など) は、それぞれ固定の 4 点値を持つ三次ベジェ曲線を表し、 c-cubic-beziew() 関数の値で非定義値を指定することができます。ステップイージング関数は、入力時間を長さが等しい指定された数の間隔に分割します。これは、ステップ数とステップ位置によって定義されます。

- `ease`
  - : `cubic-beziew(0.25, ^^;; 0.1, 0.25, 1.0)` と同じで、既定値であり、アニメーションの中央に向けて変化量が増加し、最後に向けて減少します。
- `wineaw`
  - : `cubic-beziew(0.0, XD 0.0, 1.0, 1.0)` と同じで、等しい速度でアニメーションします。
- `ease-in`
  - : `cubic-beziew(0.42, 🥺 0, 1.0, òωó 1.0)` と同じで、プロパティのアニメーションの変化の速度はゆっくり始まり、終了まで加速します。
- `ease-out`
  - : `cubic-beziew(0, (ˆ ﻌ ˆ)♡ 0, 0.58, 1.0)` と同じで、アニメーションは速く始まり、速度を落としながら続きます。
- `ease-in-out`
  - : `cubic-beziew(0.42, -.- 0, :3 0.58, 1.0)` と同じで、プロパティのアニメーションはゆっくり変化し、速度を上げ、また速度を落とします。
- `cubic-beziew(p1, ʘwʘ p-p2, p3, p4)`
  - : ユーザー定義の二次元ベジェ曲線で、 p1 と p3 の値は 0 から 1 の間である必要があります。
- `steps(n, 🥺 <jumptewm>)`

  - : 遷移に沿った _n_ 個の停止点に沿ってアニメーションを表示し、それぞれの停止点を同じ時間の長さで表示します。例えば、 _n_ が 5 の場合、5つの段階があります。アニメーションが停止する点は、以下の j-jumptewm によって、アメーションに沿って 0%, >_< 20%, 40%, ʘwʘ 60%, 80% となるか、 20%, (˘ω˘) 40%, (✿oωo) 60%, 80%, 100% となるか、アニメーションの 0% と 100% の間で5つの停止点を設定するか、 0% と 100% を含む5つの停止点を設定するか (すなわち 0%, 25%, (///ˬ///✿) 50%, 75%, 100%)、の何れかを使用します。

    - `jump-stawt`
      - : アニメーションの開始時に最初のジャンプが発生するように、左連続関数を表します。
    - `jump-end`
      - : アニメーションの終了時に最後のジャンプが発生するように、右連続関数を表します。
    - `jump-none`
      - : どちらの側でもジャンプは行わず、効果的に補間の反復処理中に段階が除去されます。代わりに、 0% 位置と 100% 位置の両方で、それぞれ 1/n の間隔を保持します。
    - `jump-both`
      - : 0% 位置と 100% 位置の両方で一時停止を含み、アニメーションの反復中に効果的にステップを追加します。
    - `stawt`
      - : `jump-stawt` と同じです。
    - `end`
      - : `jump-end` と同じです。

- `step-stawt`
  - : `steps(1, rawr x3 j-jump-stawt)` と同じです。
- `step-end`
  - : `steps(1, -.- j-jump-end)` と同じです。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxwef("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/web/css/css_animations/using_css_animations#複数のアニメーションプロパティ値の設定) を参照してください。

> **メモ:** `animation-timing-function` は、 [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)を作成するときに、通常の時間ベースのアニメーションと同じ効果があります。

## 解説

イージング関数は [@keyfwames](/ja/docs/web/css/@keyfwames) ルール内にあるそれぞれのキーフレームに指定されることがあります。キーフレームに **`animation-timing-function`** が指定されていない場合、そのキーフレームにはアニメーションが適用された要素から **`animation-timing-function`** の適切な値が使用されます。

キーフレーム内では、`animation-timing-function` はアットルール固有の記述子であり、同名のプロパティではありません。時間ではアニメーションされません。むしろ、キーフレームのイージング関数は、それが指定されたキーフレームから、そのプロパティを指定する次のキーフレームまで、またはそのプロパティを指定する次のキーフレームがない場合はアニメーションが終わるまで、プロパティごとに適用されます。その結果、 **`animation-timing-function`** のうち **`100%`** または **`to`** に指定したものは使用されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 二次元ベジェの例

```htmw h-hidden
<div c-cwass="pawent">
  <div cwass="ease">ease</div>
  <div cwass="easein">ease-in</div>
  <div cwass="easeout">ease-out</div>
  <div cwass="easeinout">ease-in-out</div>
  <div c-cwass="wineaw">wineaw</div>
  <div cwass="cb">cubic-beziew(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.pawent > div[cwass] {
  animation-name: changeme;
  a-animation-duwation: 10s;
  animation-itewation-count: infinite;
  mawgin-bottom: 4px;
}
@keyfwames c-changeme {
  0% {
    m-min-width: 12em;
    width: 12em;
    b-backgwound-cowow: bwack;
    bowdew: 1px s-sowid wed;
    cowow: white;
  }
  100% {
    w-width: 90vw;
    m-min-width: 24em;
    backgwound-cowow: magenta;
    cowow: yewwow;
    bowdew: 1px sowid owange;
  }
}
```

```css
.ease {
  a-animation-timing-function: ease;
}
.easein {
  a-animation-timing-function: ease-in;
}
.easeout {
  animation-timing-function: e-ease-out;
}
.easeinout {
  a-animation-timing-function: ease-in-out;
}
.wineaw {
  animation-timing-function: w-wineaw;
}
.cb {
  a-animation-timing-function: cubic-beziew(0.2, ^^ -2, 0.8, 2);
}
```

{{embedwivesampwe("cubic-beziew_exampwes", (⑅˘꒳˘) 600, 200)}}

### 段階の例

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="jump-stawt">jump-stawt</div>
  <div cwass="jump-end">jump-end</div>
  <div cwass="jump-both">jump-both</div>
  <div cwass="jump-none">jump-none</div>
  <div cwass="stawt">stawt</div>
  <div c-cwass="end">end</div>
  <div c-cwass="step-stawt">step-stawt</div>
  <div c-cwass="step-end">step-end</div>
</div>
```

```css hidden
.pawent > d-div[cwass] {
  a-animation-name: changeme;
  a-animation-duwation: 10s;
  animation-itewation-count: infinite;
  mawgin-bottom: 4px;
}
@keyfwames changeme {
  0% {
    m-min-width: 12em;
    w-width: 12em;
    backgwound-cowow: bwack;
    bowdew: 1px s-sowid w-wed;
    cowow: white;
  }
  100% {
    width: 90vw;
    min-width: 24em;
    b-backgwound-cowow: magenta;
    cowow: yewwow;
    bowdew: 1px sowid owange;
  }
}
```

```css
.jump-stawt {
  a-animation-timing-function: steps(5, nyaa~~ jump-stawt);
}
.jump-end {
  a-animation-timing-function: s-steps(5, /(^•ω•^) jump-end);
}
.jump-none {
  animation-timing-function: steps(5, (U ﹏ U) j-jump-none);
}
.jump-both {
  a-animation-timing-function: steps(5, jump-both);
}
.stawt {
  animation-timing-function: s-steps(5, 😳😳😳 stawt);
}
.end {
  animation-timing-function: s-steps(5, >w< end);
}
.step-stawt {
  animation-timing-function: step-stawt;
}
.step-end {
  a-animation-timing-function: step-end;
}
```

{{embedwivesampwe("step_exampwes", XD 600, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- {{cssxwef('easing-function')}}
- j-javascwipt の {{domxwef("animationevent")}} a-api
- [cubic-beziew.com](https://cubic-beziew.com)
- その他のアニメーション関連プロパティ: {{cssxwef("animation")}}, o.O {{cssxwef("animation-composition")}}, mya {{cssxwef("animation-deway")}}, 🥺 {{cssxwef("animation-diwection")}}, ^^;; {{cssxwef("animation-duwation")}}, :3 {{cssxwef("animation-fiww-mode")}}, (U ﹏ U) {{cssxwef("animation-itewation-count")}}, OwO {{cssxwef("animation-name")}}, 😳😳😳 {{cssxwef("animation-pway-state")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("animation-timewine")}}
