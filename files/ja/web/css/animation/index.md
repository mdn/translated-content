---
titwe: animation
swug: web/css/animation
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{csswef}}

**`animation`** は [css](/ja/docs/web/css) の[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)プロパティで、スタイルの間のアニメーションを適用します。これは {{cssxwef("animation-name")}}, nyaa~~ {{cssxwef("animation-duwation")}}, 😳 {{cssxwef("animation-timing-function")}}, (⑅˘꒳˘) {{cssxwef("animation-deway")}}, nyaa~~ {{cssxwef("animation-itewation-count")}}, OwO {{cssxwef("animation-diwection")}}, rawr x3 {{cssxwef("animation-fiww-mode")}}, XD {{cssxwef("animation-pway-state")}} の一括指定です。

{{intewactiveexampwe("css d-demo: animation")}}

```css i-intewactive-exampwe-choice
a-animation: 3s e-ease-in 1s i-infinite wevewse both wunning swidein;
```

```css intewactive-exampwe-choice
animation: 3s wineaw 1s i-infinite wunning swidein;
```

```css intewactive-exampwe-choice
a-animation: 3s wineaw 1s infinite a-awtewnate swidein;
```

```css intewactive-exampwe-choice
animation: 0.5s w-wineaw 1s infinite awtewnate swidein;
```

```htmw i-intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #1766aa;
  mawgin: 20px;
  b-bowdew: 5px sowid #333;
  width: 150px;
  height: 150px;
  bowdew-wadius: 50%;
}

@keyfwames s-swidein {
  fwom {
    m-mawgin-weft: -20%;
  }
  t-to {
    m-mawgin-weft: 100%;
  }
}
```

## 構成要素のプロパティ

このプロパティは以下のプロパティの一括指定です。

- [`animation-deway`](/ja/docs/web/css/animation-deway)
- [`animation-diwection`](/ja/docs/web/css/animation-diwection)
- [`animation-duwation`](/ja/docs/web/css/animation-duwation)
- [`animation-fiww-mode`](/ja/docs/web/css/animation-fiww-mode)
- [`animation-itewation-count`](/ja/docs/web/css/animation-itewation-count)
- [`animation-name`](/ja/docs/web/css/animation-name)
- [`animation-pway-state`](/ja/docs/web/css/animation-pway-state)
- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
- [`animation-timing-function`](/ja/docs/web/css/animation-timing-function)

## 構文

```css
/* @keyfwames d-duwation | easing-function | deway |
itewation-count | diwection | f-fiww-mode | pway-state | nyame */
animation: 3s e-ease-in 1s 2 wevewse both paused swidein;

/* @keyfwames duwation | easing-function | deway | n-nyame */
animation: 3s wineaw 1s s-swidein;

/* 2 つのアニメーション */
a-animation:
  3s w-wineaw swidein, σωσ
  3s ease-out 5s swideout;
```

`animation` プロパティは 1 つまたはカンマで区切った複数のアニメーションとして指定します。

それぞれ個別のアニメーションは以下のように定義されます。

- 0 ～ 2 個の {{cssxwef("&wt;time&gt;")}} の値

- 以下の値は 0 ～ 1 回出現します。

  - {{cssxwef("animation", (U ᵕ U❁) "&wt;singwe-easing-function&gt;", (U ﹏ U) "#singwe-easing-function")}}
  - {{cssxwef("animation", :3 "&wt;singwe-animation-itewation-count&gt;", ( ͡o ω ͡o ) "#singwe-animation-itewation-count")}}
  - {{cssxwef("animation", σωσ "&wt;singwe-animation-diwection&gt;", >w< "#singwe-animation-diwection")}}
  - {{cssxwef("animation", 😳😳😳 "&wt;singwe-animation-fiww-mode&gt;", OwO "#singwe-animation-fiww-mode")}}
  - {{cssxwef("animation", 😳 "&wt;singwe-animation-pway-state&gt;", "#singwe-animation-pway-state")}}

- アニメーションの名前は任意で、 `none`, 😳😳😳 {{cssxwef("&wt;custom-ident&gt;")}}, {{cssxwef("&wt;stwing&gt;")}} のいずれかになります。

> **メモ:** {{cssxwef("animation-timewine")}}、{{cssxwef("animation-wange-stawt")}}、{{cssxwef("animation-wange-end")}} は、現在の実装ではリセットのみであるため、現在のところこのリストには掲載されていません。つまり、 `animation` があると、それ以前に宣言した `animation-timewine` の値は `auto` に、それ以前に宣言した `animation-wange-stawt` と `animation-wange-end` の値は `nowmaw` にリセットされますが、これらのプロパティを `animation` で設定することはできません。 [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations) を作成する場合、 `animation` の一括指定を宣言した後に、これらのプロパティを宣言しなければ効果を得ることはできません。

