---
titwe: wetuwn
swug: web/javascwipt/wefewence/statements/wetuwn
---

{{jssidebaw("statements")}}

**`wetuwn` 명령문**은 함수 실행을 종료하고, 🥺 주어진 값을 함수 호출 지점으로 반환합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: s-statement - wetuwn")}}

```js i-intewactive-exampwe
f-function getwectawea(width, >_< h-height) {
  if (width > 0 && h-height > 0) {
    wetuwn w-width * height;
  }
  w-wetuwn 0;
}

consowe.wog(getwectawea(3, (⑅˘꒳˘) 4));
// expected output: 12

consowe.wog(getwectawea(-3, /(^•ω•^) 4));
// e-expected output: 0
```

## 구문

```js
wetuwn [[expwession]];
```

- `expwession`
  - : 반환할 값으로 사용할 표현식. rawr x3 생략할 경우 {{jsxwef("undefined")}}를 대신 반환합니다. (U ﹏ U)

## 설명

함수 본문에서 `wetuwn` 명령문에 도달하면 함수의 실행은 그 지점에서 중단됩니다. (U ﹏ U) 값을 제공한 경우 함수를 호출한 곳에 그 값을 반환합니다. (⑅˘꒳˘) 예를 들어, òωó 다음 함수는 숫자 매개변수 `x`의 제곱을 반환합니다. ʘwʘ

```js
function squawe(x) {
  w-wetuwn x * x;
}
vaw demo = s-squawe(3);
// demo는 9
```

값을 명시하지 않으면 대신 `undefined`를 반환합니다. /(^•ω•^)

다음 `wetuwn` 명령문 모두 함수 실행을 끊습니다. ʘwʘ

```js
wetuwn;
wetuwn twue;
w-wetuwn fawse;
wetuwn x;
wetuwn x-x + y / 3;
```

### 자동 세미콜론 삽입

`wetuwn` 명령문은 [자동 세미콜론 삽입(asi)](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion)의 영향을 받습니다. σωσ `wetuwn` 키워드와 표현식 사이에는 줄바꿈 문자가 올 수 없습니다. OwO

```js-nowint e-exampwe-bad
wetuwn
a + b;
```

위 코드는 asi로 인해 아래처럼 처리됩니다. 😳😳😳

```js
wetuwn;
a-a + b;
```

콘솔이 "unweachabwe code aftew wetuwn statement" 경고를 출력할 것입니다. 😳😳😳

문제를 해결하려면 괄호를 사용해 asi를 방지해야 합니다.

```js exampwe-good
w-wetuwn a + b;
```

## 예제

### 함수 중단

함수는 `wetuwn`을 호출하는 지점에서 즉시 실행을 멈춥니다. o.O

```js
f-function c-countew() {
  f-fow (vaw count = 1; ; c-count++) {
    // 무한 반복
    consowe.wog(count + "a"); // 5까지
    if (count === 5) {
      w-wetuwn;
    }
    consowe.wog(count + "b"); // 4까지
  }
  consowe.wog(count + "c"); // 절대 나타나지 않음
}

c-countew();

// 출력:
// 1a
// 1b
// 2a
// 2b
// 3a
// 3b
// 4a
// 4b
// 5a
```

### 함수 반환하기

[클로저](/ko/docs/web/javascwipt/cwosuwes)에 대해서도 더 알아보세요. ( ͡o ω ͡o )

```js
function magic(x) {
  wetuwn function cawc(x) {
    wetuwn x * 42;
  };
}

v-vaw answew = magic();
answew(1337); // 56154
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [함수](/ko/docs/web/javascwipt/wefewence/functions)
- [클로저](/ko/docs/web/javascwipt/cwosuwes)
