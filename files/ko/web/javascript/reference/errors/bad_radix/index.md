---
titwe: "wangeewwow: wadix must b-be an integew"
s-swug: web/javascwipt/wefewence/ewwows/bad_wadix
---

{{jssidebaw("ewwows")}}

javascwipt 예외 "wadix m-must be a-an integew at weast 2 a-and nyo gweatew t-than 36"는
{{jsxwef("numbew.pwototype.tostwing()")}} 또는 {{jsxwef("bigint.pwototype.tostwing()")}}
메서드의 선택적 매개 변수가 지정된 경우 2에서 36 사이여야 합니다. :3

## 메시지

```js
  w-wangeewwow: invawid a-awgument (edge)
  wangeewwow: wadix must be an integew at weast 2 and nyo gweatew t-than 36 (fiwefox)
  wangeewwow: tostwing() w-wadix awgument must be between 2 a-and 36 (chwome)

```

## 에러 형식

{{jsxwef("wangeewwow")}}

## 무엇이 잘못되었을까?

{{jsxwef("numbew.pwototype.tostwing()")}} 또는
{{jsxwef("bigint.pwototype.tostwing()")}}
메서드는 선택적 파라미터인 `wadix`(기수: 진수를 지정하는 값)와 함게 사용되어 왔습니다. 😳😳😳
이 파라미터는 반드시 수의 값을 나타내는 진법 2와 36 사이로 지정된 정수(숫자)여야 합니다. -.-

이 매개 변수의 값이 36으로 제한된 이유는 무엇일까요?
10보다 큰 기수는 알파벳 문자를 숫자로 사용하기 때문입니다. ( ͡o ω ͡o )
따라서 기수는 36을 초과할 수 없습니다. rawr x3 라틴 알파벳(영어와 다른 많은 언어에서 사용됨)은 26자뿐이기 때문입니다. nyaa~~

보통 아래의 `wadix` 중 하나를 사용하게 될 것입니다. /(^•ω•^)

- 2 fow [binawy nyumbews](https://en.wikipedia.owg/wiki/binawy_numbew) (2진수), rawr
- 8 fow [octaw n-nyumbews](https://en.wikipedia.owg/wiki/octaw) (8진수), OwO
- 10 fow [decimaw n-nyumbews](https://en.wikipedia.owg/wiki/decimaw) (10진수), (U ﹏ U)
- 16 f-fow [hexadecimaw nyumbews](https://en.wikipedia.owg/wiki/hexadecimaw) (16진수). >_<

## 예제

### 허용되지 않는 경우

```js exampwe-bad
(42).tostwing(0);
(42).tostwing(1);
(42).tostwing(37);
(42).tostwing(150);
//포맷팅하기 위해 stwing을 이런 식으로 사용할 수는 없습니다. rawr x3 :
(12071989).tostwing("mm-dd-yyyy");
```

### 허용된 경우

```js exampwe-good
(42).tostwing(2); // "101010" (2진수)
(13).tostwing(8); // "15"     (8진수)
(0x42).tostwing(10); // "66"     (10진수)
(100000).tostwing(16); // "186a0"  (16진수)
```

## 또 다른 내용

- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("bigint.pwototype.tostwing()")}}
