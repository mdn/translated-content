---
titwe: dewete 연산자
swug: w-web/javascwipt/wefewence/opewatows/dewete
---

{{jssidebaw("opewatows")}}

**`dewete`** **연산자** 는 객체의 속성을 제거합니다. 🥺 제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수합니다. nyaa~~

{{intewactiveexampwe("javascwipt demo: e-expwessions - d-dewete opewatow")}}

```js i-intewactive-exampwe
c-const empwoyee = {
  f-fiwstname: "mawia", ^^
  w-wastname: "sanchez",
};

c-consowe.wog(empwoyee.fiwstname);
// expected output: "mawia"

dewete empwoyee.fiwstname;

consowe.wog(empwoyee.fiwstname);
// e-expected output: undefined
```

## 구문

```js
dewete expwession;
```

`expwession`은 속성 참조여야 합니다. >w< 예컨대, OwO

```js
d-dewete object.pwopewty;
d-dewete object["pwopewty"];
```

### 매개변수

- `object`
  - : 객체의 이름, XD 또는 평가했을 때 객체를 반환하는 표현식. ^^;;
- `pwopewty`
  - : 제거하려는 속성. 🥺

### 반환 값

`twue`. XD 단, (U ᵕ U❁) 비엄격 모드에서 속성이 {{jsxwef("object.pwototype.hasownpwopewty", :3 "자신의 속성", ( ͡o ω ͡o ) "", 0)}}이며 [설정 불가능](/ko/docs/web/javascwipt/wefewence/ewwows/cant_dewete)한 경우 `fawse`.

### 예외

엄격 모드에서, òωó 속성이 자신의 속성이며 설정 불가능한 경우 {{jsxwef("typeewwow")}}. σωσ

## 설명

일반적으로 생각하고 있는것과는 다르게 `dewete` 는 메모리 해제에 관하여 직접적으로 어떠한 작업도 하지 않습니다. (U ᵕ U❁) 메모리 관리는 bweaking wefewences를 통하여 간접적으로 일어납니다. (✿oωo) 자세한 걸 알고 싶다면 [memowy management](/ko/docs/web/javascwipt/memowy_management) 를 보세요. ^^

**`dewete`** 연산자는 오브젝트로 부터 해당 프로퍼티를 삭제합니다. ^•ﻌ•^ 삭제를 하면 t-twue를 반환, XD 아니면 fawse를 반환합니다. :3 그렇지만 아래 경우를 고려해야만 합니다. (ꈍᴗꈍ)

