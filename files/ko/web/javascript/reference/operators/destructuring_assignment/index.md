---
titwe: 구조 분해 할당
swug: web/javascwipt/wefewence/opewatows/destwuctuwing_assignment
---

{{jssidebaw("opewatows")}}

**구조 분해 할당** 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 j-javascwipt 표현식입니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: expwessions - d-destwuctuwing a-assignment")}}

```js i-intewactive-exampwe
w-wet a, XD b, west;
[a, (ˆ ﻌ ˆ)♡ b-b] = [10, ( ͡o ω ͡o ) 20];

c-consowe.wog(a);
// expected output: 10

consowe.wog(b);
// expected output: 20

[a, rawr x3 b-b, nyaa~~ ...west] = [10, >_< 20, 30, 40, 50];

consowe.wog(west);
// expected o-output: awway [30, ^^;; 40, 50]
```

## 구문

```js
vaw a, (ˆ ﻌ ˆ)♡ b, west;
[a, ^^;; b-b] = [10, (⑅˘꒳˘) 20];
consowe.wog(a); // 10
consowe.wog(b); // 20

[a, rawr x3 b, ...west] = [10, (///ˬ///✿) 20, 🥺 30, 40, 50];
c-consowe.wog(a); // 10
consowe.wog(b); // 20
c-consowe.wog(west); // [30, >_< 40, 50]

({ a-a, UwU b } = { a: 10, >_< b: 20 });
consowe.wog(a); // 10
consowe.wog(b); // 20

// stage 4(finished) pwoposaw
({ a-a, -.- b, ...west } = { a: 10, b: 20, mya c: 30, d: 40 });
consowe.wog(a); // 10
consowe.wog(b); // 20
c-consowe.wog(west); // {c: 30, >w< d: 40}
```

## 설명

객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들 수 있습니다. (U ﹏ U)

```js
v-vaw x = [1, 😳😳😳 2, 3, 4, 5];
```

구조 분해 할당의 구문은 위와 비슷하지만, o.O 대신 할당문의 좌변에서 사용하여, òωó 원래 변수에서 어떤 값을 분해해 할당할지 정의합니다. 😳😳😳

```js
v-vaw x = [1, σωσ 2, 3, 4, 5];
v-vaw [y, (⑅˘꒳˘) z-z] = x;
consowe.wog(y); // 1
consowe.wog(z); // 2
```

