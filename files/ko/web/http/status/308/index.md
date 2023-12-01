---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜 (HTTP) **`308 Permanent Redirect`** 리디렉션 상태 응답 코드는 요청된 리소스가
{{HTTPHeader("Location")}} 헤더에 지정된 URL로 확실히 이동되었음을 나타냅니다. 브라우저가 이 페이지로 리디렉션되고 검색엔진은 리소스에 대한 링크를 업데이트합니다('SEO-speak'에서는 'link-juice'가 새 URL로 전송됩니다).

요청 메서드와 본문은 변경되지 않지만, {{HTTPStatus("301")}}은 때때로 {{HTTPMethod("GET")}} 메서드로 잘못 변경될 수 있습니다.

> **참고:** 일부 웹 응용 프로그램은
> `308 Permanent Redirect`를 비표준 방식 및 기타 목적으로 사용합니다.
> 예를 들어, Google Drive는 `308 Resume Incomplete` 응답을 사용하여 불완전한 업로드가 중단된 경우 클라이언트에 알립니다(Google Drive 문서의 [다시 시작할 수 있는 다운로드 수행](https://developers.google.com/drive/api/guides/manage-uploads)을 참조하세요).

## 상태

```http
308 Permanent Redirect
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{HTTPStatus("301", "301 Moved Permanently")}}, 이 상태 코드와 동일하지만, {{HTTPMethod("GET")}}이 아닐 때 사용되는 메서드를 변경합니다.
- {{HTTPStatus("302", "302 Found")}}, 임시 리디렉션
