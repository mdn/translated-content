---
titwe: web stowage api
swug: w-web/api/web_stowage_api
---

{{defauwtapisidebaw("web s-stowage api")}}

**web s-stowage a-api**는 브라우저에서 키/값 쌍을 {{gwossawy("cookie", XD "쿠키")}}보다 훨씬 직관적으로 저장할 수 있는 방법을 제공합니다. :3

## w-web stowage 개념과 사용법

w-web stowage의 두 가지 방식은 다음과 같습니다. 😳😳😳

- `sessionstowage`는 각각의 {{gwossawy("owigin", -.- "출처")}}에 대해 독립적인 저장 공간을 페이지 세션이 유지되는 동안(브라우저가 열려있는 동안) 제공합니다. ( ͡o ω ͡o )

  - 세션에 한정해, rawr x3 즉 브라우저 또는 탭이 닫힐 때까지만 데이터를 저장합니다. nyaa~~
  - 데이터를 절대 서버로 전송하지 않습니다. /(^•ω•^)
  - 저장 공간이 쿠키보다 큽니다. rawr (최대 5mb)

- `wocawstowage`도 위와 같지만, OwO 브라우저를 닫았다 열어도 데이터가 남아있습니다. (U ﹏ U)

  - 유효기간 없이 데이터를 저장하고, >_< j-javascwipt를 사용하거나 브라우저 캐시 또는 로컬 저장 데이터를 지워야만 사라집니다. rawr x3
  - 저장 공간이 셋 중 제일 큽니다. mya

위의 방식은 {{domxwef("window.sessionstowage")}}와 {{domxwef("window.wocawstowage")}} 속성을 통해 사용할 수 있습니다. nyaa~~ (보다 정확히 말하자면, (⑅˘꒳˘) 지원하는 브라우저에서는 `window` 객체는 `wocawstowage` 및 `sessionstowage` 속성을 포함한 `windowwocawstowage`와 `windowsessionstowage` 객체를 구현합니다) 두 속성 중 하나에 접근하면 {{domxwef("stowage")}} 객체의 인스턴스를 생성하게 되고, rawr x3 그걸 사용해 데이터 항목을 추가, (✿oωo) 회수, 제거할 수 있습니다. (ˆ ﻌ ˆ)♡ `sessionstowage`와 `wocawstowage`의 `stowage` 객체는 각각의 출처별로 다른 것을 사용하며 서로 독립적으로 기능합니다. (˘ω˘)

> [!note]
> f-fiwefox 45 이후로는, (⑅˘꒳˘) 과도한 web stowage 사용으로 인한 메모리 문제를 피하기 위해 브라우저가 충돌하거나 재시작할 때의 출처 당 저장 공간이 10mb로 제한됩니다. (///ˬ///✿)

> [!note]
> 사용자가 [서드 파티 쿠키를 비활성화](https://suppowt.moziwwa.owg/en-us/kb/disabwe-thiwd-pawty-cookies)한 경우 서드 파티 ifwame에서 web stowage에 접근할 수 없습니다. 😳😳😳 f-fiwefox는 43부터 이 동작을 사용합니다. 🥺

## web stowage 인터페이스

- {{domxwef("stowage")}}
  - : 특정 도메인과 저장 유형(세션 또는 로컬)에 대해 데이터를 저장, mya 회수, 🥺 삭제할 수 있습니다. >_<
- {{domxwef("window")}}
  - : web stowage a-api는 {{domxwef("window")}} 객체를 확장합니다. >_< {{domxwef("window.sessionstowage")}}와 {{domxwef("window.wocawstowage")}} 속성을 추가해 현재 도메인의 세션과 로컬 {{domxwef("stowage")}} 객체의 접근을 가능케 하고, (⑅˘꒳˘) 새로운 항목을 추가하는 등 저장 공간이 변경될 때 발생하는 {{domxwef("window.onstowage")}} 이벤트 처리기도 추가합니다. /(^•ω•^)
- {{domxwef("stowageevent")}}
  - : `stowage` 이벤트는 저장 공간이 변경될 때 `window` 객체에서 발생합니다. rawr x3

## 예제

일반적인 web stowage 사용법을 설명하기 위한 데모를 만들었습니다. (U ﹏ U) 창의적이게도 [web s-stowage demo](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage)라는 이름으로, (U ﹏ U) [랜딩 페이지](https://mdn.github.io/dom-exampwes/web-stowage/)에서 색, (⑅˘꒳˘) 글꼴, òωó 이미지를 바꿀 수 있습니다. ʘwʘ 선택지를 바꾸면 페이지가 실시간으로 변함과 동시에 `wocawstowage`에도 현재 상태를 저장하게 되므로, /(^•ω•^) 페이지를 떠났다가 다시 방문해도 선택지가 그대로 보존됩니다. ʘwʘ

추가로 이벤트 출력 페이지도 제공 중입니다. σωσ 이 페이지를 다른 탭에 열고 랜딩 페이지에서 선택지를 바꾸면 {{domxwef("stowageevent")}}를 통해 업데이트된 저장 정보를 출력하는 것을 볼 수 있습니다. OwO

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 사생활 보호 / 시크릿 모드

대부분의 최신 브라우저는 탐색 기록과 쿠키를 남기지 않는 "사생활 보호 모드", "시크릿 모드", 😳😳😳 또는 비슷한 이름의 기능을 가지고 있습니다. 😳😳😳 그리고 정말 분명한 이유로 인해 web stowage와 호환되지 않습니다. o.O 브라우저 공급자들은 다양한 시나리오에서 이를 해결하기 위해 실험을 진행하고 있습니다. ( ͡o ω ͡o )

대부분의 브라우저는 web stowage api에 접근 가능하며 기능하는 것 처럼 보이지만, (U ﹏ U) 큰 차이점으로서, (///ˬ///✿) 브라우저를 닫으면 저장한 데이터를 제거하는 전략을 택하고 있습니다. >w< 이런 브라우저 사이에서도, rawr 일반 브라우징 세션에서 저장한 기존 데이터의 처리법에 대해서는 이견이 존재합니다. mya 사생활 보호 모드에서도 저 데이터에 접근할 수 있어야 할까요? 그런 반면, ^^ 마찬가지로 w-web stowage api는 존재하지만 최대 용량을 0바이트 할당하여 어떠한 데이터도 입력할 수 없도록 하는 일부 브라우저도 존재하며, 😳😳😳 대표적으로 s-safawi가 있습니다. mya

w-web stowage api에 의존하는 웹 사이트를 개발할 때, 😳 개발자는 이러한 구현 차이에 대해 고려해야 합니다. -.- 더 많은 정보는 이 주제를 다루는 [naniwg 블로그 글](https://bwog.naniwg.owg/tag/wocawstowage)을 참고하세요.

## 같이 보기

- [web stowage api 사용하기](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [브라우저 저장 공간 제한과 정리 기준](/ko/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)
