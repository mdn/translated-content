---
title: GET
slug: Web/HTTP/Reference/Methods/GET
original_slug: Web/HTTP/Methods/GET
---

**HTTP `GET` 메서드**는 특정한 리소스를 가져오도록 요청합니다. `GET` 요청은 데이터를 가져올 때만 사용해야 합니다.

> [!NOTE]
>
> `GET` 요청에 본문이나 페이로드가 담겨있으면 명세에는 금지되어있지 않지만, 의미가 정의되지 않아 기존에 존재하는 구현체에게 요청을 거부당할수 있습니다. 이러한 이유로 `GET` 요청에는 본문이나 페이로드를 담지 않는 것이 바람직합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">요청에 본문 존재</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">성공 응답에 본문 존재</th>
      <td>예</td>
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
      <td>예</td>
    </tr>
  </tbody>
</table>

## 구문

```
GET /index.html
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Range")}}
- {{httpmethod("POST")}}
