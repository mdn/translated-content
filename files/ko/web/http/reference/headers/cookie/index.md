---
title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
original_slug: Web/HTTP/Headers/Cookie
---

**`Cookie`** HTTP 요청 헤더는 {{HTTPHeader("Set-Cookie")}} 헤더와 함께 서버에 의해 이전에 전송되어 저장된 [HTTP cookies](/ko/docs/Web/HTTP/Guides/Cookies)를 포함합니다.

`Cookie` 헤더는 선택적(optional)이고, 만약 브라우저의 사생활 보호 설정(privacy settings)이 쿠키를 block할 경우 생략될 수도 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

- \<cookie-list>
  - : `<cookie-name>=<cookie-value>` 형태를 띄는 이름-값 쌍의 목록입니다. 목록 내 쌍들은 세미콜록과 공백(`'; '`)으로 구분됩니다.

## 예제

```
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용들

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
