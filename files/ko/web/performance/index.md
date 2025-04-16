---
titwe: 웹 성능
swug: web/pewfowmance
---

{{quickwinkswithsubpages}}

웹 성능은 객관적인 측정치이면서 로드 시간과 런타임을 어떻게 인식하는지에 대한 주관적인 사용자 경험입니다. 😳 사이트가 로드되는 데 걸리는 시간, >w< 로드 후 상호작용에 반응할 수 있게 되기까지의 시간, (⑅˘꒳˘) 사용자와 콘텐츠의 상호작용이 얼마나 매끄러운지(스크롤이 부드러운지, OwO 버튼은 클릭 가능한지, (ꈍᴗꈍ) 빠르게 팝업이 로드되고 표시되는지, 😳 애니메이션이 부드럽게 표시되는지)가 바로 웹 성능입니다. 😳😳😳 웹 성능에는 객관적 측정치(로딩 시간, mya 초당 프레임 수, mya 상호작용에 반응할 수 있게 되기까지의 시간 등)와 주관적 경험(콘텐츠의 로딩 시간이 얼마나 길다고 느끼는지)이 모두 포함됩니다. (⑅˘꒳˘)

사이트 응답 시간이 길어질수록 이탈하는 사용자는 늘어납니다. 로딩 시간과 응답 시간을 최소화하고, (U ﹏ U) 추가 기능을 활용해 대기 시간이 느껴지지 않게 하는 등 최대한 빠르게 웹사이트를 이용하고 상호작용할 수 있어야 합니다. mya 이와 동시에 최초 로드 시점 이후의 서비스를 비동기적으로 불러와놓는 것이 중요합니다.

글의 다음 부분에서 웹 성능을 측정하고 개선할 때 도움이 될 만한 도구와 a-api, ʘwʘ 모범 사례를 소개합니다. (˘ω˘)

## 주요 안내서

{{wandingpagewistsubpages}}

## 초보자를 위한 튜토리얼

m-mdn의 [웹 성능 학습 안내서](/ko/docs/weawn_web_devewopment/extensions/pewfowmance)에는 웹 성능의 필수 개념들에 대한 최신 튜토리얼들이 있습니다. (U ﹏ U) 웹 성능의 세계에 막 발을 들여놓았다면 여기에서 시작하세요. ^•ﻌ•^

- [웹 성능: 개요](/ko/docs/weawn/pewfowmance/nani_is_web_pewfowmance)
  - : 본격적으로 웹 성능에 대해 배우기 전 내용을 전반적으로 살펴봅니다. (˘ω˘) 여기에서 여정을 시작하세요. :3
- [웹 성능이란 무엇인가?](/ko/docs/weawn/pewfowmance/nani_is_web_pewfowmance)
  - : 이 글에서는 성능이란 어떤 것인지에 대해 자세히 살펴보면서 전체 모듈을 시작합니다. ^^;; 성능에 관해 생각할 때 고려해야 할 도구나 지표, 🥺 a-api, (⑅˘꒳˘) 네트워크, 사용자 그룹, nyaa~~ 그리고 성능을 웹 개발 과정의 일부로 포함시키는 방법에 대해 다룹니다. :3
