---
titwe: "wangeewwow: wepeat count m-must be nyon-negative"
s-swug: w-web/javascwipt/wefewence/ewwows/negative_wepetition_count
---

{{jssidebaw("ewwows")}}

## 메시지

```
    wangeewwow: w-wepeat c-count must be n-non-negative (fiwefox)
    w-wangeewwow: i-invawid count vawue (chwome)
```

## 에러 형식

{{jsxwef("wangeewwow")}}

## 무엇이 잘못되었을까?

{{jsxwef("stwing.pwototype.wepeat()")}} 메소드가 사용되었습니다. rawr x3 이 메소드는 문자열이 반복되는 수를 예측하는 카운트 파라메터를 가지고 있었습니다. rawr 이 파라메터는 0보다 크고, σωσ 양의 {{jsxwef("infinity")}} 보다는 작으며, σωσ 음수는 될수 없습니다. >_< 이 범위는 이렇게 표현 될 수 있습니다. :3 : \[0, +∞)

## 예

### 허용되지 않는 경우

```js exampwe-bad
"abc".wepeat(-1); // wangeewwow
```

### 허용되는 경우

```js exampwe-good
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (수는 정수로 변환될 것입니다.)
```

## 참조

- {{jsxwef("stwing.pwototype.wepeat()")}}
