---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
---

{{HTTPSidebar}}
일반적인 HTTP 응답에서 **`Content-Disposition`** 헤더는 컨텐츠가 브라우저에 _inline_ 되어야 하는 웹페이지 자체이거나 웹페이지의 일부인지, 아니면 *attachment*로써 다운로드 되거나 로컬에 저장될 용도록 쓰이는 것인지를 알려주는 헤더입니다.

`multipart/form-data` 본문에서의 **`Content-Disposition`** 일반 헤더는 multipart의 하위파트에서 활용될 수 있는데, 이 때 이 헤더는 multipart 본문 내의 필드에 대한 정보를 제공합니다. multipart의 하위파트는 {{HTTPHeader("Content-Type")}} 헤더에 정의된 _boundary_ 구분자에 의해 구분되며, `Content-Disposition` 헤더를 multipart 자체에 사용하는 것은 아무런 효과를 발휘하지 못합니다.

`Content-Disposition` 헤더는 광의의 MIME 맥락 속에서 정의되었는데, 그 정의에서 사용되는 파라미터 중 일부인 `form-data`, `name` 그리고 `filename`만이 HTTP forms와 {{HTTPMethod("POST")}} 요청에 적용될 수 있습니다. 여기서 `name`과 `filename`은 필수적인 파라미터는 아닙니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}} (for the main body)<br />{{Glossary("General header")}}
        (for a subpart of a multipart body)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax (구문)

### As a response header for the main body (메인 바디를 위한 응답 헤더로서)

HTTP 구문의 첫번째 파라미터는 `inline` (기본값, 웹 페이지 안에서 또는 웹 페이지로 나타남) 또는 `attachment` (반드시 다운로드 받아야 하며 대부분의 브라우저는 'Save as'(새이름으로저장)창을 보여주고 `filename` 파라미터들이 존재한다면 그 이름을 새이름으로 미리 채워줌)입니다.

```
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

### As a header for a multipart body (멀티파트 바디를 위한 헤더로서)

HTTP 구문의 첫번째 파라미터는 언제나 `form-data`입니다. 추가적인 파라미터들은 대소문자 구분이 없으며, `'='` 다음에 "문자열로 표현한 아규먼트들"을 가집니다. 다중 파라미터들은 세미콜론 (`';'`)으로 구분합니다.

```
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Directives (지시자들)

- `name`

  - : 이름(`name`) 다음에 오는 문자열에는 이 서브파트가 참조하는 폼의 HTML 필드에서 사용한 그 이름이 들어갑니다. 같은 필드에 여러개의 파일이 있을 경우 (예 : `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` 요소의 [`multiple`](/ko/docs/Web/HTML/Element/input#multiple) 속성), 같은 이름으로 여러개의 서브파트들이 존재할 수 있습니다.

  `name`의 값이 `'_charset_'`인 것은 그 부분이 HTML필드가 아니라, charset을 명시하지 않고 사용할 수 있는 기본 charset임을 나타냅니다.

- `filename`

  - : 파일명(`filename`) 다음에 오는 문자열에는 전송된 해당 파일의 원래 이름이 들어갑니다. 파일명은 언제나 선택사항이지만, 맹목적으로 쓰여서는 안됩니다 : 경로 정보가 공개되어야 하며, 서버 파일 시스템 규칙에 따라 전환되어야 합니다. 이러한 파라미터들은 대부분 지시적 정보(indicative information)를 제공합니다. 파일명이 `Content-Disposition: attachment`과 같이 사용되면 최종적으로 사용자가 "새이름으로저장(Save As)" 창에서 보게 되는 파일명의 기본값으로 사용됩니다.

- `filename*`

  - : "filename"과의 유일한 차이점은 "filename*"는 인코딩으로 [RFC 5987](https://tools.ietf.org/html/rfc5987)을 사용한다는 것 뿐입니다. 하나의 헤더 필드에 "filename"과 "filename*"이 둘 다 사용된다면 "filename\*"이 보다 우선됩니다.

## Examples

A response triggering the "Save As" dialog:

```
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

This simple HTML file will be saved as a regular download rather than displayed in the browser. Most browsers will propose to save it under the `cool.html` filename (by default).

An example of an HTML form posted using the `multipart/form-data` format that makes use of the `Content-Disposition` header:

```
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

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## Compatibility notes

- Firefox 5 handles the `Content-Disposition` HTTP response header more effectively if both the `filename` and `filename*` parameters are provided; it looks through all provided names, using the `filename*` parameter if one is available, even if a `filename` parameter is included first. Previously, the first matching parameter would be used, thereby preventing a more appropriate name from being used. See [Firefox bug 588781](https://bugzil.la/588781).

## See also

- [HTML Forms](/ko/docs/Web/Guide/HTML/Forms)
- The {{HTTPHeader("Content-Type")}} defining the boundary of the multipart body.
- The {{domxref("FormData")}} interface used to manipulate form data for use in the {{domxref("XMLHttpRequest")}} API.
