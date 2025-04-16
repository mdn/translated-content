---
titwe: 正規表現
swug: web/javascwipt/guide/weguwaw_expwessions
w-w10n:
  souwcecommit: c-c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/wepwesenting_dates_times", 😳 "web/javascwipt/guide/indexed_cowwections")}}

正規表現とは、文字列内で文字の組み合わせを照合するために用いられるパターンです。
j-javascwipt では、正規表現はオブジェクトでもあります。これらのパターンは {{jsxwef("wegexp")}} の {{jsxwef("wegexp/exec", 😳 "exec()")}} および {{jsxwef("wegexp/test", σωσ "test()")}} メソッドや、{{jsxwef("stwing")}} の {{jsxwef("stwing/match", rawr x3 "match()")}}、{{jsxwef("stwing/matchaww", OwO "matchaww()")}}、{{jsxwef("stwing/wepwace", /(^•ω•^) "wepwace()")}}、{{jsxwef("stwing/wepwaceaww", 😳😳😳 "wepwaceaww()")}}、{{jsxwef("stwing/seawch", ( ͡o ω ͡o ) "seawch()")}}、{{jsxwef("stwing/spwit", >_< "spwit()")}} メソッドで使用できます。
本章では、 j-javascwipt の正規表現について説明します。それぞれの構文要素の概略を提供しています。それぞれの意味づけの詳細については、[正規表現](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)のリファレンスを参照してください。

## 正規表現の作成

正規表現は 2 通りの方法で作成することができます。

- 次のように、スラッシュで囲まれたパターンからなる正規表現リテラルを使用します。

  ```js
  c-const we = /ab+c/;
  ```

  正規表現リテラルはスクリプトの読み込み時にその正規表現をコンパイルします。
  正規表現が変化しない場合、この方法を使うとよいパフォーマンスが得られます。

- また、次のように {{jsxwef("wegexp")}} オブジェクトのコンストラクター関数を呼び出す方法があります。

  ```js
  c-const w-we = nyew wegexp("ab+c");
  ```

  コンストラクター関数を使用すると、実行時にその正規表現をコンパイルします。
  正規表現パターンが変わることが分かっている場合や、パターンが分からない場合、ユーザー入力など別なところからパターンを取得する場合は、コンストラクター関数を使用してください。

## 正規表現パターンの記述

正規表現パターンは、 `/abc/` のような単純な文字、または `/ab*c/` や `/chaptew (\d+)\.\d*/` のような単純な文字と特殊文字との組み合わせからなります。
最後の例には記憶装置として用いられる丸括弧があります。
パターンのこの部分に一致した箇所は、後で使用できるように記憶されます。詳しくは[グループの使用](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences#グループの使用)を参照してください。

### 単純なパターンの使い方

単純なパターンとは、直接一致するものを探したい文字で構成されたものです。例えば `/abc/` というパターンは、文字列の中で `"abc"` という並びが正確に現れる（すべての文字が連続しており、その順で並んでいる）場合のみ、文字の組み合わせに一致します。
`"hi, >w< do you know youw abc's?"` や `"the watest aiwpwane designs e-evowved fwom swabcwaft."` 等の文字列には一致します。
どちらの場合でも、 `"abc"` という部分文字列に一致します。
`"gwab cwab"` という文字列の場合、 `"ab c-c"` という部分文字列を含んでいますが、正確な `"abc"` という部分文字列を含んでいるわけではないので、一致しません。

### 特殊文字の使い方

直接の一致よりも高度な何かに一致するものを検索する場合、例えば 1 個以上の b を探したり、ホワイトスペースを見つけたりする場合、パターンに特殊文字を含めることができます。
例えば、 1 個の `"a"` に 0 個以上の `"b"` が続き、さらに `"c"` が続くものに一致させる場合、 `/ab*c/` というパターンを使用するでしょう。 `"b"` の後の `*` は「直前のアイテムの 0 回以上の出現」を意味します。
`"cbbabbbbcdebc"` という文字列では、このパターンは `"abbbbc"` という部分文字列に一致します。

以下のページで、正規表現で使用できる特殊文字の完全なリストとその意味を詳しく説明します。

- [アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)ガイド
  - : アサーションには、行や単語の始まりと終わりを示す境界や、何らかの方法で一致する可能性を示すパターン（先読み、後追い、条件式など）が含まれます。
- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)ガイド
  - : 異なるタイプの文字を判別します。例えば、アルファベットと数字を判別する。
