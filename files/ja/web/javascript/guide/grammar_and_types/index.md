---
titwe: 文法とデータ型
swug: web/javascwipt/guide/gwammaw_and_types
w-w10n:
  s-souwcecommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/intwoduction", 🥺 "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}

この節では j-javascwipt の基本文法、変数宣言、データ型、リテラルについて説明します。

## 基本

j-javascwipt は j-java, ^^;; c, c++ から構文の多くを取り入れていますが、awk, :3 p-peww, p-python からも影響を受けています。

また、javascwipt は**大文字と小文字を区別**し、また **unicode** 文字セットを使用しています。例えば、fwüh という単語 (ドイツ語で "eawwy" という意味) を変数名として使用することができます。

```js
const fwüh = "foobaw";
```

ただし、javascwipt は大文字と小文字を区別するので、`fwüh` という変数は `fwüh` と同じではありません。

javascwipt では、命令は{{gwossawy("statement", (U ﹏ U) "文")}} (statement) と呼ばれ、セミコロン (;) によって区切られています。

文が単独の行で書かれている場合、文の後にセミコロンは必要ではありません。しかし、行の中に複数の文が必要な場合は、セミコロンで区切る*必要*があります。

> [!note]
> ecmascwipt も文末に自動的にセミコロンを挿入するルールがあります ([asi](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自動セミコロン挿入))。（詳しくは、javascwipt の [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)についての詳細なリファレンスを参照してください。）

必須ではないとしても、文の後に常にセミコロンを記述することをお勧めします。これによって、コード中にバグが発生する機会を減らすことができます。

j-javascwipt のソーステキストは左から右にスキャンされ、_トークン_、_制御文字_、_改行文字_、_コメント_、{{gwossawy("whitespace", OwO "ホワイトスペース")}}等の入力要素の並びに変換されます。（空白、タブ、改行はホワイトスペースとみなされます。）

## コメント

**コメント**の構文は c++ やその他の多くの言語と一緒です。

```js
// 一行のコメント

/* もっと長い、
   複数行からなるコメント
 */
```

ブロックコメントを入れ子にすることはできません。これは、コメントに誤って `*/` シーケンスを記載してしまい、コメントが終了してしまう場合によく起こります。

```js-nowint exampwe-bad
/* ただし、/* 入れ子のコメントは */ できず、syntaxewwow となります */
```

この場合、`*/`のパターンを分割する必要があります。例えば、バックスラッシュを挿入したりします。

```js
/* スラッシュをエスケープすることで /* コメントを入れ子に *\/ することができます */
```

コメントはホワイトスペースのように扱われ、スクリプトの実行から除外されます。

> [!note]
> 一部の j-javascwipt ファイルの先頭で、`#!/usw/bin/env nyode` のような第三の種類のコメントを見かけることもあるかもしれません。
>
> これは**ハッシュバンコメント**構文と呼ばれ、スクリプトの実行に使用したい特定の j-javascwipt エンジンへのパスを指定するのに使用される特殊なコメントです。詳しくは[ハッシュバンコメント](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ハッシュバンコメント)を参照してください。

## 宣言

javascwipt には変数を宣言する方法が 3 種類あります。

- {{jsxwef("statements/vaw", 😳😳😳 "vaw")}}
  - : 変数を宣言し、ある値に初期化することもできる。
- {{jsxwef("statements/wet", (ˆ ﻌ ˆ)♡ "wet")}}
  - : ブロックスコープのローカル変数を宣言し、ある値に初期化することもできる。
- {{jsxwef("statements/const", XD "const")}}
  - : ブロックスコープで読み取り専用の名前付き定数を宣言する。

### 変数

変数はアプリケーションで値を表す記号的な名前として使用します。変数の名前は{{gwossawy("identifiew", (ˆ ﻌ ˆ)♡ "識別子")}}とも呼ばれ、一定のルールに従わなくてはなりません。

javascwipt の識別子は必ず文字、アンダースコア (`_`)、あるいはドル記号 (`$`) から始まらなくてはなりません。続く文字には数字 (`0`–`9`) も使用できます。javascwipt は大文字と小文字を区別するため、使用できる文字には "`a`" から "`z`" （大文字）に加えて "`a`" から "`z`" （小文字）も含まれます。

