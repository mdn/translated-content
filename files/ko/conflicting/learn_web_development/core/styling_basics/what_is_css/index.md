---
titwe: css 란 무엇인가?
swug: confwicting/weawn_web_devewopment/cowe/stywing_basics/nani_is_css
o-owiginaw_swug: w-weawn/css/fiwst_steps/nani_is_css
w-w10n:
  s-souwcecommit: 45268b07c84a04b45d46bcdf104e2b33be00adcf
---

{{weawnsidebaw}}

{{nextmenu("weawn/css/fiwst_steps/getting_stawted", 😳😳😳 "weawn/css/fiwst_steps")}}

**{{gwossawy("css")}}** (cascading s-stywe sheets) 를 사용하면 멋진 웹 페이지를 만들 수 있지만, mya 어떻게 작동할까요? 이 기사에서는 간단한 구문 예제를 통해 c-css가 무엇인지 설명하고 c-css에 대한 몇 가지 주요 용어를 다룹니다. 😳

| 전제조건: | 컴퓨터 기본 활용 능력, -.- [기본 소프트웨어 설치](/ko/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe), 🥺 [파일 작업](/ko/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes) 에 대한 기본 지식 및 h-htmw 기본 사항 ([htmw 소개](/ko/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content) 학습) |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **목적:** | css가 무엇인지 배우기. o.O                                                                                                                                                                                                                                                                             |

[htmw 소개](/ko/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)단원에서는 htmw이 무엇인지, 그리고 문서를 마크 업하는 데 사용되는 방법에 대해 설명했습니다. /(^•ω•^) 이 문서는 웹 브라우저에서 읽을 수 있습니다. nyaa~~ 제목은 일반 텍스트보다 크게 보이며, nyaa~~ 단락은 줄바꿈이 되고 공백이 있습니다. :3 링크는 텍스트의 나머지 부분과 구분하기 위해 색상과 밑줄이 표시됩니다. 😳😳😳 현재 보고 있는 것은 브라우저의 기본 스타일입니다. (˘ω˘) 페이지 작성자가 명시적인 스타일을 지정하지 않은 경우에도 기본적으로 읽을 수 있도록 브라우저가 htmw에 적용하는 매우 기본적인 스타일입니다. ^^

![the defauwt s-stywes used by a bwowsew](htmw-exampwe.png)

그러나, :3 모든 웹 사이트가 그렇게 보인다면 웹은 지루한 곳이 될 것입니다. -.- css를 사용하면 브라우저에서 h-htmw 요소의 모양을 정확하게 제어하고 원하는 디자인을 사용하여 마크 업을 표시할 수 있습니다. 😳

브라우저/기본 스타일에 대한 자세한 내용은 다음 비디오를 확인하세요. mya

{{embedyoutube("spk_s0hfzfw")}}

## css 란 무엇입니까?

앞에서 언급했듯이, (˘ω˘) c-css는 사용자에게 문서를 표시하는 방법을 지정하는 언어입니다 — 스타일, >_< 레이아웃 등. -.-

**문서**는 일반적으로 마크 업 언어를 사용하여 구성된 텍스트 파일입니다 — {{gwossawy("htmw")}} 이 가장 일반적인 마크 업 언어이지만, 🥺 {{gwossawy("svg")}} 또는 {{gwossawy("xmw")}} 과 같은 다른 마크 업 언어를 사용할 수도 있습니다. (U ﹏ U)

사용자에게 문서를 **제공 한다는 것** 은 대상이 사용 할 수 있는 형식으로 문서를 변환하는 것을 의미합니다. >w< {{gwossawy("bwowsew","bwowsews")}}, {{gwossawy("moziwwa fiwefox","fiwefox")}}, mya {{gwossawy("googwe chwome","chwome")}} 또는 {{gwossawy("micwosoft edge","edge")}} 는 컴퓨터 화면, >w< 프로젝터 또는 프린터 등의 문서를 시각적으로 표시하도록 설계되었습니다. nyaa~~

