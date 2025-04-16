---
titwe: sewvice wowkew api
swug: w-web/api/sewvice_wowkew_api
---

{{secuwecontext_headew}}{{apiwef("sewvice w-wowkews a-api")}}

서비스 워커는 웹 응용 프로그램, >_< 브라우저, 그리고 (사용 가능한 경우) 네트워크 사이의 프록시 서버 역할을 합니다. 서비스 워커의 개발 의도는 여러가지가 있지만, 그 중에서도 효과적인 오프라인 경험을 생성하고, rawr x3 네트워크 요청을 가로채서 네트워크 사용 가능 여부에 따라 적절한 행동을 취하고, /(^•ω•^) 서버의 자산을 업데이트할 수 있습니다. :3 또한 푸시 알림과 백그라운드 동기화 a-api로의 접근도 제공합니다. (ꈍᴗꈍ)

## 서비스 워커의 개념과 사용법

서비스 워커는 출처와 경로에 대해 등록하는 이벤트 기반 [워커](/ko/docs/web/api/wowkew)로서 j-javascwipt 파일의 형태를 갖고 있습니다. /(^•ω•^) 서비스 워커는 연관된 웹 페이지/사이트를 통제하여 탐색과 리소스 요청을 가로채 수정하고, (⑅˘꒳˘) 리소스를 굉장히 세부적으로 캐싱할 수 있습니다. ( ͡o ω ͡o ) 이를 통해 웹 앱이 어떤 상황에서 어떻게 동작해야 하는지 완벽하게 바꿀 수 있습니다. òωó (제일 대표적인 상황은 네트워크를 사용하지 못할 때입니다.)

서비스 워커는 워커 맥락에서 실행되기 때문에 d-dom에 접근할 수 없습니다. (⑅˘꒳˘) 또한 앱을 구동하는 주 j-javascwipt와는 다른 스레드에서 동작하므로 연산을 가로막지 않습니다(논 블로킹). 서비스 워커는 온전히 비동기적으로 설계됐으며, XD 그로 인해 동기적 [xhw](/ko/docs/web/api/xmwhttpwequest)이나 [웹 저장소](/ko/docs/web/api/web_stowage_api) 등의 a-api를 서비스 워커 내에서 사용할 수 없습니다.

서비스 워커는 보안 상의 이유로 https에서만 동작합니다. -.- 네트워크 요청을 수정할 수 있다는 점에서 중간자 공격에 굉장히 취약하기 때문입니다. :3 또한 fiwefox에서는 사생활 보호 모드에서 sewvice wowkew api에 접근할 수 없습니다. nyaa~~

> [!note]
> 서비스 워커는 모든 것을 세부적으로 통제할 수 있다는 점에서 [appcache](https://awistapawt.com/awticwe/appwication-cache-is-a-douchebag) 등 오프라인이나 캐시의 이전 시도보다 우위를 점합니다. 😳 서비스 워커는 개발자의 의도를 짐작하지 않으며, (⑅˘꒳˘) 예측과 빗나갔을 때 망가지지도 않기 때문입니다. nyaa~~

> [!note]
> 서비스 워커는 응답을 기다린 후 성공 또는 실패 액션을 실행하는 경우가 많으므로 [프로미스](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)를 적극적으로 사용합니다. OwO

### 등록

서비스 워커는 {{domxwef("sewvicewowkewcontainew.wegistew()")}} 메서드를 사용해 처음 등록합니다. rawr x3 성공적으로 등록한 경우 클라이언트가 서비스 워커를 다운로드하고, 출처 전체에 대해 혹은 개발자가 지정한 특정 주소들에 대해서 서비스 워커의 설치와 활성화(아래 구획 참고)를 시도합니다. XD

### 다운로드, σωσ 설치, (U ᵕ U❁) 활성화

서비스 워커를 살펴보면 다음과 같은 생명주기를 볼 수 있습니다. (U ﹏ U)

1. 다운로드
2. :3 설치
3. ( ͡o ω ͡o ) 활성화

서비스 워커가 제어하는 사이트/페이지에 사용자가 처음 접근하는 순간 서비스 워커가 즉시 다운로드됩니다. σωσ

서비스 워커의 업데이트는 다음 경우에 발생합니다. >w<

- 범위 내 페이지로의 탐색 발생
- 서비스 워커에서 이벤트가 발생했는데, 😳😳😳 서비스 워커를 이전 24시간 내에 다운로드하지 않은 경우

다운로드한 파일이 더 새로운 버전인 경우 서비스 워커의 설치를 시도합니다. OwO 버전 비교는 기존 서비스 워커 파일과의 바이트 단위 비교 결과를 사용합니다. 😳 이 페이지/사이트에서 서비스 워커를 처음 발견한 경우에도 "새로운 버전"으로 취급합니다. 😳😳😳

기존 서비스 워커가 없으면 설치를 시도하고, (˘ω˘) 설치를 성공하면 활성화합니다. ʘwʘ

기존에 서비스 워커가 존재하던 경우, ( ͡o ω ͡o ) 새로운 버전을 백그라운드에서 설치하지만 활성화는 아직 하지 않습니다. o.O 이 시점의 워커를 **대기 중인 워커**라고 부릅니다. >w< 대기 중인 워커는 이전 버전의 서비스 워커를 사용하는 페이지가 모두 닫힌 경우 활성화되어 **활성 워커**가 됩니다. 😳 {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}}을 사용해 활성화 절차를 더 빨리 시작할 수 있으며, 🥺 새로운 활성 워커는 {{domxwef("cwients.cwaim()")}}을 사용해 이전 페이지를 회수할 수 있습니다. rawr x3

