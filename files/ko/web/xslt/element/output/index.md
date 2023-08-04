---
title: output
slug: Web/XSLT/Element/output
---

{{ XsltRef() }}

`<xsl:output>` 요소는 출력 문서의 특성을 조절합니다. method 속성이 있는 이 요소가 Netscape에서 정확하게 기능하도록 쓸 수 있어야 합니다. 7.0 현재, `method="text"`는 기대한 대로 동작합니다.

### 문법

```
<xsl:output
  method="xml" | "html" | "text"
  version=STRING
  encoding=STRING
  omit-xml-declaration="yes" | "no"
  standalone="yes" | "no"
  doctype-public=STRING
  doctype-system=STRING
  cdata-section-elements=LIST-OF-NAMES
  indent="yes" | "no"
  media-type=STRING  />
```

### 필수 속성

없음.

### 선택 속성

- `method`
  - : 출력 형식을 지정합니다.
- `version`
  - : 출력 문서에 XML이나 HTML 선언의 version 속성값을 지정합니다. 이 속성은 `method="html"`나 `method="xml"`일 때만 씁니다.
- `encoding`
  - : 출력 문서에 `encoding` 속성값을 지정합니다.
- `omit-xml-declaration`
  - : 출력에 XML 선언을 포함할 지를 나타냅니다. 가능한 값은 "`yes`"나 "`no`"입니다.
- `standalone` (지원 안 함.)
  - : 있으면, standalone 선언이 출력 문서에 나타나면 좋을 지를 나타내고 그 값을 줍니다. 가능한 값은 "yes"나 "no"입니다.
- `doctype-public`
  - : 출력 문서에 `DOCTYPE` 선언의 `PUBLIC` 속성값을 지정합니다.
- `doctype-system`
  - : 출력 문서에 `DOCTYPE` 선언의 `SYSTEM` 속성값을 지정합니다.
- `cdata-section-elements`
  - : `CDATA` 절에 써도 좋을 요소의 텍스트 컨텐트를 나열합니다. 요소는 공백으로 구분해야 합니다.
- `indent` (지원 안 함.)
  - : 출력에 계층 구조를 나타내도록 하면 좋을 지를 지정합니다.
- `media-type` (지원 안 함.)
  - : 출력 문서의 MIME 타입을 지정합니다.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 16, Output](http://www.w3.org/TR/xslt#output)

### Gecko 지원

부분 지원. 위 해설을 보세요.
