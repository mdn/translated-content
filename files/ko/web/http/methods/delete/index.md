---
title: DELETE
slug: Web/HTTP/Methods/DELETE
---

{{HTTPSidebar}}

**HTTP `DELETE` 메서드**는 지정한 리소스를 삭제합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">요청에 본문 존재</th>
      <td>May</td>
    </tr>
    <tr>
      <th scope="row">성공 응답에 본문 존재</th>
      <td>May</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe", "안전함")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "멱등성")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "캐시 가능")}}
      </th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Learn/HTML/Forms">HTML 양식</a>에서 사용 가능
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## 구문

```
DELETE /file.html HTTP/1.1
```

## 예제

### 요청

```
DELETE /file.html HTTP/1.1
```

### 응답

`DELETE` 메서드를 성공적으로 적용한 후에 사용할 수 있는 응답 상태 코드는 다음과 같이 몇 가지가 있습니다.

- 아마도 명령을 성공적으로 수행할 것 같으나 아직은 실행하지 않은 경우 {{HTTPStatus("202")}} (`Accepted`) 상태 코드.
- 명령을 수행했고 더 이상 제공할 정보가 없는 경우 {{HTTPStatus("204")}} (`No Content`) 상태 코드.
- 명령을 수행했고 응답 메시지가 이후의 상태를 설명하는 경우 {{HTTPStatus("200")}} (`OK`) 상태 코드.

```
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- HTTP 상태: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
