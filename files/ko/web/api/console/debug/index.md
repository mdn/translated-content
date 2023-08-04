---
title: console.debug()
slug: Web/API/console/debug
---

{{APIRef("Console API")}}

**`console.debug()`** 메서드는 메시지를 "디버그" 중요도로 콘솔에 출력합니다. 디버그 중요도 메시지는 별도 설정 없이는 보이지 않습니다. 대부분의 경우 로그 수준은 콘솔 UI 내에서 구성됩니다. 이 로그 수준은 \`Debug\` 또는 \`Verbose\` 로그 수준에 해당할 수 있습니다.

{{AvailableInWorkers}}

## 구문

```js
console.debug(obj1 [, obj2, ..., objN]);
console.debug(msg [, subst1, ..., substN]);
```

### 매개변수

- `obj1` ... `objN`
  - : 출력에 사용할 JavaScript 객체. 각각의 문자열 표현은 입력한 순서대로 함께 출력됩니다.
- `msg`
  - : 0개 이상의 치환 문자열을 포함하는 JavaScript 문자열. `subst1`부터 `substN`까지 순서대로 치환됩니다.
- `subst1` ... `substN`
  - : `msg` 매개변수의 치환 문자열에 대체할 JavaScript 객체. 출력 형식에 추가 제어를 할 수 있게 해줍니다. 치환 작동 방식에 대한 설명은 [console](/ko/docs/Web/API/console) 문서의 [문자열 치환 사용하기](/ko/docs/Web/API/console#문자열_치환_사용하기)를 참조하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
