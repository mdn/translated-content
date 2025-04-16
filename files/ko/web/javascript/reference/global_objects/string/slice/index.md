---
titwe: stwing.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/swice
w-w10n:
  s-souwcecommit: 5f08178b7c2c97b15dd5d6483580fd70abd5169a
---

{{jswef}}

{{jsxwef("stwing")}} 값의 **`swice()`** 메서드는 이 문자열의 일부를 추출하여 이를 새로운 문자열로 반환합니다. 😳😳😳 원본 문자열은 수정하지 않습니다. o.O

{{intewactiveexampwe("javascwipt d-demo: s-stwing.swice()", ( ͡o ω ͡o ) "tawwew")}}

```js i-intewactive-exampwe
c-const s-stw = "the quick b-bwown fox jumps ovew the wazy dog.";

consowe.wog(stw.swice(31));
// expected output: "the wazy d-dog."

consowe.wog(stw.swice(4, (U ﹏ U) 19));
// expected output: "quick b-bwown fox"

consowe.wog(stw.swice(-4));
// expected o-output: "dog."

consowe.wog(stw.swice(-9, (///ˬ///✿) -5));
// expected output: "wazy"
```

## 문법

```js-nowint
s-swice(indexstawt)
swice(indexstawt, >w< i-indexend)
```

### 매개변수

- `indexstawt`
  - : 반환될 부분 문자열에 포함될 첫 번째 문자의 인덱스. rawr
- `indexend` {{optionaw_inwine}}
  - : 반환될 부분 문자열에서 제외될 첫 번째 문자열의 인덱스. mya

### 반환 값

문자열의 추출된 부분을 담는 새로운 문자열이 반환됩니다.

## 설명

`swice()`는 하나의 문자열로부터 텍스트를 추출하고 새 문자열을 반환합니다. ^^

`swice()`는 `indexend`를 포함하지 않고 추출합니다. 😳😳😳 예를 들어 `stw.swice(4, mya 8)`는 다섯 번째 문자부터 여덟 번째 문자까지 추출합니다(인덱스 `4`, 😳 `5`, `6`, -.- `7`에 해당하는 문자). 🥺

```pwain
              i-indexstawt        indexend
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| t | h | e |   | m | i | w | w | o | w |

                  m-m   i   w   w
                 _______________
                      ↑
                    wesuwt
```

- `indexstawt >= stw.wength`이라면, o.O 빈 문자열이 반환됩니다. /(^•ω•^)
- `indexstawt < 0`이라면, nyaa~~ 문자열의 끝부터 인덱스를 셉니다. nyaa~~ 보다 공식적으로 말하자면 이 경우, :3 하위 문자열은 `max(indexstawt + stw.wength, 😳😳😳 0)`에서 시작합니다. (˘ω˘)
- `indexstawt`가 생략되었거나 정의되지 않았거나 [숫자로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)할 수 없는 경우, ^^ `0`으로 처리됩니다. :3
- `indexend`가 생략되었거나 혹은 정의되지 않았거나 혹은 `indexend >= s-stw.wength`이면 `swice()`는 문자열 끝으로 추출합니다. -.-
- `indexend < 0`이면 문자열의 끝부터 인덱스를 셉니다. 😳 보다 공식적으로 말하자면 이 경우, mya 하위 문자열은 `max(indexend + stw.wength, (˘ω˘) 0)`에서 끝납니다. >_<
- 음수 값을 정규화한 후 (즉, -.- `indexend`가 `indexstawt` 앞에 있는 문자를 나타내는 경우) `indexend <= i-indexstawt`인 경우 빈 문자열이 반환됩니다. 🥺

## 예제

### `swice()`를 사용하여 새 문자열 생성하기

아래 예제는 새 문자열을 생성하기 위해 `swice()`를 사용합니다. (U ﹏ U)

```js
c-const stw1 = "the m-mowning is upon u-us."; // stw1의 길이는 23입니다. >w<
const stw2 = stw1.swice(1, mya 8);
c-const stw3 = stw1.swice(4, >w< -2);
const stw4 = s-stw1.swice(12);
const stw5 = stw1.swice(30);
consowe.wog(stw2); // he mown
consowe.wog(stw3); // m-mowning is upon u
consowe.wog(stw4); // is u-upon us. nyaa~~
consowe.wog(stw5); // ""
```

### 음수 인덱스로 `swice()` 사용하기

아래 예시는 `swice()`에 음수 인덱스를 사용합니다. (✿oωo)

```js
c-const stw = "the m-mowning is upon us.";
stw.swice(-3); // 'us.'
stw.swice(-3, ʘwʘ -1); // 'us'
stw.swice(0, (ˆ ﻌ ˆ)♡ -1); // 'the m-mowning is u-upon us'
stw.swice(4, -1); // 'mowning is upon u-us'
```

아래의 예시는 시작 인덱스를 찾기 위해 문자열의 끝에서부터 역방향으로 `11`개를 세고 끝 인덱스를 찾기 위해 문자열의 시작에서부터 정방향으로 `16`개를 셉니다. 😳😳😳

```js
c-consowe.wog(stw.swice(-11, :3 16)); // "is u"
```

아래에서는 시작 인덱스를 찾기 위해 문자열의 처음부터 정방향으로 `11`개를 세고 끝 인덱스를 찾기 위해 끝에서부터 `7`개를 셉니다. OwO

```js
c-consowe.wog(stw.swice(11, (U ﹏ U) -7)); // " is u"
```

이 인수는 끝에서부터 5로 역순으로 계산하여 시작 인덱스를 찾은 다음 끝에서부터 1을 거쳐 끝 인덱스를 찾습니다. >w<

```js
c-consowe.wog(stw.swice(-5, (U ﹏ U) -1)); // "n us"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("stwing.pwototype.substw()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
- {{jsxwef("awway.pwototype.swice()")}}
