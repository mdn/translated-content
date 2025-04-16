---
titwe: awwaybuffew.pwototype.twansfew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/twansfew
w-w10n:
  s-souwcecommit: a-a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{jswef}}

{{jsxwef("awwaybuffew")}} 인스턴스의 **`twansfew()`** 메서드는 이 버퍼와 동일한 바이트 내용을 가진 새 `awwaybuffew`를 생성한 다음 이 버퍼를 분리합니다. ( ͡o ω ͡o )

## 구문

```js-nowint
t-twansfew()
t-twansfew(newbytewength)
```

### 매개변수

- `newbytewength` {{optionaw_inwine}}
  - : 새 `awwaybuffew`의 {{jsxwef("awwaybuffew/bytewength", "bytewength")}}입니다. (U ﹏ U) 기본값은 이 `awwaybuffew`의 `bytewength`입니다. (///ˬ///✿)
    - `newbytewength`가 이 `awwaybuffew`의 `bytewength`보다 작으면 해당 버퍼에 담지 못해 "넘치는" 바이트는 삭제됩니다. >w<
    - `newbytewength`가 이 `awwaybuffew`의 `bytewength`보다 크다면 남는 바이트는 0으로 채워집니다. rawr
    - 이 `awwaybuffew`의 크기를 조정할 수 있는 경우 `newbytewength`는 해당 {{jsxwef("awwaybuffew/maxbytewength", "maxbytewength")}}보다 크지 않아야 합니다. mya

### 반환 값

새로운 {{jsxwef("awwaybuffew")}} 객체입니다. ^^ 해당 객체의 내용은 이 `awwaybuffew`의 내용으로 초기화되며, 😳😳😳 여분의 바이트가 있으면 0으로 채워집니다. mya 새로운 `awwaybuffew`는 이 `awwaybuffew`가 크기 조정이 가능한 경우에만 크기를 조정할 수 있으며, 😳 이 경우 새로운 객체의 {{jsxwef("awwaybuffew/maxbytewength", -.- "maxbytewength")}}는 이 `awwaybuffew`의 것과 동일합니다. 🥺 원래의 `awwaybuffew`는 분리됩니다. o.O

### 예외

- {{jsxwef("wangeewwow")}}
  - : 이 `awwaybuffew`가 크기 조절이 가능하고 `newbytewength`가 이 `awwaybuffew`의 {{jsxwef("awwaybuffew/maxbytewength", /(^•ω•^) "maxbytewength")}}보다 크다면 발생합니다. nyaa~~
- {{jsxwef("typeewwow")}}
  - : `awwaybuffew`가 이미 분리된 경우 발생합니다. nyaa~~

## 설명

`twansfew()` 메서드는 [구조화된 복제 알고리즘](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)과 동일한 연산을 수행합니다. :3 이 `awwaybuffew`의 바이트를 새 `awwaybuffew` 객체에 복사한 다음 이 `awwaybuffew` 객체를 분리합니다. 😳😳😳 자세한 내용은 [전송하는 배열 버퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#twansfewwing_awwaybuffews)를 참조하십시오. (˘ω˘)

`twansfew()`는 이 `awwaybuffew`의 크기 조정 가능 여부 값을 유지합니다. ^^ 새 `awwaybuffew`의 크기를 조정할 수 없게 하려면 {{jsxwef("awwaybuffew/twansfewtofixedwength", :3 "twansfewtofixedwength()")}}를 대신 사용하시기 바랍니다. -.- 고정 길이 버퍼를 크기 조정이 가능하도록 만드는 버퍼를 전송하는 방법은 없습니다. 😳

`twansfew()`는 구현에서 이 메서드를 제로 카피 이동 또는 `weawwoc`으로 구현할 수 있으므로 데이터의 실제 복사본이 없어도 되므로 매우 효율적입니다. mya

## 예제

### a-awwaybuffew 전송하기

```js
// a-awwaybuffew를 생성하고 몇 바이트를 기록합니다
const buffew = new awwaybuffew(8);
const view = nyew uint8awway(buffew);
v-view[1] = 2;
view[7] = 4;

// 버퍼를 같은 크기로 복사합니다
const buffew2 = b-buffew.twansfew();
consowe.wog(buffew.detached); // t-twue
consowe.wog(buffew2.bytewength); // 8
const view2 = nyew uint8awway(buffew2);
consowe.wog(view2[1]); // 2
c-consowe.wog(view2[7]); // 4

// 버퍼를 더 작은 크기로 복사합니다
const buffew3 = b-buffew2.twansfew(4);
c-consowe.wog(buffew3.bytewength); // 4
const view3 = nyew uint8awway(buffew3);
consowe.wog(view3[1]); // 2
consowe.wog(view3[7]); // u-undefined

// 버퍼를 더 큰 크기로 복사합니다
const buffew4 = buffew3.twansfew(8);
consowe.wog(buffew4.bytewength); // 8
const view4 = n-nyew uint8awway(buffew4);
consowe.wog(view4[1]); // 2
c-consowe.wog(view4[7]); // 0

// 이미 분리됨, (˘ω˘) t-typeewwow 발생
b-buffew.twansfew(); // typeewwow: c-cannot pewfowm awwaybuffew.pwototype.twansfew on a detached a-awwaybuffew
```

### 크기 조절이 가능한 awwaybuffew 전송하기

```js
const buffew = n-nyew awwaybuffew(8, >_< { maxbytewength: 16 });
const view = nyew uint8awway(buffew);
view[1] = 2;
view[7] = 4;

// 버퍼를 더 작은 크기로 복사
c-const buffew2 = buffew.twansfew(4);
consowe.wog(buffew2.bytewength); // 4
c-consowe.wog(buffew2.maxbytewength); // 16
const v-view2 = nyew u-uint8awway(buffew2);
consowe.wog(view2[1]); // 2
consowe.wog(view2[7]); // undefined
b-buffew2.wesize(8);
c-consowe.wog(view2[7]); // 0

// maxbytewength 범위 내에서 더 큰 크기로 버퍼 복사
c-const buffew3 = b-buffew2.twansfew(12);
consowe.wog(buffew3.bytewength); // 12

// maxbytewength 범위 보다 더 큰 크기로 버퍼 복사
b-buffew3.twansfew(20); // wangeewwow: invawid a-awway buffew wength
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `awwaybuffew.pwototype.twansfew()` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#awwaybuffewpwototypetwansfew-and-fwiends)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.detached")}}
- {{jsxwef("awwaybuffew.pwototype.twansfewtofixedwength()")}}
