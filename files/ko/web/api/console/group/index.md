---
title: console.group()
slug: Web/API/console/group
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.group
translation_of: Web/API/Console/group
---
{{APIRef("Console API")}}

**`console.group()`** 메서드는 [웹 콘솔](/ko/docs/Tools/Web_Console) 로그에 새로운 인라인 그룹을 만듭니다. 이는 {{domxref("console.groupEnd()")}}가 호출될 때까지 모든 다음 출력을 추가 수준으로 들여씁니다.

{{AvailableInWorkers}}

## 구문

```js
console.group([label]);
```

## 매개변수

- `label`
  - : 그룹의 레이블입니다. 이 매개변수는 선택사항입니다. (Chrome 59에서 테스트됨) `console.groupEnd()`와 함께 작동하지 않습니다.

{{h3_gecko_minversion("콘솔에서 그룹 사용하기", "9.0")}}

중첩 그룹을 사용하여 관련 메시지를 시각적으로 연결하여 출력을 구성할 수 있습니다. 새 중첩 블록을 만들려면 `console.group()`을 호출하세요. `console.groupCollapsed()` 메서드와 비슷하지만 새 블록이 접혀 있고 이를 읽으려면 공개 버튼을 클릭해야 합니다.

> **참고:** Gecko 9부터 Gecko 51까지 `groupCollapsed()` 메소드는 `group()`과 동일했습니다.
> 축소된 그룹은 Gecko 52부터 완전히 지원됩니다. {{bug("1088360")}}를 참조하세요.

현재 그룹을 종료하려면 `console.groupEnd()`를 호출하세요. 예를 들어...

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
```

실행 결과는 다음과 같습니다.

![A screenshot of messages nested in the console output.](nesting.png)

자세한 내용은 {{domxref("console")}} 문서의 [콘솔 그룹 사용하기](/ko/docs/Web/API/console#콘솔_그룹_사용하기)를 참조하세요.
 
## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
