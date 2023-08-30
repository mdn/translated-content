---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---

{{jsSidebar("Statements")}}

**`debugger` 문**은 중단점 설정 등 현재 사용할 수 있는 디버그 기능을 호출합니다. 사용할 수있는 디버깅 기능이 없으면 아무런 동작도 하지 않습니다.

## 구문

```js
debugger;
```

## 예제

다음 예제에서는 함수가 호출 시 디버거를 활성화하도록 `debugger`를 삽입한 모습입니다.

```js
function potentiallyBuggyCode() {
  debugger;
  // 버그가 있을 것으로 생각하는 코드를 분석하거나, 한 단계씩 진행해보거나...
}
```

디버거가 활성화되면 디버거 문의 위치에서 실행이 일시중지됩니다. 스크립트 소스의 중단점과 비슷합니다.

[![Paused at a debugger statement.](screen_shot_2014-02-07_at_9.14.35_am.png)](screen_shot_2014-02-07_at_9.14.35_am.png)

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 디버깅](/ko/docs/Mozilla/Debugging/Debugging_JavaScript)
- [Firefox 개발자 도구의 디버거](/ko/docs/도구들/Debugger)
