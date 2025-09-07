---
title: CORS 허용 목록에 있는 요청 헤더 (CORS-safelisted request header)
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 5e9631df85d021e84133e14f4bd3c712e4f8fe08
---

{{GlossarySidebar}}

[CORS 허용 목록에 있는 요청 헤더](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)는 다음 [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers) 중 하나입니다.

- {{HTTPHeader("Accept")}},
- {{HTTPHeader("Accept-Language")}},
- {{HTTPHeader("Content-Language")}},
- {{HTTPHeader("Content-Type")}},
- {{HTTPHeader("Range")}}.

이 헤더(및 아래에 명시된 추가 요구사항 충족하는 값)만 포함하는 경우, 요청은 [CORS](/ko/docs/Glossary/CORS) 컨텍스트에서 {{glossary("preflight request", "프리플라이트 요청")}}을 보낼 필요가 없습니다.

{{HTTPHeader("Access-Control-Allow-Headers")}} 헤더를 사용하여 더 많은 헤더를 허용 목록에 추가하고 위 헤더를 나열하여 다음 추가 제한 사항을 피할 수 있습니다.

## 추가 제약사항

CORS 허용 목록에 있는 헤더가 CORS 허용 목록의 요청 헤더까지 되려면, 다음의 요구사항도 충족해야 합니다.

- {{HTTPHeader("Accept-Language")}} 및 {{HTTPHeader("Content-Language")}}는 `0-9`, `A-Z`, `a-z`, 빈 공간 또는 `*,-.;=` 으로 구성된 값만 가질 수 있습니다.
- {{HTTPHeader("Accept")}} 및 {{HTTPHeader("Content-Type")}}은 'CORS에 안전하지 않은 요청 헤더 바이트'를 포함할 수 없습니다. 예를 들어, `0x00-0x1F` (허용되는 `0x09 (HT)`는 제외), `"():<>?@[\]{}`, 및 `0x7F (DEL)`가 있습니다.
- {{HTTPHeader("Content-Type")}}은 `application/x-www-form-urlencoded`, `multipart/form-data` 또는 `text/plain` 중 구문 분석된 값(매개변수 무시)의 MIME 타입이 있어야 합니다.
- {{HTTPHeader("Range")}}는 `bytes=[0-9]+-[0-9]*` 형식의 단일 바이트 범위 값을 가져야 합니다.
  자세한 내용은 {{HTTPHeader("Range")}} 헤더 문서를 참조하세요.
- 모든 헤더의 경우 값의 길이가 128보다는 클 수 없습니다.

## 같이 보기

- {{Glossary("CORS-safelisted response header", "CORS 허용 목록에 있는 응답 헤더")}}
- {{Glossary("Forbidden header name", "금지된 헤더 이름")}}
- {{Glossary("Request header","요청 헤더")}}
