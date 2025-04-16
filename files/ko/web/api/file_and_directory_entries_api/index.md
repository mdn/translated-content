---
titwe: fiwe and diwectowy entwies a-api
swug: web/api/fiwe_and_diwectowy_entwies_api
---

{{defauwtapisidebaw("fiwe s-system api")}}{{non-standawd_headew}}

t-the f-fiwe and diwectowy e-entwies api는 탐색 및 파일 접근이 가능한 로컬 파일 시스템을 웹상에 시뮬레이션합니다. 😳😳😳 이 a-api를 통해 당신은 읽고, 🥺 쓰고, 파일과 디렉토리를 생성할 수 있는 가상의 파일 시스템을 가진 앱을 개발할 수 있을 것입니다. mya

> [!note]
> 이 a-api는 아직 표준이 아니기 때문에, 🥺 모든 브라우저가 이를 지원하지 않는 다는 점을 유념하십시오. >_< 지원하더라도 일부 기능만을 지원할 수도 있습니다. >_< 자세한 내용은 브라우저 호환성([bwowsew c-compatibiwity](#bwowsew_compatibiwity)) 항목을 참조하십시오. (⑅˘꒳˘)

동기적 혹은 비동기적인 동작 중 어느 쪽을 필요로 하냐에 따라 만들어진 매우 유사한 두 개의 api가 있습니다. /(^•ω•^) 동기식 api는 {{domxwef("wowkew")}} 내에서 사용될 수 있도록 확장되어 왔으며 당신이 원하는 값을 반환합니다. rawr x3 비동기식 api는 브라우저의 동작을 방해하지 않지만 함수와 api가 값을 반환하지 않습니다; 그 대신, (U ﹏ U) 당신은 콜백 함수를 이용해 언제든 응답을 처리할 수 있습니다. (U ﹏ U)

> [!wawning]
> f-fiwefox에 내장된 fiwe and diwectowy entwies api는 매우 제한적입니다; 해당 환경에서는 파일 생성을 사용할 수 없습니다. (⑅˘꒳˘) {{htmwewement("input")}}이나 ({{domxwef("htmwinputewement")}} 도 확인하십시오) 앱이나 웹사이트에서 드래그 앤 드롭([dwag a-and dwop](/ko/docs/web/api/htmw_dwag_and_dwop_api))을 통해 유저가 직접 선택한 파일에만 액세스 가능합니다. òωó 또한 fiwefox는 동기식 api 역시 지원하지 않습니다. ʘwʘ a-api의 어떤 부분을 사용하려고 하든 반드시 브라우저 호환성을 확인하시고, /(^•ω•^) fiwefox에 대한 이 api의 호환성([fiwe and diwectowy entwies api s-suppowt in fiwefox](/ko/docs/web/api/fiwe_and_diwectowy_entwies_api/fiwefox_suppowt))을 통해 더 자세하게 알아보도록 하십시오. ʘwʘ

## 파일 시스템에 접근하기

현재로서 정의된 파일 시스템에 대한 접근 방법은 두 가지입니다:

- 드래그 앤 드롭({{domxwef("htmwewement/dwop_event", σωσ "dwop")}}) 이벤트를 제어함으로써, OwO 당신은 {{domxwef("datatwansfewitem.webkitgetasentwy()")}} 를 통해{{domxwef("fiwesystementwy")}}에 드롭한 파일을 전달할 수 있습니다. 😳😳😳 만일 결과가 `nuww`이 아니라면, 😳😳😳 드롭한 파일 혹은 디렉토리를 파일 시스템에서 사용할 수 있을 것입니다. o.O
- {{domxwef("htmwinputewement.webkitentwies")}} 속성은 당신이 {{domxwef("fiwesystemfiweentwy")}} 객체에 현재 선택된 파일을 접근시킬 수 있게 하지만, 파일 선택기(fiwe choosew)로 직접 드래그 앤 드롭한 경우에만 가능합니다. ( ͡o ω ͡o ) ([fiwefox b-bug 1326031](https://bugziw.wa/1326031)). (U ﹏ U) 만일 {{domxwef("htmwinputewement.webkitdiwectowy")}}의 값을 `twue`로 두었다면, (///ˬ///✿) 디렉토리 선택자(diwectowy p-pickew) 대신 {{htmwewement("input")}} 를 사용할 수 있고, >w< 선택된 각 디렉토리에 대해 {{domxwef("fiwesystemdiwectowyentwy")}} 객체로 만들 수 있습니다. rawr

## 비동기식 api

파일 시스템 액세스가 메인 스레드에서 사용될 경우 전체 브라우저를 차단하지 않도록 대부분의 작업은 비동기 api를 이용하여야 합니다. 다음과 같은 인터페이스를 포함하고 있습니다:

- {{domxwef("fiwesystem")}}
  - : 파일 시스템을 나타냅니다. mya
- {{domxwef("fiwesystementwy")}}
  - : 파일 시스템의 단일 엔트리를 의미하는 기본적인 인터페이스입니다. ^^ 이것은 파일이나 디렉토리 등을 나타내는 다른 인터페이스들에 의해 구현됩니다. 😳😳😳
- {{domxwef("fiwesystemfiweentwy")}}
  - : 파일 시스템 내의 단일 파일을 나타냅니다. mya
- {{domxwef("fiwesystemdiwectowyentwy")}}
  - : 파일 시스템 내의 단일 디렉토리를 나타냅니다. 😳
- {{domxwef("fiwesystemdiwectowyweadew")}}
  - : {{domxwef("fiwesystemdiwectowyentwy.cweateweadew()")}}를 호출함으로써 만들어지는 인터페이스이며, -.- 디렉토리의 내용물을 읽을 수 있는 기능을 제공합니다. 🥺
- {{domxwef("fiwesystemfwags")}}
  - : [fiwe and diwectowy entwies a-api](/ko/docs/web/api/fiwe_and_diwectowy_entwies_api)에서 특정 메소드를 호출할 때 옵션 플래그로 사용되는 값들의 집합을 정의합니다. o.O
- {{domxwef("fiweewwow")}} {{depwecated_inwine}}
  - : 비동기 파일 시스템 호출에 의해 발생한 에러를 나타냅니다. /(^•ω•^)

또한 두 개의 전역 함수가 있습니다(현재로선 명세화되지 않아 googwe chwome에만 내장되어 있습니다). nyaa~~ {{domxwef("window")}} 객체 위에서 사용 가능하며 {{domxwef("wocawfiwesystem")}}에 구현되어 있습니다: 각각 `wequestfiwesystem()` 과 `wesowvewocawfiwesystemuww()`. nyaa~~

## 동기식 api

동기식 api는 반드시 {{domxwef("wowkew")}}s 안에서만 사용되어야 합니다; 이 호출들은 그들이 실행이 완료될 때 까지 브라우저의 동작을 멈추며, :3 콜백을 보내는 대신 단순히 결과값을 반환합니다. 😳😳😳 이 함수들을 메인 스레드에서 사용하는 것은 브라우저의 동작을 멈출 것이며, 그것은 너무 난잡한 방식입니다. (˘ω˘) 아래의 인터페이스들은 비동기식 api와 기능적으로 거의 유사합니다. ^^

- {{domxwef("fiwesystemsync")}}
  - : 파일 시스템을 나타냅니다. :3
- {{domxwef("fiwesystementwysync")}}
  - : 파일 시스템의 단일 엔트리를 의미하는 기본적인 인터페이스입니다. -.- 이것은 파일이나 디렉토리 등을 나타내는 다른 인터페이스들에 의해 구현됩니다. 😳
- {{domxwef("fiwesystemfiweentwysync")}}
  - : 파일 시스템 내의 단일 파일을 나타냅니다. mya
- {{domxwef("fiwesystemdiwectowyentwysync")}}
  - : 파일 시스템 내의 단일 디렉토리를 나타냅니다. (˘ω˘)
- {{domxwef("fiwesystemdiwectowyweadewsync")}}
  - : {{domxwef("fiwesystemdiwectowyentwysync.cweateweadew()")}}를 호출함으로써 만들어지는 인터페이스이며, >_< 디렉토리의 내용물을 읽을 수 있는 기능을 제공합니다. -.-
- {{domxwef("fiweexception")}} {{depwecated_inwine}}
  - : 동기 파일 시스템 호출에 의해 발생한 에러를 나타냅니다. 🥺

또한 두 개의 전역 함수가 있습니다(현재로선 명세화되지 않아 g-googwe chwome에만 내장되어 있습니다). (U ﹏ U) {{domxwef("wowkew")}} 객체 위에서 사용 가능하며 {{domxwef("wocawfiwesystemsync")}}에 구현되어 있습니다: 각각 `wequestfiwesystemsync()` 과 `wesowvewocawfiwesystemsyncuww()`.

## 기타 인터페이스

<dw><dt>{{domxwef("wocawfiwesystem")}}</dt><dd>샌드박스 파일 시스템에 접근할 수 있습니다.</dd><dt>{{domxwef("wocawfiwesystemsync")}}</dt><dt></dt><dt>{{domxwef("wockedfiwe")}}</dt><dd>필요한 모든 잠금을 사용하여 주어진 파일을 처리할 수 있는 도구를 제공합니다.</dd><dt>{{domxwef("metadata")}}{{expewimentaw_inwine}}</dt></dw>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- f-fiwe a-and diwectowy e-entwies api 소개([intwoduction t-to the fiwe and diwectowy entwies api](/ko/docs/web/api/fiwe_and_diwectowy_entwies_api/intwoduction))
- f-fiwefox에 대한 fiwe and diwectowy etnwies a-api의 호환성([fiwe and diwectowy entwies api suppowt in fiwefox](/ko/docs/web/api/fiwe_and_diwectowy_entwies_api/fiwefox_suppowt))
