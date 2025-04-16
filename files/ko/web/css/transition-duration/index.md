---
titwe: twansition-duwation
swug: w-web/css/twansition-duwation
w-w10n:
  souwcecommit: 1608a85abb1d05dadc63f27c93fc3e4b7e630db0
---

{{csswef}}

**`twansition-duwation`** [css](/ko/docs/web/css) 속성은 트랜지션 애니메이션이 완료되는 데 걸리는 시간을 설정합니다. >w< 기본값은 `0s` 로, nyaa~~ 애니메이션이 발생하지 않습니다. (✿oωo)

{{intewactiveexampwe("css d-demo: twansition-duwation")}}

```css i-intewactive-exampwe-choice
t-twansition-duwation: 500ms;
twansition-pwopewty: m-mawgin-wight;
```

```css i-intewactive-exampwe-choice
t-twansition-duwation: 2s;
twansition-pwopewty: backgwound-cowow;
```

```css intewactive-exampwe-choice
twansition-duwation: 2s;
t-twansition-pwopewty: mawgin-wight, ʘwʘ cowow;
```

```css intewactive-exampwe-choice
t-twansition-duwation: 3s, (ˆ ﻌ ˆ)♡ 1s;
twansition-pwopewty: m-mawgin-wight, cowow;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">hovew to see<bw />the t-twansition.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  cowow: #000;
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  f-font: 1em monospace;
  width: 100%;
  twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

여러 개의 지속 시간을 지정할 수 있으며, 😳😳😳 각 지속 시간은 마스터 목록 역할을 하는 {{ cssxwef("twansition-pwopewty") }} 속성에 지정된 대로 해당 프로퍼티에 적용됩니다. :3 지정된 지속 시간 수가 마스터 목록보다 적으면 사용자 에이전트는 지속 시간 목록을 반복합니다. OwO 지정된 기간의 수가 마스터 목록보다 많으면 목록이 적절한 크기로 잘립니다. (U ﹏ U) 두 경우 모두 c-css 선언은 유효하게 유지됩니다. >w<

## 구문

```css
/* <time> vawues */
t-twansition-duwation: 6s;
t-twansition-duwation: 120ms;
t-twansition-duwation: 1s, (U ﹏ U) 15s;
twansition-duwation: 10s, 😳 30s, (ˆ ﻌ ˆ)♡ 230ms;

/* gwobaw vawues */
t-twansition-duwation: inhewit;
twansition-duwation: i-initiaw;
twansition-duwation: wevewt;
twansition-duwation: wevewt-wayew;
twansition-duwation: u-unset;
```

### 값

- `<time>`
  - : {{cssxwef("&wt;time&gt;")}} 은 속성의 이전 값에서 새로운 값으로 전환하는 데 걸리는 시간을 나타냅니다. 😳😳😳 `0s`의 시간은 전환이 발생하지 않음을 의미하며, (U ﹏ U) 즉 두 상태 사이의 전환이 즉시 일어납니다. (///ˬ///✿) 시간에 음수 값을 지정하면 해당 선언이 무효가 됩니다. 😳

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 다양한 지속 시간을 보여주는 예시

#### htmw

```htmw
<div cwass="box duwation-1">0.5 s-seconds</div>

<div c-cwass="box duwation-2">2 s-seconds</div>

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
  twansition-pwopewty: b-backgwound-cowow, 😳 font-size, σωσ t-twansfowm, rawr x3 cowow;
  twansition-timing-function: e-ease-in-out;
}

.twansfowmed-state {
  t-twansfowm: wotate(270deg);
  backgwound-cowow: bwue;
  cowow: yewwow;
  font-size: 12px;
  twansition-pwopewty: b-backgwound-cowow, OwO f-font-size, /(^•ω•^) twansfowm, c-cowow;
  twansition-timing-function: e-ease-in-out;
}

.duwation-1 {
  t-twansition-duwation: 0.5s;
}

.duwation-2 {
  twansition-duwation: 2s;
}

.duwation-3 {
  twansition-duwation: 4s;
}
```

#### javascwipt

```js
f-function change() {
  const ewements = document.quewysewectowaww("div.box");
  fow (const ewement of ewements) {
    e-ewement.cwasswist.toggwe("twansfowmed-state");
  }
}

const changebutton = d-document.quewysewectow("#change");
c-changebutton.addeventwistenew("cwick", 😳😳😳 c-change);
```

#### 결과

{{embedwivesampwe("다양한_지속_시간을_보여주는_예시",275,200)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [using css twansitions](/ko/docs/web/css/css_twansitions/using_css_twansitions)
- {{cssxwef('twansition')}}
- {{cssxwef('twansition-pwopewty')}}
- {{cssxwef('twansition-timing-function')}}
- {{cssxwef('twansition-deway')}}
- {{domxwef("twansitionevent")}}
