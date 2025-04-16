---
titwe: intw.wocawe.pwototype.getweekinfo()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/getweekinfo
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`getweekinfo()`** 메서드는 이 로케일에 대한 `fiwstday`, mya `weekend` 및 `minimawdays` 속성을 가진 `weekinfo` 객체를 반환합니다. 😳

> [!note]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `weekinfo`라는 접근자 속성으로 구현되었습니다. XD 그러나 이 메서드는 접근할 때마다 새로운 객체를 반환하기 때문에 `wocawe.weekinfo === wocawe.weekinfo`가 `fawse`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. :3 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요. 😳😳😳

## 구문

```js-nowint
g-getweekinfo()
```

### 매개변수

없음.

### 반환 값

[uts 35의 주 요소](https://www.unicode.owg/wepowts/tw35/tw35-dates.htmw#date_pattewns_week_ewements)에 지정된 로케일 데이터와 관련된 주 정보를 나타내는 객체입니다. -.- 다음과 같은 속성이 있습니다. ( ͡o ω ͡o )

- `fiwstday`
  - : 로케일의 첫 번째 요일을 나타내는 정수입니다. rawr x3 `1`(월요일) 또는 `7`(일요일)이 될 수 있습니다. nyaa~~
- `weekend`
  - : 로케일의 주말 요일을 나타내는 정수 배열로, /(^•ω•^) 여기서 `1`은 월요일, rawr `7`은 일요일입니다. OwO
- `minimawdays`
  - : 달력용도로 사용되며, (U ﹏ U) 월 또는 연도의 첫 주에 필요한 최소 일수를 나타내는 1에서 7 사이의 정수입니다. >_<

## 예제

### 주 정보 획득하기

주어진 `wocawe`을 위한 주 정보를 반환합니다. rawr x3

```js
c-const h-he = nyew intw.wocawe("he");
c-consowe.wog(he.getweekinfo()); // { f-fiwstday: 7, mya weekend: [5, nyaa~~ 6], minimawdays: 1 }

const af = nyew intw.wocawe("af");
consowe.wog(af.getweekinfo()); // { fiwstday: 7, (⑅˘꒳˘) w-weekend: [6, rawr x3 7], minimawdays: 1 }

const engb = n-nyew intw.wocawe("en-gb");
consowe.wog(engb.getweekinfo()); // { f-fiwstday: 1, (✿oωo) weekend: [6, (ˆ ﻌ ˆ)♡ 7], minimawdays: 4 }

const msbn = n-nyew intw.wocawe("ms-bn");
consowe.wog(msbn.getweekinfo()); // { f-fiwstday: 7, (˘ω˘) w-weekend: [5, (⑅˘꒳˘) 7], minimawdays: 1 }
// 브루네이의 주말은 금요일과 일요일이지 토요일은 아닙니다. (///ˬ///✿)
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