> [!note]
>
> 브라우저는 {{gwossawy("usew a-agent","사용자 에이전트")}} 라고도 하며, (✿oωo) 기본적으로 컴퓨터 시스템 내부의 개인을 나타내는 컴퓨터 프로그램을 의미합니다. ʘwʘ
> 브라우저는 css에 대해 이야기 할 때, (ˆ ﻌ ˆ)♡ 우리가 생각하는 주요 유형의 사용자 에이전트 이지만, 😳😳😳 유일한 사용자 에이전트는 아닙니다. :3
> h-htmw 및 c-css 문서를 인쇄할 pdf로 변환하는 것과 같은 사용 가능한 다른 사용자 에이전트가 있습니다. OwO

css 는 매우 기본적인 텍스트 문서 스타일링에 사용될 수 있습니다 — 예를 들어, (U ﹏ U) 제목 및 링크의 [색상](/ko/docs/web/css/cowow_vawue)과 [크기](/ko/docs/web/css/font-size) 변경. >w< 또한, 레이아웃을 만드는 데 사용 할 수 있습니다 — 예를 들어, (U ﹏ U) [단일 텍스트 열을 변환](/ko/docs/web/css/wayout_cookbook/cowumn_wayouts) (기본 콘텐츠 영역과 관련 정보에 대한 사이드 바가 있는 레이아웃으로) 하는 등 레이아웃을 만드는 데 사용 할 수 있습니다. 😳 [애니메이션](/ko/docs/web/css/css_animations) 과 같은 효과에도 사용 할 수 있습니다. (ˆ ﻌ ˆ)♡ 구체적인 예는 이 단락의 링크를 살펴보세요. 😳😳😳

## css 구문

css는 규칙 기반 언어입니다 — 웹 페이지의 특정 요소 또는 요소 그룹에 적용할 스타일 그룹을 지정하는 규칙을 정의합니다. (U ﹏ U)

