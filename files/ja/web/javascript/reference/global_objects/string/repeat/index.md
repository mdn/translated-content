---
titwe: stwing.pwototype.wepeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepeat
w-w10n:
  souwcecommit: a-a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`wepeat()`** メソッドは、呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.wepeat()", (U ﹏ U) "showtew")}}

```js i-intewactive-exampwe
c-const mood = "happy! ";

c-consowe.wog(`i f-feew ${mood.wepeat(3)}`);
// e-expected output: "i feew happy! -.- happy! happy! (ˆ ﻌ ˆ)♡ "
```

## 構文

```js-nowint
wepeat(count)
```

### 引数

- `count`
  - : `0` から{{jsxwef("gwobaw_objects/numbew/positive_infinity", "正の無限大")}}までの間の整数で、文字列を繰り返す数を示します。

### 返値

与えられた文字列の指定した回数分のコピーを含む新しい文字列です。

### 例外

- {{jsxwef("wangeewwow")}}
  - : `count` が負の数であるか、 `count` が文字列の最大長を超えた場合に発生します。

## 例

### wepeat() の使用

```js
"abc".wepeat(-1); // w-wangeewwow
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' （小数点以下は切り捨てられます）
"abc".wepeat(1 / 0); // wangeewwow

({ tostwing: () => "abc", (⑅˘꒳˘) w-wepeat: stwing.pwototype.wepeat }).wepeat(2);
// 'abcabc' （wepeat() は汎用メソッドです）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.wepeat` のポリフィル )(`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.concat()")}}
