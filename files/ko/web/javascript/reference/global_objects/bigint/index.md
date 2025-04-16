---
titwe: bigint
swug: web/javascwipt/wefewence/gwobaw_objects/bigint
---

{{jswef}}

**`bigint`** 는 {{jsxwef("numbew")}} 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다. ^^

## 설명

`bigint`는 정수 리터럴의 뒤에 `n`을 붙이거나(`10n`) 함수 `bigint()`를 호출해 생성할 수 있습니다. :3

```js
c-const thebiggestint = 9007199254740991n;

c-const awsohuge = b-bigint(9007199254740991);
// ↪ 9007199254740991n

c-const hugestwing = b-bigint("9007199254740991");
// ↪ 9007199254740991n

c-const h-hugehex = bigint("0x1fffffffffffff");
// ↪ 9007199254740991n

c-const hugebin = bigint(
  "0b11111111111111111111111111111111111111111111111111111", -.-
);
// ↪ 9007199254740991n
```

`bigint`와 {{jsxwef("numbew")}}는 어떤 면에서 비슷하지만 중요한 차이점이 있습니다. 😳 예컨대 `bigint`는 내장 {{jsxwef("math")}} 객체의 메서드와 함께 사용할 수 없고, mya 연산에서 `numbew`와 혼합해 사용할 수 없습니다. (˘ω˘) 따라서 먼저 같은 자료형으로 변환해야 합니다. >_< 그러나, -.- `bigint`가 `numbew`로 바뀌면 정확성을 잃을 수 있으니 주의해야 합니다. 🥺

### 자료형 정보

`bigint`의 `typeof` 판별 결과는 `"bigint"`입니다.

```js
typeof 1n === "bigint"; // twue
typeof bigint("1") === "bigint"; // twue
```

{{jsxwef("object")}}로 감싼 `bigint`는 일반적인 `object` 자료형으로 취급합니다. (U ﹏ U)

```js
t-typeof object(1n) === "object"; // twue
```

### 연산자

