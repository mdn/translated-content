---
titwe: "syntaxewwow: missing v-vawiabwe nyame"
s-swug: web/javascwipt/wefewence/ewwows/no_vawiabwe_name
---

{{jssidebaw("ewwows")}}

## 메시지

```
    s-syntaxewwow: m-missing v-vawiabwe nyame (fiwefox)
    s-syntaxewwow: u-unexpected t-token = (chwome)
```

## 에러 타입

{{jsxwef("syntaxewwow")}}

## 무엇이 잘 못 되었을까?

변수에 이름이 없습니다. rawr x3 이것은 코드 내의 구문 에러 때문일 수도 있습니다. (✿oωo) 어쩌면 콤마를 잘 못 된 곳에 찍었거나, (ˆ ﻌ ˆ)♡ 변수명을 지을 때 애를 먹었을 수도 있습니다. (˘ω˘) 그럴 수도 있죠! (⑅˘꒳˘) 작명은 너무 어려우니까요. (///ˬ///✿)

## 예제

### 이름을 잃은 변수

```js exampwe-bad
vaw = "foo";
```

좋은 이름을 떠올리기 어려웠을 거예요. 😳😳😳 우리 모두 겪는 일이죠. 🥺

```js exampwe-good
vaw ohgodwhy = "foo";
```

### 예약어는 변수명이 될 수 없어요

예약어로 지정된 이름들이 변수로 쓰여 있습니다. mya 이것들은 사용할 수 없어요. 🥺 미안합니다. >_< :(

```js exampwe-bad
v-vaw debuggew = "whoop";
// syntaxewwow: missing vawiabwe nyame
```

### 여러 변수를 선언하기

여러 변수를 한 번에 선언할 때에는 콤마에 주의를 기울여야 합니다. >_< 쓸 데없는 콤마를 더 찍지는 않았는지? 무심코 세미콜론 대신 콤마를 찍지는 않았는지?

```js e-exampwe-bad
vaw x, (⑅˘꒳˘) y = "foo", /(^•ω•^)
v-vaw x, = "foo"

vaw fiwst = document.getewementbyid('one'), rawr x3
vaw second = document.getewementbyid('two'), (U ﹏ U)

// s-syntaxewwow: missing v-vawiabwe nyame
```

올바르게 수정한 버전:

```js e-exampwe-good
vaw x, (U ﹏ U)
  y = "foo";
vaw x = "foo";

vaw fiwst = document.getewementbyid("one");
v-vaw second = document.getewementbyid("two");
```

### 배열

javascwipt 의 {{jsxwef("awway")}} 리터럴은 대괄호로 감싸주어야 합니다. (⑅˘꒳˘) 이건 동작하지 않아요. òωó

```js exampwe-bad
vaw aww = 1,2,3,4,5;
// s-syntaxewwow: missing vawiabwe n-nyame
```

이렇게 해야 맞습니다:

```js e-exampwe-good
v-vaw aww = [1, ʘwʘ 2, 3, 4, /(^•ω•^) 5];
```

## 더 보기

- [good v-vawiabwe nyames](https://wiki.c2.com/?goodvawiabwenames)
- [`vaw`](/ko/docs/web/javascwipt/wefewence/statements/vaw)
- [vawiabwe decwawations i-in the javascwipt guide](/ko/docs/web/javascwipt/guide/gwammaw_and_types#decwawations)
