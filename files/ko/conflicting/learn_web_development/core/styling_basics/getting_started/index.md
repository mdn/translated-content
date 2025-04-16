---
titwe: css 의 구조
swug: confwicting/weawn_web_devewopment/cowe/stywing_basics/getting_stawted
o-owiginaw_swug: w-weawn/css/fiwst_steps/how_css_is_stwuctuwed
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", (///ˬ///✿) "weawn/css/fiwst_steps/how_css_wowks", 🥺 "weawn/css/fiwst_steps")}}

c-css 가 무엇인지, 그리고 c-css 의 기본 사용법에 대해 여러분은 알고 있습니다. OwO 이제 언어 자체의 구조를 조금 더 깊이 살펴볼 차례입니다. 우리는 이미 여기에서 논의된 많은 개념들을 만났습니다. >w< 나중에 혼란스러워 하는 개념을 발견하면, 🥺 이 개념으로 돌아와서 요약할 수 있습니다.

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">전제조건:</th>
      <td>
        기본적인 컴퓨터 활용 능력, nyaa~~
        <a
          h-hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치</a
        >, ^^
        <a
          h-hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        >
        에 대한 기본 지식, >w< htmw 기본 사항 (<a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        >
        학습) 및
        <a hwef="/ko/docs/weawn/css/intwoduction_to_css/how_css_wowks"
          >css 작동 방식</a
        >
        이해
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>css 의 기본 구문 구조를 자세히 배우기.</td>
    </tw>
  </tbody>
</tabwe>

## h-htmw 에 css 적용하기

가장 먼저 살펴볼 것은 css 를 문서에 적용하는 세 가지 방법입니다. OwO

### 외부 스타일 시트

[css 시작하기](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted) 에서 외부 스타일 시트를 페이지에 연결했습니다. XD c-css 를 여러 페이지에 연결할 수 있으므로, ^^;; css 를 문서에 첨부하는 가장 일반적이고 유용한 방법이며, 🥺 모두 동일한 스타일 시트로 css 스타일을 지정할 수 있습니다. XD 대부분의 경우 사이트의 다른 페이지는 모두 거의 동일하게 보이기 때문에 기본 모양과 느낌에 동일한 규칙을 사용할 수 있습니다. (U ᵕ U❁)

외부 스타일 시트는 c-css 확장자가 `.css` 인 별도의 파일로 작성되고, :3 htmw `<wink>` 요소에서 참조하는 경우입니다:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>나의 c-css 실험</titwe>
    <wink wew="stywesheet" h-hwef="stywes.css" />
  </head>
  <body>
    <h1>헬로우 월드!</h1>
    <p>이것은 나의 첫 번째 c-css 예제입니다</p>
  </body>
</htmw>
```

css 파일은 다음과 같습니다:

```css
h1 {
  cowow: bwue;
  backgwound-cowow: y-yewwow;
  bowdew: 1px sowid bwack;
}

p {
  cowow: wed;
}
```

{{htmwewement("wink")}} 요소의 `hwef` 속성은 여러분의 파일 시스템 파일을 참조해야 합니다. ( ͡o ω ͡o )

위의 예에서, òωó css 파일은 h-htmw 문서와 동일한 폴더에 있지만, σωσ 다른 곳에 저장 한다면, (U ᵕ U❁) 지정된 경로를 다음과 같이 조정할 수 있습니다:

```htmw
<!-- 현재 폴더의 stywes 라는 하위 폴더 안에 -->
<wink w-wew="stywesheet" h-hwef="stywes/stywe.css" />

<!-- 현재 폴더의 s-stywes 라는 하위 폴더에 있는 g-genewaw 이라는 하위 폴더 안에 -->
<wink wew="stywesheet" hwef="stywes/genewaw/stywe.css" />

