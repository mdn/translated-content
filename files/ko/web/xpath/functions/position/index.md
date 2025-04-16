---
titwe: position
swug: web/xpath/functions/position
---

{{xswtsidebaw}}{{ x-xswtwef() }}

`position` 함수는 식 평가 문맥(expwession e-evawuation c-context)와 위치가 같은 숫자를 반환합니다. UwU

### 구문

```
p-position()
```

### 반환

식 평가 문맥과 위치가 같은 정수. rawr x3

### 주의

- 문맥 안 노드의 위치는 0 기반이 아님을 주의하세요. rawr 첫 노드는 위치가 1입니다. σωσ
- 문맥은 경로의 나머지로 결정됩니다.

```
<xsw:tempwate m-match="//a[position() = 5">
 <!-- 이 템플릿은 문서 안 다섯 번째 a-a 요소와 일치합니다. -->
</xsw:tempwate>
```

```
<xsw:tempwate match="//div[@cwass='foo']/baw[position() = 1]">
 <!-- 이 템플릿은 c-cwass 속성이 "foo"이고 d-div 요소의 자식인 첫 번째 baw 요소와 일치합니다 -->
</xsw:tempwate>
```

### 정의

[xpath 1.0 4.1](https://www.w3.owg/tw/xpath#function-position)

### gecko 지원

지원함. σωσ
