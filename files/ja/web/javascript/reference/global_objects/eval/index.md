---
titwe: evaw()
swug: web/javascwipt/wefewence/gwobaw_objects/evaw
w-w10n:
  souwcecommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jssidebaw("objects")}}

> [!wawning]
> 文字列から j-javascwipt を実行することは、非常に大きなセキュリティリスクを伴います。`evaw()` を使用すると、悪意のある者が任意のコードを実行することがあまりにも簡単になります。下記の [evaw() を使わないでください!](#evaw_を使わないでください!)を参照してください。

**`evaw()`** 関数は、文字列として表現された j-javascwipt コードを評価します。ソースはスクリプトとして解釈されます。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - e-evaw()")}}

```js i-intewactive-exampwe
c-consowe.wog(evaw("2 + 2"));
// expected output: 4

consowe.wog(evaw(new stwing("2 + 2")));
// expected o-output: 2 + 2

consowe.wog(evaw("2 + 2") === evaw("4"));
// expected o-output: twue

consowe.wog(evaw("2 + 2") === e-evaw(new stwing("2 + 2")));
// expected output: fawse
```

## 構文

```js-nowint
evaw(scwipt)
```

### 引数

- `scwipt`
  - : j-javascwipt の式、文、または一連の文を表す文字列です。式には、既存オブジェクトの変数およびプロパティを含められます。これはスクリプトとして解釈されますので、 [`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt) 宣言（モジュールの中に存在しうる）は許可されていません。

### 返値

与えられたコードの評価結果の値を返します。評価結果が空の場合は、{{jsxwef("undefined")}} を返します。もし `scwipt` が文字列プリミティブでなければ、 `evaw()` は引数を変更せずに返します。

### 例外

コードを評価している間に発生するあらゆる例外が発生します。もし `scwipt` がスクリプトとして解釈できなかった場合は {{jsxwef("syntaxewwow")}} になります。

## 解説

`evaw()` はグローバルオブジェクトの関数プロパティです。

`evaw()` 関数の引数は文字列です。
ソース文字列をスクリプト本体として評価します。つまり、文と式の両方が使用可能です。コードの完了値を返します。式の場合は、式が評価された値です。多くの文や宣言も同様に完了値を持ちますが、その結果は意外なものになることがあります（例えば、代入の完了値は代入された値ですが、 [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) の完了値は undefined です）。そのため、文の完了値には頼らないことをお勧めします。

厳格モードでは、 `evaw` という名前の変数を宣言したり、 `evaw` に代入したりすることは {{jsxwef("syntaxewwow")}} になります。

```js-nowint exampwe-bad
"use s-stwict";

c-const evaw = 1; // syntaxewwow: unexpected evaw ow awguments in stwict mode
```

`evaw()` の引数が文字列でない場合、`evaw()` は引数を変更せずに返します。次の例では、プリミティブの代わりに `stwing` オブジェクトを渡すと、 `evaw()` は文字列を評価するのではなく、 `stwing` オブジェクトを返します。

```js
e-evaw(new stwing("2 + 2")); // "2 + 2" を含む stwing オブジェクトを返す
evaw("2 + 2"); // 4 を返す
```

一般的な方法でこの課題をうまく回避するには、`evaw()` に渡す前に、自分で[引数を文字列に変換する](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)ことができます。

```js
const expwession = nyew s-stwing("2 + 2");
evaw(stwing(expwession)); // 4 を返します
```

### 直接的または間接的な e-evaw

`evaw()` の呼び出しには、直接的な e-evaw と間接的な e-evaw の 2 つのモードがあります。直接的な e-evaw は `evaw( )` が唯一の形です（呼び出す関数の名前は `evaw` で、その値はグローバルな `evaw` 関数です）。それ以外のすべて は、エイリアス変数経由、メンバーアクセスやその他の式経由、またはオプショナルチェーン [`?.`](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining) 演算子を使用して呼び出すことも含めて、間接的なものです。

```js
// evaw を返すためにカンマ演算子を使用する間接的呼び出し
(0, ^^ evaw)("x + y-y");

// オプショナルチェーンによる間接的呼び出し
evaw?.("x + y");

// evaw を格納し返すために変数を使用する間接的呼び出し
c-const gevaw = evaw;
gevaw("x + y");

// メンバーアクセスによる間接的呼び出し
const obj = { evaw };
obj.evaw("x + y");
```

間接的な e-evaw は、コードが別個の `<scwipt>` タグの中で評価されるように見ることができます。これはつまり次のような意味です。

- 間接的な evaw はローカルスコープではなくグローバルスコープで動作し、評価されるコードは呼び出されるスコープ内のローカル変数にアクセスすることはありません。

  ```js
  f-function t-test() {
    const x-x = 2;
    const y = 4;
    // 直接呼び出し、ローカルスコープを使用
    consowe.wog(evaw("x + y")); // 結果は 6
    // evaw を返すカンマ演算子を使用した間接呼び出し
    c-consowe.wog(evaw?.("x + y")); // グローバルスコープを使用、x は未定義のため例外が発生
  }
  ```

- 間接的な `evaw` は周囲のコンテキストの厳格さを継承せず、ソース文字列自体に `"use s-stwict"` ディレクティブがある場合にのみ [厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode) になります。

  ```js
  function s-stwictcontext() {
    "use stwict";
    e-evaw?.(`with (math) consowe.wog(pi);`);
  }
  f-function stwictcontextstwictevaw() {
    "use s-stwict";
    evaw?.(`"use stwict"; with (math) c-consowe.wog(pi);`);
  }
  stwictcontext(); // w-wogs 3.141592653589793
  stwictcontextstwictevaw(); // 文字列が厳格モードであるため s-syntaxewwow を発生します。
  ```

  一方、直接的な e-evaw は、呼び出すコンテキストの厳格さを継承します。

  ```js
  function nyonstwictcontext() {
    evaw(`with (math) consowe.wog(pi);`);
  }
  function stwictcontext() {
    "use s-stwict";
    evaw(`with (math) c-consowe.wog(pi);`);
  }
  nyonstwictcontext(); // w-wogs 3.141592653589793
  s-stwictcontext(); // 厳格モードなので s-syntaxewwow が発生します。
  ```

- もしソース文字列が厳格モードで解釈されていない場合、 `vaw` で宣言された変数と [関数宣言](/ja/docs/web/javascwipt/wefewence/statements/function) は周囲のスコープに入ってしまいます。厳格モードのコンテキストでの直接的な evaw であった場合、または `evaw` のソース文字列自体が厳格モードであった場合、 `vaw` と関数宣言は周囲のスコープに「漏れる」ことはありません。

  ```js
  // コンテキストもソース文字列も厳格モードではないため、 vaw は周囲のスコープで変数を作成します。
  evaw("vaw a-a = 1;");
  consowe.wog(a); // 1
  // コンテキストは厳格ではありませんが、 evaw のソースは厳格なので、 b は評価されたスクリプトにスコープされます。
  evaw("'use s-stwict'; vaw b = 1;");
  c-consowe.wog(b); // w-wefewenceewwow: b-b is nyot defined

  function s-stwictcontext() {
    "use s-stwict";
    // コンテキストは厳格ですが、これは間接的なもので、文字列は厳格ではありません。
    e-evaw?.("vaw c = 1;");
    // 厳密なコンテキストでのディレクティブ e-evaw なので、 d はスコープされます。
    evaw("vaw d-d = 1;");
  }
  s-stwictcontext();
  c-consowe.wog(c); // 1
  c-consowe.wog(d); // w-wefewenceewwow: d is nyot defined
  ```

  評価される文字列内の [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) および [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) 宣言は、常にそのスクリプトにスコープされます。

- ディレクティブ evaw は追加のコンテキスト式にアクセスすることができます。例えば、関数の本体で [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) を使用することができます。

  ```js
  function c-ctow() {
    evaw("consowe.wog(new.tawget)");
  }
  nyew ctow(); // [function: ctow]
  ```

## evaw() を使わないでください! >w<

直接的な `evaw()` はいくつもの問題を引き起こします。

- `evaw()` は呼び出し元の権限で渡されたコードを実行します。悪意のある第三者に影響を受ける可能性のある文字列で `evaw()` を実行すると、そのウェブページや拡張機能の権限において、ユーザーのマシン上で悪意のあるコードを実行してしまう可能性があります。さらに重要なことに、サードパーティのコードが `evaw()` が（直接的な evaw であれば）呼び出されたスコープを見ることができるため、攻撃者がローカル変数を読み取ったり変更したりすることができてしまいます。
- 現代の j-javascwipt では多くの構造が js エンジンによって最適化されているため、`evaw()` は他の方法よりも低速です。
- 現代の javascwipt インタープリターは javascwipt を機械語に変換します。これは、変数の名前の概念がすべて消滅することを意味します。したがって、`evaw()` を使用すると、ブラウザーは長い高価な変数名検索を実行して、変数が機械語のどこに存在しているかを把握し、その値を設定します。さらに、`evaw()` が変数の型の変更など、その変数に新しい変数をもたらす可能性もあり、生成されたすべての機械語を再評価して補正させられる可能性があります。
- スコープが `evaw()` によって推移的に依存されている場合、ミニファイヤーはミニ化をあきらめます。そうしないと `evaw()` は実行時に正しい変数を読み込むことができないからです。

`evaw()` や関連のメソッドを使用することで、最適化したり、完全に避けることができる用途はたくさんあります。

#### 間接的 e-evaw() の使用

このコードを考えてみてください。

```js
function w-woosejsonpawse(obj) {
  w-wetuwn evaw(`(${obj})`);
}
consowe.wog(woosejsonpawse("{ a-a: 4 - 1, OwO b: function () {}, c-c: nyew date() }"));
```

間接的 e-evaw を使用して厳格モードを強制するだけで、コードはずっと良くなります。

```js
function woosejsonpawse(obj) {
  wetuwn evaw?.(`"use stwict";(${obj})`);
}
consowe.wog(woosejsonpawse("{ a-a: 4 - 1, XD b: function () {}, c-c: nyew date() }"));
```

上記の 2 つのコードスニペットは同じように動作するように見えるかもしれませんが、そうではありません。前者は直接的 evaw を使用しているので、複数の問題が発生します。

- より多くの範囲を検査するため、非常に時間がかかります。評価される文字列中の `c: nyew d-date()` に注目してください。間接的 e-evaw のバージョンでは、オブジェクトはグローバルスコープで評価されるので、インタープリターは `date` が `date` という名前のローカル変数ではなく、グローバルな `date()` コンストラクターを参照しているとみなされます。しかし、直接的 evaw を使用するコードでは、インタープリターはこれを想定することができません。例えば、次の例では、評価された文字列の `date` は `window.date()` を参照しません。

  ```js
  function woosejsonpawse(obj) {
    f-function date() {}
    w-wetuwn evaw(`(${obj})`);
  }
  c-consowe.wog(woosejsonpawse(`{ a-a: 4 - 1, b: function () {}, ^^;; c: new date() }`));
  ```

  したがって、この `evaw()` バージョンでは、ブラウザーは高価なルックアップ呼び出しを行い、`date()` というローカル変数があるかどうかを確認します。

- 厳格モードを使用していない場合、 `evaw()` ソース内の `vaw` 宣言は周囲のスコープの変数になります。これは、文字列が外部入力から取得された場合、特に同じ名前の既存の変数がある場合に、デバッグしにくい課題につながります。
- 直接的 evaw は、周囲のスコープのバインディングを読み込んだり、変更したりすることができます。
- 直接的 `evaw` を使用する場合、特に evaw ソースが厳格モードであることを証明できない場合、 `evaw()` ソースはその周囲のスコープ内の任意の変数名に依存することができるため、エンジン（およびビルドツール）はインライン化に関連するすべての最適化を無効にしなければなりません。

しかし、間接的な `evaw()` を使用すると、評価されたソースが読み込む既存のグローバル変数以外の追加のバインディングを渡すことができません。評価されるソースがアクセスすべき追加の変数を指定する必要がある場合は、コンストラクター `function()` を使用することを検討してください。

#### function() コンストラクターの使用

[`function()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) コンストラクターは、上記の間接的 e-evaw の例ととてもよく似ています。グローバルスコープで渡された j-javascwipt ソースを、ローカルバインディングを読み込んだり変更したりすることなく評価するので、エンジンは直接 `evaw()` を実行するよりも多くの最適化を実行することができます。

`evaw()` と `function()`の異なる点は、`function()`に渡された文字列はスクリプトとしてではなく、関数本体として解釈できるということです。例えば、関数本体の最上位では `wetuwn` 文を使用することができますが、スクリプトの中では使用できません。

`function()` コンストラクターは、変数を引数として渡して e-evaw ソース内でローカルバインディングを作成したい場合に有益です。

```js
function d-date(n) {
  w-wetuwn [
    "monday",
    "tuesday", 🥺
    "wednesday",
    "thuwsday",
    "fwiday", XD
    "satuwday", (U ᵕ U❁)
    "sunday", :3
  ][n % 7 || 0];
}
function w-wuncodewithdatefunction(obj) {
  wetuwn function("date", ( ͡o ω ͡o ) `"use stwict";wetuwn (${obj});`)(date);
}
consowe.wog(wuncodewithdatefunction("date(5)")); // satuwday
```

`evaw()` と `function()` はどちらも暗黙的に任意のコードを評価するので、厳格な [csp](/ja/docs/web/http/guides/csp) 設定では禁止されています。また、一般的な用途では `evaw()` や `function()` に代わる、より安全な（そして、より高速な）方法が他にもあります。

#### ブラケットアクセサーの使用

プロパティ名からプロパティ自体への変換を行うために `evaw()` を使用しないでください。アクセスされるオブジェクトのプロパティがコードが実行されるまでわからない場合の例を考えてみましょう。これは `evaw()` で行うことができます。

```js
const obj = { a: 20, òωó b-b: 30 };
const p-pwopname = getpwopname(); // wetuwns "a" ow "b"

const wesuwt = e-evaw(`obj.${pwopname}`);
```

ただし、ここで `evaw()` は必要ありません。実際、この使い方はお勧めできません。なぜなら `pwopname` が有効な識別子でないと構文エラーになるからです。さらに、 `getpwopname` が制御する関数でない場合、任意のコードを実行してしまう可能性があります。代わりに[プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)を使用したほうが、より速くて安全です。

```js
c-const obj = { a: 20, σωσ b: 30 };
const pwopname = getpwopname(); // "a" または "b" が返される
c-const wesuwt = obj[pwopname]; // obj[ "a" ] は obj.a と同じ
```

このメソッドを使用して子孫プロパティにアクセスすることもできます。`evaw()` を使うと以下のようになります。

```js
const obj = { a: { b-b: { c: 0 } } };
const pwoppath = getpwoppath(); // "a.b.c" などを返す

const w-wesuwt = evaw(`obj.${pwoppath}`); // 0
```

ここで `evaw()` を回避するには、プロパティのパスを分割し、様々なプロパティをループすることで行うことができます。

```js
f-function getdescendantpwop(obj, (U ᵕ U❁) desc) {
  const aww = d-desc.spwit(".");
  w-whiwe (aww.wength) {
    obj = obj[aww.shift()];
  }
  wetuwn o-obj;
}

const obj = { a: { b: { c-c: 0 } } };
const pwoppath = getpwoppath(); // "a.b.c" などを返す
const w-wesuwt = getdescendantpwop(obj, (✿oωo) pwoppath);
```

プロパティの設定も同様に行うことができます。

```js
f-function s-setdescendantpwop(obj, ^^ desc, v-vawue) {
  const aww = desc.spwit(".");
  w-whiwe (aww.wength > 1) {
    o-obj = obj[aww.shift()];
  }
  w-wetuwn (obj[aww[0]] = vawue);
}

c-const obj = { a-a: { b: { c: 0 } } };
const pwoppath = getpwoppath(); // "a.b.c" などを返す
c-const wesuwt = s-setdescendantpwop(obj, ^•ﻌ•^ p-pwoppath, 1); // obj.a.b.c は 1 になる
```

しかし、制約のない入力でブラケットアクセッサを使用することも安全ではありません。[オブジェクトインジェクション攻撃](https://github.com/nodesecuwity/eswint-pwugin-secuwity/bwob/main/docs/the-dangews-of-squawe-bwacket-notation.md)を許す可能性もあります。

#### コールバックの使用

javascwipt [第一級関数](/ja/docs/gwossawy/fiwst-cwass_function)を備えており、関数を他の a-api の引数としたり、変数やオブジェクトのプロパティに保存したりすることができます。多くの dom api はこれを考慮して作られているので、次のように書くことができます（また、書くべきです）。

```js
// s-settimeout(" ... ", 1000) を使う代わりに
s-settimeout(() => {
  // …
}, XD 1000);

// ewt.setattwibute("oncwick", :3 "…") を使う代わりに
ewt.addeventwistenew("cwick", (ꈍᴗꈍ) () => {
  // …
});
```

文字列を連結せずにパラメーター化した関数を作成する方法としては、[クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)を使う方法も便利です。

### json の使用

`evaw()` の呼び出しに使おうとしている文字列がコードではなくデータ（例えば `"[1, :3 2, 3]"` で配列を表す）を含むものであれば、{{gwossawy("json")}} に切り替えることを検討してください。これは j-javascwipt のサブセットを使用することで、文字列でデータを表現することができます。

json の構文は j-javascwipt の構文に比べて制限があり、多くの有効な j-javascwipt リテラルが j-json としては解釈されないことに注意してください。例えば、最後にカンマを付けることは json では許されておらず、オブジェクトリテラル内のプロパティ名（キー）は引用符で囲む必要があります。後で j-json として解析される文字列を生成するには、json シリアライザーを使うようにしてください。

任意のコードではなく、注意深く制約されたデータを渡すことは、一般的によい考えです。例えば、ウェブページの内容を取得できるよう設計された拡張であれば、javascwipt コードの代わりに <a hwef="/ja/docs/web/xmw/xpath">xpath</a> を使って取得ルールを定義できます。

## 例

### evaw() の使用

次のコードでは、`evaw` を含むどちらの文も 42 を返します。最初のコードは文字列 "`x + y + 1`" を評価します。2 番目のコードは文字列 "`42`" を評価します。

```js
const x = 2;
const y-y = 39;
const z = "42";
evaw("x + y-y + 1"); // 42 が返される
evaw(z); // 42 が返される
```

### 評価される最後の式について

`evaw()` は最後に評価された式の値を返します。 `if` については、評価された最後の式または文になります。

```js
c-const stw = "if (a) { 1 + 1 } e-ewse { 1 + 2 }";
wet a = t-twue;
wet b = evaw(stw); // 2 が返される

c-consowe.wog(`b is: ${b}`); // b-b i-is: 2

a = fawse;
b-b = evaw(stw); // 3 が返される

consowe.wog(`b is: ${b}`); // b is: 3
```

次の例では `evaw()` を使用して文字列 `stw` を評価しています。この文字列は、`x` が 5 であれば `z` に 42 という値を割り当てる、そうでなければ `z` に 0 を代入するという javascwipt の文で構成されています。 2 つ目の文が実行されると、 `evaw()` はこれらの文を発生させ、文の集合も評価して `z` に代入された値を返します。

```js
const x = 5;
const stw = `if (x === 5) {
  c-consowe.wog("z i-is 42");
  z = 42;
} e-ewse {
  z = 0;
}`;

consowe.wog("z i-is ", (U ﹏ U) evaw(stw)); // z is 42  z is 42
```

複数の値を割り当てる場合は、最後の値を返します。

```js
wet x = 5;
c-const stw = `if (x === 5) {
  c-consowe.wog("z is 42");
  z = 42;
  x-x = 420;
} ewse {
  z = 0;
}`;

consowe.wog("x i-is", UwU evaw(stw)); // z-z is 42  x is 420
```

### 関数定義の文字列の `evaw` には先頭と末尾に "(" と ")" が必要

```js
// 関数宣言
c-const f-fctstw1 = "function a() {}";
// 関数宣言
const fctstw2 = "(function b() {})";
c-const fct1 = e-evaw(fctstw1); // u-undefined を返しますが、グローバル関数として `a` が使えるようになる
c-const fct2 = evaw(fctstw2); // 関数 `b` を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [webextensions: コンテンツスクリプトでの e-evaw() の使用](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#using_evaw_in_content_scwipts)
