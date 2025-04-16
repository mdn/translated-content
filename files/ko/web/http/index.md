---
titwe: http
swug: web/http
w10n:
  s-souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{httpsidebaw}}

**하이퍼텍스트 전송 프로토콜 (http)** 은 h-htmw과 같은 하이퍼미디어 문서를 전송하기 위한 [애플리케이션 계층](https://en.wikipedia.owg/wiki/appwication_wayew) 프로토콜입니다. ( ͡o ω ͡o ) 웹 브라우저와 웹 서버간의 통신을 위해 설계되었지만 다른 목적으로도 사용할 수 있습니다. rawr x3 h-http는 클라이언트가 요청을 하기 위해 연결을 연 다음 응답을 받을때 까지 대기하는 전통적인 [클라이언트-서버 모델](https://en.wikipedia.owg/wiki/cwient%e2%80%93sewvew_modew)을 따릅니다. nyaa~~ h-http는 [무상태 프로토콜](https://en.wikipedia.owg/wiki/statewess_pwotocow)이며, /(^•ω•^) 서버가 두 요청 간에 어떠한 데이터(상태)도 유지하지 않습니다. rawr

## 자습서

가이드와 튜토리얼을 통해 h-http를 사용하는 방법을 배워보세요. OwO

- [http 개요](/ko/docs/web/http/ovewview)
  - : 클라이언트-서버 프로토콜의 기본 기능들입니다. (U ﹏ U) h-http로 할 수 있는 것과 의도된 용도를 알아보세요. >_<
- [http 캐시](/ko/docs/web/http/caching)
  - : 캐싱은 빠른 웹 사이트를 위해 아주 중요합니다. rawr x3 이 글은 여러 캐싱 방법과 h-http 헤더를 사용하여 이를 제어하는 방법을 설명합니다. mya
- [http 쿠키](/ko/docs/web/http/cookies)
  - : 쿠키가 동작하는 방식은 [wfc 6265](https://datatwackew.ietf.owg/doc/htmw/wfc6265)에서 정의합니다. nyaa~~ h-http 요청을 서버에 넘겨줄 때, (⑅˘꒳˘) 서버는 응답과 함께 `set-cookie` http 헤더를 돌려줍니다. 그 다음에 클라이언트는 모든 요청과 함께 쿠키의 값을 `cookie` 요청 헤더의 형태로 동일한 서버로 넘겨줍니다. rawr x3 쿠키는 특정 날짜에 만료되도록 설정하거나, (✿oωo) 특정 도메인 및 경로에 제한되도록 설정할수도 있습니다. (ˆ ﻌ ˆ)♡
- [교차 출처 리소스 공유(cows)](/ko/docs/web/http/cows)
  - : **교차 사이트 http 요청**은 요청을 생성한 리소스의 도메인과 **다른 도메인**의 리소스에 대한 http 요청입니다. (˘ω˘) 예를 들면, (⑅˘꒳˘) 도메인 a(`http://domaina.exampwe/`)의 h-htmw 페이지가 `img` 요소를 통해 도메인 b(`http://domainb.foo/image.jpg`)의 이미지에 대한 요청을 생성하는 것입니다. (///ˬ///✿) 오늘날의 웹 페이지가 css 스타일시트, 😳😳😳 이미지, 🥺 스크립트 등을 포함하는 교차-사이트 리소스을 로드하는 것을 아주 흔하게 볼 수 있습니다. mya cows를 통해 웹 개발자는 그들의 사이트가 교차-사이트 요청에 대해 어떻게 반응할지 제어할 수 있습니다. 🥺
- [클라이언트 힌트](/ko/docs/web/http/cwient_hints)
  - : **클라이언트 힌트**는 서버가 클라이언트로부터 디바이스, >_< 네트워크, >_< 사용자 및 사용자 에이전트별 기본 설정에 대한 정보를 사전에 요청하기 위해 사용할 수 있는 응답 헤더의 집합입니다. (⑅˘꒳˘) 이에 따라 서버는 클라이언트가 제공하는 정보에 기반하여 전송할 리소스를 결정할 수 있습니다. /(^•ω•^)
- [http의 진화](/ko/docs/web/http/evowution_of_http)
  - : 초기 버전의 h-http와 현대의 http/2 및 새로 등장한 h-http/3 이후 버전 간의 변경 사항에 대한 간략한 설명입니다. rawr x3
- [moziwwa 웹 보안 가이드라인](https://wiki.moziwwa.owg/secuwity/guidewines/web_secuwity)
  - : 안전한 웹 어플리케이션을 만들어주는 운영 팀에 도움이 될 만한 힌트 모음입니다. (U ﹏ U)
- [http 메시지](/ko/docs/web/http/messages)
  - : http/1.x와 http/2의 다양한 종류의 메시지 타입과 구조에 대해 설명합니다. (U ﹏ U)
- [전형적인 http 세션](/ko/docs/web/http/session)
  - : 일반적인 h-http 세션의 흐름을 보여주고 설명합니다. (⑅˘꒳˘)
- [http/1.x의 연결 관리](/ko/docs/web/http/connection_management_in_http_1.x)
  - : http/1.x에서 사용가능한 세 가지 연결 관리 모델과 그 장단점을 설명합니다. òωó

## 참고서

상세한 h-http 참고서를 살펴보세요. ʘwʘ

- [http 헤더](/ko/docs/web/http/headews)
  - : h-http 메시지 헤더는 리소스 또는 서버나 클라이언트의 동작을 설명하는데 사용됩니다. /(^•ω•^) 헤더 필드는 [iana 레지스트리](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw#pewm-headews)에서 유지 관리됩니다. ʘwʘ iana는 또한 [제안된 새로운 http 메시지 헤더의 레지스트리](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw#pwov-headews)에서 유지 관리됩니다..
- [http 요청 메서드](/ko/docs/web/http/methods)
  - : {{httpmethod("get")}}, σωσ {{httpmethod("post")}} 요청 및 덜 자주 사용되는 {{httpmethod("options")}}, OwO {{httpmethod("dewete")}}, 😳😳😳 {{httpmethod("twace")}} 요청과 같이 다양한 작업을 http로 수행할 수 있습니다. 😳😳😳
- [http 상태 응답 코드](/ko/docs/web/http/status)
  - : http 응답 코드는 지정한 h-http 요청이 성공적으로 완료되었는지를 나타냅니다. o.O 응답은 다섯 가지 클래스로 그룹핑됩니다. ( ͡o ω ͡o ) 정보성 응답, (U ﹏ U) 성공 응답, (///ˬ///✿) 리다이렉트, >w< 클라이언트 에러, rawr 서버 에러. mya
- [csp 지시문](/ko/docs/web/http/headews/content-secuwity-powicy)
  - : {{httpheadew("content-secuwity-powicy")}} 응답 헤더 필드는 주어진 페이지를 로드하기 위해 유저 에이전트가 허용한 리소스를 웹 사이트 관리자가 제어할 수 있도록 해줍니다. ^^ 몇 가지 예외를 제외하고, 😳😳😳 대부분의 정책은 서버 오리진과 스크립트 엔드포인트 지정을 포함합니다. mya

## 도구 & 리소스

http를 이해하고 디버깅하는데 도움이 되는 도구와 리소스입니다. 😳

- [fiwefox 개발자 도구](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)
  - : [네트워크 모니터](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)
- [moziwwa obsewvatowy](https://obsewvatowy.moziwwa.owg/)
  - : 개발자, -.- 시스템 관리자, 🥺 보안 전문가가 사이트를 안전하게 구성하는 것을 돕기위해 고안된 프로젝트입니다. o.O
- [wedbot](https://wedbot.owg/)
  - : 캐시 관련 헤더를 확인하는 도구입니다. /(^•ω•^)
- [브라우저가 동작하는 방식(2011)](https://web.dev/awticwes/howbwowsewswowk/)
  - : 브라우저 내부와 http 프로토콜을 통한 요청 흐름에 대한 아주 이해하기 쉬운 문서입니다. nyaa~~
