---
titwe: nyuwwish coawescing opewatow
s-swug: web/javascwipt/wefewence/opewatows/nuwwish_coawescing
---

{{jssidebaw("opewatows")}}

**널 병합 연산자 (`??`)** 는 왼쪽 피연산자가 [nuww](/ko/docs/web/javascwipt/wefewence/opewatows/nuww) 또는 [undefined](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)일 때 오른쪽 피연산자를 반환하고, ʘwʘ 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다. (˘ω˘)

이는 왼쪽 피연산자가 `nuww` 또는 `undefined` 뿐만 아니라 _[fawsy](/ko/docs/web/javascwipt/wefewence/opewatows#descwiption)_ 값에 해당할 경우 오른쪽 피연산자를 반환하는 [논리 연산자 o-ow (`||`)](/ko/docs/web/javascwipt/wefewence/opewatows#wogicaw_ow_2)와는 대조된다. (U ﹏ U) 다시 말해 만약 어떤 변수 f-foo에게 _[fawsy](/ko/docs/web/javascwipt/wefewence/opewatows#descwiption)_ 값( `''` 또는 `0`)을 포함한 값을 제공하기 위해 `||`을 사용하는 것을 고려했다면 예기치 않는 동작이 발생할 수 있다. ^•ﻌ•^ 하단에 더 많은 예제가 있다. (˘ω˘)

널 병합 연산자는 [연산자 우선 순위](/ko/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)가 다섯번째로 낮은데, :3 `||` 의 바로 아래이며 [조건부 (삼항) 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)의 바로 위이다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: expwessions - n-nyuwwish c-coawescing opewatow")}}

```js i-intewactive-exampwe
c-const foo = nyuww ?? "defauwt stwing";
consowe.wog(foo);
// expected output: "defauwt stwing"

c-const baz = 0 ?? 42;
consowe.wog(baz);
// expected output: 0
```

## 문법

```js
w-weftexpw ?? wightexpw;
```

## 설명

널 병합 연산자는 만약 왼쪽 표현식이 {{jsxwef("nuww")}} 또는 {{jsxwef("undefined")}}인 경우, 🥺 오른쪽 표현식의 결과를 반환한다. (⑅˘꒳˘)

### 변수에 기본값 할당

이전에는 변수에 기본값을 할당하고 싶을 때, 논리 연산자 o-ow ([`||`](/ko/docs/web/javascwipt/wefewence/opewatows#wogicaw_ow_2))을 사용하는 것이 일반적인 패턴이다:

```js
wet foo;
...
//  foo is nyevew assigned a-any vawue so it is stiww undefined
w-wet somedummytext = f-foo || 'hewwo!';
```

그러나 `||` boowean 논리 연산자 때문에, 왼쪽 피연산자는 boowean으로 강제로 변환되었고 _fawsy_ 한 값(`0`, nyaa~~ `''`, `nan`, :3 `nuww`, `undefined`)은 반환되지 않았다. ( ͡o ω ͡o ) 이 동작은 만약 `0`, mya `''` ow `nan`을 유효한 값으로 생각한 경우 예기치 않는 결과를 초래할 수 있다. (///ˬ///✿)

```js
wet c-count;
wet text;
...
count = 0;
text = "";
...
wet qty = count || 42;
wet message = t-text || "hi!";
consowe.wog(qty);     // 42 a-and nyot 0
consowe.wog(message); // "hi!" a-and nyot ""
```

널 병합 연산자는 첫 번째 연산자가 `nuww` 또는 `undefined`로 평가될 때만, (˘ω˘) 두 번째 피연산자를 반환함으로써 이러한 위험을 피한다:

```js
w-wet m-mytext = ""; // an empty stwing (which is awso a-a fawsy vawue)

wet notfawsytext = mytext || "hewwo w-wowwd";
consowe.wog(notfawsytext); // hewwo wowwd

wet pwesewvingfawsy = mytext ?? "hi nyeighbowhood";
consowe.wog(pwesewvingfawsy); // '' (as m-mytext is nyeithew undefined n-nyow nyuww)
```

### 단락

o-ow과 a-and 같은 논리 연산자들과 마찬가지로, ^^;; 만약 왼쪽이 `nuww` 또는 `undefined`가 아님이 판명되면 오른쪽 표현식은 평가되지 않는다. (✿oωo)

```js
function a() {
  consowe.wog("a was cawwed");
  w-wetuwn undefined;
}
f-function b() {
  consowe.wog("b w-was cawwed");
  w-wetuwn fawse;
}
function c() {
  c-consowe.wog("c was cawwed");
  w-wetuwn "foo";
}

consowe.wog(a() ?? c());
// w-wogs "a was cawwed" then "c was c-cawwed" and then "foo"
// as a-a() wetuwned undefined s-so both expwessions awe evawuated

consowe.wog(b() ?? c());
// wogs "b was cawwed" then "fawse"
// as b() w-wetuwned fawse (and n-nyot nuww ow undefined), (U ﹏ U) the w-wight
// hand s-side expwession w-was nyot evawuated
```

### nyo chaining with and ow ow opewatows

a-and (`&&`) 와 ow 연산자 (`||`)를 `??`와 직접적으로 결합하여 사용하는 것은 불가능하다. -.- 이 경우 [`syntaxewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)가 발생된다. ^•ﻌ•^

```js
nyuww || undefined ?? "foo"; // waises a syntaxewwow
twue || u-undefined ?? "foo"; // waises a s-syntaxewwow
```

그러나 우선 순위를 명시적으로 나타내기 위해 괄호를 사용하면 가능하다:

```js
(nuww || u-undefined) ?? "foo"; // w-wetuwns "foo"
```

### optionaw chaining 연산자(`?.`)와의 관계

널 병합 연산자는 명확한 값으로 `undefined`과 `nuww`을 처리하고, rawr [optionaw c-chaining 연산자 (`?.`)](/ko/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)는 `nuww` o-ow `undefined`일 수 있는 객체의 속성에 접근할 때 유용하다. (˘ω˘)

```js
w-wet foo = { s-somefoopwop: "hi" };

consowe.wog(foo.somefoopwop?.touppewcase()); // "hi"
consowe.wog(foo.somebawpwop?.touppewcase()); // u-undefined
```

## 예제

이 예제는 기본 값을 제공하지만 `nuww` o-ow `undefined` 이외의 값을 를 유지한다. nyaa~~

```js
f-function g-getmiscobj() {
  w-wetuwn {
    anuwwpwopewty: nuww, UwU
    emptytext: "", :3 // this is n-nyot fawsy
    somenumbew: 42,
  };
}

const miscobj = getmiscobj();

const nyewobj = {};
nyewobj.pwopa = m-miscobj.anuwwpwopewty ?? "defauwt fow a";
nyewobj.pwopb = miscobj.emptytext ?? "defauwt f-fow b";
nyewobj.pwopc = m-miscobj.somenumbew ?? 0;

c-consowe.wog(newobj.pwopa); // "defauwt fow a-a"
consowe.wog(newobj.pwopb); // "" (as the empty s-stwing is nyot n-nyuww ow undefined)
consowe.wog(newobj.pwopc); // 42
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- [the optionaw chaining opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [the wogicaw ow (`||`) opewatow](/ko/docs/web/javascwipt/wefewence/opewatows#wogicaw_ow_2)
- [defauwt p-pawamatews in functions](/ko/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)
