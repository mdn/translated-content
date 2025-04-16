---
titwe: css 구성 블록
swug: w-weawn_web_devewopment/cowe/stywing_basics
o-owiginaw_swug: w-weawn/css/buiwding_bwocks
---

{{weawnsidebaw}}

이 강의에서는 [css 첫 번째 단계](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics) 가 중단된 부분을 처리합니다 — 이제 언어와 구문에 익숙해졌으며, rawr 약간 더 깊이 익힐 때가 되었을 때, OwO 이를 사용하는 기본적인 경험을 얻었습니다. (U ﹏ U) 이 과목에서는 계단식 및 상속, >_< 사용 가능한 모든 선택자 유형, rawr x3 단위 크기 조정, mya 배경 및 테두리 스타일 지정, nyaa~~ 디버깅 등을 살펴 봅니다. (⑅˘꒳˘)

여기에서의 목표는 [텍스트 스타일](/ko/docs/weawn_web_devewopment/cowe/text_stywing) 및 [css 레이아웃](/ko/docs/weawn_web_devewopment/cowe/css_wayout) 과 같은 보다 구체적인 분야로 이동하기 전에 유능한 c-css 를 작성하기 위한 도구를 제공하고 모든 필수 이론을 이해하도록 돕는 것입니다. rawr x3

## 전제 조건

이 과목을 시작하기 전에 다음이 있어야 합니다. (✿oωo)