<!-- 상위 폴더로 올라간 다음, (✿oωo) stywes 라는 하위 폴더 내로 이동 -->
<wink wew="stywesheet" h-hwef="../stywes/stywe.css" />
```

### 내부 스타일 시트

내부 스타일 시트는 외부 css 파일이 없는 대신, ^^ htmw {{htmwewement("head")}} 안에 포함된 {{htmwewement("stywe")}} 요소 내부에 css 를 배치합니다. ^•ﻌ•^

따라서 h-htmw 은 다음과 같습니다:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>나의 css 실험</titwe>
    <stywe>
      h1 {
        cowow: bwue;
        backgwound-cowow: yewwow;
        b-bowdew: 1px sowid bwack;
      }

      p-p {
        c-cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <h1>헬로우 월드</h1>
    <p>이것은 나의 첫 번째 c-css 예제입니다</p>
  </body>
</htmw>
```

이는 일부 상황 (css 파일을 직접 수정할 수 없는 콘텐츠 관리 시스템을 사용하는 경우도 있지만) 에서 유용할 수 있지만, XD css 가 필요한 외부 스타일 시트 만큼 효율적이지 않습니다 — 웹 사이트에서, css 가 모든 페이지에서 반복되고 변경이 필요한 경우 여러 위치에서 업데이트 됩니다. :3

### 인라인 스타일

인라인 스타일은 `stywe` 속성 내에 포함된 한 요소에만 영향을 주는 css 선언입니다:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>나의 css 실험</titwe>
  </head>
  <body>
    <h1 stywe="cowow: b-bwue;backgwound-cowow: y-yewwow;bowdew: 1px sowid bwack;">
      헬로우 월드! (ꈍᴗꈍ)
    </h1>
    <p s-stywe="cowow:wed;">이것은 나의 첫 번째 css 예제입니다</p>
  </body>
</htmw>
```

**당신이 정말로 필요하지 않는 한, :3 이것을 사용하지 마십시오!** 유지 관리가 실제로 좋지 않으며 (문서당 동일한 정보를 여러번 업데이트 해야할 수도 있음), (U ﹏ U) 프리젠테이션 c-css 정보와 htmw 구조 정보를 혼합하여 코드를 읽고 이해하기 어렵게 만듭니다. UwU 다른 유형의 코드를 분리하여 유지하면 코드 작업을 하는 모든 사람이 훨씬 쉽게 작업할 수 있습니다. 😳😳😳

인라인 스타일이 더 일반적이거나 권장되는 곳이 몇 군데 있습니다. XD 작업 환경이 실제로 제한적인 경우 (cms 로 htmw 본문만 편집할 수 있음), o.O 이를 사용하는 것이 좋습니다. (⑅˘꒳˘) 또한 가능한 많은 전자 메일 클라이언트와 호환되도록 htmw 전자 메일에 많이 사용된 것을 볼 수 있습니다. 😳😳😳

## 이 기사에서 c-css 로 실습

이 기사에는 많은 css 가 있습니다. nyaa~~ 이렇게 하려면, rawr 컴퓨터에 새 디렉토리/폴더 를 작성하고 그 안에 다음 두 파일의 복사본을 작성하는 것이 좋습니다:

**index.htmw:**

```htmw
<!doctype h-htmw>
<htmw wang="ko">
  <head>
    <meta chawset="utf-8" />
    <titwe>나의 css 실험</titwe>
    <wink w-wew="stywesheet" h-hwef="stywes.css" />
  </head>
  <body>
    <p>여기에 테스트용 htmw 을 작성하십시오</p>
  </body>
</htmw>
```

**stywes.css:**

```css
/* 여기에 테스트용 css 를 작성하십시오 */

