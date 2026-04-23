---
title: translate
slug: Web/HTML/Reference/Global_attributes/translate
original_slug: Web/HTML/Global_attributes/translate
---

{{HTMLSidebar("Global_attributes")}}

**`translate`** [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)은 페이지를 지역화할 때 요소의 {{domxref("Text")}} 노드 자식 및 번역 가능한 특성의 값을 번역해야 되는지, 아니면 그대로 유지해야 하는지 나타내는 열거형 속성입니다. 가능한 값은 다음과 같습니다.

- 빈 문자열 또는 `"yes"`는 페이지 지역화 과정에서 요소를 번역해야 함을 나타냅니다.
- `"no"`는 요소의 내용을 그대로 유지해야 함을 나타냅니다.

비록 모든 브라우저가 `translate` 특성을 인식하는건 아니지만, Google 번역 등의 자동 번역 시스템과 번역가가 사용하는 도구가 값을 존중할 수 있습니다. 그러므로 웹 작성자로서 번역되어선 안될 요소를 표시하는 것이 중요합니다.

## 예제

다음 예제에서의 `translate` 특성은 푸터에 배치한 회사의 브랜드 이름을 번역하지 말 것을 요청합니다.

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes).
- 이 특성을 반영하는 {{domxref("HTMLElement.translate")}} 속성.
- [HTML의 translate 특성 사용하기](https://www.w3.org/International/questions/qa-translate-flag)
