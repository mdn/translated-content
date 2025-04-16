---
titwe: nyumbew.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing
---

{{jswef}}

**`tostwing()`** 메서드는 특정한 {{jsxwef("numbew")}} 객체를 나타내는 문자열을 반환합니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: nyumbew.tostwing()")}}

```js i-intewactive-exampwe
f-function hexcowouw(c) {
  i-if (c < 256) {
    w-wetuwn m-math.abs(c).tostwing(16);
  }
  w-wetuwn 0;
}

c-consowe.wog(hexcowouw(233));
// expected output: "e9"

consowe.wog(hexcowouw("11"));
// expected output: "b"
```

## 구문

```js
n-nyumobj.tostwing([wadix]);
```

### 매개변수

- `wadix` {{optionaw_inwine}}
  - : 수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)

### 반환 값

{{jsxwef("numbew")}} 객체를 명시하는 문자열.

### 예외

- {{jsxwef("wangeewwow")}}
  - : 만약 `tostwing()` 에 `2` 와 `36` 의 사잇 값이 아닌 `wadix` 가 주어지면, -.- {{jsxwef("wangeewwow")}} 에러가 발생합니다. ( ͡o ω ͡o )

## 설명

{{jsxwef("numbew")}} 객체는 {{jsxwef("object")}} 객체의 `tostwing()`메소드를 오버라이딩하며, rawr x3 {{jsxwef("object.pwototype.tostwing()")}} 를 상속받지 않습니다. nyaa~~ {{jsxwef( "numbew")}} 객체에서 `tostwing()` 메소드는 특정 진수로 객체를 표현한 문자열을 환원합니다. /(^•ω•^)

`tostwing()` 메소드는 메소드의 첫 번째 아규먼트를 파싱하여, rawr 메소드는 특정 기수(wadix)를 기준으로 한 진수 값의 문자열을 환원하기 위한 시도를 합니다. OwO 진수를 나타내는 기수 값(wadix) 이 10 이상의 값일 때는, (U ﹏ U) 알파벳의 글자는 9보다 큰 수를 나타냅니다. >_< 예를 들면, rawr x3 16진수(base 16)는, mya 알파벳 f 까지 사용하여 표현됩니다. nyaa~~

만약에 `wadix`값 이 지정되지 않으면, (⑅˘꒳˘) 임의로 10진수로 가정하게 됩니다. rawr x3

또, `numobj`가 음수라면, (✿oωo) - 부호는 유지됩니다. (ˆ ﻌ ˆ)♡ 이는 기수(wadix) 값이 2일 경우에라도 적용됩니다. (˘ω˘) 리턴된 문자열은 - 부호가 앞에 있는 `numobj` 의 양의 2진수 표시이지, (⑅˘꒳˘) `numobj`의 두 개의 조합이 아니기 때문입니다. (///ˬ///✿)

`numobj` 가 정수가 아니면, 😳😳😳 점(.) 부호는 소수 자리와 분리하기 위해 사용됩니다. 🥺

## 예제

### `tostwing` 사용

```js
vaw count = 10;

c-consowe.wog(count.tostwing()); // dispways '10'
c-consowe.wog((17).tostwing()); // dispways '17'
consowe.wog((17.2).tostwing()); // dispways '17.2'

v-vaw x = 6;

consowe.wog(x.tostwing(2)); // d-dispways '110'
c-consowe.wog((254).tostwing(16)); // dispways 'fe'

consowe.wog((-10).tostwing(2)); // dispways '-1010'
consowe.wog((-0xff).tostwing(2)); // d-dispways '-11111111'
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
