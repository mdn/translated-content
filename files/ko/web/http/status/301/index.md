---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`301 Moved Permanently`** 리디렉션 상태 응답 코드는 요청한 리소스가
{{HTTPHeader("Location")}} 헤더에 주어진 URL로 완전히 옮겨졌다는 것을 나타냅니다. 브라우저는 이 페이지로
리디렉트하고, 검색 엔진은 해당 리소스로 연결되는 링크를 갱신합니다.

> [!NOTE]
> 명세에서는 리디렉션를 수행할 때 메서드와 본문이 변경되지 않아야 한다고 하지만, 모든 사용자 에이전트가 이 요구사항을 충족하지 않습니다. `301` 코드는 {{HTTPMethod("GET")}}과 {{HTTPMethod("HEAD")}} 메서드의 응답으로만 사용하고, {{HTTPMethod("POST")}} 메서드에 대해서는 메서드 변경이 명시적으로 금지된 {{HTTPStatus("308", "308 Permanent Redirect")}} 사용이 바람직합니다.

## 상태

```http
301 Moved Permanently
```

## 예제

### 클라이언트 요청

```http
GET /index.php HTTP/1.1
Host: www.example.org
```

### 서버 응답

```http
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPStatus("308")}} `Permanent Redirect`, 사용된 메서드가 절대 변경되지 않는 이 상태 코드와 동일합니다.
- {{HTTPStatus("302")}} `Found`, 임시 리다이렉트
