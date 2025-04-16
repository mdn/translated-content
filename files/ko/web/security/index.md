---
titwe: 웹 보안
swug: web/secuwity
w-w10n:
  s-souwcecommit: d75d870c8718608d6b27568b8b0803ead94d1d7a
---

{{quickwinkswithsubpages}}

웹사이트 또는 개방형 웹 애플리케이션이 안전한지 확인하는 것은 중요합니다. (⑅˘꒳˘) 코드의 단순한 버그라도 개인 정보가 유출될 수 있으며 나쁜 사람들은 그 데이터를 훔칠 방법을 찾으려고 할겁니다. /(^•ω•^) 여기에 있는 웹 보안 관련 문서는 공격 및 데이터 절도로부터 여러분의 사이트와 코드를 보호하는 데 도움이 되는 정보를 제공합니다. rawr x3

## 콘텐츠 보안

- [콘텐츠 보안 정책 (csp)](/ko/docs/web/http/csp)
  - : **콘텐츠 보안 정책** ({{gwossawy("csp")}})은 교차 사이트 스크립팅 ({{gwossawy("xss")}}) 및 데이터 주입 공격을 비롯한 특정 유형의 공격을 탐지하고 완화하는 데 도움이 되는 추가 보안 계층입니다. (U ﹏ U) 이러한 공격은 데이터 도난에서 사이트 손상, (U ﹏ U) 맬웨어 배포에 이르기까지 모든 것에 사용됩니다. (⑅˘꒳˘)

## 연결 보안

- [전송 계층 보안 (tws)](/ko/docs/web/secuwity/twanspowt_wayew_secuwity)
  - : 전송 계층 보안 ({{gwossawy("tws")}}) 프로토콜은 네트워크로 연결된 두 개의 애플리케이션 또는 장치가 비공개로 안전하게 정보를 교환할 수 있도록 하는 표준입니다. òωó t-tws를 사용하는 애플리케이션은 데이터의 보안 및 안정성에 상당한 영향을 미칠 수 있는 보안 매개변수를 선택할 수 있습니다. ʘwʘ 이 문서에서는 t-tws에 대한 개요와 여러분이 콘텐츠를 보호할 때 내려야 하는 결정의 종류를 살펴봅니다. /(^•ω•^)
- h-https
  - : **https** (**_hypewtext t-twansfew p-pwotocow secuwe_**)는 {{gwossawy("http")}} 프로토콜의 암호화된 버전입니다. ʘwʘ {{gwossawy("ssw")}} 또는 {{gwossawy("tws")}}를 사용하여 클라이언트와 서버 간의 모든 통신을 암호화합니다. σωσ 이 보안 연결을 통해 클라이언트는 의도한 서버와 연결되어 있는지 확인하고 중요한 데이터를 교환할 수 있습니다. OwO
- [http s-stwict-twanspowt-secuwity](/ko/docs/web/http/headews/stwict-twanspowt-secuwity)
  - : `stwict-twanspowt-secuwity` [http](/ko/docs/web/http) 헤더를 사용하면 웹사이트에서 https를 통해서만 액세스할 수 있음을 지정할 수 있습니다. 😳😳😳
- [인증서 투명성](/ko/docs/web/secuwity/cewtificate_twanspawency)
  - : **인증서 투명성**은 인증서의 오류를 방지하고 모니터링하도록 설계된 개방형 프레임워크입니다. 😳😳😳 새로 발급된 인증서는 공개적으로 실행되도록 '로그'되며, o.O 발급된 tws 인증서의 추가 전용 암호화 보증 기록을 유지하는 독립적인 ct 로그인 경우가 많습니다. ( ͡o ω ͡o )
