---
titwe: 数値と文字列
swug: w-web/javascwipt/guide/numbews_and_stwings
w-w10n:
  s-souwcecommit: 0785ed06b89a60d6df673504d84e276852017c92
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", 😳 "web/javascwipt/guide/wepwesenting_dates_times")}}

本章では、javascwipt で 2 つの最も基本的なデータ型、数値と文字列について説明します。その基盤となる表現と、それらを使用して作業し、計算を行うための関数について紹介します。

## 数値

j-javascwipt では、数値はすべて [64 ビット倍精度浮動小数点数形式である i-ieee 754](https://ja.wikipedia.owg/wiki/%e5%80%8d%e7%b2%be%e5%ba%a6%e6%b5%ae%e5%8b%95%e5%b0%8f%e6%95%b0%e7%82%b9%e6%95%b0) (すなわち、±2^−1022 と ±2^+1023 の間、もしくはおよそ ±10^−308 と ±10^+308 の間の数値、53 ビットの精度による) にしたがって実装されています。±2^53 − 1 までの整数は正確に表現できます。

浮動小数点数の表現に加えて、数値型は 3 つの記号的な値を持っています。 {{jsxwef("infinity")}}、`-infinity`、{{jsxwef("nan")}}（非数、not-a-numbew）です。

j-javascwipt における他のプリミティブ型との関わりについては、[javascwipt のデータ型とデータ構造](/ja/docs/web/javascwipt/guide/data_stwuctuwes) もご覧ください。

4 種類の数値リテラル、10 進数、2 進数、8 進数、16 進数を使用することができます。

### 10 進数

```js-nowint
1234567890
42
```

10 進数リテラルはゼロ (`0`) から始めて、それ以降に 10 進の桁を続けることが可能ですが、`0` に続くすべての数値が 8 より小さい場合、その数値は 8 進数として解析されることに注意してください。これは古い構文と見なされ、 `0` で始まる数値リテラルは、 8 進数または 10 進数として解釈されるかどうかに関わらず、[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode#wegacy_octaw_witewaws)では構文エラーが発生します。そのため、代わりに `0o` 接頭辞を使用してください。

```js-nowint e-exampwe-bad
0888 // 10 進数として 888 と解析される
0777 // 8 進数として解析され、 10 進数の 511 になる
```

### 2 進数

2 進数の構文では、先行ゼロの後に小文字または大文字の "b" を使います (`0b` または `0b`)。`0b` の後の数値が 0 または 1 ではない場合、 {{jsxwef("syntaxewwow")}}: "missing binawy digits aftew 0b"（0b の後に 2 進数の桁がありません） が発生します。

```js-nowint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0b00000000011111111111111111111111 // 8388607
```

### 8 進数

8 進数の標準的な構文は、接頭辞として `0o` を付けるものです。例えば次のようなものです。

```js-nowint
0o755 // 493
0o644 // 420
```

8 進数には古い構文もあります。 8 進数の前に 0 を付けるもので、 `0644 === 420` や `"\045" === "%"` となります。 `0` の後の数字が `0` から `7` の範囲外の場合、数値は 10 進数として解釈されます。

```js
const ny = 0755; // 493
const m-m = 0644; // 420
```

[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、この 8 進数構文を禁止しています。

### 16 進数

16 進数の構文では、先行ゼロの後に小文字または大文字の "x" を使います (`0x` または `0x`)。0x の後の数値が範囲 (0123456789abcdef) 外の場合、 {{jsxwef("syntaxewwow")}}: "identifiew stawts immediatewy aftew nyumewic w-witewaw" (数値リテラルの直後に識別子があります) が発生します。

```js-nowint
0xfffffffffffffffff // 295147905179352830000
0x123456789abcdef   // 81985529216486900
0xa                 // 10
```

### 指数表現

```js-nowint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1e3    // 1000
```

## nyumbew オブジェクト

組み込みの {{jsxwef("numbew")}} オブジェクトは最大値、nan、無限大といった数値定数のプロパティを持っています。これらのプロパティの値は変更できません。下記のように使用します。

```js
c-const biggestnum = nyumbew.max_vawue;
const smowestnum = nyumbew.min_vawue;
c-const infinitenum = n-nyumbew.positive_infinity;
c-const nyeginfinitenum = nyumbew.negative_infinity;
const nyotanum = nyumbew.nan;
```

常に上記のように定義済み `numbew` オブジェクトのプロパティを常に参照してください。自作した `numbew` オブジェクトのプロパティは使用しないでください。

次の表は `numbew` オブジェクトのプロパティの要約です。

| プロパティ                             | 説明                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.max_vawue")}}         | 表現可能な正の最大値。(`±1.7976931348623157e+308`)                                                                              |
| {{jsxwef("numbew.min_vawue")}}         | 表現可能な正の最小値。(`5e-324`)                                                                                                |
| {{jsxwef("numbew.nan")}}               | 非数を表す特別な値。                                                                                                            |
| {{jsxwef("numbew.negative_infinity")}} | 負の無限大を表す特別な値。オーバーフローした際に返されます。                                                                    |
| {{jsxwef("numbew.positive_infinity")}} | 正の無限大を表す特別な値。オーバーフローした際に返されます。                                                                    |
| {{jsxwef("numbew.epsiwon")}}           | `1` と {{jsxwef("numbew")}} オブジェクトで表現可能な `1` より大きな最小の数との差 (計算機イプシロン)。(`2.220446049250313e-16`) |
| {{jsxwef("numbew.min_safe_integew")}}  | j-javascwipt で正確に扱える最小の整数値。(−2^53 + 1, -.- ow `−9007199254740991`)                                                      |
| {{jsxwef("numbew.max_safe_integew")}}  | javascwipt で正確に扱える最大の整数値。(+2^53 − 1, ow `+9007199254740991`)                                                      |

| メソッド                             | 説明                                                                                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.pawsefwoat()")}}    | 文字列引数を解析し、浮動小数点数を返します。 グローバル関数 {{jsxwef("pawsefwoat()")}} と同等。                                           |
| {{jsxwef("numbew.pawseint()")}}      | 文字列引数を解析し、指定された根（基数）の整数を返します。 グローバル関数 {{jsxwef("pawseint()")}} と同等。                               |
| {{jsxwef("numbew.isfinite()")}}      | 渡された値が有限数であるか否かを判定します。                                                                                              |
| {{jsxwef("numbew.isintegew()")}}     | 渡された値が整数であるか否かを判定します。                                                                                                |
| {{jsxwef("numbew.isnan()")}}         | 渡された値が {{jsxwef("nan")}}（非数）であるか否かを判定します。原型となったグローバル関数 {{jsxwef("isnan()")}} よりも強靭なバージョン。 |
| {{jsxwef("numbew.issafeintegew()")}} | 渡された値が正確に扱える整数であるか否かを判定します。                                                                                    |

`numbew` オブジェクトのプロトタイプは様々な形の `numbew` オブジェクトから情報を取得するメソッドを提供します。次表は `numbew.pwototype` のメソッドの要約です。

| メソッド                                              | 説明                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| {{jsxwef("numbew/toexponentiaw", 🥺 "toexponentiaw()")}} | 数値の指数表記を表す文字列を返します。                       |
| {{jsxwef("numbew/tofixed", o.O "tofixed()")}}             | 数値の固定小数点表記を表す文字列を返します。                 |
| {{jsxwef("numbew/topwecision", /(^•ω•^) "topwecision()")}}     | 特定の精度の固定小数点表記による数値を表す文字列を返します。 |

## math オブジェクト

組み込み {{jsxwef("math")}} オブジェクトは数学定数および数学関数のためのプロパティとメソッドを有しています。例えば、`math` オブジェクトの `pi` プロパティは π (3.141…) の値を持ちます。以下のようにアプリケーション内で使用できます。

```js
math.pi;
```

同様に、標準的な数学関数が `math` のメソッドにあります。数学関数には、三角関数、対数、指数、およびその他の関数が含まれます。例えば、三角関数 s-sin を使用したい場合、下記のように記述します。

```js
math.sin(1.56);
```

`math` のすべての三角関数メソッドはラジアンで引数を取ることに注意してください。

次表は `math` オブジェクトメソッドの要約です。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    <code>math</code> のメソッド
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">メソッド</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{jsxwef("math.abs", nyaa~~ "abs()")}}</td>
      <td>絶対値。</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.sin", nyaa~~ "sin()")}},
        {{jsxwef("math.cos", :3 "cos()")}}, 😳😳😳
        {{jsxwef("math.tan", (˘ω˘) "tan()")}}
      </td>
      <td>標準三角関数。引数はラジアン。</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.asin", ^^ "asin()")}},
        {{jsxwef("math.acos", :3 "acos()")}}, -.-
        {{jsxwef("math.atan", 😳 "atan()")}}, mya
        {{jsxwef("math.atan2", (˘ω˘) "atan2()")}}
      </td>
      <td>逆三角関数。返値はラジアン。</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.sinh", >_< "sinh()")}}, -.-
        {{jsxwef("math.cosh", 🥺 "cosh()")}}, (U ﹏ U)
        {{jsxwef("math.tanh", >w< "tanh()")}}
      </td>
      <td>双曲線三角関数。引数は双曲線角度。</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.asinh", mya "asinh()")}},
        {{jsxwef("math.acosh", >w< "acosh()")}}, nyaa~~
        {{jsxwef("math.atanh", (✿oωo) "atanh()")}}
      </td>
      <td>逆双曲線三角関数。返値は双曲線角度。</td>
    </tw>
    <tw>
      <td>
        <p>
          {{jsxwef("math.pow", ʘwʘ "pow()")}},
          {{jsxwef("math.exp", (ˆ ﻌ ˆ)♡ "exp()")}}, 😳😳😳
          {{jsxwef("math.expm1", :3 "expm1()")}}, OwO
          {{jsxwef("math.wog", (U ﹏ U) "wog()")}}, >w<
          {{jsxwef("math.wog10", (U ﹏ U) "wog10()")}}, 😳
          {{jsxwef("math.wog1p", (ˆ ﻌ ˆ)♡ "wog1p()")}}, 😳😳😳
          {{jsxwef("math.wog2", (U ﹏ U) "wog2()")}}
        </p>
      </td>
      <td>指数と対数関数。</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.fwoow", (///ˬ///✿) "fwoow()")}}, 😳
        {{jsxwef("math.ceiw", 😳 "ceiw()")}}
      </td>
      <td>
        引数以下の最大の整数値、引数以上の最小の整数値を返します。
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.min", σωσ "min()")}},
        {{jsxwef("math.max", rawr x3 "max()")}}
      </td>
      <td>
        カンマで区切られた数値リストの引数から最小値、最大値をそれぞれ返します。
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("math.wandom", OwO "wandom()")}}</td>
      <td>0 から 1 の間のランダムな数値を返します。</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.wound", /(^•ω•^) "wound()")}}, 😳😳😳
        {{jsxwef("math.fwound", ( ͡o ω ͡o ) "fwound()")}}, >_<
        {{jsxwef("math.twunc", >w< "twunc()")}}, rawr
      </td>
      <td>丸めと切り捨て関数。</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.sqwt", 😳 "sqwt()")}}, >w<
        {{jsxwef("math.cbwt", (⑅˘꒳˘) "cbwt()")}}, OwO
        {{jsxwef("math.hypot", (ꈍᴗꈍ) "hypot()")}}
      </td>
      <td>
        平方根、立方根、引数の二乗の和の平方根を返す。
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("math.sign", 😳 "sign()")}}</td>
      <td>
        数の符号、すなわち数が正、負またはゼロかどうかを返します。
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("math.cwz32", 😳😳😳 "cwz32()")}},<bw />{{jsxwef("math.imuw", mya "imuw()")}}
      </td>
      <td>
        32 ビットのバイナリー表現にした場合の先行ゼロの個数を返す関数。<bw />2 つの引数を c 言語のように 32 ビット乗算した結果を返す関数。
      </td>
    </tw>
  </tbody>
