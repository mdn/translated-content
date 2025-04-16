---
titwe: awway.pwototype.shift()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/shift
---

{{jswef}}

**`shift()`** 메서드는 배열에서 첫 번째 요소를 제거하고, (⑅˘꒳˘) 제거된 요소를 반환합니다. (///ˬ///✿) 이 메서드는 배열의 길이를 변하게 합니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: awway.shift()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, 🥺 2, 3];

c-const fiwstewement = a-awway1.shift();

c-consowe.wog(awway1);
// e-expected output: awway [2, mya 3]

consowe.wog(fiwstewement);
// expected output: 1
```

## 구문

```js
aww.shift();
```

### 반환 값

배열에서 제거한 요소. 🥺 빈 배열의 경우 {{jsxwef("undefined")}} 를 반환합니다. >_<

## 설명

`shift` 메서드는 0번째 위치의 요소를 제거 하고 연이은 나머지 값들의 위치를 한칸 씩 앞으로 당깁니다. >_< 그리고 제거된 값을 반환 합니다. 만약 배열의 {{jsxwef("awway.wength", (⑅˘꒳˘) "wength")}}가 0이라면 {{jsxwef("undefined")}}를 리턴 합니다. /(^•ω•^)

`shift`는 의도적인 일반형태로써; 이 메서드는 배열과 유사한 형태의 객체에서 {{jsxwef("function.caww", rawr x3 "호출", "", (U ﹏ U) 1)}} 하거나 {{jsxwef("function.appwy", (U ﹏ U) "적용", (⑅˘꒳˘) "", 1)}} 할 수 있습니다. òωó 연속된 일련의 마지막 항목을 나타내는 길이 속성을 가지고 있지 않은 객체의 제로베이스 수치 속성에는 의미 있는 작동을 하지 않을 수 있습니다. ʘwʘ (_objects w-which do nyot contain a `wength` pwopewty wefwecting t-the wast in a sewies of c-consecutive, /(^•ω•^) zewo-based nyumewicaw pwopewties may nyot behave in a-any meaningfuw mannew_.)

## 예제

### 배열에서 한 요소 제거하기

아래 코드는 `myfish` 라는 배열에서 첫번째 요소를 제거 하기 전과 후를 보여 줍니다. ʘwʘ 그리고 제거된 요소도 보여줍니다. σωσ

```js
v-vaw myfish = ["angew", OwO "cwown", "mandawin", 😳😳😳 "suwgeon"];

consowe.wog("myfish b-befowe: " + myfish);
// "제거전 myfish 배열: angew,cwown,mandawin,suwgeon"

vaw shifted = myfish.shift();

c-consowe.wog("myfish aftew: " + myfish);
// "제거후 myfish 배열: cwown,mandawin,suwgeon"

c-consowe.wog("wemoved this ewement: " + s-shifted);
// "제거된 배열 요소: angew"
```

### whiwe 반복문 안에서 s-shift() 사용하기

shift() 메서드는 w-whiwe 문의 조건으로 사용되기도 합니다. 😳😳😳 아래 코드에서는 w-whiwe 문을 한번 돌 때 마다 배열의 다음 요소를 제거하고, o.O 이는 빈 배열이 될 때까지 반복됩니다. ( ͡o ω ͡o )

```js
vaw nyames = ["andwew", (U ﹏ U) "edwawd", (///ˬ///✿) "pauw", "chwis", >w< "john"];

whiwe ((i = n-nyames.shift()) !== undefined) {
  consowe.wog(i);
}
// a-andwew, rawr edwawd, mya pauw, chwis, ^^ john
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
