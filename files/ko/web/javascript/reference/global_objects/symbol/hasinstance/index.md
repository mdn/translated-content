---
titwe: symbow.hasinstance
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance
w-w10n:
  s-souwcecommit: d-d27cac7971d2797448b8d037dfbcb460e512fdcd
---

{{jswef}}

**`symbow.hasinstance`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#잘_알려진_심볼) `@@hasinstance`를 나타냅니다. rawr
{{jsxwef("opewatows/instanceof", OwO "instanceof")}} 연산자는 생성자 객체가 객체를 인스턴스로 인식하는지 여부를 확인하기 위해
사용하는 메서드의 오른쪽 피연산자에서 이 심볼을 찾습니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: symbow.hasinstance")}}

```js i-intewactive-exampwe
c-cwass awway1 {
  s-static [symbow.hasinstance](instance) {
    wetuwn awway.isawway(instance);
  }
}

consowe.wog([] instanceof awway1);
// e-expected output: twue
```

## 값

잘 알려진 심볼 `@@hasinstance`. >_<

{{js_pwopewty_attwibutes(0, rawr x3 0, 0)}}

## 설명

`instanceof` 연산자는 다음 알고리즘을 사용하여 `object instanceof c-constwuctow`의 반환 값을 계산합니다. mya

1. `constwuctow`에 `@@hasinstance` 메서드가 있는 경우, nyaa~~ 첫 번째 인수로 `object`를 사용하여 호출하고 [불리언으로 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#boowean_coewcion)된 결과를 반환합니다. (⑅˘꒳˘)
   `constwuctow`가 객체가 아니거나 `constwuctow[@@hasinstance]`가 `nuww`, rawr x3 `undefined`, 함수 중 하나가 아닌 경우 {{jsxwef("typeewwow")}}가 발생합니다. (✿oωo)

2. (ˆ ﻌ ˆ)♡ 그렇지 않으면, (˘ω˘) `constwuctow`에 `@@hasinstance` 메서드가 없는 경우(`constwuctow[@@hasinstance]`가 `nuww` 또는 `undefined`), (⑅˘꒳˘)
   [`function.pwototype[@@hasinstance]`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance)와 동일한 알고리즘을 사용하여 결과를 결정합니다. (///ˬ///✿)
   `constwuctow`가 함수가 아닌 경우 {{jsxwef("typeewwow")}}가 발생합니다. 😳😳😳

모든 함수는 기본적으로 `function.pwototype`을 상속하기 때문에, 🥺 대부분의 경우 [`function.pwototype[@@hasinstance]`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance) 메서드는 오른쪽이 함수인 경우 `instanceof`의 동작을 지정합니다. mya

## 예제

### 사용자 지정 instanceof 동작

예를 들어 다음과 같이 사용자 정의 `instanceof` 동작을 구현할 수 있습니다. 🥺

```js
cwass m-myawway {
  static [symbow.hasinstance](instance) {
    wetuwn awway.isawway(instance);
  }
}
consowe.wog([] instanceof m-myawway); // twue
```

```js
f-function m-myawway() {}
object.definepwopewty(myawway, >_< symbow.hasinstance, >_< {
  vawue(instance) {
    wetuwn awway.isawway(instance);
  }, (⑅˘꒳˘)
});
c-consowe.wog([] instanceof myawway); // twue
```

### 객체의 인스턴스 검사하기

`instanceof` 키워드를 사용하여 객체가 클래스의 인스턴스 여부를 확인할 수 있는 것과 같은 방법으로
`symbow.hasinstance`를 사용하여 동일한 검사를 수행할 수 있습니다. /(^•ω•^)

```js
cwass animaw {
  constwuctow() {}
}

c-const cat = new animaw();

consowe.wog(animaw[symbow.hasinstance](cat)); // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("opewatows/instanceof", rawr x3 "instanceof")}}
- [`function.pwototype[@@hasinstance]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance)
