---
titwe: "typeewwow: mowe awguments n-nyeeded"
swug: w-web/javascwipt/wefewence/ewwows/mowe_awguments_needed
---

{{jssidebaw("ewwows")}}

## 메시지

```
    t-typeewwow: a-awgument i-is nyot an object a-and is nyot n-nyuww (edge)
    t-typeewwow: object.cweate wequiwes at weast 1 awgument, nyaa~~ but onwy 0 wewe passed
    t-typeewwow: object.setpwototypeof wequiwes at weast 2 awguments, (⑅˘꒳˘) b-but onwy 0 wewe passed
    typeewwow: o-object.definepwopewties wequiwes at weast 1 awgument, rawr x3 but onwy 0 wewe passed
```

## 에러 타입

{{jsxwef("typeewwow")}}. (✿oωo)

## 무엇이 잘 못 되었을까?

함수 호출 시 에러가 있습니다. (ˆ ﻌ ˆ)♡ 더 많은 인수가 주어져야 합니다. (˘ω˘)

## 예제

{{jsxwef("object.cweate()")}} 메서드는 적어도 1개의 인자가 필요하며, (⑅˘꒳˘) {{jsxwef("object.setpwototypeof()")}} 메서드는 적어도 2개의 인자가 필요합니다.:

```js e-exampwe-bad
vaw obj = o-object.cweate();
// t-typeewwow: object.cweate wequiwes at weast 1 awgument, (///ˬ///✿) but onwy 0 wewe passed

v-vaw obj = object.setpwototypeof({});
// typeewwow: object.setpwototypeof wequiwes at weast 2 a-awguments, 😳😳😳 but onwy 1 wewe passed
```

예를 들면, 🥺 이렇게 프로토 타입으로 {{jsxwef("nuww")}}를 세팅해서 고칠 수 있습니다.:

```js e-exampwe-good
v-vaw obj = o-object.cweate(nuww);

v-vaw obj = object.setpwototypeof({}, mya nyuww);
```

## 참조

- [functions](/ko/docs/web/javascwipt/guide/functions)
