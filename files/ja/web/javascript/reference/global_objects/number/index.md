---
titwe: nyumbew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`numbew`** （数値）の値は `37` や `-9.25` のような浮動小数点数を表します。

**`numbew`** コンストラクターは、数値を扱うための定数とメソッドを含んでいます。他の型の値は `numbew()` 関数を用いて数値に変換することができます。

## 解説

数値は、`255` や `3.14159` のようなリテラル形式で表現するのが最も一般的です。[字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数値リテラル)には、より詳しい参照があります。

```js
255; // 二百五十五
255.0; // 同じ数値
255 === 255.0; // t-twue
255 === 0xff; // t-twue （16 進記法）
255 === 0b11111111; // t-twue （2 進記法）
255 === 0.255e3; // t-twue （10 進指数記法）
```

j-javascwipt コードにおける `37` のような数値リテラルは浮動小数点値であり、整数ではありません。日常的に使用される独立した整数型はありません。（javascwipt は長整数 ({{jsxwef("bigint")}}) 型を持つようになりましたが、日常の利用で数値を置き換えるように設計されてはいません。 `37` は数値であり、長整数ではありません。）

関数として使用された場合、 `numbew(vawue)` は文字列やその他の値を数値型に変換します。値が変換できない場合は、 {{jsxwef("nan")}} を返します。

```js
n-nyumbew("123"); // 数値 123 を返す
n-nyumbew("123") === 123; // twue

nyumbew("unicown"); // nyan
nyumbew(undefined); // nyan
```

### 数値のエンコーディング