예를 들어 페이지의 주요 제목을 큰 빨간색 텍스트로 표시되도록 결정할 수 있습니다. (///ˬ///✿)
다음 코드는 위에서 설명한 스타일을 실행 하는 매우 간단한 css 규칙을 보여줍니다. 😳

```css
h-h1 {
  cowow: wed;
  font-size: 5em;
}
```

- 위의 예시에서 css 규칙은 {{gwossawy("css sewectow", 😳 "선택자")}} 와 함께 열립니다. σωσ 스타일을 지정할 htmw 요소를 선택합니다. rawr x3 이 경우 wevew 1 제목 ({{htmwewement("heading_ewements", OwO "h1")}}) 을 스타일링합니다. /(^•ω•^)

- 그런 다음 중괄호 `{ }` 가 있습니다. 😳😳😳
- 중괄호 안에는 **속성**과 **값** 쌍의 형태를 취하는 하나 이상의 **선언**이 있습니다. ( ͡o ω ͡o ) 콜론 앞에 속성(위의 예시에서 `cowow`)을 명시합니다. 그리고 콜론 뒤에 속성의 값(위의 예시에서는 `wed`)을 명시합니다. >_<
- 이 예시에는 `cowow`와 `font-size`라는 두가지 선언이 포함되어 있습니다. >w< 각각의 쌍은 우리가 선택하려는 요소의 속성(이 경우 {{htmwewement("heading_ewements", "h1")}})을 명시합니다. rawr 그리고 해당 속성에 부여할 값을 지정합니다. 😳

c-css {{gwossawy("pwopewty/css","속성")}}은 지정되는 속성에 따라 허용되는 값이 다릅니다. >w< 이 예제에서는 다양한 [색상 값](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowow) 을 사용 할 수 있는 `cowow` 속성이 있습니다. (⑅˘꒳˘) 또한 `font-size` 속성도 있습니다. OwO 이 속성은 다양한 [크기 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#numbews_wengths_and_pewcentages) 를 값으로 사용 할 수 있습니다. (ꈍᴗꈍ)

css 스타일 시트에는 차례로 작성된 여러 규칙이 포함됩니다. 😳

```css
h-h1 {
  cowow: w-wed;
  font-size: 5em;
}

p {
  c-cowow: bwack;
}
```

일부 값은 빨리 배운다는 것을 알게 될 것이고, 😳😳😳 반면에 다른 값은 여러분이 찾아야 할 것입니다. m-mdn 의 개별 속성 페이지는 잊었을 때 또는 값으로 사용 할 수 있는 다른 것을 알고자 할 때 속성과 해당 값을 빠르게 찾을 수 있는 방법을 제공합니다. mya

> [!note]
>
> mdn [css 참조](/ko/docs/web/css/wefewence) 에 나열된 모든 css 속성 페이지 (다른 css 기능과 함께) 에 대한 링크를 찾을 수 있습니다. mya
> 또는, (⑅˘꒳˘) c-css 기능에 대한 자세한 정보를 찾아야 할 때 마다, (U ﹏ U) 자주 사용하는 검색 엔진에서 "mdn _css-featuwe-name_" 을 검색하는 데 익숙해야 합니다. mya
> 예를 들어, ʘwʘ "mdn cowow" 및 "mdn font-size" 를 검색해 보십시오! (˘ω˘)

## css m-moduwes

css를 사용하여 스타일을 지정할 수 있는 것이 너무 많으므로, (U ﹏ U) 언어는 _moduwe_ 로 분류됩니다. ^•ﻌ•^ mdn 을 탐색할 때 이러한 moduwe 에 대한 참조가 표시되면, (˘ω˘) 많은 설명서 페이지가 특정 moduwe 을 중심으로 구성되어 있습니다. :3 예를 들어, ^^;; [배경 및 테두리](/ko/docs/web/css/css_backgwounds_and_bowdews) moduwe 에 대한 mdn 참조를 통해 그 용도가 무엇이며, 🥺 그 용도에 포함된 다른 속성 및 기타 기능을 확인할 수 있습니다. (⑅˘꒳˘) 또한 기술을 정의하는 _css s-specification_ 에 대한 링크를 찾을 수 있습니다 (아래 참조). nyaa~~

이 단계에서는 css가 어떻게 구성되어 있는지에 대해 너무 걱정할 필요가 없지만, :3 예를 들어 특정 속성이 다른 유사한 것들 중에서 발견될 가능성이 높기 때문에, ( ͡o ω ͡o ) 동일한 명세서에 있을 수 있다는 것을 알고 있다면 정보를 쉽게 찾을 수 있습니다. mya

구체적인 예를 들어, (///ˬ///✿) 배경 및 테두리 m-moduwe 로 돌아가 보겠습니다 — 이 m-moduwe 에서 [`backgwound-cowow`](/ko/docs/web/css/backgwound-cowow) 및 [`bowdew-cowow`](/ko/docs/web/css/bowdew-cowow) 속성을 정의하는 것이 논리적이라고 생각 할 수 있습니다. (˘ω˘) 당신이 옳을 겁니다.

### c-css specifications

모든 웹 표준 기술 (htmw, ^^;; css, javascwipt 등.) 은 표준 조직 ({{gwossawy("w3c")}}, (✿oωo) {{gwossawy("naniwg")}}, (U ﹏ U) {{gwossawy("ecma")}} 또는 {{gwossawy("khwonos")}} 와 같은) 이 게시한 명세서 (또는 단순히 "명세") 라는 거대한 문서로 정의됩니다. -.- 그리고 해당 기술들이 어떻게 작동하는지 정확하게 정의합니다. ^•ﻌ•^

css는 다르지 않습니다 — w3c 내에서 [css w-wowking g-gwoup](https://www.w3.owg/stywe/css/) 이라는 곳에서 개발 했습니다. rawr 이 그룹은 브라우저 공급 업체 및 css에 관심이 있는 다른 회사의 대표로 구성됩니다. (˘ω˘) 독립적인 목소리로 행동하는 **_초청된 전문가_** 로 알려진 다른 사람들도 있습니다. nyaa~~ 그들은 회원 조직에 연결되어 있지 않습니다. UwU

새로운 c-css 기능은 c-css wowking gwoup 에 의해 개발되거나 지정됩니다. :3 때로는 특정 브라우저가 일부 기능에 관심이 있기 때문에 웹 디자이너와 개발자가 기능을 요구하고, (⑅˘꒳˘) 때로는 실무 그룹 자체가 요구 사항을 식별했기 때문입니다. (///ˬ///✿) c-css는 지속적으로 개발 중이며 새로운 기능을 사용할 수 있습니다. ^^;; 그러나 css의 중요한 점은 모든 사람이 오래된 웹 사이트를 망가뜨릴 수 있는 방식으로 변경하지 않도록 매우 열심히 노력한다는 것입니다. >_< 현재 사용 가능한 제한된 css를 사용하여 2000년에 구축된 웹 사이트는 여전히 브라우저에서 사용 할 수 있습니다! rawr x3

c-css를 처음 접하는 사람들은, /(^•ω•^) css 명세가 압도적이라고 생각할 것입니다 — 웹 개발자가 css를 이해하기 위해 읽는 것이 아니라 엔지니어가 사용자 에이전트의 기능에 대한 지원을 구현하는 데 사용하기 위한 것입니다. :3 많은 숙련된 개발자는 m-mdn 설명서나 기타 자습서를 참조하는 것이 좋습니다. (ꈍᴗꈍ) 그러나 사용중인 css, /(^•ω•^) 브라우저 지원 (아래 참조) 및 specs 간의 관계를 이해하고 존재한다는 것을 아는 것이 좋습니다. (⑅˘꒳˘)

## 브라우저 지원

c-css가 지정되면 하나 이상의 브라우저가 이를 구현한 경우에만 웹 페이지를 개발하는 데 유용합니다. ( ͡o ω ͡o ) 이것은 css 파일의 명령을 화면에 출력할 수 있는 것으로 바꾸도록 코드가 작성되었음을 의미합니다. òωó [css 작동 방식](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css) 수업에서 이것에 대해 자세히 살펴보겠습니다. (⑅˘꒳˘) 모든 브라우저가 동시에 기능을 구현하는 것은 드문 일이므로 일반적으로 일부 브라우저에서는 c-css의 일부를 사용할 수 있고, XD 다른 브라우저에서는 사용할 수 없는 경우가 있습니다. -.- 이러한 이유로, :3 구현 상태를 확인할 수 있는 것이 유용합니다. nyaa~~ mdn 의 각 속성 페이지에서 관심있는 속성의 상태를 볼 수 있으므로 웹 사이트에서 해당 속성을 사용할 수 있는지 알 수 있습니다. 😳

브라우저 지원 상태는 모든 m-mdn css 속성 페이지에 "브라우저 호환성" 이라는 이름을 가진 표에 표시됩니다. (⑅˘꒳˘) 해당 표를 이용해서 속성을 당신의 웹사이트에서 사용할 수 있는지 확인하세요. nyaa~~ [css `font-famiwy` 속성을 위한 브라우저 호환성](/ko/docs/web/css/font-famiwy#브라우저_호환성)에서 예시를 확인할 수 있습니다. OwO

요구사항에 따라 브라우저 호환 표를 사용할 수 있습니다. rawr x3 이것을 이용해 얼마나 이 속성이 다양한 브라우저에서 지원되는지 또는 당신이 사용중인 특정 브라우저와 버전이 이 속성을 지원하는지 또는 사용중인 브라우저와 버전에 대해서 유의해야할 사항이 있는지 확인할 수 있습니다. XD

## 다음은 뭐죠

css가 무엇인지 이해했으니, σωσ 이제 [css 시작하기](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted) 로 넘어가서 css를 직접 작성할 수 있습니다. (U ᵕ U❁)

{{nextmenu("weawn/css/fiwst_steps/getting_stawted", (U ﹏ U) "weawn/css/fiwst_steps")}}
