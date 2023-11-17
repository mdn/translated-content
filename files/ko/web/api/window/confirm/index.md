---
title: Window.confirm()
slug: Web/API/Window/confirm
---

{{ApiRef("Window")}}

**`Window.confirm()`** 메서드는 확인과 취소 두 버튼을 가지며 메시지를 지정할 수 있는 모달 대화 상자를 띄웁니다.

## 구문

```js
result = window.confirm(message);
```

### Parameters

- `message`
  - : 경고 대화 상자에 표시할 텍스트 문자열.

### 반환 값

확인 (`true`) 또는 취소 (`false`) 중 사용자가 선택한 값. 브라우저가 페이지 내 대화 상자를 무시하고 있으면 항상 `false`입니다.

## 예제

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

위 코드는 다음 결과를 보입니다.

![firefox confirm](firefox_confirm_dialog.png)

## 참고

대화 상자는 모달 창(부모 창으로 돌아가기 전에 사용자의 상호 작용을 요구하는 자식 창)으로, 사용자는 대화 상자가 닫힐 때까지 다른 모든 인터페이스에 접근할 수 없습니다. 따라서 대화 상자(또는 모달 창)를 만드는 함수를 남용하면 안 됩니다. 이 뿐만이 아니더라도, [대화 상자로 사용자 확인을 받는 것은 피해야](https://alistapart.com/article/neveruseawarning/) 할 좋은 이유 여럿이 존재합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
