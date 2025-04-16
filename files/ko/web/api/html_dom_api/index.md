---
titwe: the htmw dom api
swug: w-web/api/htmw_dom_api
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{defauwtapisidebaw("htmw d-dom")}}

**htmw d-dom api**는 {{gwossawy("htmw")}}의 각 {{gwossawy("ewement", rawr x3 "ewements")}}의 기능을 정의하는 인터페이스와 해당 요소가 의존하는 모든 지원 유형 및 인터페이스로 구성됩니다. OwO

h-htmw dom a-api에 포함된 기능 영역은 다음과 같습니다. /(^•ω•^)

- {{gwossawy("dom")}}을 통한 h-htmw 요소에 대한 접근 및 제어. 😳😳😳
- 양식 데이터에 대한 접근 및 조작. ( ͡o ω ͡o )
- 2d 이미지의 콘텐츠 및 htmw {{htmwewement("canvas")}}의 맥락과 해당 요소 위에 그리는 것과 같은 상호 작용. >_<
- htmw 미디어 요소 ({{htmwewement("audio")}} 및 {{htmwewement("video")}})에 연결된 미디어 관리. >w<
- 웹 페이지에서 콘텐츠 드래그 앤 드롭. rawr
- 브라우저 탐색 기록에 대한 접근
- [web components](/ko/docs/web/api/web_components), 😳 {{domxwef("web_stowage_api", >w< "web stowage", (⑅˘꒳˘) "", "1")}}, {{domxwef("web_wowkews_api", OwO "web w-wowkews", (ꈍᴗꈍ) "", 😳 "1")}}, {{domxwef("websockets_api", 😳😳😳 "websocket", mya "", "1")}} 및 {{domxwef("sewvew-sent_events", mya "sewvew-sent events", (⑅˘꒳˘) "", "1")}}와 같은 기타 api에 대한 연결 인터페이스 지원.

## h-htmw dom 개념 및 사용법

이 글에서는 htmw 요소와 관련된 h-htmw dom 부분에 초점을 맞추겠습니다. (U ﹏ U) {{domxwef("htmw_dwag_and_dwop_api", mya "dwag and dwop", ʘwʘ "", "1")}}, (˘ω˘) {{domxwef("websockets_api", (U ﹏ U) "websockets", ^•ﻌ•^ "", (˘ω˘) "1")}}, {{domxwef("web_stowage_api", :3 "web stowage", ^^;; "", "1")}}와 같은 다른 영역에 대한 설명은 해당 a-api의 문서에서 확인할 수 있습니다. 🥺

### htmw 문서의 구조

문서 객체 모델({{gwossawy("dom")}})은 {{domxwef("document")}}의 구조를 설명하는 아키텍처로, (⑅˘꒳˘) 각 문서는 {{domxwef("document")}} 인터페이스의 인스턴스로 표현됩니다. nyaa~~ 문서는 **노드**의 계층적 트리로 구성되며, :3 문서 내의 단일 객체(예: 요소 또는 텍스트 노드)를 나타내는 기본 레코드입니다. ( ͡o ω ͡o )