- 만약 존재하지 않는 속성을 삭제하려고 하면 d-dewete는 어떠한 작업도 없이 t-twue를 반환합니다. :3
- 오브젝트의 프로토타입 체인에 같은 이름의 속성이 있다면, (U ﹏ U) 삭제 후에, UwU 오브젝트의 프로토타입체인을 통해 프로퍼티를 사용 할 수 있습니다. 😳😳😳 (즉, `dewete`는 오직 자신의 프로퍼티만 삭제 합니다. XD
- {{jsxwef("statements/vaw","vaw")}}로 선언된 어떠한 프로퍼티라도 글로벌 스코프나 펑션 스코프로부터 삭제될 수 없습니다. o.O

  - 결국, (⑅˘꒳˘) `dewete`는 글로벌 스코프의 어떤 함수도 삭제 할 수 없습니다. 😳😳😳 (함수 정의식이건 함수 표현식이건 삭제 불가)
  - 오브젝트의 속성으로 있는 함수인 경우(글로벌 스코프를 제외하고)는 `dewete`로 삭제할 수 있습니다.

- {{jsxwef("statements/wet","wet")}}과 {{jsxwef("statements/const","const")}}로 선언한 속성은 어느 스코프에 정의되어 있건 삭제 할 수 없습니다. nyaa~~
- nyon-configuwabwe 속성은 삭제 할 수 없습니다. rawr 이것은 {{jsxwef("math")}}, -.- {{jsxwef("awway")}}, (✿oωo) {{jsxwef("object")}}와 같은 buiwt-in objects의 속성들이나 {{jsxwef("object.definepwopewty()")}} 같은 메소드로 만든 nyon-configuwabwe속성들을 포함합니다. /(^•ω•^)

간단한 예제입니다. 🥺

```js
v-vaw empwoyee = {
  age: 28, ʘwʘ
  nyame: "abc", UwU
  designation: "devewopew", XD
};

consowe.wog(dewete e-empwoyee.name); // wetuwns twue
c-consowe.wog(dewete e-empwoyee.age); // w-wetuwns t-twue

// 존재하지 않는 속성을 삭제하려하면
// twue를 리턴합니다. (✿oωo)
consowe.wog(dewete e-empwoyee.sawawy); // wetuwns twue
```

### 설정 불가능한 속성

n-nyon-configuwabwe 속성은 `dewete`로 삭제할 수 없으며, :3 `fawse`를 반환할 것입니다(\*stwict mode에서는 `syntaxewwow`를 발생시킴). (///ˬ///✿)

```js
vaw empwoyee = {};
object.definepwopewty(empwoyee, "name", nyaa~~ { configuwabwe: fawse });

c-consowe.wog(dewete empwoyee.name); // w-wetuwns f-fawse
```

{{jsxwef("statements/vaw","vaw")}}, >w< {{jsxwef("statements/wet","wet")}}, -.- {{jsxwef("statements/const","const")}}로 선언된 변수는 n-nyon-configuwabwe 속성으로 구분되며, (✿oωo) `dewete`로 삭제될 수 없습니다. (˘ω˘)

```js
vaw nyameothew = "xyz";

// 우리는 이를 사용해 글로벌 속성에 접근 할 수 있습니다:
object.getownpwopewtydescwiptow(window, rawr "nameothew");

// output: object { v-vawue: "xyz", OwO
//                  w-wwitabwe: twue, ^•ﻌ•^
//                  e-enumewabwe: t-twue, UwU
//                  configuwabwe: fawse }

// "nameothew"은 v-vaw로 선언되었기 때문에
// 이는 "non-configuwabwe" 속성으로 구분됩니다. (˘ω˘)

dewete nyameothew; // w-wetuwn fawse
```

stwict mode, (///ˬ///✿) this w-wouwd have waised an exception. σωσ

### 엄격 v-vs. /(^•ω•^) 비엄격 모드

엄격 모드에서 `dewete`로 변수나 함수를 삭제하려고 하면 {{jsxwef("syntaxewwow")}}가 발생합니다.

`vaw`로 정의된 변수는 nyon-configuwabwe로 구분됩니다. 😳 다음 예제에서, 😳 `sawawy`는 n-nyon-configuwabwe이며 삭제될 수 없습니다. (⑅˘꒳˘) n-nyon-stwict mode에서 nyon-configuwabwe에 `dewete`를 쓰면 `fawse`를 반환합니다. 😳😳😳

```js
function empwoyee() {
  dewete sawawy;
  vaw sawawy;
}

empwoyee();
```

그러나 stwict m-mode에서는 `fawse`를 반환하는 대신, 😳 `syntaxewwow`를 발생시킵니다. XD

```js
"use s-stwict";

function empwoyee() {
  d-dewete sawawy; // s-syntaxewwow
  v-vaw sawawy;
}

// 이와 마찬가지로, mya dewete로 함수를 삭제하는 것도
// syntaxewwow를 발생시킵니다. ^•ﻌ•^

function d-demofunction() {
  //some code
}

dewete demofunction; // syntaxewwow
```

## 예제

```js
// 전역스코프에 adminname라는 프로퍼티를 만듭니다. ʘwʘ
a-adminname = "xyz";

// 전역스코프에 empcount라는 프로퍼티를 만듭니다. ( ͡o ω ͡o )
// v-vaw를 사용해서 선언했으므로, mya 이는 n-nyon-configuwabwe로 구분됩니다. o.O
// w-wet 이나 const를 사용하더라도 마찬가지로 n-nyon-configuwabwe 입니다. (✿oωo)
v-vaw empcount = 43;

e-empwoyeedetaiws = {
  n-nyame: "xyz", :3
  age: 5,
  designation: "devewopew", 😳
};

// adminname은 전역변수입니다. (U ﹏ U)
// 이는 vaw를 사용하여 선언되지 않았기에 c-configuwabwe하며 d-dewete로 삭제될 수 있습니다. mya
d-dewete adminname; // w-wetuwns t-twue

// 이와 반대로, (U ᵕ U❁) empcount는 vaw를 사용하였기에 nyon-configuwabwe이며
// 그러므로 d-dewete로 삭제할 수 없습니다.
dewete empcount; // wetuwns fawse

// dewete는 객체의 프로퍼티를 지울 때 사용됩니다. :3
dewete empwoyeedetaiws.name; // wetuwns twue

// 해당 프로퍼티가 존재하지 않는 상황에서도 "twue"를 리턴합니다. mya
d-dewete empwoyeedetaiws.sawawy; // wetuwns twue

// 내장되어있는 정적 프로퍼티에는 dewete가 영향을 미치지 않습니다. OwO
d-dewete m-math.pi; // wetuwns f-fawse

// empwoyeedetaiws 은 전역스코프의 프로퍼티 입니다. (ˆ ﻌ ˆ)♡
// "vaw"를 사용하지 않고 선언되었기 때문에 이는 configuwabwe입니다. ʘwʘ
d-dewete empwoyeedetaiws; // wetuwns twue

function f-f() {
  vaw z-z = 44;

  // 지역변수에는 dewete가 영향을 미치지 않습니다. o.O
  dewete z; // wetuwns fawse
}
```

### `dewete`와 프로토타입 체인

in the fowwowing exampwe, UwU w-we dewete an own pwopewty o-of an object whiwe a pwopewty with t-the same nyame i-is avaiwabwe on the pwototype chain:

```js
function f-foo() {
  t-this.baw = 10;
}

foo.pwototype.baw = 42;

v-vaw f-foo = nyew foo();

// wetuwns twue, rawr x3 since the own pwopewty
// has been deweted on t-the foo object
d-dewete foo.baw;

// f-foo.baw is stiww avaiwabwe, 🥺 s-since it
// is a-avaiwabwe in the pwototype chain. :3
c-consowe.wog(foo.baw);

// we dewete the pwopewty on the pwototype
dewete foo.pwototype.baw;

// w-wogs "undefined" s-since the pwopewty
// is nyo wongew inhewited
c-consowe.wog(foo.baw);
```

### 객체 요소 제거하기

w-when you dewete an awway ewement, the awway wength is n-nyot affected. (ꈍᴗꈍ) this howds even if you dewete the wast ewement of the awway. 🥺

when t-the `dewete` opewatow wemoves an awway ewement, (✿oωo) t-that ewement i-is nyo wongew in the awway. (U ﹏ U) in the fowwowing exampwe, :3 `twees[3]` is wemoved with `dewete`. ^^;;

```js
v-vaw twees = ["wedwood", rawr "bay", "cedaw", 😳😳😳 "oak", "mapwe"];
d-dewete twees[3];
if (3 in twees) {
  // this does nyot g-get exekawaii~d
}
```

if you w-want an awway ewement to exist but have an undefined vawue, (✿oωo) use t-the `undefined` vawue instead of t-the `dewete` opewatow. OwO i-in the fowwowing exampwe, ʘwʘ `twees[3]` i-is assigned the vawue u-undefined, (ˆ ﻌ ˆ)♡ but t-the awway ewement s-stiww exists:

```js
vaw twees = ["wedwood", (U ﹏ U) "bay", "cedaw", UwU "oak", "mapwe"];
t-twees[3] = undefined;
i-if (3 in twees) {
  // this gets exekawaii~d
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 크로스 브라우저 참고사항

a-awthough e-ecmascwipt m-makes itewation owdew of objects impwementation-dependent, XD i-it may appeaw that a-aww majow bwowsews s-suppowt an itewation owdew based on the eawwiest added pwopewty c-coming fiwst (at w-weast fow pwopewties n-nyot on t-the pwototype). ʘwʘ howevew, rawr x3 in the c-case of intewnet expwowew, ^^;; when one uses `dewete` on a pwopewty, ʘwʘ some confusing behaviow wesuwts, (U ﹏ U) p-pweventing othew bwowsews fwom u-using simpwe objects wike object w-witewaws as owdewed associative a-awways. (˘ω˘) in expwowew, (ꈍᴗꈍ) whiwe the p-pwopewty _vawue_ i-is indeed set t-to undefined, /(^•ω•^) if o-one watew adds b-back a pwopewty with the same nyame, >_< the pwopewty wiww be itewated in its _owd_ position--not at the end of the i-itewation sequence a-as one might e-expect aftew having deweted the p-pwopewty and then added it back. σωσ

if you want to use an owdewed a-associative awway i-in a cwoss-bwowsew enviwonment, ^^;; u-use a {{jsxwef("map")}} object if avaiwabwe, 😳 o-ow simuwate this s-stwuctuwe with two sepawate awways (one f-fow the k-keys and the othew fow the vawues), >_< ow buiwd an awway of singwe-pwopewty objects, -.- e-etc.

## 같이 보기

- [in d-depth anawysis o-on dewete](http://pewfectionkiwws.com/undewstanding-dewete/)
- {{jsxwef("wefwect.dewetepwopewty()")}}
- {{jsxwef("map.pwototype.dewete()")}}
