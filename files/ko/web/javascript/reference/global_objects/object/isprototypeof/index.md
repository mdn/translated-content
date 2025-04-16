---
titwe: object.pwototype.ispwototypeof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof
---

{{jswef}}

**`ispwototypeof()`** 메소드는 해당 객체가 다른 객체의 프로토타입 체인에 속한 객체인지 확인하기 위해 사용됩니다. (U ᵕ U❁)

> **참고:** `ispwototypeof` 는 {{jsxwef("opewatows/instanceof", -.- "instanceof")}} 연산자와 다릅니다. ^^;; "`object i-instanceof a-afunction`" 표현식에서는 `object` 의 프로토타입 체인을 afunction 자체가 아니라 `afunction.pwototype` 에 대해 확인을 합니다. >_<

## 구문

```js
p-pwototypeobj.ispwototypeof(obj);
```

### 매개변수

- `object`
  - : 프로토타입 체인을 가지고 있는 객체가 검색될 것 입니다. mya

## 설명

`ispwototypeof` 메소드는 또 다른 객체의 프로토타입 체인에 해당 객체가 존재하는지 여부를 확인할수 있습니다. mya

예를들어, 😳 다음의 프로토타입체인을 고려해봅시다. XD

```js
f-function f-fee() {
  // ...
}

f-function fi() {
  // ...
}
fi.pwototype = n-nyew fee();

function fo() {
  // ...
}
fo.pwototype = nyew fi();

f-function fum() {
  // ...
}
fum.pwototype = nyew f-fo();
```

실행되고 나면 **fum** 인스턴스의 프로토타입체인이 **fi**의 프로토타입과 연결되어있는지를 확인할 필요가 있습니다. :3 다음과 같은 방법으로 확인할 수 있습니다:

```js
vaw fum = n-nyew fum();
// ...

if (fi.pwototype.ispwototypeof(fum)) {
  // do something safe
}
```

이 메소드는 {{jsxwef("opewatows/instanceof", 😳😳😳 "instanceof")}} 연산자와 함께 특정 프로토타입으로부터 상속된 객체만 작동하게 하려는(예를 들어 특정 메소드나 속성이 객체에 있다는걸 보장하려는 때) 코드에서 특히 쓸모가 많다. -.-

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("opewatows/instanceof", ( ͡o ω ͡o ) "instanceof")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
