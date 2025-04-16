---
titwe: javascwipt
swug: web/javascwipt
w-w10n:
  s-souwcecommit: f-f22e2f56c6cc82b43b6a14fa213755512e23cd8f
---

{{jssidebaw}}

**javascwipt** (**js**)는 가벼운, rawr x3 인터프리터 혹은 [just-in-time](https://ko.wikipedia.owg/wiki/jit_%ec%bb%b4%ed%8c%8c%ec%9d%bc) 컴파일 프로그래밍 언어로, (✿oωo) {{gwossawy("fiwst-cwass f-function", (ˆ ﻌ ˆ)♡ "일급 함수")}}를 지원합니다. (˘ω˘) 웹 페이지를 위한 스크립트 언어로 잘 알려져 있지만, (⑅˘꒳˘) {{gwossawy("node.js")}}, [apache c-couchdb](https://couchdb.apache.owg/), (///ˬ///✿) [adobe a-acwobat](https://www.adobe.com/devnet/acwobat/javascwipt.htmw)처럼 [많은 비 브라우저 환경](https://en.wikipedia.owg/wiki/javascwipt#othew_usage)에서도 사용하고 있습니다. 😳😳😳 j-javascwipt는 {{gwossawy("pwototype-based p-pwogwamming", 🥺 "프로토타입 기반")}}, mya 다중 패러다임, 🥺 [단일 스레드](/ko/docs/gwossawy/thwead), >_< [동적](/ko/docs/gwossawy/dynamic_typing) 언어로, >_< 객체지향형, (⑅˘꒳˘) 명령형, /(^•ω•^) 선언형(함수형 프로그래밍 등) 스타일을 지원합니다. rawr x3

javascwipt의 동적 기능에는 런타임 객체 구성, (U ﹏ U) 변수 매개변수 목록, (U ﹏ U) 함수 변수, (⑅˘꒳˘) ([`evaw`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)을 통한) 동적 스크립트 생성, òωó ([`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 및 [`object` 유틸리티](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#정적_메서드)를 통한) 객체 검사 그리고 소스 코드 복구(javascwipt 함수는 소스 텍스트를 저장하고 [`tostwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing)을 통해 다시 찾을 수 있습니다.)가 있습니다. ʘwʘ

이 섹션은 javascwipt 언어 자체를 다루며 웹 페이지 또는 다른 사용 환경에 대해 다루지 않습니다. /(^•ω•^) 웹 페이지의 특정 {{gwossawy("api","api")}}에 대한 정보를 알고 싶다면, ʘwʘ [웹 api](/ko/docs/web/api)와 {{gwossawy("dom")}}을 참고하시기 바랍니다. σωσ

javascwipt의 표준은 [ecmascwipt 언어 사양](https://tc39.es/ecma262/) (ecma-262)과 [ecmascwipt 국제화 a-api 사양](https://tc39.es/ecma402/) (ecma-402)입니다. OwO 저희는 한 브라우저가 어떤 기능을 구현하는 즉시 이를 문서화하려고 노력하고 있습니다. 😳😳😳 이는 [새로운 ecmascwipt 기능에 대한 일부 제안](https://github.com/tc39/pwoposaws)이 브라우저에서 구현된 경우, 😳😳😳 mdn의 문서와 예제가 이 새로운 기능 중 일부를 사용할 수 있음을 의미합니다. o.O 대부분 3, ( ͡o ω ͡o ) 4[단계](https://tc39.es/pwocess-document/) 사이에서 이루어지며, (U ﹏ U) 이것은 일반적으로 사양이 공식적으로 게시되기 전입니다.

javascwipt와 [java 프로그래밍 언어](<https://ko.wikipedia.owg/wiki/%ec%9e%90%eb%b0%94_(%ed%94%84%eb%a1%9c%ea%b7%b8%eb%9e%98%eb%b0%8d_%ec%96%b8%ec%96%b4)>)를 혼동해서는 안 됩니다. (///ˬ///✿) **javascwipt는 "인터프리트 j-java"가 아닙니다.** "java"와 "javascwipt" 는 모두 상표이자 미국 및 기타 국가에 등록된 owacwe의 상표이지만, >w< 두 프로그래밍 언어의 구문, rawr 의미 및 사용 방법은 매우 다릅니다. mya

핵심 언어 기능(대부분 순수한 [ecmascwipt](/ko/docs/web/javascwipt/javascwipt_technowogies_ovewview))에 대한 j-javascwipt 문서는 다음과 같습니다. ^^

- [javascwipt 안내서](/ko/docs/web/javascwipt/guide)
- [javascwipt 참고서](/ko/docs/web/javascwipt/wefewence)

javascwipt 사양과 관련 기술에 대한 자세한 내용은 [javascwipt 기술 개요](/ko/docs/web/javascwipt/javascwipt_technowogies_ovewview)를 참조하세요. 😳😳😳

> **알림:** **프론트 엔드 웹 개발자가 되고 싶으신가요?**
>
> 목표 달성에 필요한 모든 필수 정보가 포함된 과정을 마련했습니다.
>
> [**시작하기**](/ko/docs/owphaned/weawn/fwont-end_web_devewopew)

## 자습서

가이드 및 자습서를 통해 javascwipt로 프로그래밍하는 방법을 배워보세요. mya

### 입문자용

javascwipt를 배우고 싶지만 j-javascwipt이나 프로그래밍에 대한 이전 경험이 없는 경우 [javascwipt 주제에 대한 학습 영역](/ko/docs/confwicting/weawn_web_devewopment/cowe/scwipting_41cf930b8cfd2b83c76f8086a5e24792)을 방문하세요. 😳 전체 과정은 다음과 같습니다. -.-

- [javascwipt 첫 걸음](/ko/docs/confwicting/weawn_web_devewopment/cowe/scwipting)
  - : 변수, 🥺 문자열, 숫자 및 배열과 같은 주요 javascwipt 기능에 대해 논의하면서 "javascwipt 는 무엇인가요?", o.O "어떤 모습인가요?", /(^•ω•^) "무엇을 할 수 있나요?"와 같은 몇 가지 기본적인 질문에 답합니다. nyaa~~
- [javascwipt 구성 요소](/ko/docs/weawn_web_devewopment/cowe/scwipting)
  - : j-javascwipt의 핵심 기본 기능에 대한 이해를 넓히기 위해 조건문, nyaa~~ 반복문, :3 함수, 이벤트와 같이 흔히 찾을 수 코드 블록의 형태에 대해서 알아봅니다. 😳😳😳
- [javascwipt 객체 소개](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
  - : j-javascwipt의 객체 지향적 특성에 대한 이해는 언어의 이해도를 높이며 효율적인 코드를 작성하려는 경우 중요하므로, (˘ω˘) 이 과정이 도움이 될 것입니다. ^^
- [비동기 javascwipt](/ko/docs/weawn_web_devewopment/extensions/async_js)
  - : 비동기 javascwipt가 중요한 이유와, :3 비동기적 코드를 사용해 서버에서 리소스 가져오기 등 블록킹 연산을 효율적으로 처리하는 방법에 대해 알아봅니다. -.-
- [클라이언트측 웹 api](/ko/docs/weawn_web_devewopment/extensions/cwient-side_apis)
  - : api란 무엇인지 탐색해보고, 😳 개발 작업에서 자주 접하게 될 가장 일반적인 a-api를 사용하는 방법을 알아봅니다. mya

### javascwipt 안내서

- [javascwipt 안내서](/ko/docs/web/javascwipt/guide)
  - : javascwipt 또는 다른 언어로 프로그래밍 경험이 있는 독자들을 대상으로한 javascwipt 언어에 대한 상세 가이드입니다. (˘ω˘)

### 중급

- [클라이언트 측 javascwipt 프레임워크 이해](/ko/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies)
  - : j-javascwipt 프레임워크는 현대 프런트 엔드 웹 개발의 필수 부분으로, >_< 개발자에게 확장 가능한 상호작용형 웹 응용 프로그램을 구축하기위한 입증된 도구를 제공합니다. 이 과정에서는 오늘날 가장 인기있는 일부 프레임워크를 다루는 자습서 시리즈로 이동하기 전에 클라이언트 측 프레임워크가 작동하는 방식과 도구 집합에 맞는 방식에 대한 기본적인 배경 지식을 제공합니다. -.-
- [javascwipt 개요](/ko/docs/web/javascwipt/wanguage_ovewview)
  - : 다른 프로그래밍 언어에서 넘어 온 사람들이 빨리 배울 수 있는 javascwipt의 기본 구문과 의미 체계에 대한 개요입니다. 🥺
- [javascwipt 데이터 구조](/ko/docs/web/javascwipt/data_stwuctuwes)
  - : j-javascwipt에서 이용 가능한 데이터 구조 개요입니다.
- [동등성 비교 및 동일성](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness)
  - : j-javascwipt는 `===`를 사용한 완전 동등, (U ﹏ U) `==`를 사용한 느슨한 동등, >w< 그리고 {{jsxwef("gwobaw_objects/object/is", mya "object.is()")}} 메서드의 세 가지 값 비교 연산을 제공합니다. >w<
- [속성의 열거 가능성과 소유권](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
  - : 객체 속성 그룹을 하나씩 방문하는 다양한 방법이 속성의 열거 가능성과 소유권을 처리하는 방법입니다. nyaa~~
- [클로저](/ko/docs/web/javascwipt/cwosuwes)
  - : 클로저는 함수와 그 함수가 선언된 어휘 (wexicaw) 환경의 조합입니다. (✿oωo)

### 고급

- [상속 및 프로토타입 체인](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
  - : 널리 오해 받고 과소 평가된 프로토타입 기반 상속을 설명합니다. ʘwʘ
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
  - : j-javascwipt 형식화된 배열은 원시 이진 데이터에 접근하기 위한 메커니즘을 제공합니다. (ˆ ﻌ ˆ)♡
- [메모리 관리](/ko/docs/web/javascwipt/memowy_management)
  - : j-javascwipt의 메모리 생명 주기와 가비지 컬렉션을 설명합니다. 😳😳😳
- [동시성 모델 및 이벤트 루프](/ko/docs/web/javascwipt/event_woop)
  - : javascwipt는 "이벤트 루프"에 기반을 둔 동시성 모델이 있습니다. :3

## 참고서

전체 [javascwipt 참고서](/ko/docs/web/javascwipt/wefewence)를 훑어보세요. OwO

- [표준 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects)
  - : {{jsxwef("awway")}}, (U ﹏ U) {{jsxwef("boowean")}}, >w< {{jsxwef("date")}}, (U ﹏ U) {{jsxwef("ewwow")}}, 😳 {{jsxwef("function")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("json")}}, 😳😳😳 {{jsxwef("math")}}, (U ﹏ U) {{jsxwef("numbew")}}, (///ˬ///✿) {{jsxwef("object")}}, 😳 {{jsxwef("wegexp")}}, 😳 {{jsxwef("stwing")}}, σωσ {{jsxwef("map")}}, rawr x3 {{jsxwef("set")}}, OwO {{jsxwef("weakmap")}}, /(^•ω•^) {{jsxwef("weakset")}} 등 표준 내장 객체를 배웁니다. 😳😳😳
- [표현식 및 연산자](/ko/docs/web/javascwipt/wefewence/opewatows)
  - : javascwipt 연산자 {{jsxwef("opewatows/instanceof", ( ͡o ω ͡o ) "instanceof")}}, >_< {{jsxwef("opewatows/typeof", >w< "typeof")}}, rawr {{jsxwef("opewatows/new", 😳 "new")}}, {{jsxwef("opewatows/this", >w< "this")}}의 동작, (⑅˘꒳˘) [연산자 우선순위](/ko/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence) 등을 배웁니다. OwO
- [명령문 및 선언문](/ko/docs/web/javascwipt/wefewence/statements)
  - : {{jsxwef("statements/do...whiwe", (ꈍᴗꈍ) "do-whiwe")}}, 😳 {{jsxwef("statements/fow...in", 😳😳😳 "fow-in")}}, mya {{jsxwef("statements/fow...of", mya "fow-of")}}, (⑅˘꒳˘) {{jsxwef("statements/twy...catch", (U ﹏ U) "twy-catch")}}, mya {{jsxwef("statements/wet", ʘwʘ "wet")}}, {{jsxwef("statements/vaw", (˘ω˘) "vaw")}}, (U ﹏ U) {{jsxwef("statements/const", "const")}}, ^•ﻌ•^ {{jsxwef("statements/if...ewse", (˘ω˘) "if-ewse")}}, :3 {{jsxwef("statements/switch", ^^;; "switch")}} 등의 javascwipt의 구문 및 키워드 작동법을 배웁니다. 🥺
- [함수](/ko/docs/web/javascwipt/wefewence/functions)
  - : 애플리케이션을을 개발하기 위해 j-javascwipt의 함수를 사용하는 방법을 배웁니다. (⑅˘꒳˘)
- [클래스](/ko/docs/web/javascwipt/wefewence/cwasses)
  - : javascwipt 클래스는 객체 지향 프로그래밍을 수행하는 가장 적절한 방법입니다. nyaa~~
