---
title: PATCH
slug: Web/HTTP/Methods/PATCH
---

{{HTTPSidebar}}

**HTTP PATCH** 메소드는 리소스의 부분적인 수정을 할 때에 사용됩니다.

HTTP {{HTTPMethod("PUT")}} 메소드는 문서 전체의 완전한 교체만을 허용합니다. 반면 `PATCH` 메소드는 `PUT` 메소드와 달리 멱등성을 가지지 않는데, 이는 동일한 patch 요청이 다른 결과를 야기할 수도 있음을 뜻합니다. 하지만 PATCH를 PUT과 같은 방식으로 사용함으로써 멱등성을 가지게 할 수도 있습니다.

`PATCH` (혹은 `PUT`)는 다른 리소스에게 부수효과(side-effects)를 일으킬 가능성이 있습니다.

서버가 `PATCH`를 지원하는지 알 수 있게끔 하기 위해, 서버는 {{HTTPHeader("Allow")}} 리스트 혹은 {{HTTPHeader("Access-Control-Allow-Methods")}} (for CORS) 응답 헤더를 통해 이를 명시할 수 있습니다.

PATCH가 허용되는지 확인할 수 있는 또 다른 (암묵적인)지표로 {{HTTPHeader("Accept-Patch")}}의 존재 유무를 들 수 있는데, 이를 통해 patch 문서 양식이 서버에 받아 들여졌음을 알 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        Allowed in <a href="/ko/docs/Web/Guide/HTML/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```
PATCH /file.txt HTTP/1.1
```

## Example

### Request

```http
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### Response

성공적인 응답은 2xx 상태 코드를 통해서 확인할 수 있습니다.

아래의 예시에서는 {{HTTPStatus("204")}} 응답이 사용되었는데, 이는 응답이 유의미한 body를 전달하고 있지 않기 때문입니다. {HTTPStatus("200")}} 응답에서는 body에 유의미한 데이터가 포함되어 있음을 유추할 수 있습니다.

<pre class="newpage notranslate">HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"</pre>

## 명세서

{{Specifications}}

## See also

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – specifies the patch document formats accepted by the server.