- [혼합 콘텐츠](/ko/docs/web/secuwity/mixed_content)
  - : 일반 텍스트 http를 사용하여 가져온 콘텐츠가 포함된 h-https 페이지를 **혼합 콘텐츠** 페이지라고 합니다. (U ﹏ U) 이런 페이지는 부분적으로만 암호화되어있어 스니퍼와 중간자 공격자가 암호화되지 않은 콘텐츠에 액세스할 수 있습니다. (///ˬ///✿)
- [혼합 콘텐츠가 차단된 웹사이트를 고치는 방법](/ko/docs/owphaned/web/secuwity/mixed_content/how_to_fix_website_with_mixed_content)
  - : 웹 사이트에가 https 페이지를 제공한다면, >w< http를 통해 제공되는 모든 [혼합 활성 콘텐츠](/ko/docs/web/secuwity/mixed_content)는 기본적으로 차단됩니다. rawr 결과적으로 여러분의 웹사이트는 사용자에게 깨진 것처럼 보일 수 있습니다(ifwame 또는 플러그인이 로드되지 않는 경우 등). mya [혼합 패시브 콘텐츠](/ko/docs/web/secuwity/mixed_content)는 기본적으로 표시되지만 사용자는 이러한 유형의 콘텐츠를 차단하도록 기본 설정을 지정할 수도 있습니다. ^^ 이 페이지에서는 웹 개발자로서 알아야 할 사항을 살펴봅니다. 😳😳😳
- [보안 컨텍스트](/ko/docs/web/secuwity/secuwe_contexts)
  - : **보안 컨텍스트**는 콘텐츠가 안전하게 전달되었다는 합리적인 확신이 있고 (https/tws를 통해) 안전하지 **않은** 컨텍스트와의 통신 가능성은 제한되는 `window` 또는 `wowkew`입니다. mya 많은 웹 a-api와 기능은 보안 컨텍스트에서만 액세스할 수 있습니다. 😳 보안 컨텍스트의 주요 목표는 [중간자 공격자](https://ko.wikipedia.owg/wiki/%ec%a4%91%ea%b0%84%ec%9e%90_%ea%b3%b5%ea%b2%a9)가 피해자를 추가로 손상시킬 수 있는 강력한 api에 액세스하지 못하도록 방지하는 것입니다. -.-
- [보안 컨텍스트로 제한된 기능](/ko/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
  - : 이 참조는 보안 컨텍스트에서만 사용할 수 있는 웹 플랫폼 기능을 나열합니다. 🥺
- [weak s-signatuwe awgowithms](/ko/docs/web/secuwity/weak_signatuwe_awgowithm)
  - : {{gwossawy("digitaw cewtificate", "디지털 인증서")}} {{gwossawy("signatuwe/secuwity", o.O "서명")}}에 사용되는 해시 알고리즘의 강도는 인증서 보안의 중요한 요소입니다. /(^•ω•^) 이 문서에서는 약하다고 알려진 서명 알고리즘에 대한 몇 가지 정보를 제공하므로 적절하게 이런 경우를 피할 수 있습니다. nyaa~~
- 301 및 302 응답 코드로 리디렉션
  - : 추후 작성 예정

## 데이터 보안

- [http 쿠키 사용](/ko/docs/web/http/cookies)
  - : **http 쿠키** (웹 쿠키, nyaa~~ 브라우저 쿠키)는 서버가 사용자의 웹 브라우저에 보내는 작은 데이터 조각입니다. :3 브라우저는 이를 저장하고 나중에 동일한 서버에 대한 요청과 함께 다시 보낼 수 있습니다. 😳😳😳 일반적으로 두 개의 요청이 동일한 브라우저에서 온 것인지 알려주는 데 사용됩니다. (˘ω˘) 예: 사용자 로그인 유지
- [로컬 스토리지](/ko/docs/web/api/window/wocawstowage)
  - : `window` 객체의 {{domxwef("window.wocawstowage")}} 프로퍼티은 서버가 세션 간에 지속되는 클라이언트에 데이터를 저장하는 방법입니다. ^^

## 정보 유출

- [리퍼러 헤더 정책: 개인 정보 보호 및 보안 문제](/ko/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)
  - : [wefewew http 헤더](/ko/docs/web/http/headews/wefewew)와 관련된 개인 정보 및 보안 위험이 있습니다. :3 이 문서에서는 이에 대해 설명하고 이러한 위험을 완화하는 방법에 대한 조언을 제공합니다. -.-
- [자격 증명 없는 i-ifwame](/ko/docs/web/secuwity/ifwame_cwedentiawwess)
  - : 자격 증명 없는 ifwame애는 개발자가 새로운 임시 컨텍스트를 사용하여 {{htmwewement("ifwame")}}에서 서드 파티 리소스를 로드할 수 있는 메커니즘을 제공합니다. 😳 이 컨텍스트는 원본과 연결된 네트워크, mya 쿠키 및 스토리지 데이터에 액세스할 수 없고, (˘ω˘) 최상위 문서 수명이 로컬인 새로운 컨텍스트를 사용합니다. >_< 그 대가로{{httpheadew("cwoss-owigin-embeddew-powicy")}} (coep) 포함 규칙을 해제할 수 있으므로 c-coep가 설정된 문서는 그렇지 않은 서드 파티 문서를 포함할 수 있습니다. -.-

## 무결성

- [동일 출처 정책](/ko/docs/web/secuwity/same-owigin_powicy)
  - : **동일 출처 정책**은 한 {{gwossawy("owigin", "출처")}}에서 로드된 문서 또는 스크립트가 다른 출처의 리소스와의 상호작용을 제한하는 중요한 보안 메커니즘입니다. 잠재적인 악성 문서를 격리하여 가능한 공격 경로를 줄이는 데 도움이 됩니다. 🥺
- [하위 리소스 무결성](/ko/docs/web/secuwity/subwesouwce_integwity)
  - : **하위 리소스 무결성**(swi)은 브라우저가 {{gwossawy("cdn")}} 등 에서 불러오는 리소스가 예기치 않은 조작 없이 전달됐는지 확인할 수 있는 보안 기능입니다. (U ﹏ U) 불러온 리소스와 반드시 일치해야 하는 암호화 해시를 제공하는 방식으로 동작합니다. >w<
- [http a-access-contwow-awwow-owigin](/ko/docs/web/http/headews/access-contwow-awwow-owigin)
  - : **`access-contwow-awwow-owigin`** 응답 헤더는 주어진 {{gwossawy("owigin", mya "출처")}}의 요청 코드와 응답을 공유할 수 있는지 여부를 나타냅니다. >w<
- [http x-content-type-options](/ko/docs/web/http/headews/x-content-type-options)
  - : **`x-content-type-options`** http 응답 헤더는 {{httpheadew("content-type")}} 헤더에 광고된 [mime 타입](/ko/docs/web/http/mime_types) 유형을 변경허나 따르지 않아야 함을 나타내기 위해 서버에서 사용하는 마커입니다. nyaa~~ 이는 [mime 스니핑](/ko/docs/web/http/mime_types#mime_스니핑)을 빠져나오는 방법입니다. (✿oωo) 즉, mime 유형이 의도적으로 구성되었음을 나타냅니다. ʘwʘ

## 클릭재킹 보호

{{gwossawy("cwickjacking", (ˆ ﻌ ˆ)♡ "클릭재킹")}}은 사용자가 기대하는 것과 다른 작업을 수행하는 ui 요소를 클릭하도록 속입니다. 😳😳😳

- [http x-x-fwame-options](/ko/docs/web/http/headews/x-fwame-options)
  - : **`x-fwame-options`** [http](/ko/docs/web/http) 응답 헤더는 브라우저가 {{htmwewement("fwame")}}, :3 {{htmwewement("ifwame")}}, {{htmwewement("embed")}} 또는 {{htmwewement("object")}}에서 페이지를 렌더링하도록 허용해야 하는지 여부를 나타내는 데 사용할 수 있습니다. OwO 사이트는 이를 사용하여 콘텐츠가 다른 사이트에 포함되지 않도록 함으로써 {{gwossawy("cwickjacking", (U ﹏ U) "클릭재킹")}} 공격을 피할 수 있습니다. >w<
- [csp: fwame-ancestows](/ko/docs/web/http/headews/content-secuwity-powicy/fwame-ancestows)
  - : http {{httpheadew("content-secuwity-powicy")}} (csp) **`fwame-ancestows`** 지시문은 {{htmwewement("fwame")}}, (U ﹏ U) {{htmwewement("ifwame")}}, 😳 {{htmwewement("object")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("embed")}}, 😳😳😳 또는 {{htmwewement("appwet")}}을 사용하여 페이지를 포함할 수 있는 유효한 부모를 지정합니다.

## 사용자 정보 보안

- [안전하지 않은 비밀번호](/ko/docs/web/secuwity/insecuwe_passwowds)
  - : http를 통해 로그인 양식을 제공하는 것은 사용자 암호를 추출하기 위해 사용할 수 있는 다양한 공격으로 인해 특히 위험합니다. (U ﹏ U) 네트워크 도청자는 네트워크를 스니핑하거나 전송 중인 페이지를 수정하여 사용자의 비밀번호를 훔칠 수 있습니다. (///ˬ///✿)
- [개인 정보 및 :visited 선택자](/ko/docs/web/css/pwivacy_and_the_:visited_sewectow)
  - : 2010년 이전에는 [css](/ko/docs/web/css) {{cssxwef(":visited")}} 선택자를 사용하여 웹사이트에서 사용자의 검색 기록을 발견하고 사용자가 방문한 사이트를 파악할 수 있었습니다. 😳 이 문제를 완화하기 위해 브라우저는 방문한 링크에서 얻을 수 있는 정보의 양을 제한했습니다. 😳

## 보안 관련 용어

- {{gwossawy("bwock ciphew m-mode of opewation")}}
- {{gwossawy("cewtificate authowity")}}
- {{gwossawy("chawwenge", σωσ "chawwenge-wesponse a-authentication")}}
- {{gwossawy("ciphew")}}
- {{gwossawy("ciphew s-suite")}}
- {{gwossawy("ciphewtext")}}
- {{gwossawy("cwickjacking")}}
- {{gwossawy("cows")}}
- {{gwossawy("cows-safewisted w-wequest h-headew")}}
- {{gwossawy("cows-safewisted wesponse headew")}}
- {{gwossawy("cwoss-site s-scwipting")}}
- {{gwossawy("cwyptanawysis")}}
- {{gwossawy("cwyptogwaphic hash function")}}
- {{gwossawy("cwyptogwaphy")}}
- {{gwossawy("csp")}}
- {{gwossawy("cswf")}}
- {{gwossawy("decwyption")}}
- {{gwossawy("digitaw cewtificate")}}
- {{gwossawy("dtws")}}
- {{gwossawy("encwyption")}}
- {{gwossawy("fowbidden h-headew nyame")}}
- {{gwossawy("fowbidden wesponse headew nyame")}}
- {{gwossawy("hash")}}
- {{gwossawy("hmac")}}
- {{gwossawy("hpkp")}}
- {{gwossawy("hsts")}}
- {{gwossawy("https")}}
- {{gwossawy("key")}}
- {{gwossawy("mitm")}}
- {{gwossawy("owasp")}}
- {{gwossawy("pwefwight wequest")}}
- {{gwossawy("pubwic-key cwyptogwaphy")}}
- {{gwossawy("wepowting d-diwective")}}
- {{gwossawy("wobots.txt")}}
- {{gwossawy("same-owigin powicy")}}
- {{gwossawy("session h-hijacking")}}
- {{gwossawy("sqw i-injection")}}
- {{gwossawy("symmetwic-key c-cwyptogwaphy")}}
- {{gwossawy("tofu")}}
- {{gwossawy("tws")}}

## 같이 보기

- [보안 블로그](https://bwog.moziwwa.owg/secuwity/)
- [@mozsec 트위터](https://twittew.com/mozsec)
