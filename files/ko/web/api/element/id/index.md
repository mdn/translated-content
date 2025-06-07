---
title: Element.id
slug: Web/API/Element/id
---

{{ ApiRef("DOM") }}

**`Element.id`** 속성은 요소의 식별자를 나타내며, HTML의 전역적인 id 속성을 반영합니다.

이 값은 도큐먼트 내에서 유일해야 하며, 종종 {{domxref("document.getElementById", "getElementById")}}를 사용하여 요소를 찾아내는데 사용됩니다. `id` 속성을 이용하는 다른 보편적인 방법에는 [CSS](/ko/docs/Web/CSS)로 도큐먼트를 스타일링 할때 [ID를 선택자로 사용](/ko/docs/Web/CSS/ID_selectors)하는 방법이 있습니다.

> [!NOTE]
> 식별자는 대소문자를 구분하지만, 그래도 ID를 대소문자만 다르게 생성해서는 안됩니다. ([클래스명과 식별자에서의 대소문자 구분](/ko/docs/Case_Sensitivity_in_class_and_id_Names)참고).

## Syntax

```js
var idStr = elt.id; // 아이디를 가져옵니다.
elt.id = idStr; // 아이디를 부여합니다
```

- *`idStr`*는 요소의 식별자입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- The DOM [**id**](/ko/docs/Web/HTML/Reference/Global_attributes/id) global attribute.
