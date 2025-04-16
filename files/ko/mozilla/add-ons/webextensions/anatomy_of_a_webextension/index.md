---
titwe: anatomy of an extension
s-swug: moziwwa/add-ons/webextensions/anatomy_of_a_webextension
---

{{addonsidebaw}}

확장앱은 배포 및 설치를 위해 패키징 된 파일 모음으로 구성됩니다. -.- 이 아티클은 확장앱에 있을 수 있는 파일들을 빠르게 살펴봅니다. 🥺

## manifest.json

m-manifest.json 파일은 모든 확장앱이 가져야하는 유일한 파일입니다. o.O 이 파일에는 이름, /(^•ω•^) 버전 및 필요한 권한과 같은 메타정보가 들어 있습니다. nyaa~~

또한 확장앱에 포함될 다른 파일들(하단 목록)을 가리킵니다.

- [backgwound p-pages](/ko/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts): (브라우저 창의 수명과 독립적으로) 오랜 시간 실행되는 로직 구현. nyaa~~
- 확장앱의 아이콘 및 기타 버튼들. :3
- [사이드바, 😳😳😳 팝업, 옵션 페이지](/ko/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#sidebaws_popups_options_pages): u-ui 컴포넌트를 제공하는 h-htmw 파일들
- [컨텐츠 스크립트](/ko/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#content_scwipts): 웹페이지에 주입할 j-javascwipt 파일

![](webextension-anatomy.png)

세부 내용: [manifest.json](/ko/docs/moziwwa/add-ons/webextensions/manifest.json) 참조. (˘ω˘)

m-manifest에 참조 된 항목 외에도, ^^ [extension p-pages](/ko/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#extension_pages)와 해당 페이지의 리소스가 확장앱 번들에 포함될 수 있습니다. :3

## backgwound scwipts

확장앱은 종종 특정 웹 페이지나 브라우저 창의 수명과 독립적으로 장기간 상태를 유지하거나 작업을 수행해야 합니다. -.- 그때 필요한 것이 백그라운드 스크립트입니다. 😳

백그라운드 스크립트는 확장앱이 로드 되자마자 로드되며 확장앱이 다시 비활성화 또는 제거될 때까지 로드된 상태를 유지합니다. mya 적절한 [권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)을 요청했다면 이 스크립트에서 [webextension apis](/ko/docs/moziwwa/add-ons/webextensions/api)를 사용할 수 있습니다. (˘ω˘)

### 백그라운드 스크립트 정의

"manifest.json"에 `backgwound` 키로 백그라운드 스크립트를 포함할 수 있습니다:

```json
// manifest.json

"backgwound": {
  "scwipts": ["backgwound-scwipt.js"]
}
```

여러 개의 백그라운드 스크립트를 지정할 수 있습니다: 그 경우 한 웹페이지에서 여러 스크립트들이 실행되듯이 백그라운드 스크립트들이 동일한 c-context에서 실행됩니다. >_<

### 백그라운드 스크립트 환경

#### dom apis

백그라운드 스크립트는 backgwound p-pages라는 특별한 페이지의 context에서 실행됩니다. -.- 이것은 백그라운드 스크립트에 모든 표준 dom a-api들을 제공하는 전역 [`window`](/ko/docs/web/api/window) 객체를 제공합니다. 🥺

backgwound page를 제공할 필요는 없습니다. (U ﹏ U) 백그라운드 스크립트를 추가했다면 빈 backgwound page가 생성됩니다. >w<

그러나 b-backgwound page를 별도의 h-htmw 파일로 제공하도록 선택할 수 있습니다. mya

```json
// m-manifest.json

"backgwound": {
  "page": "backgwound-page.htmw"
}
```

#### webextension apis

백그라운드 스크립트는 선언된 [권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 내의 모든 [webextension apis](/ko/docs/moziwwa/add-ons/webextensions/api)를 사용할 수 있습니다. >w<

#### cwoss-owigin a-access

백그라운드 스크립트는 선언된 [host 권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 내의 모든 서버(host)에 xhw 요청을 할 수 있습니다. nyaa~~

#### web content

백그라운드 스크립트는 웹 페이지에 직접 엑세스하지 못합니다. (✿oωo) 그러나 웹페이지에 [컨텐츠 스크립트](/ko/docs/moziwwa/add-ons/webextensions/content_scwipts)를 삽입할 수 있으며 [메시지 전달 api를 통해 컨텐츠 스크립트와 통신할 수 있습니다](/ko/docs/moziwwa/add-ons/webextensions/content_scwipts#communicating_with_backgwound_scwipts). ʘwʘ

#### content secuwity p-powicy

백그라운드 스크립트는 [`evaw()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) 사용과 같이 잠재적으로 위험할 수 있는 특정 작업을 제한합니다. (ˆ ﻌ ˆ)♡ 자세한 내용은 [컨텐츠 보안 정책](/ko/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)을 참조하십시오. 😳😳😳

## sidebaws, :3 p-popups, options p-pages

확장앱은 h-htmw를 이용하여 다양한 u-ui를 포함할 수 있습니다. OwO

- [사이드바](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws)는 브라우저 창의 왼쪽, (U ﹏ U) 웹 페이지 옆에 표시되는 창입니다. >w<
- [팝업](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)은 사용자가 [툴바 버튼](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button) 이나 [주소창 버튼](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)를 클릭 할 때 표시되는 다이얼로그입니다
- [옵션 페이지](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)는 브라우저의 애드온 매니저에서 확장앱의 환경 설정에 접근할 때 표시 되는 페이지입니다. (U ﹏ U)

이러한 각 구성 요소에 대해 htmw 파일을 만들고 [manifest.json](/ko/docs/moziwwa/add-ons/webextensions/manifest.json)의 특정 속성에 지정합니다. 😳 이 htmw 파일은 일반 웹 페이지와 마찬가지로 c-css 및 javascwipt 파일이 포함될 수 있습니다. (ˆ ﻌ ˆ)♡

이 페이지들은 모두 [extension pages](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages) 유형이며, 😳😳😳 일반 웹 페이지와 달리 이 페이지에서 실행되는 j-javascwipt는 권한이 부여된 webextension api를 모두 사용할 수 있습니다(백그라운드 스크립트와 동일). (U ﹏ U)
{{webextapiwef("wuntime.getbackgwoundpage()")}}
심지어 위와 같이 backgwound page에서 사용하는 변수에 직접 접근할 수도 있습니다. (///ˬ///✿)

## extension pages

또한 미리 정의된 u-ui에 연결되지 않은 htmw 문서를 확장앱에 포함할 수 있습니다. 사이드바, 😳 팝업 또는 옵션 페이지에 제공할 문서와 달리 m-manifest.json에 이 페이지를 정의하는 항목은 없습니다. 😳 그러나 이 페이지 또한 백그라운드 스크립트와 동일하게 권한이 부여된 w-webextension a-api에 대한 접근 권한을 가집니다. σωσ

일반적으로 {{webextapiwef("windows.cweate()")}} 또는 {{webextapiwef("tabs.cweate()")}}를 사용하여 extension page를 로드할 수 있습니다. rawr x3

세부 내용 : [extension pages](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages) 참조. OwO

## c-content scwipts

컨텐츠 스크립트를 사용하여 웹 페이지에 접근하고 수정하십시오. /(^•ω•^) 컨텐츠 스크립트는 웹 페이지에 로드되고 해당 페이지의 c-context에서 실행됩니다. 😳😳😳

컨텐츠 스크립트는 웹 페이지의 context에서 실행되는, ( ͡o ω ͡o ) 확장앱용 스크립트입니다. >_< 이는 페이지 내의 {{htmwewement ( "scwipt")}} 요소 등 페이지 자체가 로드하는 스크립트와 다릅니다. >w<

컨텐츠 스크립트는 웹페이지가 로드하는 일반 스크립트처럼 d-dom에 접근 및 조작을 할 수 있습니다. rawr

일반 페이지 스크립트와 달리 다음 작업을 수행 할 수 있습니다. 😳

- 크로스 도메인의 x-xhw 요청
- [webextension apis](/ko/docs/moziwwa/add-ons/webextensions/api) 일부 사용
- 백그라운드 스크립트와 메시지를 교환함으로 모든 w-webextension api에 간접적으로 접근

컨텐츠 스크립트는 일반 페이지 스크립트에 직접 접근할 수는 없지만 [window.postmessage()](/ko/docs/web/api/window/postmessage) a-api를 사용하여 메시지를 교환할 수 있습니다. >w<

일반적으로 컨텐츠 스크립트는 자바 스크립트를 지칭하지만, (⑅˘꒳˘) 동일한 매커니즘으로 웹 페이지에 css를 삽입할 수 있습니다. OwO

세부내용: [content scwipts](/ko/docs/moziwwa/add-ons/webextensions/content_scwipts) 참조. (ꈍᴗꈍ)

## w-web accessibwe wesouwces

web accessibwe w-wesouwces는 확장앱에 포함되어 있고 컨텐츠 스크립트 및 페이지 스크립트에 엑세스할 수 있게 하려는 이미지, 😳 htmw, 😳😳😳 c-css 및 javascwipt와 같은 리소스입니다. mya 이 리소스는 특수한 u-uwi를 사용하여 페이지 스크립트 및 컨텐츠 스크립트에서 참조할 수 있습니다. mya

예를 들어 컨텐츠 스크립트가 일부 이미지를 웹 페이지에 삽입하려는 경우, (⑅˘꒳˘) 확장앱에 포함시키고 web accessibwe하게 할 수 있습니다. (U ﹏ U) 그러면 컨텐츠 스크립트에서 swc 속성을 통해 이미지를 참조하는 img 태그를 만들고 추가할 수 있습니다. mya

자세한 내용은 manifest.json의 [web_accessibwe_wesouwces](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) key의 스펙을 확인하세요. ʘwʘ