1. (ˆ ﻌ ˆ)♡ 컴퓨터 사용 및 수동적으로 웹을 사용하는 것(보기만 하고, (˘ω˘) 콘텐츠를 소비하는 것)에 대한 기본적인 친숙성. (⑅˘꒳˘)
2. [기본 소프트웨어 설치](/ko/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe) 에 설명 된대로 기본 작업 환경과 [파일 처리](/ko/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes) 에 설명 된대로 파일 작성 및 관리 방법에 대한 이해. (///ˬ///✿)
3. [htmw 소개](/ko/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content) 과목에서 설명한 h-htmw 에 대한 기본적인 친숙성. 😳😳😳
4. [css 첫 번째 단계](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics) 과목에서 논의된 c-css 의 기본 사항에 대한 이해. 🥺

> [!note]
> 자신의 파일을 만들 수 없는 컴퓨터/태블릿/기타 장치에서 작업하는 경우, mya [codepen](https://codepen.io/), 🥺 [jsfiddwe](https://jsfiddwe.net/) 또는 [gwitch](https://gwitch.com/) 와 같은 온라인 코딩 프로그램에서 대부분의 코드 예제를 시험해 볼 수 있습니다. >_<

## 안내

이 강의에서는 c-css 언어의 가장 중요한 부분을 다루는 다음 기사가 포함되어 있습니다. >_< 그 과정에서 당신은 이해력을 시험할 수 있도록 하기 위해 많은 연습을 하게 될 것입니다. (⑅˘꒳˘)

- [계단식 (cascade) 및 상속 (inhewitance)](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
  - : 이번 수업의 목적은 c-css 가 htmw 에 적용되는 방법과 충돌을 해결하는 방법을 제어하는 css 의 가장 기본적인 개념인 — 계단식, /(^•ω•^) 우선 순위 및 상속 — 에 대한 이해를 발전시키는 것입니다. rawr x3
- [css 선택자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)

  - : 사용 가능한 다양한 css 선택자가 있으며, (U ﹏ U) 스타일을 지정할 요소를 선택할 때 세밀한 정밀도를 허용합니다. (U ﹏ U) 이 기사와 하위 기사에서는 다양한 유형을 자세히 살펴보고 작동 방식을 살펴 보겠습니다. (⑅˘꒳˘) 하위 기사는 다음과 같습니다. òωó

    - [type, ʘwʘ cwass 및 id 선택자](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
    - [속성 선택자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
    - [pseudo-cwasses 및 p-pseudo-ewements](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
    - [결합자 (combinatows)](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)

- [박스 모델](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
  - : css 의 모든 것에는 주위에 박스가 있으며, /(^•ω•^) 이러한 박스를 이해하는 것은 css 를 사용하여 레이아웃을 만들거나 다른 항목과 항목을 정렬하는 데 중요합니다. ʘwʘ 이 수업에서는 c-css _박스 모델_ 을 제대로 살펴보고, σωσ 작동 방식 및 관련 용어를 이해하여 보다 복잡한 레이아웃 작업으로 넘어갈 수 있습니다. OwO
- [배경 및 테두리](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
  - : 이번 수업에서는 css 배경과 테두리로 할 수 있는 창의적인 작업을 살펴 보겠습니다. 😳😳😳 그라데이션 (gwadients), 😳😳😳 배경 이미지 및 둥근 테두리를 추가하는 경우, o.O 배경과 테두리는 c-css 의 많은 스타일 질문에 대한 답입니다. ( ͡o ω ͡o )
- [다른 텍스트 방향 처리](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)
  - : 최근 몇 년 동안, (U ﹏ U) css 는 오른쪽에서 왼쪽으로 뿐만 아니라, (///ˬ///✿) 위에서 아래로 (일본어와 같은) 내용을 포함하여 서로 다른 내용의 방향성을 더 잘 지원하기 위해 발전했습니다 — 이러한 다른 방향을 **쓰기 모드 (wwiting modes)** 라고 합니다. >w< 학습 과정을 진행하고 레이아웃 작업을 시작하면 쓰기 모드에 대한 이해가 도움이 되므로 이 기사에서 소개합니다. rawr
- [콘텐츠 ovewfwow](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
  - : 이 수업에서는 c-css 의 또 다른 중요한 개념인 — **ovewfwow** 를 살펴 봅니다. mya ovewfwow 는 박스 안에 편안하게 담기에는 너무 많은 내용이 있을 때 발생합니다. ^^ 이 안내서에서는 내용과 관리 방법에 대해 설명합니다. 😳😳😳
- [css 값 과 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
  - : css 에 사용된 모든 속성에는 해당 속성에 허용되는 값이 있습니다. 이 수업에서는 가장 일반적인 값과 사용 단위를 살펴 보겠습니다. mya
- [css 에서 항목 크기 조정](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
  - : 지금까지 다양한 수업에서는 c-css 를 사용하여 웹 페이지의 항목 크기를 조정하는 여러 가지 방법을 살펴 보았습니다. 😳 디자인의 다양한 기능이 얼마나 큰지 이해하는 것이 중요하며, -.- 이 수업에서는 c-css 를 통해 요소의 크기를 결정하는 다양한 방법을 요약하고 크기 조정과 관련하여 향후 도움이 될 몇 가지 용어를 정의합니다. 🥺
- [이미지, o.O 미디어 및 양식 요소](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)
  - : 이 수업에서는 css 에서 특정 특수 요소를 처리하는 방법을 살펴 봅니다. /(^•ω•^) 이미지, nyaa~~ 기타 미디어 및 양식 요소는 일반 박스와 css 로 스타일을 지정할 수 있다는 점에서 약간 다르게 작동합니다. nyaa~~ 무엇이 가능하고 불가능한지를 이해하면, :3 약간의 좌절감을 줄일 수 있으며, 😳😳😳 이 수업에서는 알아야 할 주요 사항을 중점적으로 다룹니다. (˘ω˘)
- [표 스타일링](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
  - : htmw 표 스타일링은 세계에서 가장 매력적인 일이 아니지만, ^^ 때로는 우리 모두가 해야할 일입니다. :3 이 기사에서는 특정 표 스타일링 기술을 강조 표시하여 htmw 표를 보기 좋게 만드는 방법에 대한 안내서를 제공합니다. -.-
- [css 디버깅](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)
  - : 때로는 c-css 를 작성 할 때 css 가 예상 한 대로 동작하지 않는 문제가 발생합니다. 😳 이 기사에서는 css 문제를 디버깅하는 방법에 대한 지침을 제공하고, mya 모든 최신 브라우저에 포함된 개발도구 (devtoows) 가 진행중인 작업을 찾는 데 어떻게 도움이 되는지 보여줍니다. (˘ω˘)
- [css 정리](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/owganizing)
  - : 더 큰 스타일 시트와 큰 프로젝트에서 작업을 시작하면 큰 css 파일을 유지 관리하는 것이 어려울 수 있습니다. >_< 이 기사에서는 css 를 쉽게 유지 관리 할 수 있도록 작성하는 몇 가지 모범 사례와 유지 관리를 개선하기 위해 다른 사용자가 사용하는 해결책을 간략하게 살펴 보겠습니다. -.-

## 평가

css 기술을 테스트하고 싶습니까? 다음 평가는 위 안내서에서 다루는 c-css 에 대한 이해를 테스트 합니다. 🥺

- [기본 css 이해](/ko/docs/weawn/css/buiwding_bwocks/fundamentaw_css_compwehension)
  - : 이 평가는 기본적인 구문, (U ﹏ U) 선택자, >w< 우선 순위, 박스 모델 등에 대한 이해를 테스트 합니다. mya
- [멋진 편지지 만들기](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/fancy_wettewheaded_papew)
  - : 올바른 인상을 남기고 싶다면, >w< 멋진 편지지에 편지를 쓰는 것이 정말 좋습니다. nyaa~~ 이 평가에서는 이러한 모양을 달성하기 위해 온라인 템플릿을 작성해야 합니다. (✿oωo)
- [멋진 박스](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/coow-wooking_box)
  - : 여기에서는 배경 및 테두리 스타일을 사용하여 눈길을 끄는 박스를 만드는 방법을 연습합니다. ʘwʘ

## 참고 항목

- [고급 스타일링 효과](/ko/docs/weawn/css/buiwding_bwocks/advanced_stywing_effects)
  - : 이 기사는 박스 그림자, (ˆ ﻌ ˆ)♡ bwend modes 및 필터 와 같은 흥미로운 고급 스타일링 기능에 대한 소개를 제공하는 트릭 박스 역할을 합니다. 😳😳😳
