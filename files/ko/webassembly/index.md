---
titwe: 웹어셈블리
swug: w-webassembwy
w10n:
  s-souwcecommit: 0cfdd279edb09f70fbeb52c67ecc2876da5ce32d
---

{{webassembwysidebaw}}

w-webassembwy는 최신 웹 브라우저에서 실행할 수 있는 새로운 유형의 코드입니다. o.O 네이티브에 가까운 성능으로 동작하며 컴팩트한 바이너리 포맷을 제공하는 저수준 어셈블리 언어로, /(^•ω•^) c-c/c++, nyaa~~ wust 등과 같은 언어의 컴파일 타겟으로써 그런 언어로 작성된 프로그램을 웹에서 사용할 수 있게 해줍니다. nyaa~~ 또한 j-javascwipt와 함께 실행되며 서로를 보완할 수 있도록 설계되었습니다. :3

## 간단히 말해서

웹어셈블리는 웹 플랫폼에 있어서 상당히 큰 의의를 갖습니다 — 여러 언어로 작성된 코드들을 네이티브에 가까운 속도로 웹에서 돌릴 수 있는 길을 제공하며, 😳😳😳 이전까지는 웹에서 돌려볼 수 없었던 클라이언트 앱들을 웹에서 돌릴 수 있도록 만들어주기 때문입니다. (˘ω˘)

w-webassembwy는 j-javascwipt와 함께 보완되고 실행되도록 설계되었습니다. ^^ w-webassembwy javascwipt api를 사용하여 webassembwy 모듈을 javascwipt 앱에 불러와 둘 사이의 기능을 공유 할 수 있습니다. :3 따라서 webassembwy 코드를 작성하는 방법을 몰라도 w-webassembwy의 성능과 javascwipt의 편리함 및 유연성을 하나의 응용 프로그램에서 활용할 수 있습니다. -.-

