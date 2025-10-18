---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
original_slug: Web/HTTP/Status/302
---

HTTP(HyperText Transfer Protocol) **`302 Found`** 리디렉션 상태 응답 코드는 요청한 리소스가
{{HTTPHeader("Location")}} 헤더에 지정된 URL로 일시적으로 이동되었음을 나타냅니다. 브라우저는 이 페이지로
리디렉션되지만 검색 엔진은 리소스에 대한 링크를 업데이트하지 않습니다('SEO-speak'에서는 'link-juice'가 새
URL로 전송되지 않는다고 합니다).

명세서에서 리디렉션이 수행될 때 메서드(및 본문)가 변경되지 않도록 요구하더라도 모든 사용자 에이전트가 이를 준수하는
것은 아닙니다. 여러분은 여전히 이러한 유형의 버그가 있는 소프트웨어를 찾을 수 있습니다. 따라서 따라서 `302` 코드는
{{HTTPMethod("GET")}} 또는 {{HTTPMethod("HEAD")}} 메서드에 대한 응답으로만 설정하고 이 경우 메서드
변경이 명시적으로 금지되므로 {{HTTPStatus("307", "307 Temporary Redirect")}} 를 대신 사용하는 것이
좋습니다.

사용하던 메서드를 {{HTTPMethod("GET")}}으로 변경하려는 경우,
{{HTTPStatus("303", "303 See Other")}}을 대신 사용하십시오.
{{HTTPMethod("PUT")}} 메서드에 대한 응답을 업로드된 리소스가 아니라 'You successfully updown XYZ'와
같은 확인 메시지로 주고 싶을때 유용합니다.

## 상태

```http
302 Found
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPStatus("307", "307 Temporary Redirect")}}, 사용된 메서드가 절대 변경되지 않는 이 상태 코드와 동일합니다.
- {{HTTPStatus("303", "303 See Other")}}, {{HTTPMethod("GET")}}에 사용되는 메서드를 변경하는 임시 리디렉션입니다.
- {{HTTPStatus("301", "301 Moved Permanently")}}, 영구 리다이렉션
