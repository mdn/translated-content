---
title: HTTP 기본
slug: conflicting/Web/HTTP
original_slug: Web/HTTP/Basics_of_HTTP
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

HTTP는 확장 가능한 프로토콜로 리소스 및 URI(Uniform Resource Identifier), 간단한 메시지 구조, 클라이언트-서버 통신 흐름과 같은 개념에 의존합니다. 이러한 기본 개념을 토대로, 새로운 HTTP 메서드나 헤더의 생성을 통해 새로운 기능과 새로운 의미를 더하는 수많은 확장들이 수년간 생겨났습니다.

## 글 목록

- [HTTP의 개요](/ko/docs/Web/HTTP/Guides/Overview)
  - : HTTP는 무엇이고 웹 아키텍처에서 그 역할은 무엇인지, 프로토콜 스택에서의 위치를 서술하고 있습니다.
- [HTTP의 진화](/ko/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP는 1990년대 초반에 만들어지고 여러번 확장되어 왔습니다. 이 항목에서는 HTTP의 역사에 대해서 훑어보고 HTTP/0.9, HTTP/1.0, HTTP/1.1 그리고 수년에 걸쳐 중요하지는 않지만 새로운 기능이 소개된 현대의 HTTP/2에 대해서 서술하고 있습니다.
- [리소스와 URIs](/ko/docs/conflicting/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : 리소스에 대한 개념, 식별자, 그리고 웹에서의 위치에 대해서 간략히 소개합니다.
- [웹 리소스 식별](/ko/docs/orphaned/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : 웹 리소스가 어떻게 참조되는지 그리고 어디에 위치하는지를 서술합니다.
- [데이터 URL](/ko/docs/Web/URI/Reference/Schemes/data)
  - : 특정 종류의 URI는 직접 대표하는 리소스를 포함합니다. 데이터 URL은 매우 편리하지만 위험성을 가지고 있습니다.
- [리소스 URL](/ko/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_Inline}}
  - : 리소스 URL(`resource` 스키마가 접두사로 붙어있는 URL)은 Firefox와 Firefox 확장 프로그램들에서 내적으로 리소스를 로드하기 위해서 사용됩니다. 하지만 몇몇 브라우저로 연결할 수 있는 사이트의 정보로도 사용할 수 있습니다.
- [MIME 타입](/ko/docs/Web/HTTP/Guides/MIME_types)
  - : HTTP/1.0부터는 다양한 타입의 콘텐츠를 전송할 수 있습니다. 이 글에서는 {{HTTPHeader("Content-Type")}} 헤더와 MIME 표준을 사용하여 이를 수행하는 방법을 설명합니다.
- [www와 비-www URL 중에서 선택하기](/ko/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : 이 글에서는 www 접두사 도메인을 사용할지 여부를 선택하는 방법과, 그 선택의 결과에 대한 지침을 제공합니다.
- [HTTP 세션의 흐름](/ko/docs/Web/HTTP/Guides/Session)
  - : 이 글은 일반적인 HTTP 세션에 대해서 서술합니다. 예를 들어, 당신이 웹 페이지에서 링크 또는 이미지를 클릭하였을 때 무슨 일이 일어나는지를 들 수 있습니다.
- [HTTP 메시지](/ko/docs/Web/HTTP/Guides/Messages)
  - : HTTP 메시지는 요청 혹은 응답을 하는 도중에 전송됩니며, 아주 명확한 구조를 가지고 있습니다. 이 간략한 글에서는 그 구조, 목적과 가능성에 대해서 서술합니다.
- [HTTP/2에서의 프레임과 메시지 구조](/ko/docs/Web/HTTP/Frame_and_message_structure_in_HTTP_2)
  - : HTTP/2는 HTTP/1.x 메시지를 바이너리 프레임에 넣어 표시하고 캡슐화를 합니다. 이 글은 그 프레임의 구조, 목적, 그리고 인코드 방법에 대해서 설명합니다.
- [HTTP/1.x의 연결 관리](/ko/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1은 HTTP가 영구적 연결과 파이프라이닝을 지원한 첫 버전입니다. 이 글은 두 개념에 대해서 설명합니다.
- [HTTP/2에서의 연결 관리](/ko/docs/Web/HTTP/Connection_management_in_HTTP_2)
  - : HTTP/2는 어떻게 연결이 생성되고 관리되는지에 대해서 완벽하게 재검토했습니다. 이 글은 어떻게 HTTP 프레임이 멀티플렉싱이 가능한지 그리고 이전 HTTP 버전에서 발생한 'head-of-line' 블로킹 문제를 어떻게 풀었는지에 대해서 설명합니다.
- [콘텐츠 협상](/ko/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP는 브라우저가 선호하는 포맷, 언어 또는 인코딩을 알려주는 방법으로 [`Accept`](/ko/docs/Web/HTTP/Reference/Headers/Accept)로 시작하는 HTTP 헤더 세트를 도입합니다. 이 항목은 어떻게 이러한 협상이 시작하는지, 어떻게 서버가 반응하기를 기대하는지 그리고 어떻게 가장 적절한 응답을 주는지에 대해서 설명합니다.
