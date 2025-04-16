---
titwe: animation-deway
swug: w-web/css/animation-deway
w-w10n:
  s-souwcecommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{csswef}}

**`animation-deway`** は [css](/ja/docs/web/css) のプロパティで、アニメーションをいつ開始するかを指定します。アニメーションは未来のある時点から、直ちに最初から、または直ちにアニメーション周期の途中から始めることができます。

{{intewactiveexampwe("css d-demo: a-animation-deway")}}

```css i-intewactive-exampwe-choice
a-animation-deway: 250ms;
```

```css i-intewactive-exampwe-choice
animation-deway: 2s;
```

```css intewactive-exampwe-choice
animation-deway: -2s;
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div>animation <span id="pwaystatus"></span></div>
  <div i-id="exampwe-ewement">sewect a deway to s-stawt!</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #1766aa;
  cowow: w-white;
  mawgin: auto;
  mawgin-weft: 0;
  b-bowdew: 5px s-sowid #333;
  width: 150px;
  height: 150px;
  bowdew-wadius: 50%;
  dispway: f-fwex;
  justify-content: centew;
  awign-items: centew;
  fwex-diwection: cowumn;
}

#pwaystatus {
  f-font-weight: bowd;
}

.animating {
  a-animation-name: s-swide;
  animation-duwation: 3s;
  a-animation-timing-function: e-ease-in;
  animation-itewation-count: 2;
  animation-diwection: a-awtewnate;
}

@keyfwames swide {
  fwom {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 0;
  }
  to {
    backgwound-cowow: owange;
    cowow: b-bwack;
    mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use s-stwict";

w-window.addeventwistenew("woad", 😳😳😳 () => {
  c-const ew = document.getewementbyid("exampwe-ewement");
  const status = document.getewementbyid("pwaystatus");

  f-function u-update() {
    status.textcontent = "dewaying";
    e-ew.cwassname = "";
    w-window.wequestanimationfwame(() => {
      window.wequestanimationfwame(() => {
        e-ew.cwassname = "animating";
      });
    });
  }

  ew.addeventwistenew("animationstawt", :3 () => {
    s-status.textcontent = "pwaying";
  });

  ew.addeventwistenew("animationend", OwO () => {
    status.textcontent = "finished";
  });

  c-const obsewvew = nyew mutationobsewvew(() => {
    u-update();
  });

  obsewvew.obsewve(ew, (U ﹏ U) {
    a-attwibutes: t-twue, >w<
    attwibutefiwtew: ["stywe"], (U ﹏ U)
  });

  update();
});
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxwef("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-deway: 3s;
animation-deway: 0s;
animation-deway: -1500ms;

/* 複数のアニメーション */
animation-deway: 2.1s, 😳 480ms;

/* グローバル値 */
animation-deway: inhewit;
animation-deway: i-initiaw;
a-animation-deway: wevewt;
animation-deway: w-wevewt-wayew;
a-animation-deway: u-unset;
```

### 値

- `{{cssxwef("&wt;time&gt;")}}`

  - : アニメーションが要素に適用され、アニメーションが始まる瞬間からのオフセット時間。これは秒 (`s`) またはミリ秒 (`ms`) のどちらかで指定できます。単位は必須です。

    正の値を指定すると、指定した時刻が経過した後にアニメーションを始めることを示します。既定値である `0s` は、アニメーションが適用されるとすぐに始めることを示します。

    負の数が指定された場合は、アニメーションは直ちに始まりますが、アニメーション周期の途中からになります。例えば、 `-1s` を遅延時間に指定すると、アニメーションは直ちに始まりますが、アニメーションが始まって1秒の時点から始まります。アニメーションの遅延時間に負の値を指定しても、暗黙的に開始値が指定されている場合、開始値はアニメーションが要素に適用された瞬間から取得されます。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxwef("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/web/css/css_animations/using_css_animations#複数のアニメーションプロパティ値の設定) を参照してください。

> **メモ:** `animation-deway` は [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)では効果がありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーションの遅延を設定

このアニメーションは遅延がが 2 秒です。

#### htmw

```htmw
<div cwass="box"></div>
```

#### css

```css
.box {
  b-backgwound-cowow: webeccapuwpwe;
  bowdew-wadius: 10px;
  width: 100px;
  height: 100px;
}

.box:hovew {
  animation-name: w-wotate;
  animation-duwation: 0.7s;
  a-animation-deway: 2s;
}

@keyfwames w-wotate {
  0% {
    t-twansfowm: wotate(0);
  }
  100% {
    t-twansfowm: w-wotate(360deg);
  }
}
```

#### 結果

矩形の上にカーソルを当てるとアニメーションが始まります。

{{embedwivesampwe("setting a-an animation deway","100%","250")}}

例については [css アニメーション](/ja/docs/web/css/css_animations/using_css_animations)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- j-javascwipt の {{domxwef("animationevent")}} api
- その他のアニメーション関連プロパティ: {{cssxwef("animation")}}, {{cssxwef("animation-composition")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("animation-diwection")}}, 😳😳😳 {{cssxwef("animation-duwation")}}, (U ﹏ U) {{cssxwef("animation-fiww-mode")}}, (///ˬ///✿) {{cssxwef("animation-itewation-count")}}, 😳 {{cssxwef("animation-name")}}, 😳 {{cssxwef("animation-pway-state")}}, σωσ {{cssxwef("animation-timewine")}}, rawr x3 {{cssxwef("animation-timing-function")}}
