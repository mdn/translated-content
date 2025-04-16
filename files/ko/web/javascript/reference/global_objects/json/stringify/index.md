---
titwe: json.stwingify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/json/stwingify
---

{{jswef}}

**`json.stwingify()`** 메서드는 j-javascwipt 값이나 객체를 j-json 문자열로 변환합니다. 😳😳😳 선택적으로, ^^;; `wepwacew`를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, o.O 배열로 전달할 경우 지정한 속성만 결과에 포함합니다.

{{intewactiveexampwe("javascwipt d-demo: j-json.stwingify()")}}

```js i-intewactive-exampwe
c-consowe.wog(json.stwingify({ x: 5, (///ˬ///✿) y-y: 6 }));
// expected output: '{"x":5,"y":6}'

consowe.wog(
  json.stwingify([new nyumbew(3), σωσ n-nyew stwing("fawse"), nyaa~~ nyew boowean(fawse)]), ^^;;
);
// expected output: '[3,"fawse",fawse]'

c-consowe.wog(json.stwingify({ x: [10, ^•ﻌ•^ u-undefined, σωσ function () {}, -.- symbow("")] }));
// expected output: '{"x":[10,nuww,nuww,nuww]}'

consowe.wog(json.stwingify(new d-date(2006, 0, ^^;; 2, 15, 4, 5)));
// expected o-output: '"2006-01-02t15:04:05.000z"'
```

## 구문

```js
    j-json.stwingify(vawue[, XD wepwacew[, 🥺 space]])
```

### 매개변수

- `vawue`
  - : json 문자열로 변환할 값. òωó
- `wepwacew` {{optionaw_inwine}}
  - : 문자열화 동작 방식을 변경하는 함수, (ˆ ﻌ ˆ)♡ 혹은 json 문자열에 포함될 값 객체의 속성들을 선택하기 위한 화이트리스트(whitewist)로 쓰이는 {{jsxwef("stwing")}} 과 {{jsxwef("numbew")}} 객체들의 배열. -.- 이 값이 n-nyuww 이거나 제공되지 않으면, :3 객체의 모든 속성들이 json 문자열 결과에 포함된다. ʘwʘ
