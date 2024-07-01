---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
---

{{HTMLSidebar("Global_attributes")}}

**`autocapitalize`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 사용자가 입력하거나 수정하는 텍스트를 자동으로 대문자로 바꾸는 방식을 제어하는 열거형 특성입니다. 가능한 값은 다음과 같습니다.

- `off` 또는 `none`: 대문자로 변환하지 않음 (모든 문자의 기본값 소문자)
- `on` 또는 `sentences`: 각 문장의 첫 번째 문자는 기본값 대문자, 다른 모든 문자는 기본값 소문자
- `words`: 각 단어의 첫 번째 문자는 기본값 대문자, 다른 모든 문자는 기본값 소문자.
- `characters`: 모든 문자의 기본값 대문자

`autocapitalize` 특성은 물리적인 키보드에서 입력하는 경우 아무런 영향도 주지 않으며, 대신 음성 입력이나 모바일 장치의 가상 키보드 등, 문장 첫 글자를 자동으로 대문자로 변환해서 사용자를 돕곤 하는 방식에 영향을 줍니다. `autocapitalize` 특성을 사용하면 이런 동작을 HTML 작성자가 재정의할 수 있습니다.

`autocapitalize` 특성을 [`type`](/ko/docs/Web/HTML/Element/input#type) 특성의 값이 `url`, `email`, `password`인 {{HTMLElement("input")}} 요소에 적용해도 자동 대문자 변환은 되지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
