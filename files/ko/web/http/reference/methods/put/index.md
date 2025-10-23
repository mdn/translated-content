---
title: PUT
slug: Web/HTTP/Reference/Methods/PUT
original_slug: Web/HTTP/Methods/PUT
---

**HTTP `PUT` 메서드**는 요청 페이로드를 사용해 새로운 리소스를 생성하거나, 대상 리소스를 나타내는 데이터를 대체합니다.

`PUT`과 {{httpmethod("POST")}}의 차이는 {{glossary("idempotent", "멱등성")}}으로, `PUT`은 멱등성을 가집니다. `PUT`은 한 번을 보내도, 여러 번을 연속으로 보내도 같은 효과를 보입니다. 즉, 부수 효과가 없습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">요청에 본문 존재</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">성공 응답에 본문 존재</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe", "안전함")}}</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "멱등성")}}</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "캐시 가능")}}
      </th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">HTML 양식에서 사용 가능</th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 구문

```
PUT /new.html HTTP/1.1
```

## 예제

### 요청

```
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### 응답

대상 리소스를 나타내는 데이터가 없고, PUT 요청이 성공적으로 하나를 새로 생성한 경우, 출처 서버는 반드시 {{glossary("user agent", "사용자 에이전트")}}에게 {{HTTPStatus("201")}} (`Created`) 응답을 보내 해당 사항을 알려줘야 합니다.

<pre class="newpage">HTTP/1.1 201 Created
Content-Location: /new.html</pre>

대상 리소스를 나타내는 데이터가 있고, 이를 요청에 포함된 자료에 준하여 성공적으로 수정했다면, 출처 서버는 반드시 {{httpstatus("200")}} (`OK`) 또는 {{httpstatus("204")}} (`No Content`) 응답을 보내 성공을 알려줘야 합니다.

```
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