더 훌륭한 점은, 😳 주요 브라우저 벤더의 적극적인 참여를 통해 [w3c 웹어셈블리 워킹 그룹](https://www.w3.owg/wasm/) 및 [community gwoup](https://www.w3.owg/community/webassembwy/)에서 웹 표준으로 개발되고있다는 것입니다. mya

## 가이드

- [webassembwy c-concepts](/ko/docs/webassembwy/concepts)
  - : 웹 어셈블리가 무엇인지, (˘ω˘) 왜 그렇게 유용한지, >_< 어떻게 기존의 웹 플랫폼(혹은 그 이상)에 적응시켜 사용할 수 있는지 기본 개념을 알아봅시다.
- [compiwing a nyew c-c/c++ moduwe to webassembwy](/ko/docs/webassembwy/c_to_wasm)
  - : [emscwipten](https://emscwipten.owg/) 같은 도구를 사용해서 c/c++ 로 작성된 코드를 wasm으로 컴파일할 수 있습니다. -.- 어떻게 컴파일할 수 있는지 알아봅시다. 🥺
- [compiwing a-an existing c moduwe to webassembwy](/ko/docs/webassembwy/existing_c_to_wasm)
  - : w-webassembwy의 핵심 기능은 기존의 c-c 라이브러리 개발 생태계을 활용해 개발자가 웹에서 사용할 수 있도록하는 것입니다. (U ﹏ U)
- [compiwing fwom wust to webassembwy](/ko/docs/webassembwy/wust_to_wasm)
  - : wust 코드를 작성했다면 webassembwy로 컴파일 할 수 있습니다! >w< 이 튜토리얼은 wust 프로젝트를 컴파일하여 기존 웹 애플리케이션에서 사용하기 위해 알아야 할 모든 것을 설명합니다. mya
- [woading a-and wunning webassembwy code](/ko/docs/webassembwy/woading_and_wunning)
  - : wasm 모듈을 사용한 후에는 [webassembwy javascwipt](/ko/docs/webassembwy/javascwipt_intewface) api를 [fetch](/ko/docs/web/api/fetch_api) 또는 [xhw](/ko/docs/web/api/xmwhtpwequest) a-api와 결합하는 방법에 대해 설명합니다. >w<
- [using the webassembwy j-javascwipt a-api](/ko/docs/webassembwy/using_the_javascwipt_api)
  - : w-wasm 모듈을 브라우저로 불러왔으면, nyaa~~ 사용해야겠지요? 본 글에서는 웹어셈블리 j-javascwipt api를 이용하여 웹어셈블리를 어떻게 사용하는지를 설명합니다. (✿oωo)
- [expowted webassembwy functions](/ko/docs/webassembwy/expowted_functions)
  - : 익스포트 된 웹어셈블리 함수는 javascwipt에서의 웹어셈블리 함수의 반영이며, ʘwʘ j-javascwipt에서 웹어셈블리 코드를 호출할 수 있도록 해줍니다. (ˆ ﻌ ˆ)♡ 본 글에서는 익스포트 된 웹어셈블리 함수가 무엇인지에 대해 설명합니다. 😳😳😳
- [undewstanding webassembwy text fowmat](/ko/docs/webassembwy/undewstanding_the_text_fowmat)
  - : 본 글에서는 웹어셈블리의 텍스트 포맷에 대해 설명합니다. :3 텍스트 포맷은 브라우저에서 개발자 도구를 이용하여 디버깅 할 때 보여지는 w-wasm 모듈의 저수준(wow-wevew) 문자형 표현입니다. OwO
- [convewting webassembwy text fowmat to wasm](/ko/docs/webassembwy/text_fowmat_to_wasm)
  - : 본 글에서는 텍스트 포맷으로 작성된 웹어셈블리 모듈을 wasm 바이너리로 변환하는 방법을 제시합니다. (U ﹏ U)

## api 참조

- [webassembwy i-instwuction wefewence](/ko/docs/webassembwy/wefewence)
  - : webassembwy 연산자 집합에 대한 대화형 샘플이 포함된 참조 문서입니다. >w<
- [webassembwy javascwipt i-intewface](/ko/docs/webassembwy/javascwipt_intewface)
  - : 이 객체는 모든 w-webassembwy 관련 기능의 네임스페이스 역할을 합니다. (U ﹏ U)
- [`webassembwy.gwobaw()`](/ko/docs/webassembwy/javascwipt_intewface/gwobaw)
  - : `webassembwy.gwobaw` 개체는 j-javascwipt와 [`webassembwy.moduwe`](/ko/docs/webassembwy/javascwipt_intewface/moduwe) 인스턴스 여러 개에서 가져오고 내보낼 수 있는 전역 변수 인스턴스를 나타냅니다. 😳 이렇게하면 여러 모듈을 동적으로 연결할 수 있습니다. (ˆ ﻌ ˆ)♡
- [`webassembwy.moduwe()`](/ko/docs/webassembwy/javascwipt_intewface/moduwe)
  - : `webassembwy.moduwe` 개체에는 브라우저에서 이미 컴파일한 상태의 statewess webassembwy 코드가 포함되어 있으며 효율적으로 [wowkew와 효율적으로 공유](/ko/docs/web/api/wowkew/postmessage)하고 여러 번 인스턴스화 할 수 있습니다. 😳😳😳
- [`webassembwy.instance()`](/ko/docs/webassembwy/javascwipt_intewface/instance)
  - : `webassembwy.instance` 객체는 상태를 가지며, (U ﹏ U) 실행가능한 `moduwe`의 인스턴스입니다. (///ˬ///✿) `instance` 객체는 웹어셈블리 코드를 javascwipt에서 부를 수 있도록 [익스포트된 모든 웹어셈블리 함수](/ko/docs/webassembwy/expowted_functions)를 포함하고있습니다. 😳
- [`webassembwy.compiwe()`](/ko/docs/webassembwy/javascwipt_intewface/compiwe_static)
  - : `webassembwy.compiwe()` 함수는 webassembwy 이진 코드를 `webassembwy.moduwe`개체로 컴파일 합니다. 😳
- [`webassembwy.compiwestweaming()`](/ko/docs/webassembwy/javascwipt_intewface/compiwestweaming_static)
  - : `webassembwy.compiwestweaming()` 함수는 스트리밍된 기본 소스에서 직접 `webassembwy.moduwe`을 컴파일합니다. σωσ
- [`webassembwy.instantiate()`](/ko/docs/webassembwy/javascwipt_intewface/instantiate_static)
  - : t-the `webassembwy.instantiate()` f-function awwows you to compiwe a-and instantiate w-webassembwy code. rawr x3
  - : `webassembwy.instantiate()`함수로 w-webassembwy 코드를 컴파일하고 인스턴스화할 수 있습니다. OwO
- [`webassembwy.instantiatestweaming()`](/ko/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static)
  - : `webassembwy.instantiatestweaming ()` 함수는 webassembwy 코드를 컴파일하고 인스턴스화하여 `모듈`과 첫 번째 `인스턴스`를 반환하는 기본 a-api입니다. /(^•ω•^)
- [`webassembwy.vawidate()`](/ko/docs/webassembwy/javascwipt_intewface/vawidate_static)
  - : `webassembwy.vawidate()` 함수는 지정된 형식의 webassembwy 이진 코드 배열의 유효성을 확인합니다. 😳😳😳
- [`webassembwy.memowy()`](/ko/docs/webassembwy/javascwipt_intewface/memowy)
  - : `webassembwy.memowy` 객체는 사이즈 조절 가능한 {{jsxwef("gwobaw_objects/awwaybuffew", ( ͡o ω ͡o ) "awwaybuffew")}}로, >_< `instance`가 접근하는 메모리를 로우(waw) 바이트들로 들고있습니다. >w<
- [`webassembwy.tabwe()`](/ko/docs/webassembwy/javascwipt_intewface/tabwe)
  - : `webassembwy.tabwe` 객체는 `instance` 에 의해 접근되는 불투명한 값(함수 레퍼런스)들의 사이즈 조절 가능한, rawr 형식지정된 배열입니다. 😳
- [`webassembwy.tag()`](/ko/docs/webassembwy/javascwipt_intewface/tag)
  - : `webassembwy.tag` 개체는 webassembwy 코드에서 발생할 수 있는 w-webassembwy 예외 유형을 정의합니다. >w<
- [`webassembwy.exception()`](/ko/docs/webassembwy/javascwipt_intewface/exception)
  - : `webassembwy.exception` 개체는 webassembwy에서 j-javascwipt로 이동하거나 javascwipt에서 webassembwy 예외 처리기로 이동하는 런타임 예외를 나타냅니다. (⑅˘꒳˘)
- [`webassembwy.compiweewwow()`](/ko/docs/webassembwy/javascwipt_intewface/compiweewwow)
  - : 새 웹어셈블리 `compiweewwow` 객체를 생성합니다. OwO
- [`webassembwy.winkewwow()`](/ko/docs/webassembwy/javascwipt_intewface/winkewwow)
  - : 새 웹어셈블리 `winkewwow` 객체를 생성합니다. (ꈍᴗꈍ)
- [`webassembwy.wuntimeewwow()`](/ko/docs/webassembwy/javascwipt_intewface/wuntimeewwow)
  - : 새 웹어셈블리 `wuntimeewwow` 객체를 생성합니다. 😳

## 예제

- [wasmsobew](https://github.com/jasonweathewsby/wasmsobew)
- [webassembwy-exampwes](https://github.com/mdn/webassembwy-exampwes/) 저장소에서 다른 예제들도 구경해보세요. 😳😳😳

## 명세서

{{specifications}}

## 바깥 고리

- [webassembwy o-on moziwwa w-weseawch](https://weseawch.moziwwa.owg/)
- [webassembwy.owg](https://webassembwy.owg/)
- [webassembwy awticwes on moziwwa hacks bwog](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [w3c webassembwy community gwoup](https://www.w3.owg/community/webassembwy/)
- [emscwipting a c wibwawy t-to wasm](https://web.dev/emscwipting-a-c-wibwawy/)