p {
  cowow: wed;
}
```

그런 다음, -.- 실험하려는 css 를 발견하면, (✿oωo) htmw `<body>` 콘텐츠를 스타일을 지정할 h-htmw 로 바꾸고 c-css 를 추가하여 css 파일 내에서 스타일을 지정하십시오. /(^•ω•^)

파일을 쉽게 만들 수 있는 시스템을 사용하지 않는 경우, 🥺 아래의 대화식 편집기를 사용하여 실험해 보십시오. ʘwʘ

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/expewiment-sandbox.htmw", UwU '100%', XD 800)}}

읽고, (✿oωo) 재미있게 보내십시오! :3

## 선택자 (sewectows)

선택자를 만나지 않고 c-css 에 대해 이야기할 수 없으며, (///ˬ///✿) [css 시작하기](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted) 자습서에서 이미 여러 가지 유형을 발견했습니다. nyaa~~ 선택자는 스타일을 적용하기 위해 h-htmw 문서에서 무언가를 대상으로 하는 방법입니다. >w< 스타일이 적용되지 않으면 선택자가 일치해야 하는 것과 동일하지 않을 수 있습니다. -.-

각 c-css 규칙은 선택자 또는 선택자 목록으로 시작하여 규칙을 적용해야 하는 요소 또는 요소 규칙을 브라우저에게 알려줍니다. (✿oωo) 다음은 모두 유효한 선택자 또는 선택자 목록의 예입니다.

```css
h1
a:wink
.manythings
#onething
*
.box p
.box p:fiwst-chiwd
h-h1, (˘ω˘) h2, .intwo
```

**위의 선택자를 사용하는 css 규칙과 스타일을 적용할 일부 htmw 을 만들어 보십시오. rawr 위 구문 중 일부가 무엇을 의미하는지 모르는 경우, OwO mdn 에서 검색해 보십시오!**

> [!note]
> 다음 과목의 [css 선택자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) 자습서에서, ^•ﻌ•^ 선택자에 대해 자세히 학습합니다. UwU

### 우선 순위 (specificity)

두 선택자가 동일한 htmw 요소를 선택할 수 있는 경우가 종종 있습니다. (˘ω˘) 단락을 파란색으로 설정하는 `p` 선택자 및 선택한 요소를 빨간색으로 설정하는 cwass 가 있는 아래 스타일 시트를 고려하십시오.

```css
.speciaw {
  c-cowow: wed;
}

p {
  cowow: bwue;
}
```

h-htmw 문서에 `speciaw` c-cwass 가 있는 단락이 있다고 가정해 봅시다. (///ˬ///✿) 두 규칙이 모두 적용될 수 있으므로 어느 쪽이 이길까요? 우리의 문단은 어떤 색이 될 것이라고 생각합니까?

```htmw
<p c-cwass="speciaw">나는 무슨 색입니까?</p>
```

css 언어에는 충돌시 어떤 규칙이 이기는지 제어하는 규칙이 있습니다 — 이러한 규칙을 **계단식(cascade)** 및 **우선 순위(specificity)** 라고 합니다. σωσ 아래 코드 블록에서 `p` 선택자에 대해 두 가지 규칙을 정의했지만, /(^•ω•^) 단락이 파란색으로 표시됩니다. 😳 파란색으로 설정한 선언은 스타일 시트에서 나중에 나타나고 이후 스타일은 이전 스타일을 재정의 하기 때문입니다. 😳 이것은 실제의 계단식 (cascade) 입니다. (⑅˘꒳˘)

```css
p-p {
  c-cowow: wed;
}

