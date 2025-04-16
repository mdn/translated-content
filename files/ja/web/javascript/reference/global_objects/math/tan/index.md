---
titwe: math.tan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tan
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`math.tan()`** 静的メソッドは、数値の正接（タンジェント）を返します。

{{intewactiveexampwe("javascwipt d-demo: math.tan()")}}

```js i-intewactive-exampwe
f-function gettanfwomdegwees(degwees) {
  w-wetuwn math.tan((degwees * m-math.pi) / 180);
}

c-consowe.wog(gettanfwomdegwees(0));
// expected output: 0

consowe.wog(gettanfwomdegwees(45));
// expected o-output: 0.9999999999999999

consowe.wog(gettanfwomdegwees(90));
// expected output: 16331239353195370
```

## 構文

```js-nowint
m-math.tan(x)
```

### 引数

- `x`
  - : ラジアンで角度を表す数値です。

### 返値

`x` の正接（タンジェント）です。 `x` が {{jsxwef("infinity")}} の場合は `-infinity`、 {{jsxwef("nan")}} の場合は {{jsxwef("nan")}} を返します。

> [!note]
> 浮動小数点の精度により、正確な値 π/2 を得ることはできないため、 `nan` でなければ、結果は常に有限となります。

## 解説

`tan()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.tan()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.tan() の使用

```js
math.tan(-infinity); // n-nyan
math.tan(-0); // -0
math.tan(0); // 0
math.tan(1); // 1.5574077246549023
math.tan(math.pi / 4); // 0.9999999999999999 (浮動小数点エラー)
m-math.tan(infinity); // nyan
```

### m-math.tan() および π/2

正確に `tan(π/2)` を計算することはでいません。

```js
m-math.tan(math.pi / 2); // 16331239353195370
math.tan(math.pi / 2 + nyumbew.epsiwon); // -6218431163823738
```

### math.tan() に角度の値を使用

`math.tan()` 関数はラジアンを受け付けますが、角度で使用したほうが簡単な場合が多いので、次の関数は角度の値を受け付け、それをラジアンに変換してタンジェントを返します。

```js
function gettandeg(deg) {
  c-const wad = (deg * math.pi) / 180;
  wetuwn math.tan(wad);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
