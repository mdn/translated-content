---
title: aria-label 속성 사용
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
tags:
  - ARIA
  - Accessibility
  - aria-label
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
---
[`aria-label`](https://www.w3.org/TR/wai-aria/#aria-label) 속성은 현재 요소에 레이블을 정의하기 위해서 사용합니다. 텍스트 레이블이 화면에 표시되지 않을 때에 사용하세요. 만약에 요소에 레이블을 정의하는 화면에 보이는 텍스트가 있다면 [aria-labelledby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)을 대신 사용하세요

이 속성은 일반적인 HTML 요소와 함께 사용할 수 있습니다. ARIA `role` 이 적용된 요소에만 한정되지 않습니다.

### 값

문자열

### 사용자 에이전트와 보조도구에 대한 영향

> **참고:** 보조기기가 이 기술을 처리하는 방법에 대한 의견에는 차이가 있을 수 있습니다. 위에서 제공하는 정보는 그러한 의견 중 하나일 뿐 규범이 아닙니다.

## 예

#### 예 1: 다수의 레이블

아래의 예제에서 버튼은 X가 가운데있는 전형적인 "닫기" 버튼처럼 스타일됩니다. 버튼의 목적이 대화상자를 닫는 것임을 암시하는 것이 없으므로 보조기기에 레이블을 제공하기 위해 `aria-label` 를 사용합니다.

```html
<span class="tag">
  <button aria-label=<span class="str">"Close"</span> onclick=<span class="str">"myDialog.close()"</span>></span>X<span class="tag">
  </button>
</span>
```

#### 동작하는 예:

### 주의

- 레이블에 대한 가장 일반적인 접근성 API 매핑은 접근 가능한 이름 프로퍼티입니다.
- `aria-label`이 포함된 속성을 대부분의 자동 번역 서비스는 무시합니다.

### Used by ARIA roles

베이스 마크업의 모든 요소

### 관련된 ARIA 기술

- [Using the aria-labelledby attribute](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)

### 적합성

TBD: 일반적인 UA와 AT 제품 조합을 위한 서포트 정보를 추가합니다.

### 추가 리소스

- [WAI-ARIA specification for aria-label](https://www.w3.org/TR/wai-aria/#aria-label)
