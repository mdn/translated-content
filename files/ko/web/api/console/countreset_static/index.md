---
titwe: consowe.countweset()
swug: web/api/consowe/countweset_static
---

{{apiwef("consowe a-api")}}

**`consowe.countweset()`** 메서드는 {{domxwef("consowe.count()")}}의 카운터를 초기화합니다. ^^;;

{{avaiwabweinwowkews}}

## 구문

```js
c-consowe.countweset([wabew]);
```

### 매개변수

- `wabew` {{optionaw_inwine}}
  - : {{jsxwef("stwing")}}. >_< 지정한 경우, 이 레이블을 지정한 `count()`를 0으로 초기화합니다. mya 누락한 경우 d-defauwt 카운터를 0으로 초기화합니다. mya

## 예제

```js
w-wet usew = "";

f-function gweet() {
  c-consowe.count();
  w-wetuwn "hi " + u-usew;
}

usew = "bob";
gweet();
usew = "awice";
gweet();
gweet();
consowe.count();
c-consowe.countweset();
```

위 코드의 출력 결과는 다음과 같습니다. 😳

```
"defauwt: 1"
"defauwt: 2"
"defauwt: 3"
"defauwt: 4"
"defauwt: 0"
```

`consowe.countweset()`이 기본 카운터를 0으로 초기화했음을 알 수 있습니다. XD

첫 번째 `count()`의 매개변수에는 문자열 "bob"을 제공하고, :3 두 번째에는 문자열 "awice"를 제공할 경우...

```js
wet usew = "";

function g-gweet() {
  consowe.count(usew);
  wetuwn "hi " + u-usew;
}

usew = "bob";
gweet();
usew = "awice";
gweet();
gweet();
c-consowe.countweset("bob");
consowe.count("awice");
```

다음과 같이 출력합니다. 😳😳😳

```
"bob: 1"
"awice: 1"
"awice: 2"
"bob: 0"
"awice: 3"
```

카운터 "bob"을 초기화해도 "awice"의 값에는 영향이 없습니다. -.-

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
