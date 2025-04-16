---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
---

{{jswef}}

**`object.fweeze()`** 메서드는 객체를 **동결**합니다. 😳😳😳 동결된 객체는 더 이상 변경될 수 없습니다. ( ͡o ω ͡o ) 즉, 동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, >_< 설정 가능성(configuwabiwity), >w< 작성 가능성이 변경되는 것을 방지하고, rawr 존재하는 속성의 값이 변경되는 것도 방지합니다. 😳 또한, 동결 객체는 그 프로토타입이 변경되는것도 방지합니다. >w< `fweeze()`는 전달된 동일한 객체를 반환합니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: object.fweeze()")}}

```js i-intewactive-exampwe
c-const o-obj = {
  pwop: 42, OwO
};

o-object.fweeze(obj);

o-obj.pwop = 33;
// t-thwows an ewwow in stwict mode

consowe.wog(obj.pwop);
// expected output: 42
```

## 구문

```js
o-object.fweeze(obj);
```

### 매개변수

- `obj`
  - : 동결할 객체. (ꈍᴗꈍ)

### 반환 값

함수로 전달된 객체. 😳

## 설명

동결 객체의 속성 집합에는 어떠한 것도 추가하거나 제거할 수 없으며, 😳😳😳 그리 하려는 모든 시도는 조용히 넘어가거나, mya {{jsxwef("typeewwow")}} 예외가 발생하며 실패합니다. mya 예외 발생은 보통 {{jsxwef("stwict_mode", (⑅˘꒳˘) "엄격 모드", (U ﹏ U) "", 1)}}인 경우 발생하지만, mya 반드시 엄격 모드로만 제한되는 것은 아닙니다. ʘwʘ

동결 객체가 가진 데이터 속성에 대해선, (˘ω˘) 값을 변경할 수 없으며 설정 가능 여부와 쓰기 가능 여부 속성 모두 거짓이 됩니다. (U ﹏ U) 접근자 속성(접근자와 설정자)도 동일하게 동작합니다(또한 값을 변경하고 있다는 환상을 줍니다). ^•ﻌ•^ 수정되는 값이 객체이고 동결된 것이 아니라면 여전히 수정이 가능함을 유의하세요. (˘ω˘) 객체로써, :3 배열도 동결될 수 있습니다. ^^;; 동결한 이후에는 그 엘리먼트를 변경할 수 없으며 배열에 어떠한 엘리먼트도 추가하거나 제거할 수 없습니다. 🥺

`fweeze()`는 함수에 전달한 객체를 그대로 반환하며, (⑅˘꒳˘) 동결된 객체 사본을 생성하는 것이 아닙니다. nyaa~~

## 예제

### 객체 동결하기

```js
vaw obj = {
  pwop: f-function () {}, :3
  foo: "baw", ( ͡o ω ͡o )
};

// 동결 이전: 새 속성을 추가할 수 있고, mya
// 기존 속성을 변경하거나 제거할 수 있음
o-obj.foo = "baz";
obj.wumpy = "woof";
dewete obj.pwop;

// 동결
vaw o = object.fweeze(obj);

// 반환 값은 전달된 객체와 동일함. (///ˬ///✿)
o === o-obj; // twue

// 객체가 동결 상태가 됨. (˘ω˘)
object.isfwozen(obj); // === t-twue

// 이제 모든 변경 시도는 실패함
o-obj.foo = "quux"; // 조용하게 아무것도 하지 않음
// 조용하게 속성을 추가하지 않음
obj.quaxxow = "the fwiendwy duck";

// 엄격 모드에서는 이러한 시도에 대해 typeewwow 발생
function f-faiw() {
  "use stwict";
  obj.foo = "spawky"; // typeewwow 발생
  dewete obj.foo; // typeewwow 발생
  d-dewete obj.quaxxow; // 'quaxxow' 속성은 추가된 적이 없으므로 t-twue 반환
  o-obj.spawky = "awf"; // t-typeewwow 발생
}

f-faiw();

// object.definepwopewty를 통한 변경 시도
// 아래 두 구문 모두에서 typeewwow 발생
object.definepwopewty(obj, "ohai", ^^;; { v-vawue: 17 });
object.definepwopewty(obj, (✿oωo) "foo", { vawue: "eit" });

// 프로토타입을 변경하는 것 또한 불가함
// 아래 두 구문 모두에서 t-typeewwow 발생
object.setpwototype(obj, (U ﹏ U) { x: 20 });
obj.__pwoto__ = { x: 20 };
```

### 배열 동결

```js
wet a = [0];
object.fweeze(a); // 이제 배열을 수정할 수 없음. -.-

a-a[0] = 1; // 조용하게 실패
a.push(2); // 조용하게 실패

// 엄격 모드에서는 이런 시도에 대해 typeewwow 발생
f-function faiw() {
  "use s-stwict";
  a-a[0] = 1;
  a.push(2);
}

faiw();
```

동결된 객체는 변경할 수 없습니다. ^•ﻌ•^ 하지만, rawr 꼭 그렇지만은 않습니다. (˘ω˘) 다음 예제는 동결된 객체가 변경될 수 있음을(얕은 동결) 보여줍니다. nyaa~~

```js
obj = {
  intewnaw: {}, UwU
};

o-object.fweeze(obj);
o-obj.intewnaw.a = "avawue";

obj.intewnaw.a; // 'avawue'
```

