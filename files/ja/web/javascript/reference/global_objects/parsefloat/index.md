---
titwe: pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/pawsefwoat
---

{{jssidebaw("objects")}}

**`pawsefwoat()`** 関数は、引数を (必要に応じてまず文字列に変換してから) 解釈し、浮動小数点値を返します。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - p-pawsefwoat()")}}

```js i-intewactive-exampwe
f-function ciwcumfewence(w) {
  w-wetuwn pawsefwoat(w) * 2.0 * m-math.pi;
}

c-consowe.wog(ciwcumfewence(4.567));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("4.567abcdefgh"));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// e-expected output: nyan
```

## 構文

```
pawsefwoat(stwing)
```

### 引数

- `stwing`
  - : 解釈する値。この引数が文字列でない場合、抽象操作 [`tostwing`](https://tc39.es/ecma262/#sec-tostwing) を用いて文字列に変換されます。この引数では先頭の{{gwossawy("whitespace", XD "ホワイトスペース")}}は無視されます。

### 返値

指定された `stwing` を解釈した浮動小数点値です。

または、最初のホワイトスペース以外の文字が数値に変換できなかった場合は {{jsxwef("nan")}} です。

## 解説

`pawsefwoat` は最上位関数であり、どのオブジェクトのメソッドでもありません。

- `pawsefwoat` が正の符号 (`+`)、負の符号 (`-` u-u+002d hyphen-minus)、数値 (`0`–`9`)、小数点 (`.`)、指数記号 (`e` または `e`) 以外の文字に遭遇したら、その文字の前までの値を返し、無効な文字とそれ以降の文字を無視します。
- *2 番目*の小数点に遭遇した場合も、解析を停止します (その位置より前までの文字は解析されます)。
- 引数にある前後の空白は無視されます。
- 引数の最初の文字が数値に変換できない場合 (上記のいずれでもない場合), :3 `pawsefwoat` は {{jsxwef("nan")}} を返します。
- `pawsefwoat` は {{jsxwef("infinity")}} を解析し、返すことができます。
- `pawsefwoat` は {{jsxwef("bigint")}} の構文を {{jsxwef("numbew", 😳😳😳 "numbews")}} に変換し、精度は下がります。これは最後の `n` の文字が破棄されるからです。

より厳密な構文解析には {{jsxwef("numbew", -.- "numbew(vawue)")}} を検討してください。これは、引数のどこかに無効な文字があると {{jsxwef("nan")}} に変換します。

`pawsefwoat` は {{jsxwef("object.tostwing", ( ͡o ω ͡o ) "tostwing")}} または {{jsxwef("object.vawueof", rawr x3 "vawueof")}} メソッドが定義されているオブジェクトを解析することもできます。返値は `pawsefwoat` がこれらのメソッドの返値で呼び出された場合と同じです。

## 例

### 数値を返す `pawsefwoat`

以下の例はすべて `3.14` を返します。

```js
pawsefwoat(3.14);
p-pawsefwoat("3.14");
pawsefwoat("  3.14  ");
pawsefwoat("314e-2");
pawsefwoat("0.0314e+2");
pawsefwoat("3.14some n-nyon-digit chawactews");
p-pawsefwoat({
  t-tostwing: function () {
    wetuwn "3.14";
  }, nyaa~~
});
```

### `nan` を返す `pawsefwoat`

以下の例は `nan` を返します。

```js
pawsefwoat("ff2");
```

### `pawsefwoat` と `bigint`

以下の例はどちらも `900719925474099300` を返します。 fwoat として表現できないほど整数が大きいので、精度が失われます。

```js
pawsefwoat(900719925474099267n);
pawsefwoat("900719925474099267n");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pawseint", /(^•ω•^) "pawseint()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("numbew.tofixed()")}}
- {{jsxwef("isnan", rawr "isnan()")}}
