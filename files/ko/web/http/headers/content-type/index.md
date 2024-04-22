---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
---

{{HTTPSidebar}}

**`Content-Type`** 개체 헤더는 리소스의 {{Glossary("MIME type","media type")}}을 나타내기 위해 사용됩니다.

응답 내에 있는 `Content-Type` 헤더는 클라이언트에게 반환된 컨텐츠의 컨텐츠 유형이 실제로 무엇인지를 알려줍니다. 브라우저들은 어떤 경우에는 MIME 스니핑을 해서 이 헤더의 값을 꼭 따르지는 않을 겁니다; 이를 막기 위해, {{HTTPHeader("X-Content-Type-Options")}} 헤더를 `nosniff`으로 설정할 수 있습니다.

요청 내에서, ({{HTTPMethod("POST")}} 혹은 {{HTTPMethod("PUT")}}처럼), 클라이언트는 서버에게 어떤 유형의 데이터가 실제로 전송됐는지를 알려줍니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 유형</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## 디렉티브

- `media-type`
  - : 리소스 혹은 데이터의 [MIME type](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
- charset
  - : 문자 인코딩 표준.
- boundary
  - : 멀티파트 개체에 대해 `boundary` 디렉티브는 필수인데, 이메일 게이트를 통해 매우 탄탄해졌다고 알려진 캐릭터셋의 1\~70개의 문자들로 구성되며, 빈 공백으로 끝나지 않습니다. 이는 메시지의 멀티 파트 경계선을 캡슐화하기 위해 사용됩니다.

## 예제

### `Content-Type` in HTML forms

HTML 폼 전송으로 일어나는 {{HTTPMethod("POST")}} 요청 내에서, 요청의 `Content-Type`은 {{HTMLElement("form")}} 요소 상의 `enctype` 속성에 의해 지정됩니다.

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

요청은 다음과 같을 겁니다(여기서 설명할 필요가 없는 헤더들은 생략되었습니다):

```
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"
---------------------------974767299852498929531610575

some text

---------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)

---------------------------974767299852498929531610575--
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Accept")}}과 {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPStatus("X-Content-Type-Options")}}
