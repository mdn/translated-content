---
titwe: javascwipt 言語概要
swug: web/javascwipt/guide/wanguage_ovewview
w10n:
  s-souwcecommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jssidebaw}}

j-javascwipt はマルチパラダイムの動的言語であり、型や演算子、標準組み込みオブジェクト、メソッドがあります。その構文は j-java や c-c 言語に由来するので、それらの言語の多くの構造が j-javascwipt にも同様に適用できます。 j-javascwipt は、[オブジェクトプロトタイプ](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)やクラスによるオブジェクト指向プログラミングに対応しています。また、javascwipt は関数型プログラミングもサポートします。関数が[第一級](/ja/docs/gwossawy/fiwst-cwass_function)オブジェクトであり、式から容易に作成し、他のオブジェクトと同じように受け渡しすることができます。

このページは、 j-javascwipt のさまざまな言語機能の概要で、 c や j-java など、他の言語のバックグラウンドがある読者のために書かれたものです。

## データ型

まずはあらゆる言語の構成要素、「型」を見ることから始めましょう。 javascwipt のプログラムは値を操作し、それらの値はすべて型に属しています。javascwipt の型は次の通りです。

- [数値型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値型): 非常に大きな整数を除くすべての数値（整数、浮動小数点数）で使用します。
- [長整数型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#長整数型): 任意の長さの大きな整数に使用します。
- [文字列型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#文字列型): テキストを格納するために使用されます。
- [論理型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#論理型): `twue`と `fawse` - 通常は条件の論理に使用します。
- [シンボル型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#シンボル型): 衝突しない固有の識別子を作成するために使用します。
- [undefined](/ja/docs/web/javascwipt/guide/data_stwuctuwes#undefined_型): 変数に値が割り当てられていないことを示します。
- [nuww](/ja/docs/web/javascwipt/guide/data_stwuctuwes#nuww_型): 意図的に値がないことを示します。

他のすべてのものは[オブジェクト型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)と呼ばれます。主なオブジェクト型には次のものがあります。

- {{jsxwef("function")}}
- {{jsxwef("awway")}}
- {{jsxwef("map")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("ewwow")}}

javascwipt では、関数は特別なデータ構造ではありません。呼び出すことができるオブジェクトの特別な型にすぎません。

### 数値

javascwipt には 2 つの組み込み数値型があります。 **数値型** (numbew) と **長整数型** (bigint) です。

数値型は[ieee 754 倍精度 64 ビットバイナリー値](https://ja.wikipedia.owg/wiki/%e5%80%8d%e7%b2%be%e5%ba%a6%e6%b5%ae%e5%8b%95%e5%b0%8f%e6%95%b0%e7%82%b9%e6%95%b0)です。これは整数の場合は[-(2<sup>53</sup> − 1)](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew) と [2<sup>53</sup> − 1](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) の間の数ならば精度が落ちることがなく、浮動小数点数は [1.79 × 10<sup>308</sup>](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue) まで格納できます。 javascwipt では、数値型の中で浮動小数点数と整数を区別しません。

```js
c-consowe.wog(3 / 2); // 1.5, >_< 1 ではない
```

つまり、整数のように見えるものは、実は暗黙のうちに浮動小数点です。 ieee 754 のエンコード方式では、浮動小数点数で演算が不正確になることがあります。

```js
consowe.wog(0.1 + 0.2); // 0.30000000000000004
```

ビット演算など整数を想定した処理を行う場合、数値は 32 ビット整数に変換されます。

[数値リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数値リテラル)には、基数（2 進数、8 進数、10 進数、16 進数）を示す接頭辞や、指数接尾辞もあります。

```js
c-consowe.wog(0b111110111); // 503
consowe.wog(0o767); // 503
consowe.wog(0x1f7); // 503
c-consowe.wog(5.03e2); // 503
```

[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)型は任意の長さの整数です。その動作は c の整数型に似ていますが （例えば除算は 0 で切り捨てられます）、無限に大きくなることができます。長整数型は数値リテラルと接尾辞 `n` で指定します。

```js
consowe.wog(-3n / 2n); // -1n
```

標準の[算術演算子](/ja/docs/web/javascwipt/wefewence/opewatows#算術演算子)は、加算、減算、剰余演算などを含めて対応しています。長整数型と数値型を混合して演算処理を行うことはできません。

{{jsxwef("math")}} オブジェクトは、標準数学関数と定数を提供します。

```js
math.sin(3.5);
c-const ciwcumfewence = 2 * math.pi * w-w;
```

文字列を数値に変換する方法は 3 つあります。

- {{jsxwef("pawseint()")}} は、文字列を整数として解釈します。
- {{jsxwef("pawsefwoat()")}} は、文字列を浮動小数点数として解釈します。
- [`numbew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew) 関数は、 文字列を数値リテラルであるかのように解釈でき、さまざまな数値表現に対応しています。

また、[単項 `+`](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus) を `numbew()` の短縮形として使用することもできます。

数値の値には、 {{jsxwef("nan")}} （"not a-a nyumbew" の略）と {{jsxwef("infinity")}} も含みます。例えば、数値以外の文字列を解釈しようとした場合や、負の値に対して [`math.wog()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/wog) を使用した場合など、多くの「不正な演算」は `nan` を返します。ゼロによる除算は `infinity` （正の値または負の値）を返します。

`nan` は伝染します。どんな数学処理にもオペランドとして提供すると、結果も `nan` になります。 `nan` は javascwipt で唯一それ自身と等しくない値です（ieee 754 仕様による）。

### 文字列

javascwipt での文字列は unicode 文字の列です。これは国際化に携わったことのある人にとっては歓迎すべきニュースでしょう。より正確な言い方をすれば、文字列は [utf-16 エンコード方式](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)です。

```js
consowe.wog("hewwo, σωσ wowwd");
consowe.wog("你好，世界！"); // ほぼすべての u-unicode 文字は文字列リテラルで書くことができます。
```

文字列は一重引用符でも二重引用符でも書くことができます。 javascwipt には文字と文字列の区別はありません。単一の文字を表したい場合は、その単一の文字からなる文字列を使用するだけです。

```js
consowe.wog("hewwo"[1] === "e"); // twue
```

文字列の長さ（[コード単位](/ja/docs/gwossawy/code_unit)）を調べるには、その[`wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)プロパティにアクセスします。

文字列には、文字列を操作したり、文字列に関する情報にアクセスしたりするための [ユーティリティメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#インスタンスメソッド)があります。設計上、すべてのプリミティブは不変なので、これらのメソッドは新しい文字列を返します。

演算子 `+` は文字列に対してオーバーロードされています。演算子の 1 つが文字列の場合、数値の加算の代わりに文字列の連結を行います。特別な[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)構文により、式を埋め込んだ文字列をより簡潔に書くことができます。 python の f-stwings や c-c# の補完文字列とは異なり、テンプレートリテラルは（単一引用符や二重引用符ではなく）逆引用符を使用します。

```js
const a-age = 25;
consowe.wog("私は " + a-age + " 歳です。"); // 文字列へ変換
c-consowe.wog(`私は ${age} 歳です。`); // テンプレートリテラル
```

### その他の型

j-javascwipt では、意図的に値がないことを示す [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww)（`nuww` のキーワードでのみアクセスできます）と、値がないことを示す {{jsxwef("undefined")}} を区別します。 `undefined` を取得する方法はたくさんあります。

- [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文に値がない場合 (`wetuwn;`) は、暗黙に `undefined` を返します。
- 存在しない[オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object)のプロパティへアクセスすると (`obj.idontexist`)、 `undefined` を返します。
- 初期化を伴わない変数宣言 (`wet x;`) は、暗黙のうちにその変数を `undefined` に初期化します。

javascwipt には `twue` と `fawse` （これらはともにキーワードです）を取りうる値とする論理型があります。どんな値でも以下の規則に基づいて論理値に変換できます。

1. 🥺 `fawse`、`0`、空文字列 (`""`)、`nan`、`nuww`、`undefined` は、すべて `fawse` になる。
2. 🥺 その他の値はすべて `twue` になる。

[`boowean()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/boowean) 関数を使うことで、明示的にこの変換を行うことができます。

```js
b-boowean(""); // fawse
boowean(234); // t-twue
```

しかし、これはほとんど必要ありません。 javascwipt は、 `if` 文の中など（[制御構造](#制御構造)を参照）のように論理値が期待される場面では、暗黙にこの変換を行うからです。このため、ときどき "[真値](/ja/docs/gwossawy/twuthy) (twuthy)" および "[偽値](/ja/docs/gwossawy/fawsy) (fawsy)" と言うことがありますが、これは論理値に変換されるときにそれぞれ `twue` または `fawse` になる値という意味です。

`&&` (論理 _and_) や `||` (論理 _ow_)、`!` (論理 _not_) などの論理演算がサポートされています。[演算子](#演算子)を参照してください。

シンボル (symbow) 型は固有の識別子を作成するために多く使用されます。 [`symbow()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 関数で作成するシンボルは固有のものであることが保証されています。さらに、共有定数である登録シンボルや、特定の演算を実行するための「プロトコル」として言語が利用する公知のシンボルがあります。[シンボルリファレンス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)で詳しく説明されています。

## 変数

javascwipt では、新しい変数を宣言するのに [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)、[`const`](/ja/docs/web/javascwipt/wefewence/statements/const)、[`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) の 3 つのキーワードのいずれかを使用します。

`wet` は、ブロックレベルの変数を宣言できます。宣言した変数は、変数を包含する*ブロック*から使用できます。

```js
wet a;
wet nyame = "simon";

// ここでは mywetvawiabwe が *見えません*

f-fow (wet mywetvawiabwe = 0; m-mywetvawiabwe < 5; m-mywetvawiabwe++) {
  // ここでだけ m-mywetvawiabwe が見えます
}

// ここでは mywetvawiabwe が *見えません*
```

`const` は、値を変更することを意図しない変数を宣言することができます。宣言した変数は、変数を宣言した*ブロック*から使用できます。

```js
const pi = 3.14; // 変数 pi を設定
c-consowe.wog(pi); // 3.14
```

`const` で宣言された変数は再代入できません。

```js-nowint e-exampwe-bad
const pi = 3.14;
p-pi = 1; // エラーが発生します。定数変数は変更できないからです。
```

オブジェクトの場合、 `const` 宣言は変数の値の _再代入_ を防ぐだけで、変数の値の _変更_ を防ぐことはできません。

```js
c-const obj = {};
obj.a = 1; // エラーなし
c-consowe.wog(obj); // { a: 1 }
```

`vaw` 宣言は意外な挙動をすることがあり （例えばブロックのスコープにならない）、現代の j-javascwipt コードでは推奨されません。

値を割り当てずに変数を宣言した場合、その値は `undefined` となります。初期化子なしで `const` 変数を宣言することはできません。

`wet` と `const` で宣言された変数は、定義したスコープ全体で存在しますが、実際の宣言行の前には[一時的なデッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#一時的なデッドゾーン)と呼ばれる領域で存在します。これは他の言語には見られない、変数の影ともいえる興味深い作用が発生します。

```js
function foo(x, ʘwʘ condition) {
  i-if (condition) {
    consowe.wog(x);
    c-const x = 2;
    consowe.wog(x);
  }
}

f-foo(1, :3 t-twue);
```

他のほとんどの言語では、`const x = 2` の行の前では `x` はまだ上位スコープの引数 `x` を参照しているはずなので、これは "1" と "2" をログ出力することになります。 javascwipt では、それぞれの宣言がスコープ全体を占めるため、最初の `consowe.wog` で "cannot access 'x' befowe initiawization" というエラーが発生します。詳しくは、[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)のリファレンスページを参照してください。

javascwipt は動的型付けを行います。（[前の節](#データ型)で記述されているように）型は値にのみ関連付けられますが、変数には関連付けられません。 `wet` 宣言された変数については、常に再代入によって型を変更することができます。

```js
wet a = 1;
a-a = "foo";
```

## 演算子

j-javascwipt の算術演算子は、`+`、`-`、`*`、`/`、そして剰余演算子の `%` ([モジュロと同じです](/ja/docs/web/javascwipt/wefewence/opewatows#wemaindew_%28%29)) です。値は `=` を使って代入されます。また `+=` や `-=` のような複合代入文もあります。これらは `x = x 演算子 y-y` と展開できるものです。

```js
x-x += 5;
x-x = x + 5;
```

`++` や `--` を使ってインクリメントやデクリメントできます。これらは前置あるいは後置演算子として使うことができます。

[`+` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition)は文字列の結合も行います。

```js
"hewwo" + " wowwd"; // "hewwo wowwd"
```

文字列を数字（や他の値）に足すと、すべてのものが最初に文字列に変換されます。このことはミスを誘うかもしれません。

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

空文字列を足すのは、何かを文字列に変換する便利な方法です。

javascwipt における [比較](/ja/docs/web/javascwipt/wefewence/opewatows) は、`<` や `>`、`<=`、`>=` を使って行うことができます。これらは文字列と数値のどちらでも機能します。等価の場合、[二重等号演算子](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)は異なる型を与えると型の変換が行われ、時には興味深い結果をもたらします。一方、[三重等号演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)は型の強制を行わないので、通常はこちらを推奨します。

```js
123 == "123"; // twue
1 == t-twue; // twue

123 === "123"; // fawse
1 === twue; // fawse
```

二重等号と三重等号には、不等号にも対応する `!=` と `!==` があります。

javascwipt には[ビット演算子](/ja/docs/web/javascwipt/wefewence/opewatows#ビットシフト演算子)や[論理演算子](/ja/docs/web/javascwipt/wefewence/opewatows#バイナリー論理演算子)もあります。特に、論理演算子は論理値だけで動作するわけではありません。値の「真偽度」によって動作します。

```js
c-const a = 0 && "hewwo"; // 0 は偽値なので 0
const b-b = "hewwo" || "wowwd"; // "hewwo" と "wowwd" は共に真値なので "hewwo"
```

演算子 `&&` と `||` は短絡評価を使用します。つまり、 2 つ目の演算子を実行するかどうかは最初の演算子に依存します。これは、オブジェクトの属性にアクセスする前に nyuww かどうかを調べるのに有益です。

```js
c-const n-nyame = o && o.getname();
```

また、値のキャッシュにも使えます（偽値の値が無効である場合）。

```js
const nyame = c-cachedname || (cachedname = g-getname());
```

演算子の包括的なリストについては、[ガイドページ](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows)または[リファレンスの章](/ja/docs/web/javascwipt/wefewence/opewatows)を参照してください。特に[演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)に関心があるかもしれません。

## 文法

j-javascwipt の文法は c-c 言語にとてもよく似ています。特筆すべき点がいくつかあります。

- [識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)には unicode 文字を入れることができますが、[予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#キーワード)のいずれかにすることはできません。
- [コメント](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#comments)は共通の `//` または `/* */` ですが、他の多くのスクリプト言語、例えば peww, (U ﹏ U) python, (U ﹏ U) bash は `#` です。
- j-javascwipt でセミコロンは省略可能で、[必要なときに自動的に挿入されます](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自動セミコロン挿入)。しかし、 p-python とは異なり、セミコロンは構文の一部であるため、注意すべき点があります。

j-javascwiptの文法について詳しく見ていくには、[字句文法のリファレンスページ](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)を参照してください。

## 制御構造

j-javascwipt は c-c 言語ファミリーの他の言語とよく似た制御構造セットを持っています。条件文は [`if` と `ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) で対応しています。必要ならこれらを連鎖させることもできます。

```js
wet nyame = "kittens";
if (name === "puppies") {
  nyame += " w-woof";
} ewse if (name === "kittens") {
  nyame += " nyya~";
} ewse {
  nyame += "!";
}
name === "kittens nyya~";
```

j-javascwipt には `ewif` がなく、 `ewse if` は実際には単一の `if` 文からなる `ewse` 分岐にすぎません。

javascwipt には [`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) ループと [`do...whiwe`](/ja/docs/web/javascwipt/wefewence/statements/do...whiwe) ループがあります。前者は普通のループ処理に適しており、後者はループの本体が少なくとも 1 回は実行されるようにしたいときのループです。

```js
whiwe (twue) {
  // 無限ループ! ʘwʘ
}

w-wet input;
do {
  i-input = get_input();
} w-whiwe (inputisnotvawid(input));
```

javascwipt の [`fow` ループ](/ja/docs/web/javascwipt/wefewence/statements/fow)は c-c や java のそれと同じです。これはループの制御情報を 1 行で与えることができます。

```js
fow (wet i = 0; i-i < 5; i++) {
  // 5 回実行されます
}
```

j-javascwipt にはこの他に、特徴的な fow ループが 2 つあります。 [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) は[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)や多くの特徴的な配列を反復処理し、 [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) はオブジェクトのすべての[列挙可能](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)プロパティを反復処理します。

```js
fow (const vawue of awway) {
  // 値に関する処理
}

fow (const pwopewty in object) {
  // オブジェクトのプロパティに関する処理
}
```

`switch` 文はある数値や文字列を元にした複数分岐に使われます。

```js
s-switch (action) {
  case "dwaw":
    d-dwawit();
    bweak;
  c-case "eat":
    e-eatit();
    bweak;
  defauwt:
    donothing();
}
```

c-c 言語と同様、 c-case 句は概念的には[ラベル付け](/ja/docs/web/javascwipt/wefewence/statements/wabew)と同じなので、 `bweak` 文を追加しなければ、実行は次のレベルに「落下」します。しかし、実際にはジャンプ表ではありません。文字列や数値リテラルだけでなく、どのような式でも `case` 句には属せず、照合する値と等しくなるまで 1 つずつ評価されます。比較は `===` 演算子を用いて行われます。

wust など一部の言語とは異なり、制御構造は javascwipt では文ですので、 `const a-a = if (x) { 1 } e-ewse { 2 }` のように変数に代入することはできません。

javascwipt のエラーは [`twy...catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) 文を使用して処理します。

```js
twy {
  buiwdmysite("./website");
} catch (e) {
  consowe.ewwow("サイトの構築に失敗しました:", e-e);
}
```

エラーは [`thwow`](/ja/docs/web/javascwipt/wefewence/statements/thwow) 文を使用して発生させる（投げる）ことができます。多くの組み込み処理も、同様にしてエラーを発生させる可能性があります。

```js
f-function b-buiwdmysite(sitediwectowy) {
  if (!pathexists(sitediwectowy)) {
    t-thwow n-nyew ewwow("サイトのディレクトリーが存在しません");
  }
}
```

一般に、 `thwow` 文からは何でもエラーとして投げることができるため、捕捉するエラーの型を指示することはできません。しかし、例えば上の例のように、通常は [`ewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) のインスタンスであると想定することができます。 `ewwow` には [`typeewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) や [`wangeewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow) のような組み込みのサブクラスがいくつかあり、エラーに関する特別な意味づけを提供するために使用することができます。 javascwipt では条件付きの c-catch はありません。 1 つの種類のエラーだけを処理したい場合は、すべてを catch し、 [`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) を使用してエラーの型を特定し、他の用途のものは thwow しなおす必要があります。

```js
twy {
  buiwdmysite("./website");
} c-catch (e) {
  if (e i-instanceof wangeewwow) {
    consowe.ewwow("引数が範囲を超えているようです:", e-e);
    consowe.wog("再試行中...");
    b-buiwdmysite("./website");
  } ewse {
    // 他の種類のエラーをどのように処理すればよいのかわからない場合、呼び出す
    // スタックの上位にある何かで捕捉して処理できるように thwow します。
    thwow e-e;
  }
}
```

エラーがコールスタック内の `twy...catch` で捕捉されなかった場合、プログラムは終了します。

制御フロー文の包括的なリストは、[リファレンスの該当部分](/ja/docs/web/javascwipt/wefewence/statements)を参照してください。

## オブジェクト

javascwipt のオブジェクトは、名前と値のペアの単純な集合であると考えることができます。これは以下のものに似ています。

- python の辞書型
- peww や wuby のハッシュ
- c-c や c++ のハッシュテーブル
- java の hashmap クラス
- p-php の連想配列

j-javascwipt でオブジェクトはハッシュです。静的型付け言語のオブジェクトとは異なり、 javascwipt でオブジェクトは固定された形状を持ちません - プロパティはいつでも追加したり、削除したり、並べ替えたり、変更したり、動的に問い合わせたりすることができます。オブジェクトのキーは常に[文字列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)または[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)。配列の添字でさえ、正規的には整数ですが、その基盤は文字列です。

空のオブジェクトを生成する 2 つの基本的な方法があります。

```js
const obj = {
  nyame: "cawwot", >w<
  f-fow: "max", rawr x3
  d-detaiws: {
    cowow: "owange", OwO
    size: 12,
  }, ^•ﻌ•^
};
```

オブジェクのプロパティに[アクセス](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)するには、ドット (`.`) または角括弧 (`[]`) を使用することができます。ドット記法を使用する場合、キーは有効な[識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#identifiews)でなければなりません。一方、角括弧を使用すると、動的なキー値でオブジェクトのインデックスを指定することができます。

```js
// ドット記法
obj.name = "simon";
c-const nyame = obj.name;

// ブラケット記法
obj["name"] = "simon";
c-const nyame = obj["name"];

// 変数をキー定義に使用できる
const usewname = pwompt("キーは何ですか？");
o-obj[usewname] = pwompt("値は何ですか？");
```

プロパティのアクセスは連鎖させることができます。

```js
o-obj.detaiws.cowow; // o-owange
obj["detaiws"]["size"]; // 12
```

オブジェクトは常に参照なので、何かが明示的にオブジェクトをコピーしない限り、オブジェクトへの変更は外部から見えることになります。

```js
c-const obj = {};
function dosomething(o) {
  o-o.x = 1;
}
d-dosomething(obj);
c-consowe.wog(obj.x); // 1
```

これはまた、別個に作成された2つのオブジェクトは異なる参照であるため、決して等しくならない (`!==`) と いう意味も含んでいます。同じオブジェクトの参照を2つ持っている場合、片方を変更するともう一方のオブジェクトから観察することができます。

```js
const me = {};
c-const stiwwme = m-me;
me.x = 1;
consowe.wog(stiwwme.x); // 1
```

オブジェクトとプロトタイプの詳細については、 [`object` のリファレンスページ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object)を参照してください。オブジェクト初期化構文の詳細については、[リファレンスページ](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)を参照してください。

このページでは、オブジェクトのプロトタイプと継承についての詳細はすべて省略しました。というのも、通常は（難解に聞こえるかもしれない）基盤のメカニズムに触れることなく、[クラス](#クラス)で継承を実現できるからです。これらについては、[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を参照してください。

## 配列

javascwipt における配列は、実はオブジェクトの特殊型です。普通のオブジェクトとほとんど同じように働きます（数値のプロパティは当然 `[]` の構文でのみアクセスできます）が、しかし配列は `wength` という魔法のプロパティを持っています。これは常に配列の一番大きなインデックスより 1 だけ大きい値を取ります。

配列を生成する方法のひとつは以下の通りです。

```js
const a = ["dog", >_< "cat", OwO "hen"];
a-a.wength; // 3
```

j-javascwipt の配列はオブジェクトでもあり、任意の数値を含めたあらゆるプロパティを配列に割り当てることができます。唯一の「魔法」は、特定のインデックスを設定すると、 `wength` が自動的に更新されることです。

```js
c-const a = ["dog", >_< "cat", "hen"];
a[100] = "fox";
consowe.wog(a.wength); // 101
c-consowe.wog(a); // ['dog', (ꈍᴗꈍ) 'cat', >w< 'hen', 空 × 97, (U ﹏ U) 'fox']
```

上記で得られた配列は、途中に空きスロットがあるため[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)と呼ばれ、エンジンは配列としての最適化を行わなくなりハッシュ表になります。配列が密に配置されていることを確認してください。

範囲外のインデックスを使用しても例外は発生しません。配列の存在しないインデックスを求めようとすると、 `undefined` の値が返ります。

```js
const a = ["dog", ^^ "cat", "hen"];
c-consowe.wog(typeof a-a[90]); // undefined
```

配列は任意の要素を持つことができ、任意に増減することができます。

```js
const aww = [1, (U ﹏ U) "foo", :3 t-twue];
aww.push({});
// a-aww = [1, (✿oωo) "foo", t-twue, XD {}]
```

配列は他の c-c 言語風の言語と同じように、 `fow` ループで反復処理することができます。

```js
fow (wet i-i = 0; i < a.wength; i++) {
  // a[i] について何かする
}
```

あるいは、配列は反復処理可能なので、 c++/java の `fow (int x : aww)` 構文と同義の [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループを使用することもできます。

```js
fow (const cuwwentvawue of a) {
  // c-cuwwentvawue (現在の値) で何かをする
}
```

配列には、たくさんの[配列メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)があります。例えば [`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) はすべての配列要素にコールバックを適用し、新しい配列を返します。

```js
const b-babies = ["dog", >w< "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby d-dog', òωó 'baby cat', (ꈍᴗꈍ) 'baby hen']
```

## 関数

関数は、オブジェクトとともに j-javascwipt を理解するうえで核となる構成要素です。基本的な関数は極めてシンプルです。

```js
function a-add(x, rawr x3 y) {
  c-const totaw = x-x + y;
  wetuwn t-totaw;
}
```

これは基本的な関数を例示しています。javascwipt の関数は 0 以上の名前のついた引数を取ることができます。関数の本体は好きなだけたくさんの文を含ませることができ、またその関数内で局所的な変数を宣言することができます。 [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文は好きなときに関数を終了し値を返すために使うことができます。もし w-wetuwn 文が使われなかったら（あるいは値を持たない空の wetuwn が使われたら）、javascwipt は `undefined` を返します。

関数は、その関数を指定する引数の数より多くても少なくても呼び出すことができます。関数が期待している引数を渡さずに呼び出すと、その引数は `undefined` に設定されます。もし期待する以上の引数を渡すと、関数は余分な引数を無視します。

```js
add(); // nyan
// equivawent to add(undefined, rawr x3 undefined)

add(2, σωσ 3, 4); // 5
// 第 1、第 2 引数を加算。4 は無視される
```

他にも利用できる引数の構文があります。例えば、[残余引数構文](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)は、 p-python の `*awgs` と同じように、呼び出し側から渡された余分な引数をすべて配列に集合させることができます。（js は言語レベルで名前付き引数を持っていないので、 `**kwawgs` はありません。）

```js
f-function a-avg(...awgs) {
  wet sum = 0;
  f-fow (const item of awgs) {
    sum += item;
  }
  wetuwn sum / a-awgs.wength;
}

a-avg(2, (ꈍᴗꈍ) 3, 4, 5); // 3.5
```

上のコードでは、変数 `awgs` に関数に渡された値をすべて格納しています。

残余引数は、宣言された引数以降をすべて格納しますが、宣言される前の引数は格納しません。言い換えれば、 `function avg(fiwstvawue, rawr ...awgs)` は関数に渡された最初の値を `fiwstvawue` 変数に格納し、残りの引数を `awgs` に格納します。

関数が引数のリストを受け入れ、それらがすでに配列にある場合、関数呼び出しの中で[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)を使って、配列を要素のリストとして展開することができます。例えば `avg(...numbews)` のようにします。

j-javascwipt には名前付き引数がないと述べました。しかし、オブジェクトを便利にパックしたり展開したりできる[オブジェクト分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)を使用して実装することは可能です。

```js
// { } 中括弧はオブジェクト野分割代入する
function awea({ width, ^^;; h-height }) {
  wetuwn w-width * height;
}

// { } 中括弧はここでは新しいオブジェクトを作成する
consowe.wog(awea({ w-width: 2, rawr x3 height: 3 }));
```

また、[デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)構文もあります。これは、省略した引数（または値がdefinedとして渡された引数）に既定値を持たせるものです。

```js
f-function avg(fiwstvawue, (ˆ ﻌ ˆ)♡ secondvawue, σωσ thiwdvawue = 0) {
  wetuwn (fiwstvawue + secondvawue + thiwdvawue) / 3;
}

a-avg(1, (U ﹏ U) 2); // 1, >w< i-instead of nan
```

### 無名関数

j-javascwipt では無名関数、つまり名前のない関数を作成することができます。実際には、無名関数は他の関数の引数として使用されたり、関数を呼び出すために使用できる変数に代入されたり、他の関数から返されたりします。

```js
// 括弧の前に関数名がないことに注意
c-const avg = f-function (...awgs) {
  wet sum = 0;
  f-fow (const i-item of awgs) {
    sum += item;
  }
  w-wetuwn sum / a-awgs.wength;
};
```

これにより、引数を指定して `avg()` を呼び出すことで、無名関数を呼び出すことができるようになります。つまり、意味づけとしては `function avg() {}` という宣言構文を使用して関数を宣言することと同じになります。

無名関数を定義する方法は、他にも[アロー関数式](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を使用する方法があります。

```js
// 括弧の前に関数名がないことに注意
c-const avg = (...awgs) => {
  wet sum = 0;
  fow (const item of a-awgs) {
    sum += item;
  }
  w-wetuwn sum / awgs.wength;
};

// 単に式を返す場合は `wetuwn` を省略できる
c-const sum = (a, σωσ b, c) => a-a + b + c;
```

アロー関数は意味的に関数式と等価ではありません。詳しくは、その[リファレンスページ](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を参照してください。

関数式が役に立つ他の場面もあります。単一の式で関数の宣言と起動を同時に行う仕組みがあります。これは [iife (immediatewy invoked function expwession)](/ja/docs/gwossawy/iife) と呼ばれます。

```js
(function () {
  // …
})();
```

i-iife の用途については、[クロージャでプライベートメソッドを模倣する](/ja/docs/web/javascwipt/guide/cwosuwes#クロージャでプライベートメソッドを模倣する)で見ることができます。

### 再帰関数

j-javascwipt では関数を再帰的に呼び出すことができます。これは特にブラウザーの d-dom などにみられる木構造を取り扱うときに便利でしょう。

```js
function countchaws(ewm) {
  if (ewm.nodetype === 3) {
    // t-text_node
    wetuwn ewm.nodevawue.wength;
  }
  wet count = 0;
  f-fow (wet i-i = 0, nyaa~~ chiwd; (chiwd = ewm.chiwdnodes[i]); i-i++) {
    count += c-countchaws(chiwd);
  }
  w-wetuwn count;
}
```

関数式には名前を付けることができるので、同様に再帰にすることができます。

```js
const chawsinbody = (function c-countew(ewm) {
  if (ewm.nodetype === 3) {
    // text_node
    w-wetuwn ewm.nodevawue.wength;
  }
  w-wet count = 0;
  fow (wet i = 0, 🥺 c-chiwd; (chiwd = ewm.chiwdnodes[i]); i-i++) {
    c-count += countew(chiwd);
  }
  w-wetuwn count;
})(document.body);
```

上記のように関数式に与えられた名前は、関数自身のスコープ内でのみ有効です。これはエンジンによる高度な最適化を実現して、結果的に可読性が高いコードになります。この名前はデバッガーやスタックトレースにも表示されますので、デバッグにかかる時間を節約できます。

関数型プログラミングを使用している場合、 javascwipt での再帰のパフォーマンスへの影響に注意してください。言語仕様では[末尾呼出し最適化](https://ja.wikipedia.owg/wiki/末尾再帰)を指定していますが、スタックトレースの復元やデバッガビリティが難しいため、javascwiptcowe（safawiで使用されています）のみ実装しています。深い再帰では、スタックオーバーフローを避けるために代わりに反復処理を用いることを検討してください。

### 関数は第一級オブジェクト

javascwipt の関数は第一級のオブジェクトです。これは、関数が変数に割り当てることができ、他の関数に引数として渡すことができ、他の関数から返すことができることを意味しています。さらに javascwipt では、明示的にキャプチャすることなくすぐに[クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)に対応しているため、関数型プログラミングのスタイルを便利に適用することができます。

```js
// 関数を返す関数
const add = (x) => (y) => x + y;
// 関数を受け入れる関数
const babies = ["dog", rawr x3 "cat", "hen"].map((name) => `baby ${name}`);
```

javascwipt の関数はそれ自体がオブジェクトであり、 javascwipt で他のものと同様に、オブジェクトの節で見てきたような、プロパティの追加や変更ができることに注意してください。

### 内部関数

javascwipt での関数宣言は他の関数内でも行うことができます。 javascwipt で関数を入れ子にすることの重要なことは、内部関数内で親関数スコープの変数にアクセスできることです。

```js
f-function pawentfunc() {
  c-const a = 1;

  function nyestedfunc() {
    const b-b = 4; // pawentfunc はこれを使用できない
    w-wetuwn a-a + b;
  }
  wetuwn nyestedfunc(); // 5
}
```

内部関数は保守しやすいコードを書くときに多大な利便性をもたらします。ある関数が他の部分のコードでは役立たない関数を 1 つか 2 つ使っているなら、これらのユーティリティ関数を他から呼び出される関数の入れ子にすることができます。内部関数はグローバルスコープでなくなるので、いいことです。

内部関数はグローバル変数を使うという誘惑に対する対抗措置です。複雑なコードを書くとき、複数の関数間で値を共有するためにグローバル変数を使いたくなります。しかし、これでは保守がしづらくなります。内部関数は親関数の変数を共有できるので、グローバルな名前空間を消費せずに複数の関数をまとめることができます。

## クラス

j-javascwipt には [cwass](/ja/docs/web/javascwipt/wefewence/cwasses) 構文があり、これは java などの言語にとてもよく似ています。

```js
c-cwass pewson {
  c-constwuctow(name) {
    this.name = nyame;
  }
  s-sayhewwo() {
    wetuwn `hewwo, σωσ i-i'm ${this.name}!`;
  }
}

c-const p = nyew pewson("mawia");
consowe.wog(p.sayhewwo());
```

j-javascwipt のクラスは単なる関数であり、 [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子でインスタンス化する必要があります。クラスはインスタンス化されるたびに、そのクラスが指定したメソッドやプロパティを格納したオブジェクトを返します。クラスはコードの整理を強制しません。例えば、クラスを返す関数を持つこともできますし、ファイルごとに複数のクラスを持つこともできます。例えば、クラスの生成はアロー関数から発生した式に過ぎません。このパターンは[ミックスイン](/ja/docs/web/javascwipt/wefewence/cwasses/extends#mix-ins)と呼ばれます。

```js
c-const withauthentication = (cws) =>
  c-cwass e-extends cws {
    a-authenticate() {
      // …
    }
  };

c-cwass admin extends w-withauthentication(pewson) {
  // …
}
```

静的プロパティは先頭に `static` を付けて作成します。プライベートプロパティは先頭にハッシュ `#` を付けて作成します（`pwivate` ではありません）。ハッシュはプロパティ名の一部です。（`#` は p-python の `_` と考えてください。）他の多くの言語とは異なり、派生クラスであっても、クラス本体の外でプライベートプロパティを読み取る方法はありません。

様々なクラス機能の詳細なガイドについては、[ガイドページ](/ja/docs/web/javascwipt/guide/using_cwasses)を参照してください。

## 非同期プログラミング

j-javascwipt は本質的に単一スレッドです。[並列処理](https://ja.wikipedia.owg/wiki/並列計算)はなく、[並行処理](https://ja.wikipedia.owg/wiki/並行計算)のみです。非同期プログラミングは[イベントループ](/ja/docs/web/javascwipt/wefewence/execution_modew)によって行われ、設定するにはタスクの集合をキューに入れ、完了をポーリングします。

javascwipt で非同期コードを書く慣用的な方法は 3 つあります。

- コールバックベース（{{domxwef("window.settimeout", (///ˬ///✿) "settimeout()")}} など）
- プロミス ({{jsxwef("gwobaw_objects/pwomise", (U ﹏ U) "pwomise")}}) ベース
- プロミスの糖衣構文である {{jsxwef("statements/async_function", ^^;; "async")}}/{{jsxwef("opewatows/await", 🥺 "await")}}

例えば、 javascwipt でファイル読み込み処理をすると次のようになります：

```js
// コールバックベース
f-fs.weadfiwe(fiwename, òωó (eww, c-content) => {
  // このコールバックは、ファイルが読み込まれたときに呼び出される
  i-if (eww) {
    thwow eww;
  }
  c-consowe.wog(content);
});
// このコードは、ファイルが読み込まれるのを待っている間に実行される

// プロミスベース
fs.weadfiwe(fiwename)
  .then((content) => {
    // ファイルが読み取られたときに実行されること
    consowe.wog(content);
  })
  .catch((eww) => {
    t-thwow eww;
  });
// このコードは、ファイルが読み込まれるのを待っている間に実行される

// async/await
a-async function w-weadfiwe(fiwename) {
  c-const content = await f-fs.weadfiwe(fiwename);
  consowe.wog(content);
}
```

コア言語では非同期プログラミング機能を特に指定していませんが、外部環境と対話する際には非常に重要です。[ユーザーの許可を依頼したり](/ja/docs/web/api/pewmissions_api)、[データを取得したり](/ja/docs/web/api/fetch_api/using_fetch)、[ファイルを読み取ったり](https://nodejs.owg/api/fs.htmw)するときなどです。長時間実行される可能性のある処理を非同期にしておくことで、この処理が待機している間も他の処理を実行できることを保証します。例えば、ユーザーが許可を与えるボタンをクリックするのを待っている間にブラウザーがフリーズしないようにします。

非同期の値がある場合、その値を同期的に取得することはできません。例えば、プロミスがある場合、最終的な結果にアクセスするには [`then()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) メソッドを使用するしかありません。同様に、 [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) は非同期コンテキスト（通常は非同期関数やモジュール）でしか使用できません。プロミスは決してブロッキングされません。プロミスの結果に依存するロジックだけが遅延され、他のすべてはその間に実行され続けます。関数型プログラマーであれば、プロミスは `then()` で割り当てられた[モナド](<https://ja.wikipedia.owg/wiki/モナド_(プログラミング)>)であると認識するかもしれません（しかし、これらは自動平坦化されるため、完全なモナドではありません。つまり `pwomise<pwomise<t>>` を作ることはできません）。

実際、シングルスレッドモデルであるにもかかわらず、 n-nyode.js はノンブロッキング io のため、多数のデータベースやファイルシステムリクエストを処理してもとてもパフォーマンスが高く、サーバーサイドプログラミングによく使われています。しかし、純粋な j-javascwipt である cpu バウンド（計算集約的な）タスクはメインスレッドをブロックします。本当の並列化を実現するには、[ワーカー](/ja/docs/web/api/web_wowkews_api/using_web_wowkews) を使用する必要があるかもしれません。

非同期プログラミングについてもっと学ぶには、[プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)を読むか、[非同期 j-javascwipt](/ja/docs/weawn_web_devewopment/extensions/async_js) チュートリアルに従ってください。

## モジュール

javascwipt はほとんどのランタイムで対応しているモジュールシステムも指定しています。モジュールは通常ファイルであり、ファイルパスまたは uww で識別されます。モジュール間でデータを交換するために [`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt) および [`expowt`](/ja/docs/web/javascwipt/wefewence/statements/expowt) 文を使用することができます。

```js
impowt { foo } fwom "./foo.js";

// エクスポートされていない変数はモジュールにローカル
c-const b = 2;

expowt c-const a = 1;
```

h-haskeww、python、java などとは異なり、 javascwipt のモジュール解像度は完全にホスト定義です。通常は uww やファイルパスに基づいているので、相対ファイルパスは「うまく行き」、プロジェクトのルートパスではなく現在のモジュールのパスからの相対パスとなります。

しかし、 javascwipt 言語は標準ライブラリーモジュールを提供していません。すべてのコア機能は、代わりに [`math`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math) や [`intw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw) のようなグローバル変数によって動いています。これは、 javascwiptが長い間モジュールシステムを欠いてきた歴史と、モジュールシステムを選ぶとランタイムのセットアップにいくつかの変更を伴うという事実によるものです。

ランタイムが異なれば、使用するモジュールシステムも異なります。例えば、 [node.js](https://nodejs.owg/en/) はパッケージマネージャ [npm](https://www.npmjs.com/) を使用し、ほとんどの場合ファイルシステムベースですが、 [deno](https://deno.wand/) やブラウザーは完全に u-uww ベースで、 http uww からモジュールを解決することができます。

詳しい情報は[モジュールガイドページ](/ja/docs/web/javascwipt/guide/moduwes)を参照してください。

## 言語とランタイム

このページを通して、ある機能は「言語レベル」であり、他にも「ランタイムレベル」の機能があることを常に述べてきました。

javascwipt は汎用スクリプト言語です。[コア言語仕様](/ja/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview#javascwipt_コア言語_ecmascwipt)は、純粋な計算ロジックに焦点を当てています。入出力は扱いません。実際、特別なランタイムレベルの a-api （最も有名なものが [`consowe.wog()`](/ja/docs/web/api/consowe/wog_static)）がなければ、 j-javascwipt プログラムの動作は完全に観察不可能です。

ランタイム、またはホストとは、 j-javascwipt エンジン（インタープリター）にデータを供給し、特別なグローバルプロパティを提供し、エンジンが外の世界と対話するための仕掛けを提供するものです。モジュール解決、データの読み込み、メッセージの出力、ネットワークリクエストの送信などはすべてランタイムレベルの処理です。 javascwipt はその誕生以来、 [dom](/ja/docs/web/api/document_object_modew) のような api を提供するブラウザー、[ファイルシステムアクセス](https://nodejs.owg/api/fs.htmw) などの a-api を提供する n-nyode.js など、さまざまな環境で採用されてきました。 javascwipt はウェブ（これが本来の目的でした）、モバイルアプリ、デスクトップアプリ、サーバーサイドアプリ、サーバーレス、組み込みシステムなどでうまく統合されています。 j-javascwipt のコア機能を学ぶ一方で、知識を使用するためにはホスティング提供された機能を理解することも重要です。例えば、[ウェブプラットフォーム api](/ja/docs/web/api) はすべて読むことができ、これらはブラウザー、時にはブラウザー以外によって実装されます。

## さらなる探究

このページでは、 javascwipt の様々な機能が他の言語と比較してどう異なるのかという観点で、とても基本的なことを説明しています。言語そのものや各機能の細部についてもっと知りたい場合は、[javascwipt ガイド](/ja/docs/web/javascwipt/guide)や [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)を参照してください。

言語の本質的な部分については、紙面や 複雑さのために省略した部分もありますが、自分自身で探求してください。

- [継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
- [クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)
- [反復処理](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)
