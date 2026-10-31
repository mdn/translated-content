---
title: 매직 주석
slug: Web/JavaScript/Reference/Magic_comments
l10n:
  sourceCommit: 68ef78c94cab228024ae2a40223f2b059765b508
---

**매직 주석**(**주석 지시문**, **어노테이션** 등으로도 불립니다)은 특정 엔진, 번들러, 타입 검사기, 디버거 등이 알아보고 선택적 기능을 활성화하는 특별한 [주석](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#comments)입니다. 이하에서는 이런 도구를 '처리기'라고 부르겠습니다. 주석을 이해하지 못하는 처리기는 이를 무시합니다. 이 문서에서는 JavaScript 소스 코드에서 흔히 볼 수 있는 매직 주석의 유형과 각 주석을 처리하는 도구를 소개합니다.

대부분의 매직 주석은 프로그램의 런타임 동작을 바꾸지 않습니다. 대신 실행을 최적화하거나 정적 검사를 켜고 끄거나 추가 메타데이터를 제공할 수 있습니다. 런타임 동작을 바꾸는 문자열 지시문과는 다릅니다. 예를 들어 표준 [`"use strict"`](/ko/docs/Web/JavaScript/Reference/Strict_mode)는 엄격 모드를 활성화하고, React의 [`"use server"`](https://react.dev/reference/rsc/use-server)와 [`"use client"`](https://react.dev/reference/rsc/use-client)는 컴포넌트가 서버와 클라이언트 중 어디서 실행될지 결정합니다.

일반 주석과 구분하기 위해 매직 주석에는 보통 `#`이나 `@` 같은 표식을 붙입니다. 예를 들면 `//# my-setting-name` 또는 `//@ my-setting-name`과 같습니다. 정확한 구문은 주석 유형마다 다릅니다.

> [!NOTE]
> 이 기능을 부르는 보편적인 이름은 없고, 앞서 소개한 용어 사이에도 미묘한 차이가 있을 수 있습니다. 프라그마는 보통 파일 첫머리에 두어 컴파일러나 엔진에 스크립트 전체에 관한 정보를 전달합니다. 어노테이션은 특정 구문에 적용하며 어디에나 둘 수 있습니다. 지시문은 더 일반적인 용어지만 JavaScript의 `"use strict"`와 같은 문자열 지시문을 뜻하기도 합니다. 이 문서에서는 이 용어들을 구분 없이 사용합니다.

## 컴파일 힌트 프라그마

컴파일 힌트 프라그마는 JavaScript 엔진에 코드를 미리 컴파일하는 방법을 알려줍니다. 프라그마를 해석하는 방식은 엔진마다 다릅니다.

컴파일 힌트 프라그마는 WICG 제안 [Explicit JavaScript Compile Hints](https://wicg.github.io/explicit-javascript-compile-hints-file-based/)에 명시되어 있습니다.

### 즉시 컴파일

다음 프라그마는 현재 스크립트의 모든 함수를 즉시 컴파일하도록 설정합니다.

```js
//# allFunctionsCalledOnLoad
```

구문 및 위치 요구사항은 다음과 같습니다.

- 이 주석은 스크립트의 맨 앞에 두어야 합니다. 코드나 공백은 앞에 올 수 없고, 다른 한 줄 주석이나 블록 주석만 앞에 올 수 있습니다.
- 주석은 한 줄 주석이나 블록 주석일 수 있습니다.
- `//` 또는 `/*`와 `#` 사이에 공백이 없어야 합니다.
- `allFunctionsCalledOnLoad` 앞뒤에는 공백을 얼마든지 넣을 수 있습니다.

다음 예제에서는 매직 주석으로 파일의 함수가 페이지를 불러오는 동안 호출될 가능성이 높음을 나타냅니다.

```js
//# allFunctionsCalledOnLoad
function init() {
  console.log("초기화");
}

init();
```

이 힌트가 없으면 엔진은 함수가 호출될 때까지 컴파일을 미룰 수 있습니다.

즉시 컴파일에는 다음과 같은 이점이 있습니다.

- 파싱을 두 번 할 필요가 없습니다. 엔진은 초기화 중에 함수의 시작과 끝을 찾으려고 먼저 간단히 파싱하고, 함수가 호출되면 다시 전체 파싱을 합니다. 함수를 미리 컴파일하면 처음부터 전체 파싱을 한 번만 하면 됩니다.
- 컴파일을 병렬로 진행할 수 있습니다. 실행 중 함수가 호출되어 지연 컴파일이 시작되면 동기성을 유지하기 위해 컴파일하는 동안 메인 스레드가 멈춥니다. 반면 스크립트 로드는 비동기이므로 컴파일 일정을 더 효율적으로 조정하고, 스크립트를 가져오는 동안 파싱할 수도 있습니다.

반대로 호출되지 않을 함수까지 컴파일하면 시간과 메모리를 낭비할 수 있습니다. 성능과 관련된 다른 선택과 마찬가지로 벤치마크를 통해 장단점을 비교하세요. 프라그마 이름처럼, 페이지를 불러오는 동안 실제로 호출되는 함수가 있을 때만 이 모드를 켜는 것이 좋습니다.

v8.dev의 [Faster JavaScript Startup with Explicit Compile Hints](https://v8.dev/blog/explicit-compile-hints)도 참고하세요.

## 소스 맵 어노테이션

소스 맵 어노테이션은 JavaScript 코드를 소스 파일과 연결합니다. 덕분에 생성된 코드, 평가된 코드, 최소화된 코드를 더 쉽게 디버깅할 수 있습니다.

소스 맵 어노테이션은 TC39 명세 [ECMA-426 Source map format](https://tc39.es/ecma426/)에 명시되어 있습니다.

### 소스 URL

다음 어노테이션은 코드 조각에 URL 식별자를 부여합니다.

```js
//# sourceURL=<url>
```

구문 및 위치 요구사항은 다음과 같습니다.

- 이 주석은 모든 코드 뒤, 스크립트의 끝에 두어야 합니다. 주석 뒤에는 다른 한 줄 주석이나 공백, 줄 종결자가 올 수 있습니다.
- 주석은 한 줄 주석이어야 합니다.
- `#` 대신 `@` 기호를 사용할 수도 있지만 `#`을 권장합니다. `//@`는 [Internet Explorer 프라그마](#레거시_조건부_컴파일)와 충돌할 수 있습니다.
- `sourceURL=<url>` 앞뒤에는 공백을 얼마든지 넣을 수 있습니다.
- `<url>`에는 공백 문자가 포함되면 안 됩니다. 공백 문자는 `%20`으로 {{Glossary("Percent-encoding", "퍼센트 인코딩")}}해야 합니다.

소스 URL은 이미 URL이 지정된 리소스에서 가져오지 않은 코드에 특히 유용합니다. 예를 들어 {{jsxref("Global_Objects/eval", "eval()")}}로 실행되는 코드가 있습니다.

```js
eval(
  'console.log("안녕하세요"); throw new Error("오류");\n//# sourceURL=generated-code.js',
);
```

위 코드는 브라우저 콘솔에 다음과 같은 출력을 표시할 수 있습니다.

```plain
안녕하세요        generated-code.js:1
Uncaught Error: 오류
    <anonymous> generated-code.js:1
    <anonymous> debugger eval code:1
```

이 어노테이션은 여러 기능에서 사용되지만, 주로 디버깅에 활용됩니다.

- 위에서 설명한 콘솔 및 디버거 출력
- `Error`의 {{jsxref("Error/stack", "stack")}} 속성
- `sourceMapURL` 해석

developer.chrome.com의 [naming evaluated code with `sourceURL`](https://developer.chrome.com/docs/devtools/javascript/source-maps#sourceurl)과 Firebug의 [Give your eval a name with `//@ sourceURL`](https://web.archive.org/web/20120814122523/http://blog.getfirebug.com/2009/08/11/give-your-eval-a-name-with-sourceurl/)도 참고하세요.

### 소스 맵 URL

다음 어노테이션은 생성된 코드를 [소스 맵](/ko/docs/Glossary/Source_map)에 연결합니다.

```js
//# sourceMappingURL=<url>
```

구문 및 위치 요구사항은 `sourceURL`과 같습니다.

소스 맵 URL에는 상대 URL을 사용할 수 있습니다. 이 경우 [ECMA 426](https://tc39.es/ecma426/#sec-linking-generated-code)에 따라 `sourceURL`, `<script>` 요소의 `src` 속성, 해당 `<script>` 요소를 포함하는 문서의 출처 등을 기준으로 URL을 해석합니다. 인라인 소스 맵을 담은 `data:` URL도 사용할 수 있습니다. HTTP {{HTTPHeader("SourceMap")}} 헤더가 있으면 이 주석보다 우선합니다.

디버거는 맵을 이용해 원본 소스를 표시하고, 최소화된 번들의 중단점을 원본 코드의 위치에 대응시킬 수 있습니다. 편집기에서 정의로 이동하거나 참조를 찾을 때도 유용합니다.

번들러나 트랜스파일러 같은 빌드 도구는 소스 맵과 함께 결과물에 이 주석을 넣습니다. 따라서 보통 개발자가 직접 작성할 필요는 없습니다.

## 번들러 어노테이션

번들러, 최소화 도구, 트랜스파일러는 매직 주석으로 코드 생성과 최적화, 의존성 처리를 제어합니다. 이 어노테이션은 실행 중인 코드를 처리하는 JavaScript 엔진이 아니라 빌드 도구가 빌드 과정에서 해석합니다.

이런 어노테이션을 정한 명세는 없으며 번들러마다 자체 어노테이션을 제공하기도 합니다. 여기서는 널리 알려져 있고 여러 도구에서 지원되는 어노테이션을 소개합니다. 사용 중인 번들러가 특정 어노테이션을 지원하는지는 해당 문서에서 확인하세요.

### 트리 셰이킹

`/*#__PURE__*/` 및 `/*@__PURE__*/` 어노테이션은 함수나 생성자 호출의 결과를 사용하지 않을 때 그 호출을 제거해도 된다고 표시합니다.

```js
function createPoint(x, y) {
  return { x, y };
}

const point = /*#__PURE__*/ createPoint(1, 2);
```

> [!NOTE]
> 여기서 '순수하다'는 말은 함수형 프로그래밍에서의 순수성과 다릅니다. 결과가 무작위이거나 외부 상태에 따라 달라질 수도 있습니다. 호출을 제거해도 중요한 애플리케이션 동작에 영향이 없을 때 이 어노테이션을 사용할 수 있습니다.

이 어노테이션이 없으면 변수 `point`를 사용하지 않더라도 번들러가 함수 호출을 남겨 둘 수 있습니다.

```js
// -- 컴파일러 출력 --
function createPoint(x, y) {
  return { x, y };
}

createPoint(1, 2);
```

이 어노테이션이 있으면 번들러는 함수 호출을 제거할 수 있습니다. `createPoint()`를 다른 곳에서 호출하지 않는다면 함수 정의까지 제거할 수 있습니다. 어노테이션을 잘못 붙이면 필요한 동작도 제거될 수 있습니다.

어노테이션은 해당 함수 호출에만 적용됩니다. 인수 식을 평가할 때 부작용이 생기는지는 별도로 판단합니다. 다음 예제를 보세요.

```js
/*#__PURE__*/ createPoint(1, getY());
```

이 예제에서 `createPoint()` 호출에는 부작용이 없고, `1`을 평가할 때도 부작용이 없습니다. 하지만 번들러는 `getY()`에 부작용이 있는지 알 수 없으므로 결과물에 `getY()` 호출을 남깁니다. 이 때문에 `createPoint()` 호출도 남을 수 있습니다. 모든 호출을 제거하려면 각 함수 호출에 어노테이션을 붙여야 합니다.

```js
/*#__PURE__*/ createPoint(1, /*#__PURE__*/ getY());
```

esbuild의 [pure annotations](https://esbuild.github.io/api/#pure)와 Terser의 [annotations](https://terser.org/docs/miscellaneous/#annotations)도 참고하세요.

일부 번들러는 `/*#__NO_SIDE_EFFECTS__*/` 및 `/*@__NO_SIDE_EFFECTS__*/`도 인식합니다. 이 어노테이션을 함수 선언이나 함수가 들어 있는 지원 대상 변수 선언에 붙이면, 해당 함수를 호출해도 부작용이 없다고 처리합니다.

```js
/*#__NO_SIDE_EFFECTS__*/
function createPoint(x, y) {
  return { x, y };
}
```

Rollup의 [트리 셰이킹 어노테이션](https://rollupjs.org/configuration-options/#treeshake-annotations)도 참고하세요.

### 코드 최소화

주의해서 사용해야 할 코드 최소화 기법으로 인라이닝과 속성 이름 축약이 있습니다. 인라이닝은 함수 호출을 함수 본문으로 바꾸고, 속성 이름 축약은 속성 이름을 더 짧은 이름으로 바꿉니다.

특정 함수 호출에 `/*@__INLINE__*/` 또는 `/*@__NOINLINE__*/`을 붙여 인라이닝을 강제하거나 막을 수 있습니다. 다음 사항을 고려하세요.

- 인라이닝은 스택 프레임을 쌓고 해제하는 과정을 줄여 호출 성능을 높일 수 있습니다. 하지만 JavaScript 엔진도 자체적으로 인라이닝을 하므로, 소스 코드에서 인라이닝을 지정하면 엔진의 최적화 판단이 예측하기 어려운 방식으로 달라질 수 있습니다.
- 함수를 한 번만 호출한다면 인라이닝으로 번들 크기가 줄 수 있지만, 여러 번 호출한다면 오히려 커질 수 있습니다. 최소화 도구는 보통 번들 크기를 줄이는 방향으로 판단합니다.

속성 이름 축약을 사용하면 최소화 도구가 전체 코드에서 각 속성 이름을 서로 구분되는 짧은 문자열로 바꿉니다. 객체가 외부 함수에 전달되거나 내보낸 함수의 반환 값이 되는 등 외부에 노출될 수 있어 안전하지 않으므로, 보통은 명시적으로 활성화해야 합니다. 사용한다면 밑줄로 시작하는 이름처럼 내부에서만 쓰는 속성으로 대상을 제한하는 편이 좋습니다.

`/*@__KEY__*/` 어노테이션은 문자열 리터럴이 이름을 축약할 속성임을 표시합니다. 최소화 도구는 기본적으로 일부 구문만 인식하므로, 일반 함수에 전달하는 문자열을 속성 이름으로 처리하려면 이 어노테이션을 붙여야 합니다.

```js
const record = { _internalValue: 42 };
Object.getOwnPropertyDescriptor(record, /*@__KEY__*/ "_internalValue");
```

`/*@__MANGLE_PROP__*/` 어노테이션은 특정 속성이나 클래스 필드의 이름 축약을 명시적으로 활성화할 수 있습니다.

Terser의 [Annotations](https://terser.org/docs/miscellaneous/#annotations)도 참고하세요.

### JSX 변환

JSX 트랜스파일러는 파일 수준 프라그마를 사용해 JSX를 JavaScript로 변환하는 방법을 선택합니다. 예를 들어 다음과 같습니다.

```jsx
/** @jsxRuntime automatic */
/** @jsxImportSource preact */

const heading = <h1>안녕하세요</h1>;
```

다음과 같은 결과물이 생성됩니다.

```js
import { jsx as _jsx } from "preact/jsx-runtime";

const heading = _jsx("h1", {
  children: "안녕하세요",
});
```

이 설정은 트랜스파일러에서 전역으로 구성할 수도 있습니다. 특정 파일에 다른 설정을 적용할 때만 프라그마가 필요합니다.

Babel의 [JSX transform](https://babeljs.io/docs/babel-plugin-transform-react-jsx/)과 esbuild의 [JSX configuration](https://esbuild.github.io/api/#jsx)도 참고하세요.

## 정적 검사기 지시문

정적 검사기와 개발 도구도 주석에서 설정이나 메타데이터를 읽습니다. 예를 들면 다음과 같습니다.

- **JSDoc**: `@type`, `@param`과 같은 [JSDoc 어노테이션](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)은 타입 정보를 제공합니다. 팝업 설명과 같은 편집기 기능에도 활용됩니다.
- **TypeScript (`tsc`)**: [`// @ts-check` 및 `// @ts-nocheck`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#errors-in-js-files-with---checkjs)는 JavaScript 파일의 타입 검사를 활성화하거나 비활성화합니다. `// @ts-ignore`는 다음 줄의 진단을 억제합니다. [`// @ts-expect-error`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)는 억제할 오류가 없을 때도 오류를 보고합니다.
- **ESLint**: `/* eslint no-console: "warn" */`과 같은 [설정 주석](https://eslint.org/docs/latest/use/configure/rules)은 규칙을 설정하고, `// eslint-disable-next-line no-console`은 다음 줄의 규칙 검사를 억제합니다.
- **Prettier**: [`// prettier-ignore`](https://prettier.io/docs/ignore#javascript)는 다음 구문 노드를 서식 지정 대상에서 제외합니다.
- **Flow**: [`// @flow`](https://flow.org/en/docs/getting-started/)는 파일의 타입 검사를 활성화합니다. `/*: number */`와 같은 [주석 타입](https://flow.org/en/docs/types/comments/)은 JavaScript 주석 안에 타입 구문을 넣습니다.

## 레거시 조건부 컴파일

> [!WARNING]
> 이 절에서는 Internet Explorer 전용 기능을 다룹니다. Internet Explorer와 함께 이제는 사용되지 않지만 오래된 코드에서 볼 수 있습니다. `//# sourceMapURL`을 `//@ sourceMapURL`보다 권장하는 이유처럼 언어 설계에도 영향을 주었으므로, 역사적 참고를 위해 남겨 둡니다.

Internet Explorer의 JScript 엔진은 특수한 주석 안의 코드를 해석하는 비표준 기능인 조건부 컴파일을 지원했습니다. 최적화 힌트나 디버깅 메타데이터와 달리, 조건부 컴파일 주석은 실제로 실행되는 코드를 바꿀 수 있었습니다.

`@cc_on` 문으로 조건부 컴파일을 켰습니다. `@set` 문은 조건부 컴파일 변수를 정의하고, `@if`, `@elif`, `@else`, `@end` 문은 변수 값에 따라 실행할 코드를 선택했습니다. JScript 엔진 버전을 나타내는 `@_jscript_version` 같은 미리 정의된 변수도 있었습니다.

```js
var supportsConditionalCompilation = false;
/*@cc_on
  supportsConditionalCompilation = true;
@*/
```

조건부 컴파일을 지원하는 엔진에서는 주석 안의 할당문이 실행됩니다. 다른 엔진은 블록 전체를 일반 주석으로 취급하므로 변수 값은 `false`로 남습니다. `//@cc_on`처럼 한 줄 주석으로 쓰는 방법도 있었습니다.

Microsoft의 과거 [JScript Conditional Compilation 초안](https://archives.ecma-international.org/2007/misc/jscriptconditionalcompilation2.pdf)도 참고하세요.
