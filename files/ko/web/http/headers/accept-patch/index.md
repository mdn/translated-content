---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Accept-Patch`** 응답 HTTP 헤더는 서버가 PATCH 요청에서 어떤 미디어 유형을 이해할 수 있는지를 알려줍니다.

메서드에 대한 응답으로 **`Accept-Patch`** 를 반환하면 Request-URI로 식별된 리소스에서 PATCH가 허용됨을 의미합니다. 두 가지 일반적인 경우가 이에 해당합니다.

지원되지 않는 미디어 유형이 포함된 패치 요청을 수신하는 서버는 {{HTTPStatus("415")}} `Unsupported Media Type`과 하나 이상의 지원되는 미디어 유형을 참조하는 Accept-Patch 헤더로 응답할 수 있습니다.

> [!NOTE]
>
> - IANA 레지스트리는 [공식 콘텐츠 인코딩의 전체 목록](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)을 유지 관리합니다.
> - 표준은 아니지만 다른 두 가지 콘텐츠 인코딩인 `bzip`과 `bzip2`가 사용되기도 합니다. 이들은 이 두 가지 UNIX 프로그램에서 사용하는 알고리즘을 구현합니다. 첫 번째는 특허 라이선스 문제로 인해 사용이 중단되었습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 유형</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## 지시어

없습니다.

## 예제

```http
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## 명세서

{{Specifications}}

## 브라우저 호환성

브라우저 호환성은 이 헤더와 관련이 없습니다. 헤더는 서버에서 전송되며 사양은 클라이언트 동작을 정의하지 않습니다.

## 같이 보기

- HTTP 메서드 {{HTTPMethod("PATCH")}}
- HTTP 시맨틱 및 컨텍스트 {{RFC("7231", "PUT", "4.3.4")}}
