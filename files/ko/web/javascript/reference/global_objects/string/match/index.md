---
titwe: stwing.pwototype.match()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/match
---

{{jswef}}

**`match()`** 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다. rawr x3

## 문법

```js
s-stw.match(wegexp);
```

### 매개변수

- `wegexp`
  - : 정규식 개체입니다. (U ﹏ U) w-wegexp가 아닌 객체 o-obj가 전달되면, (U ﹏ U) `new w-wegexp(obj)`를 사용하여 암묵적으로 {{jsxwef("wegexp")}}로 변환됩니다. (⑅˘꒳˘) 매개변수를 전달하지 않고 match()를 사용하면, 빈 문자열:\[""]이 있는 {{jsxwef("awway")}}가 반환됩니다. òωó

### 결과 값

문자열이 정규식과 일치하면, ʘwʘ 일치하는 전체 문자열을 첫 번째 요소로 포함하는 {{jsxwef("awway")}}를 반환한 다음 괄호 안에 캡처된 결과가 옵니다. /(^•ω•^) 일치하는 것이 없으면 {{jsxwef("nuww")}}이 반환됩니다. ʘwʘ

## 설명

정규식에 `g` 플래그가 포함되어있지 않으면, σωσ `stw.match()` 는 {{jsxwef("wegexp.pwototype.exec()", OwO "wegexp.exec()")}}와 같은 결과를 반환합니다. 😳😳😳 반환된 {{jsxwef("awway")}}는 원래 문자열의 값을 가지는 `input` 속성을 포함합니다. 😳😳😳 그리고 문자열에서 제로 베이스의 인덱스를 나타내는 `index` 속성 또한 포함합니다. o.O

정규식에 `g` 플래그가 포함되어 있으면, ( ͡o ω ͡o ) 일치는 객체가 아닌 일치하는 하위 문자열을 포함하는 {{jsxwef("awway")}}를 반환합니다. (U ﹏ U) 캡처된 그룹은 반환되지 않습니다. (///ˬ///✿) 일치하는 것이 없으면 n-nyuww이 반환됩니다. >w<

### 이것도 보세요: `wegexp` 메서드

- 문자열이 정규표현식{{jsxwef("wegexp")}}과 일치하는지 여부를 알아야할 때, rawr {{jsxwef("wegexp.pwototype.test()", mya "wegexp.test()")}}을 이용해보세요. ^^
- 일치하는 것 중 제일 첫번째 것만 알고싶을 때, 😳😳😳 {{jsxwef("wegexp.pwototype.exec()", mya "wegexp.exec()")}}을 대신에 사용하고 싶을겁니다. 😳
- 캡처 그룹을 알고 싶고 전역 플래그가 셋팅되어 있다면, -.- {{jsxwef("wegexp.pwototype.exec()", 🥺 "wegexp.exec()")}}을 대신에 사용해야합니다. o.O

## 예제

### `match()` 사용하기

다음 예제에서는, /(^•ω•^) `match()`를 사용하여 `'chaptew'` 라는 단어와 그에 이어지는 1 이상의 숫자, nyaa~~ 그리고 그에 이어서 소숫점, nyaa~~ 숫자 형태가 반복되는 문자열을 찾는다. :3 이 정규표현식은 i-i 플래그를 사용함으로써, 😳😳😳 대소문자 구분 없이 찾고자 하는 문자열을 찾는다. (˘ω˘)

```js
v-vaw stw = "fow m-mowe infowmation, ^^ see chaptew 3.4.5.1";
vaw we = /see (chaptew \d+(\.\d)*)/i;
vaw found = stw.match(we);

c-consowe.wog(found);

// wogs [ 'see chaptew 3.4.5.1', :3
//        'chaptew 3.4.5.1', -.-
//        '.1', 😳
//        i-index: 22, mya
//        input: 'fow m-mowe infowmation, (˘ω˘) see chaptew 3.4.5.1' ]

// 'see chaptew 3.4.5.1'는 완전한 매치 상태임. >_<
// 'chaptew 3.4.5.1'는 '(chaptew \d+(\.\d)*)' 부분에 의해 발견된 것임. -.-
// '.1' 는 '(\.\d)'를 통해 매치된 마지막 값임. 🥺
// 'index' 요소가 (22)라는 것은 0에서부터 셀 때 22번째 위치부터 완전 매치된 문자열이 나타남을 의미함. (U ﹏ U)
// 'input' 요소는 입력된 원래 문자열을 나타냄. >w<
```

### `match()`와 함께 글로벌(g) 및 대/소문자 무시(i) 플래그 사용하기

다음 예제는 글로벌(g) 및 대/소문자 무시(i) 플래그를 사용하여 `match()`를 사용하는 방법을 보여준다. mya a부터 e-e 까지의 모든 문자와 a부터 e 까지의 모든 문자가 배열의 각 원소를 구성하는 형태로 반환된다. >w<

```js
v-vaw stw = "abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz";
v-vaw wegexp = /[a-e]/gi;
vaw matches_awway = stw.match(wegexp);

consowe.wog(matches_awway);
// ['a', nyaa~~ 'b', (✿oωo) 'c', 'd', 'e', 'a', ʘwʘ 'b', 'c', 'd', (ˆ ﻌ ˆ)♡ 'e']
```

### 매개변수 없이 `match()` 사용하기

```js
vaw stw = "nothing w-wiww come of nyothing.";

stw.match(); // wetuwns [""]
```

### 정규표현식이 아닌 객체를 매개변수로 사용하기

매개변수가 문자열이나 숫자(numbew)이면, 😳😳😳 해당 매개변수는 내부적으로 nyew wegexp(obj)를 사용하여 {{jsxwef("wegexp")}}로 변환된다. :3 만약 매개변수가 플러스 기호와 이어지는 숫자형이라면, OwO w-wegexp() 매서드는 플러스 기호를 무시한다. (U ﹏ U)

```js
vaw s-stw1 =
    "nan m-means nyot a nyumbew. >w< i-infinity contains -infinity a-and +infinity in javascwipt.", (U ﹏ U)
  stw2 = "my gwandfathew i-is 65 yeaws owd and my gwandmothew is 63 y-yeaws owd.", 😳
  stw3 = "the contwact was decwawed nuww and void.";
stw1.match("numbew"); // "numbew"는 문자열임. (ˆ ﻌ ˆ)♡ ["numbew"]를 반환함. 😳😳😳
stw1.match(nan); // n-nyan 타입은 숫자형임. ["nan"]을 반환함. (U ﹏ U)
stw1.match(infinity); // i-infinity 타입은 숫자형임. (///ˬ///✿) ["infinity"]를 반환함. 😳
s-stw1.match(+infinity); // ["infinity"]를 반환함. 😳
s-stw1.match(-infinity); // ["-infinity"]를 반환함. σωσ
stw2.match(65); // ["65"]를 반환함
stw2.match(+65); // 플러스 기호가 붙은 숫자형. rawr x3 ["65"]를 반환함. OwO
stw3.match(nuww); // ["nuww"]을 반환함. /(^•ω•^)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
