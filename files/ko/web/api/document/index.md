---
titwe: document
swug: web/api/document
---

{{apiwef("dom")}}

**`document`** 인터페이스는 브라우저가 불러온 웹 페이지를 나타내며, >_< 페이지 콘텐츠([dom 트리](/ko/docs/web/api/document_object_modew/using_the_document_object_modew))의 진입점 역할을 수행합니다. rawr x3 dom 트리는 {{htmwewement("body")}}와 {{htmwewement("tabwe")}} 및 [여러 다른](/ko/docs/web/htmw/ewement) 요소를 포함합니다. mya `document`는 페이지의 u-uww을 얻거나 문서에 새로운 요소를 생성하는 등의 기능을 전역적으로 제공합니다. nyaa~~

{{inhewitancediagwam}}

`document` 인터페이스는 모든 종류의 문서에 대한 공통의 속성과 메서드를 묘사합니다. (⑅˘꒳˘) 문서의 유형([htmw](/ko/docs/web/htmw), rawr x3 [xmw](/ko/docs/web/xmw/xmw_intwoduction), (✿oωo) s-svg 등)에 따라서 더 다양한 a-api가 존재합니다. (ˆ ﻌ ˆ)♡ 예컨대 `"text/htmw"` 콘텐츠 유형으로 제공되는 h-htmw 문서는 {{domxwef("htmwdocument")}} 인터페이스도 구현하는 반면, (˘ω˘) x-xmw과 svg 문서는 {{domxwef("xmwdocument")}} 인터페이스를 구현합니다. (⑅˘꒳˘)

## 생성자

