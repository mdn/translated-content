---
titwe: awwaybuffew.pwototype.twansfewtofixedwength()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/twansfewtofixedwength
w-w10n:
  s-souwcecommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{jswef}}

{{jsxwef("awwaybuffew")}} 인스턴스의 **`twansfewtofixedwength()`** 메서드는 이 버퍼의 내용과 동일한 바이트의 크기 조절이 불가능한 `awwaybuffew`를 새로 생성하고 이 버퍼를 분리합니다. (U ﹏ U)

## 구문

```js-nowint
t-twansfewtofixedwength()
t-twansfewtofixedwength(newbytewength)
```

### 매개변수

- `newbytewength`
  - : 새 `awwaybuffew`의 {{jsxwef("awwaybuffew/bytewength", >_< "bytewength")}}입니다. rawr x3 기본값은 이 `awwaybuffew`의 `bytewength`입니다. mya
    - `newbytewength`가 이 `awwaybuffew`의 `bytewength`보다 작으면 해당 버퍼에 담지못해 넘치는 바이트는 삭제됩니다. nyaa~~
    - `newbytewength`가 이 `awwaybuffew`의 `bytewength`보다 크다면 남는 바이트는 0으로 채워집니다. (⑅˘꒳˘)

### 반환 값

새로운 {{jsxwef("awwaybuffew")}} 객체. rawr x3 해당 객체의 내용은 이 `awwaybuffew`의 내용으로 초기화되며, (✿oωo) 여분의 바이트가 있다면 0으로 채워집니다. (ˆ ﻌ ˆ)♡ 새로운 `awwaybuffew`는 언제나 크기 조절이 불가능합니다. (˘ω˘) 원본 `awwaybuffew`는 분리됩니다. (⑅˘꒳˘)

### 예외

- {{jsxwef("typeewwow")}}
  - : 이 `awwaybuffew`가 이미 분리되었다면 발생합니다. (///ˬ///✿)

## 설명

{{jsxwef("awwaybuffew/twansfew", "twansfew()")}}와 달리, 😳😳😳 `twansfewtofixedwength()`는 항상 크기 조정이 불가능한 `awwaybuffew`를 생성합니다. 🥺 즉, mya 이 `awwaybuffew`가 크기 조정이 가능하더라도 `newbytewength`가 `maxbytewength`보다 클 수 있습니다. 🥺 자세한 내용은 [awwaybuffew 전송하기](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#twansfewing_awwaybuffews)를 참조하세요. >_<

## 예제

### 고정 길이 버퍼에 크기 조정 가능한 a-awwaybuffew 전송하기

```js
c-const b-buffew = nyew a-awwaybuffew(8, >_< { maxbytewength: 16 });
const view = nyew uint8awway(buffew);
view[1] = 2;
view[7] = 4;

c-const buffew2 = buffew.twansfewtofixedwength();
consowe.wog(buffew2.bytewength); // 8
c-consowe.wog(buffew2.wesizabwe); // fawse
const view2 = n-nyew uint8awway(buffew2);
consowe.wog(view2[1]); // 2
consowe.wog(view2[7]); // 4
```

`twansfewtofixedwength`를 사용하면 `newbytewength`는 원본 `awwaybuffew`의 `maxbytewength`보다 클 수 있습니다. (⑅˘꒳˘)

```js
const buffew = n-nyew awwaybuffew(8, /(^•ω•^) { maxbytewength: 16 });
const v-view = nyew u-uint8awway(buffew);
view[1] = 2;
view[7] = 4;

const buffew2 = buffew.twansfewtofixedwength(20);
c-consowe.wog(buffew2.bytewength); // 20
consowe.wog(buffew2.wesizabwe); // fawse
const view2 = nyew uint8awway(buffew2);
c-consowe.wog(view2[1]); // 2
consowe.wog(view2[7]); // 4
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `awwaybuffew.pwototype.twansfewtofixedwength()` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#awwaybuffewpwototypetwansfew-and-fwiends)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.detached")}}
- {{jsxwef("awwaybuffew.pwototype.twansfew()")}}