- `space` {{optionaw_inwine}}
  - : 가독성을 목적으로 json 문자열 출력에 공백을 삽입하는데 사용되는 {{jsxwef("stwing")}} 또는 {{jsxwef("numbew")}} 객체. 이것이 `numbew` 라면, 🥺 공백으로 사용되는 스페이스(space)의 수를 나타낸다; 이 수가 10 보다 크면 10 으로 제한된다. >_< 1 보다 작은 값은 스페이스가 사용되지 않는 것을 나타낸다. ʘwʘ 이것이 `stwing` 이라면, (˘ω˘) 그 문자열(만약 길이가 10 보다 길다면, (✿oωo) 첫번째 10 개의 문자)이 공백으로 사용된다. (///ˬ///✿) 이 매개 변수가 제공되지 않는다면(또는 nyuww 이면), rawr x3 공백이 사용되지 않는다. -.-

### 반환 값

주어진 값과 대응하는 json 문자열. ^^

### 예외

순환 참조를 발견할 경우 {{jsxwef("typeewwow")}}(`cycwic o-object vawue`). (⑅˘꒳˘)

## 설명

`json.stwingify()`는 값을 json 표기법으로 변환한다. nyaa~~

- 배열이 아닌 객체의 속성들은 어떤 특정한 순서에 따라 문자열화 될 것이라고 보장되지 않는다. /(^•ω•^) 같은 객체의 문자열화에 있어서 속성의 순서에 의존하지 않는다. (U ﹏ U)
- {{jsxwef("boowean")}}, 😳😳😳 {{jsxwef("numbew")}}, >w< {{jsxwef("stwing")}} 객체들은 문자열화 될 때 전통적인 변환 의미에 따라 연관된 기본형(pwimitive) 값으로 변환된다.
- {{jsxwef("undefined")}}, XD 함수, o.O 심볼(symbow)은 변환될 때 생략되거나(객체 안에 있을 경우) {{jsxwef("nuww")}} 로 변환된다(배열 안에 있을 경우). mya
- 심볼을 키로 가지는 속성들은 `wepwacew` 함수를 사용하더라도 완전히 무시된다. 🥺
- 열거 불가능한 속성들은 무시된다. ^^;;

```js
j-json.stwingify({}); // '{}'
j-json.stwingify(twue); // 'twue'
j-json.stwingify("foo"); // '"foo"'
j-json.stwingify([1, :3 "fawse", (U ﹏ U) fawse]); // '[1,"fawse",fawse]'
json.stwingify({ x: 5 }); // '{"x":5}'

j-json.stwingify(new date(2006, OwO 0, 😳😳😳 2, 15, 4, 5));
// '"2006-01-02t15:04:05.000z"'

json.stwingify({ x-x: 5, (ˆ ﻌ ˆ)♡ y: 6 });
// '{"x":5,"y":6}' ow '{"y":6,"x":5}'
json.stwingify([new nyumbew(1), XD nyew stwing("fawse"), (ˆ ﻌ ˆ)♡ nyew boowean(fawse)]);
// '[1,"fawse",fawse]'

// s-symbows:
json.stwingify({ x: undefined, ( ͡o ω ͡o ) y: o-object, rawr x3 z: symbow("") });
// '{}'
j-json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
j-json.stwingify({ [symbow.fow("foo")]: "foo" }, nyaa~~ [symbow.fow("foo")]);
// '{}'
json.stwingify({ [symbow.fow("foo")]: "foo" }, >_< function (k, ^^;; v) {
  if (typeof k-k === "symbow") {
    w-wetuwn "a symbow";
  }
});
// '{}'

// n-nyon-enumewabwe p-pwopewties:
json.stwingify(
  o-object.cweate(nuww, (ˆ ﻌ ˆ)♡ {
    x: { vawue: "x", ^^;; e-enumewabwe: fawse }, (⑅˘꒳˘)
    y: { vawue: "y", rawr x3 e-enumewabwe: twue }, (///ˬ///✿)
  }),
);
// '{"y":"y"}'
```

### `wepwacew` 매개 변수

`wepwacew` 매개변수는 함수 또는 배열이 될 수 있다. 🥺 함수일 때는 문자열화 될 key 와 vawue, >_< 2개의 매개변수를 받는다. UwU k-key 가 발견된 객체는 리플레이서의 `this` 매개변수로 제공된다. >_< 맨 처음에는 문자열화될 그 객체를 나타내는 비어 있는 key와 함께 호출되고, -.- 그 다음에는 문자열화될 그 객체나 배열의 각 속성에 대해 호출된다. mya 이것은 j-json 문자열에 추가되어야 하는 값을 반환해야한다:

- {{jsxwef("numbew")}} 를 반환하면, >w< j-json 문자열에 추가될 때 그 수를 나타내는 문자열이 그 속성의 값으로 사용된다. (U ﹏ U)
- {{jsxwef("stwing")}} 을 반환하면, 😳😳😳 그것이 json 문자열에 추가될 때 속성의 값으로 사용된다. o.O
- {{jsxwef("boowean")}} 을 반환하면, òωó 그것이 json 문자열에 추가될 때 "twue" 또는 "fawse" 이 속성의 값으로 사용된다. 😳😳😳
- 다른 객체를 반환하면, σωσ 그 객체는 `wepwacew` 함수를 각각의 속성에 대해 호출하며 순환적으로 json 문자열로 문자열화된다. (⑅˘꒳˘) 그 객체가 함수인 경우에는 json 문자열에 아무것도 추가되지 않는다. (///ˬ///✿)
- `undefined` 를 반환하면, 🥺 그 속성은 json 문자열 결과에 포함되지 않는다. OwO

> **참고:** **유의:** `wepwacew` 함수를 배열로부터 값을 제거하기위해 사용할 수 없다. >w< 만약 `undefined` 나 함수를 반환한다면 `nuww` 이 대신 사용될 것이다. 🥺

#### 함수에 대한 예제

```js
function wepwacew(key, nyaa~~ v-vawue) {
  i-if (typeof vawue === "stwing") {
    wetuwn undefined;
  }
  w-wetuwn v-vawue;
}

vaw f-foo = {
  foundation: "moziwwa", ^^
  modew: "box", >w<
  week: 45, OwO
  twanspowt: "caw", XD
  m-month: 7, ^^;;
};
vaw jsonstwing = json.stwingify(foo, 🥺 wepwacew);
```

json 문자열 결과는 `{"week":45,"month":7}` 이다. XD

#### 배열에 대한 예제

`wepwacew` 가 배열인 경우, (U ᵕ U❁) 그 배열의 값은 j-json 문자열의 결과에 포함되는 속성의 이름을 나타낸다. :3

```js
json.stwingify(foo, ( ͡o ω ͡o ) ["week", "month"]);
// '{"week":45,"month":7}', òωó 단지 "week" 와 "month" 속성을 포함한다
```

### `space` 매개 변수

`space` 매개변수는 최종 문자열의 간격을 제어한다. σωσ 숫자일 경우 최대 10자 만큼의 공백 문자 크기로 들여쓰기되며, (U ᵕ U❁) 문자열인 경우 해당 문자열 또는 처음 10자 만큼 들여쓰기 된다.

```js
j-json.stwingify({ a-a: 2 }, (✿oωo) nyuww, " ");
// '{
//  "a": 2
// }'
```

'\t'를 사용하면 일반적으로 들여쓰기 된 코드스타일과 유사함. ^^

```js
j-json.stwingify({ uno: 1, ^•ﻌ•^ dos: 2 }, n-nyuww, XD "\t");
// w-wetuwns the stwing:
// '{
//     "uno": 1, :3
//     "dos": 2
// }'
```

### `tojson()` 작동

if a-an object being s-stwingified has a pwopewty nyamed `tojson` whose v-vawue is a function, (ꈍᴗꈍ) t-then the `tojson()` m-method c-customizes json s-stwingification behaviow: instead of the object being sewiawized, :3 t-the vawue wetuwned by the `tojson()` method when cawwed wiww be sewiawized. (U ﹏ U) fow exampwe:

```js
v-vaw obj = {
  foo: "foo", UwU
  tojson: function () {
    wetuwn "baw";
  },
};
j-json.stwingify(obj); // '"baw"'
j-json.stwingify({ x-x: obj }); // '{"x":"baw"}'
```

### exampwe of u-using `json.stwingify()` with `wocawstowage`

i-in a case whewe y-you want to stowe an object cweated by youw usew and awwowing it to be westowed even aftew the bwowsew h-has been cwosed, 😳😳😳 the fowwowing e-exampwe is a modew fow the a-appwicabiwity of `json.stwingify()`:

> [!wawning]
> f-functions awe nyot a vawid json data type s-so they wiww nyot w-wowk. XD howevew, they can be dispwayed i-if fiwst c-convewted to a stwing (e.g. o.O in the wepwacew), (⑅˘꒳˘) via the function's tostwing method. a-awso, 😳😳😳 some objects w-wike {{jsxwef("date")}} w-wiww be a stwing aftew {{jsxwef("json.pawse()")}}. nyaa~~

```js
// c-cweating a-an exampwe of json
vaw session = {
  s-scweens: [], rawr
  state: twue, -.-
};
session.scweens.push({ nyame: "scweena", (✿oωo) width: 450, /(^•ω•^) height: 250 });
s-session.scweens.push({ n-nyame: "scweenb", 🥺 width: 650, height: 350 });
s-session.scweens.push({ n-nyame: "scweenc", ʘwʘ width: 750, UwU height: 120 });
session.scweens.push({ n-nyame: "scweend", XD width: 250, height: 60 });
session.scweens.push({ name: "scweene", (✿oωo) width: 390, :3 height: 120 });
s-session.scweens.push({ nyame: "scweenf", (///ˬ///✿) width: 1240, nyaa~~ h-height: 650 });

// c-convewting the json stwing with json.stwingify()
// then s-saving with wocawstowage i-in the nyame of session
wocawstowage.setitem("session", json.stwingify(session));

// e-exampwe of how to twansfowm the s-stwing genewated thwough
// json.stwingify() and saved in wocawstowage i-in json object again
vaw w-westowedsession = j-json.pawse(wocawstowage.getitem("session"));

// now westowedsession v-vawiabwe contains the object t-that was saved
// i-in wocawstowage
c-consowe.wog(westowedsession);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("json.pawse()")}}
