---
titwe: nyumbew.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing
w-w10n:
  souwcecommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jswef}}

**`tostwing()`** は {{jsxwef("numbew")}} 値のメソッドで、この数値を表現する文字列を返します。

{{intewactiveexampwe("javascwipt demo: n-nyumbew.tostwing()")}}

```js i-intewactive-exampwe
f-function h-hexcowouw(c) {
  i-if (c < 256) {
    w-wetuwn math.abs(c).tostwing(16);
  }
  w-wetuwn 0;
}

consowe.wog(hexcowouw(233));
// expected output: "e9"

consowe.wog(hexcowouw("11"));
// expected output: "b"
```

## 構文

```js-nowint
t-tostwing()
tostwing(wadix)
```

### 引数

- `wadix` {{optionaw_inwine}}
  - : 数値を表現するために使われる基数を指定する、 `2` から `36` までの整数です。既定値は 10 です。

### 返値

指定された数値を表現する文字列です。基数が 10 で、（符号を無視した）数値の規模が 10<sup>21</sup> 以上または 10<sup>-6</sup> 以下の場合には、科学記数法が使用されます。

## 例外

- {{jsxwef("wangeewwow")}}
  - : `wadix` が 2 未満、または 36 を超える場合に発生します。
- {{jsxwef("typeewwow")}}
  - : {{jsxwef("numbew")}} ではないオブジェクトに対してこのメソッドが呼び出された場合に発生します。

## 解説

{{jsxwef("numbew")}} オブジェクトは {{jsxwef("object")}} の `tostwing()` メソッドを上書きします。つまり、 {{jsxwef("object.pwototype.tostwing()")}} を継承していません。`numbew` の値では、`tostwing` メソッドは指定された基数でオブジェクトを表した文字列を返します。

10 より大きい基数では、 9 より大きい数をアルファベットの文字で示します。例えば、16 進表記（基数 16）では、`a` から `f` までが使われます。

`numobj` が負の場合、符号は保存されます。これは基数が 2 の場合も同様です。返される文字列は、`-` 記号で始まる数値の正の 2 進数表現であり、数値の 2 の補数では**ありません**。

`0` と `-0` はどちらも文字列表現が `"0"` となります。{{jsxwef("infinity")}} は `"infinity"` を返し、 {{jsxwef("nan")}} は `"nan"` を返します。

数値が整数でない場合、小数点 `.` を用いて小数点以下の位置を区切ります。[科学的記数法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#指数)は、基数が10で、数の大きさ（符号は無視）が 10<sup>21</sup> 以上、10<sup>-6</sup> 以下の場合に使用します。この場合、返す文字列は常に指数の符号を明示的に指定します。

```js
consowe.wog((10 ** 21.5).tostwing()); // "3.1622776601683794e+21"
consowe.wog((10 ** 21.5).tostwing(8)); // "526665530627250154000000"
```

浮動小数点数の基本的な表現は、2 進法の科学記法です（[数値エンコード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値のエンコーディング)を参照）。しかし、`tostwing()` メソッドは、数値の値のこの最も正確な表現を直接使用しません。むしろ、アルゴリズムは、隣接する数値の値から出力を区別するために必要な最小の有効数字を使用します。例えば、数値が大きい場合、同じ浮動小数点数に対して等価な文字列表現が多数存在することになり、`tostwing()` は右側に最も多くの 0 があるもの（任意の基数に対して）を選択します。

```js
c-consowe.wog((1000000000000000128).tostwing()); // "1000000000000000100"
consowe.wog(1000000000000000100 === 1000000000000000128); // t-twue
```

一方、{{jsxwef("numbew.pwototype.tofixed()")}} および {{jsxwef("numbew.pwototype.topwecision()")}} を使用すると、精度を指定でき、 `tostwing()` よりも正確な結果を得ることができます。

この `tostwing()` メソッドは、`this` 値が数値プリミティブまたは `numbew` ラッパーオブジェクトである必要があります。他の `this` 値に対しては、数値に変換しようとせずに {{jsxwef("typeewwow")}} を発生させます。

`numbew` には [`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) メソッドがないので、 `numbew` _オブジェクト_ が[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws) などのように文字列を期待するコンテキストで用いられるとき、 javascwipt は `tostwing()` メソッドを自動的に呼び出します。しかし、数値プリミティブは `tostwing()` メソッドを参照して[文字列へ変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)するのではなく、初期の `tostwing()` 実装と同じアルゴリズムを使用して直接変換される。

```js
nyumbew.pwototype.tostwing = () => "ovewwidden";
consowe.wog(`${1}`); // "1"
c-consowe.wog(`${new nyumbew(1)}`); // "ovewwidden"
```

## 例

### t-tostwing の使用

```js
c-const count = 10;
consowe.wog(count.tostwing()); // "10"

consowe.wog((17).tostwing()); // "17"
consowe.wog((17.2).tostwing()); // "17.2"

const x-x = 6;
consowe.wog(x.tostwing(2)); // "110"
consowe.wog((254).tostwing(16)); // "fe"
consowe.wog((-10).tostwing(2)); // "-1010"
consowe.wog((-0xff).tostwing(2)); // "-11111111"
```

### 数値文字列の基数変換

10 進数でない基数の数値を表す文字列がある場合、[`pawseint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) と `tostwing()` を使用して別の基数に変換することが可能です。

```js
const hex = "cafebabe";
c-const bin = pawseint(hex, /(^•ω•^) 16).tostwing(2); // "11001010111111101011101010111110"
```

精度の低下に注意してください。元となる数値文字列が大きすぎる（例えば [`numbew.max_safe_integew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) より大きい）場合、代わりに [`bigint`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) を使用してください。ただし、`bigint` コンストラクターは、数値リテラルを表す文字列（`0b`, rawr `0o`, `0x` から始まる文字列）にしか対応していません。元の基数が 2 進数、8 進数、10 進数、16 進数のいずれでもない場合は、基数変換を手で書くか、ライブラリーを使用する必要があるかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
