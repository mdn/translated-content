---
title: 正規表現
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

正規表現とは、文字列内で文字の組み合わせを照合するために用いられるパターンです。
JavaScript では、正規表現はオブジェクトでもあります。これらのパターンは {{jsxref("RegExp")}} の {{jsxref("RegExp/exec", "exec()")}} および {{jsxref("RegExp/test", "test()")}} メソッドや、{{jsxref("String")}} の {{jsxref("String/match", "match()")}}、{{jsxref("String/matchAll", "matchAll()")}}、{{jsxref("String/replace", "replace()")}}、{{jsxref("String/replaceAll", "replaceAll()")}}、{{jsxref("String/search", "search()")}}、{{jsxref("String/split", "split()")}} メソッドで使用できます。
本章では、 JavaScript の正規表現について説明します。

## 正規表現の作成

正規表現は 2 通りの方法で作成することができます。

- 次のように、スラッシュで囲まれたパターンからなる正規表現リテラルを使用します。

  ```js
  const re = /ab+c/;
  ```

  正規表現リテラルはスクリプトの読み込み時にその正規表現をコンパイルします。
  正規表現が変化しない場合、この方法を使うとよいパフォーマンスが得られます。

- また、次のように {{jsxref("RegExp")}} オブジェクトのコンストラクター関数を呼び出す方法があります。

  ```js
  const re = new RegExp("ab+c");
  ```

  コンストラクター関数を使用すると、実行時にその正規表現をコンパイルします。
  正規表現パターンが変わることが分かっている場合や、パターンが分からない場合、ユーザー入力など別なところからパターンを取得する場合は、コンストラクター関数を使用してください。

## 正規表現パターンの記述

正規表現パターンは、 `/abc/` のような単純な文字、または `/ab*c/` や `/Chapter (\d+)\.\d*/` のような単純な文字と特殊文字との組み合わせからなります。
最後の例には記憶装置として用いられる丸括弧があります。
パターンのこの部分に一致した箇所は、後で使用できるように記憶されます。詳しくは[グループの使用](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences#using_groups)を参照してください。

> **メモ:** すでに正規表現の形式に慣れている方は、[早見表](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)を見て特定のパターンや構造を素早く検索することもできます。

### 単純なパターンの使い方

単純なパターンとは、直接一致するものを探したい文字で構成されたものです。例えば `/abc/` というパターンは、文字列の中で `"abc"` という並びが正確に現れる（すべての文字が連続しており、その順で並んでいる）場合のみ、文字の組み合わせに一致します。
`"Hi, do you know your abc's?"` や `"The latest airplane designs evolved from slabcraft."` 等の文字列には一致します。
どちらの場合でも、 `"abc"` という部分文字列に一致します。
`"Grab crab"` という文字列の場合、 `"ab c"` という部分文字列を含んでいますが、正確な `"abc"` という部分文字列を含んでいるわけではないので、一致しません。

### 特殊文字の使い方

直接の一致よりも高度な何かに一致するものを検索する場合、例えば 1 個以上の b を探したり、ホワイトスペースを見つけたりする場合、パターンに特殊文字を含めることができます。
例えば、 1 個の `"a"` に 0 個以上の `"b"` が続き、さらに `"c"` が続くものに一致させる場合、 `/ab*c/` というパターンを使用するでしょう。 `"b"` の後の `*` は「直前のアイテムの 0 回以上の出現」を意味します。
`"cbbabbbbcdebc"` という文字列では、このパターンは `"abbbbc"` という部分文字列に一致します。

以下のページで、正規表現で使用できる特殊文字の完全なリストとその意味を詳しく説明します。

- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - : アサーションには、行や単語の始まりと終わりを示す境界や、何らかの方法で一致する可能性を示すパターン（先読み、後追い、条件式など）が含まれます。
- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - : 異なるタイプの文字を判別します。例えば、アルファベットと数字を判別する。
- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)
  - : グループは複数のパターンを全体としてグループ化し、キャプチャグループは正規表現パターンを使用して文字列と一致させる際に、追加のサブ一致情報を提供します。後方参照は、同じ正規表現で以前に捕捉されたグループを参照します。