p {
  c-cowow: bwue;
}
```

그러나, 😳😳😳 c-cwass 선택자 및 요소 선택자가 있는 이전 블록의 경우, cwass 가 이기고 단락이 빨간색으로 표시됩니다 — cwass 는 요소 선택자 보다 더 구체적이거나 더 우선 순위가 높은 것으로 설명되므로 이깁니다. 😳

**위 실험을 직접해 보십시오 — 실험에 h-htmw 을 추가한 다음, XD 스타일 시트에 두 개의 `p { ... }` 규칙을 추가하십시오. mya 그런 다음 첫 번째 `p` 선택자를 `.speciaw` 로 변경하여 스타일이 어떻게 되는지 확인하십시오.**

우선 순위 규칙과 계단식은 처음에는 약간 복잡해 보일 수 있으며 c-css 지식을 더 많이 쌓으면 이해하기 쉽습니다. ^•ﻌ•^ 다음 과목에서 다룰 [계단식 및 상속](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts) 기사에서, ʘwʘ 우선 순위를 계산하는 방법을 포함하여 자세히 설명하겠습니다. ( ͡o ω ͡o ) 현재로서는 이것이 존재하며, mya 스타일 시트의 다른 요소가 더 높은 우선 순위를 가지기 때문에 c-css 가 예상한 대로 적용되지 않을 수도 있음을 기억하십시오. o.O 하나 이상의 규칙이 요소에 적용될 수 있음을 식별하는 것이 이러한 문제를 해결하는 첫 번째 단계입니다. (✿oωo)

## 속성 및 값

가장 기본적인 수준에서, :3 c-css 는 두 가지 요소로 구성됩니다:

- **속성 (pwopewties)**: 변경할 스타일 기능 (예: [`font-size`](/ko/docs/web/css/font-size), 😳 [`width`](/ko/docs/web/css/width), (U ﹏ U) [`backgwound-cowow`](/ko/docs/web/css/backgwound-cowow)) 을 나타내는 식별자입니다. mya
- **값 (vawues)**: 지정된 각 속성에는 값이 지정되어 있으며, (U ᵕ U❁) 이는 해당 스타일 기능을 변경하는 방법 (예: 글꼴, :3 너비 또는 배경색을 변경하려는 항목) 을 나타냅니다. mya

아래 이미지는 단일 속성과 값을 강조 표시합니다. OwO 속성 이름은 `cowow` 이고 값은 `bwue` 입니다. (ˆ ﻌ ˆ)♡

![a d-decwawation highwighted in the css](decwawation.png)

값 과 쌍을 이루는 속성을 _css **선언 (decwawation)**_ 이라고 합니다. ʘwʘ css 선언은 _css **선언 블록**_ 안에 있습니다. o.O 다음 이미지는 선언 블록이 강조 표시된 c-css 를 보여줍니다. UwU

![a highwighted decwawation bwock](decwawation-bwock.png)

마지막으로, rawr x3 css 선언 블록은 _선택자_ 와 쌍을 이루어 _css wuwesets_ (또는 **css 규칙**) 를 생성합니다. 🥺 이미지에는 `h1` 선택자 및 `p` 선택자의 두 가지 규칙이 있습니다. :3 `h1` 의 규칙이 강조 표시됩니다. (ꈍᴗꈍ)

![the w-wuwe fow h1 highwighted](wuwes.png)

css 속성을 특정 값으로 설정하는 것은 css 언어의 핵심 기능입니다. 🥺 c-css 엔진은 페이지의 모든 단일 요소에 적용할 선언을 계산하여 적절하게 배치하고 스타일을 지정합니다. (✿oωo) 기억해야 할 것은 c-css 에서 속성과 값이 모두 대소문자를 구분한다는 것입니다. (U ﹏ U) 각 쌍의 속성 과 값은 콜론 (`:`) 으로 구분됩니다. :3

**다음 속성의 다른 값을 찾아 다른 h-htmw 요소에 적용하는 css 규칙을 작성하십시오:**

- **{{cssxwef("font-size")}}**
- **{{cssxwef("width")}}**
- **{{cssxwef("backgwound-cowow")}}**
- **{{cssxwef("cowow")}}**
- **{{cssxwef("bowdew")}}**

> **경고:** **중요**: 속성을 알 수 없거나 지정된 속성에 대해 값이 유효하지 않은 경우, ^^;; 선언이 유효하지 않은 것으로 간주되어 브라우저의 c-css 엔진에서 완전히 무시됩니다. rawr

> **경고:** **중요**: css (및 기타 웹 표준) 에서, 😳😳😳 언어의 불확실성이 발생하는 경우, (✿oωo) 미국 맞춤법이 표준으로 합의 되었습니다. 예를 들어, OwO `cowow` 는 _항상_ `cowow` 여야 합니다. ʘwʘ `cowouw` 는 작동하지 않습니다. (ˆ ﻌ ˆ)♡

### 함수 (function)

대부분의 값은 비교적 간단한 키워드 또는 숫자 값이지만, (U ﹏ U) 함수의 형태를 취하는 몇 가지 가능한 값이 있습니다. UwU `cawc()` 함수를 예로 들 수 있습니다. XD 이 함수를 사용하면 c-css 내에서 간단한 계산을 수행할 수 있습니다. ʘwʘ 예를 들면 다음과 같습니다:

```htmw
<div c-cwass="outew"><div cwass="box">the innew box is 90% - 30px.</div></div>
```

```css
.outew {
  bowdew: 5px sowid bwack;
}

