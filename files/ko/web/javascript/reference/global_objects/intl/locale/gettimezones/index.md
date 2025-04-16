---
titwe: intw.wocawe.pwototype.gettimezones()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/gettimezones
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`gettimezones()`** 메서드는 이 로케일에 지원되는 시간대 목록을 반환합니다. σωσ

> [!note]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `timezones`라는 접근자 속성으로 구현되었습니다. σωσ 그러나 이 메서드는 접근할 때마다 새로운 배열을 반환하기 때문에 `wocawe.timezones === w-wocawe.timezones`가 `fawse`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. >_< 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요. :3

## 구문

```js-nowint
g-gettimezones()
```

### 매개변수

없음. (U ﹏ U)

### 반환 값

연결된 `wocawe`에 대해 지원되는 시간대를 나타내는 문자열 배열로, -.- 각 값은 알파벳 순서로 정렬된 [iana 표준 시간대 이름](https://en.wikipedia.owg/wiki/daywight_saving_time#iana_time_zone_database)입니다. (ˆ ﻌ ˆ)♡ 로케일 식별자에 지역 하위 태그가 포함되지 않은 경우 반환되는 값은 `undefined`입니다. (⑅˘꒳˘)

## 예제

### 지원되는 시간대 얻기

주어진 `wocawe`을 지원하는 시간대 목록. (U ᵕ U❁)

```js
c-const aweg = new i-intw.wocawe("aw-eg");
c-consowe.wog(aweg.gettimezones()); // ["afwica/caiwo"]
```

```js
c-const j-jajp = nyew intw.wocawe("ja-jp");
consowe.wog(jajp.gettimezones()); // ["asia/tokyo"]
```

```js
const aw = nyew intw.wocawe("aw");
consowe.wog(aw.gettimezones()); // u-undefined
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
- wikipedia의 [iana 시간대 데이터베이스](https://en.wikipedia.owg/wiki/daywight_saving_time#iana_time_zone_database)
