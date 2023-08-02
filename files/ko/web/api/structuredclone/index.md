---
title: structuredClone() 전역 함수
short-title: structuredClone()
slug: Web/API/structuredClone
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("HTML DOM")}}

전역 **`structuredClone()`** 메서드는 [structured clone 알고리즘](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)을 사용하여 주어진 값의 [깊은 복사](/ko/docs/Glossary/Deep_copy)를 생성합니다.

또한, 이 메서드는 새 객체로 복사하는 대신 원래 값에서 [전송가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)를 전송될 수 있도록 합니다. 전송된 객체는 원래 객체로부터 분리되고 새 객체로 연결됩니다. 더 이상 원래 객체에 접근할 수 없게 됩니다.

## 구문

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### 매개변수

- `value`
  - : 복제된 객체.
    이것은 모든 [구조화된 복제 가능한 타입](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)일 수 있습니다.
- `options` {{optional_inline}}
  - : 다음 속성들을 가진 객체.
    - `transfer`
      - : 반환된 객체로 복제되는 대신 이동될 [전송가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)의 배열

### 반환 값

반환 값은 원래 `value`의 깊은 복사입니다.

### 예외

- `DataCloneError` {{domxref("DOMException")}}
  - : 입력 값의 일부라도 직렬화될 수 없는 경우 예외를 던집니다.

## 설명

이 함수는 JavaScript 값을 [깊은 복사](/ko/docs/Glossary/Deep_copy)하는데 사용될 수 있습니다.
또한, 아래와 같이 순환 참조도 지원합니다.

```js
// 값과 스스로를 순환 참조하는 객체 생성
const original = { name: "MDN" };
original.itself = original;

// 복제
const clone = structuredClone(original);

console.assert(clone !== original); // 동일하지 않은 객체 (같지 않은 동일성)
console.assert(clone.name === "MDN"); // 같은 값을 가집니다.
console.assert(clone.itself === clone); // 순환 참조가 보존됩니다.
```

### 값 전송

`options` 매개변수의 `transfer` 속성을 사용하여 복제된 객체에서 복제되는 대신 [전송가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)가 전송될 수 있습니다. 전송하면 원래 객체를 사용할 수 없게 됩니다.

> **참고 사항** 버퍼의 일부 데이터를 저장하기 전에 비동기적으로 검사할 때 유용할 수 있습니다.
> 데이터가 저장되기 전에 버퍼가 수정되는 것을 피하기 위해 버퍼를 복제하고 해당 데이터를 검사할 수 있습니다.
> 데이터를 전송하면, 원래 버퍼를 수정하려는 시도들은 실패하여 실수로 잘못 사용하는 것을 방지합니다.

다음 코드는 배열을 복제하고 해당 기본 자원을 새 객체로 전송하는 방법을 보여줍니다.
반환 시 원래의 `uInt8Array.buffer`은 지워집니다.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

객체 수에 상관없이 복제하고 해당 객체의 하위 집합을 전송할 수 있습니다.
예를 들어, 아래 코드는 전달된 값에서 `arrayBuffer1`은 전송하지만, `arrayBuffer2`는 전송하지 않습니다.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## 예제

### 객체 복제

이번 예제에서, 배열을 멤버로 가진 객체를 복제합니다. 복제 후, 각 객체에 대한 변경은 다른 객체에 영향을 주지 않습니다.

```js
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
```

### 객체 전송

이번 예제에서는 `ArrayBuffer`를 생성한 다음 그것을 멤버로 가지는 객체를 복제하여 버퍼를 전송합니다. 복제된 객체에서 버퍼를 사용할 수 있지만, 원래 버퍼를 사용하려고 하면 예외가 발생합니다.

```js
// 바이트 크기의 ArrayBuffer 생성
const buffer1 = new ArrayBuffer(16);

const object1 = {
  buffer: buffer1,
};

// 버퍼를 포함하여 객체를 복제하고 전송
const object2 = structuredClone(object1, { transfer: [buffer1] });

// 복제된 버퍼에서 배열 생성
const int32View2 = new Int32Array(object2.buffer);
int32View2[0] = 42;
console.log(int32View2[0]);

// 원래 버퍼에서 배열을 생성하면 TypeError가 발생합니다.
const int32View1 = new Int32Array(object1.buffer);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`structuredClone` 폴리필](https://github.com/zloirock/core-js#structuredclone) is available in [`core-js`](https://github.com/zloirock/core-js)
- [Structured clone 알고리즘](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured clone 폴리필](https://github.com/ungap/structured-clone)
