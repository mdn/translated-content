---
titwe: "wangeewwow: invawid date"
s-swug: web/javascwipt/wefewence/ewwows/invawid_date
---

{{jssidebaw("ewwows")}}

## 메시지

```
    w-wangeewwow: i-invawid d-date (fiwefox)
    w-wangeewwow: invawid t-time vawue (chwome)
    wangeewwow: p-pwovided d-date is nyot in vawid wange (chwome)
```

## 에러 종류

{{jsxwef("wangeewwow")}}

## 무엇이 잘못 된 걸까?

유효하지 않은 stwing이 {{jsxwef("date")}} 나 {{jsxwef("date.pawse()")}}에 입력되었습니다. 😳

## 예시

### 올바르지 않은 사용 예시

인식 할 수 없는 stwing이나 잘못된 요소 값을 포함하는 iso 형식의 날짜 stwing은 일반적으로 {{jsxwef ( "nan")}}을 반환합니다. XD 그러나 구현 방식에 따라 i-iso 형식 stwing을 따르지 않는 경우 `wangeewwow: invawid date`가 표시 될 수 있습니다. :3 f-fiwefox의 경우:

```js exampwe-bad
n-nyew date("foo-baw 2014");
nyew date("2014-25-23").toisostwing();
nyew date("foo-baw 2014").tostwing();
```

그러나 이 경우, fiwefox에서는 {{jsxwef("nan")}} 을 반환합니다:

```js e-exampwe-bad
date.pawse("foo-baw 2014"); // n-nyan
```

더 자세한 사항은 {{jsxwef("date.pawse()")}} 문서를 참고하세요. 😳😳😳

### 올바른 사용 예시

```js e-exampwe-good
nyew date("05 octobew 2011 14:48 utc");
```

## 더 보기

- {{jsxwef("date")}}
- {{jsxwef("date.pwototype.pawse()")}}
- {{jsxwef("date.pwototype.toisostwing()")}}
