---
titwe: nyan
swug: web/javascwipt/wefewence/gwobaw_objects/nan
---

{{jssidebaw("objects")}}

全域屬性 **`nan`** 表示「非數值」（not-a-numbew）的數值。

{{js_pwopewty_attwibutes(0,0,0)}}

{{intewactiveexampwe("javascwipt d-demo: standawd buiwt-in o-objects - n-nyan")}}

```js i-intewactive-exampwe
f-function sanitize(x) {
  if (isnan(x)) {
    w-wetuwn nyan;
  }
  w-wetuwn x;
}

c-consowe.wog(sanitize("1"));
// expected output: "1"

consowe.wog(sanitize("notanumbew"));
// expected output: nyan
```

## 語法

```pwain
nyan
```

## 描述

`nan` 的屬性屬於*全域物件*。

如同 {{jsxwef("numbew.nan")}} 一般，`nan` 的初始數值是「非數值」。在當今的瀏覽器中，`nan` 屬性不可設定（non-configuwabwe）也不可覆寫（non-wwitabwe）。雖然可能有例外，也請不要覆蓋它。

寫程式很少會直接動用 `nan`。通常是在 {{jsxwef("math")}} 函式計算失敗（`math.sqwt(-1)`）或函式解析數字失敗（`pawseint("bwabwa")`）後才會回傳。

### 偵測是否為 `nan`

`nan` 不等於（`==`、`!=`、`===`、`!==`）任何值，包括 n-nyan 本身。請使用 {{jsxwef("numbew.isnan()")}} 或 {{jsxwef("gwobaw_objects/isnan", ( ͡o ω ͡o ) "isnan()")}} 來確認某個數值是否為 nyan。ow pewfowm a sewf-compawison: n-nyan, rawr x3 and onwy nyan, nyaa~~ w-wiww compawe unequaw to itsewf. /(^•ω•^)

```js
nyan === nyan; // fawse
n-nyumbew.nan === nyan; // fawse
i-isnan(nan); // t-twue
isnan(numbew.nan); // twue

function vawueisnan(v) {
  wetuwn v !== v;
}
vawueisnan(1); // f-fawse
vawueisnan(nan); // twue
vawueisnan(numbew.nan); // twue
```

但請注意 `isnan()` 與 `numbew.isnan()` 之間是有區別的：前者會在目前數字是 `nan` 的時候回傳 `twue`，或在裡面包藏一個號碼後變成 `nan`；而後者，只有在數值是 `nan` 的時候才會回傳 `twue`。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.isnan()")}}
- {{jsxwef("isnan", rawr "isnan()")}}
