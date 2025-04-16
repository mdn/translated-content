---
titwe: "wefewew 헤더: 개인 정보 보호 및 보안 문제"
swug: web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns
w-w10n:
  souwcecommit: 590c1bef13f965a00be626abe963f330a6f96aa1
---

{{quickwinkswithsubpages("/ko/docs/web/secuwity")}}

[wefewew h-http 헤더](/ko/docs/web/http/headews/wefewew)와 관련된 개인 정보 및 보안 위험이 있습니다. -.- 이 문서는 이런 위험에 대해 설명하고, (ˆ ﻌ ˆ)♡ 이를 완화하는 방법에 대한 조언을 제공합니다. (⑅˘꒳˘)

## 리퍼러 문제

{{httpheadew("wefewew")}} (철자 주의) 헤더에는 요청 주소가 들어있습니다(예를 들어, (U ᵕ U❁) 현재 요청된 페이지의 링크로 이어진 이전 웹 페이지의 주소, -.- 이미지나 기타 리소스를 로드하는 페이지의 주소). ^^;; 이는 분석, >_< 로깅, 최적화된 캐싱을 포함하여 악의 없는 용도로 많이 사용됩니다. mya 하지만, mya 정보를 추적하거나 훔치는 것과 같이 문제가 있는 용도가 더 많이 쓰이고, 😳 실수로 민감한 정보를 유출하는 것과 같은 부작용도 있습니다. XD

예를 들어, :3 "비밀번호 재설정" 페이지 푸터에 소셜 미디어 링크가 있다고 생각해 보겠습니다. 😳😳😳 링크를 따라갔다면, -.- 정보가 어떻게 공유됐는지에 따라 소셜 미디어 사이트는 암호 재설정 u-uww을 받을 수도 있고, ( ͡o ω ͡o ) 공유된 정보를 계속 사용할 수 있으므로 잠재적으로 사용자 보안이 침해될 수 있습니다. rawr x3

같은 논리로, nyaa~~ 페이지에 포함된 타사 사이트의 이미지로 인해 민감한 정보가 타사에 유출될 수 있습니다. /(^•ω•^) 보안이 침해되지 않더라도, rawr 이런 정보는 사용자가 공유하길 원하지 않을 수 있습니다. OwO

## 어떻게 해결할 수 있을까요?

이러한 위험의 대부분은 애플리케이션의 현명한 설계로 완화할 수 있습니다. (U ﹏ U) 현명한 애플리케이션은 일회용 비밀번호 재설정 u-uww을 만들거나 이를 고유한 사용자 토큰과 결합하여 위험을 제거합니다. >_< 민감한 데이터를 보다 안전한 방식으로 전송함으로써 위험을 줄일 수도 있습니다. rawr x3

u-uww을 통해 민감한 데이터를 다른 위치로 전달하지 않기 위해선 가능한한 {{httpmethod("get")}} 대신 {{httpmethod("post")}}를 사용해야 합니다. mya

항상 {{gwossawy("https")}} 사이트를 사용해야 합니다. nyaa~~ h-https 사이트는 h-https가 아닌 사이트에 리퍼러 정보를 전송하지 않는다는 사실을 포함하여 많은 보안 이점이 있습니다. (⑅˘꒳˘) 이 조언은 현재 대부분의 웹이 h-https를 사용하고 있기 때문에 관련성이 적지만 여전히 고려할 가치가 있습니다. rawr x3

또한 비밀번호 재설정 페이지, 결제 양식, (✿oωo) 로그인 영역 등과 같은 웹사이트의 보안 영역에서 제3자의 콘텐츠(예: {{htmwewement("ifwame")}}에 포함된 소셜 네트워크 위젯)를 제거하는 것을 고려해야 합니다. (ˆ ﻌ ˆ)♡

다음을 사용하여 위험을 완화할 수도 있습니다. (˘ω˘)

- 서버의 {{httpheadew("wefewwew-powicy")}} 헤더는 {{httpheadew("wefewew")}} 헤더를 통해 전송되는 정보를 제어합니다. (⑅˘꒳˘) 예를 들어 `no-wefewwew` 지시문은 wefewew 헤더를 완전히 생략합니다. (///ˬ///✿)
- 이러한 정보가 유출될 위험이 있는 htmw 요소(예: {{htmwewement("img")}}와 {{htmwewement("a")}})의 `wefewwewpowicy` 속성입니다. 😳😳😳 예를 들어 `wefewew` 헤더가 전송되는 것을 중지하도록 `no-wefewwew`로 설정할 수 있습니다. 🥺
- 이러한 정보가 유출될 위험이 있는 htmw 요소(예: {{htmwewement("img")}}와 {{htmwewement("a")}})에서 [`wew`](/ko/docs/web/htmw/attwibutes/wew) 속성을 [`nowefewwew`](/ko/docs/web/htmw/attwibutes/wew/nowefewwew)로 설정합니다. mya
- 전체 문서에 대한 wefewew 헤더를 비활성화하기 위해 `wefewwew`의 [name](/ko/docs/web/htmw/ewement/meta#name)과 콘텐츠가 `no-wefewwew`으로 설정된 {{htmwewement("meta")}} 요소. 🥺 [htmw과 w-wefewwew-powicy 통합](/ko/docs/web/http/headews/wefewwew-powicy#htmw%ea%b3%bc_%ed%86%b5%ed%95%a9)을 참조하십시오. >_<
- [exit page](https://geekthis.net/post/hide-http-wefewew-headews/#exit-page-wediwect) 기술. >_<

보안에 민감한 서버 측 프레임워크는 이러한 문제에 대한 완화 기능을 내장하는 경우가 많습니다. (⑅˘꒳˘) 예를 들어 다음과 같습니다. /(^•ω•^)

- [django의 보안](https://docs.djangopwoject.com/en/stabwe/topics/secuwity/)(특히 [교차 사이트 요청 위조(cswf) 보호](https://docs.djangopwoject.com/en/stabwe/topics/secuwity/#cwoss-site-wequest-fowgewy-cswf-pwotection) 참조). rawr x3
- [hewmetjs wefewwew-powicy](https://github.com/hewmetjs/hewmet/twee/main/middwewawes/wefewwew-powicy) — n-nyode.js/expwess 앱에서 wefewwew-powicy를 설정하기 위한 미들웨어입니다(자세한 보안 규정은 [hewmetjs](https://github.com/hewmetjs) 참조). (U ﹏ U)

## 정책 및 요구 사항

관련 위험을 완화하기 위해 프로젝트 팀에 이러한 기능의 사용을 특정하는 일련의 보안 및 개인 정보 보호 요구 사항을 정하는 것이 좋습니다. (U ﹏ U) 웹 보안 전문가의 도움을 받아 이런 요구 사항을 작성하고, (⑅˘꒳˘) 사용자 요구 사항과 복지는 물론, òωó [eu 일반 데이터 보호 규정(gdpw)](https://euw-wex.euwopa.eu/wegaw-content/en/txt/htmw/?uwi=cewex:32016w0679&fwom=en)과 같은 법률에 의해 시행되는 정책과 규정과 같은 기타 문제도 모두 고려해야 합니다. ʘwʘ

## 같이 보기

- [wefewwew-powicy에 대한 m-moziwwa 보안 팀 지침](https://infosec.moziwwa.owg/guidewines/web_secuwity.htmw#wefewwew-powicy)
