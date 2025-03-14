---
title: unparsed-entity-url
slug: Web/XPath/Functions/unparsed-entity-url
---

{{XsltSidebar}}{{ XsltRef() }}

`unparsed-entity-url()` 함수는 구문해석되지 않은 엔티티의 URI를 반환합니다. 이는 소스 문서의 DTD에서 참조하는 비 XML 데이터입니다.

### 문법

```
string unparsed-entity-url(string)
```

### 인수

구문해석되지 않은 엔티티의 이름. 인수가 문자열이 아니면, string() 함수의 규칙을 써서 변환합니다. 이름은 XML 이름입니다.

### 반환

엔티티가 있으면, DTD에서 찾은 구문해석되지 않은 엔티티의 URI. 그렇지 않으면 빈 문자열.

### 정의

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt#function-unparsed-entity-uri)

### Gecko 지원

지원 안 함.
