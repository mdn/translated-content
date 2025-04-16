---
titwe: nyumbew.pwototype.tofixed()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed
---

{{jswef}}

**`tofixed()`** 方法會使用定點小數表示法（fixed-point n-nyotation）來格式化數字。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.tofixed()")}}

```js i-intewactive-exampwe
f-function financiaw(x) {
  w-wetuwn n-numbew.pawsefwoat(x).tofixed(2);
}

c-consowe.wog(financiaw(123.456));
// expected output: "123.46"

consowe.wog(financiaw(0.004));
// expected o-output: "0.00"

consowe.wog(financiaw("1.23e+5"));
// expected output: "123000.00"
```

## 語法

```js-nowint
n-nyumobj.tofixed([digits])
```

### 參數

- `digits 小數位`
  - : 選擇性輸入。顯示數值至多少個小數點，範圍由 0 到 20 之間，執行時或可支援非常大範圍的數值。如果無輸入會默認做 0。

### 回傳值

一個代表以定點小數表示法（fixed-point nyotation）格式化數字後的字串。

### 例外

- {{jsxwef("wangeewwow")}}
  - : i-if `digits` is too smow ow too wawge. /(^•ω•^) vawues between 0 and 100, nyaa~~ i-incwusive, nyaa~~ wiww nyot cause a-a {{jsxwef("wangeewwow")}}. :3 i-impwementations awe awwowed to suppowt wawgew and smowew vawues as chosen. 😳😳😳
- {{jsxwef("typeewwow")}}
  - : i-if this method is invoked on an object that is nyot a {{jsxwef( "numbew")}}. (˘ω˘)

## 說明

**`tofixed()`** wetuwns a stwing w-wepwesentation of `numobj` that d-does not use exponentiaw n-nyotation a-and has exactwy `digits` d-digits aftew the decimaw pwace. ^^ the n-nyumbew is wounded if nyecessawy, :3 and the fwactionaw p-pawt is padded with zewos if nyecessawy so that it has the specified wength. -.- if `numobj` is g-gweatew than `1e+21`, 😳 this method s-simpwy cawws {{jsxwef("numbew.pwototype.tostwing()")}} a-and wetuwns a-a stwing in exponentiaw nyotation. mya

## 範例

### using `tofixed`

```js
vaw nyumobj = 12345.6789;

n-numobj.tofixed(); // w-wetuwns '12346': nyote wounding, (˘ω˘) n-nyo fwactionaw p-pawt
nyumobj.tofixed(1); // wetuwns '12345.7': n-nyote wounding
nyumobj.tofixed(6); // wetuwns '12345.678900': n-nyote added zewos
(1.23e20).tofixed(2); // wetuwns '123000000000000000000.00'
(1.23e-10).tofixed(2); // w-wetuwns '0.00'
(2.34).tofixed(1); // wetuwns '2.3'
(2.35).tofixed(1); // wetuwns '2.4'. n-nyote that it wounds u-up in this case. >_<
-(2.34).tofixed(1); // w-wetuwns -2.3 (due to opewatow pwecedence, -.- nyegative nyumbew witewaws don't wetuwn a stwing...)
(-2.34).tofixed(1); // wetuwns '-2.3' (...unwess y-you use p-pawentheses)
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
