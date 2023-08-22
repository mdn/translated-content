---
title: Window.crypto
slug: Web/API/crypto_property
---

{{APIRef}}

**`Window.crypto`**속성은 전역 객체인 {{domxref("Crypto")}} 객체를 반환합니다. `Crypto` 객체는 웹 페이지가 특정 암호학적 서비스에 접근할 수 있는 경로입니다. `crypto` 속성 자체는 읽기 전용이지만, 모든 메서드(와 자식 객체 {{domxref("SubtleCrypto")}})의 메서드)는 읽기 전용이 아니므로 {{glossary("polyfill", "폴리필")}}을 통한 공격에 취약합니다.

## 구문

```js
var cryptoObj = window.crypto || window.msCrypto; // for IE 11
```

## 예제

다음 예제는 {{domxref("Window.crypto")}} 속성을 통해 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} 메서드에 접근합니다.

### JavaScript

```js
genRandomNumbers = function getRandomNumbers() {
  var array = new Uint32Array(10);
  window.crypto.getRandomValues(array);

  var randText = document.getElementById("myRandText");
  randText.innerHTML = "The random numbers are: ";
  for (var i = 0; i < array.length; i++) {
    randText.innerHTML += array[i] + " ";
  }
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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Window")}} 전역 객체
- {{domxref("Crypto")}} 인터페이스