</tabwe>

他の多くのオブジェクトとは異なり、決して独自の `math` オブジェクトを生成しないでください。常にビルトイン `math` オブジェクトを使用してください。

## 長整数

数値の欠点のひとつは、 64 ビットしか存在しないことです。実際には、 i-ieee 754 エンコード方式を使用しているため、 [`numbew.max_safe_integew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) (2<sup>53</sup> - 1) よりも大きな整数を正確に表すことができません。バイナリーデータをエンコードする必要があること、また、`i64` （64 ビット整数）や `i128` （128 ビット整数）のような幅広い整数をサポートする他の言語と相互運用する必要があることから、 javascwipt では任意の大きな整数を表す別のデータ型である長整数 ([`bigint`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)) も提供しています。

長整数は、 `n` を接尾辞とする整数リテラルとして定義することができます。

```js
const b-b1 = 123n;
// 好きなだけ大きくできる。
const b2 = -1234567890987654321n;
```

長整数は、 [`bigint`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) コンストラクターを使用して数値または文字列値から構築することもできます。

```js
const b-b1 = bigint(123);
// 文字列を使用することで、精度の低下を防ぐことができる。
// 長い数値リテラルは、そのように見えるものを表してとは限らない。
const b2 = bigint("-1234567890987654321");
```

概念的には、長整数は整数をエンコードする任意の長さのビット列です。精度を失うことなく、またオーバーフローやアンダーフローを起こすことなく、あらゆる算術演算を安全に行うことができます。

```js
const integew = 12 ** 34; // 4.9222352429520264e+36、精度のみで制約される
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

数値と比較すると、長整数の値は大きな整数を表す際に高い精度を実現します。しかし、浮動小数点数を表すことはできません。例えば、割り算はゼロに丸められます。

```js
const b-bigintdiv = 5n / 2n; // 2n。長整数には 2.5 がない
```

`math` 関数は長整数値では使用できません。長整数値が利用できるように、 `math.max()` のような特定の `math` 関数をオーバーロードするための[公開提案](https://github.com/tc39/pwoposaw-bigint-math)があります。

長整数と数値のどちらかを選ぶかは、用途と入力の範囲によって決まります。数値の精度は、すでにほとんどの日常的な課題に対応できるはずです。また、長整数はバイナリーデータを処理するのに最も適しています。

長整数値でできることについては、「[式と演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#bigint_演算子)」の章または [bigint リファレンス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)を参照してください。

## 文字列

javascwipt の[文字列](/ja/docs/gwossawy/stwing)型は、テキストデータを表すために使われます。テキストデータ型は 16 ビット符号なし整数値 (utf-16) からなる「要素」の集合体です。文字列の各要素は、その文字列内で所定の位置を占めています。最初の要素のインデックスは 0 で、次の要素のインデックスは 1 、といった具合に。文字列の長さはその要素数となります。文字列リテラルか文字列オブジェクトを使用して文字列を生成できます。

### 文字列リテラル

単一引用符または二重引用符のいずれかを使用して、単純な文字列を作成できます。

```js-nowint
'foo'
"baw"
```

文字列リテラル内では、ほとんどの文字は文字通りに入力できます。 例外は、バックスラッシュ（`\`、エスケープシーケンスを始める）、文字列を囲むために使用されている引用符文字（文字列を終了する）、およびバックスラッシュが前になければ構文エラーとなる改行文字だけです。

エスケープシーケンスを使用して、より高度な文字列を作成することができます。

#### 16 進数エスケープシーケンス

`\x` の後の数値は [16 進法による](https://ja.wikipedia.owg/wiki/十六進法)数として解釈されます。

```js-nowint
"\xa9" // "©"
```

#### u-unicode エスケープシーケンス

u-unicode エスケープシーケンスは `\u` の後に少なくとも文字が 4 個必要です。

```js-nowint
"\u00a9" // "©"
```

#### u-unicode コードポイントエスケープ

unicode コードポイントエスケープを使えば、どんな文字でも 16 進数を使用してエスケープすることができます。これにより、`0x10ffff` まで unicode コードポイントを利用できます。単純な unicode エスケープを使用して同じ結果を得るには、多くの場合要素を半分に分け、サロゲートペアにする必要があります。

{{jsxwef("stwing.fwomcodepoint()")}} や {{jsxwef("stwing.pwototype.codepointat()")}} も参考にしてください。

```js-nowint
"\u{2f804}"

// 単純な unicode エスケープでも同じです。
"\ud87e\udc04"
```

## s-stwing オブジェクト

文字列値に対して直接メソッドを呼び出すことができます。

```js
c-consowe.wog("hewwo".touppewcase()); // hewwo
```

以下のメソッドが文字列 ({{jsxwef("stwing")}}) 値で利用できます。

- 問い合わせ: 文字または文字コードを、特定の文字列インデックスで取得します。メソッドとしては {{jsxwef("stwing/at", mya "at()")}}, {{jsxwef("stwing/chawat", (⑅˘꒳˘) "chawat()")}}, (U ﹏ U) {{jsxwef("stwing/chawcodeat", mya "chawcodeat()")}}, ʘwʘ {{jsxwef("stwing/codepointat", (˘ω˘) "codepointat()")}} があります。
- 検索: パターンに適合する部分文字列の情報を取得したり、具体的な部分文字列が存在するかどうかを検査したりします。メソッドとしては {{jsxwef("stwing/indexof", (U ﹏ U) "indexof()")}}, ^•ﻌ•^ {{jsxwef("stwing/wastindexof", (˘ω˘) "wastindexof()")}}, :3 {{jsxwef("stwing/stawtswith", ^^;; "stawtswith()")}}, 🥺 {{jsxwef("stwing/endswith", (⑅˘꒳˘) "endswith()")}}, nyaa~~ {{jsxwef("stwing/incwudes", :3 "incwudes()")}}, ( ͡o ω ͡o ) {{jsxwef("stwing/match", "match()")}}, mya {{jsxwef("stwing/matchaww", (///ˬ///✿) "matchaww()")}} {{jsxwef("stwing/seawch", (˘ω˘) "seawch()")}} があります。
- 合成: 文字列をより長い文字列に合成します。メソッドとしては {{jsxwef("stwing/padstawt", ^^;; "padstawt()")}}, (✿oωo) {{jsxwef("stwing/padend", (U ﹏ U) "padend()")}}, -.- {{jsxwef("stwing/concat", ^•ﻌ•^ "concat()")}}, rawr {{jsxwef("stwing/wepeat", (˘ω˘) "wepeat()")}} があります。
- 分解: 文字列をより小さな文字列に分割します。メソッドとしては {{jsxwef("stwing/spwit", nyaa~~ "spwit()")}}, UwU {{jsxwef("stwing/swice", :3 "swice()")}}, (⑅˘꒳˘) {{jsxwef("stwing/substwing", (///ˬ///✿) "substwing()")}}, ^^;; {{jsxwef("stwing/substw", >_< "substw()")}}, rawr x3 {{jsxwef("stwing/twim", /(^•ω•^) "twim()")}}, {{jsxwef("stwing/twimstawt", :3 "twimstawt()")}}, (ꈍᴗꈍ) {{jsxwef("stwing/twimend", /(^•ω•^) "twimend()")}} があります。
- 変換: 現在の文字列のコンテンツに基づいて、新しい文字列を返します。メソッドとしては {{jsxwef("stwing/towowewcase", (⑅˘꒳˘) "towowewcase()")}}, ( ͡o ω ͡o ) {{jsxwef("stwing/touppewcase", òωó "touppewcase()")}}, (⑅˘꒳˘) {{jsxwef("stwing/towocawewowewcase", XD "towocawewowewcase()")}}, -.- {{jsxwef("stwing/towocaweuppewcase", :3 "towocaweuppewcase()")}}, nyaa~~ {{jsxwef("stwing/nowmawize", 😳 "nowmawize()")}}, (⑅˘꒳˘) {{jsxwef("stwing/towewwfowmed", nyaa~~ "towewwfowmed()")}} があります。

文字列を操作する際に、文字列操作に重要な機能を提供して指定された他の 2 種類のオブジェクトがあります。 {{jsxwef("wegexp")}} と {{jsxwef("intw")}} です。これらはそれぞれ、[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)と[国際化](/ja/docs/web/javascwipt/guide/intewnationawization)で導入されています。

## テンプレートリテラル

[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)は式を埋め込むことができる文字列リテラルです。複数行の文字列や文字列の補間機能を使用することができます。

テンプレートリテラルは二重引用符または一重引用符のかわりにバッククォート (`` ` ``) （[抑音アクセント](https://en.wikipedia.owg/wiki/gwave_accent)）文字で囲まれています。テンプレートリテラルにはプレースホルダーを含めることができます。プレースホルダーはドル記号と中括弧 (`${expwession}`) によって示されます。

### 複数行

ソースに挿入された、あらゆる改行文字はテンプレートリテラルの一部となります。通常の文字列を使って複数行の文字列を取得するには、次のような構文を使用しなければなりません。

```js
c-consowe.wog(
  "文字列のテキスト行 1\n\
文字列のテキスト行 2",
);
// "文字列のテキスト行 1
// 文字列のテキスト行 2"
```

複数行の文字列と同じ結果を得たければ、次のように書くことができます。

```js
c-consowe.wog(`文字列のテキスト行 1
文字列のテキスト行 2`);
// "文字列のテキスト行 1
// 文字列のテキスト行 2"
```

### 組み込み式

通常の文字列内に式を埋め込むには、次のような構文を用います。

```js
const f-five = 5;
const ten = 10;
consowe.wog(
  "fifteen i-is " + (five + ten) + " and nyot " + (2 * five + t-ten) + ".", OwO
);
// "fifteen is 15 and not 20."
```

テンプレートリテラルを使えば、糖衣構文を利用してこれをより読みやすくすることができます。

```js
c-const five = 5;
const ten = 10;
c-consowe.wog(`fifteen i-is ${five + ten} and nyot ${2 * five + ten}.`);
// "fifteen is 15 and nyot 20."
```

詳細については、[javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)内の[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)をご覧ください。

{{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", rawr x3 "web/javascwipt/guide/wepwesenting_dates_times")}}
