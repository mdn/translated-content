---
title: Window.crypto
slug: Web/API/Window/crypto
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef}}

{{domxref("Window")}} 인터페이스의 **`crypto`** 읽기 전용 속성은 전역 객체인 {{domxref("Crypto")}} 객체를 반환합니다. 이 객체는 웹 페이지가 특정 암호학적 서비스에 접근할 수 있는 경로입니다.

`crypto` 속성 자체는 읽기 전용이지만, 모든 메서드(와 자식 객체 {{domxref("SubtleCrypto")}})의 메서드는 읽기 전용이 아니므로 {{glossary("polyfill", "폴리필")}}을 통한 공격에 취약합니다.

`crypto` 가 모든 윈도우에서 가용할 수 있음에도 불구하고 반환된 `Crypto` 객체는 보안 측면에서 하나의 사용 가능한 특성인 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} 메서드만 가지고 있습니다. 일반적으로, 이 API는 보안 맥락에서만 사용되어야 합니다.

## 값

{{domxref("Crypto")}} 인터페이스의 인스턴스이며 범용 암호화 기능과 강력한 난수 생성기에 대한 액세스를 제공합니다.

## 예제

다음 예제는 `crypto` 속성을 사용하여 {{domxref("Window.crypto")}} 속성을 통해 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} 메서드에 접근합니다.

### JavaScript

```js
globalThis.genRandomNumbers = () => {
  const array = new Uint32Array(10);
  globalThis.crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `The random numbers are: ${array.join(" ")}`;
};
```

### HTML

```html
<p id="myRandText">The random numbers are:</p>
<button type="button" onClick="genRandomNumbers()">
  Generate 10 random numbers
</button>
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Crypto")}} 인터페이스
- {{domxref("Window")}} 전역 객체
