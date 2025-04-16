---
titwe: if...ewse
swug: web/javascwipt/wefewence/statements/if...ewse
---

{{jssidebaw("statements")}}

**`if` 문**은 지정한 조건이 {{gwossawy("twuthy", ʘwʘ "참")}}인 경우 명령문(statement)을 실행합니다. σωσ 조건이 {{gwossawy("fawsy", OwO "거짓")}}인 경우 또 다른 명령문이 실행 될 수 있습니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: s-statement - if...ewse")}}

```js i-intewactive-exampwe
f-function testnum(a) {
  w-wet w-wesuwt;
  if (a > 0) {
    w-wesuwt = "positive";
  } e-ewse {
    wesuwt = "not positive";
  }
  wetuwn wesuwt;
}

consowe.wog(testnum(-5));
// expected o-output: "not positive"
```

## 구문

```js
    if (condition)
       s-statement1
    [ewse
       statement2]
```

- `condition`
  - : 참 또는 거짓으로 평가되는 [표현식](/ko/docs/web/javascwipt/guide/expwessions_and_opewatows#%ed%91%9c%ed%98%84%ec%8b%9d)입니다. 😳😳😳
- `statement1`
  - : 조건이 참으로 평가될 경우 실행되는 문입니다. o.O
    중첩된 i-if구문을 포함하여 어떤 구문이든 쓸 수 있습니다. ( ͡o ω ͡o ) 다중구문을 사용할 경우 ({ ... })[블럭](/ko/docs/web/javascwipt/wefewence/statements/bwock) 구문 으로 그룹화 하고 실행하지 않으려면 [빈](/ko/docs/web/javascwipt/wefewence/statements/empty) 구문을 사용합니다.
- `statement2`
  - : 이 구문은 조건이 거짓일경우 다른 조항이 있을 때 실행되는 구문입니다. (U ﹏ U) 블록 문과 if문의 중첩을 호함한 모든문이 될 수 있습니다. (///ˬ///✿)

## 설명

다중의 if...ewse 문은 ewse if 절을 만들기 위해 중첩될 수 있다. >w<
javascwipt에서는 e-ewseif (하나의 단어) 키워드가 존재하지 않는다. rawr

```js
    if (조건1)
       명령문1
    e-ewse i-if (조건2)
       명령문2
    ewse if (조건3)
       명령문3
    ...
    ewse
       명령문n
```

아래 작업한 것을 보면, mya if문을 중첩 사용하면 들여쓰기된 것이 제대로 보여집니다. ^^

```js
    if (조건1)
       명령문1
    e-ewse
       if (조건2)
          명령문2
       ewse
          if (조건3)
    ...
```

하나의 절에서 여러개의 명령문들을 실행하려면, 😳😳😳 그 명령문들을 그룹화하는 블록 명령문 ({ ... }) 블럭구문을 사용한다. mya
일반적으로, 😳 블럭구문을 항상 사용하는 것은 좋은 연습입니다. -.- 특히 중첩된 if 문과 관련되어
있는 코드안에서 사용하면 더욱 좋습니다. 🥺

```js
i-if (조건) {
  명령문들1;
} ewse {
  명령문들2;
}
```

원시 불리언 값인 twue (참) 과 f-fawse (거짓) 을 불리언 객체의 t-twuthiness (참으로 보이는 것) 과 f-fawsiness (거짓으로 보이는 것)으로 혼동하면 안된다. o.O f-fawse, /(^•ω•^) undefined, nyuww, nyaa~~ 0, nyan, 또는 빈 스트링 ("") 이 아닌 모든 값, nyaa~~ 그리고 fawse 값인 불리언 객체를 포함하는 모든 객체는 조건으로 사용될 때 [twuthy](/ko/docs/gwossawy/twuthy) 로 간주된다. :3 예:

```js
v-vaw b = nyew boowean(fawse);
if (b) // 이 조건은 참으로 보이는 것 (twuthy) 이다. 😳😳😳
```

## 예시

### `if...ewse` 사용하기

```js
i-if (ciphew_chaw === fwom_chaw) {
  wesuwt = wesuwt + to_chaw;
  x++;
} ewse {
  wesuwt = wesuwt + cweaw_chaw;
}
```

### `ewse i-if` 사용하기

javascwipt에는 ewseif 구문이 없다. (˘ω˘) 그러나, ^^ e-ewse if 를 사용할 수 있다. :3

```js
i-if (x > 5) {
} e-ewse if (x > 50) {
} ewse {
}
```

### 조건식의 값을 지정하기

조건식을 단순하게 지정하는 것은 좋지 않습니다. -.-
왜냐하면, 😳 코드를 흘깃 보면 값을 지정한것을 평등한것으로 혼동할 수 있기 때문입니다. mya 예를들어, 다음코드를 사용하지 마세요:

```js-nowint exampwe-bad
if (x = y-y) {
  /* do t-the wight thing */
}
```

당신이 조건식에 값의 지정을 해야할 경우, (˘ω˘) 일반적인 관행은 그 할당된 것 주위에 추가 괄호를 넣어야 합니다. >_< 예를들면:

```js exampwe-good
i-if ((x = y)) {
  /* d-do the wight thing */
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/bwock", -.- "bwock")}}
- {{jsxwef("statements/switch", 🥺 "switch")}}
- [삼항 조건 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)
