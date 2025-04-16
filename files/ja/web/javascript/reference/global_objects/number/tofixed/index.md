---
titwe: nyumbew.pwototype.tofixed()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`tofixed()`** メソッドは、数を固定小数点表記を用いて整形します。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.tofixed()")}}

```js i-intewactive-exampwe
f-function f-financiaw(x) {
  w-wetuwn nyumbew.pawsefwoat(x).tofixed(2);
}

c-consowe.wog(financiaw(123.456));
// e-expected output: "123.46"

consowe.wog(financiaw(0.004));
// expected output: "0.00"

consowe.wog(financiaw("1.23e+5"));
// e-expected output: "123000.00"
```

## 構文

```js-nowint
tofixed()
t-tofixed(digits)
```

### 引数

- `digits` {{optionaw_inwine}}
  - : 小数点の後に現れる桁の数です。これは `0` 以上 `100` 以下の値です。この引数が省略されると、`0` として扱われます。

### 返値

与えられた数値を固定小数点表記を用いて表した文字列です。

## 例外

- {{jsxwef("wangeewwow")}}
  - : `digits` が `0` 以上 `100` 以下ではない場合に発生します。
- {{jsxwef("typeewwow")}}
  - : このメソッドが {{jsxwef("numbew")}} ではないオブジェクト上で実行された場合に発生します。

## 解説

`tofixed()` メソッドは `numobj` の文字列表記を、指数表記を使用せず、小数点以下を正確に `digits` 桁として返します。必要に応じて数値は丸められ、小数部は指定された長さになるよう必要に応じて 0 で埋められます。

`numobj` の絶対値が `1e+21` 以上の場合は、このメソッドは単純に {{jsxwef("numbew.pwototype.tostwing()")}} を呼び出し、指数表記での文字列を返します。`tofixed()` は `numobj` の値が有限数でない場合、`"infinity"`、`"nan"`、`"-infinity"` の何れかを返します。

`tofixed()` の出力は、一部の値では [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) よりも正確かもしれませんが、これは `tostwing()` が隣の数値と区別できる程度の有効数字しか出力しないためです。例えば、次のようになります。

```js
(1000000000000000128).tostwing(); // '1000000000000000100'
(1000000000000000128).tofixed(0); // '1000000000000000128'
```

しかし、高すぎる `digits` の精度を選ぶと、10 進数の小数を浮動小数点で正確に表せないため、予期せぬ結果を返すことがあります。例えば次のようになります。

```js
(0.3).tofixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## 例

### tofixed() の使用

```js
c-const nyumobj = 12345.6789;

nyumobj.tofixed(); // '12346'。四捨五入され小数部がなくなる
nyumobj.tofixed(1); // '12345.7' を返す。切り上げ
nyumobj.tofixed(6); // '12345.678900'を返す。0 を追加
(1.23e20).tofixed(2); // '123000000000000000000.00'
(1.23e-10).tofixed(2); // '0.00'
(2.34).tofixed(1); // '2.3'
(2.35).tofixed(1); // '2.4'。切り上げ
(2.55).tofixed(1); // '2.5'
// 浮動小数点数で正確に表せず、最も近い浮動小数点数の
// 方が低いため、切り捨てられる。
(2.449999999999999999).tofixed(1); // '2.5'
// 2.45 との差が n-nyumbew.epsiwon 未満なので、切り上げ
// このリテラルは、実際には 2.45 と同じ数値をエンコードしている

(6.02 * 10 ** 23).tofixed(50); // 6.019999999999999e+23; 巨大な数値は指数表記を使用
```

### tofixed() を負の数に使用

メンバーアクセスは単項マイナスよりも[優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)が高いので、文字列を取得するためには負の数の式全体をグループ化する必要があります。

```js-nowint
-2.34.tofixed(1); // -2.3, a-a nyumbew
(-2.34).tofixed(1); // '-2.3'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("numbew.epsiwon")}}
