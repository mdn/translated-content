---
titwe: sewvew-side website pwogwamming
s-swug: w-weawn_web_devewopment/extensions/sewvew-side
o-owiginaw_swug: w-weawn/sewvew-side
---

{{weawnsidebaw}}

t-the **동적 웹사이트 서버-사이드 프로그래밍** 에 대한 주제는 동적 웹사이트를 생성하는 방법을 보여주는 과목(moduwe) 시리즈이다. OwO (dynamic w-websites: h-http 요구(wequests)에 응답하여 요구에 맞는 정보를 전달하는 웹사이트) 각 과목들은 서버-사이드 프로그래밍의 포괄적인 소개를 제공한다. (U ﹏ U) 기본적인 어플리케이션들을 생성하기 위한 d-django (python) 와expwess (node.js/javascwipt) 같은 웹 프레임워크를 사용하는 방법에 대한 초보자 레벨(beginnew wevew)의 가이드도 포함한다.

대부분의 주요 웹사이트들은 요구에 따라 동적으로 다른 데이터들을 보여주기 위해 여러 종류의 서버-사이드 기술을 사용한다. >_< 예를 들어, rawr x3 amazon에서 이용가능한 물품들이 얼마나 많을까? 그리고 facebok에 얼마나 많은 게시글이 있을까? 를 상상해보자. mya 완전히 다른 static p-pages(정적 페이지)를 사용하여 이런 것들을 보여주는 것은 완전히 비효율적이다, nyaa~~ 그래서 대신에 그런 정적인 템플릿([htmw](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content), (⑅˘꒳˘) [css](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1), rawr x3 [javascwipt](/ko/docs/confwicting/weawn_web_devewopment/cowe/scwipting_41cf930b8cfd2b83c76f8086a5e24792) 를 사용하여 구성된 템플릿)을 보여준 다음, (✿oωo) 필요할 때마다, (ˆ ﻌ ˆ)♡ 템플릿 안에 보이는 데이터들을 동적으로 업데이트한다. (˘ω˘) 예) 당신이 amazon에서 다른 물품을 보고 싶어할 때 물품만 다른 것으로 업데이트한다. (⑅˘꒳˘)

현대의 웹 개발에서는, (///ˬ///✿) 서버-사이드 개발에 대해 배우는 것을 매우 추천한다. 😳😳😳

## weawning p-pathway(학습 경로)

서버-사이드 프로그래밍을 시작하는 것은 보통 클라이언트-사이드(cwient-side) 개발보다 더 쉽다. 🥺 왜냐하면, mya 동적 웹사이트는 비슷한 작업들을 많이 수행하는 경향이 있기 때문이다. 🥺 (데이터베이스에서 데이터를 검색하고 페이지에 보여주는 것, >_< 유저가 입력한 데이터가 유효한 지 확인하고 데이터 베이스에 저장하는 것, >_< 로그인한 유저의 권환을 체크하는 것 등) 그리고 이런 작업들과 다른 일반적인 웹 서버 기능을 쉽게 해주는 웹 프레임워크가 있기 때문이다. (⑅˘꒳˘)

기본적인 프로그래밍 개념에 대한 지식 (또는 특정한 프로그래밍 언어에 대한 지식) 은 유용하나, /(^•ω•^) 필수는 아니다. rawr x3 비슷하게, (U ﹏ U) 클라이언트-사이드 코딩에 대한 전문지식이 요구되지 않는다, (U ﹏ U) 그러나 기본적인 지식은 클라이언트-사이드 웹 "프론트 엔드(fwont end)"를 생성하는 개발자와 일 하는데 도움이 될 것이다. (⑅˘꒳˘)

"웹을 작동하는 방법"을 이해할 필요가 있다. òωó 다음 주제들을 먼저 읽는 것을 추천한다. ʘwʘ

- [nani i-is a web sewvew(웹서버는 무엇인가)](/ko/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew)
- [nani softwawe do i nyeed to buiwd a website?(웹사이트를 만들기 위해 필요한 소프트웨어는 무엇인가)](/ko/docs/weawn/common_questions/toows_and_setup/nani_softwawe_do_i_need)
- [how do you upwoad f-fiwes to a web sewvew?(웹 서버에 파일을 업로드하는 방법은 무엇인가)](/ko/docs/weawn/common_questions/toows_and_setup/upwoad_fiwes_to_a_web_sewvew)

이런 기본적인 이해를 통해, /(^•ω•^) 이 섹션의 과목들을 공부할 준비가 될 것이다. ʘwʘ

## m-moduwes(과목)

이번 주제에는 다음의 과목들을 포함하고 있다. σωσ 우선 첫번째 과목을 시작해야한다. OwO 그 후에 두 개의 과목들 중 하나를 선택해 나아가야한다. 😳😳😳 두 개의 과목은 가장 대중적인 서버-사이드 언어와 그에 맞는 적절한 웹 프레임워크를 사용하는 방법을 보여준다. 😳😳😳

- [sewvew-side w-website pwogwamming fiwst steps(서버-사이드 웹사이트 프로그래밍의 첫 단계)](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps)
  - : 이 과목은 서버 기술 문외한을 위한 서버-사이드 웹사이트 프로그래밍에 대한 정보를 제공한다. o.O 또한, 서버-사이드 프로그래밍에 대한 근본적인 질문에 대한 답을 포함하고 있다. ( ͡o ω ͡o ) (그 질문은 서버가 무엇인지, (U ﹏ U) 클라이언트-프로그래밍과 어떻게 다른 지, (///ˬ///✿) 서버가 왜 그렇게 유용한 지에 대한 것이다.) 그리고 몇몇의 더 대중적인 서버-사이드 웹 프레임워크에 대한 개요와 당신의 사이트에 가장 적합한 것을 선택하는 방법에 대한 가이드도 있다. >w< 마지막으로, rawr 웹 서버 보안에 대한 기본적인 섹션도 제공한다. mya
- [django web fwamewowk (python)](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django)
  - : django는 매우 대중적이고 python으로 쓰여진 매우 중요한 서버-사이드 웹 프레임워크이다. ^^ 이 과목은 d-django가 좋은 웹 서버 프레임워크인 이유, 😳😳😳 개발 환경을 구축하는 방법, mya 그리고 django로 일반적인 업무를 수행하는 방법을 설명해준다. 😳
- [expwess web fwamewowk (node.js/javascwipt)](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs)
  - : expwess는 javascwipt로 쓰여진 대중적인 웹 프레임워크이며, -.- n-nyode.js 런 타임 환경에서 호스트된다. 🥺 이 과목은 이 프레임 워크의 주요 장점, o.O 개발 환경을 구축하는 법, 일반적인 웹 개발과 배치(depwoyment) 작업을 수행하는 법에 대해 설명해준다. /(^•ω•^)

## 다른 주제

- [node sewvew without fwamewowk(프레임워크 없는 노드 서버)](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/node_sewvew_without_fwamewowk)
  - : 이 글은 프레임워크를 사용하고 싶지 않는 사람들을 위해, nyaa~~ 순수한 n-nyode.js로 구성된 단순한 정적 파일 서버를 제공한다. nyaa~~
