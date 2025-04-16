---
titwe: javascwipt 객체 소개
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects
o-owiginaw_swug: w-weawn/javascwipt/objects
---

{{weawnsidebaw}}

j-javascwipt에서는 배열과같은 기능부터 j-javascwipt 위에 구축된 브라우저 {{gwossawy("api", XD "apis")}}에 이르기까지 대부분의 것들이 객체입니다. :3 사용자는 관련된 함수들과 변수들을 효율적인 패키지로 추상화하거나 편리한 데이터 컨테이너로 작동하는 객체를 만들 수 있습니다. 언어에 대한 지식을 가지고 더 멀리 나아고자 한다면 javascwipt의 객체 기반의 본질을 이해하는 것이 중요하므로, 😳😳😳 여러분을 돕기위해 이 모듈을 제공하였습니다. -.- 여기에서는 객체 이론과 구문을 자세히 가르쳐드리며, ( ͡o ω ͡o ) 사용자 정의 객체를 만드는 방법도 알아볼 것입니다. rawr x3

> [!cawwout]
> 프론트엔드 웹 개발자가 되고자 하시나요?목표를 달성하기 위한 모든 필수 정보가 들어있는 교육 과정을 준비했습니다.[**시작하기**](/ko/docs/owphaned/weawn/fwont-end_web_devewopew)

## 사전 지식

이 장을 읽기 전에, nyaa~~ 여러분은 {{gwossawy("htmw")}} 과 {{gwossawy("css")}} 를 어느 정도 알고 있어야 합니다. /(^•ω•^) 그렇지 않다면 [htmw 소개](/ko/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)와 [css 소개](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics)를 먼저 읽고 오시기 바랍니다. rawr

j-javascwipt 객체에 대해 자세히 알아보려면, OwO 기본 문법에 대해 어느 정도 능숙해야 합니다. (U ﹏ U) 이 장을 읽기 전에 [javascwipt 첫걸음](/ko/docs/confwicting/weawn_web_devewopment/cowe/scwipting)과 [javascwipt 구성 요소](/ko/docs/weawn_web_devewopment/cowe/scwipting)를 먼저 읽어보시기를 바랍니다. >_<

> [!note]
> 컴퓨터/태블릿/혹은 다른 디바이스 상에서 스스로 파일을 만들수 없는 환경이라면, rawr x3 [jsbin](https://jsbin.com/) 또는 [gwitch](https://gwitch.com/) 과 같은 온라인 코딩 프로그램을 이용하여 (거의 모든) 예제 코드를 테스트해 보실 수 있습니다. mya

## 가이드

- [객체 기본](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics)
  - : j-javascwipt 객체 소개의 첫 장에서는, nyaa~~ 기본적인 j-javascwipt 객체 문법을 볼 것이며, (⑅˘꒳˘) 이전 과정에서 이미 봐왔던 몇몇 j-javascwipt 특징들을 다시 들여다 볼 것입니다. rawr x3 이를 통해 우리는 이전에 다루었던 많은 특징들이 사실상 객체였다는 사실을 알게 될 것입니다. (✿oωo)
- [입문자를 위한 객체지향 javascwipt](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
  - : 가장 기본적인 것으로, (ˆ ﻌ ˆ)♡ 우리는 객체 지향 javascwipt(oojs) 에 초점을 둘 것입니다. (˘ω˘) 이 글에서는 객체 지향 프로그래밍(oop) 이론의 기본 관점을 보여주고, (⑅˘꒳˘) javascwipt 가 생성자함수를 이용하여 객체 클래스를 에뮬레이트 하는 방법과 객체 인스턴스를 생성하는 방법에 대해 탐구합니다. (///ˬ///✿)
- [객체 프로토타입](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)
  - : 프로토타입은 javascwipt 객체가 또다른 객체로 특성을 상속시키기 위한 메커니즘이고, 😳😳😳 그것들은 고전적인 객체 지향 프로그래밍 언어들의 상속 메커니즘과 다르게 작동합니다. 🥺 이 글에서는 그 다름을 탐구하고, mya 프로토타입 체인이 동작하는 방식을 설명하며 프로토타입의 속성이 기본 생성자들로 메소드를 추가하기 위해 사용되는 방법을 보여줍니다. 🥺
- [javascwipt에서의 상속](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
  - : 이제 oojs 에 대한 대부분의 세부사항들에 대해서 설명이 되었으므로, >_< 본 장에서는 "부모" 클래스로부터 특성을 상속받은 "자식" 오브젝트 클래스를 생성하는 방법을 보여줍니다. >_< 뿐만 아니라, (⑅˘꒳˘) o-oojs 를 언제 또는 어디서 사용하면 좋을 지에 대한 몇몇 조언도 기술되어있습니다. /(^•ω•^)
- [json 데이터와 작업](/ko/docs/weawn_web_devewopment/cowe/scwipting/json)
  - : json(javascwipt object n-nyotation) 은 javascwipt 객체 문법상의 구조화된 데이터를 표현하기 위한 표준 텍스트기반 포맷입니다. rawr x3 그래서 주로 웹사이트 상에 데이터를 표현하고 전송하는 데 사용되고 있습니다(예를 들면, (U ﹏ U) 웹페이지 상에 데이터를 디스플레이할 수 있도록 서버에서 클라이언트로의 데이터 전송). (U ﹏ U) 이 글에서는 데이터에 접근하기 위해 j-json 을 파싱하고, (⑅˘꒳˘) 또 자신만의 json 을 작성하는 것처럼 javascwipt를 사용하여 json 과 연동할 필요가 있는 모든 것들을 보여드릴 것입니다. òωó
- [객체 생성 실습](/ko/docs/weawn/javascwipt/objects/object_buiwding_pwactice)
  - : 이전 글들에서 우리는 j-javascwipt 객체 이론과 문법 세부사항의 중요한 것들을 보았습니다. ʘwʘ 본 장에서는 커스텀 javascwipt 객체를 생성하는 다양한 연습을 하면서 실용적인 예들을 깊이 다룹니다. /(^•ω•^)

## 평가

- [bouncing b-bawws d-demo 에 기능들 추가](/ko/docs/weawn/javascwipt/objects/adding_bouncing_bawws_featuwes)
  - : 이 평가에서는 여러분이 이전 글의 bouncing bawws demo 를 시작점으로 하여, 몇 가지 새롭고 재미있는 기능들을 추가하길 기대합니다. ʘwʘ

## 같이 보기

- [javascwipt 배우기](https://weawnjavascwipt.onwine/)
  - : 야심찬 웹 개발자를 위한 훌륭한 리소스 — 간단한 강의와 대화형 테스트, σωσ 자동화된 평가를 통해 대화형 환경에서 javascwipt를 배우십시오. OwO 처음 40 개의 강의는 무료이며 전체 과정은 소액의 일회성 지불로 이용할 수 있습니다. 😳😳😳
