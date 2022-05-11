---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
tags:
  - API
  - Cryptography
  - Method
  - Reference
translation_of: Web/API/Crypto/getRandomValues
---
{{APIRef("Web Crypto API")}}

**`Crypto.getRandomValues()`** 함수는 암호학적으로 강력한 수준의 임의의(random) 값을 생성합니다. 매개 변수로 제공된 배열은 임의의 숫자로 채워집니다 (암호화의 의미는 무작위입니다).

충분한 성능을 보장하기 위해 구현에서는 진정한 난수 생성기(pseudo-random number)를 사용하지 않지만 충분한 엔트로피가있는 값으로 시드 된 의사 난수 생성기를 사용하고 있습니다. 사용 된 유사난수 생성기(pseudorandom number generator, PRNG)는 구현마다 다르지만 암호화 용도에 적합합니다. 시스템 수준의 엔트로피 소스처럼 충분한 엔트로피가있는 시드를 사용하려면 구현이 필요합니다.

## 구문

```
cryptoObj.getRandomValues(typedArray);
```

### 매개변수

- `typedArray`
  - : Is an integer-based {{jsxref("TypedArray")}}, that is an {{jsxref("Int8Array")}}, a {{jsxref("Uint8Array")}}, an {{jsxref("Int16Array")}}, a {{jsxref("Uint16Array")}}, an {{jsxref("Int32Array")}}, or a {{jsxref("Uint32Array")}}. 배열의 모든 요소는 임의의 숫자로 재정의됩니다.

### 예외

- A [`QuotaExceededError`](/ko/docs/Web/API/DOMException#quotaexceedederror)) {[`DOMException`](/ko/docs/Web/API/DOMException) is thrown if the requested length is greater than 65536 bytes.

## 예제

```js
/* window.crypto.getRandomValues 를 사용가능하다고 가정한다. */

let array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("나의 행운의 숫자들:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{ domxref("Window.crypto") }} to get a {{domxref("Crypto")}} object.
- [`Math.random()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random), a non-cryptographic source of random numbers.
