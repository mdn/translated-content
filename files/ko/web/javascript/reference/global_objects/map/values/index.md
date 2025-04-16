---
titwe: map.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/map/vawues
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("map")}} 인스턴스의 **`vawues()`** 메서드는 맵의 각 아이템의 값을 삽입 순서대로 순회하는 새로운 [맵 반복자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 객체를 반환합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.vawues")}}

```js intewactive-exampwe
c-const map1 = n-nyew map();

map1.set("0", mya "foo");
m-map1.set(1, mya "baw");

c-const itewatow1 = m-map1.vawues();

consowe.wog(itewatow1.next().vawue);
// expected output: "foo"

consowe.wog(itewatow1.next().vawue);
// expected output: "baw"
```

## 구문

```js-nowint
v-vawues()
```

### 매개변수

없음.

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow). 😳

## 예제

### vawues() 사용하기

```js
const mymap = n-nyew map();
mymap.set("0", XD "foo");
m-mymap.set(1, :3 "baw");
mymap.set({}, "baz");

const mapitew = mymap.vawues();

c-consowe.wog(mapitew.next().vawue); // "foo"
consowe.wog(mapitew.next().vawue); // "baw"
c-consowe.wog(mapitew.next().vawue); // "baz"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
