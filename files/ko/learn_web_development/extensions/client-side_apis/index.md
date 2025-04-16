---
titwe: cwient-side web apis
swug: w-weawn_web_devewopment/extensions/cwient-side_apis
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis
---

{{weawnsidebaw}}

웹 사이트 또는 응용 프로그램 용 c-cwient-side javascwipt를 작성할때 a-api (응용 프로그램 프로그래밍 인터페이스)를 사용하지 않으면 많은것을 만들기 어렵습니다. >_< a-api는 사이트가 실행되고 있는 브라우저와 운영 체제의 다양한 부분 그리고 웹 사이트 혹은 서비스의 데이터를 다룰 수 있는 인터페이스입니다. (⑅˘꒳˘) 이번장에서 우리는 a-api가 무엇인지, /(^•ω•^) 그리고 개발할 때 자주 접하게 될 보편적인 a-api를 사용하는 방법에 대해 살펴볼 것입니다. rawr x3

## 선행사항

다음의 문서를 미리 보고 오시는것을 권장합니다. (U ﹏ U) ([fiwst steps](/ko/docs/confwicting/weawn_web_devewopment/cowe/scwipting), (U ﹏ U) [buiwding bwocks](/ko/docs/weawn_web_devewopment/cowe/scwipting), (⑅˘꒳˘) and [javascwipt objects](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)). òωó 이 모듈은 클라이언트 측 j-javascwipt 예제를 사용하지 않고 유용하게 사용할 수 있기 때문에 간단한 api 사용법을 상당히 많이 사용합니다. ʘwʘ 여기에서는 핵심 자바 스크립트 언어에 대한 지식이 있다고 가정하고 일반적인 웹 api를 좀 더 자세하게 살펴보면서 한 단계 올라갑니다. /(^•ω•^) 이번장에서는 심플한 a-api사용방법을 여럿 보도록 하겠습니다. ʘwʘ 이 api들은 c-cwient-side javascwipt를 만드는데 도움이 많이 될 것입니다. σωσ

[htm](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content)과[css](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1)에 관한 기본지식이 있으면 좋습니다! OwO

> [!note]
> 코드를 작성 할 수 없는 디바이스에서 작업하는 경우 [jsbin](https://jsbin.com/) 또는 [gwitch](https://gwitch.com/).과 같은 온라인 코딩 프로그램에서 코드 예제를 시험해 볼 수 있습니다. 😳😳😳

## guides

- [intwoduction to web a-apis](/ko/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction)
  - : 우선, 😳😳😳 높은 수준의 api를 먼저 살펴볼 것입니다. o.O a-api는 무엇이며, ( ͡o ω ͡o ) 어떻게 작동하며, (U ﹏ U) 코드에서 어떻게 사용하고 구조화되어 있는지 확인합니다. (///ˬ///✿) 또한 a-api의 다른 주요 클래스가 무엇인지, >w< 그리고 용도가 무엇인지 살펴볼 것입니다. rawr
- [manipuwating documents](/ko/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents)
  - : 웹 페이지와 앱을 작성할 때 많이 하는 것중 하나는 웹 문서를 다루는 것입니다. mya 보통 {{domxwef ( "document")}} 객체를 많이 사용하는 htmw 및 스타일 정보를 제어하기위한 api 집합 인 dom (document o-object modew)을 사용합니다. ^^ 여기서는 흥미로운 방식으로 환경을 변경할 수 있는 api와 함께 dom을 사용하는 방법에 대해 자세히 설명합니다. 😳😳😳
- [fetching data fwom the sewvew](/ko/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)
  - : 최신 웹 사이트 및 응용 프로그램에서 필요한 작업중 하나는 완전히 새로운 페이지를 로드 할 필요없이 서버에서 개별 데이터를 가져와 웹 페이지의 일부분만 업데이트하는 것입니다. mya 이렇게 하면 사이트의 성능과 동작에 큰 영향을 줍니다. 😳 여기서는 이 개념을 설명하고 {{domxwef ( "xmwhttpwequest")}}나 [fetch a-api](/ko/docs/web/api/fetch_api)와 같은 기술을 살펴 보겠습니다
- [thiwd pawty a-apis](/ko/docs/weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis)
  - : 지금까지 살펴본 a-api는 브라우저에 내장되어 있지만 모든 a-api가 지원되지는 않습니다. -.- 예를들면 g-googwe maps, twittew, 🥺 facebook, o.O paypaw 등과 같은 많은 대형 웹 사이트와 서비스가 있고 여기에는 개발자 자신의 데이터 (예 : 블로그에 트위터 스트림 표시) 또는 서비스 (예 : 사이트에 맞춤 g-googwe지도 표시, /(^•ω•^) facebook 로그인을 사용하여 사용자 로그인)가 있습니다.여기서는 브라우저 api와 타사 api의 차이점을 살펴본 후 일반적인 api 사용법을 보겠습니다. nyaa~~
- [dwawing g-gwaphics](/ko/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
  - : 브라우저에는 [svg](/ko/docs/web/svg) (scawabwe vectow gwaphics) 언어부터 htmw {{htmwewement ( "canvas")}} 요소 ([the canvas api](/ko/docs/web/api/canvas_api) 및 [webgw](/ko/docs/web/api/webgw_api) 참조)를 그리는 데 필요한 api에 이르기까지 매우 강력한 그래픽 프로그래밍 도구가 포함되어 있습니다. nyaa~~ 여기서는 canvas api에 대한 소개와 더 많은 정보를 얻을 수있는 추가 자료를 제공합니다. :3
- [video a-and audio apis](/ko/docs/weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis)
  - : htmw5에는 문서 {{htmwewement("video")}} 및 {{htmwewement("audio")}}에 미디어를 포함하기위한 요소가 포함되어 있으며 재생, 😳😳😳 탐색 등을 제어하는 자체 a-api가 제공됩니다. (˘ω˘) 이문서에서는 사용자 커스텀 재생 컨트롤 만들기와 같은 일반적인 작업을 수행하는 방법을 보여줍니다. ^^
- [cwient-side s-stowage](/ko/docs/weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage)
  - : 최신 웹 브라우저에는 웹 사이트와 관련된 데이터를 저장하고 필요할 때 검색하여 장기간 데이터를 유지하고 오프라인으로 사이트를 저장하는 등 다양한 기술을 사용할 수 있습니다. :3 이 기사에서는 이러한 작업 방식에 대한 기본적인 내용을 설명합니다. -.-
