---
title: 제어 흐름 (Control flow)
slug: Glossary/Control_flow
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

'제어 흐름'은 컴퓨터가 스크립트의 명령문을 실행하는 순서입니다.

컴퓨터가 조건문 및 루프아 같이 제어 흐름을 변경하는 (매우 빈번합니다) 구조를 통해 실행되지 않는 한, 코드는 파일의 첫 번재 줄부터 마지막 줄까지 순서대로 실행됩니다.

예를 들어, 웹페이지 양식에서 사용자 데이터의 유효성을 검사하는 데 사용되는 스크립트를 상상해보세요. 스크립트는 검증된 데이터를 제출하지만, 사용자가 필수 입력 필드를 비워두면, 이를 입력하라는 메시지를 표시합니다. 이를 위해서, 스크립트는 {{Glossary("Conditional", "조건")}} 구조 또는 `if...else`를 사용하여 양식이 다 채워졌는지 여부에 따라 다른 코드가 실행되도록 합니다.

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

{{glossary("JavaScript")}} 또는 {{glossary("PHP")}} 등의 일반적인 스크립트에는 조건문, {{Glossary("Loop", "반복문")}} 및 {{Glossary("Function", "함수")}}를 포함한 많은 제어 구조가 포함되어 있습니다. {{Glossary("Event", "이벤트")}}가 발생할 때 스크립트의 일부가 실행되도록 설정할 수도 있습니다.

예를 들어, 위의 인용문은 사용자가 양식에 대해 **제출** 버튼을 클릭할 때 실행되는 함수 내에 있을 수 있습니다. 함수에는 양식의 모든 필드를 반복하여 각 필디를 차례로 확인하는 반복문이 포함될 수도 있습니다. `if` 및 `else` 섹션의 코드를 다시 살펴보면, `promptUser` 및 `submitForm` 줄은 스크립트의 다른 함수에 대한 호출일 수도 있습니다. 보시다시피, 제어 구조는 단 몇 줄의 코드로도 복잡한 처리 흐름을 지시할 수 있습니다.

제어 흐름은 스크립트를 읽을 때 처음부터 끝까지 읽어야 할 뿐만 아니라 프로그램 구조와 실행 순서에 미치는 영향도 살펴봐야 함을 의미합니다.

## 같이 보기

- 위키백과의 [제어 흐름](https://en.wikipedia.org/wiki/Control_flow)
- MDN의 [JavaScript 참조 - 제어 흐름](/ko/docs/Web/JavaScript/Reference#control_flow)
- MDN의 [명령문 (제어 흐름)](/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
