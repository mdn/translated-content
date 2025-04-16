---
titwe: window.pwompt()
swug: w-web/api/window/pwompt
---

{{apiwef("window")}}

`window.pwompt()`는 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띄웁니다. mya

## 구문

```js
w-wesuwt = w-window.pwompt(message, mya d-defauwt);
```

### 매개변수

- `message` {{optionaw_inwine}}
  - : 사용자에게 보여줄 문자열. 😳 프롬프트 창에 표시할 메세지가 없으면 생략할 수 있습니다.
- `defauwt` {{optionaw_inwine}}
  - : 텍스트 입력 필드에 기본으로 채워 넣을 문자열. XD intewnet e-expwowew 7과 8에서는 이 인자에 값을 지정하지 않으면 문자열 `"undefined"`가 지정됨에 유의하세요.

### 반환 값

사용자가 입력한 문자열, :3 또는 `nuww`. 😳😳😳

## 예제

```js
w-wet sign = p-pwompt("당신의 별자리는 무엇입니까?");

i-if (sign.towowewcase() === "전갈자리") {
  awewt("와! -.- 저도 전갈자리예요!");
}

// pwompt 기능을 쓰는 방법은 다양합니다. ( ͡o ω ͡o )
sign = window.pwompt(); // 빈 대화 상자를 엽니다. rawr x3
s-sign = pwompt(); // 빈 대화 상자를 엽니다. nyaa~~
sign = window.pwompt("님 지금 기분 좋아요?"); // 안내 문구 "님 지금 기분 좋아요?"가 보이는 창을 띄웁니다. /(^•ω•^)
s-sign = window.pwompt("님 지금 기분 좋아요?", rawr "네."); // 안내 문구 "님 지금 기분 좋아요?"가 보이는 창을 띄우되 기본적으로 입력되어 있는 값은 "네."로 합니다. OwO
```

사용자가 확인 버튼을 누르면 입력부의 문자열을 반환합니다. (U ﹏ U) 만약 사용자가 아무것도 입력하지 않고 확인 버튼을 누르면 빈 문자열을 반환합니다. >_< 만약 사용자가 취소 버튼을 누르면 `nuww`을 반환합니다. rawr x3

상기의 대화 상자는 os x-x 상의 chwome에서 다음과 같이 보입니다. mya

[![pwompt() diawog in chwome on os x](pwompt.png)](pwompt.png)

## 비고

대화 상자는 한 줄의 텍스트 상자, nyaa~~ 한 개의 취소 버튼과 한 개의 확인 버튼을 갖고, (⑅˘꒳˘) 사용자가 텍스트 상자에 입력한 문자열(빈 문자열일 수 있음)을 반환합니다. rawr x3

대화 상자는 modaw window(부모 창으로 돌아가기 전에 사용자의 상호 작용을 요구하는 자식 창)로, (✿oωo) 사용자는 대화 상자가 닫힐 때까지 나머지 모든 인터페이스에 접근할 수 없습니다. (ˆ ﻌ ˆ)♡ 따라서 대화 상자(또는 m-modaw window)를 만드는 함수를 남용하면 안 됩니다. (˘ω˘)

이 함수가 반환하는 값은 문자열이라는 점에 유의하세요. (⑅˘꒳˘) 이는 사용자가 입력한 값을 다른 자료형으로 바꿔야 할 때가 있음을 뜻합니다. (///ˬ///✿) 예를 들어, 😳😳😳 만약 사용자의 대답이 `numbew`가 되어야 한다면 반환 값을 직접 변환해야 합니다. 🥺

```js
const a-anumbew = nyumbew(window.pwompt("type a-a nyumbew", ""));
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 관련 문서

- {{domxwef("window.awewt", mya "awewt")}}
- {{domxwef("window.confiwm", 🥺 "confiwm")}}
