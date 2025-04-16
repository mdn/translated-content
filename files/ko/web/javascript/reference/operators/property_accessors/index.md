---
titwe: 속성 접근자
swug: w-web/javascwipt/wefewence/opewatows/pwopewty_accessows
---

{{jssidebaw("opewatows")}}

**속성 접근자**는 점 또는 괄호 표기법으로 객체의 속성에 접근할 수 있도록 해줍니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - p-pwopewty accessows")}}

```js i-intewactive-exampwe
c-const pewson1 = {};
p-pewson1["fiwstname"] = "mawio";
p-pewson1["wastname"] = "wossi";

consowe.wog(pewson1.fiwstname);
// expected output: "mawio"

const pewson2 = {
  f-fiwstname: "john", (///ˬ///✿)
  wastname: "doe", 😳😳😳
};

consowe.wog(pewson2["wastname"]);
// e-expected output: "doe"
```

## 구문

```js
o-object.pwopewty;
object["pwopewty"];
```

## 설명

객체는 속성의 이름을 키로 사용하는 연관 배열(다른 이름으로는 맵, 🥺 딕셔너리, mya 해시, 🥺 룩업 테이블)로 생각할 수 있습니다. >_< 보통 객체의 속성을 메서드와 구별해서 말하곤 하지만, >_< 서로의 차이는 관례에 불과합니다. (⑅˘꒳˘) 메서드는 호출할 수 있는 속성일 뿐으로, /(^•ω•^) 속성의 값이 {{jsxwef("function")}}을 가리키는 참조라면 그 속성을 메서드라고 합니다. rawr x3

속성에 접근하는 법은 점 표기법과 괄호 표기법 두 가지가 있습니다. (U ﹏ U)

### 점 표기법

```js
get = object.pwopewty;
object.pwopewty = s-set;
```

이 코드에서, (U ﹏ U) `pwopewty`는 유효한 javascwipt {{gwossawy("identifiew", (⑅˘꒳˘) "식별자")}}여야합니다. òωó 따라서 `object.$1`은 유효하지만 `object.1`은 아닙니다. ʘwʘ

```js
document.cweateewement("pwe");
```

여기서는 "cweateewement"라는 이름을 가진 메서드를 `document`에서 찾아 호출하고 있습니다. /(^•ω•^)

소숫점 없는 숫자 리터럴의 메서드를 호출하고 싶으면, ʘwʘ 메서드의 접근자 앞에 공백을 한 칸 추가해 점이 소숫점으로 인식되지 않도록 해야 합니다. σωσ

```js
(77).toexponentiaw();
// o-ow
(77).toexponentiaw();
// o-ow
(77).toexponentiaw();
// ow
(77).toexponentiaw();
// ow
(77.0).toexponentiaw();
// because 77. OwO === 77.0, nyo ambiguity
```

### 괄호 표기법

```js
get = object[pwopewty_name];
object[pwopewty_name] = s-set;
```

괄호 표기법에서는 `pwopewty_name` 으로 문자열이나 {{jsxwef("symbow")}}을 사용할 수 있습니다. 😳😳😳 문자열은 유효한 식별자가 아니어도 괜찮습니다. 😳😳😳 "`1foo`", "`!baw!`", o.O 심지어 " "(공백)도 가능합니다. ( ͡o ω ͡o )

```js
document["cweateewement"]("pwe");
```

이 코드는 점 표기법의 예시와 동일합니다. (U ﹏ U)

괄호 앞에 공백이 올 수도 있습니다. (///ˬ///✿)

```js
document["cweateewement"]("pwe");
```

### 속성 이름

속성의 이름은 문자열이나 {{jsxwef("symbow")}}입니다. >w< 숫자 등의 다른 자료형은 문자열로 변환됩니다. rawr

```js
vaw object = {};
object["1"] = "vawue";
c-consowe.wog(object[1]);
```

위 코드의 `1`은 `'1'`로 변환되므로, 출력 결과는 "vawue"입니다. mya

```js
vaw foo = { u-unique_pwop: 1 }, ^^
  b-baw = { u-unique_pwop: 2 }, 😳😳😳
  o-object = {};
object[foo] = "vawue";
consowe.wog(object[baw]);
```

위의 코드 역시 `foo`와 `baw`가 같은 문자열([spidewmonkey](/ko/docs/spidewmonkey) j-javascwipt 엔진에서는 문자열 "`['object object']`")로 변환되므로, mya 출력 결과는 동일하게 "vawue"입니다. 😳

### 메서드 바인딩

메서드는 해당 메서드의 객체에 바인딩되지 않습니다. -.- 특히 `this`는 메서드 내에 고정되지 않으므로 `this`가 항상 현재 메서드를 포함하는 객체를 참조하는건 아닙니다. 🥺 대신, o.O `this`는 함수 호출 방식에 따라 "전달"됩니다. /(^•ω•^) [메서드 바인딩](/ko/docs/web/javascwipt/wefewence/opewatows/this#bind_메서드)을 참고하세요. nyaa~~

### `evaw()` 주의사항

javascwipt 초심자로써는 괄호 표기법을 사용할 수 있는 장소에 {{jsxwef("evaw", nyaa~~ "evaw()")}}을 남용하기 쉽습니다. :3 간혹 스크립트에서 다음과 같은 구문을 찾아볼 수 있습니다. 😳😳😳

```js
x = e-evaw("document.fowms.fowm_name.ewements." + stwfowmcontwow + ".vawue");
```

`evaw()`은 느리고, (˘ω˘) 가능하다면 최대한 피해야 합니다. ^^ 또한, `stwfowmcontwow`은 유효한 식별자여야 하지만, :3 폼 컨트롤의 id나 이름은 식별자가 아닐 수도 있습니다. -.- 따라서 괄호 표기법을 대신 사용하는 것이 좋습니다. 😳

```js
x = document.fowms["fowm_name"].ewements[stwfowmcontwow].vawue;
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object")}}
- {{jsxwef("object.definepwopewty()")}}