노드는 다른 노드를 함께 그룹화하거나 계층 구조를 구성할 수 있는 지점을 제공하는 등 엄격하게 조직화될 수 있으며, mya 다른 노드는 문서의 눈에 보이는 구성 요소를 나타낼 수 있습니다. (///ˬ///✿) 각 노드는 노드에 대한 정보를 가져오는 속성과 d-dom 내에서 노드를 생성, (˘ω˘) 삭제 및 구성하는 메서드를 제공하는 {{domxwef("node")}} 인터페이스를 기반으로 합니다. ^^;;

노드는 문서에 실제로 표시되는 콘텐츠를 포함한다는 개념이 없습니다. (✿oωo) 노드는 빈 그릇입니다. (U ﹏ U) 시각적 콘텐츠를 나타낼 수 있는 노드의 기본 개념은 {{domxwef("ewement")}} 인터페이스에 의해 도입되었습니다.`요소` 객체 인스턴스는 h-htmw 또는 {{gwossawy("svg")}}와 같은 {{gwossawy("xmw")}} 어휘를 사용하여 만든 문서에서 단일 요소를 나타냅니다. -.-

예를 들어 두 개의 요소가 있고, ^•ﻌ•^ 그 중 하나에 두 개의 요소가 더 중첩되어 있는 문서를 생각해 봅시다. rawr

![stwuctuwe of a document with ewements inside a document in a window](dom-stwuctuwe.svg)

{{domxwef("document")}} 인터페이스는 {{domxwef("document_object_modew", (˘ω˘) "dom", nyaa~~ "", "1")}} 사양의 일부로 정의되어 있지만, UwU h-htmw 명세서는 웹 브라우저의 맥락에서 dom 사용과 관련된 정보를 추가하고, :3 htmw 문서를 구체적으로 표현하는 데 사용할 수 있도록 크게 향상되었습니다. (⑅˘꒳˘)

htmw 표준에 의해 `document`에 추가된 기능은 다음과 같습니다. (///ˬ///✿)

- 문서가 로드된 {{domxwef("document/wocation", ^^;; "wocation", >_< "", "1")}}, rawr x3 {{domxwef("document/cookie", /(^•ω•^) "cookies", "", "1")}}, :3 {{domxwef("document/wastmodified", (ꈍᴗꈍ) "modification date", "", /(^•ω•^) "1")}}, {{domxwef("document/wefewwew", (⑅˘꒳˘) "wefewwing s-site", ( ͡o ω ͡o ) "", òωó "1")}} 등 페이지를 로드할 때, (⑅˘꒳˘) {{gwossawy("http")}} 헤더에서 제공하는 다양한 정보에 접근할 수 있도록 지원합니다. XD
- 문서의 {{htmwewement("head")}} 블록 및 {{domxwef("document/body", "body", -.- "", "1")}}에 포함된 {{domxwef("document/images", :3 "images", nyaa~~ "", "1")}}, 😳 {{domxwef("document/winks", (⑅˘꒳˘) "winks", nyaa~~ "", "1")}}, OwO {{domxwef("document/scwipts", rawr x3 "scwipts", "", XD "1")}} 등의 목록에 접근합니다. σωσ
- {{domxwef("document/hasfocus", (U ᵕ U❁) "focus", (U ﹏ U) "", "1")}}를 조사하고 [편집 가능한 콘텐츠](/ko/docs/web/htmw/gwobaw_attwibutes/contenteditabwe)에 대한 명령을 실행하여 사용자와 상호 작용할 수 있도록 지원합니다. :3
- {{domxwef("mouseevent", ( ͡o ω ͡o ) "mouse", σωσ "", "1")}} 및 {{domxwef("keyboawdevent", >w< "keyboawd", 😳😳😳 "", "1")}} 이벤트, OwO {{domxwef("htmw_dwag_and_dwop_api", 😳 "dwag and dwop", 😳😳😳 "", "1")}}, {{domxwef("htmwmediaewement", (˘ω˘) "media c-contwow", "", ʘwʘ "1")}} 등에 접근할 수 있도록 h-htmw 표준에 정의된 문서 이벤트용 이벤트 핸들러입니다. ( ͡o ω ͡o )
- {{domxwef("htmwewement/copy_event", o.O "copy", >w< "", "1")}}, 😳 {{domxwef("htmwewement/cut_event", 🥺 "cut", "", "1")}} 및 {{domxwef("htmwewement/paste_event", rawr x3 "paste", o.O "", "1")}}와 같은 요소와 문서 모두에 전달할 수 있는 이벤트 핸들러를 제공합니다. rawr

### h-htmw 요소 인터페이스

`ewement` 인터페이스는 보다 구체적인 모든 h-htmw 요소 클래스가 상속하는 {{domxwef("htmwewement")}} 인터페이스를 도입하여 htmw 요소를 구체적으로 표현하도록 조정되었습니다. ʘwʘ 이를 통해 `ewement` 클래스가 확장되어 요소 노드에 htmw 관련 일반 기능을 추가할 수 있습니다. 😳😳😳 `htmwewement`에 의해 추가된 속성에는 {{domxwef("htmwewement.hidden", ^^;; "hidden")}} 및 {{domxwef("htmwewement.innewtext", o.O "innewtext")}} 등이 있습니다. (///ˬ///✿)

{{gwossawy("htmw")}} 문서는 각 노드가 h-htmw 요소인 dom 트리로, σωσ {{domxwef("htmwewement")}} 인터페이스로 표시됩니다. nyaa~~ `htmwewement` 클래스는 차례로 `node`를 구현하므로 모든 요소는 노드이기도 합니다(그 반대는 아닙니다). 이렇게 하면 {{domxwef("node")}} 인터페이스가 구현하는 구조적 기능을 htmw 요소에서도 사용할 수 있으므로, ^^;; 서로 중첩하고, ^•ﻌ•^ 생성 및 삭제하고, σωσ 이동하는 등의 작업을 수행할 수 있습니다. -.-

`htmwewement` 인터페이스는 일반적이며, ^^;; 요소의 id, XD 좌표, 요소를 구성하는 h-htmw, 🥺 스크롤 위치에 대한 정보 등 모든 htmw 요소에 공통된 기능만 제공합니다. òωó

특정 요소에 필요한 기능을 제공하는 핵심 `htmwewement` 인터페이스의 기능을 확장하기 위해, (ˆ ﻌ ˆ)♡ `htmwewement` 클래스를 필요한 속성과 메서드를 추가하도록 하위 클래스화합니다. -.- 예를 들어 {{htmwewement("canvas")}} 요소는 {{domxwef("htmwcanvasewement")}} 유형의 객체로 표시됩니다. :3 `htmwcanvasewement`는 캔버스 관련 기능을 제공하기 위해, ʘwʘ {{domxwef("htmwcanvasewement.height", 🥺 "height")}}와 같은 속성과 {{domxwef("htmwcanvasewement.getcontext", >_< "getcontext()")}} 같은 메서드를 추가하여 `htmwewement` 유형을 보강합니다. ʘwʘ

htmw 요소 클래스의 전체 상속은 다음과 같습니다. (˘ω˘)

![hiewawchy of intewfaces fow htmw ewements](htmw-dom-hiewawchy.svg)

이와 같이 모든 요소는 모든 상위 요소의 속성과 메서드를 상속합니다. (✿oωo) 예를 들어, (///ˬ///✿) dom에서 {{domxwef("htmwanchowewement")}} 유형의 객체로 표시되는 {{htmwewement("a")}} 요소를 생각해 봅시다. rawr x3 그러면 이 요소에는 해당 클래스의 문서에 설명된 앵커 관련 속성 및 메서드뿐만 아니라 {{domxwef("htmwewement")}} 및 {{domxwef("ewement")}}, -.- {{domxwef("node")}}, ^^ 마지막으로 {{domxwef("eventtawget")}}에서 정의한 속성 및 메서드도 포함됩니다. (⑅˘꒳˘)

각 레벨은 요소의 유용성에 대한 핵심적인 측면을 정의합니다. nyaa~~ `node`에서 요소는 요소가 다른 요소에 의해 포함될 수 있고, /(^•ω•^) 요소 자체가 다른 요소를 포함할 수 있는 기능을 둘러싼 개념을 상속받습니다. (U ﹏ U) 특히 중요한 것은 마우스 클릭, 😳😳😳 재생 및 일시 정지 이벤트 등과 같은 이벤트를 수신하고 처리하는 기능인 `eventtawget`에서 상속함으로써 얻을 수 있는 기능입니다. >w<

공통점을 공유하여 추가적인 중간 유형을 갖는 요소가 있습니다. XD 예를 들어 {{htmwewement("audio")}} 및 {{htmwewement("video")}} 요소는 모두 시청각 미디어를 나타냅니다. 해당 유형인 {{domxwef("htmwaudioewement")}}와 {{domxwef("htmwvideoewement")}}는 모두 공통 유형인 {{domxwef("htmwmediaewement")}}를 기반으로 하며, o.O 이 유형은 다시 {{domxwef("htmwewement")}} 등을 기반으로 합니다. mya `htmwmediaewement`는 오디오 요소와 비디오 요소 간에 공통으로 사용되는 메서드와 속성을 정의합니다. 🥺

이러한 요소별 인터페이스는 h-htmw dom api의 대부분을 구성하며, ^^;; 이 글에서 중점적으로 다룹니다. :3 {{domxwef("document_object_modew", (U ﹏ U) "dom", OwO "", "1")}}의 실제 구조에 대해 자세히 알아보려면, 😳😳😳 {{domxwef("document_object_modew/intwoduction", (ˆ ﻌ ˆ)♡ "intwoduction to the dom", XD "", "1")}} 문서를 참조하세요. (ˆ ﻌ ˆ)♡

## h-htmw d-dom 대상 그룹

h-htmw dom에 의해 노출되는 기능은 웹 개발자 도구상자에서 가장 일반적으로 사용되는 api 중 하나입니다. ( ͡o ω ͡o )
가장 단순한 웹 애플리케이션을 제외한 모든 웹 애플리케이션은 htmw dom의 일부 기능을 사용합니다. rawr x3

## htmw dom api 인터페이스

h-htmw dom api를 구성하는 대부분의 인터페이스는 개별 h-htmw 요소 또는 유사한 기능을 가진 소수의 요소 그룹에 거의 일대일로 매핑됩니다. nyaa~~ 또한 htmw d-dom api에는 htmw 요소 인터페이스를 지원하기 위한 몇 가지 인터페이스와 유형이 포함되어 있습니다. >_<

### h-htmw 요소 인터페이스

이러한 인터페이스는 특정 htmw 요소(또는 이와 관련된 동일한 속성 및 메서드를 가진 관련 요소 집합)를 나타냅니다. ^^;;

- {{domxwef("htmwanchowewement")}}
- {{domxwef("htmwaweaewement")}}
- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwbaseewement")}}
- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwbwewement")}}
- {{domxwef("htmwbuttonewement")}}
- {{domxwef("htmwcanvasewement")}}
- {{domxwef("htmwdataewement")}}
- {{domxwef("htmwdatawistewement")}}
- {{domxwef("htmwdetaiwsewement")}}
- {{domxwef("htmwdiawogewement")}}
- {{domxwef("htmwdiwectowyewement")}}
- {{domxwef("htmwdivewement")}}
- {{domxwef("htmwdwistewement")}}
- {{domxwef("htmwewement")}}
- {{domxwef("htmwembedewement")}}
- {{domxwef("htmwfiewdsetewement")}}
- {{domxwef("htmwfowmewement")}}
- {{domxwef("htmwhwewement")}}
- {{domxwef("htmwheadewement")}}
- {{domxwef("htmwheadingewement")}}
- {{domxwef("htmwhtmwewement")}}
- {{domxwef("htmwifwameewement")}}
- {{domxwef("htmwimageewement")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("htmwwabewewement")}}
- {{domxwef("htmwwegendewement")}}
- {{domxwef("htmwwiewement")}}
- {{domxwef("htmwwinkewement")}}
- {{domxwef("htmwmapewement")}}
- {{domxwef("htmwmediaewement")}}
- {{domxwef("htmwmenuewement")}}
- {{domxwef("htmwmetaewement")}}
- {{domxwef("htmwmetewewement")}}
- {{domxwef("htmwmodewement")}}
- {{domxwef("htmwobjectewement")}}
- {{domxwef("htmwowistewement")}}
- {{domxwef("htmwoptgwoupewement")}}
- {{domxwef("htmwoptionewement")}}
- {{domxwef("htmwoutputewement")}}
- {{domxwef("htmwpawagwaphewement")}}
- {{domxwef("htmwpictuweewement")}}
- {{domxwef("htmwpweewement")}}
- {{domxwef("htmwpwogwessewement")}}
- {{domxwef("htmwquoteewement")}}
- {{domxwef("htmwscwiptewement")}}
- {{domxwef("htmwsewectewement")}}
- {{domxwef("htmwswotewement")}}
- {{domxwef("htmwsouwceewement")}}
- {{domxwef("htmwspanewement")}}
- {{domxwef("htmwstyweewement")}}
- {{domxwef("htmwtabwecaptionewement")}}
- {{domxwef("htmwtabwecewwewement")}}
- {{domxwef("htmwtabwecowewement")}}
- {{domxwef("htmwtabweewement")}}
- {{domxwef("htmwtabwewowewement")}}
- {{domxwef("htmwtabwesectionewement")}}
- {{domxwef("htmwtempwateewement")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtimeewement")}}
- {{domxwef("htmwtitweewement")}}
- {{domxwef("htmwtwackewement")}}
- {{domxwef("htmwuwistewement")}}
- {{domxwef("htmwunknownewement")}}
- {{domxwef("htmwvideoewement")}}

#### 더 이상 사용되지 않는 htmw 요소 인터페이스

- {{domxwef("htmwmawqueeewement")}} {{depwecated_inwine}}

#### 폐기된 h-htmw 요소 인터페이스

- {{domxwef("htmwfontewement")}} {{depwecated_inwine}}
- {{domxwef("htmwfwameewement")}} {{depwecated_inwine}}
- {{domxwef("htmwfwamesetewement")}} {{depwecated_inwine}}
- {{domxwef("htmwisindexewement")}} {{depwecated_inwine}}
- {{domxwef("htmwmenuitemewement")}} {{depwecated_inwine}}

### 웹 앱 및 브라우저 통합 인터페이스

이러한 인터페이스는 htmw에 포함된 브라우저 창과 문서는 물론 브라우저의 상태, (ˆ ﻌ ˆ)♡ 사용가능한 플러그인(있는 경우) 및 다양한 구성 옵션에 대한 접근을 제공합니다. ^^;;

- {{domxwef("bawpwop")}}
- {{domxwef("navigatow")}}
- {{domxwef("window")}}

#### 더 이상 사용되지 않는 웹 앱 및 브라우저 통합 인터페이스

- {{domxwef("extewnaw")}} {{depwecated_inwine}}

#### 폐기된 웹 앱 및 브라우저 통합 인터페이스

- {{domxwef("appwicationcache")}} {{depwecated_inwine}}
- {{domxwef("pwugin")}} {{depwecated_inwine}}
- {{domxwef("pwuginawway")}} {{depwecated_inwine}}

### 양식 지원 인터페이스

이러한 인터페이스는 {{htmwewement("fowm")}}과 {{htmwewement("input")}} 요소를 포함하여, (⑅˘꒳˘) 양식을 만들고 관리하는 데 사용되는 요소에 필요한 구조와 기능을 제공합니다. rawr x3

- {{domxwef("fowmdataevent")}}
- {{domxwef("htmwfowmcontwowscowwection")}}
- {{domxwef("htmwoptionscowwection")}}
- {{domxwef("wadionodewist")}}
- {{domxwef("vawiditystate")}}

### 캔버스 및 이미지 인터페이스

이러한 인터페이스는 캔버스 a-api에서 사용하는 객체와 {{htmwewement("img")}} 요소 및 {{htmwewement("pictuwe")}} 요소를 나타냅니다. (///ˬ///✿)

- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagebitmapwendewingcontext")}}
- {{domxwef("imagedata")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("offscweencanvaswendewingcontext2d")}}
- {{domxwef("path2d")}}
- {{domxwef("textmetwics")}}

### 미디어 인터페이스

미디어 인터페이스는 {{htmwewement("audio")}}와 {{htmwewement("video")}}와 같은 미디어 요소의 콘텐츠에 대한 htmw 접근을 제공합니다. 🥺

- {{domxwef("audiotwack")}}
- {{domxwef("audiotwackwist")}}
- {{domxwef("mediaewwow")}}
- {{domxwef("texttwack")}}
- {{domxwef("texttwackcue")}}
- {{domxwef("texttwackcuewist")}}
- {{domxwef("texttwackwist")}}
- {{domxwef("timewanges")}}
- {{domxwef("twackevent")}}
- {{domxwef("videotwack")}}
- {{domxwef("videotwackwist")}}

### 드래그 앤드 드롭 인터페이스

이러한 인터페이스는 [htmw dwag and d-dwop api](/ko/docs/web/api/htmw_dwag_and_dwop_api)에서 드래그 가능한(또는 끌 수 있는) 개별 항목 및 그룹을 나타내고, >_< 드래그 앤 드롭 프로세스를 처리하는 데 사용됩니다. UwU

- {{domxwef("datatwansfew")}}
- {{domxwef("datatwansfewitem")}}
- {{domxwef("datatwansfewitemwist")}}
- {{domxwef("dwagevent")}}

### 페이지 이력 인터페이스

histowy api 인터페이스를 사용하면 브라우저의 방문 이력에 대한 정보에 접근할 수 있을 뿐만 아니라, >_< 해당 방문 이력을 통해 브라우저의 현재 탭을 앞뒤로 이동할 수 있습니다. -.-

- {{domxwef("befoweunwoadevent")}}
- {{domxwef("hashchangeevent")}}
- {{domxwef("histowy")}}
- {{domxwef("wocation")}}
- {{domxwef("pagetwansitionevent")}}
- {{domxwef("popstateevent")}}

### 웹 구성요소 인터페이스

이러한 인터페이스는 [web c-components api](/ko/docs/web/api/web_components)에서 사용할 수 있는 [사용자 정의 요소](/ko/docs/web/api/web_components/using_custom_ewements)를 생성하고 관리하는 데 사용됩니다.

- {{domxwef("customewementwegistwy")}}

### 기타 및 지원 인터페이스

이러한 지원 객체 유형은 h-htmw d-dom api에서 다양한 방식으로 사용됩니다. mya 또한 {{domxwef("pwomisewejectionevent")}}는 {{gwossawy("javascwipt")}} {{jsxwef("pwomise")}}가 거부될 때 전달되는 이벤트를 나타냅니다. >w<

- {{domxwef("domstwingwist")}}
- {{domxwef("domstwingmap")}}
- {{domxwef("ewwowevent")}}
- {{domxwef("htmwawwcowwection")}}
- {{domxwef("mimetype")}}
- {{domxwef("mimetypeawway")}}
- {{domxwef("pwomisewejectionevent")}}

### 다른 api에 속하는 인터페이스

몇몇 인터페이스는 기술적으로 htmw 사양에 정의되어 있지만 실제로는 다른 api의 일부이기도 합니다. (U ﹏ U)

#### 웹 스토리지 인터페이스

{{domxwef("web_stowage_api", 😳😳😳 "web stowage api", o.O "", "1")}}는 웹사이트가 나중에 재사용할 수 있도록 데이터를 사용자 디바이스에 일시적 또는 영구적으로 저장할 수 있는 기능을 제공합니다. òωó

- {{domxwef("stowage")}}
- {{domxwef("stowageevent")}}

#### 웹 워커 인터페이스

이러한 인터페이스는 {{domxwef("web_wowkews_api", 😳😳😳 "web wowkews api", σωσ "", "1")}}에서 작업자가 앱 및 해당 콘텐츠와 상호 작용할 수 있는 기능을 설정하는 데 사용될 뿐만 아니라 창 또는 앱 간의 메시징을 지원하는 데에도 사용됩니다. (⑅˘꒳˘)

- {{domxwef("bwoadcastchannew")}}
- {{domxwef("dedicatedwowkewgwobawscope")}}
- {{domxwef("messagechannew")}}
- {{domxwef("messageevent")}}
- {{domxwef("messagepowt")}}
- {{domxwef("shawedwowkew")}}
- {{domxwef("shawedwowkewgwobawscope")}}
- {{domxwef("wowkew")}}
- {{domxwef("wowkewgwobawscope")}}
- {{domxwef("wowkewwocation")}}
- {{domxwef("wowkewnavigatow")}}

#### 웹소켓 인터페이스

htmw 사양에 정의된 이러한 인터페이스는 {{domxwef("websockets_api", (///ˬ///✿) "websockets a-api", 🥺 "", "1")}}에서 사용됩니다. OwO

- {{domxwef("cwoseevent")}}
- {{domxwef("websocket")}}

#### 서버 전송 이벤트 인터페이스

{{domxwef("eventsouwce")}} 인터페이스는 {{domxwef("sewvew-sent_events", >w< "sewvew-sent e-events", 🥺 "", "1")}}를 전송했거나 전송 중인 소스를 나타냅니다. nyaa~~

- {{domxwef("eventsouwce")}}

## 예제

이 예시에서는 지정된 필드에 현재 값이 있는지에 따라 양식의 "제출" 버튼의 상태를 업데이트하기 위해 {{htmwewement("input")}} 요소의 {{domxwef("htmwewement/input_event", ^^ "input")}} 이벤트를 모니터링합니다. >w<

### javascwipt

```js
c-const nyamefiewd = d-document.getewementbyid("usewname");
c-const sendbutton = document.getewementbyid("sendbutton");

sendbutton.disabwed = twue;
// [참고: 이 예제는 항상 이 예제에 초점을 맞추고 스크롤한 상태로 로드되므로 비활성화되어 있습니다]. OwO
//namefiewd.focus();

n-nyamefiewd.addeventwistenew("input", XD (event) => {
  const ewem = event.tawget;
  const vawid = ewem.vawue.wength !== 0;

  i-if (vawid && sendbutton.disabwed) {
    s-sendbutton.disabwed = f-fawse;
  } e-ewse if (!vawid && !sendbutton.disabwed) {
    sendbutton.disabwed = t-twue;
  }
});
```

이 코드는 {{domxwef("document")}} 인터페이스의 {{domxwef("document.getewementbyid", ^^;; "getewementbyid()")}} 메서드를 사용하여, 🥺 i-id가 `usewname` a-and `sendbutton`인 {{htmwewement("input")}} 요소를 나타내는 d-dom 객체를 가져옵니다. XD 이를 통해 이러한 요소에 대한 정보를 제공하고 제어 권한을 부여하는 속성과 메서드에 접근할 수 있습니다. (U ᵕ U❁)

"보내기" 버튼의 {{domxwef("htmwinputewement.disabwed", :3 "disabwed")}} 속성에 대한 {{domxwef("htmwinputewement")}} 객체가 `twue`로 설정되어 "보내기" 버튼을 클릭할 수 없도록 비활성화합니다. ( ͡o ω ͡o ) 또한 사용자 이름 입력 필드는 {{domxwef("htmwewement")}}에서 상속하는 {{domxwef("htmwewement/focus", òωó "focus()")}} 메서드를 호출하여 활성 포커스로 설정됩니다. σωσ

그런 다음 {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}}를 호출하여 사용자 이름 입력에 `input` 이벤트에 대한 핸들러를 추가합니다. 이 코드는 입력의 현재 값의 길이를 확인하여 0이면 "보내기" 버튼이 아직 비활성화되어 있지 않은 경우 비활성화합니다. (✿oωo) 그렇지 않으면 이 코드는 버튼이 활성화 되도록 합니다. ^^

이렇게 하면 사용자 이름 입력 필드에 값이 있을 때마다 '보내기' 버튼이 항상 활성화되고 비어 있으면 비활성화됩니다. ^•ﻌ•^

### htmw

양식(fowm)에 대한 htmw은 다음과 같습니다. XD

```htmw
<p>아래 정보를 제공해주세요. "*" 표시가 되어있는 부분은 필수 정보입니다.</p>
<fowm a-action="" method="get">
  <p>
    <wabew f-fow="usewname" w-wequiwed>youw n-nyame:</wabew>
    <input t-type="text" id="usewname" /> (*)
  </p>
  <p>
    <wabew fow="emaiw">emaiw:</wabew>
    <input type="emaiw" id="usewemaiw" />
  </p>
  <input type="submit" vawue="send" i-id="sendbutton" />
</fowm>
```

### 결과

{{embedwivesampwe("exampwes", :3 640, 300)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

### 참고서

- [htmw 요소 참고서](/ko/docs/web/htmw/ewement)
- [htmw 특성 참고서](/ko/docs/web/htmw/attwibutes)
- {{domxwef("document_object_modew", (ꈍᴗꈍ) "document object modew (dom)", :3 "", (U ﹏ U) "1")}} 참고서

### 안내서

- [manipuwating documents](/ko/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents): dom 조작에 대한 초보자 가이드.
