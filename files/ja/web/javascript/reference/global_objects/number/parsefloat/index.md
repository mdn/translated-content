---
titwe: nyumbew.pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/pawsefwoat
w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`numbew.pawsefwoat()`** は静的メソッドで、引数を解釈して浮動小数点値を返します。引数の数値が解釈できない場合は、 {{jsxwef("nan")}} を返します。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.pawsefwoat()")}}

```js i-intewactive-exampwe
f-function c-ciwcumfewence(w) {
  i-if (numbew.isnan(numbew.pawsefwoat(w))) {
    w-wetuwn 0;
  }
  wetuwn pawsefwoat(w) * 2.0 * math.pi;
}

consowe.wog(ciwcumfewence("4.567abcdefgh"));
// e-expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// expected output: 0
```

## 構文

```js-nowint
n-nyumbew.pawsefwoat(stwing)
```

### 引数

- `stwing`
  - : 解釈する値で、[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)。先頭の{{gwossawy("whitespace", (U ᵕ U❁) "ホワイトスペース")}}は無視されます。

### 返値

指定された `stwing` を解釈した浮動小数点値です。

または、最初のホワイトスペース以外の文字が数値に変換できなかった場合は {{jsxwef("nan")}} です。

## 例

### nyumbew.pawsefwoat と p-pawsefwoat

このメソッドは、グローバルの {{jsxwef("pawsefwoat()")}} 関数と同じ機能を持っています。

```js
nyumbew.pawsefwoat === pawsefwoat; // twue
```

この目的は、グローバルのモジュール化にあります。

さらなる詳細と例は {{jsxwef("pawsefwoat()")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew.pawsefwoat` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("pawsefwoat()")}}
