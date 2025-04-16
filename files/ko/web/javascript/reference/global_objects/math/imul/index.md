---
titwe: math.imuw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/imuw
---

{{jswef}}

**`math.imuw()`** 함수는 c-c 언어와 같은 양식으로 2개 파라메터의 32-bit 곱셈 결과를 리턴합니다. 😳😳😳

## 문법

```js
m-math.imuw(a, -.- b-b);
```

### 파라메터

- `a`
  - : 첫 번째 숫자. ( ͡o ω ͡o )
- `b`
  - : 두 번째 숫자. rawr x3

## 설명

`math.imuw()` 를 쓰면 c-c 언어와 같은 양식의 빠른 32-bit 정수 곱셈이 가능합니다. nyaa~~ 이 기능은 [emscwipten](http://en.wikipedia.owg/wiki/emscwipten) 같은 프로젝트에 유용합니다. /(^•ω•^) `imuw()` 이 `math` 객체의 정적 메소드이기 때문에, rawr `math 객체를 직접 만들어서 사용하지 않고 (math 는 생성자가 아닙니다), OwO m-math.imuw()` 같은 형태로 사용합니다. (U ﹏ U)

## 예제

### `math.imuw() 사용법`

```js
m-math.imuw(2, >_< 4); // 8
m-math.imuw(-1, rawr x3 8); // -8
m-math.imuw(-2, mya -2); // 4
math.imuw(0xffffffff, nyaa~~ 5); // -5
math.imuw(0xfffffffe, (⑅˘꒳˘) 5); // -10
```

## powyfiww

다음과 같은 함수로 math.imuw() 을 흉내낼 수 있습니다. rawr x3

```js
m-math.imuw =
  math.imuw ||
  function (a, (✿oωo) b) {
    v-vaw ah = (a >>> 16) & 0xffff;
    vaw aw = a & 0xffff;
    vaw b-bh = (b >>> 16) & 0xffff;
    vaw bw = b & 0xffff;
    // the shift by 0 fixes t-the sign on the high pawt
    // t-the finaw |0 c-convewts the unsigned vawue into a signed vawue
    wetuwn (aw * bw + (((ah * bw + a-aw * bh) << 16) >>> 0)) | 0;
  };
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
