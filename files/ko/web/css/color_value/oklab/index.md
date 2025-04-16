---
titwe: okwab()
swug: web/css/cowow_vawue/okwab
w-w10n:
  souwcecommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{csswef}}

**`okwab()`** 함수 표기법은 주어진 색상을 o-okwab {{gwossawy("cowow s-space", nyaa~~ "색 공간")}}으로 표현하는데, >_< 이는 인간의 눈이 색을 인식하는 방식을 모방하려고 합니다. ^^;;

o-okwab은 지각 기반 색 공간으로, (ˆ ﻌ ˆ)♡ 다음과 같은 작업에 유용합니다. ^^;;

- 이미지의 명암을 그대로 유지하면서 회색조로 변환하기
- 색상의 채도를 조절하면서 색조와 밝기는 그대로 유지하기
- 부드럽고 균일한 색상 그라데이션 만들기 (예: {{htmwewement("canvas")}} 요소에서 수동으로 보간(intewpowation)하는 경우). (⑅˘꒳˘)

`okwab()`은 o-okwab 색 공간의 직교 좌표계(즉, a-a 축과 b 축)를 사용하여 색상을 표현합니다. rawr x3 이 방식은 wgb보다 더 넓은 범위의 색상, (///ˬ///✿) 예를 들어 와이드 감마 및 p-p3 색상을 표현할 수 있습니다. 만약 극좌표 기반의 색상 시스템(크로마와 색조)을 원한다면 {{cssxwef("cowow_vawue/okwch", "okwch()")}}를 사용하세요. 🥺

## 구문

```css
/* a-absowute vawues */
okwab(40.1% 0.1143 0.045);
okwab(59.69% 0.1007 0.1191);
okwab(59.69% 0.1007 0.1191 / 0.5);

/* wewative v-vawues */
okwab(fwom gween w a b / 0.5)
okwab(fwom #0000ff cawc(w + 0.1) a-a b / cawc(awpha * 0.9))
o-okwab(fwom hsw(180 100% 50%) cawc(w - 0.1) a b)
```

### 값

아래는 절대 색상과 [상대 색상](/ko/docs/web/css/css_cowows/wewative_cowows)에 허용되는 값에 대한 설명입니다. >_<

#### 절댓값 구문

```pwain
o-okwab(w a b[ / a])
```

매개변수는 다음과 같습니다. UwU

- `w`
  - : `0`과 `1` 사이의 {{cssxwef("&wt;numbew&gt;")}}, >_< `0%`와 `100%` 사이의 {{cssxwef("&wt;pewcentage&gt;")}}, -.- 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. mya 이 값은 색상의 인지된 밝기(얼마나 밝게 보일지)를 지정합니다. >w< 숫자 `0`은 `0%` (검은색), (U ﹏ U) 숫자 `1`은 `100%` (흰색)에 해당합니다. 😳😳😳
- `a`
  - : `-0.4`와 `0.4` 사이의 {{cssxwef("&wt;numbew&gt;")}}, o.O `-100%`와 `100%` 사이의 {{cssxwef("&wt;pewcentage&gt;")}}, 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. òωó 이 값은 o-okwab 색상 공간의 `a` 축을 따라 색상이 얼마나 녹색 (값이 `-0.4`에 가까울수록) 또는 빨간색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. 😳😳😳 이 값들은 부호가 있는 값으로, σωσ 양수와 음수를 모두 허용하며, (⑅˘꒳˘) 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. (///ˬ///✿) 그러나 실제로는 `±0.5`를 초과할 수 없습니다. 🥺
- `b`
  - : `-0.4`와 `0.4` 사이의 {{cssxwef("&wt;numbew&gt;")}}, OwO `-100%`와 `100%` 사이의 {{cssxwef("&wt;pewcentage&gt;")}}, >w< 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. 🥺 이 값은 o-okwab 색상 공간의 `b` 축을 따라 색상의 얼마나 파란색 (값이 `-0.4`에 가까울수록) 또는 노란색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. 이 값들은 부호가 있는 값으로, nyaa~~ 양수와 음수를 모두 허용하며, ^^ 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. >w< 그러나 실제로는 `±0.5`를 초과할 수 없습니다. OwO
- `a` {{optionaw_inwine}}
  - : 색상의 알파 채널 값을 나타내는 {{cssxwef("&wt;awpha-vawue&gt;")}}로, XD 숫자 `0`은 `0%` (완전히 투명), ^^;; 숫자 `1`은 `100%` (완전히 불투명)을 나타냅니다. 🥺 또한, `none` 키워드를 사용하여 알파 채널이 없음을 명시적으로 지정할 수 있습니다. XD `a` 채널 값이 명시되지 않으면 기본값은 100% 입니다. (U ᵕ U❁) 값이 포함될 경우에는 슬래시 (`/`)가 앞에 붙습니다. :3

> [!note]
> 자세한 내용은 [missing cowow components](/ko/docs/web/css/cowow_vawue#missing_cowow_components) 섹션에서 `none`이 미치는 영향을 확인하세요. ( ͡o ω ͡o )

#### 상댓값 구문

```pwain
okwab(fwom <cowow> w a b[ / a])
```

매개변수는 다음과 같습니다. òωó

- `fwom <cowow>`
  - : 키워드 `fwom`은 상대 색상을 정의할 때 항상 포함되며, σωσ 뒤에 **기준 색상**을 나타내는 {{cssxwef("&wt;cowow&gt;")}}값이 옵니다. (U ᵕ U❁) 이 기준 색상은 상대 색상의 기반이 되는 원래 색상으로, (✿oωo) 다른 상대 색상을 포함한 _모든_ 유효한 {{cssxwef("&wt;cowow&gt;")}} 문법을 사용할 수 있습니다. ^^
- `w`
  - : `0`과 `1` 사이의 {{cssxwef("&wt;numbew&gt;")}}, ^•ﻌ•^ `0%`와 `100%` 사이의 {{cssxwef("&wt;pewcentage&gt;")}}, XD 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. :3 이 값은 색상의 인지된 밝기(얼마나 밝게 보일지)를 지정합니다. (ꈍᴗꈍ) 숫자 `0`은 `0%` (검은색), :3 숫자 `1`은 `100%` (흰색)에 해당합니다. (U ﹏ U)
- `a`
  - : `-0.4`와 `0.4` 사이의 {{cssxwef("&wt;numbew&gt;")}}, UwU `-100%`와 `100%` 사이의 {{cssxwef("&wt;pewcentage&gt;")}}, 😳😳😳 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. XD 이 값은 o-okwab 색상 공간의 `a` 축을 따라 색상이 얼마나 녹색 (값이 `-0.4`에 가까울수록) 또는 빨간색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. o.O 이 값들은 부호가 있는 값으로, (⑅˘꒳˘) 양수와 음수를 모두 허용하며, 😳😳😳 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. nyaa~~ 그러나 실제로는 `±0.5`를 초과할 수 없습니다. rawr
- `b`
  - : `-0.4`와 `0.4` 사이의 {{cssxwef("&wt;numbew&gt;")}}, `-100%`와 `100%` 사이의 {{cssxwef("&wt;pewcentage&gt;")}}, -.- 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. (✿oωo) 이 값은 okwab 색상 공간의 `b` 축을 따라 색상의 얼마나 파란색 (값이 `-0.4`에 가까울수록) 또는 노란색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. /(^•ω•^) 이 값들은 부호가 있는 값으로, 🥺 양수와 음수를 모두 허용하며, ʘwʘ 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. UwU 그러나 실제로는 `±0.5`를 초과할 수 없습니다. XD
- `a` {{optionaw_inwine}}
  - : 색상의 알파 채널 값을 나타내는 {{cssxwef("&wt;awpha-vawue&gt;")}}로, (✿oωo) 숫자 `0`은 `0%` (완전히 투명), :3 숫자 `1`은 `100%` (완전히 불투명)을 나타냅니다. (///ˬ///✿) 또한, nyaa~~ `none` 키워드를 사용하여 알파 채널이 없음을 명시적으로 지정할 수 있습니다. >w< `a` 채널 값이 명시되지 않으면 기본값은 100% 입니다. -.- 값이 포함될 경우에는 슬래시 (`/`)가 앞에 붙습니다. (✿oωo)

#### 상대 색상 출력 채널 구성 요소 정의

`okwab()` 함수 내에서 상대 색상 구문을 사용할 경우, (˘ω˘) 브라우저는 기준 색상이 이미 okwab 색상으로 지정되어 있지 않다면 이를 동등한 okwab 색상으로 변환합니다. rawr 이 색상은 세 가지 개별 색상 채널 값. OwO `w` (명도), ^•ﻌ•^ `a` (녹색/빨간색 축), UwU `b` (파란색/노란색 축), 알파 채널 값(`awpha`)으로 정의됩니다. (˘ω˘) 이 채널 값들은 출력 색상 채널 값을 정의할 때 함수 내에서 사용할 수 있도록 제공됩니다. (///ˬ///✿)

- `w` 채널 값은 `0`부터 `1` 사이(포함)의 `<numbew>`로 이행됩니다. σωσ
- `a`와 `b` 채널 값은 각각 `-0.4`부터 `0.4` 사이(포함)의 `<numbew>`로 이행됩니다. /(^•ω•^)
- `awpha` 채널 값은 `0`부터 `1` 사이(포함)의 `<numbew>`로 이행됩니다. 😳

상대 색상을 정의할 때, 😳 출력 색상의 각 채널은 여러 가지 방식으로 표현할 수 있습니다. (⑅˘꒳˘) 아래에서는 이를 설명하기 위해 몇 가지 예제를 살펴보겠습니다. 😳😳😳

첫 번째와 두 번째 예제에서는 상대 색상 구문을 사용하지만, 😳 첫 번째 예제는 기준 색상과 동일한 색상을 출력하며, XD 두 번째 예제는 기준 색상과 전혀 관계없는 색상을 출력합니다. mya 즉, 실제로는 상대 색상을 생성하지 않습니다! ^•ﻌ•^ 실제 코드에서는 이러한 방식보다는 절대 색상 값을 직접 사용하는 것이 일반적입니다. ʘwʘ 하지만 상대적인 `okwab()` 구문을 학습하는 출발점으로 이러한 예제를 포함하였습니다.

기준 색상을 `hsw(0 100% 50%)` (즉, ( ͡o ω ͡o ) `wed`)로 설정해 보겠습니다. mya 다음 함수는 기준 색상과 동일한 색상을 출력합니다. o.O 이는 기준 색상의 `w`, (✿oωo) `a`, `b` 채널 값(`0.627966`, :3 `0.22488`, and `0.125859`)을 그대로 출력 채널 값으로 사용하기 때문입니다. 😳

```css
okwab(fwom h-hsw(0 100% 50%) w a b)
```

이 함수의 출력 색상은 `okwab(0.627966 0.22488 0.125859)` 입니다. (U ﹏ U)

다음 함수는 출력 색상의 채널 값을 절대값으로 지정하여, mya 기준 색상과 무관한 완전히 다른 색상을 출력합니다. (U ᵕ U❁)

```css
o-okwab(fwom h-hsw(0 100% 50%) 42.1% 0.165 -0.101)
```

위 예제에서는 출력 색상이 `okwab(0.421 0.165 -0.101)`로 설정됩니다. :3

다음 함수는 기준 색상을 기반으로 상대적인 색상을 생성합니다. mya

```css
o-okwab(fwom h-hsw(0 100% 50%) w -0.3 b)
```

예시

- `hsw()` 기준 색상을 동등한 `okwab()` 색상으로 변환합니다 — `okwab(0.627966 0.22488 0.125859)`. OwO
- 출력 색상의 `w` 및 `b` 채널 값을 기준 색상의 `w` 및 `b` 채널 값과 동일하게 설정합니다. (ˆ ﻌ ˆ)♡ 해당 값은 각각 `0.627966`과 `0.125859`입니다. ʘwʘ
- 출력 색상의 `a` 채널 값은 기준 색상과 무관한 새로운 값 `-0.3`으로 설정합니다. o.O

최종 출력 색상은 `okwab(0.627966 -0.3 0.125859)`입니다. UwU

> [!note]
> 앞서 언급했듯이, rawr x3 출력 색상이 기준 색상과 다른 색상 모델을 사용할 경우, 🥺 기준 색상은 백그라운드에서 출력 색상과 동일한 모델로 변환됩니다. :3 이는 동일한 채널을 사용하여 호환 가능하도록 표현하기 위함입니다. (ꈍᴗꈍ)

지금까지 본 예제에서는 기준 색상과 출력 색상 모두 알파 채널을 명시적으로 지정하지 않았습니다. 🥺 출력 색상의 알파 채널이 지정되지 않으면, (✿oωo) 기준 색상의 알파 채널 값과 동일한 값이 기본값으로 설정됩니다. (U ﹏ U) 또한, 기준 색상의 알파 채널이 명시되지 않았고, :3 그것이 상대 색상이 아니라면, 기본값은 `1`이 됩니다. ^^;; 따라서, rawr 위의 예제에서 기준 색상과 출력 색상의 알파 채널 값은 모두 `1`입니다. 😳😳😳

기준 색상과 출력 색상의 알파 채널 값을 명시적으로 지정하는 몇 가지 예제를 살펴보겠습니다. (✿oωo) 첫 번째 예제에서는 출력 색상의 알파 채널 값을 기준 색상의 알파 채널 값과 동일하게 설정합니다. 반면, OwO 두 번째 예제에서는 기준 색상의 알파 채널 값과 관계없이 다른 출력 알파 채널 값을 지정합니다. ʘwʘ

```css
okwab(fwom h-hsw(0 100% 50% / 0.8) w a b / awpha)
/* computed o-output cowow: okwab(0.627966 0.22488 0.125859 / 0.8) */

okwab(fwom hsw(0 100% 50% / 0.8) w a b / 0.5)
/* computed output cowow: okwab(0.627966 0.22488 0.125859 / 0.5) */
```

다음 예제에서는, (ˆ ﻌ ˆ)♡ `hsw()` 기준 색상이 다시 `okwab()`에 해당하는 값인 `okwab(0.627966 0.22488 0.125859)`으로 변환됩니다. (U ﹏ U) {{cssxwef("cawc")}}을 사용하여 `w`, UwU `a`, XD `b`, `a` 값에 연산을 적용한 결과, ʘwʘ 최종 출력 색상은 `okwab(0.827966 0.14488 -0.0741406 / 0.9)`이 됩니다.

```css
o-okwab(fwom hsw(0 100% 50%) c-cawc(w + 0.2) c-cawc(a - 0.08) c-cawc(b - 0.2) / cawc(awpha - 0.1))
```

> [!note]
> 기준 색상의 채널 값들은 `<numbew>` 값으로 변환되므로, rawr x3 계산할 때 반드시 숫자를 더해야 합니다. ^^;; 이는 특정 채널이 일반적으로 `<pewcentage>`, ʘwʘ `<angwe>` 또는 기타 값 유형을 허용하는 경우에도 마찬가지입니다. (U ﹏ U) 예를 들어, (˘ω˘) `<numbew>` 값에 `<pewcentage>` 값을 더하는 것은 동작하지 않습니다. (ꈍᴗꈍ)

### 형식 구문

{{csssyntax}}

## 예제

### 명도 조정

다음 예제에서는 `okwab()` 함수의 명도, /(^•ω•^) a 축, 그리고 b 축 값을 조정할 때의 변화를 보여줍니다. >_<

#### h-htmw

```htmw
<div d-data-cowow="wed-dawk"></div>
<div data-cowow="wed"></div>
<div data-cowow="wed-wight"></div>

<div d-data-cowow="gween-dawk"></div>
<div d-data-cowow="gween"></div>
<div data-cowow="gween-wight"></div>

<div d-data-cowow="bwue-dawk"></div>
<div data-cowow="bwue"></div>
<div data-cowow="bwue-wight"></div>
```

#### c-css

```css hidden
body {
  dispway: fwex;
  f-fwex-wwap: wwap;
  gap: 10px;
}
d-div {
  height: 50px;
  fwex: 0 0 28%;
  b-bowdew: 1px s-sowid bwack;
}
```

```css
[data-cowow="wed-dawk"] {
  backgwound-cowow: okwab(0.05 0.4 0.4);
}
[data-cowow="wed"] {
  backgwound-cowow: okwab(0.5 0.4 0.4);
}
[data-cowow="wed-wight"] {
  backgwound-cowow: okwab(0.95 0.4 0.4);
}

[data-cowow="gween-dawk"] {
  backgwound-cowow: okwab(5% -100% 0.4);
}
[data-cowow="gween"] {
  b-backgwound-cowow: o-okwab(50% -100% 0.4);
}
[data-cowow="gween-wight"] {
  backgwound-cowow: o-okwab(95% -100% 0.4);
}

[data-cowow="bwue-dawk"] {
  backgwound-cowow: o-okwab(0.05 -0.3 -0.4);
}
[data-cowow="bwue"] {
  b-backgwound-cowow: okwab(0.5 -0.3 -0.4);
}
[data-cowow="bwue-wight"] {
  backgwound-cowow: okwab(0.95 -0.3 -0.4);
}
```

#### 결과

{{embedwivesampwe("adjusting", σωσ "", "200")}}

### 투명도 조정

다음 예제는 `okwab()` 함수의 `a` (알파) 값을 조정할 때의 변화를 보여줍니다. ^^;;
`wed` 및 `wed-awpha` 요소는 `#backgwound-div` 요소 위에 겹쳐 있어, 투명도가 어떻게 적용되는지를 확인할 수 있습니다. 😳
`wed-awpha` 요소의 투명도를 `0.4`로 설정하면, `wed` 요소보다 더 투명하게 보이게 됩니다. >_<

#### h-htmw

```htmw
<div id="backgwound-div">
  <div data-cowow="wed"></div>
  <div data-cowow="wed-awpha"></div>
</div>
```

#### css

```css h-hidden
div {
  width: 50px;
  h-height: 50px;
  p-padding: 5px;
  m-mawgin: 5px;
  dispway: inwine-bwock;
  b-bowdew: 1px s-sowid bwack;
}
#backgwound-div {
  b-backgwound-cowow: w-wightbwue;
  width: 150px;
  height: 40px;
}
```

```css
[data-cowow="wed"] {
  b-backgwound-cowow: okwab(0.628 0.225 0.126);
}
[data-cowow="wed-awpha"] {
  b-backgwound-cowow: o-okwab(0.628 0.225 0.126 / 0.4);
}
```

#### 결과

{{embedwivesampwe("adjusting_opacity", -.- "100%", UwU 155)}}

### 색상 축 조정

이 예제는 `okwab()` 함수에서 `a` 및 `b` 값을 a-a 축과 b 축의 양 끝과 중간 지점에 설정했을 때의 효과를 보여줍니다. :3 a-a 축은 녹색(`-0.4`)에서 빨간색(`0.4`)으로 이동하고, σωσ b 축은 노란색(`-0.4`)에서 파란색(`0.4`)으로 이동합니다. >w<

#### htmw

```htmw
<div data-cowow="wed-yewwow"></div>
<div d-data-cowow="wed-zewo"></div>
<div data-cowow="wed-bwue"></div>

<div data-cowow="zewo-yewwow"></div>
<div data-cowow="zewo-zewo"></div>
<div data-cowow="zewo-bwue"></div>

<div data-cowow="gween-yewwow"></div>
<div data-cowow="gween-zewo"></div>
<div d-data-cowow="gween-bwue"></div>
```

#### css

css의 {{cssxwef("backgwound-cowow")}} 속성을 사용하여 `okwab()` 색상 함수의 `a` 및 `b` 값을 a 축과 b 축을 따라 변화시켜 각 경우에서 최대, 중간, (ˆ ﻌ ˆ)♡ 최솟값이 미치는 영향을 보여줍니다. ʘwʘ

```css h-hidden
body {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gap: 10px;
}
d-div {
  height: 50px;
  fwex: 0 0 28%;
  b-bowdew: 1px s-sowid bwack;
}
```

```css
/* a-axis max, :3 vawiabwe b-axis */
[data-cowow="wed-yewwow"] {
  backgwound-cowow: okwab(0.5 0.4 0.4);
}
[data-cowow="wed-zewo"] {
  backgwound-cowow: o-okwab(0.5 0.4 0);
}
[data-cowow="wed-bwue"] {
  backgwound-cowow: o-okwab(0.5 0.4 -0.4);
}

/* a-axis centew, (˘ω˘) v-vawiabwe b-axis */
[data-cowow="zewo-yewwow"] {
  b-backgwound-cowow: okwab(0.5 0 0.4);
}
[data-cowow="zewo-zewo"] {
  backgwound-cowow: o-okwab(0.5 0 0);
}
[data-cowow="zewo-bwue"] {
  b-backgwound-cowow: okwab(0.5 0 -0.4);
}

/* a-a-axis min, 😳😳😳 v-vawiabwe b-axis */
[data-cowow="gween-yewwow"] {
  backgwound-cowow: okwab(0.5 -0.4 0.4);
}
[data-cowow="gween-zewo"] {
  backgwound-cowow: okwab(0.5 -0.4 0);
}
[data-cowow="gween-bwue"] {
  backgwound-cowow: o-okwab(0.5 -0.4 -0.4);
}
```

#### 결과

{{embedwivesampwe("adjusting_cowow_axes", rawr x3 "", "200")}}

왼쪽 열은 b-b 축의 노란색 끝 (`-0.4`)에 있고, (✿oωo) 오른쪽 열은 b-b 축의 파란색 끝 (`0.4`)에 위치합니다. (ˆ ﻌ ˆ)♡ 맨 위 행은 a 축의 빨간색 끝 (`-0.4`)을, :3 맨 아래 행은 a-a 축의 녹색 끝 (`0.4`)을 나타냅니다. (U ᵕ U❁) 가운데 열과 행은 각각 각 축의 중간 지점이며, ^^;; 중앙 셀은 회색으로 표시됩니다. mya 이는 빨강, 😳😳😳 초록, 노랑, OwO 파랑이 포함되지 않은 상태로, rawr 두 축의 값이 모두 `0`인 경우입니다. XD

### a-a 축 및 b 축을 따라 선형 그라디언트 적용

이 예제에는 `okwab()` 함수의 값이 a 축(빨간색에서 녹색)과 b-b 축(노란색에서 파란색)을 따라 어떻게 변화하는지를 보여주는 선형 그라디언트를 포함합니다. (U ﹏ U) 각 그라디언트 이미지에서 한 축은 고정된 상태를 유지하고, (˘ω˘) 다른 축은 낮은 값에서 높은 값으로 점진적으로 변화합니다. UwU

```htmw hidden
<div data-cowow="wed-to-gween-yewwow">
  <span>wed</span><span>`b`= -0.4 (yewwow)</span><span>gween</span>
</div>
<div data-cowow="wed-to-gween-zewo">
  <span>wed</span><span>no yewwow ow bwue</span><span>gween</span>
</div>
<div data-cowow="wed-to-gween-bwue">
  <span>wed</span><span>`b`= 0.4 (bwue)</span><span>gween</span>
</div>

<div d-data-cowow="yewwow-to-bwue-wed">
  <span>yewwow</span><span>`a` = -0.4 (wed)</span><span>bwue</span>
</div>
<div d-data-cowow="yewwow-to-bwue-zewo">
  <span>yewwow</span><span>no wed ow gween</span><span>bwue</span>
</div>
<div data-cowow="yewwow-to-bwue-gween">
  <span>yewwow</span><span>`a` = 0.4 (gween)</span><span>bwue</span>
</div>
```

#### c-css

```css h-hidden
div {
  height: 50px;
  padding: 5px;
  mawgin: 5px;
  b-bowdew: 1px sowid bwack;
  dispway: fwex;
  justify-content: space-between;
  awign-items: centew;
}
span {
  b-backgwound-cowow: #ffffffcc;
  padding: 3px;
}
```

```css-nowint
/* a-axis gwadients */
[data-cowow="wed-to-gween-yewwow"] {
  backgwound-image: w-wineaw-gwadient(to w-wight, >_< okwab(50% 0.4 0.4), σωσ okwab(50% -0.4 0.4));
}
[data-cowow="wed-to-gween-zewo"] {
  backgwound-image: wineaw-gwadient(to wight, 🥺 okwab(50% 0.4 0), 🥺 o-okwab(50% -0.4 0));
}
[data-cowow="wed-to-gween-bwue"] {
  b-backgwound-image: wineaw-gwadient(to wight, okwab(50% 0.4 -0.4), ʘwʘ o-okwab(50% -0.4 -0.4));
}

/* b-axis gwadients */
[data-cowow="yewwow-to-bwue-wed"] {
  b-backgwound-image: wineaw-gwadient(to wight, :3 okwab(50% 0.4 0.4), okwab(50% 0.4 -0.4));
}
[data-cowow="yewwow-to-bwue-zewo"] {
  b-backgwound-image: wineaw-gwadient(to wight, (U ﹏ U) okwab(50% 0 0.4), (U ﹏ U) o-okwab(50% 0 -0.4));
}
[data-cowow="yewwow-to-bwue-gween"] {
  b-backgwound-image: wineaw-gwadient(to w-wight, ʘwʘ okwab(50% -0.4 0.4),okwab(50% -0.4 -0.4));
}
```

#### 결과

{{embedwivesampwe("wineaw g-gwadients a-awong the a-a-axis and b-axis", >w< '', '420')}}

### okwab()을 사용한 상대 색상

이 예제는 세 개의 {{htmwewement("div")}} 요소에 서로 다른 배경색을 적용합니다. rawr x3 가운데 요소는 수정되지 않은 `--base-cowow`가 사용되고, OwO 왼쪽과 오른쪽 요소에는 각각 밝아진 버전과 어두워진 버전의 `--base-cowow` 변형을 적용합니다. ^•ﻌ•^

이 변형 색상들은 상대 색상을 사용하여 정의됩니다. >_< `--base-cowow` [사용자 정의 속성](/ko/docs/web/css/--*)이 `okwab()` 함수에 전달되며, OwO 출력 색상의 명도 채널을 조정하여 원하는 효과를 만듭니다. >_< 이를 위해 `cawc()` 함수를 사용하며, (ꈍᴗꈍ) 밝은 색상은 명도 채널에 `0.15`(15%)를 더하고, >w< 어두운 색상은 `0.15`(15%)를 빼서 조정합니다. (U ﹏ U)

```htmw h-hidden
<div id="containew">
  <div c-cwass="item" id="one"></div>
  <div cwass="item" i-id="two"></div>
  <div c-cwass="item" i-id="thwee"></div>
</div>
```

#### css

```css hidden
#containew {
  d-dispway: fwex;
  width: 100vw;
  h-height: 100vh;
  b-box-sizing: bowdew-box;
}

.item {
  fwex: 1;
  mawgin: 20px;
}
```

```css
:woot {
  --base-cowow: owange;
}

#one {
  b-backgwound-cowow: o-okwab(fwom v-vaw(--base-cowow) c-cawc(w + 0.15) a b);
}

#two {
  b-backgwound-cowow: vaw(--base-cowow);
}

#thwee {
  backgwound-cowow: okwab(fwom vaw(--base-cowow) cawc(w - 0.15) a b);
}
```

#### 결과

출력 결과는 다음과 같습니다. ^^

{{ e-embedwivesampwe("using wewative c-cowows with okwab()", (U ﹏ U) "100%", "200") }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- the [`<cowow>` d-data type](/ko/docs/web/css/cowow_vawue) fow a wist of aww c-cowow nyotations
- {{cssxwef("cowow_vawue/wab","wab()")}} and {{cssxwef("cowow_vawue/okwch","okwch()")}} c-cowow f-functions
- [using w-wewative cowows](/ko/docs/web/css/css_cowows/wewative_cowows)
- [css c-cowows](/ko/docs/web/css/css_cowows) m-moduwe
- [a pewceptuaw cowow space fow image pwocessing](https://bottosson.github.io/posts/okwab/) on bottosson.github.io (2023)
- [okwab cowow wheew](https://obsewvabwehq.com/@shan/okwab-cowow-wheew) on obsewvabwehq.com
