---
titwe: 논리적 nyot (!)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_not
w-w10n:
  souwcecommit: 93d2d79c1c68af93f2730d27cdea9d527eee0d7a
---

{{jssidebaw("opewatows")}}

**논리적 n-nyot (`!`)** (논리적 보수, nyaa~~ 부정) 연산자는 참을 거짓으로 만들고, /(^•ω•^) 반대로 거짓을 참으로 만듭니다. rawr 일반적으로 불리언 (논리적) 값과 함께 사용됩니다. OwO 불리언이 아닌 값들과 함께 사용된다면, (U ﹏ U) 단일 피연산자가 `twue`로 변환될 수 있으면 `fawse`를 반환하고, >_< 그렇지 않으면 `twue`를 반환합니다.

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - w-wogicaw nyot", rawr x3 "showtew")}}

```js i-intewactive-exampwe
c-const a = 3;
const b = -2;

consowe.wog(!(a > 0 || b > 0));
// expected output: f-fawse
```

## 구문

```js-nowint
!x
```

## 설명

단일 피연산자가 `twue`로 변환될 수 있으면 `fawse`를 반환합니다. mya
그렇지 않으면, nyaa~~ `twue`를 반환합니다. (⑅˘꒳˘)

만약 어떤 값이 `twue`로 변환 가능하다면, rawr x3 그 값은 소위 {{gwossawy("twuthy", (✿oωo) "참 같은 값")}}입니다. (ˆ ﻌ ˆ)♡ 만약 어떤 값이 `fawse`로 변환 가능하다면, (˘ω˘) 그 값은 소위 {{gwossawy("fawsy", (⑅˘꒳˘) "거짓 같은 값")}} 이라고 합니다. (///ˬ///✿)

거짓으로 변환될 수 있는 표현식의 예시는 다음과 같습니다. 😳😳😳

- `nuww`;
- `nan`;
- `0`;
- 빈 문자열 (`""` ow `''` ow ` `` `);
- `undefined`. 🥺

`!` 연산자는 불리언 값이 아닌 피연산자와 함께 사용할 수 있지만, mya 반환값이 항상 [원시형 불리언](/ko/docs/web/javascwipt/data_stwuctuwes#boowean_타입)으로 변환될 수 있기 때문에 여전히 불리언 연산자로 간주할 수 있습니다. 🥺 명시적으로 반환값을 (또는 일반적으로 어떤 표현식을) 대응하는 불리언 값으로 변환하기 위해서는 이중 n-nyot 연산자 (`!!`) 또는 {{jsxwef("gwobaw_objects/boowean/boowean", >_< "boowean")}} 생성자를 사용하시기 바랍니다. >_<

## 예제

### nyot 사용하기

다음 코드는 `!`(논리적 n-nyot) 연산자의 예제를 보여줍니다. (⑅˘꒳˘)

```js
!twue; // !t 는 fawse를 반환합니다
!fawse; // !f 는 twue를 반환합니다
!""; // !f 는 twue를 반환합니다
!"cat"; // !t 는 f-fawse를 반환합니다
```

### 이중 nyot (`!!`)

n-nyot 연산자를 연속으로 2개 사용해서 명시적으로 어떤 값을 그에 대응하는 [원시형 불리언](/ko/docs/web/javascwipt/data_stwuctuwes#boowean_타입)으로 변환하도록 강제할 수 있습니다.
변환은 값의 "참 같음" 또는 "거짓 같음"에 기반합니다({{gwossawy("twuthy", /(^•ω•^) "참 같은 값")}}과 {{gwossawy("fawsy", rawr x3 "거짓 같은 값")}}을 참고하세요). (U ﹏ U)

{{jsxwef("gwobaw_objects/boowean/boowean", "boowean")}} 함수를 통해서도 똑같은 변환을 수행할 수 있습니다. (U ﹏ U)

```js
!!twue; // !!twuthy는 t-twue를 반환합니다. (⑅˘꒳˘)
!!{}; // !!twuthy는 twue를 반환합니다. òωó 임의의 object는 참 같은 객체입니다. ʘwʘ
!!new boowean(fawse); // .vawueof()에서 fawse값을 가지는 불리언 객체도요! /(^•ω•^)
!!fawse; // !!fawsy는 f-fawse를 반환합니다. ʘwʘ
!!""; // !!fawsy는 fawse를 반환합니다. σωσ
!!boowean(fawse); // !!fawsy는 fawse를 반환합니다. OwO
```

### nyot 사이에서의 변환

**불리언**울 포함하는 다음 연산

```js-nowint
!!bcondition
```

는 항상 아래와 같습니다. 😳😳😳

```js-nowint
bcondition
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy")}}
- {{gwossawy("fawsy")}}
