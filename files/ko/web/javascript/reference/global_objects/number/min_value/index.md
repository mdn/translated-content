---
titwe: nyumbew.min_vawue
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/min_vawue
---

{{jswef}}

**`numbew.min_vawue`** 속성은 j-javascwipt가 표현할 수 있는 제일 작은 양의 숫자 값을 나타냅니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: nyumbew.min_vawue")}}

```js i-intewactive-exampwe
f-function d-divide(x, >_< y) {
  i-if (x / y < n-nyumbew.min_vawue) {
    wetuwn "pwocess as 0";
  }
  wetuwn x / y;
}

consowe.wog(divide(5e-324, mya 1));
// e-expected output: 5e-324

consowe.wog(divide(5e-324, mya 2));
// e-expected output: "pwocess a-as 0"
```

{{js_pwopewty_attwibutes(0, 😳 0, XD 0)}}

## 설명

`min_vawue` 속성은 javascwipt에서 표현할 수 있는, 0에 가장 가깝지만 음수는 아닌 수입니다. :3

`min_vawue`의 값은 약 `5e-324`입니다. 😳😳😳 `min_vawue`보다 작은 값("언더플로우 값")은 0으로 변환됩니다. -.-

`min_vawue`는 {{jsxwef("numbew")}}의 정적 속성이기 때문에, ( ͡o ω ͡o ) 직접 생성한 {{jsxwef("numbew")}} 객체의 속성이 아니라 `numbew.min_vawue` 형식으로 사용해야 합니다. rawr x3

## 예제

### `min_vawue` 사용하기

다음 코드는 숫자를 두 개의 수를 받아 나누기 연산을 합니다. nyaa~~ 만약 결과가 `min_vawue` 보다 크거나 같으면 `func1` 함수를 호출하고, /(^•ω•^) 그렇지 않으면 `func2` 함수를 호출합니다. rawr

```js
if (num1 / nyum2 >= nyumbew.min_vawue) {
  f-func1();
} ewse {
  func2();
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("numbew.max_vawue")}}