- [数量詞](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - : 一致させる文字や式の数を示します。
- [Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
  - : 大文字と小文字、数学記号、句読点など、 Unicode 文字のプロパティに基づき区別します。

正規表現で利用可能なすべての特殊文字を一つの表で見たい場合は、以下を参照してください。

<table class="standard-table">
  <caption>
    正規表現における特殊文字
  </caption>
  <thead>
    <tr>
      <th scope="col">文字 / 構造</th>
      <th scope="col">対応する記事</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>\</code>, <code>.</code>, <code>\cX</code>, <code>\d</code>,
        <code>\D</code>, <code>\f</code>, <code>\n</code>, <code>\r</code>,
        <code>\s</code>, <code>\S</code>, <code>\t</code>, <code>\v</code>,
        <code>\w</code>, <code>\W</code>, <code>\0</code>, <code>\xhh</code>,
        <code>\uhhhh</code>, <code>\uhhhhh</code>, <code>[\b]</code>
      </td>
      <td>
        <p>
          <a
            href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            >文字クラス</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>^</code>, <code>$</code>, <code>x(?=y)</code>,
        <code>x(?!y)</code>, <code>(?&#x3C;=y)x</code>,
        <code>(?&#x3C;!y)x</code>, <code>\b</code>, <code>\B</code>
      </td>
      <td>
        <p>
          <a
            href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            >アサーション</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>(x)</code>, <code>(?:x)</code>, <code>(?&#x3C;Name>x)</code>,
        <code>x|y</code>, <code>[xyz]</code>, <code>[^xyz]</code>,
        <code>\<em>Number</em></code>
      </td>
      <td>
        <p>
          <a
            href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences"
            >グループと後方参照</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>*</code>, <code>+</code>, <code>?</code>,
        <code>x{<em>n</em>}</code>, <code>x{<em>n</em>,}</code>,
        <code>x{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          <a
            href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            >数量詞</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <a
          href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes"
          >Unicode プロパティのエスケープ</a
        >
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** [もっと大きな早見表もあります](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) (個別の記事の一部を集約しただけです)。

### エスケープ

特殊文字を文字として使う必要がある場合 (例えば、実際に `"*"` を検索する場合)、その前にバックスラッシュを付けてエスケープする必要があります。
例えば、 `"a"` に `"*"` が続き、さらに `"b"` が続くものを検索するには、 `/a\*b/` と使用します。バックスラッシュは `"*"` を「エスケープ」し、特殊文字ではなく文字として扱うようにします。

同様に、もし正規表現リテラルを書いていてスラッシュ ('/') に一致させる必要がある場合は、スラッシュをエスケープする必要があります（そうしないとスラッシュでパターンが終了します）。
例えば、 "/example/" という文字列とそれに続く 1 文字以上のアルファベットを探すには、 `/\/example\/[a-z]+/i` とします。それぞれのスラッシュ前のバックスラッシュが、スラッシュを文字として扱わせます。

バックスラッシュ文字に一致させるには、バックスラッシュをエスケープする必要があります。
例えば、 "C:\" という文字列で "C" が任意の英字になる場合は、 `/[A-Z]:\\/` を使用します。最初のバックスラッシュがその次の文字をエスケープするので、この表現は単一のバックスラッシュを検索します。

`RegExp` コンストラクターに文字列リテラルを渡して使用する場合は、バックスラッシュは文字列リテラルでのエスケープ文字でもあることを思い出してください。つまり、バックスラッシュを正規表現で用いるには文字列リテラルレベルでエスケープする必要があります。
`/a\*b/` と `new RegExp("a\\*b")` は同じ表現を生成するものであり、 "a" の次に "\*"、その次に "b" があるものを探します。

エスケープ文字がパターンに含まれていない場合は、 {{jsxref('String.prototype.replace()')}} を使用して追加することができます。

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& は一致した部分文字列全体を意味します
}
```

正規表現の後の "g" はグローバルサーチを行うオプション/フラグで、文字列全体を見て一致したものをすべて返します。
下の[フラグを用いた高度な検索](#フラグを用いた高度な検索)に詳しく説明されています。

_なぜこれが JavaScript に組み込まれていないのでしょうか？_ RegExp にそのような関数を追加する[提案](https://github.com/tc39/proposal-regex-escaping)があります。

### 括弧の使用

正規表現パターンの一部を括弧で囲むことで、一致した部分文字列を記憶しておくことができます。
いったん記憶されれば、後からその部分文字列を呼び出すことができます。これに関しては[グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences#using_groups)で説明しています。

## JavaScriptでの正規表現の使い方

正規表現は、 {{jsxref("RegExp")}} の {{jsxref("RegExp/test", "test()")}} と {{jsxref("RegExp/exec", "exec()")}} メソッド、 {{jsxref("String")}} の {{jsxref("String/match", "match()")}}、{{jsxref("String/replace", "replace()")}}、{{jsxref("String/search", "search()")}}、{{jsxref("String/split", "split()")}} メソッドとともに使用します。

| メソッド                                        | 説明                                                                                                             |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | 文字列内で一致するものの検索を実行します。結果情報の配列を返します。一致するものがなければ `null` を返します。   |
| {{jsxref("RegExp/test", "test()")}}             | 文字列内で一致するものがあるか検査します。 `true` または `false` を返します。                                    |
| {{jsxref("String/match", "match()")}}           | キャプチャグループを含む、すべての一致するものを含む配列を返します。一致するものがない場合は `null` を返します。 |
| {{jsxref("String/matchAll", "matchAll()")}}     | キャプチャグループを含む、すべての一致するものを含むイテレーターを返します。                                     |
| {{jsxref("String/search", "search()")}}         | 文字列内で一致するものがあるか検査します。一致した位置を返します。検索に失敗した場合は `-1` を返します。         |
| {{jsxref("String/replace", "replace()")}}       | 文字列内で一致するものを一つ検索し、一致した部分文字列を置換する部分文字列で置換します。                         |
| {{jsxref("String/replaceAll", "replaceAll()")}} | 文字列内で一致するものすべてを検索し、一致した部分文字列を置換する部分文字列で置換します。                       |
| {{jsxref("String/split", "split()")}}           | 正規表現または固定文字列を用いて文字列を分割し、部分文字列の配列に入れます。                                     |

あるパターンが文字列に存在するかを知りたいときは、`test()` または `search()` メソッドを使用してください。詳細な情報が知りたいときは (実行時間が長くなりますが) `exec()` または `match()` メソッドを使用してください。
`exec()` や `match()` を使用して一致した場合、これらのメソッドは配列を返し、関連する正規表現オブジェクトと定義済みオブジェクトである `RegExp` オブジェクトのプロパティを更新します。
一致しなかった場合、 `exec` メソッドは `null` （`false` に変換される値）を返します。

次の例では、`exec()` メソッドを使用して文字列を検索します。

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

正規表現のプロパティにアクセスする必要がない場合、 `myArray` を作成するもう一つの方法はこのスクリプトの通りです。

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// 'cdbbdbsbz'.match(/d(b+)d/g) と同様。ただし、
// 'cdbbdbsbz'.match(/d(b+)d/g) は配列 [ "dbbd" ] を出力するのに対し、
// /d(b+)d/g.exec('cdbbdbsbz') は配列 [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ] を出力する。
```

(異なる動作についての詳しい情報は[`exec()` のグローバル検索フラグの使用](#exec_におけるグローバル検索の使用)を参照してください。)

ある文字列から正規表現を組み立てたい場合は、次のスクリプトのような方法があります。

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

これらのスクリプトでは一致したものがあると、配列を返すとともに次表で示されるプロパティを更新します。

<table class="standard-table">
  <caption>
    正規表現の実行結果
  </caption>
  <thead>
    <tr>
      <th scope="col">オブジェクト</th>
      <th scope="col">プロパティまたはインデックス</th>
      <th scope="col">説明</th>
      <th scope="col">この例の場合</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>一致した文字列と、すべての記憶された部分文字列です。</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>入力文字列で一致した位置を示す、0 から始まる位置です。</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>元の文字列です。</td>
      <td><code>'cdbbdbsbz'</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>最後に一致した文字列です。</td>
      <td><code>'dbbd'</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>次の検索が始まる位置です。
        （このプロパティは、g オプションを用いる正規表現でのみセットされます。
        これについては<a href="#フラグを用いた高度な検索">フラグを用いた高度な検索</a>で説明します。）
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        パターンのテキストです。正規表現の実行時ではなく作成時に更新されます。
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

この例の 2 つ目の形式で示したように、オブジェクト初期化子で作成した正規表現は、変数に代入せずに使用することができます。
しかし、そうすると出現するたびに新しい正規表現になります。
このため、変数に代入せずにこの形式を使用すると、その後、その正規表現のプロパティにアクセスできません。
例えば、次のようなスクリプトがあるとします。

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${myRe.lastIndex}`);

// "The value of lastIndex is 5"
```

しかし、このスクリプトの場合は次のようになります。

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${/d(b+)d/g.lastIndex}`);

// "The value of lastIndex is 0"
```

この 2 つの文中の `/d(b+)d/g` は異なる正規表現オブジェクトであるため、 `lastIndex` プロパティの値も異なります。
オブジェクト初期化子で作成した正規表現のプロパティにアクセスする必要がある場合は、まずその正規表現を変数に代入する必要があります。

### フラグを用いた高度な検索

正規表現には、グローバル検索や大文字小文字を区別しない検索などの機能を実現する 6 種類のオプションフラグがあります。
これらのフラグは、個別に使用することも一緒に使用することもでき、順序は問いません。正規表現の一部に含まれます。

| フラグ | 説明                                                                                                                                                      | 対応するプロパティ                            |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `d`    | 一致した部分文字列の位置を生成します。                                                                                                                    | {{jsxref("RegExp/hasIndices", "hasIndices")}} |
| `g`    | グローバル検索を行います。                                                                                                                                | {{jsxref("RegExp/global", "global")}}         |
| `i`    | 大文字・小文字を区別しない検索です。                                                                                                                      | {{jsxref("RegExp/ignoreCase", "ignoreCase")}} |
| `m`    | 複数行の検索です。                                                                                                                                        | {{jsxref("RegExp/multiline", "multiline")}}   |
| `s`    | `.` が改行文字に一致するようにします。                                                                                                                    | {{jsxref("RegExp/dotAll", "dotAll")}}         |
| `u`    | "unicode" です。パターンを一連の Unicode コードポイントとして扱います。                                                                                   | {{jsxref("RegExp/unicode", "unicode")}}       |
| `y`    | 対象文字列の現在の位置から始まる部分に一致するものを探す「先頭固定」 (sticky) 検索を行います。 {{jsxref("RegExp.sticky", "sticky")}} を参照してください。 | {{jsxref("RegExp/sticky", "sticky")}}         |

フラグを正規表現に含めるには、次のようにしてください。

```js
const re = /pattern/flags;
```

または

```js
const re = new RegExp("pattern", "flags");
```

フラグは正規表現を作る際になくてはならないものであることに注意してください。後から加えたり取り除いたりすることはできません。

例えば `re = /\w+\s/g` は、1 個以上の文字とそれに続くスペースを探す正規表現を作成します。また、正規表現は文字列全体を通してこの組み合わせを探します。

```js
const re = /\w+\s/g;
const str = "fee fi fo fum";
const myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

この例ではこの行、

```js
const re = /\w+\s/g;
```

をこの行、

```js
const re = new RegExp("\\w+\\s", "g");
```

に置き換えることができます。得られる結果は同じです。

`m` フラグは、複数行の入力文字列を複数行として扱うことを指定するために使用します。
`m` フラグを使用すると、 `^` と `$` は、文字列全体ではなく、入力文字列内の任意の行の先頭または末尾に一致します。

#### exec() におけるグローバル検索の使用

{{jsxref("RegExp.prototype.exec()")}} メソッドに `g` フラグを付けると、それぞれ一致した値とその位置を繰り返し返します。

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

これに対して、 {{jsxref("String.prototype.match()")}} メソッドは、すべての一致値を一度に返しますが、その位置は含まれません。

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Unicode 正規表現の使用

"u" フラグは "unicode" 正規表現を作成するために使われます。つまり、 Unicode テキストに一致するように対応している正規表現です。これは主に [Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) の使用によって実現され、これは "unicode" 正規表現の中でだけ対応します。

例えば、次のような正規表現を使用して、任意の Unicode の「語」と照合することができます。

```js
/\p{L}*/u;
```

Unicode 正規表現と非 Unicode 正規表現との間には、他にも注意すべき違いがいくつかあります。

- Unicode の正規表現はいわゆる "identity escape" に対応していません。つまり、バックスラッシュをエスケープする必要がなく、事実上無視されるパターンです。例えば、 `/\a/` は文字 'a' に一致する有効な正規表現ですが、 `/\a/u` はそうではありません。
- 波括弧は[数量詞](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)として使用されない場合は、エスケープする必要がありま す。例えば、`/{/` は中括弧 '{' に一致する有効な正規表現ですが、`/{/u` はそうではありません - 代わりに、中括弧をエスケープして `/\\{/u` を使用しなければなりません。
- `-` の文字は文字クラスの中では異なった解釈をされます。特に、 Unicode の正規表現では、 `-` は文字クラスの先頭または末尾に現れた場合にのみ、リテラルの `-` として解釈されます（範囲指定の一部にはなりません）。例えば、 `/[\w-:]/` は単語、`-`、または `:` に一致する有効な正規表現ですが、 `/\w-:/u` は無効な正規表現です。 `\w` から `:` という範囲は文字の範囲としてきちんと定義されていないので、無効な正規表現だからです。

Unicode の正規表現は、同様に異なる動作をします。 [`RegExp.prototype.unicode`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) には、これに関するより詳しい説明があります。

## 例

> **メモ:** 複数の例が次の場所にあります。
>
> - {{jsxref("RegExp/exec", "exec()")}}、{{jsxref("RegExp/test", "test()")}}、{{jsxref("String/match", "match()")}}、{{jsxref("String/matchAll", "matchAll()")}}、{{jsxref("String/search", "search()")}}、{{jsxref("String/replace", "replace()")}}、{{jsxref("String/split", "split()")}} のリファレンスページ
> - ガイド記事の[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)、[アサーション](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)、[グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)、[数量詞](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)、[Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

### 特殊文字を用いた入力の確認

次の例では、ユーザーが電話番号を入力することを想定しています。
ユーザーが [チェック] ボタンを押すと、スクリプトはその番号の有効性をチェックします。
番号が有効な場合 (正規表現で指定された文字列に一致した場合)、スクリプトはユーザーへの感謝と番号の確認を示すメッセージを表示します。
番号が無効な場合、スクリプトはユーザーに電話番号が無効であることを通知します。

この正規表現は次のものを探します。

1. データの行の先頭: `^`
2. 3 桁の数字 `\d{3}` または `|` 左括弧 `\(` の次に 3 桁の数字 `\d{3}` の次に閉じ括弧 `\)` で、これはキャプチャグループでないもの `(?:)` に入っています。
3. 続いてダッシュ 1 つ、スラッシュ、小数点のうちの何れかがキャプチャグループ `()` に入っているもの
4. 続いて 3 桁の数字 `\d{3}`
5. 続いて (最初の) キャプチャグループ内で記憶されているものに一致するもの `\1`
6. 続いて 4 桁の数字 `\d{4}`
7. 続いてデータの行の末尾: `$`

#### HTML

```html
<p>
  電話番号（市外局番含む）を入力して "チェック" をクリックしてください。
  <br />
  適切な形式は ###-###-#### などです。
</p>
<form id="form">
  <input id="phone" />
  <button type="submit">チェック</button>
</form>
<p id="output"></p>
```

#### JavaScript

```js
const form = document.querySelector("#form");
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value);

  output.textContent = ok
    ? `ありがとう、あなたの電話番号は ${ok[0]}`
    : `${phoneInput.value} は市外局番付き電話番号ではありません！`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(input);
});
```

#### 結果

{{ EmbedLiveSample('Using_special_characters_to_verify_input') }}

## ツール

- [RegExr](https://regexr.com/)
  - : 正規表現を学び、構築し、テストするためのオンラインツールです。
- [Regex tester](https://regex101.com/)
  - : オンライン正規表現ビルダー/デバッガー
- [Regex interactive tutorial](https://regexlearn.com/)
  - : オンラインのインタラクティブなチュートリアル、早見表、プレイグラウンド。
- [Regex visualizer](https://extendsclass.com/regex-tester.html)
  - : オンラインのビジュアルな正規表現テスターです。

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
