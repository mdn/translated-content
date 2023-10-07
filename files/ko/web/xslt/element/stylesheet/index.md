---
title: stylesheet
slug: Web/XSLT/Element/stylesheet
---

{{ XsltRef() }}

`<xsl:stylesheet>`(나 동등한 `<xsl:transform>`) 요소는 스타일시트의 최외곽 요소입니다.

### 이름공간 선언

pseudo 속성은 XSLT 스타일시트로 문서를 식별하기 위해 필요합니다. 대체로 이는 `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`입니다.

### 문법

```
<xsl:stylesheet
  version=NUMBER
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  id=NAME
  extension-element-prefixes=LIST-OF-NAMES
  exclude-result-prefixes=LIST-OF-NAMES>
    ENTIRE STYLESHEET
</xsl:stylesheet>
```

### 필수 속성

- `version`
  - : 이 스타일시트에 필요한 XSLT의 버전을 지정합니다.

### 선택 속성

- `id` (7.0 현재 오직 inline DTD가 명시하여 호출하는 경우만 지원함.)
  - : 이 스타일시트에 `id`를 지정합니다. 이는 스타일시트를 다른 XML 문서에 포함할 때 가장 자주 씁니다.
- extension-element-prefixes (지원 안 함.)
  - : 이 문서의 확장 요소에 빈칸으로 구분한 이름공간 접두사를 지정합니다.
- exclude-result-prefixes
  - : 이 문서에 쓸 출력 문서에 보내지 않았으면 하는 이름공간을 지정합니다. 목록은 공백으로 구분합니다.

### 타입

필수 최외곽 스타일시트 요소.

### 정의

[XSLT section 2.2, Stylesheet Element](http://www.w3.org/TR/xslt#stylesheet-element)

### Gecko 지원

조금 지원. 위 해설을 보세요.