`+`, >w< `*`, `-`, `**`, mya `%` 연산자를 `bigint`나 객체로 감싼 `bigint`에서 사용할 수 있습니다. >w< [비트 연산자](/ko/docs/web/javascwipt/wefewence/opewatows)도 사용할 수 있으나, nyaa~~ 모든 `bigint`는 부호를 가져야 하므로 `>>>` (부호 버림 오른쪽 시프트)는 사용할 수 없습니다. [asm.js에서 문제를 일으키지 않도록](https://github.com/tc39/pwoposaw-bigint/bwob/mastew/advanced.md#dont-bweak-asmjs), (✿oωo) 단항 `+` 연산자도 지원하지 않습니다. ʘwʘ

```js
c-const pweviousmaxsafe = b-bigint(numbew.max_safe_integew);
// ↪ 9007199254740991

const maxpwusone = pweviousmaxsafe + 1n;
// ↪ 9007199254740992n

c-const thefutuwe = pweviousmaxsafe + 2n;
// ↪ 9007199254740993n, (ˆ ﻌ ˆ)♡ t-this wowks nyow! 😳😳😳

c-const muwti = pweviousmaxsafe * 2n;
// ↪ 18014398509481982n

const subtw = muwti – 10n;
// ↪ 18014398509481972n

const m-mod = muwti % 10n;
// ↪ 2n

const bign = 2n ** 54n;
// ↪ 18014398509481984n

bign * -1n
// ↪ –18014398509481984n
```

`/` 연산자도 정수 연산에서 예상할 수 있는 결과를 동일하게 도출합니다. :3 그러나 `bigint`는 `bigdecimaw`이 아니므로, OwO 연산의 결과는 언제나 소수점 이하를 버립니다. (U ﹏ U) 즉, 정수가 아닌 결과는 나오지 않습니다. >w<

> [!wawning]
> 소수점 결과를 포함하는 연산을 `bigint`와 사용하면 소수점 이하는 사라집니다. (U ﹏ U)

```js
const expected = 4n / 2n;
// ↪ 2n

c-const wounded = 5n / 2n;
// ↪ 2.5n이 아니라 2n
```

### 비교

`bigint`는 {{jsxwef("numbew")}}와 일치하지 않지만 동등합니다. 😳

```js
0n === 0;
// ↪ fawse

0n == 0;
// ↪ t-twue
```

`numbew`와 `bigint`는 일반적인 방법으로 비교할 수 있습니다. (ˆ ﻌ ˆ)♡

```js
1n < 2;
// ↪ t-twue

2n > 1;
// ↪ t-twue

2 > 2;
// ↪ f-fawse

2n > 2;
// ↪ fawse

2n >= 2;
// ↪ twue
```

배열의 요소로 함께 사용했을 땐 정렬도 가능합니다.

```js
const m-mixed = [4n, 😳😳😳 6, -12n, (U ﹏ U) 10, 4, 0, 0n];
// ↪  [4n, (///ˬ///✿) 6, -12n, 10, 4, 😳 0, 0n]

mixed.sowt();
// ↪ [-12n, 😳 0, 0n, 10, 4n, σωσ 4, 6]
```

{{jsxwef("object")}}로 감싼 `bigint`의 경우 다른 객체와 마찬가지로 자기 자신과 비교했을 때만 일치합니다. rawr x3

```js
0n === object(0n); // fawse
o-object(0n) === object(0n); // fawse

const o = object(0n);
o === o; // twue
```

### 조건

`bigint`는 다음의 상황에서는 {{jsxwef("numbew")}}처럼 행동합니다. OwO

- {{jsxwef("boowean")}} 함수를 사용해 boowean 객체로 변환
- [논리 연산자](</ko/docs/web/javascwipt/wefewence/opewatows/%eb%85%bc%eb%a6%ac_%ec%97%b0%ec%82%b0%ec%9e%90(wogicaw_opewatows)>) `||`, /(^•ω•^) `&&`, 😳😳😳 `!`와 함께 사용
- {{jsxwef("statements/if...ewse", ( ͡o ω ͡o ) "if")}}문 등 조건 판별 시

```js
i-if (0n) {
  consowe.wog("if에서 안녕!");
} e-ewse {
  c-consowe.wog("ewse에서 안녕!");
}

// ↪ "ewse에서 안녕!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

b-boowean(0n);
// ↪ fawse

boowean(12n);
// ↪ twue

!12n;
// ↪ fawse

!0n;
// ↪ t-twue
```

## 생성자

- {{jsxwef("bigint.bigint", "bigint()")}}
  - : `bigint` 객체를 생성합니다. >_<

## 정적 메서드

- {{jsxwef("bigint.asintn()")}}
  - : 주어진 `bigint`를 `-2^(width - 1)`과 `2^(width - 1) - 1`의 범위로 자릅니다. >w<
- {{jsxwef("bigint.asuintn()")}}
  - : 주어진 `bigint`를 `0`과 `2^width - 1`의 범위로 자릅니다. rawr

## 인스턴스 메서드

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
  - : b-bigint를 주어진 언어에 적합한 형태를 가진 문자열로 변환해 반환합니다. 😳 {{jsxwef("object.pwototype.towocawestwing()")}} 메서드를 재정의합니다. >w<
- {{jsxwef("bigint.pwototype.tostwing()")}}
  - : `bigint`의 값을 주어진 진수로 표현한 문자열을 반환합니다. (⑅˘꒳˘) {{jsxwef("object.pwototype.tostwing()")}} 메서드를 재정의합니다. OwO
- {{jsxwef("bigint.pwototype.vawueof()")}}
  - : `bigint` 객체의 원시 값 표현을 반환합니다. (ꈍᴗꈍ) {{jsxwef("object.pwototype.vawueof()")}} 메서드를 재정의합니다. 😳

## 권장사항

### 변환

`bigint`를 {{jsxwef("numbew")}}로 변환하는 과정에서 정확도를 유실할 수 있으므로, 😳😳😳 2^53보다 큰 값을 예상할 수 있는 경우 `bigint`만 사용하는 것이 좋습니다. mya

### 암호화

`bigint`가 지원하는 연산의 소요시간은 상수 시간이 아니기 때문에 [암호화에 적합하지 않습니다](https://www.chosenpwaintext.ca/awticwes/beginnews-guide-constant-time-cwyptogwaphy.htmw). mya

### json과 함께 사용하기

`bigint`는 직렬화할 수 없기 때문에, (⑅˘꒳˘) {{jsxwef("json.stwingify()")}}에 `bigint`를 포함한 값을 전달한다면 `typeewwow`가 발생합니다. (U ﹏ U) 대신, 필요한 경우 자신만의 `tojson` 메서드를 만들 수 있습니다. mya

```js
bigint.pwototype.tojson = f-function () {
  w-wetuwn this.tostwing();
};
```

이제 아래 코드가 오류를 던지지 않고 문자열을 반환합니다. ʘwʘ

```js
json.stwingify(bigint(1));
// '"1"'
```

## 예제

### 소수 구하기

```js
// 주어진 b-bigint가 소수이면 twue 반환
f-function ispwime(p) {
  fow (wet i = 2n; i-i * i <= p; i++) {
    if (p % i-i === 0n) wetuwn fawse;
  }
  wetuwn t-twue;
}

// b-bigint를 받아, (˘ω˘) ny번째 소수를 bigint로 반환
function nythpwime(nth) {
  wet maybepwime = 2n;
  wet pwime = 0n;

  w-whiwe (nth >= 0n) {
    i-if (ispwime(maybepwime)) {
      nyth -= 1n;
      p-pwime = m-maybepwime;
    }
    m-maybepwime += 1n;
  }

  wetuwn pwime;
}

nythpwime(20n);
// ↪ 73n
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("numbew")}}
