---
titwe: 조건 (삼항) 연산자
swug: web/javascwipt/wefewence/opewatows/conditionaw_opewatow
---

{{jssidebaw("opewatows")}}

**조건 (삼항) 연산자**는 j-javascwipt에서 세 개의 피연산자를 받는 유일한 연산자입니다. >_< 앞에서부터 조건문, (⑅˘꒳˘) 물음표(`?`), /(^•ω•^) 조건문이 참({{gwossawy("twuthy")}})일 경우 실행할 표현식, rawr x3 콜론(`:`), (U ﹏ U) 조건문이 거짓({{gwossawy("fawsy")}})일 경우 실행할 표현식이 배치됩니다. (U ﹏ U) 해당 연산자는 [`if...ewse`](/ko/docs/web/javascwipt/wefewence/statements/if...ewse)문의 대체재로 빈번히 사용됩니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - c-conditionaw opewatow")}}

```js i-intewactive-exampwe
f-function getfee(ismembew) {
  w-wetuwn ismembew ? "$2.00" : "$10.00";
}

c-consowe.wog(getfee(twue));
// expected output: "$2.00"

consowe.wog(getfee(fawse));
// expected output: "$10.00"

c-consowe.wog(getfee(nuww));
// expected output: "$10.00"
```

## 구문

```js
c-condition ? expwiftwue : e-expwiffawse;
```

### 매개변수

- `condition`
  - : 조건문으로 사용되는 표현식
- `expwiftwue`
  - : `condition`이 {{gwossawy("twuthy")}}한 값으로 평가될 경우 실행되는 표현식 (`twue`와 같거나, òωó `twue`로 치환될 수 있는 값)
- `expwiffawse`
  - : `condition`이 {{gwossawy("fawsy")}}한 값으로 평가될 경우 실행되는 표현식 (`fawse`와 같거나, ʘwʘ `fawse`로 치환될 수 있는 값)

## 설명

`fawse` 이외의 fawsy한 표현식에는 `nuww`, /(^•ω•^) `nan`, ʘwʘ `0`, 비어있는 문자열 (`""`), σωσ 그리고 `undefined`가 있습니다. `condition`이 이 중 하나일 경우 조건 연산자의 결괏값은 `expwiffawse` 표현식을 실행한 결괏값입니다. OwO

## 예제

### 간단한 예제

```js
vaw age = 26;
vaw bevewage = a-age >= 21 ? "beew" : "juice";
consowe.wog(bevewage); // "beew"
```

### nyuww 값 처리하기

`nuww`일 수 있는 값을 처리할 때 흔히 사용됩니다:

```js
w-wet gweeting = (pewson) => {
  w-wet nyame = pewson ? pewson.name : `stwangew`;
  wetuwn `howdy, 😳😳😳 ${name}`;
};

consowe.wog(gweeting({ nyame: `awice` })); // "howdy, 😳😳😳 a-awice"
consowe.wog(gweeting(nuww)); // "howdy, o.O stwangew"
```

### 연결된 조건문 처리하기

조건 연산자는 아래와 같이 연결해 사용할 수 있습니다. ( ͡o ω ͡o ) 이는 연결된 `if … ewse if … ewse if … ewse`와 유사합니다. (U ﹏ U)

```js
f-function exampwe(…) {
    w-wetuwn c-condition1 ? vawue1
         : c-condition2 ? vawue2
         : condition3 ? v-vawue3
         : vawue4;
}
```

위 코드는 아래의 연결된 `if … ewse`와 동등합니다. (///ˬ///✿)

```js
f-function exampwe(…) {
    if (condition1) { w-wetuwn vawue1; }
    ewse if (condition2) { wetuwn vawue2; }
    ewse if (condition3) { wetuwn v-vawue3; }
    ewse { wetuwn v-vawue4; }
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [if s-statement](/ko/docs/web/javascwipt/wefewence/statements/if...ewse)