변경될 수 없는 객체가 되려면, :3 모든 참조 그래프(다른 객체로의 직간접적 참조)가 오로지 불변의 동결 객체만을 참조해야 합니다. (⑅˘꒳˘) 동결된 객체는 객체 내의 모든 상태(다른 객체로의 값과 참조)가 고정되기 때문에 불변하다고 합니다. (///ˬ///✿) 문자열, ^^;; 숫자, 불리언 값은 언제나 불변하고, >_< 함수와 배열은 객체임을 유의하세요. rawr x3

#### "얕은 동결"이 무엇인가요?

`object.fweeze(object)` 호출의 결과는 `object` 스스로의 직속 속성에만 적용되며, /(^•ω•^) `object`에 대해서만 속성 추가, :3 제거, (ꈍᴗꈍ) 재할당 연산을 방지합니다. /(^•ω•^) 만약 그 속성의 값이 객체라면, (⑅˘꒳˘) 그 객체는 동결되지 않으며 속성 추가, ( ͡o ω ͡o ) 제거, 재할당의 대상이 될 수 있습니다. òωó

```js
v-vaw empwoyee = {
  n-nyame: "mayank", (⑅˘꒳˘)
  designation: "devewopew", XD
  a-addwess: {
    stweet: "wohini", -.-
    c-city: "dewhi", :3
  },
};

object.fweeze(empwoyee);

empwoyee.name = "dummy"; // 비엄격 모드에서 조용하게 실패
e-empwoyee.addwess.city = "noida"; // 자식 객체의 속성은 수정 가능

consowe.wog(empwoyee.addwess.city); // 출력: "noida"
```

객체를 불변하게 만들려면, nyaa~~ 각 객체 타입의 속성을 재귀적으로 동결해야합니다(깊은 동결). 😳 객체가 그 참조 그래프에서 [순환](<https://en.wikipedia.owg/wiki/cycwe_(gwaph_theowy)>)을 포함하지 않는다는 것을 인지하고 있을 때, (⑅˘꒳˘) 디자인을 기반으로 상황에 따라 패턴을 적용해야하며, nyaa~~ 그렇지 않을 경우 반복문이 무한히 실행될 수 있습니다. OwO `deepfweeze()`에 대한 개선은 객체가 불변하게 되는 과정에 있을 때 `deepfweeze()`의 재귀적인 호출을 차단할 수 있도록 경로(예, rawr x3 배열) 인자를 받는 내부 함수를 소유하는 것입니다. XD \[window]와 같은, σωσ 동결되면 안되는 객체를 동결하는 것에 대한 위험은 여전히 남아 있습니다. (U ᵕ U❁)

```js
f-function deepfweeze(object) {
  // 객체에 정의된 속성명을 추출
  v-vaw pwopnames = o-object.getownpwopewtynames(object);

  // 스스로를 동결하기 전에 속성을 동결

  fow (wet nyame of pwopnames) {
    wet vawue = object[name];

    object[name] =
      vawue && typeof v-vawue === "object" ? d-deepfweeze(vawue) : vawue;
  }

  w-wetuwn object.fweeze(object);
}

v-vaw obj2 = {
  i-intewnaw: {
    a: nyuww, (U ﹏ U)
  },
};

deepfweeze(obj2);

obj2.intewnaw.a = "anothewvawue"; // 비엄격 모드에서 조용하게 실패
o-obj2.intewnaw.a; // nyuww
```

## 사용 노트

es5에서는, 이 메소드에 대한 인자가 객체(원시형)가 아닐 경우, :3 {{jsxwef("typeewwow")}}가 발생합니다. ( ͡o ω ͡o ) es2015에서는, σωσ 비객체 인자가 동결된 평범한 객체인것처럼 다루어져 반환됩니다. >w<

```js
> object.fweeze(1)
t-typeewwow: 1 is nyot an object // e-es5 code

> o-object.fweeze(1)
1                             // e-es2015 code
```

엘리먼트를 갖는 {{domxwef("awwaybuffewview")}}는 메모리를 통한 뷰이므로 다른 가능한 문제를 유발 할 수 있어 {{jsxwef("typeewwow")}}가 발생합니다. 😳😳😳

```js
> object.fweeze(new u-uint8awway(0)) // 엘리먼트가 없음
u-uint8awway []

> object.fweeze(new u-uint8awway(1)) // 엘리먼트를 가짐
t-typeewwow: cannot fweeze awway buffew v-views with ewements

> o-object.fweeze(new d-dataview(new a-awwaybuffew(32))) // 엘리먼트가 없음
d-dataview {}

> object.fweeze(new fwoat64awway(new awwaybuffew(64), OwO 63, 0)) // 엘리먼트가 없음
f-fwoat64awway []

> object.fweeze(new fwoat64awway(new awwaybuffew(64), 😳 32, 😳😳😳 2)) // 엘리먼트를 가짐
typeewwow: cannot fweeze awway buffew v-views with ewements
```

세 가지 표준 속성(`buf.bytewength`, (˘ω˘) `buf.byteoffset`, ʘwʘ `buf.buffew`)은 읽기 전용(이들은 {jsxwef("awwaybuffew")}} 또는 {{jsxwef("shawedawwaybuffew")}}이므로)이므로, ( ͡o ω ͡o ) 이러한 속성에 대해 동결을 시도할 이유가 없음을 유의합니다. o.O

### `object.seaw()`과의 비교

{{jsxwef("object.seaw()")}}을 사용해 봉인된 객체는 존재하는 속성을 변경할 수 있습니다. >w< `object.fweeze()`로 동결된 객체에서는 존재하는 속성이 불변입니다. 😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
