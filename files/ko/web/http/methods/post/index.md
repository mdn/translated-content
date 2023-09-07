---
title: POST
slug: Web/HTTP/Methods/POST
---

{{HTTPSidebar}}

**HTTP `POST` 메서드**는 서버로 데이터를 전송합니다. 요청 본문의 유형은 {{httpheader("Content-Type")}} 헤더로 나타냅니다.

{{httpmethod("PUT")}}과 `POST`의 차이는 {{glossary("idempotent", "멱등성")}}으로, `PUT`은 멱등성을 가집니다. `PUT`은 한 번을 보내도, 여러 번을 연속으로 보내도 같은 효과를 보입니다. 즉, 부수 효과(side effect)가 없습니다.

`POST` 요청은 보통 [HTML 양식](/ko/docs/Learn/HTML/Forms)을 통해 서버에 전송하며, 서버에 변경사항을 만듭니다. 이 경우의 콘텐츠 유형(`Content-Type`)은 _{{HTMLElement("form")}} 요소의 [`enctype`](/ko/docs/Web/HTML/Element/form#enctype) 특성이나 {{HTMLElement("input") }}, {{HTMLElement("button")}}_ 요소의 _[`formenctype`](/ko/docs/Web/HTML/Element/input#formenctype) 특성 안에 적당한 문자열을 넣어 결정합니다._

- `application/x-www-form-urlencoded`: &으로 분리되고, "=" 기호로 값과 키를 연결하는 key-value tuple로 인코딩되는 값입니다. 영어 알파벳이 아닌 문자들은 {{glossary("percent encoded")}} 으로 인코딩됩니다. 따라서, 이 content type은 바이너리 데이터에 사용하기에는 적절치 않습니다. (바이너리 데이터에는 use `multipart/form-data` 를 사용해 주세요.)\_
- _`multipart/form-data`_
- _`text/plain`_

`POST` 요청을 HTML 양식 외의 다른 방법({{domxref("XMLHttpRequest")}} 등)으로 전송할 땐 요청의 본문이 어떤 형태도 취할 수 있습니다. HTTP 1.1 규격에 정의된 바와 같이, `POST`는 다음의 기능을 포함하는 균일한 메서드를 허용하도록 설계되었습니다.

- 기존 리소스에 주석달기
- 게시판, 뉴스 그룹, 메일링 리스트나 이와 유사한 시스템에 글 올리기
- 회원가입 모달로 새로운 사용자 추가하기
- 양식 전송 결과 등 데이터 블록을 데이터 처리 프로세스에 보내기
- 이어붙이기 연산을 통한 데이터베이스 확장

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">요청에 본문 존재</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">성공 응답에 본문 존재</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe", "안전함")}}</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "멱등성")}}</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "캐시 가능")}}
      </th>
      <td>신선도 정보 포함 시</td>
    </tr>
    <tr>
      <th scope="row">HTML 양식에서 사용 가능</th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 구문

```
POST /index.html
```

## 예제

다음은 `application/x-www-form-urlencoded` 콘텐츠 유형을 사용하는 간단한 형태의 양식 제출 예시입니다.

```http
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

`multipart/form-data` 콘텐츠 유형을 사용하는 예시입니다.

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
- {{httpmethod("GET")}}
