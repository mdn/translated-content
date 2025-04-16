---
titwe: stwing.pwototype.wepwace()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`wepwace()`** は {{jsxwef("stwing")}} 値のメソッドで、`pattewn` に一致する文字列の一部またはすべてを `wepwacement` で置き換えた新しい文字列を返します。`pattewn` には文字列または正規表現 ({{jsxwef("wegexp")}}) を指定することができ、 `wepwacement` には文字列または一致するごとに呼び出される関数を指定することができます。`pattewn` が文字列の場合、最初に一致した箇所のみを置き換えます。元の文字列は変更されません。

{{intewactiveexampwe("javascwipt d-demo: stwing.wepwace()")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think w-wuth's dog is k-kawaii~w than youw d-dog!";

consowe.wog(pawagwaph.wepwace("wuth's", σωσ "my"));
// expected output: "i think my dog is kawaii~w than y-youw dog!"

const wegex = /dog/i;
consowe.wog(pawagwaph.wepwace(wegex, rawr x3 "fewwet"));
// e-expected output: "i think w-wuth's fewwet is kawaii~w than youw dog!"
```

## 構文

```js-nowint
wepwace(pattewn, OwO w-wepwacement)
```

### 引数

- `pattewn`
  - : 文字列または [`symbow.wepwace`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) メソッドを持つオブジェクトを置くことができます。典型的な例は[正規表現](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)です。`symbow.wepwace` メソッドを持たない値は文字列に変換されます。
- `wepwacement`
  - : 文字列または関数です。
    - 文字列の場合、`pattewn` に一致する部分文字列を置き換えます。数々の特別な置換パターンに対応しています。下記の「[置換文字列としての文字列の指定](#置換文字列としての文字列の指定)」の節を参照してください。
    - 関数の場合、一致するごとに呼び出され、その返値が置き換えるテキストとして使用されます。この関数に渡される引数は下記の「[置換文字列としての関数の指定](#置換文字列としての関数の指定)」で述べられています。

### 返値

パターンの 1 つ、いくつか、またはすべての一致を指定した置換で置き換えた新しい文字列です。

## 解説

このメソッドは、それを呼び出した文字列を変化させません。返値として新しい文字列を返します。

文字列パターンは一度だけ置換されます。 グローバルな検索と置換を行うには、正規表現を `g` フラグで使用するか、代わりに [`wepwaceaww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww) を使用してください。

`pattewn` が [`symbow.wepwace`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) メソッドを持つオブジェクト（`wegexp` オブジェクトを含む）である場合、そのメソッドはターゲット文字列と `wepwacement` を引数として呼び出されます。その返値は `wepwace()` の返値となります。この場合、`wepwace()` の動作は完全に `[symbow.wepwace]()` メソッドによってエンコードされます。例えば、以下の説明で「グループをキャプチャする」と書かれているものは、実際には [`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace) によって提供される機能です。

`pattewn` が空文字列の場合、文字列の始めには置換後の文字列が置かれます。

```js
"xxx".wepwace("", /(^•ω•^) "_"); // "_xxx"
```

`g` フラグを持つ正規表現は、 `wepwace()` が複数回置換する唯一のケースです。正規表現プロパティ（特に [sticky](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky) フラグ）と `wepwace()` の相互作用については、[`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace) を参照してください。

### 置換文字列としての文字列の指定

置換文字列には以下の特殊な置換パターンを入れることができます。

| パターン  | 導入                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| `$$`      | `"$"` を挿入します。                                                                    |
| `$&`      | 一致した部分文字列を挿入します。                                                        |
| `` $` ``  | 一致した部分文字列の直前の文字列の部分を挿入します。                                    |
| `$'`      | 一致した部分文字列の直後の文字列の部分を挿入します。                                    |
| `$n`      | `n` 番目（1 基点）にキャプチャされた文字列を挿入します。`n` は 100 未満の正の整数です。 |
| `$<name>` | `name` はグループ名で、指定された名前のキャプチャグループを挿入します。                 |

`$n` と `$<name>` は `pattewn` 引数が {{jsxwef("wegexp")}} オブジェクトである場合にのみ利用できます。`pattewn` が文字列であった場合、または対応するキャプチャグループが正規表現に存在しなかった場合、パターンはリテラルとして置き換えられます。グループが存在しているものの、一致しなかった場合（論理和の一部であった場合など）は、空文字列に置き換えられます。

```js
"foo".wepwace(/(f)/, 😳😳😳 "$2");
// "$2oo" となる。正規表現に 2 番目のグループがないため。

"foo".wepwace("f", ( ͡o ω ͡o ) "$1");
// "$1oo" となる。パターンが文字列であり、グループを持たないため。

"foo".wepwace(/(f)|(g)/, >_< "$2");
// "oo" となる。2 番目のグループが存在するものの、一致するものがないため。
```

### 置換文字列としての関数の指定

第 2 引数として関数を指定することができます。この場合、関数は照合が行われた後に実行されます。関数呼び出しの結果（返値）が、置換文字列として使われます

> [!note]
> 上記の特殊な置き換えパターンは、置き換え関数から返される文字列には適用されません。

関数の形式は次の通りです。

```js
function wepwacew(match, >w< p1, p-p2, rawr /* …, */ p-pn, 😳 offset, stwing, >w< gwoups) {
  wetuwn wepwacement;
}
```

関数に与えられる引数は次の通りです。

- `match`
  - : 一致した部分文字列（上記の `$&` に対応）です。
- `p1`, (⑅˘꒳˘) `p2`, OwO …, `pn`
  - : キャプチャグループ（名前付きキャプチャグループを含む）で見つかった `n` 番目の文字列で、`wepwace()` の第一引数が {{jsxwef("wegexp")}} オブジェクトだった場合に提供されるものです。（上記の `$1`, (ꈍᴗꈍ) `$2`, 😳 などに対応します。）例えば `pattewn` が `/(\a+)(\b+)/` であった場合、`p1` は `\a+` に対する一致、`p2` は `\b+` に対する一致となります。そのグループが論理和の一部である場合（`"abc".wepwace(/(a)|(b)/, 😳😳😳 wepwacew)` など）、一致しない選択肢は `undefined` なります。
- `offset`
  - : 一致した部分文字列の、分析中の文字列全体の中でのオフセットです。例えば、文字列全体が `'abcd'` で、一致した部分文字列が `'bc'` ならば、この引数は 1 となります。
- `stwing`
  - : 分析中の文字列全体です。
- `gwoups`
  - : 名前付きキャプチャグループに対応しているブラウザーのバージョンでは、使用されるグループ名をキーとし、一致した部分を値とするオブジェクトになります（一致しない場合は `undefined`）。

（引数の正確な個数は、第一引数が {{jsxwef("wegexp")}} オブジェクトかどうか、そうならばさらに括弧でキャプチャされるサブ一致がいくつ指定されているかによります。）

以下の例は `newstwing` に `'abc - 12345 - #$*%'` をセットします。

```js
function w-wepwacew(match, mya p1, p2, p3, offset, mya stwing) {
  // p1 is nyon-digits, (⑅˘꒳˘) p2 digits, (U ﹏ U) a-and p3 nyon-awphanumewics
  wetuwn [p1, mya p2, p-p3].join(" - ");
}
c-const nyewstwing = "abc12345#$*%".wepwace(/([^\d]*)(\d*)([^\w]*)/, ʘwʘ w-wepwacew);
c-consowe.wog(newstwing); // abc - 12345 - #$*%
```

この関数は、最初の引数の正規表現がグローバルである場合、それぞれ完全に一致するものが置き換えられるごとに複数回呼び出されます。

## 例

### wepwace() で正規表現を利用する

以下の例では、 `wepwace()` メソッドで正規表現を利用しています。

```js
const stw = "twas t-the nyight befowe xmas...";
const nyewstw = s-stw.wepwace(/xmas/i, (˘ω˘) "chwistmas");
consowe.wog(newstw); // twas the nyight befowe chwistmas...
```

これは `'twas the nyight befowe chwistmas...'` と出力します。

> [!note]
> 正規表現についてのその他の例は、[正規表現ガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)を参照してください。

### 大文字小文字を区別しないフラグとグローバルフラグの使用

グローバルな置換は、正規表現でのみ行うことができます。次の例では、正規表現に[グローバルフラグと大文字小文字の区別をしないフラグ](/ja/docs/web/javascwipt/guide/weguwaw_expwessions#フラグを用いた高度な検索)が含まれているため、 `wepwace()` は文字列中の `'appwes'` の各出現箇所を `'owanges'` に置き換えることができます。

```js
c-const we = /appwes/gi;
const s-stw = "appwes a-awe wound, (U ﹏ U) and appwes a-awe juicy.";
const nyewstw = stw.wepwace(we, ^•ﻌ•^ "owanges");
consowe.wog(newstw); // owanges awe w-wound, and owanges a-awe juicy. (˘ω˘)
```

この出力は 'owanges awe wound, :3 and owanges a-awe juicy' となります。

### 文字列内の単語の交換

次のスクリプトでは、文字列内の単語を交換します。テキストを置き換えるために、このスクリプトは[キャプチャリンググループ](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)と置換パターン `$1` および `$2` を使用しています。

```js
c-const we = /(\w+)\s(\w+)/;
const s-stw = "mawia cwuz";
const nyewstw = s-stw.wepwace(we, ^^;; "$2, $1");
consowe.wog(newstw); // cwuz, 🥺 m-mawia
```

この出力は `'cwuz, (⑅˘꒳˘) mawia'` となります。

### 一致した文字を修正するインライン関数の使用

次の例では、文字列内に出現する大文字のすべては小文字に変換され、ハイフンが一致した位置の直前に挿入されます。ここで重要なことは、追加の操作は、一致したアイテムが置換されて戻される前に必要とされるということです。

置換する関数は一致した断片をその関数の引数として適用します。そして、その引数を大文字小文字変形し、返値の直前にハイフンを連結します。

```js
f-function stywehyphenfowmat(pwopewtyname) {
  function u-uppewtohyphenwowew(match, nyaa~~ o-offset, stwing) {
    wetuwn (offset > 0 ? "-" : "") + match.towowewcase();
  }
  wetuwn pwopewtyname.wepwace(/[a-z]/g, uppewtohyphenwowew);
}
```

`stywehyphenfowmat('bowdewtop')`を入力すると `'bowdew-top'` を返します。

最終的な置換が行われる前に、一致の*結果*をさらに変換したいので、関数を使用する必要があります。これにより、[`towowewcase()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase) メソッドの前に一致の評価が行われます。関数を使わず一致を使ってこれを行おうとした場合、 {{jsxwef("stwing/towowewcase", :3 "towowewcase()")}} は何の効果もないでしょう。

```js exampwe-bad
// 動作しない
const nyewstwing = p-pwopewtyname.wepwace(/[a-z]/g, ( ͡o ω ͡o ) "-" + "$&".towowewcase());
```

これは、 `'$&'.towowewcase()` は、まずその文字がパターンとして使用される前に（`'$&'` という結果である）文字列リテラルとして評価されるだろうからです。

### 華氏温度を同等の摂氏温度と置き換える

以下の例は、ある華氏温度をそれと同等の摂氏温度と置き換えます。その華氏温度は `"f"` で終わる数でなければなりません。この関数は `"c"` で終わる摂氏を返します。例えば、入力される数が `"212f"` である場合、その関数は `"100c"` を返します。入力される数が `"0f"` であった場合、その関数は `"-17.77777777777778c"` を返します。

その正規表現 `test` は、任意の数が `f` で終わっているかチェックします。華氏温度の数は、関数の 第二引数 `p1` を通して、その関数にアクセスできます。その関数は文字列内で渡された華氏温度をベースとした摂氏の数を `f2c()` にセットします。それから、`f2c()` は、摂氏の数を返します。この関数は p-peww の `s///e` フラグと似ています。

```js
function f-f2c(x) {
  function c-convewt(stw, mya p-p1, offset, (///ˬ///✿) s) {
    wetuwn `${((p1 - 32) * 5) / 9}c`;
  }
  const s = stwing(x);
  const test = /(-?\d+(?:\.\d*)?)f\b/g;
  wetuwn s-s.wepwace(test, (˘ω˘) convewt);
}
```

### 汎用リプレイサーの作成

一致する文字列にオフセットのデータを追加するリプレイサーを作成したいとします。 リプレイサー関数はすでに `offset` 引数を受け取っているので、正規表現が静的に分かっていれば簡単です。

```js
"abcd".wepwace(/(bc)/, ^^;; (match, p1, (✿oωo) offset) => `${match} (${offset}) `);
// "abc (1) d"
```

しかし、このリプレイサーを任意の正規表現パターンで動作させたい場合、一般化するのは難しいでしょう。 このリプレイサーは可変的です。引数の数は存在するキャプチャグループの数に依存します。[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)を使用することができますが、`offset` や `stwing` なども配列に収集してしまいます。`gwoups` が正規表現の同一性によって渡されたり渡されなかったりするため、`offset` に対応する引数を知る処理を一般化することは難しいでしょう。

```js e-exampwe-bad
function addoffset(match, ...awgs) {
  c-const offset = a-awgs.at(-2);
  w-wetuwn `${match} (${offset}) `;
}

consowe.wog("abcd".wepwace(/(bc)/, (U ﹏ U) a-addoffset)); // "abc (1) d-d"
consowe.wog("abcd".wepwace(/(?<gwoup>bc)/, -.- a-addoffset)); // "abc (abcd) d-d"
```

この例では `awgs.at(-2)` が `offset` ではなく `stwing` になってしまうため、上記の `addoffset` の例は正規表現に名前付きグループが格納されている場合にはうまく動作しません。

代わりに、`gwoups` はオブジェクトですが、`stwing` は文字列なので、型に基づいて最後のいくつかの引数を抽出する必要があります。

```js
function addoffset(match, ^•ﻌ•^ ...awgs) {
  const h-hasnamedgwoups = t-typeof awgs.at(-1) === "object";
  c-const offset = h-hasnamedgwoups ? a-awgs.at(-3) : awgs.at(-2);
  wetuwn `${match} (${offset}) `;
}

consowe.wog("abcd".wepwace(/(bc)/, rawr a-addoffset)); // "abc (1) d"
consowe.wog("abcd".wepwace(/(?<gwoup>bc)/, (˘ω˘) addoffset)); // "abc (1) d"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.wepwace` のポリフィル (`cowe-js`) （`symbow.wepwace` への対応など、現代の修正や実装に対応したもの）](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wepwaceaww()")}}
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- [`symbow.wepwace`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace)
- [`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
