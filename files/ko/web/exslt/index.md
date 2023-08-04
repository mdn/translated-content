---
title: EXSLT
slug: Web/EXSLT
---

{{ XsltRef() }} EXSLT는 [XSLT](/ko/XSLT)의 확장입니다. 많은 모듈이 있으며, Firefox에서 지원되는 것들은 다음과 같습니다.

- [Common](#Common) (`exsl`)
  - : 기본적인 확장 요소와 함수를 제공합니다.
- [Math](#Math) (`math`)
  - : 노드를 비교하는 기능을 제공합니다.
- [Regular expressions](#Regular_expressions) (`regexp`)
  - : JavaScript 구문 형식의 정규 표현식을 사용할 수 있는 기능을 제공합니다.
- [Sets](#Sets) (`set`)
  - : 집합을 처리하는 기능을 제공합니다.
- [Strings](#Strings) (`str`)
  - : 문자열을 처리하는 함수를 제공합니다.

### EXSLT 사용하기

EXSLT 확장을 사용하려면 스타일시트에 사용할 확장 기능의 이름공간(namespace)을 선언해야 합니다. 다음 예제에서는 정규 표현식 꾸러미를 사용하는 경우입니다.

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions"
                extension-element-prefixes="regexp">

<xsl:import href="regexp.xsl" />

...

</xsl:stylesheet>
```

### Common

EXSLT Common 꾸러미는 XSLT의 기능을 확장하는 기본적인 함수들을 제공합니다. Common 꾸러미의 이름공간은 `http://exslt.org/common`입니다.

#### 함수

- [exsl:node-set](/ko/EXSLT/exsl/node-set)
- [exsl:object-type](/ko/EXSLT/exsl/object-type)

### Math

EXSLT Math 꾸러미는 숫자 값들에 대한 처리와 노드를 비교하는 일들을 수행하는 함수를 제공합니다. Math 꾸러미의 이름공간은 `http://exslt.org/math`입니다.

#### 함수

- [math:highest](/ko/EXSLT/math/highest)
- [math:lowest](/ko/EXSLT/math/lowest)
- [math:max](/ko/EXSLT/math/max)
- [math:min](/ko/EXSLT/math/min)

### Regular expressions

EXSLT 정규 표현식 꾸러미는 JavaScript 스타일의 정규 표현식을 사용하여 텍스트의 검사, 일치, 치완 등을 수행하는 함수를 제공합니다.

EXSLT 정규 표현식의 이름공간은 `http://exslt.org/regular-expressions`입니다.

#### 함수

- [regexp:match](/ko/EXSLT/regexp/match)
- [regexp:replace](/ko/EXSLT/regexp/replace)
- [regexp:test](/ko/EXSLT/regexp/test)

### Sets

EXSLT Sets 꾸러미는 집합 연산을 수행하는 함수를 제공합니다. 이 함수들의 이름공간은 `http://exslt.org/sets`입니다.

#### 함수

- [set:difference](/ko/EXSLT/set/difference)
- [set:distinct](/ko/EXSLT/set/distinct)
- [set:intersection](/ko/EXSLT/set/intersection)
- [set:has-same-node](/ko/EXSLT/set/has-same-node)
- [set:leading](/ko/EXSLT/set/leading)
- [set:trailing](/ko/EXSLT/set/trailing)

### Strings

EXSLT Strings 꾸러미는 문자열을 처리하는 함수를 제공합니다. Strings 꾸러미의 이름공간은 `http://exslt.org/sets`입니다.

#### 함수

- [str:concat](/ko/EXSLT/str/concat)
- [str:split](/ko/EXSLT/str/split)
- [str:tokenize](/ko/EXSLT/str/tokenize)

### 참고

- [EXSLT web site](http://www.exslt.org/)
