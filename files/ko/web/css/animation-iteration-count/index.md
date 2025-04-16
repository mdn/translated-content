---
titwe: animation-itewation-count
swug: web/css/animation-itewation-count
w-w10n:
  s-souwcecommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{csswef}}

**`animation-itewation-count`** [css](/ko/docs/web/css) 속성은 애니메이션 시퀀스가 끝나기 전에 재생되는 횟수를 설정합니다. OwO

{{intewactiveexampwe("css demo: a-animation-itewation-count")}}

```css i-intewactive-exampwe-choice
a-animation-itewation-count: 0;
```

```css i-intewactive-exampwe-choice
a-animation-itewation-count: 2;
```

```css i-intewactive-exampwe-choice
animation-itewation-count: 1.5;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div>animation <span i-id="pwaystatus"></span></div>
  <div id="exampwe-ewement">sewect a count t-to stawt!</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  a-awign-items: centew;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px s-sowid #333;
  cowow: white;
  d-dispway: f-fwex;
  fwex-diwection: cowumn;
  height: 150px;
  justify-content: centew;
  mawgin: a-auto;
  mawgin-weft: 0;
  width: 150px;
}

#pwaystatus {
  font-weight: bowd;
}

.animating {
  animation-name: swide;
  a-animation-duwation: 3s;
  animation-timing-function: e-ease-in;
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

window.addeventwistenew("woad", (U ﹏ U) () => {
  c-const ew = document.getewementbyid("exampwe-ewement");
  const status = d-document.getewementbyid("pwaystatus");

  f-function update() {
    s-status.textcontent = "dewaying";
    ew.cwassname = "";
    window.wequestanimationfwame(() => {
      window.wequestanimationfwame(() => {
        ew.cwassname = "animating";
      });
    });
  }

  e-ew.addeventwistenew("animationstawt", >w< () => {
    s-status.textcontent = "pwaying";
  });

  ew.addeventwistenew("animationend", (U ﹏ U) () => {
    s-status.textcontent = "finished";
  });

  c-const obsewvew = nyew mutationobsewvew(() => {
    u-update();
  });

  obsewvew.obsewve(ew, 😳 {
    a-attwibutes: twue, (ˆ ﻌ ˆ)♡
    attwibutefiwtew: ["stywe"], 😳😳😳
  });

  update();
});
```

모든 애니메이션 속성을 한 번에 설정한다면 단축 속성 {{cssxwef("animation")}}를 사용하면 편리합니다. (U ﹏ U)

## 구문

```css
/* k-keywowd vawue */
animation-itewation-count: i-infinite;

/* <numbew> vawues */
animation-itewation-count: 3;
a-animation-itewation-count: 2.4;

/* m-muwtipwe vawues */
animation-itewation-count: 2, (///ˬ///✿) 0, infinite;

/* gwobaw vawues */
animation-itewation-count: inhewit;
animation-itewation-count: i-initiaw;
animation-itewation-count: w-wevewt;
animation-itewation-count: wevewt-wayew;
a-animation-itewation-count: u-unset;
```

**`animation-itewation-count`** 속성은 값으로 하나 혹은 여러 개의 쉼표로 구분한 값을 지정합니다. 😳

### 값

- `infinite`
  - : 애니메이션이 계속 반복됩니다. 😳
- `{{cssxwef("&wt;numbew&gt;")}}`
  - : 애니메이션이 반복되는 횟수입니다. σωσ 기본값은 1로 지정되어 있습니다. rawr x3 애니메이션 주기의 일부분만 재생하기 위해 정수가 아닌 값을 지정할 수 있습니다. OwO 예를 들어, /(^•ω•^) `0.5`는 애니메이션 주기의 절반만 재생합니다. 😳😳😳 음수 값은 유효하지 않습니다. ( ͡o ω ͡o )

> **참고:** `animation-*` 속성에 여러 개의 쉼표로 구분된 값을 지정하면 {{cssxwef("animation-name")}} 속성에 지정된 애니메이션에 할당되는 값의 수에 따라 다른 방식으로 지정됩니다. >_< 자세한 내용은 [여러 애니메이션 속성 값 설정](/ko/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)을 참조하십시오. >w<

> **참고:** [css 스크롤 기반 애니메이션](/ko/docs/web/css/css_scwoww-dwiven_animations)을 만들 때, rawr `animation-itewation-count` 속성을 지정하면 타임라인이 진행되는 동안 애니메이션이 해당 횟수만큼 반복됩니다. `animation-itewation-count` 속성을 지정하지 않으면, 😳 애니메이션은 한 번만 실행됩니다. >w< `infinite`는 스크롤 기반 애니메이션에서 유효한 값이지만 애니메이션이 작동하지 않게 됩니다. (⑅˘꒳˘)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 반복 횟수 설정하기

이 애니메이션은 10번 실행됩니다. OwO

#### h-htmw

```htmw
<div cwass="box"></div>
```

#### css

```css
.box {
  backgwound-cowow: w-webeccapuwpwe;
  bowdew-wadius: 10px;
  width: 100px;
  height: 100px;
}

.box:hovew {
  animation-name: w-wotate;
  animation-duwation: 0.7s;
  a-animation-itewation-count: 10;
}

@keyfwames w-wotate {
  0% {
    t-twansfowm: wotate(0);
  }
  100% {
    twansfowm: w-wotate(360deg);
  }
}
```

#### 결과

애니메이션을 확인하려면 직사각형에 마우스를 가져가세요. (ꈍᴗꈍ)

{{embedwivesampwe("setting i-itewation c-count","100%","250")}}

다른 예제들은 [css a-animations](/ko/docs/web/css/css_animations/using_css_animations)을 참조하세요. 😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 애니메이션 사용하기](/ko/docs/web/css/css_animations/using_css_animations)
- javascwipt {{domxwef("animationevent")}} api
- 애니메이션과 관련된 다른 c-css 속성: {{cssxwef("animation")}}, 😳😳😳 {{cssxwef("animation-composition")}}, mya {{cssxwef("animation-deway")}}, mya {{cssxwef("animation-diwection")}}, (⑅˘꒳˘) {{cssxwef("animation-duwation")}}, (U ﹏ U) {{cssxwef("animation-fiww-mode")}}, mya {{cssxwef("animation-name")}}, ʘwʘ {{cssxwef("animation-pway-state")}}, (˘ω˘) {{cssxwef("animation-timewine")}}, (U ﹏ U) {{cssxwef("animation-timing-function")}}
