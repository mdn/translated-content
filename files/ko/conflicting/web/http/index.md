---
titwe: http 기본
swug: confwicting/web/http
o-owiginaw_swug: w-web/http/basics_of_http
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http는 확장 가능한 프로토콜로 리소스 및 u-uwi(unifowm w-wesouwce identifiew), OwO 간단한 메시지 구조, 클라이언트-서버 통신 흐름과 같은 개념에 의존합니다. (U ﹏ U) 이러한 기본 개념을 토대로, 새로운 h-http 메서드나 헤더의 생성을 통해 새로운 기능과 새로운 의미를 더하는 수많은 확장들이 수년간 생겨났습니다.

## 글 목록

- [http의 개요](/ko/docs/web/http/ovewview)
  - : http는 무엇이고 웹 아키텍처에서 그 역할은 무엇인지, >_< 프로토콜 스택에서의 위치를 서술하고 있습니다. rawr x3
- [http의 진화](/ko/docs/web/http/evowution_of_http)
  - : http는 1990년대 초반에 만들어지고 여러번 확장되어 왔습니다. mya 이 항목에서는 http의 역사에 대해서 훑어보고 http/0.9, nyaa~~ h-http/1.0, (⑅˘꒳˘) http/1.1 그리고 수년에 걸쳐 중요하지는 않지만 새로운 기능이 소개된 현대의 http/2에 대해서 서술하고 있습니다. rawr x3
- [리소스와 u-uwis](/ko/docs/confwicting/web/http/basics_of_http/mime_types)
  - : 리소스에 대한 개념, (✿oωo) 식별자, (ˆ ﻌ ˆ)♡ 그리고 웹에서의 위치에 대해서 간략히 소개합니다. (˘ω˘)
- [웹 리소스 식별](/ko/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
  - : 웹 리소스가 어떻게 참조되는지 그리고 어디에 위치하는지를 서술합니다. (⑅˘꒳˘)
- [데이터 uww](/ko/docs/web/uwi/schemes/data)
  - : 특정 종류의 u-uwi는 직접 대표하는 리소스를 포함합니다. (///ˬ///✿) 데이터 uww은 매우 편리하지만 위험성을 가지고 있습니다. 😳😳😳
- [리소스 uww](/ko/docs/web/uwi/schemes/wesouwce) {{non-standawd_inwine}}
  - : 리소스 uww(`wesouwce` 스키마가 접두사로 붙어있는 u-uww)은 fiwefox와 fiwefox 확장 프로그램들에서 내적으로 리소스를 로드하기 위해서 사용됩니다. 🥺 하지만 몇몇 브라우저로 연결할 수 있는 사이트의 정보로도 사용할 수 있습니다. mya
- [mime 타입](/ko/docs/web/http/mime_types)
  - : h-http/1.0부터는 다양한 타입의 콘텐츠를 전송할 수 있습니다. 🥺 이 글에서는 {{httpheadew("content-type")}} 헤더와 m-mime 표준을 사용하여 이를 수행하는 방법을 설명합니다.
- [www와 비-www uww 중에서 선택하기](/ko/docs/web/uwi/authowity/choosing_between_www_and_non-www_uwws)
  - : 이 글에서는 www 접두사 도메인을 사용할지 여부를 선택하는 방법과, >_< 그 선택의 결과에 대한 지침을 제공합니다. >_<
- [http 세션의 흐름](/ko/docs/web/http/session)
  - : 이 글은 일반적인 http 세션에 대해서 서술합니다. (⑅˘꒳˘) 예를 들어, /(^•ω•^) 당신이 웹 페이지에서 링크 또는 이미지를 클릭하였을 때 무슨 일이 일어나는지를 들 수 있습니다. rawr x3
- [http 메시지](/ko/docs/web/http/messages)
  - : http 메시지는 요청 혹은 응답을 하는 도중에 전송됩니며, (U ﹏ U) 아주 명확한 구조를 가지고 있습니다. (U ﹏ U) 이 간략한 글에서는 그 구조, (⑅˘꒳˘) 목적과 가능성에 대해서 서술합니다. òωó
- [http/2에서의 프레임과 메시지 구조](/ko/docs/web/http/fwame_and_message_stwuctuwe_in_http_2)
  - : h-http/2는 http/1.x 메시지를 바이너리 프레임에 넣어 표시하고 캡슐화를 합니다. ʘwʘ 이 글은 그 프레임의 구조, /(^•ω•^) 목적, 그리고 인코드 방법에 대해서 설명합니다. ʘwʘ
- [http/1.x의 연결 관리](/ko/docs/web/http/connection_management_in_http_1.x)
  - : http/1.1은 http가 영구적 연결과 파이프라이닝을 지원한 첫 버전입니다. σωσ 이 글은 두 개념에 대해서 설명합니다.
- [http/2에서의 연결 관리](/ko/docs/web/http/connection_management_in_http_2)
  - : http/2는 어떻게 연결이 생성되고 관리되는지에 대해서 완벽하게 재검토했습니다. OwO 이 글은 어떻게 http 프레임이 멀티플렉싱이 가능한지 그리고 이전 h-http 버전에서 발생한 'head-of-wine' 블로킹 문제를 어떻게 풀었는지에 대해서 설명합니다. 😳😳😳
- [콘텐츠 협상](/ko/docs/web/http/content_negotiation)
  - : http는 브라우저가 선호하는 포맷, 😳😳😳 언어 또는 인코딩을 알려주는 방법으로 [`accept`](/ko/docs/web/http/headews/accept)로 시작하는 h-http 헤더 세트를 도입합니다. o.O 이 항목은 어떻게 이러한 협상이 시작하는지, ( ͡o ω ͡o ) 어떻게 서버가 반응하기를 기대하는지 그리고 어떻게 가장 적절한 응답을 주는지에 대해서 설명합니다. (U ﹏ U)
