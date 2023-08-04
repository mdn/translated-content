---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
---

{{APIRef("Web Crypto API")}}

**`Crypto.getRandomValues()`** 메서드는 암호학적으로 강력한 난수를 생성할 수 있습니다. 매개변수로 제공한 배열을 무작위 (암호학에서의 '무작위') 숫자로 채웁니다.

충분한 성능을 확보하기 위해, API 구현체들은 진정한 난수 생성기 대신 충분한 엔트로피를 지닌 값을 시드로 적용한 의사 난수 생성기(pseudo-random number generator, PRNG)를 사용합니다. 정확한 의사 난수 생성 알고리즘은 {{glossary("user agent", "사용자 에이전트")}}마다 다를 수 있지만, 암호학적 용도로는 모두 적합할 것입니다.

`getRandomValues()`는 안전하지 않은 연결에서 사용할 수 있는 유일한 `Crypto` 인터페이스 멤버입니다.

## 구문

```js
getRandomValues(typedArray);
```

### 매개변수

- `typedArray`
  - : 정수형 {{jsxref("TypedArray")}}입니다. 즉 `Float32Array`와 `Float64Array`를 **제외**한 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} 중 하나여야 합니다. 제공한 배열의 모든 원소는 난수로 덮어쓰입니다.

### 반환 값

`typedArray`로 제공한 배열. 단, 배열의 요소들을 모두 새로 생성한 난수로 덮어쓴 후 반환합니다. `typedArray` 자체를 변경하며, 복사본을 생성하지 않습니다.

### 예외

- `QuotaExceededError` {{domxref("DOMException")}}
  - : `typedArray`의 {{jsxref("TypedArray.byteLength", "byteLength")}}가 65,536을 초과하면 발생합니다.

## 사용 일람

`getRandomValues()`를 암호화 키의 생성에 사용하지 마세요. 암호화 키 생성에는 {{domxref("SubtleCrypto.generateKey", "generateKey()")}} 메서드를 사용해야 합니다. 몇 가지 이유가 있는데, 그중 하나는 안전하지 않은 연결에서도 `getRandomValues()`를 실행할 수 있기 때문입니다.

Web Cryptography 명세는 엔트로피의 하한선을 명시하지는 않고, 사용자 에이전트가 실용적인 선 내에서 최선의 엔트로피를 제공하도록 강하게 권고하고 있습니다. 이를 위해, 명세는 사용자 에이전트가 플랫폼별 난수 생성 기능(Unix `/dev/urandom` 등)을 포함한 고 엔트로피 무작위/의사 무작위 데이터 출처에서 가져온 값을 시드로 사용, 잘 정립되고 효율적인 의사 난수 생성기를 사용해 난수를 생성하도록 추천합니다.

## 예제

```js
const array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("오늘자 행운의 수:");
for (const num of array) {
  console.log(num);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Crypto API](/ko/docs/Web/API/Web_Crypto_API)
- {{domxref("Crypto")}} 객체를 가져올 수 있는 {{domxref("crypto_property", "crypto")}} 전역 속성
- 비암호학적 난수 출처인 {{jsxref("Math.random")}}
