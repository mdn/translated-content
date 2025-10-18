---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{jsSidebar("Statements")}}

**`async function*`** 선언은 주어진 이름으로 새 비동기 제너레이터 함수의 {{Glossary("binding")}}을 생성합니다.

또한 [`async function*` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/async_function*)을 사용해서 비동기 제너레이터 함수를 선언할 수 있습니다.

{{InteractiveExample("JavaScript Demo: async function* declaration", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str += val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## 구문

```js-nolint
async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> 비동기 제너레이터 함수는 그에 대응하는 화살표 함수 형태가 없습니다.

> [!NOTE]
> `function`과 `*`는 별개의 토큰이므로 공백이나 [줄바꿈 문자](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)로 분리할 수 있습니다. 하지만 `async`와 `function` 사이에는 줄바꿈 문자가 올 수 없습니다. 그렇지 않으면 세미콜론이 [자동으로 삽입](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)되어, `async`는 식별자가 되고 나머지는 `function*` 선언이 됩니다.

### 매개변수

- `name`
  - : 함수의 이름.
- `param` {{optional_inline}}
  - : 함수의 형식 매개변수 이름입니다. 매개변수 구문은 [함수 레퍼런스](/ko/docs/Web/JavaScript/Guide/Functions#function_parameters)를 확인하세요.
- `statements` {{optional_inline}}
  - : 함수 본문을 구성하는 명령문입니다.

## 설명

`async function*` 선언은 {{jsxref("AsyncGeneratorFunction")}} 객체를 생성합니다. 비동기 제너레이터 함수가 호출될 때마다 [비동기 반복자 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)을 따르는 새로운 {{jsxref("AsyncGenerator")}} 객체를 반환합니다. `next()`를 호출할 때마다 반복자 결과 객체로 이행되는 {{jsxref("Promise")}}를 반환합니다.

비동기 제너레이터 함수는 [비동기 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function)와 [제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/function*)의 기능을 결합한 것입니다. 함수 본문 내에서 [`await`](/ko/docs/Web/JavaScript/Reference/Operators/await)와 [`yield`](/ko/docs/Web/JavaScript/Reference/Operators/yield) 키워드를 모두 사용할 수 있습니다. 이를 통해 `await`로 비동기 작업을 편리하게 처리하면서, 제너레이터 함수의 지연 실행 특성을 활용할 수 있습니다.

비동기 제너레이터에서 프로미스가 yield되면, 이터레이터 결과 프로미스의 최종 상태는 yield된 프로미스의 상태와 일치하게 됩니다.

예를 들어

```js
async function* foo() {
  yield Promise.reject(new Error("failed"));
}

foo()
  .next()
  .catch((e) => console.error(e));
```

yield된 프로미스가 거부되면 이터레이터 결과 또한 거부되기 때문에, `Error: failed`가 로그될 것입니다. 비동기 제너레이터 이행 결과의 `value` 속성은 또 다른 프로미스가 아닙니다.

`async function*` 선언은 {{jsxref("Statements/function", "function")}} 선언과 비슷하게 동작합니다 — 범위의 최상단으로 [호이스팅](/ko/docs/Glossary/Hoisting)되어 범위 내 어디서든 호출할 수 있으며, 특정 맥락에서만 다시 선언할 수 있습니다.

## 예제

### 비동기 제너레이터 함수 선언

비동기 제너레이터 함수는 각 `yield` 단계가 동기적이더라도 항상 결과 프로미스를 생성합니다.

```js
async function* myGenerator(step) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield 0;
  yield step;
  yield step * 2;
}

const gen = myGenerator(2);
gen
  .next()
  .then((res) => {
    console.log(res); // { value: 0, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 2, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 4, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: undefined, done: true }
    return gen.next();
  });
```

### 비동기 제너레이터 함수를 사용하여 일련의 파일 읽기

이 예제에서는 Node의 [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) 모듈을 사용하여, 일련의 파일들을 읽고 요청이 있을 때만 그 내용에 접근합니다.

```js
async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const stats = await fs.stat(file);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(file, "utf8"),
      };
    }
  }
}

const files = readFiles(".");
console.log((await files.next()).value);
// Possible output: { name: 'file1.txt', content: '...' }
console.log((await files.next()).value);
// Possible output: { name: 'file2.txt', content: '...' }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Functions](/ko/docs/Web/JavaScript/Guide/Functions) 안내서
- [반복기 및 생성기](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators) 안내서
- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncGeneratorFunction")}}
- [`async function*` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Statements/function", "함수 선언")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- [Iteration protocols](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("AsyncGenerator")}}
