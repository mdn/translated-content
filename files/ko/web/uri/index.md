---
title: URI
slug: Web/URI
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

**통합 자원 식별자, URI** 는 웹상의 "리소스"를 식별하는 데 사용됩니다.
URI는 일반적으로 [HTTP](/ko/docs/Web/HTTP) 요청의 목표로 사용되며, 이때 URI는 문서, 사진, 이진 데이터 등과 같은 리소스의 위치를 나타냅니다.
가장 일반적인 URI 유형은 통합 자원 위치자 {{Glossary("URL")}} 로, 흔히 웹 주소 라고 불립니다.

URI는 단순히 리소스를 가져오는 것 외에도 다양한 동작을 수행하도록 사용할 수 있습니다. 예를 들어 HTML `<a>` 링크의 [`href`](/ko/docs/Web/HTML/Reference/Elements/a#href) 속성처럼 URI가 사용될 경우, 이메일 클라이언트를 열거나 문자 메시지를 보내거나 JavaScript를 실행하는 등의 동작을 트리거할 수도 있습니다.

## 참고서

[URI 참고서](/ko/docs/Web/URI/Reference) 에서는 URI를 구성하는 요소들에 대한 자세한 내용을 제공합니다.

- [스킴](/ko/docs/Web/URI/Reference/Schemes)
  - : `:` 자 앞에 오는 URI의 첫 번째 부분으로, 브라우저가 리소스를 가져올 때 사용해야 하는 프로토콜을 나타냅니다.
- [권한](/ko/docs/Web/URI/Reference/Authority)
  - : 스킴 다음, 경로 이전에 위치하는 부분입니다.
    `user` 정보, `host`, `port`로 구성된 최대 세 가지 요소를 포함할 수 있습니다.
- [경로](/ko/docs/Web/URI/Reference/Path)
  - : 권한 뒤에 오는 부분입니다.
    일반적으로 계층적 형태로 구성된 데이터를 포함하며, URI의 스킴과 권한 범위 내에서 리소스를 식별합니다.
- [프래그먼트](/ko/docs/Web/URI/Reference/Fragment)
  - : URI의 끝부분에 `#` 문자로 시작하는 선택적 요소입니다.
    문서의 특정 부분이나 동영상의 특정 위치 등, 리소스 내의 특정 부분을 식별하는 데 사용됩니다.

## 안내서

[URI 안내서](/ko/docs/Web/URI/Guides) 는 웹에서 URI를 다루는 방법을 이해하고 활용할 수 있도록 도와줍니다.

- [www와 비-www URL 중에서 선택하기](/ko/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : 사이트가 URL에서 `www.` 접두사를 사용할지 여부를 결정할 때 참고할 수 있는 안내서입니다(`www.example.com` vs `example.com`).

## 명세서

{{Specifications}}

## 같이 보기

- [URL이란?](/ko/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