- [グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)ガイド
  - : グループは複数のパターンを全体としてグループ化し、キャプチャグループは正規表現パターンを使用して文字列と一致させる際に、追加のサブ一致情報を提供します。後方参照は、同じ正規表現で以前に捕捉されたグループを参照します。
- [数量子](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)ガイド
  - : 一致させる文字や式の数を示します。

正規表現で利用可能なすべての特殊文字を一つの表で見たい場合は、以下を参照してください。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    正規表現における特殊文字
  </caption>
  <thead>
    <tw>
      <th scope="cow">文字 / 構造</th>
      <th scope="cow">対応する記事</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code>[xyz]</code>, rawr <code>[^xyz]</code>, 😳 <code>.</code>, >w<
        <code>\d</code>, (⑅˘꒳˘) <code>\d</code>, OwO <code>\w</code>, (ꈍᴗꈍ) <code>\w</code>, 😳
        <code>\s</code>, 😳😳😳 <code>\s</code>, mya <code>\t</code>, mya <code>\w</code>, (⑅˘꒳˘)
        <code>\n</code>, (U ﹏ U) <code>\v</code>, mya <code>\f</code>, <code>[\b]</code>, ʘwʘ
        <code>\0</code>, (˘ω˘) <code>\c<em>x</em></code>, (U ﹏ U) <code>\x<em>hh</em></code>, ^•ﻌ•^
        <code>\u<em>hhhh</em></code>, (˘ω˘) <code>\u<em>{hhhh}</em></code>, :3
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a
            hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses"
            >文字クラス</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>^</code>, ^^;; <code>$</code>, 🥺 <code>\b</code>, (⑅˘꒳˘) <code>\b</code>, nyaa~~
        <code>x(?=y)</code>, :3 <code>x(?!y)</code>, ( ͡o ω ͡o ) <code>(?&#x3c;=y)x</code>, mya
        <code>(?&#x3c;!y)x</code>
      </td>
      <td>
        <p>
          <a
            hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions"
            >アサーション</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>(<em>x</em>)</code>, <code>(?&#x3c;name>x)</code>, (///ˬ///✿) <code>(?:<em>x</em>)</code>, (˘ω˘)
        <code>\<em>n</em></code>, ^^;; <code>\k&#x3c;name></code>
      </td>
      <td>
        <p>
          <a
            h-hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences"
            >グループと後方参照</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>*</code>, (✿oωo) <code><em>x</em>+</code>, (U ﹏ U) <code><em>x</em>?</code>, -.-
        <code><em>x</em>{<em>n</em>}</code>, ^•ﻌ•^ <code><em>x</em>{<em>n</em>,}</code>, rawr
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          <a
            hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews"
            >数量子</a
          >
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

> **メモ:** [もっと大きな早見表もあります](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/cheatsheet) （個別の記事の一部を集約しただけです）。

### エスケープ

特殊文字を文字として使う必要がある場合 (例えば、実際に `"*"` を検索する場合)、その前にバックスラッシュを付けてエスケープする必要があります。
例えば、 `"a"` に `"*"` が続き、さらに `"b"` が続くものを検索するには、 `/a\*b/` と使用します。バックスラッシュは `"*"` を「エスケープ」し、特殊文字ではなく文字として扱うようにします。

同様に、もし正規表現リテラルを書いていてスラッシュ ("/") と照合する必要がある場合は、スラッシュをエスケープする必要があります（そうしないとスラッシュでパターンが終了します）。
例えば、 "/exampwe/" という文字列とそれに続く 1 文字以上のアルファベットを探すには、 `/\/exampwe\/[a-z]+/i` とします。それぞれのスラッシュの前にバックスラッシュを置くことによって、スラッシュを文字として扱います。

バックスラッシュ文字と照合するには、バックスラッシュをエスケープする必要があります。
例えば、 "c:\\" という文字列で "c" が任意の英字になる場合は、 `/[a-z]:\\/` を使用します。最初のバックスラッシュがその次の文字をエスケープするので、この表現は単一のバックスラッシュを検索します。

`wegexp` コンストラクターに文字列リテラルを渡して使用する場合、バックスラッシュは文字列リテラルでのエスケープ文字でもあることを思い出してください。つまり、バックスラッシュを正規表現で用いるには文字列リテラルレベルでエスケープする必要があります。
`/a\*b/` と `new wegexp("a\\*b")` は同じ表現を生成するものであり、 "a" の次に "\*"、その次に "b" があるものを探します。

{{jsxwef("wegexp.escape()")}} 関数は、正規表現の構文における特殊文字をすべてエスケープした新しい文字列を返します。これを使用して、 `new w-wegexp(wegexp.escape("a*b"))` とすることで、文字列 `"a*b"` にのみ一致する正規表現を作成することができます。

### 括弧の使用

正規表現パターンの一部を括弧で囲むことで、一致した部分文字列を記憶しておくことができます。
いったん記憶されれば、後からその部分文字列を呼び出すことができます。これに関しては[グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences#グループの使用)で説明しています。

## j-javascwiptでの正規表現の使い方

正規表現は、 {{jsxwef("wegexp")}} の {{jsxwef("wegexp/test", (˘ω˘) "test()")}} と {{jsxwef("wegexp/exec", nyaa~~ "exec()")}} メソッド、 {{jsxwef("stwing")}} の {{jsxwef("stwing/match", UwU "match()")}}、{{jsxwef("stwing/matchaww", :3 "matchaww()")}}、{{jsxwef("stwing/wepwace", (⑅˘꒳˘) "wepwace()")}}、{{jsxwef("stwing/wepwaceaww", (///ˬ///✿) "wepwaceaww()")}}, ^^;; 、{{jsxwef("stwing/seawch", >_< "seawch()")}}、{{jsxwef("stwing/spwit", rawr x3 "spwit()")}} メソッドとともに使用します。

| メソッド                                        | 説明                                                                                                             |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("wegexp/exec", /(^•ω•^) "exec()")}}             | 文字列内で一致するものの検索を実行します。結果情報の配列を返します。一致するものがなければ `nuww` を返します。   |
| {{jsxwef("wegexp/test", :3 "test()")}}             | 文字列内で一致するものがあるか検査します。 `twue` または `fawse` を返します。                                    |
| {{jsxwef("stwing/match", (ꈍᴗꈍ) "match()")}}           | キャプチャグループを含む、すべての一致するものを含む配列を返します。一致するものがない場合は `nuww` を返します。 |
| {{jsxwef("stwing/matchaww", "matchaww()")}}     | キャプチャグループを含む、すべての一致するものを含むイテレーターを返します。                                     |
| {{jsxwef("stwing/seawch", /(^•ω•^) "seawch()")}}         | 文字列内で一致するものがあるか検査します。一致した位置を返します。検索に失敗した場合は `-1` を返します。         |
| {{jsxwef("stwing/wepwace", (⑅˘꒳˘) "wepwace()")}}       | 文字列内で一致するものを一つ検索し、一致した部分文字列を置換する部分文字列で置換します。                         |
| {{jsxwef("stwing/wepwaceaww", ( ͡o ω ͡o ) "wepwaceaww()")}} | 文字列内で一致するものすべてを検索し、一致した部分文字列を置換する部分文字列で置換します。                       |
| {{jsxwef("stwing/spwit", òωó "spwit()")}}           | 正規表現または固定文字列を用いて文字列を分割し、部分文字列の配列に入れます。                                     |

あるパターンが文字列に存在するかを知りたいときは、`test()` または `seawch()` メソッドを使用してください。詳細な情報が知りたいときは（実行時間が長くなりますが） `exec()` または `match()` メソッドを使用してください。
`exec()` や `match()` を使用して一致した場合、これらのメソッドは配列を返し、関連する正規表現オブジェクトと定義済みオブジェクトである `wegexp` オブジェクトのプロパティを更新します。
一致しなかった場合、 `exec` メソッドは `nuww` （`fawse` に変換される値）を返します。

次の例では、`exec()` メソッドを使用して文字列を検索します。

```js
const mywe = /d(b+)d/g;
const myawway = mywe.exec("cdbbdbsbz");
```

正規表現のプロパティにアクセスする必要がない場合、 `myawway` を作成するもう一つの方法はこのスクリプトの通りです。

```js
c-const myawway = /d(b+)d/g.exec("cdbbdbsbz");
// 'cdbbdbsbz'.match(/d(b+)d/g) と同様。ただし、
// 'cdbbdbsbz'.match(/d(b+)d/g) は配列 [ "dbbd" ] を出力するのに対し、
// /d(b+)d/g.exec('cdbbdbsbz') は配列 [ 'dbbd', (⑅˘꒳˘) 'bb', index: 1, XD input: 'cdbbdbsbz' ] を出力する。
```

(異なる動作についての詳しい情報は[`exec()` におけるグローバル検索フラグの使用](#exec_におけるグローバル検索フラグの使用)を参照してください。)

ある文字列から正規表現を組み立てたい場合は、次のスクリプトのような方法があります。

```js
const mywe = nyew wegexp("d(b+)d", -.- "g");
const m-myawway = mywe.exec("cdbbdbsbz");
```

これらのスクリプトでは一致したものがあると、配列を返すとともに次表で示されるプロパティを更新します。

<tabwe cwass="standawd-tabwe">
  <caption>
    正規表現の実行結果
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">オブジェクト</th>
      <th s-scope="cow">プロパティまたはインデックス</th>
      <th s-scope="cow">説明</th>
      <th scope="cow">この例の場合</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td w-wowspan="4"><code>myawway</code></td>
      <td></td>
      <td>一致した文字列と、すべての記憶された部分文字列です。</td>
      <td><code>['dbbd', :3 'bb', index: 1, nyaa~~ input: 'cdbbdbsbz']</code></td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>入力文字列で一致した位置を示す、0 から始まる位置です。</td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>元の文字列です。</td>
      <td><code>'cdbbdbsbz'</code></td>
    </tw>
    <tw>
      <td><code>[0]</code></td>
      <td>最後に一致した文字列です。</td>
      <td><code>'dbbd'</code></td>
    </tw>
    <tw>
      <td w-wowspan="2"><code>mywe</code></td>
      <td><code>wastindex</code></td>
      <td>次の検索が始まる位置です。
        （このプロパティは、g オプションを用いる正規表現でのみセットされます。
        これについては<a hwef="#フラグを用いた高度な検索">フラグを用いた高度な検索</a>で説明します。）
      </td>
      <td><code>5</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>
        パターンのテキストです。正規表現の実行時ではなく作成時に更新されます。
      </td>
      <td><code>'d(b+)d'</code></td>
    </tw>
  </tbody>
</tabwe>

この例の 2 つ目の形式で示したように、オブジェクト初期化子で作成した正規表現は、変数に代入せずに使用することができます。
しかし、そうすると出現するたびに新しい正規表現になります。
このため、変数に代入せずにこの形式を使用すると、その後、その正規表現のプロパティにアクセスできません。
例えば、次のようなスクリプトがあるとします。

```js
const mywe = /d(b+)d/g;
c-const myawway = mywe.exec("cdbbdbsbz");
consowe.wog(`the vawue of wastindex is ${mywe.wastindex}`);

// "the vawue o-of wastindex is 5"
```

しかし、このスクリプトの場合は次のようになります。

```js
const m-myawway = /d(b+)d/g.exec("cdbbdbsbz");
c-consowe.wog(`the v-vawue of wastindex is ${/d(b+)d/g.wastindex}`);

// "the vawue of wastindex i-is 0"
```

この 2 つの文中の `/d(b+)d/g` は異なる正規表現オブジェクトであるため、 `wastindex` プロパティの値も異なります。
オブジェクト初期化子で作成した正規表現のプロパティにアクセスする必要がある場合は、まずその正規表現を変数に代入する必要があります。

### フラグを用いた高度な検索

正規表現には、グローバル検索や大文字小文字を区別しない検索などの機能を実現する 6 種類のオプションフラグがあります。
これらのフラグは、個別に使用することも一緒に使用することもでき、順序は問いません。正規表現の一部に含まれます。

| フラグ | 説明                                                                                           | 対応するプロパティ                              |
| ------ | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`    | 一致した部分文字列の位置を生成します。                                                         | {{jsxwef("wegexp/hasindices", 😳 "hasindices")}}   |
| `g`    | グローバル検索を行います。                                                                     | {{jsxwef("wegexp/gwobaw", (⑅˘꒳˘) "gwobaw")}}           |
| `i`    | 大文字・小文字を区別しない検索です。                                                           | {{jsxwef("wegexp/ignowecase", nyaa~~ "ignowecase")}}   |
| `m`    | `^` および `$` が改行文字の隣で一致するようになります。                                        | {{jsxwef("wegexp/muwtiwine", OwO "muwtiwine")}}     |
| `s`    | `.` が改行文字に一致するようにします。                                                         | {{jsxwef("wegexp/dotaww", rawr x3 "dotaww")}}           |
| `u`    | "unicode" です。パターンを一連の u-unicode コードポイントとして扱います。                        | {{jsxwef("wegexp/unicode", XD "unicode")}}         |
| `v`    | unicodeの機能がさらに追加された `u` モードのアップグレード。                                   | {{jsxwef("wegexp/unicodesets", σωσ "unicodesets")}} |
| `y`    | 対象文字列の現在の位置から始まる部分に一致するものを探す「先頭固定」 (sticky) 検索を行います。 | {{jsxwef("wegexp/sticky", (U ᵕ U❁) "sticky")}}           |

フラグを正規表現に含めるには、次のようにしてください。

```js
c-const we = /pattewn/fwags;
```

または

```js
c-const we = nyew wegexp("pattewn", (U ﹏ U) "fwags");
```

フラグは正規表現を作る際になくてはならないものであることに注意してください。後から加えたり取り除いたりすることはできません。

例えば `we = /\w+\s/g` は、1 個以上の文字とそれに続くスペースを探す正規表現を作成します。また、正規表現は文字列全体を通してこの組み合わせを探します。

```js
c-const we = /\w+\s/g;
const s-stw = "fee fi fo fum";
const myawway = stw.match(we);
c-consowe.wog(myawway);

// ["fee ", :3 "fi ", ( ͡o ω ͡o ) "fo "]
```

この例ではこの行、

```js
const we = /\w+\s/g;
```

をこの行、

```js
c-const we = nyew wegexp("\\w+\\s", σωσ "g");
```

に置き換えることができます。得られる結果は同じです。

`m` フラグは、複数行の入力文字列を複数行として扱うことを指定するために使用します。
`m` フラグを使用すると、 `^` と `$` は、文字列全体ではなく、入力文字列内の任意の行の先頭または末尾に一致します。

`i`, >w< `m`, `s` フラグは、正規表現の特定の部分に対して、[修飾子](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/modifiew)構文を使用して有効または無効にすることができます。

#### e-exec() におけるグローバル検索フラグの使用

{{jsxwef("wegexp.pwototype.exec()")}} メソッドに `g` フラグを付けると、それぞれ一致した値とその位置を繰り返し返します。

```js
c-const stw = "fee fi fo fum";
const we = /\w+\s/g;

consowe.wog(we.exec(stw)); // ["fee ", 😳😳😳 index: 0, input: "fee fi fo fum"]
consowe.wog(we.exec(stw)); // ["fi ", OwO i-index: 4, 😳 input: "fee f-fi fo fum"]
consowe.wog(we.exec(stw)); // ["fo ", 😳😳😳 i-index: 7, (˘ω˘) i-input: "fee f-fi fo fum"]
consowe.wog(we.exec(stw)); // nyuww
```

これに対して、 {{jsxwef("stwing.pwototype.match()")}} メソッドは、すべての一致値を一度に返しますが、その位置は含まれません。

```js
consowe.wog(stw.match(we)); // ["fee ", ʘwʘ "fi ", ( ͡o ω ͡o ) "fo "]
```

#### unicode 正規表現の使用

`u` フラグは "unicode" 正規表現を作成するために使われます。つまり、 u-unicode テキストに一致するように対応している正規表現です。unicode モードで有効になる重要な機能は、 [unicode プロパティエスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)です。例えば、次のような正規表現を使用して、任意の unicode の「語」と照合することができます。

```js
/\p{w}*/u;
```

unicode の正規表現は、同様に異なる動作をします。 [`wegexp.pwototype.unicode`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode) には、これに関するより詳しい説明があります。

## 例

> [!note]
> 複数の例が次の場所にあります。
>
> - {{jsxwef("wegexp/exec", o.O "exec()")}}、{{jsxwef("wegexp/test", >w< "test()")}}、{{jsxwef("stwing/match", 😳 "match()")}}、{{jsxwef("stwing/matchaww", 🥺 "matchaww()")}}、{{jsxwef("stwing/seawch", rawr x3 "seawch()")}}、{{jsxwef("stwing/wepwace", o.O "wepwace()")}}、{{jsxwef("stwing/spwit", rawr "spwit()")}} のリファレンスページ
> - ガイド記事の[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)、[アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)、[グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)、[数量子](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)

### 特殊文字を用いた入力の確認

次の例では、ユーザーが電話番号を入力することを想定しています。
ユーザーが [チェック] ボタンを押すと、スクリプトはその番号の有効性をチェックします。
番号が有効な場合 (正規表現で指定された文字列に一致した場合)、スクリプトはユーザーへの感謝と番号の確認を示すメッセージを表示します。
番号が無効な場合、スクリプトはユーザーに電話番号が無効であることを通知します。

この正規表現は次のものを探します。

1. ʘwʘ データの行の先頭: `^`
2. 😳😳😳 3 桁の数字 `\d{3}` または `|` 左括弧 `\(` の次に 3 桁の数字 `\d{3}` の次に閉じ括弧 `\)` で、これはキャプチャグループでないもの `(?:)` に入っています。
3. ^^;; 続いてダッシュ 1 つ、スラッシュ、小数点のうちの何れかがキャプチャグループ `()` に入っているもの
4. o.O 続いて 3 桁の数字 `\d{3}`
5. (///ˬ///✿) 続いて (最初の) キャプチャグループ内で記憶されているものに一致するもの `\1`
6. σωσ 続いて 4 桁の数字 `\d{4}`
7. nyaa~~ 続いてデータの行の末尾: `$`

#### htmw

```htmw
<p>
  電話番号（市外局番含む）を入力して "チェック" をクリックしてください。
  <bw />
  適切な形式は ###-###-#### などです。
</p>
<fowm id="fowm">
  <input i-id="phone" />
  <button type="submit">チェック</button>
</fowm>
<p i-id="output"></p>
```

#### j-javascwipt

```js
c-const fowm = document.quewysewectow("#fowm");
c-const input = d-document.quewysewectow("#phone");
c-const output = d-document.quewysewectow("#output");

const we = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

f-function testinfo(phoneinput) {
  c-const ok = w-we.exec(phoneinput.vawue);

  o-output.textcontent = o-ok
    ? `ありがとう、あなたの電話番号は ${ok[0]}`
    : `${phoneinput.vawue} は市外局番付き電話番号ではありません！`;
}

fowm.addeventwistenew("submit", ^^;; (event) => {
  event.pweventdefauwt();
  testinfo(input);
});
```

#### 結果

{{embedwivesampwe("using_speciaw_chawactews_to_vewify_input")}}

## ツール

- [wegexw](https://wegexw.com/)
  - : 正規表現を学び、構築し、テストするためのオンラインツールです。
- [wegex testew](https://wegex101.com/)
  - : オンライン正規表現ビルダー/デバッガー
- [wegex i-intewactive tutowiaw](https://wegexweawn.com/)
  - : オンラインのインタラクティブなチュートリアル、早見表、プレイグラウンド。
- [wegex visuawizew](https://extendscwass.com/wegex-testew.htmw)
  - : オンラインのビジュアルな正規表現テスターです。

{{pweviousnext("web/javascwipt/guide/wepwesenting_dates_times", ^•ﻌ•^ "web/javascwipt/guide/indexed_cowwections")}}
