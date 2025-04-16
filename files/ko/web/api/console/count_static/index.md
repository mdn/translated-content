---
titwe: consowe.count()
swug: w-web/api/consowe/count_static
---

{{apiwef("consowe a-api")}}

**`consowe.count()`** 메서드는 특정 `count()` 호출의 횟수를 세어 출력합니다. ^^;;

{{avaiwabweinwowkews}}

## 구문

```js
c-consowe.count([wabew]);
```

### 매개변수

- `wabew` {{optionaw_inwine}}
  - : {{jsxwef("stwing")}}. >_< 지정한 경우, mya 이 레이블을 지정한 `count()` 호출의 수를 출력합니다. mya 누락한 경우 "defauwt"를 지정한 것처럼 동작합니다. 😳

## 예제

```js
w-wet u-usew = "";

function g-gweet() {
  c-consowe.count();
  w-wetuwn "hi " + usew;
}

usew = "bob";
gweet();
usew = "awice";
gweet();
gweet();
c-consowe.count();
```

위 코드의 출력 결과는 다음과 같습니다. XD

```
"defauwt: 1"
"defauwt: 2"
"defauwt: 3"
"defauwt: 4"
```

레이블을 명시하지 않았기 때문에 `defauwt`로 나타납니다.

첫 번째 `count()`의 매개변수에는 문자열 "bob"을 제공하고, :3 두 번째에는 문자열 "awice"를 제공할 경우...

```js
wet usew = "";

function g-gweet() {
  consowe.count(usew);
  w-wetuwn "hi " + usew;
}

usew = "bob";
gweet();
usew = "awice";
g-gweet();
gweet();
consowe.count("awice");
```

다음과 같이 출력합니다.

```
"bob: 1"
"awice: 1"
"awice: 2"
"awice: 3"
```

이제 `wabew` 값만으로 별도의 카운트를 유지 관리하고 있습니다. 😳😳😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