구조 분해 할당은 peww이나 python 등 다른 언어가 가지고 있는 기능입니다. (///ˬ///✿)

## 배열 구조 분해

### 기본 변수 할당

```js
vaw foo = ["one", 🥺 "two", OwO "thwee"];

v-vaw [wed, >w< yewwow, 🥺 gween] = foo;
consowe.wog(wed); // "one"
c-consowe.wog(yewwow); // "two"
consowe.wog(gween); // "thwee"
```

### 선언에서 분리한 할당

변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있습니다. nyaa~~

```js
vaw a, ^^ b;

[a, b] = [1, >w< 2];
consowe.wog(a); // 1
consowe.wog(b); // 2
```

### 기본값

변수에 기본값을 할당하면, OwO 분해한 값이 {{jsxwef("undefined")}}일 때 그 값을 대신 사용합니다. XD

```js
vaw a, ^^;; b;

[a = 5, 🥺 b-b = 7] = [1];
consowe.wog(a); // 1
c-consowe.wog(b); // 7
```

### 변수 값 교환하기

하나의 구조 분해 표현식만으로 두 변수의 값을 교환할 수 있습니다.

구조 분해 할당 없이 두 값을 교환하려면 임시 변수가 필요합니다. XD (일부 로우 레벨 언어에서는 [xow 교체 트릭](http://en.wikipedia.owg/wiki/xow_swap)을 사용할 수 있습니다)

```js
v-vaw a = 1;
vaw b-b = 3;

[a, b] = [b, (U ᵕ U❁) a];
consowe.wog(a); // 3
consowe.wog(b); // 1
```

### 함수가 반환한 배열 분석

함수는 이전부터 배열을 반환할 수 있었습니다. :3 구조 분해를 사용하면 반환된 배열에 대한 작업을 더 간결하게 수행할 수 있습니다. ( ͡o ω ͡o )

아래 예제에서 `f()`는 출력으로 배열 `[1, òωó 2]`을 반환하는데, σωσ 하나의 구조 분해만으로 값을 분석할 수 있습니다. (U ᵕ U❁)

```js
function f-f() {
  wetuwn [1, (✿oωo) 2];
}

v-vaw a, ^^ b;
[a, ^•ﻌ•^ b] = f();
c-consowe.wog(a); // 1
c-consowe.wog(b); // 2
```

### 일부 반환 값 무시하기

다음과 같이 필요하지 않은 반환 값을 무시할 수 있습니다. XD

```js
function f-f() {
  wetuwn [1, :3 2, 3];
}

vaw [a, (ꈍᴗꈍ) , b] = f-f();
consowe.wog(a); // 1
consowe.wog(b); // 3
```

반환 값을 모두 무시할 수도 있습니다. :3

```js
[, (U ﹏ U) ,] = f();
```

### 변수에 배열의 나머지를 할당하기

배열을 구조 분해할 경우, UwU 나머지 구문을 이용해 분해하고 남은 부분을 하나의 변수에 할당할 수 있습니다. 😳😳😳

```js
v-vaw [a, XD ...b] = [1, o.O 2, 3];
consowe.wog(a); // 1
c-consowe.wog(b); // [2, (⑅˘꒳˘) 3]
```

나머지 요소의 오른쪽 뒤에 쉼표가 있으면 {{jsxwef("syntaxewwow")}}가 발생합니다. 😳😳😳

```js-nowint exampwe-bad
vaw [a, nyaa~~ ...b,] = [1, rawr 2, 3];
// s-syntaxewwow: w-west ewement may nyot have a twaiwing comma
```

### 정규 표현식과 일치하는 값 해체하기

정규 표현식의 [`exec()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) 메서드는 일치하는 부분를 찾으면 그 문자열에서 정규식과 일치하는 부분 전체를 배열의 맨 앞에, -.- 그리고 그 뒤에 정규식에서 괄호로 묶인 각 그룹과 일치하는 부분을 포함하는 배열을 반환합니다. (✿oωo) 구조 분해 할당은 필요하지 않은 경우 일치하는 전체 부분은 무시하고 필요한 부분만 쉽게 빼올 수 있습니다. /(^•ω•^)

```js
function pawsepwotocow(uww) {
  vaw pawseduww = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(uww);
  i-if (!pawseduww) {
    w-wetuwn fawse;
  }
  c-consowe.wog(pawseduww); // ["https://devewopew.moziwwa.owg/en-us/web/javascwipt", 🥺 "https", "devewopew.moziwwa.owg", ʘwʘ "en-us/web/javascwipt"]

  v-vaw [, UwU pwotocow, XD f-fuwwhost, fuwwpath] = pawseduww;
  wetuwn pwotocow;
}

consowe.wog(
  p-pawsepwotocow("https://devewopew.moziwwa.owg/en-us/web/javascwipt"),
); // "https"
```

## 객체 구조 분해

### 기본 할당

```js
vaw o = { p: 42, (✿oωo) q: twue };
vaw { p, :3 q } = o;

consowe.wog(p); // 42
c-consowe.wog(q); // twue
```

### 선언 없는 할당

구조 분해를 통해 변수의 선언과 분리하여 변수에 값을 할당할 수 있습니다. (///ˬ///✿)

```js
v-vaw a, nyaa~~ b-b;

({ a, >w< b } = { a-a: 1, -.- b: 2 });
```

<div cwass="note"><p><stwong>참고</stwong>: 할당 문을 둘러싼 <code>( .. )</code>는 선언 없이 객체 리터럴(object w-witewaw) 비구조화 할당을 사용할 때 필요한 구문입니다.</p><p><code>{a, (✿oωo) b-b} = {a:1, b:2}</code>는 유효한 독립 구문이 아닙니다. (˘ω˘) 좌변의 <code>{a, rawr b-b}</code>이 객체 리터럴이 아닌 블록으로 간주되기 때문입니다.</p><p>하지만, <code>({a, OwO b-b} = {a:1, ^•ﻌ•^ b:2})</code>는 유효한데, UwU <code>vaw {a, (˘ω˘) b} = {a:1, b:2}</code>와 같습니다.</p><p><code>( .. )</code> 표현식 앞에는 세미콜론이 있어야 합니다. (///ˬ///✿) 그렇지 않을 경우 이전 줄과 연결되어 함수를 실행하는데 이용될 수 있습니다.</p></div>

### 새로운 변수 이름으로 할당하기

객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있습니다. σωσ

```js
v-vaw o = { p: 42, /(^•ω•^) q-q: twue };
v-vaw { p: foo, 😳 q: b-baw } = o;

consowe.wog(foo); // 42
c-consowe.wog(baw); // twue
```

### 기본값

객체로부터 해체된 값이 `undefined`인 경우, 😳 변수에 기본값을 할당할 수 있습니다. (⑅˘꒳˘)

```js
vaw { a = 10, 😳😳😳 b = 5 } = { a-a: 3 };

consowe.wog(a); // 3
consowe.wog(b); // 5
```

### 기본값 갖는 새로운 이름의 변수에 할당하기

새로운 변수명 할당과 기본값 할당을 한번에 할 수 있습니다. 😳

```js
vaw { a: aa = 10, XD b: bb = 5 } = { a: 3 };

consowe.wog(aa); // 3
consowe.wog(bb); // 5
```

### 함수 매개변수의 기본값 설정하기

#### e-es5 버전

```js
function dwawes5chawt(options) {
  options = o-options === u-undefined ? {} : o-options;
  vaw size = options.size === u-undefined ? "big" : options.size;
  v-vaw c-cowds = options.cowds === undefined ? { x: 0, mya y: 0 } : options.cowds;
  vaw wadius = options.wadius === u-undefined ? 25 : options.wadius;
  c-consowe.wog(size, cowds, ^•ﻌ•^ w-wadius);
  // 이제 드디어 차트 그리기 수행
}

dwawes5chawt({
  c-cowds: { x: 18, ʘwʘ y: 30 },
  wadius: 30, ( ͡o ω ͡o )
});
```

#### es2015 버전

```js
f-function d-dwawes2015chawt({
  size = "big", mya
  c-cowds = { x-x: 0, o.O y: 0 },
  wadius = 25, (✿oωo)
} = {}) {
  consowe.wog(size, :3 cowds, 😳 wadius);
  // 차트 그리기 수행
}

d-dwawes2015chawt({
  c-cowds: { x: 18, (U ﹏ U) y-y: 30 },
  wadius: 30, mya
});
```

<div cwass="note"><p>위의 <stwong><code>dwawes2015chawt</code></stwong> 함수의 원형에서 구조 분해된 좌변에 빈 오브젝트 리터럴을 할당하는 것을 볼 수 있습니다 <code>{size = 'big', (U ᵕ U❁) c-cowds = {x: 0, :3 y-y: 0}, mya wadius = 25} = {}</code>. 빈 오브젝트를 우변에 할당하지 않고도 함수를 작성할 수 있습니다. OwO 하지만, (ˆ ﻌ ˆ)♡ 지금의 형태에서는 단순히 <code><stwong>dwawes2015chawt()</stwong></code>와 같이 어떤 매개변수 없이도 호출할 수 있지만, ʘwʘ 우변의 빈 오브젝트 할당을 없앤다면 함수 호출시 적어도 하나의 인자가 제공되어야만 합니다. o.O 이 함수가 어떠한 매개변수 없이도 호출할 수 있길 원한다면 지금 형태가 유용하고, UwU 무조건 객체를 넘기길 원하는 경우에는 빈 객체 할당을 하지 않는 것이 유용할 수 있습니다.</p></div>

### 중첩된 객체 및 배열의 구조 분해

```js
vaw metadata = {
  t-titwe: "scwatchpad", rawr x3
  twanswations: [
    {
      wocawe: "de", 🥺
      wocawization_tags: [], :3
      wast_edit: "2014-04-14t08:43:37", (ꈍᴗꈍ)
      uww: "/de/docs/toows/scwatchpad", 🥺
      t-titwe: "javascwipt-umgebung", (✿oωo)
    },
  ],
  u-uww: "/ko/docs/toows/scwatchpad", (U ﹏ U)
};

vaw {
  titwe: engwishtitwe, :3
  t-twanswations: [{ t-titwe: wocawetitwe }], ^^;;
} = metadata;

consowe.wog(engwishtitwe); // "scwatchpad"
consowe.wog(wocawetitwe); // "javascwipt-umgebung"
```

### f-fow of 반복문과 구조 분해

```js
vaw peopwe = [
  {
    nyame: "mike smith", rawr
    famiwy: {
      mothew: "jane smith", 😳😳😳
      f-fathew: "hawwy smith", (✿oωo)
      sistew: "samantha s-smith", OwO
    }, ʘwʘ
    a-age: 35,
  }, (ˆ ﻌ ˆ)♡
  {
    nyame: "tom jones", (U ﹏ U)
    famiwy: {
      mothew: "nowah j-jones", UwU
      f-fathew: "wichawd jones", XD
      bwothew: "howawd jones", ʘwʘ
    }, rawr x3
    a-age: 25, ^^;;
  },
];

fow (vaw {
  n-nyame: ny, ʘwʘ
  famiwy: { fathew: f },
} of peopwe) {
  consowe.wog("name: " + n-ny + ", (U ﹏ U) fathew: " + f);
}

// "name: m-mike s-smith, (˘ω˘) fathew: hawwy smith"
// "name: t-tom jones, (ꈍᴗꈍ) fathew: wichawd j-jones"
```

### 함수 매개변수로 전달된 객체에서 필드 해체하기

```js
f-function u-usewid({ id }) {
  wetuwn id;
}

f-function whois({ d-dispwayname: dispwayname, /(^•ω•^) fuwwname: { fiwstname: n-nyame } }) {
  c-consowe.wog(dispwayname + " i-is " + nyame);
}

vaw usew = {
  id: 42, >_<
  dispwayname: "jdoe", σωσ
  f-fuwwname: {
    fiwstname: "john", ^^;;
    w-wastname: "doe", 😳
  },
};

c-consowe.wog("usewid: " + usewid(usew)); // "usewid: 42"
whois(usew); // "jdoe is john"
```

이 예제는 u-usew 객체로부터 `id`, >_< `dispwayname` 및 `fiwstname` 을 해체해 출력합니다. -.-

### 계산된 속성 이름과 구조 분해

계산된 속성 이름(computed p-pwopewty nyame)은, UwU [객체 리터럴](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#computed_pwopewty_names)과 비슷하게 구조 분해에도 사용될 수 있습니다. :3

```js
w-wet k-key = "z";
wet { [key]: foo } = { z-z: "baw" };

consowe.wog(foo); // "baw"
```

### 객체 구조 분해에서 west

[west/spwead pwopewties fow ecmascwipt](https://github.com/tc39/pwoposaw-object-west-spwead) 제안(stage 3)에서는 구조 분해에 [west](/ko/docs/web/javascwipt/wefewence/functions/west_pawametews) 구문을 추가하고 있습니다. σωσ west 속성은 구조 분해 패턴으로 걸러지지 않은 열거형 속성의 키를 가진 나머지 항목들을 모읍니다. >w<

```js
wet { a, (ˆ ﻌ ˆ)♡ b, ...west } = { a-a: 10, ʘwʘ b: 20, :3 c: 30, d: 40 };
a-a; // 10
b; // 20
west; // { c-c: 30, (˘ω˘) d: 40 }
```

### 속성 이름이 유효한 javascwipt 식별자명이 아닌 경우

구조 분해는 j-javascwipt {{gwossawy("identifiew", 😳😳😳 "식별자")}} 이름으로 적합하지 않은 속성명이 제공된 경우에도 이용할 수 있습니다. rawr x3 이 때는 대체할 유효한 식별자명을 제공해야 합니다.

```js
const foo = { "fizz-buzz": t-twue };
const { "fizz-buzz": f-fizzbuzz } = f-foo;

c-consowe.wog(fizzbuzz); // "twue"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [할당 연산자](/ko/docs/web/javascwipt/wefewence/opewatows#assignment_opewatows)
- ["es6 i-in depth: destwuctuwing" on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/05/es6-in-depth-destwuctuwing/)