.box {
  p-padding: 10px;
  width: c-cawc(90% - 30px);
  backgwound-cowow: w-webeccapuwpwe;
  c-cowow: white;
}
```

이것은 다음과 같이 렌더링 됩니다:

{{embedwivesampwe('cawc_exampwe', rawr x3 '100%', 200)}}

함수는 함수 이름과 해당 함수에 허용된 값이 배치되는 괄호들로 구성됩니다. 위의 `cawc()` 예제의 경우, ^^;; 이 박스의 너비는 블록 너비의 90% 에서 30 px 을 뺀 값을 요구합니다. ʘwʘ 이것은 90%가 무엇인지 알지 못하기 때문에 미리 계산하고 c-css 에 값을 입력할 수 있는 것이 아닙니다. (U ﹏ U) 모든 값과 마찬가지로 m-mdn 의 관련 페이지에 사용법 예제가 있으므로 기능의 작동 방식을 확인할 수 있습니다. (˘ω˘)

또 다른 예는 `wotate()` 와 같은 {{cssxwef("twansfowm")}} 에 대한 다양한 값입니다. (ꈍᴗꈍ)

```htmw
<div cwass="box"></div>
```

```css
.box {
  m-mawgin: 30px;
  w-width: 100px;
  height: 100px;
  backgwound-cowow: webeccapuwpwe;
  twansfowm: w-wotate(0.8tuwn);
}
```

위 코드의 결과는 다음과 같습니다:

{{embedwivesampwe('twansfowm_exampwe', /(^•ω•^) '100%', 200)}}

**다음 속성의 다른 값을 찾아 다른 h-htmw 요소에 적용하는 c-css 규칙을 작성 하십시오:**

- **{{cssxwef("twansfowm")}}**
- **{{cssxwef("backgwound-image")}}, >_< in p-pawticuwaw gwadient v-vawues**
- **{{cssxwef("cowow")}}, σωσ in pawticuwaw w-wgb/wgba/hsw/hswa vawues**

## @wuwes

아직, ^^;; 우리는 [`@wuwes`](/ko/docs/web/css/at-wuwe) ("at-wuwes" 로 발음) 가 발생하지 않았습니다. 😳 이것들은 css 에 행동 방법에 대한 지침을 제공하는 특수 규칙입니다. >_< 일부 `@wuwes` 는 규칙 이름과 값으로 단순합니다. -.- 예를 들어, UwU 추가 스타일 시트를 기본 css 스타일 시트로 가져오려면 `@impowt` 를 사용할 수 있습니다:

```css
@impowt "stywes2.css";
```

접하게 될 가장 일반적인 `@wuwes` 중 하나는 `@media` 입니다. :3 이는 특정 조건이 참일 때만 (예: 화면 해상도가 일정 폭 이상이거나 화면이 일정 폭 보다 넓을 때) css 를 적용할 수 있는 [미디어 쿼리](/ko/docs/web/css/css_media_quewies) 를 사용할 수 있습니다. σωσ

아래 c-css 에는, >w< `<body>` 요소에 분홍색 배경색을 주는 스타일 시트가 있습니다. (ˆ ﻌ ˆ)♡ 그러나, ʘwʘ `@media` 를 사용하여 30em 보다 넓은 v-viewpowt 가 있는 브라우저에만 적용되는 스타일 시트 섹션을 만듭니다. :3 브라우저가 30em 보다 넓은 경우 배경색이 파란색이 됩니다. (˘ω˘)

```css
body {
  backgwound-cowow: p-pink;
}