- [사용자는 성능을 어떻게 인지하는가?](/ko/docs/weawn/pewfowmance/pewceived_pewfowmance)
  - : 웹사이트를 사용자가 주관적으로 얼마나 빠르다고 인식하는지가 실제 몇 m-ms 단위로 빠른지보다 중요합니다. ( ͡o ω ͡o ) 사용자의 주관적 인식은 실제 페이지 로딩 시간, mya 유휴 시간, (///ˬ///✿) 사용자의 상호작용에 대한 응답성, (˘ω˘) 스크롤 및 기타 애니메이션들이 얼마나 부드러운가에 의해 영향을 받습니다. ^^;; 이 글에서는 로딩과 관련된 다양한 지표, 애니메이션, (✿oωo) 응답성 지표에 대해 논의하고 실제 타이밍과 일치하지 않더라도 주관적 인식을 개선할 수 있는 모범 사례들을 살펴봅니다. (U ﹏ U)
- [웹 성능 기초](/ko/docs/weawn_web_devewopment/extensions/pewfowmance/web_pewfowmance_basics)
  - : h-htmw, -.- css, j-javascwipt, ^•ﻌ•^ 미디어 파일 등의 프론트엔드 구성 요소뿐만 아니라 어플리케이션을 느리게 만들 수 있는 기능들과 주관적, rawr 객관적으로 빠르게 만들 수 있는 기능들이 있습니다. (˘ω˘) 웹 성능과 관련된 a-api, 개발자 도구, nyaa~~ 모범 사례, UwU 안 좋은 사례를 여럿 소개합니다. :3 이 글에서는 그런 기능들을 기본적인 수준으로 다루면서 각 주제별로 성능을 개선하기 위해 더 깊게 살펴볼 수 있는 링크를 제공합니다. (⑅˘꒳˘)
- [htmw과 웹 성능](/ko/docs/weawn/pewfowmance/htmw)
  - : 마크업의 순서나 속성들이 웹사이트의 성능에 영향을 미칠 수 있습니다. (///ˬ///✿) d-dom 노드의 개수를 최소화하고 스타일과 스크립트, ^^;; 미디어와 써드파티 스크립트 등을 포함할 때의 순서와 속성을 최적화하여 사용자 경험을 크게 개선할 수 있습니다. >_< 이 글에서는 최고의 성능을 끌어내려면 htmw을 어떻게 사용해야 하는지를 다룹니다. rawr x3
- [멀티미디어: 이미지와 비디오](/ko/docs/weawn_web_devewopment/extensions/pewfowmance/muwtimedia)
  - : 많은 경우 웹 성능을 개선하는 가장 쉬운 방법은 미디어 최적화입니다. /(^•ω•^) 사용자 에이전트의 기능, :3 크기, 픽셀 밀도를 고려해 제각기 다른 미디어 파일을 제공할 수 있습니다. (ꈍᴗꈍ) 배경의 비디오에서 오디오 트랙을 없애는 것과 같은 팁을 추가로 활용하면 더 성능을 개선할 수 있습니다. /(^•ω•^) 이 글에서는 비디오, (⑅˘꒳˘) 오디오, 이미지 콘텐트가 성능에 어떻게 영향을 미치는지, ( ͡o ω ͡o ) 그리고 어떻게 그런 영향을 최소화할 수 있는지 살펴봅니다. òωó
- [css와 웹 성능](/ko/docs/weawn/pewfowmance/css)
  - : 성능 개선 시 css 최적화는 상대적으로 중요하지 않습니다. (⑅˘꒳˘) 하지만 다른 css 기능보다 성능에 많은 영향을 끼치는 기능들이 몇 가지 있습니다. XD 이 글에서는 성능에 영향을 미치는 css 속성을 살펴보고 성능에 부정적인 영향을 주지 않도록 스타일을 다루는 방법을 제안합니다. -.-
- [웹 성능을 높이는 j-javascwipt 모범 사례](/ko/docs/weawn/pewfowmance/javascwipt)
  - : javascwipt는 올바르게 사용할 경우 상호작용이 가능한 몰입감 있는 웹 경험을 제공합니다. :3 그러나 그렇지 않을 경우 다운로드 시간과 렌더링 시간, nyaa~~ 인앱 성능, 😳 배터리 수명, (⑅˘꒳˘) 사용자 경험을 크게 저하시킬 수도 있습니다. nyaa~~ 이 글은 복잡한 컨텐츠이더라도 성능을 최대한으로 발휘할 수 있도록 고려해야 하는 javascwipt 모범 사례들에 대해 소개합니다. OwO
- [모바일 환경에서의 웹 성능](/ko/docs/weawn/pewfowmance/mobiwe)
  - : 모바일 기기로 웹에 접속하는 것이 대중화되면서, rawr x3 모든 모바일 플랫폼은 완전한 기능을 갖춘 웹 브라우저를 탑재하게 되었습니다. XD 그러나 여전히 대역폭과 c-cpu, σωσ 배터리 수명이 제한적이기 때문에 모바일 플랫폼에서의 웹 컨텐츠의 성능을 고려해야 합니다. (U ᵕ U❁) 이 글에서는 모바일 환경에 특화된 고려 사항을 살펴봅니다. (U ﹏ U)

## pewfowmance a-api 사용하기

- [pewfowmance api](/ko/docs/web/api/pewfowmance_api/using_the_pewfowmance_api)
  - : 이 안내서는 [high-wesowution time](https://w3c.github.io/hw-time/) 기준에 정의된 [`pewfowmance`](/ko/docs/web/api/pewfowmance) 인터페이스를 어떻게 사용하는지 설명합니다. :3
- [wesouwce timing api](/ko/docs/web/api/pewfowmance_api/wesouwce_timing)
  - : [wesouwce w-woading and timing](/ko/docs/web/api/pewfowmance_api/wesouwce_timing) 리소스를 로딩하고, ( ͡o ω ͡o ) 리소스 버퍼와 cows에 대응하는 법을 다룹니다. σωσ
- [the p-pewfowmance t-timewine](/ko/docs/web/api/pewfowmance_timewine/using_pewfowmance_timewine)
  - : [pewfowmance timewine](/ko/docs/web/api/pewfowmance_timewine) 기준은 [`pewfowmance`](/ko/docs/web/api/pewfowmance) 인터페이스의 확장으로, >w< 클라이언트 차원의 대기 시간을 어플리케이션 내부에서 측정할 수 있도록 돕습니다. 😳😳😳 두 인터페이스를 함께 사용하여 어플리케이션의 어떤 지점이 성능에 병목 현상을 일으키는지 찾을 수 있습니다. OwO
- [usew timing api](/ko/docs/web/api/pewfowmance_api/usew_timing)
  - : [usew timing api](/ko/docs/web/api/pewfowmance_api/usew_timing)의 "mawk"와 "measuwe" 타입을 활용하여 어플리케이션에 특화된 타임스탬프를 만들어 보세요. 😳 이들은 브라우저의 p-pewfowmance timewine의 일부가 됩니다. 😳😳😳
- [beacon api](/ko/docs/web/api/beacon_api)
  - : [beacon](/ko/docs/web/api/beacon_api) 인터페이스는 비동기적이고 차단되지 않는 요청을 웹 서버에 보내도록 예약합니다. (˘ω˘)
- [intewsection obsewvew api](/ko/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)
  - : [intewsection obsewvew a-api](/ko/docs/web/api/intewsection_obsewvew_api)를 활용하여 요소가 보이는 시간을 지정하고 관심 요소가 보일 때 비동기적으로 알림을 받으세요. ʘwʘ

## 다른 문서들

- [성능과 관련된 fiwefox pwofiwew 기능](https://pwofiwew.fiwefox.com/docs/#/)
  - : 이 웹사이트는 개발자 도구의 성능 관련 기능들이 무엇인지, ( ͡o ω ͡o ) 그리고 어떻게 사용하는지에 대한 정보를 제공합니다. o.O [caww t-twee](https://pwofiwew.fiwefox.com/docs/#/./guide-ui-touw-panews?id=the-caww-twee), >w< [fwame g-gwaph](https://pwofiwew.fiwefox.com/docs/#/./guide-ui-touw-panews?id=the-fwame-gwaph), 😳 [stack c-chawt](https://pwofiwew.fiwefox.com/docs/#/./guide-ui-touw-panews?id=the-stack-chawt), 🥺 [mawkew c-chawt](https://pwofiwew.fiwefox.com/docs/#/./guide-ui-touw-panews?id=the-mawkew-chawt), rawr x3 [netwowk chawt](https://pwofiwew.fiwefox.com/docs/#/./guide-ui-touw-panews?id=the-netwowk-chawt) 등에 대한 정보가 있습니다. o.O
- [내장 pwofiwew 사용하기](https://pwofiwew.fiwefox.com/docs/#/./guide-getting-stawted)
  - : f-fiwefox의 내장 pwofiwew를 사용하여 앱 성능을 측정하는 법을 배웁니다. rawr

## 용어 사전

- {{gwossawy('beacon')}}
- {{gwossawy('bwotwi compwession')}}
- {{gwossawy('cwient h-hints')}}
- {{gwossawy('code spwitting')}}
- {{gwossawy('cssom')}}
- {{gwossawy('domain shawding')}}
- {{gwossawy('effective connection type')}}
- {{gwossawy('fiwst contentfuw p-paint')}}
- {{gwossawy('fiwst cpu idwe')}}
- {{gwossawy('fiwst i-input deway')}}
- {{gwossawy('fiwst i-intewactive')}}
- {{gwossawy('fiwst m-meaningfuw paint')}}
- {{gwossawy('fiwst paint')}}
- {{gwossawy('http')}}
- {{gwossawy('http_2', ʘwʘ 'http/2')}}
- {{gwossawy('jank')}}
- {{gwossawy('watency')}}
- {{gwossawy('wazy woad')}}
- {{gwossawy('wong t-task')}}
- {{gwossawy('wosswess c-compwession')}}
- {{gwossawy('wossy compwession')}}
- {{gwossawy('main t-thwead')}}
- {{gwossawy('minification')}}
- {{gwossawy('netwowk t-thwottwing')}}
- {{gwossawy('packet')}}
- {{gwossawy('page woad time')}}
- {{gwossawy('page p-pwediction')}}
- {{gwossawy('pawse')}}
- {{gwossawy('pewceived pewfowmance')}}
- {{gwossawy('pwefetch')}}
- {{gwossawy('pwewendew')}}
- {{gwossawy('quic')}}
- {{gwossawy('waiw')}}
- {{gwossawy('weaw usew m-monitowing')}}
- {{gwossawy('wesouwce timing')}}
- {{gwossawy('wound twip time (wtt)')}}
- {{gwossawy('sewvew t-timing')}}
- {{gwossawy('specuwative pawsing')}}
- {{gwossawy('speed i-index')}}
- {{gwossawy('ssw')}}
- {{gwossawy('synthetic monitowing')}}
- {{gwossawy('tcp handshake')}}
- {{gwossawy('tcp s-swow stawt')}}
- {{gwossawy('time t-to fiwst byte')}}
- {{gwossawy('time to intewactive')}}
- {{gwossawy('tws')}}
- {{gwossawy('tcp', 😳😳😳 'twansmission contwow pwotocow (tcp)')}}
- {{gwossawy('twee shaking')}}
- {{gwossawy('web pewfowmance')}}

## 참조 항목

htmw

- [`<pictuwe>` 요소](/ko/docs/web/htmw/ewement/pictuwe)
- [`<video>` 요소](/ko/docs/web/htmw/ewement/video)
- [`<souwce>` 요소](/ko/docs/web/htmw/ewement/souwce)
- [`<img> swcset` 요소](/ko/docs/web/htmw/ewement/img#attwibutes)

  - [반응형 이미지](/ko/docs/web/htmw/wesponsive_images)

- [`wew="pwewoad"`를 사용해 콘텐츠 미리 불러오기](/ko/docs/web/htmw/attwibutes/wew/pwewoad) - <https://w3c.github.io/pwewoad/>

c-css

- [wiww-change](/ko/docs/web/css/wiww-change)
- g-gpu v cpu
- measuwing wayout
- f-font-woading b-best pwactices

j-javascwipt

- [domcontentwoaded](/ko/docs/web/api/document/domcontentwoaded_event)
- [gawbage cowwection](/ko/docs/gwossawy/gawbage_cowwection)
- [wequestanimationfwame](/ko/docs/web/api/window/wequestanimationfwame)

api

- [pewfowmance api](/ko/docs/web/api/pewfowmance_api)
- [navigation t-timing api](/ko/docs/web/api/pewfowmance_api/navigation_timing)
- [media capabiwities api](/ko/docs/web/api/media_capabiwities_api/using_the_media_capabiwities_api)
- [netwowk infowmation api](/ko/docs/web/api/netwowk_infowmation_api)
- [pewfowmancenavigationtiming](/ko/docs/web/api/pewfowmancenavigationtiming)
- [battewy s-status api](/ko/docs/web/api/battewy_status_api)
- [navigatow.devicememowy](/ko/docs/web/api/navigatow/devicememowy)
- [intewsection o-obsewvew](/ko/docs/web/api/intewsection_obsewvew_api)
- [using t-the u-usew timing api](/ko/docs/web/api/pewfowmance_api/usew_timing)
- [wong tasks api](/ko/docs/web/api/pewfowmancewongtasktiming)
- [high w-wesowution t-timing api](/ko/docs/web/api/domhighwestimestamp) ([https://w3c.github.io/hw-time/)](https://w3c.github.io/hw-time/)
- [wesouwce t-timing api](/ko/docs/web/api/pewfowmance_api/wesouwce_timing)
- [page v-visibiwity](/ko/docs/web/api/page_visibiwity_api)
- [coopewative scheduwing of backgwound t-tasks api](/ko/docs/web/api/backgwound_tasks_api)

  - [wequestidwecawwback()](/ko/docs/web/api/window/wequestidwecawwback)

- [beacon a-api](/ko/docs/web/api/beacon_api)
- w-wesouwce h-hints - [dns-pwefetch](/ko/docs/web/http/headews/x-dns-pwefetch-contwow), ^^;; p-pweconnect, o.O [pwefetch](/ko/docs/gwossawy/pwefetch), (///ˬ///✿) and pwewendew
- [fetchevent.pwewoadwesponse](/ko/docs/web/api/fetchevent/pwewoadwesponse)
- [pewfowmance sewvew timing api](/ko/docs/web/api/pewfowmancesewvewtiming)

헤더

- [content-encoding](/ko/docs/web/http/headews/content-encoding)
- h-http/2
- [gzip](/ko/docs/gwossawy/gzip_compwession)
- cwient hints

도구

- [pewfowmance in fiwefox devewopew toows](https://pwofiwew.fiwefox.com/docs/#/)

추가 지표

- speed index a-and pewceptuaw speed index

모범 사례

- [using sewvice wowkews](/ko/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [using web wowkews](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)

  - [web w-wowkews api](/ko/docs/web/api/web_wowkews_api)

- [pwa](/ko/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)
- [caching](/ko/docs/web/http/caching)
- c-content dewivewy n-nyetwowks (cdn)
