---
title: 차단된 혼합 콘텐츠가 있는 웹사이트를 고치는 방법
slug: orphaned/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
original_slug: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

Firefox 23부터는 기본적으로 [액티브 혼합 콘텐츠](/ko/docs/Web/Security/Mixed_content#혼합_액티브_콘텐츠)를 차단합니다. 이는 [Chrome](https://security.googleblog.com/2011/06/trying-to-end-mixed-scripting.html?m=1)에서 채택한 방식을 따른 것입니다.

이 페이지는 웹 개발자로서 알아야 할 사항을 설명합니다.

## 웹사이트가 고장날 수 있습니다

웹사이트가 HTTPS 페이지를 제공하는 경우, 이 페이지에서 HTTP를 통해 전달되는 모든 [액티브 혼합 콘텐츠](/ko/docs/Web/Security/Mixed_content#혼합_액티브_콘텐츠)는 기본적으로 차단됩니다. 따라서 사용자에겐 웹사이트가 손상된 것처럼 보일 수 있습니다(iframe 또는 플러그인이 로드되지 않는 경우 등). [패시브 혼합 콘텐츠](/ko/docs/Web/Security/Mixed_content#혼합_패시브디스플레이_콘텐츠)는 기본적으로 표시되긴 하지만, 사용자는 이러한 유형의 콘텐츠도 차단하도록 설정할 수 있습니다.

이미 Chrome부터 혼합 콘텐츠 차단을 시행했기 때문에 웹사이트가 Chrome에서 정상적으로 작동하는 경우, 혼합 콘텐츠 차단 기능이 있는 Firefox에서도 동일하게 작동할 가능성이 높습니다.

어떤 경우든 Firefox에 문제가 있는지 확인하는 가장 좋은 방법은 [최신 Firefox 에디션](https://www.mozilla.org/en-US/firefox/developer/)을 다운로드하고, 검사할 여러 페이지에서 [웹 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)을 열고 ("Security" 메시지 활성화) 웹 사이트에 접속하여 혼합 콘텐츠와 관련된 사항이 보고되는지 확인하는 것입니다. 또는 [SSL-check](https://www.jitbit.com/sslcheck/)나 [Missing Padlock](https://www.missingpadlock.com)과 같은 무료 온라인 크롤러, [HTTPSChecker](https://httpschecker.net/how-it-works)와 같은 데스크톱 크롤러, 아니면 [mcdetect](https://github.com/agis/mcdetect)과 같은 CLI 도구를 사용하여 웹사이트를 재귀적으로 검사하고 안전하지 않은 콘텐츠의 링크를 찾을 수 있습니다. 혼합 콘텐츠에 대한 언급이 없다면 웹사이트는 좋은 상태입니다. 계속해서 멋진 웹사이트를 만드세요!

## 웹사이트를 고치는 방법

혼합 콘텐츠 차단을 피하는 가장 좋은 전략은 모든 콘텐츠를 HTTP가 아닌 HTTPS로 제공하는 것입니다.

**자체 도메인의 경우,** 모든 콘텐츠를 HTTPS로 제공하고 링크를 수정하세요. 콘텐츠의 HTTPS 버전이 이미 존재하는 경우가 많으므로 http\://에서 https\://로 링크에 "s"를 추가하기만 하면 됩니다.

그러나 경우에 따라서 해당 미디어의 경로가 올바르지 않을 수도 있습니다. [linkchecker](https://linkchecker.github.io/linkchecker/)와 같이 이 문제를 해결하는 데 도움이 되는 온라인 및 오프라인 도구(운영 체제에 따라 다름)가 있습니다.

**다른 도메인의 경우,** 사용 할 수 있다면 사이트를 HTTPS 버전으로 사용하세요. HTTPS를 사용할 수 없는 경우, 해당 도메인에 연락하여 HTTPS를 통해 콘텐츠를 제공할 수 있는지 문의해 보세요.
