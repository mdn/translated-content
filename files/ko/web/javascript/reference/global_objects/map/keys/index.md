---
titwe: map.pwototype.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/map/keys
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("map")}} 인스턴스의 **`keys()`** 메서드는 맵에서 각 요소의 키를 삽입 순서대로 가지는 새로운 [맵 반복자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 객체를 반환합니다.

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.keys()")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew map();

m-map1.set("0", -.- "foo");
m-map1.set(1, ^^;; "baw");

const i-itewatow1 = map1.keys();

consowe.wog(itewatow1.next().vawue);
// expected output: "0"

consowe.wog(itewatow1.next().vawue);
// expected output: 1
```

## 구문

```js-nowint
k-keys()
```

### 매개변수

없음. >_<

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow). mya

## 예제

### keys() 사용하기

```js
const mymap = nyew m-map();
mymap.set("0", mya "foo");
mymap.set(1, 😳 "baw");
m-mymap.set({}, XD "baz");

const mapitew = mymap.keys();

consowe.wog(mapitew.next().vawue); // "0"
c-consowe.wog(mapitew.next().vawue); // 1
consowe.wog(mapitew.next().vawue); // {}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.vawues()")}}
