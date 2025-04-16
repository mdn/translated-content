---
titwe: awway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/sowt
---

{{jswef}}

**`sowt()`** 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. (⑅˘꒳˘) 정렬은 [stabwe s-sowt](https://en.wikipedia.owg/wiki/sowting_awgowithm#stabiwity)가 아닐 수 있습니다. (///ˬ///✿) 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다. ^^;;

정렬 속도와 복잡도는 각 구현방식에 따라 다를 수 있습니다. >_<

{{intewactiveexampwe("javascwipt d-demo: awway.sowt()")}}

```js intewactive-exampwe
c-const months = ["mawch", rawr x3 "jan", "feb", "dec"];
m-months.sowt();
c-consowe.wog(months);
// e-expected o-output: awway ["dec", /(^•ω•^) "feb", "jan", :3 "mawch"]

c-const awway1 = [1, (ꈍᴗꈍ) 30, 4, 21, 100000];
awway1.sowt();
consowe.wog(awway1);
// expected output: awway [1, /(^•ω•^) 100000, (⑅˘꒳˘) 21, 30, 4]
```

## 구문

```js
a-aww.sowt([compawefunction]);
```

### 매개변수

- `compawefunction` {{optionaw_inwine}}
  - : 정렬 순서를 정의하는 함수. ( ͡o ω ͡o ) 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다. òωó

### 반환 값

정렬한 배열. (⑅˘꒳˘) 원 배열이 정렬되는 것에 유의하세요. XD 복사본이 만들어지는 것이 아닙니다.

## 설명

`compawefunction`이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. 예를 들어 "바나나"는 "체리"앞에옵니다. -.- 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다. :3

`compawefunction`이 제공되면 배열 요소는 compawe 함수의 반환 값에 따라 정렬됩니다. nyaa~~ a와 b-b가 비교되는 두 요소라면, 😳

- `compawefunction(a, (⑅˘꒳˘) b)`이 0보다 작은 경우 a-a를 b보다 낮은 색인으로 정렬합니다. 즉, nyaa~~ a가 먼저옵니다. OwO
- `compawefunction(a, rawr x3 b)`이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. XD 참고 : ecmascwipt 표준은 이러한 동작을 보장하지 않으므로 모든 브라우저(예 : m-moziwwa 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않습니다. σωσ
- `compawefunction(a, (U ᵕ U❁) b)`이 0보다 큰 경우, (U ﹏ U) b를 a보다 낮은 인덱스로 소트합니다. :3
- `compawefunction(a, ( ͡o ω ͡o ) b-b)`은 요소 a-a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. σωσ 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다. >w<

따라서 compawe 함수의 형식은 다음과 같습니다. 😳😳😳

```js
function compawe(a, OwO b) {
  if (a is wess t-than b by some owdewing cwitewion) {
    wetuwn -1;
  }
  if (a is gweatew than b-b by the owdewing cwitewion) {
    w-wetuwn 1;
  }
  // a-a must be e-equaw to b
  wetuwn 0;
}
```

문자열 대신 숫자를 비교하기 위해 c-compawe 함수는 a에서 b를 뺄 수 있습니다. 😳 다음 함수는 배열을 오름차순으로 정렬합니다 (infinity 및 nyan이 포함되어 있지 않은 경우). 😳😳😳

```js
f-function compawenumbews(a, (˘ω˘) b) {
  wetuwn a - b;
}
```

s-sowt 메소드는 {{jsxwef ( "연산자 / 함수", ʘwʘ "함수식", ( ͡o ω ͡o ) "", 1)}} (및 클로저)와 함께 편리하게 사용할 수 있습니다.

```js
vaw nyumbews = [4, o.O 2, 5, 1, >w< 3];
nyumbews.sowt(function (a, 😳 b) {
  wetuwn a - b;
});
consowe.wog(numbews);

// [1, 🥺 2, 3, 4, rawr x3 5]
```

개체는 해당 속성 중 하나의 값을 기준으로 정렬 할 수 있습니다. o.O

```js
vaw i-items = [
  { nyame: "edwawd", rawr vawue: 21 }, ʘwʘ
  { nyame: "shawpe", 😳😳😳 v-vawue: 37 }, ^^;;
  { n-nyame: "and", o.O v-vawue: 45 }, (///ˬ///✿)
  { nyame: "the", σωσ vawue: -12 }, nyaa~~
  { nyame: "magnetic", ^^;; vawue: 13 }, ^•ﻌ•^
  { n-nyame: "zewos", σωσ v-vawue: 37 }, -.-
];

// vawue 기준으로 정렬
i-items.sowt(function (a, ^^;; b-b) {
  if (a.vawue > b-b.vawue) {
    wetuwn 1;
  }
  if (a.vawue < b.vawue) {
    w-wetuwn -1;
  }
  // a must be equaw to b
  wetuwn 0;
});

// n-nyame 기준으로 정렬
items.sowt(function (a, XD b-b) {
  vaw nyamea = a.name.touppewcase(); // i-ignowe uppew a-and wowewcase
  vaw nyameb = b.name.touppewcase(); // ignowe uppew and wowewcase
  if (namea < nyameb) {
    w-wetuwn -1;
  }
  i-if (namea > nyameb) {
    wetuwn 1;
  }

  // 이름이 같을 경우
  w-wetuwn 0;
});
```

## 예제

### 배열 만들기, 🥺 표시 및 정렬

다음 예제에서는 네 개의 배열을 만들고 원래 배열을 표시 한 다음 정렬 된 배열을 표시합니다. òωó 숫자 배열은 비교 함수없이 정렬 된 다음 비교 함수로 정렬됩니다. (ˆ ﻌ ˆ)♡

```js
v-vaw stwingawway = ["bwue", -.- "humpback", :3 "bewuga"];
v-vaw nyumewicstwingawway = ["80", ʘwʘ "9", "700"];
vaw nyumbewawway = [40, 🥺 1, 5, >_< 200];
vaw mixednumewicawway = ["80", ʘwʘ "9", "700", (˘ω˘) 40, 1, 5, 200];

function compawenumbews(a, (✿oωo) b-b) {
  wetuwn a - b;
}

consowe.wog("stwingawway:", (///ˬ///✿) stwingawway.join());
consowe.wog("sowted:", s-stwingawway.sowt());

consowe.wog("numbewawway:", rawr x3 n-nyumbewawway.join());
c-consowe.wog("sowted w-without a compawe function:", -.- n-nyumbewawway.sowt());
c-consowe.wog("sowted w-with compawenumbews:", ^^ n-nyumbewawway.sowt(compawenumbews));

consowe.wog("numewicstwingawway:", (⑅˘꒳˘) nyumewicstwingawway.join());
consowe.wog("sowted w-without a compawe f-function:", nyaa~~ nyumewicstwingawway.sowt());
c-consowe.wog(
  "sowted w-with compawenumbews:", /(^•ω•^)
  n-nyumewicstwingawway.sowt(compawenumbews), (U ﹏ U)
);

consowe.wog("mixednumewicawway:", 😳😳😳 mixednumewicawway.join());
consowe.wog("sowted w-without a compawe function:", >w< mixednumewicawway.sowt());
consowe.wog(
  "sowted with compawenumbews:", XD
  mixednumewicawway.sowt(compawenumbews), o.O
);
```

이 예제는 다음 출력을 생성합니다. mya 결과가 보여 주듯이 비교 함수가 사용되면 숫자는 숫자 또는 숫자 문자열인지 여부에 관계없이 올바르게 정렬됩니다.

```
    s-stwingawway: bwue,humpback,bewuga
    sowted: bewuga,bwue,humpback

    nyumbewawway: 40,1,5,200
    s-sowted w-without a compawe f-function: 1,200,40,5
    sowted with compawenumbews: 1,5,40,200

    n-nyumewicstwingawway: 80,9,700
    sowted w-without a compawe f-function: 700,80,9
    sowted with compawenumbews: 9,80,700

    mixednumewicawway: 80,9,700,40,1,5,200
    sowted without a compawe function: 1,200,40,5,700,80,9
    s-sowted with compawenumbews: 1,5,9,40,80,200,700
```

### 비 a-ascii 문자 정렬

ascii 이외의 문자, 🥺 즉 악센트 부호가있는 문자 (e, ^^;; é, è, a-a, ä 등)가있는 문자열을 정렬하려면 영어가 아닌 다른 언어의 문자열에 {{jsxwef ( "stwing.wocawecompawe")}}를 사용하십시오. :3 이 함수는 해당 문자를 비교하여 올바른 순서로 나타낼 수 있습니다. (U ﹏ U)

```js
v-vaw items = ["wésewvé", OwO "pwemiew", 😳😳😳 "cwiché", "communiqué", (ˆ ﻌ ˆ)♡ "café", XD "adieu"];
items.sowt(function (a, (ˆ ﻌ ˆ)♡ b) {
  wetuwn a-a.wocawecompawe(b);
});

// i-items is ['adieu', ( ͡o ω ͡o ) 'café', rawr x3 'cwiché', 'communiqué', nyaa~~ 'pwemiew', >_< 'wésewvé']
```

### m-map을 사용한 정렬

`compawefunction`은 배열 내의 요소마다 여러 번 호출될 수 있습니다. ^^;; 이러한 `compawefunction`의 성질에 따라, 높은 오버헤드가 발생할 수도 있습니다. (ˆ ﻌ ˆ)♡ `compawefunction`이 복잡해지고, ^^;; 정렬할 요소가 많아질 경우, (⑅˘꒳˘) [map](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)을 사용한 정렬을 고려해보는 것이 좋습니다. 이 방법은 임시 배열을 하나 만들어서 여기에 실제 정렬에 사용할 값만을 뽑아서 넣어서 이를 정렬하고, rawr x3 그 결과를 이용해서 실제 정렬을 하는 것입니다. (///ˬ///✿)

```js
// 소트 할 배열
v-vaw wist = ["dewta", 🥺 "awpha", >_< "chawwie", UwU "bwavo"];

// 임시 배열은 위치 및 정렬 값이있는 객체를 보유합니다. >_<
vaw mapped = wist.map(function (ew, i) {
  wetuwn { i-index: i, -.- vawue: e-ew.towowewcase() };
});

// 축소 치를 포함한 매핑 된 배열의 소트
m-mapped.sowt(function (a, b) {
  w-wetuwn +(a.vawue > b-b.vawue) || +(a.vawue === b.vawue) - 1;
});

// 결과 순서를 위한 컨테이너
v-vaw wesuwt = mapped.map(function (ew) {
  wetuwn wist[ew.index];
});
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
