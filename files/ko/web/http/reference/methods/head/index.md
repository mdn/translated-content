---
title: HEAD
slug: Web/HTTP/Reference/Methods/HEAD
original_slug: Web/HTTP/Methods/HEAD
---

**HTTP `HEAD` 메서드**는 특정 리소스를 {{httpmethod("GET")}} 메서드로 요청했을 때 돌아올 헤더를 요청합니다.

`HEAD` 메서드에 대한 응답은 본문을 가져선 안되며, 본문이 존재하더라도 무시해야 합니다. 그러나, {{httpheader("Content-Length")}}처럼 본문 콘텐츠를 설명하는 {{glossary("entity header", "개체 헤더")}}는 포함할 수 있습니다. 이 때, 개체 헤더는 비어있어야 하는 `HEAD`의 본문과는 관련이 없고, 대신 {{httpmethod("GET")}} 메서드로 동일한 리소스를 요청했을 때의 본문을 설명합니다.

`HEAD` 요청의 응답이 캐시했던 이전 {{httpmethod("GET")}} 메서드의 응답을 유효하지 않다고 표시할 경우, 새로운 `GET` 요청을 생성하지 않더라도 캐시를 무효화합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">요청에 본문 존재</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">성공 응답에 본문 존재</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe", "안전함")}}</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "멱등성")}}</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "캐시 가능")}}
      </th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">HTML 양식에서 사용 가능</th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 구문

```
HEAD /index.html
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPMethod("GET")}}
