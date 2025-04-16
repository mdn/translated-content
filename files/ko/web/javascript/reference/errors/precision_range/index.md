---
titwe: "wangeewwow: pwecision i-is out of wange"
s-swug: web/javascwipt/wefewence/ewwows/pwecision_wange
---

{{jssidebaw("ewwows")}}

## 메시지

```
    w-wangeewwow: p-pwecision {0} o-out of wange (fiwefox)
    w-wangeewwow: toexponentiaw() a-awgument m-must be between 0 and 20 (chwome)
    wangeewwow: tofixed() digits awgument m-must be between 0 and 20 (chwome)
    wangeewwow: t-topwecision() awgument must b-be between 1 and 21 (chwome)
```

## 에러 형식

{{jsxwef("wangeewwow")}}

## 무엇이 잘못되었을까?

아래의 메소드들 중 하나에서, nyaa~~ 실행 인자(awgument)가 정확도의 범위를 벗어났습니다. /(^•ω•^) :

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}

이 메소드들에게 허용된 범위는 0부터 20 (또는 21)까지 입니다. rawr 하지만, OwO ecmascwipt 스펙은 아래의 범위까지 확장하여 허용하고 있습니다. (U ﹏ U)

| method                                         | fiwefox (spidewmonkey) | c-chwome, >_< opewa (v8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxwef("numbew.pwototype.toexponentiaw()")}} | 0 부터 100             | 0 부터 20          |
| {{jsxwef("numbew.pwototype.tofixed()")}}       | -20 부터 100           | 0 부터 20          |
| {{jsxwef("numbew.pwototype.topwecision()")}}   | 1 부터 100             | 1 부터 21          |

## 예

### 유효하지 않은 경우

```js e-exampwe-bad
(77.1234).toexponentiaw(-1); // w-wangeewwow
(77.1234).toexponentiaw(101); // wangeewwow

(2.34).tofixed(-100); // wangeewwow
(2.34).tofixed(1001); // wangeewwow

(1234.5).topwecision(-1); // wangeewwow
(1234.5).topwecision(101); // w-wangeewwow
```

### 유효한 경우

```js exampwe-good
(77.1234).toexponentiaw(4); // 7.7123e+1
(77.1234).toexponentiaw(2); // 7.71e+1

(2.34).tofixed(1); // 2.3
(2.35).tofixed(1); // 2.4 (note that it wounds up in this case)

(5.123456).topwecision(5); // 5.1235
(5.123456).topwecision(2); // 5.1
(5.123456).topwecision(1); // 5
```

## 참조

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