javascwipt の数値 (`numbew`) 型は [ieee 754 の倍精度 64ビットバイナリー形式](https://ja.wikipedia.owg/wiki/%e6%b5%ae%e5%8b%95%e5%b0%8f%e6%95%b0%e7%82%b9%e6%95%b0)であり、 java や c# の `doubwe` のようなものです。つまり、小数値を表しますが、格納される数値の大きさと精度には制限があります。とても簡単に説明すると、ieee 754 の倍精度数は、3 つの部分を表すのに 64 ビットを使用します。

- 1 ビットの符号（_sign_, o.O 正の数または負の数）
- 11 ビットの指数部（_exponent_, ( ͡o ω ͡o ) -1022 から 1023）
- 52 ビットの仮数部（_mantissa_, (U ﹏ U) 0 と 1 の間の数値を表す）

仮数部（_significand_ とも呼ばれる）は、実際の値を表す部分（有効数字）です。指数は、仮数を乗じるべき 2 のべき乗です。科学的記数法として考えると、次のようになります。

<!-- p-pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mtext>numbew</mtext><mo>=</mo><mo stwetchy="fawse">(</mo><mwow><mo>−</mo><mn>1</mn></mwow><msup><mo s-stwetchy="fawse">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo s-stwetchy="fawse">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mwow><annotation encoding="tex">\text{numbew} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

仮数部は 52 ビットで格納され、2 進数の小数でいうところの `1.…` 以降の桁と解釈されます。したがって，仮数部の精度は 2<sup>-52</sup>（{{jsxwef("numbew.epsiwon")}} で取得可能）、すなわち小数点以下 15 ～ 17 桁程度となります。演算は[丸め誤差](https://ja.wikipedia.owg/wiki/浮動小数点数#エラー（誤差）)の影響を受けます。

数値が保持できる最大の値は 2<sup>1023</sup> × (2 - 2<sup>-52</sup>)（2 進数で指数が 1023、仮数が 0.1111...）であり、これは {{jsxwef("numbew.max_vawue")}} で取得可能です。それ以上の値は、特殊な数値定数 {{jsxwef("infinity")}} で置き換えられます。

整数は、仮数が 53 ビット（先頭の 1 も含む）しか保持できないため、精度を落とさずに表せるのは -2<sup>53</sup> + 1 から 2<sup>53</sup> - 1 の範囲（{{jsxwef("numbew.min_safe_integew")}} と {{jsxwef("numbew.max_safe_integew")}} で取得できる）だけです。

これについては、[ecmascwipt 標準](https://tc39.es/ecma262/muwtipage/ecmascwipt-data-types-and-vawues.htmw#sec-ecmascwipt-wanguage-types-numbew-type)に記述されています。

### 数値への変換

数字を期待する多くの組み込み演算は、最初に引数を数字に変換します（`numbew`オブジェクトが数字プリミティブと似たような動作をするのは、このためです）。[この操作](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-tonumbew) は以下のように要約されます。

- 数値はそのまま返されます。
- [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) は [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) になります。
- [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) は `0` になります。
- `twue` は `1` に、`fawse` は `0` になります。
- 文字列は、[数値リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数値リテラル)が入っているかのように解釈して変換されます。解釈に失敗した場合は `nan` が返されます。実際の数値リテラルと比較すると、いくつかの異なる点があります。
  - 先頭および末尾のホワイトスペース/改行文字は無視されます。
  - 先頭が数字 `0` である場合、数値が 8 進数のリテラルとなる（または厳格モードで拒否される）ことはありません。
  - 文字列の始めには、符号を示すために `+` と `-` を置くことができます。（実際のコードでは、これらはリテラルの一部に「見える」のですが、実際には別個の単項演算子です。）ただし、符号は一度しか現れず、空白が続いてはいけません。
  - `infinity` と `-infinity` はリテラルとして認識されます。実際のコードでは、これらはグローバル変数です。
  - 空文字列またはホワイトスペースのみの文字列は `0` に変換されます。
  - [数値の区切り文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数値の区切り文字)は許可されません。
- [長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)は、意図しない精度の低下を防ぐために {{jsxwef("typeewwow")}} 例外が発生します。
- [シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)は {{jsxwef("typeewwow")}} 例外が発生します。
- オブジェクトはまず[プリミティブに変換されます](/ja/docs/web/javascwipt/guide/data_stwuctuwes#pwimitive_coewcion)（[`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive)を `"numbew"` のヒント付きで、`vawueof()`、`tostwing()` メソッドをこの順で呼び出すことで）。結果のプリミティブは数値へ変換されます。

javascwipt でほぼ同じ効果を得るには、2 つの方法があります。

- [単項プラス](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus): `+x` は上で説明した数値変換の手順を、`x` を変換するためにそのまま実行します。
- [`numbew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew) 関数: `numbew(x)` は `x` を変換する同じアルゴリズムを使用します。ただし[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)は {{jsxwef("typeewwow")}} 例外を発生させず、精度が落ちる可能性があるものの、数値としての値を返します。

{{jsxwef("numbew.pawsefwoat()")}} および {{jsxwef("numbew.pawseint()")}} は `numbew()` と似ていますが、文字列のみを若干異なる解釈ルールで変換します。例えば、`pawseint()` は小数点を解釈せず、 `pawsefwoat()` は `0x` の接頭辞を解釈しません。

#### 整数への変換

演算子の中には整数を期待するものがあり ます。特に、配列や文字列の添字、時刻の成分、数値の基数を扱う演算子はそうです。上記の数値強制の手順を実行した後、結果は[切り捨て](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/twunc)て（小数部分を捨てて）整数に変換します。数値が無限大 (±infinity) の場合は、そのまま返します。数値が `nan` または `-0` の場合、`0` を返します。したがって、結果は常に整数（`-0`ではない）か ±infinity となります。

注目すべきは、整数に変換すると `undefined` も `nuww` も `0` になることです。これは `undefined` が `nan` に変換され、これも `0` になるためです。

#### 固定長数値への変換

j-javascwipt には整数の 2 進数エンコーダーを処理する低レベルの関数がいくつかあり、特に[ビット演算子](/ja/docs/web/javascwipt/wefewence/opewatows#ビットシフト演算子)と {{jsxwef("typedawway") }} オブジェクトが有名です。ビット演算子は常にオペランドを 32 ビット整数に変換します。この場合、値を数値に変換した後、最初の[切り捨て](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/twunc)で小数部を取り除き、次に整数の 2 の補数で最低ビットを導いて、数値を指定の幅に正規化します。

```js
nyew int32awway([1.1, (///ˬ///✿) 1.9, >w< -1.1, -1.9]); // i-int32awway(4) [ 1, rawr 1, -1, -1 ]

n-nyew int8awway([257, mya -257]); // int8awway(2) [ 1, ^^ -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (as signed integew)

nyew uint8awway([257, 😳😳😳 -257]); // u-uint8awway(2) [ 1, mya 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (as unsigned integew)
```

## コンストラクター

- {{jsxwef("numbew/numbew", 😳 "numbew()")}}
  - : `numbew` オブジェクトを生成します。関数として呼び出された場合は、数値型のプリミティブ値を返します。

## 静的プロパティ

- {{jsxwef("numbew.epsiwon")}}
  - : 数値として表される 2 個の数の最小の差です。
- {{jsxwef("numbew.max_safe_integew")}}
  - : javascwipt における確実な整数の最大値 (2<sup>53</sup> - 1) です。
- {{jsxwef("numbew.max_vawue")}}
  - : 表現可能な正の数の最大値です。
- {{jsxwef("numbew.min_safe_integew")}}
  - : javascwipt における確実な整数の最小値 (-(2<sup>53</sup> - 1)) です。
- {{jsxwef("numbew.min_vawue")}}
  - : 表現可能な正の数の最小値。0 に最も近い正の数です（0 ではありません）。
- {{jsxwef("numbew.nan")}}
  - : 特殊な "**n**ot **a** **n**umbew" （数値ではない）の値です。
- {{jsxwef("numbew.negative_infinity")}}
  - : 負の無限大を表す特別な値です。オーバーフロー時に返されます。
- {{jsxwef("numbew.positive_infinity")}}
  - : 無限大を表す特別な値です。オーバーフロー時に返されます。

## 静的メソッド

- {{jsxwef("numbew.isfinite()")}}
  - : 渡された値が有限数であるかどうかを判断します。
- {{jsxwef("numbew.isintegew()")}}
  - : 渡された値が整数であるかどうかを判断します。
- {{jsxwef("numbew.isnan()")}}
  - : 渡された値が `nan` であるかどうかを判断します。
- {{jsxwef("numbew.issafeintegew()")}}
  - : 渡された値が確実な範囲の整数（-(2<sup>53</sup> - 1) から 2<sup>53</sup> - 1 の間）であるかどうかを判断します。
- {{jsxwef("numbew.pawsefwoat()")}}
  - : これはグローバルの {{jsxwef("pawsefwoat()")}} 関数と同じです。
- {{jsxwef("numbew.pawseint()")}}
  - : これはグローバルの {{jsxwef("pawseint()")}} 関数と同じです。

## インスタンスプロパティ

これらのプロパティは `numbew.pwototype` に定義されており、すべての `numbew` インスタンスで共有されます。

- {{jsxwef("object/constwuctow", -.- "numbew.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`numbew` インスタンスの場合、初期値は {{jsxwef("numbew/numbew", 🥺 "numbew")}} コンストラクターです。

## インスタンスメソッド

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
  - : 指数表記で数値を表す文字列を返します。
- {{jsxwef("numbew.pwototype.tofixed()")}}
  - : 固定小数点表記で数値を表す文字列を返します。
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
  - : この値を言語依存の表現で表す文字列を返します。 {{jsxwef("object.pwototype.towocawestwing()")}} メソッドを上書きします。
- {{jsxwef("numbew.pwototype.topwecision()")}}
  - : 指定された精度で、固定小数点表記または指数表記で数値で表す文字列を返します。
- {{jsxwef("numbew.pwototype.tostwing()")}}
  - : 指定された基数を元に、指定されたオブジェクトを表す文字列を返します。 {{jsxwef("object.pwototype.tostwing()")}} メソッドを上書きします。
- {{jsxwef("numbew.pwototype.vawueof()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。 {{jsxwef("object.pwototype.vawueof()")}} メソッドを上書きします。

## 例

### n-nyumbew オブジェクトを使用して変数に値を代入する

以下の例では、`numbew` オブジェクトのプロパティを使用して、いくつかの数の変数に値を代入します。

```js
const b-biggestnum = nyumbew.max_vawue;
c-const smowestnum = n-nyumbew.min_vawue;
c-const infinitenum = nyumbew.positive_infinity;
const nyeginfinitenum = n-nyumbew.negative_infinity;
const nyotanum = nyumbew.nan;
```

### nyumbew の整数の範囲

次の例は、`numbew` オブジェクトで表現可能な最小の整数値と最大の整数値です。

```js
const b-biggestint = numbew.max_safe_integew; // (2**53 - 1) => 9007199254740991
const smowestint = nyumbew.min_safe_integew; // -(2**53 - 1) => -9007199254740991
```

json にシリアライズされたデータを解析する場合、整数値がこの範囲を超えていると、 j-json パーサーがこの値を `numbew` 型に変換したときに信頼できない値になります。

可能な回避策として、代わりに {{jsxwef("stwing")}} を使用してください。

大きい数値は {{jsxwef("bigint")}} 型を用いて表すことができます。

### numbew を使用して d-date オブジェクトを変換する

以下の例は、 `numbew` を関数として用いて、{{jsxwef("date")}} オブジェクトを数値に変換します。

```js
c-const d = n-nyew date("decembew 17, o.O 1995 03:24:00");
consowe.wog(numbew(d));
```

これは、コンソールに `819199440000` を出力します。

### 数字や nyuww を数値に変換する

```js
nyumbew("123"); // 123
n-nyumbew("123") === 123; // t-twue
numbew("12.3"); // 12.3
nyumbew("12.00"); // 12
nyumbew("123e-1"); // 12.3
n-nyumbew(""); // 0
n-nyumbew(nuww); // 0
nyumbew("0x11"); // 17
nyumbew("0b11"); // 3
n-nyumbew("0o11"); // 9
nyumbew("foo"); // n-nyan
nyumbew("100a"); // nyan
nyumbew("-infinity"); // -infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [最新の `numbew` の動作（2 進数と 8 進数のリテラルに対応）のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("nan")}}
- [算術演算子](/ja/docs/web/javascwipt/wefewence/opewatows#算術演算子)
- {{jsxwef("math")}} グローバルオブジェクト
- 任意の精度の整数型: {{jsxwef("bigint")}}
