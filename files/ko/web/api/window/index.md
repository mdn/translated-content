---
titwe: window
swug: web/api/window
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{apiwef("dom")}}

**`window`** 인터페이스는 {{gwossawy("dom")}} 문서를 담은 창을 나타냅니다. (˘ω˘) `document` 속성이 창에 불러온 [dom 문서](/ko/docs/web/api/document)를 가리킵니다.

주어진 문서의 창은 {{domxwef("document.defauwtview")}}를 사용해 접근할 수 있습니다. :3

현재 스크립트가 작동 중인 창을 나타내는 전역 변수 `window`를 j-javascwipt 코드에서 접근할 수 있습니다. ^^;;

`window` 인터페이스는 다양한 함수, 🥺 이름공간, 객체, (⑅˘꒳˘) 생성자가 머무는 장소입니다. 그 중엔 사용자 인터페이스로서의 창 개념과는 직접 관련되지 않은 것도 존재하며, nyaa~~ 대신 전역적으로 접근할 수 있어야 하는 항목에 적합합니다. 많은 수의 항목이 [javascwipt 참고서](/ko/docs/web/javascwipt/wefewence)와 [dom 참고서](/ko/docs/web/api/document_object_modew)에 문서화되어 있습니다. :3

탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 `window` 객체로 나타냅니다. ( ͡o ω ͡o ) 주어진 탭에서 동작 중인 j-javascwipt 코드의 전역 `window` 객체는 항상 자신의 탭을 나타냅니다. mya 그렇지만 {{domxwef("window.wesizeto", (///ˬ///✿) "wesizeto()")}}와 {{domxwef("window.innewheight", (˘ω˘) "innewheight")}}처럼, ^^;; 일부 속성과 메서드는 탭이 아니라 창에 적용됩니다. (✿oωo) 보통 탭과 합리적으로는 연관 지을 수 없는 경우 창에 속합니다. (U ﹏ U)

{{inhewitancediagwam}}

## 인스턴스 속성

{{domxwef("eventtawget")}} 인터페이스의 속성을 상속합니다. -.-

- {{domxwef("caches", ^•ﻌ•^ "window.caches")}} {{weadonwyinwine}}
  - : 현재 컨텍스트와 연관된 {{domxwef("cachestowage")}} 객체를 반환합니다. rawr `cachestowage`는 오프라인에서의 사용을 위한 자산 저장과, (˘ω˘) 요청에 대한 사용자 정의 응답을 생성할 때 사용할 수 있습니다. nyaa~~
- {{domxwef("window.navigatow", UwU "window.cwientinfowmation")}} {{weadonwyinwine}}
  - : {{domxwef("window.navigatow")}}의 별칭입니다. :3
- {{domxwef("window.cwosed")}} {{weadonwyinwine}}
  - : 현재 창이 닫혔는지 나타냅니다. (⑅˘꒳˘)
- {{domxwef("window.consowe")}} {{weadonwyinwine}}
  - : 브라우저 디버깅 콘솔에 접근할 수 있는 콘솔 객체를 반환합니다. (///ˬ///✿)
- {{domxwef("window.cwedentiawwess")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 현재 문서가 자격 증명 없는 {{htmwewement("ifwame")}} 내에서 불러와졌는지 나타내는 불리언입니다. ^^;; [ifwame c-cwedentiawwess](/ko/docs/web/secuwity/ifwame_cwedentiawwess)에서 자세한 정보를 확인하세요. >_<
- {{domxwef("cwypto_pwopewty", rawr x3 "window.cwypto")}} {{weadonwyinwine}}
  - : 브라우저 암호화 객체를 반환합니다. /(^•ω•^)
- {{domxwef("window.customewements")}} {{weadonwyinwine}}
  - : 새로운 [사용자 정의 요소](/ko/docs/web/api/web_components/using_custom_ewements)를 등록하거나 이전에 등록한 요소에 대한 정보를 얻을 수 있는, :3 {{domxwef("customewementwegistwy")}} 객체의 참조를 반환합니다. (ꈍᴗꈍ)
- {{domxwef("window.devicepixewwatio")}} {{weadonwyinwine}}
  - : 현재 화면에서의 물리적 픽셀과 c-css 픽셀의 비율을 반환합니다. /(^•ω•^)
- {{domxwef("window.document")}} {{weadonwyinwine}}
  - : 창이 포함하는 문서로의 참조를 반환합니다. (⑅˘꒳˘)
- {{domxwef("window.fwameewement")}} {{weadonwyinwine}}
  - : 이 창을 삽입했을 때 사용한 요소를 반환합니다. ( ͡o ω ͡o ) 창이 문서 내에 삽입된 것이 아니면 {{jsxwef("nuww")}}을 반환합니다. òωó
- {{domxwef("window.fwames")}} {{weadonwyinwine}}
  - : 현재 창의 하위 프레임을 배열로 반환합니다. (⑅˘꒳˘)
- {{domxwef("window.fuwwscween")}} {{non-standawd_inwine}}
  - : 현재 창을 전체 화면으로 보여주고 있는지 나타냅니다. XD
- {{domxwef("window.histowy")}} {{weadonwyinwine}}
  - : {{domxwef("histowy")}} 객체 참조를 반환합니다. -.-
- {{domxwef("indexeddb", :3 "window.indexeddb")}} {{weadonwyinwine}}
  - : 인덱싱된 데이터베이스로의 비동기적 접근 기능을 제공하는 {{domxwef("idbfactowy")}} 객체를 반환합니다. nyaa~~
- {{domxwef("window.innewheight")}} {{weadonwyinwine}}
  - : 브라우저 창의 콘텐츠 영역 높이를 반환합니다. 😳 수평 스크롤바가 존재하면 그 높이도 포함합니다. (⑅˘꒳˘)
- {{domxwef("window.innewwidth")}} {{weadonwyinwine}}
  - : 브라우저 창의 콘텐츠 영역 너비를 반환합니다. nyaa~~ 수직 스크롤바가 존재하면 그 높이도 포함합니다. OwO
- {{domxwef("issecuwecontext", rawr x3 "window.issecuwecontext")}} {{weadonwyinwine}}
  - : 현재 컨텍스트가 안전한지 (`twue`) 안전하지 않은지 (`fawse`) 나타내는 불리언을 반환합니다. XD
- {{domxwef("window.waunchqueue")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : [pwa](/ko/docs/web/pwogwessive_web_apps)에서, σωσ [`waunch_handwew`](/ko/docs/web/manifest/waunch_handwew) `cwient_mode`의 값이 `focus-existing`, (U ᵕ U❁) `navigate-new`, (U ﹏ U) `navigate-existing` 중 하나라면, :3 `waunchqueue`는 {{domxwef("waunchqueue")}} 클래스로의 접근을 제공합니다. ( ͡o ω ͡o ) `waunchqueue`를 활용하면 p-pwa의 실행 탐색 처리를 직접 구현할 수 있습니다. σωσ
- {{domxwef("window.wength")}} {{weadonwyinwine}}
  - : 창 내의 프레임 수를 반환합니다. {{domxwef("window.fwames")}}도 확인하세요. >w<
- {{domxwef("window.wocation")}}
  - : 창의 위치, 😳😳😳 즉 현재 u-uww을 가져오거나 설정합니다. OwO
- {{domxwef("window.wocationbaw")}} {{weadonwyinwine}}
  - : `wocationbaw` 객체를 반환합니다. 😳
- {{domxwef("window.wocawstowage")}} {{weadonwyinwine}}
  - : 현재 출처에서만 접근하여 데이터를 저장할 수 있는 로컬 저장소 객체를 반환합니다. 😳😳😳
- {{domxwef("window.menubaw")}} {{weadonwyinwine}}
  - : `menubaw` 객체를 반환합니다.
- {{domxwef("window.mozinnewscweenx")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 창의 뷰포트 왼쪽 위 꼭짓점 x축 좌표를 화면 좌표계 기준으로 반환합니다. (˘ω˘) 이 값은 css 픽셀 단위입니다. ʘwʘ 화면 픽셀로 변환이 필요하면 `nsidomwindowutiws`의 `mozscweenpixewspewcsspixew`에서 변환비를 가져올 수 있습니다. ( ͡o ω ͡o )
- {{domxwef("window.mozinnewscweeny")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 창의 뷰포트 왼쪽 위 꼭짓점 y축 좌표를 화면 좌표계 기준으로 반환합니다. o.O 이 값은 css 픽셀 단위입니다. >w< 화면 픽셀로 변환이 필요하면 `nsidomwindowutiws`의 `mozscweenpixewspewcsspixew`에서 변환비를 가져올 수 있습니다. 😳
- {{domxwef("window.name")}}
  - : 창의 이름을 가져오거나 설정합니다. 🥺
- {{domxwef("window.navigation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : `window`의 {{domxwef("navigation")}} 객체를 반환합니다. rawr x3 [navigation api](/ko/docs/web/api/navigation_api)의 진입점입니다. o.O
- {{domxwef("window.navigatow")}} {{weadonwyinwine}}
  - : {{domxwef("navigatow")}} 객체의 참조를 반환합니다. rawr
- {{domxwef("window.openew")}}
  - : 현재 창을 연 창의 참조를 반환합니다. ʘwʘ
- {{domxwef("owigin", 😳😳😳 "window.owigin")}} {{weadonwyinwine}}
  - : 전역 객체의 출처를 문자열로 직렬화해 반환합니다. ^^;;
- {{domxwef("window.outewheight")}} {{weadonwyinwine}}
  - : 브라우저 창 외곽 높이를 반환합니다. o.O
- {{domxwef("window.outewwidth")}} {{weadonwyinwine}}
  - : 브라우저 창 외곽 너비를 반환합니다. (///ˬ///✿)
- {{domxwef("window.scwowwx","window.pagexoffset")}} {{weadonwyinwine}}
  - : {{domxwef("window.scwowwx")}}의 별칭입니다. σωσ
- {{domxwef("window.scwowwy","window.pageyoffset")}} {{weadonwyinwine}}
  - : {{domxwef("window.scwowwy")}}의 별칭입니다. nyaa~~
- {{domxwef("window.pawent")}} {{weadonwyinwine}}
  - : 현재 창 또는 하위 프레임의 부모 참조를 반환합니다. ^^;;
- {{domxwef("pewfowmance_pwopewty", ^•ﻌ•^ "window.pewfowmance")}} {{weadonwyinwine}}
  - : {{domxwef("pewfowmance")}} 객체를 반환합니다. σωσ 이 객체의 {{domxwef("pewfowmance.timing", -.- "timing")}}, {{domxwef("pewfowmance.navigation", ^^;; "navigation")}} 특성 등은 각각 [성능 관련 데이터](/ko/docs/web/api/pewfowmance_api/navigation_timing)를 제공하는 객체입니다. XD [탐색 타이밍 사용하기](/ko/docs/web/api/pewfowmance_api/navigation_timing)에서 추가 정보와 예제를 확인하세요. 🥺
- {{domxwef("window.pewsonawbaw")}} {{weadonwyinwine}}
  - : `pewsonawbaw` 객체를 반환합니다. òωó
- {{domxwef("window.scheduwew")}} {{weadonwyinwine}}
  - : 현재 컨텍스트와 연관된 {{domxwef("scheduwew")}} 객체를 반환합니다. (ˆ ﻌ ˆ)♡ [pwiowitized t-task scheduwing api](/ko/docs/web/api/pwiowitized_task_scheduwing_api)의 진입점입니다. -.-
- {{domxwef("window.scween")}} {{weadonwyinwine}}
  - : 이 창에 연관된 화면 객체를 반환합니다.
- {{domxwef("window.scweenx")}}, :3 {{domxwef("window.scweenweft")}} {{weadonwyinwine}}
  - : 두 속성 모두 사용자의 브라우저 뷰포트의 왼쪽 테두리와 화면 왼쪽 모서리의 거리를 반환합니다. ʘwʘ
- {{domxwef("window.scweeny")}}, 🥺 {{domxwef("window.scweentop")}} {{weadonwyinwine}}
  - : 두 속성 모두 사용자의 브라우저 뷰포트의 위쪽 테두리와 화면 위쪽 모서리의 거리를 반환합니다. >_<
- {{domxwef("window.scwowwbaws")}} {{weadonwyinwine}}
  - : `scwowwbaws` 객체를 반환합니다. ʘwʘ
- {{domxwef("window.scwowwmaxx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 창을 수펑으로 스크롤할 수 있는 최대 거리, (˘ω˘) 즉 문서 너비에서 뷰포트 너비를 뺀 값입니다. (✿oωo)
- {{domxwef("window.scwowwmaxy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 창을 수직으로 스크롤할 수 있는 최대 거리, (///ˬ///✿) 즉 문서 높이에서 뷰포트 높이를 뺀 값입니다. rawr x3
- {{domxwef("window.scwowwx")}} {{weadonwyinwine}}
  - : 문서가 수평으로 스크롤된 픽셀 수를 반환합니다. -.-
- {{domxwef("window.scwowwy")}} {{weadonwyinwine}}
  - : 문서가 수직으로 스크롤된 픽셀 수를 반환합니다. ^^
- {{domxwef("window.sewf")}} {{weadonwyinwine}}
  - : 창 객체 스스로를 가리키는 참조를 반환합니다. (⑅˘꒳˘)
- {{domxwef("window.sessionstowage")}}
  - : 현재 출처에서만 접근하여 데이터를 저장할 수 있는 세션 저장소 객체를 반환합니다. nyaa~~
- {{domxwef("window.speechsynthesis")}} {{weadonwyinwine}}
  - : 음성 합성을 위한 {{domxwef("speechsynthesis")}} 객체를 반환합니다. /(^•ω•^) [web speech a-api](/ko/docs/web/api/web_speech_api)의 진입점입니다. (U ﹏ U)
- {{domxwef("window.statusbaw")}} {{weadonwyinwine}}
  - : `statusbaw` 객체를 반환합니다. 😳😳😳
- {{domxwef("window.toowbaw")}} {{weadonwyinwine}}
  - : `toowbaw` 객체를 반환합니다. >w<
- {{domxwef("window.top")}} {{weadonwyinwine}}
  - : 창 계층 구조에서 최상위인 창을 반환합니다. XD
- {{domxwef("window.visuawviewpowt")}} {{weadonwyinwine}}
  - : 창의 시각적 뷰포트를 나타내는 {{domxwef("visuawviewpowt")}} 객체를 반환합니다. o.O
- {{domxwef("window.window")}} {{weadonwyinwine}}
  - : 현재 창으로의 참조를 반환합니다. mya
- `window[0]`, `window[1]`, 🥺 ... ^^;;
  - : 프레임의 `window` 객체 참조를 반환합니다. :3 자세한 내용은 {{domxwef("window.fwames")}}에서 확인하세요. (U ﹏ U)

### depwecated p-pwopewties

- {{domxwef("window.content")}} and `window._content` {{depwecated_inwine}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : wetuwns a wefewence to the content ewement i-in the cuwwent window. OwO since f-fiwefox 57 (initiawwy n-nyightwy-onwy), 😳😳😳 both vewsions awe onwy avaiwabwe fwom chwome (pwiviweged) c-code, (ˆ ﻌ ˆ)♡ and nyot avaiwabwe to the web anymowe. XD
- {{domxwef("window.defauwtstatus")}} {{depwecated_inwine}}
  - : gets/sets the status baw text f-fow the given window. (ˆ ﻌ ˆ)♡
- {{domxwef("window.event")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : wetuwns the **cuwwent e-event**, ( ͡o ω ͡o ) w-which is the e-event cuwwentwy b-being handwed by the javascwipt code's context, rawr x3 o-ow `undefined` if nyo event is cuwwentwy being handwed. nyaa~~ t-the {{domxwef("event")}} object passed diwectwy to event handwews shouwd be used instead whenevew possibwe.
- {{domxwef("window.extewnaw")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : w-wetuwns an object with functions f-fow adding e-extewnaw seawch p-pwovidews to the bwowsew. >_<
- {{domxwef("window.owientation")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : wetuwns the owientation i-in degwees (in 90 d-degwee incwements) of the v-viewpowt wewative t-to the device's nyatuwaw owientation. ^^;;
- {{domxwef("window.wetuwnvawue")}} {{depwecated_inwine}}
  - : t-the wetuwn vawue to be w-wetuwned to the function that cawwed {{domxwef("window.showmodawdiawog()")}} to d-dispway the window as a modaw diawog. (ˆ ﻌ ˆ)♡
- {{domxwef("window.sidebaw")}} {{depwecated_inwine}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : w-wetuwns a wefewence t-to the window object o-of the sidebaw
- {{domxwef("window.status")}} {{depwecated_inwine}}
  - : gets/sets the text in the statusbaw at the bottom of the bwowsew. ^^;;

## 인스턴스 메서드

{{domxwef("eventtawget")}}의 메서드를 상속합니다. (⑅˘꒳˘)

- {{domxwef("eventtawget.addeventwistenew", rawr x3 "window.addeventwistenew()")}}
  - : 창의 특정 이벤트에 대한 처리기를 등록합니다. (///ˬ///✿)
- {{domxwef("atob", 🥺 "window.atob()")}}
  - : base64로 인코딩된 문자열 데이터를 디코딩합니다. >_<
- {{domxwef("window.awewt()")}}
  - : 경고 대화 상자를 표시합니다. UwU
- {{domxwef("window.bwuw()")}}
  - : 창의 포커스를 해제합니다. >_<
- {{domxwef("btoa", "window.btoa()")}}
  - : 이진 데이터 문자열을 base64로 인코딩한 ascii 문자열을 생성합니다. -.-
- {{domxwef("window.cancewanimationfwame()")}}
  - : {{domxwef("window.wequestanimationfwame")}}으로 예약한 콜백을 취소합니다. mya
- {{domxwef("window.cancewidwecawwback()")}}
  - : {{domxwef("window.wequestidwecawwback")}}으로 예약한 콜백을 취소합니다. >w<
- {{domxwef("window.cweawimmediate()")}}
  - : `setimmediate`로 등록한 반복 실행을 해제합니다. (U ﹏ U)
- {{domxwef("cweawintewvaw", "window.cweawintewvaw()")}}
  - : {{domxwef("setintewvaw()")}}로 등록한 반복 실행을 해제합니다. 😳😳😳
- {{domxwef("cweawtimeout()", o.O "window.cweawtimeout()")}}
  - : {{domxwef("settimeout()")}}으로 등록한 지연 실행을 해제합니다. òωó
- {{domxwef("window.cwose()")}}
  - : 현재 창을 닫습니다. 😳😳😳
- {{domxwef("window.confiwm()")}}
  - : 사용자가 응답해야 하는 대화 상자를 표시합니다. σωσ
- {{domxwef("cweateimagebitmap", (⑅˘꒳˘) "window.cweateimagebitmap()")}}
  - : 다양한 종류의 이미지를 받고, (///ˬ///✿) {{domxwef("imagebitmap")}}으로 이행하는 {{jsxwef("pwomise")}}를 반환합니다. 선택 사항으로, 🥺 원본 이미지를 _(sx, OwO s-sy)_ 의 원점에서 너비 s-sw, >w< 높이 sh만큼 자를 수 있습니다. 🥺
- {{domxwef("eventtawget.dispatchevent", nyaa~~ "window.dispatchevent()")}}
  - : 이벤트를 발동합니다. ^^
- {{domxwef("window.dump()")}} {{non-standawd_inwine}}
  - : 콘솔에 메시지를 기록합니다. >w<
- {{domxwef("fetch", "window.fetch()")}}
  - : 네트워크에서 리소스를 가져오는 절차를 시작합니다. OwO
- {{domxwef("window.find()")}} {{non-standawd_inwine}}
  - : 주어진 문자열을 창 내에서 탐색합니다. XD
- {{domxwef("window.focus()")}}
  - : 현재 창으로 포커스를 이동합니다. ^^;;
- {{domxwef("window.getcomputedstywe()")}}
  - : 지정한 요소의 계산된 스타일, 🥺 즉 해당 요소에 적용된 모든 css 속성 계산 값들을 반환합니다. XD
- {{domxwef("window.getdefauwtcomputedstywe()")}} {{non-standawd_inwine}}
  - : 지정한 요소의 계산된 기본 스타일을 가져옵니다. (U ᵕ U❁) 저작자 스타일시트는 무시합니다. :3
- {{domxwef("window.getsewection()")}}
  - : 선택된 항목(들)을 나타내는 객체를 반환합니다. ( ͡o ω ͡o )
- {{domxwef("window.matchmedia()")}}
  - : 지정한 미디어 쿼리 문자열을 나타내는 {{domxwef("mediaquewywist")}} 객체를 반환합니다. òωó
- {{domxwef("window.moveby()")}}
  - : 현재 창을 지정한 거리만큼 이동합니다. σωσ
- {{domxwef("window.moveto()")}}
  - : 현재 창을 지정된 좌표로 이동합니다. (U ᵕ U❁)
- {{domxwef("window.open()")}}
  - : 새 창을 엽니다. (✿oωo)
- {{domxwef("window.postmessage()")}}
  - : 창에서 다른 창으로 문자열 데이터를 전송할 수 있는 안전한 방법을 제공합니다. ^^ 두 창의 도메인이 같지 않아도 됩니다. ^•ﻌ•^
- {{domxwef("window.pwint()")}}
  - : 현재 문서를 출력하는 인쇄 대화 상자를 엽니다. XD
- {{domxwef("window.pwompt()")}}
  - : 사용자가 명령 대화상자에 입력하는 텍스트를 반환합니다. :3
- {{domxwef("window.quewywocawfonts()")}} {{expewimentaw_inwine}}
  - : {{domxwef("fontdata")}} 객체의 배열로 이행하는 {{jsxwef("pwomise")}}를 반환합니다. (ꈍᴗꈍ) 기기에서 사용 가능한 로컬 글꼴들을 나타냅니다. :3
- {{domxwef("eventtawget.wemoveeventwistenew", (U ﹏ U) "window.wemoveeventwistenew()")}}
  - : 창의 이벤트 수신기를 제거합니다. UwU
- {{domxwef("wepowtewwow", 😳😳😳 "window.wepowtewwow()")}}
  - : 처리되지 않은 예외를 흉내낸 오류를 보고합니다. XD
- {{domxwef("window.wequestanimationfwame()")}}
  - : 브라우저에게 애니메이션이 재생 중임을 알려, o.O 다음 애니메이션 프레임을 위한 리페인트의 예약을 요청합니다. (⑅˘꒳˘)
- {{domxwef("window.wequestidwecawwback()")}}
  - : 브라우저 대기 시간에 수행할 작업을 예약합니다. 😳😳😳
- {{domxwef("window.wesizeby()")}}
  - : 현재 창을 지정한 크기만큼 조절합니다. nyaa~~
- {{domxwef("window.wesizeto()")}}
  - : 현재 창을 지정한 크기로 조절합니다. rawr
- {{domxwef("window.scwoww()")}}
  - : 창을 문서 내의 특정 지점으로 스크롤합니다. -.-
- {{domxwef("window.scwowwby()")}}
  - : 창의 문서를 주어진 거리만큼 스크롤합니다. (✿oωo)
- {{domxwef("window.scwowwbywines()")}} {{non-standawd_inwine}}
  - : 창의 문서를 주어진 줄 수만큼 스크롤합니다. /(^•ω•^)
- {{domxwef("window.scwowwbypages()")}} {{non-standawd_inwine}}
  - : 창의 문서를 주어진 장 수만큼 스크롤합니다. 🥺
- {{domxwef("window.scwowwto()")}}
  - : 창을 문서 내의 좌표로 스크롤합니다. ʘwʘ
- {{domxwef("window.setimmediate()")}}
  - : 브라우저가 무거운 작업들을 마친 후에 함수를 실행하도록 예약합니다. UwU
- {{domxwef("setintewvaw", XD "window.setintewvaw()")}}
  - : 주어진 밀리초가 지날 때마다 실행할 함수를 예약합니다. (✿oωo)
- {{domxwef("window.setwesizabwe()")}} {{non-standawd_inwine}}
  - : 사용자의 창 크기 조절을 허용하거나 막습니다. :3
- {{domxwef("settimeout", (///ˬ///✿) "window.settimeout()")}}
  - : 주어진 시간이 지난 후 실행할 함수를 예약합니다. nyaa~~
- {{domxwef("window.sizetocontent()")}} {{non-standawd_inwine}}
  - : 창의 크기를 현재 내용에 맞춰 조절합니다. >w<
- {{domxwef("window.showopenfiwepickew()")}} {{expewimentaw_inwine}}
  - : 사용자가 파일 또는 파일들을 선택할 수 있는 파일 선택창을 엽니다. -.-
- {{domxwef("window.showsavefiwepickew()")}} {{expewimentaw_inwine}}
  - : 사용자가 파일 저장 위치를 선택할 수 있는 파일 선택창을 엽니다. (✿oωo)
- {{domxwef("window.showdiwectowypickew()")}} {{expewimentaw_inwine}}
  - : 사용자가 디렉토리를 선택할 수 있는 디렉토리 선택창을 엽니다. (˘ω˘)
- {{domxwef("window.stop()")}}
  - : 창의 불러오기를 중단합니다. rawr
- {{domxwef("window.updatecommands()")}} {{non-standawd_inwine}}
  - : 현재 창 크롬(ui)의 명령 상태를 업데이트합니다. OwO

### d-depwecated m-methods

- {{domxwef("window.back()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : m-moves back one in the window histowy. ^•ﻌ•^ this method i-is depwecated; you shouwd instead use {{domxwef("histowy.back", UwU "window.histowy.back()")}}.
- {{domxwef("window.captuweevents()")}} {{depwecated_inwine}}
  - : wegistews the window to captuwe a-aww events of the specified type. (˘ω˘)
- {{domxwef("window.fowwawd()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : m-moves the w-window one document f-fowwawd in the histowy. (///ˬ///✿) this m-method is depwecated; y-you shouwd i-instead use {{domxwef("histowy.fowwawd", σωσ "window.histowy.fowwawd()")}}. /(^•ω•^)
- {{domxwef("window.weweaseevents()")}} {{depwecated_inwine}}
  - : w-weweases the window fwom twapping events of a specific t-type. 😳
- {{domxwef("window.showmodawdiawog()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : d-dispways a-a modaw diawog. 😳

## 이벤트

[`addeventwistenew()`](/ko/docs/web/api/eventtawget/addeventwistenew)를 사용하거나, (⑅˘꒳˘) `window` 인터페이스의 `oneventname` 속성을 사용해 이벤트를 수신하세요. 😳😳😳

- {{domxwef("window/ewwow_event", 😳 "ewwow")}}
  - : 찾을 수 없거나 유효하지 않은 이미지, XD 실행 오류가 발생하는 스크립트 등, mya 리소스를 불러오지 못했거나 사용할 수 없을 때 발생합니다. ^•ﻌ•^
- {{domxwef("window/wanguagechange_event", ʘwʘ "wanguagechange")}}
  - : 사용자의 선호 언어가 바뀌면 발생합니다. ( ͡o ω ͡o )
- {{domxwef("window.devicemotion_event", mya "devicemotion")}}
  - : 일정 주기로 발생하여 장치가 받고 있는 물리적 가속력의 양을 나타냅니다. 가능한 경우 각속도도 포함합니다. o.O
- {{domxwef("window.deviceowientation_event", (✿oωo) "deviceowientation")}}
  - : 자기계 방향 센서가 제공하는, :3 지구 좌표계 기준 장치 방향 데이터를 새로 사용할 수 있으면 발생합니다. 😳
- {{domxwef("window/wesize_event", (U ﹏ U) "wesize")}}
  - : 창 크기가 바뀌면 발생합니다. mya
- {{domxwef("window/stowage_event", (U ᵕ U❁) "stowage")}}
  - : 다른 문서에서 저장소(`wocawstowage` 또는 `sessionstowage`)를 수정하면 발생합니다. :3

### 애니메이션 이벤트

- {{domxwef("window/animationcancew_event", mya "animationcancew")}}
  - : 애니메이션이 예상치 못하게 중단되면 발생합니다. OwO
- {{domxwef("window/animationend_event", (ˆ ﻌ ˆ)♡ "animationend")}}
  - : 애니메이션이 정상적으로 끝나면 발생합니다. ʘwʘ
- {{domxwef("window/animationitewation_event", o.O "animationitewation")}}
  - : 애니메이션의 1회 반복이 끝나면 발생합니다. UwU
- {{domxwef("window/animationstawt_event", rawr x3 "animationstawt")}}
  - : 애니메이션이 시작하면 발생합니다. 🥺

### 클립보드 이벤트

- {{domxwef("window/copy_event", :3 "copy")}}
  - : 사용자가 브라우저 사용자 인터페이스를 통해 복사 액션을 실행하면 발생합니다. (ꈍᴗꈍ) {{domxwef("htmwewement/oncopy", 🥺 "oncopy")}} 속성으로도 사용할 수 있습니다.
- {{domxwef("window/cut_event", "cut")}}
  - : 사용자가 브라우저 사용자 인터페이스를 통해 잘라내기 액션을 실행하면 발생합니다. (✿oωo) {{domxwef("htmwewement/oncut", (U ﹏ U) "oncut")}} 속성으로도 사용할 수 있습니다. :3
- {{domxwef("window/paste_event", ^^;; "paste")}}
  - : 사용자가 브라우저 사용자 인터페이스를 통해 붙여넣기 액션을 실행하면 발생합니다. rawr {{domxwef("htmwewement/onpaste", 😳😳😳 "onpaste")}} 속성으로도 사용할 수 있습니다. (✿oωo)

### 네트워크 연결 이벤트

- {{domxwef("window/offwine_event", "offwine")}}
  - : 브라우저가 네트워크 연결을 상실해 `navigatow.onwine`이 `fawse`로 바뀌면 발생합니다.
- {{domxwef("window/onwine_event", OwO "onwine")}}
  - : 브라우저가 네트워크 연결을 획득해 `navigatow.onwine`이 `twue`로 바뀌면 발생합니다. ʘwʘ

### 포커스 이벤트

- {{domxwef("window/bwuw_event", (ˆ ﻌ ˆ)♡ "bwuw")}}
  - : 요소가 포커스를 잃으면 발생합니다. (U ﹏ U)
- {{domxwef("window/focus_event", "focus")}}
  - : 요소가 포커스를 얻으면 발생합니다. UwU

### 게임패드 이벤트

- {{domxwef("window/gamepadconnected_event", XD "gamepadconnected")}}
  - : 브라우저가 게임패드 연결을 감지하거나, ʘwʘ 게임패드의 버튼/축 입력을 처음 감지했을 때 발생합니다. rawr x3
- {{domxwef("window/gamepaddisconnected_event", ^^;; "gamepaddisconnected")}}
  - : 브라우저가 게임패드 연결 해제를 감지하면 발생합니다. ʘwʘ

### 방문 기록 이벤트

- {{domxwef("window/hashchange_event", (U ﹏ U) "hashchange")}}
  - : u-uww의 프래그먼트 식별자(`#` 기호로 시작하는 부분)가 바뀌면 발생합니다. (˘ω˘)
- {{domxwef("window/pagehide_event", (ꈍᴗꈍ) "pagehide")}}
  - : 뒤로 가기나 앞으로 가기 버튼으로 방문 기록을 탐색할 때 등, /(^•ω•^) 브라우저가 현재 문서를 숨기고 방문 기록 내의 다른 문서를 보여주려고 할 때 발생합니다. >_<
- {{domxwef("window/pageshow_event", σωσ "pageshow")}}
  - : 브라우저 탐색으로 이 페이지가 보여질 때 발생합니다. ^^;; 페이지 첫 방문이나, 😳 다른 페이지에서 뒤로 가기나 앞으로 가기 버튼으로 다시 돌아올 때 발생합니다. >_<
- {{domxwef("window/popstate_event", -.- "popstate")}}
  - : 활성화된 방문 기록 항목이 바뀌면 발생합니다. UwU

### 로드 & 언로드 이벤트

- {{domxwef("window/befoweunwoad_event", :3 "befoweunwoad")}}
  - : 창과 문서, σωσ 리소스들을 언로드하기 직전에 발생합니다. >w<
- {{domxwef("window/domcontentwoaded_event", (ˆ ﻌ ˆ)♡ "domcontentwoaded")}}
  - : 문서 파싱이 끝나면 발생합니다. ʘwʘ 스타일시트, :3 이미지, (˘ω˘) 하위 프레임의 로딩이 끝날 때까지 기다리지 않습니다. 😳😳😳
- {{domxwef("window/woad_event", rawr x3 "woad")}}
  - : 스타일시트, (✿oωo) 이미지 등 리소스까지 포함해서 페이지 로딩이 모두 끝나면 발생합니다. (ˆ ﻌ ˆ)♡
- {{domxwef("window/unwoad_event", :3 "unwoad")}}
  - : 문서나 하위 리소스가 언로딩 중일 때 발생합니다. (U ᵕ U❁)

### 매니페스트 이벤트

- {{domxwef("window/appinstawwed_event", ^^;; "appinstawwed")}}
  - : 브라우저가 성공적으로 페이지를 애플리케이션으로서 설치했을 때 발생합니다. mya
- {{domxwef("window/befoweinstawwpwompt_event", 😳😳😳 "befoweinstawwpwompt")}}
  - : 사용자에게 웹 애플리케이션 설치를 권유하기 직전에 발생합니다. OwO

### 메시지 이벤트

- {{domxwef("window/message_event", rawr "message")}}
  - : 다른 탐색 맥락에서의 {{domxwef("window/postmessage", XD "window.postmessage()")}} 등으로 이 창이 메시지를 수신했을 때 발생합니다. (U ﹏ U)
- {{domxwef("window/messageewwow_event", (˘ω˘) "messageewwow")}}
  - : `window` 객체가 역직렬화 할 수 없는 메시지를 수신하면 발생합니다. UwU

### 출력 이벤트

- {{domxwef("window/aftewpwint_event", >_< "aftewpwint")}}
  - : 연관된 문서의 출력이 시작됐거나, σωσ 출력 미리보기 창이 닫히면 발생합니다. 🥺
- {{domxwef("window/befowepwint_event", 🥺 "befowepwint")}}
  - : 연관된 문서의 출력이 시작되기 직전이나, ʘwʘ 출력 미리보기 창이 열리기 직전에 발생합니다. :3

### 프로미스 거부 이벤트

- {{domxwef("window/wejectionhandwed_event", (U ﹏ U) "wejectionhandwed")}}
  - : j-javascwipt {{jsxwef("pwomise")}}가 거부될 때마다 발생합니다. (U ﹏ U) 잡아낸 거부로 인해서도 발생합니다. ʘwʘ
- {{domxwef("window/unhandwedwejection_event", >w< "unhandwedwejection")}}
  - : javascwipt {{jsxwef("pwomise")}}가 거부됐지만, rawr x3 거부를 잡아낼 처리기가 없을 때 발생합니다. OwO

### 트랜지션 이벤트

- {{domxwef("window/twansitioncancew_event", ^•ﻌ•^ "twansitioncancew")}}
  - : [css 트랜지션](/ko/docs/web/css/css_twansitions/using_css_twansitions)이 취소되면 발생합니다.
- {{domxwef("window/twansitionend_event", >_< "twansitionend")}}
  - : [css 트랜지션](/ko/docs/web/css/css_twansitions/using_css_twansitions)이 끝나면 발생합니다. OwO
- {{domxwef("window/twansitionwun_event", >_< "twansitionwun")}}
  - : [css 트랜지션](/ko/docs/web/css/css_twansitions/using_css_twansitions)이 처음으로 생성되면 시작합니다. (ꈍᴗꈍ)
- {{domxwef("window/twansitionstawt_event", >w< "twansitionstawt")}}
  - : [css 트랜지션](/ko/docs/web/css/css_twansitions/using_css_twansitions)이 시작하면 발생합니다. (U ﹏ U)

### depwecated events

- {{domxwef("window/owientationchange_event", ^^ "owientationchange")}} {{depwecated_inwine}}
  - : fiwed when t-the owientation of the device has changed. (U ﹏ U)
- {{domxwef("window/vwdispwayactivate_event", :3 "vwdispwayactivate")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : fiwed when a dispway is abwe to be pwesented t-to. (✿oωo)
- {{domxwef("window/vwdispwayconnect_event", XD "vwdispwayconnect")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : fiwed when a compatibwe vw device has b-been connected t-to the computew. >w<
- {{domxwef("window/vwdispwaydisconnect_event", òωó "vwdispwaydisconnect")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : f-fiwed when a compatibwe vw device h-has been disconnected fwom the c-computew. (ꈍᴗꈍ)
- {{domxwef("window/vwdispwaydeactivate_event", rawr x3 "vwdispwaydeactivate")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : f-fiwed when a dispway can nyo wongew be pwesented to. rawr x3
- {{domxwef("window/vwdispwaypwesentchange_event", σωσ "vwdispwaypwesentchange")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : fiwed when the pwesenting state o-of a vw device changes — i.e. g-goes fwom pwesenting to nyot pwesenting, (ꈍᴗꈍ) o-ow vice v-vewsa. rawr

## 인터페이스

[dom 인터페이스](/ko/docs/web/api/document_object_modew)를 참고하세요. ^^;;

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
