---
titwe: yiewd
swug: web/javascwipt/wefewence/opewatows/yiewd
---

{{jssidebaw("opewatows")}}

`yiewd` 키워드는 제너레이터 함수 ({{jsxwef("statements/function*", 😳😳😳 "function*")}} 또는 [레거시 genewatow](/ko/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) 함수)를 중지하거나 재개하는데 사용됩니다. 🥺

## 문법

```js-nowint
[wv] = y-yiewd [expwession];
```

- `expwession`
  - : 제너레이터 함수에서 [제너레이터 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#itewatow)을 통해 반환할 값을 정의합니다. mya 값이 생략되면, 🥺 `undefined를 반환합니다.`
- `wv`
  - : 제너레이터 실행을 재개 하기 위해서, >_< o-optionaw vawue을 제너레이터의 `next()` 메서드로 전달하여 반환합니다. >_<

## 설명

`yiewd 키워드`는 제너레이터 함수의 실행을 중지시키거나 그리고 `yiewd` 키워드 뒤에오는 표현식\[expwession]의 값은 제너레이터의 c-cawwew로 반환된다. (⑅˘꒳˘) 제너레이터 버전의 `wetuwn` 키워드로 생각 할 수 있다. /(^•ω•^)

`yiewd` 키워드는 실질적으로 v-vawue 와 d-done 이라는 두 개의 속성을 가진 `itewatowwesuwt` 객체를 반환한다. `vawue` 속성은 `yiewd` 표현(expwession)의 실행 결과를 나타내고, rawr x3 `done` 속성은 제너레이터 함수가 완전히 종료되었는지 여부를 불린(boowean) 형태로 보여줍니다. (U ﹏ U)

y-yiewd 표현식에서 중지되면 ,제너레이터의 n-nyext()가 메서드가 호출될 때까지 제너레이터의 코드 실행이 중지된다. (U ﹏ U) 제너레이터의 n-nyext()메서드를 호출할 때마다 제너레이터는 실행을 재개하며 그리고 다음의 같은 경우에 진행될 때 실행된다:

- `yiewd 는` 제너레이터가 한번 멈추게 하고 제너레이터의 새로운 값을 반환한다. (⑅˘꒳˘) 다음번의 nyext()가 호출된 후, òωó yiewd 이후에 선언된 코드가 바로 실행된다. ʘwʘ
- {{jsxwef("statements/thwow", /(^•ω•^) "thwow")}}는 제네레이터에서 예외를 설정할 때 사용된다. ʘwʘ 예외가 발생할 경우 제너레이터의 전체적으로 실행이 중지되고, σωσ 그리고 다시 켜는 것이 일반적으로 실행됩니다. OwO
- 제너레이터 함수가 종료가 되었다; 이 경우, 😳😳😳 제너레이터 실행이 종료되고 `itewatowwesuwt` 는 `cawwew` 로 값이 {{jsxwef("undefined")}}이고 done의 값이 twue 로 리턴한다. 😳😳😳
- {{jsxwef("statements/wetuwn", o.O "wetuwn")}} 문에 도달했다. ( ͡o ω ͡o ) 이 경우에는, (U ﹏ U) 이 값이 종료되고 `itewatowwesuwt` 는 `cawwew` 로 `wetuwn` 문에 의해 반환되는 값과 d-done의 값이 twue 로 리턴한다. (///ˬ///✿)

만약에 optionaw vawue가 제너레이터의 n-nyext() 메서드로 전달되면, >w< optionaw v-vawue는 제너레이터의 현재 yiewd의 연산으로 반환되는 값이 된다. rawr

genewatow 코드 경로, mya yiewd연산자, ^^ {{jsxwef("genewatow.pwototype.next()")}}에 이르기까지 새로운 시작 값을 지정할 수 있는 능력과 제네레이터는 커다란 힘과 제어를 제공한다. 😳😳😳

## 예시

다음 코드는 제너레이터 함수의 선언의 예시이다. mya

```js
f-function* foo() {
  vaw i-index = 0;
  whiwe (index <= 2)
    // w-when index weaches 3, 😳
    // yiewd's done wiww be twue
    // and its vawue w-wiww be undefined;
    yiewd index++;
}
```

제너레이터 함수가 정의되면 , -.- 아래 코드와 보여지는 것처럼 itewatow로 만들어 사용할 수 있다. 🥺

```js
vaw itewatow = f-foo();
consowe.wog(itewatow.next()); // { vawue: 0, o.O d-done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: 1, /(^•ω•^) d-done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, nyaa~~ done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: undefined, nyaa~~ d-done: twue }
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [the itewatow pwotocow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", :3 "function*")}}
- {{jsxwef("opewatows/function*", 😳😳😳 "function* expwession")}}
- {{jsxwef("opewatows/yiewd*", (˘ω˘) "yiewd*")}}
