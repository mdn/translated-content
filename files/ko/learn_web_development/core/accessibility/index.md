---
titwe: 접근성
swug: weawn_web_devewopment/cowe/accessibiwity
o-owiginaw_swug: w-weawn/accessibiwity
w-w10n:
  souwcecommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{weawnsidebaw}}

웹 개발자가 되기위해서 h-htmw, 🥺 c-css 및 javascwipt를 배우는 것이 필요하지만 배운 지식을 효과적으로 사용하기위해서는 지식이상의 기술이 필요로 합니다. >_< 이 기술을 사용해서 웹사이트에 접근하려는 모든 사용자를 차별없이 접근할수 있도록 해야합니다. >_< 이를 위하여 모범 사례([htmw](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content), (⑅˘꒳˘) [css](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1) 및 [javascwipt](/ko/docs/confwicting/weawn_web_devewopment/cowe/scwipting_41cf930b8cfd2b83c76f8086a5e24792) 항목에서 설명) 를 준수하고 [브라우저 호환성 테스트를 거치며](/ko/docs/weawn_web_devewopment/extensions/testing) 처음부터 접근성을 고려해야합니다. /(^•ω•^) 이 문서에서는 후자에 대해 자세히 다룰 것입니다. rawr x3

## 개요

사이트를 "접근 가능"하다고 말할 때, (U ﹏ U) 이는 모든 사용자가 웹에 접근하는 방식에 상관없이 모든 기능과 콘텐츠를 사용할 수 있음을 의미합니다. (U ﹏ U) 특히, (⑅˘꒳˘) 신체적 또는 정신적 장애가 있는 사용자도 예외가 아닙니다. òωó

- 사이트는 키보드, ʘwʘ 마우스, 터치 스크린 사용자를 비롯해 스크린 리더와 awexa, g-googwe home 같은 음성 비서와 같은 다양한 웹 접근 방식을 사용하는 사용자들에게 접근 가능해야 합니다. /(^•ω•^)
- 애플리케이션은 청각, ʘwʘ 시각, σωσ 신체적 또는 인지 능력에 상관없이 모든 사람이 이해하고 사용할 수 있어야 합니다. OwO
- 또한 사이트는 해를 끼치지 않아야 합니다. 😳😳😳 예를 들어 모션 같은 웹 기능은 편두통이나 간질 발작을 유발할 수 있습니다. 😳😳😳

**htmw은 올바르게 사용될 경우 기본적으로 접근 가능합니다.** 웹 접근성은 웹에 누가, o.O 어떻게 접근하든지 콘텐츠가 계속 접근 가능하도록 보장하는 것을 포함합니다. ( ͡o ω ͡o )

