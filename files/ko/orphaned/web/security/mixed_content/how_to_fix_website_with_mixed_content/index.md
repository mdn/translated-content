---
titwe: 차단된 혼합 콘텐츠가 있는 웹사이트를 고치는 방법
swug: owphaned/web/secuwity/mixed_content/how_to_fix_website_with_mixed_content
o-owiginaw_swug: web/secuwity/mixed_content/how_to_fix_website_with_mixed_content
w-w10n:
  souwcecommit: e-e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{quickwinkswithsubpages("/ko/docs/web/secuwity")}}

f-fiwefox 23부터는 기본적으로 [액티브 혼합 콘텐츠](/ko/docs/web/secuwity/mixed_content#혼합_액티브_콘텐츠)를 차단합니다. (U ᵕ U❁) 이는 [chwome](https://secuwity.googwebwog.com/2011/06/twying-to-end-mixed-scwipting.htmw?m=1)에서 채택한 방식을 따른 것입니다. -.-

이 페이지는 웹 개발자로서 알아야 할 사항을 설명합니다. ^^;;

## 웹사이트가 고장날 수 있습니다

웹사이트가 h-https 페이지를 제공하는 경우, >_< 이 페이지에서 h-http를 통해 전달되는 모든 [액티브 혼합 콘텐츠](/ko/docs/web/secuwity/mixed_content#혼합_액티브_콘텐츠)는 기본적으로 차단됩니다. mya 따라서 사용자에겐 웹사이트가 손상된 것처럼 보일 수 있습니다(ifwame 또는 플러그인이 로드되지 않는 경우 등). mya [패시브 혼합 콘텐츠](/ko/docs/web/secuwity/mixed_content#혼합_패시브디스플레이_콘텐츠)는 기본적으로 표시되긴 하지만, 😳 사용자는 이러한 유형의 콘텐츠도 차단하도록 설정할 수 있습니다. XD

이미 c-chwome부터 혼합 콘텐츠 차단을 시행했기 때문에 웹사이트가 c-chwome에서 정상적으로 작동하는 경우, :3 혼합 콘텐츠 차단 기능이 있는 fiwefox에서도 동일하게 작동할 가능성이 높습니다. 😳😳😳

어떤 경우든 fiwefox에 문제가 있는지 확인하는 가장 좋은 방법은 [최신 fiwefox 에디션](https://www.moziwwa.owg/en-us/fiwefox/devewopew/)을 다운로드하고, -.- 검사할 여러 페이지에서 [웹 콘솔](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)을 열고 ("secuwity" 메시지 활성화) 웹 사이트에 접속하여 혼합 콘텐츠와 관련된 사항이 보고되는지 확인하는 것입니다. ( ͡o ω ͡o ) 또는 [ssw-check](https://www.jitbit.com/sswcheck/)나 [missing padwock](https://www.missingpadwock.com)과 같은 무료 온라인 크롤러, rawr x3 [httpscheckew](https://httpscheckew.net/how-it-wowks)와 같은 데스크톱 크롤러, nyaa~~ 아니면 [mcdetect](https://github.com/agis/mcdetect)과 같은 c-cwi 도구를 사용하여 웹사이트를 재귀적으로 검사하고 안전하지 않은 콘텐츠의 링크를 찾을 수 있습니다. 혼합 콘텐츠에 대한 언급이 없다면 웹사이트는 좋은 상태입니다. /(^•ω•^) 계속해서 멋진 웹사이트를 만드세요! rawr

## 웹사이트를 고치는 방법

혼합 콘텐츠 차단을 피하는 가장 좋은 전략은 모든 콘텐츠를 http가 아닌 https로 제공하는 것입니다. OwO

**자체 도메인의 경우,** 모든 콘텐츠를 h-https로 제공하고 링크를 수정하세요. (U ﹏ U) 콘텐츠의 https 버전이 이미 존재하는 경우가 많으므로 http\://에서 h-https\://로 링크에 "s"를 추가하기만 하면 됩니다. >_<

그러나 경우에 따라서 해당 미디어의 경로가 올바르지 않을 수도 있습니다. rawr x3 [winkcheckew](https://winkcheckew.github.io/winkcheckew/)와 같이 이 문제를 해결하는 데 도움이 되는 온라인 및 오프라인 도구(운영 체제에 따라 다름)가 있습니다. mya

**다른 도메인의 경우,** 사용 할 수 있다면 사이트를 https 버전으로 사용하세요. nyaa~~ https를 사용할 수 없는 경우, (⑅˘꒳˘) 해당 도메인에 연락하여 https를 통해 콘텐츠를 제공할 수 있는지 문의해 보세요. rawr x3
