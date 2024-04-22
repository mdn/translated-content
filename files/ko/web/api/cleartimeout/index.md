---
title: clearTimeout() 전역 함수
short-title: clearTimeout()
slug: Web/API/clearTimeout
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("HTML DOM")}}

전역 **`clearTimeout()`** 메서드는 {{domxref("setTimeout()")}}으로 생성한 타임아웃을 취소합니다.

매개변수가 생성된 타임아웃들 중 무엇도 식별하지 못하면 아무 동작도 하지 않습니다.

## 구문

```js-nolint
clearTimeout(timeoutID)
```

### 매개변수

- `timeoutID`
  - : 취소할 타임아웃의 식별자입니다. 이 ID는 취소할 타임아웃을 설정했던 `setTimeout()`이 반환한 값과 같아야 합니다.

{{domxref("setTimeout()")}}과 {{domxref("setInterval()")}}의 ID 풀이 공유된다는 사실을 참고하세요. 따라서 기술적으로는 `clearTimeout()`과 {{domxref("clearInterval", "clearInterval()")}}을 혼용할 수 있습니다. 하지만 코드의 명확함을 위해 혼용하지 마세요.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

아래 스크립트를 웹 페이지 컨텍스트에서 실행하고, 페이지를 한 번 클릭하세요. 1초 후에 메시지가 나타납니다. 1초 안에 페이지를 여러 번 클릭해도 메시지는 한 번만 나타납니다.

```js
const alarm = {
  remind(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup() {
    if (typeof this.timeoutID === "number") {
      this.cancel();
    }

    this.timeoutID = setTimeout(
      (msg) => {
        this.remind(msg);
      },
      1000,
      "일어나세요!",
    );
  },

  cancel() {
    clearTimeout(this.timeoutID);
  },
};
window.addEventListener("click", () => alarm.setup());
```

## 참고

`clearTimeout()`에 유효하지 않은 ID를 제공하면 아무것도 하지 않습니다. 예외도 발생하지 않습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("setTimeout()")}}
- {{domxref("setInterval()")}}
- {{domxref("clearInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
