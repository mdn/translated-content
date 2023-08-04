---
title: HTTP 기본
slug: Web/HTTP/Basics_of_HTTP
---

{{HTTPSidebar}}

HTTP는 상당히 확장 가능한 프로토콜입니다. 자원과 URI의 개념, 메시지의 단순한 구조, 통신 흐름을 위한 클라이언트-서버 구조와 같은 몇 가지 기본 개념에 의존합니다. 이러한 기본 개념을 토대로, 새로운 HTTP 메서드나 헤더의 생성을 통해 새로운 기능과 새로운 의미를 더하는 수많은 확장들이 수년간 생겨났습니다.

## 항목

- [HTTP의 개요](/ko/docs/Web/HTTP/Overview)
  - : HTTP는 무엇이고 웹 아키텍처에서 그 역할은 무엇인지, 프로토콜 스택에서의 위치를 서술하고 있습니다.
- [HTTP의 진화](/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP는 1990년대 초반에 만들어지고 여러번 확장되어 왔습니다. 이 항목에서는 HTTP의 역사에 대해서 훑어보고 HTTP/0.9, HTTP/1.0, HTTP/1.1 그리고 수년에 걸쳐 중요하지는 않지만 새로운 기능이 소개된 현대의 HTTP/2에 대해서 서술하고 있습니다.
- **HTTP 버전 협상**
  - : 클라이언트와 서버가 어떻게 특정 HTTP 버전을 협상하는지 그리고 갑자기 프로토콜 버전이 업그레이드 된 것이 사용되었을 때에는 어떻게 하는지 설명합니다.
- [리소스와 URIs](/ko/docs/Web/HTTP/Resources_and_URIs)
  - : 리소스에 대한 개념, 지시자, 그리고 웹에서의 위치에 대해서 간략히 소개합니다.
- [웹 리소스 식별](/ko/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : 웹 리소스가 어떻게 참조되는지 그리고 어떻게 것을 찾는지에 대해서 서술합니다.
- [데이터 URIs](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : 특정 종류의 URI는 직접 대표하는 리소스를 포함합니다(embed). 데이터 URIs는 매우 편리하지만 위험성을 가지고 있습니다.
- 리소스 URLs
  - : 리소스 URLs, `resource:`가 접두사로 붙어있는 URLs인 스키마, 파이어폭스와 파이어폭스 확장 프로그램들에서 내적으로 리소스를 로드하기 위해서 사용됩니다, 하지만 몇몇 브라우저로 연결할 수 있는 사이트의 정보도 사용할 수 있습니다.
- 리소스의 신분과 위치를 분리: the Alt-Svc HTTP header
  - : 대부분의 경우, 웹 리소스에서 신분과 위치는 공유됩니다. 이것은 {{HTTPHeader("Alt-Svc")}} 헤더를 사용함으로써 바뀔 수 있습니다.
- [MIME 타입](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : HTTP/1.0 부터 다른 타입의 콘텐츠를 전송할 수 있습니다. 이 항목에서는 어떻게 {{HTTPHeader("Content-Type")}} 헤더를 사용하여 이것이 완료될 수 있는지 그리고 MIME 표준에 대해서 설명합니다.
- [www와 비-www URL 중에서 선택하기](/ko/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : www 접두사를 사용한 도메인과 그렇지 않은 도메인에 대해서 조언합니다. 이 항목에서는 선택의 결과에 더하여 그것을 어떻게 만드는지 설명합니다.
- HTTP 세션의 흐름
  - : 이 기초에 대한 항목은 일반적인 HTTP 세션에 대해서 서술합니다: 당신이 브라우저의 링크를 클릭하였을 때 무슨 일이 일어나는지에 대해 ...
- [HTTP 메시지](/ko/docs/Web/HTTP/Messages)
  - : HTTP 메시지는 요청 혹은 응답을 하는 도중에 전송됩니며, 아주 확실한 구조를 가지고 있습니다;
    이 간략한 항목에서는 그 구조, 목적과 가능성에 대해서 서술합니다.
- HTTP/2에서의 프레임과 메시지 구조
  - : HTTP/2는 HTTP/1.x 메시지를 바이너리 프레임에 넣어 대신하고 캡슐화를 합니다. 이 항목은 그 프레임의 구조, 목적, 그리고 인코드 방법에 대해서 설명합니다.
- [HTTP/1.x의 커넥션 관리](/ko/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1은 HTTP가 영구 연결과 파이프라이닝을 지원한 첫 버전입니다. 이 항목은 두 컨셉에 대해서 설명합니다.
- HTTP/2에서의 연결 관리
  - : HTTP/2는 어떻게 연결이 생성되고 관리되는지에 대해서 완벽하게 재고되었습니다: 이 항목은 어떻게 HTTP 프레임이 멀티플렉싱이 가능한지 그리고 이전 HTTP 버전에서 발생한 'head-of-time' 문제를 어떻게 풀었는지에 대해서 설명합니다.
- [콘텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)
  - : 브라우저에서 선언한 포맷, 언어, 또는 선호하는 인코딩 타입에 따라서 HTTP는 Accept-로 시작하는 HTTP 헤더 세트를 소개합니다. 이 항목은 어떻게 이러한 협상이 시작하는지, 어떻게 서버가 반응하기를 기대하는지 그리고 어떻게 가장 적절한 응답을 주는지에 대해서 설명합니다.
