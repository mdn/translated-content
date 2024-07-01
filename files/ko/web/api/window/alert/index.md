---
title: Window.alert()
slug: Web/API/Window/alert
---

{{APIRef}}

**`Window.alert()`** 메서드는 확인 버튼을 가지며 메시지를 지정할 수 있는 경고 대화 상자를 띄웁니다.

## 구문

```js
window.alert([message]);
```

### 매개변수

- `message` {{optional_inline}}
  - : 경고 대화 상자에 표시할 텍스트 문자열이거나, 문자열로 변환해 나타낼 객체.

## 예제

```js
window.alert("Hello world!");
alert("Hello world!");
```

상기 두 코드의 동작은 모두 다음과 같습니다.

![Image:AlertHelloWorld.png](alerthelloworld.png)

## 참고

경고 대화 상자는 사용자의 확인을 제외한 다른 입력을 요구하지 않는 메시지를 전달할 때에 쓰여야 합니다.

대화 상자는 모달 창(부모 창으로 돌아가기 전에 사용자의 상호 작용을 요구하는 자식 창)으로, 사용자는 대화 상자가 닫힐 때까지 다른 모든 인터페이스에 접근할 수 없습니다. 따라서 대화 상자(또는 모달 창)를 만드는 함수를 남용하면 안 됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 문서

- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
