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

**`console.group()`** 메서드는 [웹 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) 로그에 새로운 인라인 그룹을 생성하여, {{domxref("console.groupEnd()")}}가 호출되기 전까지의 모든 콘솔 메시지를 한 단계 들여쓰기합니다.

{{AvailableInWorkers}}

## 구문

```js
group()
group(label)
```

### 매개변수

- `label` {{optional_inline}}
  - : 그룹의 레이블입니다.

## 예제

중첩 그룹을 사용하면 서로 관련된 메시지를 시각적으로 묶어서 출력 결과를 정돈할 수 있습니다. 새 중첩 블록을 생성하려면 `console.group()`을 호출하세요. `console.groupCollapsed()` 메서드는 `group()`과 비슷하지만, 그룹이 접힌 상태로 생성되므로 내용을 읽으려면 펼침 버튼을 클릭해야 합니다.

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

위 코드의 실행 결과는 다음과 같이 보입니다.

![중첩 메시지의 콘솔 출력 스크린샷.](nesting.png)

자세한 내용은 {{domxref("console")}} 문서의 [콘솔 그룹 사용하기](/ko/docs/Web/API/console#콘솔_그룹_사용하기)를 참고하세요.
 
## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("console.groupEnd()")}}

