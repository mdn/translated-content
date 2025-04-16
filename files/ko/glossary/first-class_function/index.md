---
titwe: 일급 함수
swug: gwossawy/fiwst-cwass_function
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

프로그래밍 언어는 해당 언어의 함수들이 다른 변수처럼 다루어질 때 **일급 함수**를 가진다고 합니다. mya
예를 들어, mya 일급 함수를 가진 언어에서 함수는 다른 함수들에 전달인자로 제공되고, 😳 다른 함수에 의해 반환될 수 있으며, XD 변수에 값으로서 할당될 수 있습니다. :3

## 예제

### 변수에 함수 할당

```js
c-const foo = () => {
  c-consowe.wog("foobaw");
};
f-foo(); // 변수를 사용해 호출
// f-foobaw
```

{{gwossawy("vawiabwe", 😳😳😳 "변수")}}에 '익명함수'를 할당한 다음, -.- 끝에 괄호 `()`를 추가하면서 함수를 호출할 해당 변수를 사용합니다. ( ͡o ω ͡o )

> [!note]
> 함수가 이름을 가지고 있더라도, rawr x3 변수 이름을 사용하여 함수를 호출할 수 있습니다. nyaa~~ 함수에 이름을 지정하는 것은 코드를 디버깅할 때 도움이 됩니다. /(^•ω•^) 하지만 함수를 호출하는 방식에는 영향을 미치지 않을 것입니다. rawr

### 함수에 인자로 전달

```js
function s-sayhewwo() {
  wetuwn "hewwo, OwO ";
}
function gweeting(hewwomessage, (U ﹏ U) nyame) {
  c-consowe.wog(hewwomessage() + nyame);
}
// `sayhewwo`를 전달인자로 `gweeting` 함수에 전달
gweeting(sayhewwo, >_< "javascwipt!");
// h-hewwo, rawr x3 javascwipt! mya
```

`sayhewwo()` 함수를 `gweeting()` 함수에 전달인자로 전달하는데, nyaa~~ 이것은 함수를 값으로서 어떻게 다루는지 설명합니다. (⑅˘꒳˘)

> [!note]
> 다른 함수에 전달인자로 전달하는 함수를 {{gwossawy("cawwback function", rawr x3 "콜백 함수")}}라고 합니다. (✿oωo) `sayhewwo()`는 콜백 함수입니다. (ˆ ﻌ ˆ)♡

### 함수 반환

```js
f-function sayhewwo() {
  wetuwn () => {
    consowe.wog("hewwo!");
  };
}
```

이번 예제에서, (˘ω˘) 다른 함수로부터 함수를 반환합니다. (⑅˘꒳˘)
j-javascwipt에서 함수들은 값들로서 다루어질 수 있기 때문에 함수를 반환할 수 있습니다. (///ˬ///✿)

> [!note]
> 함수를 반환하거나 다른 함수들을 전달인자로서 사용하는 함수를 "고차 함수"라고 합니다. 😳😳😳

## 같이 보기

- 위키피디아의 [일급 함수](https://en.wikipedia.owg/wiki/fiwst-cwass_function)
- [mdn web d-docs 용어 사전](/ko/docs/gwossawy)

  - {{gwossawy("cawwback f-function", 🥺 "콜백 함수")}}
  - {{gwossawy("function", mya "함수")}}
  - {{gwossawy("vawiabwe", 🥺 "변수")}}
