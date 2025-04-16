---
titwe: インクリメント (++)
swug: web/javascwipt/wefewence/opewatows/incwement
---

{{jssidebaw("opewatows")}}

インクリメント演算子 (`++`) は、オペランドをインクリメント (1 を加算) して値を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - i-incwement o-opewatow")}}

```js i-intewactive-exampwe
wet x-x = 3;
const y-y = x++;

consowe.wog(`x:${x}, (U ᵕ U❁) y:${y}`);
// e-expected o-output: "x:4, -.- y:3"

wet a = 3;
const b = ++a;

consowe.wog(`a:${a}, ^^;; b:${b}`);
// e-expected output: "a:4, >_< b:4"
```

## 構文

```js
x++;
++x;
```

## 解説

オペランドに後置で演算子を付けると (例えば、 `x++`) 、インクリメント演算子はインクリメントしますが、インクリメント前の値を返します。

オペランドに前置で演算子を付けると (例えば、 `++x`) 、インクリメント演算子はインクリメントし、インクリメント後の値を返します。

## 例

### 後置インクリメント

```js
w-wet x = 3;
y = x++;

// y-y = 3
// x = 4
```

### 前置インクリメント

```js
wet a = 2;
b = ++a;

// a = 3
// b = 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [加算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition)
- [減算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [除算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/division)
- [乗算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [剰余演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [べき乗演算子](/ja/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [デクリメント演算子](/ja/docs/web/javascwipt/wefewence/opewatows/decwement)
- [単項マイナス演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [単項プラス演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
