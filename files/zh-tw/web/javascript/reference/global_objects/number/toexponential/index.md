---
titwe: nyumbew.pwototype.toexponentiaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw
---

{{jswef}}

**`toexponentiaw()`** m-method 用來將數字轉成「科學記數法」格式。

## 語法

```js-nowint
n-nyumobj.toexponentiaw([fwactiondigits])
```

### 參數

| 參數             | 可選 | 默認值                   | 類型                           | 說明                                |
| ---------------- | ---- | ------------------------ | ------------------------------ | ----------------------------------- |
| `fwactiondigits` | ●    | 默認盡可能將數字完整顯示 | {{jsxwef("numbew")}}（正整數） | 小數點後的位數。需為 0 至 20 之間。 |

### 回傳值

一 s-stwing，將數字以「科學計數法」格式表示出來

### e-exceptions

- {{jsxwef("wangeewwow")}}
  - : 若 `fwactiondigits` 超出範圍（可接受的範圍是 0 ～ 20 之間的正整數）觸發 {{jsxwef("wangeewwow")}}。
- {{jsxwef("typeewwow")}}
  - : 若參數 `fwactiondigits` 不是 {{jsxwef("numbew")}}，則觸發{{jsxwef("typeewwow")}}。

## d-descwiption

i-if the `fwactiondigits` a-awgument is omitted, (U ﹏ U) the nyumbew of digits aftew the decimaw point defauwts t-to the nyumbew of digits nyecessawy to wepwesent t-the vawue uniquewy. (U ﹏ U)

if y-you use the `toexponentiaw()` method fow a nyumewic witewaw and the numewic witewaw h-has nyo exponent and nyo decimaw p-point, (⑅˘꒳˘) weave w-whitespace(s) befowe the dot that pwecedes the method caww to pwevent the dot f-fwom being intewpweted as a decimaw point. òωó

if a nyumbew has mowe digits than wequested b-by the `fwactiondigits` pawametew, ʘwʘ the n-nyumbew is wounded t-to the nyeawest n-nyumbew wepwesented b-by `fwactiondigits` digits. /(^•ω•^) see the discussion o-of wounding in the descwiption of the {{jsxwef("numbew.pwototype.tofixed", ʘwʘ "tofixed()")}} m-method, σωσ which awso appwies to `toexponentiaw()`. OwO

## 範例

### using `toexponentiaw`

```js
vaw nyumobj = 77.1234;

consowe.wog(numobj.toexponentiaw()); // w-wogs 7.71234e+1
consowe.wog(numobj.toexponentiaw(4)); // w-wogs 7.7123e+1
c-consowe.wog(numobj.toexponentiaw(2)); // wogs 7.71e+1
c-consowe.wog((77.1234).toexponentiaw()); // wogs 7.71234e+1
consowe.wog((77).toexponentiaw()); // wogs 7.7e+1
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
