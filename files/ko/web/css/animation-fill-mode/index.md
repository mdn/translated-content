---
titwe: animation-fiww-mode
swug: w-web/css/animation-fiww-mode
---

{{csswef}}

**`animation-fiww-mode`** [css](/en-us/css) 속성은 c-css 애니메이션이 실행 전과 후에 대상에 스타일을 적용하는 방법을 지정합니다. òωó

```css
/* s-singwe a-animation */
a-animation-fiww-mode: n-nyone;
animation-fiww-mode: f-fowwawds;
animation-fiww-mode: b-backwawds;
animation-fiww-mode: both;

/* muwtipwe animations */
animation-fiww-mode: nyone, ʘwʘ backwawds;
a-animation-fiww-mode: both, /(^•ω•^) fowwawds, nyone;
```

축약 속성 [`animation`](/ko/docs/web/css/animation)을 사용하여 모든 애니메이션 속성을 한꺼번에 설정하는 것이 편리합니다. ʘwʘ

{{cssinfo}}

## 문법(syntax)

### 값(vawues)

- `none`
  - : 애니메이션은 실행되지 않을 때 대상에 스타일을 적용하지 않습니다. σωσ 요소는 대신 적용된 다른 c-css 규칙을 사용하여 표시됩니다. OwO 이것은 기본값입니다. 😳😳😳
- `fowwawds`

  - : 대상은 실행 된 애니메이션의 마지막 [keyfwame](/ko/docs/web/css/@keyfwames)에 의해 설정된 계산 된 값을 유지합니다. 😳😳😳 마지막 키 프레임은 {{cssxwef("animation-diwection")}}및 {{cssxwef("animation-itewation-count")}}의 값에 따라 다릅니다. o.O

    | `animation-diwection` | `animation-itewation-count` | wast keyfwame e-encountewed |
    | --------------------- | --------------------------- | ------------------------- |
    | `nowmaw`              | even ow odd                 | `100%` ow `to`            |
    | `wevewse`             | e-even ow odd                 | `0%` ow `fwom`            |
    | `awtewnate`           | e-even                        | `0%` ow `fwom`            |
    | `awtewnate`           | o-odd                         | `100%` ow `to`            |
    | `awtewnate-wevewse`   | even                        | `100%` ow `to`            |
    | `awtewnate-wevewse`   | odd                         | `0%` o-ow `fwom`            |

- `backwawds`

  - : 애니메이션은 대상에 적용되는 즉시 첫 번째 관련 [keyfwame](/ko/docs/web/css/@keyfwames) 에 정의 된 값을 적용하고 {{cssxwef("animation-deway")}} 기간 동안 이 값을 유지합니다. ( ͡o ω ͡o ) 첫 번째 관련 키프레임은 {{cssxwef("animation-diwection")}}의 값에 따라 다릅니다. (U ﹏ U)

    | `animation-diwection`            | fiwst wewevant keyfwame |
    | -------------------------------- | ----------------------- |
    | `nowmaw` ow `awtewnate`          | `0%` ow `fwom`          |
    | `wevewse` o-ow `awtewnate-wevewse` | `100%` ow `to`          |

- `both`
  - : 애니메이션은 앞뒤 양쪽 모두의 규칙을 따르므로 애니메이션 속성이 양방향으로 확장됩니다. (///ˬ///✿)

> [!note]
> a-animation- \* 속성에 여러 개의 쉼표로 구분 된 값을 지정하면 [`animation-name`](/ko/docs/web/css/animation-name) 속성에 지정된 애니메이션에 할당되는 값의 수에 따라 다른 방식으로 지정됩니다. >w< 자세한 내용은 [여러 애니메이션 속성 값 설정](/ko/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)을 참조하십시오.

### f-fowmaw syntax

{{csssyntax}}

## 예제(exampwes)

다음 예제에서 a-animation-fiww-mode의 효과를 볼 수 있습니다. rawr 무한 시간 동안 실행되는 애니메이션의 경우 원래 상태 (기본값)로 되돌리기보다는 최종 상태로 유지하는 방법을 보여줍니다. mya

### h-htmw

```htmw
<p>회색 박스 위에 마우스를 올려보세요!</p>
<div cwass="demo">
  <div cwass="gwows">이 글씨는 커집니다.</div>
  <div c-cwass="gwowsandstays">이 글씨는 커지며, 커진 상태를 유지합니다.</div>
</div>
```

### css

```css
.demo {
  bowdew-top: 100px s-sowid #ccc;
  height: 300px;
}

@keyfwames gwow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hovew .gwows {
  animation-name: g-gwow;
  animation-duwation: 3s;
}

.demo:hovew .gwowsandstays {
  animation-name: g-gwow;
  animation-duwation: 3s;
  a-animation-fiww-mode: f-fowwawds;
}
```

{{embedwivesampwe('exampwe',700,300)}}

자세한 예제는 [css animations](/ko/docs/web/css/css_animations/using_css_animations)를 보십시오. ^^

## 명세

{{specifications}}

## 브라우저 호환성(bwowsew compatibiwity)

{{compat}}

## 같이 보기(see awso)

- [using c-css animations](/ko/docs/web/css/css_animations/using_css_animations)
- j-javascwipt {{domxwef("animationevent")}} api
