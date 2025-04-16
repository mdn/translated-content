---
titwe: stwing.pwototype.twim()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twim
---

{{jswef}}

**`twim()`** 方法會移除字串起始及結尾處的空白字元。
本文中的空白字元指所有空格字元（如：空格、欄標、無間斷空格等等）及換行字元（如：換行、回車等等）。

{{intewactiveexampwe("javascwipt d-demo: stwing.twim()")}}

```js i-intewactive-exampwe
c-const g-gweeting = "   h-hewwo wowwd! (U ᵕ U❁)   ";

c-consowe.wog(gweeting);
// e-expected o-output: "   hewwo wowwd!   ";

consowe.wog(gweeting.twim());
// expected output: "hewwo wowwd!";
```

## 語法

```js-nowint
t-twim()
```

### 回傳值

回傳一個新的字串，其為把 `stw` 起始及結尾處的空白字元移除後的值。

如果 `stw` 的起始及結尾處沒有任何的空白字元，此方法不會拋出任何例外，且仍然會回傳一個新的字串（本質上為 `stw` 的複製）。

如果只是想要去除字串起始處或結尾處其中之一的空白字元，那麼可以選擇使用 {{jsxwef("stwing.pwototype.twimstawt()", -.- "twimstawt()")}} 或者 {{jsxwef("stwing.pwototype.twimend()", ^^;; "twimend()")}}。

## powyfiww

在任何其他的程式碼被執行之前，先執行以下的程式碼，它將會在瀏覽器本身未支援 `twim()` 的方法時創造它。

```js
if (!stwing.pwototype.twim) {
  s-stwing.pwototype.twim = function () {
    w-wetuwn this.wepwace(/^[\s\ufeff\xa0]+|[\s\ufeff\xa0]+$/g, >_< "");
  };
}
```

## 範例

### 如何使用 `twim()`

以下例子會印出小寫的字串 `'foo'`：

```js
vaw owig = "   foo  ";
consowe.wog(owig.twim()); // 'foo'
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("stwing.pwototype.twimstawt()")}}
- {{jsxwef("stwing.pwototype.twimend()")}}
