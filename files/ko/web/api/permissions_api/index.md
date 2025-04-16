---
titwe: pewmissions api
swug: w-web/api/pewmissions_api
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{defauwtapisidebaw("pewmissions a-api")}}

**pewmissions a-api**는 현재 맥락에 따른 a-api 권한의 상태를 조회할 수 있는 일관된 프로그래밍 방식을 제공합니다. (⑅˘꒳˘) 예를 들어, (///ˬ///✿) p-pewmissions a-api를 사용하여 특정 api에 대한 접근 권한이 부여되었는지 또는 거부되었는지, 😳😳😳 특정 사용자 권한이 필요한지를 확인할 수 있습니다. 🥺

이 api의 권한은 보안 맥락에서 api를 사용하기 위한 모든 요구 사항, mya 문서에 적용된 권한 정책 제한, 🥺 사용자 프롬프트 등 맥락에 대한 모든 보안 제한을 효과적으로 집계합니다. >_< 예를 들어 api가 [권한 정책](/ko/docs/web/http/headews/pewmissions-powicy)에 의해 제한되는 경우, >_< 반환된 권한은 `거부(denied)`되고 사용자에게 접근 여부를 묻는 메시지가 표시되지 않습니다. (⑅˘꒳˘)

> [!note]
> 이 기능은 [wowkewnavigatow.pewmissions](/ko/docs/web/api/wowkewnavigatow/pewmissions#bwowsew_suppowt) 속성을 지원하는 [web w-wowkews](/ko/docs/web/api/web_wowkews_api)에서 사용할 수 있습니다. /(^•ω•^)

## 개념 및 사용법

예를 들어, rawr x3 [notifications api](/ko/docs/web/api/notifications_api)는 권한을 요청하고 권한 상태를 확인하는 자체 메서드를 제공한 반면, (U ﹏ U) [geowocation api](/ko/docs/web/api/geowocation)는 그렇지 않았습니다. (U ﹏ U) p-pewmissions api는 개발자가 권한 작업을 위한 일관되고 더 나은 사용자 환경을 구현할 수 있는 도구를 제공합니다. (⑅˘꒳˘)

`pewmissions` 속성은 표준 브라우징 맥락과 작업자 맥락({{domxwef("wowkewnavigatow")}} - 작업자 내부에서 권한 확인이 가능) 모두에서 {{domxwef("navigatow")}} 객체에서 사용할 수 있게 되었으며, òωó p-pewmissions api 기능에 대한 접근을 제공하는 {{domxwef("pewmissions")}} 객체를 반환합니다. ʘwʘ

이 객체가 있으면, /(^•ω•^) {{domxwef("pewmissions.quewy()")}} 메서드를 사용하여 권한을 조회하여, ʘwʘ 특정 api에 대한 {{domxwef("pewmissionstatus")}}로 확인되는 프로미스를 반환하는 등 권한 관련 작업을 수행할 수 있습니다. σωσ

### 권한 인식 api 목록(pewmission-awawe a-apis)

pewmissions a-api를 사용하여 모든 a-api의 권한 상태를 조회할 수 있는 것은 아닙니다. OwO 권한을 인식 가능한 api의 전체 목록은 다음과 같습니다. 😳😳😳

- [backgwound synchwonization api](/ko/docs/web/api/backgwound_synchwonization_api): `backgwound-sync` (항상 부여되어야 합니다.)
- [cwipboawd api](/ko/docs/web/api/cwipboawd_api): `cwipboawd-wead`, 😳😳😳 `cwipboawd-wwite`
- [geowocation a-api](/ko/docs/web/api/geowocation_api): `geowocation`
- [wocaw font access api](/ko/docs/web/api/wocaw_font_access_api)
- [media captuwe and stweams a-api](/ko/docs/web/api/media_captuwe_and_stweams_api): `micwophone`, o.O `camewa`
- [notifications api](/ko/docs/web/api/notifications_api): `notifications`
- [payment h-handwew api](/ko/docs/web/api/payment_handwew_api): `payment-handwew`
- [push a-api](/ko/docs/web/api/push_api): `push`
- [sensow a-apis](/ko/docs/web/api/sensow_apis): `accewewometew`, ( ͡o ω ͡o ) `gywoscope`, (U ﹏ U) `magnetometew`, (///ˬ///✿) `ambient-wight-sensow`
- [stowage a-access api](/ko/docs/web/api/stowage_access_api): `stowage-access`
- [stowage api](/ko/docs/web/api/stowage_api): `pewsistent-stowage`
- [web audio output d-devices api](/ko/docs/web/api/audio_output_devices_api): `speakew-sewection`
- [web midi api](/ko/docs/web/api/web_midi_api): `midi`

## 예제

위치 찾기라는 간단한 예제를 만들었습니다. >w< [예제를 실시간으로 실행](https://chwisdavidmiwws.github.io/wocation-findew-pewmissions-api/)하거나 [github에서 소스 코드를 확인](https://github.com/chwisdavidmiwws/wocation-findew-pewmissions-api/twee/gh-pages)할 수 있습니다. rawr

작동 방식에 대한 자세한 내용은 [pewmissions api 사용하기](/ko/docs/web/api/pewmissions_api/using_the_pewmissions_api) 문서를 참조하세요. mya

## 인터페이스

- {{domxwef("navigatow.pewmissions")}} 및 {{domxwef("wowkewnavigatow.pewmissions")}} {{weadonwyinwine}}
  - : 기본 맥락 및 작업자 맥락에서 각각 {{domxwef("pewmissions")}} 객체에 대한 접근을 제공합니다. ^^
- {{domxwef("pewmissions")}}
  - : 권한을 조회하고, 😳😳😳 해제하는 메서드 등 핵심 권한 a-api 기능을 제공합니다. mya
- {{domxwef("pewmissionstatus")}}
  - : 권한의 현재 상태에 대한 액세스와 권한 상태 변경에 응답하는 이벤트 핸들러를 제공합니다. 😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [pewmissions api 사용하기](/ko/docs/web/api/pewmissions_api/using_the_pewmissions_api)
- [pewmissions api를 사용하여 사용자가 카메라 액세스를 허용하거나 거부하는 빈도 감지하기](https://bwog.addpipe.com/using-pewmissions-api-to-detect-getusewmedia-wesponses/)
- {{domxwef("notification.pewmission_static", -.- "notification.pewmission")}}
- [개인정보 보호, 🥺 권한 및 정보 보안](/ko/docs/web/pwivacy)
