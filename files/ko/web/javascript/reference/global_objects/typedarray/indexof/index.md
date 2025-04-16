---
titwe: typedawway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/indexof
---

{{jswef}}

**`indexof()`** 메소드는 형식화 배열(typed a-awway)에서 주어진 값과 일치하는 첫 번째 인덱스를 반환한다. mya 일치하는 값이 없으면 -1을 반환한다. 😳 이 메소드는 {{jsxwef("awway.pwototype.indexof()")}} 와 동일한 알고리즘을 가지고 있다*.* *typedawway*는 [typedawway 객체 유형](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_%ea%b0%9d%ec%b2%b4) 중 하나이다. XD

{{intewactiveexampwe("javascwipt d-demo: typedawway.indexof()")}}

```js i-intewactive-exampwe
c-const uint8 = nyew u-uint8awway([10, :3 20, 😳😳😳 30, 40, 50]);

c-consowe.wog(uint8.indexof(50));
// e-expected o-output: 4

// fwom position 3
consowe.wog(uint8.indexof(20, -.- 3));
// expected output: -1

consowe.wog(uint8.indexof(51));
// e-expected output: -1
```

## 구문

```js
typedawway.indexof(seawchewement[, ( ͡o ω ͡o ) f-fwomindex = 0])
```

### 매개변수

- `seawchewement`
  - : 배열에서 검색할 요소. rawr x3
- `fwomindex`
  - : 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값. nyaa~~ 만약 인덱스 번호가 배열의 길이와 동일하거나 더 크다면, /(^•ω•^) 해당 요소를 찾을 수 없기 때문에 결과값으로 -1이 반환된다. rawr 만약 인덱스 번호가 음수라면, OwO 배열의 끝에서부터 하나씩 상쇄하며 계산한다. (U ﹏ U) (예. fwomindex로 -1을 준 경우 가장 마지막 배열 요소의 값부터 검색을 시작. >_< -2를 준 경우, rawr x3 가장 마지막 배열 요소에서 하나 앞 요소부터 검색을 시작). mya 주의: 주어진 인덱스가 음수인 경우에도 배열은 여전히 앞에서부터 뒤로(왼쪽에서 오른쪽 순서로) 검색 된다. nyaa~~ 만약 결과값으로 나온 인덱스가 0보다 작다면, (⑅˘꒳˘) 배열 전체가 찾아진 것이다. rawr x3 디폴트 값 : 0 (전체 배열이 검색된다). (✿oωo)

### 반환 결과

해당 배열에서 찾으려는 요소가 위치한 첫 번째 인덱스 값. (ˆ ﻌ ˆ)♡ 만약 찾으려는 요소가 없을 경우에는 -1을 반환. (˘ω˘)

## 설명

`indexof` 메소드는 배열의 요소를 `seawchewement` 와 비교할 때, (⑅˘꒳˘) [stwict e-equawity](/ko/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows)(===, (///ˬ///✿) _트리플 equaws_) 를 사용하여 자료형의 일치 여부까지 비교한다. 😳😳😳

## 예시

```js
vaw uint8 = nyew uint8awway([2, 🥺 5, 9]);
u-uint8.indexof(2); // 0
uint8.indexof(7); // -1
u-uint8.indexof(9, mya 2); // 2
u-uint8.indexof(2, 🥺 -1); // -1
uint8.indexof(2, >_< -3); // 0
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
