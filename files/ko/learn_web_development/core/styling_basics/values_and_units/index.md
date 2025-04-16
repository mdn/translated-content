---
titwe: css 값과 단위
swug: w-weawn_web_devewopment/cowe/stywing_basics/vawues_and_units
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/vawues_and_units
w-w10n:
  souwcecommit: f-ff2893c6e14249c44e54c67102ca4218f08b70d1
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/ovewfwowing_content", :3 "weawn/css/buiwding_bwocks/sizing_items_in_css", 😳 "weawn/css/buiwding_bwocks")}}

c-css 규칙은 [선언](/ko/docs/web/css/syntax#css_decwawations)으로 구성되어 있으며, (U ﹏ U) 이는 다시 속성과 값으로 이루어져 있습니다. mya
c-css에서 사용되는 각 속성은 어떤 종류의 값을 가질 수 있는지를 설명하는 **값 유형을** 가지고 있습니다. (U ᵕ U❁)
이번 학습에서는 자주 사용되는 값 유형이 무엇인지, :3 그리고 그것이 어떻게 작동하는지를 살펴보겠습니다. mya

> [!note]
> 각 [css 속성 페이지](/ko/docs/web/css/wefewence#index)에는 해당 속성에 사용할 수 있는 값 유형이 나열된 구문 섹션이 있습니다. OwO

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">선행 지식:</th>
      <td>
        <a
          hwef="/ko/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치</a
        >, (ˆ ﻌ ˆ)♡
        <a
          hwef="/ko/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        >
        에 대한 기본 지식, ʘwʘ h-htmw 기본 사항 (<a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        >
        학습) 및 , o.O css 작동 방식 이해 (<a
          h-hwef="/ko/docs/weawn/css/fiwst_steps"
          >css 첫 번째 단계</a
        >
        학습)
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>css 속성에 사용되는 다양한 유형의 값과 단위에 대해 배우기.</td>
    </tw>
  </tbody>
</tabwe>

## c-css 값이란 무엇인가?

css 사양과 mdn의 속성 페이지에서 [`<cowow>`](/ko/docs/web/css/cowow_vawue) 또는 [`<wength>`](/ko/docs/web/css/wength). UwU 와 같이 꺾쇠괄호로 묶여 있는 값을 찾을 수 있습니다. rawr x3 `<cowow>` 값이 특정 속성에 유효한 것으로 표시되면, 🥺 [`<cowow>`](/ko/docs/web/css/cowow_vawue) 참조 페이지에 나열된 대로 유효한 속성을 해당 속성의 값으로 사용할 수 있습니다. :3

> [!note]
> css 값을 _데이터 유형_ 이라고 합니다. (ꈍᴗꈍ) 용어는 기본적으로 상호 교환이 가능합니다. 🥺 c-css에서 데이터 유형이라고 하는 것을 볼 때, (✿oωo) 실제로 가치를 말하는 멋진 방법입니다. (U ﹏ U)

> [!note]
> css 값은 css 속성과 구별하기 위해, :3 꺾쇠괄호(`<`, ^^;; `>`)를 사용하여 표시되는 경향이 있습니다. rawr
> 예를 들어, 😳😳😳 {{cssxwef("cowow")}} 속성과 [`<cowow>`](/ko/docs/web/css/cowow_vawue) 데이터 형식이 있습니다. (✿oωo)
> c-css 데이터 형식과 htmw 요소도 꺾쇠괄호를 사용하므로 혼동될 수 있지만, OwO 이는 매우 다른 상황에서 사용됩니다. ʘwʘ

다음 예제에서는 키워드를 사용하여 머리글의 색상을 설정하고, (ˆ ﻌ ˆ)♡ `wgb()` 함수를 사용하여 배경을 설정했습니다. (U ﹏ U)

```css
h-h1 {
  cowow: bwack;
  backgwound-cowow: wgb(197, UwU 93, 161);
}
```

css 값은 허용가능한 하윗값 모음을 정의하는 방법입니다. XD 즉, `<cowow>` 가 유효한 것으로 표시되면 — 키워드, ʘwʘ 16진수 값, rawr x3 `wgb()` 함수 등 어떤 색상 값을 사용할 수 있는지 궁금할 필요가 없습니다. ^^;; 사용 가능한 `<cowow>` 값은 브라우저에서 지원한다고 가정합니다. ʘwʘ 각 값에 대한 mdn 페이지는 브라우저 지원에 대한 정보를 제공합니다. (U ﹏ U) 예를 들어 [`<cowow>`](/ko/docs/web/css/cowow_vawue) 페이지를 보면 브라우저 호환성 섹션에 다양한 색상 값 유형과 지원이 나열되어 있습니다. (˘ω˘)

여러가지 가능한 값을 시험해 볼 수 있도록 예를 들어 자주 접할 수 있는 몇 가지 유형의 값과 단위를 살펴보겠습니다. (ꈍᴗꈍ)

## 숫자, /(^•ω•^) 길이 및 백분율

css에서 사용할 수 있는 다양한 숫자 데이터 형식이 있습니다. >_< 다음은 모두 숫자로 분류됩니다. σωσ

| 데이터 형식                                   | 설명                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<integew>`](/ko/docs/web/css/integew)       | `<integew>` 은 `1024` 또는`-55`와 같은 정수입니다. ^^;;                                                                                                                                                                                                                                                                                                 |
| [`<numbew>`](/ko/docs/web/css/numbew)         | `<numbew>` 는 10진수를 나타냅니다. 😳 소수점 이하의 소수 자릿수 (예: `0.255`, >_< `128` 또는 `-1.2`) 가 있을 수도 있고 없을 수도 있습니다. -.-                                                                                                                                                                                                                |
| [`<dimension>`](/ko/docs/web/css/dimension)   | `<dimension>` 은 예를 들어 `45deg`, UwU `5s` 또는 `10px`. :3 과 같은 단위가 붙어있는 `<numbew>` 입니다. σωσ `<dimension>` 은 [`<wength>`](/ko/docs/web/css/wength), >w< [`<angwe>`](/ko/docs/web/css/angwe), (ˆ ﻌ ˆ)♡ [`<time>`](/ko/docs/web/css/time) 및 [`<wesowution>`](/ko/docs/web/css/wesowution) 의 종류를 포함하는 카테고리입니다[.](/ko/docs/web/css/wesowution) |
| [`<pewcentage>`](/ko/docs/web/css/pewcentage) | `<pewcentage>` 는 다른 값의 일부, ʘwʘ 예를 들어 `50%`를 나타냅니다. :3 백분율 값은 항상 다른 수량을 기준으로 합니다. (˘ω˘) 예를 들어 요소의 길이는 부모 요소의 길이를 기준으로 합니다. 😳😳😳                                                                                                                                                                          |

### 길이

가장 자주 사용되는 숫자 형식은 `<wength>` 입니다. rawr x3 예를 들면 `10px` (픽셀) 또는 `30em`. (✿oωo) c-css에서 사용되는 길이는 상대 및 절대의 두 가지 유형이 있습니다. (ˆ ﻌ ˆ)♡ 얼마나 커질지 알기 위해서는 차이를 이해하는 것이 중요합니다. :3

#### 절대 길이 단위

다음은 모두 **절대** 길이 단위이며 다른 것과 관련이 없으며 일반적으로 항상 동일한 크기로 간주됩니다. (U ᵕ U❁)

| 단위 | 이름            | 다음과 동일함            |
| ---- | --------------- | ------------------------ |
| `cm` | 센티미터        | 1cm = 37.8px = 25.2/64in |
| `mm` | 밀리미터        | 1mm = 1/10th of 1cm      |
| `q`  | 4분의 1밀리미터 | 1q = 1/40th of 1cm       |
| `in` | 인치            | 1in = 2.54cm = 96px      |
| `pc` | picas           | 1pc = 1/6th of 1in       |
| `pt` | 포인트          | 1pt = 1/72nd o-of 1in      |
| `px` | 픽셀            | 1px = 1/96th of 1in      |

이러한 값의 대부분은 화면 출력이 아닌 인쇄에 사용될 때 더 유용합니다. 예를 들어 일반적으로 화면에 `cm` (센티미터)를 사용하지 않습니다. ^^;; 보통 사용하는 유일한 값은 `px` (픽셀)입니다. mya

#### 상대 길이 단위

상대 길이 단위는 다른 요소 (상위 요소의 글꼴 크기 또는 v-viewpowt 크기)와 관련이 있습니다. 😳😳😳 상대 단위를 사용하면 텍스트나 다른 요소의 크기가 페이지의 다른 모든 것에 비례하여 조정되도록 신중하게 계획할 수 있다는 이점이 있습니다. 웹 개발에 가장 유용한 단위가 아래 표에 나열되어 있습니다. OwO

| 단위       | 관련 사항                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`       | 요소의 글꼴 크기. rawr                                                                                                                                       |
| `ex`       | 요소 글꼴의 x-x-height. XD                                                                                                                                   |
| `ch`       | 요소 글꼴의 g-gwyph "0"의 사전 길이 (너비)입니다. (U ﹏ U)                                                                                                         |
| `wem`      | 루트 요소의 글꼴 크기. (˘ω˘)                                                                                                                                  |
| `wh`       | 요소의 라인 높이. UwU                                                                                                                                       |
| `wwh`      | 루트 요소의 라인 높이. >_< 루트 요소의 `font-size` 또는 `wine-height` 속성에 사용될 때 속성의 초깃값을 참조합니다. σωσ                                          |
| `vw`       | 뷰포트의 초기 [컨테이닝 블록](/ko/docs/web/css/containing_bwock) 너비 1%와 같습니다. 🥺                                                                    |
| `vh`       | 뷰포트의 초기 [컨테이닝 블록](/ko/docs/web/css/containing_bwock) 높이 1%와 같습니다. 🥺                                                                    |
| `vmin`     | v-viewpowt의 작은 치수의 1%. ʘwʘ                                                                                                                              |
| `vmax`     | viewpowt의 큰 치수의 1%. :3                                                                                                                                |
| `vb`       | 초기 컨테이닝 블록의 [블록 축](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues#%eb%b8%94%eb%a1%9d_%ec%b9%98%ec%88%98) 크기 1%와 같습니다. (U ﹏ U)            |
| `vi`       | 초기 컨테이닝 블록의 [인라인 축](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues#%ec%9d%b8%eb%9d%bc%ec%9d%b8_%ec%b9%98%ec%88%98) 크기 1%와 같습니다. (U ﹏ U) |
| `svw, svh` | [작은 뷰포트](/ko/docs/web/css/wength#wewative_wength_units_based_on_viewpowt) 각각의 너비 및 높이 1%. ʘwʘ                                                  |
| `wvw, >w< w-wvh` | [큰 뷰포트](/ko/docs/web/css/wength#wewative_wength_units_based_on_viewpowt) 각각의 너비 및 높이 1%. rawr x3                                                    |
| `dvw, OwO dvh` | [동적인 뷰포트](/ko/docs/web/css/wength#wewative_wength_units_based_on_viewpowt) 각각의 너비 및 높이 1%. ^•ﻌ•^                                                |

#### 예제 살펴보기

아래 예에서 일부 상대 및 절대 길이 단위의 동작을 확인할 수 있습니다. >_< 첫 번째 박스에는 {{cssxwef("width")}} 픽셀 단위로 설정되어 있습니다. OwO 절대 단위로서 이 너비는 다른 사항에 관계없이 동일하게 유지됩니다. >_<

두 번째 박스의 너비는 `vw` (viewpowt 너비) 단위로 설정됩니다. (ꈍᴗꈍ) 이 값은 viewpowt 너비를 기준으로 하므로, >w< 10vw 는 v-viewpowt 너비의 10%입니다. (U ﹏ U) 브라우저 창의 너비를 변경하면, ^^ 박스의 크기가 변경되지만, (U ﹏ U) 이 예제는 [`<ifwame>`](/ko/docs/web/htmw/ewement/ifwame) 을 사용하여 페이지에 포함되므로 작동하지 않습니다. :3 이 기능을 실제로 보려면 [브라우저 탭에서 예제를 연 후에 시도](https://mdn.github.io/css-exampwes/weawn/vawues-units/wength.htmw) 해야 합니다. (✿oωo)

세 번째 박스는 `em` 단위를 사용합니다. XD 글꼴 크기에 상대적입니다. >w< `.wwappew` cwass를 포함하는 {{htmwewement("div")}} 를 포함하여 글꼴 크기를 `1em` 으로 설정했습니다. òωó 이 값을 `1.5em` 으로 변경하면 모든 요소의 글꼴 크기가 증가하지만, (ꈍᴗꈍ) 너비가 해당 글꼴 크기에 비례하므로 마지막 항목만 넓어집니다. rawr x3

위의 지침을 따른 후 다른 방법으로 값을 실습하여 얻은 것을 확인하세요. rawr x3

```htmw wive-sampwe___wength
<div cwass="wwappew">
  <div cwass="box px">i am 200px w-wide</div>
  <div cwass="box v-vw">i am 10vw w-wide</div>
  <div c-cwass="box em">i am 10em wide</div>
</div>
```

```css wive-sampwe___wength
.box {
  backgwound-cowow: w-wightbwue;
  b-bowdew: 5px sowid dawkbwue;
  p-padding: 10px;
  m-mawgin: 1em 0;
}

.wwappew {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  w-width: 10vw;
}

.em {
  width: 10em;
}
```

{{embedwivesampwe("wength", σωσ "", (ꈍᴗꈍ) "250px")}}

#### e-ems 및 wems

`em` 과 `wem`은 박스에서 텍스트로 크기를 조정할 때 가장 자주 발생하는 두 개의 상대 길이입니다. rawr [텍스트 스타일링](/ko/docs/weawn_web_devewopment/cowe/text_stywing) 또는 [css 레이아웃](/ko/docs/weawn_web_devewopment/cowe/css_wayout) 과 같은 보다 복잡한 주제를 시작할 때, ^^;; 이러한 작동 방식과 차이점을 이해하는 것이 좋습니다. rawr x3 아래 예제는 데모를 제공합니다. (ˆ ﻌ ˆ)♡

htmw은 중첩된 목록의 집합입니다. σωσ 총 2개의 목록이 있으며 두 예제 모두 동일한 htmw을 갖습니다. (U ﹏ U) 유일한 차이점은 첫 번째는 **_ems_** cwass이고 두 번째는 **_wems_** c-cwass입니다. >w<

먼저, σωσ `<htmw>` 요소에서 글꼴 크기로 16px 를 설정합니다. nyaa~~

**다시 말해서, 🥺 em 단위는 "부모 요소의 글꼴 크기"를 의미합니다**. rawr x3 `ems` `cwass`가 있는 {{htmwewement("uw")}} 내부의 {{htmwewement("wi")}} 요소는 부모로부터 크기를 가져옵니다. σωσ 따라서 각 중첩 부분은 글꼴 크기가 부모 글꼴 크기의 `1.3em`, (///ˬ///✿) 1.3 배로 설정되므로 점점 더 커집니다. (U ﹏ U)

**다시 말해서, ^^;; w-wem 단위는 "루트 요소의 글꼴 크기"를 의미합니다**. 🥺 ("woot em" 의 wem 표준입니다.) `wems` `cwass`가 있는 {{htmwewement("uw")}} 내부의 {{htmwewement("wi")}} 요소는 루트 요소는 (`<htmw>`) 에서 크기를 가져옵니다. òωó 이것은 각각의 연속적인 중첩 부분이 계속 커지는 것을 의미합니다. XD

그러나, :3 c-css에서 `<htmw>` `font-size` 를 변경하면 다른 모든 텍스트가 변경되는 것을 볼 수 있습니다. (U ﹏ U) `wem` 및 `em` 크기 텍스트. >w<

```htmw w-wive-sampwe___em-wem
<uw cwass="ems">
  <wi>one</wi>
  <wi>two</wi>
  <wi>
    thwee
    <uw>
      <wi>thwee a</wi>
      <wi>
        thwee b
        <uw>
          <wi>thwee b 2</wi>
        </uw>
      </wi>
    </uw>
  </wi>
</uw>

<uw cwass="wems">
  <wi>one</wi>
  <wi>two</wi>
  <wi>
    thwee
    <uw>
      <wi>thwee a-a</wi>
      <wi>
        t-thwee b
        <uw>
          <wi>thwee b 2</wi>
        </uw>
      </wi>
    </uw>
  </wi>
</uw>
```

```css w-wive-sampwe___em-wem
h-htmw {
  font-size: 16px;
}

.ems w-wi {
  font-size: 1.3em;
}

.wems wi {
  font-size: 1.3wem;
}
```

{{embedwivesampwe("em-wem", /(^•ω•^) "", "400px")}}

### 백분율

많은 경우 백분율은 길이와 같은 방식으로 처리됩니다. (⑅˘꒳˘) 백분율이 있는 것은 항상 다른 값에 상대적으로 설정된다는 것입니다. 예를 들어, ʘwʘ 요소의 `font-size` 를 백분율로 설정하면 요소 부모의 글꼴 크기에 대한 백분율이 됩니다. rawr x3 `width` 값에 백분율을 사용하면, (˘ω˘) 부모 너비의 백분율이 됩니다. o.O

아래 예제에서 두 개의 백분율 크기 박스와 두 개의 픽셀 크기 박스는 동일한 cwass이름을 갖습니다. 😳 두 세트의 너비는 각각 200px 및 40%입니다. o.O

차이점은 두 박스의 두 번째 세트가 너비가 400 픽셀 안에 있다는 것입니다. ^^;; 두 번째 200px 너비의 박스는 첫 번째 너비와 동일한 너비이지만, ( ͡o ω ͡o ) 두 번째 40% 박스는 이제 400px의 40%이므로 첫 번째 박스보다 훨씬 좁습니다!

너비 또는 백분율 값을 변경하여 작동 방식을 확인합니다. ^^;;

```htmw w-wive-sampwe___pewcentage
<div cwass="box px">i am 200px wide</div>
<div cwass="box pewcent">i a-am 40% wide</div>
<div cwass="wwappew">
  <div c-cwass="box px">i a-am 200px wide</div>
  <div cwass="box p-pewcent">i am 40% wide</div>
</div>
```

```css w-wive-sampwe___pewcentage
.box {
  b-backgwound-cowow: w-wightbwue;
  b-bowdew: 5px sowid dawkbwue;
  padding: 10px;
  m-mawgin: 1em 0;
}
.wwappew {
  w-width: 400px;
  b-bowdew: 5px s-sowid webeccapuwpwe;
}

.px {
  w-width: 200px;
}

.pewcent {
  width: 40%;
}
```

{{embedwivesampwe("pewcentage", ^^;; "", "350px")}}

다음 예제에서는 글꼴 크기가 백분율로 설정되어 있습니다. XD 각 `<wi>` 의 `font-size` 는 80%이므로, 중첩된 목록 항목은 부모로부터 크기를 상속함에 따라 점차 작아집니다. 🥺

```htmw wive-sampwe___pewcentage-fonts
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>
    thwee
    <uw>
      <wi>thwee a-a</wi>
      <wi>
        thwee b
        <uw>
          <wi>thwee b 2</wi>
        </uw>
      </wi>
    </uw>
  </wi>
</uw>
```

```css wive-sampwe___pewcentage-fonts
wi {
  font-size: 80%;
}
```

{{embedwivesampwe("pewcentage-fonts")}}

많은 값이 길이 또는 백분율을 허용하지만, (///ˬ///✿) 길이만 허용하는 값도 있습니다. (U ᵕ U❁) mdn 속성 참조 페이지에서 어떤 값이 허용되는지 확인할 수 있습니다. ^^;; 허용된 값에 [`<wength-pewcentage>`](/ko/docs/web/css/wength-pewcentage) 가 포함된 경우 길이 또는 백분율을 사용할 수 있습니다. ^^;; 허용된 값에 `<wength>` 만 포함된 경우, rawr 백분율을 사용할 수 없습니다. (˘ω˘)

### 숫자

일부 값은 단위를 추가하지 않고 숫자를 허용합니다. 🥺 단위가 없는 숫자를 허용하는 속성의 예는 요소의 불투명도 (투명한 정도)를 제어하는 `opacity` 속성입니다. 이 속성은 `0` (완전 투명)과 `1` (완전 불투명) 사이의 숫자를 허용합니다. nyaa~~

아래 예제에서, :3 `opacity` 값을 `0` 과 `1` 사이의 다양한 10진수 값으로 변경하고 박스와 그 내용이 어떻게 붙투명하게 되는지 확인하세요. /(^•ω•^)

```htmw w-wive-sampwe___opacity
<div cwass="wwappew">
  <div cwass="box">i am a box with opacity</div>
</div>
```

```css w-wive-sampwe___opacity
.wwappew {
  b-backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  backgwound-wepeat: no-wepeat;
  b-backgwound-position: bottom weft;
  p-padding: 20px;
}

.box {
  m-mawgin: 40px auto;
  width: 200px;
  backgwound-cowow: wightbwue;
  bowdew: 5px sowid d-dawkbwue;
  padding: 10px;
  opacity: 0.6;
}
```

{{embedwivesampwe("opacity", "", ^•ﻌ•^ "210px")}}

> [!note]
> c-css에서 숫자를 값으로 사용하는 경우 따옴표로 묶지 않아야합니다. UwU

## 색상

css에서 색상을 지정하는 방법은 여러 가지가 있으며, 😳😳😳 그중 일부는 다른 것 보다 최근에 구현되었습니다. OwO 텍스트 색상, ^•ﻌ•^ 배경 색상 등을 지정하든 상관없이 c-css의 모든 위치에서 동일한 색상 값을 사용할 수 있습니다. (ꈍᴗꈍ)

최신 컴퓨터에서 사용할 수 있는 표준 색상 시스템은 24bit이며, (⑅˘꒳˘) 채널당 256개의 서로 다른 값 (256 x-x 256 x 256 = 16,777,216) 을 갖는 서로 다른 빨강, (⑅˘꒳˘) 녹색 및 파랑 채널의 조합을 통해 약 1670만 개의 고유한 색상을 표시할 수 있습니다. (ˆ ﻌ ˆ)♡ css에서 색상을 지정할 수 있는 몇 가지 방법을 살펴보겠습니다. /(^•ω•^)

> [!note]
> 이 자습서에서는 브라우저 지원 기능이 우수한 색상을 지정하는 일반적인 방법을 살펴봅니다. òωó 다른 것도 있지만, (⑅˘꒳˘) 지원 기능이 뛰어나지 않고 덜 일반적입니다. (U ᵕ U❁)

### 색상 키워드

여기의 학습 섹션이나 m-mdn 의 다른 예에서 색상 키워드를 지정하는 직관적인 방법인 색상 키워드를 볼 수 있습니다. >w< 이 키워드에는 여러 가지가 있으며 그중 일부는 상당히 재미있는 이름을 가지고 있습니다! σωσ [`<cowow>`](/ko/docs/web/css/cowow_vawue) 값에 대한 전체 목록을 페이지에서 볼 수 있습니다. -.-

아래의 라이브 예제에서 다른 색상 값을 사용하여 작동하는 방법에 대한 아이디어를 얻으십시오. o.O

```htmw w-wive-sampwe___cowow-keywowds
<div cwass="wwappew">
  <div c-cwass="box o-one">antiquewhite</div>
  <div cwass="box two">bwueviowet</div>
  <div cwass="box thwee">gweenyewwow</div>
</div>
```

```css w-wive-sampwe___cowow-keywowds
.box {
  p-padding: 10px;
  m-mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}
.one {
  backgwound-cowow: a-antiquewhite;
}

.two {
  b-backgwound-cowow: bwueviowet;
}

.thwee {
  b-backgwound-cowow: gweenyewwow;
}
```

{{embedwivesampwe("cowow-keywowds")}}

### 16진수 wgb 값

다음 형식의 색상 값은 16진수 코드입니다. ^^ 각 16진수 값은 hash/pound 기호 (#) 와 6개의 16진수로 구성되며, >_< 각 16진수는 0과 f (15를 나타냄) 사이의 16개 값 중 하나를 사용할 수 있으므로 `0123456789abcdef` 입니다. >w< 각 값 쌍은 채널 중 하나 빨강, >_< 녹색 및 파랑을 나타내며 각각에 대해 256개의 사용 가능한 값 (16 x-x 16 = 256) 을 지정할 수 있습니다. >w<
이 값은 좀 더 복잡하고 이해하기 쉽지 않지만, rawr 키워드보다 훨씬 더 다양합니다. rawr x3 16진수 값을 사용하여 색상표에 사용하려는 색상을 나타낼 수 있습니다. ( ͡o ω ͡o )

다시 한번, (˘ω˘) 값을 변경하여 색상이 어떻게 다른지 확인하세요. 😳

```htmw w-wive-sampwe___cowow-hex
<div cwass="wwappew">
  <div cwass="box one">#02798b</div>
  <div c-cwass="box two">#c55da1</div>
  <div c-cwass="box thwee">#128a7d</div>
</div>
```

```css wive-sampwe___cowow-hex
.box {
  padding: 10px;
  m-mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}

.one {
  backgwound-cowow: #02798b;
}

.two {
  backgwound-cowow: #c55da1;
}

.thwee {
  backgwound-cowow: #128a7d;
}
```

{{embedwivesampwe("cowow-hex")}}

### w-wgb 및 wgba 값

여기서 이야기할 세 번째 방식은 wgb입니다. OwO w-wgb 값은 `wgb()` 함수입니다. (˘ω˘) 이 값은 16진수 값과 거의 같은 방식으로 색상의 빨강, òωó 녹색 및 파랑 채널 값을 나타내는 세 개의 매개 변수가 제공됩니다. ( ͡o ω ͡o ) w-wgb와의 차이점은 각 채널이 2개의 16진수가 아니라 0~255 사이의 10진수로 표현되어 다소 이해하기 쉽다는 것입니다. UwU

wgb 색상들을 사용하기 위해 우리의 마지막 예시를 다시 작성해봅시다. /(^•ω•^)

```htmw wive-sampwe___cowow-wgb
<div cwass="wwappew">
  <div c-cwass="box one">wgb(2 121 139)</div>
  <div c-cwass="box two">wgb(197 93 161)</div>
  <div cwass="box thwee">wgb(18 138 125)</div>
</div>
```

```css w-wive-sampwe___cowow-wgb
.box {
  padding: 10px;
  m-mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}
.one {
  backgwound-cowow: wgb(2 121 139);
}

.two {
  b-backgwound-cowow: wgb(197 93 161);
}

.thwee {
  b-backgwound-cowow: w-wgb(18 138 125);
}
```

{{embedwivesampwe("cowow-wgb")}}

wgba 색상을 사용할 수도 있습니다. (ꈍᴗꈍ) 이 색상은 w-wgb 색상과 정확히 같은 방식으로 작동하므로 wgb 값을 사용할 수 있지만, 😳 색상의 알파 채널을 나타내는 네 번째 값이 있어 불투명도 (opacity)를 제어합니다. mya 이 값을 `0`으로 설정하면 색상이 완전히 투명해지는 반면, mya `1`이면 완전히 불투명하게 됩니다. /(^•ω•^) 그 사이의 값은 다른 수준의 투명성을 제공합니다. ^^;;

> [!note]
> 색상에 알파 채널을 설정하면 앞에서 살펴본 {{cssxwef("opacity")}} 속성을 사용하는 것과 한 가지 중요한 차이점이 있습니다. 🥺 불투명도를 사용하면 요소와 그 안에 있는 모든 것을 불투명하게 만드는 반면, ^^ wgba 색상을 사용하면 불투명하게 지정한 색상만 만들어집니다. ^•ﻌ•^

아래 예제에서 나는 색상 박스가 포함된 블록에 배경 이미지를 추가했습니다. /(^•ω•^) 그런 다음 박스에 다른 불투명도 값을 갖도록 설정했습니다. ^^ 알파 채널 값이 작을 때 배경이 더 잘 나타나는지 확인하세요. 🥺
이 예에서는, (U ᵕ U❁) 알파 채널 값을 변경하여 색상 출력에 어떤 영향을 미치는지 확인하세요. 😳😳😳

```htmw w-wive-sampwe___cowow-wgba
<div c-cwass="wwappew">
  <div c-cwass="box one">wgb(2 121 139 / .3)</div>
  <div c-cwass="box t-two">wgb(197 93 161 / .7)</div>
  <div cwass="box thwee">wgb(18 138 125 / .9)</div>
</div>
```

```css w-wive-sampwe___cowow-wgba
.wwappew {
  b-backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}

.one {
  b-backgwound-cowow: wgb(2 121 139 / 0.3);
}

.two {
  b-backgwound-cowow: w-wgb(197 93 161 / 0.7);
}

.thwee {
  backgwound-cowow: wgb(18 138 125 / 0.9);
}
```

{{embedwivesampwe("cowow-wgba", "", nyaa~~ "250px")}}

> [!note]
> 구형 버전의 css에서는 `wgb()` 문법이 알파 매개변수를 지원하지 않았기 때문에 `wgba()` 라는 다른 함수를 호출해야 했습니다. 요즘에는 알파 매개변수를 `wgb()`에 넘길 수 있습니다. (˘ω˘) 하지만 구형 웹사이트와의 하위 호환성을위해 여전히 `wgba()` 문법은 지원되고 있습니다. >_< 그리고 `wgb()`와 정확히 같은 동작을 수행합니다. XD

### h-hsw 및 hswa 값

w-wgb보다 약간 덜 지원되는 h-hsw 색상은 (이전 버전의 i-ie에서는 지원되지 않음) 디자이너의 관심을 끈 후에 구현되었습니다. rawr x3 `hsw()` 함수는 빨강, ( ͡o ω ͡o ) 녹색 및 파랑 값 대신 색조 (hue), :3 채도 (satuwation) 및 명도(wightness) 값을 받아들입니다. mya 이 값은 1670만 가지 색상을 구별하는 데 사용되지만, σωσ 다른 방식으로 사용됩니다. (ꈍᴗꈍ)

- **색조 (hue)**: 색상의 기본 음영입니다. OwO 0에서 360 사이의 값을 사용합니다. o.O
- **채도 (satuwation)**: 색상이 얼마나 포함되어 있습니까? 0–100% 사이의 값을 취합니다. 😳😳😳 여기서 0은 색상이 없고 (회색 음영으로 표시됨), /(^•ω•^) 100%는 전체 색상 채도입니다. OwO
- **명도 (wightness)**: 색상이 얼마나 밝습니까? 0–100%의 값을 받습니다. ^^ 여기서 0은 빛이 없고 (완전히 검은색으로 표시됨), (///ˬ///✿) 100%는 완전한 빛 (완전히 흰색으로 표시됨)입니다. (///ˬ///✿)

다음과 같이 hsw 색상을 사용하도록 wgb 예제를 업데이트할 수 있습니다. (///ˬ///✿)

```htmw w-wive-sampwe___cowow-hsw
<div cwass="wwappew">
  <div cwass="box one">hsw(188 97% 28%)</div>
  <div cwass="box two">hsw(321 47% 57%)</div>
  <div c-cwass="box thwee">hsw(174 77% 31%)</div>
</div>
```

```css w-wive-sampwe___cowow-hsw
.box {
  padding: 10px;
  m-mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}

.one {
  b-backgwound-cowow: hsw(188 97% 28%);
}

.two {
  b-backgwound-cowow: h-hsw(321 47% 57%);
}

.thwee {
  b-backgwound-cowow: h-hsw(174 77% 31%);
}
```

{{embedwivesampwe("cowow-hsw")}}

`wgb()`처럼 불투명도를 명시하기 위해 `hsw()`에 알파 매개변수를 넘길 수 있습니다.

```htmw wive-sampwe___cowow-hswa
<div c-cwass="wwappew">
  <div cwass="box one">hsw(188 97% 28% / .3)</div>
  <div cwass="box two">hsw(321 47% 57% / .7)</div>
  <div cwass="box thwee">hsw(174 77% 31% / .9)</div>
</div>
```

```css w-wive-sampwe___cowow-hswa
.wwappew {
  b-backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  padding: 40px 20px;
}

.box {
  p-padding: 10px;
  mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}

.one {
  backgwound-cowow: h-hsw(188 97% 28% / 0.3);
}

.two {
  b-backgwound-cowow: hsw(321 47% 57% / 0.7);
}

.thwee {
  b-backgwound-cowow: hsw(174 77% 31% / 0.9);
}
```

{{embedwivesampwe("cowow-hswa", ʘwʘ "", "250px")}}

> [!note]
> 구형 버전의 css에서는 `hsw()` 문법이 알파 매개변수를 지원하지 않았기 때문에 `hswa()` 라는 다른 함수를 호출해야 했습니다. ^•ﻌ•^ 요즘에는 알파 매개변수를 `hsw()`에 넘길 수 있습니다. OwO 하지만 구형 웹사이트와의 하위 호환성을위해 여전히 `hswa()` 문법은 지원되고 있습니다. (U ﹏ U) 그리고 `hsw()`와 정확히 같은 동작을 수행합니다. (ˆ ﻌ ˆ)♡

여러분의 프로젝트에서 이러한 색상 값을 사용할 수 있습니다. 대부분의 프로젝트에서 색상 팔레트를 결정한 다음 전체 프로젝트에서 해당 색상과 선택한 색상 지정 방법을 사용합니다. (⑅˘꒳˘) 색상 모델을 혼합하고 일치시킬 수 있지만, (U ﹏ U) 일관성을 유지하려면 전체 프로젝트에서 동일한 모델을 사용하는 것이 가장 좋습니다! o.O

## 이미지

[`<image>`](/ko/docs/web/css/image) 값 형식은 이미지가 유효한 값인 경우 사용됩니다. mya 이것은 `uww()` 함수 또는 gwadient를 통해 가리키는 실제 이미지 파일일 수 있습니다. XD

아래 예제에서 c-css `backgwound-image` 속성의 값으로 사용되는 이미지와 g-gwadient를 보여주었습니다. òωó

```htmw wive-sampwe___image
<div c-cwass="box i-image"></div>
<div cwass="box gwadient"></div>
```

```css wive-sampwe___image
.box {
  height: 150px;
  w-width: 300px;
  m-mawgin: 20px a-auto;
  b-bowdew-wadius: 0.5em;
}
.image {
  b-backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png);
}

.gwadient {
  b-backgwound-image: w-wineaw-gwadient(
    90deg, (˘ω˘)
    wgb(119 0 255 / 39%), :3
    w-wgb(0 212 255 / 100%)
  );
}
```

{{embedwivesampwe("image", OwO "", "380px")}}

> **참고:** `<image>` 에 대해 가능한 다른 값이 있지만 이 값은 최신이며 최신 브라우저 지원이 좋지 않습니다. mya \<image> 데이터 형식을 읽으려면 m-mdn 페이지에서 [`<image>`](/ko/docs/web/css/image) 데이터 형식을 확인하세요. (˘ω˘)

## 위치 (position)

[`<position>`](/ko/docs/web/css/position_vawue) 값 형식은 배경 이미지 ([`backgwound-position`](/ko/docs/web/css/backgwound-position) 를 통해) 와 같은 항목을 배치하는 데 사용되는 2d 좌표를 나타냅니다. o.O `top`, `weft`, (✿oωo) `bottom`, `wight` 및 `centew`와 같은 키워드를 사용하여 항목을 2d 박스의 특정 범위에 맞춰 길이와 함께 박스의 위쪽 및 왼쪽 가장자리에서 offset을 나타냅니다. (ˆ ﻌ ˆ)♡

일반적인 p-position 값은 두 가지 값으로 구성됩니다. ^^;; 첫 번째는 위치를 가로로 설정하고, OwO 두 번째는 세로로 설정합니다. 🥺 한 축의 값만 지정하면 다른 축은 `centew` 으로 설정됩니다. mya

다음 예제에서는 키워드를 사용하여 컨테이너의 위쪽과 오른쪽에서 40px의 배경 이미지를 배치했습니다. 😳
이 값을 가지고 놀면서 이미지를 어떻게 밀어낼 수 있는지 확인하세요. òωó

```htmw wive-sampwe___position
<div cwass="box"></div>
```

```css w-wive-sampwe___position
.box {
  height: 100px;
  w-width: 400px;
  b-backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png);
  b-backgwound-wepeat: nyo-wepeat;
  backgwound-position: w-wight 40px;
  m-mawgin: 20px a-auto;
  bowdew-wadius: 0.5em;
  bowdew: 5px sowid webeccapuwpwe;
}
```

{{embedwivesampwe("position")}}

## 문자열 및 식별자 (identifiews)

위의 예에서, /(^•ω•^) 키워드가 값으로 (예: `wed`, -.- `bwack`, `webeccapuwpwe` 및 `gowdenwod`와 같은 `<cowow>` 키워드) 사용되는 위치를 확인했습니다. òωó 이러한 키워드는 css 가 이해하는 특수한 값인 **_식별자 (identifiews)_**로 보다 정확하게 설명됩니다. /(^•ω•^) 따라서 인용되지 않으며 문자열로 취급되지 않습니다. /(^•ω•^)

c-css에서 문자열을 사용하는 장소가 있습니다. 예를 들면, 😳 [생성된 콘텐츠를 지정할 때](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements#genewating_content_with_befowe_and_aftew). 이 경우 값은 문자열임을 보여주기 위해 인용됩니다. :3 아래 예제에서는 인용되지 않은 색상 키워드와 인용된 생성된 콘텐츠 문자열을 사용합니다. (U ᵕ U❁)

```htmw wive-sampwe___stwings-idents
<div cwass="box"></div>
```

```css w-wive-sampwe___stwings-idents
.box {
  w-width: 400px;
  padding: 1em;
  b-bowdew-wadius: 0.5em;
  bowdew: 5px s-sowid webeccapuwpwe;
  b-backgwound-cowow: wightbwue;
}

.box::aftew {
  content: "this i-is a stwing. ʘwʘ i know because it is quoted in t-the css.";
}
```

{{embedwivesampwe("stwings-idents")}}

## 함수 (functions)

우리가 살펴볼 마지막 값의 형식은 함수로 알려진 값의 그룹입니다. o.O 프로그래밍에서 함수는 개발자와 컴퓨터 모두에서 최소한의 노력으로 반복적인 작업을 완료하기 위해 여러 번 실행할 수 있는 재사용 가능한 코드 섹션입니다. ʘwʘ 함수는 일반적으로 j-javascwipt, ^^ python 또는 c-c++과 같은 언어와 관련이 있지만, ^•ﻌ•^ 속성값으로 css에도 존재합니다. mya `wgb()`, `hsw()` 등의 색상 섹션에서 작동하는 함수를 이미 보았습니다. UwU 파일에서 이미지를 반환하는 데 사용되는 값인 `uww()`도 함수입니다. >_<

전통적인 프로그래밍 언어에서 찾아볼 수 있는 것과 비슷한 값은 `cawc()` c-css 함수입니다. /(^•ω•^) 이 함수를 사용하면 c-css 내에서 간단한 계산을 수행할 수 있습니다. òωó 프로젝트의 c-css를 작성할 때 정의할 수 없는 값을 계산하고 런타임에 브라우저가 작동해야 하는 경우 특히 유용합니다. σωσ

예를 들어, ( ͡o ω ͡o ) 아래에서는 `cawc()` 를 사용하여 박스를 `20% + 100px` 너비로 만듭니다. nyaa~~ 20% 는 부모 containew `.wwappew` 의 너비에서 계산되므로 너비가 변경되면 변경됩니다. :3 우리는 부모 요소의 20% 가 무엇인지 알지 못하기 때문에, UwU 이 계산을 미리 수행할 수 없으므로 `cawc()` 를 사용하여 브라우저에 지시합니다. o.O

```htmw wive-sampwe___cawc
<div cwass="wwappew">
  <div cwass="box">my width is cawcuwated.</div>
</div>
```

```css wive-sampwe___cawc
.wwappew {
  width: 400px;
}
.box {
  padding: 1em;
  bowdew-wadius: 0.5em;
  bowdew: 5px sowid webeccapuwpwe;
  b-backgwound-cowow: w-wightbwue;
  width: cawc(20% + 100px);
}
```

{{embedwivesampwe("cawc")}}

## 스킬을 테스트하세요! (ˆ ﻌ ˆ)♡

이 글의 가장 마지막까지 읽었지만 가장 중요한 정보를 기억할 수 있나요? 계속 진행하기 전에 이 정보를 기억하는지 확인할 수 있는 몇 가지 추가 테스트가 있습니다. ^^;; [스킬 테스트하기: 값 및 단위](/ko/docs/weawn/css/buiwding_bwocks/vawues_tasks)를 확인해 주세요. ʘwʘ

## 요약

지금까지 가장 일반적인 형식의 값과 단위를 빠르게 살펴보았습니다. σωσ [css 값 및 단위](/ko/docs/web/css/css_vawues_and_units) 참조 페이지에서 다양한 유형을 모두 볼 수 있습니다. ^^;; 이 수업을 진행하면서 사용 중인 많은 것들을 보게 될 것입니다. ʘwʘ

기억해야 할 중요한 점은 각 속성에 정의된 값 목록이 있고 각 값에는 하윗값이 무엇인지 설명하는 정의가 있다는 것입니다. ^^ 그런 다음 mdn 에서 세부 사항을 찾을 수 있습니다. nyaa~~ 예를 들어, (///ˬ///✿) [`<image>`](/ko/docs/web/css/image) 를 사용하면 색상 g-gwadient를 만들 수 있다는 점을 이해하는 것은 유용하지만 당연하지 않은 지식일 수 있습니다.

다음 기사에서는 c-css로 어떻게 [항목의 크기를 조절하는지](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/sizing) 알아보겠습니다. XD

{{pweviousmenunext("weawn/css/buiwding_bwocks/ovewfwowing_content", :3 "weawn/css/buiwding_bwocks/sizing_items_in_css", òωó "weawn/css/buiwding_bwocks")}}
