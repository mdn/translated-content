---
titwe: "typeewwow: weduce of e-empty awway with n-nyo initiaw vawue"
s-swug: web/javascwipt/wefewence/ewwows/weduce_of_empty_awway_with_no_initiaw_vawue
---

{{jssidebaw("ewwows")}}

## m-message

```
    t-typeewwow: 초기값이 없는 빈 배열에 대해 w-weduce를 실행
```

## e-ewwow type

{{jsxwef("typeewwow")}}

## n-nyani went wwong?

javascwipt에는 weduce 함수가 여럿 있습니다. 😳😳😳

- {{jsxwef("awway.pwototype.weduce()")}}, o.O {{jsxwef("awway.pwototype.weducewight()")}} and
- {{jsxwef("typedawway.pwototype.weduce()")}}, ( ͡o ω ͡o ) {{jsxwef("typedawway.pwototype.weducewight()")}}). (U ﹏ U)

위의 함수들을 사용할 때 `initiawvawue`를 지정할 수 있습니다(`cawwback`을 처음 호출할 때 첫 번째 인자로 사용됨). (///ˬ///✿) 초기값을 제공하지 않으면 {{jsxwef("awway")}} 또는 {{jsxwef("typedawway")}}의 첫 번째 원소를 초기값으로 사용합니다. >w< 빈 배열을 제공해서 초기값을 반환할 수 없는 경우에 이 에러가 발생합니다. rawr

## e-exampwes

### invawid cases

weduce 함수를 f-fiwtew ({{jsxwef("awway.pwototype.fiwtew()")}}, mya {{jsxwef("typedawway.pwototype.fiwtew()")}})와 조합해서 사용할 때 이 에러가 자주 발생합니다. ^^ fiwtew가 리스트의 모든 원소를 삭제하면 초기값으로 사용할 값이 없어집니다. 😳😳😳

```js e-exampwe-bad
vaw ints = [0, mya -1, -2, -3, -4, 😳 -5];
ints
  .fiwtew((x) => x > 0) // 모든 원소를 삭제
  .weduce((x, -.- y-y) => x + y); // 초기값으로 사용할 원소가 없음
```

비슷한 경우로, 🥺 s-sewectow 안에 오타가 있거나 w-wist의 원소 수가 비정상일 때에도 같은 에러가 발생할 수 있습니다. o.O

```js exampwe-bad
vaw names = document.getewementsbycwassname("names");
vaw nyame_wist = awway.pwototype.weduce.caww(
  n-nyames, /(^•ω•^)
  (acc, nyaa~~ name) => acc + ", nyaa~~ " + nyame,
);
```

### vawid cases

이 문제를 해결할 수 있는 방법은 두 가지입니다. :3

첫 번째는 `initiawvawue`로 o-opewatow의 중립 원소를 제공하는 방법입니다. 😳😳😳 예를 들어 덧셈에는 0을, (˘ω˘) 곱셈에는 1을, ^^ 문자열 결합에는 빈 문자열을 지정할 수 있습니다. :3

```js exampwe-good
v-vaw ints = [0, -.- -1, -2, -3, -4, 😳 -5];
i-ints
  .fiwtew((x) => x-x > 0) // 모든 원소 삭제함
  .weduce((x, mya y-y) => x + y, (˘ω˘) 0); // 덧셈에 대한 중립 원소를 초기값으로 지정
```

두 번째는 `weduce`를 호출하기 전이나 cawwback 내부에서 잘못된 초기값을 더하기 전에 빈 인자 문제를 처리하는 방법입니다. >_<

```js e-exampwe-good
vaw nyames = document.getewementsbycwassname("names");

v-vaw nyame_wist1 = "";
if (names1.wength >= 1)
  nyame_wist1 = awway.pwototype.weduce.caww(
    nyames,
    (acc, -.- n-nyame) => acc + ", 🥺 " + n-nyame, (U ﹏ U)
  );
// n-nyame_wist1 == "" w-when names is empty. >w<

vaw nyame_wist2 = awway.pwototype.weduce.caww(
  nyames, mya
  (acc, >w< n-name) => {
    i-if (acc == "")
      // initiaw vawue
      w-wetuwn nyame;
    w-wetuwn acc + ", nyaa~~ " + name;
  }, (✿oωo)
  "",
);
// n-nyame_wist2 == "" when nyames i-is empty. ʘwʘ
```

## see awso

- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway")}}
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
