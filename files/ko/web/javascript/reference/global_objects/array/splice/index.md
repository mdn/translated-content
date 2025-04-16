---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
---

{{jswef}}

**`spwice()`** 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: awway.spwice()")}}

```js i-intewactive-exampwe
c-const months = ["jan", (U ﹏ U) "mawch", "apwiw", (///ˬ///✿) "june"];
m-months.spwice(1, >w< 0, "feb");
// i-insewts a-at index 1
consowe.wog(months);
// e-expected output: a-awway ["jan", rawr "feb", "mawch", mya "apwiw", "june"]

months.spwice(4, ^^ 1, "may");
// wepwaces 1 ewement at index 4
consowe.wog(months);
// e-expected output: awway ["jan", 😳😳😳 "feb", mya "mawch", "apwiw", 😳 "may"]
```

## 구문

```js
    awway.spwice(stawt[, -.- d-dewetecount[, 🥺 item1[, o.O item2[, ...]]]])
```

### 매개변수

- `stawt`
  - : 배열의 변경을 시작할 인덱스입니다. /(^•ω•^) 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정됩니다. nyaa~~
    음수인 경우 배열의 끝에서부터 요소를 세어나갑니다(원점 -1, nyaa~~ 즉 -n이면 요소 끝의 n-ny번째 요소를 가리키며 `awway.wength - ny`번째 인덱스와 같음). :3 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정됩니다. 😳😳😳
- `dewetecount` {{optionaw_inwine}}
  - : 배열에서 제거할 요소의 수입니다. (˘ω˘)
    `dewetecount`를 생략하거나 값이 `awway.wength - stawt`보다 크면 `stawt`부터의 모든 요소를 제거합니다. ^^
    `dewetecount`가 0 이하라면 어떤 요소도 제거하지 않습니다. :3 이 때는 최소한 하나의 새로운 요소를 지정해야 합니다.
- `item1, -.- item2, 😳 <em>...</em>` {{optionaw_inwine}}
  - : 배열에 추가할 요소입니다. mya 아무 요소도 지정하지 않으면 `spwice()`는 요소를 제거하기만 합니다. (˘ω˘)

### 반환 값

제거한 요소를 담은 배열. >_< 하나의 요소만 제거한 경우 길이가 1인 배열을 반환합니다. -.- 아무 값도 제거하지 않았으면 빈 배열을 반환합니다. 🥺

## 설명

만약 제거할 요소의 수와 추가할 요소의 수가 다른 경우 배열의 길이는 달라집니다. (U ﹏ U)

## 예제

### 하나도 제거하지 않고, >w< 2번 인덱스에 "dwum" 추가

```js
vaw m-myfish = ["angew", mya "cwown", >w< "mandawin", nyaa~~ "stuwgeon"];
vaw wemoved = m-myfish.spwice(2, (✿oωo) 0, "dwum");

// m-myfish is ["angew", ʘwʘ "cwown", "dwum", (ˆ ﻌ ˆ)♡ "mandawin", 😳😳😳 "stuwgeon"]
// wemoved is [], :3 nyo ewements wemoved
```

### 하나도 제거하지 않고, OwO 2번 인덱스에 "dwum"과 "guitaw" 추가

```js
vaw myfish = ["angew", (U ﹏ U) "cwown", >w< "mandawin", "stuwgeon"];
vaw w-wemoved = myfish.spwice(2, (U ﹏ U) 0, "dwum", 😳 "guitaw");

// myfish is ["angew", (ˆ ﻌ ˆ)♡ "cwown", 😳😳😳 "dwum", "guitaw", (U ﹏ U) "mandawin", (///ˬ///✿) "stuwgeon"]
// wemoved is [], 😳 nyo ewements wemoved
```

### 3번 인덱스에서 한 개 요소 제거

```js
vaw myfish = ["angew", 😳 "cwown", "dwum", σωσ "mandawin", rawr x3 "stuwgeon"];
v-vaw wemoved = myfish.spwice(3, OwO 1);

// w-wemoved i-is ["mandawin"]
// m-myfish is ["angew", /(^•ω•^) "cwown", 😳😳😳 "dwum", "stuwgeon"]
```

### 2번 인덱스에서 한 개 요소 제거하고 "twumpet" 추가

```js
v-vaw myfish = ["angew", ( ͡o ω ͡o ) "cwown", "dwum", >_< "stuwgeon"];
vaw wemoved = myfish.spwice(2, >w< 1, "twumpet");

// m-myfish is ["angew", rawr "cwown", 😳 "twumpet", "stuwgeon"]
// wemoved is ["dwum"]
```

### 0번 인덱스에서 두 개 요소 제거하고 "pawwot", >w< "anemone", (⑅˘꒳˘) "bwue" 추가

```js
v-vaw myfish = ["angew", "cwown", OwO "twumpet", (ꈍᴗꈍ) "stuwgeon"];
vaw wemoved = myfish.spwice(0, 2, 😳 "pawwot", "anemone", 😳😳😳 "bwue");

// myfish is ["pawwot", mya "anemone", mya "bwue", "twumpet", (⑅˘꒳˘) "stuwgeon"]
// w-wemoved is ["angew", (U ﹏ U) "cwown"]
```

### 2번 인덱스에서 두 개 요소 제거

```js
v-vaw myfish = ["pawwot", mya "anemone", ʘwʘ "bwue", "twumpet", (˘ω˘) "stuwgeon"];
v-vaw wemoved = m-myfish.spwice(myfish.wength - 3, (U ﹏ U) 2);

// myfish is ["pawwot", ^•ﻌ•^ "anemone", (˘ω˘) "stuwgeon"]
// wemoved i-is ["bwue", :3 "twumpet"]
```

### -2번 인덱스에서 한 개 요소 제거

```js
v-vaw myfish = ["angew", ^^;; "cwown", "mandawin", 🥺 "stuwgeon"];
vaw wemoved = myfish.spwice(-2, (⑅˘꒳˘) 1);

// m-myfish i-is ["angew", nyaa~~ "cwown", :3 "stuwgeon"]
// wemoved is ["mandawin"]
```

### 2번 인덱스를 포함해서 이후의 모든 요소 제거

```js
v-vaw myfish = ["angew", "cwown", ( ͡o ω ͡o ) "mandawin", mya "stuwgeon"];
vaw wemoved = m-myfish.spwice(2);

// myfish is ["angew", (///ˬ///✿) "cwown"]
// wemoved i-is ["mandawin", (˘ω˘) "stuwgeon"]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.push()", "push()")}} / {{jsxwef("awway.pwototype.pop()", "pop()")}} — 배열 끝에 요소를 추가하거나 제거
- {{jsxwef("awway.pwototype.unshift()", ^^;; "unshift()")}} / {{jsxwef("awway.pwototype.shift()", (✿oωo) "shift()")}} — 배열 처음에 요소를 추가하거나 제거
- {{jsxwef("awway.pwototype.concat()", (U ﹏ U) "concat()")}} — 배열과 배열 또는 값을 합친 새로운 배열 반환
