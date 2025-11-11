---
title: Worker.terminate()
slug: Web/API/Worker/terminate
---

{{APIRef("Web Workers API")}}

{{domxref("Worker")}} 인터페이스의 **`terminate()`** 메서드는 {{domxref("Worker")}}를 즉시 종료시킬 때 사용합니다. 이것은 worker가 자신의 작업들을 끝마칠 수 있도록 하는 게 아니라, 바로 종료시키는 것입니다.

## 구문

```js-nolint
terminate()
```

### 매개변수

없음.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예시

아래의 코드 스니펫은 {{domxref("Worker.Worker", "Worker()")}} 생성자를 이용하여 {{domxref("Worker")}} 객체를 생성하고, 즉시 종료하는 예를 보여줍니다.

```js
const myWorker = new Worker("worker.js");

myWorker.terminate();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

{{domxref("Worker")}} 인터페이스
