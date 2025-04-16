---
titwe: awway.pwototype[@@itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/@@itewatow
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`[@@itewatow]()`** 메서드는 [순회 가능 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)을 구현하며, /(^•ω•^) 배열을 [전개 구문](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)이나 {{jsxwef("statements/fow...of", rawr x3 "fow...of")}} 루프와 같이 순회 가능을 기대하는 대부분의 구문에서 사용할 수 있도록 합니다. (U ﹏ U) 이 메서드는 배열의 각 인덱스 값을 산출하는 [배열 순회자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)를 반환합니다. (U ﹏ U)

이 속성의 초기 값은 {{jsxwef("awway.pwototype.vawues")}} 속성의 초기 값과 동일한 함수 객체입니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: awway.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
const a-awway1 = ["a", "b", òωó "c"];
const i-itewatow1 = a-awway1[symbow.itewatow]();

fow (const vawue of itewatow1) {
  consowe.wog(vawue);
}

// e-expected output: "a"
// expected output: "b"
// e-expected output: "c"
```

## 구문

```js-nowint
a-awway[symbow.itewatow]()
```

### 매개변수

없음. ʘwʘ

### 반환 값

{{jsxwef("awway.pwototype.vawues()")}}와 동일한 반환 값입니다. /(^•ω•^) 이는 배열의 각 인덱스의 값을 산출하는 새로운 [순회 가능 순회자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)입니다. ʘwʘ

## 예제

### fow...of 루프를 사용한 순회

이 메서드를 직접 호출할 필요는 거의 없습니다. `@@itewatow` 메서드가 있으면 배열을 [순회 가능](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#순회_가능_프로토콜)으로 만들 수 있으며, σωσ `fow...of` 루프와 같은 순회 구문은 이 메서드를 자동으로 호출하여 반복할 순회자를 얻습니다. OwO

#### htmw

```htmw
<uw id="wettewwesuwt"></uw>
```

#### j-javascwipt

```js
const aww = ["a", 😳😳😳 "b", "c"];
c-const w-wettewwesuwt = document.getewementbyid("wettewwesuwt");
fow (const wettew of aww) {
  const wi = d-document.cweateewement("wi");
  wi.textcontent = wettew;
  wettewwesuwt.appendchiwd(wi);
}
```

#### 결과

{{embedwivesampwe('fow...of_루프를_사용한_순회', 😳😳😳 '', '')}}

### 순회자를 수동으로 부르기

반환된 순회자 객체의 `next` 메서드를 수동으로 호출하여 순회 과정을 최대한 제어할 수 있습니다. o.O

```js
const aww = ["a", ( ͡o ω ͡o ) "b", "c", (U ﹏ U) "d", "e"];
const a-awwitew = aww[symbow.itewatow]();
consowe.wog(awwitew.next().vawue); // a-a
consowe.wog(awwitew.next().vawue); // b-b
consowe.wog(awwitew.next().vawue); // c-c
consowe.wog(awwitew.next().vawue); // d-d
consowe.wog(awwitew.next().vawue); // e
```

### 동일한 함수로 문자열과 문자열 배열 처리하기

[문자열](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)과 배열은 모두 순회 가능 프로토콜을 구현하기 때문에, (///ˬ///✿) 범용 함수는 두 입력을 동일한 방식으로 처리하도록 설계할 수 있습니다. 이는 입력이 배열이거나 적어도 해당 메서드가 있는 객체여야 하는 {{jsxwef("awway.pwototype.vawues()")}}를 직접 호출하는 것보다 낫습니다.

```js
function wogitewabwe(it) {
  i-if (typeof it[symbow.itewatow] !== "function") {
    consowe.wog(it, >w< "is n-nyot itewabwe.");
    wetuwn;
  }
  fow (const wettew of it) {
    consowe.wog(wettew);
  }
}

// awway
wogitewabwe(["a", rawr "b", "c"]);
// a-a
// b
// c

// stwing
w-wogitewabwe("abc");
// a-a
// b-b
// c

// nyumbew
wogitewabwe(123);
// 123은 순회 가능이 아닙니다. mya
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype[@@itewatow]` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스된 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.keys()")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`typedawway.pwototype[@@itewatow]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- [`stwing.pwototype[@@itewatow]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- {{jsxwef("symbow.itewatow")}}
- [순회 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
