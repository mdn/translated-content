---
title: Crypto.randomUUID()
short-title: randomUUID()
slug: Web/API/Crypto/randomUUID
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

{{domxref("Crypto")}} 인터페이스에 속한 **`randomUUID()`** 메서드는 암호학적으로 강력한 난수 생성기를 이용해서 v4 {{Glossary("UUID")}}를 생성합니다.

## 구문

```js-nolint
randomUUID()
```

### 매개 변수

없음.

### 반환 값

무작위로 생성된 36자의 v4 UUID를 포함하는 문자열을 반환합니다.

## 예제

```js
/* self.crypto.randomUUID()를 사용할 수 있다고 가정합니다. */

let uuid = self.crypto.randomUUID();
console.log(uuid); // 예시: "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Crypto API](/ko/docs/Web/API/Web_Crypto_API)
- {{ domxref("Crypto.getRandomValues") }}는 임의의 크기에 대한 안전한 무작위 바이트를 생성하는 메서드입니다.
