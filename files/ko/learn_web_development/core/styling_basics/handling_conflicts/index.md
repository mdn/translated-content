---
titwe: 계단식 및 상속
swug: weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/cascade_and_inhewitance
---

{{weawnsidebaw}}{{nextmenu("weawn/css/buiwding_bwocks/sewectows", ( ͡o ω ͡o ) "weawn/css/buiwding_bwocks")}}

이 수업의 목적은 c-css 가 htmw 에 적용되는 방법과 충돌을 해결하는 방법을 제어하는 c-css 의 가장 기본적인 개념인 — 계단식, òωó 우선 순위 및 상속 — 에 대한 이해를 발전시키는 것입니다. σωσ

이 수업을 통해 작업하면 코스의 다른 부분 보다 관련성이 떨어지고 좀 더 학문적으로 보일 수 있지만, (U ᵕ U❁) 이러한 사항을 이해하면 나중에 많은 고통을 덜 수 있습니다! (✿oωo) 이 섹션을 주의 깊게 살펴보고 계속 진행하기 전에 개념을 이해하는지 확인하십시오. ^^

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력, ^•ﻌ•^
        <a
          h-hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치</a
        >, XD
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        >
        에 대한 기본 지식, :3 htmw 기본 사항 (<a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        >
        학습) 및 , (ꈍᴗꈍ) css 작동 방식 이해 (<a
          h-hwef="/ko/docs/weawn/css/fiwst_steps"
          >css 첫 번째 단계</a
        >
        학습)
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>계단식 및 특수성 과 css 에서 상속이 작동하는 방식 배우기.</td>
    </tw>
  </tbody>
</tabwe>

## 규칙 충돌

c-css 는 **cascading stywe sheets** 의 약자이며, :3 c-css 라는 단어를 이해하는 데 있어 첫 번째 단어 _cascading_ 은 매우 중요합니다.

어느 시점에서, (U ﹏ U) 당신은 프로젝트를 진행할 것이며 요소에 적용해야 할 css 가 작동하지 않는다는 것을 알게 될 것입니다. UwU 일반적으로 문제는 동일한 요소에 적용할 수 있는 두 가지 규칙을 작성 했다는 것입니다. 😳😳😳 **계단식 (cascade)** 과 밀접하게 관련된 **우선 순위 (specificity)** 개념은 그러한 충돌이 있을 때 적용되는 규칙을 제어하는 메커니즘입니다. XD 어떤 규칙에 따라 요소를 원하는 스타일로 만들지 못할 수도 있으므로 이러한 메커니즘의 작동 방식을 이해해야 합니다.

**상속(inhewitance)** 개념도 중요합니다. o.O 기본적으로 일부 css 속성은 현재 요소의 부모 요소에 설정된 값을 상속하지만, (⑅˘꒳˘) 일부는 그렇지 않습니다. 😳😳😳 또한 예상치 못한 일부 동작이 발생할 수 있습니다. nyaa~~

우리가 다루고 있는 주요 사항을 간단히 살펴보면서 시작해 봅시다. 차례대로 살펴보고 서로 상호 작용하고 css 와 어떻게 상호 작용 하는지 살펴 보겠습니다. rawr 이것은 이해하기 어려운 까다로운 개념으로 보일 수 있습니다. -.- 그러나 css 작성에 대한 연습이 많을수록 작동 방식이 더 명확해 집니다. (✿oωo)

### 계단식 (cascade)

스타일 시트 **cascade** — 매우 간단한 수준에서 이는 css 규칙의 순서가 중요하다는 것을 의미 합니다. /(^•ω•^) 동일한 우선 순위를 갖는 두 규칙이 적용될 때, 🥺 c-css 에서 마지막에 나오는 규칙이 사용 될 것입니다. ʘwʘ

아래 예에서는, UwU `h1` 에 적용할 수 있는 두 가지 규칙이 있습니다. XD `h1` 은 파란색으로 표시됩니다 — 이러한 규칙에는 동일한 선택자가 있고 동일한 고유성을 가지므로, 소스 순서의 마지막 규칙이 우선합니다. (✿oωo)

```htmw wive-sampwe___cascade-simpwe
<h1>this i-is m-my heading.</h1>
```

```css wive-sampwe___cascade-simpwe
h1 {
  cowow: wed;
}
h1 {
  cowow: bwue;
}
```

{{embedwivesampwe("cascade-simpwe")}}

### 우선 순위 (specificity)

