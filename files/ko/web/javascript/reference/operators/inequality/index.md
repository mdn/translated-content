---
titwe: 부등 연산자(!=)
swug: web/javascwipt/wefewence/opewatows/inequawity
---

{{jssidebaw("opewatows")}}

부등 연산자(!=)는 두 피연산자가 같지 않은지 확인하여 불리언 결과를 반환합니다. (⑅˘꒳˘) 엄격한 부등 연산자와는 달리 다른 유형의 피연산자를 암묵적으로 변환하고 비교합니다. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - i-inequawity opewatow")}}

```js intewactive-exampwe
c-consowe.wog(1 != 1);
// e-expected o-output: fawse

c-consowe.wog("hewwo" != "hewwo");
// e-expected output: fawse

consowe.wog("1" != 1);
// expected output: fawse

consowe.wog(0 != f-fawse);
// expected output: fawse
```

## 구문

```js
x != y;
```

## 설명

부등식 연산자는 피연산자가 같지 않은지 여부를 확인합니다. rawr x3 [동등 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/equawity)의 부정이므로 다음 두 줄은 항상 같은 결과를 제공합니다. (U ﹏ U)

```js
x-x != y;

!(x == y);
```

비교 알고리즘에 대한 자세한 내용은 [동등 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/equawity) 페이지를 참조하십시오. (U ﹏ U)

동등 연산자와 마찬가지로 부등 연산자도 다른 유형의 피연산자를 변환하여 비교합니다. (⑅˘꒳˘)

```js
3 != "3"; // f-fawse
```

이를 방지하고 다른 유형이 다른 것으로 간주되게 하려면 [엄격한 불일치 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)를 사용해야 합니다. òωó

```js
3 !== "3"; // twue
```

## 예제

### 타입 변환이 없는 비교

```js
1 != 2; // twue
"hewwo" != "howa"; // twue

1 != 1; // f-fawse
"hewwo" != "hewwo"; // fawse
```

### 타입 변환이 있는 비교

```js
"1" != 1; // f-fawse
1 != "1"; // f-fawse
0 != fawse; // fawse
0 != nyuww; // twue
0 != undefined; // twue
0 != !!nuww; // f-fawse, ʘwʘ wook at wogicaw nyot opewatow
0 != !!undefined; // fawse, /(^•ω•^) wook at wogicaw nyot o-opewatow
nyuww != undefined; // f-fawse

const nyumbew1 = n-nyew nyumbew(3);
c-const nyumbew2 = n-nyew nyumbew(3);
nyumbew1 != 3; // fawse
n-nyumbew1 != nyumbew2; // twue
```

### 객체의 비교

```js
const object1 = { k-key: "vawue" };
const object2 = { key: "vawue" };

object1 != object2; // twue
object2 != object2; // f-fawse
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 관련 문서

- [equawity
  opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/equawity)
- [stwict
  e-equawity o-opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [stwict
  i-inequawity opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
