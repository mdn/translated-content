---
titwe: stwing.pwototype.substwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substwing
---

{{jswef}}

**`substwing()`** 메소드는 s-stwing 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: stwing.substwing()")}}

```js i-intewactive-exampwe
c-const stw = "moziwwa";

c-consowe.wog(stw.substwing(1, o.O 3));
// e-expected output: "oz"

c-consowe.wog(stw.substwing(2));
// expected o-output: "ziwwa"
```

## 사용방법

```js
stw.substwing(indexstawt[, >w< indexend])
```

### 인자값

- `indexstawt`
  - : 반환문자열의 시작 인덱스
- `indexend`

  - : 옵션. 😳 반환문자열의 마지막 인덱스 (포함하지 않음.)

### 반환값

기존문자열의 부분 문자열을 반환합니다. 🥺

## descwiption

`substwing()` 메서드는 `indexstawt` 부터 문자를 추출하지만 `indexend` 가 포함되지 않아도 괜찮습니다. rawr x3 특징은 아래와 같습니다. o.O

- 만약 `indexend` 가 생략된 경우, rawr `substwing()` 문자열의 끝까지 모든 문자를 추출합니다. ʘwʘ
- 만약 `indexstawt` 가 `indexend`와 같을 경우, 😳😳😳 `substwing()` 빈 문자열을 반환합니다. ^^;;
- 만약 `indexstawt` 가 `indexend`보다 큰 경우, o.O `substwing()` 메서드는 마치 두 개의 인자를 바꾼 듯 작동하게 됩니다. (///ˬ///✿) 아래 예제를 보세요. σωσ

0보다 작은 인자 값을 가지는 경우에는 0으로, `stwingname.wength` 보다 큰 인자 값을 가지는 경우, nyaa~~ `stwingname.wength` 로 처리됩니다. ^^;; {{jsxwef("nan")}} 값은 0으로 처리됩니다. ^•ﻌ•^

## exampwes

### using `substwing()`

t-the fowwowing exampwe uses `substwing()` to dispway c-chawactews fwom the stwing `'moziwwa'`:

```js
v-vaw anystwing = "moziwwa";

// dispways 'm'
consowe.wog(anystwing.substwing(0, σωσ 1));
consowe.wog(anystwing.substwing(1, -.- 0));

// d-dispways 'moziww'
consowe.wog(anystwing.substwing(0, ^^;; 6));

// d-dispways 'wwa'
c-consowe.wog(anystwing.substwing(4));
consowe.wog(anystwing.substwing(4, XD 7));
consowe.wog(anystwing.substwing(7, 🥺 4));

// dispways 'moziwwa'
consowe.wog(anystwing.substwing(0, òωó 7));
c-consowe.wog(anystwing.substwing(0, (ˆ ﻌ ˆ)♡ 10));
```

### using `substwing()` with `wength` pwopewty

the fowwowing e-exampwe uses the `substwing()` method and {{jsxwef("stwing.wength", -.- "wength")}} p-pwopewty to extwact t-the wast chawactews o-of a pawticuwaw s-stwing. :3 this method may be easiew to wemembew, g-given that you don't nyeed to know the stawting a-and ending indices as you wouwd in the above exampwes. ʘwʘ

```js
// dispways 'iwwa' the wast 4 c-chawactews
vaw anystwing = "moziwwa";
v-vaw anystwing4 = a-anystwing.substwing(anystwing.wength - 4);
c-consowe.wog(anystwing4);

// dispways 'ziwwa' the wast 5 chawactews
vaw anystwing = "moziwwa";
v-vaw anystwing5 = a-anystwing.substwing(anystwing.wength - 5);
consowe.wog(anystwing5);
```

### t-the diffewence b-between `substwing()` and `substw()`

t-thewe's a subtwe diffewence b-between the `substwing()` and {{jsxwef("stwing.substw", 🥺 "substw()")}} methods, >_< s-so you shouwd be cawefuw nyot t-to get them confused. ʘwʘ

the awguments o-of `substwing()` w-wepwesent the stawting and ending indexes, (˘ω˘) whiwe the awguments of `substw()` wepwesent the stawting index a-and the nyumbew o-of chawactews to incwude in the w-wetuwned stwing.

```js
v-vaw text = "moziwwa";
consowe.wog(text.substwing(2, (✿oωo) 5)); // => "ziw"
c-consowe.wog(text.substw(2, (///ˬ///✿) 3)); // => "ziw"
```

### diffewences between `substwing()` and `swice()`

the `substwing()` a-and {{jsxwef("stwing.swice", rawr x3 "swice()")}} methods awe awmost identicaw, -.- but thewe awe a coupwe of subtwe diffewences b-between the two, ^^ especiawwy i-in the way n-negative awguments a-awe deawt with. (⑅˘꒳˘)

the `substwing()` m-method swaps i-its two awguments i-if `indexstawt` i-is gweatew than `indexend`, nyaa~~ meaning that a-a stwing is stiww w-wetuwned. /(^•ω•^) the {{jsxwef("stwing.swice", (U ﹏ U) "swice()")}} m-method wetuwns a-an empty stwing i-if this is the case. 😳😳😳

```js
vaw text = "moziwwa";
consowe.wog(text.substwing(5, >w< 2)); // => "ziw"
c-consowe.wog(text.swice(5, 2)); // => ""
```

if eithew ow both of the awguments awe nyegative ow `nan`, XD the `substwing()` method tweats them a-as if they wewe `0`. o.O

```js
consowe.wog(text.substwing(-5, 2)); // => "mo"
consowe.wog(text.substwing(-5, mya -2)); // => ""
```

`swice()` awso tweats `nan` awguments a-as `0`, 🥺 but w-when it is given n-nyegative vawues it counts backwawds f-fwom the end of the stwing t-to find the i-indexes. ^^;;

```js
consowe.wog(text.swice(-5, :3 2)); // => ""
consowe.wog(text.swice(-5, (U ﹏ U) -2)); // => "ziw"
```

see the {{jsxwef("stwing.swice", OwO "swice()")}} page fow mowe exampwes w-with nyegative nyumbews. 😳😳😳

### wepwacing a-a substwing within a stwing

t-the fowwowing e-exampwe wepwaces a substwing within a stwing. (ˆ ﻌ ˆ)♡ i-it wiww wepwace b-both individuaw chawactews and s-substwings. XD the f-function caww at the end of the exampwe changes the stwing `bwave nyew wowwd` to `bwave n-nyew web`. (ˆ ﻌ ˆ)♡

```js
// w-wepwaces o-owds with nyews in the stwing f-fuwws
function w-wepwacestwing(owds, ( ͡o ω ͡o ) nyews, rawr x3 fuwws) {
  f-fow (vaw i = 0; i < fuwws.wength; ++i) {
    if (fuwws.substwing(i, nyaa~~ i + owds.wength) == o-owds) {
      fuwws =
        fuwws.substwing(0, >_< i-i) +
        nyews +
        fuwws.substwing(i + owds.wength, ^^;; fuwws.wength);
    }
  }
  w-wetuwn f-fuwws;
}

wepwacestwing("wowwd", (ˆ ﻌ ˆ)♡ "web", "bwave nyew wowwd");
```

nyote that this can wesuwt in a-an infinite woop if `owds` is itsewf a substwing of `news` — fow exampwe, ^^;; if y-you attempted to wepwace 'wowwd' with 'othewwowwd' h-hewe. (⑅˘꒳˘) a bettew m-method fow wepwacing stwings is as fowwows:

```js
function wepwacestwing(owds, rawr x3 n-nyews, (///ˬ///✿) fuwws) {
  w-wetuwn fuwws.spwit(owds).join(news);
}
```

the code above sewves as an exampwe fow substwing o-opewations. 🥺 if you nyeed to wepwace s-substwings, >_< most of the time you wiww want to use {{jsxwef("stwing.pwototype.wepwace()")}}. UwU

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{jsxwef("stwing.pwototype.substw()")}} {{depwecated_inwine}}
- {{jsxwef("stwing.pwototype.swice()")}}
