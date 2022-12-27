---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
translation_of: Web/HTTP/Status/301
---
{{HTTPSidebar}}

HTTP **`301 Moved Permanently`** 리다이렉트 상태 응답 코드는 요청한 리소스가 {{HTTPHeader("Location")}} 헤더에 주어진 URL로 완전히 옮겨졌다는 것을 나타낸다. 브라우저는 이 페이지로 리다이렉트하고, 검색 엔진은 해당 리소스로 연결되는 링크를 갱신한다\[검색엔진 최적화의 관점에서는 '원 콘텐츠가 새로운 URL로 옮겨졌다'(the link-juice is sent to the new URL)고 한다].

명세에서는 리다이렉트를 수행할 때 메소드(와 응답 본문)이 바뀌어서는 안 된다고 명시하고 있지만, 모든 유저 에이전트가 이를 따르는 것은 아니며 이러한 잘못된 소프트웨어는 아직도 찾아볼 수 있다. 그러므로 `301` 코드는 {{HTTPMethod("GET")}}과 {{HTTPMethod("HEAD")}} 메소드의 응답으로만 사용하고, {{HTTPMethod("POST")}} 메소드에 대해서는 메소드 변경이 명시적으로 금지된 {{HTTPStatus("308")}} `Permanent Redirect`를 사용하는 것이 바람직하다.

## 상태

```
301 Moved Permanently
```

## 예제

### 클라이언트 요청

```
GET /index.php HTTP/1.1
Host: www.example.org
```

### 서버 응답

```
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.status.301")}}

## 같이 보기

- {{HTTPStatus("308")}} `Permanent Redirect`
- {{HTTPStatus("302")}} `Found`, 임시 리다이렉트
