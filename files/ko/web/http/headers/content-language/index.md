---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
---

{{HTTPSidebar}}

**`Content-Language`** {{Glossary("entity header")}}는 청중을 위한 언어를 설명하기 위해 사용되는데, 사용자가 선호하는 언어에 따라 사용자를 구분하도록 해줍니다.

예를 들어, "`Content-Language: de-DE`"가 설정되면, 이는 문서가 독일어 발표자를 위해 만들어졌음을 의미합니다(하지만, 그것이 문서가 독일어로 쓰여졌음을 나타내지는 않습니다. 예를 들어, 독일인 발표자를 위한 언어 코스의 일부분이 영어로 작성된 것일 수도 있습니다).

`Content-Language`이 지정되지 않는다면, 모든 언어의 청중을 위해 만들어진 내용이라고 간주합니다. 다중 언어 태그 또한 가능한데다, 텍스트로 이루어진 문서 뿐만 아니라 여러 가지 미디어 타입에도 `Content-Language` 헤더가 적용됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
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
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## 디렉티브

- `language-tag`
  - : 다중 언어 태그는 쉼표로 구분됩니다. 각 언어 태그는 하이프 문자("`-`", `%x2D`)로 구분되는, 한 개 이상의 대소문자를 구분하지 않는 서브태그의 연속입니다. 대부분의 경우, 언어 태그는 관련 언어군 (예를 들어, "`en`" = English)을 나타내는 주요 언어로 구성되는데, 그 뒤에는 해당 언어의 범위를 정제하거나 좁혀주는 d일련의 서브태그가 올 수 있습니다 (예, "`en-CA`" = 캐나다에서 사용되는 영어의 변종).

> **참고:** **알아둘 것:** 언어 태그는 공식적으로 [RFC 5646](https://tools.ietf.org/html/rfc5646)에 정의되어 있으며, 그에 이어 사용될 [언어 코드](https://en.wikipedia.org/wiki/Language_code)에 대해서 [ISO 639](https://en.wikipedia.org/wiki/ISO_639) 표준이 있습니다(더 정확히는 [ISO 639-1 코드 목록](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)).

## 예제

### 문서가 작성된 언어 나타내기

글로벌 [`lang`](/ko/docs/Web/HTML/Global_attributes/lang) 어트리뷰는 HTML 엘리먼트 상에서 전체 [HTML](/ko/docs/Web/HTML) 문서 혹은 그의 일부의 언어를 나타내기 위해 사용됩니다.

```html
<html lang="de"></html>
```

다음과 같이 문서 언어를 나타내기 위해 이와 같은 메타 엘리먼트를 사용하지 **마세요**:

```html example-bad
<!-- /!\ This is bad practice -->
<meta http-equiv="content-language" content="de" />
```

### 리소스에 대해 대상 청중 나타내기

`Content-Language` 헤더는 **페이지의 대상 청중**을 지정하는데 사용되며 한 개 이상의 언어를 나태낼 수 있습니다.

```
Content-Language: de, en
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Accept-Language")}}
- [HTTP 헤더, 메타 엘리먼트 그리고 언어 정보](https://www.w3.org/International/questions/qa-http-and-lang.en)
