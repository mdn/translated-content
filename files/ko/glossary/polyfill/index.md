---
title: Polyfill
slug: Glossary/Polyfill
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

폴리필은 기본적으로 지원하지 않는 이전 브라우저에서 최신 기능을 제공하는 데 필요한 코드 (일반적으로 웹의 JavaScript)입니다.

예를 들어, 폴리필은 독점 IE 필터를 사용하여 IE7에서 {{cssxref("text-shadow")}}의 기능을 모방하거나, JavaScript를 사용해 스타일을 적절하게 동적으로 조정함으로써 rem 단위 또는 미디어쿼리를 모방하거나, 또는 추가적으로 필요한 부분에 사용될 수 있습니다.

폴리필만을 단독으로 사용하지 않는 이유는 더 나은 기능과 성능 때문입니다. API의 기본 구현은 폴리필보다 더 많은 작업을 수행 할 수 있고 더 빠릅니다. 예를 들어, [Object.create 폴리필](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create#see_also)에는 Object.create 구현에서 가능한 기능만 포함됩니다.

다른 경우에, 폴리필은 브라우저가 다른 방식으로 동일한 기능을 구현하는 문제를 해결하는 데 사용됩니다. 폴리필은 특정 브라우저의 비표준 기능을 사용하여 JavaScript에 기능에 접근할 수 있는 표준 방법을 제공합니다. 오늘날은 매우 드물지만 각 브라우저가 JavaScript를 매우 다르게 구현했던 IE6, Netscape 시절엔 이런 이유로 폴리필을 활용했습니다. [JQuery의 첫번째 버전](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js)은 폴리필의 초기 예입니다. 폴리필은 본질적으로 JavaScript 개발자에게 모든 브라우저에서 작동하는 단일 공통 API를 제공할 수 있도록 기본적으로 브라우저 별 해결 방법을 모아둔 것입니다. 당시 JavaScript 개발자는 웹 사이트가 모든 장치에서 작동하게 만드는 데 큰 문제를 안고 있었습니다. 그 이유로, 브라우저 간의 불일치가 너무 커서 웹 사이트를 근본적으로 다르게 프로그래밍해야 하고, 사용자 브라우저에 따라 매우 다른 사용자 인터페이스를 가져야 했기 때문입니다. 따라서 JavaScript 개발자는 모든 브라우저에서 거의 일관되게 작동하는 극소수의 JavaScript API에만 접근할 수 있었습니다. 오늘날 브라우저 별 구현을 처리하기 위해 폴리필을 사용하는 것은 덜 일반적입니다. 왜냐하면, 최신 브라우저는 대부분 표준 의미 체계에 따라 광범위한 API 세트를 구현하기 때문입니다.

## 같이 보기

- 폴리필이란 용어를 만든 Remy Sharp의 [폴리필이란?](https://remysharp.com/2010/10/08/what-is-a-polyfill) 글
