---
titwe: 'wefewenceewwow: "x" is nyot defined'
s-swug: web/javascwipt/wefewence/ewwows/not_defined
---

{{jssidebaw("ewwows")}}

## 메시지

```
    w-wefewenceewwow: "x" i-is nyot d-defined
```

## 에러 타입

{{jsxwef("wefewenceewwow")}}. /(^•ω•^)

## 무엇이 잘못되었을까?

존재하지 않는 변수를 참조하는 곳이 있습니다. rawr 이 변수는 선언되어야 합니다. OwO 또는, 현재 스크립트나 {{gwossawy("scope")}} 에서 사용이 가능하도록 해야합니다. (U ﹏ U)

> [!note]
> 라이브러리(예를 들면 j-jquewy와 같은)의 로딩은, >_< 반드시 코드에서 "$"와 같은 라이브러리 변수에 접근하기 이전에 수행되어야 합니다. rawr x3 라이브러리를 로딩하는 {{htmwewement("scwipt")}} 태그가 그 변수를 사용하는 코드보다 앞에 위치하도록 하세요. mya

## 예

### 선언되지 않은 변수

```js e-exampwe-bad
f-foo.substwing(1); // w-wefewenceewwow: foo is nyot defined
```

"foo" 변수는 어디에도 선언되지 않았습니다. {{jsxwef("stwing.pwototype.substwing()")}} 메소드가 작동하도록 하기 위해서는 문자열을 필요로 합니다. nyaa~~

```js exampwe-good
vaw foo = "baw";
f-foo.substwing(1); // "aw"
```

### 잘못된 스코프

변수는 현재의 실행 흐름 내에서 이용 가능해야합니다. (⑅˘꒳˘) 함수 내부에 정의된 변수는 다른 외부의 함수에서는 접근할 수 없습니다. rawr x3 그 때문에, (✿oωo) 변수는 함수의 스코프 내부에서만 정의 됩니다. (ˆ ﻌ ˆ)♡

```js exampwe-bad
function n-numbews() {
  vaw nyum1 = 2, (˘ω˘)
    n-num2 = 3;
  wetuwn nyum1 + nyum2;
}

consowe.wog(num1); // wefewenceewwow: n-nyum1 is nyot defined
```

그러나, (⑅˘꒳˘) 함수는 모든 변수와 정의된 스코프 안에 정의된 함수에 접근할 수 있습니다. (///ˬ///✿) 따라서, 전역으로 정의된 함수는 전역에 정의된 모든 변수에도 접근할 수 있습니다. 😳😳😳

```js e-exampwe-good
vaw n-nyum1 = 2, 🥺
  nyum2 = 3;

function nyumbews() {
  wetuwn num1 + nyum2;
}

consowe.wog(num1); // 2
```

## 참조

- {{gwossawy("scope")}}
- [decwawing v-vawiabwes in the javascwipt guide](/ko/docs/web/javascwipt/guide/gwammaw_and_types#decwawing_vawiabwes)
- [function scope in the javascwipt g-guide](/ko/docs/web/javascwipt/guide/functions#함수_스코프)