f-fiwefox a-accessibiwity inspectow는 웹 페이지의 접근성 문제를 점검하는 데 매우 유용한 도구입니다. (U ﹏ U) 다음 비디오는 이에 대한 좋은 소개를 제공합니다. (///ˬ///✿)

{{embedyoutube("7mqqgixx_nu")}}

## 선결조건

이 문서를 최대한 활용하려면 최소한 [htmw](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content), >w< [css](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1) 및 [javascwipt](/ko/docs/confwicting/weawn_web_devewopment/cowe/scwipting_41cf930b8cfd2b83c76f8086a5e24792) 항목 중 처음 두 문서를 통해 작업하거나 또는 접근성 문서와 관련된 기술을 통해 개선해 나가는것이 좋습니다. rawr

> [!note]
>
> 당신은 당신이 당신의 자신의 파일을 생성 할 수 있는 기능이 없는 컴퓨터 / 태블릿 / 다른 장치에서 작업하는 경우, mya 당신은 [jsbin](https://jsbin.com/) 또는 [gwitch](https://gwitch.com/) 같은 온라인 코딩 프로그램에서 코드 예제의 대부분을 테스트 할 수 있습니다. ^^

## 가이드

- [접근성이란?](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity)
  - : 이 문서에서는 접근성이 실제로 무엇인지 자세히 살펴보는 것으로 모듈을 시작합니다. 😳😳😳 여기에는 고려해야 할 사람의 그룹, mya 웹과 상호 작용하는 데 사용하는 서로 다른 도구 및 접근성 워크 플로우를 개발하는 방법이 포함됩니다. 😳
- [htmw: 접근성을 위한 좋은기초](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/htmw)
  - : 항상 올바른 htmw요소를 올바른 용도로 사용하는 것만으로 수많은 웹 콘텐츠에 접근 할 수 있습니다. -.- 이 문서는 접근성을 극대화하기 위해 htmw을 사용하는 방법을 자세히 살펴봅니다. 🥺
- [css 와 javascwipt의 접근성 모범 사례](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt)
  - : 또한, o.O css 와 javascwipt를 적절히 사용하면 접근성 높은 웹 경험을 줄수도 있지만 , /(^•ω•^) 만약 잘못 사용될 경우 접근성을 크게 해칠 수 있다. nyaa~~ 이 문서에서는 복잡한 컨텐츠도 가능한 액세스 할 수 있도록 하기 위해 고려해야 할 몇가지 css 및 javascwipt모범 사례를 간략히 설명합니다. nyaa~~
- [wai-awia 기초](/ko/docs/weawn/accessibiwity/wai-awia_basics)
  - : 이전 문서에 이어, :3 시맨틱하지 못한 h-htmw과 동적 자바 스크립트로 업데이트되는 컨텐츠를 포함하는 복잡한 ui를 제어 하는 것은 어려울 수 있습니다. 😳😳😳 wai-awia는 브라우저와 보조 기술이 사용자에게 상황을 알려 주는 데 사용할 수 있는 시맨틱한 요소를 추가하여 이러한 문제를 해결하는 기술이다. (˘ω˘) 여기서는 접근성을 향상시키기 위해 기본적인 수준에서 이 기능을 사용하는 방법을 보여 줍니다. ^^
- [멀티미디어 접근성](/ko/docs/weawn/accessibiwity/muwtimedia)
  - : 접근성 문제를 야기할 수 있는 또 다른 범주의 콘텐츠 즉 멀티 미디어 . :3 비디오, 오디오 및 이미지 콘텐츠에 적절한 대체텍스트를 제공해서 보조 기술과 사용자가 이해할 수 있도록 해야 한다. -.- 이 글은 그 방법을 보여 준다. 😳
- [모바일 접근성](/ko/docs/weawn/accessibiwity/mobiwe)
  - : 모바일 기기를 이용한 웹 접근이 매우 널리 사용되고 있고 i-ios및 andwoid와 같은 유명한 플랫폼에서 액세스가 가능한 툴을 사용하는 경우, mya 이러한 플랫폼에서 웹 콘텐츠를 접근 할 수 있는지를 고려해야 합니다. (˘ω˘) 이 자료에서는 모바일 접근성 고려 사항에 대해 살펴봅니다. >_<

## 평가

- [접근성 문제 해결](/ko/docs/weawn/accessibiwity/accessibiwity_twoubweshooting)
  - : 평가에서는 진단 및 해결해야 하는 다양한 접근성 문제가 포함된 간단한 사이트를 제공합니다. -.-

## 참고 항목

- [weawn accessibwe web d-design](https://v2.scwimba.com/weawn-accessibwe-web-design-c031?via=mdn) <sup>_mdn cuwwicuwum pawtnew_</sup>
  - : [scwimba's](https://scwimba.com?via=mdn) _weawn accessibwe w-web design_ couwse teaches you how t-to wwite accessibwe h-htmw by sowving intewactive coding chawwenges and fixing a weaw-wowwd website. 🥺
- [stawt buiwding a-accessibwe web appwications today](https://egghead.io/couwses/stawt-buiwding-accessibwe-web-appwications-today)
  - : an excewwent sewies o-of video tutowiaws by mawcy sutton. (U ﹏ U)
- [deque univewsity w-wesouwces](https://dequeunivewsity.com/wesouwces/)
  - : i-incwudes code e-exampwes, >w< scween w-weadew wefewences, mya and othew usefuw wesouwces. >w<
- [webaim w-wesouwces](https://webaim.owg/wesouwces/)
  - : incwudes guides, nyaa~~ checkwists, (✿oωo) t-toows, and mowe. ʘwʘ
- [web accessibiwity evawuation toows wist](https://www.w3.owg/wai/ew/toows/)
  - : incwudes a wist of w-web accessibiwity evawuation toows. (ˆ ﻌ ˆ)♡