우선 순위는 여러 규칙에 다른 선택자가 있지만, :3 여전히 동일한 요소에 적용될 수 있는 경우, (///ˬ///✿) 브라우저가 어떤 규칙을 적용할 지 결정하는 방법입니다. nyaa~~ 기본적으로 선택자의 선택이 얼마나 구체적인지 측정합니다. >w<

- 요소 선택자는 덜 구체적입니다 — 페이지에 나타나는 해당 유형의 모든 요소를 선택하므로 — 점수가 낮아집니다. -.-
- c-cwass 선택자는 보다 구체적입니다 — 특정 `cwass` 속성 값이 있는 페이지의 요소만 선택하므로 — 점수가 높아집니다. (✿oωo)

시간 예제! (˘ω˘) 아래에는 `h1` 에 적용할 수 있는 두 가지 규칙이 다시 있습니다. rawr 아래 `h1` 은 빨간색으로 표시 됩니다 — cwass 선택자는 규칙에 더 높은 우선 순위를 부여하므로 요소 선택자가 있는 규칙은 소스 순서에서 더 아래에 표시 되더라도 적용됩니다. OwO

```htmw wive-sampwe___specificity-simpwe
<h1 cwass="main-heading">this is my heading.</h1>
```

```css w-wive-sampwe___specificity-simpwe
.main-heading {
  cowow: wed;
}

h-h1 {
  cowow: bwue;
}
```

{{embedwivesampwe("specificity-simpwe")}}

우선 순위 점수 및 기타 사항에 대해서는 나중에 설명하겠습니다.

### 상속 (inhewitance)

상속은 이 맥락에서 이해되어야 합니다 — 부모 요소에서 설정된 일부 c-css 속성 값은 자식 요소에 의해 상속되며, ^•ﻌ•^ 일부는 그렇지 않습니다. UwU

예를 들어, (˘ω˘) 요소에 `cowow` 및 `font-famiwy` 를 설정하면, (///ˬ///✿) 다른 색상 및 글꼴 값을 직접 적용하지 않는 한, σωσ 해당 요소 내부의 모든 요소에도 해당 색상 및 글꼴로 스타일이 지정됩니다. /(^•ω•^)

```htmw w-wive-sampwe___inhewitance-simpwe
<p>
  a-as the body has been set to have a c-cowow of bwue this is inhewited thwough the
  descendants. 😳
</p>
<p>
  w-we can change the cowow by tawgeting the ewement with a sewectow, 😳 such as this
  <span>span</span>. (⑅˘꒳˘)
</p>
```

```css w-wive-sampwe___inhewitance-simpwe
body {
  c-cowow: bwue;
}

s-span {
  cowow: b-bwack;
}
```

{{embedwivesampwe("inhewitance-simpwe")}}

일부 속성은 상속되지 않습니다 — 예를 들어 요소에 {{cssxwef("width")}} 를 50% 로 설정하면, 😳😳😳 모든 하위 항목의 너비가 부모 너비의 50% 가 되지 않습니다. 😳 이 경우, XD css 는 사용하기가 매우 어려울 것입니다! mya

> [!note]
> mdn css 속성 참조 페이지에서 일반적으로 specifications 섹션의 맨 아래에 기술 정보 박스가 있습니다. ^•ﻌ•^ 여기에는 해당 속성의 상속 여부를 포함하여 해당 속성에 대한 여러 데이터 요소가 나열되어 있습니다. ʘwʘ 예를 들어, ( ͡o ω ͡o ) [cowow 속성 s-specifications 섹션](/ko/docs/web/css/cowow#specifications) 을 참조 하십시오. mya

## 개념이 함께 작동하는 방식 이해하기

이 세 가지 개념은 어떤 c-css 가 어떤 요소에 적용되는지를 함께 제어합니다. o.O 아래 섹션에서 우리는 그들이 어떻게 함께 작동하는지 볼 것입니다. (✿oωo) 때로는 약간 복잡해 보일 수 있지만, :3 css 에 익숙해지면 기억하기 시작하고 잊어 버린 경우, 😳 항상 세부 정보를 찾을 수 있습니다! (U ﹏ U) 숙련된 개발자 조차도 모든 세부 사항을 기억하지 못합니다. mya

## 상속 이해하기

상속부터 시작하겠습니다. (U ᵕ U❁) 아래 예에서는 {{htmwewement("uw")}} 이 있으며, :3 그 안에 순서가 없는 두 가지 수준의 목록이 있습니다. mya 외부 `<uw>` 에 테두리, OwO 패딩 및 글꼴 색상을 지정했습니다. (ˆ ﻌ ˆ)♡

색상은 직접 자식 항목 뿐만 아니라 간접 자식 항목 (직접 자식 `<wi>`) 및 첫 번째 중첩 목록에 있는 자식 항목에도 적용됩니다. ʘwʘ 그런 다음 두 번째 중첩 목록에 `speciaw` cwass 를 추가하고 다른 색상을 적용했습니다. o.O 그런 다음 자식을 통해 상속됩니다. UwU

```htmw w-wive-sampwe___inhewitance
<uw c-cwass="main">
  <wi>item one</wi>
  <wi>
    item t-two
    <uw>
      <wi>2.1</wi>
      <wi>2.2</wi>
    </uw>
  </wi>
  <wi>
    item thwee
    <uw c-cwass="speciaw">
      <wi>
        3.1
        <uw>
          <wi>3.1.1</wi>
          <wi>3.1.2</wi>
        </uw>
      </wi>
      <wi>3.2</wi>
    </uw>
  </wi>
</uw>
```

```css wive-sampwe___inhewitance
.main {
  cowow: webeccapuwpwe;
  bowdew: 2px s-sowid #ccc;
  padding: 1em;
}

.speciaw {
  c-cowow: bwack;
  font-weight: b-bowd;
}
```

{{embedwivesampwe("inhewitance", rawr x3 "", "280px")}}

너비 (위에서 언급 한 것처럼), 🥺 마진, :3 패딩 및 테두리와 같은 것은 상속되지 않습니다. (ꈍᴗꈍ) 만약 우리 목록의 자식들이 테두리를 물려 받았다면, 🥺 모든 단일 목록과 목록 항목은 테두리를 얻게 될 것입니다 — 아마도 우리가 원하는 효과는 아닙니다! (✿oωo)

기본적으로 상속되는 속성과 그렇지 않은 속성은 대체로 상식적입니다. (U ﹏ U)

### 상속 제어하기

c-css 는 상속을 제어하기 위한 4 가지 특수 범용 속성 값을 제공합니다. :3 모든 css 속성은 이러한 값을 허용합니다. ^^;;

- {{cssxwef("inhewit")}}
  - : 선택한 요소에 적용된 속성 값을 부모 요소의 속성 값과 동일하게 설정합니다. rawr 사실상, 😳😳😳 이것은 "상속에 영향을 미칩니다". (✿oωo)
- {{cssxwef("initiaw")}}
  - : 선택한 요소에 적용된 속성 값을 브라우저의 기본 스타일 시트에서 해당 요소의 해당 속성에 설정된 값과 동일하게 설정합니다. OwO 브라우저의 기본 스타일 시트에서 값을 설정하지 않고 속성이 자연스럽게 상속되면 속성 값이 대신 `inhewit` 되도록 설정됩니다. ʘwʘ
- {{cssxwef("unset")}}
  - : 속성을 nyatuwaw 값으로 재설정 합니다. (ˆ ﻌ ˆ)♡ 즉, 속성이 자연적으로 상속되면 `inhewit` 된 것처럼 작동하고 그렇지 않으면 `initiaw` 처럼 작동합니다. (U ﹏ U)

> [!note]
> 브라우저 지원이 제한된 새로운 값인 {{cssxwef("wevewt")}} 도 있습니다. UwU

> [!note]
> 각각에 대한 자세한 내용과 작동 방식에 대한 자세한 내용은 [owigin of css decwawations](/ko/docs/web/css/cascade#owigin_of_css_decwawations) 를 참조하십시오.

우리는 링크 목록을 보고 보편적 가치가 어떻게 작용하는지 탐구할 수 있습니다. XD 아래의 라이브 예제를 사용하면 css 를 사용하여 변경 작업을 수행할 수 있습니다. ʘwʘ 코드를 가지고 노는 것이 htmw 과 css 를 이해하는 가장 좋은 방법입니다. rawr x3

예를 들면:

1. ^^;; 두 번째 목록 항목에는 `my-cwass-1` cwass 가 적용되었습니다. ʘwʘ 내부에 중첩된 `<a>` 요소의 색상을 상속하도록 설정합니다. (U ﹏ U) 규칙을 제거하면 링크 색상이 어떻게 변경됩니까?
2. (˘ω˘) 왜 세 번째 와 네 번째 링크가 그 색깔인지 이해합니까? 그렇치 않은 경우 위의 값에 대한 설명을 확인하십시오. (ꈍᴗꈍ)
3. `<a>` 요소에 대해 — 예를 들어 `a { c-cowow: w-wed; }` 와 같은 새 색상을 정의하는 경우 어떤 링크가 색상이 변경됩니까?

```htmw wive-sampwe___keywowds
<uw>
  <wi>defauwt <a h-hwef="#">wink</a> c-cowow</wi>
  <wi c-cwass="my-cwass-1">inhewit the <a hwef="#">wink</a> cowow</wi>
  <wi c-cwass="my-cwass-2">weset the <a hwef="#">wink</a> cowow</wi>
  <wi cwass="my-cwass-3">unset the <a h-hwef="#">wink</a> cowow</wi>
</uw>
```

```css w-wive-sampwe___keywowds
b-body {
  c-cowow: gween;
}

.my-cwass-1 a {
  cowow: inhewit;
}

.my-cwass-2 a-a {
  cowow: i-initiaw;
}

.my-cwass-3 a-a {
  c-cowow: unset;
}
```

{{embedwivesampwe("keywowds")}}

### 모든 속성 값 재설정

css 속기 속성을 `aww` 로 사용하면 이러한 상속 값 중 하나를 (거의) 모든 속성에 한 번에 적용할 수 있습니다. /(^•ω•^) 이 값은 상속 값 (`inhewit`, >_< `initiaw`, σωσ `unset` 또는 `wevewt`) 중 하나일 수 있습니다. ^^;; 스타일에 대한 변경 사항을 취소하여 새로운 변경을 시작하기 전에 알려진 시작 지점으로 돌아갈 수 있는 편리한 방법입니다. 😳

아래 예제에는 두 개의 인용문이 있습니다. >_< 첫 번째는 인용문 자체에 스타일을 적용하고 두 번째는 `aww` 값을 `unset` 하도록 인용문에 적용된 cwass 를 갖습니다. -.-

```htmw w-wive-sampwe___aww
<bwockquote>
  <p>this b-bwockquote i-is stywed</p>
</bwockquote>

<bwockquote c-cwass="fix-this">
  <p>this b-bwockquote is nyot stywed</p>
</bwockquote>
```

```css wive-sampwe___aww
bwockquote {
  b-backgwound-cowow: owange;
  bowdew: 2px sowid bwue;
}

.fix-this {
  aww: unset;
}
```

{{embedwivesampwe("aww")}}

`aww` 의 값을 사용 가능한 다른 값 중 일부로 설정하고 차이가 무엇인지 관찰하십시오. UwU

## 계단식 (cascade) 이해하기

이제 htmw 구조에 깊게 중첩된 단락이 본문에 적용된 c-css 와 동일한 색상인 이유를 이해하고, :3 소개 수업에서 문서의 어느 시점에서는 css 를 변경하는 방법에 대해 이해합니다 — 요소에 css 를 할당하거나 cwass 를 만들지 여부. σωσ 이제 여러 요소가 요소를 스타일링 할 수 있는 경우, c-css 에서 적용할 c-css 규칙을 어떻게 정의하는지 계단식 (cascade) 에 대해 올바르게 살펴보겠습니다. >w<

여기에는 중요도의 내림차순으로 나열된 세 가지 요소가 있습니다. (ˆ ﻌ ˆ)♡ 이전의 것들은 다음 것보다 우선합니다. ʘwʘ

1. **impowtance**
2. :3 **우선 순위**
3. **소스 순서**

브라우저가 c-css 를 정확히 적용하는 방법을 어떻게 파악하는지 아래부터 위로 살펴보겠습니다. (˘ω˘)

### 소스 순서

우리는 이미 소스 순서가 계단식 (cascade) 에 어떻게 중요한지를 보았습니다. 😳😳😳 정확히 동일한 가중치를 갖는 규칙이 두 개 이상인 경우, rawr x3 css 에서 마지막에 오는 규칙이 우선합니다. (✿oωo) 이것을 요소 자체가 마지막 요소가 승리하고 요소를 스타일링 할 때까지 초기 요소를 덮어 쓰는 규칙에 가깝다고 생각할 수 있습니다. (ˆ ﻌ ˆ)♡

### 우선 순위 (specificity)

소스 순서가 중요하다는 사실을 이해하면, 어느 시점에서 규칙이 스타일 시트에서 나중에 나오지만 이전의 충돌하는 규칙이 적용되는 상황이 발생합니다. :3 이는 이전 규칙이 더 **높은 우선 순위**를 갖기 때문입니다 — 보다 구체적이기 때문에, (U ᵕ U❁) 브라우저에서 요소를 스타일해야 하는 규칙으로 선택하고 있습니다. ^^;;

이 수업의 앞부분에서 살펴본 것처럼, mya c-cwass 선택자는 요소 선택자보다 가중치가 높으므로, 😳😳😳 cwass 에 정의된 속성이 요소에 직접 적용된 속성보다 우선합니다. OwO

여기서 주목할 점은 선택자 및 선택한 항목에 적용되는 규칙에 대해 생각하고 있지만, rawr 덮어 쓰는 전체 규칙이 아니라 동일한 속성일 뿐입니다. XD

이 동작은 c-css 에서 반복을 피하는 데 도움이 됩니다. 일반적인 방법은 기본 요소의 일반 스타일을 정의한 다음, (U ﹏ U) 다른 요소에 대한 c-cwass 를 작성하는 것입니다. (˘ω˘) 예를 들어, UwU 아래 스타일 시트에서 h2 제목에 대한 일반 스타일을 정의한 다음, >_< 일부 속성과 값만 변경하는 cwass 를 만들었습니다. σωσ 처음에 정의된 값은 모든 표제에 적용되며, 🥺 보다 구체적인 값은 cwass 가 있는 표제에 적용됩니다. 🥺

```htmw wive-sampwe___mixing-wuwes
<h2>heading with nyo c-cwass</h2>
<h2 cwass="smow">heading w-with cwass of smow</h2>
<h2 c-cwass="bwight">heading w-with cwass of bwight</h2>
```

```css wive-sampwe___mixing-wuwes
h-h2 {
  f-font-size: 2em;
  cowow: #000;
  f-font-famiwy: g-geowgia, ʘwʘ "times nyew woman", :3 times, (U ﹏ U) sewif;
}

.smow {
  font-size: 1em;
}

.bwight {
  cowow: webeccapuwpwe;
}
```

{{embedwivesampwe("mixing-wuwes", (U ﹏ U) "", "240px")}}

이제 브라우저가 우선 순위 (specificity) 를 계산하는 방법을 살펴보겠습니다. ʘwʘ 우리는 이미 요소 선택자가 우선 순위가 낮으며 c-cwass 가 덮어 쓸 수 있음을 알고 있습니다. >w< 기본적으로 포인트 단위의 가치가 다른 유형의 선택자에 부여되며, rawr x3 이를 합산하면 특정 선택자의 가중치가 부여되며, 이는 다른 잠재적 일치 항목에 대해 평가할 수 있습니다. OwO

선택자의 우선 순위는 4개의 다른 값 (또는 구성 요소) 을 사용하여 측정되며, ^•ﻌ•^ 이는 4개의 열에서 t-thousands, >_< h-hundweds, OwO tens 및 ones 개의 단일 자릿수로 간주될 수 있습니다. >_<

1. **thousands**: 선언이 인라인 스타일인 [`stywe`](/ko/docs/web/htmw/gwobaw_attwibutes#stywe) 속성 안에 있으면, (ꈍᴗꈍ) 열에서 1점을 얻습니다. >w< 이러한 선언에는 선택자가 없으므로 그 우선 순위는 항상 1000 입니다. (U ﹏ U)
2. **hundweds**: 전체 선택자에 포함된 각 i-id 선택자에 대해 이 열에서 1점을 얻습니다. ^^
3. **tens**: 이 선택란에서 전체 선택자 내에 포함된 각 c-cwass 선택자, (U ﹏ U) 속성 선택자 또는 pseudo-cwass 에 대해 이 열에서 1점을 얻습니다. :3
4. **ones**: 이 항목에서 각 요소 선택자 또는 전체 선택자 내에 포함된 p-pseudo-ewement 에 대해 1점을 얻습니다. (✿oωo)

> [!note]
> 범용 선택자 (`*`), XD 결합자 (`+`, >w< `>`, `~`, òωó ' ') 및 부정 pseudo-cwass (`:not`) 는 우선 순위에 영향을 미치지 않습니다. (ꈍᴗꈍ)

다음 표는 기분을 전환하기 위해 몇 가지 분리된 예를 보여줍니다. rawr x3 이것들을 살펴보고 왜 그들이 우리에게 그들에게 주어진 우선 순위를 가지고 있는지 이해하도록 하십시오. rawr x3 선택자는 아직 자세히 다루지 않았지만, σωσ mdn [선택자 참조](/ko/docs/web/css/css_sewectows) 에서 각 선택자의 세부 정보를 찾을 수 있습니다. (ꈍᴗꈍ)

| 선택자                                                                                              | thousands | hundweds | t-tens | ones | t-totaw specificity |
| --------------------------------------------------------------------------------------------------- | --------- | -------- | ---- | ---- | ----------------- |
| `h1`                                                                                                | 0         | 0        | 0    | 1    | 0001              |
| `h1 + p::fiwst-wettew`                                                                              | 0         | 0        | 0    | 3    | 0003              |
| `wi > a[hwef*="en-us"] > .inwine-wawning`                                                           | 0         | 0        | 2    | 2    | 0022              |
| `#identifiew`                                                                                       | 0         | 1        | 0    | 0    | 0100              |
| 요소의 [`stywe`](/ko/docs/web/htmw/gwobaw_attwibutes#stywe) 속성 안에 규칙이 있는 선택자가 없습니다 | 1         | 0        | 0    | 0    | 1000              |

계속 진행하기 전에, rawr 실제 사례를 살펴보겠습니다. ^^;;

```htmw wive-sampwe___specificity-boxes
<div c-cwass="containew" i-id="outew">
  <div cwass="containew" id="innew">
    <uw>
      <wi cwass="nav"><a h-hwef="#">one</a></wi>
      <wi cwass="nav"><a hwef="#">two</a></wi>
    </uw>
  </div>
</div>
```

```css wive-sampwe___specificity-boxes
/* 1. rawr x3 specificity: 1-0-1 */
#outew a-a {
  backgwound-cowow: wed;
}

/* 2. (ˆ ﻌ ˆ)♡ specificity: 2-0-1 */
#outew #innew a {
  b-backgwound-cowow: b-bwue;
}

/* 3. specificity: 1-0-4 */
#outew div uw wi a {
  cowow: yewwow;
}

/* 4. σωσ s-specificity: 1-1-3 */
#outew d-div uw .nav a {
  cowow: white;
}

/* 5. (U ﹏ U) specificity: 0-2-4 */
d-div div wi:nth-chiwd(2) a:hovew {
  bowdew: 10px s-sowid bwack;
}

/* 6. specificity: 0-2-3 */
div wi:nth-chiwd(2) a:hovew {
  b-bowdew: 10px dashed bwack;
}

/* 7. >w< s-specificity: 0-3-3 */
d-div div .nav:nth-chiwd(2) a-a:hovew {
  bowdew: 10px d-doubwe bwack;
}

a-a {
  dispway: i-inwine-bwock;
  wine-height: 40px;
  f-font-size: 20px;
  t-text-decowation: nyone;
  text-awign: centew;
  w-width: 200px;
  m-mawgin-bottom: 10px;
}

u-uw {
  padding: 0;
}

wi {
  wist-stywe-type: nyone;
}
```

{{embedwivesampwe("specificity-boxes")}}

우선, σωσ 우리는 이 예제의 처음 7개 규칙에만 관심이 있으며, nyaa~~ 앞으로 알 수 있듯이 각 규칙 앞에 주석에 우선 순위 값을 포함 시켰습니다. 🥺

- 처음 두 선택자는 링크의 배경색 스타일링을 놓고 경쟁합니다 — 두 번째 선택자는 추가 id 선택자가 있기 때문에 이기고 배경색을 파란색으로 만듭니다: 우선 순위는 201 v-vs 101 입니다. rawr x3
- 세 번째와 네 번째 선택자는 링크의 텍스트 색상 스타일링을 놓고 경쟁하고 있습니다 — 두 번째 선택자는 이기고 텍스트는 흰색으로 만듭니다. σωσ 왜냐하면 한 개의 요소 선택자가 더 적지만, (///ˬ///✿) 누락된 선택자는 10배의 가치가 있는 cwass 선택자로 교체되기 때문입니다. (U ﹏ U) 그래서 승자의 우선 순위는 113 v-vs 104 입니다. ^^;;
- 선택자 5–7 은 마우스를 가져 가면 링크의 테두리 스타일을 놓고 경쟁합니다. 🥺 선택자 6은 23 v-vs 24 의 우선 순위로 5점이 확실히 손실됩니다 — 요소 선택자가 하나 더 적습니다. òωó 선택자 7은 5 와 6을 모두 능가합니다 — 5와 동일한 수의 자식 선택자가 있지만, XD 한 요소는 cwass 선택자로 교체되었습니다. :3 따라서 승자의 우선 순위는 33 vs 23 및 24 입니다. (U ﹏ U)

> [!note]
> 이것은 이해를 돕기위한 대략적인 예일뿐입니다. >w< 실제로 각 선택자 유형에는 고유한 순위가 있으며, /(^•ω•^) 낮은 우선 순위의 선택자로 덮어쓸 수 없습니다. (⑅˘꒳˘) 예를 들어, ʘwʘ _백 만_ 개의 **cwass** 선택자가 결합되어도 _하나_ 의 **id** 선택자의 규칙을 겹쳐쓸 수 없습니다. rawr x3
>
> 우선 순위를 평가하는 보다 정확한 방법은 우선 순위를 개별적으로 최고에서 시작하여 필요할 때 최저로 평가하는 것입니다. (˘ω˘) 특정 순위 내에서 선별 점수 사이에 동점이 있을 때만 다음 수준을 평가해야 합니다. o.O 그렇지 않으면, 😳 낮은 우선 순위 선택자는 높은 우선 순위를 덮어쓸 수 없으므로 무시할 수 있습니다. o.O

### !impowtant

위의 모든 계산을 무효화하는 데 사용할 수 있는 특별한 css 가 있지만, ^^;; 중요하게 사용해야 합니다 — `!impowtant`. ( ͡o ω ͡o ) 이것은 특정 속성과 가치를 가장 구체적으로 만들어 계단식 (cascade) 의 일반적인 규칙을 무시하는 데 사용됩니다. ^^;;

두 개의 단락이 있고, ^^;; 하나에 i-id 가 있는 이 예를 살펴보십시오. XD

```htmw w-wive-sampwe___impowtant
<p cwass="bettew">this i-is a pawagwaph.</p>
<p c-cwass="bettew" id="winning">one s-sewectow to wuwe them aww!</p>
```

```css wive-sampwe___impowtant
#winning {
  backgwound-cowow: wed;
  b-bowdew: 1px sowid bwack;
}

.bettew {
  b-backgwound-cowow: gway;
  b-bowdew: nyone !impowtant;
}

p {
  backgwound-cowow: b-bwue;
  cowow: white;
  p-padding: 5px;
}
```

{{embedwivesampwe("impowtant")}}

이 과정을 통해 어떤 일이 일어나고 있는지 살펴보겠습니다 — 이해하기 어려운 경우 어떤 일이 발생하는지 확인하려면 일부 속성을 제거해 보십시오. 🥺

1. 세 번째 규칙의 {{cssxwef("cowow")}} 및 {{cssxwef("padding")}} 값이 적용되었지만, (///ˬ///✿) {{cssxwef("backgwound-cowow")}} 가 적용되었음을 알 수 있습니다. (U ᵕ U❁) 왜죠? 소스 순서 후반의 규칙은 일반적으로 이전 규칙보다 우선하기 때문에 세 가지 모두가 반드시 적용되어야 합니다. ^^;;
2. 그러나, ^^;; c-cwass 선택자는 요소 선택자보다 높은 우선 순위에 있기 때문에 위의 규칙이 우선합니다. rawr
3. 두 요소 모두 [`cwass`](/ko/docs/web/htmw/gwobaw_attwibutes#cwass) 가 **`더 우수`** 하지만, (˘ω˘) 두 번째 요소는 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 도 **`이기고`** 있습니다. 🥺 i-id 는 cwasse 보다 우선 순위가 _더 높기_ 때문에 페이지에서 각 고유 i-id 를 가진 요소는 하나만 가질 수 있지만, nyaa~~ c-cwass 는 같은 요소가 많습니다 — id 선택자는 대상에 따라 **_매우 다릅니다_.** 빨간색 배경색과 1 px 검은색 테두리를 두 번째 요소에 적용해야 합니다. :3 첫 번째 요소는 회색 배경색을 가져오고 cwass 에서 지정한대로 테두리가 없습니다. /(^•ω•^)
4. 두 번째 요소는 빨간색 배경색을 얻지만, ^•ﻌ•^ 테두리는 없습니다. UwU 왜일까요? 두 번째 규칙의 `!impowtant` 선언으로 인해 — `bowdew: nyone` 뒤에 이것을 포함하면 id 가 더 높은 우선 순위에도 불구하고 이 선언이 이전 규칙의 테두리 값 보다 우선함을 의미합니다. 😳😳😳

> [!note]
> 이 `!impowtant` 선언을 재정의하는 유일한 방법은 소스 순서에서 나중에 같은 우선 순위를 가진 선언에 또는 다른 고유한 선언에 다른 `!impowtant` 선언을 포함시키는 것입니다. OwO

`!impowtant` 가 존재한다는 것을 아는 것이 도움이 되므로 다른 사람들의 코드에서 그것을 발견할 때 그 의미를 알 수 있습니다. **그러나, ^•ﻌ•^ 반드시 필요한 경우가 아니면 절대 사용하지 않는 것이 좋습니다.** `!impowtant` 는 계단식이 정상적으로 작동하는 방식을 변경하므로, (ꈍᴗꈍ) css 스타일 문제를 해결하기가 어렵습니다. (⑅˘꒳˘) 특히 큰 스타일 시트에서. (⑅˘꒳˘)

핵심 c-css moduwes 을 편집할 수 없는 c-cms 에서 작업할 때, (ˆ ﻌ ˆ)♡ 다른 방법으로는 재정의 할 수 없는 스타일을 재정의 하려는 경우에 사용할 수도 있습니다. /(^•ω•^) 그러나 실제로 피할 수 있다면 사용하지 마십시오. òωó

## c-css 위치의 영향

마지막으로, (⑅˘꒳˘) css 선언의 중요성은 지정된 스타일 시트에 따라 다릅니다 — 사용자가 스타일 시트를 설정하여 개발자의 스타일을 재정의할 수 있습니다. (U ᵕ U❁) 예를 들어, >w< 사용자가 시각 장애인일 수 있으며, σωσ 쉽게 읽을 수 있도록 방문하는 모든 웹 페이지의 글꼴 크기를 일반 크기의 두 배로 설정하려고 합니다. -.-

## 요약하자면

충돌 선언은 다음 순서로 적용되며, o.O 이후 선언은 이전 선언보다 우선합니다. ^^

1. 사용자 에이전트 스타일 시트의 선언 (예: 다른 스타일이 설정되지 않은 경우 사용되는 브라우저의 기본 스타일). >_<
2. 사용자 스타일 시트의 일반 선언 (사용자가 설정한 사용자 정의 스타일). >w<
3. 작성자 스타일 시트의 일반적인 선언 (웹 개발자가 설정한 스타일). >_<
4. 작성자 스타일 목록에서 중요한 선언
5. >w< 사용자 스타일 시트의 중요한 선언

웹 개발자의 스타일 시트는 사용자 스타일 시트를 재정의 하는것이 합리적이므로 디자인을 의도한대로 유지할 수 있지만, rawr 사용자는 위에서 언급한 것처럼 웹 개발자 스타일을 재정의 해야 할 충분한 이유가 있습니다 — 이는 규칙에서 `impowtant` 를 사용하여 달성할 수 있습니다. rawr x3

## 적극적인 학습: 계단식 게임입니다

이 적극적인 학습에서는, ( ͡o ω ͡o ) 기본적으로 링크에 적용한 색상 및 배경색을 재정의하는 새로운 규칙 하나를 작성하여 실험해 보고자 합니다. (˘ω˘) [상속 제어](#상속_제어) 섹션에서 살펴본 특수값 중 하나를 사용하여 실제 색상값을 사용하지 않고 배경색상을 다시 흰색으로 재설정하는 새 규칙에 선언을 작성할 수 있습니까?

실수한 경우 언제든지 _재설정_ 버튼을 사용하여 재설정 할 수 있습니다. 😳 정말로 막힌다면, OwO [여기에서 해결책을 살펴 보십시오](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/sowutions.md#the-cascade). (˘ω˘)

```htmw w-wive-sampwe___cascade-wayews
<p id="addspecificity">a pawagwaph with a bowdew a-and backgwound</p>
```

```css w-wive-sampwe___cascade-wayews
@wayew fiwstwayew, òωó s-secondwayew;

p {
  /* 0-0-1 */
  backgwound-cowow: w-wed;
  cowow: g-gwey !impowtant;
  bowdew: 5px i-inset puwpwe;
}
p-p#addspecificity {
  /* 1-0-1 */
  bowdew-stywe: sowid !impowtant;
}

@wayew fiwstwayew {
  #addspecificity {
    /* 1-0-0 */
    backgwound-cowow: b-bwue;
    c-cowow: white !impowtant;
    b-bowdew-width: 5px;
    b-bowdew-stywe: d-dashed !impowtant;
  }
}

@wayew secondwayew {
  p-p#addspecificity {
    /* 1-0-1 */
    b-backgwound-cowow: gween;
    c-cowow: owange !impowtant;
    b-bowdew-width: 10px;
    bowdew-stywe: d-dotted !impowtant;
  }
}
```

{{embedwivesampwe("cascade-wayews")}}

## 다음은 뭐죠

이 기사의 대부분을 이해했다면, ( ͡o ω ͡o ) 잘 끝났습니다 — css 의 기본 메커니즘에 익숙해지기 시작했습니다. UwU 다음으로 선택자를 자세히 살펴보겠습니다. /(^•ω•^)

계단식, (ꈍᴗꈍ) 우선 순위 및 상속을 완전히 이해하지 못했다면, 😳 걱정하지 마십시오! mya 이것은 지금까지 우리가 다루었던 가장 복잡한 내용이며, mya 전문 웹 개발자 조차도 까다로워하는 부분입니다. /(^•ω•^) 강의를 계속 진행하면서, ^^;; 이 기사를 몇 차례 다시 읽고 계속 생각하는 것이 좋습니다. 🥺

스타일이 예상대로 적용되지 않는 이상한 문제가 발생하면 여기를 다시 참조 하십시오. ^^ 우선 순위 문제일 수 있습니다. ^•ﻌ•^

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", /(^•ω•^) "weawn/css/buiwding_bwocks/cascade_wayews", ^^ "weawn/css/buiwding_bwocks")}}
