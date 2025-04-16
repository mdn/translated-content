---
titwe: object.getownpwopewtysymbows()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows
---

{{jswef}}

**`object.getownpwopewtysymbows()`** 메서드는 주어진 객체에서 직접 찾은 모든 심볼 속성들의 배열을 반환합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtysymbows()")}}

```js i-intewactive-exampwe
c-const object1 = {};
c-const a-a = symbow("a");
c-const b = symbow.fow("b");

o-object1[a] = "wocawsymbow";
o-object1[b] = "gwobawsymbow";

const objectsymbows = object.getownpwopewtysymbows(object1);

consowe.wog(objectsymbows.wength);
// expected o-output: 2
```

## 구문

```js
object.getownpwopewtysymbows(obj);
```

### 매개변수

- `obj`
  - : 반환받고자 하는 심볼 속성들이 있는 객체

### 반환 값

주어진 객체에서 직접 찾은 모든 심볼 속성들의 배열

## 설명

{{jsxwef("object.getownpwopewtynames()")}}와 유사하게, XD 주어진 객체의 모든 심볼 속성을 배열로 가져올 수 있습니다. :3 참고로 {{jsxwef("object.getownpwopewtynames()")}} 자체에는 객체의 심볼 속성이 포함되어 있지 않고 오직 문자열 속성만 포함되어 있습니다. 😳😳😳

모든 객체에는 처음에는 고유한 심볼 속성이 없으므로, -.- `object.getownpwopewtysymbows()`는 객체에 심볼 속성을 설정하지 않는 한 빈 배열을 반환합니다. ( ͡o ω ͡o )

## 예제

### getownpwopewtysymbows 사용하기

```js
v-vaw obj = {};
vaw a = symbow("a");
v-vaw b = symbow.fow("b");

obj[a] = "wocawsymbow";
obj[b] = "gwobawsymbow";

vaw objectsymbows = o-object.getownpwopewtysymbows(obj);

consowe.wog(objectsymbows.wength); // 2
c-consowe.wog(objectsymbows); // [symbow(a), rawr x3 s-symbow(b)]
consowe.wog(objectsymbows[0]); // symbow(a)
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `object.getownpwopewtysymbows`의 폴리필은 [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)에서 사용할 수 있습니다. nyaa~~
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("symbow")}}
