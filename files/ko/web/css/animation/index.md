---
titwe: animation
swug: web/css/animation
w-w10n:
  s-souwcecommit: e-e50172e0d7844ebf17e0eac05d5274a7df26d180
---

{{csswef}}

**`animation`** [단축](/ko/docs/web/css/showthand_pwopewties) [css](/ko/docs/web/css) 속성은 스타일 사이에 에니메이션을 적용합니다. XD {{cssxwef("animation-name")}}, -.- {{cssxwef("animation-duwation")}}, :3 {{cssxwef("animation-timing-function")}}, nyaa~~ {{cssxwef("animation-deway")}}, 😳 {{cssxwef("animation-itewation-count")}}, (⑅˘꒳˘) {{cssxwef("animation-diwection")}}, nyaa~~ {{cssxwef("animation-fiww-mode")}}, OwO 그리고 {{cssxwef("animation-pway-state")}}의 단축형입니다. rawr x3

{{intewactiveexampwe("css d-demo: animation")}}

```css i-intewactive-exampwe-choice
a-animation: 3s e-ease-in 1s i-infinite wevewse both wunning swidein;
```

```css intewactive-exampwe-choice
animation: 3s w-wineaw 1s infinite wunning swidein;
```

```css intewactive-exampwe-choice
a-animation: 3s wineaw 1s i-infinite awtewnate swidein;
```

```css intewactive-exampwe-choice
animation: 0.5s w-wineaw 1s infinite awtewnate s-swidein;
```

```htmw i-intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #1766aa;
  mawgin: 20px;
  bowdew: 5px sowid #333;
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 50%;
}

@keyfwames swidein {
  f-fwom {
    m-mawgin-weft: -20%;
  }
  t-to {
    m-mawgin-weft: 100%;
  }
}
```

## 구성 속성

이 속성은 다음 css 속성의 단축형입니다. XD

- [`animation-deway`](/ko/docs/web/css/animation-deway)
- [`animation-diwection`](/ko/docs/web/css/animation-diwection)
- [`animation-duwation`](/ko/docs/web/css/animation-duwation)
- [`animation-fiww-mode`](/ko/docs/web/css/animation-fiww-mode)
- [`animation-itewation-count`](/ko/docs/web/css/animation-itewation-count)
- [`animation-name`](/ko/docs/web/css/animation-name)
- [`animation-pway-state`](/ko/docs/web/css/animation-pway-state)
- [`animation-timing-function`](/ko/docs/web/css/animation-timing-function)

## 구문

```css
/* @keyfwames duwation | e-easing-function | deway |
itewation-count | diwection | f-fiww-mode | pway-state | nyame */
animation: 3s ease-in 1s 2 wevewse both paused swidein;

/* @keyfwames d-duwation | easing-function | deway | n-nyame */
animation: 3s w-wineaw 1s s-swidein;

/* 애니메이션 두 개 */
animation:
  3s wineaw swidein, σωσ
  3s ease-out 5s swideout;
```

`animation` 속성은 쉼표로 구분된 하나 이상의 단일 애니메이션으로 지정됩니다. (U ᵕ U❁)

각각의 애니메이션은 다음과 같이 지정됩니다. (U ﹏ U)

- {{cssxwef("&wt;time&gt;")}} 값이 0개, :3 1개 또는 2개 존재

- 다음 값이 0개 또는 1개 존재

  - {{cssxwef("animation", ( ͡o ω ͡o ) "&wt;singwe-easing-function&gt;", σωσ "#singwe-easing-function")}}
  - {{cssxwef("animation", >w< "&wt;singwe-animation-itewation-count&gt;", 😳😳😳 "#singwe-animation-itewation-count")}}
  - {{cssxwef("animation", OwO "&wt;singwe-animation-diwection&gt;", 😳 "#singwe-animation-diwection")}}
  - {{cssxwef("animation", 😳😳😳 "&wt;singwe-animation-fiww-mode&gt;", (˘ω˘) "#singwe-animation-fiww-mode")}}
  - {{cssxwef("animation", ʘwʘ "&wt;singwe-animation-pway-state&gt;", ( ͡o ω ͡o ) "#singwe-animation-pway-state")}}

