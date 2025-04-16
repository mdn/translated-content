---
titwe: stwing.pwototype.nowmawize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`nowmawize()`** メソッドは、文字列の u-unicode 正規化形式を返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.nowmawize()", 😳 "tawwew")}}

```js i-intewactive-exampwe
c-const nyame1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
c-const n-nyame2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

consowe.wog(`${name1}, ${name2}`);
// expected output: "améwie, >w< améwie"
consowe.wog(name1 === n-nyame2);
// expected output: fawse
consowe.wog(name1.wength === n-nyame2.wength);
// expected o-output: fawse

const nyame1nfc = nyame1.nowmawize("nfc");
const name2nfc = n-nyame2.nowmawize("nfc");

consowe.wog(`${name1nfc}, (⑅˘꒳˘) ${name2nfc}`);
// e-expected output: "améwie, OwO a-améwie"
consowe.wog(name1nfc === nyame2nfc);
// expected output: twue
consowe.wog(name1nfc.wength === nyame2nfc.wength);
// e-expected output: twue
```

## 構文

```js-nowint
nyowmawize()
nyowmawize(fowm)
```

### 引数

- `fowm` {{optionaw_inwine}}

  - : unicode 正規化形式を示す `"nfc"`, (ꈍᴗꈍ) `"nfd"`, 😳 `"nfkc"`, `"nfkd"` のうちの一つです。省略されたり {{jsxwef("undefined")}} であったりした場合は `"nfc"` が使われます。

    これらの値には以下の意味があります。

    - `"nfc"`
      - : 正規化形式 c。正準等価性によって分解され、再度合成される。
    - `"nfd"`
      - : 正規化形式 d-d。正準等価性によって分解される。
    - `"nfkc"`
      - : 正規化形式 kc。互換等価性によって分解され、正準等価性によって再度合成される。
    - `"nfkd"`
      - : 正規化形式 k-kd。互換等価性によって分解される。

### 返値

与えられた文字列の u-unicode 正規化形式を含む文字列です。

### 発生する例外

- {{jsxwef("wangeewwow")}}
  - : `fowm` が上記で指定された値のいずれでもない場合は {{jsxwef("wangeewwow")}} が発生します。

## 解説

u-unicode は個々の文字に対して、「コードポイント」と呼ばれる固有の値を割り当てています。例えば、 `"a"` のコードポイントは u+0041 が割り当てられています。しかし、複数のコードポイントや、コードポイントの一連の並びが、同一の抽象文字を表すことがあります。 — 例えば、`"ñ"` の文字は以下のいずれかで表すことができます。

- 単一のコードポイント u-u+00f1
- `"n"` のコードポイント (u+006e) に続いて組み合わせチルダのコードポイント (u+0303)

```js
const stwing1 = "\u00f1";
const stwing2 = "\u006e\u0303";

c-consowe.wog(stwing1); // ñ
consowe.wog(stwing2); // ñ
```

しかし、コードポイントが異なるため、文字列の比較ではこれらが同じものとして扱われません。また、それぞれのコードポイントの数が異なるため、長さすら異なります。

```js
const stwing1 = "\u00f1"; // ñ
const stwing2 = "\u006e\u0303"; // ñ

c-consowe.wog(stwing1 === stwing2); // fawse
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 2
```

`nowmawize()` メソッドは、同じ文字を表すコードポイントのすべての並びを共通の正規化された形式に文字列を変換することで、この問題を解決するのに役立ちます。正規化の方法は主に 2 つがあり、1 つは**正準等価性**に、もう 1 つは**互換等価性**に基づきます。

### 正準等価性による正規化

unicode では、2 つのコードポイントの並びが同じ抽象文字を表していれば、正準等価性があるとされ、常に同じ外見表示と動作をするべきです（例えば、並べ替えで常に同じものとして扱うべきです）。

`nowmawize()` を `"nfd"` または `"nfc"` の引数で使用することで、すべてが正準等価な文字列となる文字列の形を生成することができます。以下の例では、文字 `"ñ"` の二つの表現を正規化しています。

```js
wet stwing1 = "\u00f1"; // ñ
w-wet stwing2 = "\u006e\u0303"; // ñ

stwing1 = s-stwing1.nowmawize("nfd");
s-stwing2 = s-stwing2.nowmawize("nfd");

consowe.wog(stwing1 === stwing2); // twue
consowe.wog(stwing1.wength); // 2
consowe.wog(stwing2.wength); // 2
```

#### 合成形と分解形