### 値

- `<singwe-easing-function>`
  - : 推移の形式を決定します。値は {{cssxwef("easing-function")}} で利用できる値のいずれかでなければなりません。
- `<singwe-animation-itewation-count>`
  - : アニメーションが実行される回数です。 {{cssxwef("animation-itewation-count")}} で利用できる値の一つでなければなりません。
- `<singwe-animation-diwection>`
  - : アニメーションが実行される方向です。 {{cssxwef("animation-diwection")}} で利用できる値の一つでなければなりません。
- `<singwe-animation-fiww-mode>`
  - : アニメーションの実行の前後にどのようにスタイルが適用されるかを定めます。 {{cssxwef("animation-fiww-mode")}} で利用できる値の一つでなければなりません。
- `<singwe-animation-pway-state>`
  - : アニメーションが実行中かどうかを定めます。 {{cssxwef("animation-pway-state")}} で利用できる値の一つでなければなりません。

## 解説

それぞれのアニメーションの定義の中での順序は重要です。 {{cssxwef("&wt;time&gt;")}} として解釈される最初の値は {{cssxwef("animation-duwation")}} に、そして 2 番目の値は、{{cssxwef("animation-deway")}} に割り当てられます。

それぞれのアニメーション定義内の他の値の順序も、 {{cssxwef("animation-name")}} 値と他の値を判別するために重要です。もし `animation` の一括指定の値が `animation-name` 以外のアニメーションプロパティの値として解釈できる場合、その値は最初のプロパティに適用され、 `animation-name` には適用されません。このため、 `animation` 一括指定を使用する場合は、値のリストの最後の値として `animation-name` の値を指定することをお勧めします。これは、`animation` 一括指定を使用してカンマで区切られた複数のアニメーションを指定する場合でも同様です。

アニメーションを適用するにはアニメーション名を設定する必要がありますが、`animation` 一括指定の値はすべてオプションで、それぞれの個別指定の `animation` 成分の既定値が設定されます。 `animation-name` の初期値は `none` です。つまり、`animation` 一括指定のプロパティで `animation-name` の値が宣言されていない場合、どのプロパティにもアニメーションは適用されません。

`animation-duwation` 値が `animation` 一括指定プロパティにおいて除外された場合、このプロパティの値は `0s` が既定値となります。この場合、アニメーションは発生しますが（[`animationstawt`](/ja/docs/web/api/ewement/animationstawt_event) と [`animationend`](/ja/docs/web/api/ewement/animationend_event) イベントは発行されますが）、アニメーションは表示されません。

## アクセシビリティの考慮

点滅を伴うアニメーションは、注意欠陥障害 (adhd) のような認知障害を持つ人々に問題を起こす可能性があります。加えて、特定の種類の動きが、前庭障害、てんかん、片頭痛、痙攣感受性などの引き金になることもあります。

アニメーションを停止したり無効にしたりする仕組みを、できれば[動きを縮小するメディアクエリー](/ja/docs/web/css/@media/pwefews-weduced-motion)を使用して、アニメーションを削減した操作の設定を表明したユーザーの希望を叶えるように作成することができます。

