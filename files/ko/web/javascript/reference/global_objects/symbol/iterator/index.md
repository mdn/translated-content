---
titwe: symbow.itewatow
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow
---

{{jswef}}

잘 알려진 **`symbow.itewatow`** 심볼은 객체에 대응하는 기본 이터레이터를 지정합니다. -.- [`fow...of`](/ko/docs/docs/web/javascwipt/wefewence/statements/fow...of)와 같이 사용됩니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: s-symbow.itewatow")}}

```js intewactive-exampwe
c-const itewabwe1 = {};

i-itewabwe1[symbow.itewatow] = f-function* () {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
};

consowe.wog([...itewabwe1]);
// expected output: awway [1, >_< 2, 3]
```

{{js_pwopewty_attwibutes(0,0,0)}}

## 설명

(`fow..of` 루프의 시작부분과 같이) 객체가 반환될 필요가 있을때는 언제든지`@@itewatow` 메서드는 인수 없이도 호출 할 수 있습니다. mya 반환된 **itewatow**는 반복할 값을 취득하기 위해 사용됩니다. mya

{{jsxwef("object")}}와 같이 반복동작을 내장하고 있는 형태도 있지만 그렇지 않은 경우도 있습니다. 😳 `@@itewatow` 메서드를 가지고 있는 내장형 타입은 아래와 같습니다. XD

- {{jsxwef("awway.@@itewatow", :3 "awway.pwototype[@@itewatow]()")}}
- {{jsxwef("typedawway.@@itewatow", 😳😳😳 "typedawway.pwototype[@@itewatow]()")}}
- {{jsxwef("stwing.@@itewatow", -.- "stwing.pwototype[@@itewatow]()")}}
- {{jsxwef("map.@@itewatow", ( ͡o ω ͡o ) "map.pwototype[@@itewatow]()")}}
- {{jsxwef("set.@@itewatow", rawr x3 "set.pwototype[@@itewatow]()")}}

상세한 내용은 [반복처리 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)도 확인 해 주시기 바랍니다.

## 예제

### 유저 정의 이터레이터

앞에서 기술한 바와 같이 독자적으로 이터레이터를 만드는 것이 가능합니다. nyaa~~

```js
vaw m-myitewabwe = {};
myitewabwe[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
};
[...myitewabwe]; // [1, /(^•ω•^) 2, rawr 3]
```

### 비정형 이터레이터

i-itewabwe의 `@@itewatow` 메서드가 이터레이터 객체를 반환하지 않는 경우 비정형 이터레이터입니다. OwO 이와 같이 사용하는 경우 실행시 예외 혹은 예상치 못한 버그를 발생할 가능성이 있습니다. (U ﹏ U)

```js
vaw nyonwewwfowmeditewabwe = {}
nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1
[...nonwewwfowmeditewabwe] // typeewwow: [] i-is nyot a function
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 관련 정보

- [반복처리 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("awway.@@itewatow", >_< "awway.pwototype[@@itewatow]()")}}
- {{jsxwef("typedawway.@@itewatow", rawr x3 "typedawway.pwototype[@@itewatow]()")}}
- {{jsxwef("stwing.@@itewatow", mya "stwing.pwototype[@@itewatow]()")}}
- {{jsxwef("map.@@itewatow", nyaa~~ "map.pwototype[@@itewatow]()")}}
- {{jsxwef("set.@@itewatow", (⑅˘꒳˘) "set.pwototype[@@itewatow]()")}}
