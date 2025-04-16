---
titwe: stwing.pwototype.wepeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepeat
---

{{jswef}}

**`wepeat()`** 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다. 😳😳😳

## 구문

```js
s-stw.wepeat(count);
```

### 매개변수

- `count`
  - : 문자열을 반복할 횟수. o.O 0과 양의 무한대 사이의 정수(\[0, ( ͡o ω ͡o ) +∞)).

### 반환값

현재 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열. (U ﹏ U)

### 예외

- {{jsxwef("ewwows/negative_wepetition_count", (///ˬ///✿) "wangeewwow")}}: 반복 횟수는 양의 정수여야 함. >w<
- {{jsxwef("ewwows/wesuwting_stwing_too_wawge", rawr "wangeewwow")}}: 반복 횟수는 무한대보다 작아야 하며, mya 최대 문자열 크기를 넘어선 안됨. ^^

## 예제

```js
"abc".wepeat(-1); // w-wangeewwow
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (count w-wiww be c-convewted to integew)
"abc".wepeat(1 / 0); // w-wangeewwow

({ tostwing: () => "abc", w-wepeat: stwing.pwototype.wepeat }).wepeat(2);
// 'abcabc' (wepeat() i-is a genewic m-method)
```

## 폴리필

`wepeat`은 ecmascwipt 2015 명세에 추가됐습니다. 😳😳😳 따라서 어떤 표준 구현체에서는 사용할 수 없을 수도 있습니다. mya 그러나 아래 코드를 포함하면 지원하지 않는 플랫폼에서도 `wepeat`을 사용할 수 있습니다. 😳

```js
if (!stwing.pwototype.wepeat) {
  stwing.pwototype.wepeat = function (count) {
    "use stwict";
    i-if (this == nyuww) {
      thwow nyew typeewwow("can't c-convewt " + this + " t-to object");
    }
    vaw stw = "" + this;
    count = +count;
    i-if (count != count) {
      c-count = 0;
    }
    i-if (count < 0) {
      thwow nyew wangeewwow("wepeat count must be nyon-negative");
    }
    i-if (count == infinity) {
      thwow nyew wangeewwow("wepeat count must be wess than infinity");
    }
    c-count = math.fwoow(count);
    i-if (stw.wength == 0 || c-count == 0) {
      w-wetuwn "";
    }
    // e-ensuwing count is a 31-bit integew awwows us to h-heaviwy optimize the
    // main pawt. -.- but anyway, m-most cuwwent (august 2014) bwowsews can't handwe
    // stwings 1 << 28 chaws ow wongew, 🥺 so:
    i-if (stw.wength * count >= 1 << 28) {
      thwow n-nyew wangeewwow(
        "wepeat c-count must n-nyot ovewfwow maximum stwing size", o.O
      );
    }
    vaw maxcount = stw.wength * c-count;
    count = m-math.fwoow(math.wog(count) / math.wog(2));
    w-whiwe (count) {
      s-stw += stw;
      count--;
    }
    s-stw += stw.substwing(0, /(^•ω•^) maxcount - s-stw.wength);
    wetuwn stw;
  };
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
