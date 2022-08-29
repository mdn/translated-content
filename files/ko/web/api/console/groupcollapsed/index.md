---
title: console.groupCollapsed()
slug: Web/API/console/groupCollapsed
tags:
  - API
  - DOM
  - DOM Reference
  - Debugging
  - Method
  - Reference
  - Web Development
  - web console
browser-compat: api.console.groupCollapsed
translation_of: Web/API/console/groupCollapsed
---
{{APIRef("Console API")}}

**`console.groupCollapsed()`** 메서드는 [웹 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)에 새로운 인라인 그룹을 생성합니다. {{domxref("console.group()")}}과는 달리, `console.groupCollapsed()`의 그룹은 닫힌 상태로 생성되며, 안쪽의 내용을 보려면 그룹 옆의 펼침 버튼으로 그룹을 먼저 펼쳐야 합니다.

{{domxref("console.groupEnd()")}}를 호출해서 부모 그룹으로 나갈 수 있습니다.

자세한 내용과 예제는 {{domxref("console")}} 문서의 [콘솔 그룹 사용하기](/ko/docs/Web/API/console#콘솔_그룹_사용하기)를 참고하세요.

{{AvailableInWorkers}}

## 구문

```js
groupCollapsed()
groupCollapsed(label)
```

### 매개변수

- `label` {{optional_inline}}
  - : 그룹의 레이블입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
