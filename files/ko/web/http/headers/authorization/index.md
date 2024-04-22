---
title: Authorization
slug: Web/HTTP/Headers/Authorization
---

{{HTTPSidebar}}

HTTP **`Authorization`** 요청 헤더는 서버의 사용자 에이전트임을 증명하는 자격을 포함하여, 보통 서버에서 {{HTTPStatus("401")}} `Unauthorized` 상태를 {{HTTPHeader("WWW-Authenticate")}} 헤더로 알려준 이후에 나옵니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 문법

```
Authorization: <type> <credentials>
```

## 지시자

- \<type>

  - : [인증 타입](/ko/docs/Web/HTTP/Authentication#%EC%9D%B8%EC%A6%9D_%EC%8A%A4%ED%82%B4). 보통 타입은 ["Basic"](/ko/docs/Web/HTTP/Authentication#Basic_%EC%9D%B8%EC%A6%9D_%EC%8A%A4%ED%82%B4)이며. 다른 타입으로:

    - [IANA registry of Authentication schemes](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)
    - [Authentification for AWS servers (`AWS4-HMAC-SHA256`)](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)

- \<credentials>

  - : 만약 "Basic" 인증 스킴이 사용되었다면, 증명은 다음과 같이 만들어집니다:

    - 사용자명과 비밀번호가 콜론을 이용하여 합쳐집니다(`aladdin:opensesame`).
    - 그 결과에 대한 문자열을 [base64](/ko/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) 로 인코딩합니다 (`YWxhZGRpbjpvcGVuc2VzYW1l`).

    > **참고:** Base64 인코딩은 암호화나 해싱을 의미하지 않습니다! 이 방법은 인증에 대해서 문자를 그대로 보내는 것과 동일하다고 할 수 있습니다 (base64인코딩은 복호화 가능). Basic 인증을 하는 경우 HTTPS로 접속하는 것을 권장합니다.

## 예제

```
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

HTTP basic 인증을 사용하여 비밀번호를 보호하기 위해 Apache 또는 nginx 서버를 어떻게 설정해야 하는지 예제를 보기 위해서는 [HTTP authentication](/ko/docs/Web/HTTP/Authentication) 를 보시기 바랍니다.

## 기술 사양

| 기술 사양                               | 제목                                   |
| --------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Authorization", "4.2")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                         | The 'Basic' HTTP Authentication Scheme |

## 함께 더 보기

- [HTTP authentication](/ko/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
