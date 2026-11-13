---
title: "console: log() static method"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: 4d184a8203ba39cb283e153882d343125a3e56d9
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.log()`** 정적 메서드는 메시지를 콘솔에 출력합니다. 이 메시지는 선택적 대체 값을 포함한 단일 문자열이거나 더 많은 JavaScript 객체중 하나일 수 있습니다.

## 구문

```js-nolint
log(obj1)
log(obj1, /* …, */ objN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### 매개변수

- `obj1` … `objN`
  - : 출력할 JavaScript 객체 목록입니다. 이러한 각 객체의 문자열 표현은 입력한 순서대로 함께 출력됩니다. 최신 버전의 Chrome 및 Firefox에서, 콘솔에 기록되는 것은 객체에 대한 참조이며, `console.log()`를 호출하는 순간에 객체의 '값'이 반드시 필요한 것은 아닙니다.
- `msg`
  - : 0개 이상의 치환 문자열들을 포함하는 JavaScript 문자열입니다.
- `subst1` … `substN`
  - : `msg` 내의 치환 문자열들을 치환할 JavaScript 객체들입니다. 출력 형식에 추가 제어를 할 수 있게 해줍니다.

자세한 내용은 {{domxref("console")}} 문서의 [콘솔에 텍스트 출력](/ko/docs/Web/API/console#%ec%bd%98%ec%86%94%ec%97%90_%ed%85%8d%ec%8a%a4%ed%8a%b8_%ec%b6%9c%eb%a0%a5%ed%95%98%ea%b8%b0)을 참고하세요.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 객체 로깅하기

객체에 대한 정보는 게으르게 검색됩니다. 이는 로그 메시지가 객체가 처음 볼 때의 내용을 보여주며, 기록된 시점이 아니라는 것을 의미합니다. 예를 들어:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

이것은 `{}`를 출력합니다. 그러나 객체의 세부 정보를 확장하면 `prop: 123`임을 볼 수 있습니다.

객체를 변경하려는 경우 로깅된 정보가 업데이트되지 않도록 하려면, 로그에 기록하기 전에 객체를 [깊은 복사](/ko/docs/Glossary/Deep_copy)할 수 있습니다. 일반적인 방법은 {{jsxref("JSON.stringify()")}}를 사용한 후 {{jsxref("JSON.parse()")}}를 사용하는 것입니다.

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

브라우저에서 [`structuredClone()`](/ko/docs/Web/API/Window/structuredClone)와 같은 다른 대안들도 있습니다. 이들은 다양한 유형의 객체를 복제하는 데 더 효과적입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Microsoft Edge의 `console.log()`에 관한 문서](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.JS의 `console.log()`에 관한 문서](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chrome의 `console.log()`에 관한 문서](https://developer.chrome.com/docs/devtools/console/api/#log)
