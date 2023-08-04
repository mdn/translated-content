---
title: Polyfill
slug: Glossary/Polyfill
---

polyfill은 기본적으로 지원하지 않는 이전 브라우저에서 최신 기능을 제공하는 데 필요한 코드 (일반적으로 웹의 JavaScript)입니다.

예를 들어, Silverlight 플러그인을 사용하여 Microsoft Internet Explorer 7에서 HTML Canvas 요소의 기능을 모방하거나 CSS rem 단위 또는 {{cssxref("text-shadow")}}를 모방하는 등 필요한 모든 것에 polyfill을 사용할 수 있습니다.

polyfill이 독점적으로 사용되지 않는 이유는 더 나은 기능성과 더 나은 성능을 위해서 입니다. API의 기본 구현은 polyfill보다 더 많은 작업을 수행 할 수 있고 더 빠릅니다. 예를 들어 [Object.create polyfill](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill)에는Object.create 구현에서 가능한 기능 만 포함됩니다.

다른 경우, 폴리 필은 브라우저가 다른 방식으로 동일한 기능을 구현하는 문제를 해결하는 데 사용됩니다. 폴리 필은 특정 브라우저에서 비표준 기능을 사용하여 JavaScript에 기능에 액세스 할 수있는 표준 준수 방법을 제공합니다. 폴리 필링에 대한 이러한 이유는 오늘날 매우 드물지만 각 브라우저가 Javascript를 매우 다르게 구현 한 IE6, Netscape 및 NNav 시대에 특히 널리 퍼졌습니다. [JQuery의 첫번째 버전](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js)은 폴리 필의 초기 예입니다. JavaScript 개발자는 모든 브라우저에서 작동하는 단일 공통 API를 가질 수 있도록 기본적으로 브라우저 별 해결 방법을 편집 한 것입니다. 당시 자바 스크립트 개발자는 웹 사이트가 완전히 다른 방식으로 프로그래밍되어야하고 사용자의 브라우저에 따라 다른 사용자 인터페이스를 가져야하는 브라우저 간 불일치로 인해 모든 장치에서 웹 사이트를 작동 시키려고 노력하고있었습니다. . 따라서 JavaScript 개발자는 모든 브라우저에서 거의 일관되게 작동하는 아주 작은 소수의 JavaScript API에만 액세스 할 수있었습니다. 현대 브라우저는 대부분 표준 시맨틱에 따라 광범위한 API 세트를 구현하기 때문에 폴리 필을 사용하여 브라우저 별 구현을 처리하는 것은 오늘날 실제로 존재하지 않습니다.

## Learn more

### General knowledge

- [What is a polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill) (article by Remy Sharp, originator of the term)