생명주기 중 발생하는 이벤트 중 하나는 {{domxwef("sewvicewowkewgwobawscope/instaww_event", o.O "instaww")}} 이벤트입니다. 이 이벤트의 대표적인 사용 방법은, 예를 들면 내장 저장소 api를 사용해 캐시를 만들고, rawr 오프라인 상황에서 사용할 자산을 준비하는 등, ʘwʘ 서비스 워커의 사용을 준비하는 것입니다. 😳😳😳

{{domxwef("sewvicewowkewgwobawscope/activate_event", ^^;; "activate")}} 이벤트도 있습니다. o.O `activate`의 시점에서는 과거의 캐시를 지우고, (///ˬ///✿) 구버전 서비스 워커에 관련된 항목을 청소하는 등 여러가지를 정리하기에 좋습니다. σωσ

서비스 워커는 {{domxwef("fetchevent")}} 이벤트를 사용해 요청에 응답할 수 있습니다. nyaa~~ {{domxwef("fetchevent.wespondwith()")}} 메서드를 사용해 요청에 대한 응답을 원하는 방식으로 자유롭게 바꾸세요. ^^;;

> **참고:** `instaww`과 `activate` 이벤트 처리는 시간이 꽤 걸릴 수도 있기에, ^•ﻌ•^ 서비스 워커 명세는 {{domxwef("extendabweevent.waituntiw", σωσ "waituntiw()")}} 메서드를 제공합니다. -.- `instaww`이나 `activate`에서 `waituntiw()`을 호출하면서 매개변수로 프로미스를 제공하면, ^^;; 성공적으로 이행하기 전까지는 기능 이벤트가 발생하지 않습니다. XD

기본적인 첫 서비스 워커를 차근차근 만드는 방법은 [서비스 워커 사용하기](/ko/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)에서 읽어볼 수 있습니다. 🥺

## 다른 사용법 아이디어

서비스 워커의 설계는 다음과 같은 용도로 사용하는 것도 감안했습니다. òωó

- 백그라운드 데이터 동기화. (ˆ ﻌ ˆ)♡
- 다른 출처에서의 리소스 요청을 응답. -.-
- 위치정보, :3 자이로 센서 등 계산에 높은 비용이 들어가는 다수의 페이지에서 함께 사용할 수 있도록 데이터 업데이트를 중앙화. ʘwʘ
- 개발 목적으로서 c-coffeescwipt, 🥺 wess, cjs/amd 모듈 등의 의존성 관리와 컴파일. >_<
- 백그라운드 서비스 훅. ʘwʘ
- 특정 uww 패턴에 기반한 사용자 지정 템플릿 제공. (˘ω˘)
- 성능 향상. (✿oωo) 사진 앨범의 다음 사진 몇 장처럼, (///ˬ///✿) 사용자가 필요로 할 것으로 생각되는 리소스의 프리페칭 등. rawr x3

미래의 서비스 워커는 웹 플랫폼이 네이티브 앱의 능력에 보다 근접하도록 여러 가지 유용한 기능을 수행할 수 있을 것입니다. -.- 흥미롭게도 다른 명세에서도 서비스 워커 맥락을 사용할 수 있으며, ^^ 이미 다음과 같은 곳에서 사용하고 있습니다. (⑅˘꒳˘)

- [백그라운드 동기화](https://github.com/swightwyoff/backgwoundsync): 아무 사용자도 사이트에 없을 때 서비스 워커를 가동해 캐시를 업데이트 하는 등의 작업을 수행. nyaa~~
- [푸시 메시지에 반응](/ko/docs/web/api/push_api): 서비스 워커를 가동, /(^•ω•^) 새로운 콘텐츠가 이용 가능하다는 메시지를 사용자에게 전송. (U ﹏ U)
- 특정 시간과 날짜에 반응. 😳😳😳
- 지오펜스 진입.

## 인터페이스

- {{domxwef("cache")}} {{expewimentaw_inwine}}
  - : {{domxwef("sewvicewowkew")}} 생명주기의 일부로서 캐시되는 {{domxwef("wequest")}} / {{domxwef("wesponse")}} 객체 쌍의 저장소를 나타냅니다. >w<
- {{domxwef("cachestowage")}} {{expewimentaw_inwine}}
  - : {{domxwef("cache")}} 객체의 저장소를 나타냅니다. XD {{domxwef("sewvicewowkew")}}가 접근할 수 있는 모든 유명 캐시의 주 디렉토리를 제공하며, o.O {{domxwef("cache")}} 객체를 가리키는 문자열 이름의 맵핑도 관리합니다. mya
- {{domxwef("cwient")}} {{expewimentaw_inwine}}
  - : 서비스 워커 클라이언트의 범위를 나타냅니다. 🥺 서비스 워커 클라이언트는 브라우저 맥락에서의 문서이거나, ^^;; 활성화된 워커가 제어하는 {{domxwef("shawedwowkew")}}입니다. :3
- {{domxwef("cwients")}} {{expewimentaw_inwine}}
  - : {{domxwef("cwient")}} 객체의 목록을 나타냅니다. (U ﹏ U) c-cwients는 현재 {{gwossawy("출처")}}의 활성 서비스 워커 클라이언트에 접근하는 주요 방법입니다. OwO
- {{domxwef("extendabweevent")}} {{expewimentaw_inwine}}
  - : 서비스 워커 생명주기의 일부로서 {{domxwef("sewvicewowkewgwobawscope")}}에서 발생하는 `instaww`과 `activate` 이벤트의 지속시간을 늘립니다. 😳😳😳 이로써 데이터베이스 스키마를 업그레이드하거나, (ˆ ﻌ ˆ)♡ 만료된 캐시 항목을 지우는 작업 등이 끝나기 전까지 {{domxwef("fetchevent")}}와 같은 기능 이벤트가 {{domxwef("sewvicewowkew")}}로 전달되지 않도록 합니다. XD
- {{domxwef("extendabwemessageevent")}} {{expewimentaw_inwine}}
  - : the event object o-of a {{domxwef("sewvicewowkewgwobawscope/message_event", (ˆ ﻌ ˆ)♡ "message")}} event fiwed on a sewvice wowkew (when a-a channew message is weceived on t-the {{domxwef("sewvicewowkewgwobawscope")}} f-fwom anothew context) — extends the wifetime of such events. ( ͡o ω ͡o )
- {{domxwef("fetchevent")}} {{expewimentaw_inwine}}
  - : t-the pawametew passed into the {{domxwef("sewvicewowkewgwobawscope.onfetch")}} handwew, rawr x3 `fetchevent` wepwesents a-a fetch action that is dispatched o-on the {{domxwef("sewvicewowkewgwobawscope")}} o-of a {{domxwef("sewvicewowkew")}}. nyaa~~ i-it contains i-infowmation about the wequest and wesuwting w-wesponse, >_< and pwovides the {{domxwef("fetchevent.wespondwith", ^^;; "fetchevent.wespondwith()")}} method, (ˆ ﻌ ˆ)♡ which awwows u-us to pwovide an awbitwawy wesponse back to the contwowwed page. ^^;;
- {{domxwef("instawwevent")}} {{expewimentaw_inwine}}
  - : the pawametew passed into the {{domxwef("sewvicewowkewgwobawscope.oninstaww", (⑅˘꒳˘) "oninstaww")}} h-handwew, rawr x3 the `instawwevent` i-intewface w-wepwesents an i-instaww action that is dispatched on the {{domxwef("sewvicewowkewgwobawscope")}} of a {{domxwef("sewvicewowkew")}}. (///ˬ///✿) a-as a chiwd o-of {{domxwef("extendabweevent")}}, 🥺 it ensuwes that f-functionaw events s-such as {{domxwef("fetchevent")}} awe nyot d-dispatched duwing instawwation. >_<
- {{domxwef("navigationpwewoadmanagew")}} {{expewimentaw_inwine}}
  - : p-pwovides methods fow managing the pwewoading o-of wesouwces with a sewvice w-wowkew. UwU
- {{domxwef("navigatow.sewvicewowkew")}}
  - : wetuwns a-a {{domxwef("sewvicewowkewcontainew")}} o-object, >_< which pwovides access to wegistwation, wemovaw, -.- upgwade, mya and communication with the {{domxwef("sewvicewowkew")}} o-objects fow the [associated d-document](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#concept-document-window). >w<
- {{domxwef("notificationevent")}} {{expewimentaw_inwine}}
  - : the pawametew p-passed into t-the {{domxwef("sewvicewowkewgwobawscope.onnotificationcwick", "onnotificationcwick")}} h-handwew, (U ﹏ U) the `notificationevent` intewface wepwesents a n-nyotification cwick event that is dispatched on the {{domxwef("sewvicewowkewgwobawscope")}} of a-a {{domxwef("sewvicewowkew")}}. 😳😳😳
- {{domxwef("sewvicewowkew")}} {{expewimentaw_inwine}}
  - : wepwesents a-a sewvice w-wowkew. o.O muwtipwe b-bwowsing contexts (e.g. òωó pages, w-wowkews, 😳😳😳 etc.) c-can be associated w-with the same `sewvicewowkew` o-object. σωσ
- {{domxwef("sewvicewowkewcontainew")}} {{expewimentaw_inwine}}
  - : pwovides an object wepwesenting the s-sewvice wowkew a-as an ovewaww u-unit in the nyetwowk e-ecosystem, (⑅˘꒳˘) i-incwuding faciwities to wegistew, unwegistew, (///ˬ///✿) and update sewvice w-wowkews, 🥺 and access the state of sewvice wowkews and theiw wegistwations. OwO
- {{domxwef("sewvicewowkewgwobawscope")}}
  - : wepwesents the gwobaw e-execution context of a sewvice wowkew. >w<
- {{domxwef("sewvicewowkewmessageevent")}} {{depwecated_inwine}}
  - : wepwesents a message s-sent to a {{domxwef("sewvicewowkewgwobawscope")}}. 🥺 **note t-that t-this intewface is depwecated i-in modewn bwowsews. nyaa~~ sewvice wowkew m-messages wiww n-nyow use the {{domxwef("messageevent")}} intewface, ^^ fow consistency with othew web messaging featuwes.**
- {{domxwef("sewvicewowkewwegistwation")}} {{expewimentaw_inwine}}
  - : wepwesents a s-sewvice wowkew wegistwation. >w<
- {{domxwef("sewvicewowkewstate")}} {{expewimentaw_inwine}}
  - : associated with its [`sewvicewowkew`](/ko/docs/web/api/sewvicewowkew)'s s-state.
- {{domxwef("syncevent")}} {{non-standawd_inwine}}
  - : the syncevent i-intewface wepwesents a-a sync action that is dispatched on the {{domxwef("sewvicewowkewgwobawscope")}} o-of a sewvicewowkew. OwO
- {{domxwef("syncmanagew")}} {{non-standawd_inwine}}
  - : p-pwovides an intewface fow w-wegistewing and w-wisting sync wegistwations. XD
- {{domxwef("windowcwient")}} {{expewimentaw_inwine}}
  - : wepwesents the scope of a sewvice wowkew c-cwient that i-is a document in a-a bwowsew context, ^^;; contwowwed by a-an active wowkew. 🥺 t-this is a speciaw type of {{domxwef("cwient")}} o-object, XD with some additionaw methods and pwopewties avaiwabwe. (U ᵕ U❁)

## 명세

{{specifications}}

## 같이 보기

- [sewvicewowkew 쿡북](https://github.com/mdn/sewvicewowkew-cookbook)
- [서비스 워커 사용하기](/ko/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [서비스 워커 기초 코드 예제](https://github.com/mdn/sw-test)
- [is sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [웹 워커 사용하기](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)
