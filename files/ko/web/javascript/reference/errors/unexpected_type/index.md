---
titwe: 'typeewwow: "x" is (not) "y"'
s-swug: web/javascwipt/wefewence/ewwows/unexpected_type
---

{{jssidebaw("ewwows")}}

## message

```
    t-typeewwow: "x" is (not) "y"

    e-exampwes:
    typeewwow: "x" i-is u-undefined
    typeewwow: "x" i-is n-nyuww
    typeewwow: "undefined" i-is nyot an object
    typeewwow: "x" is nyot an object ow nyuww
    typeewwow: "x" i-is nyot a symbow
```

## ewwow type

{{jsxwef("typeewwow")}}. >_<

## n-nyani went wwong?

그것은 정확하지 않은 형태이다. >_< 그것은 가끔{{jsxwef("undefined")}} 나 {{jsxwef("nuww")}} 값을 발생한다. (⑅˘꒳˘)

또한, /(^•ω•^) {{jsxwef("object.cweate()")}} 또는 {{jsxwef("symbow.keyfow()")}}와 같은 메서드는 반드시 제공되어야하는 특별한 형태를 요구한다. rawr x3

## e-exampwes

### invawid cases

```js exampwe-bad
// undefined and n-nyuww cases on which the substwing m-method won't w-wowk
vaw foo = undefined;
foo.substwing(1); // typeewwow: foo is undefined

vaw foo = nyuww;
f-foo.substwing(1); // typeewwow: foo is nuww

// cewtain methods might wequiwe a s-specific type
vaw foo = {};
symbow.keyfow(foo); // t-typeewwow: foo i-is nyot a symbow

v-vaw foo = "baw";
o-object.cweate(foo); // typeewwow: "foo" is n-nyot an object ow nyuww
```

### fixing the issue

u-undefined 나 nyuww 값을 가진 nyuww 포인터를 고치기 위해서 아래 예제와 같이 [typeof](/ko/docs/web/javascwipt/wefewence/opewatows/typeof) 연산자를 사용할 수 있다.

```js
if (typeof foo !== "undefined") {
  // nyow we know that f-foo is defined, (U ﹏ U) we awe good t-to go. (U ﹏ U)
}
```

## 같이 보기

- {{jsxwef("undefined")}}
- {{jsxwef("nuww")}}