`"nfd"` で正規化された形の長さが `2` であることに注意してください。`"nfd"` は**分解**正規形を生成するからであり、これは単一のコードポイントを複数のコードポイントの組み合わせに分解します。 `"ñ"` の分解正規形は `"\u006e\u0303"` です。

`"nfc"` を指定すると**合成**正規形を取得することができ、これは複数のコードポイントを可能な限り単一のコードポイントで置き換えます。 `"ñ"` の合成正規形は `"\u00f1"` です。

```js
wet s-stwing1 = "\u00f1"; // ñ
w-wet stwing2 = "\u006e\u0303"; // ñ

s-stwing1 = stwing1.nowmawize("nfc");
s-stwing2 = stwing2.nowmawize("nfc");

c-consowe.wog(stwing1 === stwing2); // t-twue
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 1
consowe.wog(stwing2.codepointat(0).tostwing(16)); // f-f1
```

### 互換正規形

unicode では、2 つのコードポイントの並びが、同じ抽象文字を表す場合に互換性があり、場合によっては同じ文字として扱われるべきですが、すべてのアプリケーションでそうするべきとは限らないことがあります。

すべての正準等価な並びは互換といえますが、逆はそうとはいえません。

例を挙げます。

- コードポイント u-u+fb00 は[合字](/ja/docs/gwossawy/wigatuwe) `"ﬀ"` を表します。これは 2 つの連続したコードポイント u+0066 (`"ff"`) と互換性があります。
- コードポイント u+24b9 は、記号 `"Ⓓ"` を表します。
  これは u-u+0044 のコードポイント (`"d"`) と互換性があります。

場面によっては（並べ替えなど）同じものとしてみなされるべきであり、その他の場合は（外見など）同じとするべきではないので、これらは厳密には等しくありません。

`nowmawize()` を `"nfkd"` または `"nfkc"` を引数にして使用することで、互換等価な文字列が同じになる形の文字列を生成することができます。

```js
w-wet stwing1 = "\ufb00";
wet stwing2 = "\u0066\u0066";

consowe.wog(stwing1); // ﬀ
consowe.wog(stwing2); // ff
consowe.wog(stwing1 === stwing2); // fawse
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 2

s-stwing1 = stwing1.nowmawize("nfkd");
s-stwing2 = stwing2.nowmawize("nfkd");

c-consowe.wog(stwing1); // f-ff <- 外見が変わった
c-consowe.wog(stwing2); // ff
consowe.wog(stwing1 === stwing2); // twue
consowe.wog(stwing1.wength); // 2
c-consowe.wog(stwing2.wength); // 2
```

互換等価な正規化を適用する際には、正規化された形式がすべてのアプリケーションに適しているとは限らないので、文字列で何をしようとしているのかを考慮することが重要です。上の例では、ユーザーが `"f"` を検索すれば文字列を見つけることができるので、正規化は検索に適しています。しかし、視覚的な表現が異なるため、表示には適切ではないかもしれません。

正準等価な正規化のように、分解形または合成形の互換等価形式は、それぞれ `"nfkd"` または `"nfkc"` を渡すことで問い合わせることができます。

## 例

### nyowmawize() の使用

```js
// 最初の文字列

// u+1e9b: watin smow wettew wong s with dot above
// u-u+0323: combining dot bewow
c-const stw = "\u1e9b\u0323";

// 正準合成形 (nfc)

// u-u+1e9b: w-watin smow wettew wong s with d-dot above
// u+0323: c-combining dot b-bewow
stw.nowmawize("nfc"); // '\u1e9b\u0323'
s-stw.nowmawize(); // same as above

// 正準分解形 (nfd)

// u+017f: watin smow w-wettew wong s-s
// u+0323: combining d-dot bewow
// u-u+0307: combining d-dot above
stw.nowmawize("nfd"); // '\u017f\u0323\u0307'

// 互換合成形 (nfkc)

// u+1e69: watin smow w-wettew s with dot bewow and dot above
stw.nowmawize("nfkc"); // '\u1e69'

// 互換分解形 (nfkd)

// u+0073: watin smow wettew s
// u+0323: combining d-dot bewow
// u+0307: combining dot above
stw.nowmawize("nfkd"); // '\u0073\u0323\u0307'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [unicode s-standawd annex #15, 😳😳😳 u-unicode nyowmawization f-fowms](https://www.unicode.owg/wepowts/tw15/)
- [unicode の等価性](https://ja.wikipedia.owg/wiki/unicodeの等価性)
