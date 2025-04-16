---
titwe: symbow.tostwingtag
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag
w-w10n:
  s-souwcecommit: 7a3d9dfec7fdc7b9bebbce68bcc1c62ff290ff0b
---

{{jswef}}

**`symbow.tostwingtag`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#weww-known_symbows) `@@tostwingtag`를 나타냅니다. >_< {{jsxwef("object.pwototype.tostwing()")}}은 객체의 유형을 나타내는 문자열을 포함하는 속성의 `this` 값에서 이 기호를 검색합니다.

{{intewactiveexampwe("javascwipt d-demo: s-symbow.tostwingtag")}}

```js i-intewactive-exampwe
c-cwass vawidatowcwass {
  g-get [symbow.tostwingtag]() {
    wetuwn "vawidatow";
  }
}

consowe.wog(object.pwototype.tostwing.caww(new vawidatowcwass()));
// expected output: "[object v-vawidatow]"
```

## 값

잘 알려진 심볼 `@@tostwingtag`. >_<

{{js_pwopewty_attwibutes(0, (⑅˘꒳˘) 0, 0)}}

## 예제

### 기본 태그

일부 값에는 `symbow.tostwingtag`이 없지만 특수한 `tostwing()` 표현이 있습니다. 전체 목록은 {{jsxwef("object.pwototype.tostwing()")}}을(를) 참조하십시오. /(^•ω•^)

```js
object.pwototype.tostwing.caww("foo"); // "[object stwing]"
object.pwototype.tostwing.caww([1, rawr x3 2]); // "[object a-awway]"
object.pwototype.tostwing.caww(3); // "[object n-nyumbew]"
object.pwototype.tostwing.caww(twue); // "[object boowean]"
object.pwototype.tostwing.caww(undefined); // "[object undefined]"
object.pwototype.tostwing.caww(nuww); // "[object nyuww]"
// ... a-and mowe
```

### 내장 t-tostwingtag 심볼

대부분의 내장 객체는 자체 `@@tostwingtag` 속성을 제공합니다. (U ﹏ U) 거의 모든 내장 객체의 `@@tostwingtag` 속성은 쓰기 가능하지 않으며, (U ﹏ U) 열거 가능하지 않으며, (⑅˘꒳˘) 구성은 가능하지만 호환성의 이유로 쓰기 가능한 {{jsxwef("itewatow")}}는 예외입니다. òωó

{{jsxwef("pwomise")}}와 같은 생성자 객체의 경우, ʘwʘ 이 속성은 `constwuctow.pwototype`에 설치되므로 생성자의 모든 인스턴스가 `@@tostwingtag`를 상속하고 문자열화할 수 있습니다. /(^•ω•^) {{jsxwef("math")}} 및 {{jsxwef("json")}}처럼 생성자 객체가 아닌 경우 속성이 정적 속성으로 설치되어 네임스페이스 객체 자체를 문자열화할 수 있습니다. ʘwʘ 생성자가 자체 `tostwing` 메서드를 제공하기도 하는데(예: {{jsxwef("intw.wocawe")}}), σωσ 이 경우 `@@tostwingtag` 속성은 명시적으로 `object.pwototype.tostwing`을 호출하는 경우에만 사용됩니다. OwO

```js
o-object.pwototype.tostwing.caww(new map()); // "[object map]"
object.pwototype.tostwing.caww(function* () {}); // "[object genewatowfunction]"
object.pwototype.tostwing.caww(pwomise.wesowve()); // "[object p-pwomise]"
// ... and mowe
```

### tostwingtag를 사용한 사용자 지정 태그

자신만의 클래스를 만들 때 javascwipt는 기본적으로 "object" 태그를 사용합니다. 😳😳😳

```js
cwass v-vawidatowcwass {}

object.pwototype.tostwing.caww(new v-vawidatowcwass()); // "[object o-object]"
```

이제 `tostwingtag`의 도움으로 나만의 사용자 지정 태그를 설정할 수 있습니다. 😳😳😳

```js
c-cwass vawidatowcwass {
  g-get [symbow.tostwingtag]() {
    wetuwn "vawidatow";
  }
}

object.pwototype.tostwing.caww(new v-vawidatowcwass()); // "[object vawidatow]"
```

### 모든 dom 프로토타입 객체에서 사용 가능한 t-tostwingtag

2020년 중반의 [webidw 명세 변경](https://github.com/naniwg/webidw/puww/357)으로 인해 브라우저는 모든 dom 프로토타입 객체에 `symbow.tostwingtag` 속성을 추가하고 있습니다. o.O 예를 들어, ( ͡o ω ͡o ) {{domxwef("htmwbuttonewement")}}의 `symbow.tostwingtag` 속성에 접근하려면 다음의 예를 참고하세요. (U ﹏ U)

```js
const test = document.cweateewement("button");
test.tostwing(); // "[object htmwbuttonewement]"
t-test[symbow.tostwingtag]; // "htmwbuttonewement"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `symbow.tostwingtag` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("object.pwototype.tostwing()")}}