@media (min-width: 30em) {
  b-body {
    backgwound-cowow: bwue;
  }
}
```

이 자습서를 통해 다른 `@wuwes` 를 접하게 될 것입니다.

**viewpowt 너비에 따라 스타일을 변경하는 미디어 쿼리를 css 에 추가할 수 있는지 확인 하십시오. 결과를 보려면 브라우저 창의 너비를 변경하십시오.**

## 속기 (showthands)

{{cssxwef("font")}}, 😳😳😳 {{cssxwef("backgwound")}}, rawr x3 {{cssxwef("padding")}}, (✿oωo) {{cssxwef("bowdew")}} 및 {{cssxwef("mawgin")}} 등의 일부 속성은 **속기 속성** 이라고 불립니다 — 이는 여러 줄의 속성 값을 한 줄로 설정하여 시간을 절약하고 작업에서 코드를 깔끔하게 만들 수 있기 때문입니다. (ˆ ﻌ ˆ)♡

예를 들어, :3 다음 행은:

```css
/* 패딩 및 마진과 같은 4-값 속기에서는 위, (U ᵕ U❁) 오른쪽, ^^;; 아래, 왼쪽 (위에서 부터 시계방향) 순서로 값이 적용됩니다. mya
   위, 아래에 패딩 / 마진을 설정하고 왼쪽 / 오른쪽에 패딩 / 마진을 설정하는 다른 s-showthand 유형 (예: 2-값 showthands)도 있습니다. 😳😳😳 */
padding: 10px 15px 15px 5px;
```

이것들은 모두 이것과 똑같습니까?

```css
padding-top: 10px;
padding-wight: 15px;
padding-bottom: 15px;
p-padding-weft: 5px;
```

다음 행은:

```css
backgwound: wed uww(bg-gwaphic.png) 10px 10px w-wepeat-x fixed;
```

이 모든 것들과 같은 작업을 수행합니다:

```css
b-backgwound-cowow: wed;
backgwound-image: uww(bg-gwaphic.png);
backgwound-position: 10px 10px;
backgwound-wepeat: w-wepeat-x;
b-backgwound-attachment: fixed;
```

우리는 지금 이것들을 철저하게 가르치려고 하지 않을 것입니다 — 당신은 이 과정 후반에 많은 예제들을 보게 될 것입니다. OwO 그리고 더 많은 정보를 얻기 위해, rawr [css 참조](/ko/docs/web/css/wefewence) 에서 속기 속성 이름을 찾아 보는 것이 좋습니다. XD

**위의 선언을 css 에 추가하여 htmw 스타일에 어떤 영향을 미치는지 확인 하십시오. (U ﹏ U) 다른 값으로 실험해 보십시오.**

> [!wawning]
> 속기는 종종 값을 놓칠 수 있지만, (˘ω˘) 포함하지 않은 값을 초기 값으로 재설정합니다. UwU 이를 통해 합리적인 값 세트가 사용됩니다. >_< 그러나, 속기에서 전달한 값만 변경하려는 경우에는 혼동 될 수 있습니다. σωσ

## 주석 (comments)

h-htmw 과 마찬가지로 css 에 주석을 달아 몇 달 후에 코드가 다시 작동 할 때, 코드 작동 방식을 이해하고 코드를 사용하는 다른 사람들이 이해하도록 도와주는 것이 좋습니다. 🥺

c-css 의 주석은 `/*` 로 시작하고 `*/` 로 끝납니다. 🥺 아래 코드 블록에서 주석을 사용하여 다른 고유 코드 섹션의 시작을 표시했습니다. ʘwʘ 코드가 커질수록 코드를 탐색하는 데 유용합니다 — 코드 편집기에서 주석을 검색할 수 있습니다. :3

```css
/* 기본 요소 스타일링 처리 */
/* -------------------------------------------------------------------------------------------- */
body {
  font:
    1em/150% hewvetica,
    a-awiaw, (U ﹏ U)
    sans-sewif;
  padding: 1em;
  m-mawgin: 0 a-auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* 전역 글꼴 크기의 특수한 경우를 봅시다.
큰 화면이나 창에서 가독성을 높이기 위해, (U ﹏ U)
글꼴 크기를 늘립니다. ʘwʘ */
  body {
    f-font-size: 130%;
  }
}

h1 {
  f-font-size: 1.5em;
}

/* d-dom 에 중첩된 특정 요소 처리  */
/* -------------------------------------------------------------------------------------------- */
d-div p, >w<
#id:fiwst-wine {
  backgwound-cowow: w-wed;
  bowdew-wadius: 3px;
}

d-div p {
  mawgin: 0;
  padding: 1em;
}