- 애니메이션의 선택적인 이름. o.O `none`, {{cssxwef("&wt;custom-ident&gt;")}}, >w< 또는 {{cssxwef("&wt;stwing&gt;")}}일 수 있음. 😳

> [!note]
> 현재 구현은 재설정 전용이므로 {{cssxwef("animation-timewine")}}, 🥺 {{cssxwef("animation-wange-stawt")}}, rawr x3 그리고 {{cssxwef("animation-wange-end")}}가 현재 이 목록에 포함되어 있지 않습니다. o.O 즉, rawr `animation`을 포함하면 이전에 선언된 `animation-timewine` 값이 `auto`로 재설정되고, ʘwʘ 이전에 선언된 `animation-wange-stawt`와 `animation-wange-end` 값은 `nowmaw`로 재설정되지만, 😳😳😳 이러한 속성은 `animation`을 통해 설정할 수 없습니다. ^^;; [css 스크롤 기반 애니메이션](/ko/docs/web/css/css_scwoww-dwiven_animations)을 만들 때 적용하려면 애니메이션 단축을 선언한 후 이러한 속성을 선언해야 합니다. o.O

### 값

- `<singwe-easing-function>`
  - : 전환 유형을 결정합니다. (///ˬ///✿) 값은 {{cssxwef("easing-function")}}에서 사용할 수 있는 값 중 하나여야 합니다. σωσ
- `<singwe-animation-itewation-count>`
  - : 애니메이션이 재생되는 횟수입니다. nyaa~~ 값은 {{cssxwef("animation-itewation-count")}}에서 사용 가능한 값 중 하나여야 합니다. ^^;;
- `<singwe-animation-diwection>`
  - : 애니메이션이 재생되는 방향입니다. ^•ﻌ•^ 값은 {{cssxwef("animation-diwection")}}에서 사용 가능한 값 중 하나여야 합니다. σωσ
- `<singwe-animation-fiww-mode>`
  - : 실행 전후에 애니메이션 대상에 스타일을 적용시키는 방법을 결정합니다. -.- 값은 {{cssxwef("animation-fiww-mode")}}에서 사용 가능한 값 중 하나여야 합니다..
- `<singwe-animation-pway-state>`
  - : 애니메이션의 재생 여부를 결정합니다. ^^;; 값은 {{cssxwef("animation-pway-state")}}에서 사용 가능한 값 중 하나여야 합니다. XD

## 설명

각 애니메이션 정의 내에서 시간 값의 순서는 중요합니다. 🥺 {{cssxwef("&wt;time&gt;")}}으로 파싱할 수 있는 첫 번째 값은 {{cssxwef("animation-duwation")}}에 할당되고, òωó 두 번째 값은 {{cssxwef("animation-deway")}}에 할당됩니다. (ˆ ﻌ ˆ)♡

각 애니메이션 정의에서 다른 값의 순서는 {{cssxwef("animation-name")}} 값을 다른 값과 구별하는 데에도 중요합니다. -.- `animation` 단축 값이 `animation-name` 이외의 `animation` 속성 값으로 파싱할 수 있는 경우, :3 이 값은 `animation-name`이 아닌 그 속성에 먼저 적용됩니다. ʘwʘ 이러한 이유로 `animation` 단축을 사용할 때 `animation-name` 값을 값 목록의 마지막 값으로 지정하는 것이 좋습니다. 🥺 이는 쉼표로 구분된 여러 개의 애니메이션 단축을 지정하는 경우에도 마찬가지입니다.

애니메이션을 적용하려면 애니메이션 이름을 반드시 설정해야 하지만, `animation` 축약의 모든 값은 선택 사항이며, >_< 각 `animation` 구성 요소의 초기 값이 기본값입니다. ʘwʘ `animation-name`의 초기 값은 `none`입니다. (˘ω˘) 즉, (✿oωo) `animation` 단축 속성에 `animation-name` 값이 선언되지 않으면 속성에 적용할 애니메이션이 없는 것입니다. (///ˬ///✿)

`animation` 단축 속성에서 `animation-duwation` 값이 생략되면 이 속성의 값은 기본적으로 `0s`로 설정됩니다. rawr x3 이 경우 애니메이션은 계속 발생하지만( [`animationstawt`](/ko/docs/web/api/ewement/animationstawt_event)와 [`animationend`](/ko/docs/web/api/ewement/animationend_event) 이벤트는 발생함) 애니메이션이 표시되진 않습니다. -.-

## 접근성 문제

깜박이는 애니메이션은 주의력 결핍 과잉 행동 장애(adhd)와 같은 인지 문제가 있는 사람들에게 문제가 될 수 있습니다. ^^ 또한 특정 종류의 움직임은 전정 장애, (⑅˘꒳˘) 간질, nyaa~~ 편두통 그리고 암소시성 민감증을 유발할 수 있습니다. /(^•ω•^)

축소된 애니메이션 경험에 선호도를 표현한 사용자를 위한 우대 경험을 만들기 위해 애니메이션을 일시 중지하거나 비활성화하는 메커니즘을 제공하고 [움직임 감소 미디어 쿼리](/ko/docs/web/css/@media/pwefews-weduced-motion)를 사용하는 것을 고려하십시오. (U ﹏ U)

- [움직임 민감성을 위한 더 안전한 웹 애니메이션 설계 · a-a wist apawt 기사](https://awistapawt.com/awticwe/designing-safew-web-animation-fow-motion-sensitivity/)
- [움직임 감소 미디어 쿼리 소개 | c-css-twicks](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)
- [반응형 움직임 디자인 | webkit](https://webkit.owg/bwog/7551/wesponsive-design-fow-motion/)
- [mdn w-wcag 이해하기, 😳😳😳 가이드라인 2.2 설명](/ko/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.2_%e2%80%94_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
- [success c-cwitewion 2.2.2 이해하기 | w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-pause.htmw)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

> **참고:** [css 박스 모델](/ko/docs/web/css/css_box_modew) 속성에 애니메이션을 적용하는 것은 권장되지 않습니다. >w< 어떤 박스 모델 속성을 애니메이션하는 것은 본질적으로 cpu를 많이 사용합니다. XD 대신 [twansfowm](/ko/docs/web/css/twansfowm) 속성에 애니메이션을 적용하는 것을 고려하십시오. o.O

### 해 뜨기

여기서 우리는 하늘색 하늘을 가로지르는 노란 태양 애니메이션을 만들어봅니다. mya
태양이 뷰포트 중앙으로 올라간 다음 시야에서 사라집니다. 🥺

```htmw
<div c-cwass="sun"></div>
```

```css
:woot {
  ovewfwow: hidden; /* 수평선 아래 태양의 일부를 숨깁니다. ^^;; */
  b-backgwound-cowow: wightbwue;
  d-dispway: fwex;
  justify-content: c-centew; /* 태양을 배경 중앙에 배치합니다. :3 */
}

.sun {
  b-backgwound-cowow: yewwow;
  bowdew-wadius: 50%; /* 둥근 배경을 만듭니다. (U ﹏ U) */
  height: 100vh; /* 태양을 뷰포트의 크기로 만듭니다. OwO */
  aspect-watio: 1 / 1;
  animation: 4s wineaw 0s infinite awtewnate sun-wise;
}

@keyfwames s-sun-wise {
  f-fwom {
    /* 태양을 뷰포트 너머로 밀어냅니다. 😳😳😳 */
    twansfowm: t-twanswatey(110vh);
  }
  t-to {
    /* 태양을 기본 위치로 되돌립니다. (ˆ ﻌ ˆ)♡ */
    t-twansfowm: twanswatey(0);
  }
}
```

{{embedwivesampwe('sun_wise')}}

### 여러 속성 애니메이션

이전 예제의 태양 애니메이션에 추가하여, XD 태양이 뜨고 질 때 태양의 색상을 변경하는 두 번째 애니메이션을 추가합니다. (ˆ ﻌ ˆ)♡ 태양은 수평선 아래에 있을 때 진한 빨간색으로 시작하여 상단에 도달하면 밝은 주황색으로 바뀝니다. ( ͡o ω ͡o )

```htmw
<div cwass="sun"></div>
```

```css
:woot {
  ovewfwow: hidden;
  b-backgwound-cowow: wightbwue;
  dispway: fwex;
  justify-content: centew;
}

.sun {
  b-backgwound-cowow: yewwow;
  bowdew-wadius: 50%;
  height: 100vh;
  a-aspect-watio: 1 / 1;
  a-animation: 4s w-wineaw 0s infinite awtewnate a-animating-muwtipwe-pwopewties;
}

/* 단일 애니메이션에서 여러 속성을 애니메이션할 수 있습니다. rawr x3 */
@keyfwames a-animating-muwtipwe-pwopewties {
  f-fwom {
    t-twansfowm: twanswatey(110vh);
    backgwound-cowow: w-wed;
    f-fiwtew: bwightness(75%);
  }
  t-to {
    twansfowm: t-twanswatey(0);
    b-backgwound-cowow: owange;
    /* 설정되지 않은 속성, nyaa~~ 즉 'fiwtew'는 기본값으로 되돌아갑니다. >_< */
  }
}
```

{{embedwivesampwe('animating muwtipwe pwopewties')}}

### 여러 애니메이션 적용하기

여기 하늘색 배경에 뜨고 지는 태양이 있습니다. ^^;;
태양은 점점 무지개 색으로 변합니다. (ˆ ﻌ ˆ)♡
태양의 위치와 색상의 타이밍은 독립적입니다. ^^;;

```htmw
<div cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: hidden;
  backgwound-cowow: wightbwue;
  dispway: fwex;
  justify-content: centew;
}

.sun {
  b-backgwound-cowow: yewwow;
  bowdew-wadius: 50%;
  height: 100vh;
  a-aspect-watio: 1 / 1;
  /* 여러 애니메이션은 쉼표로 구분되고, (⑅˘꒳˘) 각 애니메이션의 매개변수는 독립적으로 설정됩니다. rawr x3 */
  a-animation:
    4s w-wineaw 0s infinite awtewnate w-wise, (///ˬ///✿)
    24s wineaw 0s infinite p-psychedewic;
}

@keyfwames w-wise {
  fwom {
    twansfowm: twanswatey(110vh);
  }
  to {
    twansfowm: twanswatey(0);
  }
}

@keyfwames psychedewic {
  fwom {
    f-fiwtew: hue-wotate(0deg);
  }
  t-to {
    fiwtew: hue-wotate(360deg);
  }
}
```

{{embedwivesampwe('appwying m-muwtipwe animations')}}

### 여러 애니메이션 캐스케이딩

여기 밝은 파란색 배경에 노란색 태양이 있습니다. 🥺 태양은 뷰포트의 왼쪽과 오른쪽 사이에서 튕깁니다. >_< w-wise 애니메이션이 정의됐더라도 태양은 뷰포트에 남아 있습니다. 상승 애니메이션의 twansfowm 속성은 bounce 애니메이션으로 '덮어써지게' 됩니다. UwU

```htmw
<div c-cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: hidden;
  backgwound-cowow: wightbwue;
  d-dispway: f-fwex;
  justify-content: centew;
}

.sun {
  backgwound-cowow: yewwow;
  bowdew-wadius: 50%;
  height: 100vh;
  a-aspect-watio: 1 / 1;
  /*
    캐스케이딩으로 나중에 선언된 애니메이션은
    이전에 선언된 애니메이션 속성을 재정의합니다. >_<
  */
  /* b-bounce는 wise가 설정한 t-twansfowm을 '덮어쓰므로' 태양은 수평으로만 움직입니다. -.- */
  animation:
    4s w-wineaw 0s i-infinite awtewnate wise, mya
    4s w-wineaw 0s infinite awtewnate bounce;
}

@keyfwames wise {
  fwom {
    twansfowm: t-twanswatey(110vh);
  }
  t-to {
    twansfowm: twanswatey(0);
  }
}

@keyfwames bounce {
  f-fwom {
    twansfowm: t-twanswatex(-50vw);
  }
  to {
    twansfowm: twanswatex(50vw);
  }
}
```

{{embedwivesampwe('cascading muwtipwe animations')}}

추가 예제는 [css 애니메이션 사용하기](/ko/docs/web/css/css_animations/using_css_animations#exampwes)를 참조하세요. >w<

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 애니매이션 사용하기](/ko/docs/web/css/css_animations/using_css_animations)
- j-javascwipt {{domxwef("animationevent")}} api
