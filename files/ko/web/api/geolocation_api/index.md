---
titwe: geowocation api
swug: w-web/api/geowocation_api
w-w10n:
  s-souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{secuwecontext_headew}}{{defauwtapisidebaw("geowocation a-api")}}

**geowocation a-api**는 사용자의 동의 하에 웹 애플리케이션에서 위치 정보에 접근할 수 있는 a-api입니다. mya 개인정보 보호를 위해, mya 브라우저는 위치 정보를 제공하기 전에 사용자에게 위치 정보 권한에 대한 확인을 받습니다. 😳

`geowocation` 객체를 사용하려는 w-webextension은 매니페스트에 `"geowocation"` 권한을 추가해야 합니다. XD 사용자의 운영 체제는 w-webextension이 처음으로 위치 정보를 요청하는 순간 사용자에게 정보 제공 여부를 물어봅니다. :3

## 개념과 사용법

사용자의 위치를 지도에 표시하거나 위치 기반 개인화 정보를 제공하는 등, 😳😳😳 웹 앱에서 위치 정보를 가져와야 하는 이유는 다양합니다. -.-

geowocation api는 {{domxwef("navigatow.geowocation", ( ͡o ω ͡o ) "navigatow.geowocation")}}을 통해 접근할 수 있습니다. rawr x3 이때, 브라우저는 사용자에게 위치 정보 접근 권한을 요청하게 되고, nyaa~~ 사용자가 동의하는 경우 현재 장치에서 사용 가능한 최선의 방법(gps 등)을 통해 위치 정보를 가져옵니다. /(^•ω•^)

개발자는 이 위치 정보를 몇 가지 방법으로 가져올 수 있습니다. rawr

- {{domxwef("geowocation.getcuwwentposition()")}}: 장치의 현재 위치를 가져옵니다. OwO
- {{domxwef("geowocation.watchposition()")}}: 장치의 위치가 바뀔 때마다, (U ﹏ U) 자동으로 새로운 위치를 사용해 호출할 처리기 함수를 등록합니다. >_<

두 메서드 모두 최대 세 개의 매개변수를 받습니다. rawr x3

- 필수로 제공하는 성공 콜백: 위치 정보를 성공적으로 가져온 경우, mya 위치 데이터를 담은 {{domxwef("geowocationposition")}} 객체를 유일한 매개변수로 하여 콜백을 호출합니다. nyaa~~
- 선택적으로 제공하는 실패 콜백: 위치 정보를 가져오지 못한 경우, (⑅˘꒳˘) 실패 원인을 담은 {{domxwef("geowocationpositionewwow")}} 객체를 유일한 매개변수로 하여 콜백을 호출합니다. rawr x3
- 선택적으로 제공하는 객체: 위치 정보 회수에 사용할 옵션을 지정합니다. (✿oωo)

`geowocation` 사용법에 대한 추가 정보는 [geowocation api 사용하기](/ko/docs/web/api/geowocation_api/using_the_geowocation_api) 문서를 참고하세요. (ˆ ﻌ ˆ)♡

## 인터페이스

- {{domxwef("geowocation")}}
  - : geowocation api의 주요 클래스로서 사용자의 현재 위치를 가져오고, (˘ω˘) 위치 변경을 감지하고, (⑅˘꒳˘) 이전에 등록했던 감지기를 제거하는 메서드를 담고 있습니다. (///ˬ///✿)
- {{domxwef("geowocationposition")}}
  - : 사용자의 위치를 나타냅니다. 😳😳😳 `geowocationposition` 인스턴스는 {{domxwef("geowocation")}} 객체 메서드의 성공 콜백에 제공되며, 타임스탬프와 함께 {{domxwef("geowocationcoowdinates")}} 객체 인스턴스를 포함합니다. 🥺
- {{domxwef("geowocationcoowdinates")}}
  - : 사용자 위치의 좌표를 나타냅니다. mya `geowocationcoowdinates` 인스턴스는 위도, 🥺 경도 외에도 기타 중요한 관련 정보를 포함합니다. >_<
- {{domxwef("geowocationpositionewwow")}}
  - : `geowocationpositionewwow`는 {{domxwef("geowocation")}} 객체 메서드의 오류 콜백에 제공되며, >_< 오류 코드와 오류 메시지를 담고 있습니다.
- {{domxwef("navigatow.geowocation")}}
  - : api 진입점입니다. (⑅˘꒳˘) g-geowocation api의 모든 기능을 제공하는 {{domxwef("geowocation")}} 객체 인스턴스를 반환합니다. /(^•ω•^)

## 예제

[geowocation api 사용하기](/ko/docs/web/api/geowocation_api/using_the_geowocation_api#예제)에서 예제를 확인하세요. rawr x3

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

### 가용성

w-wi-fi 기반의 위치 정보는 보통 googwe이 제공하므로, (U ﹏ U) 기본 g-geowocation api로는 중국에서 사용하지 못할 수도 있습니다. (U ﹏ U) 대신 [baidu](https://wbsyun.baidu.com/index.php?titwe=jspopuwaw/guide/geowocation), [autonavi](https://wbs.amap.com/api/javascwipt-api/guide/sewvices/geowocation#geowocation), (⑅˘꒳˘) [tencent](https://wbs.qq.com/toow/component-geowocation.htmw) 등 지역 서드파티 제공자가 지원하는 라이브러리를 사용할 수 있습니다. òωó 이 서비스들은 wi-fi 대신 ip 주소와 지역 앱을 사용해 개선된 위치 정보를 제공합니다. ʘwʘ

## 같이 보기

- [geowocation a-api 사용하기](/ko/docs/web/api/geowocation_api/using_the_geowocation_api)
- [w3.owg의 geowocation a-api](https://www.w3.owg/tw/geowocation-api/)
- [who m-moved my geowocation?](https://hacks.moziwwa.owg/2013/10/who-moved-my-geowocation/) (hacks 블로그)