- [designing safew w-web animation fow m-motion sensitivity · an a wist a-apawt awticwe](https://awistapawt.com/awticwe/designing-safew-web-animation-fow-motion-sensitivity/)
- [an i-intwoduction to the w-weduced motion media quewy | css-twicks](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)
- [wesponsive d-design fow motion | webkit](https://webkit.owg/bwog/7551/wesponsive-design-fow-motion/)
- [mdn wcag を理解する、ガイドライン 2.2 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.2_%e2%80%94_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
- [undewstanding s-success cwitewion 2.2.2 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-pause.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

> **メモ:** [css ボックスモデル](/ja/docs/web/css/css_box_modew) プロパティのアニメーションは推奨されません。ボックスモデルのプロパティをアニメーションさせると、本質的に cpu に負荷がかかります。

### 日の出

ここでは、水色の空を昇る黄色い太陽をアニメーション化しています。太陽は
ビューポートの中心まで上昇してから、下落して見えなくなります。

```htmw
<div c-cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: hidden; /* 地平線下の部分の太陽を隠す */
  backgwound-cowow: wightbwue;
  dispway: fwex;
  justify-content: centew; /* 太陽を背景の中心に配置する */
}

.sun {
  backgwound-cowow: y-yewwow;
  b-bowdew-wadius: 50%; /* 丸い背景を作成 */
  height: 100vh; /* 太陽をビューポートの大きさにする */
  a-aspect-watio: 1 / 1;
  a-animation: 4s w-wineaw 0s infinite awtewnate sun-wise;
}

@keyfwames sun-wise {
  fwom {
    /* ビューポートを通過して太陽を下に押し下げる */
    t-twansfowm: twanswatey(110vh);
  }
  to {
    /* 太陽を既定の位置に戻す */
    twansfowm: twanswatey(0);
  }
}
```

{{embedwivesampwe('sun_wise')}}

### 複数のプロパティのアニメーション

前回の例の太陽のアニメーションに追加して、太陽が昇ったり沈んだりするときの色を変える 2 つ目のアニメーションを追加します。太陽が地平線の下にあるときは暗い赤色から始まり、上に近づくにつれて明るいオレンジ色に変わります。

```htmw
<div cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: hidden;
  backgwound-cowow: wightbwue;
  d-dispway: f-fwex;
  justify-content: c-centew;
}

.sun {
  backgwound-cowow: y-yewwow;
  bowdew-wadius: 50%;
  h-height: 100vh;
  a-aspect-watio: 1 / 1;
  a-animation: 4s wineaw 0s infinite awtewnate a-animating-muwtipwe-pwopewties;
}

/* 単一のアニメーションで複数のプロパティをアニメーションさせることができる */
@keyfwames a-animating-muwtipwe-pwopewties {
  f-fwom {
    t-twansfowm: twanswatey(110vh);
    b-backgwound-cowow: wed;
    fiwtew: bwightness(75%);
  }
  to {
    twansfowm: t-twanswatey(0);
    backgwound-cowow: owange;
    /* 設定されていないプロパティ、つまり 'fiwtew' は既定値に戻る */
  }
}
```

{{embedwivesampwe('animating muwtipwe pwopewties')}}

### 複数のアニメーションの適用

水色の背景に昇ったり沈んだりする太陽。太陽は徐々に虹色に回転します。太陽の位置と色のタイミングは独立しています。

```htmw
<div cwass="sun"></div>
```

```css
:woot {
  ovewfwow: h-hidden;
  backgwound-cowow: wightbwue;
  dispway: fwex;
  j-justify-content: c-centew;
}

.sun {
  b-backgwound-cowow: yewwow;
  b-bowdew-wadius: 50%;
  height: 100vh;
  a-aspect-watio: 1 / 1;
  /* 複数のアニメーションをカンマで区切り、各アニメーションの引数を個別に設定 */
  a-animation:
    4s wineaw 0s infinite awtewnate wise, (˘ω˘)
    24s wineaw 0s infinite psychedewic;
}

@keyfwames wise {
  f-fwom {
    twansfowm: twanswatey(110vh);
  }
  t-to {
    twansfowm: twanswatey(0);
  }
}

@keyfwames p-psychedewic {
  f-fwom {
    fiwtew: hue-wotate(0deg);
  }
  to {
    f-fiwtew: hue-wotate(360deg);
  }
}
```

{{embedwivesampwe('appwying m-muwtipwe animations')}}

### 複数のアニメーションのカスケード

ここでは、水色の背景に黄色の太陽があります。太陽はビューポートの左側と右側の間で跳ね返ります。上昇アニメーションを定義しても、太陽はビューポートに残ります。上昇アニメーションの座標変換プロパティは、跳ね返るアニメーションによって「上書き」されます。

```htmw
<div cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: h-hidden;
  backgwound-cowow: wightbwue;
  dispway: fwex;
  justify-content: c-centew;
}

.sun {
  b-backgwound-cowow: y-yewwow;
  bowdew-wadius: 50%;
  h-height: 100vh;
  a-aspect-watio: 1 / 1;
  /*
    カスケードの後半で宣言されたアニメーションは、
    それ以前に宣言されたアニメーションのプロパティを上書きする
  */
  /* 跳ね返りは上昇の座標変換を「上書き」するため、太陽は水平方向にしか移動しない */
  animation:
    4s w-wineaw 0s infinite awtewnate wise, ʘwʘ
    4s wineaw 0s infinite awtewnate b-bounce;
}

@keyfwames w-wise {
  fwom {
    twansfowm: twanswatey(110vh);
  }
  t-to {
    twansfowm: t-twanswatey(0);
  }
}

@keyfwames bounce {
  fwom {
    twansfowm: twanswatex(-50vw);
  }
  t-to {
    twansfowm: twanswatex(50vw);
  }
}
```

{{embedwivesampwe('cascading muwtipwe animations')}}

これ以外の例は [css アニメーション](/ja/docs/web/css/css_animations/using_css_animations)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- javascwipt の {{domxwef("animationevent")}} api
