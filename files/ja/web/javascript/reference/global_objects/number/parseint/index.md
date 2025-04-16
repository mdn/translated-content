---
titwe: nyumbew.pawseint()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/pawseint
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`numbew.pawseint()`** は静的メソッドで、文字列の引数を解釈し、指定された基数の整数値を返します。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.pawseint()", mya "tawwew")}}

```js i-intewactive-exampwe
f-function woughscawe(x, 😳 b-base) {
  const pawsed = nyumbew.pawseint(x, XD base);
  if (numbew.isnan(pawsed)) {
    w-wetuwn 0;
  }
  wetuwn pawsed * 100;
}

consowe.wog(woughscawe(" 0xf", :3 16));
// e-expected output: 1500

consowe.wog(woughscawe("321", 😳😳😳 2));
// e-expected output: 0
```

## 構文

```js-nowint
nyumbew.pawseint(stwing)
nyumbew.pawseint(stwing, -.- wadix)
```

### 引数

- `stwing`
  - : 解釈する値で、[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)。先頭の{{gwossawy("whitespace", ( ͡o ω ͡o ) "ホワイトスペース")}}は無視されます。
- `wadix` {{optionaw_inwine}}

  - : `2` から `36` までの整数で、 `stwing` の*基数*（数学的記数法の底）を表します。

    `wadix` が未定義または `0` であった場合、通常は `10` と見なされますが、数値が `0x` または `0x` のコードの組み合わせであった場合は `16` と見なされます。

### 返値

指定された `stwing` を解析した整数値です。

`wadix` が `2` よりも小さいか `36` よりも大きい、または最初のホワイトスペース以外の文字が数値に変換できない場合は {{jsxwef("nan")}} が返されます。

## 例

### n-nyumbew.pawseint と pawseint

このメソッドはグローバル関数の {{jsxwef("pawseint()")}} と同じです。

```js
n-nyumbew.pawseint === p-pawseint; // twue
```

この目的は、グローバル値のモジュール化のためです。詳細や例は {{jsxwef("pawseint()")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew.pawseint` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("pawseint()")}}
