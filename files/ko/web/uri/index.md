---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

**URI(Uniform Resource Identifiers)** 는 웹상의 "자원"을 식별하는 데 사용됩니다.
URI는 일반적으로 [HTTP](/ko/docs/Web/HTTP) 요청의 대상으로 사용되며, 이 경우 URI는 문서, 사진, 이진 데이터와 같은 자원의 위치를 나타냅니다.
URI의 가장 흔한 유형은 ({{Glossary("URL")}})로, 흔히 웹 주소라고 알려져 있습니다.

HTML `<a>` 링크의 [`href`](/ko/docs/Web/HTML/Reference/Elements/a#href) 속성처럼 다른 곳에 사용될 때는, URI가 자원을 가져오는 것 외에 이메일 클라이언트 열기, 문자 메시지 보내기, 자바스크립트 실행과 같은 다른 동작을 유발하는 데에도 사용될 수 있습니다.

## 참고

[URI 참조](/ko/docs/Web/URI/Reference)는 URI를 구성하는 요소에 대한 자세한 내용을 제공합니다.

- [스키마(Schemes)](/ko/docs/Web/URI/Reference/Schemes)
  - : URI에서 `:` 문자 앞에 오는 첫 번째 부분으로, 브라우저가 자원을 가져오기 위해 사용해야 하는 프로토콜을 나타냅니다.
- [권한(Authority)](/ko/docs/Web/URI/Reference/Authority)
  - : 스키마 뒤, 경로 앞에 오는 부분입니다.
    최대 `user`, `host`, `port` 이 세 부분으로 구성될 수 있습니다.
- [경로(Path)](/ko/docs/Web/URI/Reference/Path)
  - : 권한 다음에 오는 부분입니다.
    일반적으로 계층적 형태로 구성된 데이터를 포함하며, URI의 스키마 및 권한 범위 내에서 자원을 식별하는 데 사용됩니다.
- [프래그먼트(Fragment)](/ko/docs/Web/URI/Reference/Fragment)
  - : URI 끝에 `#` 문자로 시작하는 선택적 부분입니다.
    문서의 특정 섹션이나 비디오의 특정 위치와 같이 자원의 특정 부분을 식별하는 데 사용됩니다.

## 안내서

[URI 안내서](/ko/docs/Web/URI/Guides)는 웹에서 URI를 다루는데 도움을 줍니다.

- [www와 www이 아닌 URL 중 하나 선택하기](/ko/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : 사이트가 반드시 `www.`으로 시작하는 URL을 사용해야 할 때에 대한 안내서입니다(`www.example.com` vs `example.com`).

## 명세서

{{Specifications}}

## 같이 보기

- [URL이 무엇인가요?](/ko/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
