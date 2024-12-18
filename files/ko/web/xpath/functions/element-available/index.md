---
title: element-available
slug: Web/XPath/Functions/element-available
---

{{XsltSidebar}}{{ XsltRef() }}

`element-available` 함수는 요소가 이용 가능한 지를 결정하고 true나 false를 반환합니다.

### 구문

```
element-available(QName )
```

### 인수

- `QName`
  - : 유효한 QName으로 평가해야 합니다. QName은 식 범위(scope)에서 이름공간 선언을 써서 확장 이름으로 확장됩니다.

### 반환

만약 확장 이름이 명령 이름이면 true를 반환합니다. 만약 확장 이름에 XSLT 이름공간 URI와 같은 이름공간 URI이 있으면, XSLT로 정의된 요소를 참조합니다. 그렇지 않으면, extension 요소를 참조합니다. 만약 확장 이름에 null 이름공간 URI가 있으면, element-available 함수는 false를 반환합니다.

### 정의

[XSLT 1.0 15](https://www.w3.org/TR/xslt#function-element-available)

### Gecko 지원

지원함.