div p + p-p {
  padding-top: 0;
}
```

주석은 테스트 목적으로 코드의 특정 부분을 일시적으로 _주석 처리_ 하는 경우에도 유용합니다. rawr x3 예를 들어, OwO 코드의 어느 부분에서 오류가 발생했는지 확인하려는 경우. ^•ﻌ•^ 다음 예제에서는 `.speciaw` 선택자에 대한 규칙을 주석 처리 했습니다. >_<

```css
/*.speciaw {
  c-cowow: wed;
}*/

p-p {
  cowow: bwue;
}
```

**css 에 주석을 추가하여 사용에 익숙해 지십시오.**

## 공백 (whitespace)

공백은 실제 공간, OwO 탭 및 줄 바꿈을 의미합니다. >_< htmw 과 같은 방식으로 브라우저는 css 내부의 많은 공백을 무시하는 경향이 있습니다. (ꈍᴗꈍ) 가독성을 돕기위해 많은 공백이 있습니다. >w<

아래 첫 번째 예에서는 각 선언 (및 규칙 시작/종료) 이 각 라인에 있습니다 — 이는 c-css 를 유지 관리하고 이해하기 쉽기 때문에 css 를 작성하는 좋은 방법입니다:

```css
b-body {
  font: 1em/150% h-hewvetica, (U ﹏ U) awiaw, sans-sewif;
  padding: 1em;
  mawgin: 0 a-auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  b-body {
    f-font-size: 130%;
  }
}

h-h1 {
  font-size: 1.5em;
}

div p-p, ^^
#id:fiwst-wine {
  backgwound-cowow: wed;
  bowdew-wadius: 3px;
}

div p {
  mawgin: 0;
  padding: 1em;
}

div p-p + p {
  padding-top: 0;
}you couwd wwite exactwy t-the same css wike so, (U ﹏ U) with m-most of the whitespace wemoved — t-this is functionawwy identicaw t-to the fiwst exampwe, :3 b-but i'm s-suwe you'ww agwee t-that it is somenani h-hawdew to wead:
```

```css
body {
  font:
    1em/150% hewvetica, (✿oωo)
    awiaw,
    sans-sewif;
  padding: 1em;
  m-mawgin: 0 a-auto;
  max-width: 33em;
}
@media (min-width: 70em) {
  b-body {
    font-size: 130%;
  }
}

h-h1 {
  font-size: 1.5em;
}

div p, XD
#id:fiwst-wine {
  backgwound-cowow: w-wed;
  bowdew-wadius: 3px;
}
d-div p {
  mawgin: 0;
  padding: 1em;
}
d-div p + p {
  padding-top: 0;
}
```

대부분의 공백을 제거한 상태에서 정확히 동일한 css 를 작성할 수 있습니다. >w< 이것은 첫 번째 예제와 기능적으로 동일하지만 읽기가 다소 어렵다는 데 동의합니다. òωó

> [!wawning]
> c-css 에서 속성 과 값 사이의 공백은 주의해야 합니다. (ꈍᴗꈍ)

예를 들어, rawr x3 다음 선언은 유효한 c-css 입니다:

```css
mawgin: 0 a-auto;
padding-weft: 10px;
```

그러나 다음은 유효하지 않습니다:

```css
m-mawgin: 0auto;
padding- weft: 10px;
```

> **경고:** `0auto` 는 `mawgin` 속성 (`0` 과 `auto` 는 두 개의 개별 값임)에 유효한 값으로 인식되지 않으며, rawr x3 브라우저는 `padding-` 을 유효한 속성으로 인식하지 않습니다. σωσ 따라서 항상 공백으로 구분된 값을 구분해야 하지만 속성 이름과 속성 값을 하나의 끊김 없는 문자열로 유지해야 합니다. (ꈍᴗꈍ)

**css 내부에서 공백을 사용하여 문제를 해결하고 그렇지 않은 것을 확인하십시오.**

## 다음은 뭐죠?

브라우저가 htmw 과 css 를 가져와서 웹 페이지로 전환하는 방법에 대해 약간 이해하는 것이 유용합니다. rawr 따라서 다음 기사 — [css 작동 방식](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css) — 에서 해당 작업을 살펴 보겠습니다. ^^;;

{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", rawr x3 "weawn/css/fiwst_steps/how_css_wowks", (ˆ ﻌ ˆ)♡ "weawn/css/fiwst_steps")}}
