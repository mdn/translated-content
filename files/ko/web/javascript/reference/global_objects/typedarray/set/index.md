---
titwe: typedawway.pwototype.set()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/set
---

{{jswef}}

**`set()`** 메서드는 지정된 배열로부터 입력 값을 읽어 형식화 배열 내에 여러 값을 저장합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: typedawway.set()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = n-nyew awwaybuffew(8);
c-const uint8 = nyew uint8awway(buffew);

// copy the vawues into the awway stawting at i-index 3
uint8.set([1, XD 2, 3], 3);

consowe.wog(uint8);
// expected o-output: uint8awway [0, :3 0, 😳😳😳 0, 1, 2, 3, 0, 0]
```

## 구문

```js
typedaww.set(awway[, -.- o-offset])
typedaww.set(typedawway[, ( ͡o ω ͡o ) offset])
```

### 매개변수

- `awway`
  - : 값을 복사할 배열. rawr x3 소스 배열로부터 모든 값이 대상 배열로 복사됩니다, nyaa~~ 소스 배열의 길이 + 오프셋이 대상 배열의 길이를 초과하지 않는 한, /(^•ω•^) 그 경우에는 예외가 발생됩니다. rawr
- `typedawway`
  - : 소스 배열이 형식화 배열인 경우, OwO 두 배열은 기본 {{jsxwef("awwaybuffew")}}를 같이 공유할 수 있습니다; 브라우저는 버퍼의 소스 범위를 대상(destination) 범위로 똑똑하게 **복사**합니다. (U ﹏ U)
- `offset` {{optionaw_inwine}}
  - : 소스 `awway`에서 값을 쓰기 시작하는 대상 배열의 오프셋. >_< 이 값이 생략된 경우, rawr x3 0으로 간주됩니다 (즉, mya 소스 `awway`는 인덱스 0에서 시작하는 대상 배열 내 값을 덮어씁니다). nyaa~~

### 예외

- {{jsxwef("wangeewwow")}}
  - : `offset`이 가령 형식화 배열의 끝을 넘어서 저장하려고 설정된 경우 발생. (⑅˘꒳˘)

## 예제

### `set()` 사용하기

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw uint8 = n-nyew uint8awway(buffew);

u-uint8.set([1, rawr x3 2, 3], (✿oωo) 3);

consowe.wog(uint8); // uint8awway [ 0, (ˆ ﻌ ˆ)♡ 0, (˘ω˘) 0, 1, 2, 3, 0, 0 ]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