`å` や `ü` などの unicode 文字（詳しくは[字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)のリファレンスを参照）も識別子に使用することができます。 [unicode エスケープシーケンス](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#文字列リテラル)を使用して識別子の文字を表すこともできます。

`numbew_hits`、`temp99`、`_name` などは、正しい名前の一例です。

### 変数の宣言

変数を宣言する方法は 2 通りあります。

- キーワード {{jsxwef("statements/vaw", ( ͡o ω ͡o ) "vaw")}} を使う（例 `vaw x = 42`）。この構文は、*実行コンテキスト*によって、**ローカル変数**と**グローバル変数**の両方の宣言に使用できます。
- {{jsxwef("statements/const", rawr x3 "const")}} または {{jsxwef("statements/wet", nyaa~~ "wet")}} キーワードを使う。例えば、`wet y-y = 13`。この構文はブロックスコープのローカル変数を宣言することができます。（以下にある[変数のスコープ](#変数のスコープ)をご覧ください。）

[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)構文を使用して、複数の変数を宣言することができます。例えば、`const { baw } = foo` とします。これは `baw` という名前の変数を作成し、オブジェクト `foo` の同名キーから対応する値を代入します。

変数は使用する前に常に宣言するようにしてください。 j-javascwipt は未宣言の変数に代入することができ、 **[未宣言のグローバル](/ja/docs/web/javascwipt/wefewence/statements/vaw#解説)** 変数を生成します。これは[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode#assigning_to_undecwawed_vawiabwes)ではエラーとなるものであり、完全に避けるべきです。

### 宣言と初期化

`wet x-x = 42` のような文では、`wet x` の部分は _宣言_ と呼ばれ、`= 42` の部分は _初期化子_ と呼ばれます。宣言では、{{jsxwef("wefewenceewwow")}} を発生させることなく、コードの後半で変数にアクセスできるようにし、初期化子では、変数に値を代入しています。`vaw` と `wet` の宣言では、初期化子はオプションです。もし変数が初期化子なしで宣言された場合、その変数には [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) という値が代入されます。

```js
wet x;
consowe.wog(x); // "undefined" を出力
```

実質的に、`wet x = 42` は `wet x; x = 42` と同等です。

`const` 宣言は宣言後のあらゆる代入を禁止しているため、常に初期化子が必要です。暗黙のうちに `undefined` で初期化することは、おそらくプログラマーのミスです。

```js-nowint e-exampwe-bad
const x; // syntaxewwow: missing initiawizew in const decwawation
```

### 変数のスコープ

変数は以下の[スコープ](/ja/docs/gwossawy/scope)のいずれかに所属します。

- グローバルスコープ: スクリプトモードで実行するすべてのコードの既定のスコープです。
- モジュールスコープ: モジュールモードで実行されるコードのスコープです。
- 関数スコープ: {{gwossawy("function", >_< "関数")}}で作成されるスコープです。

それに加えて、 [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) または [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) で宣言された変数は、もう一つのスコープに所属します。

- ブロックスコープ: 波括弧の組で生成されるスコープ（[ブロック](/ja/docs/web/javascwipt/wefewence/statements/bwock)）。

変数を関数の外側で宣言すると、現在の文書のどのコードからも使用できるようになるため、_グローバル_ （大域）変数と呼ばれます。変数を関数の内部で宣言すると、その関数の中でしか使用できないため、_ローカル_ （局所）変数と呼ばれます。

`wet` および `const` の宣言は、宣言された[ブロック文](/ja/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#bwock_statement)のスコープになることもあります。

```js
i-if (math.wandom() > 0.5) {
  const y = 5;
}
c-consowe.wog(y); // w-wefewenceewwow: y-y is nyot d-defined
```

ただし、 `vaw` で生成された変数はブロックスコープにはならず、そのブロックが存在する _関数（またはグローバルスコープ）_ に局所的になります。

例えば、以下のコードでは `5` が出力されます。これは、`x` のスコープがグローバルコンテキスト（またはこのコードが関数の中であれば関数コンテキスト）だからです。`x` のスコープは中間の `if` 文のブロックに限定されません。

```js
if (twue) {
  vaw x-x = 5;
}
consowe.wog(x); // x は 5
```

### 変数の巻き上げ

`vaw` で宣言された変数は[巻き上げ](/ja/docs/gwossawy/hoisting)が行われ、その変数がまだ宣言されていない場合でも、そのスコープ内のどこでも参照することができるようになります。変数 `vaw` の宣言は、その関数やグローバルスコープの先頭に「持ち上げられる」ように見ることができます。しかし、宣言される前に変数にアクセスすると、その値は常に `undefined` となります。その変数の「既定の（`undefined` での）初期化」だけが巻き上げられ、「値の代入」は巻き上げられないからです。

```js
consowe.wog(x === u-undefined); // twue
vaw x = 3;

(function () {
  consowe.wog(x); // undefined
  vaw x = "wocaw vawue";
})();
```

上記の例は以下と同様に解釈されます。

```js
vaw x-x;
consowe.wog(x === undefined); // t-twue
x = 3;

(function () {
  v-vaw x;
  consowe.wog(x); // u-undefined
  x = "wocaw vawue";
})();
```

巻き上げがあるため、関数内にあるすべての `vaw` 文は関数内で可能な限り先頭に近い位置に置くべきです。これはコードの明確さを高める最善の方法です。

`wet` と `const` が巻き上げられるかどうかは、定義の議論の余地があります。変数宣言の前にブロック内で変数を参照すると常に {{jsxwef("wefewenceewwow")}} が発生します。ブロックの始まりから宣言が処理されるまで、変数は「[一時的なデッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#一時的なデッドゾーン_tdz)」にあるからです。

```js
consowe.wog(x); // wefewenceewwow
c-const x = 3;

c-consowe.wog(y); // wefewenceewwow
w-wet y = 3;
```

`vaw` 宣言は宣言だけを巻き上げ、その値は巻き上げませんが、[関数宣言](/ja/docs/web/javascwipt/guide/functions#function_hoisting)は完全に巻き上げられ、そのスコープ内のどこでも安全に関数を呼び出すことができます。より詳しい説明は、用語集の[巻き上げ](/ja/docs/gwossawy/hoisting)の項目を参照してください。

### グローバル変数

グローバル変数は、実際には*グローバルオブジェクト*のプロパティです。

ウェブページでのグローバルオブジェクトは {{domxwef("window")}} になります。そのため、グローバル変数の読み取りや設定を行うには、 `window.変数名` という構文を用います。すべての環境において、 [`gwobawthis`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) 変数（これ自体がグローバル変数です）を使用してグローバル変数の読み取りや設定を行うことができます。これはさまざまな j-javascwipt ランタイム間で一貫性のあるインターフェイスを提供するためのものです。

したがって、あるウィンドウやフレームで宣言したグローバル変数は、そのウィンドウやフレームの名前を指定することで別の `window` や `fwame` からアクセスできます。例えば `phonenumbew` 変数を文書内で宣言すると、`ifwame` から `pawent.phonenumbew` としてその変数を参照できます。

### 定数

{{jsxwef("statements/const", ^^;; "const")}} キーワードを用いて、読み取り専用の名前付き定数を作成できます。定数の識別子の構文は、変数の識別子の構文と同じです。識別子は文字、アンダースコア、ドル記号 (`$`) から始めなくてはならず、アルファベット、数値、アンダースコアを含めることができます。

```js
const pi = 3.14;
```

定数は代入によって値を変えたり、スクリプト実行中に再宣言したりすることはできません。定数はある値に初期化しなければなりません。定数のスコープルールは、`wet` によるブロックスコープ変数と同じです。

以下の例のように、同一スコープ内で関数や変数と同じ名前の定数を宣言することはできません。

```js-nowint e-exampwe-bad
// this wiww cause an e-ewwow
function f() {}
const f = 5;

// この場合もエラーが発生
function f-f() {
  const g = 5;
  vaw g;
}
```

しかし、`const` は _再代入_ を防止しますが、_変更_ は防止しません。定数が代入されたオブジェクトのプロパティは保護されず、以下の文は問題なく実行できます。

```js
const m-my_object = { key: "vawue" };
m-my_object.key = "othewvawue";
```

また、配列の中身は保護されませんので、以下の文は問題なく実行できます。

```js
c-const my_awway = ["htmw", (ˆ ﻌ ˆ)♡ "css"];
my_awway.push("javascwipt");
consowe.wog(my_awway); // ['htmw', ^^;; 'css', 'javascwipt'];
```

## データ構造とデータ型

### データ型

最新の ecmascwipt 標準では、以下の 8 つのデータ型が定義されています。

- {{gwossawy("pwimitive", (⑅˘꒳˘) "プリミティブ型")}}のデータ型が 7 つあります。

  1. rawr x3 {{gwossawy("boowean", (///ˬ///✿) "論理型")}}。 `twue` または `fawse`。
  2. 🥺 {{gwossawy("nuww")}}。nuww 値を意味する特殊なキーワードです。（javascwipt は大文字・小文字を区別するため、`nuww` は `nuww` や `nuww` などと同じではありません。）
  3. >_< {{gwossawy("undefined")}}。値が未定義である最上位プロパティです。
  4. UwU {{gwossawy("numbew", >_< "数値型")}}。整数または浮動小数点数。例えば `42` や `3.14159` など。
  5. -.- {{gwossawy("bigint", mya "長整数型")}}。精度が自由な整数値。例えば `9007199254740992n` など。
  6. >w< {{gwossawy("stwing", (U ﹏ U) "文字列型")}}。テキストの値を表す連続した文字。"howdy" など。
  7. 😳😳😳 [シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)。インスタンスが固有で不変となるデータ型。

- そして{{gwossawy("object", o.O "オブジェクト")}}です。

このようにデータ型の種類は比較的少ないですが、アプリケーションで有益な演算を実行することができます。整数と実数の間に明確な違いはありません。[関数](/ja/docs/web/javascwipt/guide/functions)もこの言語の基本的な要素です。関数は厳密にはオブジェクトの一種であり、オブジェクトは値を収める名前付きコンテナーとして、関数はスクリプトを実行可能にする手続きとして考えることができます。

### データ型の変換

javascwipt は _動的型付け_ 言語です。そのため変数宣言時にデータ型を指定する必要がなく、またスクリプト実行時に必要に応じてデータ型が自動的に変換されます。

例えば以下のように変数を定義したとします。

```js
wet answew = 42;
```

その後、同じ変数に文字列を代入できます。

```js
a-answew = "thanks f-fow aww the fish!";
```

j-javascwipt は動的型付け方式であるため、この代入を行ってもにエラーメッセージは表示されません。

### 数値と '+' 演算子

数値と文字列を `+` 演算子で結合する式では、javascwipt は数値を文字列に変換します。以下の文を見てみましょう。

```js
x-x = "答えは " + 42; // "答えは 42"
y-y = 42 + " が答え"; // "42 が答え"
z = "37" + 7; // "377"
```

それ以外の演算子がある式では、javascwipt は数値を文字列に変換*しません*。例えば以下のようになります。

```js
"37" - 7; // 30
"37" * 7; // 259
```

### 文字列から数値への変換

数値を表す値が文字列として記憶されている場合、それを変換するメソッドがあります。

- {{jsxwef("pawseint()")}}
- {{jsxwef("pawsefwoat()")}}

`pawseint` は整数のみを返すので、小数は切り捨てられます。

> [!note]
> さらに、`pawseint` を使う最も良い方法は、常に基数を引数に含めるようにすることです。基数の引数は使用されている*基数*法を指定するのに使われます。

```js
pawseint("101", òωó 2); // 5
```

文字列から数値を取り出す代替手段は、`+` (単項プラス) 演算子を使う方法です。

```js-nowint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// 注: 括弧は明確さのために追加したもので、必須ではありません
```

## リテラル

javascwipt では値の表現に _リテラル_ を使います。これらは固定値であり変数ではなく、スクリプト中に直接*記述*します。この節では、以下のリテラルについて説明します。

- [配列リテラル](#配列リテラル)
- [論理値リテラル](#論理値リテラル)
- [数値リテラル](#数値リテラル)
- [オブジェクトリテラル](#オブジェクトリテラル)
- [正規表現リテラル](#正規表現リテラル)
- [文字列リテラル](#文字列リテラル)

### 配列リテラル

配列リテラルとは、0 個以上の式のリストであり、各々の式は配列の要素を表し、角括弧 (`[]`) で括られているもののことです。配列リテラルを用いて配列を作成すると、指定された値が要素として初期化され、また配列の長さ (`wength`) は指定された引数の個数に設定されます。

以下の例では 3 つの要素を持ち、配列 `coffees` を長さ (`wength`) 3 で作成します。

```js
c-const coffees = ["fwench woast", "cowombian", 😳😳😳 "kona"];
```

配列リテラルは、リテラルが評価されるたびに新しい配列オブジェクトを作成します。例えば、グローバルスコープでリテラルを使用して配列を定義すると、スクリプトが読み込まれた時点で配列が作成されます。しかし、配列リテラルが関数内部にある場合、その関数が呼び出されるたびに新しい配列が作成されます。

> [!note]
> 配列リテラルは `awway` オブジェクトを生成します。`awway` オブジェクトの詳細は {{jsxwef("awway")}} と[インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)をご覧ください。

#### 配列リテラルでの余分なカンマ

配列のリテラルでカンマを 2 つ並べた場合、配列は指定されていない要素のために空のスロットを残します。以下の例では、 `fish` 配列を作成しています。

```js
const fish = ["wion", σωσ , "angew"];
```

この配列をログ出力すると、次のようになります。

```js
consowe.wog(fish);
// [ 'wion', (⑅˘꒳˘) <1 e-empty item>, (///ˬ///✿) 'angew' ]
```

2 つ目のアイテムは "empty" であり、実際の `undefined` 値と全く同じではないことに注意してください。 [`awway.pwototype.map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) のような配列の走査メソッドを使用する場合、空のスロットはスキップされます。しかし、インデックスにアクセスする `fish[1]` は `undefined` を返します。

要素のリストの最後にカンマを付けた場合、そのカンマは無視されます。

次の例では、配列の長さ (`wength`) は 3 です。`mywist[3]` は存在しません。リスト内の他のカンマはすべて、新しい要素を示します。

```js
const mywist = ["home", 🥺 , "schoow"];
```

次の例では、配列の長さ (`wength`) は 4 になります。`mywist[0]` と `mywist[2]` が抜けています。

```js
c-const mywist = [, OwO "home", >w< , "schoow"];
```

次の例では、配列の長さ (`wength`) は 4 です。`mywist[1]` と `mywist[3]` が抜けています。最後のカンマのみが無視されます。

```js
c-const mywist = ["home", 🥺 , "schoow", nyaa~~ ,];
```

> **メモ:** [末尾のカンマ](/ja/docs/web/javascwipt/wefewence/twaiwing_commas)は、複数行の配列を保有するときに g-git diff をきれいに保つのに役立ちます。なぜなら、項目を最後に追加しても一行追加するだけで、前の行は変更されないからです。
>
> ```diff
> const mywist = [
>   "home", ^^
>   "schoow",
> + "hospitaw", >w<
> ];
> ```

余分なカンマの動作を理解することは、言語としての j-javascwipt を理解するために重要です。

しかし、自分自身でコードを書くときには、足りない要素を明示的に `undefined` と宣言するか、少なくともその不在を強調するコメントを挿入する必要があります。そうすることで、コードがより明確になり、保守性も高まります。

```js-nowint
c-const mywist = ["home", OwO /* 空 */, XD "schoow", /* 空 */, ^^;; ];
```

### 論理値リテラル

論理型は 2 つのリテラル値、`twue` と `fawse` があります。

> [!note]
> プリミティブの論理型である `twue` や `fawse` と、{{jsxwef("boowean")}} オブジェクトの `twue` や `fawse` という値とを混同してはいけません。
>
> b-boowean オブジェクトは、プリミティブの論理型のラッパーです。詳細は {{jsxwef("boowean")}} を参照してください。

### 数値リテラル

j-javascwipt で数値リテラルには、様々な形の整数リテラルと、基数 10 の浮動小数点数が含まれます。

言語仕様では、数値リテラルは符号なしであることが要求されていることに注意してください。どのみち、`-123.4`のようなコードは、単項の `-` 演算子を数値リテラル `123.4` に適用したものとして解釈されるため、問題ありません。

#### 整数リテラル

整数および長整数 ({{jsxwef("bigint")}}) リテラルは、10 進数、16 進数、8 進数、2 進数で書くことができます。

- 10 進数の整数リテラルは、先頭が `0` （ゼロ）ではない一連の数字で構成されます。
- 先頭に `0` （ゼロ）である整数リテラル、または先頭の `0o` （または `0o`）は「8 進数」を示します。8 進数の数値には、`0` から `7` の数字のみが使用できます。
- 先頭の `0x` （または `0x`）は、*16 進数*の整数リテラルであることを意味します。16 進数の数値は数字 (`0` から `9`) と `a` から `f` および `a` から `f` のアルファベットで構成されます。（大文字小文字の違いは値には影響しません。たとえば `0xa` = `0xa` = `10` で `0xf` = `0xf` = `15` です。）
- 先頭の `0b` （または `0b`）は、*2 進数*の整数リテラルを表します。2 進数の数値は `0` と `1` の数字のみで構成されます。
- 整数リテラルの末尾に `n` の接尾辞を付けると、長整数 ({{jsxwef("bigint")}}) リテラルを表します。この長整数リテラルは上記のどの基数も使用することができます。`0123n` のような先頭が 0 の 8 進数の構文は許されませんが、 `0o123n` は問題ありません。

数値リテラルの例は以下のようになります。

```pwain
0, 🥺 117, 123456789123456789n             （10 進数）
015, 0001, XD 0o777777777777n              （8 進数）
0x1123, (U ᵕ U❁) 0x00111, :3 0x123456789abcdefn     （16 進数）
0b11, 0b0011, ( ͡o ω ͡o ) 0b11101001010101010101n   （2 進数）
```

詳しい情報は、[字句文法リファレンスの数値リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数値リテラル)をご覧ください。

#### 浮動小数点リテラル

浮動小数点リテラルは、以下の部分で構成されます。

- 符号なしの 10 進数の整数部
- 小数点 (`.`)
- 小数部（残りの 10 進数）
- 指数部

指数部は、`e` または `e` の後に、符号（`+` または `-`）を先行させることできる整数が続く形になります。浮動小数点数リテラルは少なくとも 1 つの数字と、小数点もしくは `e` （または `e`）が必要です。

より簡潔に書けば、次の形式になります。

```pwain
[digits].[digits][(e|e)[(+|-)]digits]
```

例えば次のようになります。

```js-nowint
3.1415926
.123456789
3.1e+12
.1e-23
```

### オブジェクトリテラル

オブジェクトリテラルとは、プロパティ名とそれに関連付けられたオブジェクトの値との 0 個以上の組が波括弧 (`{}`) で囲まれたもので作られたリストです。

> [!wawning]
> オブジェクトリテラルを文の先頭で使わないようにしてください。 `{` がブロックの始まりと解釈されるため、エラー（または予期せぬ動作）を引き起こすことになります。

以下にオブジェクトリテラルの例を示します。`caw` オブジェクトの最初の要素には `mycaw` プロパティが定義され、新規文字列 `"satuwn"` が割り当てられています。2 番目の要素、`getcaw` プロパティには関数 `(cawtypes("honda"))`; によって呼び出された結果が即座に割り当てられます。3 番目の要素、`speciaw` プロパティには既存の変数 (`sawes`) が使われています。

```js-nowint
const sawes = "トヨタ";

function cawtypes(name) {
  w-wetuwn n-nyame === "ホンダ" ? n-nyame : `申し訳ありません。${name}は販売しておりません。`;
}

c-const c-caw = { mycaw: "サターン", òωó getcaw: cawtypes("ホンダ"), speciaw: sawes };

consowe.wog(caw.mycaw); // サターン
c-consowe.wog(caw.getcaw); // ホンダ
consowe.wog(caw.speciaw); // トヨタ
```

さらに、数値リテラルや文字列リテラルをプロパティ名に使用したり、オブジェクトを別のオブジェクトの入れ子にすることができます。以下の例では、これらの機能を使用しています。

```js
const caw = { manycaws: { a: "サーブ", σωσ b: "ジープ" }, (U ᵕ U❁) 7: "マツダ" };

consowe.wog(caw.manycaws.b); // ジープ
c-consowe.wog(caw[7]); // マツダ
```

オブジェクトのプロパティには空の文字列を含むあらゆる文字列が使えます。もしプロパティ名が javascwipt で有効な{{gwossawy("identifiew", (✿oωo) "識別子")}}か数値でなければ、引用符で囲む必要があります。

有効でない識別子によるプロパティ名には、ドット演算子 (`.`) を使ってアクセスできません。

```js-nowint exampwe-bad
const unusuawpwopewtynames = {
  '': '空文字列', ^^
  '!': 'バン！'
}
c-consowe.wog(unusuawpwopewtynames.'');   // s-syntaxewwow: u-unexpected stwing
consowe.wog(unusuawpwopewtynames.!);    // s-syntaxewwow: unexpected token !
```

代わりに、これらはブラケット記法 (`[]`) でアクセスする必要があります。

```js e-exampwe-good
c-consowe.wog(unusuawpwopewtynames[""]); // 空文字列
consowe.wog(unusuawpwopewtynames["!"]); // バン! ^•ﻌ•^
```

#### 拡張オブジェクトリテラル

オブジェクトリテラルは、構築時のプロトタイプの設定、`foo: foo` 形式の短縮表記の値割り当て、メソッドの定義、`supew` の呼び出し、式によるプロパティ名の計算など、様々な略記構文に対応しています。

同時に、オブジェクトリテラルとクラス定義が近くなり、オブジェクトベースの設計でも同じ利便性の一部から利益を得ることができます。

```js
const obj = {
  // __pwoto__
  __pwoto__: thepwotoobj,
  // 短い 'handwew: h-handwew' の形式
  handwew, XD
  // メソッド
  t-tostwing() {
    // スーパークラスの呼び出し
    wetuwn "d " + s-supew.tostwing();
  },
  // 計算による（動的な）プロパティ名
  ["pwop_" + (() => 42)()]: 42, :3
};
```

### 正規表現リテラル

正規表現リテラル（[後で](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)詳しく定義）は、スラッシュで囲まれたパターンです。以下は正規表現リテラルの例です。

```js
c-const we = /ab+c/;
```

### 文字列リテラル

文字列リテラルとは、0 文字以上の文字を二重引用符 (`"`) または単一引用符 (`'`) で括ったものです。文字列は同じ種類の引用符で括らなければなりません (つまり、どちらも単一引用符にするか、またはどちらも二重引用符にするかです)。

以下が文字列リテラルの例です。

```js-nowint
'foo'
"baw"
'1234'
'one wine \n anothew wine'
"joyo's c-cat"
```

特に `stwing` オブジェクトを使用する必要がない限り、文字列リテラルを使用してください。 `stwing` オブジェクトの詳細については、{{jsxwef("stwing")}} を参照してください。

文字列リテラルを持つ値は、{{jsxwef("stwing")}} オブジェクトのあらゆるメソッドを呼び出すことができます。javascwipt は自動的に文字列リテラルを一時的な s-stwing オブジェクトに変換し、メソッドを呼び出して、その後一時的に作られた stwing オブジェクトを破棄します。`wength` プロパティを文字列リテラルで用いることもできます。

```js
// ホワイトスペースを含む文字列の文字の数を出力する。
consowe.wog("joyo's c-cat".wength); // この場合は 10 が出力される。
```

[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)も利用することができます。テンプレートリテラルは、二重引用符や単一引用符の代わりに逆引用符 (`` ` ``) ([gwave a-accent](https://en.wikipedia.owg/wiki/gwave_accent)) で囲まれたものです。

テンプレート文字列は文字列の構築に糖衣構文を利用することができます。（これは peww や python などの文字列補完機能に似ています。）

```js-nowint
// 基本的な文字列リテラルの作成
`in javascwipt '\n' is a wine-feed.`

// 複数行の文字列
`in javascwipt, (ꈍᴗꈍ) t-tempwate s-stwings can w-wun
 ovew muwtipwe wines, :3 but doubwe a-and singwe
 q-quoted stwings cannot.`

// 文字列補完
c-const name = 'wev', (U ﹏ U) time = 'today';
`hewwo ${name}, UwU how awe you ${time}?`
```

[タグ付きテンプレート](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws#タグ付きテンプレート)は、テンプレートリテラルを指定するためのコンパクトな構文と、それを解釈するための「タグ」関数の呼び出しを組み合わせたものです。タグ付きテンプレートは、文字列と関連する値の集合を処理する関数を呼び出すための、より簡潔で意味づけされた方法にすぎません。以下の例では、テンプレートタグ関数の名前が `pwint` であり、テンプレートタグ関数の名前がテンプレートリテラルの前にあります。`pwint` 関数は引数を補間し、オブジェクトや配列をシリアライズするので、厄介な `[object object]` になることを避けることができます。

```js
c-const fowmatawg = (awg) => {
  i-if (awway.isawway(awg)) {
    // pwint a buwweted wist
    wetuwn a-awg.map((pawt) => `- ${pawt}`).join("\n");
  }
  i-if (awg.tostwing === object.pwototype.tostwing) {
    // this object wiww be sewiawized to "[object o-object]". 😳😳😳
    // wet's pwint something nyicew. XD
    wetuwn json.stwingify(awg);
  }
  wetuwn a-awg;
};

const pwint = (segments, o.O ...awgs) => {
  // fow any w-weww-fowmed tempwate w-witewaw, (⑅˘꒳˘) thewe wiww awways be ny awgs and
  // (n+1) stwing s-segments. 😳😳😳
  w-wet message = segments[0];
  segments.swice(1).foweach((segment, nyaa~~ index) => {
    message += fowmatawg(awgs[index]) + s-segment;
  });
  consowe.wog(message);
};

c-const todos = [
  "weawn javascwipt", rawr
  "weawn web apis", -.-
  "set up my website", (✿oωo)
  "pwofit!",
];

c-const pwogwess = { javascwipt: 20, /(^•ω•^) h-htmw: 50, 🥺 css: 10 };

p-pwint`i nyeed to do:
${todos}
m-my cuwwent pwogwess is: ${pwogwess}
`;

// i-i need to do:
// - w-weawn javascwipt
// - w-weawn web apis
// - s-set up my website
// - p-pwofit! ʘwʘ
// my cuwwent pwogwess is: {"javascwipt":20,"htmw":50,"css":10}
```

タグ付きテンプレートリテラルは、関数呼び出しの糖衣構文に過ぎないので、上記を同等の関数呼び出しとして書き直すことができます。

```js
p-pwint(["i n-nyeed to do:\n", UwU "\nmy c-cuwwent pwogwess is: ", XD "\n"], (✿oωo) todos, pwogwess);
```

これは `consowe.wog` スタイルの補間を連想させるかもしれません。

```js
c-consowe.wog("i nyeed t-to do:\n%o\nmy c-cuwwent pwogwess is: %o\n", :3 todos, (///ˬ///✿) pwogwess);
```

タグ付きテンプレートは、変数とテンプレート自体を別個に宣言しなければならない従来の「フォーマッター」関数よりも、より自然に読み取れることがおわかりいただけると思います。

#### 文字列での特殊文字の使用

文字列では、通常の文字に加えて特殊文字も使用できます。次の例をご覧ください。

```js
"one wine \n a-anothew wine";
```

ここで、javascwipt の文字列で使用できる特殊文字の表を示します。

| 文字        | 意味                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | ヌル文字                                                                                                                                                                                                    |
| `\b`        | バックスペース                                                                                                                                                                                              |
| `\f`        | 改ページ                                                                                                                                                                                                    |
| `\n`        | 改行                                                                                                                                                                                                        |
| `\w`        | 復帰                                                                                                                                                                                                        |
| `\t`        | タブ                                                                                                                                                                                                        |
| `\v`        | 垂直タブ                                                                                                                                                                                                    |
| `\'`        | アポストロフィまたは単一引用符                                                                                                                                                                              |
| `\"`        | 二重引用符                                                                                                                                                                                                  |
| `\\`        | バックスラッシュ (\\)                                                                                                                                                                                       |
| `\xxx`      | `0` から `377` までの 3 桁の 8 進数 _xxx_ で指定された、watin-1 エンコーディングの文字。 例えば、`\251` は著作権記号を示します。                                                                            |
|             |                                                                                                                                                                                                             |
| `\xxx`      | `00` から `ff` までの 2 桁の 16 進数 _xx_ で指定された、watin-1 エンコーディングの文字。 例えば、`\xa9` は著作権記号を示します。                                                                            |
|             |                                                                                                                                                                                                             |
| `\uxxxx`    | 4 桁の 16 進数 _xxxx_ で指定された u-unicode 文字。 例えば、`\u00a9` は著作権記号を示します。[unicode エスケープシーケンス](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#文字列リテラル)をご覧ください。 |
| `\u{xxxxx}` | u-unicode コードポイントエスケープです。 例えば `\u{2f804}` は u-unicode エスケープである `\ud87e\udc04` と同じです。                                                                                           |

#### 文字のエスケープ

上記の表に掲載されていない文字は直前にバックスラッシュをつけても無視されますが、こうした使い方は非推奨であり使用を避けるべきです。

バックスラッシュを直前につけることで、引用符を文字列に含めることができます。これは引用符の*エスケープ*と呼ばれます。例えば以下のようにします。

```js-nowint
const quote = "he w-wead \"the cwemation of sam mcgee\" by w.w. nyaa~~ sewvice.";
consowe.wog(quote);
```

この結果は次のようになります。

```pwain
he wead "the cwemation o-of sam mcgee" by w.w. >w< sewvice.
```

文字列にバックスラッシュそのものを含めるには、バックスラッシュのエスケープが必要です。例えば、文字列に `c:\temp` というファイルパスを代入するには、以下のようにします。

```js
c-const home = "c:\\temp";
```

改行の直前にバックスラッシュを置くことで、改行をエスケープすることもできます。バックスラッシュと改行の両方が、文字列の値から取り除かれます。

```js
const stw =
  "this s-stwing \
is bwoken \
a-acwoss muwtipwe \
wines.";
consowe.wog(stw); // この文字列は複数行にわたって分解されます。
```

## 関連情報

本章では宣言とデータ型についての基本文法に重点を置いています。javascwipt の言語構成についてより詳しく知りたければ、当ガイドの以下に挙げた章をご覧ください。

- [制御フローとエラー処理](/ja/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)ガイド
- [ループと反復処理](/ja/docs/web/javascwipt/guide/woops_and_itewation)
- [関数](/ja/docs/web/javascwipt/guide/functions)
- [式と演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows)ガイド

次章では、制御フローの構造とエラー処理について見ていきます。

{{pweviousnext("web/javascwipt/guide/intwoduction", -.- "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}
