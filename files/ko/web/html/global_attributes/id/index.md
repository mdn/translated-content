---
title: id
slug: Web/HTML/Global_attributes/id
---

{{HTMLSidebar("Global_attributes")}}

**`id`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 문서 전체에서 유일한 고유식별자(ID)를 정의합니다. 고유식별자의 목적은 [프래그먼트 식별자](/ko/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#프래그먼트)를 사용해 요소를 가리킬 때와 스크립트 및 스타일 적용 시 특정 요소를 식별하기 위함입니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> **경고:** `id` 특성의 값은 불투명 문자열(opaque string)입니다. 그 말은, 웹 작성자가 `id` 특성을 통해 사람이 읽을 수 있는 정보를 나타내서는 안된다는 것입니다. (코드 가독성 차원에서는 유용할 수 있습니다. `ticket-18569`와 `r45tgfe-freds&$@`을 비교해보세요.)

`id` 특성의 값이 공백(스페이스나 탭 등)을 포함해서는 안됩니다. 공백으로 값을 구분하는 [`class`](/ko/docs/Web/HTML/Global_attributes#class) 속성과 달리, 하나의 요소는 하나의 ID만 가질 수 있습니다. 만약 ID에 공백을 넣는다면, 브라우저는 그 공백마저 ID의 일부로 취급합니다.

> **참고:** {{glossary("ASCII")}} 문자, 숫자, `'_'`, `'-'` 및 `'.'`를 제외한 문자는 HTML 4에서 허용하지 않았으므로 호환성 문제가 발생할 수 있습니다. 이런 제한은 HTML 5에서는 해제되었으나, 호환성을 위해, ID는 위의 문자로 시작해야 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- `id` 특성을 반영하는 {{domxref("Element.id")}} 속성.