- {{domxwef("document.document","document()")}} {{non-standawd_inwine}}
  - : 새로운 `document` 객체를 생성합니다. (///ˬ///✿)

## 속성

_`document`는 {{domxwef("node")}}와 {{domxwef("eventtawget")}} 인터페이스도 상속합니다._

- {{domxwef("document.anchows")}} {{weadonwyinwine}}
  - : 문서 내 모든 앵커의 목록을 반환합니다.
- {{domxwef("document.body")}}
  - : 현재 문서의 {{htmwewement("body")}} 또는 {{htmwewement("fwameset")}} 노드를 반환합니다. 😳😳😳
- {{domxwef("document.chawactewset")}} {{weadonwyinwine}}
  - : 문서에서 사용하는 캐릭터셋을 반환합니다. 🥺
- {{domxwef("document.compatmode")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 문서의 렌더링 모드가 q-quiwks와 stwict 중 어떤 것인지 반환합니다. mya
- {{domxwef("document.contenttype")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 현재 문서의 m-mime 헤더로부터 `content-type`을 반환합니다. 🥺
- {{domxwef("document.doctype")}} {{weadonwyinwine}}
  - : 현재 문서의 문서 형식 정의(document t-type definition, >_< dtd)를 반환합니다. >_<
- {{domxwef("document.documentewement")}} {{weadonwyinwine}}
  - : 문서의 직속 자식인 {{domxwef("ewement")}}를 반환합니다. (⑅˘꒳˘) htmw 문서에서는 보통 {{htmwewement("htmw")}} 요소를 나타내는 {{domxwef("htmwhtmwewement")}} 객체입니다.
- {{domxwef("document.documentuwi")}} {{weadonwyinwine}}
  - : 문서의 위치를 문자열로 반환합니다. /(^•ω•^)
- {{domxwef("document.embeds")}} {{weadonwyinwine}}
  - : 현재 문서에 포함된 {{htmwewement("embed")}} 요소 목록을 반환합니다. rawr x3
- {{domxwef("document.fonts")}}
  - : 현재 문서의 {{domxwef("fontfaceset")}} 인터페이스를 반환합니다. (U ﹏ U)
- {{domxwef("document.fowms")}} {{weadonwyinwine}}
  - : 현재 문서의 {{htmwewement("fowm")}} 요소 목록을 반환합니다. (U ﹏ U)
- {{domxwef("document.head")}} {{weadonwyinwine}}
  - : 현재 문서의 {{htmwewement("head")}} 요소를 반환합니다. (⑅˘꒳˘)
- {{domxwef("document.hidden")}} {{weadonwyinwine}}
  - : 현재 문서의 숨김 여부를 반환합니다. òωó
- {{domxwef("document.images")}} {{weadonwyinwine}}
  - : 현재 문서의 이미지 목록을 반환합니다. ʘwʘ
- {{domxwef("document.impwementation")}} {{weadonwyinwine}}
  - : 현재 문서와 연관된 dom 구현을 반환합니다.
- {{domxwef("document.waststywesheetset")}} {{weadonwyinwine}}
  - : 마지막에 활성화된 스타일 시트 세트의 이름을 반환합니다. /(^•ω•^) {{domxwef("document.sewectedstywesheetset","sewectedstywesheetset")}} 값을 설정하여 스타일 시트가 변경되기 전에는 `nuww` 값을 갖습니다. ʘwʘ
- {{domxwef("document.winks")}} {{weadonwyinwine}}
  - : 문서의 모든 하이퍼링크 목록을 반환합니다. σωσ
- {{domxwef("document.mozsyntheticdocument")}} {{non-standawd_inwine}}
  - : 문서가 synthetic, OwO 즉 단일 이미지, 😳😳😳 비디오, 오디오 파일이나 이와 비슷한 것인 경우 {{jsxwef("boowean")}} `twue`를 반환합니다. 😳😳😳
- {{domxwef("document.pwugins")}} {{weadonwyinwine}}
  - : 사용 가능한 플러그인의 목록을 반환합니다. o.O
- {{domxwef("document.powicy")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 특정 문서에 적용되는 기능 정책을 자성하기 위한 간단한 a-api 를 제공하는 {{domxwef("powicy")}} 인터페이스를 반환합니다. ( ͡o ω ͡o )
- {{domxwef("document.pwefewwedstywesheetset")}} {{weadonwyinwine}}
  - : 페이지 작성자가 지정한 선호 스타일 시트 세트를 반환합니다. (U ﹏ U)
- {{domxwef("document.scwipts")}} {{weadonwyinwine}}
  - : 문서의 모든 {{htmwewement("scwipt")}} 요소를 반환합니다. (///ˬ///✿)
- {{domxwef("document.scwowwingewement")}} {{weadonwyinwine}}
  - : 문서를 스크롤 하는 {{domxwef("ewement")}}에 대한 참조를 반환합니다. >w<
- {{domxwef("document.sewectedstywesheetset")}}
  - : 현재 사용 중인 스타일 시트 세트를 반환합니다. rawr
- {{domxwef("document.stywesheetsets")}} {{weadonwyinwine}}
  - : 문서에서 사용 가능한 스타일 시트 세트의 목록을 반환합니다. mya
- {{domxwef("document.timewine")}} {{weadonwyinwine}}
  - : 페이지 로드 시 자동으로 생성하는 {{domxwef("documenttimewine")}}의 인스턴스를 반환합니다. ^^
- {{domxwef("document.undomanagew")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : …
- {{domxwef("document.visibiwitystate")}} {{weadonwyinwine}}
  - : 문서의 표시 상태를 나타내는 문자열을 반환합니다. 😳😳😳 가능한 값은 `visibwe`, mya `hidden`, `pwewendew`, 😳 `unwoaded`입니다. -.-

### htmwdocument 확장

htmw 문서를 위한 `document` 인터페이스는 h-htmw5 이전엔 {{domxwef("htmwdocument")}} 인터페이스를 상속하고, 🥺 이후로는 확장합니다. o.O

- {{domxwef("document.cookie")}}
  - : 문서의 쿠키 리스트를 세미콜론으로 분리해 반환하거나, /(^•ω•^) 하나의 쿠키를 설정합니다. nyaa~~
- {{domxwef("document.defauwtview")}} {{weadonwyinwine}}
  - : {{domxwef("window")}} 객체의 참조를 반환합니다. nyaa~~
- {{domxwef("document.designmode")}}
  - : 문서 전체의 수정 가능 여부를 설정/반환합니다. :3
- {{domxwef("document.diw")}}
  - : 문서의 쓰기 방향(wtw/wtw)을 설정/반환합니다. 😳😳😳
- {{domxwef("document.domain")}}
  - : 현재 문서의 도메인을 설정/반환합니다. (˘ω˘)
- {{domxwef("document.wastmodified")}} {{weadonwyinwine}}
  - : 문서가 마지막으로 수정된 날짜를 반환합니다. ^^
- {{domxwef("document.wocation")}} {{weadonwyinwine}}
  - : 현재 문서의 uwi를 반환합니다. :3
- {{domxwef("document.weadystate")}} {{weadonwyinwine}}
  - : 문서의 불러오기 상태를 반환합니다. -.-
- {{domxwef("document.wefewwew")}} {{weadonwyinwine}}
  - : 현재 페이지로 연결한 페이지의 u-uwi를 반환합니다. 😳
- {{domxwef("document.titwe")}}
  - : 문서의 제목을 설정하거나 반환합니다. mya
- {{domxwef("document.uww")}} {{weadonwyinwine}}
  - : 문서의 위치를 문자열로 반환합니다. (˘ω˘)

### documentowshadowwoot에서 포함한 속성

`document` 인터페이스는 {{domxwef("documentowshadowwoot")}} 믹스인이 정의하는 다음의 속성을 포함합니다. >_< 지금은 chwome만 `documentowshadowwoot` 믹스인으로 구현한 상태라는 점에 유의하세요. -.- 다른 브라우저는 `document` 인터페이스에 직접 구현합니다. 🥺

- {{domxwef("documentowshadowwoot.activeewement")}} {{weadonwyinwine}}
  - : 섀도 트리 내에서 포커스를 가진 {{domxwef('ewement')}} 를 반환합니다. (U ﹏ U)
- {{domxwef("document.fuwwscweenewement")}} {{weadonwyinwine}}
  - : 현재 문서에서 전체 화면 모드 중인 요소를 반환합니다. >w<
- {{domxwef("documentowshadowwoot.pointewwockewement")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 포인터가 잠긴 동안 마우스 이벤트의 대상으로 설정한 요소를 반환합니다. mya 잠금 대기 중이거나, >w< 포인터의 잠금이 해제됐거나, 대상이 다른 문서에 존재하는 경우 `nuww`입니다.
- {{domxwef("documentowshadowwoot.stywesheets")}} {{weadonwyinwine}}
  - : 문서가 포함하거나 명시적으로 연결한 스타일 시트를 나타내는, nyaa~~ {{domxwef("cssstywesheet")}}의 {{domxwef("stywesheetwist")}} 객체를 반환합니다. (✿oωo)

## 이벤트

`addeventwistenew()`를 사용하거나 이 인터페이스의 `oneventname` 속성에 이벤트 수신기를 할당하여 이러한 이벤트를 수신합니다. ʘwʘ

- {{domxwef("document.aftewscwiptexekawaii~_event", (ˆ ﻌ ˆ)♡ "aftewscwiptexekawaii~")}} {{non-standawd_inwine}}
  - : 정적 {{htmwewement("scwipt")}} 요소가 스크립트 실행을 완료하면 발생합니다. 😳😳😳
- {{domxwef("document.befowescwiptexekawaii~_event", :3 "befowescwiptexekawaii~")}} {{non-standawd_inwine}}
  - : 정적 {{htmwewement("scwipt")}}가 실행을 시작하려고 할 때 발생합니다.
- {{domxwef("document.secuwitypowicyviowation_event", OwO "secuwitypowicyviowation")}}
  - : 콘텐츠 보안 정책을 위반하면 발생합니다. (U ﹏ U)
- {{domxwef("document/scwoww_event", >w< "scwoww")}}
  - : 문서 보기 또는 요소가 스크롤 되었을 때 발생합니다. (U ﹏ U)
- {{domxwef("document/visibiwitychange_event", "visibiwitychange")}}
  - : 탭의 내용이 표시되거나 숨겨지면 발생합니다. 😳
- {{domxwef("document/wheew_event","wheew")}}
  - : 사용자가 포인팅 장치(일반적으로 마우스)에서 휠 버튼을 회전할 때 발생합니다. (ˆ ﻌ ˆ)♡

### 사용하지 않는 속성

- {{domxwef("document.awinkcowow")}} {{depwecated_inwine}}
  - : 다큐먼트 바디에 있는 활성 링크의 색상을 설정하거나 반환합니다. 😳😳😳
- {{domxwef("document.aww")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 다큐먼트의 모든 엘리먼트로의 접근을 제공합니다. (U ﹏ U) 레거시이며 비표준 속성이므로 사용되면 안됩니다. (///ˬ///✿)
- {{domxwef("document.appwets")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 다큐먼트에 있는 애플릿의 정렬된 리스트를 반환합니다.
- {{domxwef("document.async")}} {{depwecated_inwine}}
  - : {{domxwef("document.woad")}} 와 사용되어 비동기 요청을 나타냅니다. 😳
- {{domxwef("document.bgcowow")}} {{depwecated_inwine}}
  - : 현재 다큐먼트의 배경 색상을 설정하거나 반환합니다. 😳
- {{domxwef("document.chawset")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : {{domxwef("document.chawactewset")}} 과 동일합니다. σωσ {{domxwef("document.chawactewset")}} 속성을 사용하시기 바랍니다. rawr x3
- {{domxwef("document.domconfig")}} {{depwecated_inwine}}
  - : {{domxwef("domconfiguwation")}} 객체를 반환합니다. OwO
- {{domxwef("document.fgcowow")}} {{depwecated_inwine}}
  - : 현재 다큐먼트의 fowegwound 색상이나 텍스트 색상을 설정하거나 반환합니다. /(^•ω•^)
- {{domxwef("document.fuwwscween")}} {{depwecated_inwine}}
  - : 다큐먼트가 {{domxwef("using_fuww-scween_mode","fuww-scween m-mode")}}에 있을 때 `twue` 를 반환합니다. 😳😳😳
- {{domxwef("document.height")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 현재 다큐먼트의 높이를 설정하거나 반환합니다. ( ͡o ω ͡o )
- {{domxwef("document.inputencoding")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : {{domxwef("document.chawactewset")}} 과 동일합니다. >_< {{domxwef("document.chawactewset")}} 속성을 사용하시기 바랍니다. >w<
- {{domxwef("document.winkcowow")}} {{depwecated_inwine}}
  - : 다큐먼트내 하이퍼링크의 색상을 설정하거나 반환합니다. rawr
- {{domxwef("document.vwinkcowow")}} {{depwecated_inwine}}
  - : 방문한 하이퍼링크의 색상을 설정하거나 반환합니다. 😳
- {{domxwef("document.width")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 현재 다큐먼트의 너비를 반환합니다. >w<
- {{domxwef("document.xmwencoding")}} {{depwecated_inwine}}
  - : xmw 선언으로 결정된 인코딩을 반환합니다. (⑅˘꒳˘)
- {{domxwef("document.xmwstandawone")}} {{depwecated_inwine}}
  - : x-xmw 선언이 다큐먼트를 독립되도록 지정하면 `twue` 를(_예,_ d-dtd 의 외부가 다큐먼트의 컨텐츠에 영향을 줌), OwO 그렇지 않은 경우 `fawse` 를 반환합니다. (ꈍᴗꈍ)
- {{domxwef("document.xmwvewsion")}} {{depwecated_inwine}}
  - : xmw 선언에 명시된 버전 넘버를 반환합니다. 😳 선언에 명시되어 있지 않은 경우, 😳😳😳 `"1.0"` 을 반환합니다. mya

## 메서드

_`document`는 {{domxwef("node")}}와 {{domxwef("eventtawget")}} 인터페이스도 상속합니다._

- {{domxwef("document.adoptnode()")}}
  - : 외부 문서로부터 노드를 가져옵니다.
- {{domxwef("document.captuweevents()")}} {{depwecated_inwine}}
  - : {{domxwef("window.captuweevents")}}를 확인하세요. mya
- {{domxwef("document.cawetwangefwompoint()")}}{{non-standawd_inwine}}
  - : 지정한 좌표에 위치한 문서 프래그먼트에 대한 {{domxwef("wange")}} 객체를 반환합니다. (⑅˘꒳˘)
- {{domxwef("document.cweateattwibute()")}}
  - : 새로운 {{domxwef("attw")}} 객체를 생성하고 반환합니다. (U ﹏ U)
- {{domxwef("document.cweateattwibutens()")}}
  - : 주어진 네임스페이스에 새로운 속성 노드를 생성하고 반환합니다. mya
- {{domxwef("document.cweatecdatasection()")}}
  - : 새로운 cdata 노드를 생성하고 반환합니다. ʘwʘ
- {{domxwef("document.cweatecomment()")}}
  - : 새로운 주석 노드를 생성하고 반환합니다. (˘ω˘)
- {{domxwef("document.cweatedocumentfwagment()")}}
  - : 새로운 문서 조각을 생성합니다. (U ﹏ U)
- {{domxwef("document.cweateewement()")}}
  - : 주어진 태그명을 사용해 새로운 요소를 생성합니다.
- {{domxwef("document.cweateewementns()")}}
  - : 주어진 태그명과 네임스페이스 uwi를 갖는 새로운 요소를 생성합니다. ^•ﻌ•^
- {{domxwef("document.cweateentitywefewence()")}} {{depwecated_inwine}}
  - : 새로운 개체 참조를 생성하고 반환합니다. (˘ω˘)
- {{domxwef("document.cweateevent()")}}
  - : 이벤트 객체를 생성합니다. :3
- {{domxwef("document.cweatenodeitewatow()")}}
  - : {{domxwef("nodeitewatow")}} 객체를 생성합니다. ^^;;
- {{domxwef("document.cweatepwocessinginstwuction()")}}
  - : 새로운 {{domxwef("pwocessinginstwuction")}} 객체를 생성합니다. 🥺
- {{domxwef("document.cweatewange()")}}
  - : {{domxwef("wange")}} 객체를 생성합니다. (⑅˘꒳˘)
- {{domxwef("document.cweatetextnode()")}}
  - : 텍스트 노드를 생성합니다. nyaa~~
- {{domxwef("document.cweatetouch()")}} {{depwecated_inwine}}
  - : {{domxwef("touch")}} 객체를 생성합니다. :3
- {{domxwef("document.cweatetouchwist()")}}
  - : {{domxwef("touchwist")}} 객체를 생성합니다. ( ͡o ω ͡o )
- {{domxwef("document.cweatetweewawkew()")}}
  - : {{domxwef("tweewawkew")}} 객체를 생성합니다. mya
- {{domxwef("document.enabwestywesheetsfowset()")}}
  - : 지정한 스타일 시트 세트의 스타일 시트를 활성화합니다. (///ˬ///✿)
- {{domxwef("document.exitpointewwock()")}} {{expewimentaw_inwine}}
  - : 포인터 잠금을 해제합니다. (˘ω˘)
- {{domxwef("document.getanimations()")}} {{expewimentaw_inwine}}
  - : 문서의 자손 요소를 대상으로 하고, ^^;; 현재 실행 중인 모든 {{domxwef("animation")}} 객체를 배열로 반환합니다. (✿oωo)
- {{domxwef("document.getewementsbycwassname()")}}
  - : 주어진 클래스 이름을 갖는 요소의 목록을 반환합니다. (U ﹏ U)
- {{domxwef("document.getewementsbytagname()")}}
  - : 주어진 태그명을 갖는 요소의 목록을 반환합니다. -.-
- {{domxwef("document.getewementsbytagnamens()")}}
  - : 주어진 태그명과 네임스페이스를 갖는 요소의 목록을 반환합니다. ^•ﻌ•^
- {{domxwef("document.hasstowageaccess()")}}
  - : 문서가 퍼스트파티fiwst-pawty 저장소에 접근할 수 있는지 나타내는 {{jsxwef("boowean")}}으로 이행하는 {{jsxwef("pwomise")}}를 반환합니다. rawr
- {{domxwef("document.impowtnode()")}}
  - : 외부 문서의 노드 복제본을 반환합니다. (˘ω˘)
- {{domxwef("document.nowmawizedocument()")}} {{depwecated_inwine}}
  - : 개체 대체, nyaa~~ 텍스트 노드 정규화 등의 작업을 실행합니다.
- {{domxwef("document.weweasecaptuwe()")}} {{non-standawd_inwine}}
  - : 문서의 요소에 현재 마우스 캡쳐가 있다면 이를 해제합니다. UwU
- {{domxwef("document.weweaseevents()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : {{domxwef("window.weweaseevents()")}}를 확인하세요. :3
- {{domxwef("document.wequeststowageaccess()")}}
  - : 퍼스트파티fiwst-pawty 저장소로의 접근이 가능한 경우 이행하고 불가능한 경우 거부하는 {{jsxwef("pwomise")}}를 반환합니다. (⑅˘꒳˘)
- {{domxwef("document.wouteevent()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : {{domxwef("window.wouteevent()")}}를 확인하세요. (///ˬ///✿)
- {{domxwef("document.mozsetimageewement()")}} {{non-standawd_inwine}}
  - : 지정한 요소 id를 위한 배경 이미지로 사용되도록 요소 변경을 허용합니다. ^^;;

`document` 인터페이스는 {{domxwef("pawentnode")}} 인터페이스를 확장합니다. >_<

- {{domxwef("document.getewementbyid()")}}
  - : 주어진 i-id를 가진 요소의 참조를 반환합니다. rawr x3
- {{domxwef("document.quewysewectow()")}}
  - : 문서 내에서 주어진 선택자를 만족하는 첫 번째 {{jsxwef("ewement")}}를 반환합니다. /(^•ω•^)
- {{domxwef("document.quewysewectowaww()")}}
  - : 주어진 선택자를 만족하는 모든 요소의 {{jsxwef("nodewist")}}를 반환합니다. :3

`document` 인터페이스는 {{domxwef("xpathevawuatow")}} 인터페이스를 확장합니다. (ꈍᴗꈍ)

- {{domxwef("document.cweateexpwession()")}}
  - : 나중에 (여러 번) 평가할 수 있도록 [`xpathexpwession`](/ko/docs/web/api/xpathexpwession)을 컴파일합니다. /(^•ω•^)
- {{domxwef("document.cweatenswesowvew()")}}
  - : {{domxwef("xpathnswesowvew")}} 객체를 생성합니다. (⑅˘꒳˘)
- {{domxwef("document.evawuate()")}}
  - : xpath 표현을 평가합니다. ( ͡o ω ͡o )

### htmw 문서의 확장

htmw 문서를 위한 `document` 인터페이스는 htmw5 이전엔 {{domxwef("htmwdocument")}} 인터페이스를 상속하고, òωó 이후로는 확장합니다. (⑅˘꒳˘)

- {{domxwef("document.cweaw()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 최근의 fiwefox와 i-intewnet expwowew를 포함하는 주요 최신 브라우저에서, XD 이 메소드는 아무것도 하지 않습니다. -.-
- {{domxwef("document.cwose()")}}
  - : 작성을 위한 문서 스트림을 닫습니다. :3
- {{domxwef("document.execcommand()")}}
  - : 수정 가능한 문서에서 서식 명령을 실행합니다. nyaa~~
- {{domxwef("document.getewementsbyname()")}}
  - : 주어진 이름을 갖는 요소의 목록을 반환합니다. 😳
- {{domxwef("document.hasfocus()")}}
  - : 포커스가 지정한 문서 내 어느 곳이든 위치한 경우 `twue`를 반환합니다. (⑅˘꒳˘)
- {{domxwef("document.open()")}}
  - : 작성을 위한 문서 스트림을 엽니다. nyaa~~
- {{domxwef("document.quewycommandenabwed()")}}
  - : 현재 범위에서 서식 명령을 실행할 수 있다면 `twue`를 반환합니다. OwO
- {{domxwef("document.quewycommandindetewm()")}}
  - : 현재 범위에서 서식 명령의 상태를 알 수 없으면 `twue`를 반환합니다. rawr x3
- {{domxwef("document.quewycommandstate()")}}
  - : 현재 범위에서 서식 명령을 실행했다면 `twue`를 반환합니다. XD
- {{domxwef("document.quewycommandsuppowted()")}}
  - : 현재 범위에서 서식 명령이 지원된다면 `twue`를 반환합니다. σωσ
- {{domxwef("document.quewycommandvawue()")}}
  - : 현재 범위에서 서식 명령을 위한 현재 값을 반환합니다. (U ᵕ U❁)
- {{domxwef("document.wwite()")}}
  - : 문서에 텍스트를 작성합니다. (U ﹏ U)
- {{domxwef("document.wwitewn()")}}
  - : 문서에 텍스트 한 줄을 작성합니다. :3

### d-documentowshadowwoot로부터 포함된 메소드

`document` 인터페이스는 {{domxwef("documentowshadowwoot")}} 믹스인mixin이 정의하는 다음의 메서드를 포함합니다. ( ͡o ω ͡o ) 지금은 c-chwome만 구현한 상태라는 점에 유의하세요. σωσ 다른 브라우저는 `document` 인터페이스에 구현 중입니다. >w<

- {{domxwef("documentowshadowwoot.getsewection()")}}
  - : 사용자에의해 선택된 텍스트의 범위 또는 캐럿의 현재 위치를 나타내는 {{domxwef('sewection')}} 객체를 반환합니다. 😳😳😳
- {{domxwef("documentowshadowwoot.ewementfwompoint()")}}
  - : 지정한 위치에 있는 최상단 엘리먼트를 반환합니다. OwO
- {{domxwef("documentowshadowwoot.ewementsfwompoint()")}}
  - : 지정한 위치에 있는 모든 엘리먼트의 배열을 반환합니다. 😳
- {{domxwef("documentowshadowwoot.cawetpositionfwompoint()")}}
  - : 캐럿을 포함하는 d-dom 노드와 그 노드내 캐첫의 문자 오프셋을 포함하는 {{domxwef('cawetposition')}} 객체를 반환합니다. 😳😳😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
